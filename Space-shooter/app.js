let chickens = document.querySelector(".chickens");
let rocket = document.querySelector(".Rocket");
let body = document.querySelector("body");

let speed = 30;
let maxOffset = body.offsetWidth - 10;
let len = 45;
let container = new Array(len)
  .fill('<img src="Images/Chicken.png" alt="chicken" class="chicken">')
  .join(""); // Join the array into a single string

let bulletTemplate =
  '<img src="Images/Bullet.png" alt="Bullet" class="Bullet" />';

let fire = () => {
  // Create a bullet element and append it to the body
  let bullet = document.createElement("div");
  bullet.innerHTML = bulletTemplate;
  bullet = bullet.firstChild;

  // Position the bullet at the current rocket's position
  bullet.style.position = "absolute";
  bullet.style.left = rocket.offsetLeft + 125 + "px";
  bullet.style.top = rocket.offsetTop + -125 + "px";

  body.appendChild(bullet);

  // Add bullet movement logic (optional)
};

for (let i = 0; i < len; i++) {
  chickens.innerHTML = container; // Set chickens' content with the images
}

window.addEventListener("keydown", (e) => {
  let rocketRect = rocket.getBoundingClientRect(); // Get the rocket's current position and size
  let bodyRect = body.getBoundingClientRect(); // Get the body's current size (window size)

  if (e.key === "ArrowUp" && rocketRect.top > bodyRect.top) {
    rocket.style.top = rocket.offsetTop - speed + "px";
  }
  if (e.key === "ArrowDown" && rocketRect.bottom < bodyRect.bottom) {
    rocket.style.top = rocket.offsetTop + speed + "px";
  }
  if (e.key === "ArrowRight" && rocketRect.right < bodyRect.right) {
    rocket.style.left = rocket.offsetLeft + speed + "px";
  }
  if (e.key === "ArrowLeft" && rocketRect.left > bodyRect.left) {
    rocket.style.left = rocket.offsetLeft - speed + "px";
  }
  if (e.key === " ") {
    fire();
  }
});
