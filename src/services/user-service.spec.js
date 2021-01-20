const userService = require('./user-service');

describe('UserService', () => {
  test('getUsers() returns all users', () => {
    expect(userService.getUsers()).toBeDefined();
    expect(userService.getUsers().length).toBe(10);
  });
  test('getUserSubscription() returns correct values for user subscription', () => {
    expect(userService.getUserSubscription(5)).toBeDefined();
    expect(userService.getUserSubscription(4)).toBeUndefined();
  });
});