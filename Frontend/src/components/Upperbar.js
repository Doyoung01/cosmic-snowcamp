import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

function Upperbar() {
    let nav = useNavigate();

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: "#e3f2fd"}}>
                <div className="container-fluid">
                    <div className="navbar-brand" onClick={() => {nav('/')}} style={{cursor: "pointer"}}>행복 저금통</div>

                    <form className="form-inline my-2 my-lg-0">
                        <button
                          className="btn btn-outline-success mr-sm-2"
                          type="button"
                          onClick={() => {
                            nav('/beforeN')
                          }}
                        >N개월 전 오늘</button>
                        <button
                        className="btn btn-outline-primary my-2 my-sm-0" 
                        type="button"
                        onClick={() => {
                            nav("/writes")
                        }}
                        >
                            저금하기
                        </button>
                    </form>
                </div>
            </nav>
            <Outlet />
        </div>
    )
}

export default Upperbar;

/*
<button className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">N년 전 오늘</button>


<nav classNameName="navbar navbar-light" style="background-color: #e3f2fd;">
</nav>
*/