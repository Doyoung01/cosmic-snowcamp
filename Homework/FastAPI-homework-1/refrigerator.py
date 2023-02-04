from fastapi import FastAPI
from pydantic import BaseModel
import os

app = FastAPI()

class saveItem(BaseModel):
    name: str
    desc: str

class deleteItem(BaseModel):
    name: str

# 음식 추가
@app.post('/addfood')
async def storage(item: saveItem):
    f = open(f'./result/{item.name}.txt', 'w')
    f.writelines(item.desc)
    f.close

    return {"food_name": item.name, "description": item.desc}


# 음식 제거
@app.post('/deletefood')
async def delete(item: deleteItem):
    file_path = f'./result/{item.name}.txt'
    if os.path.isfile(file_path):
        os.remove(file_path)

    return {"deleted_food_name": item.name}


# 전체 음식 조회
@app.get('/foods')
async def get_info():
    result = []
    for name in os.listdir('./result'):
        with open(f'./result/{name}', 'r') as f:
            content = f.readlines()
            tmp = {"foodName": name, "description": content}
            result.append(tmp)

    return {"foods": result}


# 음식 개수 조회
@app.get('/foods-num')
async def get_length():
    dir = os.listdir('./result')
    return {"foodsNum": len(dir)}