const form = document.getElementById('form')
const formFancybox = document.getElementById('form-fancybox')

async function getFormData() {
    const data = new FormData(form)
    let name = data.get('name')
    let phone = data.get('phone')

    try {

        document.getElementById("formButton").disabled = true;
        document.getElementById("formButton").classList.add('disabled')
        form.querySelector(".contacts__preloader").classList.remove('hidden')
        const response = await fetch('https://beauty-saloon-server.herokuapp.com/api/orders', {
            method: 'POST',
            body: JSON.stringify({
                name,
                phone
            })
        });
        const result = await response.json();
        document.getElementById("formButton").disabled = false;
        document.getElementById("formButton").classList.remove('disabled')
        form.querySelector(".contacts__preloader").classList.add('hidden')
        form.querySelector(".contacts__result-message").classList.remove('hidden')
        setTimeout(() => {
            form.querySelector(".contacts__result-message").classList.add('hidden')
        }, 3000)
        console.log('Успех:', JSON.stringify(result));
    } catch (error) {
        console.error('Ошибка:', error);
    }
}

const menu = document.getElementById('price-menu')
menu.addEventListener('click', priceSwitcher)

function priceSwitcher(e) {
    e.preventDefault()
    if (e.target.id === 'haircut') {

        let haircutData = {
            leftTitleFirst: 'Женская стрижка',
            leftTextFirst: 'Короткие волосы',

            leftTitleSecond: 'Мужская стрижка',
            leftTextSecond: 'Короткие волосы',

            leftTitleThird: 'Детский стиль',
            leftTextThird: 'Короткие волосы',

            leftTitleForth: 'Креативный стиль',
            leftTextForth: 'Короткие волосы',

            rightTitleFirst: 'Стрижка бороды и усов',
            rightTextFirst: 'Короткие волосы',

            rightTitleSecond: 'Эксперсс укладка',
            rightTextSecond: 'Короткие волосы',

            rightTitleThird: 'Уклака дневная',
            rightTextThird: 'Короткие волосы',

            rightTitleForth: 'Прическа вечерняя (свадебная)',
            rightTextForth: 'Короткие волосы',

            leftPriceFirst: '1200 ₽',
            leftPriceSecond: '1200 ₽',

            leftPriceThird: '1200 ₽',
            leftPriceForth: '1200 ₽',

            rightPriceFirst: '1200 ₽',
            rightPriceSecond: '1200 ₽',

            rightPriceThird: '1200 ₽',
            rightPriceForth: '3000 ₽',
        }
        setText(haircutData)

    } else if (e.target.id === 'cosmetology') {
        let cosmetologyData = {
            leftTitleFirst: 'Салициловый пилинг',
            leftTextFirst: '18+ и старше',

            leftTitleSecond: 'Миндальный пилинг',
            leftTextSecond: '18+ и старше',

            leftTitleThird: 'Ретиноловый пилинг',
            leftTextThird: '18+ и старше',

            leftTitleForth: '',
            leftTextForth: '',

            rightTitleFirst: '',
            rightTextFirst: '',

            rightTitleSecond: '',
            rightTextSecond: '',

            rightTitleThird: '',
            rightTextThird: '',

            rightTitleForth: '',
            rightTextForth: '',

            leftPriceFirst: '2900 ₽',
            leftPriceSecond: '2900 ₽',

            leftPriceThird: '2900 ₽',
            leftPriceForth: '',

            rightPriceFirst: '',
            rightPriceSecond: '',

            rightPriceThird: '',
            rightPriceForth: '',
        }

        setText(cosmetologyData)

    } else if (e.target.id === 'nails') {
        let nailsData = {
            leftTitleFirst: 'Маникюр',
            leftTextFirst: '60 минут',

            leftTitleSecond: 'Педикюр',
            leftTextSecond: '30 минут',

            leftTitleThird: 'SPA для рук',
            leftTextThird: '30 минут',

            leftTitleForth: 'SPA для ног',
            leftTextForth: '30 минут',

            rightTitleFirst: '',
            rightTextFirst: '',

            rightTitleSecond: '',
            rightTextSecond: '',

            rightTitleThird: '',
            rightTextThird: '',

            rightTitleForth: '',
            rightTextForth: '',

            leftPriceFirst: '1000 ₽',
            leftPriceSecond: '1300 ₽',

            leftPriceThird: '500 ₽',
            leftPriceForth: '700 ₽',

            rightPriceFirst: '',
            rightPriceSecond: '',

            rightPriceThird: '',
            rightPriceForth: '',
        }

        setText(nailsData)

    } else if (e.target.id === 'makeup') {
        let makeupData = {
            leftTitleFirst: 'Макияж дневной',
            leftTextFirst: '60 минут',

            leftTitleSecond: 'Макияж вечерний',
            leftTextSecond: '90 минут',

            leftTitleThird: 'Лифтинг',
            leftTextThird: '60 минут',

            leftTitleForth: 'Макияж для фотосессий',
            leftTextForth: '90 минут',

            rightTitleFirst: '',
            rightTextFirst: '',

            rightTitleSecond: '',
            rightTextSecond: '',

            rightTitleThird: '',
            rightTextThird: '',

            rightTitleForth: '',
            rightTextForth: '',

            leftPriceFirst: '1000 ₽',
            leftPriceSecond: '1500 ₽',

            leftPriceThird: '1500 ₽',
            leftPriceForth: '2000 ₽',

            rightPriceFirst: '',
            rightPriceSecond: '',

            rightPriceThird: '',
            rightPriceForth: '',
        }

        setText(makeupData)

    } else if (e.target.id === 'brows') {
        let browsData = {
            leftTitleFirst: 'Коррекция бровей',
            leftTextFirst: '30 минут',

            leftTitleSecond: 'Ламинирование бровей',
            leftTextSecond: '60 минут',

            leftTitleThird: 'Окрашивание бровей',
            leftTextThird: '30 минут',

            leftTitleForth: '',
            leftTextForth: '',

            rightTitleFirst: '',
            rightTextFirst: '',

            rightTitleSecond: '',
            rightTextSecond: '',

            rightTitleThird: '',
            rightTextThird: '',

            rightTitleForth: '',
            rightTextForth: '',

            leftPriceFirst: '500 ₽',
            leftPriceSecond: '600 ₽',

            leftPriceThird: '500 ₽',
            leftPriceForth: '',

            rightPriceFirst: '',
            rightPriceSecond: '',

            rightPriceThird: '',
            rightPriceForth: '',
        }

        setText(browsData)

    } else if (e.target.id === 'massage') {
        let massageData = {
            leftTitleFirst: 'Лимфодренажный массаж',
            leftTextFirst: '60 минут',

            leftTitleSecond: 'Лечебный массаж',
            leftTextSecond: '40 минут',

            leftTitleThird: 'Русский SPA массаж',
            leftTextThird: '120 минут',

            leftTitleForth: 'Сибирское SPA',
            leftTextForth: '120 минут',

            rightTitleFirst: 'Березовое SPA',
            rightTextFirst: '120 минут',

            rightTitleSecond: 'Вулканический уход',
            rightTextSecond: '150 минут',

            rightTitleThird: '',
            rightTextThird: '',

            rightTitleForth: '',
            rightTextForth: '',

            leftPriceFirst: '2100 ₽',
            leftPriceSecond: '1500 ₽',

            leftPriceThird: '3300 ₽',
            leftPriceForth: '4900 ₽',

            rightPriceFirst: '7500 ₽',
            rightPriceSecond: '7500 ₽',

            rightPriceThird: '',
            rightPriceForth: '',
        }

        setText(massageData)
    }

}

