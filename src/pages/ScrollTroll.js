import React, { Component } from 'react';
import Banner from '../assets/scrolltroll/tsbana.png';
import dtWf from '../assets/scrolltroll/lowfidelitysc.png';
import mWf from '../assets/scrolltroll/lowfidelitymobile.png';
import fWf from '../assets/scrolltroll/lowfidelityforms.png';


export default class ScrollTroll extends Component {
  render() {
    return (
       <div className='h-entry workMain'>
        <img src={Banner} alt="Heads Up banner" className='workBanner' />
<a href="https://ketaniaaa.github.io/scrolltroll/" target='_blank' rel="noreferrer" className='demoLink'> Demo</a>
<main className='workContent'>
  <section className='sectionSTTitle'>
  <p className='sectionSTName'> Overview</p>
 <p className='workP'>
 Scroll Troll is an interactive artwork website made in ReactJS. Scroll Troll aims to subvert the rules of UX and UI in order to create a sub-optimal experience. The site takes inspiration from the subreddit 'r/BadUIBattles', where developers and designers 
 aim to create applications that oppose the rules we know for creating good user experiences by creating gameified components.
</p>
 <p className='workP'
 >
  For this project, I wanted to create a parody 
 social media site in order to demonstrate what a designer should not do. This was largely because I tend to learn through examples of right and wrong when approaching UX and UI. 
 This project was a university project and therefore I had to balance good and bad UX/UI as the rest of the site, holding my theory and design work still had to be markable. This was 
 a fun project as I got to create a space that reflected childlike play through the creation of visual assets and I learnt more about React as I had to 
 rework code for different uses. 
</p>
</section>
<section className='overviewSt'>
  <p className='overviewTitleSt'>Role:</p>
  <p className='overviewSumSt'>UX and UI Design, Development, Illustration</p>

   <p className='overviewTitleSt'>Project Duration:</p>
  <p className='overviewSum'>October 2022 - November 2022 (4 Weeks)</p>

   <p className='overviewTitleSt'>Tools:</p>
  <p className='overviewSumSt'>Figma, Adobe Illustrator, Procreate, Google forms, React Native, Tensorflow, PyTorch, Expo</p>

   <p className='overviewTitleSt'>Deliverables:</p>
  <p className='overviewSumSt'>Proof of concept app prototype and website</p>
</section>

<section className='sectionSTTitle sectionA'>
  <p className='sectionSTName'>01 IxD</p>
  <p className='sectionHupTitle'>Planning</p>


</section>
  <p className='sectionHup1Title'>Site Architecture</p>

<p className='workP'>When approaching the site map, I wanted a very clean-cut website with minimal sections and pages for ease of navigation. I knew that I did not want to make a separate page linked in the navigation bar for the internet artwork as I wanted to ensure that the internet artwork was inherent to the website and presented to the user upon first entry of Scroll Troll.</p>
<p className='workP'> This is why I decided to feature the internet artwork on the homepage, leaving the other main pages for the navigation bar the blog section and the design section. This is because I knew that the artwork itself would be quite intense and abrasive and therefore opted for a minimalist design regarding the other pages. All main pages that a required for the exam can be accessed via the navigation bar which holds links to the homepage via the logo and the site name and to theory and blog work via the links. I have added extra links that are not inherent to the rubric in the footer because I still view these pages as important. The footer allows the user to interact with my original design documents in Figma and access my GitHub repository. I have also added a site map for the exam for heightened accessibility.</p>

 <img src='https://ketaniaaa.github.io/scrolltroll/static/media/map.4ef726427ae35ee95838.png' alt="High fidelity wireframes" className='flowHU'  style={{paddingBottom:'10%'}}/>
  <p className='sectionHup1Title'>User Flows</p>
  <img src="https://ketaniaaa.github.io/scrolltroll/static/media/flow.3db483fe94f5716207d9.png" alt="User flow chart for Scroll Troll" className='flowHU'  style={{paddingBottom:'10%'}}/>
  <p className='workP'>
The user flow is quite simple in the fact that a user can get from entry of the site to any entry or page in three clicks or less which is vital for reducing the strain to find information. The internet artwork is available on the homepage which is the entry point for the website. My internet artwork is the interactions with the forms via sign-up for Scroll Troll. I have also ensured that this section can be accessed via a single click from anywhere on the page through the static sign-up button on the navigation bar and on entries via the ‘share post’ button. The reason that I have a prioritized flow to this section is that the basis of this project is to create an internet artwork. This means that my user will likely be interacting with Scroll Troll for the artistic experience over everything else and therefore this feature must be made apparent as often as possible to the user. According to Kalbach (2007, pp. 20), in order to create a good website, the navigation is of utmost importance as the navigation should consider the kind of user and their intentions for the website in order to adhere to user-centred design (UDC) principles. I feel that Scroll Troll embodies just this as I have prioritized navigation to my internet artwork. I also know that markers should be able to find relevant information easily and therefore the theory and design sections are easy to find and clearly laid out.
  </p>

  <img src="https://ketaniaaa.github.io/scrolltroll/static/media/screens.8d5c2ab00aba25ad5ef4.png" alt="refined flow chart "className='flowHU'  style={{paddingBottom:'10%'}}/>
  <p className='workP'>Since the internet artwork is long and intentionally hard to get through with additional steps, I have tried to ensure that interaction with non-artwork aspects of the site is highly useable. As seen above, the flow from screens is quite linear. The design and blog sections have the same layouts and use the same design template so these pages also have the exact same flow from the home page to the selection page and finally to the blog page. This is because I have set up expectations through the use of the same design and therefore the interactions should match the design.</p>
  <p className='workP'>The longest journey from starting on the home page is the internet artwork. This can be seen as bad UI because I have segmented a form and made the process of creating an account incredibly long which can deter a user from wanting to interact with a site. Doherty and Sorenson support this sentiment by arguing that successful user flows ensure that a process takes up the least amount of time possible because a good experience does not weigh heavily on a user’s attention span (pp 4387, 2015). It is my intention to subvert this core principle of user experience and therefore I have segmented screens to create a longer experience of the artwork. This flow also intentionally creates a specifically intended emotional journey for the user which is discussed in the next section.

</p>

  <p className='sectionHup1Title'>Emotional Journey</p>
  <img src="https://ketaniaaa.github.io/scrolltroll/static/media/journey.9937f91e693894dc6df8.png" alt="refined flow chart "className='flowHU'  style={{paddingBottom:'10%'}}/>

<p className='workP'>
The emotional journey of a website usually aims to predict the feelings of the user in hopes that the reactions of the user are positive. In my emotional journey, there is a disconnect as I am to provide the user with two different feelings depending on their position on the website. For the entirety of the website, excluding my internet artwork, I wanted to create a positive experience for markers as a core skill that is taught in the course is how to produce workable products. This is reflected in the interaction with entries and navigation.
</p>

<p className='workP'>
  
  The second journey is more nefarious as I aim to curate an experience that gets worse and worse through the progression of the journey. This takes place with the interaction with my internet artwork. The user is gently introduced to the intentionally bad UI and UX and the experience aims to become more and more annoying throughout the form in order to result in utter dissatisfaction by the end of the artwork. This building anger is what I think leverages the subversion of UX principles as I used good UX and UI to lure the user into signing up to begin the assault of bad design.
</p>

<p className='workP'>
  
</p>

<section className='sectionSTTitle sectionA'>
  <p className='sectionSTName'>02 Layout</p>
  <p className='sectionHupTitle'>Wireframing</p>


</section>
  <p className='sectionHup1Title'>Low-fidelity Wireframes </p>
  <img src={dtWf} alt="low-fidelity wireframes of scroll troll "className='flowHU'  style={{paddingBottom:'10%'}}/>
 <img src={mWf} alt="low-fidelity wireframes of scroll troll "className='flowHU'  style={{paddingBottom:'10%'}}/> 
 <img src={fWf} alt="low-fidelity wireframes of scroll troll "className='flowHU'  style={{paddingBottom:'10%'}}/>

</main>

        </div>
    )
  }
}
