
const groceryList = [
    {
        name: 'Onion',
        quantity: 1,
        isBought: true,
        price: 5,
        sum: 5
    },
    {
        name: 'Butter',
        quantity: 1,
        isBought: true,
        price: 10,
        sum: 10
    },
    {
        name: 'Tissues',
        quantity: 5,
        isBought: false,
        price: 7,
        sum: 45
    },
    {
        name: 'Pizza',
        quantity: 1,
        isBought: false,
        price: 15,
        sum: 15
    },
    {
        name: 'Pringles',
        quantity: 3,
        isBought: true,
        price: 10,
        sum: 30
    }
]

//Виводити весь список на екран таким чином, щоб спочатку йшли продукти, що ще не придбані, а потім - ті, що вже придбали.
console.log('*------------------------------------*');
console.log('Список товарів, спочатку не придбані:');

const sortedGroceryList = groceryList.sort((a, b) => {
    if (a.isBought === b.isBought) {
        return 0;
    } else if (a.isBought) {
        return -1;
    } else {
        return 1;
    }
});

console.log(sortedGroceryList);

//Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.
console.log('*------------------------------------*');
console.log('Покупаємо один з товарів:');

function buyProduct(productName) {
    const product = sortedGroceryList.find(item => item.name === productName);
    if (product) {
        product.isBought = true;
        console.log(`Ура, ми купили ${productName}`);
    } else {
        console.log(`${productName} в нас нема`);
    }
}
buyProduct('Pizza');
console.log('А оце ми знову відсортували і написали оновлений список')
sortedGroceryList.sort((a, b) => {
    if (a.isBought === b.isBought) {
        return 0;
    } else if (a.isBought) {
        return -1;
    } else {
        return 1;
    }
});
console.log(sortedGroceryList);


//Видалення продукту зі списку (видалення повинно проводитися шляхом створення нового масиву,
// в якому продукт, що ми шукаємо, буде відсутнім)
console.log('*------------------------------------*');
console.log('Видаляємо товар:');

function deleteItem(itemToDelete) {
    const newGroceryList = sortedGroceryList.filter(groceryList => sortedGroceryList.name !== itemToDelete);
    console.log(`Ми видалили ${itemToDelete}`)
    console.log(newGroceryList);
}
deleteItem('Pizza');


//Додавання покупки в список. Враховуй, що при додаванні покупки з уже існуючим в списку продуктом,
// необхідно збільшувати кількість в існуючій покупці, а не додавати нову.
// При цьому також повинна змінитися сума, наприклад, якщо ціна за одиницю 12,
// а кількості товарів стало 2, то сума буде 24.
console.log('*------------------------------------*');
console.log('Додаємо товар:');

function addPurchaseToList(purchaseName, purchaseQuantity, purchasePrice) {
    let existingPurchase = sortedGroceryList.find(purchase => purchase.name === purchaseName);
    if (existingPurchase) {
        existingPurchase.quantity += purchaseQuantity;
        existingPurchase.sum = existingPurchase.quantity * existingPurchase.price;
    } else {
        sortedGroceryList.push({
            name: purchaseName,
            quantity: purchaseQuantity,
            isBought: false,
            price: purchasePrice,
            sum: purchaseQuantity * purchasePrice
        });
    }
    console.log(`Ми додали ${purchaseName}`);
}

addPurchaseToList('Onion', 2, 5);
addPurchaseToList('Tea', 3, 4);
console.log(sortedGroceryList);


//Підрахунок суми всіх продуктів (враховуючи кількість кожного) в списку.
console.log('*------------------------------------*');
console.log('Рахуємо суму всіх покупок:');

const sum = sortedGroceryList.reduce((total, item) => total + item.sum, 0);
console.log(sum);


//Підрахунок суми всіх (не) придбаних продуктів.
console.log('*------------------------------------*');
console.log('Рахуємо суму придбаних покупок:');

function sumOfBought() {
    const newGroceryList = sortedGroceryList.filter(groceryList => groceryList.isBought === true);
    const sumOfBought = newGroceryList.reduce((total, item) => total + item.sum, 0);
    console.log(`Сума куплених товарів: ${sumOfBought}`)
}

sumOfBought();

console.log('*------------------------------------*');
console.log('Рахуємо суму непридбаних покупок:');
function sumOfNotBought() {
    const newGroceryList = sortedGroceryList.filter(groceryList => groceryList.isBought === false);
    const sumOfBought = newGroceryList.reduce((total, item) => total + item.sum, 0);
    console.log(`Сума некуплених товарів: ${sumOfBought}`)
}

sumOfNotBought();
