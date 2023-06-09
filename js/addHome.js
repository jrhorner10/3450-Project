const url = "http://localhost:8383"

const addHome = {
    id: document.querySelector('#id'),
    homeType: document.querySelector('#homeType'),
    addressID: document.querySelector('#addressID'),
    floorSpace: document.querySelector('#floorSpace'),
    floors: document.querySelector('#floors'),
    bedrooms: document.querySelector('#bedrooms'),
    bathrooms: document.querySelector('#bathrooms'),
    landSize: document.querySelector('#landSize'),
    yearConstructed: document.querySelector('#yearConstructed'),
    submit: document.querySelector('#submit')
};

addHome.submit.addEventListener('click', (e) => {

    fetch(url + '/Home', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
                id: addHome.id.value,
                homeType: addHome.homeType.value,
                addressID: addHome.addressID.value,
                floorSpace: addHome.floorSpace.value,
                floors: addHome.floors.value,
                bedrooms: addHome.bedrooms.value,
                bathrooms: addHome.bathrooms.value,
                landSize: addHome.landSize.value,
                yearConstructed: addHome.yearConstructed.value})
    });
})