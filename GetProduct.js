function getProducts(arr) {
  const products = [];
  for (let i = 0; i < arr.length; i++) {
    let product = 1;
    for (let j = 0; j < arr.length; j++) {
      if (i !== j) {
        product *= arr[j];
      }
    }
    products.push(product);
  }
  return products;
}

const arr = [1, 7, 3, 4];
console.log(getProducts(arr));
