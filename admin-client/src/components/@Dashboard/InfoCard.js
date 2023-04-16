import {
    Card,
    Row,
    Col,
} from "react-bootstrap";

export default function InfoCard(props) {
    return (
        <Col lg="4" sm="6">
            <Card className="card-stats">
                <Card.Body>
                    <Row>
                        <Col xs="5">
                            <div className="icon-big text-center icon-warning"> 
                                {props.icon}
                            </div>
                        </Col>
                        <Col xs="7">
                            <div className="numbers">
                                <p className="card-category">{props.category}</p>
                                <Card.Title as="h4">{props.title}</Card.Title>
                            </div>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Col>
    );
}