import React from 'react';
import CoffeeList from './CoffeeList';

import { Col } from 'reactstrap';

const Content = () => {
    return (
        <>
            <Col className="container-fluid mt-3 ml-3">
                <CoffeeList />
            </Col>
        </>
    )
}

export default Content
