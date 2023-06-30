import React, { Component } from 'react';
import AboutImg from '../assets/aboutimg.png';
import Resume from '../assets/ketania-govender-resume.pdf';
import DownloadIcon from '@mui/icons-material/Download';

export default class About extends Component {
  render() {
    return (
      <div>
<main className='h-card aboutMain'>
  <img src={AboutImg} alt="Portrait of Ketania" className='u-photo aboutImg' />
  <section className='description aboutCopy'>
    <h1 className='aboutTitle'>A bit about me</h1>
    <p className='aboutP'>I am a UX/UI designer and developer with an affinity for illustration. I hail from Johannesburg, South Africa, where I have recently completed my BA (Hons) Digital Arts at the University of the Witswaterstrand. I have gained some pretty cool skills through my degree such as game development, animation and interface design skills. A lot of my projects shown my multidisciplinary skills as I largely produced projects from end-to-end.  I have a passion for creating products that feel good use and feel good to look at.</p>
   <p className='aboutP'>
I majored in Animation and Interactive Media. I have a keen interest in the intersection of artificial intelligence and art making, which the subject I am exploring in my personal projects. I have also contributed to a group research paper regarding to future of creative application of artificial intelligence in Africa.
When I am not making games, you can find me playing them. I also have a keen interest in literature and traditional art-making. 
   </p>
    <a href={Resume} download="Ketania-Govender-Resume" target="_blank" rel="noreferrer" className='resumeDownload'>Resume <DownloadIcon className='downloadIcon'/></a>
  </section>
</main>
<h1 className='skillTitle'>Skills</h1>
<h2>Design</h2>
<section className='skillSection'>
 <p className='skillPill'>Figma</p>
 <p className='skillPill'>Adobe Creative Suite</p>
 <p className='skillPill'>Wireframing</p>
 <p className='skillPill'>inVision</p>
 <p className='skillPill'>User Reseach</p>
 <p className='skillPill'>Usability Testing</p>
 </section>
 <section className='skillSection'>
 <p className='skillPill'>SEO</p>
<p className='skillPill'>Storyboarding</p>
 <p className='skillPill'>Illustration</p>
 <p className='skillPill'>3D Modelling</p>
<p className='skillPill'>Animation</p>
</section>


<h2>Development</h2>
<section className='skillSection'>
 <p className='skillPill'>C#</p>
 <p className='skillPill'>Unity Engine</p>
 <p className='skillPill'>JavaScript</p>
 <p className='skillPill'>HTML/CSS</p>
 <p className='skillPill'>ReactJS</p>
 </section>
 <section className='skillSection'>
 <p className='skillPill'>React Native</p>
 <p className='skillPill'>Angular/jQuery</p>
<p className='skillPill'>Swift UI</p>
</section>


      </div>
    )
  }
}
