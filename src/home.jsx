import React, {
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
} from "react";
import { data, Link } from "react-router-dom";
import Acomp from "./Acomp";
import Con from "./context/datacontext";
export default function Home({ name, id }) {
  // let [count, setCout] = useState(0);
  // let a = [10,20,20]
  // let val = 0
  // useMemo(()=>{
  //   val = a.reduce((p,c)=>p+c,0)
  // },[a])
  // function fun(inc){
  //   useCallback(()=>{
  //     inc()
  //   },[inc]
  //   )
  // }
  // let [values, setValues] = useState([]);
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/todos/")
  //     .then((response) => response.json())
  //     .then((json) => setValues(json));
  // }, []);
  // let a = values.filter((v) => v["id"] <= 10);
  // console.log(a);
  // let a = useRef();
  // let b = useRef();

  // let [name,setname] = useState("")
  // let [ch,setCh] = useState(false)
  // let curvalue = () => {
  //   console.log(a.current);
  // };

  return (
    <>
      {/* {val} */}
      {/* <form action="">
        Name : <input type="text" name="" id="" onChange={(e)=>{setname(e.target.value)}} ref={a} autoFocus />
        <br />
        <br />
        Email : <input type="email" name="" id=""  ref={true ? a : b} />
        <br />
        <br />
        <input type="checkbox" name="" id="" onChange={ ()=>(setCh(!ch))} />
        <input type="button"  value="submit" onClick={ ()=>{console.log(ch)} } />
        <br /><br />
        name : {name}
      </form> */}
      {/* <Link to={"/about"}> About </Link>
      <Link to={"/contact"}> Contact </Link> */}
      {/* <a href="/about">About</a>
      <a href="/contact">Contact</a>  */}
      {/* <p>Count : {count}</p>
      <button onClick={() => { setCout(count + 1) }}>inc +1</button><br />
      <button onClick={() => { setCout(count - 1) }}>dec -1</button><br />
      <button onClick={() => { setCout(count = 0) }}>move to 0</button><br />       */}

      {/* useEffect,userf,usememo,usecontext,usereducer */}
      {/* <ul>
        {a.map((v, i) => (
          <li key={i}>
            {v.id} {v.title}
          </li>
        ))}
      </ul> */}
      {
        <Con.Provider value="data">
          <Acomp />
        </Con.Provider>
      }
    </>
  );
}
