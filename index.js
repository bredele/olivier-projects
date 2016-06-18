/**
 * Module dependencies.
 */

var vomit = require('vomit');

/**
 * Return DOM list of my projects.
 *
 * @param {Object} data
 * @api public
 */

module.exports = function(data) {
  data = data || require('./projects.json');
  return vomit('ul', data.projects.forEach(function(project) {
    return vomit('li', [
      vomit('h3', project.name),
      vomit('p', {
        class: 'summary'
      }, project.summary)
    ]);
  }));
};
