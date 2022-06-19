import React , {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getAmmunitions} from '../actions/ammunitionsActions';


const ViewAmmunitions = () => {
    
    const ammunitions = useSelector((state) => state.storeAmmunitions);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log(ammunitions);
        dispatch(getAmmunitions());
        console.log(ammunitions);

      }, [dispatch]);

    return (
        <div>
            VIEW ALL AMMO
        </div>
    );

};

export default ViewAmmunitions;