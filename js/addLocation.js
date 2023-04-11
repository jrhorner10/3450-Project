const url = "http://localhost:8383"

const addLocation = {
    id: document.querySelector('#addressID'),
    address: document.querySelector('#address'),
    street: document.querySelector('#street'),
    city: document.querySelector('#city'),
    zipCode: document.querySelector('#zipCode'),
    county: document.querySelector('#county'),
    population: document.querySelector('#population'),
    submit: document.querySelector('#submit')
};

addLocation.submit.addEventListener('click', (e) => {

    fetch(url + '/Location', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
                id: addLocation.id.value,
                address: addLocation.address.value,
                street: addLocation.street.value,
                city: addLocation.city.value,
                zipCode: addLocation.zipCode.value,
                county: addLocation.county.value,
                population: addLocation.population.value
        })
    });
})
