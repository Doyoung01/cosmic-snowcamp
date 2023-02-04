import React from "react";

function Article(props) {
    console.log('Article 실행');
    return (
        <div id="wrapArticle" className="#my_post tab_contents" style={{ display: 'block' }}>
            <h3 className="screen_out">글목록</h3>
            <div className="wrap_article_list">
                <ul className="list_article list_post2 #post_list">
                    {props.item.map((e) => (<Aitem item={e} />))}
                </ul>
            </div>
            <br /><br /><br />
        </div>
    );
}

function Aitem(props) {
    var date = props.item.createDate;
    var year = date.slice(0, 4);
    var month = date.slice(5, 7);
    var day = date.slice(8);

    return (
        <li key={props.item.title} data-articleuid="5tdm_1" class="animation_up">
            <a
              href="/@javajigi/28" className="link_thumb #post_imageview"
              data-tiara-action-name="작가 프로필 > 글탭 > 리스트 클릭"
              data-tiara-action-kind="ClickContent" 
              data-tiara-layer="articles" 
              data-tiara-id="@@5tdm">
                <div className="post_thumb">
                    <img className="img_thumb" src={props.item.src} alt="이미지정보" />
                </div>
            </a>
            <a
              href="/@javajigi/28" className="link_post #post_imageview"
              data-tiara-action-name="작가 프로필 > 글탭 > 리스트 클릭" 
              data-tiara-action-kind="ClickContent" 
              data-tiara-layer="articles" 
              data-tiara-id="@@5tdm">
                <div className="post_title">
                    <strong className="tit_subject">{props.item.title}</strong>
                    <div className="wrap_sub_content">
                        <span className="article_content">{props.item.preview}</span>
                    </div>
                    <span className="post_append" style={{ whiteSpace: 'nowrap' }}>
                        <span className="txt_append">댓글</span>
                        <span className="num_txt">{props.item.comment}</span>
                        <span className="ico_dot"></span>
                        <span className="publish_time">{year + '.' + month + '.' + day}</span>
                    </span>
                </div>
            </a>
        </li>
    );
}

export { Article, Aitem };