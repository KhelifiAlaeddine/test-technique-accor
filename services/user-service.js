const USERS = require('./data/users.json').users;
const _ = require('lodash');

const getUsers = () => {
	return USERS;
}
const getUserSubscription = (id) => {
	return _.find(USERS, { 'id': id, 'subscribed': true });
}
module.exports = {
	getUserSubscription: getUserSubscription,
	getUsers: getUsers
}