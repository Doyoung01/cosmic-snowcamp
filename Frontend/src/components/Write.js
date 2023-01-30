import React, { useState } from "react";
import imojis from "../imojidata";
import '../App.css'

function Write() {
    return (
        <div className="container">
            <div className="input-group mt-5 mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">제목</span>
                </div>
                <input type="text" className="form-control" placeholder="입력..." aria-label="Username" aria-describedby="basic-addon1" />
                <label className="title-label"></label>
            </div>

            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text">내용</span>
                </div>
                <textarea className="form-control" aria-label="With" style={{height: 300,resize: 'none'}}></textarea>
            </div>

            <Selectimoji />

            <div className="input-group mt-5 mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text">사진</span>
                </div>
                <div className="custom-file">
                    <input type="file" className="custom-file-input" id="inputGroupFile01" />
                    <label className="custom-file-label" htmlFor="inputGroupFile01">파일 찾기...</label>
                </div>
            </div>
            
            <div className="container">
                <div className="row">
                    <div className="col" />
                    <div className="col text-center">
                    <button type="button" className="btn btn-secondary text-center" data-bs-dismiss="modal">등록</button>
                    </div>
                    <div className="col" />
                </div>
            </div>
        </div>
    )
}

function Selectimoji(){
    let [select, setSelect] = useState();

    return (
        <div className="container">
                <div className="row">
                    <div id="0" type="button" className={select === 0?"col text-center active":"col text-center"} onClick={() => {setSelect(0)}}>
                        <div>{imojis[0].imoji}</div>
                        <div>{imojis[0].text}</div>
                    </div>
                    <div id="1" type="button" className={select === 1?"col text-center active":"col text-center"} onClick={() => {setSelect(1)}}>
                        <div>{imojis[1].imoji}</div>
                        <div>{imojis[1].text}</div>
                    </div>
                    <div id="2" type="button" className={select === 2?"col text-center active":"col text-center"} onClick={() => {setSelect(2)}}>
                        <div>{imojis[2].imoji}</div>
                        <div>{imojis[2].text}</div>
                    </div>
                    <div id="3" type="button" className={select === 3?"col text-center active":"col text-center"} onClick={() => {setSelect(3)}}>
                        <div>{imojis[3].imoji}</div>
                        <div>{imojis[3].text}</div>
                    </div>
                    <div id="4" type="button" className={select === 4?"col text-center active":"col text-center"} onClick={() => {setSelect(4)}}>
                        <div>{imojis[4].imoji}</div>
                        <div>{imojis[4].text}</div>
                    </div>
                </div>
            </div>
    )
}

export default Write;