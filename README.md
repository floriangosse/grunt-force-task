# grunt-force-task [![Build Status](https://travis-ci.org/floriangosse/grunt-force-task.svg?branch=master)](https://travis-ci.org/floriangosse/grunt-force-task)

> Enable the force option for a specific task.

## Getting Started
This plugin requires Grunt.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-force-task --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-force-task');
```

## The `force` task

The `force` task doesn't require any special configuration. To use it, just add `force` as the first argument when running other tasks.

Short example: `force:jshint`

### Example

The default task run the `jshint` task and then the `watch` task which can run `jshint` again. We use `force` to execute the first `jshint` so we doesn't break the flow and the watch task can executed for continuous development.

```js
grunt.initConfig({
    jshint: { /* ... */ },
    watch: {
        all: {
            files: '{,**/}*.js',
            tasks: ['jshint']
        }
    }
});

grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.loadNpmTasks('grunt-contrib-watch');

grunt.registerTask('default', [
    'force:jshint',
    'watch'
]);
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## License
Copyright (c) 2014 Florian Goße. Licensed under the MIT license.
