export const GEN_MESSAGE = 'GEN_MESSAGE';
export const CLEAR_ALL = 'CLEAR_ALL';
export const CLEAR_ONE = 'CLEAR_ONE';
export const CHANGE_INPUT = 'CHANGE_INPUT';

export const generateMessage = () => {
	return {
        	type: GEN_MESSAGE,
	};
};
export const clearAllMessages = () => {
	return {
        	type: CLEAR_ALL,
	};
};
export const clearMessage = (index) => {
	return {
		type: CLEAR_ONE,
		toDelIndex : index
	};
};

export const changeUnsubmittedMessage = (key,value) => {
	return {
		type: CHANGE_INPUT,
		keyToChange: key,
		valueToUpdate : value
	};
};
