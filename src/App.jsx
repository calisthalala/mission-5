import { Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth";
import Home from "./pages/home";

function App() {
  return (
    <Routes>
      <Route path="/auth" element={<Auth />} />
      <Route path="/home" element={<Home />} />
      <Route path="*" element={<Auth />} />
    </Routes>
  );
}

export default App;




