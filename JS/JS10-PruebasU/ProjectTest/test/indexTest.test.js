//prueba efectiva
const indexTest = require ("../calculator");

test('test suma', () => {
    const r = indexTest.suma(1,2);
    expect (r).toBe(5);

})

