## Module Loader and Bundlers

### Overview

- When we write a Javascript application containing multiple files, it is painful to make sure all files are included in the correct order.
- Module loader is typically a library that can load, interpret and execute JavaScript modules you defined using a certain module format/syntax. Some examples of Javascript module loader are
  - Require.js
  - System.js
  - ECMAScript 6
- Javascript from ES5 and before does not have any module loader. Oracle JET uses **Require.js** that follows AMD (Asynchronous Module Definition). It make sure all modules are loaded when the application is executed or during runtime. Modules help developer’s separate functionality and organize the codebase.
- Module bundlers are an alternative to module loaders. They do manage and load interdependent modules but do it as part of the application build rather than at runtime. Bundler stitches together all modules into a single file (a bundle) before the execution. Some examples of Javascript module bundlers are
  - Webpack
  - Browserify
- Oracle JET supports **Webpack** module bundler. Webpack configuration is not part of standard scaffolding but available for additional download. If we use Webpack then we have to replace **main.js** with **bundle.js**.

### Examples

- This [example](/03-Examples/02-Modularity) details how Oracle Jet uses Require.js to achieve modularity. View developer console and Network tab to see the difference before and after applications.
- If we create a js file that is not referenced during initial load then require.js will not load the js until is referenced.