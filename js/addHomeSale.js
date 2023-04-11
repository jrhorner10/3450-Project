const url = "http://localhost:8383"

const addHomeSale = {
    saleID: document.querySelector('#saleID'),
    homeID: document.querySelector('#homeID'),
    buyerSSN: document.querySelector('#buyerSSN'),
    sellerSSN: document.querySelector('#sellerSSN'),
    agentID: document.querySelector('#agentID'),
    saleDate: document.querySelector('#saleDate'),
    salePrice: document.querySelector('#salePrice'),
    submit: document.querySelector('#submit')
};

addHomeSale.submit.addEventListener('click', (e) => {

    fetch(url + '/HomeSale', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
                saleID: addHomeSale.saleID.value,
                homeID: addHomeSale.homeID.value,
                buyerSSN: addHomeSale.buyerSSN.value,
                sellerSSN: addHomeSale.sellerSSN.value,
                agentID: addHomeSale.agentID.value,
                saleDate: addHomeSale.saleDate.value,
                salePrice: addHomeSale.salePrice.value
        })
    })
})