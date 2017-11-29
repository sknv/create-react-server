import React from 'react'

const unsafeUtil = {
  _unsafe(markup) {
    return { __html: markup }
  },

  render(tag, markup, props = {}) {
    const Tag = `${tag}`
    return <Tag dangerouslySetInnerHTML={this._unsafe(markup)} {...props} />
  }
}

export default unsafeUtil
