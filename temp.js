
  function buildStats(tag, css) {
    var s = cssstats(css);
    var mix = mixedProperties(css);
    return {
      version: tag.name.replace(/^v/, ''),
      created_at: moment().format(),
      size: s.size,
      gzipSize: s.gzipSize,
      averageSpecificity: s.averages.specificity,
      averageRuleSize: s.averages.ruleSize,
      rules: s.rules.length,
      selectors: s.aggregates.selectors,
      properties: s.aggregates.properties,
      idSelectors: s.aggregates.idSelectors,
      classSelectors: s.aggregates.classSelectors,
      pseudoElementSelectors: s.aggregates.pseudoElementSelectors,
      pseudoClassSelectors: s.aggregates.pseudoClassSelectors,
      uniques: {},
      mix: mix,
    }
  }
