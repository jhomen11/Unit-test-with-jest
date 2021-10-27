const sum = (a,b) => {
    return a + b
}

//console.log(sum(7,3));

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const {JPY,USD,GBP} = oneEuroIs;

const fromEuroToDollar = (euro) =>{
    
    let valorEuro = euro * USD;
    return valorEuro
}
console.log(fromEuroToDollar(3.5));

const fromDollarToYen =(dolar) =>{
     let valorDolar = fromEuroToDollar((dolar)*JPY);
     return valorDolar;
}
console.log(fromDollarToYen(2));

const fromYenToPound = (yen) => {
    let valorYen = Math.round(yen * (GBP/JPY));
    return valorYen;
}
console.log(fromYenToPound(200));


module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };

