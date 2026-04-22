import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  let [count, setCout] = useState(0)
  return (
    <>
      {/* <Link to={"/about"}> About </Link>
    <Link to={"/contact"}> Contact </Link> */}
      {/* <a href="/about">About</a>
    <a href="/contact">Contact</a> */}
      <p>Count : {count}</p>
      <button onClick={() => { setCout(count + 1) }}>inc</button>
      <button onClick={() => { setCout(count - 1) }}>dec</button>
      {/* useEffect,userf,usememo,usecontext,usereducer */}
    </>
  )
}
