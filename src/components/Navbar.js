import React, {Component} from 'react';
import { Link } from 'react-router-dom';
class Navbar extends Component {
  render(){
    return (
      <>
     <nav className='navigation navBar'>
     <Link to='/' className='p-name navTitle'>K.G</Link>

     <ul className='navigation navUL'>
      <li className='list navLi'><Link to='/About' className='u-url navLink'> about</Link></li>
      <li className='list navLi'><Link to='/Work' className='u-url navLink'> work</Link></li>
      <li className='list navLi'><Link to='/Contact' className='u-url navLink'> contact</Link></li>
     </ul>
     </nav>

       
      </>
    );
  }
}

export default Navbar;