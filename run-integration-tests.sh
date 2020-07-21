#!/bin/bash

# this script runs BDD integration tests
# against APIs already deployed to Apigee Edge

# check if npm dependencies are installed. if not install them
if [ ! -d "node_modules" ]; then
    npm install
fi

# use npx to run cucumber-js tests
npx cucumber-js integration-tests

# in order to run specific tags from feature files
# npx cucumber-js integration-tests --tags @prod
