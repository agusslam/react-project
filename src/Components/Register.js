import React from 'react'
import { Form, Button, Container, Col, Row } from 'react-bootstrap'
import axios from 'axios'

class Register extends React.Component {
    state = {
        username: '',
        password: ''
    }

    handleChangeText = (e) => {
        // console.log(e.target.id)
        this.setState({
            [e.target.id]: e.target.value ,
            [e.target.id]: e.target.value
        })
    }

    handleLogin = () => {
        const {username, password} = this.state        
        axios.post('http://localhost:8008/user/register', {
            username: username,
            password: password
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

    }

    render() {
        return (
                <Container fluid>
                    <Row className="wrapper-sign">
                        <Col md="12">
                            <Form.Control
                                type="text"
                                placeholder="username"
                                name="username"
                                onChange={this.handleChangeText}
                                id="username"
                            >
                            </Form.Control>
                        </Col>
                        <Col md="12">
                            <Form.Control
                                type="password"
                                placeholder="password"
                                name="password"
                                onChange={this.handleChangeText}
                                id="password"
                            >
                            </Form.Control>
                        </Col>
                        <Col md="12">
                            <Button type="submit" onClick={this.handleLogin}>Register</Button>
                        </Col>
                    </Row>
                </Container>
        )
    }
}
// }

export default Register