# Phonecat - App demonstrating the use of with AngularJS + RequireJS + Yeoman

* AngularJS - Angular.js is an open-source Javascript MVC (Model-View-Controller) framework developed by
            Google. It gives Javascript developers a highly structured approach to developing rich browser-based
            applications which leads to very high productivity.
* RequireJS - RequireJS is a JavaScript file and module loader.
* Yeoman    - Comprises of three tools
            a. Yo    - for scaffolding application structure
            b. Grunt - used to build, preview and test your project
            c. Bower - used for dependency management to download and manage api/scripts

## Application Structure
    ## Directory Layout

        app/                        --> all of the files to be used in production
          styles/                   --> css files
            app.css                 --> default stylesheet
            bootstrap.css           --> bootstrap styles
          img/                      --> image files
          index.html                --> app layout file (the main html template file of the app)
          scripts/                  --> javascript files
            app.js                  --> application
            main.js                 --> RequireJS main config file
            conf/                   --> Conf folder for app properties and configuration
              Config.js             --> Config loader module
              properties.js         --> App properties
            controllers/            --> directory for application controllers
            directives/             --> directory for application directives
            filters/                --> directory for custom angular filters
            services/               --> directory for custom angular services
            components/               --> 3rd party javascript libraries (created by bower)
            angular/
              angular.js            --> angular mocks js library
            angular-mocks/
              angular-mocks.js      --> angular-mocks js library
            angular-resource/
              angular-resource.js   --> angular resource js library
            angular-sanitize/
              angular-sanitize.js   --> angular sanitize js library
            angular-scenario/
              angular-scenario.js   --> angular scenario js library
            bootstrap/              --> twitter bootstrap js library
            domready/
              ready.js              --> domready js library
            jquery/
              jquery.js             --> jquery js library
            requirejs/
              require.js            --> requirejs js library
          views/                    --> angular view partials (partial html templates)
            phone-list.html
            phone-details.html

        test/                       --> test source files and libraries
          spec/                     --> unit level specs/tests
            controllers/            --> unit test jasmine specs for controllers
              phoneControllerSpec.js
        karma.conf.js               --> config file for running unit tests with Karma
        karma-e2e.conf.js           --> config file for running e2e tests with Karma
