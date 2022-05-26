'use strict'

let expense = [
    ["6 May 2022", 440, ["Rice", "Dal"]],
    ["10 May 2022", 200, ["Vegetables"]],
    ["15 May 2022", 180, ["Mustard Oil"]],
    ["16 May 2022", 1000, ["Examination Fee"]],
    ["20 May 2022", 200, ["School project"]],
    ["25 May 2022", 400, ["Gas refuiling"]],
    ["29 May 2022", 2500, ["Rent"]],
    ["31 May 2022", 299, ["Mobile recharge"]]
]





let newMonth = document.querySelector('.new-month')
let nextMonth = document.querySelector('.next-month')
let contentContainer = document.querySelector('.content-container')
let left = document.querySelector('.left')
let spend = document.querySelector('.spend')






newMonth.addEventListener('click', function(e) {
    console.log(e);
})

nextMonth.addEventListener('click', function(e) {
    console.log(e);
})


const inserting = function(expense) {

    let sum = 0
    let moneyleft = expense.forEach(ele => {
        sum = sum + ele[1]
    })


    let lefthtml = `
        <div class="left">
            <p>Money left :- ${9000-sum} ₹</p>
        </div>
    `
    let spendhtml = `
        <div class="spend">
            <p>Spend :- ${sum} ₹</p>
        </div>
    `
    left.insertAdjacentHTML('afterbegin', lefthtml)
    spend.insertAdjacentHTML('afterbegin', spendhtml)

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
        contentContainer.insertAdjacentHTML('beforeend', html)
    });

}

inserting(expense)

/////////////////////////////////////////
///////////////////////////////////////////////////////////

/// It has some bug
///Sticky Nav

// const header = document.querySelector('.header')
// const months = document.querySelector('.months')
// const navHeight = months.getBoundingClientRect().height

// const stickyNav = function(entries) {
//     const [entry] = entries

//     if (!entry.isIntersecting) header.classList.add('sticky');
//     else header.classList.remove('sticky');

// }

// const headerObserver = new IntersectionObserver(stickyNav, {
//     root: null,
//     threshold: 0,
//     rootMargin: `-${navHeight}px`,
// });

// headerObserver.observe(months);