import React from 'react';
import { Row, Col, Card } from 'antd';

const MainPageOne = props => {
  const { spices } = props;

  return (
    <>
      <Row gutter={10} style={{ margin: 10 }} type="flex" justify="center">
        {spices.map((spice, i) => {
          const { selected, name } = spice;
          const selectedStyle = selected ? { backgroundColor: '#1890ff' } : {};
          return (
            <Col key={name} span={6} style={{ margin: 5 }}>
              <Card
                className={'spice-card'}
                style={selectedStyle}
                onClick={() => props.onToggle(i)}
              >
                <div>{name}</div>
              </Card>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default MainPageOne;
