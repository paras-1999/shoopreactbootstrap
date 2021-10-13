import React, { Component } from 'react'
import axios from 'axios'
import { Accordion, Container} from 'react-bootstrap';
const client=axios.create({
    baseURL:"https://jsonplaceholder.typicode.com/comments"
});
export class Blogs extends Component {
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
            <Container fluid  className="p-5 mt-5">
            <Accordion  defaultActiveKey="1">
            {this.state.dataList.map((val,i)=>
            <Accordion.Item eventKey={i}>
              <Accordion.Header>By : {val.email}</Accordion.Header>
              <Accordion.Body>
                {val.body}
              </Accordion.Body>
            </Accordion.Item>
            
            
            )}
            </Accordion>
            
            </Container>
        )
    }
}

export default Blogs
