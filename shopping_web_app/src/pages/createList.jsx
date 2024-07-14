import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
import { useState } from "react";

export function CreateList() {
    const [listKey, setListKey] = useState("");
    const [list, setList] = useState([]);
    const [newItem, setNewItem] = useState("");
    const [responseMessage, setResponseMessage] = useState({variant: '', message: ''});

    function updateList() {
        setList(list.concat(newItem));
        setNewItem('')
        console.log('-----------Update the list with this item', newItem)
    }

    function createList() {
        setResponseMessage({});
        const params = {
            method: 'POST',
            body: JSON.stringify({
                listId: listKey,
                list: list,
            })
        }
        fetch('https://bdgjktps12.execute-api.us-east-1.amazonaws.com/default/createShoppingList', params)
            .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(_ => {
            setResponseMessage({variant: 'success', message: `${listKey} was created successfully`});
          })
          .catch(_ => {
            setResponseMessage({variant: 'danger', message:`Error in creating ${listKey}`});
          });
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
                <Row className="mt-5">
                    <Col>
                        <Alert variant={responseMessage.variant}>{responseMessage.message}</Alert>
                    </Col>
                </Row>
            </Container>
        </>
    )

}


