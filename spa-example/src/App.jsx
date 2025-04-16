import React from "react";
import Home from './pages/Home';
import About from "./pages/About";
import {Routes, Route, Link, BrowserRouter} from 'react-router-dom';
import { Navigation, ListNavigation, ListItem } from "./style";

const App = () => {
    return (
        <BrowserRouter>
            <div className="navigation">
                <Navigation>
                    <ListNavigation>
                        <ListItem>
                            <Link to='/'>Home</Link>
                        </ListItem>
                        <ListItem>
                            <Link to='/about'>About</Link>
                        </ListItem>
                    </ListNavigation>
                </Navigation>
            </div>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;