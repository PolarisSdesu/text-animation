document.querySelectorAll('.title').forEach(title => {
    title.innerHTML = title.textContent.split('').map((c) => 
        `<span class="letter">${c}</span>`)
        .join('');
})


const letters = document.querySelectorAll('.letter');
for(let i = 0; i < letters.length; i++) {
    letters[i].style.setProperty('--delay', `${i * 0.08}s`);
}

console.log("跑起来了")