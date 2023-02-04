import React from "react";

function Work(props) {
  return (
    <div
      id="wrapMagazine"
      className="wrap_magazine #my_mag"
      style={{ display: "block" }}
    >
      <h3 className="screen_out">매거진</h3>
      <div className="list_content">
        {props.item.map((e) => (
          <Witem item={e} />
        ))}
      </div>
    </div>
  );
}

function Witem(props) {
  return (
    <div
      className="box_content animation_up #mag_list box_content_up"
      data-tiara-action-name="작가 프로필 > 작품탭 > 리스트 클릭"
      data-tiara-action-kind="ClickContent"
      data-tiara-layer="works"
      data-tiara-id="@@3VHS"
    >
      <div className="cover_book cover_book_type3">
        <a href="/magazine/tiranyong">
          <img src={props.item.src} alt="이미지정보" />
          <span className="dimmed_book_type1"></span>
        </a>
      </div>
      <strong className="tit_content">magazine</strong>
      <a href="/magazine/tiranyong" className="tit_subject">
        <span className="inner_txt">{props.item.title}</span>
      </a>
      <dl className="list_post_info">
        <dt>
          <span className="ico_brunch_v1 ico_list">전체글갯수</span>
        </dt>
        <dd className="txt_g">
          <em>{props.item.numcontent}</em>
        </dd>
        <dt>
          <span className="ico_brunch_v1 ico_subscribe">구독자</span>
        </dt>
        <dd className="txt_g">{props.item.subscribers}</dd>
      </dl>
    </div>
  );
}

export { Work, Witem };
