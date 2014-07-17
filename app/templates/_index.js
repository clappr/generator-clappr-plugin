var <%= className %> = require('<%= dependency %>');
var JST = require('./jst');

class <%= pluginName %> extends <%= className %> {
  get name() { return '<%= name %>'; }
}

module.exports = window.<%= pluginName %> = <%= pluginName %>;
