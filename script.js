//your JS code here. If required.
let btn = document.getElementById('incrementBtn');
 let counter = 0;
btn.addEventListener('click', () => {
    let tags = document.getElementById('counter');
    tags.innerText = counter = counter+1
    alert(counter);
});
