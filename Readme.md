# Oracle JET

## Table of Content

- [Overview](#Overview)
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

-

---

## Modules

---

## Appendix

- Reference
  - Tutorial
    - [Awesome Oracle JET](https://github.com/JohnRSim/awesome-jet)
