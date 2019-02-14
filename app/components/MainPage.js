import React from 'react';
import { Row, Col, Steps, Button } from 'antd';

import MainPageOne from './MainPageOne';
import MainPageTwo from './MainPageTwo';

const Step = Steps.Step;

export default class MainPage extends React.Component {
  state = {
    current: 0,
    spices: [0, 1, 2, 3, 4, 5],
    0: {
      id: 0,
      selected: false,
      value: 0,
      name: 'Salt'
    },
    1: {
      id: 1,
      selected: false,
      value: 0,
      name: 'Pepper'
    },
    2: {
      id: 2,
      selected: false,
      value: 0,
      name: 'Cinnamon'
    },
    3: {
      id: 3,
      selected: false,
      value: 0,
      name: 'Dill Seeds'
    },
    4: {
      id: 4,
      selected: false,
      value: 0,
      name: 'Cumin Seeds'
    },
    5: {
      id: 5,
      selected: false,
      value: 0,
      name: 'Ginger'
    }
  };

  onToggle(id) {
    this.setState({
      [id]: { ...this.state[id], selected: !this.state[id].selected }
    });
  }

  onChangeValue(id, value) {
    this.setState({
      [id]: { ...this.state[id], value }
    });
  }

  next() {
    const current = this.state.current + 1;
    this.setState({ current });
  }

  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }

  render() {
    const { current } = this.state;

    let anySelected = false;
    let anyZero = false;
    const spices = this.state.spices.map(id => this.state[id]);
    const filteredSpices = spices.filter(spice => spice.selected);

    spices.forEach(spice => {
      if (spice.selected) {
        anySelected = true;
      }
    });

    filteredSpices.forEach(spice => {
      if (spice.value === 0) {
        anyZero = true;
      }
    });

    const steps = [
      {
        title: 'Select Spices',
        content: (
          <MainPageOne onToggle={this.onToggle.bind(this)} spices={spices} />
        )
      },
      {
        title: 'Select Amount',
        content: (
          <MainPageTwo
            onChangeValue={this.onChangeValue.bind(this)}
            spices={filteredSpices}
          />
        )
      }
    ];

    return (
      <div style={{ padding: 15 }}>
        <Row type="flex" justify="center">
          <Col span={12}>
            <Steps current={current}>
              {steps.map(item => (
                <Step key={item.title} title={item.title} />
              ))}
            </Steps>
          </Col>
        </Row>
        <div className="steps-content">{steps[current].content}</div>
        <div className="steps-action">
          {current < steps.length - 1 && (
            <Button
              type="primary"
              disabled={!anySelected}
              onClick={() => this.next()}
            >
              Next
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button type="primary" disabled={anyZero}>
              Grind
            </Button>
          )}
          {current > 0 && (
            <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
              Previous
            </Button>
          )}
        </div>
      </div>
    );
  }
}
