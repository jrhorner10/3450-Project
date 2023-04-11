const url = "http://localhost:8383"

const addAgent = {
    id: document.querySelector('#id'),
    liscenceNumber: document.querySelector('#liscenceNumber'),
    submit: document.querySelector('#submit')
};

addAgent.submit.addEventListener('click', (e) => {
    fetch(url + '/addAgent' + 
                `?id=${addAgent.id.value}&` + 
                `liscenceNumber=${addAgent.liscenceNumber.value}&`,
                {
                    method: 'post'
                });
})