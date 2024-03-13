//your JS code here. If required.
let btn = document.getElementById('incrementBtn');
let counter = 0;

btn.addEventListener('click', () => {
    let tags = document.getElementById('counter');
    counter = counter + 1;
    tags.innerText = counter.toString(); // Convert counter to string before assigning
    alert(counter);
});
