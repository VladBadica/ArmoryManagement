import React, { useEffect } from 'react';
import AddBullets from '../components/AddBullets';
import AddPrimers from '../components/AddPrimers';
import {useDispatch, useSelector} from 'react-redux';
import { getBulletsDetails, getPrimersDetails } from '../actions/ammunitionsActions';

const AddAmmunitions = () => {
    const {bullets_details} = useSelector((state) => state.storeBulletsDetails);
    const {primers_details} = useSelector((state) => state.storePrimersDetails);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBulletsDetails());
        dispatch(getPrimersDetails());
      }, [dispatch]);

    return (
        <div >
        <AddBullets bullets_details={bullets_details}/>
        <br/>
        <AddPrimers primers_details={primers_details}/>
        </div>
    );
}

export default AddAmmunitions;