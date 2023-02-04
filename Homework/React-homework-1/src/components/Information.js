import React from "react";
import Tag from "./Tag";

function Information(props) {
  console.log("Information 실행");
  return (
    <div
      id="wrapInfo"
      className="wrap_authorinfo #my_profile_info"
      style={{ display: "block" }}
    >
      <h3 className="screen_out">작가소개</h3>
      <div className="author_intro animation_up">
        <strong className="tit_intro">소개</strong>
        <p className="desc_intro">{props.user.intro}</p>
        <ul className="list_tag">
          {props.user.tags.map((e) => (
            <Tag tags={e} />
          ))}
        </ul>
      </div>
      <div className="author_intro animation_up">
        <strong className="tit_intro2">웹사이트</strong>
        <ul class="list_sns">
          <li>
            <a
              href="//github.com/Doyoung01"
              class="link_sns #website"
              target="_blank"
              rel="noreferrer"
              data-tiara-action-name="작가 프로필 > 소개탭 > 웹사이트 영역 > url 버튼 클릭"
              data-tiara-layer="website url"
            >
              <span class="ico_brunch_v1 ico_url"></span>
            </a>
          </li>
        </ul>
        <a
          href="/@@6FBj/propose"
          className="link_suggest #propose"
          data-tiara-action-name="작가 프로필 > 제안하기 버튼 클릭"
          data-tiara-layer="propose"
        >
          작가에게 제안하기
        </a>
      </div>
    </div>
  );
}

export default Information;
