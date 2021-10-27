const { sum } = require('./app.js');
    //primer parametro: descripcion de la prueba
test('adds 14 + 9 to equal 23', ()=> {
    //llamar la funcion y se ejecuta
    let total= sum(14,9);

    expect(total).toBe(23);
});