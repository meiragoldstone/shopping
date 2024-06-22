import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from "react";

export function CreateList() {

    const [listKey, setListKey] = useState('');
    const [listData, setListData] = useState([]);
    const [inputValue, setInputValue] = useState('');


    function addItemToList() {
        // setListData([...listData, inputValue]);
        setListData(listData.concat(inputValue));
        setInputValue('')
    }
    // Function to render list items
    const renderItems = () => {
        return <>
            <Card.Body>
                <Card.Title>{listKey}</Card.Title>
                {listData.map((item, index) => (
                    <Card.Text key={index}>{item}</Card.Text>
                ))}
            </Card.Body>
        </>
    };

    return <div>
        <Container className="justify-content-md-center mt-5" fluid="md">
            <Row >
                <Col><h1>This is my Create Shopping List Page</h1></Col>
            </Row>
            <Row >
                <Col>
                    <Form.Label>List Name</Form.Label>
                    <Form.Control variant='primary' type="text" placeholder="List Key" onChange={(e) => setListKey(e.target.value)} />
                </Col>
            </Row>

            <Row className="mt-2">
                <Col>
                    <Form.Label>List Objects</Form.Label>
                    <Form.Control type="text" placeholder="Enter text here" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                </Col>
            </Row>
            <Row className='mt-2'>
                <Col>
                    <Button variant="outline-secondary" onClick={addItemToList}>Add Item</Button>
                </Col>
            </Row>
            <Row className='mt-5'>
                <Col>
                    <h3>Results</h3>
                </Col>
            </Row>
            <Row className='mt-2'>
                <Col>
                    <Card className="mt-3">
                        {renderItems()}
                    </Card>
                </Col>
            </Row>
            <Row className='mt-5'>
                <Col>
                    <Button variant="outline-secondary">Create List</Button>{' '}
                </Col>
            </Row>
        </Container>

    </div>;
}