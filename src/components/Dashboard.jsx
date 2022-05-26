import React, { Component } from 'react';
import classnames from 'classnames';
import Loading from './Loading';
import Panel from './Panel';

// fake data
const data = [
  {
    id: 1,
    label: "Total Interviews",
    value: 6
  },
  {
    id: 2,
    label: "Least Popular Time Slot",
    value: "1pm"
  },
  {
    id: 3,
    label: "Most Popular Day",
    value: "Wednesday"
  },
  {
    id: 4,
    label: "Interviews Per Day",
    value: "2.3"
  }
];

// = main component =
export default class Dashboard extends Component {
  state = {
    loading: this.props.loading || false,
    focused: null,
  };

  selectPanel = (id) => {
    this.setState({ focused: this.state.focused ? null : id });
  };

  render() {
    const dashboardClasses = classnames("dashboard", {
      "dashboard--focused": this.state.focused
    });
    const panels = (this.state.focused ? data.filter((panel) => this.state.focused === panel.id) : data)
      .map((panel) => <Panel key={panel.id} {...panel} onSelect={this.selectPanel} />);

    return (this.state.loading
      ? <Loading />
      : <main className={dashboardClasses}>{panels}</main>);
  };
};
