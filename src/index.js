import {render} from 'react-dom';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import './index.css';
import Home from './pages/home/Home';
import reportWebVitals from './reportWebVitals';
import Contact from "./pages/home/Contact";

const rootElement = document.getElementById("root");
render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path={'/contact'} element={<Contact/>}/>
        </Routes>
    </BrowserRouter>,
    rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
