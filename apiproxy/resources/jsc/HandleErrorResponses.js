// if response code is not 200
// we raise specific error types

var responseCode = context.getVariable("response.status.code");

if (responseCode == "400"){
    
    context.setVariable("customers.error.code", "400");
    context.setVariable("customers.error.message", "Not Supported Request");    
    throw new Error(); // trigger the FaultRules
} 
else if (responseCode == "404"){
    
    context.setVariable("customers.error.code", "404");
    context.setVariable("customers.error.message", "Not Found");  
    throw new Error(); // trigger the FaultRules
}
else if (responseCode == "500") {
    
    context.setVariable("customers.error.code", "500");
    context.setVariable("customers.error.message", "Internal Error"); 
    throw new Error(); // trigger the FaultRules
}