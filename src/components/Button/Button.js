import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { addWidgetAction, updateWidgetAction } from '../../actions/widgets';

import './Button.css';

const Button = (props) => {
	const {
    selected,
    widgets,
    temp,
    widgetId,
    buttonText,
    buttonStyle,
    buttonAction,
    clearSelectedHandler,
    clearInputHandler,
    onAddWidget,
    onUpdateWidget,
    onRemoveWidget,
	} = props;

	const buttonClickHandler = () => {
		switch (buttonAction) {
			case 'addWidget':
			{
				addWidget();
				break;
			}
			case 'updateWidgets':
			{
				updateWidgets();
				break;
			}
			case 'removeWidget':
			{
				removeWidget();
				break;
			}
			default:
			{
				return;
			}
		}
	};

	const addWidget = () => {
		const city = selected;

		if(widgets.find(widget => widget.id === city.id) === undefined) {
			if(Object.keys(city).length > 0) {
				onAddWidget(city, temp);
				clearSelectedHandler();
				clearInputHandler();
			}
		} else {
			clearSelectedHandler();
			clearInputHandler();
			alert(`Виджет города ${city.name} уже добавлен`);
		}
	};

	const updateWidgets = () => {
		widgets.find(widget => {
			onUpdateWidget(widget);
			return false;
		})
	};

	const removeWidget = () => {
		onRemoveWidget(widgetId);
	};

	return (
		<button onClick={buttonClickHandler} style={buttonStyle}>
			{buttonText}
		</button>
	);
};

Button.propTypes = {
  selected: PropTypes.object,
  widgets: PropTypes.array,
  temp: PropTypes.number,
  widgetId: PropTypes.string,
  buttonText: PropTypes.string,
  buttonStyle: PropTypes.object,
  buttonAction: PropTypes.string,
  clearSelectedHandler: PropTypes.func,
  clearInputHandler: PropTypes.func,
  onAddWidget: PropTypes.func,
  onUpdateWidget: PropTypes.func,
  onRemoveWidget: PropTypes.func,
};

export default connect(
	state => state,
	dispatch => ({
		onAddWidget: (selected, temp) => {
			dispatch(addWidgetAction(selected, temp));
		},
		onUpdateWidget: (widget) => {
			dispatch(updateWidgetAction(widget));
		},
		onRemoveWidget: (payload) => {
			dispatch({ type: 'REMOVE_WIDGET', payload });
		}
	}),
)(Button);
