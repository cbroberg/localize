import React from 'react'
import PropTypes from 'prop-types'
import translate from './translate'

const Greeter = ({ name, t }) => (
    <div>
        <h3>{t('hello_name', { name })}</h3>
        <h3>{t('num_cars', { smart_count: 0 })}</h3>
        <h3>{t('num_cars', { smart_count: 1 })}</h3>
        <h3>{t('num_cars', { smart_count: 2 })}</h3>
        <h3>{t("i_like_to_write_in_language", {
  _: "I like to write in %{language}.",
  language: "JavaScript"
})}</h3>
    </div>
)

Greeter.propTypes = {
  name: PropTypes.string.isRequired,
  t: PropTypes.func.isRequired,
}

export default translate()(Greeter)


