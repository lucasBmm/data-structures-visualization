import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './BlockList.scss';

const BlockList = () => {
    const [blocks, setBlocks] = useState([1, 2, 3]);

    const handleAddBlock = () => {
        setBlocks([...blocks, blocks.length + 1]);
    }

    const handleRemoveBlock = (idx: number) => {
        setBlocks(blocks.filter((block, index) => index !== idx));
    }

    return (
        <div className="block-list">
            <TransitionGroup className="block-list__blocks-container">
                {blocks.map((block, idx) => (
                    <CSSTransition
                        key={block}
                        timeout={300}
                        classNames="block"
                    >
                        <div className="block-list__block">
                            <p>Block {block}</p>
                            <button onClick={() => handleRemoveBlock(idx)}>Remove</button>
                        </div>
                    </CSSTransition>
                ))}
            </TransitionGroup>
            <button onClick={handleAddBlock}>Add Block</button>
        </div>
    );
};

export default BlockList;