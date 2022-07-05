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

export const getPowderDetailsQuery = async () => {
  var makes =  await client.query(
    q.Call("GetPowderMakes", [])
  );
  var models =  await client.query(
    q.Call("GetPowderModels", [])
  );
  return {
    makes: makes,
    models: models
  };
};

export const addBullet = async (data) => {
  return client.query(
    q.Call("AddBullet", 
      [
        data.date_purchased, 
        data.make, 
        data.calibre, 
        data.model, 
        data.grain, 
        data.price, 
        data.unit_per_box, 
        data.price / data.unit_per_box,
        data.available, 
        0
      ])
  )   
};

export const addPrimer = async (data) => {
  return client.query(
    q.Call("AddPrimer", 
      [
        data.date_purchased, 
        data.make, 
        data.model, 
        data.price, 
        data.unit_per_box, 
        data.price_per_unit,
        data.available, 
        0
      ])
  )   
};

export const addPowder = async (data) => {
  return client.query(
    q.Call("AddPowder", 
      [
        data.date_purchased, 
        data.make, 
        data.model, 
        data.price, 
        data.grains_per_pot, 
        data.price_per_grain,
        data.available, 
        0
      ])
  )   
};