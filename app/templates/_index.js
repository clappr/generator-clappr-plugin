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
<% if(type === 'playback') { %>
<%= pluginName %>.canPlay = function(source) {
  //should return true for the supported media source
  return true;
};
<% } %>

module.exports = window.<%= pluginName %> = <%= pluginName %>;
