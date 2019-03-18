/* jshint node:true */
'use strict';

const apickli = require('apickli');
const {defineSupportCode} = require('cucumber');

defineSupportCode(function({Before}) {
    Before(function() {
        this.apickli = new apickli.Apickli('https', 'path.to.your.api.endpoint.com/v1/customers');
        this.apickli.addRequestHeader('Cache-Control', 'no-cache');
    });
});

//// example of adding custom step definitions
// defineSupportCode( ({Given, When, Then}) => {
//     Given( () => {
//         // add custom step dafinitions for Given
//     });
// });

// add the step definitions defined in default apickli gherkin
// see all default dafinitions here: https://github.com/apickli/apickli#gherkin-expressions
module.exports = require('apickli/apickli-gherkin');