const assortment = require("./assortment.json");

console.log(assortment);

// RETRIEVES CATEGORIES FROM JSON
let categories = [];

const categoriesArr = assortment.map(function(assortment) {
    return (
        {
            category: assortment.category,
            class: assortment.class
        }
    )
})

function removeDuplicates(myArr, prop) {
    return myArr.filter((obj, pos, arr) => {
        return arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos;
    });
}

categories = removeDuplicates(categoriesArr,"category");
console.log(categories);

function getCategories() {
    categories.forEach(function(category) {
        
        categoryName = category.category.charAt(0).toUpperCase() + category.category.substr(1);

        $("#category-list").append(`
            <li class="list-group-item">${category.class} - ${categoryName}</li>
        `)
    })
}

$(document).ready(function() {
    getCategories();
})