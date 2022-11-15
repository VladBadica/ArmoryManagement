import React, { useEffect, useState } from 'react';
import BulletsTable from '../components/BulletsTable';
import PrimersTable from '../components/PrimersTable';
import PowdersTable from '../components/PowdersTable';

const ViewAmmunitions = () => {

  const { ammunitions } = useState({});
  var [primersHeaders, setPrimersHeaders] = useState([]);
  var [bulletsHeaders, setBulletsHeaders] = useState([]);
  var [powdersHeaders, setPowdersHeaders] = useState([]);

  useEffect(() => {
    var headers;

    if (ammunitions && ammunitions?.primers?.length > 0) {
      headers = Object.keys(ammunitions.primers[0].data);
      setPrimersHeaders(headers);
    }

    if (ammunitions && ammunitions?.bullets?.length > 0) {
      headers = Object.keys(ammunitions.bullets[0].data);
      setBulletsHeaders(headers);
    }

    if (ammunitions && ammunitions?.powders?.length > 0) {
      headers = Object.keys(ammunitions.powders[0].data);
      setPowdersHeaders(headers);
    }
    console.log(ammunitions)
  }, [ammunitions]);

  return (
    <div>
      <PrimersTable primersHeaders={primersHeaders} primers={ammunitions?.primers} />
      <BulletsTable bulletsHeaders={bulletsHeaders} bullets={ammunitions?.bullets} />
      <PowdersTable powdersHeaders={powdersHeaders} powders={ammunitions?.powders} />
    </div>
  );

};

export default ViewAmmunitions;