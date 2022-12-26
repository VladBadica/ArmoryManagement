import React from 'react';
import { useEffect, useState, useCallback, useMemo } from 'react';
import { Accordion, Card } from 'react-bootstrap';
import ReloadService from '../services/reloadService.js';

const ViewReloads = () => {
    const [reloads, setReloads] = useState([]);

    const getAllReloads = useCallback(async () => {
        const response = await ReloadService.GetAllReloads();

        if (!response.error) {
            setReloads(response.data);
        }
    }, [setReloads]);

    useEffect(() => {
        getAllReloads();
    }, [getAllReloads]);

    const renderReloads = useMemo(() => {
        console.log(reloads);
        if (reloads.length <= 0) {
            return <Card>
                <Card.Body>NO RELOADS</Card.Body>
            </Card>
        }
        return reloads.map(({ id, casing, casingCount }) =>
            <Accordion.Item eventKey={id} key={id} >
                <Accordion.Header> {casing.calibre} </Accordion.Header>
                <Accordion.Body>
                    <div className="row">
                        <div className="col-6">
                            Casing Calibre: {casing.calibre}<br />
                            Casing Count: {casingCount} <br />
                        </div>
                    </div>
                </Accordion.Body>
            </Accordion.Item >
        )
    }, [reloads]);

    return (
        <>
            <div >
                <h3 className="mb-3"> Reloads</h3>
                <Accordion defaultActiveKey="0" >
                    {renderReloads}
                </Accordion>
            </div>
        </>
    );
}

export default ViewReloads;