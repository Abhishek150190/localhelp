import React from 'react'

export const LinkItem = ({linkItem}) => (
    <li id={linkItem.id}>
        <a className="nav-items" href={linkItem.link}>
            {linkItem.name}
        </a>
    </li>
)
