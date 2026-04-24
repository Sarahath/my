import "./App.css";
import Card from "./card";
import Navbar from "./navbar";
import prodimg from "../public/favicon.svg";
import List from "./list";
import Comp from "./comp";
import About from "./about";
import Contact from "./contact";
import { BrowserRouter , Routes ,Route } from "react-router-dom";
import Home from "./home";

function App() {
  let name = "sam";
  let age = 10;
  return (
    <>
      component creation
       <Navbar /> 
       using js inside return 
       <h1>hello {`${name}  ${age}`} </h1> 
       props
    
      {/* conditional rendering */}
      {/* {name == "sam" ? (
        <Card img={prodimg} name="prod 1" disc="prod 1 disc" price={100} />
      ) : (
        <p></p>
      )} */}
      {/* {name == "sam" && (
        <Card img={prodimg} name="prod 1" disc="prod 1 disc" price={100} />
      )} */}
      {/* using loops */}
      {/* <List/> */}

      {/* <Comp name="The comp" />
      <Comp name="18" /> */}
      {/* routing */}
      {/* event handling */}
      {/* hooks */}
      {/* custom hooks */}
      {/* <About/>
      <Contact/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
