/*
 Implements keyword providing (parsing) from the folder defined.

 Main purpose is to handle two or more keyword subsets.
 */
var fs = require('fs');
var path = require('path');

/*
 Default Config, serves for parsing of .lex files with following structure:
 KEY value\r\nHEY helue

 Real Example:
 BETTER stronger
 FASTER bigger
 OOWHOA oowhoa
 */
var CONFIG = {

    /**
     * Folder to lookup for keywords.
     * @type {String}
     */
    folder: './',

    /**
     * Extension name for keyword files.
     * @type {String}
     */
    extname: '.lex',

    /**
     * Separator between each keyword definition
     *
     * @type {String}
     */
    sep: '\r\n',

    /**
     * Delimiter to separate keyword definition and its value
     */
    delim: ' '
};

/**
 * Inverts the given object.
 * @remark Be patient, may iterate by inherited properties of object.
 *
 * @param {Object} object Object with structure (KEY: value)
 * @returns {Object} Object with inverted structure (VALUE: key)
 */
function invert(object) {
    var key;
    var dest = {};

    for (key in object) {
        dest[object[key]] = key;
    }

    return dest;
}

/**
 * Main provider object.
 *
 * @param config @see CONFIG
 * @constructor
 */
function Provider(config) {
    this.keywords = {};

    this.applyConfig(config);
    this.initKeywords(this.folder);
}

/**
 * Provider prototype.
 */
Provider.prototype = {

    /**
     * Applies the given config to Provider instance
     *
     * @param {Object} config @see CONFIG
     */
    applyConfig: function(config) {
        this.folder = config.folder || CONFIG.folder;
        this.extname = config.extname || CONFIG.extname;
        this.delim = config.delim || CONFIG.delim;
        this.sep = config.sep || CONFIG.sep;
    },

    /**
     * Initialises keyword storage from given folder
     *
     * @param {String} directory Directory to look keywords from.
     */
    initKeywords: function(directory) {
        var lexems = fs.readdirSync(directory);

        this.keywords = {};
        this.keywordMaps = {};

        lexems.forEach(function(lexDefinition) {
            if (path.extname(lexDefinition) === this.extname) {
                var lexName = path.basename(lexDefinition).split('.')[0];
                var lexFile = String(fs.readFileSync(path.join(directory, lexDefinition)));

                this.keywords[lexName] = {};

                lexFile = lexFile.split(this.sep);
                lexFile.forEach(function(lexem) {
                    var parts = lexem.split(this.delim);
                    this.keywords[lexName][parts[0]] = parts[1];
                }, this);

                this.keywordMaps[lexName] = invert(this.keywords[lexName]);
            }
        }, this);
    },

    /**
     * Returns subset of keywords by its name.
     *
     * @param {String} subset Name of one of loaded subsets
     * @returns {Object}
     */
    getKeywords: function(subset) {
        return this.keywords[subset];
    },

    /**
     * Returns an actual value of keyword from a given subset by its id (key).
     *
     * @param {String} subset Name of one of loaded subsets
     * @param {String} key Id of keyword
     */
    getKeyword: function(subset, key) {
        return this.keywords[subset][key];
    },

    /**
     * Returns id (key) of keyword by its actual value in given subset.
     *
     * @param {String} keyword Actual keyword value
     * @param {String} subset Name of one of loaded subsets
     */
    getKeyId: function(subset, keyword) {
        return this.keywordMaps[subset][keyword];
    },

    /**
     * Translates the given keyword from the source subsets to the destination subset.
     *
     * @param {String} keyword Actual keyword value
     * @param {String} sourceSubset Name of source subset (one keyword came from)
     * @param {String} destinationSubset Name of target subset (one, translate keyword to)
     * @returns {String} translated keyword
     */
    translate: function(keyword, sourceSubset, destinationSubset) {
        return this.keywords[destinationSubset][this.keywordMaps[sourceSubset][keyword]];
    },

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
    getTranslationOffset: function(keyword, sourceSubset, destinationSubset) {
        var sourceKeyword = keyword;
        var destinationKeyword = this.translate(keyword, sourceSubset, destinationSubset);

        return destinationKeyword.length - sourceKeyword.length;
    }
};

module.exports = Provider;