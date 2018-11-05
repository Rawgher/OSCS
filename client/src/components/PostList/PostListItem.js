import React from "react";
import "./PostList.css";

export const PostListItem = props => (
  <li className="ESH_post-list-item">
    {props.children}
  </li>
);
