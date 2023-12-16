let openMenuBtn = document.querySelector('#menu-open-btn')
let closeMenuBtn = document.querySelector('#menu-close-btn')
let menuContainer = document.querySelector('#menu-container')
let overlay = document.querySelector('#overlay')

function openCloseMenu() {
    menuContainer.classList.toggle('open_close_menu')

    if(menuContainer.classList == 'open_close_menu') {
        document.querySelector('#menu-open-btn').style.display = 'none'
        document.querySelector('#menu-close-btn').style.display = 'block'
        //Image close/open
        overlay.classList.toggle('open_close_overlay')
    } else {
        document.querySelector('#menu-close-btn').style.display = 'none'
        document.querySelector('#menu-open-btn').style.display = 'block'
        //Image close/open
        overlay.classList.toggle('open_close_overlay')
    }
}

openMenuBtn.addEventListener('click', openCloseMenu)
closeMenuBtn.addEventListener('click', openCloseMenu)


let bookmarkBtn = document.querySelector('.bookmark')
let selectBambooStandBtn = document.querySelector('#select-stand-btn')
let selectBlackEditionBtn = document.querySelector('#select-black-edition-btn')

function bookmarked() {
    selectBambooStandBtn.addEventListener('click', function(){
        selectBambooStandBtn.classList.toggle('toggle_background')  //Class in index.CSS
    })

    selectBlackEditionBtn.addEventListener('click', function(){
        selectBlackEditionBtn.classList.toggle('toggle_background') //Class in index.CSS
    })

bookmarkBtn.addEventListener('click', function(){
    if(selectBambooStandBtn.classList == 'toggle_background' || selectBlackEditionBtn.classList == 'toggle_background') {
        document.querySelector('.bookmark circle').style.fill = 'hsl(176, 72%, 28%)'
        document.querySelector('.bookmark path').style.fill = 'hsl(0, 0%, 100%)'
        document.querySelector('.bookmark span').innerHTML = 'Bookmarked'
        document.querySelector('.bookmark span').style.color = 'hsl(176, 72%, 28%)'
    } else if(selectBambooStandBtn.classList !== 'toggle_background' || selectBlackEditionBtn.classList !== 'toggle_background') {
        document.querySelector('.bookmark circle').style.fill = ''
        document.querySelector('.bookmark path').style.fill = ''
        document.querySelector('.bookmark span').innerHTML = 'Bookmark'
        document.querySelector('.bookmark span').style.color = ''
        window.scrollBy({
            top:1500,
            behavior:'smooth'
        })
    }
})
}
bookmarked()

let openModal = document.querySelector('#back-this-project-btn')
let closeModal = document.querySelector('#close-modal-btn')
let modal = document.querySelector('#modal_container')

function openCloseModal() {
    modal.classList.toggle('open_close_modal')
    overlay.classList.toggle('open_close_overlay')
}

openModal.addEventListener('click', openCloseModal)
closeModal.addEventListener('click', openCloseModal)


let radioBamboo = document.querySelector('#radio-bamboo')
let radioBlackEdition = document.querySelector('#radio-black-edition')
let radioNoReward = document.querySelector('#radio-no-reward')

function openCloseRadio() {
    if(radioNoReward.checked) {
        document.querySelector('.bamboo_stand_plan_modal').style.borderColor = ''
        document.querySelector('.black_edition_plan_modal').style.borderColor = ''
        document.querySelector('#toggle-bamboo').style.display = 'none'
        document.querySelector('#toggle-black-edition').style.display = 'none'


        document.querySelector('.no_reward_plan_modal').style.borderColor = 'hsl(176, 72%, 28%)'
    } else if (radioBamboo.checked) {
        document.querySelector('.no_reward_plan_modal').style.borderColor = 'rgba(0, 0, 0, 0.075)'
        document.querySelector('.black_edition_plan_modal').style.borderColor = ''
        document.querySelector('#toggle-black-edition').style.display = 'none'

        document.querySelector('#toggle-bamboo').style.display = 'block'
        document.querySelector('.bamboo_stand_plan_modal').style.borderColor = 'hsl(176, 72%, 28%)'
    } else if (radioBlackEdition.checked) {
        document.querySelector('.no_reward_plan_modal').style.borderColor = 'rgba(0, 0, 0, 0.075)'
        document.querySelector('.bamboo_stand_plan_modal').style.borderColor = ''
        document.querySelector('#toggle-bamboo').style.display = 'none'


        document.querySelector('#toggle-black-edition').style.display = 'block'
        document.querySelector('.black_edition_plan_modal').style.borderColor = 'hsl(176, 72%, 28%)'
    }
}

radioBamboo.addEventListener('change', openCloseRadio);
radioBlackEdition.addEventListener('change', openCloseRadio);
radioNoReward.addEventListener('change', openCloseRadio)


let continueBambooBtn = document.querySelector('#bamboo-continue-btn')
let continueBlackEditionBtn = document.querySelector('#black-edition-continue-btn')
let priceValueBamboo = document.querySelector('#bamboo-pledge-value')
let priceValueBlackEdition = document.querySelector('#black-edition-pledge-value')
let sucessCard = document.querySelector('#sucess-modal-container')

function sucess() {
    if(priceValueBamboo.value >= 25) {
        modal.style.display = 'none'
        sucessCard.style.display = 'block'
    } 

    if(priceValueBlackEdition.value >= 75) {
        modal.style.display = 'none'
        sucessCard.style.display = 'block'
    }

    function inputNumberStyle() {
        if(priceValueBamboo.value < 25) {
            priceValueBamboo.style.borderColor = '#ff3333'
            priceValueBamboo.style.borderWidth = '2px'
        } else {
            priceValueBamboo.style.borderColor = ''
            priceValueBamboo.style.borderWidth = ''
        }

        if(priceValueBlackEdition.value < 75) {
            priceValueBlackEdition.style.borderColor = '#ff3333'
            priceValueBlackEdition.style.borderWidth = '2px'
        } else {
            priceValueBlackEdition.style.borderColor = ''
            priceValueBlackEdition.style.borderWidth = ''
        }
    }

    priceValueBamboo.addEventListener('input', inputNumberStyle)
    priceValueBlackEdition.addEventListener('input', inputNumberStyle)
    continueBambooBtn.addEventListener('click', sucess)
    continueBlackEditionBtn.addEventListener('click', sucess)
}
sucess()

document.querySelector('#got-it-btn').addEventListener('click', function() {
    window.location.href = 'index.html'
    sucessCard.style.display = 'none'
    overlay.style.display = 'none'
})