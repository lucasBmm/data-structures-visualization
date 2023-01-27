import React, { useState } from 'react';
import BlockList from '../../components/blockslist/BlocksList';
import LinkedList from './linkedList/LinkedList';

export function DataStructure() {
    const [ linkedList ] = useState<LinkedList<number>>(new LinkedList());
    const [ list, setList ] = useState<number[]>([]);
    const [ value, setValue ] = useState(0);

    const handleAdd = () => {
        setList([...linkedList.add(value).toList()]);
    }

    const handleAppend = () => {
        setList([...linkedList.append(value).toList()]);
    }

    const handlePop = () => {
        setList([...linkedList.pop().toList()]);
    }

    const handleShift = () => {
        setList([...linkedList.shift().toList()])
    }

    const handleReverse = () => {
        setList([...linkedList.reverse().toList()])
    }
    
    return (
        <>
            <BlockList blocks={list}/>
            <input value={value} onChange={e => setValue(Number(e.target.value))} />
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleAppend}>Append</button>
            <button onClick={handlePop}>Pop</button>
            <button onClick={handleShift}>Shift</button>
            <button onClick={handleReverse}>Reverse</button>
        </>
    );
}