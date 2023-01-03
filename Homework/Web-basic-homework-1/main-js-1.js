function print() {
    fetch('https://my-json-server.typicode.com/smashh712/json_placeholder/members/')
    .then((response) => response.json())
    .then((data) => {
        const idx = document.getElementById('id').value;
        const lst = data[idx];

        const pname = lst['name']
        const pbirth = lst['birth']

        const person = pname + '의 생일은 ' + pbirth.slice(0, 2) + '년 ' + pbirth.slice(2, 4) + '월 ' + pbirth.slice(4) + '일 입니다.';

        const rst = document.getElementById('result');
        rst.innerHTML = person
    })
    .catch(error => console.log("Fetch Error")); // error 발생 시 처리 함수
}