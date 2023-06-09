const url = "http://localhost:8383"

const addAgent = {
    id: document.querySelector('#id'),
    name: document.querySelector('#name'),
    realEstateCompany: document.querySelector('#realEstateCompany'),
    commissionRate: document.querySelector('#commissionRate'),
    city: document.querySelector('#city'),
    submit: document.querySelector('#submit')
};

addAgent.submit.addEventListener('click', (e) => {

    fetch(url + '/Agent', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
                id: addAgent.id.value,
                name: addAgent.name.value,
                realEstateCompany: addAgent.realEstateCompany.value,
                commissionRate: addAgent.commissionRate.value,
                city: addAgent.city.value
        })
    });
})