

function Contactform() {
    return (
      <>
      <div className="outer-div">
      {/* {/ <!-- From Uiverse.io by Praashoo7 -->  /} */}
  <form className="form">
      <p id="heading" className="poppins-thin">Contact Us</p>
      <div className="field">
     
        <input  placeholder="Username" className="input-field Roboto-thin" type="text" />
      </div>
      <div className="field">
        <input placeholder="Password" className="input-field" type="password" />
      </div>
  
  
      <div className="field">
        {/* {/ <input placeholder="Password" className="input-field" type="text" /> /} */}
        <textarea placeholder="Message" className="input-field" ></textarea>
      </div>
      <div className="btn">
      <button className="button3 poppin " >Send to</button>
      </div>

  </form>
      </div>
        
      </>
    )
  }
  
  export default Contactform
  