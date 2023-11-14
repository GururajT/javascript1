const foodData = require ('./food.json');

function listAllFoodItems(){
    return foodData
}
function listAllVegetable(){
    return foodData.filter((food)=>food.category==='Vegetable')
}
function listAllFruit(){
    return foodData.filter((food)=>food.category==='Fruit')
}
function listAllProtein(){
    return foodData.filter((food)=>food.category==='Protein')
}
function listAllNuts(){
    return foodData.filter((food)=>food.category==='Nuts')
}function listAllGrains(){
    return foodData.filter((food)=>food.category==='Grain')
}
function listAllDairy(){
    return foodData.filter((food)=>food.category==='Dairy')
}
function listAllCalorieBelow100(){
    return foodData.filter((food)=>food.calorie<=100)
}
function listAllCalorieAbove100(){
    return foodData.filter((food)=>food.calorie>=100)
}
function listAllFoodItemsFromHighestToLowestProtein(){
    return foodData.sort((a,b)=>b.Protein - a.Protein)
}
function listAllFoodItemsFromHighestToLowestCab(){
    return foodData.sort((a,b)=>a.cab - b.cab)
}
console.log("Task1:list all the food items");
console.log(listAllFoodItems());

console.log("Task2:list all the food items with category vegetables");
console.log(listAllVegetable());

console.log("Task3:list all the food items with category fruit");
console.log(listAllFruit());

console.log("Task4:-list all the food items with category protien");
console.log(listAllProtein());

console.log("Task5:list all the food items with category nuts");
console.log(listAllNuts());

console.log("Task6:list all the food items with category grains");
console.log(listAllGrains());

console.log("Task7:list all the food items with category dairy");
console.log(listAllDairy());

console.log("Task8:list all the food items with calorie above 100");
console.log(listAllCalorieAbove100())

console.log("Task9:list all the food items with calorie below 100");
console.log(listAllCalorieBelow100())

console.log("Task10:list all the food items with highest protien content to lowest");
console.log(listAllFoodItemsFromHighestToLowestProtein())

console.log("Task11:list all the food items with lowest cab content to highest");
console.log(listAllFoodItemsFromHighestToLowestCab())