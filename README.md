# Apigee Bootstrap

Bootstrap api project for Apigee Edge API development.

It contains best practice setup for CI (Continuous integration lifecycle) and TDD (test driven development)

## Deployment

Apigee Edge bootstrap api project is set for deployment with [Maven](https://maven.apache.org). Its using [Apigee Maven](https://github.com/apigee/apigee-deploy-maven-plugin) and [Apigee Config Maven](https://github.com/apigee/apigee-config-maven-plugin) plugins for deploying api and environment specific setup (target servers, kvm's, etc).

Deploy API bundle

	mvn install -P{environment name} -Dorganization={Apigee org name} -Dusername={Apigee username} -Dpassword={Apigee password}

Deploy environment settings

	mvn apigee-config:targetservers -P{environment name} -Dorganization={Apigee org name} -Dapigee.config.options=update 
	mvn apigee-config:caches -P{environment name} -Dorganization={Apigee org name} -Dapigee.config.options=update 
	mvn apigee-config:kvms -P{environment name} -Dorganization={Apigee org name} -Dapigee.config.options=update  

## Testing

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
