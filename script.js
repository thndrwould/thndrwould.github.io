const button = document.getElementById('actionBtn');
const resButton = document.getElementById('resetBtn');
const roblox = document.getElementById('roblox');
const back = document.getElementById('backG')
const greeting = document.getElementById('greeting');
const themechoice1 = document.getElementById('theme1');
const test1 = document.getElementById('test1');


// Add a click event to the button
button.addEventListener('click', () => {
    greeting.textContent = "CLICKED BRUH";
    greeting.style.color = "#ff0000"; // Changes text to green
    greeting.style.outline = true;
    greeting.style.outlineColor = "#000000";
});

resButton.addEventListener('click', () => {
    greeting.textContent = "Hello, World!";
    greeting.style.color = "#000000";
   // Changes text to black
});

roblox.addEventListener('mouseenter', () => {
    back.style.opacity = 1;
});

roblox.addEventListener('mouseleave', () => {
    back.style.opacity = 0;
});

themechoice1.addEventListener('input', () => {
    document.documentElement.style.setProperty('--theme-color-1', themechoice1.value);
});