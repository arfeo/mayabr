import React from 'react'
import Autosuggest from 'react-autosuggest'
import { connect } from 'react-redux'

import './Suggest.css'

import Button from '../Button/Button'
import Cities from '../../utils/cities'

const escapeRegexCharacters = str => {
	return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

const getSuggestions = value => {
	const escapedValue = escapeRegexCharacters(value.trim())
	if (escapedValue === '') {
		return []
	}
	const regex = new RegExp('^' + escapedValue, 'ui')
	return Cities
		.map(section => {
			return {
				title: section.title,
				cities: section.cities.filter(city => regex.test(city.name))
			}
		}
	).filter(section => section.cities.length > 0)
}

const getSuggestionValue = suggestion => suggestion.id

const renderSectionTitle = section => {
	return (
		<strong>{section.title}</strong>
	)
}

const renderSuggestion = suggestion => (
	<div>{suggestion.name}</div>
)

const getSectionSuggestions = section => {
	return section.cities
}

class Suggest extends React.Component {

	constructor() {
		super()
		this.state = {
			value: '',
			suggestions: [],
			buttonStyle: { opacity: "0.3", cursor: "default" }
		}
	}

	onChange = (event, { newValue }) => {
		this.setState({
			value: newValue
		})
		this.clearSelected()
	}

	onSuggestionsFetchRequested = ({ value }) => {
		this.setState({
			suggestions: getSuggestions(value),
			buttonStyle: { opacity: "0.3", cursor: "default" }
		})
	}

	onSuggestionsClearRequested = () => {
		this.setState({
			suggestions: []
		})
	}

	onSuggestionSelected = (event, { suggestion }) => {
		this.setState({
			value: suggestion.name,
			buttonStyle: { opacity: "1.0", cursor: "pointer" }
		})
		this.props.onCitySelected(suggestion.id, suggestion.name, suggestion.key)
	}

	onSuggestionHighlighted = ({ suggestion }) => {
		if(suggestion) {
			this.setState({
				value: suggestion.name
			})
		}
	}

	clearInput = () => {
		this.setState({
			value: '',
			buttonStyle: { opacity: "0.3", cursor: "default" }
		})
	}

	clearSelected = () => {
		this.props.onClearSelected()
	}

	render() {

		const { value, suggestions } = this.state

		const inputProps = {
			placeholder: 'Добавьте город...',
			value,
			onChange: this.onChange
		}

		return (

			<div className="suggest">
				<Autosuggest
					multiSection = {true}
					suggestions = {suggestions}
					onSuggestionsFetchRequested = {this.onSuggestionsFetchRequested}
					onSuggestionsClearRequested = {this.onSuggestionsClearRequested}
					onSuggestionSelected = {this.onSuggestionSelected}
					onSuggestionHighlighted = {this.onSuggestionHighlighted}
					getSuggestionValue = {getSuggestionValue}
					renderSuggestion = {renderSuggestion}
					renderSectionTitle = {renderSectionTitle}
        			getSectionSuggestions = {getSectionSuggestions}
					inputProps = {inputProps}
				/>
				<Button
					buttonAction = "addWidget"
					buttonText = "+"
					buttonStyle = {this.state.buttonStyle}
					clearInputHandler = {this.clearInput}
					clearSelectedHandler = {this.clearSelected}
				/>
			</div>

		)

	}

}

export default connect(
	state => state,
	dispatch => ({
		onCitySelected: (id, name, key) => {
			dispatch({ type: 'SELECT_CITY', payload: {
				id,
				name,
				key,
			}})
		},
		onClearSelected: () => {
			dispatch({ type: 'CLEAR_SELECTED' })
		}
	})
)(Suggest)