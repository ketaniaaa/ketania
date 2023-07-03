import React, { Component } from 'react';
import {WorkList} from '../components/WorkList';
import WorkItem from '../components/WorkItem';

export default class Work extends Component {
  render() {
    return (
      <div id='work'>
<h1 className='p-name workTitle'>Check out the projects I've done!</h1>
  {WorkList.map((workItem, value)=>{
        return(

          <WorkItem name={workItem.name}
          description={workItem.description}   
          image={workItem.image}
           route ={workItem.route}
           button ={workItem.button}
           alt={workItem.alt}
           tag1={workItem.tag1}
           tag2={workItem.tag2}
           
           />
      

        )
      }
      )}
        </div>
    )
  }
}
