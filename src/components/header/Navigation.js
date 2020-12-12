import React from 'react'

const Navigation = ({ link, children }) => {
    return (
        <ul>
            <li className="nav-item">
                <a href={link} >
                    {children}
                </a>
            </li>
        </ul>
    )
}

export default Navigation
