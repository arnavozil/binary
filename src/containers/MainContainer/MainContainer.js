import React from 'react';
import Header from '../../components/Header/Header';
import Side from '../../components/Side/Side';

import s from './MainContainer.module.scss';

const MainContainer = ({
    children = (<></>),
    selected = ''
}) => {

    return (
        <section className = {s.main}>
            <header className = {s.main_header}>
                <Header />
            </header>
            <aside className = {s.main_aside}>
                <Side selected = {selected} />
            </aside>
            <main className = {s.main_main}>
                {children}
            </main>
        </section>
    );
};

export default MainContainer;