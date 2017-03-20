import _ from 'lodash';
import { INSTRUMENT_DATA_REQUESTED, INSTRUMENT_DATA_RECEIVED, INSTRUMENT_DATA_ERROR, PEOPLE_DATA_REQUESTED, PEOPLE_DATA_RECEIVED, PEOPLE_DATA_ERROR, TRADE_DATA_REQUESTED, TRADE_DATA_RECEIVED, TRADE_DATA_ERROR } from '../actions';

const reducer = (state = {
	instruments: {},
	people: {},
	trades: {}
}, action) => {

	console.log("Got the action.", action);

	const { instruments, people, trades } = state;

	switch (action.type) {
		case INSTRUMENT_DATA_RECEIVED:
			return {
				...state,
				instruments: Object.assign({}, action.data)
			};
		case PEOPLE_DATA_RECEIVED:
			return {
				...state,
				people: Object.assign({}, action.data)
			};
		case TRADE_DATA_RECEIVED:
			return {
				...state,
				trades: Object.assign({}, action.data)
			};
		default:
			return state;
	}
}

export default reducer;
