import React from 'react';

export default function Character(props) {
    const {name, origin, image} = props;

    return(
        <div className='col-3'>
            <div className='card mb-3'>
                <img
                    src={image}
                    alt={name}
                    className='card-img-top'
                />
                <div className='card-body'>
                    <h3 className='card-title'>{name}</h3>
                    <p>{`Origin: ${origin && origin.name}`}</p>
                </div>
            </div>
        </div>
    )
}