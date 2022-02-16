let backdrop = document.querySelector('.backdrop');/*imi selecteaza primul element cu clasa backdrop*/
/*imi va da un obiect cu numeroase elemente,dintre care si style,ce contine css elements*/

let selectPlanButtons = document.querySelectorAll('.plan button');
// console.log(selectPlanButtons)
/*selecteaza tot ce e in elementul cu clasa plan si este button*/

let modal = document.querySelector('.modal');
let modalNoButton = document.querySelector('.modal__action--negative');

let toggleButton = document.querySelector('.toggle-button');
let mobileNav = document.querySelector('.mobile-nav');

// console.log(mobileNav.className);
// console.log(movileNav.style)

/*sunt importante pentru ca vezi ce se afla in ele,in special la style,vezi ce css properties poti folosi*/

// backdrop.style.display = 'block';

for (let i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener('click', () => {
        // modal.style.display = 'block';
        // backdrop.style.display = 'block';
        if (modal) {
            modal.classList.add('open');
        }
        /*va adauga o clasa la cea existenta,Nu trebuie punct inaintea sa*/
        backdrop.classList.add('open');
    })
}

backdrop.addEventListener('click', () => {
    // modal.style.display = 'none';
    // backdrop.style.display = 'none';
    // mobileNav.style.display = 'none'
    if (modal) {
        modal.classList.remove('open');

    }
    backdrop.classList.remove('open');
    mobileNav.classList.remove('open');
})

if (modalNoButton) {
    modalNoButton.addEventListener('click', () => {
        // modal.style.display = 'none';
        // backdrop.style.display = 'none';

        modal.classList.remove('open');
        backdrop.classList.remove('open');
    })
}


toggleButton.addEventListener('click', () => {
    // mobileNav.style.display = 'block';
    // backdrop.style.display = 'block';

    backdrop.classList.add('open');
    mobileNav.classList.add('open');
})

/*in loc de classList putem folosi backdrop.className care va fi clasa pe care o avem deja*/