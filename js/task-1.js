// З використанням властивостей і методів DOM-елементів, напиши скрипт, який:

// Порахує й виведе в консоль кількість категорій в ul#categories,
// тобто елементів li.item.
// Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль
// текст заголовка елемента (тегу <h2>) і кількість елементів у категорії (усіх <li>, вкладених у нього).

const liItem = document.querySelectorAll(".item");
const liItemLength = `Number of categories: ${liItem.length}`;
console.log(liItemLength);

liItem.forEach((item) => {
  console.log(`Category: ${item.querySelector("h2").textContent}`);
  console.log(`Elements: ${item.querySelectorAll("li").length}`);
});
