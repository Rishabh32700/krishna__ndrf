import React from 'react'

import './newCases.css'

const New__Cases = () => {
  return (
    <>
      <div className="create__new__cases">
        <div className="create__new__cases__container">
          <form>
            <div className="wrapper">
              <label>Type of Emergency</label>
              <input type="text" name="" id="" />
            </div>
            <div className="wrapper">
              <label>POC</label>
              <input type="text" name="" id="" />
            </div>
            <div className="wrapper">
              <label>When did disaster started</label>
              <input type="text" name="" id="" />
            </div>
            <div className="wrapper">
              <label>Level of Urgency / Impact</label>
              <input type="text" name="" id="" />
            </div>
            <div className="wrapper">
              <label>Is there any Casualities? if 'yes', How many?</label>
              <input type="text" name="" id="" />
            </div>
            <div className="wrapper">
              <label>Description</label>
              <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default New__Cases