import React from 'react'

export default class ViewCounter extends React.Component {

	render() {

		return (
			<div>
				{this.props.widgetsCount === 0 ? `Нет добавленных виджетов` : `Показано ${this.props.widgetsVisible} из ${this.props.widgetsCount}`}
			</div>
		)

	}

}