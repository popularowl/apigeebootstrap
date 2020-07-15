#!/bin/bash

# this script runs local code quality tests

# check if npm dependencies are installed. if not install them
if [ ! -d "node_modules" ]; then
    npm install
fi

# use npx to run tests
npx eslint apiproxy/resources/jsc/**
