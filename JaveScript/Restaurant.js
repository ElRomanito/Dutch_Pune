const observer = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
console.log(entry)
if(entry.isIntersecting){
entry.target.classList.add('show_1');
}else{
    entry.target.classList.remove('show_1');
}
});
});

const hiddenElements = document.querySelectorAll('.hidden_1');
hiddenElements.forEach((el) => observer.observe(el));


const observers = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
    console.log(entry)
    if(entry.isIntersecting){
    entry.target.classList.add('show_2');
    }else{
        entry.target.classList.remove('show_2');
    }
    });
    });
    
    const hiddenElement = document.querySelectorAll('.hidden_2');
    hiddenElement.forEach((el) => observers.observe(el));