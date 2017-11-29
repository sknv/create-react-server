import express from 'express'
import favicon from 'serve-favicon'
import fs from 'fs'
import path from 'path'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { matchPath } from 'react-router-dom'

import appConfig from './config/appConfig'
import configureStore from './stores/configureStore'
import routes from './config/routes'
import ServerApp from './containers/ServerApp'

// Define application environment.
const NODE_ENV = process.env.NODE_ENV || 'development',
  isProduction = 'production' === NODE_ENV,
  isDevelopment = !isProduction

// Load template.
const template = fs.readFileSync(path.join(__dirname, '../index.html'), 'utf8')

// Create an Express app.
const app = express()

// Serve favicon and static assets (for dev only).
if (isDevelopment) {
  app.use(favicon(path.join(__dirname, '../favicon.ico')))
  app.use('/static', express.static(path.join(__dirname, '../static')))
}

// Return an array of promises to fetch data required for rendering
// matching components.
const dataPromises = (url, store) => {
  const promises = []
  // Use `some` to imitate `<Switch>` behavior
  // of selecting only the first to match.
  routes.some(route => {
    const match = matchPath(url, route)
    if (match) {
      const fetchData = route.component.fetchData
      if (fetchData instanceof Function) {
        promises.push(fetchData(store.dispatch))
      }
    }
    return match
  })
  return promises
}

// Redirect helper.
const redirect = (res, location) => {
  res.writeHead(301, { Location: location })
  res.end()
}

// Render title and description tags.
const renderSeoTags = (page, title, description) => {
  const makeTitle = () => `${title} | ${appConfig.title}`

  if (title) {
    page = page.replace(/<title>.*?<\/title>/, `<title>${makeTitle()}</title>`)
  }
  if (description) {
    page = page.replace(
      /<meta name="description" content=".*?"\/?>/,
      `<meta name="description" content="${description}">`
    )
  }
  return page
}

// Render full page or redirect.
const renderOrRedirect = (req, res, store, { title, description }) => {
  // Track redirections and 404 with context.
  const context = {}
  const content = renderToString(
    <ServerApp store={store} location={req.url} context={context} />
  )

  // Somewhere a `<Redirect>` was rendered.
  if (context.url) {
    redirect(res, context.url)
    return
  }

  // Handle 404 error.
  if (context.status === 404) {
    res.status(404)
  }

  // Escape store state.
  const storeState = JSON.stringify(store.getState()).replace(/</g, '\\u003c')

  // Replace placeholders and render html.
  let page = template
    .replace('<div id="content"></div>', content)
    .replace('const store = {}', `const store = ${storeState}`)
  page = renderSeoTags(page, title, description)

  res.send(page)
}

// Returns page title and description.
const seoTags = promisesData => {
  const pageSeoTags = { title: '', description: '' }
  // Find page title and description.
  promisesData.forEach(promiseData => {
    if (promiseData.pageTitle) {
      pageSeoTags.title = promiseData.pageTitle
    }
    if (promiseData.pageDescription) {
      pageSeoTags.description = promiseData.pageDescription
    }
  })
  return pageSeoTags
}

// Universal request handler.
const handler = (req, res) => {
  // Create a Redux store for every request.
  const store = configureStore()

  const promises = dataPromises(req.url, store)
  Promise.all(promises).then(promisesData =>
    renderOrRedirect(req, res, store, seoTags(promisesData))
  )
}

// Handle requests.
app.get('*', handler)

// Start the server.
const port = 4000
app.listen(port, () => {
  console.log(`Server application is listening on port ${port}`)
})
