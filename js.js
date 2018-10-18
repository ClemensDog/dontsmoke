var total = 158,
    buttons = document.querySelector('.buttons'),
    pie = document.querySelector('.pie'),
    activeClass = 'active';

var countries = {
    "Japan (30kr)": 40,
    "USA (40kr)": 21,
    "Denmark (44kr)": 20,
    "UK (110kr)": 9,
    "Australia (140kr)": 12
};


var numberFixer = function (num) {
    var result = ((num * total) / 100);
    return result;
}


for (property in countries) {
    var newEl = document.createElement('button');
    newEl.innerText = property;
    newEl.setAttribute('data-name', property);
    buttons.appendChild(newEl);
}


buttons.addEventListener('click', function (e) {
    if (e.target != e.currentTarget) {
        var el = e.target,
            name = el.getAttribute('data-name');
        setPieChart(name);
        setActiveClass(el);
    }
    e.stopPropagation();
});

var setPieChart = function (name) {
    var number = countries[name],
        fixedNumber = numberFixer(number),
        result = fixedNumber + ' ' + total;

    pie.style.strokeDasharray = result;
}

var setActiveClass = function (el) {
    for (var i = 0; i < buttons.children.length; i++) {
        buttons.children[i].classList.remove(activeClass);
        el.classList.add(activeClass);
    }
}


setPieChart('asia');
setActiveClass(buttons.children[0]);
