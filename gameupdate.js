fetch('teams.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error)
    });

const paragraph = document.getElementById('test');