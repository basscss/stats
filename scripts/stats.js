
var _ = require('lodash');
var fs = require('fs');
var path = require('path');
var cssstats = require('cssstats');
var mixedProperties = require('css-mixed-properties');
var fileHistory = require('file-history');
var config = require('../config.json');

var archive = require('../history.json');

var history;
var results;

fileHistory({
    repo: 'basscss/basscss',
    filepaths: [
      '/css/basscss.min.css',
      '/basscss.min.css'
    ],
    history: archive,
    token: config.token
  }, function(history) {
    fs.writeFileSync('history.json', JSON.stringify(history));
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
  var uniques = {};
  Object.keys(stats.aggregates).forEach(function(key) {
    if (!stats.aggregates[key].unique) { return false }
    uniques[key] = stats.aggregates[key];
  });
  var propertiesBreakdown = Object.keys(stats.declarations.byProperty)
    .map(function(key) {
      var prop = stats.declarations.byProperty[key];
      var total = stats.declarations.all.length;
      return {
        property: key,
        percentage: (prop.length / total * 100),
        total: prop.length
      }
    }).sort(function(a, b) {
      return b.percentage - a.percentage;
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
    propertiesBreakdown: propertiesBreakdown
  }

}


function write() {
  fs.writeFileSync(path.join(__dirname, '../stats.json'), JSON.stringify(results));
}

