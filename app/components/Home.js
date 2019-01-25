// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';
import { Row, Col, Tabs } from 'antd';
import CircleButton from './CircleButton';
import InputField from './InputField';

const styles = {
  display: 'flex',
  justifyContent: 'center'
};

const TabPane = Tabs.TabPane;

export default class Home extends Component {
  onChange = input => {
    console.log('Input changed', input);
  };

  onKeyPress = button => {
    console.log('Button pressed', button);
  };

  render() {
    return (
      <div style={{ height: '100%' }}>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Main" key="1">
            <Row type="flex" justify="center">
              <Col>
                <CircleButton text={'1'} />
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <div style={styles}>
                  <CircleButton text={'2'} />
                </div>
              </Col>
              <Col span={12}>
                <div style={styles}>
                  <CircleButton text={'3'} />
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <InputField />
              </Col>
            </Row>
          </TabPane>
          <TabPane tab="Setting" key="2">
            <Row>
              <Col>Setting</Col>
            </Row>
          </TabPane>
        </Tabs>
      </div>
    );
  }
}
