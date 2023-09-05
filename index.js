const resturant = {
  name: "Burger point",
  location: ["Gujranwala", "College Road", "Gulshan Colony"],
  categories: ["vegetrian", "Organic", "Itallian", "Pizzeria"],
  starterMenu: ["Garlic bread", "Biscuits", "Salad", "snacks", "Water"],
  mainMenu: ["Pizza", "Pasta", "Burger"],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};
//Methods
console.log(resturant.order?.(0, 1) ?? "Order does not exist");
console.log(resturant.orderRestore?.(0, 1) ?? "Order does not exist");
//Arrays
const users = [{ name: "Hamza", Email: "hamza.khan951hk" }];
console.log(users[0]?.name ?? "User Array is empty");
