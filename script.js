let food = {
    plainBurger: {
        name: "GAMBURGER",
        price: 10000,
        amount: 0,
        kcall: 450,
        get calcsum() {
            return this.price * this.amount
        },
        get calcKcall() {
            return this.kcall * this.amount
        }
    },
    freshBurger: {
        name: "GAMBURGER FRESH",
        price: 20500,
        amount: 0,
        kcall: 650,
        get calcsum() {
            return this.price * this.amount
        },
        get calcKcall() {
            return this.kcall * this.amount
        }
    },
    freshCombo: {
        name: "FRESH COMBO",
        price: 31900,
        amount: 0,
        kcall: 900,
        get calcsum() {
            return this.price * this.amount
        },
        get calcKcall() {
            return this.kcall * this.amount
        }
    }
}


let btn = [...document.querySelectorAll('.main__product-btn')]
// console.log(btn);



for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function () {
        // console.log(this.closest('.main__product').getAttribute('id'));
        prepare(this)
    })
}



function prepare(item) {
    // console.log(item);

    let parent = item.closest('.main__product') // Divlar
    let parentId = parent.getAttribute('id') // PlainBurger ID
    let num = parent.querySelector('.main__product-num')
    let price = parent.querySelector('.main__product-price span')
    let kcall = parent.querySelector('.main__product-kcall span')
    let sym = item.getAttribute('data-symbol')
    // console.log(sym);

    let count = food[parentId].amount
    // console.log(count);

    if (sym == "+") {
        count++
    } else if (sym == "-" && count > 0) {
        count--
    }

    food[parentId].amount = count
    num.innerHTML = count
    price.innerHTML = food[parentId].calcsum
    kcall.innerHTML = food[parentId].calcKcall
}

let receipt = document.querySelector('.receipt')
let receiptWindow = receipt.querySelector('.receipt__window')
let receiptWindowOut = receipt.querySelector('.receipt__window-out')
let receiptWindowBtn = receipt.querySelector('.receipt__window-btn')
let addCart = document.querySelector('.addCart') // $delivery


addCart.addEventListener('click', function () {
    receipt.style.display = 'block'
    setTimeout(() => {
        receipt.style.opacity = '1'
        receiptWindow.style.transition = '.5s'
    }, 100);
    receiptWindow.style.top = '25%'

    let menu = 'Your Cart: \n\n\n\n'

    let totalPrice = 0
    let totalKcall = 0


    for (const key in food) {
        // console.log(food[key].name); // object

        if (food[key].amount) {
            menu += `${food[key].name} ${food[key].amount}x ${food[key].price} = ${food[key].calcsum} \n\n`
            totalPrice += food[key].calcsum
            totalKcall += food[key].calcKcall
        }

    }

    receiptWindowOut.innerHTML = `${menu} \nTotal price: ${totalPrice} sum \nTotal Kcall ${totalKcall} calories`
})


receiptWindowBtn.addEventListener('click', function (e) {
    // location  = ('https://click.uz/ru')

    // location.reload() //  refresh qilib beradi

    // console.log(e.target);   // bosiletgan hodisani chiqarib beradi > (receiptWindowBtn)

    if (e.target) {
        receipt.style.opacity = '0'
        receiptWindow.style.top = '-100%'

        // setTimeout(() => {
        //     receipt.style.display = 'none'
        // }, 100);
    }
})



// ======================================================= 1 dan 100gacha autoTimer =======================================================
let timerExtra = document.querySelector('.header__timer-extra')
let headerTimer = document.querySelector('.header__timer')
let stopped;
let stopping;


function autoTimer() {
    stopped = setTimeout(() => {
        autoTimer()
        timerExtra.innerHTML++
        timerExtra.style.color = 'black'
        if (timerExtra.innerHTML >= 50) {
            timerExtra.style.color = 'white'
            headerTimer.style.color = 'black' 
            clearInterval(stopped)
            autoTimeTwo()
        }
    }, 60);
}   
autoTimer()


function autoTimeTwo() {
    stopping = setTimeout(() => {
        autoTimeTwo()
        timerExtra.innerHTML++

        if(timerExtra.innerHTML >= 60){
            headerTimer.style.color = 'black' 
            clearInterval(stopping)
            autoTimerNext()
        }

    }, 190);
}

function autoTimerNext() {
    setTimeout(() => {
        autoTimerNext()
        timerExtra.innerHTML++

        if (timerExtra.innerHTML == 100) {
            timerExtra.innerHTML = 0
            headerTimer.style.color = 'white' 
            // autoTimer()
           return clearInterval(stopped)
        }

    }, 100);
}

// =======================================================



let infoImg = [...document.querySelectorAll('.main__product-info')]

for (let i = 0; i < infoImg.length; i++) {
    infoImg[i].addEventListener('click', function(e) {
        showImg(this)
    })
}


function showImg(view) {
    let parent = view.closest('.main__product')
    let viewImg = document.querySelector('.view')
    let image = document.querySelector('.view img')
    let proImg = parent.querySelector('.main__product-info img')
    let close = document.querySelector('.view__close')

    viewImg.classList.add('active')

    let x = proImg.getAttribute('src')
    // console.log(x);
    image.removeAttribute('src')
    // console.log(image);


    if(proImg.hasAttribute('src')) {
        image.setAttribute('src', `${x}`)
    }

    viewImg.addEventListener('click',function(e){
        if(e.target == e.currentTarget) {
            viewImg.classList.remove('active')
       }
    })
    
    close.addEventListener('click',function(e){
        viewImg.classList.remove('active')

    })
}


