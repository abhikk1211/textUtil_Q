import React, { useState } from "react";
export default function TextForm(props) {
  const [text, setText] = useState("");
  const textAreaBox =  document.getElementById("myBox");
  const handleUpClick = () => {
    console.log("upper case clicked");
    let upperText = text.toUpperCase();
    setText(upperText);
    props.showAlert("upper case converted","success");
  };
  const handleOnchange =(event)=>{
    setText(event.target.value);
  };
  const handleClrClick =(event)=>{
    const style= '#' + Math.floor(Math.random() * 16777215).toString(16);
        textAreaBox.style.color = style;
  };
  const handlClearText =()=>{
    setText("");
  };
  const handlRemoveExtraspace =()=>{
    let extraSpaceArray = text.split(/[ ]+/);
    setText(extraSpaceArray.join(" "));

  };
  const handlSelectAndCopy =()=>{
    document.getElementById("myBox").select();
    navigator.clipboard.writeText(text);
  };
  const wordAndCharCount =()=>{
    return text.split(" ").filter(checkWordArr).length + "   words  " + text.split("").filter(checkCharArr).length + "   characters   ";
  };
  const checkWordArr = (checkBy)=>{
    return checkBy !== "";
  };
  const checkCharArr = (checkBy)=>{
    return checkBy !== " ";
  };
  return (
  <>
    <div className={`container my-3 text-${props.reverseMode}`}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className={`form-control bg-${props.mode}`}
          id="myBox"
          rows="8"
          style={{color: props.mode === 'light' ? "black":"white"}}
          value={text} onChange ={handleOnchange}
        ></textarea>
        <div class="btn-group my-3" role="group" aria-label="Basic example">
        <button
          type="button"
          className="btn btn-primary mx-2"
          onClick={handleUpClick}
        >
          Convert to Upper Case
        </button>
        <button
          type="button mx-2"
          className="btn btn-primary"
          onClick={handleClrClick}
        >
          Change text color
        </button>
        <button
          type="button"
          className="btn btn-primary mx-2"
          onClick={handlClearText}
        >
          Clear text
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handlRemoveExtraspace}
        >
          Remove Extra Space
        </button>
        <button
          type="button"
          className="btn btn-primary mx-2"
          onClick={handlSelectAndCopy}
        >
          Copy And Select
        </button>
      </div>
      </div>
    </div>
    <div className = {`container my-3 text-${props.reverseMode}`}>
      <h1>Your Text summary</h1>
      <p> {wordAndCharCount()}</p>
    </div>
    <div className={`container text-${props.reverseMode}`}>
    <h2>Preview</h2>
    <p>{text.length > 0? text: "Enter something to Preview"}</p>
    </div>
    </>
  );
}
