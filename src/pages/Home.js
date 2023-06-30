import React, {Component} from 'react';
import Hero from '../assets/hero.png';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import { HashLink } from 'react-router-hash-link';

import {WorkList} from '../components/WorkList';
import WorkItem from '../components/WorkItem';
class Home extends Component {
  render(){
    return (
      <div className='home'>
    <main className='homeMain h-card'>
    <section className='homeText'>
<p className='heroTitle'>Hi! I'm <em className='underlinedName'>Ketania</em> , <br />
a <em className='redHero'>designer</em> and <br />
<em className='redHero'>developer</em>.
</p>
<p className='homeSummary'>I am a Johannesburg native with a passion for creating <s className='redTextS'>user</s> <em className='redText'> 
human-friendly <SentimentSatisfiedAltIcon/></em> and <em className='redText'>visually striking digital </em> experiences. I have a background in game development, animation and UX/UI design.</p>
    </section>
    <img src={Hero} alt="Collage art of my face!" className='heroImg'/>
    </main>
    
   <HashLink className='scrollDown' smooth to='#featured'>
    featured projects <br />
  <KeyboardArrowDownIcon className='downHome' fontSize='large'/>
   </HashLink>
<div id="featured">
  <h1 className='featuredTitle'> Featured Projects</h1>
   {WorkList.map((workItem, value)=>{
        return(

          <WorkItem name={workItem.name}
          description={workItem.description}   
          image={workItem.image}
           route ={workItem.route}
           button ={workItem.button}
           alt={workItem.alt}
           
           />
      

        )
      }
      )}
      </div>
      </div>
    );
  }
}

export default Home;