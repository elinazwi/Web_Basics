const products = [
    { name: "Football", price: 29.99 },
    { name: "Basketball", price: 24.99 },
    { name: "Tennis Racket", price: 89.99 },
    { name: "Baseball Glove", price: 49.99 },
    { name: "Soccer Ball", price: 34.99 },
  ];

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let includesTwo = items.includes(0);
console.log(includesTwo);


  let reduce1 = products.reduce((currentTotal, product) => currentTotal + product.price, 0);
    //console.log(reduce1);

  let reduce = products.reduce((currentTotal, product) => {
    return product.price + currentTotal;
  }, 0)
  //console.log(reduce);
  
  
  let some = products.every((product) => {
    return product.price > 20;
  });
 // console.log("some:" + some);
  
  let found = products.find((product) => {
    return product.price == 34.99;
  });
  //console.log(found);
  
  let filtered = products.filter((product) => {
    return product.price > 30;
  });
  //console.log(filtered);
  
  let filtered1 = products.filter((product) => product.price > 30);
  //console.log(filtered1);
  
  let result = products.map((product) => {
    return product.name;
  });
  
  // Kurzschreibweise
  let result1 = products.map((product) => product.name + "-" + product.price);
  
  products.forEach((product) => {
    //console.log(product.name + product.price);
  });