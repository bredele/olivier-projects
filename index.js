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
  return vomit('ul', {
    class : 'projects'
  }, data.projects.map(function(project) {
    var keywords = project.keywords;
    var query = project.name + (keywords ? keywords.join('') : '');
    return vomit('li', {
      class: 'project searchable flex',
      'data-search': query
    }, [
      vomit('h3', project.name),
      vomit('p', {
        class: 'summary'
      }, project.summary)
    ]);
  }));
};
