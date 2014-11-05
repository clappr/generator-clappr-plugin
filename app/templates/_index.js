var <%= className %> = require('<%= dependency %>');
var JST = require('./jst');

class <%= pluginName %> extends <%= className %> {
  get name() { return '<%= name %>'; }
<% if(className !== 'MediaControl') { %>
  render() {
    console.log("rendering", this.name);
    var style = $('<style>').html(JST.CSS[this.name]);
    this.$el.append(style);
    return this;
  }
<% } %>
}
<% if(type === 'playback') { %>
<%= pluginName %>.canPlay = function(source) {
  //should return true for the supported media source
  return false;
};
<% } %>

module.exports = window.<%= pluginName %> = <%= pluginName %>;
