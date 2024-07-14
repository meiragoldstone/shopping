import { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Col } from "react-bootstrap";

export function GetList() {
    const [listKey, setListKey] = useState('');
    const [listData, setListData] = useState([]);

    const list = listData?.map(item => {
        return <Card className="m-2 p-2" key={item.key}>{item.value}</Card>
    });


    function getListByKey() {
        console.log(listKey);
        const list = [{ key: 1, value: 'grapes' }, { key: 2, value: 'bowls' }, { key: 3, value: 'onions' }];
        setListData(list);
    }

    return <>
        <Container className="justify-content-md-center mt-5" >
        <Row >
                <Col><h1>This is my Retrieve Shopping List Page</h1></Col>
            </Row>
            <Row>
                <Col>

                    <Form.Label>List Key</Form.Label>
                </Col>
            </Row>
            <Row>
                <Col>

                    <Form.Control type='text' placeholder="Place the key/title of the list here" onChange={(e) => setListKey(e.target.value)}></Form.Control>
                </Col>
            </Row>
            <Row className='mt-2'>
                <Col>

                    <Button variant="outline-secondary" onClick={getListByKey}>Retrieve List</Button>
                </Col>
            </Row>
            <Row>
                <Col>

                    {list}
                </Col>
            </Row>
        </Container>
    </>;
}