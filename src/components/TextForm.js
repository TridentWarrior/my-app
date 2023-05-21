import React, { useState } from 'react'

export default function TextForm(props) {
  const [text, setText] = useState("Enter text here");

  const countWords = (txt) => {
    let cnt = 0
    txt.split(" ").forEach((ele) => {
      if (ele !== '') cnt++;
    })
    return cnt;
  }

  const selectFirstLetter = () => {
    let arr = text.split(" ")
    let arr1 = []
    arr.forEach((e) => {
      arr1.push(e.substring(0, 1))
    })
    console.log(arr, arr1);
    setText(arr1.join(" "));
    props.showAlert("Selected the first letter", "success")
  }
  const handleUpClick = () => {
    setText(text.toUpperCase())
    props.showAlert("Converted to UpperCase", "success")

  }
  const handleDownClick = () => {
    setText(text.toLowerCase())
    props.showAlert("Converted to LowerCase", "success")
  }

  const revOnClick = () => {
    const revText = text.split('').reverse()
    setText(revText.join(''))
    props.showAlert("The text is reversed", "success")
  }

  const handleCopy = () => {
    console.log("I am copy");
    var text = document.getElementById("myBox");
    text.select();
    text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard", "success")
  }
  const handleOnChange = (event) => {
    setText(event.target.value);
  }
  return (
    <>
      <div className='container' style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === 'light' ? 'white' : 'grey',
              color: props.mode === 'light' ? 'black' : 'white'
            }}
            rows="8"
          />
        </div>
        <div>
          <button className="btn btn-primary me-2" onClick={handleUpClick}>
            Convert To Uppercase
          </button>
          <button className="btn btn-primary me-2" onClick={handleDownClick}>
            Convert To Lowercase
          </button>
          <button className="btn btn-primary me-2" onClick={handleCopy}>
            Copy Text
          </button>
          <button className="btn btn-primary ms-2 float-end" onClick={revOnClick}>
            Reverse the text
          </button>
          <button className="btn btn-primary ms-2 float-end" onClick={selectFirstLetter}>
            Select First Letter
          </button>
        </div>
      </div>
      <div className="container my-3" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
        <h1>Your text summary</h1>
        <p>
          {countWords(text)} words and {text.length} characters
        </p>
        <p>
          {0.008 * text.split(" ").length} minutes read
        </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  )
}
