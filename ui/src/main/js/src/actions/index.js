export const INSTRUMENT_DATA_REQUESTED = 'INSTRUMENT_DATA_REQUESTED';
export const INSTRUMENT_DATA_RECEIVED = 'INSTRUMENT_DATA_RECEIVED';
export const INSTRUMENT_DATA_ERROR = 'INSTRUMENT_DATA_ERROR';
export const PEOPLE_DATA_REQUESTED = 'PEOPLE_DATA_REQUESTED';
export const PEOPLE_DATA_RECEIVED = 'PEOPLE_DATA_RECEIVED';
export const PEOPLE_DATA_ERROR = 'PEOPLE_DATA_ERROR';
export const TRADE_DATA_REQUESTED = 'TRADE_DATA_REQUESTED';
export const TRADE_DATA_RECEIVED = '_DATA_RECEIVED';
export const TRADE_DATA_ERROR = 'INSTRUMENT_DATA_ERROR';

export const instrumentDataRequested = () => ({
	type: INSTRUMENT_DATA_REQUESTED
	});

export const instrumentDataReceived = (data) => ({
	type: INSTRUMENT_DATA_RECEIVED,
	data
	});

export const instrumentDataError = (error) => ({
	type: INSTRUMENT_DATA_ERROR,
	error
	});

export const peopleDataRequested = () => ({
	type: PEOPLE_DATA_REQUESTED
	});

export const peopleDataReceived = (data) => ({
	type: PEOPLE_DATA_RECEIVED,
	data
	});

export const peopleDataError = (error) => ({
	type: PEOPLE_DATA_ERROR,
	error
	});

export const tradeDataRequested = () => ({
	type: TRADE_DATA_REQUESTED
	});

export const tradeDataReceived = (data) => ({
	type: TRADE_DATA_RECEIVED,
	data
	});

export const tradeDataError = (error) => ({
	type: TRADE_DATA_ERROR,
	error
	});
