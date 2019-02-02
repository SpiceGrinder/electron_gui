import React from 'react';
import { Row, Col, Card } from 'antd';

const MainPageOne = props => {
  return (
    <>
      <Row gutter={10} style={{ margin: 10 }}>
        <Col span={8}>
          <Card title="Container 1" size="small">
            <div>Salt</div>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Container 2" size="small">
            <div>Pepper</div>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Container 3" size="small">
            <div>Cinamon</div>
          </Card>
        </Col>
      </Row>
      <Row gutter={10} style={{ margin: 10 }}>
        <Col span={8}>
          <Card title="Container 4" size="small">
            <div>Salt</div>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Container 5" size="small">
            <div>Pepper</div>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Container 6" size="small">
            <div>Cinamon</div>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default MainPageOne;
