import React from "react"
import {VideoHub} from "../components/pages/video-hub"

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams


} from "react-router-dom";

export const AppRoutes = () =>
    (
        <Router>
            <switch>
                <Route path="/" component = {VideoHub}/>
            </switch>

        </Router>


    );
