import React from 'react';
import { useHistory } from 'react-router-dom';

import { categoryList } from '../../strings';
import s from './Side.module.scss';

const Side = ({
    selected = ''
}) => {

    const { push } = useHistory();
    const handleClick = text => {
        if(text === 'Main Page'){
            push('/');
        }else if(text === 'TV Series'){
            push('/series');
        }else{
            push(`/${text}`);
        }

    }

    return (
        <div className = {s.main}>
            <p className = {s.main_description}>
                Categories
            </p>
            <ul className = {s.main_list}>
                {categoryList.map(el => <li onClick = {() => handleClick(el.text)} key={JSON.stringify(el)} className = {selected===el.text?[s.main_list_item, s.selected].join(' '):s.main_list_item}>
                    {el.icon}
                    <span>{el.text}</span>
                </li>)}
            </ul>
        </div>
    )
};

export default Side;