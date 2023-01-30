import React from "react";
import Test from '../test.png'

function BeforeN(props) {
    return(
        props.exist? (
            <div className="container">
                <div className="row mt-3">
                    <div>N개월 전 오늘...</div>
                </div>
                <div className="row mt-3">
                    <div className="col-12 col-md-9">Title{/* 기록 제목 */}</div>
                    <div className="col-6 col-md-3 text-end">202X년 X월 XX일</div>
                </div>
                <div className="row mt-2 mb-2">
                    <div>Imoji</div>
                </div>
                <div className="row"><img className="img-fluid" src={Test} /></div>
                <div className="row mt-3">
                    <div>Content</div>
                </div>
            </div>
        ):(
            <div className="container mt-3">
                앗... 오늘의 기록은 없어요...
            </div>
        )
    )
}

export default BeforeN;