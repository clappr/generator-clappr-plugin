import {<%= className %>, Events, template} from 'clappr'
<% if (type !== 'playback') { %>
import html from './<%= name %>.html'
import './<%= name %>.css'
<% } %>

export default class <%= pluginName %> extends <%= className %> {
  get name() { return '<%= name %>' }
<% if (type !== 'playback') { %>
  get template() { return template(html) } }
<% } %>

<% if (type !== 'playback') { %>
  bindEvents() {
    // here you can bind events to your methods
    //this.listenTo(this.playback, Events.PLAYBACK_PLAY, this.onPlay)
    //this.listenTo(this.container, Events.CONTAINER_PAUSE, this.onPause)
  }
<% } %>

<% if (type == 'ui_container_plugin' || type === 'ui_core_plugin') { %>
  render() {
    console.log("rendering", this.name)
    var templateOptions = {position: 34, imageUrl: 'http://myexamp.com/clappr.png'}
    this.$el.html(this.template(templateOptions))
    <% if(type === 'ui_container_plugin') { %>
    this.container.$el.append(this.$el)
    <% } %>
    <% if(type === 'ui_core_plugin') { %>
    this.core.container.$el.append(this.$el)
    <% } %>
    return this
  }
<% } %>
}
<% if(type === 'playback') { %>
<%= pluginName %>.canPlay = (source, mimeType) => {
  //should return true for the supported media source
  return false;
};
<% } %>
