import React from 'react';
import { useEffect, useState, useCallback, useMemo } from 'react';
import { Accordion, Card, Container, Row, Col } from 'react-bootstrap';
import ReloadService from '../services/reloadService.js';

const ViewReloads = ({ containerSize }) => {
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
        if (reloads.length <= 0) {
            return <Card>
                <Card.Body>NO RELOADS</Card.Body>
            </Card>
        }
        return reloads.map(({ id, casing, casingCount }) =>
            <Accordion.Item eventKey={id} key={id} >
                <Accordion.Header> {casing.calibre} </Accordion.Header>
                <Accordion.Body>
                    <Row>
                        <Col>
                            Casing Calibre: {casing.calibre}
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            Casing Count: {casingCount}
                        </Col>
                    </Row>
                </Accordion.Body>
            </Accordion.Item >
        )
    }, [reloads]);

    return (
        <>
            <div >
                <h3 className="mb-3"> Reloads</h3>

                <Container className={`overflow-container${containerSize ? "-" + containerSize : ""}`}>
                    <Accordion defaultActiveKey="0" className="overflow-container-content">
                        {renderReloads}
                    </Accordion>
                </Container>
            </div>
        </>
    );
}

export default ViewReloads;