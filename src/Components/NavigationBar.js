import React, { Component } from 'react'
import { Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
export class NavigationBar extends Component {
    render() {
        return (
            <Nav className="justify-content-center text-uppercase fixed-top bg-light py-3" style={{fontSize:"12px"}}>
                <Nav.Item>
                <Nav.Link ><NavLink to="/" activeClassName="active" >Home</NavLink></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link ><NavLink to="/shop" activeClassName="active" >SHOP</NavLink></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link>PICNIC</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link>PAGES</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link>Promotion</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link><NavLink to="/blog" activeClassName="active" >BLOGS</NavLink></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link ><NavLink to="/form" activeClassName="active" >Contact Us</NavLink></Nav.Link>
                </Nav.Item>
            </Nav>
        )
    }
}

export default NavigationBar
