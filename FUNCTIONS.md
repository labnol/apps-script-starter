# Custom Functions in Google Sheets

Google Sheets has a number of built-in formula functions such as `=SUM()` that enable quick calculations on spreadsheet data. Custom functions are simply functions that you define yourself, using Apps Script. Once you've defined a custom function, you can use it anywhere in your spreadsheet, just like a built-in function.

This section shows you how to create a custom Sheet functions locally and upload it to your Apps Script project.

1. Create a new file in the function folder and append a .js extension to the file name.

2. Write the sheets function in the new file and append a JSDoc comment blocks to explain what your function will do. [See example](./functions/currency.js)

In this comment, you can identify two parts: the function description and annotations that describe the function's parameters and return type.

`@param:` You can use the @param annotation to describe each parameter passed into the function.

`@return:` You can utilize the @return annotation to describe what the function returns.

`@customfunction:` You should always add `@customfunction` in any custom function's doc comment. This annotation notifies Sheets to autocomplete your custom function just as Sheets autocomplete built-in functions when you type a function name in a cell as seen below:

Save the file. The functions file will automatically get uploaded to the Apps Script project with the comment block intact.

The comment block is required for Google Sheets to autocomplete for custom functions much like for built-in functions. As you type a function name in a cell, you will see a list of built-in and custom functions that matches what you enter.

### Guidelines for Naming custom functions

Before writing your own custom function, there are a few guidelines to know.

- The name of a custom function must be distinct from the names of built-in functions like SUM().
- The name of a custom function cannot end with an underscore (\_), which denotes a private function in Apps Script.
- The name of a custom function must be declared with the syntax function myFunction(), not var myFunction = new Function().
- Capitalization does not matter, although the names of spreadsheet functions are traditionally uppercase.
