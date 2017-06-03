/**
 * Created by Kartik Anand on 04-06-2017.
 */
var update = document.getElementById('update')
var del = document.getElementById('delete')

update.addEventListener('click', function () {
    // Send PUT Request here
    fetch('quotes', {
        method: 'put',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            'name': 'Batman',
            'quote': 'I find your lack of faith disturbing.'
        })
    })
        .then(response => {
        if (response.ok) return response.json()
})
    .then(data => {
        console.log(data)
})
})
del.addEventListener('click', function () {
    fetch('quotes', {
        method: 'delete',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'name': 'Batman'
        })
    })
        .then(res => {
        if (res.ok) return res.json()
}).
    then(data => {
        console.log(data)
    window.location.reload(true)
})
})