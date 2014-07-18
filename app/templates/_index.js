var <%= className %> = require('<%= dependency %>');
var JST = require('./jst');

class <%= pluginName %> extends <%= className %> {
  get name() { return '<%= name %>'; }

  render() {
    var style = $('<style>').html(JST.CSS[<%= name %>]);
    this.$el.append(style);
    return this;
  }
}

module.exports = window.<%= pluginName %> = <%= pluginName %>;
