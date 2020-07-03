# Apigee Bootstrap

> Framework for API development and continuous deployment on Google Apigee Edge API management platform.
> This project provides blueprint code setup and includes best practices for rapid Apigee Edge api development lifecycle.

## Apigee Bootstrap framework contains

* Api deployment automation via [Maven](https://maven.apache.org) and [Apigee deploy plugin](https://github.com/apigee/apigee-deploy-maven-plugin)
* Platform configuration setup as code via [Apigee config Maven plugin](https://github.com/apigee/apigee-config-maven-plugin)
* Continuous Integration setup with pipeline examples for [Jenkins](https://jenkins.io) & [Circleci](https://circleci.com)
* Dynamic endpoint configuration across multiple environments via version controlled key value maps.
* Best practices for optimising API performance and low latency in Apigee Edge.
* Implemented [Apigee error handling pattern](https://community.apigee.com/articles/23724/an-error-handling-pattern-for-apigee-proxies.html).
* Built with TDD (test driven development) and BDD (behaviour driven development) principles in mind.
* Correlation id generation / propagation examples.
* Logging integration examples to multiple logging platforms. [Loggly](loggly.com), [Elastic](https://www.elastic.co/elk-stack)

## How to deploy

Apigee Edge bootstrap api project is set for deployment with [Maven](https://maven.apache.org). Its using [Apigee Maven](https://github.com/apigee/apigee-deploy-maven-plugin) and [Apigee Config Maven](https://github.com/apigee/apigee-config-maven-plugin) plugins for deploying api and environment specific setup (target servers, kvm's, etc).

Basic deployment of API bundle to Apigee Edge

    mvn install -P{environment name} -Dorganization={Apigee org name} -Dusername={Apigee username} -Dpassword={Apigee password}

We can simplify the deployment command using local [Maven settings file](https://maven.apache.org/settings.html) to setup default username and password to be used by Maven during build. See [Maven configuration guide](MavenSetup.md).

    mvn install -P{environment name} -Dorganization={Apigee org name}

In order to deploy environment settings use the following

    mvn apigee-config:targetservers -P{environment name} -Dorganization={Apigee org name} -Dapigee.config.options=update 
    mvn apigee-config:caches -P{environment name} -Dorganization={Apigee org name} -Dapigee.config.options=update 
    mvn apigee-config:kvms -P{environment name} -Dorganization={Apigee org name} -Dapigee.config.options=update  

## How to run tests

TDD api testing practices are implemented using [Cucumberjs](https://www.npmjs.com/package/cucumber) and [Apickli](https://github.com/apickli/apickli)

Maven configuration includes step to run tests automatically. In order to test manually see

    ./run-tests.sh

## Related Tutorials / Posts

* [Why use Apigee bootstrap framework?](https://www.popularowl.com/blog/why-use-apigee-api-bootstrap-framework/) - detailed post why and how Apigee bootstrap framework project was built.
* [Build API mocks with Amokjs](https://www.popularowl.com/blog/build-api-mocks-with-amokjs/) - using apigee bootstrap to host Nodejs applications in Apigee Edge.
* [Apigee platform learning resources](https://community.apigee.com/articles/56382/apigee-api-platform-learning-guide.html) - large list of Apigee learning resources.

## Improvements

Pull requests are welcome.

## OSS Licensing

This project comes with [GPLv3](https://www.gnu.org/licenses/gpl-3.0.en.html) open source license. We are happy to provide full commercial license for your business. [Contact us](https://github.com/sauliuz).
