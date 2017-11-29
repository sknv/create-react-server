import React from 'react'

import NotFound from '../lib/components/NotFound'

const NotFoundPage = ({ staticContext }) => {
  if (staticContext) {
    staticContext.status = 404
  }

  return <NotFound />
}

export default NotFoundPage
