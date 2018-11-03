import React from "react";
import "./PostList.css";

export const PostList = ({ children }) => (
    <ul className="ESH_user-posts">
        {children}
    </ul>
);