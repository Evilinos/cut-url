import React from 'react'
import {useRoutes} from "./routes"
import {BrowserRouter} from "react-router-dom"
import {useAuth} from "./hooks/auth.hook"
import 'materialize-css'
import {AuthContext} from "./context/AuthContext";
import Navbar from "./components/Navbar";
import Loader from "./components/Loader";

function App() {
    const {login, logout, token, userId, ready} = useAuth()
    const isAuth = !!token
    const routes = useRoutes(isAuth);

    if (!ready) {
        return <Loader />
    }

    return <AuthContext.Provider value={{
        token, login, logout, userId, isAuth
    }}>
        <BrowserRouter>
            {isAuth && <Navbar />}
            <div className='container'>
                {routes}
            </div>
        </BrowserRouter>
    </AuthContext.Provider>
}

export default App;
