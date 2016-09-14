# Fractionless Website

> The static website and documentation for [Fractionless Boilerplate](http://fractionless.info)

## Would you like to be featured on our site?

Was your website built using some piece of Fractionless? Add it to the list [on the official wiki](https://github.com/billpatrianakos/fractionless-boilerplate/wiki/Sites-using-Fractionless) and we may feature it on our website (with your permission, of course).

## Contributing

If you found a mistake or want to add to our documentation, feel free to contribute to the project by:

1. Fork the project
2. Make your edits (be sure to adhere to the current code style)
3. Make a pull request

## Installation and setup

If you want to host the Fraction.less docs locally here's how to install and run it (please don't mirror the site live - this is the __only__ official documentation).

- If using nvm then be sure to run `nvm use` and install the correct version of Node if needed
- `npm install -g grunt-cli bower`
- `npm install && bower install`
- `grunt setup` will copy some front-end libraries to the project. Forgetting this step will result in you not having Font Awesome fonts installed properly and possibly other libraries in the future
- `grunt` will start a local server and a watch task that'll transpile LESS files and other things as you change code
