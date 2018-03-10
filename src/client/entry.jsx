import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import MainPage from "./main/container.jsx";
import NewWord from "./newWord/addPage.jsx";

render(
    <Router>
        <div>
            <ul>
                <li>
                    <Link to="/">Main</Link>
                </li>
                <li>
                    <Link to="/new-word">new word</Link>
                </li>
            </ul>
            <Route exact path="/" component={MainPage} />
            <Route path="/new-word" component={NewWord} />
        </div>
    </Router>,
    document.getElementById("root")
);
