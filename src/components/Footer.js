import React, {Component} from 'react';
import CopyrightIcon from '@mui/icons-material/Copyright';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import FavoriteIcon from '@mui/icons-material/Favorite';
class Footer extends Component {
  render(){
    return (
      <footer>
    <p className='footerTitle'>Copyright <CopyrightIcon/> 2023 Ketania Govender. All Rights Reserved. </p>
<ul className='footerList'>
  <li> <a href="mailto: ketaniaaa@gmail.com" className='footerIcons'> <EmailIcon/></a>
  </li>
  <li><a href="https://www.linkedin.com/in/ketania-govender" target="_blank" rel="noreferrer" className='footerIcons'> <LinkedInIcon/></a></li>
  <li><a href="https://github.com/ketaniaaa" target="_blank" rel="noreferrer" className='footerIcons'> <GitHubIcon/></a></li>
</ul>
       
      </footer>
    );
  }
}

export default Footer;