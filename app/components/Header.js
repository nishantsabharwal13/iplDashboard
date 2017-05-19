import React from 'react';
import { Link } from 'react-router';

const Header = React.createClass({

	cssBorder(key){
		var list =document.getElementsByTagName('li');
		for (var i=0; i <list.length; i++){
			document.getElementsByTagName('li')[i].classList.remove("active-class");
		}
		list[key].className += ' active-class'; 
	},
	renderCalender(value,key){
	return(
			<li key={key} >
			<Link to={`/calender/${value[0]}`} onClick={this.cssBorder.bind(this,key)} className={key}>
			{value[0]}
			</Link>
			</li>
		)
	},
	componentDidMount(){
		document.getElementsByTagName('li')[0].className += ' active-class'; 
	},
	render(){
		return(
			<div>
			<div className="header col-12">
			<Link to="/">
			<div className="logo"/>
			<div className="header-text" onClick={this.calender}>IPLT20 Match Statistics</div>
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