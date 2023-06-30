import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

class WorkItem extends Component {
  render(){
    return (
      <section className='workItem'>
 <img src={this.props.image} alt={this.props.alt} className="workItemImage"/>
 <section className='workItemCopy h-card'>
<h1 className='p-name workItemTitle'>{this.props.name}</h1>
<p className='p-summary workItemSummary'>{this.props.description}</p>
<Link className='u-url workItemLink' to={this.props.route}>{this.props.button} <ArrowForwardIosIcon className='workLinkIcon'/>

</Link>
 </section>
      </section>
    );
  }
}

export default WorkItem;