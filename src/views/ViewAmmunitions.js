import React, { useEffect, useState, useMemo } from 'react';
import BulletsTable from '../components/BulletsTable';
import BulletService from '../services/bulletService';

const ViewAmmunitions = () => {
  var [bullets, setBullets] = useState('');

  const getBullets = async () => {
    const response = await BulletService.GetAllBullets();

    if (response && response.data) {
      setBullets(response.data);
    }
  }

  useEffect(() => {
    if (!bullets) {
      getBullets();
    }
  }, [bullets]);

  const bulletsComponent = useMemo(() =>
    <BulletsTable bullets={bullets} />
    , [bullets]);

  return (
      bulletsComponent
  );

};

export default ViewAmmunitions;