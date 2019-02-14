import React from 'react';
import { Row, Col, Slider, InputNumber } from 'antd';

const MainPageTwo = props => {
  const { spices } = props;

  return (
    <>
      {spices.map(spice => {
        const { id, name, value } = spice;
        return (
          <Row
            key={name}
            gutter={10}
            style={{ margin: 10 }}
            type="flex"
            justify="center"
          >
            <Col
              span={2}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <div style={{ fontSize: 16 }}>{name}</div>
            </Col>
            <Col span={12}>
              <Slider
                min={0}
                max={20}
                step={0.1}
                onChange={value => {
                  props.onChangeValue(id, value);
                }}
                value={typeof value === 'number' ? value : 0}
              />
            </Col>
            <Col span={6}>
              <InputNumber
                min={0}
                max={20}
                value={value}
                onChange={value => {
                  props.onChangeValue(id, value);
                }}
              />
            </Col>
          </Row>
        );
      })}
    </>
  );
};

export default MainPageTwo;
