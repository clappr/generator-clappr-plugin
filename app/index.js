'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');

var translate = {
  'Playback': 'ui_plugin',
  'Container': 'ui_object',
  'Core': 'base_object'
};


var PlayerPluginGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = require('../package.json');

    this.on('end', function () {
      if (!this.options['skip-install']) {
        this.installDependencies();
      }
    });
  },

  askFor: function () {
    var done = this.async();

//    // Have Yeoman greet the user.
//    this.log(yosay('Welcome to the marvelous PlayerPlugin generator!'));

    var prompts = [{
      type: 'input',
      name: 'name',
      message: "Plugin name:",
      default: this.appname
    }, {
      type: 'list',
      name: 'type',
      message: 'Choose a plugin type:',
      choices: ['Playback', 'Container', 'Core']
    }];

    this.prompt(prompts, function (props) {
      this.name = props.name;
      this.type = props.type;
      done();
    }.bind(this));
  },

  app: function () {
    this.mkdir('bin');
    this.mkdir('public');

    this.template("_index.js", "index.js", {
      className: this._.classify(translate[this.type]),
      pluginName: this._.classify(this.name),
      dependency: translate[this.type]
    });

    this.template('_gulpfile.js', 'Gulpfile.js', {
      pluginName: this._.classify(this.name),
      filename: this._.underscored(this.name),
    });

    this.template('_package.json', 'package.json', {
      name: this._.underscored(this.name)
    });

    this.template('_index.html', 'index.html', {
      name: this.name,
      filename: this._.underscored(this.name),
    });

    this.copy('hook.js', 'bin/hook.js');
  },

  projectfiles: function () {
    this.copy('editorconfig', '.editorconfig');
    this.copy('jshintrc', '.jshintrc');
  }
});

module.exports = PlayerPluginGenerator;
