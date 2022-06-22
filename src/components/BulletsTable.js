import React from 'react';
import {Table} from 'react-bootstrap';

function BulletsTable({bulletsHeaders, bullets}) {
    return (
        <div>
            <h3>Bullets</h3> 
            <div className="ammoContainer">
                <Table striped bordered hover>
                    <thead>
                        <tr>                  
                            {bulletsHeaders?.map((header) => (             
                                <th key={header}>{header}</th>
                            ))}
                        </tr>
                    </thead> 

                    <tbody>
                        {bullets?.map((bullet) => (             
                        <tr key={bullet.ref}>
                            <td>{bullet.data.date_purchased}</td>
                            <td>{bullet.data.make}</td>
                            <td>{bullet.data.calibre}</td>
                            <td>{bullet.data.model}</td>
                            <td>{bullet.data.grain}</td>
                            <td>{bullet.data.price}</td>
                            <td>{bullet.data.unit_per_box}</td>
                            <td>{bullet.data.price_per_unit}</td>
                            <td>{bullet.data.available}</td>
                            <td>{bullet.data.used}</td>
                        </tr>
                        ))}
                    </tbody>        
                    
        
                </Table>
            </div>        
        </div>
                  
    );
}

export default BulletsTable;