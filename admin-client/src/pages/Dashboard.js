import React from "react";
import ChartistGraph from "react-chartist";
// react-bootstrap components
import { 
  Card, 
  Container,
  Row,
  Col, 
} from "react-bootstrap";
import { FaHourglassStart, FaHourglass, FaTrashAlt } from 'react-icons/fa';

import { InfoCard } from '../components/@Dashboard';

export default function Dashboard() {
  return (
    <>
      <Container>
        <Row>
          <InfoCard title={"150"} category={"Pending Requests"} icon={<FaHourglassStart className="nc-icon nc-chart text-info" />} />
          <InfoCard title={"150"} category={"Completed Requests"} icon={<FaHourglass className="nc-icon nc-chart text-success" />} />
          <InfoCard title={"150"} category={"Rejected Requests"} icon={<FaTrashAlt className="nc-icon nc-chart text-danger" />} />
        </Row>
        <Row>
          <Col md="6">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Request Over The Time</Card.Title>
                <p className="card-category">Requests per day</p>
              </Card.Header>
              <Card.Body>
                <div className="ct-chart" id="chartHours">
                  <ChartistGraph
                    data={{
                      labels: [
                        "1",
                        "2",
                        "3",
                        "4",
                        "5",
                        "6", 
                        "7", 
                        "8", 
                      ],
                      series: [ 
                        [1, 2, 5, 77, 55, 100, 90, 208],
                      ],
                    }}
                    type="Line"
                    options={{
                      low: 0,
                      high: 600,
                      showArea: false,
                      height: "245px",
                      axisX: {
                        showGrid: true,
                      },
                      lineSmooth: true,
                      showLine: true,
                      showPoint: true,
                      fullWidth: true,
                      chartPadding: {
                        right: 10,
                      },
                    }}
                    responsiveOptions={[
                      [
                        "screen and (max-width: 640px)",
                        {
                          axisX: {
                            labelInterpolationFnc: function (value) {
                              return value[0];
                            },
                          },
                        },
                      ],
                    ]}
                  />
                </div>
              </Card.Body>
              <Card.Footer> 
              </Card.Footer>
            </Card>
          </Col>
          <Col md="6">
            <Card style={{height: '406px'}}>
              <Card.Header>
                <Card.Title as="h4">Requests Statistics</Card.Title>
                <p className="card-category">Recent Requests Overview</p>
              </Card.Header>
              <Card.Body>
                <div
                  className="ct-chart ct-perfect-fourth"
                  id="chartPreferences"
                >
                  <ChartistGraph
                    data={{
                      labels: ["Accepted", "Rejected", "Pending"],
                      series: [60, 20, 20],
                    }}
                    type="Pie"
                  />
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
