const url = "http://localhost:8383"

const deleteHome = {
    homeID: document.querySelector('#homeID'),
    submit: document.querySelector('#submit')
};

deleteHome.submit.addEventListener('click', (e) => {

    fetch(url + '/Home', {
        method: 'delete',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            homeID: deleteHome.homeID.value
        })
    })
})