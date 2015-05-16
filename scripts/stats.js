
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
    '/css/basscss.css',
    '/basscss.css'
  ],
  token: config.token
}, function(history) {
  results = history.map(buildStats);
  write();
});

function buildStats(item) {
  var stats = cssstats(item.content);
  var mix = mixedProperties(item.content, { safe: true });
  return {
    version: item.version,
    size: stats.size,
    gzipSize: stats.gzipSize,
    averageSpecificity: stats.averages.specificity,
    averageRuleSize: stats.averages.ruleSize,
    rules: stats.rules.length,
    selectors: stats.aggregates.selectors,
    properties: stats.aggregates.properties,
    idSelectors: stats.aggregates.idSelectors,
    classSelectors: stats.aggregates.classSelectors,
    pseudoElementSelectors: stats.aggregates.pseudoElementSelectors,
    pseudoClassSelectors: stats.aggregates.pseudoClassSelectors,
    uniques: {},
    mix: mix,
  }
}

function write() {
  fs.writeFileSync(path.join(__dirname, '../stats.json'), JSON.stringify(results, null, 2));
}

