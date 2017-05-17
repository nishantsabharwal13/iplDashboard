import React from 'react';
import { Link } from 'react-router';

const Header = React.createClass({

	renderCalender(value,key){
	return(
			<li key={key}>
			<Link to={`/calender/${value[0]}`}>
			{value[0]}
			</Link>
			</li>
		)
	},
	render(){
		return(
			<div>
			<div className="header col-12">
			<Link to="/">
			<div className="logo"/>
			<div className="header-text" onClick={this.calender}>IPL Match Statistics</div>
			</Link>
			</div>
			<div className="sub-menu">
			<ul className="inline-list wrapper" >
			{Object.entries(this.props.data).map(this.renderCalender)}
			</ul>
			</div>
			</div>
			);

	}
});

export default Header;