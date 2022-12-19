import React from 'react';
import {Navigate, NavLink, Route, Routes} from 'react-router-dom';
import styles from './Site.module.css'
import {PageOne} from "./pages/PageOne";
import {PageTwo} from "./pages/PageTwo";
import {PageThree} from "./pages/PageThree";
import {Error404} from "./pages/Error404";
import {Page} from "./pages/Page";
import {dataState} from "../dataState/dataState";


export const Site = () => {
    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    <a href="/page2">Page2 from a_href</a>
                    <div><NavLink className={({isActive})=>isActive ?styles.active :styles.navLink} to={'/page/0'}>PageOne</NavLink></div>
                    <div><NavLink className={({isActive})=>isActive ?styles.active :styles.navLink} to={'/page/1'}>PageTwo</NavLink></div>
                    <div><NavLink className={({isActive})=>isActive ?styles.active :styles.navLink} to={'/page/2'}>PageThree</NavLink></div>
                    {/*<div><NavLink className={(params)=>params.isActive ?styles.active :styles.navLink} to={'/page1'}>PageOne</NavLink></div>*/}
                    {/*<div><NavLink className={({isActive})=>isActive ?styles.active :styles.navLink} to={'/page2'}>PageTwo</NavLink></div>*/}
                </div>
                <div className={styles.content}>
                    <Routes>
                        <Route path={'/'} element={ <Navigate to={'/page1'}/> }/>

                        <Route path={'/page/:id'} element={<Page dataState={dataState}/>}/>
                        {/*<Route path={'/page3'} element={<PageThree/>}/>*/}

                        <Route path={'/*'} element={<Error404/>}/>
                        <Route/>
                    </Routes>
                </div>
            </div>
        </div>
    );
};

