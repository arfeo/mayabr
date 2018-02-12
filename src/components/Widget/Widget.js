import React from 'react'

import './Widget.css'

import Button from '../Button/Button'
import Icon from '../Icon/Icon'

export default class Widget extends React.Component {

	render() {

		return (
			<div
				className = "widget"
				key = {this.props.keyIndex}
				style = {this.props.isVisible ? { display: "inline-block" } : { display: "none" }}
			>
				<div className="city-title">
					<a href={this.props.widgetLink} target="_blank">{this.props.widgetName}</a>
				</div>
				<div>
					<Button
						buttonAction = "removeWidget"
						buttonText = "✕"
						widgetId = {this.props.widgetId}
						isEnabled = {true}
					/>
				</div>
				<div className="temperature">
					<Icon
						iconType = "widgetWeatherIcon"
						widgetIcon = {this.props.widgetIcon < 10 ? `0${this.props.widgetIcon}-s.png` : `${this.props.widgetIcon}-s.png` }
						widgetDescr = {this.props.widgetDescr}
					/>
					{ this.props.tempInfo === 1000 ? "--" : this.props.tempInfo > 0 ? `+${this.props.tempInfo}` : this.props.tempInfo === 0 ? 0 : this.props.tempInfo } °C
				</div>
				<div className="details">
					<div>Ветер: { parseInt(this.props.windInfo * 0.277778, 10) } м/с</div>
					<div>Давление: { parseInt(this.props.pressureInfo * 0.750062, 10) } мм</div>
				</div>
			</div>
		)

	}

}