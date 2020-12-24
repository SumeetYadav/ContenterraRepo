import React, { Component } from 'react'
import axios from 'axios'
import { Card, Row, Col } from 'react-bootstrap'

class Fetch extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: [],
        }
    }

    componentDidMount() {
        axios.get('https://www.reddit.com/r/reactjs.json')
            .then((response) => {
                console.log(response.data.data.children)
                this.setState({ data: response.data.data.children })
            }).catch((error) => {
                this.setState({ errormsg: 'error while feacthing data' })
            })
    }

    render() {
        const { data, errormsg } = this.state;
        return (
            <div className='container ' style={{ display: 'flex', position: 'absolute', height: '100%', width: '100%' }}>
                <div className='container-fluid d-flex justify-content-center'>
                    <div className='row ' style={{ margin: '75px', padding: '5px' }}>
                        <div>
                            <div className="row valign-wrapper">
                                <div className="col s6 offset-s3 valign">
                                    <div className="card blue-grey darken-1">
                                        <div className="card-content white-text">
                                            <Row>
                                                {data.map((data, index) => (
                                                    <Col key={index} className='col-md-6' >
                                                        <Card style={{ width: '18rem' }}>
                                                            <Card.Body>
                                                                <Card.Title>Title:{data.data.title}</Card.Title>
                                                                <Card.Text>
                                                                    Score:{data.data.score}
                                                                </Card.Text>
                                                                <Card.Text>
                                                                    Url:{data.data.url}
                                                                </Card.Text>
                                                            </Card.Body>
                                                        </Card>
                                                    </Col>
                                                ))}
                                            </Row>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Fetch