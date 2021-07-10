import { Children, isValidElement } from 'react'

export const hasChild = (children, child) => {
  const types = Children.map(children, (elem) => {
    if (!isValidElement(elem)) return null
    return elem.type
  })

  return (types || []).includes(child)
}