function setText(data) {
    let leftTitleFirst = document.getElementById('left-title-first')
    let leftTitleSecond = document.getElementById('left-title-second')
    let leftTitleThird = document.getElementById('left-title-third')
    let leftTitleForth = document.getElementById('left-title-forth')
    let leftTextFirst = document.getElementById('left-text-first')
    let leftTextSecond = document.getElementById('left-text-second')
    let leftTextThird = document.getElementById('left-text-third')
    let leftTextForth = document.getElementById('left-text-forth')
    let rightTitleFirst = document.getElementById('right-title-first')
    let rightTitleSecond = document.getElementById('right-title-second')
    let rightTitleThird = document.getElementById('right-title-third')
    let rightTitleForth = document.getElementById('right-title-forth')
    let rightTextFirst = document.getElementById('right-text-first')
    let rightTextSecond = document.getElementById('right-text-second')
    let rightTextThird = document.getElementById('right-text-third')
    let rightTextForth = document.getElementById('right-text-forth')
    let leftPriceFirst = document.getElementById('left-price-first')
    let leftPriceSecond = document.getElementById('left-price-second')
    let leftPriceThird = document.getElementById('left-price-third')
    let leftPriceForth = document.getElementById('left-price-forth')
    let rightPriceFirst = document.getElementById('right-price-first')
    let rightPriceSecond = document.getElementById('right-price-second')
    let rightPriceThird = document.getElementById('right-price-third')
    let rightPriceForth = document.getElementById('right-price-forth')

    leftTitleFirst.textContent = data.leftTitleFirst
    leftTextFirst.textContent = data.leftTextFirst

    leftTitleSecond.textContent = data.leftTitleSecond
    leftTextSecond.textContent = data.leftTextSecond

    leftTitleThird.textContent = data.leftTitleThird
    leftTextThird.textContent = data.leftTextThird

    leftTitleForth.textContent = data.leftTitleForth
    leftTextForth.textContent = data.leftTextForth

    rightTitleFirst.textContent = data.rightTitleFirst
    rightTextFirst.textContent = data.rightTextFirst

    rightTitleSecond.textContent = data.rightTitleSecond
    rightTextSecond.textContent = data.rightTextSecond

    rightTitleThird.textContent = data.rightTitleThird
    rightTextThird.textContent = data.rightTextThird

    rightTitleForth.textContent = data.rightTitleForth
    rightTextForth.textContent = data.rightTextForth

    leftPriceFirst.textContent = data.leftPriceFirst
    leftPriceSecond.textContent = data.leftPriceSecond

    leftPriceThird.textContent = data.leftPriceThird
    leftPriceForth.textContent = data.leftPriceForth

    rightPriceFirst.textContent = data.rightPriceFirst
    rightPriceSecond.textContent = data.rightPriceSecond

    rightPriceThird.textContent = data.rightPriceThird
    rightPriceForth.textContent = data.rightPriceForth
}

