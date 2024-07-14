import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from "react";

export function CreateList() {
    const [listKey, setListKey] = useState("");
    const [list, setList] = useState([]);
    const [newItem, setNewItem] = useState("");

    function updateList() {
        setList(list.concat(newItem));
        setNewItem('')
        console.log('-----------Update the list with this item', newItem)
    }

    function createList() {
        console.log('----- Create this List', list)
    }

    return (
        <>
            <Container>
                <Row className="mt-2">
                    <Col>
                        <h1>This is my Create List Page</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Label>List Key</Form.Label>
                    </Col>
                </Row>
                <Row className="mt-2">
                    <Col>
                        <Form.Control variant='primary' type="text" placeholder="List Key" onChange={event => setListKey(event.target.value)}/>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col>
                        <Form.Label>List Item</Form.Label>
                    </Col>
                </Row>
                <Row className="mt-2">
                    <Col>
                        <Form.Control variant='primary' type="text" placeholder="Add List Item" value={newItem} onChange={event => setNewItem(event.target.value)}/>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col>
                        <Button variant="secondary" onClick={updateList} >Add item to Shopping list</Button>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col>
                    <Card>

                    <Card.Body>
                        <Card.Title>{listKey}</Card.Title>
                        {list.map((l, index) => {
                            return <Card.Text key={index}>{l}</Card.Text>
                        })}
                        <Button variant="secondary" onClick={createList}>Create List</Button>
                    </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )

}


