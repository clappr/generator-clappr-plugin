⚠️DEPRECATED and no longer compatible ⚠️

# Clappr Player plugin generator [![Build Status](https://secure.travis-ci.org/clappr/generator-clappr-plugin.png?branch=master)](https://travis-ci.org/clappr/generator-clappr-plugin)

## Getting Started

Install yeoman and our generator from npm:
```bash
$ npm install -g yo generator-clappr-plugin
```

Create a directory for your plugin:

```bash
$ mkdir your-awesome-plugin && cd your-awesome-plugin
```

Initiate the generator:

```bash
$ yo clappr-plugin
```

## Contributing

In general, we follow the fork-and-pull git workflow:

1. Fork the repository on GitHub
2. Commit changes to a branch in your fork
3. Pull request "upstream" with your changes
4. Merge changes in to "upstream" repoository

:warning: Be sure to merge the latest from "upstream" before making a pull request.

To use your generator development version:

In the project root, link your development package:

```bash
$ npm link
```

Then when you run `yo clappr-plugin` it will use your local package.

