import React, { useState } from "react";

export default function TextForm(props) {
  const UpperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const LowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter you text here");

  return (
    <>
      <div>
        <form>
          <div class="mb-3">
            <h3>{props.heading}</h3>
            <textarea
              type="text"
              className="form-control"
              id="myBox"
              rows={8}
              value={text}
              onChange={handleOnChange}
            ></textarea>
          </div>
        </form>
        <button className="btn btn-primary mx-1" onClick={UpperCase}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={LowerCase}>
          Convert to Lowercase
        </button>
      </div>
      <div className="container my-3">
        <h3>Your text summary</h3>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minute to read</p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}
