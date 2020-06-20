import React from 'react'

const LinkCard = ({link}) => {
    console.log(link)
    return <>
        <h2>Link</h2>
        <p>Your cut url: <a href={link.to} target="_blank" rel="noopener noreferrer">{link.to}</a></p>
        <p>Source: <a href={link.from} target="_blank" rel="noopener noreferrer">{link.from}</a></p>
        <p>Transitions: <strong>{link.clicks}</strong></p>
        <p>Create data: <strong>{new Date(link.date).toLocaleDateString()}</strong></p>
    </>
}

export default LinkCard