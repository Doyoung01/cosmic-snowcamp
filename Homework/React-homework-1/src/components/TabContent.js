import React, { useState } from "react";
import { Link } from "react-router-dom";

function TabContent(props) {
    console.log('TabContent 실행');
    let [num, setNum] = useState(2);
    console.log(num);
  
    return (
        <div className="tab_contents">
            <strong className="screen_out">작가프로필 하위메뉴</strong>
            <ul id="contentsTab" className="list_tab">
                <li className={num === 1? 'on' : ''} onClick={() => { setNum(1); }}>
                  <Link to='/info' className="infoTab link_tab #info_open"><span className="txt_tab">작가소개</span></Link>
                </li>
                <li className={num === 2? 'on' : ''} onClick={() => { setNum(2); }}>
                    <Link to="/articles" className="articleTab link_tab"><span className="txt_tab">글 { props.articles.length }</span></Link>
                </li>
                <li className={num === 3? 'on' : ''} onClick={() => { setNum(3); }}>
                    <Link to="/works" className="magazineTab link_tab"><span className="txt_tab">작품 { props.works.length }</span></Link>
                </li>
            </ul>
        </div>
    );
  }

export default TabContent;