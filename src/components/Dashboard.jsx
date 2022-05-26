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
const panels = data.map((item) => <Panel key={item.id} {...item} />);

// = main component =
export default class Dashboard extends Component {
  state = {
    loading: this.props.loading || false,
  };

  render() {
    const dashboardClasses = classnames("dashboard");

    return (this.state.loading
      ? <Loading />
      : <main className={dashboardClasses}>{panels}</main>);
  };
};
