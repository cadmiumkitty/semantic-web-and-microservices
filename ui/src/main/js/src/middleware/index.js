import request from 'superagent';
import { INSTRUMENT_DATA_REQUESTED, INSTRUMENT_DATA_RECEIVED, INSTRUMENT_DATA_ERROR, PEOPLE_DATA_REQUESTED, PEOPLE_DATA_RECEIVED, PEOPLE_DATA_ERROR, TRADE_DATA_REQUESTED, TRADE_DATA_RECEIVED, TRADE_DATA_ERROR } from '../actions';
import { instrumentDataRequested, instrumentDataReceived, instrumentDataError, peopleDataRequested, peopleDataReceived, peopleDataError, tradeDataRequested, tradeDataReceived, tradeDataError} from '../actions';

const createSparqlMiddleware = () => {

	return store => next => action => {
		switch (action.type) {
			case INSTRUMENT_DATA_REQUESTED:
			    request
			        .get('/instruments')
			        .end((error, result) => {
			            if (error) {
			        	    console.log("Got instruments error.", error)
			        	    next(instrumentDataError(error))
				        } else {
				        	console.log("Got instruments result.", result)
					        const data = JSON.parse(result.text)
					        next(instrumentDataReceived(data))
				      	}
			        });
				return next(action);
			case PEOPLE_DATA_REQUESTED:
			    request
			        .get('/people')
			        .end((error, result) => {
			            if (error) {
			        	    console.log("Got people error.", error)
			        	    next(peopleDataError(error))
				        } else {
				        	console.log("Got people result.", result)
					        const data = JSON.parse(result.text)
					        next(peopleDataReceived(data))
				      	}
			        });
				return next(action);
			case TRADE_DATA_REQUESTED:
			    request
			        .get('/trades')
			        .end((error, result) => {
			            if (error) {
			        	    console.log("Got trades error.", error)
			        	    next(tradeDataError(error))
				        } else {
				        	console.log("Got trades result.", result)
					        const data = JSON.parse(result.text)
					        next(tradeDataReceived(data))
				      	}
			        });
				return next(action);
			default:
				console.log("Some other action got called.", action);
				return next(action);
		}
	}
}

export default createSparqlMiddleware;
