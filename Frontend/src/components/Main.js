import React from "react";
import Piggy from '../piggy-bank.png';

// style={{marginTop: "150px"}}
function Main() {
    return (
        <div className="container">
            <div className="container">
                <div className="row">
                    <div className="col" />
                    <div className="col wrapper">
                        <img src={Piggy}
                            className="img-size btn content-in-wrapper"
                            alt="Piggy-bank"
                            type="button"
                            data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop"
                        />
                    </div>
                    <div className="col" />
                </div>
            </div>

            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Title{/* title(기록 제목) */}</h5>
                            <div style={{marginLeft:'280px'}}>Create-date</div>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p>Content</p>
                            {/* content(기록 내용) */}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">닫기</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;