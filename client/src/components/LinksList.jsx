import React from 'react'
import {Link} from "react-router-dom";

const LinksList = ({links}) => {
    if (!links.length) {
        return <p className='center'>No links</p>
    }

    return <>
        <table>
            <thead>
            <tr>
                <th>№</th>
                <th>Original</th>
                <th>Cutted</th>
                <th>Detail</th>
            </tr>
            </thead>

            <tbody>
            {links.map((link, index) => {
                return <tr key={link._id}>
                    <td>{index + 1}</td>
                    <td><a href={link.from} target='_blank' rel="noopener noreferrer">{link.from}</a></td>
                    <td><a href={link.to} target='_blank' rel="noopener noreferrer">{link.to}</a></td>
                    <td>
                        <Link to={`/detail/${link._id}`}>Info</Link>
                    </td>
                </tr>
            })}

            </tbody>
        </table>
    </>
}

export default LinksList