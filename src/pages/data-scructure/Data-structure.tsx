import React, { useState } from 'react';
import BlockList from '../../components/blockslist/BlocksList';
import LinkedList from './linkedList/LinkedList';
import { Layout } from '../../shared/layout/Layout';
import './Linked-list.scss';
import { Route, Routes, useParams } from 'react-router-dom';

export function DataStructure() {
    const [ linkedList ] = useState<LinkedList<number>>(new LinkedList());
    const [ list, setList ] = useState<number[]>([]);
    const [ value, setValue ] = useState<number>(0);
    const { dataType } = useParams();

    console.log(dataType)

    const handleAdd = () => {
        if (list.length < 13) {
            setList([...linkedList.add(value).toList()]);
            setValue(prev => prev + 1);
        }
    }

    const handleAppend = () => {
        if (list.length < 13) {
            setList([...linkedList.append(value).toList()]);
            setValue(prev => prev + 1);
        }
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
        <Layout>
            <div className="main_container">
                <BlockList blocks={list}/>
                <div className="inputs_container">
                    <input value={value} onChange={e => setValue(Number(e.target.value))} type={'number'} />
                    <div className="buttons_container">
                        <button onClick={handleAdd}>Add</button>
                        <button onClick={handleAppend}>Append</button>
                        <button onClick={handlePop}>Pop</button>
                        <button onClick={handleShift}>Shift</button>
                        <button onClick={handleReverse}>Reverse</button>
                    </div>
                </div>
            </div>
        </Layout>
    );
}