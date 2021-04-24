import React from 'react'
import { Row, Col } from 'reactstrap';

import Category from './Category';
import Search from './Search';

const SideMenu = () => {
    return (
        <>
            <Col className="col-3 border-right">
                <Row className="my-3">
                    <Search />
                </Row>
                <Row className="my-2">
                    <Category />
                </Row>
            </Col>
        </>
    );
}

export default SideMenu
