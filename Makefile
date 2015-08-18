# Automated web development workflow with GNU Make
#
# This script automates your development workflow.
#
# See README for instructions

all: serve

clean:
	rm -rf dist

clean-deps:
	rm -rf node_modules

bundle:
	webpack

serve:
	node server.js

test:
	cucumber-js -f pretty

lint:
	eslint src

install-prereqs:
	npm install -g cucumber			# Because writing tests is good
	npm install -g eslint babel-eslint	# Because lint is only annoying when you suck
	npm install -g webpack			# Because it is better than make
