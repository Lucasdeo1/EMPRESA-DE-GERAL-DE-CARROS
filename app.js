moment.locale('pt-br')
let data = moment();
let date = data.format('dddd-DD/MM/YYYY-HH:mm');

document.getElementById('data').innerText = date;