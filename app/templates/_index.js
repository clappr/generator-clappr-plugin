var <%= className %> = require('<%= dependency %>');

class <%= pluginName %> extends <%= className %> {
}

module.exports = window.<%= pluginName %> = <%= pluginName %>;
