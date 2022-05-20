# keywords-provider
Serves as provider (parser) of .lex keyword files.

1. Imagine a world, full of keyword subsets for each particular language, which should be handled somehow between each other.
2. Imagine a simple naive translator serving for handling of such a subsets.
3. Now you knows everything about this repo :)

Distributed via npm, run `npm i keywords-provider` in project you want this code.

## Usage
```javascript
var KeywordsProvider = require('keywords-provider);
var r2js = new KeywordsProvider({
  folder: './keywords'
});
```

### Options
```css
@param {string} [folder=./] Folder to lookup keywords for
@param {string} [extname=.lex] Extension of keyword files
@param {string} [sep=\r\n] Keywords separator
@param {string} [delim= ] Delimiter between keyword id and its value
```

### Example .lex file for default config
```txt
KEY word
AIR plane
HOVER board
```

### KeywordsProvider interface
```java
/**
 * Applies the given config to Provider instance
 *
 * @param {Object} config @see CONFIG
 */
applyConfig: function(config)

/**
  * Initialises keyword storage from given folder
  *
  * @param {String} directory Directory to look keywords from.
  */
initKeywords: function(directory)

/**
  * Returns subset of keywords by its name.
  *
  * @param {String} subset Name of one of loaded subsets
  * @returns {Object}
  */
getKeywords: function(subset)

/**
  * Returns an actual value of keyword from a given subset by its id (key).
  *
  * @param {String} subset Name of one of loaded subsets
  * @param {String} key Id of keyword
  */
getKeyword: function(subset, key)

/**
  * Returns id (key) of keyword by its actual value in given subset.
  *
  * @param {String} keyword Actual keyword value
  * @param {String} subset Name of one of loaded subsets
*/
getKeyId: function(subsets, keyword)

/**
  * Translates the given keyword from the source subsets to the destination subset.
  *
  * @param {String} keyword Actual keyword value
  * @param {String} sourceSubset Name of source subset (one keyword came from)
  * @param {String} destinationSubset Name of target subset (one, translate keyword to)
  * @returns {String} translated keyword
  */
translate: function(keyword, sourceSubset, destinationSubset)

/**
  * Returns translation offset between two keywords.
  * As the keywords of source and target languages may have different length.
  * (they rarely don't)
  *
  * @param {String} keyword Actual keyword value
  * @param {String} sourceSubset Name of source subset (one keyword came from)
  * @param {String} destinationSubset Name of target subset (one, translate keyword to)
  * @returns {Number} count of symbols
  */
getTranslationOffset: function(keyword, sourceSubset, destinationSubset)
```
