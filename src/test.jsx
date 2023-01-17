// React is loaded and is available as React and ReactDOM
// imports should NOT be used
import React from "react";
import ReactDOM from "react-dom";

class Message extends React.Component {
    render() {
      return (<React.Fragment>
            <a href="#">Want to buy a new car?</a>
            <p>Call +11 22 33 44 now!</p>
          </React.Fragment>);
    }
  }
  
  document.body.innerHTML = "<div id='root'></div>";
  const root = ReactDOM.createRoot(document.getElementById("root"));
  
  root.render(<Message />);
  const rootElement = document.getElementById("root");
  setTimeout(() => {
    console.log("Before click: " + rootElement.innerHTML);
  
    document.querySelector("a").click();
    setTimeout(() => {
      console.log("After click: " + rootElement.innerHTML);
    });
  });