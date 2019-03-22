# Apigee Bootstrap

> Api framework for Apigee Edge api development and continuous deployment.

> The goal of this project is to provide the blueprint code which includes the best practices for rapid api development on Apigee Edge platform.

## Apigee Bootstrap framework contains

* Api deployment automation via [Maven](https://maven.apache.org)
* Continuous Integration setup with pipeline examples for [Jenkins](https://jenkins.io) & [Circleci](https://circleci.com)
* Configuration management / dynamic values across multiple environments via version controlled key value maps.
* Optimised for Api performance and low latency in Apigee Edge.
* Api Error handling and management framework.
* Build around TDD (test driven development) and BDD (behaviour driven development) principles.
* Correlation id generation / propagation examples.
* Logging output / integration to multiple platforms. [Loggly](loggly.com), [Elastic](https://www.elastic.co/elk-stack)

## How to deploy?

Apigee Edge bootstrap api project is set for deployment with [Maven](https://maven.apache.org). Its using [Apigee Maven](https://github.com/apigee/apigee-deploy-maven-plugin) and [Apigee Config Maven](https://github.com/apigee/apigee-config-maven-plugin) plugins for deploying api and environment specific setup (target servers, kvm's, etc).

Deploy API bundle

	mvn install -P{environment name} -Dorganization={Apigee org name} -Dusername={Apigee username} -Dpassword={Apigee password}

Deploy environment settings

	mvn apigee-config:targetservers -P{environment name} -Dorganization={Apigee org name} -Dapigee.config.options=update 
	mvn apigee-config:caches -P{environment name} -Dorganization={Apigee org name} -Dapigee.config.options=update 
	mvn apigee-config:kvms -P{environment name} -Dorganization={Apigee org name} -Dapigee.config.options=update  

## How to run tests?

TDD api testing practices are implemented using [Cucumberjs](https://www.npmjs.com/package/cucumber).

	
Maven deployment will run tests automatically. To run tests manually use

	./run-tests.sh

## Tutorials

* [Building apigee bootstrap](https://www.popularowl.com/blog/build-api-mocks-with-amokjs/) - detailed post why and how this project was built.
* [Build API mocks with Amokjs](https://www.popularowl.com/blog/build-api-mocks-with-amokjs/) - using apigee bootstrap to host Nodejs applications in Apigee Edge


## Feedback

Feedback and pull requests to this project are very welcome.

## OSS Licensing

This project comes with [GPLv3](https://www.gnu.org/licenses/gpl-3.0.en.html) open source license. We are happy to provide commercial license for your business. [Contact us](https://github.com/sauliuz).
