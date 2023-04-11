const url = "http://localhost:8383"

const deleteAgent = {
    agentID: document.querySelector('#agentID'),
    submit: document.querySelector('#submit')
};

deleteAgent.submit.addEventListener('click', (e) => {
    console.log('delete agent')
    fetch(url + '/Agent', {
        method: 'delete',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            agentID: deleteAgent.agentID.value
        })
    });
})