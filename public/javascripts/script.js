// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
// for (let i = 0; i < mashPotatoes.length; i++) {
//   //addFood(steak[i], '#steak');
//   console.log(mashPotatoes[i])
// }

// Iteration 1 using callbacks
const p1 = addFood(steak[0], "#steak", () => {
  addFood(steak[1], "#steak", () => {
    addFood(steak[2], "#steak", () => {
      addFood(steak[3], "#steak", () => {
        addFood(steak[4], "#steak", () => {
          addFood(steak[5], "#steak", () => {
            addFood(steak[6], "#steak", () => {
              addFood(steak[7], "#steak", () => {
                addImage("#img2", "./public/images/steak.jpg");
              });
            });
          });
        });
      });
    });
  });
});

// Iteration 2 using `.then()`
const p2 = addFood(mashPotatoes[0], "#mashPotatoes").then(() => {
  addFood(mashPotatoes[1], "#mashPotatoes").then(() => {
    addFood(mashPotatoes[2], "#mashPotatoes").then(() => {
      addFood(mashPotatoes[3], "#mashPotatoes").then(() => {
        addFood(mashPotatoes[4], "#mashPotatoes").then(() => {
          addImage("#img1", "./public/images/mashPotatoes.jpg");
        });
      });
    });
  });
});

// Iteration 3 using async and await

async function makeFood(recipe) {
  await addFood(recipe[0], "#brusselSprouts");
  await addFood(recipe[1], "#brusselSprouts");
  await addFood(recipe[2], "#brusselSprouts");
  await addFood(recipe[3], "#brusselSprouts");
  await addFood(recipe[4], "#brusselSprouts");
  await addFood(recipe[5], "#brusselSprouts");
  await addFood(recipe[6], "#brusselSprouts");
  await addFood(recipe[7], "#brusselSprouts");
  await addFood(recipe[8], "#brusselSprouts");
  addImage("#img3", "./public/images/brusselSprouts.jpg");
}

const p3 = makeFood(brusselSprouts);

console.log(p1);
console.log(p2);
console.log(p3);

//bonus 1

function addImage(id, path) {
  document.querySelector(id).innerHTML = `<img alt='img1' src=${path}>`;
}

//bonus 2

Promise.all([p1, p2, p3]).then(() => {
  alert("Dinner is served!");
});
