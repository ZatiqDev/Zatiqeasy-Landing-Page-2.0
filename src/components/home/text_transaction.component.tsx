'use client'
import React from 'react'
import TextTransition, { presets } from "react-text-transition";



const TEXTS = ["Dream", "Build", "Own"];

const TextTransactionComponent = () => {

const [index, setIndex] = React.useState(0);

React.useEffect(() => {
    const intervalId = setInterval(
    () => setIndex((index) => index + 1),
    2000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
}, []);

  return (
    <>
    <TextTransition springConfig={presets.gentle}>
        <p className="!font-helvetica-display">{TEXTS[index % TEXTS.length]} </p>
    </TextTransition>
    </>
  )
}

export default TextTransactionComponent