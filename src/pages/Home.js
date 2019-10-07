import React from 'react';
import {HashLink as Link} from 'react-router-hash-link';
import {Button, Col, Container, Jumbotron, Row} from 'reactstrap';

const Home = () => {
    return (
        <div>
            <Jumbotron>
                <h1 className="display-3">Welcome to Mossol!</h1>
                <p className="lead">Mossol 잡동사니에 오신 것을 환영합니다!</p>
            </Jumbotron>
            <Container className="mt-4">
                <Row>
                    <Col>
                        <h1>Mossol은 Amos 개인 잡동사니 창고입니다.</h1>
                        <p className="lead">잡동사니에 접근하기 위해서는 권한을 부여 받아야합니다.
                        <br/>권한을 부여받은 후, 다음 페이지 설명을 따라 잡동사니에 접근할 수 있습니다.</p>
                        <p className="lead">
                            <Link to="/start#desktop_guide"><Button color="danger">Desktop PC</Button></Link>{' '}
                            <Link to="/start#smartphone_guide"><Button color="primary">Android iOS</Button></Link>{' '}
                            <Link to="/start#smarttv_guide"><Button color="warning">Smart TV</Button></Link>{' '}
                        </p>
                        <h2>Contact</h2>
                        <p className="lead">amos.doan@gmail.com</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Home;