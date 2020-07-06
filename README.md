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
* Logging integration examples to multiple logging platforms.

## How to deploy

Apigee bootstrap project is configured for deployment with [Maven](https://maven.apache.org). Its using [Apigee Maven](https://github.com/apigee/apigee-deploy-maven-plugin) and [Apigee Config Maven](https://github.com/apigee/apigee-config-maven-plugin) plugins for deploying apis and environment specific setup (target servers, kvm's, etc).

## Set local environment variables

During deployment, Apigee bootstrap receives deployment information from the comand line arguments. It also requires you to set deployment username and deployment password as environment variables for the best security and continuous integration practices. 

You have to set APIGEE_USERNAME and APIGEE_PASSWORD in order for deployments to succeeed.

Set local variables on Unix / Linux machines

    export APIGEE_USERNAME=your username
    export APIGEE_PASSWORD=your password

[Set local variables on Windows](https://ss64.com/nt/) machines

    setx APIGEE_USERNAME "your username"
    setx APIGEE_PASSWORD "your password"

## Deploy API bundle

After setting above environment variables in order to deploy API bundle you can run the following

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
