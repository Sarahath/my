import "./app.css";
import Card from "./card";
import Navbar from "./navbar";
import prodimg from "../public/favicon.svg";
import List from "./list";

function App() {
  let name = "sam";
  let age = 10;
  return (
    <>
      {/* component creation */}
      {/* <Navbar /> */}
      {/* using js inside return */}
      {/* <h1>hello {`${name}  ${age}`} </h1> */}
      {/* props */}
      {/* <h1>Products</h1>
      <div id="cards">
        <Card img={prodimg} name="prod 1" disc="prod 1 disc" price={100} />
        <Card img={prodimg} name="prod 1" disc="prod 1 disc" price={100} />
        <Card img={prodimg} name="prod 1" disc="prod 1 disc" price={100} />
      </div> */}
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

      
      {/* event handling */}
      {/* hooks */}
      {/* custom hooks */}
    </>
  );
}

export default App;
