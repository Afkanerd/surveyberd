## jsDocs

### installation
* Global installation
```
npm install -g jsdoc
```
* Local installation
```
npm install --save-dev jsdoc
```
Then add the following script to your package.json file:
```
"doc": "jsdoc -d docs --configure jsconf.json main.js"
```
* `main.js` is our code’s entry point. 
* The `-d` flag tells JSDoc in which folder to output the documents. 
* `--configure` tells JSDoc where the configuration file is located.

### Getting started

* JSDoc 3 is an API documentation generator for JavaScript, similar to Javadoc or phpDocumentor. You add documentation comments directly to your source code, right alongside the code itself. The JSDoc tool will scan your source code and generate an HTML documentation website for you.

### Adding documentation comments to your code

* JSDoc comments should generally be placed immediately before the code being documented. Each comment must start with a /** sequence in order to be recognized by the JSDoc parser. Comments beginning with /*, /***, or more than 3 stars will be ignored. This is a feature to allow you to suppress parsing of comment blocks.
```
/** This is a description of the foo function. */
function foo() {
}

```
* Special "JSDoc tags" can be used to give more information. For example, if the function is a constructor for a class, you can indicate this by adding a @constructor tag.
```
/**
 * Represents a book.
 * @constructor
 */
function Book(title, author) {
}
```
```
/**
 * Represents a book.
 * @constructor
 * @param {string} title - The title of the book.
 * @param {string} author - The author of the book.
 */
function Book(title, author) {
}
```
### Generating a website

* Once your code is commented, you can use the JSDoc 3 tool to generate an HTML website from your source files.

* By default, JSDoc uses the built-in "default" template to turn the documentation into HTML. You can edit this template to suit your own needs or create an entirely new template if that is what you prefer.

If you installed globally run:
```
jsdoc {filename}
```
* This command will create a directory named `out/` in the current working directory. Within that directory, you will find the generated HTML pages.

If you isntalled locally run:
```
npm run doc
```
