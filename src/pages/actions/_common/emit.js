export const emit = (type, param = {}) => {
	if (!type) return console.error('必传type');
	return {
		...param,
		type
	};
};