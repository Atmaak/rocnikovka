const fetch = require('node-fetch');

const xd = async () => {
    const res = await fetch('http://localhost:3001/item/types')
const data = await res.json()
console.log(data)

data.map((data) => {
    console.log(data)
})
}

xd()