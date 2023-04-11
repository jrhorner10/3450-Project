const url = "http://localhost:8383"

const searchHomes = {
    homeType: document.querySelector('#homeType'),
    yearConstructed: document.querySelector('#yearConstructed'),
    bedrooms: document.querySelector('#bedrooms'),
    bedroomsCompare: document.querySelector('#bedroomsCompare'),
    floorspace: document.querySelector('#floorspace'),
    floorspaceCompare: document.querySelector('#floorspaceCompare'),
    sortBy: document.querySelector('#sortBy'),
    sortByOrder: document.querySelector('#sortByOrder'),
    submit: document.querySelector('#submit'),
    output: document.querySelector('#output')
};

let count = 0;

searchHomes.submit.addEventListener('click', (e) => {
    
    fetch(url + '/Home' + 
        `?homeType=${searchHomes.homeType.value}&` +
        `yearConstructed=${searchHomes.yearConstructed.value}&` +
        `bedrooms=${searchHomes.bedrooms.value}&` +
        `bedroomsCompare=${searchHomes.bedroomsCompare.value}&` +
        `floorspace=${searchHomes.floorspace.value}&` +
        `floorspaceCompare=${searchHomes.floorspaceCompare.value}&` +
        `sortBy=${searchHomes.sortBy.value}&` +
        `sortByOrder=${searchHomes.sortByOrder.value}`, {
        method: "get"
    })
    .then(response => response.json())
    .then(data => {
        searchHomes.output.innerHTML = "";
        if (Object.keys(data).length > 0) {
            for (item of data) {
                let myHome = document.createElement("p");
                myHome.appendChild(document.createElement("span")).textContent = `Home ID: ${item.HomeID}`;
                myHome.appendChild(document.createElement("br"));
                myHome.appendChild(document.createElement("span")).textContent = `Home Type: ${item.HomeType}`;
                myHome.appendChild(document.createElement("br"));
                myHome.appendChild(document.createElement("span")).textContent = `Year Constructed: ${item.YearConstructed}`;
                myHome.appendChild(document.createElement("br"));
                myHome.appendChild(document.createElement("span")).textContent = `Bedrooms: ${item.Bedrooms}`;
                myHome.appendChild(document.createElement("br"));
                myHome.appendChild(document.createElement("span")).textContent = `Floorspace: ${item.FloorSpace}`;
                searchHomes.output.appendChild(myHome);
            }
        }        
    });
})