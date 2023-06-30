import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
      <div className='contactPage'>
        <h1 className='skillTitle'>Get in touch!</h1>
        <h2 className='contactCopy'>I am available for any opportunities and collaboration. </h2>
        <a href="mailto: ketaniaaa@gmail.com" className='contactEmail'> ketaniaaa@gmail.com</a>
         <h3 className='socialList'>Social :</h3>
        <ul className='socialUL'>
          <li><a href="https://www.linkedin.com/in/ketania-govender" target="_blank" rel="noreferrer" className='contactLink'>LinkedIn</a></li>
          <li><a href="https://github.com/ketaniaaa" target="_blank" rel="noreferrer" className='contactLink'>GitHub</a></li>
          <li><a href="https://www.instagram.com/ketaniaaa/" target="_blank" rel="noreferrer" className='contactLink'>Instagram</a></li>
        </ul>
      </div>
    )
  }
}
