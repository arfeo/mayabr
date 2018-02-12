import React from 'react'
import { connect } from 'react-redux'

import './Button.css'

import { addWidgetAction, updateWidgetAction } from '../../actions/widgets'

class Button extends React.Component {

	buttonClickHandler = () => {
		switch (this.props.buttonAction) {
		case 'addWidget':
			{
				this.addWidget()
				break
			}
		case 'updateWidgets':
			{
				this.updateWidgets()
				break
			}
		case 'removeWidget':
			{
				this.removeWidget()
				break
			}
		default:
			{
				return
			}
		}
	}

	addWidget = () => {
		const city = this.props.selected
		if(this.props.widgets.find(widget => widget.id === city.id) === undefined) {
			if(Object.keys(city).length > 0) {
				this.props.onAddWidget(city, this.props.temp)
				this.props.clearSelectedHandler()
				this.props.clearInputHandler()
			}
		} else {
			this.props.clearSelectedHandler()
			this.props.clearInputHandler()
			alert(`Виджет города ${city.name} уже добавлен`)
		}
	}

	updateWidgets = () => {
		this.props.widgets.find(widget => {
			this.props.onUpdateWidget(widget)
			return false
		})
	}

	removeWidget = () => {
		this.props.onRemoveWidget(this.props.widgetId)
	}

	render() {

		return (
			<button onClick={this.buttonClickHandler} style={this.props.buttonStyle}>
				{this.props.buttonText}
			</button>
		)

	}

}

export default connect(
	state => state,
	dispatch => ({
		onAddWidget: (selected, temp) => {
			dispatch(addWidgetAction(selected, temp))
		},
		onUpdateWidget: (widget) => {
			dispatch(updateWidgetAction(widget))
		},
		onRemoveWidget: (payload) => {
			dispatch({ type: 'REMOVE_WIDGET', payload })
		}
	})
)(Button)