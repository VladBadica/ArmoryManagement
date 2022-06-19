
let secret = process.env.REACT_APP_FAUNADB_KEY;

var faunadb = require('faunadb');
const q = faunadb.query;

const client = new faunadb.Client({
    secret: secret,       
    domain: 'db.fauna.com',  
    scheme: 'https',
  })

export const init  = async () => {
    await client.query(
        q.If(
        q.Exists(q.Collection('Guns')),
        null,
        q.CreateCollection({ name: 'Guns' })
        )
    ).catch((err) => console.log(err));
};

export const addGun = async (value) => {  
    await client.query(
      q.Create(
        q.Collection('Guns'),
        { data: { name: value } }
      )
    )
    .catch((err) => console.log(err));  
};

export const getAmmunitionsQuery = async (dispatch) => {
    return await client.query(
        q.Call("GetAllPrimers_Sorted", [])
    )
};