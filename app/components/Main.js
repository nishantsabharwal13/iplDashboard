import React from 'react';
import Header from './Header';

const Main = React.createClass({

	setId(params){
		if(Object.keys(params).length === 0){
		var data = {matches:this.props.data[2008]};

		}
		else {
		var data = {matches:this.props.data[this.props.params.id]};
		}
		return data;
	},
	render(){
		return (
			<div>
			<Header {...this.props}/>
			 {React.cloneElement(this.props.children,this.setId(this.props.params))}
			</div>
			)
	}
});

export default Main