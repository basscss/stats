
var _ = require('lodash');
var fs = require('fs');
var path = require('path');
var cssstats = require('cssstats');
var mixedProperties = require('css-mixed-properties');
var fileHistory = require('file-history');
var config = require('../config.json');

var history;
var results;

fileHistory({
  repo: 'basscss/basscss',
  filepaths: [
    '/css/basscss.min.css',
    '/basscss.min.css'
  ],
  token: config.token
}, function(history) {
  results = history.map(buildStats);
  write();
});


function buildStats(item, i) {

  var stats = cssstats(item.content);
  var mix = mixedProperties(item.content, { safe: true })
    .rules
    .map(function(m) {
      return {
        selector: m.selector,
        ratio: m.ratio,
        score: m.score
      }
    });
  var ruleSizes = stats.rules.map(function(r) { return r.declarations.length });
  var specificities = stats.selectors.map(function(s) {
    return s.specificity_10;
  });
  var uniques = Object.keys(stats.aggregates).map(function(key) {
    val = stats.aggregates[key];
    if (!val.unique) {
      return false;
    } else {
      return {
        property: key,
        total: val.total,
        unique: val.unique,
      }
    }
  });
  uniques = uniques.filter(function(u) {
    return u;
  });

  return {
    version: item.version,
    size: stats.size,
    gzipSize: stats.gzipSize,
    averageSpecificity: stats.averages.specificity,
    minSpecificity: _.min(specificities),
    maxSpecificity: _.max(specificities),
    averageRuleSize: stats.averages.ruleSize,
    minRuleSize: _.min(ruleSizes),
    maxRuleSize: _.max(ruleSizes),
    rules: stats.rules.length,
    selectors: stats.aggregates.selectors,
    declarations: stats.aggregates.declarations,
    properties: stats.aggregates.properties,
    idSelectors: stats.aggregates.idSelectors,
    classSelectors: stats.aggregates.classSelectors,
    pseudoElementSelectors: stats.aggregates.pseudoElementSelectors,
    pseudoClassSelectors: stats.aggregates.pseudoClassSelectors,
    specificities: specificities,
    uniques: uniques,
    mix: mix,
  }

}


function write() {
  fs.writeFileSync(path.join(__dirname, '../stats.json'), JSON.stringify(results, null, 2));
}

