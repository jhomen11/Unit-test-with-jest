const { sum } = require('./app.js');
    //primer parametro: descripcion de la prueba
test('adds 14 + 9 to equal 23', ()=> {
    //llamar la funcion y se ejecuta
    let total= sum(14,9);

    expect(total).toBe(23);
});

const { fromEuroToDollar } = require('./app.js');

test( '10 dolares son 12 euros', ()=>{

    let total = fromEuroToDollar(10);
    expect(total).toBe(12)
});

const { fromDollarToYen } = require('./app.js');

test ( '2 dolares son 306.96', ()=>{

    let total = fromDollarToYen(2);
    expect(total).toBe(306.96)
});

const { fromYenToPound } = require('./app.js');

test ( '20 yenes son 1,25 pound ', () =>{

    let total = fromYenToPound(200);
    expect(total).toBe(1,25)
});