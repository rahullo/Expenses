'use strict'

let expense = [
    ["6 May 2022", 440, ["Rice", "Dal"]],
    ["10 May 2022", 200, ["Vegetables"]],
    ["15 May 2022", 180, ["Musturd Oil"]],
    ["20 May 2022", 200, ["School project"]],
    ["25 May 2022", 400, ["Gas refuiling"]],
    ["29 May 2022", 2500, ["Rent"]],
    ["31 May 2022", 299, ["Mobile recharge"]]
]





let newMonth = document.querySelector('.new-month')
let nextMonth = document.querySelector('.next-month')
let container = document.querySelector('.container')

newMonth.addEventListener('click', function(e) {
    console.log(e);
})

nextMonth.addEventListener('click', function(e) {
    console.log(e);
})


const inserting = function(expense) {
    expense.forEach(element => {
        let date = element[0]
        let amount = element[1]
        let item = element[2]

        const html = `
            <div class="content">
            <div class="date">
                <h4>${date}</h4>
            </div>
            <div class="cost">
                <h4>${amount} RS</h4>
            </div>
            <div class="list">${item}</div>
            </div>
        `
        container.insertAdjacentHTML('beforeend', html)
    });

}

inserting(expense)