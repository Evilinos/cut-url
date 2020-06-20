import React, {useContext, useEffect, useState} from 'react'
import {useHttp} from "../hooks/http.hook";
import {useMessage} from "../hooks/message.hook";
import {AuthContext} from "../context/AuthContext";

const AuthPage = () => {
    const auth = useContext(AuthContext)
    const message = useMessage()
    const {loading, error, request, clearError} = useHttp()
    const [form, setForm] = useState({
        email: '', password: '',
    })

    useEffect(() => {
        message(error)
        clearError()
    }, [error, message, clearError])

    const changeHandler = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const registerHandler = async () => {
        try {
            const data = await request('/api/auth/register', 'POST', {...form})
            message(data.message)
        } catch (e) {
        }
    }

    const loginHandler = async () => {
        try {
            const data = await request('/api/auth/login', 'POST', {...form})
            auth.login(data.token, data.userId)
            message(data.message)
        } catch (e) {

        }
    }

    return <div className="row">
        <div className="col s6 offset-s3">
            <h1 className="center">Cut url</h1>
            <div className="card blue darken-4">
                <div className="card-content white-text">
                    <span className="card-title">Authorize</span>
                    <div>
                        <div className="input-field">
                            <input name="email"
                                   id="email"
                                   type="email"
                                   autoComplete='none'
                                   onChange={changeHandler}
                                   value={form.email}
                                   className="validate white-text"/>
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="input-field">
                            <input name="password"
                                   id="password"
                                   type="password"
                                   autoComplete='none'
                                   onChange={changeHandler}
                                   value={form.password}
                                   className="validate white-text"/>
                            <label htmlFor="password">Password</label>
                        </div>
                    </div>
                </div>
                <div className="card-action">
                    <button className='btn amber darken-4'
                            style={{marginRight: '10px'}}
                            disabled={loading}
                            onClick={loginHandler}
                    >Log in
                    </button>
                    <button className='btn grey lighten-3 black-text'
                            onClick={registerHandler}
                            disabled={loading}
                    >Register
                    </button>
                </div>
            </div>
        </div>
    </div>
}

export default AuthPage