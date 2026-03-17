import React from 'react';

const Route = ({route}) => {
    return (
        <li className='px-4 '>
            <a href={route.path}>{route.name}</a>

        </li>
    );
};

export default Route;