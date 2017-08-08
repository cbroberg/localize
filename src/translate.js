import React from 'react'
import PropTypes from 'prop-types'

// Higher order component (HOC) decorator for components that need `t`
export default function translate() {
    return (WrappedComponent) => {
        const _translate = (props, context) => (
            <WrappedComponent 
                {...props} 
                t={context.t} />
        )

    _translate.contextTypes = {
        t: PropTypes.func.isRequired,
    }

    return _translate
  }
}


export const translate2 = (BaseComponent) => {
    const TranslatedComponent = (props, context) => (
        <BaseComponent
            translate={context.translate}
            locale={context.locale}
            {...props}
        />
    )

    TranslatedComponent.contextTypes = {
        translate: PropTypes.func.isRequired,
        locale: PropTypes.string.isRequired,
    }

    return TranslatedComponent
}
