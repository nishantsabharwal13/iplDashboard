import React from 'react';

const Table = React.createClass({

	renderTable(value,key){
		return(

			<tr key={key}>
			<td>{key+1}</td>
			<td className="standings-table__team">
			<span className="table__logo tLogo16x30 RCB"></span>
			<span className="standings-table__team-name js-team">{value.city}</span>
			</td>
			<td>{value.date}</td>
			<td className="standings-table__optional">{value.team1}</td>
			<td className="standings-table__optional">{value.team2}</td>
			<td className="standings-table__optional">{value.venue}</td>
			<td className="standings-table__optional">{value.winner}</td>
			</tr>

			)
	},
	render(){
		return(
			<div className="Table">
			<div>
			<table className="standings-table table table--scroll-on-phablet ">
			<tbody>
			<tr className="standings-table__header">
			<th></th>
			<th className="u-left-text">City</th>
			<th>Date</th>
			<th className="standings-table__optional">Team 1</th>
			<th className="standings-table__optional">Team 2</th>
			<th className="standings-table__optional">Venue</th>
			<th className="standings-table__optional">Winner</th>
			</tr>
			{this.props.matches.map(this.renderTable)}
			</tbody>
			</table>
			</div>
			</div>
			);

}
});

export default Table;