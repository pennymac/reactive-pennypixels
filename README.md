# Unoffcial Reactive PennyPixels

This is a starter project for React programmers working at PennyMac.

1.  [PennyPixels](http://pennypixels.pennymacusa.com/#navs) (Because you "should" be using it)
2.  [React.js](http://facebook.github.io/react/) (Because it is awesome)
3.  [Babel Hot Loader](http://gaearon.github.io/react-hot-loader/) (Because we automate common work)
4.  [Webpack dev server](http://webpack.github.io/docs/webpack-dev-server.html) (If you want live code editing)
5.  [Cucumber-js to automate testing](https://github.com/cucumber/cucumber-js) (Or substitute another test approach)
6.  [GNU Make](https://www.gnu.org/software/make/) (Optional, to document and automate useful shell commands)

To get started clone the repo, delete the .git folder and start a new program.

## Motivation

There are many ways to program a browser. Why should I use React?

React keeps your UI consistent by rendering the page on every change.

That sounds expensive but the React library has figured out how to automate
this task and keep it reasonably efficient at the same time.

Writing web applications in this way is similar to 90s style ASP or PHP
code. A consistent snapshot of data is rendered to a template. The templates
are written in plain old JavaScript or by any tool that writes JavaScript.

Goodbye hand-coded, brittle imperative code to manipulate the DOM.

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
