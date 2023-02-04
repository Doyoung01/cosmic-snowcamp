import "./App.css";
import { Outlet, Route, Routes, useNavigate } from "react-router-dom";
import { useState } from "react";
import Chart from "./components/Chart";
import List from "./components/List";

function App() {
  let [name, setName] = useState(""); // 음식 이름 저장 변수
  let [load, setLoad] = useState(true); // 로딩 상태 관리 변수
  let [foods, setFood] = useState([]); // 검색된 음식 리스트

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Main
            setName={setName}
            name={name}
            setLoad={setLoad}
            setFood={setFood}
          />
        }
      >
        <Route path="/food" element={<List load={load} foods={foods} />} />
        <Route path="/food/chart" element={<Chart />} />
      </Route>
    </Routes>
  );
}
// <Route path='*' element={<h1>404 NOT Found. Good bye~</h1>} />

// 제목과 검색창
function Main(props) {
  let nav = useNavigate();

  return (
    <div>
      <h1>음식 영양 성분 검색기</h1>
      <div className="input-group mb-3">
        <input
          id="text"
          type="text"
          className="form-control"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
          onChange={(e) => {
            props.setName(e.target.value);
            console.log(props.name);
          }}
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
          name="btn"
          onClick={() => {
            nav("/food");
            Data(props.name, props.setLoad, props.setFood);
          }}
        >
          검색
        </button>
      </div>
      <Outlet />
    </div>
  );
}

// API 요청 후 음식 데이터를 받아 테이블로 출력
async function Data(name, setLoad, setFood) {
  let url = `http://openapi.foodsafetykorea.go.kr/api/${process.env.REACT_APP_API_KEY}/I2790/json/1/1000/DESC_KOR=${name}`;

  setLoad(true);

  const response = await fetch(url, { method: "GET" });
  let data = await response.json();

  let result = [];
  for (let i = 0; i < data["I2790"]["total_count"]; i++) {
    let tmp = [
      data["I2790"]["row"][i]["DESC_KOR"],
      data["I2790"]["row"][i]["GROUP_NAME"],
      data["I2790"]["row"][i]["MAKER_NAME"],
      data["I2790"]["row"][i]["NUTR_CONT1"],
      data["I2790"]["row"][i]["NUTR_CONT2"],
      data["I2790"]["row"][i]["NUTR_CONT3"],
      data["I2790"]["row"][i]["NUTR_CONT4"],
      data["I2790"]["row"][i]["NUTR_CONT5"],
    ];
    result.push(tmp);
  }
  setFood(result);
  setLoad(false);
}

export default App;
