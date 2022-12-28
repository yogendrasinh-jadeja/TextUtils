import React from "react";

export default function About(props) {
  // const [mystyle, setmystyle] = useState({
  //   color:'black',
  //   backgroundColor:'white'
  // })
  let mystyle={
    color:props.mode==="dark"?"white":"#042743",
    backgroundColor:props.mode==="dark"? "rgb(36 74 104)" : "white",

  };
  return (
    <div className="container" style={{color:props.mode==="dark"?"white":"#042743"}}>
      <h1 className="my-3">About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item" >
          <h2 className="accordion-header" id="headingOne">
            <button style={mystyle}
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
             <strong>Analyze your text</strong> 
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystyle}>
              TextUtils gives you a way to analyze your text quickly and efficiently.Be it word count or character count
            </div>
          </div>
        </div>
        <div className="accordion-item" >
          <h2 className="accordion-header" id="headingTwo">
            <button style={mystyle}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
             <strong>Free to use</strong> 
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystyle}>
              TextUtils is free character counter tool that provides instant character count and word count statistic for a given text. TextUtils reports the number of words and characters. thus it is suitable for writing text with word/character limit
            </div>
          </div>
        </div>
        <div className="accordion-item" >
          <h2 className="accordion-header" id="headingThree">
            <button style={mystyle}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
             <strong>Browser compatible</strong> 
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystyle}>
              This word counter software works in any web browsers such as chrome, Firefox, Safari, Opera.It suits to count characters in facebook, blogs, books, excel document, pdf document, essays, etc.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
