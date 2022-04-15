import { Route, Routes } from "react-router-dom";
import Breakfast from "./Pages/Home/Breakfast/Breakfast";
import Dinner from "./Pages/Home/Dinner/Dinner";
import FoodDetails from "./Pages/Home/FoodDetails/FoodDetails";
import Home from "./Pages/Home/Home/Home";
import Lunch from "./Pages/Home/Lunch/Lunch";
import Order from "./Pages/Home/Order/Order";
import Login from "./Pages/Login/Login/Login";
import RequireAuth from "./Pages/Login/RequireAuth/RequireAuth";
import SignUp from "./Pages/Login/SignUp/SignUp";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";

function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Home />}>
                    <Route path="/breakfast" element={<Breakfast />} />
                    <Route path="lunch" element={<Lunch />} />
                    <Route path="dinner" element={<Dinner />} />
                </Route>
                <Route path="/food/:foodId" element={<FoodDetails />} />
                <Route
                    path="/order"
                    element={
                        <RequireAuth>
                            <Order />
                        </RequireAuth>
                    }
                />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
