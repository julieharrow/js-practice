// // Exercise 1 - Shopping Trip
// var shoppingList = ['pop tarts', 'ramen noodles','chips','salsa','coffee'];
// console.log(shoppingList);
// shoppingList.push('fruit loops');
// console.log(shoppingList);
// shoppingList[shoppingList.indexOf('coffee')] = "fair trade coffee";
// console.log(shoppingList);
// shoppingList.splice(2,2,"rice","beans");
// console.log(shoppingList);
// var shoppingCart = [];
// console.log("List: " + shoppingList);
// console.log("Cart: " + shoppingCart);
// shoppingCart.push(shoppingList.pop())
// console.log("List: " + shoppingList);
// console.log("Cart: " + shoppingCart);
// shoppingCart.push(shoppingList.shift())
// console.log("List: " + shoppingList);
// console.log("Cart: " + shoppingCart);
// //
// // while (shoppingList !== []) {
// //   shoppingCart.push(shoppingList.shift())
// //   console.log("List: " + shoppingList);
// //   console.log("Cart: " + shoppingCart);
// // }
//
// shoppingCart.reverse().join(", ")
// shoppingCart.push(shoppingList.shift())
// console.log("Cart: " + shoppingCart);


//Exercise 2 - Addressing Objects

// var course = {
//   name: 'JavaScript Applications',
//   awesome: true,
//   teachers: ['Assaf','Shane'],
//   students: [
//     {
//       name: 'Steve',
//       computer: {
//         OS: 'Linux',
//         type: 'laptop'
//       }
//     },
//     {
//       name: 'Katy',
//       computer: {
//         OS: 'OSX',
//         type: 'macbook'
//       }
//     },
//     {
//       name: 'Chuck',
//       computer: {
//         OS: 'OSX',
//         type: 'macbook'
//       }
//     }
//   ],
//   preReqs : {
//     skills: ['html','css','git'],
//     equipment: {
//       laptop: true,
//       OSOptions: ['linux','osx']
//     }
//   }
// };

// 1)  course.name
// 2)  course.teachers[1]
// 3)  course.students[0].name
// 4)  course.students[1].computer.type
// 5)  course.preReqs.equipment
// 6)  course.preReqs.equipment.OSOptions[1]
// 7)  course.preReqs.equipment.OSOptions.join(" or ")


// Exercise 3 - Email Object

var gmail = {
  name: 'julie.ann.harrow@gmail.com',
  size: '15 GB',
  mailboxes: [
    {
      name: 'inbox',
      contents: ['tts email', 'interview email', 'Fuqua email']
    },
    {
      name: 'starred',
      contents: ['acceptance','family letter']
    },
    {
      name: 'sent',
      contents: ['hi deb','hi chris','hi chas']
    },
    {
      name: 'drafts',
      contents: ['Goosehound','Amtrak']
    }
  ],
  contacts: ['ralph','maura','amber','katie','maddie'],
  tasks: [
    {
      type: "email",
      index: 1,
      message: "email Alessandra",
    },
    {
      type: "scheduling",
      index: 2,
      message: "schedule NC vacation",
    },
    {
      type: "call",
      index: 3,
      message: "call Amtrak",
    }
  ]
};
