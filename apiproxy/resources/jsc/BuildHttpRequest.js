// build the party manager data lookup requests

try {

    var serviceUrl = 'https://owerwritten-target-url.net';

    // set the request parameters
    context.setVariable("request.verb", "GET");
    context.setVariable("target.url", ''+serviceUrl);

} catch (error) {
    
    // error handling framework
    context.setVariable("customers.error.stackTrace", ""+error);
    context.setVariable("customers.error.code", "500");
    context.setVariable("customers.error.message", "Internal Error"); 
    throw new Error(); // trigger the FaultRules
}