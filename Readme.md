# Oracle JET

## Table of Content

- [Overview](#Overview)
- [Architecture](#Architecture)
- [Installation](#Installation)
- [Modules](#Modules)
- [Appendix](#Appendix)

## Overview

- Oracle JET is a collection of Oracle and open source JavaScript libraries engineered to make it as simple and efficient as possible to build client-side web and hybrid mobile applications based on JavaScript, HTML5, and CSS.
- The key feature of Oracle JET Toolkit are given below:
  - Messaging and Event services for both Model and View layers.
  - Validation framework that provides UI element and component validation and data converters
  - Caching services at the Model layer for performance optimization of pagination and virtual scrolling
  - Filtering and sorting services provided at the Model layer
  - Connection to data sources through Web services, such as Representational State Transfer (REST) or WebSocket
  - Management of URL and browser history using Oracle JET oj.Router and oj-module components
  - Integrated authorization through OAuth 2.0 for data models retrieved from REST Services
  - Resource management provided by RequireJS
  - API compatibility with Backbone.js Model, Collection, and Events classes, except for Backbone.js Underscore methods.
  - JavaScript logging
  - Popup UI handling
  - Compliance with Oracle National Language Support (NLS) standards (i18n) for numeric, currency, and date/time formatting
  - Built-in theming supporting the Oracle Alta UI style specifications
  - Responsive layout framework
  - Gesture functionality by touch, mouse, and pointer events where appropriate
  - Web Content Accessibility Guidelines (WCAG) 2.0
  - Support for Oracle software localization standards, l10n

---

## Architecture

- Oracle JET is not a Javascript framework but it is a Toolkit of Open Source Web Frameworks and oracle glue code to use these frameworks.

  ![](./01-Images/02-JETInternals.png)

- Oracle JET is used to display data into Single Page Web Applications but getting data using REST or WebSockets.
- Oracle JET supports the Model-View-ViewModel (MVVM) architectural design pattern.

  - **Model**: Used to represent the application data
  - **View**: Used for presentation of Data
  - **ViewModel**: Exposes data from the Model to the view and maintains the application's state.

    ![](./01-Images/01-MVVMArchitectural.png)

- Oracle JET uses cordova plugin to render HTML WebPages into IOS and Android devices using native WebViewer.

  ![](./01-Images/03-JETMobile.png)

---

## Installation

- Jet installation

  - Installing Node.js

    ```sh
    # Configuring Proxy
    export http_proxy="http://<ip>:<port>"
    export https_proxy="http://<ip>:<port>"

    # Install Node.js
    wget https://yum.oracle.com/repo/OracleLinux/OL7/developer_nodejs10/x86_64/getPackage/nodejs-10.16.3-1.0.1.el7.x86_64.rpm
    sudo rpm -ivh nodejs-10.16.3-1.0.1.el7.x86_64.rpm

    # Set Proxy
    npm config set proxy http://<ip>:<port>
    npm config set https-proxy http://<ip>:<port>

    # Delete Proxy
    npm config rm proxy
    npm config rm https-proxy
    ```

  - Installing Oracle Jet

    ```sh
    # Changing Node Global Path
    sudo su
    mkdir /scratch/jet/.npm-global
    npm config set prefix '/scratch/jet/.npm-global'
    vi ~/.bash_profile
      # Add below to path
      export PATH=/scratch/jet/.npm-global/bin:$PATH
    source ~/.bash_profile

    # Install Oracle Jet CLI and associated libraries. For specific version use npm install -g @oracle/ojet-cli@~6.0.0
    npm install -g @oracle/ojet-cli cordova webpack webpack-cli  typescript

    # Verification of Ojet CLI
    npm list -g ojet-cli
    ojet help
    ojet --version

    # Upgrade JET
    npm cache clean –force
    npm upgrade -g @oracle/ojet-cli

    # Uninstall JET
    npm uninstall -g @oracle/ojet-cli
    ```

  - Creating a WebApp using Oracle Jet - Typescript and Webpack

    ```sh
    # Running WebApp with ojet cli
    ojet create --template=navdrawer Demo-01
    cd Demo-01
    npm i @types/oracle__oraclejet text-loader requirejs-text

    # Copy 00-Install\tsconfig.json
    ojet serve

    # If you wanted to use Webpack unizp content of 00-Install\jet-webpack.zip and copy and paste in the root of the folder
    webpack
    # Change index.html and update with bundle.js and run index.html
    ```

  - Creating Hello World

    - Navigate `03-Examples\01-HelloWorld` and copy deliverable into src folder.
    - Create two terminals. In first, run `tsc --watch` to convert Typescript to Javascript. In second, run `ojet serve` or `webpack` based on you configuration. The Dashboard tab will be updated as below
      ![](01-Images\04-HelloWorld.png)

---

## Modules

- Below are the different features to be known for understanding Oracle JET.
  - [Require](04-Modules\01-Require.md)
  - [Knockout](04-Modules\02-Knockout.md)
  - [Typescript](04-Modules\01-Typescript.md)
  - Layouts

---

## Appendix

- Reference
  - Tutorial
    - [Awesome Oracle JET](https://github.com/JohnRSim/awesome-jet)
