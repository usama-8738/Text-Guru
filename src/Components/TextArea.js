import React, { useState } from "react";
import PropTypes from "prop-types";
import "../App.css";

const TextArea = ({
  primaryHeading,
  UpperCase,
  LowerCase,
  CapitalCase,
  ClearText,
  newColor,
  Copy,
  toSentence,
  rmvExtraSpaces,
}) => {
  // State to manage the text input
  const [text, setText] = useState("");

  // Function to handle text input changes
  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  // Function to convert text to uppercase
  const toUppercased = () => {
    if (text.trim() === "") {
      alert("Please Enter Your Text");
    } else {
      setText(text.toUpperCase());
    }
  };

  // Function to convert text to lowercase
  const toLowercased = () => {
    if (text.trim() === "") {
      alert("Please Enter Your Text");
    } else {
      setText(text.toLowerCase());
    }
  };

  // Function to capitalize the first letter of each word
  const toCapitalcased = () => {
    if (text.trim() === "") {
      alert("Please Enter Your Text");
    } else {
      const capitalizedText = text
        .split("\n") // Split by paragraph breaks
        .map((paragraph) => {
          return paragraph
            .split(" ") // Split into words
            .map(
              (word) =>
                word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() // Capitalize each word
            )
            .join(" "); // Rejoin the words
        })
        .join("\n"); // Rejoin the paragraphs
      setText(capitalizedText);
    }
  };

  const toSentenceCased = () => {
    if (text.trim() === "") {
      alert("Please Enter Your Text");
    } else {
      const sentenceCasedText = text
        .split("\n") // Split by paragraphs
        .map((paragraph) => {
          return paragraph
            .split(". ") // Split sentences
            .map(
              (sentence) =>
                sentence.charAt(0).toUpperCase() +
                sentence.slice(1).toLowerCase() // Capitalize first letter of sentence
            )
            .join(". "); // Join sentences back
        })
        .join("\n"); // Join paragraphs back
      setText(sentenceCasedText);
    }
  };

  // Function to clear the text input
  const clearText = () => {
    setText("");
  };

  // Function to calculate reading time
  const calculateReadingTime = (text) => {
    const wordsPerMinute = 200; // Average reading speed in words per minute
    const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
    const readingTime = wordCount / wordsPerMinute;
    return readingTime > 0 ? readingTime.toFixed(2) : 0;
  };

  const copyText = () => {
    if (text !== "") {
      try {
        navigator.clipboard.writeText(text);
        alert("Text Copied");
        document.getSelection().removeAllRanges();
      } catch (error) {
        alert("Error", error);
      }
    }
  };

  const removeExtraSpaces = () => {
    if (text.trim() === "") {
      setText(""); // Handle empty text case
    } else {
      // Remove extra spaces between words, preserving single spaces and newlines
      const cleanedText = text
        .replace(/\s+/g, " ") // Replace multiple spaces between words with a single space
        .trim(); // Trim leading and trailing spaces

      setText(cleanedText);
    }
  };

  const countParagraphs = (text) => {
    const paragraphs = text.trim().split(/\n+/); // Split text by one or more newline characters
    return paragraphs.filter((paragraph) => paragraph.trim().length > 0).length; // Filter out empty paragraphs
  };
  // Calculate word and character counts
  const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
  const charCount = text.length;
  const readingTime = calculateReadingTime(text);

  return (
    <div style={newColor}>
      <h1>{primaryHeading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          placeholder="Enter Your Text"
          value={text}
          onChange={handleTextChange}
          rows="8"
          style={newColor}
        ></textarea>
      </div>
      <button
        className="btn btn-primary my-1 mx-1"
        onClick={toUppercased}
        disabled={text.length === 0}
      >
        {UpperCase}
      </button>
      <button
        className="btn btn-info mx-1 my-1"
        onClick={toLowercased}
        disabled={text.length === 0}
      >
        {LowerCase}
      </button>
      <button
        className="btn btn-warning mx-1 my-1"
        onClick={toCapitalcased}
        disabled={text.length === 0}
      >
        {CapitalCase}
      </button>
      <button
        className="btn btn-primary mx-1 my-1"
        onClick={toSentenceCased}
        style={{ backgroundColor: "rgb(62, 116, 0)", color: "white" }}
        disabled={text.length === 0}
      >
        {toSentence}
      </button>
      <button
        className="btn btn-primary mx-1 my-1"
        onClick={removeExtraSpaces}
        style={{ backgroundColor: "rgb(143, 0, 172)", color: "white" }}
        disabled={text.length === 0}
      >
        {rmvExtraSpaces}
      </button>
      <button
        className="btn btn-primary mx-1 my-1"
        onClick={copyText}
        style={{ backgroundColor: "rgb(0, 0, 255)", color: "white" }}
        disabled={text.length === 0}
      >
        {Copy}
      </button>
      <button
        className="btn btn-danger mx-1 my-1"
        onClick={clearText}
        disabled={text.length === 0}
      >
        {ClearText}
      </button>
      <p className="Counter" id="textCounter">
        Total Words Count: {wordCount} / Total Characters Count: {charCount} /
        Total Paragraphs: {countParagraphs(text)}
      </p>
      <p>Estimated Reading Time: {readingTime} minutes</p>
      <p className="Counter">Text Preview</p>
      <p>{text.length !== 0 ? text : "Nothing to Preview"}</p>
    </div>
  );
};

TextArea.propTypes = {
  primaryHeading: PropTypes.string,
  UpperCase: PropTypes.string,
  LowerCase: PropTypes.string,
  CapitalCase: PropTypes.string,
  ClearText: PropTypes.string,
};

export default TextArea;
