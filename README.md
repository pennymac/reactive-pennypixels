# Unoffcial Reactive PennyPixels

This is a starter project for React programmers working at PennyMac.

1.  [PennyPixels](http://pennypixels.pennymacusa.com/#navs) (Because you "should" be using it)
2.  [React.js](http://facebook.github.io/react/) (Because it is awesome)
3.  [Babel Hot Loader](http://gaearon.github.io/react-hot-loader/) (Because we automate common work)
4.  [Webpack dev server](http://webpack.github.io/docs/webpack-dev-server.html) (If you want live code editing)
5.  [Cucumber-js to automate testing](https://github.com/cucumber/cucumber-js) (Or substitute another test approach)
6.  [GNU Make](https://www.gnu.org/software/make/) (Optional, to document and automate useful shell commands)

To get started clone the repo, delete the .git folder and start a new program.

## Why another framework?

There are many ways to program the browser.

React automates away the manual task of writing imperative code to
update the DOM. Additionally it provides a Sythetic Event System that
can normalizes the event behavior and implements the standarized behavior.

The automation ensures that your user interface stays consistent over a
series of changes by rendering on every state change. The results are captured
in a virtual DOM which is a JavaScript representation of DOM elements. Each
render the before and after are compared and the user interface is automatically
updated to reflect the changes whether it is an add, update or delete.

Additionally, this framework adopts JavaScript 2015 which is final as of June 2015.

Finally, the live code editing makes the experience simple and easy to develop.

## Developer Workflow

The workflow uses [babel-hot-loader](http://gaearon.github.io/react-hot-loader/).

## Getting Setup

This software needs to be installed before you can build the project.

1.  Node.js / NPM

All other developer tools come from NPM. Install them with:

    make install-prereqs

Install development and runtime dependencies with:

    npm install

## Build Project

To run the development server:

    make

To bundle the project:

    make bundle

To run the tests:

    make test

To lint the code:

    make lint
