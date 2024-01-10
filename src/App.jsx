import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import AddPages from "./pages/AddPages";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout></MainLayout>}>
            <Route path="/" element={<Home></Home>} />
          </Route>
            <Route path="/addPages" element={<AddPages></AddPages>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
