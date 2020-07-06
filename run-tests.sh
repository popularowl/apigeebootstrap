#!/bin/bash

# go to tests directory
# cucumberjs runs from within tests directory
cd tests

# check if npm dependencies are installed. if not install them
if [ ! -d "node_modules" ]; then
    npm install
fi

# run tests
./node_modules/cucumber/bin/cucumber-js integration
