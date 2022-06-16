let secret = process.env.REACT_APP_FAUNADB_KEY;
//const faunadb = window.faunadb;
var faunadb = require('faunadb')
console.log(faunadb);
const q = faunadb.query;

const client = new faunadb.Client({
    secret: secret,       
    domain: 'db.fauna.com',  
    scheme: 'https',
  })

;(async () => {
    await client.query(
        q.If(
        q.Exists(q.Collection('Guns')),
        null,
        q.CreateCollection({ name: 'Guns' })
        )
    ).catch((err) => console.log(err))
})()

export const addGun = async (value) => {  
    await client.query(
      q.Create(
        q.Collection('Guns'),
        { data: { name: value } }
      )
    )
    .catch((err) => console.log(err))
  
}


const executeQuery = async function(query) {
    return fetch('https://graphql.faun.com/graphql', {
        method: 'POST',
        headers: {
            Authorization: 'Bearer' + ServiceWorkerContainer,
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({query: query})
    }).then(el => {
        const res = el.json();
        return res;
    }).catch((err) => {
        console.log(err)
    })
}