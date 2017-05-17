import { createStore, compose } from 'redux';
import { syncHistoryWithStore} from 'react-router-redux';
import { browserHistory } from 'react-router';
import rootReducer from './reducers/index.js';
import data from './data/matches.csv';

var values = {
	2008:[],
	2009:[],
	2010:[],
	2011:[],
	2012:[],
	2013:[],
	2014:[],
	2015:[],
	2016:[]
};
var arr =[];
for (var i = 0; i < data.length; i++)
{
	var key = data[i].season;
	values[key].push(data[i]);
}

Object.keys(values).forEach(function(key) {
	arr.push(values[key]);
});
const defaultState = {
	data : values,
};
const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
