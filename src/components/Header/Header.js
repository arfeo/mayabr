import React from 'react'

import './Header.css'

import Button from '../Button/Button'
import ViewCounter from '../ViewCounter/ViewCounter'

export default class Header extends React.Component {

	render() {

		return (
			<div className="header">
				<ViewCounter
					widgetsCount = {this.props.widgetsCount}
					widgetsVisible = {this.props.widgetsVisible}
				/>
				<Button
					buttonAction = "updateWidgets"
					buttonText = "Обновить"
					buttonStyle = {this.props.widgetsCount > 0 ? ({ display: "inline-block" }) : ({ display: "none" })}
				/>
			</div>
		)

	}

}