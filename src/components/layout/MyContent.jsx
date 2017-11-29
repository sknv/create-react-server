import React from 'react'

const MyContent = ({ breadcrumbs, header, actions, content }) => {
  return (
    <main className="container-fluid content">
      {breadcrumbs}

      <div className="row mb-3">
        <div className="col-12 col-md">{header}</div>

        {actions && (
          <div className="col-12 col-md-auto action-group">{actions}</div>
        )}
      </div>

      {content}
    </main>
  )
}

export default MyContent
