<!-- @@@title:Grunt Tasks@@@ -->
<!-- @@@description:How to use the included Grunt tasks to run a local server and compile scripts@@@ -->
# 2. Using Development Tasks

Fraction.less comes with a few simple Grunt plugins and tasks set up for you. You aren't familiar with Grunt it's a task runner that lets you run common chores automatically. You can [read more about Grunt here](http://gruntjs.com). If you choose to use the included Grunt tasks you'll have access to:

- A local static server
- JavaScript linting so you can catch error before they happen
- A LESS compiler to turn your LESS into CSS
- A watch task that will run any one of the above tasks when you update code

## Default task

There is only one task that comes with Fraction.less and it is the default Grunt task that'll run. To run this task enter `grunt` in your terminal. This task will start a server where you can view your project at http://localhost:9000. The default task will also watch your CSS, LESS, and JavaScript files for changes. When it detects a change the following will happen based on the file that was changed:

- Your page will automatically refresh when JavaScript or CSS files are changed
- jshint will lint your JavaScript files and warn you if there are any problems when you change any JavaScript file including the Gruntfile itself
- A LESS compiler runs when you change LESS files. It will compile it to CSS

You don't have to use Grunt if you don't want to. Fraction.less is flexible. Replace it with Gulp instead if you want. The whole project is meant to be easy to bepicked apart.
