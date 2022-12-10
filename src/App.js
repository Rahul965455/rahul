import AddEdit from "./Pages/AddEdit";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Header from "./Component/Header";
import View from "./Pages/View";
import About from "./Pages/About";
import Home from "./Pages/Home";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
  <BrowserRouter>
      <div className="App">
      <ToastContainer/>
<Header/>
      <Routes>
      <Route exact path="/" element={<Home/>}/>
        <Route path="/add" element={<AddEdit/>}></Route>
        <Route path="/update/:id" element={<AddEdit/>}></Route>
        <Route path="/view/:id" element={<AddEdit/>}></Route>
        <Route path="/" element={<View/>}></Route>
        <Route path="/about" element={<About/>}></Route>
      </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
