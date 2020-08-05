import React from 'react';
import {withRouter, Switch, Route} from 'react-router-dom';
import {Navbar, Nav, NavDropdown} from "react-bootstrap";

import ButtonComponent from '../components/ButtonColors';
import ButtonContextComponent from '../components/ButtonColorsContext';
import MainComponent from '../components/Main';
import BlockViewComponent from '../components/BlockView'
import FizzBuzzComponent from '../components/FizzBuzz'

const App = () => (
    <>
        <Navbar bg="light" expand="lg" fixed={'top'}>
            <Navbar.Brand href="/">Danphe Tests</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavDropdown title="Problem 1" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/problem1/context">React Context</NavDropdown.Item>
                        <NavDropdown.Item href="/problem1/redux">React Redux</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="/problem2">Problem 2</Nav.Link>
                    <Nav.Link href="/problem3">Problem 3</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

            <Switch>
                <Route exact path="/problem1/redux" component={ButtonComponent}/>
                <Route exact path="/problem1/context" component={ButtonContextComponent}/>
                <Route exact path="/problem2" component={BlockViewComponent}/>
                <Route exact path="/problem3" component={FizzBuzzComponent}/>
                <Route exact path="/" component={MainComponent}/>
            </Switch>
    </>
);

export default withRouter(App)