import React from 'react';
import { Table } from 'react-bootstrap';

function BulletsTable({ bullets }) {
    const bulletsHeaders = ["id", "make", "calibre", "model", "grain"];

    return (
        <div>
            <h3>Bullets</h3>
            <div className="ammoContainer">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            {bulletsHeaders?.map(header => (
                                <th key={header}>{header}</th>
                            ))}
                        </tr>
                    </thead>

                    <tbody>
                        {bullets?.length > 0 && bullets.map(bullet => (
                            <tr key={bullet.id}>
                                <td>{bullet.id}</td>
                                <td>{bullet.make}</td>
                                <td>{bullet.calibre}</td>
                                <td>{bullet.model}</td>
                                <td>{bullet.grain}</td>
                            </tr>
                        ))}
                    </tbody>


                </Table>
            </div>
        </div>

    );
}

export default BulletsTable;