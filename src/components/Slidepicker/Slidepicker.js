import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'

import 'react-rangeslider/lib/index.css'
import './Slidepicker.css'

import Slider from 'react-rangeslider'

class Slidepicker extends React.Component {

	constructor (props, context) {
		super(props, context)
		this.state = {
			value: parseInt(localStorage.getItem("temp") ? localStorage.getItem("temp") : 0, 10)
		}
	}

	componentDidMount() {
		window.addEventListener('load', this.handleLoad)
	}

	handleLoad = () => {
		this.setValueOffset()
	}

	setValueOffset = () => {
		const sliderOffset = ReactDOM.findDOMNode(this.refs.slidepicker).getElementsByClassName("rangeslider__handle")[0].offsetLeft
		const valueWidth = ReactDOM.findDOMNode(this.refs.value).getBoundingClientRect().width
		const valueOffset = sliderOffset - valueWidth / 2
		ReactDOM.findDOMNode(this.refs.value).style.left = `${valueOffset}px`
		ReactDOM.findDOMNode(this.refs.value).style.color = "black"
	}

	handleChange = value => {
		this.setState({
			value: value
		})
		this.props.onChangeTemp(value)
		this.setValueOffset()
	}

	render () {

		const { value } = this.state

		return (

			<div className="slider">
				<div>Где сейчас теплее, чем</div>
				<Slider
					ref = "slidepicker"
					min = {-30}
					max = {30}
					value = {value}
					tooltip = {false}
					onChange = {this.handleChange}
					onLoad = {this.handleChange}
				/>
				<div className="value" ref="value">{ value > 0 ? `+${value}` : value === 0 ? 0 : value } °C</div>
			</div>

		)

	}

}

export default connect(
	state => state,
	dispatch => ({
		onChangeTemp: (payload) => {
			dispatch({ type: 'CHANGE_TEMP', payload })
		}
	})
)(Slidepicker)