import React from "react";
import "./PostList.css";
import "./../../../public/ESH_style.css";

export const PostList = ({ children }) => (
    <ul className="ESH_user-posts">
        {children}
    </ul>
);