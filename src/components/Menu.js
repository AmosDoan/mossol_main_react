import React, {Component} from 'react';
import {NavLink as RRNavLink} from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';

class Menu extends Component {

    constructor(props) {
        super(props);
        // Component의 Method는 this에 접근할 수 없기 때문에 Constructor에서 bind 해주어야
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen : false
        };
        document.title = "Welcome to Mossol";
    }

    toggle() {
        this.setState({
            isOpen : !this.state.isOpen
        })
    }

    // https://github.com/reactstrap/reactstrap/issues/1193
    // https://github.com/reactstrap/reactstrap/issues/544
    // https://github.com/reactstrap/reactstrap/issues/336
    render() {
        return (
            <div>
                <Navbar color="dark" className="navbar-dark navbar-expand-sm" expand="md">
                    <NavbarBrand href="/">MOSSOL TOWN</NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse navbar isOpen={this.state.isOpen}>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink to="/" activeClassName="active" tag={RRNavLink}>메인</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/aboutAmos" activeClassName="active" tag={RRNavLink}>주인장 소개</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/start" activeClassName="active" tag={RRNavLink}>잡동사니 메뉴얼</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/openCollege" activeClassName="active" tag={RRNavLink}>오픈컬리지 Python</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/Register" activeClassName="active" tag={RRNavLink}>Register</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/Login" activeClassName="active" tag={RRNavLink}>Login</NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Contents
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem type="a" href="https://av.mossol.net">
                                        Video
                                    </DropdownItem>
                                    <DropdownItem type="a" href="https://music.mossol.net">
                                        Audio
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem type="a" href="https://github.mossol.net">
                                        Github
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Menu;