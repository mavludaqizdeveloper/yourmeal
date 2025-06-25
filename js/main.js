 // header
let headerGeneral = document.querySelector('.header__general')
fetch('json/header.json')
.then(res=>res.json())
.then(data=>{
    data.forEach(item=>{
        let img = document.createElement('img')
        img.className = "header__image"
        img.src = item.imgUrl
        let box = document.createElement("div")
        box.className = 'header__box'
        box.innerHTML = `
            <h2 class="header__title">${item.title}</h2>
            <p class='header__text'>Бесплатная доставка от ${item.price}₽</p>
        `
        headerGeneral.appendChild(img)
        headerGeneral.appendChild(box)
    })
})

    // cards 
    fetch('json/cards.json')
    .then(res=>res.json())
    .then(data=>{
    let cardsGeneral = document.querySelector('.cards__general')
    
    data.forEach(item=>{
        let box = document.createElement('div')
        box.className = 'cards__box box'
        box.innerHTML = `
        <img src="${item.imgUrl}" class="cards__image">
        <h3 class="cards__price">${item.price}₽</h3>
        <p class="cards__name">${item.name}</p>
        <span class="cards__span">${item.gramm}</span>
        <i class="cards__type"><b>type: </b> ${item.type}</i>
        <button class="cards__btn">Добавить</button>
        `
        cardsGeneral.appendChild(box)
    })
})
let filterBtns = document.querySelector('.menu__list')

filterBtns.addEventListener("click", function(e){
    if (e.target.tagName !== "BUTTON") return; 

    let filterType = e.target.dataset.type;
    let cardsGeneral = document.querySelector('.cards__general');
    cardsGeneral.innerHTML = "";

    fetch('json/cards.json')
    .then(res => res.json())
    .then(data => {
        data.forEach(item => {
            if (item.type === filterType || filterType === "all") {
                let box = document.createElement('div');
                box.className = 'cards__box box';
                box.innerHTML = `
                    <img src="${item.imgUrl}" class="cards__image">
                    <h3 class="cards__price">${item.price}₽</h3>
                    <p class="cards__name">${item.name}</p>
                    <span class="cards__span">${item.gramm}</span>
                    <i class="cards__type"><b>type: </b> ${item.type}</i>
                    <button class="cards__btn">Добавить</button>
                `;
                cardsGeneral.appendChild(box);
            }
        });
    });
});
