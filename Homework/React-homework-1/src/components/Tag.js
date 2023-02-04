import React from "react";

function Tag(props) {
    console.log('Tag 실행');
    return (
        <li>
            <a href="/keyword/profile/" className="link_tag #profilekeyword">
                {props.tags}
            </a>
        </li>
    );
}

export default Tag;