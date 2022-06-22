import React from 'react';
import {Table} from 'react-bootstrap';

function PowdersTable({powdersHeaders, powders}) {
    return (
        <div>
            <h3>Powders</h3> 
            <div className="ammoContainer">
                <Table striped bordered hover>
                    <thead>
                        <tr>                  
                            {powdersHeaders?.map((powder) => (             
                                <th key={powder}>{powder}</th>
                            ))}
                        </tr>
                    </thead> 

                    <tbody>
                        {powders?.map((powder) => (             
                        <tr key={powder.ref}>
                            <td>{powder.data.date_purchased}</td>
                            <td>{powder.data.make}</td>
                            <td>{powder.data.model}</td>
                            <td>{powder.data.price}</td>
                            <td>{powder.data.grains_per_pot}</td>
                            <td>{powder.data.price_per_grain}</td>
                            <td>{powder.data.available}</td>
                            <td>{powder.data.used}</td>
                        </tr>
                        ))}
                    </tbody>        
                    
        
                </Table>
            </div>        
        </div>
                  
    );
}

export default PowdersTable;