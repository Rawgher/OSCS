import React from "react";
import { Link } from "react-router-dom";
import "./BackBtn.css";

const BackBtn = () => (
    <div className="go-back">
        <a href="/forum/categories" component={Link} to="/forum/categories">
            <i className="material-icons tiny">arrow_back</i> BACK TO FORUM
        </a>
    </div>
);

export default BackBtn;