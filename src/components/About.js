import React, {useState} from "react";
export default function About() {
  const [darkModeStyle, setDarkModeStyle]=useState({
    color:'black',
    backgroundColor:'white'
  })
  const [btnState, setBtnState]=useState("Enable Dark Mode");
  const toggleStyle = ()=>
  {
    if (darkModeStyle.color ==='white') {
            let toggleStyleVar= 
            {
              color:'black',
              backgroundColor:'white'
            }
            setDarkModeStyle (toggleStyleVar);
            setBtnState ("Enable Dark Mode");

    }
    else {
            let toggleStyleVar= 
            {
              color:'white',
              backgroundColor:'black'
            }
            setDarkModeStyle (toggleStyleVar);
            setBtnState ("Disable Dark Mode");
            
    }
  }
  
  return (
    <div className="container" style={darkModeStyle}>
      <h2>About Us</h2>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne" style={darkModeStyle}>
            <button
              className="accordion-button" style={darkModeStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              
            >
              Accordion Item #1
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={darkModeStyle}>
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the ,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={darkModeStyle}>
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed" style={darkModeStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={darkModeStyle}>
              <strong>This is the second item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the ,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={darkModeStyle}>
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed" style={darkModeStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={darkModeStyle}> 
              <strong>This is the third item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the ,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
      <div className="container my-3">
        <button type="button" className="btn btn-primary my-3" onClick ={toggleStyle}> {btnState} </button>
      </div>
    </div>
  );
}
