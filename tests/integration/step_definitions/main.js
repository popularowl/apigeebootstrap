/* jshint node:true */
'use strict';

const apickli = require('apickli');
const { Before } = require("cucumber");

Before(function() {
    this.apickli = new apickli.Apickli('https', 'your.api.domain.name/v1/customers');
    this.apickli.addRequestHeader('Cache-Control', 'no-cache');
});

//custom step definitions go here


// add the step definitions defined in default apickli gherkin
// see all default dafinitions here: https://github.com/apickli/apickli#gherkin-expressions
module.exports = require('apickli/apickli-gherkin');