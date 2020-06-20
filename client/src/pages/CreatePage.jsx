import React, {useContext, useState} from 'react'
import {useHttp} from "../hooks/http.hook";
import {AuthContext} from "../context/AuthContext";
import {useHistory} from 'react-router-dom'

const CreatePage = (props) => {
    const history = useHistory()
    const auth = useContext(AuthContext)
    const [link, setLink] = useState('')
    const {request} = useHttp()

    const pressHandler = async (e) => {
        if (e.key === 'Enter') {
            try {
                const data = await request('/api/link/generate', 'POST', {from: link}, {
                    Authorization: `Bearer ${auth.token}`
                })
                history.push(`/detail/${data.link._id}`)
            } catch(e) {}
        }
    }


    return <div className='row'>
        <div className="col s8 offset-s2" style={{paddingTop: '2rem'}}>
            <h4 className='center'>Create link</h4>
            <div className="input-field">
                <input name="link"
                       id="link"
                       type="text"
                       autoComplete='none'
                       onChange={e => setLink(e.target.value)}
                       onKeyPress={pressHandler}
                       value={link}
                />
                <label htmlFor="link">Enter your link</label>
            </div>
        </div>
    </div>
}

export default CreatePage