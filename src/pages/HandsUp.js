import React, { Component } from 'react';
import Banner from '../assets/huban.png';
import Flows from '../assets/flows.png';
import FlowsB from '../assets/flowb.png';
import Arch from '../assets/huparch.png';
import LfHu from '../assets/lowfidelityhu.png';
import OldHu from '../assets/oldwireframeshu.png';
import HfHu from '../assets/hfwfhu.png';
import StyleGuide from '../assets/styleguide.png';
import Sketch from '../assets/sketchHu.png';
import Logo from '../assets/designhands.png';
import Hands from '../assets/alpha.png';
import { Link } from 'react-router-dom';


export default class HandsUp extends Component {
  render() {
    return (
      <div className='h-entry workMain'>
{/*         
               <Helmet>
          <title> Hands Up!</title>
        <meta name='author' content='Ketania Govender'/>
          <meta name="description" content="The design process of Hands Up"/>
   
    <meta property="og:site_name" content="Ketania Govender" />
    <meta property="og:title" content="Hands Up " />
    <meta property="og:type" content="website" />
     <meta
      property="og:image"content="https://github.com/ketaniaaa/ketania/src/assets/K.G.png"/>
    <meta property="og:image:alt" content="Ketania Govender Logo" />
    <meta
      property="og:url" content="https://ketaniaaa.github.io/Ketania/scrolltroll"/>
       <meta name="keywords" content="style guide, wireframes, lowfidelity wireframes, user flows, ixd, UXUI, Portfolio, react, front-end development, desing, illustration"/>
      </Helmet> */}

<img src={Banner} alt="Heads Up banner" className='workBanner' />
<a href="https://snack.expo.dev/@ketania/handsup?platform=ios" target='_blank' rel="noreferrer" className='demoLink'> Demo</a>
<main className='workContent'>
<section className='sectionHUTitle'>
  <p className='sectionHUName'> Overview</p>
 <p className='workP'>Hands Up! is a mobile application made with React Native. This was a self-initiated project in completion of my degree.
</p>
 <p className='workP'>Hands Up! aims to create a platform for learning South African sign language (SASL) that is accessible for all ages and uses innovative teaching methods through the use of artificial intelligence. </p>
</section>

<section className='overviewHu'>
  <p className='overviewTitle'>Role:</p>
  <p className='overviewSum'>UX and UI Design, Development, Illustration</p>

   <p className='overviewTitle'>Project Duration:</p>
  <p className='overviewSum'>October 2022 - November 2022 (4 Weeks)</p>

   <p className='overviewTitle'>Tools:</p>
  <p className='overviewSum'>Figma, Adobe Illustrator, Procreate, Google forms, React Native, Tensorflow, PyTorch, Expo</p>

   <p className='overviewTitle'>Deliverables:</p>
  <p className='overviewSum'>Proof of concept app prototype and website</p>
</section>

<section className='sectionHUTitle sectionA'>
  <p className='sectionHUName'>01 Define</p>
  <p className='sectionHupTitle'>Problem Statement</p>

</section>
<h2 className='pinkTitle'>Finding resources online to learn South African Sign Language is extremely limited and seldom interactive.</h2>
<p className='workP'>
South Africa has a deaf population of approximately 4 million people yet only 240 000 South African Sign Language speakers. This causes a break in communication between an already marginalised group of people. 
Despite being one of South Africa’s official languages, the resources for learning are seldom. 
</p>
  <p className='sectionHup1Title'>Competitor Analysis</p>
<p className='workP'>My research has largely focused on the learning material for SASL and language learning in general. Research indicates that majority of SASL learning takes place in person, often through tertiary institutions and private lessons. This method can be expensive and inaccessible and does not allow for casual, self-paced learning. 

</p>
<p className='workP'>The online resources are also limited to RealSASL.com and the mobile application SASL DEAFinition. These resources mainly provide a dictionary and videos for SASL. According to Zhang and Zou (2022), effective language learning requires interactive feedback. This therefore indicates a gap in the market. </p>
<article className='discoverSection'>
 <section className='pinkMain'>
  <section className='sectionHUTitle sectionA'>
  <p className='sectionHUName'>02 Discover</p>
  <p className='sectionHupTitle'>User Research</p>
</section>
 <p className='workP'>With better insight into the state of SASL learning, I knew that I wanted to create a product that could be used by a wide range of users. I, therefore, conducted both online surveys and in-person interviews with three distinct groups of people: hearing impaired, Sign Language majors and casual learners.</p>
<p className='sectionHup2Title'> Questions:</p>
<ul className='questionList'>
  <li className='questionLi'>Are you able to find free resources online for learning SASL?</li>
   <li className='questionLi'>Are there any issues with these resources? If yes, what are they?</li>
    <li className='questionLi'>Do you believe SASL can be learnt online?</li>
     <li className='questionLi'>If you do not already speak SASL, would you want to learn it?</li>
     <li className='questionLi'>If you do want to learn SASL, are there any obstacles preventing your learning journey?</li>
</ul>
<p className='sectionHup2Title'> Findings</p>

<article className='interviewCards'>
<section className='intCard'>
  <p className='intCardNum'>Interview Insight #1</p>
  <p className='intCardTitle'>Dictionaries are not helpful for learning</p>
  <p className='intCardDes'>providing a large list of words in SASL is overwhelming for beginners and only accounts for literal translation instead of phrase fluency.</p>
</section>
<section className='intCard'>
    <p className='intCardNum'>Interview Insight #2</p>
  <p className='intCardTitle'>There is no progression tracking </p>
  <p className='intCardDes'>New learners cannot test their skills or see how much they have learnt. This results in a lack of motivation to continue learning.</p>
</section>
</article>

<article className='interviewCards'>
<section className='intCard'>
  <p className='intCardNum'>Interview Insight #3</p>
  <p className='intCardTitle'>Feedback and checking of signing is important</p>
  <p className='intCardDes'>Learners would like to know if their hand position and signing is correct.</p>
</section>
<section className='intCard'>
    <p className='intCardNum'>Interview Insight #4</p>
  <p className='intCardTitle'>Not enjoyable for younger learners.</p>
  <p className='intCardDes'>Most learning methods that already exist do not account for younger users in both content and design of learning materials </p>
</section>
</article>
<p className='workP'>After understanding the pain points of potential users, I began designing with the knowledge of features that should be prioritised. These include a test feature to give users feedback, grouping phrases into digestible lessons, progress tracking of a curriculum and bright and interesting colours to attract a younger audience.</p>

</section>
</article>


<section className='sectionHUTitle sectionA'>
  <p className='sectionHUName'>03 Ideate</p>
  <p className='sectionHupTitle'>Design</p>
</section>

<p className='workP'>I began ideation by figuring out how I wanted the users to interact with the application. Putting down the architecture of the website usually allows me to make visual design decisions based on maps and flows. </p>
<img src={Flows} alt="flows" className='FlowHU' />
<img src={FlowsB} alt="flow chart" className='flowHU' />
  <p className='sectionHup1Title'>Site Architecture</p>

  <p className='workP'>After I went through what kind of interactions I would like for the user, I put down all the screens and pages I would need for the final application before wireframing. </p>
<img src={Arch} alt="site map" className='flowHU' />

<section className='sectionHUTitle sectionA'>
  <p className='sectionHUName'>04 Protoype</p>
  <p className='sectionHupTitle'>Wireframing and <br />
  Usability Testing</p>
</section>
  <p className='workP'>I started visualising the application by creating simple low-fidelity wireframes. This was to get a simple idea of how I wanted to layout information without focusing on aesthetics just yet. </p>
  <img src={LfHu} alt="low fidelity wireframes" className='flowHU'  />
  <p className='workP'>I knew that I wanted to create an accessible application and thought that a minimalist design system would be well suited. I created high-fidelity wireframes and a prototype using a black and white palette and fun characters. When I tested this iteration of design, user’s found the design dull and clinical so I opted for a redesign.</p>
   <img src={OldHu} alt="old wireframes" className='flowHU' style={{paddingBottom:'10%'}} />

{/* pink */}

<article className='discoverSection'>
 <section className='pinkMain'>

<section className='sectionHUTitle sectionA'>
  <p className='sectionHUName'>05 Design</p>
  <p className='sectionHupTitle'>Design System</p>
</section>

<p className='workP'>For fonts, I chose Poppins and Lato due to their high accessibility rating in order to make content on the application easier to read. I have also chosen sans-serif as these fonts can come across as friendlier as I wanted to encapsulate an easy-going mood for Hands Up!</p>
<p className='workP'>I have also chosen a bright colour palette to reflect this choice of mood. I chose a dark blue as the primary colour for text as there is high contrast. </p>
<img src={StyleGuide} alt="style guide" className='flowHU' />
<p className='workP'>For fonts, I chose Poppins and Lato due to their high accessibility rating in order to make content on the application easier to read. I have also chosen sans-serif as these fonts can come across as friendlier as I wanted to encapsulate an easy-going mood for Hands Up!

I have also chosen a bright colour palette to reflect this choice of mood. I chose a dark blue as the primary colour for text as there is high contrast. </p>

<p className='sectionHup2Title'> Branding Design and <br />
Illustration</p>


<p className='workP'>After narrowing down the colours, I began by brainstorming my logo. I wanted to include hands in it because this is a sign language application after all.</p>
<p className='workP'>After sketching in procreate, I settled on a design that focused on a hand looking like a speech bubble. This was decided as this logo has a good silhouette for branding purposes. </p>

<section className='logoSection'>
  <img src={Sketch} alt="logo brainstorming" />
  <img src={Logo} alt="final logo design" className='handsLogo'/>
</section>
<p className='workP'>In order to match the look of the site, I wanted to create lessons that used custom illustrations of signs. I therefore developed a basic system of numbers and letters which would populate the application. The design consists of rounded illustrations. </p>
  <img src={Hands} alt="custom alphabet" className='flowHU'  style={{paddingBottom:'10%'}}/>
 </section>
 </article>

<section className='sectionHUTitle sectionA'>
  <p className='sectionHUName'>06 Develop</p>
  <p className='sectionHupTitle'>Final Design</p>
</section>

<p className='workP'>With the design decisions finalised, I created a new and fresh design show below. These wireframes resulted in what was developed at the end of the project. </p>
 <img src={HfHu} alt="High fidelity wireframes" className='flowHU'  style={{paddingBottom:'10%'}}/>
<p className='endUPButton'>Check out a demo of Hands Up on Expo:</p>
 <a href="https://snack.expo.dev/@ketania/handsup?platform=ios" target='_blank' rel="noreferrer" className='demoLink' style={{transform:'translateY(-30px)'}}> Demo</a>


<article className='discoverSection'>
 <section className='pinkMain'>
<section className='sectionHUTitle sectionA'>
  <p className='sectionHUName'>06 Overview</p>
  <p className='sectionHupTitle'>Outcomes</p>

</section>

<p className='workP'>Hands Up! was the first mobile application I had developed or designed so there were a lot of learning opportunities from this project. The adjustment to new technology was difficult as I was learning as I was making. The time constraints prevented more testing as I would have liked to do usability testing for the final iteration. </p>
<ul className='questionList' style={{paddingBottom:'10%'}}>
  <li className='questionLi'>Use the HCI’s contrast checkers </li>
   <li className='questionLi'>Make use of differing font families for better contrast</li>
    <li className='questionLi'>plan buttons and components in more detail for easier development.</li>
</ul>
<Link to={'/ScrollTroll'} className="nextProject">Next Project:
<br />
<em className='scrollNext'>Scroll Troll</em>

</Link>
</section>
</article>
</main>
      </div>
    )
  }
}
