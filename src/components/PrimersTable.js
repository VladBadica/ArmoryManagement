import React from 'react';
import {Table} from 'react-bootstrap';

function PrimersTable({primersHeaders, primers}) {
    return (
        <div>
            <h3>Primers</h3> 
            <div className="ammoContainer">
                <Table striped bordered hover>
                    <thead className="xd">
                        <tr>                  
                            {primersHeaders?.map((primer) => (             
                                <th  key={primer}>{primer}</th>
                            ))}
                        </tr>
                    </thead> 

                    <tbody >
                        {primers?.map((primer) => (             
                        <tr key={primer.ref}>
                            <td>{primer.data.date_purchased}</td>
                            <td>{primer.data.make}</td>
                            <td>{primer.data.model}</td>
                            <td>{primer.data.price}</td>
                            <td>{primer.data.unit_per_box}</td>
                            <td>{primer.data.price_per_unit}</td>
                            <td>{primer.data.available}</td>
                            <td>{primer.data.used}</td>
                        </tr>
                        ))}
                    </tbody>        
                    
        
                </Table>
            </div>        
        </div>
                  
    );
}

export default PrimersTable;