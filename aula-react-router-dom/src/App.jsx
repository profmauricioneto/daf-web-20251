import React from 'react';
import {BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contacts } from './pages/Contacts';
import { HeaderPage } from './components/Header';
import { UnsortedList, LinkItem } from './styles';
import { FooterPage } from './components/Footer';

export const App = () => {
    return(
        <BrowserRouter>
            <HeaderPage />
            <nav>
                <UnsortedList>
                    <LinkItem>
                        <Link to='/'>Home</Link>
                    </LinkItem>
                    <LinkItem>
                        <Link to='/about'>About</Link>
                    </LinkItem>
                    <LinkItem>
                        <Link to='/contacts'>Contacts</Link>
                    </LinkItem>
                </UnsortedList>
            </nav>

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />}/>
                <Route path='/contacts' element={<Contacts />}/>
            </Routes>
            <FooterPage />
        </BrowserRouter>
    );
};
