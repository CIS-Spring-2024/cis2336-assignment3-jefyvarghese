// JavaScript
function toggleDetails(item) {
    item.classList.toggle('active'); // Toggle 'active' class on menu item
}


//please decomment this part to be able to check dynamic menu.


// document.addEventListener('DOMContentLoaded', function() {
//     // Define menu data
//     const menuItems = [
//         { category: 'Breakfast', items: [
//             { name: 'Turkish Menemen', price: 8},
//             { name: 'Simit and Cheese Plate', price: 7 },
//             { name: 'Cornetto Classico', price: 4 },
//             { name: 'Caprese Sandwich', price: 10 },
         
//         ]},
//         { category: 'Lunch', items: [
//             { name: 'Margarita Pide', price: 12 },
//             { name: 'Lentil Soup', price: 7 },
//             { name: 'Insalata Caprese', price: 9 },
//             { name: 'Turkish Meatball Sandwich', price: 10 },
//             { name: 'Risotto con Funghi', price: 14 }
//         ]},
//         { category: 'Dinner', items: [
//             { name: 'Mixed Grill Platter', price: 20 },
//             { name: 'Eggplant Parmigiana', price: 16 },
//             { name: 'Iskender Kebab', price: 19 },
//             { name: 'Chicken Saltimbocca', price: 17 },
//             { name: 'Mushroom and Truffle Oil Pizza', price: 15 }
//         ]},
//         { category: 'Special Selections', items: [
//             { name: 'Italian Frittata', price: 9 },
//             { name: 'Börek with Spinach and Feta', price: 6 },
//             { name: 'Pasta Alla Norma', price: 13 },
//             { name: 'Grilled Halloumi Salad', price: 11 },
//             { name: 'Seafood Linguine', price: 18 },
//             { name: 'Lamb Shank Osso Bucco', price: 22 }
//         ]},
//         { category: 'Beverages', items: [
//             { name: 'Espresso', price: 3 },
//             { name: 'House Turkish Coffee', price: 4 },
//             { name: 'Cappuccino', price: 4 },
//             { name: 'Latte', price: 5 },
//             { name: 'Americano', price: 3 },
//             { name: 'Mocha', price: 5 },
//             { name: 'Turkish Tea', price: 2 },
//             { name: 'Sparkling Water', price: 1 },
//             { name: 'Carbonated Drinks', price: 2 },
//             { name: 'Lemonade', price: 2 }
//         ]}
//     ];


//     // Function to dynamically generate menu items
//     function generateMenu() {
//         const menuContainer = document.getElementById('menu-container');


//         // Clear previous menu items
//         menuContainer.innerHTML = '';


//         // Generate menu items
//         menuItems.forEach(category => {
//             const categoryElement = document.createElement('section');
//             categoryElement.id = category.category.toLowerCase();
//             categoryElement.classList.add('menu-section');
//             categoryElement.innerHTML = `<h2>${category.category} Menu</h2>`; // Fixed template literals
           
//             category.items.forEach(item => {
//                 const menuItemElement = document.createElement('div');
//                 menuItemElement.classList.add('menu-item');
//                 menuItemElement.innerHTML = `
//                     <h3>${item.name}</h3>
//                     <p>$${item.price}</p>
//                 `;
//                 categoryElement.appendChild(menuItemElement);
//             });


//             menuContainer.appendChild(categoryElement);
//         });
//     }


//     // Call the generateMenu function to initially populate the menu
//     generateMenu();
// });



