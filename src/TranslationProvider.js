import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Polyglot from 'node-polyglot'

// Translation Provider root component
export default class TranslationProvider extends Component {
	constructor(props) {
		super(props)

		this._translationservice = new Polyglot({
			locale: props.locale,
			phrases: props.messages,
		})
	}

	getChildContext() {
		return { t: this._translationservice.t.bind(this._translationservice) }
	}

	componentWillReceiveProps(newProps) {
		if (newProps.locale !== this.props.locale) {
			this._translationservice = new Polyglot({
				locale: newProps.locale,
				phrases: newProps.messages
			})
		}
	}

	render() {
		const children = this.props.children
		return React.Children.only(children)
	}
}

TranslationProvider.propTypes = {
	locale: PropTypes.string.isRequired,
	messages: PropTypes.object.isRequired,
	children: PropTypes.element.isRequired,
}

TranslationProvider.childContextTypes = {
	t: PropTypes.func.isRequired,
}
