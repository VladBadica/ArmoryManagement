import React, { useEffect, useCallback, useState, useMemo } from 'react';
import CasingService from '../services/casingService';
import PowderService from '../services/powderService';
import PrimerService from '../services/primerService';
import ReloadService from '../services/reloadService';
import ViewReloads from '../components/ViewReloads';
import { Button, Dropdown, Card, Row, Col, InputGroup, Form } from 'react-bootstrap';

const Reload = () => {
    const [casings, setCasings] = useState([]);
    const [powders, setPowders] = useState([]);
    const [primers, setPrimers] = useState([]);
    const [selectedCasing, setSelectedCasing] = useState(null);
    const [selectedPowder, setSelectedPowder] = useState(null);
    const [selectedPrimer, setSelectedPrimer] = useState(null);
    const [casingsToUse, setCasingsToUse] = useState(0);
    const [powdersToUse, setPowdersToUse] = useState(0);
    const [primersToUse, setPrimersToUse] = useState(0);

    const getAllCasings = useCallback(async () => {
        const response = await CasingService.GetAllCasings();

        if (!response.error) {
            setCasings(response.data);
        }
    }, []);

    const getAllPowders = useCallback(async () => {
        const response = await PowderService.GetAllPowders();

        if (!response.error) {
            setPowders(response.data);
        }
    }, []);

    const getAllPrimers = useCallback(async () => {
        const response = await PrimerService.GetAllPrimers();

        if (!response.error) {
            setPrimers(response.data);
        }
    }, []);

    const getMaterials = useCallback(async () => {
        await getAllCasings();
        await getAllPowders();
        await getAllPrimers();
    }, [getAllCasings, getAllPowders, getAllPrimers]);

    const addReload = useCallback(async () => {
        const reload = {
            casingId: selectedCasing.id,
            casingCount: casingsToUse,
            powderId: selectedPowder.id,
            powderCount: powdersToUse,
            primerId: selectedPrimer.id,
            primerCount: primersToUse,

        }
        const response = await ReloadService.CreateReload({ reload });

        console.log(response);
    }, [selectedCasing, selectedPowder, selectedPrimer, casingsToUse, powdersToUse, primersToUse]);

    useEffect(() => {
        getMaterials();
    }, [getMaterials]);

    const renderCasingsList = useMemo(() => {
        if (casings.length <= 0) {
            return <> </>;
        }

        return casings.map((casing) =>
            <Dropdown.Item key={casing.id} onClick={() => setSelectedCasing(casing)}>
                {casing.calibre}
            </Dropdown.Item>
        )
    }, [casings]);

    const renderCasingsCard = useMemo(() => (
        <Card style={{ height: 240 }} className="mt-3">
            <Card.Header className="m-0 p-0"> <Dropdown>
                <Dropdown.Toggle className="w-100 m-0" variant="light" id="dropdown-basic">
                    Select Casing
                </Dropdown.Toggle>
                <Dropdown.Menu className="w-100">
                    {renderCasingsList}
                </Dropdown.Menu>
            </Dropdown>
            </Card.Header>
            {selectedCasing ?
                <Card.Body>
                    <Row>
                        <Col> Calibre: </Col>
                        <Col> {selectedCasing.calibre} </Col>
                    </Row>
                    <Row>
                        <Col> Model: </Col>
                        <Col> {selectedCasing.model} </Col>
                    </Row>
                    <Row>
                        <Col> Model: </Col>
                        <Col> {selectedCasing.model} </Col>
                    </Row>
                    <Row>
                        <Col> DatePurchase: </Col>
                        <Col> {selectedCasing.datePurchased} </Col>
                    </Row>
                    <Row>
                        <Col> Price:</Col>
                        <Col> {selectedCasing.price}</Col>
                    </Row>
                    <Row>
                        <Col>InitialCount:</Col>
                        <Col>{selectedCasing.initialCount}</Col>
                    </Row>
                    <Row>
                        <Col>Remaining:</Col>
                        <Col>{selectedCasing.remaining}</Col>
                    </Row>
                </Card.Body> :
                <></>
            }
        </Card>
    ), [selectedCasing, renderCasingsList]);

    const renderPowdersList = useMemo(() => {
        if (powders.length <= 0) {
            return <> </>;
        }

        return powders.map((powder) =>
            <Dropdown.Item key={powder.id} onClick={() => setSelectedPowder(powder)}>
                {powder.make} - {powder.model}
            </Dropdown.Item>
        )
    }, [powders]);

    const renderPowdersCard = useMemo(() => (
        <Card style={{ height: 240 }} className="mt-3">
            <Card.Header className="m-0 p-0">
                <Dropdown>
                    <Dropdown.Toggle className="w-100 m-0" variant="light" id="dropdown-basic">
                        Select Powder
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="w-100">
                        {renderPowdersList}
                    </Dropdown.Menu>
                </Dropdown>
            </Card.Header>
            {selectedPowder ? <Card.Body>
                <Row>
                    <Col> Make:</Col>
                    <Col> {selectedPowder.make}</Col>
                </Row>
                <Row>
                    <Col >Model:</Col>
                    <Col>{selectedPowder.model}</Col>
                </Row>
                <Row>
                    <Col >DatePurchase:</Col>
                    <Col>{selectedPowder.datePurchased}</Col>
                </Row>
                <Row>
                    <Col >Price:</Col>
                    <Col>{selectedPowder.price}</Col>
                </Row>
                <Row>
                    <Col>InitialCount:</Col>
                    <Col>{selectedPowder.initialCount}</Col>
                </Row>
                <Row>
                    <Col>Remaining:</Col>
                    <Col>{selectedPowder.remaining}</Col>
                </Row>
            </Card.Body> : <></>}
        </Card>
    ), [selectedPowder, renderPowdersList]);

    const renderPrimersList = useMemo(() => {
        if (primers.length <= 0) {
            return <> </>;
        }

        return primers.map((primer) =>
            <Dropdown.Item key={primer.id} onClick={() => setSelectedPrimer(primer)}>
                {primer.make} - {primer.model}
            </Dropdown.Item>
        )
    }, [primers]);

    const renderPrimersCard = useMemo(() => (
        <Card style={{ height: 240 }} className="mt-3">
            <Card.Header className="m-0 p-0">
                <Dropdown>
                    <Dropdown.Toggle className="w-100 m-0" variant="light" id="dropdown-basic">
                        Select Primer
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="w-100">
                        {renderPrimersList}
                    </Dropdown.Menu>
                </Dropdown>
            </Card.Header>
            {selectedPrimer ? <Card.Body>
                <Row>
                    <Col> Make:</Col>
                    <Col> {selectedPrimer.make}</Col>
                </Row>
                <Row>
                    <Col >Model:</Col>
                    <Col>{selectedPrimer.model}</Col>
                </Row>
                <Row>
                    <Col >Size:</Col>
                    <Col>{selectedPrimer.size}</Col>
                </Row>
                <Row>
                    <Col >DatePurchase:</Col>
                    <Col>{selectedPrimer.datePurchased}</Col>
                </Row>
                <Row>
                    <Col >Price:</Col>
                    <Col>{selectedPrimer.price}</Col>
                </Row>
                <Row>
                    <Col>InitialCount:</Col>
                    <Col>{selectedPrimer.initialCount}</Col>
                </Row>
                <Row>
                    <Col>Remaining:</Col>
                    <Col>{selectedPrimer.remaining}</Col>
                </Row>
            </Card.Body> : <></>}
        </Card>
    ), [selectedPrimer, renderPrimersList]);

    return (
        <div>
            <h3 className="text-center">Reload</h3>
            <Row>
                <Col md={{ span: 2, offset: 3 }}>
                    {renderCasingsCard}

                    <InputGroup className="mt-3" >
                        <InputGroup.Text>Use</InputGroup.Text>
                        <Form.Control
                            disabled={!selectedCasing}
                            value={casingsToUse}
                            onChange={(e) => setCasingsToUse(e.target.value)}
                            type="number"
                        />
                    </InputGroup>
                </Col>
                <Col md={2}>
                    {renderPowdersCard}

                    <InputGroup className="mt-3" >
                        <InputGroup.Text>Use</InputGroup.Text>
                        <Form.Control
                            disabled={!selectedPowder}
                            value={powdersToUse}
                            onChange={(e) => setPowdersToUse(e.target.value)}
                            type="number"
                        />
                    </InputGroup>
                </Col>
                <Col md={2}>
                    {renderPrimersCard}

                    <InputGroup className="mt-3" >
                        <InputGroup.Text>Use</InputGroup.Text>
                        <Form.Control
                            disabled={!selectedPrimer}
                            value={primersToUse}
                            onChange={(e) => setPrimersToUse(e.target.value)}
                            type="number"
                        />
                    </InputGroup>
                </Col>
            </Row>

            <Row className="mt-4">
                <Col md={{ offset: 5, span: 2 }}>
                    <Button className="w-100" variant="primary" onClick={addReload}> Reload </Button>
                </Col>
            </Row>

            <Row className="mt-4">
                <Col md={{ offset: 3, span: 6 }} >
                    < ViewReloads>
                    </ViewReloads>
                </Col>
            </Row>
        </div>
    );
}

export default Reload