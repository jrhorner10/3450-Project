const url = "http://localhost:8383"

const addHome = {
    id: document.querySelector('#id'),
    address: document.querySelector('#address'),
    floorSpace: document.querySelector('#floorSpace'),
    floors: document.querySelector('#floors'),
    bedrooms: document.querySelector('#bedrooms'),
    fullBathrooms: document.querySelector('#fullBathrooms'),
    halfBathrooms: document.querySelector('#halfBathrooms'),
    landSize: document.querySelector('#landSize'),
    yearConstructed: document.querySelector('#yearConstructed'),
    submit: document.querySelector('#submit')
};

addHome.submit.addEventListener('click', (e) => {

    fetch(url + '/addHome' + 
                `?id=${addHome.id.value}&` + 
                `address=${addHome.address.value}&` + 
                `floorSpace=${addHome.floorSpace.value}&` + 
                `floors=${addHome.floors.value}&` + 
                `bedrooms=${addHome.bedrooms.value}&` + 
                `fullBathrooms=${addHome.fullBathrooms.value}&` + 
                `halfBathrooms=${addHome.halfBathrooms.value}&` + 
                `landSize=${addHome.landSize.value}&` + 
                `yearConstructed=${addHome.yearConstructed.value}`, 
                {
                    method: 'post'
                });
})