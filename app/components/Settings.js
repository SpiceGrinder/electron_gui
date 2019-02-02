import React from 'react';
import { Card, Icon, Row, Col } from 'antd';

const Settings = props => {
  return (
    <>
      <Row gutter={10} style={{ margin: 10 }}>
        <Col span={8}>
          <Card
            title="Container 1"
            size="small"
            actions={[<Icon type="setting" />]}
          >
            <div>Salt</div>
          </Card>
        </Col>
        <Col span={8}>
          <Card
            title="Container 2"
            size="small"
            actions={[<Icon type="setting" />]}
          >
            <div>Pepper</div>
          </Card>
        </Col>
        <Col span={8}>
          <Card
            title="Container 3"
            size="small"
            actions={[<Icon type="setting" />]}
          >
            <div>Cinamon</div>
          </Card>
        </Col>
      </Row>
      <Row gutter={10} style={{ margin: 10 }}>
        <Col span={8}>
          <Card
            title="Container 4"
            size="small"
            actions={[<Icon type="setting" />]}
          >
            <div>Salt</div>
          </Card>
        </Col>
        <Col span={8}>
          <Card
            title="Container 5"
            size="small"
            actions={[<Icon type="setting" />]}
          >
            <div>Pepper</div>
          </Card>
        </Col>
        <Col span={8}>
          <Card
            title="Container 6"
            size="small"
            actions={[<Icon type="setting" />]}
          >
            <div>Cinamon</div>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Settings;
