import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import NotFound from "./Components/NotFound/NotFound";
import OrderReview from "./Components/OrderReview/OrderReview";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/order-review" element={<OrderReview />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </>
  );
}

export default App;
