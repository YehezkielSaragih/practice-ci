const mutiply = require('./math');

test('multiplies 2 and 3 to equal 6', () => {
    expect(mutiply.mutiply(2, 3)).toBe(7);
});