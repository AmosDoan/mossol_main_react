import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class Register extends Component {

    constructor(props) {
        super(props)
    }

    handleSubmit(event) {

    }

    render() {
        return (
            <div>
                <Form>
                    <Label for="userId">ID</Label>
                    <Input type="userId" name="userId" id="userId" />
                </Form>
                <Form>
                    <Label for="password">Password</Label>
                    <Input type="password" name="password" id="password" />
                </Form>
                <Form>
                    <Label for="password">Retype Password</Label>
                    <Input type="password" name="password" id="password" />
                </Form>
                <Button>Submit</Button>
            </div>)
    };
}

export default Register;
