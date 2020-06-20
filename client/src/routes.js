import React from 'react'
import {Switch, Route, Redirect} from "react-router-dom";
import LinksPage from "./pages/LinksPage";
import CreatePage from "./pages/CreatePage";
import DetailPage from "./pages/DetailPage";
import AuthPage from "./pages/AuthPage";

export const useRoutes = (isAuth) => {
    if (isAuth) {
        return <Switch>
            <Route exact path="/links" render={() => <LinksPage/>}/>
            <Route exact path="/create" render={() => <CreatePage/>}/>
            <Route exact path="/detail/:id" render={() => <DetailPage/>}/>
            <Redirect to="/create"/>
        </Switch>
    }

    return <Switch>
        <Route exact path="/" render={() => <AuthPage/>}/>
        <Redirect to="/"/>
    </Switch>
}
