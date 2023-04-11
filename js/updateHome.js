const url = "http://localhost:8383"

const updateHome = {
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

updateHome.submit.addEventListener('click', (e) => {

    fetch(url + '/Home', {
        method: 'put',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
                id: updateHome.id.value,
                homeType: updateHome.homeType.value,
                addressID: updateHome.addressID.value,
                floorSpace: updateHome.floorSpace.value,
                floors: updateHome.floors.value,
                bedrooms: updateHome.bedrooms.value,
                bathrooms: updateHome.bathrooms.value,
                landSize: updateHome.landSize.value,
                yearConstructed: updateHome.yearConstructed.value})
    });
})