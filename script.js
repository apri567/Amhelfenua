const showMoreBtn1 = document.querySelector('#showMoreBtn1');
const showMoreBtn2 = document.querySelector('#showMoreBtn2');
const showMoreBtn3 = document.querySelector('#showMoreBtn3');

showMoreBtn1.addEventListener('click',showMore);
showMoreBtn2.addEventListener('click',showMore);
showMoreBtn3.addEventListener('click',showMore);


function showMore (e) {
    let rowsList = e.target.parentNode.parentNode.children;

    for (let i = 2; i < rowsList.length; i++) {
        rowsList[i].classList.toggle('d-none');
        rowsList[i].classList.toggle('d-block');
    }
}