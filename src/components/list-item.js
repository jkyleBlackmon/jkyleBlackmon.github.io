import React from 'react';
import './list-item.css';

export const ListItem = ({title, body}) => {
    return (
        <div className='list-item-container'>
            <div className='list-item-header'>
                <h4>{title}</h4>
            </div>
            <div className='list-item-body'>
                <p>{body}</p>
            </div>
        </div>
    );
};