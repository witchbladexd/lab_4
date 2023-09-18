const express = require('express');

const app = express();
app.use(express.json());

const PORT = 8080;

async function API() {
    let res = await fetch('http://www.mocky.io/v2/5c7db5e13100005a00375fda');
    let resData = await res.json() 

    resData = JSON.parse(JSON.stringify(resData).replace(/ /g, '_'));
    fetch('http://www.mocky.io/v2/5c7db5e13100005a00375fda', {
        method: 'POST',
        headers: {'Content-Type': 'application/json;charset=utf-8'},
        body: resData    
    })
    console.log(resData);
};

app.listen(PORT, () => {
    API();
})