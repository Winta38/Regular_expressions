import Validator from '../app';

test('validation should pass for valid username', () => {
    const username = 'john_doe99';
    expect(Validator.validateUsername(username)).toBe(true);
});

test('validation should fail for username with invalid characters', () => {
    const username = 'john~doe';
    expect(Validator.validateUsername(username)).toBe(false);
});

test('validation should fail for username with consecutive digits', () => {
    const username = 'john1234';
    expect(Validator.validateUsername(username)).toBe(false);
});

test('validation should fail for username starting with digit', () => {
    const username = '9john';
    expect(Validator.validateUsername(username)).toBe(false);
});

test('validation should fail for username ending with underscore', () => {
    const username = 'john_';
    expect(Validator.validateUsername(username)).toBe(false);
});

test('validation should fail for username ending with dash', () => {
    const username = 'john-';
    expect(Validator.validateUsername(username)).toBe(false);
});