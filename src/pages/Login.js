import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap';
import AuthService from "../service/AuthService";


class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loginError : false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("HANDLE_SUBMIT : " + this.userId.value + " " + this.password.value);
        AuthService.login({
            id : this.userId.value,
            password : this.password.value
        }).then(
            e => {
                alert("Login!!" + e);
                this.setState({
                    loginError : true
                });
            }
        ).catch(error => {
            alert("Error" + error);
        });
    };

    render() {
        console.log("Render!!!");
        return (
            <div>
                <Alert isOpen={this.state.loginError}>
                    Test
                </Alert>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="userId">ID</Label>
                        <Input type="userId" innerRef={(node) => this.userId = node}
                               name="userId" id="userId" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input type="password" innerRef={(node) => this.password = node}
                               name="password" id="password" />
                    </FormGroup>
                    <Button type="submit" color="primary">Submit</Button>
                </Form>
            </div>)
    };
}

export default Login;
