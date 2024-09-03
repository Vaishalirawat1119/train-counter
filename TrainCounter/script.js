let count = 0;
const countEl = document.getElementById('count');
const addBtn = document.getElementById('add');
const subBtn = document.getElementById('subtract');
const resBtn = document.getElementById('reset');

addBtn.addEventListener("click",() => {
    count ++;
    countEl.innerText = count;
});

subBtn.addEventListener("click", () => {
    count --;
    countEl.innerText = count;
});

resBtn.addEventListener("click", () => {
    count = 0;
    countEl.innerText = count;
});