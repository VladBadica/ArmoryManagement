import React , {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getAmmunitions} from '../actions/ammunitionsActions';


const ViewAmmunitions = () => {
    
    const {loading, ammunitions} = useSelector((state) => state.storeAmmunitions);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAmmunitions());

      }, [dispatch]);

    return (
        <div>
           <div>VIEW ALL AMMO</div> 

            {ammunitions?.map((ammo) => (
                ammo.model
          ))}
        </div>
    );

};

export default ViewAmmunitions;