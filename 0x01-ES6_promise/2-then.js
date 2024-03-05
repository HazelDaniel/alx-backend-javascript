/* eslint-disable indent */
/* eslint-disable no-tabs */
function handleResponseFromAPI(promise) {
	promise
	.then(() => ({
		status: 200,
		body: 'success',
	}))
	.catch(() => new Error())
	.finally(() => {
		console.log('Got a response from the API');
	});
}
/* eslint-enable indent */
/* eslint-enable no-tabs */

export default handleResponseFromAPI;
