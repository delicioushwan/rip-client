const axios = require("axios");

axios.get('http://13.209.6.108:5000/comments')
.then(res => console.log(res))
.catch(error => console.log(error))