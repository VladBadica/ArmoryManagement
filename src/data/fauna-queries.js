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

export const getAmmunitionsQuery = async () => {
  var primers =  await client.query(
    q.Call("GetAllPrimers_Sorted", [])
  );
  var powders =  await client.query(
    q.Call("GetAllPowders_Sorted", [])
  );
  var bullets =  await client.query(
    q.Call("GetAllBullets_Sorted", [])
  );

  return {
    primers: primers.data,
    powders: powders.data,
    bullets: bullets.data
  };
};

export const getBulletDetailsQuery = async () => {
  var makes =  await client.query(
    q.Call("GetBulletMakes", [])
  );
  var calibres =  await client.query(
    q.Call("GetBulletCalibres", [])
  );
  var models =  await client.query(
    q.Call("GetBulletModels", [])
  );

  return {
    makes: makes,
    calibres: calibres,
    models: models
  };
};

export const getPrimerDetailsQuery = async () => {
  var makes =  await client.query(
    q.Call("GetPrimerMakes", [])
  );
  var models =  await client.query(
    q.Call("GetPrimerModels", [])
  );
  return {
    makes: makes,
    models: models
  };
};

export const addBullet = async (bulletData) => {
  console.log(bulletData)
  await client.query(
    q.Call("AddBullet", 
      [
        bulletData.date_purchased, 
        bulletData.make, 
        bulletData.calibre, 
        bulletData.model, 
        bulletData.grain, 
        bulletData.price, 
        bulletData.unit_per_box, 
        bulletData.available, 
        0
      ])
  )   
};

export const addPrimer = async (primerData) => {
  console.log(primerData)
  await client.query(
    q.Call("AddPrimer", 
      [
        primerData.date_purchased, 
        primerData.make, 
        primerData.model, 
        primerData.price, 
        primerData.unit_per_box, 
        primerData.available, 
        0
      ])
  )   
};