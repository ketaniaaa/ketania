import React, {Component} from 'react';
import { Link } from 'react-router-dom';
class Navbar extends Component {
  //    constructor(props) {
  //   super(props);
  //   this.state = {
  //     isNavbarVisible: true,
  //     prevScrollPos: 0,
  //   };
  //   this.scrollTimeout = null;
  // }

  // componentDidMount() {
  //   window.addEventListener('scroll', this.handleScroll);
  // }

  // componentWillUnmount() {
  //   window.removeEventListener('scroll', this.handleScroll);
  // }

  // handleScroll = () => {
  //   if (this.scrollTimeout) {
  //     clearTimeout(this.scrollTimeout);
  //   }

  //   this.scrollTimeout = setTimeout(() => {
  //     const { prevScrollPos } = this.state;
  //     const currentScrollPos = window.pageYOffset;

  //     this.setState({
  //       isNavbarVisible: prevScrollPos > currentScrollPos || currentScrollPos === 0,
  //       prevScrollPos: currentScrollPos,
  //     });
  //   }, 100);
  // };

  render(){
    // const { isNavbarVisible } = this.state;
    return (
      <>
     {/* <nav className={`navBar ${isNavbarVisible ? 'navbar-visible' : 'navbar-hidden'}`}> */}
     <nav className='navBar'>
     <Link to='/Home' className='p-name navTitle'>K.G</Link>

     <ul className='navigation navUL'>
     <li className='list navLi'><Link to='/Work' className='u-url navLink'> work</Link></li>
      <li className='list navLi'><Link to='/About' className='u-url navLink'> about</Link></li>
      <li className='list navLi'><Link to='/Contact' className='u-url navLink'> contact</Link></li>
     </ul>
     </nav>

       
      </>
    );
  }
}

export default Navbar;