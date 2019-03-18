# apigeebootstrap

bootstrap api project for Apigee Edge API development.

## Deploy

This Apigee Edge API project is set for deployment with [Maven](https://maven.apache.org). Its using [Apigee Maven](https://github.com/apigee/apigee-deploy-maven-plugin) plugin to automate the actual bundle deployments.

	mvn install -P{environment name} -Dorganization={Apigee org name} -Dusername={Apigee username} -Dpassword={Apigee password} 

## Tests

API tests are created using Cucumberjs. To install dependencies use

	cd tests
	npm install
	
Maven install runs tests automatically. To run tests manually use

	./run-tests.sh

## Tutorials

* [Building apigee bootstrap](https://www.popularowl.com/blog/build-api-mocks-with-amokjs/) - detailed post why and how this project was built.
* [Build API mocks with Amokjs](https://www.popularowl.com/blog/build-api-mocks-with-amokjs/) - using apigee bootstrap to host Nodejs applications in Apigee Edge


## Feedback

Feedback and pull requests are welcome.
