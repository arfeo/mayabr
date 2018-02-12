import React from 'react'

export default class Icon extends React.Component {

	generateIcon = () => {
		switch(this.props.iconType) {
		case 'widgetWeatherIcon':
			{
				return (
					<img
						src={ this.props.widgetIcon ? require(`../../static/${this.props.widgetIcon}`) : "" }
						alt={ this.props.widgetDescr }
						title={ this.props.widgetDescr }
					/>
				)
			}
		default:
			{
				return
			}
		}
	}

	render() {

		return (
			<div>
				{this.generateIcon()}
			</div>
		)

	}

}