// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';
import { Row, Col, Tabs } from 'antd';
import CircleButton from './CircleButton';
import InputField from './InputField';
import Settings from './Settings';
import Main from './Main';

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
            <Main />
          </TabPane>
          <TabPane tab="History" key="2">
            <div>History</div>
          </TabPane>
          <TabPane tab="Setting" key="3">
            <Settings />
          </TabPane>
        </Tabs>
      </div>
    );
  }
}
