import AddEdit from "./Pages/AddEdit";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Header from "./Component/Header";
import View from "./Pages/View";
import About from "./Pages/About";
import Home from "./Pages/Home";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Update from "./Pages/Update";
// import Update from "./Pages/Update";
function App() {
  return (
  <BrowserRouter>
      <div className="App">
      <ToastContainer/>
<Header/>
      <Routes>
      <Route exact path="/" element={<Signup/>}/>
      <Route exact path="/Home" element={<Home/>}/>
      <Route exact path="/edit" element={<Update/>}/>
        <Route path="/add" element={<AddEdit/>}></Route>
        <Route path="/update/:id" element={<AddEdit/>}></Route>
        <Route path="/view/:id" element={<View/>}></Route>

        <Route path="/about" element={<About/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
