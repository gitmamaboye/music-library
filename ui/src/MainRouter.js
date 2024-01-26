// MainRouter.js
import { Link, useRoutes } from "react-router-dom";
import React from "react";
import {Album} from "./components/Album";
import {AlbumDetails} from "./components/AlbumDetails";
const MainRouter = () => {
    const routes = useRoutes([
        {  path: '/music', element: <Album/>},
        {  path: '/music/:id', element: <AlbumDetails/>},
    ]);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <nav className={"navigation"}>
                <Link to="/music"><h1>Music</h1></Link>
            </nav>
            {routes}

        </div>
    );

}

export default MainRouter;
