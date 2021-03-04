import { Component, useState, useEffect } from 'react';

function Add() {
  const [ count, setCountssss ] = useState(0);
  useEffect(() => {
    console.log(`${count}被点击`) 
  })
  return (
    <div>
      <p>点击{count}次
      </p>
      <button onClick={() => { setCountssss(count + 1)}}>点击</button>
    </div>
  )
}

export default Add