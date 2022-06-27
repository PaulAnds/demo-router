import React from 'react';
import { Route, Routes } from 'react-router-dom';
import App from './Components/App';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Notes from './Components/Notes/Notes'
import Error404 from './Components/Error/404'
import CharacterUI from './Components/CharacterUI/UIList'

const AppRoutes = () => (
    <App>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/uicharacters' element={<CharacterUI />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/notes' element={<Notes />} />
            <Route path='/notes/:noteId' element={<Notes />} />
            <Route path='*' element={<Error404 />} />
        </Routes>
    </App>
)

export default AppRoutes;