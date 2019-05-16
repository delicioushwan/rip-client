var fetch = require("node-fetch");

fetch('https://my-json-server.typicode.com/choi8686/fakeserver/toilet')
.then(response => response.json())
.then(json => console.log(json))
.then(error => console.log(error))