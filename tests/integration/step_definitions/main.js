/* jshint node:true */
'use strict';

const apickli = require('apickli');
const {defineSupportCode} = require('cucumber');


const { Before } = require("cucumber");

Before(function() {
    this.apickli = new apickli.Apickli('https', 'amer-mint-partner04-dev.apigee.net/v1/customers');
    this.apickli.addRequestHeader('Cache-Control', 'no-cache');
});

//custom step definitions go here


// add the step definitions defined in default apickli gherkin
// see all default dafinitions here: https://github.com/apickli/apickli#gherkin-expressions
module.exports = require('apickli/apickli-gherkin');