import React, { PropTypes } from 'react'
import cx from 'classnames'

import {
  createShorthandItem,
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
} from '../../lib'
import StepDescription from './StepDescription'
import StepTitle from './StepTitle'

function StepContent(props) {
  const { children, className, description, title } = props
  const classes = cx(className, 'content')
  const rest = getUnhandledProps(StepContent, props)
  const ElementType = getElementType(StepContent, props)

  if (children) {
    return <ElementType {...rest} className={classes}>{children}</ElementType>
  }

  return (
    <ElementType {...rest} className={classes}>
      {createShorthandItem(StepTitle, val => ({ title: val }), title)}
      {createShorthandItem(StepDescription, val => ({ description: val }), description)}
    </ElementType>
  )
}

StepContent._meta = {
  name: 'StepContent',
  parent: 'Step',
  type: META.TYPES.ELEMENT,
}

StepContent.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Additional classes. */
  className: PropTypes.string,

  /** Primary content. */
  children: PropTypes.node,

  /** Shorthand for StepDescription. */
  description: customPropTypes.itemShorthand,

  /** Shorthand for StepTitle. */
  title: customPropTypes.itemShorthand,
}

export default StepContent
