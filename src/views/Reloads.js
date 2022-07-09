import React, {useEffect, useState} from 'react';
import {Form, Button} from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';
import {getAmmunitions} from '../actions/ammunitionsActions';

const Reloads = () => {    
    const {ammunitions} = useSelector((state) => state.storeAmmunitions);
    const [bullet, setBullet] = useState("");
    const [primer, setPrimer] = useState("");
    const [powder, setPowder] = useState("");
    const [bulletsConsumed, setBulletsConsumed] = useState("");
    const [usedBullletsBatches, setUsedBulletsBatches] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
    dispatch(getAmmunitions());
    }, [dispatch]);

    function handleBatchChange(type, e){
        if(type === "bullet"){
            setBullet(e.target.value);
        }
        if(type === "primer"){
            setPrimer(e.target.value);
        }
        if(type === "powder"){
            setPowder(e.target.value);
        }
    };

    function handleBulletsConsumedChange(e){
        var consumed = e.target.value;
        setBulletsConsumed(consumed);
        var newUsedBulletsBatches = [];
        ammunitions.bullets.map((bullet, index) => {
            if(bullet.data.available > consumed) {
                var bulletUsedData = {
                    id: index+1,
                    ref: bullet.ref,
                    consumed: consumed
                }
                newUsedBulletsBatches.push(bulletUsedData);
                return;
            }
            else{
                bulletUsedData = {
                    id: index+1,
                    ref: bullet.ref,
                    consumed: bullet.data.available
                }
                newUsedBulletsBatches.push(bulletUsedData);
                consumed -= bullet.data.available;
            }
        });
        setUsedBulletsBatches(newUsedBulletsBatches);
    };

    function handleReload(e){
        e.preventDefault();
        console.log(usedBullletsBatches);
    };

    return(
        <div className="container40">
            <h3>Reloads</h3>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Bullet batches</Form.Label>
                    <Form.Select 
                        value={bullet}
                        onChange={(e) => handleBatchChange("bullet", e)}
                        >
                        {ammunitions?.bullets?.map((bullet, index) => 
                            (<option key={bullet.ref}>
                              {index + 1}) Date:{bullet.data.date_purchased} Make:{bullet.data.make} Model:{bullet.data.model} Grain:{bullet.data.grain} Calibre:{bullet.data.calibre} Price:{bullet.data.price} Price/Unit:{bullet.data.price_per_unit} Unit/Box:{bullet.data.unit_per_box} Available:{bullet.data.available} 
                            </option>)
                        )}
                    </Form.Select>
                </Form.Group>                

                <Form.Group className="mb-3">
                    <Form.Label>Primer batches</Form.Label>
                    <Form.Select 
                        value={primer}
                        onChange={(e) => handleBatchChange("primer", e)}
                        >
                        {ammunitions?.primers?.map((primer, index) => 
                            (<option key={primer.ref}>
                              {index + 1}) Date:{primer.data.date_purchased} Make:{primer.data.make} Model:{primer.data.model} Price:{primer.data.price} Price/Unit:{primer.data.price_per_unit} Unit/Box:{primer.data.unit_per_box} Available:{primer.data.available}
                            </option>)
                        )}
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Powder batches</Form.Label>
                    <Form.Select 
                        value={powder}
                        onChange={(e) => handleBatchChange("powder", e)}
                        >
                        {ammunitions?.powders?.map((powder, index) => 
                            (<option key={powder.ref}>
                              {index + 1}) Date:{powder.data.date_purchased} Make:{powder.data.make} Model:{powder.data.model} Price:{powder.data.price} Grains/Pot:{powder.data.grains_per_pot} Price/Grain:{powder.data.price_per_grain} Available:{powder.data.available}
                            </option>)
                        )}
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Bullets Consumed</Form.Label>
                    <Form.Control 
                        required 
                        value={bulletsConsumed} 
                        onChange={(e) => handleBulletsConsumedChange(e)}
                        type="number" 
                        placeholder="Enter number of bullets consumed" />
                </Form.Group>

                <Button variant="primary" type="submit" onClick={(e) => handleReload(e)}>
                    Submit
                </Button>
            </Form>
            
        </div>
    );
}

export default Reloads;