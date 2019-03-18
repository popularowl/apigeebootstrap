Feature: Validating customers API funcionality
	As an API developer, I want to validate that customers API has all the required funcionality
	
	Scenario: I should get successful json response for example request
		When I GET /v1/customers
		Then response code should be 200
		And response body should be valid json

	Scenario: I should get not found response for the request incorrect path
		When I PUT /v1/customerss
		Then response code should be 400
		And response body should be valid json