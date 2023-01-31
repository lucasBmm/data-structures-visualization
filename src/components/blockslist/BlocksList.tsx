import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './BlockList.scss';

interface Props {
    blocks: number[]
}

const BlockList = ({ blocks }: Props) => {
    return (
        <div className="block-list">
            <TransitionGroup className="block-list__blocks-container">
                {blocks.map((block, idx) => (
                    <CSSTransition
                        key={idx}
                        timeout={300}
                        classNames="block"
                    >
                        <div className="block-list__block">
                            <p>Block {block}</p>
                        </div>
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </div>
    );
};

export default BlockList;