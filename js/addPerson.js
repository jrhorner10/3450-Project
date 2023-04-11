const url = "http://localhost:8383"

const addPerson = {
    id: document.querySelector('#id'),
    name: document.querySelector('#name'),
    ssn: document.querySelector('#ssn'),
    profession: document.querySelector('#profession'),
    income: document.querySelector('#income'),
    submit: document.querySelector('#submit')
};

addPerson.submit.addEventListener('click', (e) => {

    fetch(url + '/addHome' + 
                `?id=${addPerson.id.value}&` + 
                `name=${addPerson.name.value}&` +
                `ssn=${addPerson.ssn.value}&` +
                `profession=${addPerson.profession.value}&` +
                `income=${addPerson.income.value}`,
                {
                    method: 'post'
                });
})