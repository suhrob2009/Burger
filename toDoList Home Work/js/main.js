let input = document.querySelector('#input')
let btn = document.querySelector('#btn')
let ul = document.querySelector('ul')

// function toDoList() {

    btn.addEventListener('click', function () {
        
        if (input.value == " " || input.value == "Iltimos Matn Kiriting!!!") {
            input.value = "Iltimos Matn Kiriting!!!"
        } else {
            let li = document.createElement('li')
            let span = document.createElement('span')
            let button = document.createElement('button')

            span.innerHTML = input.value
            li.append(span)
            li.append(button)
            ul.append(li)
            button.innerHTML = 'x'
            input.value = " "
            input.focus()

            button.addEventListener('click',function() {
                li.remove()
            })
        }
    })
// }

// toDoList()
