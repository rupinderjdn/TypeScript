interface Product {
    price: number;
    name: string;
    quantity: number;
}

const printProduct = (prodcut: Product): void => {
    console.log(`${prodcut.name} - ${prodcut.price}`);
}
