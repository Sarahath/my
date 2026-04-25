import { useContext } from "react";
import Con from "./context/datacontext";

export default function Bcomp() {
  let data = useContext(Con);
  return (
    <>
      <h1> data : {data}</h1>
    </>
  );
}
