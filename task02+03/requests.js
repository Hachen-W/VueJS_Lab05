const axios = require('axios');

axios.get('https://vk.com')
    .then(res => console.log("VK: Успех!"))
    .catch(err => console.error("VK: Ошибка:", err.message));

axios.get('https://json.geoiplookup.io/')
    .then(res => console.log("GeoIP: Успех, IP -", res.data.ip))
    .catch(err => console.error("GeoIP: Ошибка:", err.message));