const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const html = document.html;
const menuHamb = document.querySelector("#menu")

hamb.addEventListener("click", hambHandler);

function hambHandler(e) {
    e.preventDefault();
    popup.classList.toggle("open");
    hamb.classList.toggle("active");
    html.classList.toggle("noscroll");
}

const links = Array.from(menuHamb.children);

links.forEach((link) => {
    link.addEventListener("click", closeOnClick);
});

function closeOnClick() {
    popup.classList.remove("open");
    hamb.classList.remove("active");
    html.classList.remove("noscroll");
}

const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
}

async function getFormFancyboxData() {
    const data = new FormData(formFancybox)
    let name = data.get('name')
    let phone = data.get('phone')
    let masterId = data.get('masterId')
    let serviceId = data.get('serviceId')
    let visitDate = data.get('visitDate')

    try {

        document.getElementById("fancyButton").disabled = true;
        document.getElementById("fancyButton").classList.add('disabled')
        formFancybox.querySelector(".contacts__preloader").classList.remove('hidden')
        const response = await fetch('https://beauty-saloon-server.herokuapp.com/api/orders', {
            method: 'POST',
            body: JSON.stringify({
                name,
                phone,
                masterId,
                serviceId,
                visitDate
            })
        });
        const result = await response.json();
        document.getElementById("fancyButton").disabled = false;
        document.getElementById("fancyButton").classList.remove('disabled')
        formFancybox.querySelector(".contacts__preloader").classList.add('hidden')
        formFancybox.querySelector(".contacts__result-message").classList.remove('hidden')
        setTimeout(() => {
            formFancybox.querySelector(".contacts__result-message").classList.add('hidden')
            window.location.href = window.location.href.replace("#dialogHeader", '')
            window.location.href = window.location.href.replace("#dialogFirst", '#popular')
            window.location.href = window.location.href.replace("#dialogSecond", '#popular')
            window.location.href = window.location.href.replace("#dialogThird", '#popular')
            window.location.href = window.location.href.replace("#dialogFourth", '#popular')
            window.location.href = window.location.href.replace("#dialogFifth", '#popular')
            window.location.href = window.location.href.replace("#dialogMaster1", '#masters')
            window.location.href = window.location.href.replace("#dialogMaster2", '#masters')
            window.location.href = window.location.href.replace("#dialogMaster3", '#masters')
            window.location.href = window.location.href.replace("#dialogMaster4", '#masters')
        }, 3000)
        console.log('Успех:', JSON.stringify(result));
    } catch (error) {
        console.error('Ошибка:', error);
    }
}
