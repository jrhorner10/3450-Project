const url = "http://localhost:8383"

const addOwner = {
    name: document.querySelector('#name'),
    age: document.querySelector('#age'),
    ssn: document.querySelector('#ssn'),
    profession: document.querySelector('#profession'),
    income: document.querySelector('#income'),
    numDependants: document.querySelector('#numDependants'),
    submit: document.querySelector('#submit')
};

addOwner.submit.addEventListener('click', (e) => {

    fetch(url + '/Owner', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
                name: addOwner.name.value,
                age: addOwner.age.value,
                ssn: addOwner.ssn.value,
                profession: addOwner.profession.value,
                income: addOwner.income.value,
                numDependants: addOwner.numDependants.value
        })
    });
})