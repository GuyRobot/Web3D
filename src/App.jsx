import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'

const App = () => {
    return (
        <main className='bg-slate-300/20'>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={'Home'} />
                    <Route path="/about" element={'About'} />
                    <Route path="/contact" element={'Contact'} />
                    <Route path="/projects" element={'Projects'} />
                </Routes>
            </BrowserRouter>
        </main>
    )
}

export default App