import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./src/pages/Home";
import Portfolio from "./src/pages/Portfolio";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/meu-portfolio" element={<Portfolio/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes