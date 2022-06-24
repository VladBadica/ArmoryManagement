import React, { useEffect } from 'react';
import AddBullets from '../components/AddBullets';
import {useDispatch, useSelector} from 'react-redux';
import { getBulletsDetails } from '../actions/ammunitionsActions';

const AddAmmunitions = () => {

    const {bullets_details} = useSelector((state) => state.storeAmmunitions);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBulletsDetails());
  
      }, [dispatch]);

    return (
        <div >
        <AddBullets bullets_details={bullets_details}/>
        </div>
    );
}

export default AddAmmunitions;