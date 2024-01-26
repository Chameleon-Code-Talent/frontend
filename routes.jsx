import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./src/pages/Home";
import Portfolio from "./src/pages/Portfolio";
import DetailsOfProject from "./src/pages/DetailsOfProject";
import SingIn from "./src/pages/SingIn";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/meu-portfolio" element={<Portfolio/>} />
                <Route path="/detalhes-projeto" element={<DetailsOfProject/>} />
                <Route path="/login" element={<SingIn/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes