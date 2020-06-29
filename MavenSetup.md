# Maven local variables setup

In order to shorten Maven deployment commands and avoid using sensitive information in deployment commands (usernames, passwords, etc.) you can utilize [Maven settings file](https://maven.apache.org/settings.html) to store values localy on development machine.

Maven expects 2 types of configuration settings files - global and user specific.

* The Maven install: `${maven.home}/conf/settings.xml`
* A user’s install: `${user.home}/.m2/settings.xml`

If both files exists, their contents gets merged, with the user-specific `settings.xml` being dominant. Therefore, we will only work with user specific `settings.xml` file for our configurations.

## Settings Profiles

Within the `settings.xml` file, you can specify profile elements. The profile element in the `settings.xml` is a truncated version of the pom.xml profile element.

Here is the example file with profiles set for `dev`, `test` and `prod` enviroenments.

    <?xml version="1.0" encoding="UTF-8"?>
    <settings xmlns="http://maven.apache.org/SETTINGS/1.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/SETTINGS/1.0.0 http://maven.apache.org/xsd/settings-1.0.0.xsd">
      <profiles>
        <profile>
          <id>dev</id>
          <properties>
            <username>user@email.com</username>
            <password>xxx</password>
          </properties>
        </profile>
        <profile>
          <id>test</id>
          <properties>
            <username>user@email.com</username>
            <password>xxx</password>
          </properties>
        </profile>
        <profile>
          <id>prod</id>
          <properties>
            <username>user@email.com</username>
            <password>xxx</password>
          </properties>
        </profile>
      </profiles>
    </settings>

You can store different credentials for different profiles. Profile properties will be come available to Maven during the build run.