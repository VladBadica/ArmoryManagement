import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ViewCasings from '../components/Materials/ViewCasings';
import ViewPowders from '../components/Materials/ViewPowders';
import ViewPrimers from '../components/Materials/ViewPrimers';
import ViewReloads from '../components/ViewReloads';

const Home = () => {
    return (
        <>
            <Row className="text-center">
                <h1 className="mb-5"> Armory Manager</h1>
            </Row>
            <Row>
                <Col md={{ offset: 3, span: 2 }}>
                    <ViewCasings showAddButton={true}></ViewCasings>
                </Col>
                <Col md={2}>
                    <ViewPowders showAddButton={true}></ViewPowders>
                </Col>
                <Col md={2}>
                    <ViewPrimers showAddButton={true}></ViewPrimers>
                </Col>

            </Row>

            <Row className="mt-4">
                <Col md={{ offset: 3, span: 6 }}>
                    <ViewReloads></ViewReloads>
                </Col>
            </Row>
        </>
    )
};

export default Home;