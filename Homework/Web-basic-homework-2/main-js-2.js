function createDIV() {
    var obj = document.getElementById('new-note');
    var newDIV = document.createElement('div'); // 메모 전체(title+text+button)
    var tmpDIV = document.createElement('div'); // card body(text+button)
    var title = document.createElement('h5');
    var text = document.createElement('p');
    var button = document.createElement('button');
    var color = document.querySelector('input[name="flexRadioDefault"]:checked').value;

    // 제목(new Date) 삽입
    title.innerHTML = new Date();
    title.className = "card-header";
    title.style.backgroundColor = color;
    newDIV.appendChild(title);

    // 메모 내용 삽입
    text.innerHTML = document.getElementById('text').value;
    text.className = "card-text";
    tmpDIV.appendChild(text);

    // 삭제 버튼 삽입
    button.innerHTML = "삭제";
    button.className = "btn btn-primary"
    tmpDIV.appendChild(button);

    // card body 삽입
    tmpDIV.className = "card-body";
    newDIV.appendChild(tmpDIV);

    // 버튼 클릭 시 메모 삭제
    button.addEventListener('click', () => {
       removeAllchild(newDIV);
    })

    // 메모 전체 객체 삽입
    obj.appendChild(newDIV);
}

function removeAllchild(div) {
    while(div.hasChildNodes()) {
        div.removeChild(div.firstChild);
    }
}

/*
// Bootstrap Card

    <div class="card">
      <h5 class="card-header">Featured</h5>
      <div class="card-body">
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">삭제</a>
      </div>
    </div>

*/