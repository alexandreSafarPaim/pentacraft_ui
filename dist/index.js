
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./pentacraft_ui.cjs.production.min.js')
} else {
  module.exports = require('./pentacraft_ui.cjs.development.js')
}
