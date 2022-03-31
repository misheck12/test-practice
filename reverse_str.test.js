const reverseString = require('./reverse_str');

    test('reverseString should reverse a string', () => {
        expect(reverseString('hello')).toEqual('olleh');
    });

