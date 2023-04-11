const url = "http://localhost:8383"

const updateAgent = {
    id: document.querySelector('#id'),
    name: document.querySelector('#name'),
    realEstateCompany: document.querySelector('#realEstateCompany'),
    commissionRate: document.querySelector('#commissionRate'),
    city: document.querySelector('#city'),
    submit: document.querySelector('#submit')
};

updateAgent.submit.addEventListener('click', (e) => {

    fetch(url + '/Agent', {
        method: 'put',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
                id: updateAgent.id.value,
                name: updateAgent.name.value,
                realEstateCompany: updateAgent.realEstateCompany.value,
                commissionRate: updateAgent.commissionRate.value,
                city: updateAgent.city.value
        })
    });
})