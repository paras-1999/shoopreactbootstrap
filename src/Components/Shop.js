import React, { Component } from 'react'
import Starts from './Starts'
import axios from 'axios'
import { Row , Col , Card , Container,Button} from 'react-bootstrap';
const client=axios.create({
    baseURL:"http://localhost:3001/Product"
});
export class Shop extends Component {
    constructor(props){
        super(props)
        this.state={
            dataList:[]
        }
    }
    async componentDidMount(){
        let res=await client.get();
        this.setState({
            dataList:res.data
        })
    }
    render() {
        return (
            <Container fluid className="mt-5">
            <Row className="g-5 mt-5">
            {this.state.dataList.map((val)=>
                <Col md={4}>
                    <Card className="text-center p-4 border-1 border-info shadow" >
                    <Card.Img variant="top" src={val.img} height="220px" />
                    <Card.Body>
                        <Card.Title >{val.pname}</Card.Title>
                        <Starts />
                        <Card.Text className="text-danger ">
                        $ {val.price}.00
                        </Card.Text>
                        <Card.Title  className="text-decoration-line-through" style={{fontSize:"12px"}}>$1000.00</Card.Title>
                        <Button variant="outline-info" className="rounded-pill px-4">ADD TO CART</Button>
                    </Card.Body>
                    </Card>
                </Col>
            )}
            </Row>
            </Container>
        )
    }
}

export default Shop
