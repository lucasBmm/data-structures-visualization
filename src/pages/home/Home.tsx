import React from 'react';
import { Layout } from '../../shared/layout/Layout';
import BlockList from '../../components/blockslist/BlocksList';
import Card from '../../components/card/Card';
import './Home.scss';

export function Home() {
    let cards = [
        {
            imgSrc: 'https://marmelab.com/react-admin/img/simple-post-list.png',
            text: 'Queue',
            linkUrl: 'queue',
        },
        {
            imgSrc: 'https://marmelab.com/react-admin/img/simple-post-list.png',
            text: 'Threes',
            linkUrl: 'three',
        },
        {
            imgSrc: 'https://marmelab.com/react-admin/img/simple-post-list.png',
            text: 'Stacks',
            linkUrl: 'stack',
        },
        {
            imgSrc: 'https://marmelab.com/react-admin/img/simple-post-list.png',
            text: 'Stacks',
            linkUrl: 'stack',
        },
    ]

    return (
        <Layout>
            <h1>Data structures</h1>
            <br />
            <h3>Linked List</h3>
            <div className="main-card">
                <Card 
                    imgSrc='https://marmelab.com/react-admin/img/simple-post-list.png' 
                    text='Linked List' 
                    linkUrl='linked-list' 
                />
            </div>
            <div className="card-list">
                {cards.map((card, index)=> (
                    <Card 
                        key={index} 
                        imgSrc={card.imgSrc} 
                        text={card.text}
                        linkUrl={card.linkUrl}
                    />
                ))}
            </div>
        </Layout>
    );
}