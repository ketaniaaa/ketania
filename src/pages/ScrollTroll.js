import React, { Component } from 'react';
import Banner from '../assets/scrolltroll/tsbana.png';
import dtWf from '../assets/scrolltroll/lowfidelitysc.png';
import mWf from '../assets/scrolltroll/lowfidelitymobile.png';
import fWf from '../assets/scrolltroll/lowfidelityforms.png';
import hWf from '../assets/scrolltroll/hfsc.png';
import hfWf from '../assets/scrolltroll/hfscf.png';
import hfbWf from '../assets/scrolltroll/hfbwfsta.png';
import contrast from '../assets/scrolltroll/contrast.png';
import { Link } from 'react-router-dom';



export default class ScrollTroll extends Component {
  render() {
    return (
   
       <div className='h-entry workMain'>
           {/* <Helmet>
          <title> Scroll Troll</title>
        <meta name='author' content='Ketania Govender'/>
          <meta name="description" content="The design process of Scroll Troll"/>
   
    <meta property="og:site_name" content="Ketania Govender" />
    <meta property="og:title" content="Scroll Troll " />
    <meta property="og:type" content="website" />
     <meta
      property="og:image"content="https://github.com/ketaniaaa/ketania/src/assets/K.G.png"/>
    <meta property="og:image:alt" content="Ketania Govender Logo" />
    <meta
      property="og:url" content="https://ketaniaaa.github.io/Ketania/scrolltroll"/>
       <meta name="keywords" content="style guide, wireframes, lowfidelity wireframes, user flows, ixd, UXUI, Portfolio, react, front-end development, desing, illustration"/>
      </Helmet> */}
        <img src={Banner} alt="Heads Up banner" className='workBanner' />
<a href="https://ketaniaaa.github.io/scrolltroll/" target='_blank' rel="noreferrer" className='demoLink'> Demo</a>
<main className='workContent'>
  <section className='sectionSTTitle'>
  <p className='sectionSTName'> Overview</p>
 <p className='workP' style={{color: '#7A9647'}}>
  ** Please Note: Scroll Troll is an interactive experience and to best understand the project, I suggest visiting the site using the above link.
  </p>
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
  <p className='overviewSum'>June 2023 - July 2023 (8 Weeks)</p>

   <p className='overviewTitleSt'>Tools:</p>
  <p className='overviewSumSt'>Figma, Adobe Illustrator, Procreate, ReactJS</p>

   <p className='overviewTitleSt'>Deliverables:</p>
  <p className='overviewSumSt'>Internet Artwork via react site</p>
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
  <p className='sectionSTName'>02 Design and Illustration</p>
  <p className='sectionHupTitle'>Style Guide</p>


</section>
  <p className='sectionHup1Title'>Inspiration </p>

  <img src='https://ketaniaaa.github.io/scrolltroll/static/media/Inspiration.7709926f6356726dd4f8.png' alt="low-fidelity wireframes of scroll troll "className='flowHU'  style={{paddingBottom:'10%'}}/>
  <p className='workP'>A large influence on the site was neo-dadaist design. This design movement encompasses meme culture. A pattern that I noticed in memes was the use of infantile fonts such as Comic Sans and images that are badly drawn. I decided to draw inspiration from these concepts on my website. I liked the child-like quality of anti-design and meme formats so I have decided to use a simple palette with primary colours, hand-drawn images when brushes that look like pencil marks and a handwriting display font. </p>
  <img src='https://ketaniaaa.github.io/scrolltroll/static/media/twitterinspo.6b94578ca2bb912ee422.png' alt="twitter inspiration "className='flowHU'  style={{paddingBottom:'10%'}}/>
<p className='workP'>
  As Scroll Troll is a parody social media site, it was natural to draw inspiration from existing social media sites. A main inspiration regarding layouts was Twitter. I have used inspiration from the Twitter profile layout to create my entry template. The entry image acts as the header and there is a profile picture icon to imitate a user profile picture along with the author name in the format of a handle. 
</p>
  <p className='sectionHup1Title'>Colour Palette </p>
  <img src='https://ketaniaaa.github.io/scrolltroll/static/media/palette.9c426040c08ebef674ed.png' alt="lsite colours "className='flowHU'  style={{paddingBottom:'10%'}}/>

   <p className='workP'>
  Since I wanted to maintain a childlike feel for the UI of the site, I wanted to keep the colour palette simple. I have chosen jewel tones of the primary colours for my main colours of the site. These colours can be seen featured in the text and images of the site. These colours also are dark and therefore easy to read against a light background.
 </p>
 <p className='workP'>
  For my secondary colours and neutrals, I have chosen a green, a light beige and a charcoal tone. The green is featured on icons and drawings as the main logo features a green troll. The troll characters are consistently found across the site but are not used for text as the low contrast makes it hard to read. For the background, I have chosen a pale beige in the tonal family of yellow that I have chosen for the site. This tone gives a slight tint to the page while not competing with the darker blues and reds which make up the text for the site. This ensures that there is ample negative space and breathability for the user by using this colour as a background tone. 
 </p>
  <img src={contrast} alt="low-fidelity wireframes of scroll troll "className='flowHU'  style={{paddingBottom:'10%'}}/>

  <p className='workP'>
Accessibility is of importance when creating a website. I therefore have chosen colours that meet the HCI's minimum contrast requirements. This is why the main text is in a dark blue that is easy to read.
  </p>
  <p className='sectionHup1Title'>Typography </p>
  <img src='https://ketaniaaa.github.io/scrolltroll/static/media/fonts.841308ff4c9610d83d68.png' alt="typography"className='flowHU'  style={{paddingBottom:'10%'}}/>
<p className='workP'>For the display font, I have created my own font using Calligraphr. I simply drew out each letter and icon of the font and thus created Scroll Troll. I wanted a handwritten font that looked like a child had written out the letters yet upon failing to find a font that I both liked and was free to use I decided to use my own bad writing. I created the font using a 6b pencil brush in Procreate to create the rugged edges of the font. I have only used this font as a display font in headings, handles and large buttons because Scroll Troll is not suitable for long-form reading. </p>
  <p className='workP'>The body font is ‘Outfit’. I chose Outfit because it had a high rating for accessibility and I wanted long-form content to be readable. This sans-serif font pairs well with the display font while not straining the reader. I chose a sans-serif for the body as I thought the look was friendlier than a serif font as these can have a more serious denotation(Arnold, 2022).  </p>
  
  <p className='sectionHup1Title'>Logo and Icons </p>
  <img src='https://ketaniaaa.github.io/scrolltroll/static/media/logodesign.307df31ef9d2d0c90122.png' alt="logo design"className='flowHU'  style={{paddingBottom:'10%'}}/>
  <p className='workP'>
  The logo design again shows the child-like drawing theme I envisioned. I wanted to create a character for the brand Scroll Troll just as Duolingo has its bird Duo. The troll would therefore be the face of Scroll Troll. I used a pencil brush again and instead of using solid colouring, I made sure that the colouring of the troll was blotchy and showed gaps to enhance the juvenile look. 

</p>

  <p className='workP'>I then wanted to make sure that the logo could be recognisable. To do this I made silhouettes which can be used for tab icons and badges as the shape holds up well on a small scale.
</p>
  <img src='https://ketaniaaa.github.io/scrolltroll/static/media/icons.89932c10c44c233b9ba5.png' alt="iconography"className='flowHU'  style={{paddingBottom:'10%'}}/>
<p className='workP'>The icons used on Scroll Troll are largely hand drawn by me. The premade icons that I found online were too high-end for the aesthetic that I wanted to achieve on Scroll Troll and therefore decided to create my own. These custom icons fit the look of the font that is used throughout the website. This therefore, aids in visual cohesion and reinforces a clear visual identity for Scroll Troll.</p>
<p className='workP'>These icons are used for scroll-to-top buttons, the mobile menu and the closing of modals and pop-ups. I have also created additional icons for fabs that are commonly used on social medias to indicate home, feed and inboxes. As Scroll Troll is not actually a functioning social media, these icons have not been used on this version of the site.</p>
  <p className='sectionHup1Title'>Inputs and Buttons </p>
  <img src='https://ketaniaaa.github.io/scrolltroll/static/media/InputFields.75110d67910f86b46067.png' alt="inputs and progress bars for scroll troll  "className='flowHU'  style={{paddingBottom:'10%'}}/>
<p className='workP'>
As Spacescape is the main colour for text on the site, I wanted the input fields and the text to be coherent. For this, I have used a lighter hue of this shade of inactive inputs as this colour is lowly contrasted against the background. This change of colour also indicates to the user that there is a difference in the state because these inputs are not the same as the text colour. I have maintained convention with the error input boxes. For these, I have used red as red is conventionally used in design as a warning or error colour. 
</p>
<p className='workP'>
  The progress bar uses green for active content as this is another convention of design. The green indicates that the user is on the right path and the grey which is of low contrast indicates lessened importance. This therefore established information hierarchy through colour. 
  </p>
  <p className='workP'> 
Finally, I have used rounded buttons intentionally. Rounded corners allow the user to focus on the content of the button because the curves redirect the user's gaze towards the centre. The rounded button also creates a more positive vibe and requires less cognitive processing than squares. I have used square buttons for links in the internet artwork to subvert this experience in order to create a higher cognitive load for the user and make buttons harder to find.

    </p>  <p className='sectionHup1Title'>Layout  </p>
  <img src='https://ketaniaaa.github.io/scrolltroll/static/media/layouts.ff65155d97c8f426dbca.png' alt="layout of the site "className='flowHU'  style={{paddingBottom:'10%'}}/>
<p className='workP'>For the layout of Scroll Troll, I have used a grid layout. This was chosen because the simple use of grid lines allows for application of traditional design principles such as creating focal points. In Scroll Troll, I have aligned main content along grid lines to allow for negative space on the sides of entry pages for breathability. This allows for a less invasive visual of the website. This layout also allows for content to be emphasized and be place in a convenient visual position that naturally demands attention from the user.</p>




<section className='sectionSTTitle sectionA'>
  <p className='sectionSTName'>03 Layout</p>
  <p className='sectionHupTitle'>Wireframing</p>

</section>
<p className='workP'> I kept the wireframes with simple. For the main pages of the site, I maintained the principles of good UX and UI. The principles of UX are broken in the form design as I highlight back buttons over progress through high contrast and make form porocesses longer than necesssary, ultimately frustrating the user. The form diffuculty and bad design gradually increases and is tentatively shown in the wireframes. Please look at the demo for a better look. </p>
<p className="workP"> A deeper dive into the design decisions and details seen in the wireframes can be found on <a href="https://ketaniaaa.github.io/scrolltroll/#/Wireframes#top"> Scroll Troll</a></p>
  <p className='sectionHup1Title'>Low-fidelity Wireframes </p>
  <img src={dtWf} alt="low-fidelity wireframes of scroll troll "className='flowHU'  style={{paddingBottom:'10%'}}/>
 <img src={mWf} alt="low-fidelity wireframes of scroll troll "className='flowHU'  style={{paddingBottom:'10%'}}/> 
 <img src={fWf} alt="low-fidelity wireframes of scroll troll "className='flowHU'  style={{paddingBottom:'10%'}}/>
  <p className='sectionHup1Title'>High-fidelity Wireframes </p>
 <img src={hWf} alt="low-fidelity wireframes of scroll troll "className='flowHU'  style={{paddingBottom:'10%'}}/>
  <img src={hfbWf} alt="low-fidelity wireframes of scroll troll "className='flowHU'  style={{paddingBottom:'10%'}}/>

 <img src={hfWf} alt="low-fidelity wireframes of scroll troll "className='flowHU'  style={{paddingBottom:'10%'}}/>
<section className='sectionSTTitle sectionA'>
  <p className='sectionSTName'>04 Overview</p>
  <p className='sectionHupTitle'>Final Outcome</p>

</section>
<p className='workP'> The final iteration of Scroll Troll was a success. After showing the site to some friends and family, I was satisfied with their frustration and so the site did exactly what I intended. 
The navigation and feel of the other aspects of the site that were necessary for marking purposes were well designed and created a positive experience. This was contrasted by the annoyance of the form design which created a balance of both good and bad ( but the bad was good in this case!). </p>
<p className='workP'> I really enjoyed designing this website as I got to stray away from convention and invoke my inner child. The development was just as fun. I got to use my game design skills to create the worlds worst age selector via a snake game and put my regex skills to good use with a really tough password creation form. </p>
<p className='workP'> Scroll Troll has been one of my favourite projects that I have created and I think the idea is pretty popular. Since creating Scroll Troll, I have seen a bad password game and another site that uses intentionally bad UI to get under designers skin so this must be something people hate to love!</p>

<Link to={'/Swiftify'} className="nextProject">Next Project:
<br />
<em className='scrollNext'>Swifity</em>

</Link>
</main>



        </div>
    )
  }
}
