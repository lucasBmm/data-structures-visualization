import React from 'react';
import './Card.scss';
import { Link } from 'react-router-dom';

interface Props {
    imgSrc: string,
    text: string,
    linkUrl: string,
}

const Card = ({ imgSrc, text, linkUrl }: Props) => {
    return (
        <div className="card">
            <Link to={'/data-structures/' + linkUrl} >
                <img src={imgSrc} alt='card-img' className='card__img'/>
                <p className="card__text">{text}</p>
            </Link>
        </div>
    );
};

export default Card;