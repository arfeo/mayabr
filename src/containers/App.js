import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Header from '../components/Header/Header';
import Slidepicker from '../components/Slidepicker/Slidepicker';
import Suggest from '../components/Suggest/Suggest';
import Widget from '../components/Widget/Widget';
import { updateWidgetAction } from '../actions/widgets';

import './App.css';

class App extends Component {
	componentDidMount() {
		this.props.widgets.find(widget => {
			this.props.onUpdateWidget(widget);

			return false;
		})
	}

	render() {
		return (
			<div className="app">
				<div>
					<Header
						widgetsCount={this.props.widgets.length}
						widgetsVisible={this.props.widgets.filter(widget => widget.temp >= this.props.temp).length}
					/>
				</div>
				<div>
					<Suggest/>
					<Slidepicker/>
				</div>
				<div className="widgets" ref="widgets">
					{this.props.widgets.map((widget, index) =>
						<Widget
							key={index}
							keyIndex={index}
							widgetIcon={widget.icon}
							widgetId={widget.id}
							widgetName={widget.name}
							widgetDescr={widget.descr}
							widgetLink={widget.link}
							tempInfo={widget.temp}
							windInfo={widget.wind}
							pressureInfo={widget.pressure}
							currentTemp={this.props.temp}
							isVisible={this.props.temp <= widget.temp ? true : false}
						/>
					)}
				</div>
			</div>
		);
	}
}

App.propTypes = {
  widgets: PropTypes.array,
  temp: PropTypes.number,
  onUpdateWidget: PropTypes.func,
};

export default connect(
	state => state,
	dispatch => ({
		onUpdateWidget: (widget) => {
			dispatch(updateWidgetAction(widget));
		}
	}),
)(App);
