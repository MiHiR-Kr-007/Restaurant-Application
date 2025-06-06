import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Toaster} from "react-hot-toast";
import Home from "./pages/Home.jsx";
import NotFound from "./pages/NotFound.jsx";
import Success from "./pages/Success.jsx";
import "./App.css"

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/success" element={<Success/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
                <Toaster/>
            </BrowserRouter>
        </>
    )
};

export default App;