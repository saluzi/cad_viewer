var LMV =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/file-loaders/workers/MainWorker-web.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/isomorphic-ws/browser.js":
/*!***********************************************!*\
  !*** ./node_modules/isomorphic-ws/browser.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {// https://github.com/maxogden/websocket-stream/blob/48dc3ddf943e5ada668c31ccd94e9186f02fafbd/ws-fallback.js

var ws = null

if (typeof WebSocket !== 'undefined') {
  ws = WebSocket
} else if (typeof MozWebSocket !== 'undefined') {
  ws = MozWebSocket
} else if (typeof global !== 'undefined') {
  ws = global.WebSocket || global.MozWebSocket
} else if (typeof window !== 'undefined') {
  ws = window.WebSocket || window.MozWebSocket
} else if (typeof self !== 'undefined') {
  ws = self.WebSocket || self.MozWebSocket
}

module.exports = ws

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/node-libs-browser/mock/empty.js":
/*!******************************************************!*\
  !*** ./node_modules/node-libs-browser/mock/empty.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/pako/index.js":
/*!************************************!*\
  !*** ./node_modules/pako/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Top level file is just a mixin of submodules & constants


var assign    = __webpack_require__(/*! ./lib/utils/common */ "./node_modules/pako/lib/utils/common.js").assign;

var deflate   = __webpack_require__(/*! ./lib/deflate */ "./node_modules/pako/lib/deflate.js");
var inflate   = __webpack_require__(/*! ./lib/inflate */ "./node_modules/pako/lib/inflate.js");
var constants = __webpack_require__(/*! ./lib/zlib/constants */ "./node_modules/pako/lib/zlib/constants.js");

var pako = {};

assign(pako, deflate, inflate, constants);

module.exports = pako;


/***/ }),

/***/ "./node_modules/pako/lib/deflate.js":
/*!******************************************!*\
  !*** ./node_modules/pako/lib/deflate.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



var zlib_deflate = __webpack_require__(/*! ./zlib/deflate */ "./node_modules/pako/lib/zlib/deflate.js");
var utils        = __webpack_require__(/*! ./utils/common */ "./node_modules/pako/lib/utils/common.js");
var strings      = __webpack_require__(/*! ./utils/strings */ "./node_modules/pako/lib/utils/strings.js");
var msg          = __webpack_require__(/*! ./zlib/messages */ "./node_modules/pako/lib/zlib/messages.js");
var ZStream      = __webpack_require__(/*! ./zlib/zstream */ "./node_modules/pako/lib/zlib/zstream.js");

var toString = Object.prototype.toString;

/* Public constants ==========================================================*/
/* ===========================================================================*/

var Z_NO_FLUSH      = 0;
var Z_FINISH        = 4;

var Z_OK            = 0;
var Z_STREAM_END    = 1;
var Z_SYNC_FLUSH    = 2;

var Z_DEFAULT_COMPRESSION = -1;

var Z_DEFAULT_STRATEGY    = 0;

var Z_DEFLATED  = 8;

/* ===========================================================================*/


/**
 * class Deflate
 *
 * Generic JS-style wrapper for zlib calls. If you don't need
 * streaming behaviour - use more simple functions: [[deflate]],
 * [[deflateRaw]] and [[gzip]].
 **/

/* internal
 * Deflate.chunks -> Array
 *
 * Chunks of output data, if [[Deflate#onData]] not overridden.
 **/

/**
 * Deflate.result -> Uint8Array|Array
 *
 * Compressed result, generated by default [[Deflate#onData]]
 * and [[Deflate#onEnd]] handlers. Filled after you push last chunk
 * (call [[Deflate#push]] with `Z_FINISH` / `true` param)  or if you
 * push a chunk with explicit flush (call [[Deflate#push]] with
 * `Z_SYNC_FLUSH` param).
 **/

/**
 * Deflate.err -> Number
 *
 * Error code after deflate finished. 0 (Z_OK) on success.
 * You will not need it in real life, because deflate errors
 * are possible only on wrong options or bad `onData` / `onEnd`
 * custom handlers.
 **/

/**
 * Deflate.msg -> String
 *
 * Error message, if [[Deflate.err]] != 0
 **/


/**
 * new Deflate(options)
 * - options (Object): zlib deflate options.
 *
 * Creates new deflator instance with specified params. Throws exception
 * on bad params. Supported options:
 *
 * - `level`
 * - `windowBits`
 * - `memLevel`
 * - `strategy`
 * - `dictionary`
 *
 * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
 * for more information on these.
 *
 * Additional options, for internal needs:
 *
 * - `chunkSize` - size of generated data chunks (16K by default)
 * - `raw` (Boolean) - do raw deflate
 * - `gzip` (Boolean) - create gzip wrapper
 * - `to` (String) - if equal to 'string', then result will be "binary string"
 *    (each char code [0..255])
 * - `header` (Object) - custom header for gzip
 *   - `text` (Boolean) - true if compressed data believed to be text
 *   - `time` (Number) - modification time, unix timestamp
 *   - `os` (Number) - operation system code
 *   - `extra` (Array) - array of bytes with extra data (max 65536)
 *   - `name` (String) - file name (binary string)
 *   - `comment` (String) - comment (binary string)
 *   - `hcrc` (Boolean) - true if header crc should be added
 *
 * ##### Example:
 *
 * ```javascript
 * var pako = require('pako')
 *   , chunk1 = Uint8Array([1,2,3,4,5,6,7,8,9])
 *   , chunk2 = Uint8Array([10,11,12,13,14,15,16,17,18,19]);
 *
 * var deflate = new pako.Deflate({ level: 3});
 *
 * deflate.push(chunk1, false);
 * deflate.push(chunk2, true);  // true -> last chunk
 *
 * if (deflate.err) { throw new Error(deflate.err); }
 *
 * console.log(deflate.result);
 * ```
 **/
function Deflate(options) {
  if (!(this instanceof Deflate)) return new Deflate(options);

  this.options = utils.assign({
    level: Z_DEFAULT_COMPRESSION,
    method: Z_DEFLATED,
    chunkSize: 16384,
    windowBits: 15,
    memLevel: 8,
    strategy: Z_DEFAULT_STRATEGY,
    to: ''
  }, options || {});

  var opt = this.options;

  if (opt.raw && (opt.windowBits > 0)) {
    opt.windowBits = -opt.windowBits;
  }

  else if (opt.gzip && (opt.windowBits > 0) && (opt.windowBits < 16)) {
    opt.windowBits += 16;
  }

  this.err    = 0;      // error code, if happens (0 = Z_OK)
  this.msg    = '';     // error message
  this.ended  = false;  // used to avoid multiple onEnd() calls
  this.chunks = [];     // chunks of compressed data

  this.strm = new ZStream();
  this.strm.avail_out = 0;

  var status = zlib_deflate.deflateInit2(
    this.strm,
    opt.level,
    opt.method,
    opt.windowBits,
    opt.memLevel,
    opt.strategy
  );

  if (status !== Z_OK) {
    throw new Error(msg[status]);
  }

  if (opt.header) {
    zlib_deflate.deflateSetHeader(this.strm, opt.header);
  }

  if (opt.dictionary) {
    var dict;
    // Convert data if needed
    if (typeof opt.dictionary === 'string') {
      // If we need to compress text, change encoding to utf8.
      dict = strings.string2buf(opt.dictionary);
    } else if (toString.call(opt.dictionary) === '[object ArrayBuffer]') {
      dict = new Uint8Array(opt.dictionary);
    } else {
      dict = opt.dictionary;
    }

    status = zlib_deflate.deflateSetDictionary(this.strm, dict);

    if (status !== Z_OK) {
      throw new Error(msg[status]);
    }

    this._dict_set = true;
  }
}

/**
 * Deflate#push(data[, mode]) -> Boolean
 * - data (Uint8Array|Array|ArrayBuffer|String): input data. Strings will be
 *   converted to utf8 byte sequence.
 * - mode (Number|Boolean): 0..6 for corresponding Z_NO_FLUSH..Z_TREE modes.
 *   See constants. Skipped or `false` means Z_NO_FLUSH, `true` means Z_FINISH.
 *
 * Sends input data to deflate pipe, generating [[Deflate#onData]] calls with
 * new compressed chunks. Returns `true` on success. The last data block must have
 * mode Z_FINISH (or `true`). That will flush internal pending buffers and call
 * [[Deflate#onEnd]]. For interim explicit flushes (without ending the stream) you
 * can use mode Z_SYNC_FLUSH, keeping the compression context.
 *
 * On fail call [[Deflate#onEnd]] with error code and return false.
 *
 * We strongly recommend to use `Uint8Array` on input for best speed (output
 * array format is detected automatically). Also, don't skip last param and always
 * use the same type in your code (boolean or number). That will improve JS speed.
 *
 * For regular `Array`-s make sure all elements are [0..255].
 *
 * ##### Example
 *
 * ```javascript
 * push(chunk, false); // push one of data chunks
 * ...
 * push(chunk, true);  // push last chunk
 * ```
 **/
Deflate.prototype.push = function (data, mode) {
  var strm = this.strm;
  var chunkSize = this.options.chunkSize;
  var status, _mode;

  if (this.ended) { return false; }

  _mode = (mode === ~~mode) ? mode : ((mode === true) ? Z_FINISH : Z_NO_FLUSH);

  // Convert data if needed
  if (typeof data === 'string') {
    // If we need to compress text, change encoding to utf8.
    strm.input = strings.string2buf(data);
  } else if (toString.call(data) === '[object ArrayBuffer]') {
    strm.input = new Uint8Array(data);
  } else {
    strm.input = data;
  }

  strm.next_in = 0;
  strm.avail_in = strm.input.length;

  do {
    if (strm.avail_out === 0) {
      strm.output = new utils.Buf8(chunkSize);
      strm.next_out = 0;
      strm.avail_out = chunkSize;
    }
    status = zlib_deflate.deflate(strm, _mode);    /* no bad return value */

    if (status !== Z_STREAM_END && status !== Z_OK) {
      this.onEnd(status);
      this.ended = true;
      return false;
    }
    if (strm.avail_out === 0 || (strm.avail_in === 0 && (_mode === Z_FINISH || _mode === Z_SYNC_FLUSH))) {
      if (this.options.to === 'string') {
        this.onData(strings.buf2binstring(utils.shrinkBuf(strm.output, strm.next_out)));
      } else {
        this.onData(utils.shrinkBuf(strm.output, strm.next_out));
      }
    }
  } while ((strm.avail_in > 0 || strm.avail_out === 0) && status !== Z_STREAM_END);

  // Finalize on the last chunk.
  if (_mode === Z_FINISH) {
    status = zlib_deflate.deflateEnd(this.strm);
    this.onEnd(status);
    this.ended = true;
    return status === Z_OK;
  }

  // callback interim results if Z_SYNC_FLUSH.
  if (_mode === Z_SYNC_FLUSH) {
    this.onEnd(Z_OK);
    strm.avail_out = 0;
    return true;
  }

  return true;
};


/**
 * Deflate#onData(chunk) -> Void
 * - chunk (Uint8Array|Array|String): output data. Type of array depends
 *   on js engine support. When string output requested, each chunk
 *   will be string.
 *
 * By default, stores data blocks in `chunks[]` property and glue
 * those in `onEnd`. Override this handler, if you need another behaviour.
 **/
Deflate.prototype.onData = function (chunk) {
  this.chunks.push(chunk);
};


/**
 * Deflate#onEnd(status) -> Void
 * - status (Number): deflate status. 0 (Z_OK) on success,
 *   other if not.
 *
 * Called once after you tell deflate that the input stream is
 * complete (Z_FINISH) or should be flushed (Z_SYNC_FLUSH)
 * or if an error happened. By default - join collected chunks,
 * free memory and fill `results` / `err` properties.
 **/
Deflate.prototype.onEnd = function (status) {
  // On success - join
  if (status === Z_OK) {
    if (this.options.to === 'string') {
      this.result = this.chunks.join('');
    } else {
      this.result = utils.flattenChunks(this.chunks);
    }
  }
  this.chunks = [];
  this.err = status;
  this.msg = this.strm.msg;
};


/**
 * deflate(data[, options]) -> Uint8Array|Array|String
 * - data (Uint8Array|Array|String): input data to compress.
 * - options (Object): zlib deflate options.
 *
 * Compress `data` with deflate algorithm and `options`.
 *
 * Supported options are:
 *
 * - level
 * - windowBits
 * - memLevel
 * - strategy
 * - dictionary
 *
 * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
 * for more information on these.
 *
 * Sugar (options):
 *
 * - `raw` (Boolean) - say that we work with raw stream, if you don't wish to specify
 *   negative windowBits implicitly.
 * - `to` (String) - if equal to 'string', then result will be "binary string"
 *    (each char code [0..255])
 *
 * ##### Example:
 *
 * ```javascript
 * var pako = require('pako')
 *   , data = Uint8Array([1,2,3,4,5,6,7,8,9]);
 *
 * console.log(pako.deflate(data));
 * ```
 **/
function deflate(input, options) {
  var deflator = new Deflate(options);

  deflator.push(input, true);

  // That will never happens, if you don't cheat with options :)
  if (deflator.err) { throw deflator.msg || msg[deflator.err]; }

  return deflator.result;
}


/**
 * deflateRaw(data[, options]) -> Uint8Array|Array|String
 * - data (Uint8Array|Array|String): input data to compress.
 * - options (Object): zlib deflate options.
 *
 * The same as [[deflate]], but creates raw data, without wrapper
 * (header and adler32 crc).
 **/
function deflateRaw(input, options) {
  options = options || {};
  options.raw = true;
  return deflate(input, options);
}


/**
 * gzip(data[, options]) -> Uint8Array|Array|String
 * - data (Uint8Array|Array|String): input data to compress.
 * - options (Object): zlib deflate options.
 *
 * The same as [[deflate]], but create gzip wrapper instead of
 * deflate one.
 **/
function gzip(input, options) {
  options = options || {};
  options.gzip = true;
  return deflate(input, options);
}


exports.Deflate = Deflate;
exports.deflate = deflate;
exports.deflateRaw = deflateRaw;
exports.gzip = gzip;


/***/ }),

/***/ "./node_modules/pako/lib/inflate.js":
/*!******************************************!*\
  !*** ./node_modules/pako/lib/inflate.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



var zlib_inflate = __webpack_require__(/*! ./zlib/inflate */ "./node_modules/pako/lib/zlib/inflate.js");
var utils        = __webpack_require__(/*! ./utils/common */ "./node_modules/pako/lib/utils/common.js");
var strings      = __webpack_require__(/*! ./utils/strings */ "./node_modules/pako/lib/utils/strings.js");
var c            = __webpack_require__(/*! ./zlib/constants */ "./node_modules/pako/lib/zlib/constants.js");
var msg          = __webpack_require__(/*! ./zlib/messages */ "./node_modules/pako/lib/zlib/messages.js");
var ZStream      = __webpack_require__(/*! ./zlib/zstream */ "./node_modules/pako/lib/zlib/zstream.js");
var GZheader     = __webpack_require__(/*! ./zlib/gzheader */ "./node_modules/pako/lib/zlib/gzheader.js");

var toString = Object.prototype.toString;

/**
 * class Inflate
 *
 * Generic JS-style wrapper for zlib calls. If you don't need
 * streaming behaviour - use more simple functions: [[inflate]]
 * and [[inflateRaw]].
 **/

/* internal
 * inflate.chunks -> Array
 *
 * Chunks of output data, if [[Inflate#onData]] not overridden.
 **/

/**
 * Inflate.result -> Uint8Array|Array|String
 *
 * Uncompressed result, generated by default [[Inflate#onData]]
 * and [[Inflate#onEnd]] handlers. Filled after you push last chunk
 * (call [[Inflate#push]] with `Z_FINISH` / `true` param) or if you
 * push a chunk with explicit flush (call [[Inflate#push]] with
 * `Z_SYNC_FLUSH` param).
 **/

/**
 * Inflate.err -> Number
 *
 * Error code after inflate finished. 0 (Z_OK) on success.
 * Should be checked if broken data possible.
 **/

/**
 * Inflate.msg -> String
 *
 * Error message, if [[Inflate.err]] != 0
 **/


/**
 * new Inflate(options)
 * - options (Object): zlib inflate options.
 *
 * Creates new inflator instance with specified params. Throws exception
 * on bad params. Supported options:
 *
 * - `windowBits`
 * - `dictionary`
 *
 * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
 * for more information on these.
 *
 * Additional options, for internal needs:
 *
 * - `chunkSize` - size of generated data chunks (16K by default)
 * - `raw` (Boolean) - do raw inflate
 * - `to` (String) - if equal to 'string', then result will be converted
 *   from utf8 to utf16 (javascript) string. When string output requested,
 *   chunk length can differ from `chunkSize`, depending on content.
 *
 * By default, when no options set, autodetect deflate/gzip data format via
 * wrapper header.
 *
 * ##### Example:
 *
 * ```javascript
 * var pako = require('pako')
 *   , chunk1 = Uint8Array([1,2,3,4,5,6,7,8,9])
 *   , chunk2 = Uint8Array([10,11,12,13,14,15,16,17,18,19]);
 *
 * var inflate = new pako.Inflate({ level: 3});
 *
 * inflate.push(chunk1, false);
 * inflate.push(chunk2, true);  // true -> last chunk
 *
 * if (inflate.err) { throw new Error(inflate.err); }
 *
 * console.log(inflate.result);
 * ```
 **/
function Inflate(options) {
  if (!(this instanceof Inflate)) return new Inflate(options);

  this.options = utils.assign({
    chunkSize: 16384,
    windowBits: 0,
    to: ''
  }, options || {});

  var opt = this.options;

  // Force window size for `raw` data, if not set directly,
  // because we have no header for autodetect.
  if (opt.raw && (opt.windowBits >= 0) && (opt.windowBits < 16)) {
    opt.windowBits = -opt.windowBits;
    if (opt.windowBits === 0) { opt.windowBits = -15; }
  }

  // If `windowBits` not defined (and mode not raw) - set autodetect flag for gzip/deflate
  if ((opt.windowBits >= 0) && (opt.windowBits < 16) &&
      !(options && options.windowBits)) {
    opt.windowBits += 32;
  }

  // Gzip header has no info about windows size, we can do autodetect only
  // for deflate. So, if window size not set, force it to max when gzip possible
  if ((opt.windowBits > 15) && (opt.windowBits < 48)) {
    // bit 3 (16) -> gzipped data
    // bit 4 (32) -> autodetect gzip/deflate
    if ((opt.windowBits & 15) === 0) {
      opt.windowBits |= 15;
    }
  }

  this.err    = 0;      // error code, if happens (0 = Z_OK)
  this.msg    = '';     // error message
  this.ended  = false;  // used to avoid multiple onEnd() calls
  this.chunks = [];     // chunks of compressed data

  this.strm   = new ZStream();
  this.strm.avail_out = 0;

  var status  = zlib_inflate.inflateInit2(
    this.strm,
    opt.windowBits
  );

  if (status !== c.Z_OK) {
    throw new Error(msg[status]);
  }

  this.header = new GZheader();

  zlib_inflate.inflateGetHeader(this.strm, this.header);
}

/**
 * Inflate#push(data[, mode]) -> Boolean
 * - data (Uint8Array|Array|ArrayBuffer|String): input data
 * - mode (Number|Boolean): 0..6 for corresponding Z_NO_FLUSH..Z_TREE modes.
 *   See constants. Skipped or `false` means Z_NO_FLUSH, `true` means Z_FINISH.
 *
 * Sends input data to inflate pipe, generating [[Inflate#onData]] calls with
 * new output chunks. Returns `true` on success. The last data block must have
 * mode Z_FINISH (or `true`). That will flush internal pending buffers and call
 * [[Inflate#onEnd]]. For interim explicit flushes (without ending the stream) you
 * can use mode Z_SYNC_FLUSH, keeping the decompression context.
 *
 * On fail call [[Inflate#onEnd]] with error code and return false.
 *
 * We strongly recommend to use `Uint8Array` on input for best speed (output
 * format is detected automatically). Also, don't skip last param and always
 * use the same type in your code (boolean or number). That will improve JS speed.
 *
 * For regular `Array`-s make sure all elements are [0..255].
 *
 * ##### Example
 *
 * ```javascript
 * push(chunk, false); // push one of data chunks
 * ...
 * push(chunk, true);  // push last chunk
 * ```
 **/
Inflate.prototype.push = function (data, mode) {
  var strm = this.strm;
  var chunkSize = this.options.chunkSize;
  var dictionary = this.options.dictionary;
  var status, _mode;
  var next_out_utf8, tail, utf8str;
  var dict;

  // Flag to properly process Z_BUF_ERROR on testing inflate call
  // when we check that all output data was flushed.
  var allowBufError = false;

  if (this.ended) { return false; }
  _mode = (mode === ~~mode) ? mode : ((mode === true) ? c.Z_FINISH : c.Z_NO_FLUSH);

  // Convert data if needed
  if (typeof data === 'string') {
    // Only binary strings can be decompressed on practice
    strm.input = strings.binstring2buf(data);
  } else if (toString.call(data) === '[object ArrayBuffer]') {
    strm.input = new Uint8Array(data);
  } else {
    strm.input = data;
  }

  strm.next_in = 0;
  strm.avail_in = strm.input.length;

  do {
    if (strm.avail_out === 0) {
      strm.output = new utils.Buf8(chunkSize);
      strm.next_out = 0;
      strm.avail_out = chunkSize;
    }

    status = zlib_inflate.inflate(strm, c.Z_NO_FLUSH);    /* no bad return value */

    if (status === c.Z_NEED_DICT && dictionary) {
      // Convert data if needed
      if (typeof dictionary === 'string') {
        dict = strings.string2buf(dictionary);
      } else if (toString.call(dictionary) === '[object ArrayBuffer]') {
        dict = new Uint8Array(dictionary);
      } else {
        dict = dictionary;
      }

      status = zlib_inflate.inflateSetDictionary(this.strm, dict);

    }

    if (status === c.Z_BUF_ERROR && allowBufError === true) {
      status = c.Z_OK;
      allowBufError = false;
    }

    if (status !== c.Z_STREAM_END && status !== c.Z_OK) {
      this.onEnd(status);
      this.ended = true;
      return false;
    }

    if (strm.next_out) {
      if (strm.avail_out === 0 || status === c.Z_STREAM_END || (strm.avail_in === 0 && (_mode === c.Z_FINISH || _mode === c.Z_SYNC_FLUSH))) {

        if (this.options.to === 'string') {

          next_out_utf8 = strings.utf8border(strm.output, strm.next_out);

          tail = strm.next_out - next_out_utf8;
          utf8str = strings.buf2string(strm.output, next_out_utf8);

          // move tail
          strm.next_out = tail;
          strm.avail_out = chunkSize - tail;
          if (tail) { utils.arraySet(strm.output, strm.output, next_out_utf8, tail, 0); }

          this.onData(utf8str);

        } else {
          this.onData(utils.shrinkBuf(strm.output, strm.next_out));
        }
      }
    }

    // When no more input data, we should check that internal inflate buffers
    // are flushed. The only way to do it when avail_out = 0 - run one more
    // inflate pass. But if output data not exists, inflate return Z_BUF_ERROR.
    // Here we set flag to process this error properly.
    //
    // NOTE. Deflate does not return error in this case and does not needs such
    // logic.
    if (strm.avail_in === 0 && strm.avail_out === 0) {
      allowBufError = true;
    }

  } while ((strm.avail_in > 0 || strm.avail_out === 0) && status !== c.Z_STREAM_END);

  if (status === c.Z_STREAM_END) {
    _mode = c.Z_FINISH;
  }

  // Finalize on the last chunk.
  if (_mode === c.Z_FINISH) {
    status = zlib_inflate.inflateEnd(this.strm);
    this.onEnd(status);
    this.ended = true;
    return status === c.Z_OK;
  }

  // callback interim results if Z_SYNC_FLUSH.
  if (_mode === c.Z_SYNC_FLUSH) {
    this.onEnd(c.Z_OK);
    strm.avail_out = 0;
    return true;
  }

  return true;
};


/**
 * Inflate#onData(chunk) -> Void
 * - chunk (Uint8Array|Array|String): output data. Type of array depends
 *   on js engine support. When string output requested, each chunk
 *   will be string.
 *
 * By default, stores data blocks in `chunks[]` property and glue
 * those in `onEnd`. Override this handler, if you need another behaviour.
 **/
Inflate.prototype.onData = function (chunk) {
  this.chunks.push(chunk);
};


/**
 * Inflate#onEnd(status) -> Void
 * - status (Number): inflate status. 0 (Z_OK) on success,
 *   other if not.
 *
 * Called either after you tell inflate that the input stream is
 * complete (Z_FINISH) or should be flushed (Z_SYNC_FLUSH)
 * or if an error happened. By default - join collected chunks,
 * free memory and fill `results` / `err` properties.
 **/
Inflate.prototype.onEnd = function (status) {
  // On success - join
  if (status === c.Z_OK) {
    if (this.options.to === 'string') {
      // Glue & convert here, until we teach pako to send
      // utf8 aligned strings to onData
      this.result = this.chunks.join('');
    } else {
      this.result = utils.flattenChunks(this.chunks);
    }
  }
  this.chunks = [];
  this.err = status;
  this.msg = this.strm.msg;
};


/**
 * inflate(data[, options]) -> Uint8Array|Array|String
 * - data (Uint8Array|Array|String): input data to decompress.
 * - options (Object): zlib inflate options.
 *
 * Decompress `data` with inflate/ungzip and `options`. Autodetect
 * format via wrapper header by default. That's why we don't provide
 * separate `ungzip` method.
 *
 * Supported options are:
 *
 * - windowBits
 *
 * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
 * for more information.
 *
 * Sugar (options):
 *
 * - `raw` (Boolean) - say that we work with raw stream, if you don't wish to specify
 *   negative windowBits implicitly.
 * - `to` (String) - if equal to 'string', then result will be converted
 *   from utf8 to utf16 (javascript) string. When string output requested,
 *   chunk length can differ from `chunkSize`, depending on content.
 *
 *
 * ##### Example:
 *
 * ```javascript
 * var pako = require('pako')
 *   , input = pako.deflate([1,2,3,4,5,6,7,8,9])
 *   , output;
 *
 * try {
 *   output = pako.inflate(input);
 * } catch (err)
 *   console.log(err);
 * }
 * ```
 **/
function inflate(input, options) {
  var inflator = new Inflate(options);

  inflator.push(input, true);

  // That will never happens, if you don't cheat with options :)
  if (inflator.err) { throw inflator.msg || msg[inflator.err]; }

  return inflator.result;
}


/**
 * inflateRaw(data[, options]) -> Uint8Array|Array|String
 * - data (Uint8Array|Array|String): input data to decompress.
 * - options (Object): zlib inflate options.
 *
 * The same as [[inflate]], but creates raw data, without wrapper
 * (header and adler32 crc).
 **/
function inflateRaw(input, options) {
  options = options || {};
  options.raw = true;
  return inflate(input, options);
}


/**
 * ungzip(data[, options]) -> Uint8Array|Array|String
 * - data (Uint8Array|Array|String): input data to decompress.
 * - options (Object): zlib inflate options.
 *
 * Just shortcut to [[inflate]], because it autodetects format
 * by header.content. Done for convenience.
 **/


exports.Inflate = Inflate;
exports.inflate = inflate;
exports.inflateRaw = inflateRaw;
exports.ungzip  = inflate;


/***/ }),

/***/ "./node_modules/pako/lib/utils/common.js":
/*!***********************************************!*\
  !*** ./node_modules/pako/lib/utils/common.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



var TYPED_OK =  (typeof Uint8Array !== 'undefined') &&
                (typeof Uint16Array !== 'undefined') &&
                (typeof Int32Array !== 'undefined');

function _has(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

exports.assign = function (obj /*from1, from2, from3, ...*/) {
  var sources = Array.prototype.slice.call(arguments, 1);
  while (sources.length) {
    var source = sources.shift();
    if (!source) { continue; }

    if (typeof source !== 'object') {
      throw new TypeError(source + 'must be non-object');
    }

    for (var p in source) {
      if (_has(source, p)) {
        obj[p] = source[p];
      }
    }
  }

  return obj;
};


// reduce buffer size, avoiding mem copy
exports.shrinkBuf = function (buf, size) {
  if (buf.length === size) { return buf; }
  if (buf.subarray) { return buf.subarray(0, size); }
  buf.length = size;
  return buf;
};


var fnTyped = {
  arraySet: function (dest, src, src_offs, len, dest_offs) {
    if (src.subarray && dest.subarray) {
      dest.set(src.subarray(src_offs, src_offs + len), dest_offs);
      return;
    }
    // Fallback to ordinary array
    for (var i = 0; i < len; i++) {
      dest[dest_offs + i] = src[src_offs + i];
    }
  },
  // Join array of chunks to single array.
  flattenChunks: function (chunks) {
    var i, l, len, pos, chunk, result;

    // calculate data length
    len = 0;
    for (i = 0, l = chunks.length; i < l; i++) {
      len += chunks[i].length;
    }

    // join chunks
    result = new Uint8Array(len);
    pos = 0;
    for (i = 0, l = chunks.length; i < l; i++) {
      chunk = chunks[i];
      result.set(chunk, pos);
      pos += chunk.length;
    }

    return result;
  }
};

var fnUntyped = {
  arraySet: function (dest, src, src_offs, len, dest_offs) {
    for (var i = 0; i < len; i++) {
      dest[dest_offs + i] = src[src_offs + i];
    }
  },
  // Join array of chunks to single array.
  flattenChunks: function (chunks) {
    return [].concat.apply([], chunks);
  }
};


// Enable/Disable typed arrays use, for testing
//
exports.setTyped = function (on) {
  if (on) {
    exports.Buf8  = Uint8Array;
    exports.Buf16 = Uint16Array;
    exports.Buf32 = Int32Array;
    exports.assign(exports, fnTyped);
  } else {
    exports.Buf8  = Array;
    exports.Buf16 = Array;
    exports.Buf32 = Array;
    exports.assign(exports, fnUntyped);
  }
};

exports.setTyped(TYPED_OK);


/***/ }),

/***/ "./node_modules/pako/lib/utils/strings.js":
/*!************************************************!*\
  !*** ./node_modules/pako/lib/utils/strings.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// String encode/decode helpers



var utils = __webpack_require__(/*! ./common */ "./node_modules/pako/lib/utils/common.js");


// Quick check if we can use fast array to bin string conversion
//
// - apply(Array) can fail on Android 2.2
// - apply(Uint8Array) can fail on iOS 5.1 Safari
//
var STR_APPLY_OK = true;
var STR_APPLY_UIA_OK = true;

try { String.fromCharCode.apply(null, [ 0 ]); } catch (__) { STR_APPLY_OK = false; }
try { String.fromCharCode.apply(null, new Uint8Array(1)); } catch (__) { STR_APPLY_UIA_OK = false; }


// Table with utf8 lengths (calculated by first byte of sequence)
// Note, that 5 & 6-byte values and some 4-byte values can not be represented in JS,
// because max possible codepoint is 0x10ffff
var _utf8len = new utils.Buf8(256);
for (var q = 0; q < 256; q++) {
  _utf8len[q] = (q >= 252 ? 6 : q >= 248 ? 5 : q >= 240 ? 4 : q >= 224 ? 3 : q >= 192 ? 2 : 1);
}
_utf8len[254] = _utf8len[254] = 1; // Invalid sequence start


// convert string to array (typed, when possible)
exports.string2buf = function (str) {
  var buf, c, c2, m_pos, i, str_len = str.length, buf_len = 0;

  // count binary size
  for (m_pos = 0; m_pos < str_len; m_pos++) {
    c = str.charCodeAt(m_pos);
    if ((c & 0xfc00) === 0xd800 && (m_pos + 1 < str_len)) {
      c2 = str.charCodeAt(m_pos + 1);
      if ((c2 & 0xfc00) === 0xdc00) {
        c = 0x10000 + ((c - 0xd800) << 10) + (c2 - 0xdc00);
        m_pos++;
      }
    }
    buf_len += c < 0x80 ? 1 : c < 0x800 ? 2 : c < 0x10000 ? 3 : 4;
  }

  // allocate buffer
  buf = new utils.Buf8(buf_len);

  // convert
  for (i = 0, m_pos = 0; i < buf_len; m_pos++) {
    c = str.charCodeAt(m_pos);
    if ((c & 0xfc00) === 0xd800 && (m_pos + 1 < str_len)) {
      c2 = str.charCodeAt(m_pos + 1);
      if ((c2 & 0xfc00) === 0xdc00) {
        c = 0x10000 + ((c - 0xd800) << 10) + (c2 - 0xdc00);
        m_pos++;
      }
    }
    if (c < 0x80) {
      /* one byte */
      buf[i++] = c;
    } else if (c < 0x800) {
      /* two bytes */
      buf[i++] = 0xC0 | (c >>> 6);
      buf[i++] = 0x80 | (c & 0x3f);
    } else if (c < 0x10000) {
      /* three bytes */
      buf[i++] = 0xE0 | (c >>> 12);
      buf[i++] = 0x80 | (c >>> 6 & 0x3f);
      buf[i++] = 0x80 | (c & 0x3f);
    } else {
      /* four bytes */
      buf[i++] = 0xf0 | (c >>> 18);
      buf[i++] = 0x80 | (c >>> 12 & 0x3f);
      buf[i++] = 0x80 | (c >>> 6 & 0x3f);
      buf[i++] = 0x80 | (c & 0x3f);
    }
  }

  return buf;
};

// Helper (used in 2 places)
function buf2binstring(buf, len) {
  // use fallback for big arrays to avoid stack overflow
  if (len < 65537) {
    if ((buf.subarray && STR_APPLY_UIA_OK) || (!buf.subarray && STR_APPLY_OK)) {
      return String.fromCharCode.apply(null, utils.shrinkBuf(buf, len));
    }
  }

  var result = '';
  for (var i = 0; i < len; i++) {
    result += String.fromCharCode(buf[i]);
  }
  return result;
}


// Convert byte array to binary string
exports.buf2binstring = function (buf) {
  return buf2binstring(buf, buf.length);
};


// Convert binary string (typed, when possible)
exports.binstring2buf = function (str) {
  var buf = new utils.Buf8(str.length);
  for (var i = 0, len = buf.length; i < len; i++) {
    buf[i] = str.charCodeAt(i);
  }
  return buf;
};


// convert array to string
exports.buf2string = function (buf, max) {
  var i, out, c, c_len;
  var len = max || buf.length;

  // Reserve max possible length (2 words per char)
  // NB: by unknown reasons, Array is significantly faster for
  //     String.fromCharCode.apply than Uint16Array.
  var utf16buf = new Array(len * 2);

  for (out = 0, i = 0; i < len;) {
    c = buf[i++];
    // quick process ascii
    if (c < 0x80) { utf16buf[out++] = c; continue; }

    c_len = _utf8len[c];
    // skip 5 & 6 byte codes
    if (c_len > 4) { utf16buf[out++] = 0xfffd; i += c_len - 1; continue; }

    // apply mask on first byte
    c &= c_len === 2 ? 0x1f : c_len === 3 ? 0x0f : 0x07;
    // join the rest
    while (c_len > 1 && i < len) {
      c = (c << 6) | (buf[i++] & 0x3f);
      c_len--;
    }

    // terminated by end of string?
    if (c_len > 1) { utf16buf[out++] = 0xfffd; continue; }

    if (c < 0x10000) {
      utf16buf[out++] = c;
    } else {
      c -= 0x10000;
      utf16buf[out++] = 0xd800 | ((c >> 10) & 0x3ff);
      utf16buf[out++] = 0xdc00 | (c & 0x3ff);
    }
  }

  return buf2binstring(utf16buf, out);
};


// Calculate max possible position in utf8 buffer,
// that will not break sequence. If that's not possible
// - (very small limits) return max size as is.
//
// buf[] - utf8 bytes array
// max   - length limit (mandatory);
exports.utf8border = function (buf, max) {
  var pos;

  max = max || buf.length;
  if (max > buf.length) { max = buf.length; }

  // go back from last position, until start of sequence found
  pos = max - 1;
  while (pos >= 0 && (buf[pos] & 0xC0) === 0x80) { pos--; }

  // Very small and broken sequence,
  // return max, because we should return something anyway.
  if (pos < 0) { return max; }

  // If we came to start of buffer - that means buffer is too small,
  // return max too.
  if (pos === 0) { return max; }

  return (pos + _utf8len[buf[pos]] > max) ? pos : max;
};


/***/ }),

/***/ "./node_modules/pako/lib/zlib/adler32.js":
/*!***********************************************!*\
  !*** ./node_modules/pako/lib/zlib/adler32.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Note: adler32 takes 12% for level 0 and 2% for level 6.
// It isn't worth it to make additional optimizations as in original.
// Small size is preferable.

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

function adler32(adler, buf, len, pos) {
  var s1 = (adler & 0xffff) |0,
      s2 = ((adler >>> 16) & 0xffff) |0,
      n = 0;

  while (len !== 0) {
    // Set limit ~ twice less than 5552, to keep
    // s2 in 31-bits, because we force signed ints.
    // in other case %= will fail.
    n = len > 2000 ? 2000 : len;
    len -= n;

    do {
      s1 = (s1 + buf[pos++]) |0;
      s2 = (s2 + s1) |0;
    } while (--n);

    s1 %= 65521;
    s2 %= 65521;
  }

  return (s1 | (s2 << 16)) |0;
}


module.exports = adler32;


/***/ }),

/***/ "./node_modules/pako/lib/zlib/constants.js":
/*!*************************************************!*\
  !*** ./node_modules/pako/lib/zlib/constants.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

module.exports = {

  /* Allowed flush values; see deflate() and inflate() below for details */
  Z_NO_FLUSH:         0,
  Z_PARTIAL_FLUSH:    1,
  Z_SYNC_FLUSH:       2,
  Z_FULL_FLUSH:       3,
  Z_FINISH:           4,
  Z_BLOCK:            5,
  Z_TREES:            6,

  /* Return codes for the compression/decompression functions. Negative values
  * are errors, positive values are used for special but normal events.
  */
  Z_OK:               0,
  Z_STREAM_END:       1,
  Z_NEED_DICT:        2,
  Z_ERRNO:           -1,
  Z_STREAM_ERROR:    -2,
  Z_DATA_ERROR:      -3,
  //Z_MEM_ERROR:     -4,
  Z_BUF_ERROR:       -5,
  //Z_VERSION_ERROR: -6,

  /* compression levels */
  Z_NO_COMPRESSION:         0,
  Z_BEST_SPEED:             1,
  Z_BEST_COMPRESSION:       9,
  Z_DEFAULT_COMPRESSION:   -1,


  Z_FILTERED:               1,
  Z_HUFFMAN_ONLY:           2,
  Z_RLE:                    3,
  Z_FIXED:                  4,
  Z_DEFAULT_STRATEGY:       0,

  /* Possible values of the data_type field (though see inflate()) */
  Z_BINARY:                 0,
  Z_TEXT:                   1,
  //Z_ASCII:                1, // = Z_TEXT (deprecated)
  Z_UNKNOWN:                2,

  /* The deflate compression method */
  Z_DEFLATED:               8
  //Z_NULL:                 null // Use -1 or null inline, depending on var type
};


/***/ }),

/***/ "./node_modules/pako/lib/zlib/crc32.js":
/*!*********************************************!*\
  !*** ./node_modules/pako/lib/zlib/crc32.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Note: we can't get significant speed boost here.
// So write code to minimize size - no pregenerated tables
// and array tools dependencies.

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

// Use ordinary array, since untyped makes no boost here
function makeTable() {
  var c, table = [];

  for (var n = 0; n < 256; n++) {
    c = n;
    for (var k = 0; k < 8; k++) {
      c = ((c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1));
    }
    table[n] = c;
  }

  return table;
}

// Create table on load. Just 255 signed longs. Not a problem.
var crcTable = makeTable();


function crc32(crc, buf, len, pos) {
  var t = crcTable,
      end = pos + len;

  crc ^= -1;

  for (var i = pos; i < end; i++) {
    crc = (crc >>> 8) ^ t[(crc ^ buf[i]) & 0xFF];
  }

  return (crc ^ (-1)); // >>> 0;
}


module.exports = crc32;


/***/ }),

/***/ "./node_modules/pako/lib/zlib/deflate.js":
/*!***********************************************!*\
  !*** ./node_modules/pako/lib/zlib/deflate.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

var utils   = __webpack_require__(/*! ../utils/common */ "./node_modules/pako/lib/utils/common.js");
var trees   = __webpack_require__(/*! ./trees */ "./node_modules/pako/lib/zlib/trees.js");
var adler32 = __webpack_require__(/*! ./adler32 */ "./node_modules/pako/lib/zlib/adler32.js");
var crc32   = __webpack_require__(/*! ./crc32 */ "./node_modules/pako/lib/zlib/crc32.js");
var msg     = __webpack_require__(/*! ./messages */ "./node_modules/pako/lib/zlib/messages.js");

/* Public constants ==========================================================*/
/* ===========================================================================*/


/* Allowed flush values; see deflate() and inflate() below for details */
var Z_NO_FLUSH      = 0;
var Z_PARTIAL_FLUSH = 1;
//var Z_SYNC_FLUSH    = 2;
var Z_FULL_FLUSH    = 3;
var Z_FINISH        = 4;
var Z_BLOCK         = 5;
//var Z_TREES         = 6;


/* Return codes for the compression/decompression functions. Negative values
 * are errors, positive values are used for special but normal events.
 */
var Z_OK            = 0;
var Z_STREAM_END    = 1;
//var Z_NEED_DICT     = 2;
//var Z_ERRNO         = -1;
var Z_STREAM_ERROR  = -2;
var Z_DATA_ERROR    = -3;
//var Z_MEM_ERROR     = -4;
var Z_BUF_ERROR     = -5;
//var Z_VERSION_ERROR = -6;


/* compression levels */
//var Z_NO_COMPRESSION      = 0;
//var Z_BEST_SPEED          = 1;
//var Z_BEST_COMPRESSION    = 9;
var Z_DEFAULT_COMPRESSION = -1;


var Z_FILTERED            = 1;
var Z_HUFFMAN_ONLY        = 2;
var Z_RLE                 = 3;
var Z_FIXED               = 4;
var Z_DEFAULT_STRATEGY    = 0;

/* Possible values of the data_type field (though see inflate()) */
//var Z_BINARY              = 0;
//var Z_TEXT                = 1;
//var Z_ASCII               = 1; // = Z_TEXT
var Z_UNKNOWN             = 2;


/* The deflate compression method */
var Z_DEFLATED  = 8;

/*============================================================================*/


var MAX_MEM_LEVEL = 9;
/* Maximum value for memLevel in deflateInit2 */
var MAX_WBITS = 15;
/* 32K LZ77 window */
var DEF_MEM_LEVEL = 8;


var LENGTH_CODES  = 29;
/* number of length codes, not counting the special END_BLOCK code */
var LITERALS      = 256;
/* number of literal bytes 0..255 */
var L_CODES       = LITERALS + 1 + LENGTH_CODES;
/* number of Literal or Length codes, including the END_BLOCK code */
var D_CODES       = 30;
/* number of distance codes */
var BL_CODES      = 19;
/* number of codes used to transfer the bit lengths */
var HEAP_SIZE     = 2 * L_CODES + 1;
/* maximum heap size */
var MAX_BITS  = 15;
/* All codes must not exceed MAX_BITS bits */

var MIN_MATCH = 3;
var MAX_MATCH = 258;
var MIN_LOOKAHEAD = (MAX_MATCH + MIN_MATCH + 1);

var PRESET_DICT = 0x20;

var INIT_STATE = 42;
var EXTRA_STATE = 69;
var NAME_STATE = 73;
var COMMENT_STATE = 91;
var HCRC_STATE = 103;
var BUSY_STATE = 113;
var FINISH_STATE = 666;

var BS_NEED_MORE      = 1; /* block not completed, need more input or more output */
var BS_BLOCK_DONE     = 2; /* block flush performed */
var BS_FINISH_STARTED = 3; /* finish started, need only more output at next deflate */
var BS_FINISH_DONE    = 4; /* finish done, accept no more input or output */

var OS_CODE = 0x03; // Unix :) . Don't detect, use this default.

function err(strm, errorCode) {
  strm.msg = msg[errorCode];
  return errorCode;
}

function rank(f) {
  return ((f) << 1) - ((f) > 4 ? 9 : 0);
}

function zero(buf) { var len = buf.length; while (--len >= 0) { buf[len] = 0; } }


/* =========================================================================
 * Flush as much pending output as possible. All deflate() output goes
 * through this function so some applications may wish to modify it
 * to avoid allocating a large strm->output buffer and copying into it.
 * (See also read_buf()).
 */
function flush_pending(strm) {
  var s = strm.state;

  //_tr_flush_bits(s);
  var len = s.pending;
  if (len > strm.avail_out) {
    len = strm.avail_out;
  }
  if (len === 0) { return; }

  utils.arraySet(strm.output, s.pending_buf, s.pending_out, len, strm.next_out);
  strm.next_out += len;
  s.pending_out += len;
  strm.total_out += len;
  strm.avail_out -= len;
  s.pending -= len;
  if (s.pending === 0) {
    s.pending_out = 0;
  }
}


function flush_block_only(s, last) {
  trees._tr_flush_block(s, (s.block_start >= 0 ? s.block_start : -1), s.strstart - s.block_start, last);
  s.block_start = s.strstart;
  flush_pending(s.strm);
}


function put_byte(s, b) {
  s.pending_buf[s.pending++] = b;
}


/* =========================================================================
 * Put a short in the pending buffer. The 16-bit value is put in MSB order.
 * IN assertion: the stream state is correct and there is enough room in
 * pending_buf.
 */
function putShortMSB(s, b) {
//  put_byte(s, (Byte)(b >> 8));
//  put_byte(s, (Byte)(b & 0xff));
  s.pending_buf[s.pending++] = (b >>> 8) & 0xff;
  s.pending_buf[s.pending++] = b & 0xff;
}


/* ===========================================================================
 * Read a new buffer from the current input stream, update the adler32
 * and total number of bytes read.  All deflate() input goes through
 * this function so some applications may wish to modify it to avoid
 * allocating a large strm->input buffer and copying from it.
 * (See also flush_pending()).
 */
function read_buf(strm, buf, start, size) {
  var len = strm.avail_in;

  if (len > size) { len = size; }
  if (len === 0) { return 0; }

  strm.avail_in -= len;

  // zmemcpy(buf, strm->next_in, len);
  utils.arraySet(buf, strm.input, strm.next_in, len, start);
  if (strm.state.wrap === 1) {
    strm.adler = adler32(strm.adler, buf, len, start);
  }

  else if (strm.state.wrap === 2) {
    strm.adler = crc32(strm.adler, buf, len, start);
  }

  strm.next_in += len;
  strm.total_in += len;

  return len;
}


/* ===========================================================================
 * Set match_start to the longest match starting at the given string and
 * return its length. Matches shorter or equal to prev_length are discarded,
 * in which case the result is equal to prev_length and match_start is
 * garbage.
 * IN assertions: cur_match is the head of the hash chain for the current
 *   string (strstart) and its distance is <= MAX_DIST, and prev_length >= 1
 * OUT assertion: the match length is not greater than s->lookahead.
 */
function longest_match(s, cur_match) {
  var chain_length = s.max_chain_length;      /* max hash chain length */
  var scan = s.strstart; /* current string */
  var match;                       /* matched string */
  var len;                           /* length of current match */
  var best_len = s.prev_length;              /* best match length so far */
  var nice_match = s.nice_match;             /* stop if match long enough */
  var limit = (s.strstart > (s.w_size - MIN_LOOKAHEAD)) ?
      s.strstart - (s.w_size - MIN_LOOKAHEAD) : 0/*NIL*/;

  var _win = s.window; // shortcut

  var wmask = s.w_mask;
  var prev  = s.prev;

  /* Stop when cur_match becomes <= limit. To simplify the code,
   * we prevent matches with the string of window index 0.
   */

  var strend = s.strstart + MAX_MATCH;
  var scan_end1  = _win[scan + best_len - 1];
  var scan_end   = _win[scan + best_len];

  /* The code is optimized for HASH_BITS >= 8 and MAX_MATCH-2 multiple of 16.
   * It is easy to get rid of this optimization if necessary.
   */
  // Assert(s->hash_bits >= 8 && MAX_MATCH == 258, "Code too clever");

  /* Do not waste too much time if we already have a good match: */
  if (s.prev_length >= s.good_match) {
    chain_length >>= 2;
  }
  /* Do not look for matches beyond the end of the input. This is necessary
   * to make deflate deterministic.
   */
  if (nice_match > s.lookahead) { nice_match = s.lookahead; }

  // Assert((ulg)s->strstart <= s->window_size-MIN_LOOKAHEAD, "need lookahead");

  do {
    // Assert(cur_match < s->strstart, "no future");
    match = cur_match;

    /* Skip to next match if the match length cannot increase
     * or if the match length is less than 2.  Note that the checks below
     * for insufficient lookahead only occur occasionally for performance
     * reasons.  Therefore uninitialized memory will be accessed, and
     * conditional jumps will be made that depend on those values.
     * However the length of the match is limited to the lookahead, so
     * the output of deflate is not affected by the uninitialized values.
     */

    if (_win[match + best_len]     !== scan_end  ||
        _win[match + best_len - 1] !== scan_end1 ||
        _win[match]                !== _win[scan] ||
        _win[++match]              !== _win[scan + 1]) {
      continue;
    }

    /* The check at best_len-1 can be removed because it will be made
     * again later. (This heuristic is not always a win.)
     * It is not necessary to compare scan[2] and match[2] since they
     * are always equal when the other bytes match, given that
     * the hash keys are equal and that HASH_BITS >= 8.
     */
    scan += 2;
    match++;
    // Assert(*scan == *match, "match[2]?");

    /* We check for insufficient lookahead only every 8th comparison;
     * the 256th check will be made at strstart+258.
     */
    do {
      /*jshint noempty:false*/
    } while (_win[++scan] === _win[++match] && _win[++scan] === _win[++match] &&
             _win[++scan] === _win[++match] && _win[++scan] === _win[++match] &&
             _win[++scan] === _win[++match] && _win[++scan] === _win[++match] &&
             _win[++scan] === _win[++match] && _win[++scan] === _win[++match] &&
             scan < strend);

    // Assert(scan <= s->window+(unsigned)(s->window_size-1), "wild scan");

    len = MAX_MATCH - (strend - scan);
    scan = strend - MAX_MATCH;

    if (len > best_len) {
      s.match_start = cur_match;
      best_len = len;
      if (len >= nice_match) {
        break;
      }
      scan_end1  = _win[scan + best_len - 1];
      scan_end   = _win[scan + best_len];
    }
  } while ((cur_match = prev[cur_match & wmask]) > limit && --chain_length !== 0);

  if (best_len <= s.lookahead) {
    return best_len;
  }
  return s.lookahead;
}


/* ===========================================================================
 * Fill the window when the lookahead becomes insufficient.
 * Updates strstart and lookahead.
 *
 * IN assertion: lookahead < MIN_LOOKAHEAD
 * OUT assertions: strstart <= window_size-MIN_LOOKAHEAD
 *    At least one byte has been read, or avail_in == 0; reads are
 *    performed for at least two bytes (required for the zip translate_eol
 *    option -- not supported here).
 */
function fill_window(s) {
  var _w_size = s.w_size;
  var p, n, m, more, str;

  //Assert(s->lookahead < MIN_LOOKAHEAD, "already enough lookahead");

  do {
    more = s.window_size - s.lookahead - s.strstart;

    // JS ints have 32 bit, block below not needed
    /* Deal with !@#$% 64K limit: */
    //if (sizeof(int) <= 2) {
    //    if (more == 0 && s->strstart == 0 && s->lookahead == 0) {
    //        more = wsize;
    //
    //  } else if (more == (unsigned)(-1)) {
    //        /* Very unlikely, but possible on 16 bit machine if
    //         * strstart == 0 && lookahead == 1 (input done a byte at time)
    //         */
    //        more--;
    //    }
    //}


    /* If the window is almost full and there is insufficient lookahead,
     * move the upper half to the lower one to make room in the upper half.
     */
    if (s.strstart >= _w_size + (_w_size - MIN_LOOKAHEAD)) {

      utils.arraySet(s.window, s.window, _w_size, _w_size, 0);
      s.match_start -= _w_size;
      s.strstart -= _w_size;
      /* we now have strstart >= MAX_DIST */
      s.block_start -= _w_size;

      /* Slide the hash table (could be avoided with 32 bit values
       at the expense of memory usage). We slide even when level == 0
       to keep the hash table consistent if we switch back to level > 0
       later. (Using level 0 permanently is not an optimal usage of
       zlib, so we don't care about this pathological case.)
       */

      n = s.hash_size;
      p = n;
      do {
        m = s.head[--p];
        s.head[p] = (m >= _w_size ? m - _w_size : 0);
      } while (--n);

      n = _w_size;
      p = n;
      do {
        m = s.prev[--p];
        s.prev[p] = (m >= _w_size ? m - _w_size : 0);
        /* If n is not on any hash chain, prev[n] is garbage but
         * its value will never be used.
         */
      } while (--n);

      more += _w_size;
    }
    if (s.strm.avail_in === 0) {
      break;
    }

    /* If there was no sliding:
     *    strstart <= WSIZE+MAX_DIST-1 && lookahead <= MIN_LOOKAHEAD - 1 &&
     *    more == window_size - lookahead - strstart
     * => more >= window_size - (MIN_LOOKAHEAD-1 + WSIZE + MAX_DIST-1)
     * => more >= window_size - 2*WSIZE + 2
     * In the BIG_MEM or MMAP case (not yet supported),
     *   window_size == input_size + MIN_LOOKAHEAD  &&
     *   strstart + s->lookahead <= input_size => more >= MIN_LOOKAHEAD.
     * Otherwise, window_size == 2*WSIZE so more >= 2.
     * If there was sliding, more >= WSIZE. So in all cases, more >= 2.
     */
    //Assert(more >= 2, "more < 2");
    n = read_buf(s.strm, s.window, s.strstart + s.lookahead, more);
    s.lookahead += n;

    /* Initialize the hash value now that we have some input: */
    if (s.lookahead + s.insert >= MIN_MATCH) {
      str = s.strstart - s.insert;
      s.ins_h = s.window[str];

      /* UPDATE_HASH(s, s->ins_h, s->window[str + 1]); */
      s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[str + 1]) & s.hash_mask;
//#if MIN_MATCH != 3
//        Call update_hash() MIN_MATCH-3 more times
//#endif
      while (s.insert) {
        /* UPDATE_HASH(s, s->ins_h, s->window[str + MIN_MATCH-1]); */
        s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[str + MIN_MATCH - 1]) & s.hash_mask;

        s.prev[str & s.w_mask] = s.head[s.ins_h];
        s.head[s.ins_h] = str;
        str++;
        s.insert--;
        if (s.lookahead + s.insert < MIN_MATCH) {
          break;
        }
      }
    }
    /* If the whole input has less than MIN_MATCH bytes, ins_h is garbage,
     * but this is not important since only literal bytes will be emitted.
     */

  } while (s.lookahead < MIN_LOOKAHEAD && s.strm.avail_in !== 0);

  /* If the WIN_INIT bytes after the end of the current data have never been
   * written, then zero those bytes in order to avoid memory check reports of
   * the use of uninitialized (or uninitialised as Julian writes) bytes by
   * the longest match routines.  Update the high water mark for the next
   * time through here.  WIN_INIT is set to MAX_MATCH since the longest match
   * routines allow scanning to strstart + MAX_MATCH, ignoring lookahead.
   */
//  if (s.high_water < s.window_size) {
//    var curr = s.strstart + s.lookahead;
//    var init = 0;
//
//    if (s.high_water < curr) {
//      /* Previous high water mark below current data -- zero WIN_INIT
//       * bytes or up to end of window, whichever is less.
//       */
//      init = s.window_size - curr;
//      if (init > WIN_INIT)
//        init = WIN_INIT;
//      zmemzero(s->window + curr, (unsigned)init);
//      s->high_water = curr + init;
//    }
//    else if (s->high_water < (ulg)curr + WIN_INIT) {
//      /* High water mark at or above current data, but below current data
//       * plus WIN_INIT -- zero out to current data plus WIN_INIT, or up
//       * to end of window, whichever is less.
//       */
//      init = (ulg)curr + WIN_INIT - s->high_water;
//      if (init > s->window_size - s->high_water)
//        init = s->window_size - s->high_water;
//      zmemzero(s->window + s->high_water, (unsigned)init);
//      s->high_water += init;
//    }
//  }
//
//  Assert((ulg)s->strstart <= s->window_size - MIN_LOOKAHEAD,
//    "not enough room for search");
}

/* ===========================================================================
 * Copy without compression as much as possible from the input stream, return
 * the current block state.
 * This function does not insert new strings in the dictionary since
 * uncompressible data is probably not useful. This function is used
 * only for the level=0 compression option.
 * NOTE: this function should be optimized to avoid extra copying from
 * window to pending_buf.
 */
function deflate_stored(s, flush) {
  /* Stored blocks are limited to 0xffff bytes, pending_buf is limited
   * to pending_buf_size, and each stored block has a 5 byte header:
   */
  var max_block_size = 0xffff;

  if (max_block_size > s.pending_buf_size - 5) {
    max_block_size = s.pending_buf_size - 5;
  }

  /* Copy as much as possible from input to output: */
  for (;;) {
    /* Fill the window as much as possible: */
    if (s.lookahead <= 1) {

      //Assert(s->strstart < s->w_size+MAX_DIST(s) ||
      //  s->block_start >= (long)s->w_size, "slide too late");
//      if (!(s.strstart < s.w_size + (s.w_size - MIN_LOOKAHEAD) ||
//        s.block_start >= s.w_size)) {
//        throw  new Error("slide too late");
//      }

      fill_window(s);
      if (s.lookahead === 0 && flush === Z_NO_FLUSH) {
        return BS_NEED_MORE;
      }

      if (s.lookahead === 0) {
        break;
      }
      /* flush the current block */
    }
    //Assert(s->block_start >= 0L, "block gone");
//    if (s.block_start < 0) throw new Error("block gone");

    s.strstart += s.lookahead;
    s.lookahead = 0;

    /* Emit a stored block if pending_buf will be full: */
    var max_start = s.block_start + max_block_size;

    if (s.strstart === 0 || s.strstart >= max_start) {
      /* strstart == 0 is possible when wraparound on 16-bit machine */
      s.lookahead = s.strstart - max_start;
      s.strstart = max_start;
      /*** FLUSH_BLOCK(s, 0); ***/
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
      /***/


    }
    /* Flush if we may have to slide, otherwise block_start may become
     * negative and the data will be gone:
     */
    if (s.strstart - s.block_start >= (s.w_size - MIN_LOOKAHEAD)) {
      /*** FLUSH_BLOCK(s, 0); ***/
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
      /***/
    }
  }

  s.insert = 0;

  if (flush === Z_FINISH) {
    /*** FLUSH_BLOCK(s, 1); ***/
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    /***/
    return BS_FINISH_DONE;
  }

  if (s.strstart > s.block_start) {
    /*** FLUSH_BLOCK(s, 0); ***/
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
    /***/
  }

  return BS_NEED_MORE;
}

/* ===========================================================================
 * Compress as much as possible from the input stream, return the current
 * block state.
 * This function does not perform lazy evaluation of matches and inserts
 * new strings in the dictionary only for unmatched strings or for short
 * matches. It is used only for the fast compression options.
 */
function deflate_fast(s, flush) {
  var hash_head;        /* head of the hash chain */
  var bflush;           /* set if current block must be flushed */

  for (;;) {
    /* Make sure that we always have enough lookahead, except
     * at the end of the input file. We need MAX_MATCH bytes
     * for the next match, plus MIN_MATCH bytes to insert the
     * string following the next match.
     */
    if (s.lookahead < MIN_LOOKAHEAD) {
      fill_window(s);
      if (s.lookahead < MIN_LOOKAHEAD && flush === Z_NO_FLUSH) {
        return BS_NEED_MORE;
      }
      if (s.lookahead === 0) {
        break; /* flush the current block */
      }
    }

    /* Insert the string window[strstart .. strstart+2] in the
     * dictionary, and set hash_head to the head of the hash chain:
     */
    hash_head = 0/*NIL*/;
    if (s.lookahead >= MIN_MATCH) {
      /*** INSERT_STRING(s, s.strstart, hash_head); ***/
      s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
      hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
      s.head[s.ins_h] = s.strstart;
      /***/
    }

    /* Find the longest match, discarding those <= prev_length.
     * At this point we have always match_length < MIN_MATCH
     */
    if (hash_head !== 0/*NIL*/ && ((s.strstart - hash_head) <= (s.w_size - MIN_LOOKAHEAD))) {
      /* To simplify the code, we prevent matches with the string
       * of window index 0 (in particular we have to avoid a match
       * of the string with itself at the start of the input file).
       */
      s.match_length = longest_match(s, hash_head);
      /* longest_match() sets match_start */
    }
    if (s.match_length >= MIN_MATCH) {
      // check_match(s, s.strstart, s.match_start, s.match_length); // for debug only

      /*** _tr_tally_dist(s, s.strstart - s.match_start,
                     s.match_length - MIN_MATCH, bflush); ***/
      bflush = trees._tr_tally(s, s.strstart - s.match_start, s.match_length - MIN_MATCH);

      s.lookahead -= s.match_length;

      /* Insert new strings in the hash table only if the match length
       * is not too large. This saves time but degrades compression.
       */
      if (s.match_length <= s.max_lazy_match/*max_insert_length*/ && s.lookahead >= MIN_MATCH) {
        s.match_length--; /* string at strstart already in table */
        do {
          s.strstart++;
          /*** INSERT_STRING(s, s.strstart, hash_head); ***/
          s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
          hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
          s.head[s.ins_h] = s.strstart;
          /***/
          /* strstart never exceeds WSIZE-MAX_MATCH, so there are
           * always MIN_MATCH bytes ahead.
           */
        } while (--s.match_length !== 0);
        s.strstart++;
      } else
      {
        s.strstart += s.match_length;
        s.match_length = 0;
        s.ins_h = s.window[s.strstart];
        /* UPDATE_HASH(s, s.ins_h, s.window[s.strstart+1]); */
        s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[s.strstart + 1]) & s.hash_mask;

//#if MIN_MATCH != 3
//                Call UPDATE_HASH() MIN_MATCH-3 more times
//#endif
        /* If lookahead < MIN_MATCH, ins_h is garbage, but it does not
         * matter since it will be recomputed at next deflate call.
         */
      }
    } else {
      /* No match, output a literal byte */
      //Tracevv((stderr,"%c", s.window[s.strstart]));
      /*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/
      bflush = trees._tr_tally(s, 0, s.window[s.strstart]);

      s.lookahead--;
      s.strstart++;
    }
    if (bflush) {
      /*** FLUSH_BLOCK(s, 0); ***/
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
      /***/
    }
  }
  s.insert = ((s.strstart < (MIN_MATCH - 1)) ? s.strstart : MIN_MATCH - 1);
  if (flush === Z_FINISH) {
    /*** FLUSH_BLOCK(s, 1); ***/
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    /***/
    return BS_FINISH_DONE;
  }
  if (s.last_lit) {
    /*** FLUSH_BLOCK(s, 0); ***/
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
    /***/
  }
  return BS_BLOCK_DONE;
}

/* ===========================================================================
 * Same as above, but achieves better compression. We use a lazy
 * evaluation for matches: a match is finally adopted only if there is
 * no better match at the next window position.
 */
function deflate_slow(s, flush) {
  var hash_head;          /* head of hash chain */
  var bflush;              /* set if current block must be flushed */

  var max_insert;

  /* Process the input block. */
  for (;;) {
    /* Make sure that we always have enough lookahead, except
     * at the end of the input file. We need MAX_MATCH bytes
     * for the next match, plus MIN_MATCH bytes to insert the
     * string following the next match.
     */
    if (s.lookahead < MIN_LOOKAHEAD) {
      fill_window(s);
      if (s.lookahead < MIN_LOOKAHEAD && flush === Z_NO_FLUSH) {
        return BS_NEED_MORE;
      }
      if (s.lookahead === 0) { break; } /* flush the current block */
    }

    /* Insert the string window[strstart .. strstart+2] in the
     * dictionary, and set hash_head to the head of the hash chain:
     */
    hash_head = 0/*NIL*/;
    if (s.lookahead >= MIN_MATCH) {
      /*** INSERT_STRING(s, s.strstart, hash_head); ***/
      s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
      hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
      s.head[s.ins_h] = s.strstart;
      /***/
    }

    /* Find the longest match, discarding those <= prev_length.
     */
    s.prev_length = s.match_length;
    s.prev_match = s.match_start;
    s.match_length = MIN_MATCH - 1;

    if (hash_head !== 0/*NIL*/ && s.prev_length < s.max_lazy_match &&
        s.strstart - hash_head <= (s.w_size - MIN_LOOKAHEAD)/*MAX_DIST(s)*/) {
      /* To simplify the code, we prevent matches with the string
       * of window index 0 (in particular we have to avoid a match
       * of the string with itself at the start of the input file).
       */
      s.match_length = longest_match(s, hash_head);
      /* longest_match() sets match_start */

      if (s.match_length <= 5 &&
         (s.strategy === Z_FILTERED || (s.match_length === MIN_MATCH && s.strstart - s.match_start > 4096/*TOO_FAR*/))) {

        /* If prev_match is also MIN_MATCH, match_start is garbage
         * but we will ignore the current match anyway.
         */
        s.match_length = MIN_MATCH - 1;
      }
    }
    /* If there was a match at the previous step and the current
     * match is not better, output the previous match:
     */
    if (s.prev_length >= MIN_MATCH && s.match_length <= s.prev_length) {
      max_insert = s.strstart + s.lookahead - MIN_MATCH;
      /* Do not insert strings in hash table beyond this. */

      //check_match(s, s.strstart-1, s.prev_match, s.prev_length);

      /***_tr_tally_dist(s, s.strstart - 1 - s.prev_match,
                     s.prev_length - MIN_MATCH, bflush);***/
      bflush = trees._tr_tally(s, s.strstart - 1 - s.prev_match, s.prev_length - MIN_MATCH);
      /* Insert in hash table all strings up to the end of the match.
       * strstart-1 and strstart are already inserted. If there is not
       * enough lookahead, the last two strings are not inserted in
       * the hash table.
       */
      s.lookahead -= s.prev_length - 1;
      s.prev_length -= 2;
      do {
        if (++s.strstart <= max_insert) {
          /*** INSERT_STRING(s, s.strstart, hash_head); ***/
          s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
          hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
          s.head[s.ins_h] = s.strstart;
          /***/
        }
      } while (--s.prev_length !== 0);
      s.match_available = 0;
      s.match_length = MIN_MATCH - 1;
      s.strstart++;

      if (bflush) {
        /*** FLUSH_BLOCK(s, 0); ***/
        flush_block_only(s, false);
        if (s.strm.avail_out === 0) {
          return BS_NEED_MORE;
        }
        /***/
      }

    } else if (s.match_available) {
      /* If there was no match at the previous position, output a
       * single literal. If there was a match but the current match
       * is longer, truncate the previous match to a single literal.
       */
      //Tracevv((stderr,"%c", s->window[s->strstart-1]));
      /*** _tr_tally_lit(s, s.window[s.strstart-1], bflush); ***/
      bflush = trees._tr_tally(s, 0, s.window[s.strstart - 1]);

      if (bflush) {
        /*** FLUSH_BLOCK_ONLY(s, 0) ***/
        flush_block_only(s, false);
        /***/
      }
      s.strstart++;
      s.lookahead--;
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
    } else {
      /* There is no previous match to compare with, wait for
       * the next step to decide.
       */
      s.match_available = 1;
      s.strstart++;
      s.lookahead--;
    }
  }
  //Assert (flush != Z_NO_FLUSH, "no flush?");
  if (s.match_available) {
    //Tracevv((stderr,"%c", s->window[s->strstart-1]));
    /*** _tr_tally_lit(s, s.window[s.strstart-1], bflush); ***/
    bflush = trees._tr_tally(s, 0, s.window[s.strstart - 1]);

    s.match_available = 0;
  }
  s.insert = s.strstart < MIN_MATCH - 1 ? s.strstart : MIN_MATCH - 1;
  if (flush === Z_FINISH) {
    /*** FLUSH_BLOCK(s, 1); ***/
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    /***/
    return BS_FINISH_DONE;
  }
  if (s.last_lit) {
    /*** FLUSH_BLOCK(s, 0); ***/
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
    /***/
  }

  return BS_BLOCK_DONE;
}


/* ===========================================================================
 * For Z_RLE, simply look for runs of bytes, generate matches only of distance
 * one.  Do not maintain a hash table.  (It will be regenerated if this run of
 * deflate switches away from Z_RLE.)
 */
function deflate_rle(s, flush) {
  var bflush;            /* set if current block must be flushed */
  var prev;              /* byte at distance one to match */
  var scan, strend;      /* scan goes up to strend for length of run */

  var _win = s.window;

  for (;;) {
    /* Make sure that we always have enough lookahead, except
     * at the end of the input file. We need MAX_MATCH bytes
     * for the longest run, plus one for the unrolled loop.
     */
    if (s.lookahead <= MAX_MATCH) {
      fill_window(s);
      if (s.lookahead <= MAX_MATCH && flush === Z_NO_FLUSH) {
        return BS_NEED_MORE;
      }
      if (s.lookahead === 0) { break; } /* flush the current block */
    }

    /* See how many times the previous byte repeats */
    s.match_length = 0;
    if (s.lookahead >= MIN_MATCH && s.strstart > 0) {
      scan = s.strstart - 1;
      prev = _win[scan];
      if (prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan]) {
        strend = s.strstart + MAX_MATCH;
        do {
          /*jshint noempty:false*/
        } while (prev === _win[++scan] && prev === _win[++scan] &&
                 prev === _win[++scan] && prev === _win[++scan] &&
                 prev === _win[++scan] && prev === _win[++scan] &&
                 prev === _win[++scan] && prev === _win[++scan] &&
                 scan < strend);
        s.match_length = MAX_MATCH - (strend - scan);
        if (s.match_length > s.lookahead) {
          s.match_length = s.lookahead;
        }
      }
      //Assert(scan <= s->window+(uInt)(s->window_size-1), "wild scan");
    }

    /* Emit match if have run of MIN_MATCH or longer, else emit literal */
    if (s.match_length >= MIN_MATCH) {
      //check_match(s, s.strstart, s.strstart - 1, s.match_length);

      /*** _tr_tally_dist(s, 1, s.match_length - MIN_MATCH, bflush); ***/
      bflush = trees._tr_tally(s, 1, s.match_length - MIN_MATCH);

      s.lookahead -= s.match_length;
      s.strstart += s.match_length;
      s.match_length = 0;
    } else {
      /* No match, output a literal byte */
      //Tracevv((stderr,"%c", s->window[s->strstart]));
      /*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/
      bflush = trees._tr_tally(s, 0, s.window[s.strstart]);

      s.lookahead--;
      s.strstart++;
    }
    if (bflush) {
      /*** FLUSH_BLOCK(s, 0); ***/
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
      /***/
    }
  }
  s.insert = 0;
  if (flush === Z_FINISH) {
    /*** FLUSH_BLOCK(s, 1); ***/
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    /***/
    return BS_FINISH_DONE;
  }
  if (s.last_lit) {
    /*** FLUSH_BLOCK(s, 0); ***/
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
    /***/
  }
  return BS_BLOCK_DONE;
}

/* ===========================================================================
 * For Z_HUFFMAN_ONLY, do not look for matches.  Do not maintain a hash table.
 * (It will be regenerated if this run of deflate switches away from Huffman.)
 */
function deflate_huff(s, flush) {
  var bflush;             /* set if current block must be flushed */

  for (;;) {
    /* Make sure that we have a literal to write. */
    if (s.lookahead === 0) {
      fill_window(s);
      if (s.lookahead === 0) {
        if (flush === Z_NO_FLUSH) {
          return BS_NEED_MORE;
        }
        break;      /* flush the current block */
      }
    }

    /* Output a literal byte */
    s.match_length = 0;
    //Tracevv((stderr,"%c", s->window[s->strstart]));
    /*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/
    bflush = trees._tr_tally(s, 0, s.window[s.strstart]);
    s.lookahead--;
    s.strstart++;
    if (bflush) {
      /*** FLUSH_BLOCK(s, 0); ***/
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
      /***/
    }
  }
  s.insert = 0;
  if (flush === Z_FINISH) {
    /*** FLUSH_BLOCK(s, 1); ***/
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    /***/
    return BS_FINISH_DONE;
  }
  if (s.last_lit) {
    /*** FLUSH_BLOCK(s, 0); ***/
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
    /***/
  }
  return BS_BLOCK_DONE;
}

/* Values for max_lazy_match, good_match and max_chain_length, depending on
 * the desired pack level (0..9). The values given below have been tuned to
 * exclude worst case performance for pathological files. Better values may be
 * found for specific files.
 */
function Config(good_length, max_lazy, nice_length, max_chain, func) {
  this.good_length = good_length;
  this.max_lazy = max_lazy;
  this.nice_length = nice_length;
  this.max_chain = max_chain;
  this.func = func;
}

var configuration_table;

configuration_table = [
  /*      good lazy nice chain */
  new Config(0, 0, 0, 0, deflate_stored),          /* 0 store only */
  new Config(4, 4, 8, 4, deflate_fast),            /* 1 max speed, no lazy matches */
  new Config(4, 5, 16, 8, deflate_fast),           /* 2 */
  new Config(4, 6, 32, 32, deflate_fast),          /* 3 */

  new Config(4, 4, 16, 16, deflate_slow),          /* 4 lazy matches */
  new Config(8, 16, 32, 32, deflate_slow),         /* 5 */
  new Config(8, 16, 128, 128, deflate_slow),       /* 6 */
  new Config(8, 32, 128, 256, deflate_slow),       /* 7 */
  new Config(32, 128, 258, 1024, deflate_slow),    /* 8 */
  new Config(32, 258, 258, 4096, deflate_slow)     /* 9 max compression */
];


/* ===========================================================================
 * Initialize the "longest match" routines for a new zlib stream
 */
function lm_init(s) {
  s.window_size = 2 * s.w_size;

  /*** CLEAR_HASH(s); ***/
  zero(s.head); // Fill with NIL (= 0);

  /* Set the default configuration parameters:
   */
  s.max_lazy_match = configuration_table[s.level].max_lazy;
  s.good_match = configuration_table[s.level].good_length;
  s.nice_match = configuration_table[s.level].nice_length;
  s.max_chain_length = configuration_table[s.level].max_chain;

  s.strstart = 0;
  s.block_start = 0;
  s.lookahead = 0;
  s.insert = 0;
  s.match_length = s.prev_length = MIN_MATCH - 1;
  s.match_available = 0;
  s.ins_h = 0;
}


function DeflateState() {
  this.strm = null;            /* pointer back to this zlib stream */
  this.status = 0;            /* as the name implies */
  this.pending_buf = null;      /* output still pending */
  this.pending_buf_size = 0;  /* size of pending_buf */
  this.pending_out = 0;       /* next pending byte to output to the stream */
  this.pending = 0;           /* nb of bytes in the pending buffer */
  this.wrap = 0;              /* bit 0 true for zlib, bit 1 true for gzip */
  this.gzhead = null;         /* gzip header information to write */
  this.gzindex = 0;           /* where in extra, name, or comment */
  this.method = Z_DEFLATED; /* can only be DEFLATED */
  this.last_flush = -1;   /* value of flush param for previous deflate call */

  this.w_size = 0;  /* LZ77 window size (32K by default) */
  this.w_bits = 0;  /* log2(w_size)  (8..16) */
  this.w_mask = 0;  /* w_size - 1 */

  this.window = null;
  /* Sliding window. Input bytes are read into the second half of the window,
   * and move to the first half later to keep a dictionary of at least wSize
   * bytes. With this organization, matches are limited to a distance of
   * wSize-MAX_MATCH bytes, but this ensures that IO is always
   * performed with a length multiple of the block size.
   */

  this.window_size = 0;
  /* Actual size of window: 2*wSize, except when the user input buffer
   * is directly used as sliding window.
   */

  this.prev = null;
  /* Link to older string with same hash index. To limit the size of this
   * array to 64K, this link is maintained only for the last 32K strings.
   * An index in this array is thus a window index modulo 32K.
   */

  this.head = null;   /* Heads of the hash chains or NIL. */

  this.ins_h = 0;       /* hash index of string to be inserted */
  this.hash_size = 0;   /* number of elements in hash table */
  this.hash_bits = 0;   /* log2(hash_size) */
  this.hash_mask = 0;   /* hash_size-1 */

  this.hash_shift = 0;
  /* Number of bits by which ins_h must be shifted at each input
   * step. It must be such that after MIN_MATCH steps, the oldest
   * byte no longer takes part in the hash key, that is:
   *   hash_shift * MIN_MATCH >= hash_bits
   */

  this.block_start = 0;
  /* Window position at the beginning of the current output block. Gets
   * negative when the window is moved backwards.
   */

  this.match_length = 0;      /* length of best match */
  this.prev_match = 0;        /* previous match */
  this.match_available = 0;   /* set if previous match exists */
  this.strstart = 0;          /* start of string to insert */
  this.match_start = 0;       /* start of matching string */
  this.lookahead = 0;         /* number of valid bytes ahead in window */

  this.prev_length = 0;
  /* Length of the best match at previous step. Matches not greater than this
   * are discarded. This is used in the lazy match evaluation.
   */

  this.max_chain_length = 0;
  /* To speed up deflation, hash chains are never searched beyond this
   * length.  A higher limit improves compression ratio but degrades the
   * speed.
   */

  this.max_lazy_match = 0;
  /* Attempt to find a better match only when the current match is strictly
   * smaller than this value. This mechanism is used only for compression
   * levels >= 4.
   */
  // That's alias to max_lazy_match, don't use directly
  //this.max_insert_length = 0;
  /* Insert new strings in the hash table only if the match length is not
   * greater than this length. This saves time but degrades compression.
   * max_insert_length is used only for compression levels <= 3.
   */

  this.level = 0;     /* compression level (1..9) */
  this.strategy = 0;  /* favor or force Huffman coding*/

  this.good_match = 0;
  /* Use a faster search when the previous match is longer than this */

  this.nice_match = 0; /* Stop searching when current match exceeds this */

              /* used by trees.c: */

  /* Didn't use ct_data typedef below to suppress compiler warning */

  // struct ct_data_s dyn_ltree[HEAP_SIZE];   /* literal and length tree */
  // struct ct_data_s dyn_dtree[2*D_CODES+1]; /* distance tree */
  // struct ct_data_s bl_tree[2*BL_CODES+1];  /* Huffman tree for bit lengths */

  // Use flat array of DOUBLE size, with interleaved fata,
  // because JS does not support effective
  this.dyn_ltree  = new utils.Buf16(HEAP_SIZE * 2);
  this.dyn_dtree  = new utils.Buf16((2 * D_CODES + 1) * 2);
  this.bl_tree    = new utils.Buf16((2 * BL_CODES + 1) * 2);
  zero(this.dyn_ltree);
  zero(this.dyn_dtree);
  zero(this.bl_tree);

  this.l_desc   = null;         /* desc. for literal tree */
  this.d_desc   = null;         /* desc. for distance tree */
  this.bl_desc  = null;         /* desc. for bit length tree */

  //ush bl_count[MAX_BITS+1];
  this.bl_count = new utils.Buf16(MAX_BITS + 1);
  /* number of codes at each bit length for an optimal tree */

  //int heap[2*L_CODES+1];      /* heap used to build the Huffman trees */
  this.heap = new utils.Buf16(2 * L_CODES + 1);  /* heap used to build the Huffman trees */
  zero(this.heap);

  this.heap_len = 0;               /* number of elements in the heap */
  this.heap_max = 0;               /* element of largest frequency */
  /* The sons of heap[n] are heap[2*n] and heap[2*n+1]. heap[0] is not used.
   * The same heap array is used to build all trees.
   */

  this.depth = new utils.Buf16(2 * L_CODES + 1); //uch depth[2*L_CODES+1];
  zero(this.depth);
  /* Depth of each subtree used as tie breaker for trees of equal frequency
   */

  this.l_buf = 0;          /* buffer index for literals or lengths */

  this.lit_bufsize = 0;
  /* Size of match buffer for literals/lengths.  There are 4 reasons for
   * limiting lit_bufsize to 64K:
   *   - frequencies can be kept in 16 bit counters
   *   - if compression is not successful for the first block, all input
   *     data is still in the window so we can still emit a stored block even
   *     when input comes from standard input.  (This can also be done for
   *     all blocks if lit_bufsize is not greater than 32K.)
   *   - if compression is not successful for a file smaller than 64K, we can
   *     even emit a stored file instead of a stored block (saving 5 bytes).
   *     This is applicable only for zip (not gzip or zlib).
   *   - creating new Huffman trees less frequently may not provide fast
   *     adaptation to changes in the input data statistics. (Take for
   *     example a binary file with poorly compressible code followed by
   *     a highly compressible string table.) Smaller buffer sizes give
   *     fast adaptation but have of course the overhead of transmitting
   *     trees more frequently.
   *   - I can't count above 4
   */

  this.last_lit = 0;      /* running index in l_buf */

  this.d_buf = 0;
  /* Buffer index for distances. To simplify the code, d_buf and l_buf have
   * the same number of elements. To use different lengths, an extra flag
   * array would be necessary.
   */

  this.opt_len = 0;       /* bit length of current block with optimal trees */
  this.static_len = 0;    /* bit length of current block with static trees */
  this.matches = 0;       /* number of string matches in current block */
  this.insert = 0;        /* bytes at end of window left to insert */


  this.bi_buf = 0;
  /* Output buffer. bits are inserted starting at the bottom (least
   * significant bits).
   */
  this.bi_valid = 0;
  /* Number of valid bits in bi_buf.  All bits above the last valid bit
   * are always zero.
   */

  // Used for window memory init. We safely ignore it for JS. That makes
  // sense only for pointers and memory check tools.
  //this.high_water = 0;
  /* High water mark offset in window for initialized bytes -- bytes above
   * this are set to zero in order to avoid memory check warnings when
   * longest match routines access bytes past the input.  This is then
   * updated to the new high water mark.
   */
}


function deflateResetKeep(strm) {
  var s;

  if (!strm || !strm.state) {
    return err(strm, Z_STREAM_ERROR);
  }

  strm.total_in = strm.total_out = 0;
  strm.data_type = Z_UNKNOWN;

  s = strm.state;
  s.pending = 0;
  s.pending_out = 0;

  if (s.wrap < 0) {
    s.wrap = -s.wrap;
    /* was made negative by deflate(..., Z_FINISH); */
  }
  s.status = (s.wrap ? INIT_STATE : BUSY_STATE);
  strm.adler = (s.wrap === 2) ?
    0  // crc32(0, Z_NULL, 0)
  :
    1; // adler32(0, Z_NULL, 0)
  s.last_flush = Z_NO_FLUSH;
  trees._tr_init(s);
  return Z_OK;
}


function deflateReset(strm) {
  var ret = deflateResetKeep(strm);
  if (ret === Z_OK) {
    lm_init(strm.state);
  }
  return ret;
}


function deflateSetHeader(strm, head) {
  if (!strm || !strm.state) { return Z_STREAM_ERROR; }
  if (strm.state.wrap !== 2) { return Z_STREAM_ERROR; }
  strm.state.gzhead = head;
  return Z_OK;
}


function deflateInit2(strm, level, method, windowBits, memLevel, strategy) {
  if (!strm) { // === Z_NULL
    return Z_STREAM_ERROR;
  }
  var wrap = 1;

  if (level === Z_DEFAULT_COMPRESSION) {
    level = 6;
  }

  if (windowBits < 0) { /* suppress zlib wrapper */
    wrap = 0;
    windowBits = -windowBits;
  }

  else if (windowBits > 15) {
    wrap = 2;           /* write gzip wrapper instead */
    windowBits -= 16;
  }


  if (memLevel < 1 || memLevel > MAX_MEM_LEVEL || method !== Z_DEFLATED ||
    windowBits < 8 || windowBits > 15 || level < 0 || level > 9 ||
    strategy < 0 || strategy > Z_FIXED) {
    return err(strm, Z_STREAM_ERROR);
  }


  if (windowBits === 8) {
    windowBits = 9;
  }
  /* until 256-byte window bug fixed */

  var s = new DeflateState();

  strm.state = s;
  s.strm = strm;

  s.wrap = wrap;
  s.gzhead = null;
  s.w_bits = windowBits;
  s.w_size = 1 << s.w_bits;
  s.w_mask = s.w_size - 1;

  s.hash_bits = memLevel + 7;
  s.hash_size = 1 << s.hash_bits;
  s.hash_mask = s.hash_size - 1;
  s.hash_shift = ~~((s.hash_bits + MIN_MATCH - 1) / MIN_MATCH);

  s.window = new utils.Buf8(s.w_size * 2);
  s.head = new utils.Buf16(s.hash_size);
  s.prev = new utils.Buf16(s.w_size);

  // Don't need mem init magic for JS.
  //s.high_water = 0;  /* nothing written to s->window yet */

  s.lit_bufsize = 1 << (memLevel + 6); /* 16K elements by default */

  s.pending_buf_size = s.lit_bufsize * 4;

  //overlay = (ushf *) ZALLOC(strm, s->lit_bufsize, sizeof(ush)+2);
  //s->pending_buf = (uchf *) overlay;
  s.pending_buf = new utils.Buf8(s.pending_buf_size);

  // It is offset from `s.pending_buf` (size is `s.lit_bufsize * 2`)
  //s->d_buf = overlay + s->lit_bufsize/sizeof(ush);
  s.d_buf = 1 * s.lit_bufsize;

  //s->l_buf = s->pending_buf + (1+sizeof(ush))*s->lit_bufsize;
  s.l_buf = (1 + 2) * s.lit_bufsize;

  s.level = level;
  s.strategy = strategy;
  s.method = method;

  return deflateReset(strm);
}

function deflateInit(strm, level) {
  return deflateInit2(strm, level, Z_DEFLATED, MAX_WBITS, DEF_MEM_LEVEL, Z_DEFAULT_STRATEGY);
}


function deflate(strm, flush) {
  var old_flush, s;
  var beg, val; // for gzip header write only

  if (!strm || !strm.state ||
    flush > Z_BLOCK || flush < 0) {
    return strm ? err(strm, Z_STREAM_ERROR) : Z_STREAM_ERROR;
  }

  s = strm.state;

  if (!strm.output ||
      (!strm.input && strm.avail_in !== 0) ||
      (s.status === FINISH_STATE && flush !== Z_FINISH)) {
    return err(strm, (strm.avail_out === 0) ? Z_BUF_ERROR : Z_STREAM_ERROR);
  }

  s.strm = strm; /* just in case */
  old_flush = s.last_flush;
  s.last_flush = flush;

  /* Write the header */
  if (s.status === INIT_STATE) {

    if (s.wrap === 2) { // GZIP header
      strm.adler = 0;  //crc32(0L, Z_NULL, 0);
      put_byte(s, 31);
      put_byte(s, 139);
      put_byte(s, 8);
      if (!s.gzhead) { // s->gzhead == Z_NULL
        put_byte(s, 0);
        put_byte(s, 0);
        put_byte(s, 0);
        put_byte(s, 0);
        put_byte(s, 0);
        put_byte(s, s.level === 9 ? 2 :
                    (s.strategy >= Z_HUFFMAN_ONLY || s.level < 2 ?
                     4 : 0));
        put_byte(s, OS_CODE);
        s.status = BUSY_STATE;
      }
      else {
        put_byte(s, (s.gzhead.text ? 1 : 0) +
                    (s.gzhead.hcrc ? 2 : 0) +
                    (!s.gzhead.extra ? 0 : 4) +
                    (!s.gzhead.name ? 0 : 8) +
                    (!s.gzhead.comment ? 0 : 16)
                );
        put_byte(s, s.gzhead.time & 0xff);
        put_byte(s, (s.gzhead.time >> 8) & 0xff);
        put_byte(s, (s.gzhead.time >> 16) & 0xff);
        put_byte(s, (s.gzhead.time >> 24) & 0xff);
        put_byte(s, s.level === 9 ? 2 :
                    (s.strategy >= Z_HUFFMAN_ONLY || s.level < 2 ?
                     4 : 0));
        put_byte(s, s.gzhead.os & 0xff);
        if (s.gzhead.extra && s.gzhead.extra.length) {
          put_byte(s, s.gzhead.extra.length & 0xff);
          put_byte(s, (s.gzhead.extra.length >> 8) & 0xff);
        }
        if (s.gzhead.hcrc) {
          strm.adler = crc32(strm.adler, s.pending_buf, s.pending, 0);
        }
        s.gzindex = 0;
        s.status = EXTRA_STATE;
      }
    }
    else // DEFLATE header
    {
      var header = (Z_DEFLATED + ((s.w_bits - 8) << 4)) << 8;
      var level_flags = -1;

      if (s.strategy >= Z_HUFFMAN_ONLY || s.level < 2) {
        level_flags = 0;
      } else if (s.level < 6) {
        level_flags = 1;
      } else if (s.level === 6) {
        level_flags = 2;
      } else {
        level_flags = 3;
      }
      header |= (level_flags << 6);
      if (s.strstart !== 0) { header |= PRESET_DICT; }
      header += 31 - (header % 31);

      s.status = BUSY_STATE;
      putShortMSB(s, header);

      /* Save the adler32 of the preset dictionary: */
      if (s.strstart !== 0) {
        putShortMSB(s, strm.adler >>> 16);
        putShortMSB(s, strm.adler & 0xffff);
      }
      strm.adler = 1; // adler32(0L, Z_NULL, 0);
    }
  }

//#ifdef GZIP
  if (s.status === EXTRA_STATE) {
    if (s.gzhead.extra/* != Z_NULL*/) {
      beg = s.pending;  /* start of bytes to update crc */

      while (s.gzindex < (s.gzhead.extra.length & 0xffff)) {
        if (s.pending === s.pending_buf_size) {
          if (s.gzhead.hcrc && s.pending > beg) {
            strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
          }
          flush_pending(strm);
          beg = s.pending;
          if (s.pending === s.pending_buf_size) {
            break;
          }
        }
        put_byte(s, s.gzhead.extra[s.gzindex] & 0xff);
        s.gzindex++;
      }
      if (s.gzhead.hcrc && s.pending > beg) {
        strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
      }
      if (s.gzindex === s.gzhead.extra.length) {
        s.gzindex = 0;
        s.status = NAME_STATE;
      }
    }
    else {
      s.status = NAME_STATE;
    }
  }
  if (s.status === NAME_STATE) {
    if (s.gzhead.name/* != Z_NULL*/) {
      beg = s.pending;  /* start of bytes to update crc */
      //int val;

      do {
        if (s.pending === s.pending_buf_size) {
          if (s.gzhead.hcrc && s.pending > beg) {
            strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
          }
          flush_pending(strm);
          beg = s.pending;
          if (s.pending === s.pending_buf_size) {
            val = 1;
            break;
          }
        }
        // JS specific: little magic to add zero terminator to end of string
        if (s.gzindex < s.gzhead.name.length) {
          val = s.gzhead.name.charCodeAt(s.gzindex++) & 0xff;
        } else {
          val = 0;
        }
        put_byte(s, val);
      } while (val !== 0);

      if (s.gzhead.hcrc && s.pending > beg) {
        strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
      }
      if (val === 0) {
        s.gzindex = 0;
        s.status = COMMENT_STATE;
      }
    }
    else {
      s.status = COMMENT_STATE;
    }
  }
  if (s.status === COMMENT_STATE) {
    if (s.gzhead.comment/* != Z_NULL*/) {
      beg = s.pending;  /* start of bytes to update crc */
      //int val;

      do {
        if (s.pending === s.pending_buf_size) {
          if (s.gzhead.hcrc && s.pending > beg) {
            strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
          }
          flush_pending(strm);
          beg = s.pending;
          if (s.pending === s.pending_buf_size) {
            val = 1;
            break;
          }
        }
        // JS specific: little magic to add zero terminator to end of string
        if (s.gzindex < s.gzhead.comment.length) {
          val = s.gzhead.comment.charCodeAt(s.gzindex++) & 0xff;
        } else {
          val = 0;
        }
        put_byte(s, val);
      } while (val !== 0);

      if (s.gzhead.hcrc && s.pending > beg) {
        strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
      }
      if (val === 0) {
        s.status = HCRC_STATE;
      }
    }
    else {
      s.status = HCRC_STATE;
    }
  }
  if (s.status === HCRC_STATE) {
    if (s.gzhead.hcrc) {
      if (s.pending + 2 > s.pending_buf_size) {
        flush_pending(strm);
      }
      if (s.pending + 2 <= s.pending_buf_size) {
        put_byte(s, strm.adler & 0xff);
        put_byte(s, (strm.adler >> 8) & 0xff);
        strm.adler = 0; //crc32(0L, Z_NULL, 0);
        s.status = BUSY_STATE;
      }
    }
    else {
      s.status = BUSY_STATE;
    }
  }
//#endif

  /* Flush as much pending output as possible */
  if (s.pending !== 0) {
    flush_pending(strm);
    if (strm.avail_out === 0) {
      /* Since avail_out is 0, deflate will be called again with
       * more output space, but possibly with both pending and
       * avail_in equal to zero. There won't be anything to do,
       * but this is not an error situation so make sure we
       * return OK instead of BUF_ERROR at next call of deflate:
       */
      s.last_flush = -1;
      return Z_OK;
    }

    /* Make sure there is something to do and avoid duplicate consecutive
     * flushes. For repeated and useless calls with Z_FINISH, we keep
     * returning Z_STREAM_END instead of Z_BUF_ERROR.
     */
  } else if (strm.avail_in === 0 && rank(flush) <= rank(old_flush) &&
    flush !== Z_FINISH) {
    return err(strm, Z_BUF_ERROR);
  }

  /* User must not provide more input after the first FINISH: */
  if (s.status === FINISH_STATE && strm.avail_in !== 0) {
    return err(strm, Z_BUF_ERROR);
  }

  /* Start a new block or continue the current one.
   */
  if (strm.avail_in !== 0 || s.lookahead !== 0 ||
    (flush !== Z_NO_FLUSH && s.status !== FINISH_STATE)) {
    var bstate = (s.strategy === Z_HUFFMAN_ONLY) ? deflate_huff(s, flush) :
      (s.strategy === Z_RLE ? deflate_rle(s, flush) :
        configuration_table[s.level].func(s, flush));

    if (bstate === BS_FINISH_STARTED || bstate === BS_FINISH_DONE) {
      s.status = FINISH_STATE;
    }
    if (bstate === BS_NEED_MORE || bstate === BS_FINISH_STARTED) {
      if (strm.avail_out === 0) {
        s.last_flush = -1;
        /* avoid BUF_ERROR next call, see above */
      }
      return Z_OK;
      /* If flush != Z_NO_FLUSH && avail_out == 0, the next call
       * of deflate should use the same flush parameter to make sure
       * that the flush is complete. So we don't have to output an
       * empty block here, this will be done at next call. This also
       * ensures that for a very small output buffer, we emit at most
       * one empty block.
       */
    }
    if (bstate === BS_BLOCK_DONE) {
      if (flush === Z_PARTIAL_FLUSH) {
        trees._tr_align(s);
      }
      else if (flush !== Z_BLOCK) { /* FULL_FLUSH or SYNC_FLUSH */

        trees._tr_stored_block(s, 0, 0, false);
        /* For a full flush, this empty block will be recognized
         * as a special marker by inflate_sync().
         */
        if (flush === Z_FULL_FLUSH) {
          /*** CLEAR_HASH(s); ***/             /* forget history */
          zero(s.head); // Fill with NIL (= 0);

          if (s.lookahead === 0) {
            s.strstart = 0;
            s.block_start = 0;
            s.insert = 0;
          }
        }
      }
      flush_pending(strm);
      if (strm.avail_out === 0) {
        s.last_flush = -1; /* avoid BUF_ERROR at next call, see above */
        return Z_OK;
      }
    }
  }
  //Assert(strm->avail_out > 0, "bug2");
  //if (strm.avail_out <= 0) { throw new Error("bug2");}

  if (flush !== Z_FINISH) { return Z_OK; }
  if (s.wrap <= 0) { return Z_STREAM_END; }

  /* Write the trailer */
  if (s.wrap === 2) {
    put_byte(s, strm.adler & 0xff);
    put_byte(s, (strm.adler >> 8) & 0xff);
    put_byte(s, (strm.adler >> 16) & 0xff);
    put_byte(s, (strm.adler >> 24) & 0xff);
    put_byte(s, strm.total_in & 0xff);
    put_byte(s, (strm.total_in >> 8) & 0xff);
    put_byte(s, (strm.total_in >> 16) & 0xff);
    put_byte(s, (strm.total_in >> 24) & 0xff);
  }
  else
  {
    putShortMSB(s, strm.adler >>> 16);
    putShortMSB(s, strm.adler & 0xffff);
  }

  flush_pending(strm);
  /* If avail_out is zero, the application will call deflate again
   * to flush the rest.
   */
  if (s.wrap > 0) { s.wrap = -s.wrap; }
  /* write the trailer only once! */
  return s.pending !== 0 ? Z_OK : Z_STREAM_END;
}

function deflateEnd(strm) {
  var status;

  if (!strm/*== Z_NULL*/ || !strm.state/*== Z_NULL*/) {
    return Z_STREAM_ERROR;
  }

  status = strm.state.status;
  if (status !== INIT_STATE &&
    status !== EXTRA_STATE &&
    status !== NAME_STATE &&
    status !== COMMENT_STATE &&
    status !== HCRC_STATE &&
    status !== BUSY_STATE &&
    status !== FINISH_STATE
  ) {
    return err(strm, Z_STREAM_ERROR);
  }

  strm.state = null;

  return status === BUSY_STATE ? err(strm, Z_DATA_ERROR) : Z_OK;
}


/* =========================================================================
 * Initializes the compression dictionary from the given byte
 * sequence without producing any compressed output.
 */
function deflateSetDictionary(strm, dictionary) {
  var dictLength = dictionary.length;

  var s;
  var str, n;
  var wrap;
  var avail;
  var next;
  var input;
  var tmpDict;

  if (!strm/*== Z_NULL*/ || !strm.state/*== Z_NULL*/) {
    return Z_STREAM_ERROR;
  }

  s = strm.state;
  wrap = s.wrap;

  if (wrap === 2 || (wrap === 1 && s.status !== INIT_STATE) || s.lookahead) {
    return Z_STREAM_ERROR;
  }

  /* when using zlib wrappers, compute Adler-32 for provided dictionary */
  if (wrap === 1) {
    /* adler32(strm->adler, dictionary, dictLength); */
    strm.adler = adler32(strm.adler, dictionary, dictLength, 0);
  }

  s.wrap = 0;   /* avoid computing Adler-32 in read_buf */

  /* if dictionary would fill window, just replace the history */
  if (dictLength >= s.w_size) {
    if (wrap === 0) {            /* already empty otherwise */
      /*** CLEAR_HASH(s); ***/
      zero(s.head); // Fill with NIL (= 0);
      s.strstart = 0;
      s.block_start = 0;
      s.insert = 0;
    }
    /* use the tail */
    // dictionary = dictionary.slice(dictLength - s.w_size);
    tmpDict = new utils.Buf8(s.w_size);
    utils.arraySet(tmpDict, dictionary, dictLength - s.w_size, s.w_size, 0);
    dictionary = tmpDict;
    dictLength = s.w_size;
  }
  /* insert dictionary into window and hash */
  avail = strm.avail_in;
  next = strm.next_in;
  input = strm.input;
  strm.avail_in = dictLength;
  strm.next_in = 0;
  strm.input = dictionary;
  fill_window(s);
  while (s.lookahead >= MIN_MATCH) {
    str = s.strstart;
    n = s.lookahead - (MIN_MATCH - 1);
    do {
      /* UPDATE_HASH(s, s->ins_h, s->window[str + MIN_MATCH-1]); */
      s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[str + MIN_MATCH - 1]) & s.hash_mask;

      s.prev[str & s.w_mask] = s.head[s.ins_h];

      s.head[s.ins_h] = str;
      str++;
    } while (--n);
    s.strstart = str;
    s.lookahead = MIN_MATCH - 1;
    fill_window(s);
  }
  s.strstart += s.lookahead;
  s.block_start = s.strstart;
  s.insert = s.lookahead;
  s.lookahead = 0;
  s.match_length = s.prev_length = MIN_MATCH - 1;
  s.match_available = 0;
  strm.next_in = next;
  strm.input = input;
  strm.avail_in = avail;
  s.wrap = wrap;
  return Z_OK;
}


exports.deflateInit = deflateInit;
exports.deflateInit2 = deflateInit2;
exports.deflateReset = deflateReset;
exports.deflateResetKeep = deflateResetKeep;
exports.deflateSetHeader = deflateSetHeader;
exports.deflate = deflate;
exports.deflateEnd = deflateEnd;
exports.deflateSetDictionary = deflateSetDictionary;
exports.deflateInfo = 'pako deflate (from Nodeca project)';

/* Not implemented
exports.deflateBound = deflateBound;
exports.deflateCopy = deflateCopy;
exports.deflateParams = deflateParams;
exports.deflatePending = deflatePending;
exports.deflatePrime = deflatePrime;
exports.deflateTune = deflateTune;
*/


/***/ }),

/***/ "./node_modules/pako/lib/zlib/gzheader.js":
/*!************************************************!*\
  !*** ./node_modules/pako/lib/zlib/gzheader.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

function GZheader() {
  /* true if compressed data believed to be text */
  this.text       = 0;
  /* modification time */
  this.time       = 0;
  /* extra flags (not used when writing a gzip file) */
  this.xflags     = 0;
  /* operating system */
  this.os         = 0;
  /* pointer to extra field or Z_NULL if none */
  this.extra      = null;
  /* extra field length (valid if extra != Z_NULL) */
  this.extra_len  = 0; // Actually, we don't need it in JS,
                       // but leave for few code modifications

  //
  // Setup limits is not necessary because in js we should not preallocate memory
  // for inflate use constant limit in 65536 bytes
  //

  /* space at extra (only when reading header) */
  // this.extra_max  = 0;
  /* pointer to zero-terminated file name or Z_NULL */
  this.name       = '';
  /* space at name (only when reading header) */
  // this.name_max   = 0;
  /* pointer to zero-terminated comment or Z_NULL */
  this.comment    = '';
  /* space at comment (only when reading header) */
  // this.comm_max   = 0;
  /* true if there was or will be a header crc */
  this.hcrc       = 0;
  /* true when done reading gzip header (not used when writing a gzip file) */
  this.done       = false;
}

module.exports = GZheader;


/***/ }),

/***/ "./node_modules/pako/lib/zlib/inffast.js":
/*!***********************************************!*\
  !*** ./node_modules/pako/lib/zlib/inffast.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

// See state defs from inflate.js
var BAD = 30;       /* got a data error -- remain here until reset */
var TYPE = 12;      /* i: waiting for type bits, including last-flag bit */

/*
   Decode literal, length, and distance codes and write out the resulting
   literal and match bytes until either not enough input or output is
   available, an end-of-block is encountered, or a data error is encountered.
   When large enough input and output buffers are supplied to inflate(), for
   example, a 16K input buffer and a 64K output buffer, more than 95% of the
   inflate execution time is spent in this routine.

   Entry assumptions:

        state.mode === LEN
        strm.avail_in >= 6
        strm.avail_out >= 258
        start >= strm.avail_out
        state.bits < 8

   On return, state.mode is one of:

        LEN -- ran out of enough output space or enough available input
        TYPE -- reached end of block code, inflate() to interpret next block
        BAD -- error in block data

   Notes:

    - The maximum input bits used by a length/distance pair is 15 bits for the
      length code, 5 bits for the length extra, 15 bits for the distance code,
      and 13 bits for the distance extra.  This totals 48 bits, or six bytes.
      Therefore if strm.avail_in >= 6, then there is enough input to avoid
      checking for available input while decoding.

    - The maximum bytes that a single length/distance pair can output is 258
      bytes, which is the maximum length that can be coded.  inflate_fast()
      requires strm.avail_out >= 258 for each loop to avoid checking for
      output space.
 */
module.exports = function inflate_fast(strm, start) {
  var state;
  var _in;                    /* local strm.input */
  var last;                   /* have enough input while in < last */
  var _out;                   /* local strm.output */
  var beg;                    /* inflate()'s initial strm.output */
  var end;                    /* while out < end, enough space available */
//#ifdef INFLATE_STRICT
  var dmax;                   /* maximum distance from zlib header */
//#endif
  var wsize;                  /* window size or zero if not using window */
  var whave;                  /* valid bytes in the window */
  var wnext;                  /* window write index */
  // Use `s_window` instead `window`, avoid conflict with instrumentation tools
  var s_window;               /* allocated sliding window, if wsize != 0 */
  var hold;                   /* local strm.hold */
  var bits;                   /* local strm.bits */
  var lcode;                  /* local strm.lencode */
  var dcode;                  /* local strm.distcode */
  var lmask;                  /* mask for first level of length codes */
  var dmask;                  /* mask for first level of distance codes */
  var here;                   /* retrieved table entry */
  var op;                     /* code bits, operation, extra bits, or */
                              /*  window position, window bytes to copy */
  var len;                    /* match length, unused bytes */
  var dist;                   /* match distance */
  var from;                   /* where to copy match from */
  var from_source;


  var input, output; // JS specific, because we have no pointers

  /* copy state to local variables */
  state = strm.state;
  //here = state.here;
  _in = strm.next_in;
  input = strm.input;
  last = _in + (strm.avail_in - 5);
  _out = strm.next_out;
  output = strm.output;
  beg = _out - (start - strm.avail_out);
  end = _out + (strm.avail_out - 257);
//#ifdef INFLATE_STRICT
  dmax = state.dmax;
//#endif
  wsize = state.wsize;
  whave = state.whave;
  wnext = state.wnext;
  s_window = state.window;
  hold = state.hold;
  bits = state.bits;
  lcode = state.lencode;
  dcode = state.distcode;
  lmask = (1 << state.lenbits) - 1;
  dmask = (1 << state.distbits) - 1;


  /* decode literals and length/distances until end-of-block or not enough
     input data or output space */

  top:
  do {
    if (bits < 15) {
      hold += input[_in++] << bits;
      bits += 8;
      hold += input[_in++] << bits;
      bits += 8;
    }

    here = lcode[hold & lmask];

    dolen:
    for (;;) { // Goto emulation
      op = here >>> 24/*here.bits*/;
      hold >>>= op;
      bits -= op;
      op = (here >>> 16) & 0xff/*here.op*/;
      if (op === 0) {                          /* literal */
        //Tracevv((stderr, here.val >= 0x20 && here.val < 0x7f ?
        //        "inflate:         literal '%c'\n" :
        //        "inflate:         literal 0x%02x\n", here.val));
        output[_out++] = here & 0xffff/*here.val*/;
      }
      else if (op & 16) {                     /* length base */
        len = here & 0xffff/*here.val*/;
        op &= 15;                           /* number of extra bits */
        if (op) {
          if (bits < op) {
            hold += input[_in++] << bits;
            bits += 8;
          }
          len += hold & ((1 << op) - 1);
          hold >>>= op;
          bits -= op;
        }
        //Tracevv((stderr, "inflate:         length %u\n", len));
        if (bits < 15) {
          hold += input[_in++] << bits;
          bits += 8;
          hold += input[_in++] << bits;
          bits += 8;
        }
        here = dcode[hold & dmask];

        dodist:
        for (;;) { // goto emulation
          op = here >>> 24/*here.bits*/;
          hold >>>= op;
          bits -= op;
          op = (here >>> 16) & 0xff/*here.op*/;

          if (op & 16) {                      /* distance base */
            dist = here & 0xffff/*here.val*/;
            op &= 15;                       /* number of extra bits */
            if (bits < op) {
              hold += input[_in++] << bits;
              bits += 8;
              if (bits < op) {
                hold += input[_in++] << bits;
                bits += 8;
              }
            }
            dist += hold & ((1 << op) - 1);
//#ifdef INFLATE_STRICT
            if (dist > dmax) {
              strm.msg = 'invalid distance too far back';
              state.mode = BAD;
              break top;
            }
//#endif
            hold >>>= op;
            bits -= op;
            //Tracevv((stderr, "inflate:         distance %u\n", dist));
            op = _out - beg;                /* max distance in output */
            if (dist > op) {                /* see if copy from window */
              op = dist - op;               /* distance back in window */
              if (op > whave) {
                if (state.sane) {
                  strm.msg = 'invalid distance too far back';
                  state.mode = BAD;
                  break top;
                }

// (!) This block is disabled in zlib defaults,
// don't enable it for binary compatibility
//#ifdef INFLATE_ALLOW_INVALID_DISTANCE_TOOFAR_ARRR
//                if (len <= op - whave) {
//                  do {
//                    output[_out++] = 0;
//                  } while (--len);
//                  continue top;
//                }
//                len -= op - whave;
//                do {
//                  output[_out++] = 0;
//                } while (--op > whave);
//                if (op === 0) {
//                  from = _out - dist;
//                  do {
//                    output[_out++] = output[from++];
//                  } while (--len);
//                  continue top;
//                }
//#endif
              }
              from = 0; // window index
              from_source = s_window;
              if (wnext === 0) {           /* very common case */
                from += wsize - op;
                if (op < len) {         /* some from window */
                  len -= op;
                  do {
                    output[_out++] = s_window[from++];
                  } while (--op);
                  from = _out - dist;  /* rest from output */
                  from_source = output;
                }
              }
              else if (wnext < op) {      /* wrap around window */
                from += wsize + wnext - op;
                op -= wnext;
                if (op < len) {         /* some from end of window */
                  len -= op;
                  do {
                    output[_out++] = s_window[from++];
                  } while (--op);
                  from = 0;
                  if (wnext < len) {  /* some from start of window */
                    op = wnext;
                    len -= op;
                    do {
                      output[_out++] = s_window[from++];
                    } while (--op);
                    from = _out - dist;      /* rest from output */
                    from_source = output;
                  }
                }
              }
              else {                      /* contiguous in window */
                from += wnext - op;
                if (op < len) {         /* some from window */
                  len -= op;
                  do {
                    output[_out++] = s_window[from++];
                  } while (--op);
                  from = _out - dist;  /* rest from output */
                  from_source = output;
                }
              }
              while (len > 2) {
                output[_out++] = from_source[from++];
                output[_out++] = from_source[from++];
                output[_out++] = from_source[from++];
                len -= 3;
              }
              if (len) {
                output[_out++] = from_source[from++];
                if (len > 1) {
                  output[_out++] = from_source[from++];
                }
              }
            }
            else {
              from = _out - dist;          /* copy direct from output */
              do {                        /* minimum length is three */
                output[_out++] = output[from++];
                output[_out++] = output[from++];
                output[_out++] = output[from++];
                len -= 3;
              } while (len > 2);
              if (len) {
                output[_out++] = output[from++];
                if (len > 1) {
                  output[_out++] = output[from++];
                }
              }
            }
          }
          else if ((op & 64) === 0) {          /* 2nd level distance code */
            here = dcode[(here & 0xffff)/*here.val*/ + (hold & ((1 << op) - 1))];
            continue dodist;
          }
          else {
            strm.msg = 'invalid distance code';
            state.mode = BAD;
            break top;
          }

          break; // need to emulate goto via "continue"
        }
      }
      else if ((op & 64) === 0) {              /* 2nd level length code */
        here = lcode[(here & 0xffff)/*here.val*/ + (hold & ((1 << op) - 1))];
        continue dolen;
      }
      else if (op & 32) {                     /* end-of-block */
        //Tracevv((stderr, "inflate:         end of block\n"));
        state.mode = TYPE;
        break top;
      }
      else {
        strm.msg = 'invalid literal/length code';
        state.mode = BAD;
        break top;
      }

      break; // need to emulate goto via "continue"
    }
  } while (_in < last && _out < end);

  /* return unused bytes (on entry, bits < 8, so in won't go too far back) */
  len = bits >> 3;
  _in -= len;
  bits -= len << 3;
  hold &= (1 << bits) - 1;

  /* update state and return */
  strm.next_in = _in;
  strm.next_out = _out;
  strm.avail_in = (_in < last ? 5 + (last - _in) : 5 - (_in - last));
  strm.avail_out = (_out < end ? 257 + (end - _out) : 257 - (_out - end));
  state.hold = hold;
  state.bits = bits;
  return;
};


/***/ }),

/***/ "./node_modules/pako/lib/zlib/inflate.js":
/*!***********************************************!*\
  !*** ./node_modules/pako/lib/zlib/inflate.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

var utils         = __webpack_require__(/*! ../utils/common */ "./node_modules/pako/lib/utils/common.js");
var adler32       = __webpack_require__(/*! ./adler32 */ "./node_modules/pako/lib/zlib/adler32.js");
var crc32         = __webpack_require__(/*! ./crc32 */ "./node_modules/pako/lib/zlib/crc32.js");
var inflate_fast  = __webpack_require__(/*! ./inffast */ "./node_modules/pako/lib/zlib/inffast.js");
var inflate_table = __webpack_require__(/*! ./inftrees */ "./node_modules/pako/lib/zlib/inftrees.js");

var CODES = 0;
var LENS = 1;
var DISTS = 2;

/* Public constants ==========================================================*/
/* ===========================================================================*/


/* Allowed flush values; see deflate() and inflate() below for details */
//var Z_NO_FLUSH      = 0;
//var Z_PARTIAL_FLUSH = 1;
//var Z_SYNC_FLUSH    = 2;
//var Z_FULL_FLUSH    = 3;
var Z_FINISH        = 4;
var Z_BLOCK         = 5;
var Z_TREES         = 6;


/* Return codes for the compression/decompression functions. Negative values
 * are errors, positive values are used for special but normal events.
 */
var Z_OK            = 0;
var Z_STREAM_END    = 1;
var Z_NEED_DICT     = 2;
//var Z_ERRNO         = -1;
var Z_STREAM_ERROR  = -2;
var Z_DATA_ERROR    = -3;
var Z_MEM_ERROR     = -4;
var Z_BUF_ERROR     = -5;
//var Z_VERSION_ERROR = -6;

/* The deflate compression method */
var Z_DEFLATED  = 8;


/* STATES ====================================================================*/
/* ===========================================================================*/


var    HEAD = 1;       /* i: waiting for magic header */
var    FLAGS = 2;      /* i: waiting for method and flags (gzip) */
var    TIME = 3;       /* i: waiting for modification time (gzip) */
var    OS = 4;         /* i: waiting for extra flags and operating system (gzip) */
var    EXLEN = 5;      /* i: waiting for extra length (gzip) */
var    EXTRA = 6;      /* i: waiting for extra bytes (gzip) */
var    NAME = 7;       /* i: waiting for end of file name (gzip) */
var    COMMENT = 8;    /* i: waiting for end of comment (gzip) */
var    HCRC = 9;       /* i: waiting for header crc (gzip) */
var    DICTID = 10;    /* i: waiting for dictionary check value */
var    DICT = 11;      /* waiting for inflateSetDictionary() call */
var        TYPE = 12;      /* i: waiting for type bits, including last-flag bit */
var        TYPEDO = 13;    /* i: same, but skip check to exit inflate on new block */
var        STORED = 14;    /* i: waiting for stored size (length and complement) */
var        COPY_ = 15;     /* i/o: same as COPY below, but only first time in */
var        COPY = 16;      /* i/o: waiting for input or output to copy stored block */
var        TABLE = 17;     /* i: waiting for dynamic block table lengths */
var        LENLENS = 18;   /* i: waiting for code length code lengths */
var        CODELENS = 19;  /* i: waiting for length/lit and distance code lengths */
var            LEN_ = 20;      /* i: same as LEN below, but only first time in */
var            LEN = 21;       /* i: waiting for length/lit/eob code */
var            LENEXT = 22;    /* i: waiting for length extra bits */
var            DIST = 23;      /* i: waiting for distance code */
var            DISTEXT = 24;   /* i: waiting for distance extra bits */
var            MATCH = 25;     /* o: waiting for output space to copy string */
var            LIT = 26;       /* o: waiting for output space to write literal */
var    CHECK = 27;     /* i: waiting for 32-bit check value */
var    LENGTH = 28;    /* i: waiting for 32-bit length (gzip) */
var    DONE = 29;      /* finished check, done -- remain here until reset */
var    BAD = 30;       /* got a data error -- remain here until reset */
var    MEM = 31;       /* got an inflate() memory error -- remain here until reset */
var    SYNC = 32;      /* looking for synchronization bytes to restart inflate() */

/* ===========================================================================*/



var ENOUGH_LENS = 852;
var ENOUGH_DISTS = 592;
//var ENOUGH =  (ENOUGH_LENS+ENOUGH_DISTS);

var MAX_WBITS = 15;
/* 32K LZ77 window */
var DEF_WBITS = MAX_WBITS;


function zswap32(q) {
  return  (((q >>> 24) & 0xff) +
          ((q >>> 8) & 0xff00) +
          ((q & 0xff00) << 8) +
          ((q & 0xff) << 24));
}


function InflateState() {
  this.mode = 0;             /* current inflate mode */
  this.last = false;          /* true if processing last block */
  this.wrap = 0;              /* bit 0 true for zlib, bit 1 true for gzip */
  this.havedict = false;      /* true if dictionary provided */
  this.flags = 0;             /* gzip header method and flags (0 if zlib) */
  this.dmax = 0;              /* zlib header max distance (INFLATE_STRICT) */
  this.check = 0;             /* protected copy of check value */
  this.total = 0;             /* protected copy of output count */
  // TODO: may be {}
  this.head = null;           /* where to save gzip header information */

  /* sliding window */
  this.wbits = 0;             /* log base 2 of requested window size */
  this.wsize = 0;             /* window size or zero if not using window */
  this.whave = 0;             /* valid bytes in the window */
  this.wnext = 0;             /* window write index */
  this.window = null;         /* allocated sliding window, if needed */

  /* bit accumulator */
  this.hold = 0;              /* input bit accumulator */
  this.bits = 0;              /* number of bits in "in" */

  /* for string and stored block copying */
  this.length = 0;            /* literal or length of data to copy */
  this.offset = 0;            /* distance back to copy string from */

  /* for table and code decoding */
  this.extra = 0;             /* extra bits needed */

  /* fixed and dynamic code tables */
  this.lencode = null;          /* starting table for length/literal codes */
  this.distcode = null;         /* starting table for distance codes */
  this.lenbits = 0;           /* index bits for lencode */
  this.distbits = 0;          /* index bits for distcode */

  /* dynamic table building */
  this.ncode = 0;             /* number of code length code lengths */
  this.nlen = 0;              /* number of length code lengths */
  this.ndist = 0;             /* number of distance code lengths */
  this.have = 0;              /* number of code lengths in lens[] */
  this.next = null;              /* next available space in codes[] */

  this.lens = new utils.Buf16(320); /* temporary storage for code lengths */
  this.work = new utils.Buf16(288); /* work area for code table building */

  /*
   because we don't have pointers in js, we use lencode and distcode directly
   as buffers so we don't need codes
  */
  //this.codes = new utils.Buf32(ENOUGH);       /* space for code tables */
  this.lendyn = null;              /* dynamic table for length/literal codes (JS specific) */
  this.distdyn = null;             /* dynamic table for distance codes (JS specific) */
  this.sane = 0;                   /* if false, allow invalid distance too far */
  this.back = 0;                   /* bits back of last unprocessed length/lit */
  this.was = 0;                    /* initial length of match */
}

function inflateResetKeep(strm) {
  var state;

  if (!strm || !strm.state) { return Z_STREAM_ERROR; }
  state = strm.state;
  strm.total_in = strm.total_out = state.total = 0;
  strm.msg = ''; /*Z_NULL*/
  if (state.wrap) {       /* to support ill-conceived Java test suite */
    strm.adler = state.wrap & 1;
  }
  state.mode = HEAD;
  state.last = 0;
  state.havedict = 0;
  state.dmax = 32768;
  state.head = null/*Z_NULL*/;
  state.hold = 0;
  state.bits = 0;
  //state.lencode = state.distcode = state.next = state.codes;
  state.lencode = state.lendyn = new utils.Buf32(ENOUGH_LENS);
  state.distcode = state.distdyn = new utils.Buf32(ENOUGH_DISTS);

  state.sane = 1;
  state.back = -1;
  //Tracev((stderr, "inflate: reset\n"));
  return Z_OK;
}

function inflateReset(strm) {
  var state;

  if (!strm || !strm.state) { return Z_STREAM_ERROR; }
  state = strm.state;
  state.wsize = 0;
  state.whave = 0;
  state.wnext = 0;
  return inflateResetKeep(strm);

}

function inflateReset2(strm, windowBits) {
  var wrap;
  var state;

  /* get the state */
  if (!strm || !strm.state) { return Z_STREAM_ERROR; }
  state = strm.state;

  /* extract wrap request from windowBits parameter */
  if (windowBits < 0) {
    wrap = 0;
    windowBits = -windowBits;
  }
  else {
    wrap = (windowBits >> 4) + 1;
    if (windowBits < 48) {
      windowBits &= 15;
    }
  }

  /* set number of window bits, free window if different */
  if (windowBits && (windowBits < 8 || windowBits > 15)) {
    return Z_STREAM_ERROR;
  }
  if (state.window !== null && state.wbits !== windowBits) {
    state.window = null;
  }

  /* update state and reset the rest of it */
  state.wrap = wrap;
  state.wbits = windowBits;
  return inflateReset(strm);
}

function inflateInit2(strm, windowBits) {
  var ret;
  var state;

  if (!strm) { return Z_STREAM_ERROR; }
  //strm.msg = Z_NULL;                 /* in case we return an error */

  state = new InflateState();

  //if (state === Z_NULL) return Z_MEM_ERROR;
  //Tracev((stderr, "inflate: allocated\n"));
  strm.state = state;
  state.window = null/*Z_NULL*/;
  ret = inflateReset2(strm, windowBits);
  if (ret !== Z_OK) {
    strm.state = null/*Z_NULL*/;
  }
  return ret;
}

function inflateInit(strm) {
  return inflateInit2(strm, DEF_WBITS);
}


/*
 Return state with length and distance decoding tables and index sizes set to
 fixed code decoding.  Normally this returns fixed tables from inffixed.h.
 If BUILDFIXED is defined, then instead this routine builds the tables the
 first time it's called, and returns those tables the first time and
 thereafter.  This reduces the size of the code by about 2K bytes, in
 exchange for a little execution time.  However, BUILDFIXED should not be
 used for threaded applications, since the rewriting of the tables and virgin
 may not be thread-safe.
 */
var virgin = true;

var lenfix, distfix; // We have no pointers in JS, so keep tables separate

function fixedtables(state) {
  /* build fixed huffman tables if first call (may not be thread safe) */
  if (virgin) {
    var sym;

    lenfix = new utils.Buf32(512);
    distfix = new utils.Buf32(32);

    /* literal/length table */
    sym = 0;
    while (sym < 144) { state.lens[sym++] = 8; }
    while (sym < 256) { state.lens[sym++] = 9; }
    while (sym < 280) { state.lens[sym++] = 7; }
    while (sym < 288) { state.lens[sym++] = 8; }

    inflate_table(LENS,  state.lens, 0, 288, lenfix,   0, state.work, { bits: 9 });

    /* distance table */
    sym = 0;
    while (sym < 32) { state.lens[sym++] = 5; }

    inflate_table(DISTS, state.lens, 0, 32,   distfix, 0, state.work, { bits: 5 });

    /* do this just once */
    virgin = false;
  }

  state.lencode = lenfix;
  state.lenbits = 9;
  state.distcode = distfix;
  state.distbits = 5;
}


/*
 Update the window with the last wsize (normally 32K) bytes written before
 returning.  If window does not exist yet, create it.  This is only called
 when a window is already in use, or when output has been written during this
 inflate call, but the end of the deflate stream has not been reached yet.
 It is also called to create a window for dictionary data when a dictionary
 is loaded.

 Providing output buffers larger than 32K to inflate() should provide a speed
 advantage, since only the last 32K of output is copied to the sliding window
 upon return from inflate(), and since all distances after the first 32K of
 output will fall in the output data, making match copies simpler and faster.
 The advantage may be dependent on the size of the processor's data caches.
 */
function updatewindow(strm, src, end, copy) {
  var dist;
  var state = strm.state;

  /* if it hasn't been done already, allocate space for the window */
  if (state.window === null) {
    state.wsize = 1 << state.wbits;
    state.wnext = 0;
    state.whave = 0;

    state.window = new utils.Buf8(state.wsize);
  }

  /* copy state->wsize or less output bytes into the circular window */
  if (copy >= state.wsize) {
    utils.arraySet(state.window, src, end - state.wsize, state.wsize, 0);
    state.wnext = 0;
    state.whave = state.wsize;
  }
  else {
    dist = state.wsize - state.wnext;
    if (dist > copy) {
      dist = copy;
    }
    //zmemcpy(state->window + state->wnext, end - copy, dist);
    utils.arraySet(state.window, src, end - copy, dist, state.wnext);
    copy -= dist;
    if (copy) {
      //zmemcpy(state->window, end - copy, copy);
      utils.arraySet(state.window, src, end - copy, copy, 0);
      state.wnext = copy;
      state.whave = state.wsize;
    }
    else {
      state.wnext += dist;
      if (state.wnext === state.wsize) { state.wnext = 0; }
      if (state.whave < state.wsize) { state.whave += dist; }
    }
  }
  return 0;
}

function inflate(strm, flush) {
  var state;
  var input, output;          // input/output buffers
  var next;                   /* next input INDEX */
  var put;                    /* next output INDEX */
  var have, left;             /* available input and output */
  var hold;                   /* bit buffer */
  var bits;                   /* bits in bit buffer */
  var _in, _out;              /* save starting available input and output */
  var copy;                   /* number of stored or match bytes to copy */
  var from;                   /* where to copy match bytes from */
  var from_source;
  var here = 0;               /* current decoding table entry */
  var here_bits, here_op, here_val; // paked "here" denormalized (JS specific)
  //var last;                   /* parent table entry */
  var last_bits, last_op, last_val; // paked "last" denormalized (JS specific)
  var len;                    /* length to copy for repeats, bits to drop */
  var ret;                    /* return code */
  var hbuf = new utils.Buf8(4);    /* buffer for gzip header crc calculation */
  var opts;

  var n; // temporary var for NEED_BITS

  var order = /* permutation of code lengths */
    [ 16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15 ];


  if (!strm || !strm.state || !strm.output ||
      (!strm.input && strm.avail_in !== 0)) {
    return Z_STREAM_ERROR;
  }

  state = strm.state;
  if (state.mode === TYPE) { state.mode = TYPEDO; }    /* skip check */


  //--- LOAD() ---
  put = strm.next_out;
  output = strm.output;
  left = strm.avail_out;
  next = strm.next_in;
  input = strm.input;
  have = strm.avail_in;
  hold = state.hold;
  bits = state.bits;
  //---

  _in = have;
  _out = left;
  ret = Z_OK;

  inf_leave: // goto emulation
  for (;;) {
    switch (state.mode) {
      case HEAD:
        if (state.wrap === 0) {
          state.mode = TYPEDO;
          break;
        }
        //=== NEEDBITS(16);
        while (bits < 16) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        if ((state.wrap & 2) && hold === 0x8b1f) {  /* gzip header */
          state.check = 0/*crc32(0L, Z_NULL, 0)*/;
          //=== CRC2(state.check, hold);
          hbuf[0] = hold & 0xff;
          hbuf[1] = (hold >>> 8) & 0xff;
          state.check = crc32(state.check, hbuf, 2, 0);
          //===//

          //=== INITBITS();
          hold = 0;
          bits = 0;
          //===//
          state.mode = FLAGS;
          break;
        }
        state.flags = 0;           /* expect zlib header */
        if (state.head) {
          state.head.done = false;
        }
        if (!(state.wrap & 1) ||   /* check if zlib header allowed */
          (((hold & 0xff)/*BITS(8)*/ << 8) + (hold >> 8)) % 31) {
          strm.msg = 'incorrect header check';
          state.mode = BAD;
          break;
        }
        if ((hold & 0x0f)/*BITS(4)*/ !== Z_DEFLATED) {
          strm.msg = 'unknown compression method';
          state.mode = BAD;
          break;
        }
        //--- DROPBITS(4) ---//
        hold >>>= 4;
        bits -= 4;
        //---//
        len = (hold & 0x0f)/*BITS(4)*/ + 8;
        if (state.wbits === 0) {
          state.wbits = len;
        }
        else if (len > state.wbits) {
          strm.msg = 'invalid window size';
          state.mode = BAD;
          break;
        }
        state.dmax = 1 << len;
        //Tracev((stderr, "inflate:   zlib header ok\n"));
        strm.adler = state.check = 1/*adler32(0L, Z_NULL, 0)*/;
        state.mode = hold & 0x200 ? DICTID : TYPE;
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
        break;
      case FLAGS:
        //=== NEEDBITS(16); */
        while (bits < 16) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        state.flags = hold;
        if ((state.flags & 0xff) !== Z_DEFLATED) {
          strm.msg = 'unknown compression method';
          state.mode = BAD;
          break;
        }
        if (state.flags & 0xe000) {
          strm.msg = 'unknown header flags set';
          state.mode = BAD;
          break;
        }
        if (state.head) {
          state.head.text = ((hold >> 8) & 1);
        }
        if (state.flags & 0x0200) {
          //=== CRC2(state.check, hold);
          hbuf[0] = hold & 0xff;
          hbuf[1] = (hold >>> 8) & 0xff;
          state.check = crc32(state.check, hbuf, 2, 0);
          //===//
        }
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
        state.mode = TIME;
        /* falls through */
      case TIME:
        //=== NEEDBITS(32); */
        while (bits < 32) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        if (state.head) {
          state.head.time = hold;
        }
        if (state.flags & 0x0200) {
          //=== CRC4(state.check, hold)
          hbuf[0] = hold & 0xff;
          hbuf[1] = (hold >>> 8) & 0xff;
          hbuf[2] = (hold >>> 16) & 0xff;
          hbuf[3] = (hold >>> 24) & 0xff;
          state.check = crc32(state.check, hbuf, 4, 0);
          //===
        }
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
        state.mode = OS;
        /* falls through */
      case OS:
        //=== NEEDBITS(16); */
        while (bits < 16) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        if (state.head) {
          state.head.xflags = (hold & 0xff);
          state.head.os = (hold >> 8);
        }
        if (state.flags & 0x0200) {
          //=== CRC2(state.check, hold);
          hbuf[0] = hold & 0xff;
          hbuf[1] = (hold >>> 8) & 0xff;
          state.check = crc32(state.check, hbuf, 2, 0);
          //===//
        }
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
        state.mode = EXLEN;
        /* falls through */
      case EXLEN:
        if (state.flags & 0x0400) {
          //=== NEEDBITS(16); */
          while (bits < 16) {
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          //===//
          state.length = hold;
          if (state.head) {
            state.head.extra_len = hold;
          }
          if (state.flags & 0x0200) {
            //=== CRC2(state.check, hold);
            hbuf[0] = hold & 0xff;
            hbuf[1] = (hold >>> 8) & 0xff;
            state.check = crc32(state.check, hbuf, 2, 0);
            //===//
          }
          //=== INITBITS();
          hold = 0;
          bits = 0;
          //===//
        }
        else if (state.head) {
          state.head.extra = null/*Z_NULL*/;
        }
        state.mode = EXTRA;
        /* falls through */
      case EXTRA:
        if (state.flags & 0x0400) {
          copy = state.length;
          if (copy > have) { copy = have; }
          if (copy) {
            if (state.head) {
              len = state.head.extra_len - state.length;
              if (!state.head.extra) {
                // Use untyped array for more convenient processing later
                state.head.extra = new Array(state.head.extra_len);
              }
              utils.arraySet(
                state.head.extra,
                input,
                next,
                // extra field is limited to 65536 bytes
                // - no need for additional size check
                copy,
                /*len + copy > state.head.extra_max - len ? state.head.extra_max : copy,*/
                len
              );
              //zmemcpy(state.head.extra + len, next,
              //        len + copy > state.head.extra_max ?
              //        state.head.extra_max - len : copy);
            }
            if (state.flags & 0x0200) {
              state.check = crc32(state.check, input, copy, next);
            }
            have -= copy;
            next += copy;
            state.length -= copy;
          }
          if (state.length) { break inf_leave; }
        }
        state.length = 0;
        state.mode = NAME;
        /* falls through */
      case NAME:
        if (state.flags & 0x0800) {
          if (have === 0) { break inf_leave; }
          copy = 0;
          do {
            // TODO: 2 or 1 bytes?
            len = input[next + copy++];
            /* use constant limit because in js we should not preallocate memory */
            if (state.head && len &&
                (state.length < 65536 /*state.head.name_max*/)) {
              state.head.name += String.fromCharCode(len);
            }
          } while (len && copy < have);

          if (state.flags & 0x0200) {
            state.check = crc32(state.check, input, copy, next);
          }
          have -= copy;
          next += copy;
          if (len) { break inf_leave; }
        }
        else if (state.head) {
          state.head.name = null;
        }
        state.length = 0;
        state.mode = COMMENT;
        /* falls through */
      case COMMENT:
        if (state.flags & 0x1000) {
          if (have === 0) { break inf_leave; }
          copy = 0;
          do {
            len = input[next + copy++];
            /* use constant limit because in js we should not preallocate memory */
            if (state.head && len &&
                (state.length < 65536 /*state.head.comm_max*/)) {
              state.head.comment += String.fromCharCode(len);
            }
          } while (len && copy < have);
          if (state.flags & 0x0200) {
            state.check = crc32(state.check, input, copy, next);
          }
          have -= copy;
          next += copy;
          if (len) { break inf_leave; }
        }
        else if (state.head) {
          state.head.comment = null;
        }
        state.mode = HCRC;
        /* falls through */
      case HCRC:
        if (state.flags & 0x0200) {
          //=== NEEDBITS(16); */
          while (bits < 16) {
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          //===//
          if (hold !== (state.check & 0xffff)) {
            strm.msg = 'header crc mismatch';
            state.mode = BAD;
            break;
          }
          //=== INITBITS();
          hold = 0;
          bits = 0;
          //===//
        }
        if (state.head) {
          state.head.hcrc = ((state.flags >> 9) & 1);
          state.head.done = true;
        }
        strm.adler = state.check = 0;
        state.mode = TYPE;
        break;
      case DICTID:
        //=== NEEDBITS(32); */
        while (bits < 32) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        strm.adler = state.check = zswap32(hold);
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
        state.mode = DICT;
        /* falls through */
      case DICT:
        if (state.havedict === 0) {
          //--- RESTORE() ---
          strm.next_out = put;
          strm.avail_out = left;
          strm.next_in = next;
          strm.avail_in = have;
          state.hold = hold;
          state.bits = bits;
          //---
          return Z_NEED_DICT;
        }
        strm.adler = state.check = 1/*adler32(0L, Z_NULL, 0)*/;
        state.mode = TYPE;
        /* falls through */
      case TYPE:
        if (flush === Z_BLOCK || flush === Z_TREES) { break inf_leave; }
        /* falls through */
      case TYPEDO:
        if (state.last) {
          //--- BYTEBITS() ---//
          hold >>>= bits & 7;
          bits -= bits & 7;
          //---//
          state.mode = CHECK;
          break;
        }
        //=== NEEDBITS(3); */
        while (bits < 3) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        state.last = (hold & 0x01)/*BITS(1)*/;
        //--- DROPBITS(1) ---//
        hold >>>= 1;
        bits -= 1;
        //---//

        switch ((hold & 0x03)/*BITS(2)*/) {
          case 0:                             /* stored block */
            //Tracev((stderr, "inflate:     stored block%s\n",
            //        state.last ? " (last)" : ""));
            state.mode = STORED;
            break;
          case 1:                             /* fixed block */
            fixedtables(state);
            //Tracev((stderr, "inflate:     fixed codes block%s\n",
            //        state.last ? " (last)" : ""));
            state.mode = LEN_;             /* decode codes */
            if (flush === Z_TREES) {
              //--- DROPBITS(2) ---//
              hold >>>= 2;
              bits -= 2;
              //---//
              break inf_leave;
            }
            break;
          case 2:                             /* dynamic block */
            //Tracev((stderr, "inflate:     dynamic codes block%s\n",
            //        state.last ? " (last)" : ""));
            state.mode = TABLE;
            break;
          case 3:
            strm.msg = 'invalid block type';
            state.mode = BAD;
        }
        //--- DROPBITS(2) ---//
        hold >>>= 2;
        bits -= 2;
        //---//
        break;
      case STORED:
        //--- BYTEBITS() ---// /* go to byte boundary */
        hold >>>= bits & 7;
        bits -= bits & 7;
        //---//
        //=== NEEDBITS(32); */
        while (bits < 32) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        if ((hold & 0xffff) !== ((hold >>> 16) ^ 0xffff)) {
          strm.msg = 'invalid stored block lengths';
          state.mode = BAD;
          break;
        }
        state.length = hold & 0xffff;
        //Tracev((stderr, "inflate:       stored length %u\n",
        //        state.length));
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
        state.mode = COPY_;
        if (flush === Z_TREES) { break inf_leave; }
        /* falls through */
      case COPY_:
        state.mode = COPY;
        /* falls through */
      case COPY:
        copy = state.length;
        if (copy) {
          if (copy > have) { copy = have; }
          if (copy > left) { copy = left; }
          if (copy === 0) { break inf_leave; }
          //--- zmemcpy(put, next, copy); ---
          utils.arraySet(output, input, next, copy, put);
          //---//
          have -= copy;
          next += copy;
          left -= copy;
          put += copy;
          state.length -= copy;
          break;
        }
        //Tracev((stderr, "inflate:       stored end\n"));
        state.mode = TYPE;
        break;
      case TABLE:
        //=== NEEDBITS(14); */
        while (bits < 14) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        state.nlen = (hold & 0x1f)/*BITS(5)*/ + 257;
        //--- DROPBITS(5) ---//
        hold >>>= 5;
        bits -= 5;
        //---//
        state.ndist = (hold & 0x1f)/*BITS(5)*/ + 1;
        //--- DROPBITS(5) ---//
        hold >>>= 5;
        bits -= 5;
        //---//
        state.ncode = (hold & 0x0f)/*BITS(4)*/ + 4;
        //--- DROPBITS(4) ---//
        hold >>>= 4;
        bits -= 4;
        //---//
//#ifndef PKZIP_BUG_WORKAROUND
        if (state.nlen > 286 || state.ndist > 30) {
          strm.msg = 'too many length or distance symbols';
          state.mode = BAD;
          break;
        }
//#endif
        //Tracev((stderr, "inflate:       table sizes ok\n"));
        state.have = 0;
        state.mode = LENLENS;
        /* falls through */
      case LENLENS:
        while (state.have < state.ncode) {
          //=== NEEDBITS(3);
          while (bits < 3) {
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          //===//
          state.lens[order[state.have++]] = (hold & 0x07);//BITS(3);
          //--- DROPBITS(3) ---//
          hold >>>= 3;
          bits -= 3;
          //---//
        }
        while (state.have < 19) {
          state.lens[order[state.have++]] = 0;
        }
        // We have separate tables & no pointers. 2 commented lines below not needed.
        //state.next = state.codes;
        //state.lencode = state.next;
        // Switch to use dynamic table
        state.lencode = state.lendyn;
        state.lenbits = 7;

        opts = { bits: state.lenbits };
        ret = inflate_table(CODES, state.lens, 0, 19, state.lencode, 0, state.work, opts);
        state.lenbits = opts.bits;

        if (ret) {
          strm.msg = 'invalid code lengths set';
          state.mode = BAD;
          break;
        }
        //Tracev((stderr, "inflate:       code lengths ok\n"));
        state.have = 0;
        state.mode = CODELENS;
        /* falls through */
      case CODELENS:
        while (state.have < state.nlen + state.ndist) {
          for (;;) {
            here = state.lencode[hold & ((1 << state.lenbits) - 1)];/*BITS(state.lenbits)*/
            here_bits = here >>> 24;
            here_op = (here >>> 16) & 0xff;
            here_val = here & 0xffff;

            if ((here_bits) <= bits) { break; }
            //--- PULLBYTE() ---//
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
            //---//
          }
          if (here_val < 16) {
            //--- DROPBITS(here.bits) ---//
            hold >>>= here_bits;
            bits -= here_bits;
            //---//
            state.lens[state.have++] = here_val;
          }
          else {
            if (here_val === 16) {
              //=== NEEDBITS(here.bits + 2);
              n = here_bits + 2;
              while (bits < n) {
                if (have === 0) { break inf_leave; }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              //===//
              //--- DROPBITS(here.bits) ---//
              hold >>>= here_bits;
              bits -= here_bits;
              //---//
              if (state.have === 0) {
                strm.msg = 'invalid bit length repeat';
                state.mode = BAD;
                break;
              }
              len = state.lens[state.have - 1];
              copy = 3 + (hold & 0x03);//BITS(2);
              //--- DROPBITS(2) ---//
              hold >>>= 2;
              bits -= 2;
              //---//
            }
            else if (here_val === 17) {
              //=== NEEDBITS(here.bits + 3);
              n = here_bits + 3;
              while (bits < n) {
                if (have === 0) { break inf_leave; }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              //===//
              //--- DROPBITS(here.bits) ---//
              hold >>>= here_bits;
              bits -= here_bits;
              //---//
              len = 0;
              copy = 3 + (hold & 0x07);//BITS(3);
              //--- DROPBITS(3) ---//
              hold >>>= 3;
              bits -= 3;
              //---//
            }
            else {
              //=== NEEDBITS(here.bits + 7);
              n = here_bits + 7;
              while (bits < n) {
                if (have === 0) { break inf_leave; }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              //===//
              //--- DROPBITS(here.bits) ---//
              hold >>>= here_bits;
              bits -= here_bits;
              //---//
              len = 0;
              copy = 11 + (hold & 0x7f);//BITS(7);
              //--- DROPBITS(7) ---//
              hold >>>= 7;
              bits -= 7;
              //---//
            }
            if (state.have + copy > state.nlen + state.ndist) {
              strm.msg = 'invalid bit length repeat';
              state.mode = BAD;
              break;
            }
            while (copy--) {
              state.lens[state.have++] = len;
            }
          }
        }

        /* handle error breaks in while */
        if (state.mode === BAD) { break; }

        /* check for end-of-block code (better have one) */
        if (state.lens[256] === 0) {
          strm.msg = 'invalid code -- missing end-of-block';
          state.mode = BAD;
          break;
        }

        /* build code tables -- note: do not change the lenbits or distbits
           values here (9 and 6) without reading the comments in inftrees.h
           concerning the ENOUGH constants, which depend on those values */
        state.lenbits = 9;

        opts = { bits: state.lenbits };
        ret = inflate_table(LENS, state.lens, 0, state.nlen, state.lencode, 0, state.work, opts);
        // We have separate tables & no pointers. 2 commented lines below not needed.
        // state.next_index = opts.table_index;
        state.lenbits = opts.bits;
        // state.lencode = state.next;

        if (ret) {
          strm.msg = 'invalid literal/lengths set';
          state.mode = BAD;
          break;
        }

        state.distbits = 6;
        //state.distcode.copy(state.codes);
        // Switch to use dynamic table
        state.distcode = state.distdyn;
        opts = { bits: state.distbits };
        ret = inflate_table(DISTS, state.lens, state.nlen, state.ndist, state.distcode, 0, state.work, opts);
        // We have separate tables & no pointers. 2 commented lines below not needed.
        // state.next_index = opts.table_index;
        state.distbits = opts.bits;
        // state.distcode = state.next;

        if (ret) {
          strm.msg = 'invalid distances set';
          state.mode = BAD;
          break;
        }
        //Tracev((stderr, 'inflate:       codes ok\n'));
        state.mode = LEN_;
        if (flush === Z_TREES) { break inf_leave; }
        /* falls through */
      case LEN_:
        state.mode = LEN;
        /* falls through */
      case LEN:
        if (have >= 6 && left >= 258) {
          //--- RESTORE() ---
          strm.next_out = put;
          strm.avail_out = left;
          strm.next_in = next;
          strm.avail_in = have;
          state.hold = hold;
          state.bits = bits;
          //---
          inflate_fast(strm, _out);
          //--- LOAD() ---
          put = strm.next_out;
          output = strm.output;
          left = strm.avail_out;
          next = strm.next_in;
          input = strm.input;
          have = strm.avail_in;
          hold = state.hold;
          bits = state.bits;
          //---

          if (state.mode === TYPE) {
            state.back = -1;
          }
          break;
        }
        state.back = 0;
        for (;;) {
          here = state.lencode[hold & ((1 << state.lenbits) - 1)];  /*BITS(state.lenbits)*/
          here_bits = here >>> 24;
          here_op = (here >>> 16) & 0xff;
          here_val = here & 0xffff;

          if (here_bits <= bits) { break; }
          //--- PULLBYTE() ---//
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
          //---//
        }
        if (here_op && (here_op & 0xf0) === 0) {
          last_bits = here_bits;
          last_op = here_op;
          last_val = here_val;
          for (;;) {
            here = state.lencode[last_val +
                    ((hold & ((1 << (last_bits + last_op)) - 1))/*BITS(last.bits + last.op)*/ >> last_bits)];
            here_bits = here >>> 24;
            here_op = (here >>> 16) & 0xff;
            here_val = here & 0xffff;

            if ((last_bits + here_bits) <= bits) { break; }
            //--- PULLBYTE() ---//
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
            //---//
          }
          //--- DROPBITS(last.bits) ---//
          hold >>>= last_bits;
          bits -= last_bits;
          //---//
          state.back += last_bits;
        }
        //--- DROPBITS(here.bits) ---//
        hold >>>= here_bits;
        bits -= here_bits;
        //---//
        state.back += here_bits;
        state.length = here_val;
        if (here_op === 0) {
          //Tracevv((stderr, here.val >= 0x20 && here.val < 0x7f ?
          //        "inflate:         literal '%c'\n" :
          //        "inflate:         literal 0x%02x\n", here.val));
          state.mode = LIT;
          break;
        }
        if (here_op & 32) {
          //Tracevv((stderr, "inflate:         end of block\n"));
          state.back = -1;
          state.mode = TYPE;
          break;
        }
        if (here_op & 64) {
          strm.msg = 'invalid literal/length code';
          state.mode = BAD;
          break;
        }
        state.extra = here_op & 15;
        state.mode = LENEXT;
        /* falls through */
      case LENEXT:
        if (state.extra) {
          //=== NEEDBITS(state.extra);
          n = state.extra;
          while (bits < n) {
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          //===//
          state.length += hold & ((1 << state.extra) - 1)/*BITS(state.extra)*/;
          //--- DROPBITS(state.extra) ---//
          hold >>>= state.extra;
          bits -= state.extra;
          //---//
          state.back += state.extra;
        }
        //Tracevv((stderr, "inflate:         length %u\n", state.length));
        state.was = state.length;
        state.mode = DIST;
        /* falls through */
      case DIST:
        for (;;) {
          here = state.distcode[hold & ((1 << state.distbits) - 1)];/*BITS(state.distbits)*/
          here_bits = here >>> 24;
          here_op = (here >>> 16) & 0xff;
          here_val = here & 0xffff;

          if ((here_bits) <= bits) { break; }
          //--- PULLBYTE() ---//
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
          //---//
        }
        if ((here_op & 0xf0) === 0) {
          last_bits = here_bits;
          last_op = here_op;
          last_val = here_val;
          for (;;) {
            here = state.distcode[last_val +
                    ((hold & ((1 << (last_bits + last_op)) - 1))/*BITS(last.bits + last.op)*/ >> last_bits)];
            here_bits = here >>> 24;
            here_op = (here >>> 16) & 0xff;
            here_val = here & 0xffff;

            if ((last_bits + here_bits) <= bits) { break; }
            //--- PULLBYTE() ---//
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
            //---//
          }
          //--- DROPBITS(last.bits) ---//
          hold >>>= last_bits;
          bits -= last_bits;
          //---//
          state.back += last_bits;
        }
        //--- DROPBITS(here.bits) ---//
        hold >>>= here_bits;
        bits -= here_bits;
        //---//
        state.back += here_bits;
        if (here_op & 64) {
          strm.msg = 'invalid distance code';
          state.mode = BAD;
          break;
        }
        state.offset = here_val;
        state.extra = (here_op) & 15;
        state.mode = DISTEXT;
        /* falls through */
      case DISTEXT:
        if (state.extra) {
          //=== NEEDBITS(state.extra);
          n = state.extra;
          while (bits < n) {
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          //===//
          state.offset += hold & ((1 << state.extra) - 1)/*BITS(state.extra)*/;
          //--- DROPBITS(state.extra) ---//
          hold >>>= state.extra;
          bits -= state.extra;
          //---//
          state.back += state.extra;
        }
//#ifdef INFLATE_STRICT
        if (state.offset > state.dmax) {
          strm.msg = 'invalid distance too far back';
          state.mode = BAD;
          break;
        }
//#endif
        //Tracevv((stderr, "inflate:         distance %u\n", state.offset));
        state.mode = MATCH;
        /* falls through */
      case MATCH:
        if (left === 0) { break inf_leave; }
        copy = _out - left;
        if (state.offset > copy) {         /* copy from window */
          copy = state.offset - copy;
          if (copy > state.whave) {
            if (state.sane) {
              strm.msg = 'invalid distance too far back';
              state.mode = BAD;
              break;
            }
// (!) This block is disabled in zlib defaults,
// don't enable it for binary compatibility
//#ifdef INFLATE_ALLOW_INVALID_DISTANCE_TOOFAR_ARRR
//          Trace((stderr, "inflate.c too far\n"));
//          copy -= state.whave;
//          if (copy > state.length) { copy = state.length; }
//          if (copy > left) { copy = left; }
//          left -= copy;
//          state.length -= copy;
//          do {
//            output[put++] = 0;
//          } while (--copy);
//          if (state.length === 0) { state.mode = LEN; }
//          break;
//#endif
          }
          if (copy > state.wnext) {
            copy -= state.wnext;
            from = state.wsize - copy;
          }
          else {
            from = state.wnext - copy;
          }
          if (copy > state.length) { copy = state.length; }
          from_source = state.window;
        }
        else {                              /* copy from output */
          from_source = output;
          from = put - state.offset;
          copy = state.length;
        }
        if (copy > left) { copy = left; }
        left -= copy;
        state.length -= copy;
        do {
          output[put++] = from_source[from++];
        } while (--copy);
        if (state.length === 0) { state.mode = LEN; }
        break;
      case LIT:
        if (left === 0) { break inf_leave; }
        output[put++] = state.length;
        left--;
        state.mode = LEN;
        break;
      case CHECK:
        if (state.wrap) {
          //=== NEEDBITS(32);
          while (bits < 32) {
            if (have === 0) { break inf_leave; }
            have--;
            // Use '|' instead of '+' to make sure that result is signed
            hold |= input[next++] << bits;
            bits += 8;
          }
          //===//
          _out -= left;
          strm.total_out += _out;
          state.total += _out;
          if (_out) {
            strm.adler = state.check =
                /*UPDATE(state.check, put - _out, _out);*/
                (state.flags ? crc32(state.check, output, _out, put - _out) : adler32(state.check, output, _out, put - _out));

          }
          _out = left;
          // NB: crc32 stored as signed 32-bit int, zswap32 returns signed too
          if ((state.flags ? hold : zswap32(hold)) !== state.check) {
            strm.msg = 'incorrect data check';
            state.mode = BAD;
            break;
          }
          //=== INITBITS();
          hold = 0;
          bits = 0;
          //===//
          //Tracev((stderr, "inflate:   check matches trailer\n"));
        }
        state.mode = LENGTH;
        /* falls through */
      case LENGTH:
        if (state.wrap && state.flags) {
          //=== NEEDBITS(32);
          while (bits < 32) {
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          //===//
          if (hold !== (state.total & 0xffffffff)) {
            strm.msg = 'incorrect length check';
            state.mode = BAD;
            break;
          }
          //=== INITBITS();
          hold = 0;
          bits = 0;
          //===//
          //Tracev((stderr, "inflate:   length matches trailer\n"));
        }
        state.mode = DONE;
        /* falls through */
      case DONE:
        ret = Z_STREAM_END;
        break inf_leave;
      case BAD:
        ret = Z_DATA_ERROR;
        break inf_leave;
      case MEM:
        return Z_MEM_ERROR;
      case SYNC:
        /* falls through */
      default:
        return Z_STREAM_ERROR;
    }
  }

  // inf_leave <- here is real place for "goto inf_leave", emulated via "break inf_leave"

  /*
     Return from inflate(), updating the total counts and the check value.
     If there was no progress during the inflate() call, return a buffer
     error.  Call updatewindow() to create and/or update the window state.
     Note: a memory error from inflate() is non-recoverable.
   */

  //--- RESTORE() ---
  strm.next_out = put;
  strm.avail_out = left;
  strm.next_in = next;
  strm.avail_in = have;
  state.hold = hold;
  state.bits = bits;
  //---

  if (state.wsize || (_out !== strm.avail_out && state.mode < BAD &&
                      (state.mode < CHECK || flush !== Z_FINISH))) {
    if (updatewindow(strm, strm.output, strm.next_out, _out - strm.avail_out)) {
      state.mode = MEM;
      return Z_MEM_ERROR;
    }
  }
  _in -= strm.avail_in;
  _out -= strm.avail_out;
  strm.total_in += _in;
  strm.total_out += _out;
  state.total += _out;
  if (state.wrap && _out) {
    strm.adler = state.check = /*UPDATE(state.check, strm.next_out - _out, _out);*/
      (state.flags ? crc32(state.check, output, _out, strm.next_out - _out) : adler32(state.check, output, _out, strm.next_out - _out));
  }
  strm.data_type = state.bits + (state.last ? 64 : 0) +
                    (state.mode === TYPE ? 128 : 0) +
                    (state.mode === LEN_ || state.mode === COPY_ ? 256 : 0);
  if (((_in === 0 && _out === 0) || flush === Z_FINISH) && ret === Z_OK) {
    ret = Z_BUF_ERROR;
  }
  return ret;
}

function inflateEnd(strm) {

  if (!strm || !strm.state /*|| strm->zfree == (free_func)0*/) {
    return Z_STREAM_ERROR;
  }

  var state = strm.state;
  if (state.window) {
    state.window = null;
  }
  strm.state = null;
  return Z_OK;
}

function inflateGetHeader(strm, head) {
  var state;

  /* check state */
  if (!strm || !strm.state) { return Z_STREAM_ERROR; }
  state = strm.state;
  if ((state.wrap & 2) === 0) { return Z_STREAM_ERROR; }

  /* save header structure */
  state.head = head;
  head.done = false;
  return Z_OK;
}

function inflateSetDictionary(strm, dictionary) {
  var dictLength = dictionary.length;

  var state;
  var dictid;
  var ret;

  /* check state */
  if (!strm /* == Z_NULL */ || !strm.state /* == Z_NULL */) { return Z_STREAM_ERROR; }
  state = strm.state;

  if (state.wrap !== 0 && state.mode !== DICT) {
    return Z_STREAM_ERROR;
  }

  /* check for correct dictionary identifier */
  if (state.mode === DICT) {
    dictid = 1; /* adler32(0, null, 0)*/
    /* dictid = adler32(dictid, dictionary, dictLength); */
    dictid = adler32(dictid, dictionary, dictLength, 0);
    if (dictid !== state.check) {
      return Z_DATA_ERROR;
    }
  }
  /* copy dictionary to window using updatewindow(), which will amend the
   existing dictionary if appropriate */
  ret = updatewindow(strm, dictionary, dictLength, dictLength);
  if (ret) {
    state.mode = MEM;
    return Z_MEM_ERROR;
  }
  state.havedict = 1;
  // Tracev((stderr, "inflate:   dictionary set\n"));
  return Z_OK;
}

exports.inflateReset = inflateReset;
exports.inflateReset2 = inflateReset2;
exports.inflateResetKeep = inflateResetKeep;
exports.inflateInit = inflateInit;
exports.inflateInit2 = inflateInit2;
exports.inflate = inflate;
exports.inflateEnd = inflateEnd;
exports.inflateGetHeader = inflateGetHeader;
exports.inflateSetDictionary = inflateSetDictionary;
exports.inflateInfo = 'pako inflate (from Nodeca project)';

/* Not implemented
exports.inflateCopy = inflateCopy;
exports.inflateGetDictionary = inflateGetDictionary;
exports.inflateMark = inflateMark;
exports.inflatePrime = inflatePrime;
exports.inflateSync = inflateSync;
exports.inflateSyncPoint = inflateSyncPoint;
exports.inflateUndermine = inflateUndermine;
*/


/***/ }),

/***/ "./node_modules/pako/lib/zlib/inftrees.js":
/*!************************************************!*\
  !*** ./node_modules/pako/lib/zlib/inftrees.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

var utils = __webpack_require__(/*! ../utils/common */ "./node_modules/pako/lib/utils/common.js");

var MAXBITS = 15;
var ENOUGH_LENS = 852;
var ENOUGH_DISTS = 592;
//var ENOUGH = (ENOUGH_LENS+ENOUGH_DISTS);

var CODES = 0;
var LENS = 1;
var DISTS = 2;

var lbase = [ /* Length codes 257..285 base */
  3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31,
  35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0
];

var lext = [ /* Length codes 257..285 extra */
  16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18,
  19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78
];

var dbase = [ /* Distance codes 0..29 base */
  1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193,
  257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145,
  8193, 12289, 16385, 24577, 0, 0
];

var dext = [ /* Distance codes 0..29 extra */
  16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22,
  23, 23, 24, 24, 25, 25, 26, 26, 27, 27,
  28, 28, 29, 29, 64, 64
];

module.exports = function inflate_table(type, lens, lens_index, codes, table, table_index, work, opts)
{
  var bits = opts.bits;
      //here = opts.here; /* table entry for duplication */

  var len = 0;               /* a code's length in bits */
  var sym = 0;               /* index of code symbols */
  var min = 0, max = 0;          /* minimum and maximum code lengths */
  var root = 0;              /* number of index bits for root table */
  var curr = 0;              /* number of index bits for current table */
  var drop = 0;              /* code bits to drop for sub-table */
  var left = 0;                   /* number of prefix codes available */
  var used = 0;              /* code entries in table used */
  var huff = 0;              /* Huffman code */
  var incr;              /* for incrementing code, index */
  var fill;              /* index for replicating entries */
  var low;               /* low bits for current root entry */
  var mask;              /* mask for low root bits */
  var next;             /* next available space in table */
  var base = null;     /* base value table to use */
  var base_index = 0;
//  var shoextra;    /* extra bits table to use */
  var end;                    /* use base and extra for symbol > end */
  var count = new utils.Buf16(MAXBITS + 1); //[MAXBITS+1];    /* number of codes of each length */
  var offs = new utils.Buf16(MAXBITS + 1); //[MAXBITS+1];     /* offsets in table for each length */
  var extra = null;
  var extra_index = 0;

  var here_bits, here_op, here_val;

  /*
   Process a set of code lengths to create a canonical Huffman code.  The
   code lengths are lens[0..codes-1].  Each length corresponds to the
   symbols 0..codes-1.  The Huffman code is generated by first sorting the
   symbols by length from short to long, and retaining the symbol order
   for codes with equal lengths.  Then the code starts with all zero bits
   for the first code of the shortest length, and the codes are integer
   increments for the same length, and zeros are appended as the length
   increases.  For the deflate format, these bits are stored backwards
   from their more natural integer increment ordering, and so when the
   decoding tables are built in the large loop below, the integer codes
   are incremented backwards.

   This routine assumes, but does not check, that all of the entries in
   lens[] are in the range 0..MAXBITS.  The caller must assure this.
   1..MAXBITS is interpreted as that code length.  zero means that that
   symbol does not occur in this code.

   The codes are sorted by computing a count of codes for each length,
   creating from that a table of starting indices for each length in the
   sorted table, and then entering the symbols in order in the sorted
   table.  The sorted table is work[], with that space being provided by
   the caller.

   The length counts are used for other purposes as well, i.e. finding
   the minimum and maximum length codes, determining if there are any
   codes at all, checking for a valid set of lengths, and looking ahead
   at length counts to determine sub-table sizes when building the
   decoding tables.
   */

  /* accumulate lengths for codes (assumes lens[] all in 0..MAXBITS) */
  for (len = 0; len <= MAXBITS; len++) {
    count[len] = 0;
  }
  for (sym = 0; sym < codes; sym++) {
    count[lens[lens_index + sym]]++;
  }

  /* bound code lengths, force root to be within code lengths */
  root = bits;
  for (max = MAXBITS; max >= 1; max--) {
    if (count[max] !== 0) { break; }
  }
  if (root > max) {
    root = max;
  }
  if (max === 0) {                     /* no symbols to code at all */
    //table.op[opts.table_index] = 64;  //here.op = (var char)64;    /* invalid code marker */
    //table.bits[opts.table_index] = 1;   //here.bits = (var char)1;
    //table.val[opts.table_index++] = 0;   //here.val = (var short)0;
    table[table_index++] = (1 << 24) | (64 << 16) | 0;


    //table.op[opts.table_index] = 64;
    //table.bits[opts.table_index] = 1;
    //table.val[opts.table_index++] = 0;
    table[table_index++] = (1 << 24) | (64 << 16) | 0;

    opts.bits = 1;
    return 0;     /* no symbols, but wait for decoding to report error */
  }
  for (min = 1; min < max; min++) {
    if (count[min] !== 0) { break; }
  }
  if (root < min) {
    root = min;
  }

  /* check for an over-subscribed or incomplete set of lengths */
  left = 1;
  for (len = 1; len <= MAXBITS; len++) {
    left <<= 1;
    left -= count[len];
    if (left < 0) {
      return -1;
    }        /* over-subscribed */
  }
  if (left > 0 && (type === CODES || max !== 1)) {
    return -1;                      /* incomplete set */
  }

  /* generate offsets into symbol table for each length for sorting */
  offs[1] = 0;
  for (len = 1; len < MAXBITS; len++) {
    offs[len + 1] = offs[len] + count[len];
  }

  /* sort symbols by length, by symbol order within each length */
  for (sym = 0; sym < codes; sym++) {
    if (lens[lens_index + sym] !== 0) {
      work[offs[lens[lens_index + sym]]++] = sym;
    }
  }

  /*
   Create and fill in decoding tables.  In this loop, the table being
   filled is at next and has curr index bits.  The code being used is huff
   with length len.  That code is converted to an index by dropping drop
   bits off of the bottom.  For codes where len is less than drop + curr,
   those top drop + curr - len bits are incremented through all values to
   fill the table with replicated entries.

   root is the number of index bits for the root table.  When len exceeds
   root, sub-tables are created pointed to by the root entry with an index
   of the low root bits of huff.  This is saved in low to check for when a
   new sub-table should be started.  drop is zero when the root table is
   being filled, and drop is root when sub-tables are being filled.

   When a new sub-table is needed, it is necessary to look ahead in the
   code lengths to determine what size sub-table is needed.  The length
   counts are used for this, and so count[] is decremented as codes are
   entered in the tables.

   used keeps track of how many table entries have been allocated from the
   provided *table space.  It is checked for LENS and DIST tables against
   the constants ENOUGH_LENS and ENOUGH_DISTS to guard against changes in
   the initial root table size constants.  See the comments in inftrees.h
   for more information.

   sym increments through all symbols, and the loop terminates when
   all codes of length max, i.e. all codes, have been processed.  This
   routine permits incomplete codes, so another loop after this one fills
   in the rest of the decoding tables with invalid code markers.
   */

  /* set up for code type */
  // poor man optimization - use if-else instead of switch,
  // to avoid deopts in old v8
  if (type === CODES) {
    base = extra = work;    /* dummy value--not used */
    end = 19;

  } else if (type === LENS) {
    base = lbase;
    base_index -= 257;
    extra = lext;
    extra_index -= 257;
    end = 256;

  } else {                    /* DISTS */
    base = dbase;
    extra = dext;
    end = -1;
  }

  /* initialize opts for loop */
  huff = 0;                   /* starting code */
  sym = 0;                    /* starting code symbol */
  len = min;                  /* starting code length */
  next = table_index;              /* current table to fill in */
  curr = root;                /* current table index bits */
  drop = 0;                   /* current bits to drop from code for index */
  low = -1;                   /* trigger new sub-table when len > root */
  used = 1 << root;          /* use root table entries */
  mask = used - 1;            /* mask for comparing low */

  /* check available table space */
  if ((type === LENS && used > ENOUGH_LENS) ||
    (type === DISTS && used > ENOUGH_DISTS)) {
    return 1;
  }

  /* process all codes and make table entries */
  for (;;) {
    /* create table entry */
    here_bits = len - drop;
    if (work[sym] < end) {
      here_op = 0;
      here_val = work[sym];
    }
    else if (work[sym] > end) {
      here_op = extra[extra_index + work[sym]];
      here_val = base[base_index + work[sym]];
    }
    else {
      here_op = 32 + 64;         /* end of block */
      here_val = 0;
    }

    /* replicate for those indices with low len bits equal to huff */
    incr = 1 << (len - drop);
    fill = 1 << curr;
    min = fill;                 /* save offset to next table */
    do {
      fill -= incr;
      table[next + (huff >> drop) + fill] = (here_bits << 24) | (here_op << 16) | here_val |0;
    } while (fill !== 0);

    /* backwards increment the len-bit code huff */
    incr = 1 << (len - 1);
    while (huff & incr) {
      incr >>= 1;
    }
    if (incr !== 0) {
      huff &= incr - 1;
      huff += incr;
    } else {
      huff = 0;
    }

    /* go to next symbol, update count, len */
    sym++;
    if (--count[len] === 0) {
      if (len === max) { break; }
      len = lens[lens_index + work[sym]];
    }

    /* create new sub-table if needed */
    if (len > root && (huff & mask) !== low) {
      /* if first time, transition to sub-tables */
      if (drop === 0) {
        drop = root;
      }

      /* increment past last table */
      next += min;            /* here min is 1 << curr */

      /* determine length of next table */
      curr = len - drop;
      left = 1 << curr;
      while (curr + drop < max) {
        left -= count[curr + drop];
        if (left <= 0) { break; }
        curr++;
        left <<= 1;
      }

      /* check for enough space */
      used += 1 << curr;
      if ((type === LENS && used > ENOUGH_LENS) ||
        (type === DISTS && used > ENOUGH_DISTS)) {
        return 1;
      }

      /* point entry in root table to sub-table */
      low = huff & mask;
      /*table.op[low] = curr;
      table.bits[low] = root;
      table.val[low] = next - opts.table_index;*/
      table[low] = (root << 24) | (curr << 16) | (next - table_index) |0;
    }
  }

  /* fill in remaining table entry if code is incomplete (guaranteed to have
   at most one remaining entry, since if the code is incomplete, the
   maximum code length that was allowed to get this far is one bit) */
  if (huff !== 0) {
    //table.op[next + huff] = 64;            /* invalid code marker */
    //table.bits[next + huff] = len - drop;
    //table.val[next + huff] = 0;
    table[next + huff] = ((len - drop) << 24) | (64 << 16) |0;
  }

  /* set return parameters */
  //opts.table_index += used;
  opts.bits = root;
  return 0;
};


/***/ }),

/***/ "./node_modules/pako/lib/zlib/messages.js":
/*!************************************************!*\
  !*** ./node_modules/pako/lib/zlib/messages.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

module.exports = {
  2:      'need dictionary',     /* Z_NEED_DICT       2  */
  1:      'stream end',          /* Z_STREAM_END      1  */
  0:      '',                    /* Z_OK              0  */
  '-1':   'file error',          /* Z_ERRNO         (-1) */
  '-2':   'stream error',        /* Z_STREAM_ERROR  (-2) */
  '-3':   'data error',          /* Z_DATA_ERROR    (-3) */
  '-4':   'insufficient memory', /* Z_MEM_ERROR     (-4) */
  '-5':   'buffer error',        /* Z_BUF_ERROR     (-5) */
  '-6':   'incompatible version' /* Z_VERSION_ERROR (-6) */
};


/***/ }),

/***/ "./node_modules/pako/lib/zlib/trees.js":
/*!*********************************************!*\
  !*** ./node_modules/pako/lib/zlib/trees.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

var utils = __webpack_require__(/*! ../utils/common */ "./node_modules/pako/lib/utils/common.js");

/* Public constants ==========================================================*/
/* ===========================================================================*/


//var Z_FILTERED          = 1;
//var Z_HUFFMAN_ONLY      = 2;
//var Z_RLE               = 3;
var Z_FIXED               = 4;
//var Z_DEFAULT_STRATEGY  = 0;

/* Possible values of the data_type field (though see inflate()) */
var Z_BINARY              = 0;
var Z_TEXT                = 1;
//var Z_ASCII             = 1; // = Z_TEXT
var Z_UNKNOWN             = 2;

/*============================================================================*/


function zero(buf) { var len = buf.length; while (--len >= 0) { buf[len] = 0; } }

// From zutil.h

var STORED_BLOCK = 0;
var STATIC_TREES = 1;
var DYN_TREES    = 2;
/* The three kinds of block type */

var MIN_MATCH    = 3;
var MAX_MATCH    = 258;
/* The minimum and maximum match lengths */

// From deflate.h
/* ===========================================================================
 * Internal compression state.
 */

var LENGTH_CODES  = 29;
/* number of length codes, not counting the special END_BLOCK code */

var LITERALS      = 256;
/* number of literal bytes 0..255 */

var L_CODES       = LITERALS + 1 + LENGTH_CODES;
/* number of Literal or Length codes, including the END_BLOCK code */

var D_CODES       = 30;
/* number of distance codes */

var BL_CODES      = 19;
/* number of codes used to transfer the bit lengths */

var HEAP_SIZE     = 2 * L_CODES + 1;
/* maximum heap size */

var MAX_BITS      = 15;
/* All codes must not exceed MAX_BITS bits */

var Buf_size      = 16;
/* size of bit buffer in bi_buf */


/* ===========================================================================
 * Constants
 */

var MAX_BL_BITS = 7;
/* Bit length codes must not exceed MAX_BL_BITS bits */

var END_BLOCK   = 256;
/* end of block literal code */

var REP_3_6     = 16;
/* repeat previous bit length 3-6 times (2 bits of repeat count) */

var REPZ_3_10   = 17;
/* repeat a zero length 3-10 times  (3 bits of repeat count) */

var REPZ_11_138 = 18;
/* repeat a zero length 11-138 times  (7 bits of repeat count) */

/* eslint-disable comma-spacing,array-bracket-spacing */
var extra_lbits =   /* extra bits for each length code */
  [0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0];

var extra_dbits =   /* extra bits for each distance code */
  [0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13];

var extra_blbits =  /* extra bits for each bit length code */
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7];

var bl_order =
  [16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];
/* eslint-enable comma-spacing,array-bracket-spacing */

/* The lengths of the bit length codes are sent in order of decreasing
 * probability, to avoid transmitting the lengths for unused bit length codes.
 */

/* ===========================================================================
 * Local data. These are initialized only once.
 */

// We pre-fill arrays with 0 to avoid uninitialized gaps

var DIST_CODE_LEN = 512; /* see definition of array dist_code below */

// !!!! Use flat array instead of structure, Freq = i*2, Len = i*2+1
var static_ltree  = new Array((L_CODES + 2) * 2);
zero(static_ltree);
/* The static literal tree. Since the bit lengths are imposed, there is no
 * need for the L_CODES extra codes used during heap construction. However
 * The codes 286 and 287 are needed to build a canonical tree (see _tr_init
 * below).
 */

var static_dtree  = new Array(D_CODES * 2);
zero(static_dtree);
/* The static distance tree. (Actually a trivial tree since all codes use
 * 5 bits.)
 */

var _dist_code    = new Array(DIST_CODE_LEN);
zero(_dist_code);
/* Distance codes. The first 256 values correspond to the distances
 * 3 .. 258, the last 256 values correspond to the top 8 bits of
 * the 15 bit distances.
 */

var _length_code  = new Array(MAX_MATCH - MIN_MATCH + 1);
zero(_length_code);
/* length code for each normalized match length (0 == MIN_MATCH) */

var base_length   = new Array(LENGTH_CODES);
zero(base_length);
/* First normalized length for each code (0 = MIN_MATCH) */

var base_dist     = new Array(D_CODES);
zero(base_dist);
/* First normalized distance for each code (0 = distance of 1) */


function StaticTreeDesc(static_tree, extra_bits, extra_base, elems, max_length) {

  this.static_tree  = static_tree;  /* static tree or NULL */
  this.extra_bits   = extra_bits;   /* extra bits for each code or NULL */
  this.extra_base   = extra_base;   /* base index for extra_bits */
  this.elems        = elems;        /* max number of elements in the tree */
  this.max_length   = max_length;   /* max bit length for the codes */

  // show if `static_tree` has data or dummy - needed for monomorphic objects
  this.has_stree    = static_tree && static_tree.length;
}


var static_l_desc;
var static_d_desc;
var static_bl_desc;


function TreeDesc(dyn_tree, stat_desc) {
  this.dyn_tree = dyn_tree;     /* the dynamic tree */
  this.max_code = 0;            /* largest code with non zero frequency */
  this.stat_desc = stat_desc;   /* the corresponding static tree */
}



function d_code(dist) {
  return dist < 256 ? _dist_code[dist] : _dist_code[256 + (dist >>> 7)];
}


/* ===========================================================================
 * Output a short LSB first on the stream.
 * IN assertion: there is enough room in pendingBuf.
 */
function put_short(s, w) {
//    put_byte(s, (uch)((w) & 0xff));
//    put_byte(s, (uch)((ush)(w) >> 8));
  s.pending_buf[s.pending++] = (w) & 0xff;
  s.pending_buf[s.pending++] = (w >>> 8) & 0xff;
}


/* ===========================================================================
 * Send a value on a given number of bits.
 * IN assertion: length <= 16 and value fits in length bits.
 */
function send_bits(s, value, length) {
  if (s.bi_valid > (Buf_size - length)) {
    s.bi_buf |= (value << s.bi_valid) & 0xffff;
    put_short(s, s.bi_buf);
    s.bi_buf = value >> (Buf_size - s.bi_valid);
    s.bi_valid += length - Buf_size;
  } else {
    s.bi_buf |= (value << s.bi_valid) & 0xffff;
    s.bi_valid += length;
  }
}


function send_code(s, c, tree) {
  send_bits(s, tree[c * 2]/*.Code*/, tree[c * 2 + 1]/*.Len*/);
}


/* ===========================================================================
 * Reverse the first len bits of a code, using straightforward code (a faster
 * method would use a table)
 * IN assertion: 1 <= len <= 15
 */
function bi_reverse(code, len) {
  var res = 0;
  do {
    res |= code & 1;
    code >>>= 1;
    res <<= 1;
  } while (--len > 0);
  return res >>> 1;
}


/* ===========================================================================
 * Flush the bit buffer, keeping at most 7 bits in it.
 */
function bi_flush(s) {
  if (s.bi_valid === 16) {
    put_short(s, s.bi_buf);
    s.bi_buf = 0;
    s.bi_valid = 0;

  } else if (s.bi_valid >= 8) {
    s.pending_buf[s.pending++] = s.bi_buf & 0xff;
    s.bi_buf >>= 8;
    s.bi_valid -= 8;
  }
}


/* ===========================================================================
 * Compute the optimal bit lengths for a tree and update the total bit length
 * for the current block.
 * IN assertion: the fields freq and dad are set, heap[heap_max] and
 *    above are the tree nodes sorted by increasing frequency.
 * OUT assertions: the field len is set to the optimal bit length, the
 *     array bl_count contains the frequencies for each bit length.
 *     The length opt_len is updated; static_len is also updated if stree is
 *     not null.
 */
function gen_bitlen(s, desc)
//    deflate_state *s;
//    tree_desc *desc;    /* the tree descriptor */
{
  var tree            = desc.dyn_tree;
  var max_code        = desc.max_code;
  var stree           = desc.stat_desc.static_tree;
  var has_stree       = desc.stat_desc.has_stree;
  var extra           = desc.stat_desc.extra_bits;
  var base            = desc.stat_desc.extra_base;
  var max_length      = desc.stat_desc.max_length;
  var h;              /* heap index */
  var n, m;           /* iterate over the tree elements */
  var bits;           /* bit length */
  var xbits;          /* extra bits */
  var f;              /* frequency */
  var overflow = 0;   /* number of elements with bit length too large */

  for (bits = 0; bits <= MAX_BITS; bits++) {
    s.bl_count[bits] = 0;
  }

  /* In a first pass, compute the optimal bit lengths (which may
   * overflow in the case of the bit length tree).
   */
  tree[s.heap[s.heap_max] * 2 + 1]/*.Len*/ = 0; /* root of the heap */

  for (h = s.heap_max + 1; h < HEAP_SIZE; h++) {
    n = s.heap[h];
    bits = tree[tree[n * 2 + 1]/*.Dad*/ * 2 + 1]/*.Len*/ + 1;
    if (bits > max_length) {
      bits = max_length;
      overflow++;
    }
    tree[n * 2 + 1]/*.Len*/ = bits;
    /* We overwrite tree[n].Dad which is no longer needed */

    if (n > max_code) { continue; } /* not a leaf node */

    s.bl_count[bits]++;
    xbits = 0;
    if (n >= base) {
      xbits = extra[n - base];
    }
    f = tree[n * 2]/*.Freq*/;
    s.opt_len += f * (bits + xbits);
    if (has_stree) {
      s.static_len += f * (stree[n * 2 + 1]/*.Len*/ + xbits);
    }
  }
  if (overflow === 0) { return; }

  // Trace((stderr,"\nbit length overflow\n"));
  /* This happens for example on obj2 and pic of the Calgary corpus */

  /* Find the first bit length which could increase: */
  do {
    bits = max_length - 1;
    while (s.bl_count[bits] === 0) { bits--; }
    s.bl_count[bits]--;      /* move one leaf down the tree */
    s.bl_count[bits + 1] += 2; /* move one overflow item as its brother */
    s.bl_count[max_length]--;
    /* The brother of the overflow item also moves one step up,
     * but this does not affect bl_count[max_length]
     */
    overflow -= 2;
  } while (overflow > 0);

  /* Now recompute all bit lengths, scanning in increasing frequency.
   * h is still equal to HEAP_SIZE. (It is simpler to reconstruct all
   * lengths instead of fixing only the wrong ones. This idea is taken
   * from 'ar' written by Haruhiko Okumura.)
   */
  for (bits = max_length; bits !== 0; bits--) {
    n = s.bl_count[bits];
    while (n !== 0) {
      m = s.heap[--h];
      if (m > max_code) { continue; }
      if (tree[m * 2 + 1]/*.Len*/ !== bits) {
        // Trace((stderr,"code %d bits %d->%d\n", m, tree[m].Len, bits));
        s.opt_len += (bits - tree[m * 2 + 1]/*.Len*/) * tree[m * 2]/*.Freq*/;
        tree[m * 2 + 1]/*.Len*/ = bits;
      }
      n--;
    }
  }
}


/* ===========================================================================
 * Generate the codes for a given tree and bit counts (which need not be
 * optimal).
 * IN assertion: the array bl_count contains the bit length statistics for
 * the given tree and the field len is set for all tree elements.
 * OUT assertion: the field code is set for all tree elements of non
 *     zero code length.
 */
function gen_codes(tree, max_code, bl_count)
//    ct_data *tree;             /* the tree to decorate */
//    int max_code;              /* largest code with non zero frequency */
//    ushf *bl_count;            /* number of codes at each bit length */
{
  var next_code = new Array(MAX_BITS + 1); /* next code value for each bit length */
  var code = 0;              /* running code value */
  var bits;                  /* bit index */
  var n;                     /* code index */

  /* The distribution counts are first used to generate the code values
   * without bit reversal.
   */
  for (bits = 1; bits <= MAX_BITS; bits++) {
    next_code[bits] = code = (code + bl_count[bits - 1]) << 1;
  }
  /* Check that the bit counts in bl_count are consistent. The last code
   * must be all ones.
   */
  //Assert (code + bl_count[MAX_BITS]-1 == (1<<MAX_BITS)-1,
  //        "inconsistent bit counts");
  //Tracev((stderr,"\ngen_codes: max_code %d ", max_code));

  for (n = 0;  n <= max_code; n++) {
    var len = tree[n * 2 + 1]/*.Len*/;
    if (len === 0) { continue; }
    /* Now reverse the bits */
    tree[n * 2]/*.Code*/ = bi_reverse(next_code[len]++, len);

    //Tracecv(tree != static_ltree, (stderr,"\nn %3d %c l %2d c %4x (%x) ",
    //     n, (isgraph(n) ? n : ' '), len, tree[n].Code, next_code[len]-1));
  }
}


/* ===========================================================================
 * Initialize the various 'constant' tables.
 */
function tr_static_init() {
  var n;        /* iterates over tree elements */
  var bits;     /* bit counter */
  var length;   /* length value */
  var code;     /* code value */
  var dist;     /* distance index */
  var bl_count = new Array(MAX_BITS + 1);
  /* number of codes at each bit length for an optimal tree */

  // do check in _tr_init()
  //if (static_init_done) return;

  /* For some embedded targets, global variables are not initialized: */
/*#ifdef NO_INIT_GLOBAL_POINTERS
  static_l_desc.static_tree = static_ltree;
  static_l_desc.extra_bits = extra_lbits;
  static_d_desc.static_tree = static_dtree;
  static_d_desc.extra_bits = extra_dbits;
  static_bl_desc.extra_bits = extra_blbits;
#endif*/

  /* Initialize the mapping length (0..255) -> length code (0..28) */
  length = 0;
  for (code = 0; code < LENGTH_CODES - 1; code++) {
    base_length[code] = length;
    for (n = 0; n < (1 << extra_lbits[code]); n++) {
      _length_code[length++] = code;
    }
  }
  //Assert (length == 256, "tr_static_init: length != 256");
  /* Note that the length 255 (match length 258) can be represented
   * in two different ways: code 284 + 5 bits or code 285, so we
   * overwrite length_code[255] to use the best encoding:
   */
  _length_code[length - 1] = code;

  /* Initialize the mapping dist (0..32K) -> dist code (0..29) */
  dist = 0;
  for (code = 0; code < 16; code++) {
    base_dist[code] = dist;
    for (n = 0; n < (1 << extra_dbits[code]); n++) {
      _dist_code[dist++] = code;
    }
  }
  //Assert (dist == 256, "tr_static_init: dist != 256");
  dist >>= 7; /* from now on, all distances are divided by 128 */
  for (; code < D_CODES; code++) {
    base_dist[code] = dist << 7;
    for (n = 0; n < (1 << (extra_dbits[code] - 7)); n++) {
      _dist_code[256 + dist++] = code;
    }
  }
  //Assert (dist == 256, "tr_static_init: 256+dist != 512");

  /* Construct the codes of the static literal tree */
  for (bits = 0; bits <= MAX_BITS; bits++) {
    bl_count[bits] = 0;
  }

  n = 0;
  while (n <= 143) {
    static_ltree[n * 2 + 1]/*.Len*/ = 8;
    n++;
    bl_count[8]++;
  }
  while (n <= 255) {
    static_ltree[n * 2 + 1]/*.Len*/ = 9;
    n++;
    bl_count[9]++;
  }
  while (n <= 279) {
    static_ltree[n * 2 + 1]/*.Len*/ = 7;
    n++;
    bl_count[7]++;
  }
  while (n <= 287) {
    static_ltree[n * 2 + 1]/*.Len*/ = 8;
    n++;
    bl_count[8]++;
  }
  /* Codes 286 and 287 do not exist, but we must include them in the
   * tree construction to get a canonical Huffman tree (longest code
   * all ones)
   */
  gen_codes(static_ltree, L_CODES + 1, bl_count);

  /* The static distance tree is trivial: */
  for (n = 0; n < D_CODES; n++) {
    static_dtree[n * 2 + 1]/*.Len*/ = 5;
    static_dtree[n * 2]/*.Code*/ = bi_reverse(n, 5);
  }

  // Now data ready and we can init static trees
  static_l_desc = new StaticTreeDesc(static_ltree, extra_lbits, LITERALS + 1, L_CODES, MAX_BITS);
  static_d_desc = new StaticTreeDesc(static_dtree, extra_dbits, 0,          D_CODES, MAX_BITS);
  static_bl_desc = new StaticTreeDesc(new Array(0), extra_blbits, 0,         BL_CODES, MAX_BL_BITS);

  //static_init_done = true;
}


/* ===========================================================================
 * Initialize a new block.
 */
function init_block(s) {
  var n; /* iterates over tree elements */

  /* Initialize the trees. */
  for (n = 0; n < L_CODES;  n++) { s.dyn_ltree[n * 2]/*.Freq*/ = 0; }
  for (n = 0; n < D_CODES;  n++) { s.dyn_dtree[n * 2]/*.Freq*/ = 0; }
  for (n = 0; n < BL_CODES; n++) { s.bl_tree[n * 2]/*.Freq*/ = 0; }

  s.dyn_ltree[END_BLOCK * 2]/*.Freq*/ = 1;
  s.opt_len = s.static_len = 0;
  s.last_lit = s.matches = 0;
}


/* ===========================================================================
 * Flush the bit buffer and align the output on a byte boundary
 */
function bi_windup(s)
{
  if (s.bi_valid > 8) {
    put_short(s, s.bi_buf);
  } else if (s.bi_valid > 0) {
    //put_byte(s, (Byte)s->bi_buf);
    s.pending_buf[s.pending++] = s.bi_buf;
  }
  s.bi_buf = 0;
  s.bi_valid = 0;
}

/* ===========================================================================
 * Copy a stored block, storing first the length and its
 * one's complement if requested.
 */
function copy_block(s, buf, len, header)
//DeflateState *s;
//charf    *buf;    /* the input data */
//unsigned len;     /* its length */
//int      header;  /* true if block header must be written */
{
  bi_windup(s);        /* align on byte boundary */

  if (header) {
    put_short(s, len);
    put_short(s, ~len);
  }
//  while (len--) {
//    put_byte(s, *buf++);
//  }
  utils.arraySet(s.pending_buf, s.window, buf, len, s.pending);
  s.pending += len;
}

/* ===========================================================================
 * Compares to subtrees, using the tree depth as tie breaker when
 * the subtrees have equal frequency. This minimizes the worst case length.
 */
function smaller(tree, n, m, depth) {
  var _n2 = n * 2;
  var _m2 = m * 2;
  return (tree[_n2]/*.Freq*/ < tree[_m2]/*.Freq*/ ||
         (tree[_n2]/*.Freq*/ === tree[_m2]/*.Freq*/ && depth[n] <= depth[m]));
}

/* ===========================================================================
 * Restore the heap property by moving down the tree starting at node k,
 * exchanging a node with the smallest of its two sons if necessary, stopping
 * when the heap property is re-established (each father smaller than its
 * two sons).
 */
function pqdownheap(s, tree, k)
//    deflate_state *s;
//    ct_data *tree;  /* the tree to restore */
//    int k;               /* node to move down */
{
  var v = s.heap[k];
  var j = k << 1;  /* left son of k */
  while (j <= s.heap_len) {
    /* Set j to the smallest of the two sons: */
    if (j < s.heap_len &&
      smaller(tree, s.heap[j + 1], s.heap[j], s.depth)) {
      j++;
    }
    /* Exit if v is smaller than both sons */
    if (smaller(tree, v, s.heap[j], s.depth)) { break; }

    /* Exchange v with the smallest son */
    s.heap[k] = s.heap[j];
    k = j;

    /* And continue down the tree, setting j to the left son of k */
    j <<= 1;
  }
  s.heap[k] = v;
}


// inlined manually
// var SMALLEST = 1;

/* ===========================================================================
 * Send the block data compressed using the given Huffman trees
 */
function compress_block(s, ltree, dtree)
//    deflate_state *s;
//    const ct_data *ltree; /* literal tree */
//    const ct_data *dtree; /* distance tree */
{
  var dist;           /* distance of matched string */
  var lc;             /* match length or unmatched char (if dist == 0) */
  var lx = 0;         /* running index in l_buf */
  var code;           /* the code to send */
  var extra;          /* number of extra bits to send */

  if (s.last_lit !== 0) {
    do {
      dist = (s.pending_buf[s.d_buf + lx * 2] << 8) | (s.pending_buf[s.d_buf + lx * 2 + 1]);
      lc = s.pending_buf[s.l_buf + lx];
      lx++;

      if (dist === 0) {
        send_code(s, lc, ltree); /* send a literal byte */
        //Tracecv(isgraph(lc), (stderr," '%c' ", lc));
      } else {
        /* Here, lc is the match length - MIN_MATCH */
        code = _length_code[lc];
        send_code(s, code + LITERALS + 1, ltree); /* send the length code */
        extra = extra_lbits[code];
        if (extra !== 0) {
          lc -= base_length[code];
          send_bits(s, lc, extra);       /* send the extra length bits */
        }
        dist--; /* dist is now the match distance - 1 */
        code = d_code(dist);
        //Assert (code < D_CODES, "bad d_code");

        send_code(s, code, dtree);       /* send the distance code */
        extra = extra_dbits[code];
        if (extra !== 0) {
          dist -= base_dist[code];
          send_bits(s, dist, extra);   /* send the extra distance bits */
        }
      } /* literal or match pair ? */

      /* Check that the overlay between pending_buf and d_buf+l_buf is ok: */
      //Assert((uInt)(s->pending) < s->lit_bufsize + 2*lx,
      //       "pendingBuf overflow");

    } while (lx < s.last_lit);
  }

  send_code(s, END_BLOCK, ltree);
}


/* ===========================================================================
 * Construct one Huffman tree and assigns the code bit strings and lengths.
 * Update the total bit length for the current block.
 * IN assertion: the field freq is set for all tree elements.
 * OUT assertions: the fields len and code are set to the optimal bit length
 *     and corresponding code. The length opt_len is updated; static_len is
 *     also updated if stree is not null. The field max_code is set.
 */
function build_tree(s, desc)
//    deflate_state *s;
//    tree_desc *desc; /* the tree descriptor */
{
  var tree     = desc.dyn_tree;
  var stree    = desc.stat_desc.static_tree;
  var has_stree = desc.stat_desc.has_stree;
  var elems    = desc.stat_desc.elems;
  var n, m;          /* iterate over heap elements */
  var max_code = -1; /* largest code with non zero frequency */
  var node;          /* new node being created */

  /* Construct the initial heap, with least frequent element in
   * heap[SMALLEST]. The sons of heap[n] are heap[2*n] and heap[2*n+1].
   * heap[0] is not used.
   */
  s.heap_len = 0;
  s.heap_max = HEAP_SIZE;

  for (n = 0; n < elems; n++) {
    if (tree[n * 2]/*.Freq*/ !== 0) {
      s.heap[++s.heap_len] = max_code = n;
      s.depth[n] = 0;

    } else {
      tree[n * 2 + 1]/*.Len*/ = 0;
    }
  }

  /* The pkzip format requires that at least one distance code exists,
   * and that at least one bit should be sent even if there is only one
   * possible code. So to avoid special checks later on we force at least
   * two codes of non zero frequency.
   */
  while (s.heap_len < 2) {
    node = s.heap[++s.heap_len] = (max_code < 2 ? ++max_code : 0);
    tree[node * 2]/*.Freq*/ = 1;
    s.depth[node] = 0;
    s.opt_len--;

    if (has_stree) {
      s.static_len -= stree[node * 2 + 1]/*.Len*/;
    }
    /* node is 0 or 1 so it does not have extra bits */
  }
  desc.max_code = max_code;

  /* The elements heap[heap_len/2+1 .. heap_len] are leaves of the tree,
   * establish sub-heaps of increasing lengths:
   */
  for (n = (s.heap_len >> 1/*int /2*/); n >= 1; n--) { pqdownheap(s, tree, n); }

  /* Construct the Huffman tree by repeatedly combining the least two
   * frequent nodes.
   */
  node = elems;              /* next internal node of the tree */
  do {
    //pqremove(s, tree, n);  /* n = node of least frequency */
    /*** pqremove ***/
    n = s.heap[1/*SMALLEST*/];
    s.heap[1/*SMALLEST*/] = s.heap[s.heap_len--];
    pqdownheap(s, tree, 1/*SMALLEST*/);
    /***/

    m = s.heap[1/*SMALLEST*/]; /* m = node of next least frequency */

    s.heap[--s.heap_max] = n; /* keep the nodes sorted by frequency */
    s.heap[--s.heap_max] = m;

    /* Create a new node father of n and m */
    tree[node * 2]/*.Freq*/ = tree[n * 2]/*.Freq*/ + tree[m * 2]/*.Freq*/;
    s.depth[node] = (s.depth[n] >= s.depth[m] ? s.depth[n] : s.depth[m]) + 1;
    tree[n * 2 + 1]/*.Dad*/ = tree[m * 2 + 1]/*.Dad*/ = node;

    /* and insert the new node in the heap */
    s.heap[1/*SMALLEST*/] = node++;
    pqdownheap(s, tree, 1/*SMALLEST*/);

  } while (s.heap_len >= 2);

  s.heap[--s.heap_max] = s.heap[1/*SMALLEST*/];

  /* At this point, the fields freq and dad are set. We can now
   * generate the bit lengths.
   */
  gen_bitlen(s, desc);

  /* The field len is now set, we can generate the bit codes */
  gen_codes(tree, max_code, s.bl_count);
}


/* ===========================================================================
 * Scan a literal or distance tree to determine the frequencies of the codes
 * in the bit length tree.
 */
function scan_tree(s, tree, max_code)
//    deflate_state *s;
//    ct_data *tree;   /* the tree to be scanned */
//    int max_code;    /* and its largest code of non zero frequency */
{
  var n;                     /* iterates over all tree elements */
  var prevlen = -1;          /* last emitted length */
  var curlen;                /* length of current code */

  var nextlen = tree[0 * 2 + 1]/*.Len*/; /* length of next code */

  var count = 0;             /* repeat count of the current code */
  var max_count = 7;         /* max repeat count */
  var min_count = 4;         /* min repeat count */

  if (nextlen === 0) {
    max_count = 138;
    min_count = 3;
  }
  tree[(max_code + 1) * 2 + 1]/*.Len*/ = 0xffff; /* guard */

  for (n = 0; n <= max_code; n++) {
    curlen = nextlen;
    nextlen = tree[(n + 1) * 2 + 1]/*.Len*/;

    if (++count < max_count && curlen === nextlen) {
      continue;

    } else if (count < min_count) {
      s.bl_tree[curlen * 2]/*.Freq*/ += count;

    } else if (curlen !== 0) {

      if (curlen !== prevlen) { s.bl_tree[curlen * 2]/*.Freq*/++; }
      s.bl_tree[REP_3_6 * 2]/*.Freq*/++;

    } else if (count <= 10) {
      s.bl_tree[REPZ_3_10 * 2]/*.Freq*/++;

    } else {
      s.bl_tree[REPZ_11_138 * 2]/*.Freq*/++;
    }

    count = 0;
    prevlen = curlen;

    if (nextlen === 0) {
      max_count = 138;
      min_count = 3;

    } else if (curlen === nextlen) {
      max_count = 6;
      min_count = 3;

    } else {
      max_count = 7;
      min_count = 4;
    }
  }
}


/* ===========================================================================
 * Send a literal or distance tree in compressed form, using the codes in
 * bl_tree.
 */
function send_tree(s, tree, max_code)
//    deflate_state *s;
//    ct_data *tree; /* the tree to be scanned */
//    int max_code;       /* and its largest code of non zero frequency */
{
  var n;                     /* iterates over all tree elements */
  var prevlen = -1;          /* last emitted length */
  var curlen;                /* length of current code */

  var nextlen = tree[0 * 2 + 1]/*.Len*/; /* length of next code */

  var count = 0;             /* repeat count of the current code */
  var max_count = 7;         /* max repeat count */
  var min_count = 4;         /* min repeat count */

  /* tree[max_code+1].Len = -1; */  /* guard already set */
  if (nextlen === 0) {
    max_count = 138;
    min_count = 3;
  }

  for (n = 0; n <= max_code; n++) {
    curlen = nextlen;
    nextlen = tree[(n + 1) * 2 + 1]/*.Len*/;

    if (++count < max_count && curlen === nextlen) {
      continue;

    } else if (count < min_count) {
      do { send_code(s, curlen, s.bl_tree); } while (--count !== 0);

    } else if (curlen !== 0) {
      if (curlen !== prevlen) {
        send_code(s, curlen, s.bl_tree);
        count--;
      }
      //Assert(count >= 3 && count <= 6, " 3_6?");
      send_code(s, REP_3_6, s.bl_tree);
      send_bits(s, count - 3, 2);

    } else if (count <= 10) {
      send_code(s, REPZ_3_10, s.bl_tree);
      send_bits(s, count - 3, 3);

    } else {
      send_code(s, REPZ_11_138, s.bl_tree);
      send_bits(s, count - 11, 7);
    }

    count = 0;
    prevlen = curlen;
    if (nextlen === 0) {
      max_count = 138;
      min_count = 3;

    } else if (curlen === nextlen) {
      max_count = 6;
      min_count = 3;

    } else {
      max_count = 7;
      min_count = 4;
    }
  }
}


/* ===========================================================================
 * Construct the Huffman tree for the bit lengths and return the index in
 * bl_order of the last bit length code to send.
 */
function build_bl_tree(s) {
  var max_blindex;  /* index of last bit length code of non zero freq */

  /* Determine the bit length frequencies for literal and distance trees */
  scan_tree(s, s.dyn_ltree, s.l_desc.max_code);
  scan_tree(s, s.dyn_dtree, s.d_desc.max_code);

  /* Build the bit length tree: */
  build_tree(s, s.bl_desc);
  /* opt_len now includes the length of the tree representations, except
   * the lengths of the bit lengths codes and the 5+5+4 bits for the counts.
   */

  /* Determine the number of bit length codes to send. The pkzip format
   * requires that at least 4 bit length codes be sent. (appnote.txt says
   * 3 but the actual value used is 4.)
   */
  for (max_blindex = BL_CODES - 1; max_blindex >= 3; max_blindex--) {
    if (s.bl_tree[bl_order[max_blindex] * 2 + 1]/*.Len*/ !== 0) {
      break;
    }
  }
  /* Update opt_len to include the bit length tree and counts */
  s.opt_len += 3 * (max_blindex + 1) + 5 + 5 + 4;
  //Tracev((stderr, "\ndyn trees: dyn %ld, stat %ld",
  //        s->opt_len, s->static_len));

  return max_blindex;
}


/* ===========================================================================
 * Send the header for a block using dynamic Huffman trees: the counts, the
 * lengths of the bit length codes, the literal tree and the distance tree.
 * IN assertion: lcodes >= 257, dcodes >= 1, blcodes >= 4.
 */
function send_all_trees(s, lcodes, dcodes, blcodes)
//    deflate_state *s;
//    int lcodes, dcodes, blcodes; /* number of codes for each tree */
{
  var rank;                    /* index in bl_order */

  //Assert (lcodes >= 257 && dcodes >= 1 && blcodes >= 4, "not enough codes");
  //Assert (lcodes <= L_CODES && dcodes <= D_CODES && blcodes <= BL_CODES,
  //        "too many codes");
  //Tracev((stderr, "\nbl counts: "));
  send_bits(s, lcodes - 257, 5); /* not +255 as stated in appnote.txt */
  send_bits(s, dcodes - 1,   5);
  send_bits(s, blcodes - 4,  4); /* not -3 as stated in appnote.txt */
  for (rank = 0; rank < blcodes; rank++) {
    //Tracev((stderr, "\nbl code %2d ", bl_order[rank]));
    send_bits(s, s.bl_tree[bl_order[rank] * 2 + 1]/*.Len*/, 3);
  }
  //Tracev((stderr, "\nbl tree: sent %ld", s->bits_sent));

  send_tree(s, s.dyn_ltree, lcodes - 1); /* literal tree */
  //Tracev((stderr, "\nlit tree: sent %ld", s->bits_sent));

  send_tree(s, s.dyn_dtree, dcodes - 1); /* distance tree */
  //Tracev((stderr, "\ndist tree: sent %ld", s->bits_sent));
}


/* ===========================================================================
 * Check if the data type is TEXT or BINARY, using the following algorithm:
 * - TEXT if the two conditions below are satisfied:
 *    a) There are no non-portable control characters belonging to the
 *       "black list" (0..6, 14..25, 28..31).
 *    b) There is at least one printable character belonging to the
 *       "white list" (9 {TAB}, 10 {LF}, 13 {CR}, 32..255).
 * - BINARY otherwise.
 * - The following partially-portable control characters form a
 *   "gray list" that is ignored in this detection algorithm:
 *   (7 {BEL}, 8 {BS}, 11 {VT}, 12 {FF}, 26 {SUB}, 27 {ESC}).
 * IN assertion: the fields Freq of dyn_ltree are set.
 */
function detect_data_type(s) {
  /* black_mask is the bit mask of black-listed bytes
   * set bits 0..6, 14..25, and 28..31
   * 0xf3ffc07f = binary 11110011111111111100000001111111
   */
  var black_mask = 0xf3ffc07f;
  var n;

  /* Check for non-textual ("black-listed") bytes. */
  for (n = 0; n <= 31; n++, black_mask >>>= 1) {
    if ((black_mask & 1) && (s.dyn_ltree[n * 2]/*.Freq*/ !== 0)) {
      return Z_BINARY;
    }
  }

  /* Check for textual ("white-listed") bytes. */
  if (s.dyn_ltree[9 * 2]/*.Freq*/ !== 0 || s.dyn_ltree[10 * 2]/*.Freq*/ !== 0 ||
      s.dyn_ltree[13 * 2]/*.Freq*/ !== 0) {
    return Z_TEXT;
  }
  for (n = 32; n < LITERALS; n++) {
    if (s.dyn_ltree[n * 2]/*.Freq*/ !== 0) {
      return Z_TEXT;
    }
  }

  /* There are no "black-listed" or "white-listed" bytes:
   * this stream either is empty or has tolerated ("gray-listed") bytes only.
   */
  return Z_BINARY;
}


var static_init_done = false;

/* ===========================================================================
 * Initialize the tree data structures for a new zlib stream.
 */
function _tr_init(s)
{

  if (!static_init_done) {
    tr_static_init();
    static_init_done = true;
  }

  s.l_desc  = new TreeDesc(s.dyn_ltree, static_l_desc);
  s.d_desc  = new TreeDesc(s.dyn_dtree, static_d_desc);
  s.bl_desc = new TreeDesc(s.bl_tree, static_bl_desc);

  s.bi_buf = 0;
  s.bi_valid = 0;

  /* Initialize the first block of the first file: */
  init_block(s);
}


/* ===========================================================================
 * Send a stored block
 */
function _tr_stored_block(s, buf, stored_len, last)
//DeflateState *s;
//charf *buf;       /* input block */
//ulg stored_len;   /* length of input block */
//int last;         /* one if this is the last block for a file */
{
  send_bits(s, (STORED_BLOCK << 1) + (last ? 1 : 0), 3);    /* send block type */
  copy_block(s, buf, stored_len, true); /* with header */
}


/* ===========================================================================
 * Send one empty static block to give enough lookahead for inflate.
 * This takes 10 bits, of which 7 may remain in the bit buffer.
 */
function _tr_align(s) {
  send_bits(s, STATIC_TREES << 1, 3);
  send_code(s, END_BLOCK, static_ltree);
  bi_flush(s);
}


/* ===========================================================================
 * Determine the best encoding for the current block: dynamic trees, static
 * trees or store, and output the encoded block to the zip file.
 */
function _tr_flush_block(s, buf, stored_len, last)
//DeflateState *s;
//charf *buf;       /* input block, or NULL if too old */
//ulg stored_len;   /* length of input block */
//int last;         /* one if this is the last block for a file */
{
  var opt_lenb, static_lenb;  /* opt_len and static_len in bytes */
  var max_blindex = 0;        /* index of last bit length code of non zero freq */

  /* Build the Huffman trees unless a stored block is forced */
  if (s.level > 0) {

    /* Check if the file is binary or text */
    if (s.strm.data_type === Z_UNKNOWN) {
      s.strm.data_type = detect_data_type(s);
    }

    /* Construct the literal and distance trees */
    build_tree(s, s.l_desc);
    // Tracev((stderr, "\nlit data: dyn %ld, stat %ld", s->opt_len,
    //        s->static_len));

    build_tree(s, s.d_desc);
    // Tracev((stderr, "\ndist data: dyn %ld, stat %ld", s->opt_len,
    //        s->static_len));
    /* At this point, opt_len and static_len are the total bit lengths of
     * the compressed block data, excluding the tree representations.
     */

    /* Build the bit length tree for the above two trees, and get the index
     * in bl_order of the last bit length code to send.
     */
    max_blindex = build_bl_tree(s);

    /* Determine the best encoding. Compute the block lengths in bytes. */
    opt_lenb = (s.opt_len + 3 + 7) >>> 3;
    static_lenb = (s.static_len + 3 + 7) >>> 3;

    // Tracev((stderr, "\nopt %lu(%lu) stat %lu(%lu) stored %lu lit %u ",
    //        opt_lenb, s->opt_len, static_lenb, s->static_len, stored_len,
    //        s->last_lit));

    if (static_lenb <= opt_lenb) { opt_lenb = static_lenb; }

  } else {
    // Assert(buf != (char*)0, "lost buf");
    opt_lenb = static_lenb = stored_len + 5; /* force a stored block */
  }

  if ((stored_len + 4 <= opt_lenb) && (buf !== -1)) {
    /* 4: two words for the lengths */

    /* The test buf != NULL is only necessary if LIT_BUFSIZE > WSIZE.
     * Otherwise we can't have processed more than WSIZE input bytes since
     * the last block flush, because compression would have been
     * successful. If LIT_BUFSIZE <= WSIZE, it is never too late to
     * transform a block into a stored block.
     */
    _tr_stored_block(s, buf, stored_len, last);

  } else if (s.strategy === Z_FIXED || static_lenb === opt_lenb) {

    send_bits(s, (STATIC_TREES << 1) + (last ? 1 : 0), 3);
    compress_block(s, static_ltree, static_dtree);

  } else {
    send_bits(s, (DYN_TREES << 1) + (last ? 1 : 0), 3);
    send_all_trees(s, s.l_desc.max_code + 1, s.d_desc.max_code + 1, max_blindex + 1);
    compress_block(s, s.dyn_ltree, s.dyn_dtree);
  }
  // Assert (s->compressed_len == s->bits_sent, "bad compressed size");
  /* The above check is made mod 2^32, for files larger than 512 MB
   * and uLong implemented on 32 bits.
   */
  init_block(s);

  if (last) {
    bi_windup(s);
  }
  // Tracev((stderr,"\ncomprlen %lu(%lu) ", s->compressed_len>>3,
  //       s->compressed_len-7*last));
}

/* ===========================================================================
 * Save the match info and tally the frequency counts. Return true if
 * the current block must be flushed.
 */
function _tr_tally(s, dist, lc)
//    deflate_state *s;
//    unsigned dist;  /* distance of matched string */
//    unsigned lc;    /* match length-MIN_MATCH or unmatched char (if dist==0) */
{
  //var out_length, in_length, dcode;

  s.pending_buf[s.d_buf + s.last_lit * 2]     = (dist >>> 8) & 0xff;
  s.pending_buf[s.d_buf + s.last_lit * 2 + 1] = dist & 0xff;

  s.pending_buf[s.l_buf + s.last_lit] = lc & 0xff;
  s.last_lit++;

  if (dist === 0) {
    /* lc is the unmatched char */
    s.dyn_ltree[lc * 2]/*.Freq*/++;
  } else {
    s.matches++;
    /* Here, lc is the match length - MIN_MATCH */
    dist--;             /* dist = match distance - 1 */
    //Assert((ush)dist < (ush)MAX_DIST(s) &&
    //       (ush)lc <= (ush)(MAX_MATCH-MIN_MATCH) &&
    //       (ush)d_code(dist) < (ush)D_CODES,  "_tr_tally: bad match");

    s.dyn_ltree[(_length_code[lc] + LITERALS + 1) * 2]/*.Freq*/++;
    s.dyn_dtree[d_code(dist) * 2]/*.Freq*/++;
  }

// (!) This block is disabled in zlib defaults,
// don't enable it for binary compatibility

//#ifdef TRUNCATE_BLOCK
//  /* Try to guess if it is profitable to stop the current block here */
//  if ((s.last_lit & 0x1fff) === 0 && s.level > 2) {
//    /* Compute an upper bound for the compressed length */
//    out_length = s.last_lit*8;
//    in_length = s.strstart - s.block_start;
//
//    for (dcode = 0; dcode < D_CODES; dcode++) {
//      out_length += s.dyn_dtree[dcode*2]/*.Freq*/ * (5 + extra_dbits[dcode]);
//    }
//    out_length >>>= 3;
//    //Tracev((stderr,"\nlast_lit %u, in %ld, out ~%ld(%ld%%) ",
//    //       s->last_lit, in_length, out_length,
//    //       100L - out_length*100L/in_length));
//    if (s.matches < (s.last_lit>>1)/*int /2*/ && out_length < (in_length>>1)/*int /2*/) {
//      return true;
//    }
//  }
//#endif

  return (s.last_lit === s.lit_bufsize - 1);
  /* We avoid equality with lit_bufsize because of wraparound at 64K
   * on 16 bit machines and because stored blocks are restricted to
   * 64K-1 bytes.
   */
}

exports._tr_init  = _tr_init;
exports._tr_stored_block = _tr_stored_block;
exports._tr_flush_block  = _tr_flush_block;
exports._tr_tally = _tr_tally;
exports._tr_align = _tr_align;


/***/ }),

/***/ "./node_modules/pako/lib/zlib/zstream.js":
/*!***********************************************!*\
  !*** ./node_modules/pako/lib/zlib/zstream.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

function ZStream() {
  /* next input byte */
  this.input = null; // JS specific, because we have no pointers
  this.next_in = 0;
  /* number of bytes available at input */
  this.avail_in = 0;
  /* total number of input bytes read so far */
  this.total_in = 0;
  /* next output byte should be put there */
  this.output = null; // JS specific, because we have no pointers
  this.next_out = 0;
  /* remaining free space at output */
  this.avail_out = 0;
  /* total number of bytes output so far */
  this.total_out = 0;
  /* last error message, NULL if no error */
  this.msg = ''/*Z_NULL*/;
  /* not visible by applications */
  this.state = null;
  /* best guess about the data type: binary or text */
  this.data_type = 2/*Z_UNKNOWN*/;
  /* adler32 value of the uncompressed data */
  this.adler = 0;
}

module.exports = ZStream;


/***/ }),

/***/ "./node_modules/pend/index.js":
/*!************************************!*\
  !*** ./node_modules/pend/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Pend;

function Pend() {
  this.pending = 0;
  this.max = Infinity;
  this.listeners = [];
  this.waiting = [];
  this.error = null;
}

Pend.prototype.go = function(fn) {
  if (this.pending < this.max) {
    pendGo(this, fn);
  } else {
    this.waiting.push(fn);
  }
};

Pend.prototype.wait = function(cb) {
  if (this.pending === 0) {
    cb(this.error);
  } else {
    this.listeners.push(cb);
  }
};

Pend.prototype.hold = function() {
  return pendHold(this);
};

function pendHold(self) {
  self.pending += 1;
  var called = false;
  return onCb;
  function onCb(err) {
    if (called) throw new Error("callback called twice");
    called = true;
    self.error = self.error || err;
    self.pending -= 1;
    if (self.waiting.length > 0 && self.pending < self.max) {
      pendGo(self, self.waiting.shift());
    } else if (self.pending === 0) {
      var listeners = self.listeners;
      self.listeners = [];
      listeners.forEach(cbListener);
    }
  }
  function cbListener(listener) {
    listener(self.error);
  }
}

function pendGo(self, fn) {
  fn(pendHold(self));
}


/***/ }),

/***/ "./node_modules/webpack/buildin/amd-options.js":
/*!****************************************!*\
  !*** (webpack)/buildin/amd-options.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(this, {}))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./src/compat.js":
/*!***********************!*\
  !*** ./src/compat.js ***!
  \***********************/
/*! exports provided: getGlobal, isBrowser, isNodeJS, isIE11, launchFullscreen, exitFullscreen, inFullscreen, fullscreenElement, isFullscreenAvailable, getAndroidVersion, isTouchDevice, isIOSDevice, isAndroidDevice, isMobileDevice, isSafari, isFirefox, isChrome, isMac, isWindows, ObjectAssign, disableDocumentTouchSafari, enableDocumentTouchSafari, touchStartToClick */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGlobal", function() { return getGlobal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBrowser", function() { return isBrowser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNodeJS", function() { return isNodeJS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIE11", function() { return isIE11; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "launchFullscreen", function() { return launchFullscreen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exitFullscreen", function() { return exitFullscreen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inFullscreen", function() { return inFullscreen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fullscreenElement", function() { return fullscreenElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFullscreenAvailable", function() { return isFullscreenAvailable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAndroidVersion", function() { return getAndroidVersion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTouchDevice", function() { return isTouchDevice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIOSDevice", function() { return isIOSDevice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAndroidDevice", function() { return isAndroidDevice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMobileDevice", function() { return isMobileDevice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSafari", function() { return isSafari; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFirefox", function() { return isFirefox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isChrome", function() { return isChrome; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMac", function() { return isMac; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isWindows", function() { return isWindows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectAssign", function() { return ObjectAssign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disableDocumentTouchSafari", function() { return disableDocumentTouchSafari; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enableDocumentTouchSafari", function() { return enableDocumentTouchSafari; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "touchStartToClick", function() { return touchStartToClick; });

function getGlobal() {
  return typeof window !== "undefined" && window !== null ?
  window :
  typeof self !== "undefined" && self !== null ?
  self :
  global;
}

var isBrowser = typeof navigator !== "undefined";

var isNodeJS = function isNodeJS() {
  return !isBrowser;
};

var isIE11 = isBrowser && !!navigator.userAgent.match(/Edge|Trident\/7\./);

// fix IE events
if (typeof window !== "undefined" && isIE11) {
  (function () {
    function CustomEvent(event, params) {
      params = params || { bubbles: false, cancelable: false, detail: undefined };
      var evt = document.createEvent('CustomEvent');
      evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
      return evt;
    }

    CustomEvent.prototype = window.CustomEvent.prototype;

    window.CustomEvent = CustomEvent;
  })();
}

// IE does not implement ArrayBuffer slice. Handy!
if (!ArrayBuffer.prototype.slice) {
  ArrayBuffer.prototype.slice = function (start, end) {
    // Normalize start/end values
    if (!end || end > this.byteLength) {
      end = this.byteLength;
    } else
    if (end < 0) {
      end = this.byteLength + end;
      if (end < 0) end = 0;
    }
    if (start < 0) {
      start = this.byteLength + start;
      if (start < 0) start = 0;
    }

    if (end <= start) {
      return new ArrayBuffer();
    }

    // Bytewise copy- this will not be fast, but what choice do we have?
    var len = end - start;
    var view = new Uint8Array(this, start, len);
    var out = new Uint8Array(len);
    for (var i = 0; i < len; i++) {
      out[i] = view[i];
    }
    return out.buffer;
  };
}

// IE doesn't implement Math.log2
(function () {
  Math.log2 = Math.log2 || function (x) {
    return Math.log(x) / Math.LN2;
  };
})();

//The BlobBuilder object
if (typeof window !== "undefined")
window.BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder;


// Launch full screen on the given element with the available method
function launchFullscreen(element, options) {
  if (element.requestFullscreen) {
    element.requestFullscreen(options);
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen(options);
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen(options);
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen(options);
  }
};

// Exit full screen with the available method
function exitFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
};

// Determines if the browser is in full screen
function inFullscreen() {

  // Special case for Ms-Edge that has webkitIsFullScreen with correct value
  // and fullscreenEnabled with wrong value (thanks MS)

  if ("webkitIsFullScreen" in document) return !!document.webkitIsFullScreen;
  if ("fullscreenElement" in document) return !!document.fullscreenElement;
  if ("mozFullScreenElement" in document) return !!document.mozFullScreenElement;
  if ("msFullscreenElement" in document) return !!document.msFullscreenElement;

  return !!document.querySelector(".viewer-fill-browser"); // Fallback for iPad
};

function fullscreenElement() {
  return document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
};

function isFullscreenAvailable(element) {
  return element.requestFullscreen || element.mozRequestFullScreen || element.webkitRequestFullscreen || element.msRequestFullscreen;
};

// Get the version of the android device through user agent.
// Return the version string of android device, e.g. 4.4, 5.0...
function getAndroidVersion(ua) {
  ua = ua || navigator.userAgent;
  var match = ua.match(/Android\s([0-9\.]*)/);
  return match ? match[1] : false;
};

// Determine if this is a touch or notouch device.
function isTouchDevice() {
  /*
                                 // Temporarily disable touch support through hammer on Android 5, to debug
                                 // some specific gesture issue with Chromium WebView when loading viewer3D.js.
                                 if (parseInt(getAndroidVersion()) == 5) {
                                     return false;
                                 }
                                 */

  return typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0);
};


var _isIOSDevice = isBrowser && /ip(ad|hone|od)/.test(navigator.userAgent.toLowerCase());
function isIOSDevice() {
  return _isIOSDevice;
}

var _isAndroidDevice = isBrowser && navigator.userAgent.toLowerCase().indexOf('android') !== -1;
function isAndroidDevice() {
  return _isAndroidDevice;
}

function isMobileDevice() {
  if (!isBrowser) return false;
  return isIOSDevice() || isAndroidDevice();
};

function isSafari() {
  if (!isBrowser) return false;
  var _ua = navigator.userAgent.toLowerCase();
  return _ua.indexOf("safari") !== -1 && _ua.indexOf("chrome") === -1;
};

function isFirefox() {
  if (!isBrowser) return false;
  var _ua = navigator.userAgent.toLowerCase();
  return _ua.indexOf("firefox") !== -1;
};

function isChrome() {
  if (!isBrowser) return false;
  var _ua = navigator.userAgent.toLowerCase();
  return _ua.indexOf("chrome") !== -1;
};

function isMac() {
  if (!isBrowser) return false;
  var _ua = navigator.userAgent.toLowerCase();
  return _ua.indexOf("mac os") !== -1;
};

function isWindows() {
  if (!isBrowser) return false;
  var _ua = navigator.userAgent.toLowerCase();
  return _ua.indexOf("win32") !== -1 || _ua.indexOf("windows") !== -1;
};

function ObjectAssign(des, src) {
  for (var key in src) {
    if (src.hasOwnProperty(key))
    des[key] = src[key];
  }
  return des;
};


// Hack to work around Safari's use of pinch and pan inside the viewer canvas.
function disableTouchSafari(event) {
  var xOff = window.hasOwnProperty("pageXOffset") ? window.pageXOffset : document.documentElement.scrollLeft;
  var yOff = window.hasOwnProperty("pageYOffset") ? window.pageYOffset : document.documentElement.scrollTop;

  // event.pageX and event.pageY returned undefined through Chrome console device mode
  var pageX = typeof event.pageX === "undefined" ? event.changedTouches[0].pageX : event.pageX;
  var pageY = typeof event.pageY === "undefined" ? event.changedTouches[0].pageY : event.pageY;

  // If we aren't inside the canvas, then allow default propagation of the event
  var element = document.elementFromPoint(pageX - xOff, pageY - yOff);
  if (!element || element.nodeName !== 'CANVAS')
  return true;
  // If it's a CANVAS, check that it's owned by us
  if (element.getAttribute('data-viewer-canvas' !== 'true'))
  return true;
  // Inside the canvas, prevent the event from propagating to Safari'safely
  // standard handlers, which will pan and zoom the page.
  event.preventDefault();
  return false;
};

// Hack to work around Safari's use of pinch and pan inside the viewer canvas.
function disableDocumentTouchSafari() {
  if (isMobileDevice() && isSafari()) {
    // Safari mobile disable default touch handling inside viewer canvas
    // Use capture to make sure Safari doesn't capture the touches and prevent
    // us from disabling them.
    document.documentElement.addEventListener('touchstart', disableTouchSafari, true);
    document.documentElement.addEventListener('touchmove', disableTouchSafari, true);
    document.documentElement.addEventListener('touchcanceled', disableTouchSafari, true);
    document.documentElement.addEventListener('touchend', disableTouchSafari, true);
  }
};

// Hack to work around Safari's use of pinch and pan inside the viewer canvas.
// This method is not being invoked explicitly.
function enableDocumentTouchSafari() {
  if (isMobileDevice() && isSafari()) {
    // Safari mobile disable default touch handling inside viewer canvas
    // Use capture to make sure Safari doesn't capture the touches and prevent
    // us from disabling them.
    document.documentElement.removeEventListener('touchstart', disableTouchSafari, true);
    document.documentElement.removeEventListener('touchmove', disableTouchSafari, true);
    document.documentElement.removeEventListener('touchcanceled', disableTouchSafari, true);
    document.documentElement.removeEventListener('touchend', disableTouchSafari, true);
  }
};


// Convert touchstart event to click to remove the delay between the touch and
// the click event which is sent after touchstart with about 300ms deley.
// Should be used in UI elements on touch devices.
function touchStartToClick(e) {
  // Buttons that activate fullscreen are a special case. The HTML5 fullscreen spec
  // requires the original user gesture signal to avoid a security issue.  See LMV-2396 and LMV-2326
  if (e.target.className.indexOf("fullscreen") > -1 || e.target.className.indexOf("webvr") > -1)
  return;
  e.preventDefault(); // Stops the firing of delayed click event.
  e.stopPropagation();
  e.target.click(); // Maps to immediate click.
};

//Safari doesn't have the Performance object
//We only need the now() function, so that's easy to emulate.
(function () {
  var global = getGlobal();
  if (!global.performance)
  global.performance = Date;
})();

// Polyfill for IE and Safari
// https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger
Number.isInteger = Number.isInteger || function (value) {
  return typeof value === "number" &&
  isFinite(value) &&
  Math.floor(value) === value;
};

// Polyfill for IE
String.prototype.repeat = String.prototype.repeat || function (count) {
  if (count < 1) return '';
  var result = '',pattern = this.valueOf();
  while (count > 1) {
    if (count & 1) result += pattern;
    count >>= 1, pattern += pattern;
  }
  return result + pattern;
};

// Polyfill for IE
// It doesn't support negative values for start and end; it complicates the code using this function.
if (!Array.prototype.fill) {
  Object.defineProperty(Array.prototype, "fill", {
    enumerable: false,
    value: function value(_value, start, end) {
      start = start === undefined ? 0 : start;
      end = end === undefined ? this.length : end;
      for (var i = start; i < end; ++i) {
        this[i] = _value;}
    } });

}
// Polyfill for IE
Int32Array.prototype.lastIndexOf = Int32Array.prototype.lastIndexOf || function (searchElement, fromIndex) {
  return Array.prototype.lastIndexOf.call(this, searchElement, fromIndex);
};

// Polyfill for IE
// It doesn't support negative values for start and end; it complicates the code using this function.
if (!Array.prototype.find) {
  Object.defineProperty(Array.prototype, "find", {
    enumerable: false,
    value: function value(callback, _this) {
      var len = this.length;
      for (var i = 0; i < len; ++i) {
        var item = this[i];
        if (callback.call(_this, item, i, this))
        return item;
      }
      return undefined;
    } });

}

// Polyfill for IE
if (typeof Object.assign != 'function') {
  // Must be writable: true, enumerable: false, configurable: true
  Object.defineProperty(Object, "assign", {
    value: function assign(target, varArgs) {// .length of function is 2
      'use strict';
      if (target == null) {// TypeError if undefined or null
        throw new TypeError('Cannot convert undefined or null to object');
      }

      var to = Object(target);

      for (var index = 1; index < arguments.length; index++) {
        var nextSource = arguments[index];

        if (nextSource != null) {// Skip over if undefined or null
          for (var nextKey in nextSource) {
            // Avoid bugs when hasOwnProperty is shadowed
            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }
      return to;
    },
    writable: true,
    configurable: true });

}

// Polyfill for IE and iOS devices
if (typeof window !== "undefined" && (isIE11 || isIOSDevice()) && !HTMLCanvasElement.prototype.toBlob) {
  Object.defineProperty(HTMLCanvasElement.prototype, 'toBlob', {
    value: function value(callback, type, quality) {
      var canvas = this;
      setTimeout(function () {

        var binStr = atob(canvas.toDataURL(type, quality).split(',')[1]),
        len = binStr.length,
        arr = new Uint8Array(len);

        for (var i = 0; i < len; i++) {
          arr[i] = binStr.charCodeAt(i);
        }

        callback(new Blob([arr], { type: type || 'image/png' }));

      });
    } });

}

// Polyfill for IE (LMV-3823)
if (!Uint8Array.prototype.slice) {

  // This will work for genuine arrays, array-like objects, 
  // NamedNodeMap (attributes, entities, notations),
  // NodeList (e.g., getElementsByTagName), HTMLCollection (e.g., childNodes),
  // and will not fail on other DOM objects (as do DOM elements in IE < 9)
  Uint8Array.prototype.slice = function (begin, end) {
    // IE < 9 gets unhappy with an undefined end argument
    end = typeof end !== 'undefined' ? end : this.length;

    // For native Array objects, we use the native slice function
    if (Object.prototype.toString.call(this) === '[object Array]') {
      return _slice.call(this, begin, end);
    }

    // For array like object we handle it ourselves.
    var i,cloned = [],
    size,len = this.length;

    // Handle negative value for "begin"
    var start = begin || 0;
    start = start >= 0 ? start : Math.max(0, len + start);

    // Handle negative value for "end"
    var upTo = typeof end == 'number' ? Math.min(end, len) : len;
    if (end < 0) {
      upTo = len + end;
    }

    // Actual expected size of the slice
    size = upTo - start;

    if (size > 0) {
      cloned = new Array(size);
      if (this.charAt) {
        for (i = 0; i < size; i++) {
          cloned[i] = this.charAt(start + i);
        }
      } else {
        for (i = 0; i < size; i++) {
          cloned[i] = this[start + i];
        }
      }
    }

    return cloned;
  };
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/file-loaders/lmvtk/common/InputStream.js":
/*!******************************************************!*\
  !*** ./src/file-loaders/lmvtk/common/InputStream.js ***!
  \******************************************************/
/*! exports provided: InputStream */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputStream", function() { return InputStream; });
/* harmony import */ var _StringUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StringUtils */ "./src/file-loaders/lmvtk/common/StringUtils.js");


"use strict";

//We will use these shared memory arrays to
//convert from bytes to the desired data type.
var convBuf = new ArrayBuffer(8);
var convUint8 = new Uint8Array(convBuf);
var convUint16 = new Uint16Array(convBuf);
var convInt32 = new Int32Array(convBuf);
var convUint32 = new Uint32Array(convBuf);
var convFloat32 = new Float32Array(convBuf);
var convFloat64 = new Float64Array(convBuf);


/** @constructor */
function InputStream(buf) {
  this.buffer = buf;
  this.offset = 0;
  this.byteLength = buf.length;
}


InputStream.prototype.seek = function (off) {
  this.offset = off;
};

InputStream.prototype.getBytes = function (len) {
  var ret = new Uint8Array(this.buffer.buffer, this.offset, len);
  this.offset += len;
  return ret;
};

InputStream.prototype.getVarints = function () {
  var b;
  var value = 0;
  var shiftBy = 0;
  do {
    b = this.buffer[this.offset++];
    value |= (b & 0x7f) << shiftBy;
    shiftBy += 7;
  } while (b & 0x80);
  return value;
};

InputStream.prototype.getUint8 = function () {
  return this.buffer[this.offset++];
};

InputStream.prototype.getUint16 = function () {
  convUint8[0] = this.buffer[this.offset++];
  convUint8[1] = this.buffer[this.offset++];
  return convUint16[0];
};

InputStream.prototype.getInt16 = function () {
  var tmp = this.getUint16();
  //make negative integer if the ushort is negative
  if (tmp > 0x7fff)
  tmp = tmp | 0xffff0000;
  return tmp;
};

InputStream.prototype.getInt32 = function () {
  var src = this.buffer;
  var dst = convUint8;
  var off = this.offset;
  dst[0] = src[off];
  dst[1] = src[off + 1];
  dst[2] = src[off + 2];
  dst[3] = src[off + 3];
  this.offset += 4;
  return convInt32[0];
};

InputStream.prototype.getUint32 = function () {
  var src = this.buffer;
  var dst = convUint8;
  var off = this.offset;
  dst[0] = src[off];
  dst[1] = src[off + 1];
  dst[2] = src[off + 2];
  dst[3] = src[off + 3];
  this.offset += 4;
  return convUint32[0];
};

InputStream.prototype.getFloat32 = function () {
  var src = this.buffer;
  var dst = convUint8;
  var off = this.offset;
  dst[0] = src[off];
  dst[1] = src[off + 1];
  dst[2] = src[off + 2];
  dst[3] = src[off + 3];
  this.offset += 4;
  return convFloat32[0];
};

//Specialized copy which copies 4 byte integers into 2-byte target.
//Used for downcasting OCTM int32 index buffers to int16 index buffers,
//in cases we know we don't need more (LMVTK guarantees 2 byte indices).
InputStream.prototype.getIndicesArray = function (buffer, offset, numItems) {

  var src = this.buffer;
  var dst = new Uint8Array(buffer, offset, numItems * 2);
  var off = this.offset;

  for (var i = 0, iEnd = numItems * 2; i < iEnd; i += 2) {
    dst[i] = src[off];
    dst[i + 1] = src[off + 1];
    off += 4;
  }

  this.offset = off;
};

InputStream.prototype.getVector3Array = function (arr, numItems, startOffset, stride) {
  var src = this.buffer;
  var off = this.offset;

  //We cannot use Float32Array copying here because the
  //source stream is out of alignment
  var dst = new Uint8Array(arr.buffer, arr.byteOffset, arr.byteLength);

  if (stride === 3 && startOffset === 0) {
    var len = numItems * 12;
    dst.set(src.subarray(off, off + len));
    this.offset += len;
  } else {

    stride *= 4;
    var aoff = startOffset * 4;
    for (var i = 0; i < numItems; i++) {
      for (var j = 0; j < 12; j++) {
        dst[aoff + j] = src[off++];
      }
      aoff += stride;
    }

    this.offset = off;
  }
};

InputStream.prototype.getVector2Array = function (arr, numItems, startOffset, stride) {
  var src = this.buffer;
  var dst = new Uint8Array(arr.buffer, arr.byteOffset, arr.byteLength);
  var off = this.offset;

  stride *= 4;
  var aoff = startOffset * 4;
  for (var i = 0; i < numItems; i++) {
    for (var j = 0; j < 8; j++) {
      dst[aoff + j] = src[off++];
    }
    aoff += stride;
  }

  this.offset = off;
};

InputStream.prototype.getVector4 = function (arr, offset) {
  var src = this.buffer;
  var dst = convUint8;
  var off = this.offset;
  var conv = convFloat32;

  for (var j = 0; j < 4; j++) {
    dst[0] = src[off];
    dst[1] = src[off + 1];
    dst[2] = src[off + 2];
    dst[3] = src[off + 3];
    arr[offset + j] = conv[0];
    off += 4;
  }

  this.offset = off;
};

InputStream.prototype.getFloat64 = function () {
  var src = this.buffer;
  var dst = convUint8;
  var off = this.offset;
  for (var i = 0; i < 8; i++) {
    dst[i] = src[off + i];}
  this.offset += 8;
  return convFloat64[0];
};



InputStream.prototype.getString = function (len) {
  var res = Object(_StringUtils__WEBPACK_IMPORTED_MODULE_0__["utf8ArrayToString"])(this.buffer, this.offset, len);
  this.offset += len;
  return res;
};

InputStream.prototype.reset = function (buf) {
  this.buffer = buf;
  this.offset = 0;
  this.byteLength = buf.length;
};

/***/ }),

/***/ "./src/file-loaders/lmvtk/common/Propdb.js":
/*!*************************************************!*\
  !*** ./src/file-loaders/lmvtk/common/Propdb.js ***!
  \*************************************************/
/*! exports provided: PropertyDatabase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyDatabase", function() { return PropertyDatabase; });
/* harmony import */ var _common_StringUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/StringUtils */ "./src/file-loaders/lmvtk/common/StringUtils.js");
/* harmony import */ var _common_SearchUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/SearchUtils */ "./src/file-loaders/lmvtk/common/SearchUtils.js");




/**
                                                       * Numeric values and their meanings associated to {@link PropertyResult|PropertyResult.type}.
                                                       * @readonly
                                                       * @alias AttributeType
                                                       * @default
                                                       */
var AttributeType =
{
  //Numeric types
  Unknown: 0,
  Boolean: 1,
  Integer: 2,
  Double: 3,
  Float: 4,

  //Special types
  BLOB: 10,
  DbKey: 11, /* represents a link to another object in the database, using database internal ID */

  //String types 
  String: 20,
  LocalizableString: 21,
  DateTime: 22, /* ISO 8601 date */
  GeoLocation: 23, /* LatLonHeight - ISO6709 Annex H string, e.g: "+27.5916+086.5640+8850/" for Mount Everest */
  Position: 24 /* "x y z w" space separated string representing vector with 2,3 or 4 elements*/

  //TODO: Do we need explicit logical types for any others?
};

//Bitmask values for boolean attribute options
var AttributeFlags =
{
  afHidden: 1 << 0, /* Attribute will not be displayed in default GUI property views. */
  afDontIndex: 1 << 1, /* Attribute will not be indexed by the search service. */
  afDirectStorage: 1 << 2 /* Attribute is not worth de-duplicating (e.g. vertex data or dbId reference) */
  //4,8,16...
};

//Used by property diff
var RVT_DIM_PROPS = [
"Perimeter",
"Volume",
"Area",
"Length",
"Width",
"Height"];


//Inlined into enumObjectProperties below
/*
function readVarint(buf, offset) {
    var b;
    var value = 0;
    var shiftBy = 0;
    do {
        b = buf[offset[0]++];
        value |= (b & 0x7f) << shiftBy;
        shiftBy += 7;
    } while (b & 0x80);
    return value;
}
*/

/** 
    * The Property Database contains property information for each part of a model.
    * The data is read-only, since it has been packed to optimize memory footprint.
    * It's implemented as an Entity-Atribute-Value (EAV) set of tables.
    * LMV keeps the PropertyDatabase in a browser worker thread to prevent compute-intensive
    * methods to block the main browser UI thread.
    * Words "Attribute" and "Property" are use interchangeably.
    * 
    * @constructor 
    * @class
   */
function PropertyDatabase(dbjsons) {

  "use strict";

  var _this = this;

  var _isV2 = false;
  var _isVarint = false;

  //The property db json arrays.
  //Some of them are held unparsed in blob form
  //with helper arrays containing offsets into the blobs for each value to be parsed on demand
  var _attrs; // Array of arrays. Inner array is in the form [attrName(0), category(1), dataType(2), dataTypeContext(3), description(4), displayName(5), flags(6) ] 
  // See struct AttributeDef in https://git.autodesk.com/A360/platform-translation-propertydb/blob/master/propertydb/PropertyDatabase.h 
  var _offsets;
  var _avs;
  var _valuesBlob;
  var _valuesOffsets;
  var _idsBlob;
  var _idsOffsets;

  //Cached ids of commonly used well known attributes (child, parent, name)
  var _childAttrId;
  var _parentAttrId;
  var _nameAttrId;
  var _instanceOfAttrId;
  var _viewableInAttrId;
  var _externalRefAttrId;
  var _nodeFlagsAttrId;
  var _layersAttrId;

  //dbjsons is expected to be of the form
  //{ attrs: {filename1:x, filename2:y}, ids: {filename1:x... }, values: {... }, offsets: {... }, avs: {... } }
  //where each of the elements of each array is a pair of the original name and the unzipped *raw* byte
  //array buffer corresponding to the respective property database constituent. In the current implementation
  //each array is expected to only have one name-value element.


  //=========================================================================

  //The attribute definitions blob is considered small enough
  //to parse using regular APIs
  for (var p in dbjsons.attrs) {
    _attrs = Object(_common_StringUtils__WEBPACK_IMPORTED_MODULE_0__["blobToJson"])(dbjsons.attrs[p]);

    if (_attrs[0] === "pdb version 2")
    _isV2 = true;

    for (var i = 1; i < _attrs.length; i++) {

      var attrName = _attrs[i][0];
      switch (attrName) {
        case "Layer":_layersAttrId = i;break;
        default:break;}


      var category = _attrs[i][1];

      switch (category) {
        case "__parent__":_parentAttrId = i;break;
        case "__child__":_childAttrId = i;break;
        case "__name__":_nameAttrId = i;break;
        case "__instanceof__":_instanceOfAttrId = i;break;
        case "__viewable_in__":_viewableInAttrId = i;break;
        case "__externalref__":_externalRefAttrId = i;break;
        case "__node_flags__":_nodeFlagsAttrId = i;break;
        default:break;}


      //As of V2, DbKey attribute values are stored directly into the AV array
      if (_isV2 && _attrs[i][2] === AttributeType.DbKey) {
        _attrs[i][6] = _attrs[i][6] | AttributeFlags.afDirectStorage;
      }
    }

    break; //currently we can only handle single property file (no chunking)
  }

  //manual parse of the attribute-value index pairs array
  for (var p in dbjsons.avs) {

    var buf = dbjsons.avs[p];

    if (buf[0] === "[".charCodeAt(0)) {
      _avs = Object(_common_StringUtils__WEBPACK_IMPORTED_MODULE_0__["parseIntArray"])(dbjsons.avs[p], 0);
    } else {
      _avs = buf;
      _isVarint = true;
    }

    delete dbjsons.avs; //don't need this blob anymore

    break; //currently we can only handle single property file (no chunking)

  }


  //manual parse of the offsets array
  for (var p in dbjsons.offsets) {

    var buf = dbjsons.offsets[p];

    if (buf[0] === "[".charCodeAt(0)) {
      _offsets = Object(_common_StringUtils__WEBPACK_IMPORTED_MODULE_0__["parseIntArray"])(buf, 1); //passing in 1 to reserve a spot for the sentinel value

      //just a sentinel value to make lookups for the last item easier
      _offsets[_offsets.length - 1] = _avs.length / 2;
    } else {
      _offsets = new Int32Array(buf.buffer, buf.byteOffset, buf.byteLength / 4);
    }

    delete dbjsons.offsets; //don't need this

    break; //currently we can only handle single property file (no chunking)

  }

  //Instead of parsing the values and ids arrays, find the
  //offset of each json item in the blob, and then we can
  //pick and parse specific items later on demand, without
  //parsing the potentially large json blob up front.
  for (var p in dbjsons.values) {
    _valuesBlob = dbjsons.values[p];
    _valuesOffsets = Object(_common_StringUtils__WEBPACK_IMPORTED_MODULE_0__["findValueOffsets"])(_valuesBlob);

    break; //currently we can only handle single property file (no chunking)

  }

  // Get externalIds from data blob. Unlike the other data, this one is optional
  // and may be loaded later or not at all to save memory.
  this.setIdsBlob = function (data) {
    // Just like for _valuesBlob: Find the offset to each value 
    //  but skip the full parse.
    _idsBlob = data;
    _idsOffsets = Object(_common_StringUtils__WEBPACK_IMPORTED_MODULE_0__["findValueOffsets"])(data);
  };

  //Set ids array (if available). Note that the ids array is
  //optional and LMV does not require them. (Just some extensions might do - like PushPins)
  for (var p in dbjsons.ids) {
    this.setIdsBlob(dbjsons.ids[p]);
    break; //currently we can only handle single property file (no chunking)
  }

  //=========================================================================

  /**
   * Obtains the number of database ids (dbIds) available. 
   * These ids range betwee 1 (inclusive) up to getObjectCount() (exclusive).
   *
   * @returns {number}
   */
  this.getObjectCount = function () {
    return _offsets.length - 1;
  };

  this.getValueAt = function (valId) {
    return Object(_common_StringUtils__WEBPACK_IMPORTED_MODULE_0__["subBlobToJson"])(_valuesBlob, _valuesOffsets[valId]);
  };

  //faster variant used for traversing the object hierarchy where
  //we know the data type of the value to be an integer
  this.getIntValueAt = function (valId) {
    return Object(_common_StringUtils__WEBPACK_IMPORTED_MODULE_0__["subBlobToJsonInt"])(_valuesBlob, _valuesOffsets[valId]);
  };


  this.getIdAt = function (entId) {
    return Object(_common_StringUtils__WEBPACK_IMPORTED_MODULE_0__["subBlobToJson"])(_idsBlob, _idsOffsets[entId]);
  };

  // Loading the (large) externalIDs can be skipped to save memory.
  this.externalIdsLoaded = function () {
    return Boolean(_idsBlob);
  };

  /**
      * Obtains the actual value of a property.
      *
      * @param {number} attrId - The attribute id
      * @param {number} valId - The value id
      * @param {boolean} [integerHint] - If true the return value will be casted to integer.
      *
      * @returns {*} 
      */
  function getAttrValue(attrId, valId, integerHint) {
    var attr = _attrs[attrId];
    if (attr[6] & AttributeFlags.afDirectStorage) {
      if (attr[2] === AttributeType.DbKey) {
        //db keys are stored directly in the EAV triplet
        return valId;
      } /* else if (attr.dataType === AttributeType.Integer) {
           return this.ints.get(this.ints.indexToPointer(valId));
        } else if (attr.dataType === AttributeType.Float) {
           return this.floats.getf(this.floats.indexToPointer(valId));
        }*/
    }

    return integerHint ? this.getIntValueAt(valId) : this.getValueAt(valId);
  }

  this.getAttrValue = getAttrValue;

  this._getObjectProperty = function (attrId, valId) {

    var attr = _attrs[attrId];
    var displayName = attr[5] ? attr[5] : attr[0];
    var hidden = this.attributeHidden(attrId);

    // type values match those in PropertyDatabase.h
    // See: https://git.autodesk.com/A360/platform-translation-propertydb/blob/master/propertydb/PropertyDatabase.h#L67
    return {
      displayName: displayName,
      displayValue: _this.getAttrValue(attrId, valId),
      displayCategory: attr[1],
      attributeName: attr[0],
      type: attr[2],
      units: attr[3],
      hidden: hidden,
      precision: attr[7] || 0 };

  };

  /**
      * Obtains all properties for a given database id.
      *
      * @param {number} dbId - The database id
      * @param {string[]} [propFilter=null] - Array of property names to return values for. Use null for no filtering.
      * @param {boolean} [ignoreHidden=false] - true to ignore hidden properties.
      * @param {string[]} [propIgnored=null] - Array of property names to not include in the return value.
      *
      * @returns {object} consisting of attributes `name`, `dbId`, `properties` and `externalId`.
      */
  this.getObjectProperties = function (dbId, propFilter, ignoreHidden, propIgnored) {
    var result = {
      "dbId": dbId,
      "properties": [] };


    var needName = false;

    // Check if externalIds are wanted and available
    var filterContainsId = propFilter && propFilter.indexOf("externalId") !== -1;
    var idsLoaded = this.externalIdsLoaded();

    // If externalIds are explicitly addressed in the filter, we can assume that the caller expects
    // to have them in the result. So we should report an error if they are not loaded.
    if (filterContainsId && !idsLoaded) {
      console.error('Requesting externalID requires loading of the externalID table');
    }

    // We add externalIds to the result if...
    //  1. externalIds are in memory
    //  2. Either the filter includes externalIds or there is no filter
    var addExternalId = idsLoaded && (!propFilter || filterContainsId);
    if (addExternalId) {
      result.externalId = this.getIdAt(dbId);

      // If there are no other properties required, then just return.
      // Useful when we only care about fetching externalId-only data.
      if (propFilter && propFilter.length === 1) {
        return result;
      }
    }

    var parentProps = null;

    //Loop over the attribute index - value index pairs for the objects
    //and for each one look up the attribute and the value in their
    //respective arrays.
    this.enumObjectProperties(dbId, function (attrId, valId) {
      if (attrId == _instanceOfAttrId) {
        //Recursively resolve any common properties from the parent of this instance
        //NOTE: Here we explicitly ignore hidden properties, because we don't 
        //want the parent instance to override parent/child nodes and other structural 
        //attributes. Specifically, Revit extraction has a bug where the model tree parent is 
        //also instance prototype for its children, so we need to prevent the child
        //from gaining all its siblings as children of its own due to this inheritance.
        var res = _this.getObjectProperties(_this.getAttrValue(attrId, valId), propFilter, true /*ignoreHidden*/, propIgnored);
        if (res && res.properties) {
          parentProps = res;
        }
        return;
      }

      var attr = _attrs[attrId];

      if (propFilter && propFilter.indexOf(attr[0]) === -1 && propFilter.indexOf(attr[5]) === -1)
      return;

      if (propIgnored && (propIgnored.indexOf(attr[0]) > -1 || propIgnored.indexOf(attr[5]) > -1))
      return;

      if (attrId == _nameAttrId) {
        var val = _this.getAttrValue(attrId, valId);
        needName = true;
        result.name = val;
      } else
      {

        //skip structural attributes, we don't want those to display
        //NOTE: The list of structural attributes that we check explicitly is not marked
        //as hidden in older versions of the property database, so if we ever want to
        //add them to the result list, we have to explicitly set the hidden flag for those.
        var hidden = _this.attributeHidden(attrId);
        if (ignoreHidden && hidden) {
          return;
        }

        var prop = _this._getObjectProperty(attrId, valId);
        result.properties.push(prop);
      }
    });

    //Combine instance properties with any parent object properties
    if (parentProps) {
      var myProps = {};
      var rp = result.properties;
      for (var i = 0; i < rp.length; i++) {
        myProps[rp[i].displayName] = 1;
      }

      if (!result.name)
      result.name = parentProps.name;

      var pp = parentProps.properties;
      for (var i = 0; i < pp.length; i++) {
        if (!myProps.hasOwnProperty(pp[i].displayName)) {
          rp.push(pp[i]);
        }
      }
    }

    if (propFilter && !result.properties.length && !addExternalId && !needName)
    return null;

    return result;
  };

  /**
      * Obtains a map between each database id (dbId) and their corresponding external-id.
      * The external-id is the identifier used by the source file. 
      * Example: A translated Revit file has a wall with dbId=1, but in Revit (desktop application) the identifier of that wall is "Wall-06-some-guid-here".
      *
      * @param {number[]} [extIdFilter] - Limits the result to only contain the ids in this array.
      *
      * @returns {object} map from dbId into external-id.
      */
  this.getExternalIdMapping = function (extIdFilter) {
    var mapping = {};
    if (_idsOffsets && 'length' in _idsOffsets) {// Check that it's an indexable type
      for (var dbId = 1, len = _idsOffsets.length; dbId < len; ++dbId) {
        var externalId = this.getIdAt(dbId);
        if (!extIdFilter || extIdFilter[externalId] === true) {
          mapping[externalId] = dbId;
        }
      }
    }
    return mapping;
  };

  //Heuristically find the root node(s) of a scene
  //A root is a node that has children, has no (or null) parent and has a name.
  //There can be multiple nodes at the top level (e.g. Revit DWF), which is why
  //we should get the scene root with absolute certainty from the SVF instance tree,
  //but we would have to uncompress and parse that in -- something that is
  //not currently done. This is good enough for now (if pretty slow).
  this.findRootNodes = function () {

    var idroots = [];

    this.enumObjects(function (id) {
      var hasChild = false;
      var hasParent = false;
      var hasName = false;

      _this.enumObjectProperties(id, function (attrId, valId) {
        if (attrId == _parentAttrId) {
          if (_this.getAttrValue(attrId, valId, true)) //checks for null or zero parent id, in which case it's considered non-parent
            hasParent = true;
        } else if (attrId == _childAttrId) {
          hasChild = true;
        } else
        if (attrId == _nameAttrId) {
          hasName = true;
        }
      });

      if (hasChild && hasName && !hasParent) {
        idroots.push(id);
      }
    });

    return idroots;
  };

  //Gets the immediate children of a node with the given dbId
  this.getNodeNameAndChildren = function (node /* {dbId:X, name:""} */, skipChildren) {

    var id = node.dbId;

    var children;
    var instanceOfValId;

    this.enumObjectProperties(id, function (attrId, valId) {
      var val;

      if (attrId === _parentAttrId) {
        //node.parent = this.getAttrValue(attrId, valId, true); //eventually we will needs this instead of setting parent pointer when creating children below.
      } else if (attrId == _childAttrId && !skipChildren) {
        val = _this.getAttrValue(attrId, valId, true);
        var child = { dbId: val, parent: node.dbId };
        if (!children)
        children = [child];else

        children.push(child);

      } else if (attrId === _nameAttrId) {
        node.name = _this.getAttrValue(attrId, valId); //name is necessary for GUI purposes, so add it to the node object explicitly
      } else if (attrId === _nodeFlagsAttrId) {
        node.flags = _this.getAttrValue(attrId, valId, true); //flags are necessary for GUI/selection purposes, so add them to the node object
      } else if (attrId === _instanceOfAttrId) {
        instanceOfValId = valId;
      }
    });

    //If this is an instance of another object,
    //try to get the object name from there.
    //This is not done in the main loop above for performance reasons,
    //we only want to do the expensive thing of going up the object hierarchy
    //if the node does not actually have a name attribute.
    //TODO: Navisworks will likely inherit the node flags from the prototype object also.
    //However, I did not enable this yet, because it makes everything very slow for Revit (due to almost
    //always having to get the instance parent instead of almost never) and the node flags are not used by the LMV tree
    //view at the moment. If the node flag inheritance is enabled, we will have to also use an instsance prototype cache,
    //like is done by the Diff function below.
    if (!node.name /*|| !node.flags*/ && instanceOfValId) {
      var tmp = { dbId: _this.getAttrValue(_instanceOfAttrId, instanceOfValId, true), name: null, flags: null };
      _this.getNodeNameAndChildren(tmp, true);

      //Take the name from the prototype object if the instance doesn't have it
      if (tmp.name && !node.name)
      node.name = tmp.name;
      /*
                                        //Take the node flags from the prototype object if the instance doesn't have it
                                        if (typeof node.flags !== "number" && typeof tmp.flags === "number")
                                            node.flags = tmp.flags;
                                            */
    }

    return children;
  };


  function buildDbIdToFragMap(fragToDbId) {
    var ret = {};
    for (var i = 0, iEnd = fragToDbId.length; i < iEnd; i++) {

      var dbIds = fragToDbId[i];

      //In 2D drawings, a single fragment (consolidation mesh)
      //can contain multiple objects with different dbIds.
      if (!Array.isArray(dbIds)) {
        dbIds = [dbIds];
      }

      for (var j = 0; j < dbIds.length; j++) {
        var dbId = dbIds[j];
        var frags = ret[dbId];
        if (frags === undefined) {
          //If it's the first fragments for this dbid,
          //store the index directly -- most common case.
          ret[dbId] = i;
        } else
        if (!Array.isArray(frags)) {
          //otherwise put the fragments that
          //reference the dbid into an array
          ret[dbId] = [frags, i];
        } else
        {
          //already is an array
          frags.push(i);
        }
      }
    }

    return ret;
  }


  //Duplicated from InstanceTree.js
  var NODE_TYPE_ASSEMBLY = 0x0, // Real world object as assembly of sub-objects
  NODE_TYPE_GEOMETRY = 0x6; // Leaf geometry node

  //Builds a tree of nodes according to the parent/child hierarchy
  //stored in the property database, starting at the node with the given dbId
  this.buildObjectTree = function (rootId, //current node dbId
  fragToDbId, //array of fragId->dbId lookup
  maxDepth, /* returns max tree depth */
  nodeStorage)
  {

    //Build reverse lookup for dbId->fragId
    var dbToFragId;
    if (fragToDbId) {
      dbToFragId = buildDbIdToFragMap(fragToDbId);
    }

    //Call recursive implementation
    return this.buildObjectTreeRec(rootId, 0, dbToFragId, 0, maxDepth, nodeStorage);
  };

  //Recursive helper for buildObjectTree
  this.buildObjectTreeRec = function (dbId, //current node dbId
  parent, //parent dbId
  dbToFrag, //map of dbId to fragmentIds
  depth, /* start at 0 */
  maxDepth, /* returns max tree depth */
  nodeStorage)
  {

    if (depth > maxDepth[0])
    maxDepth[0] = depth;

    var node = { dbId: dbId };
    var children = this.getNodeNameAndChildren(node);

    var childrenIds = [];

    if (children) {
      for (var j = 0; j < children.length; j++) {
        var childHasChildren = this.buildObjectTreeRec(children[j].dbId, dbId, dbToFrag, depth + 1, maxDepth, nodeStorage);

        //For display purposes, prune children that are leafs without graphics
        //and add the rest to the node
        if (childHasChildren)
        childrenIds.push(children[j].dbId);
      }
    }

    var fragIds;

    //leaf node
    if (dbToFrag) {
      var frags = dbToFrag[dbId];
      if (frags !== undefined) {

        //if (childrenIds.length)
        //    console.error("Node that has both node children and fragment children!", node.name, children, childrenIds, frags);

        if (!Array.isArray(frags))
        fragIds = [frags];else

        fragIds = frags;
      }
    }

    //Use default node flags in case none are set
    //This is not the best place to do this, but it's
    //the last place where we can differentiate between "not set" and zero.
    var flags = node.flags || 0;
    if (flags === undefined) {
      if (fragIds && fragIds.length)
      flags = NODE_TYPE_GEOMETRY;else
      if (childrenIds.length)
      flags = NODE_TYPE_ASSEMBLY;else

      flags = 0; //??? Should not happen (those nodes are pruned above)
    }

    // Get child count (nodes + fragments)
    var childCount = childrenIds.length + (fragIds ? fragIds.length : 0);

    // Skip nodes that contain neither children nor any fragments
    if (childCount) {
      nodeStorage.setNode(dbId, parent, node.name, flags, childrenIds, fragIds);
    }

    return childCount;
  };

  /**
      * Given a text string, returns an array of individual words separated by 
      * white spaces.
      * Will preserve white spacing within double quotes.
      */
  this.getSearchTerms = function (searchText) {
    searchText = searchText.toLowerCase();
    //regex preserves double-quote delimited strings as phrases
    var searchTerms = searchText.match(/"[^"]+"|[^\s]+/g) || [];
    var i = searchTerms.length;
    while (i--) {
      searchTerms[i] = searchTerms[i].replace(/"/g, "");
    }
    var searchList = [];
    for (var i = 0; i < searchTerms.length; i++) {

      if (searchTerms[i].length > 1)
      searchList.push(searchTerms[i]);
    }
    return searchList;
  };

  /**
      * Searches the property database for a string.
      * 
      * @returns Array of ids.
      */
  this.bruteForceSearch = function (searchText, attributeNames) {

    var searchList = this.getSearchTerms(searchText);
    if (searchList.length === 0)
    return [];

    //For each search word, find matching IDs
    var results = [];

    for (var k = 0; k < searchList.length; k++) {
      var result = [];

      //Find all values that match the search text
      var matching_vals = [];
      for (var i = 0, iEnd = _valuesOffsets.length; i < iEnd; i++) {
        var val = this.getValueAt(i);
        if (val === null)
        continue;
        if (val.toString().toLowerCase().indexOf(searchList[k]) !== -1)
        matching_vals.push(i);
      }

      if (matching_vals.length === 0) {
        results.push(result);
        continue;
      }

      // values should be sorted at this point, but it doesn't hurt making sure they are.
      matching_vals.sort(function (a, b) {
        return a - b;
      });

      this.enumObjects(function (id) {

        _this.enumObjectProperties(id, function (attrId, valId) {

          // skip hidden attributes
          var isHidden = _this.attributeHidden(attrId);
          if (isHidden) {
            return;
          }

          var iFound = Object(_common_SearchUtils__WEBPACK_IMPORTED_MODULE_1__["binarySearch"])(matching_vals, valId);
          if (iFound !== -1) {
            //Check attribute name in case a restriction is passed in
            if (attributeNames && attributeNames.length && attributeNames.indexOf(_attrs[attrId][0]) === -1)
            return;

            result.push(id);
            return true;
          }
        });

      });

      results.push(result);
    }

    if (results.length === 1) {
      return results[0];
    }

    //If each search term resulted in hits, compute the intersection of the sets
    var map = {};
    var hits = results[0];
    for (var i = 0; i < hits.length; i++) {
      map[hits[i]] = 1;}


    for (var j = 1; j < results.length; j++) {
      hits = results[j];
      var mapint = {};

      for (var i = 0; i < hits.length; i++) {
        if (map[hits[i]] === 1)
        mapint[hits[i]] = 1;
      }

      map = mapint;
    }

    var result = [];
    for (var k in map) {
      result.push(parseInt(k));
    }

    return result;
  };


  /**
      * Given a property name, it returns an array of ids that contain it.
      */
  this.bruteForceFind = function (propertyName) {

    var results = [];
    this.enumObjects(function (id) {

      var idContainsProperty = false;
      _this.enumObjectProperties(id, function (attrId, valId) {

        var attr = _attrs[attrId];
        var propName = attr[0];
        var displayName = attr[5];

        if (propName === propertyName || displayName === propertyName) {
          idContainsProperty = true;
          return true;
        }
      });

      if (idContainsProperty) {
        results.push(id);
      }

    });

    return results;
  };

  /**
      * Specialized function that returns:
      * {
      *    'layer-name-1': [id1, id2, ..., idN],
      *    'layer-name-2': [idX, idY, ..., idZ],
      *    ...
      * }
      */
  this.getLayerToNodeIdMapping = function () {

    var results = {};
    this.enumObjects(function (id) {

      _this.enumObjectProperties(id, function (attrId, valId) {

        if (attrId != _layersAttrId)
        return;

        var val = _this.getAttrValue(attrId, valId);
        if (!Array.isArray(results[val])) {
          results[val] = [];
        }
        results[val].push(id);
        return true;
      });

    });

    return results;
  };

  /**
      * Unpacks an attribute value into all available components.
      *
      * @param {number} attrId - The attribute id.
      *
      * @returns {object} containing `name`, `category`, `dataType`, `dataTypeContext`, `description`, `displayName` and `flags`.
      */
  this.getAttributeDef = function (attrId) {
    var _raw = _attrs[attrId];
    return {
      //attrName(0), category(1), dataType(2), dataTypeContext(3), description(4), displayName(5), flags(6)
      name: _raw[0],
      category: _raw[1],
      dataType: _raw[2],
      dataTypeContext: _raw[3],
      description: _raw[4],
      displayName: _raw[5],
      flags: _raw[6] };

  };

  /**
      * Invokes a callback function for each attribute-id in the model.
      *
      * @example
      *      pdb.enumAttributes(function(attrId, attrDef) {
      *           // attrDef is an object
      *           if (attrDef.name === 'name') {
      *               return true; // return true to stop iteration.
      *           }
      *      })
      * 
      * @param {function} cb - Callback invoked
      */
  this.enumAttributes = function (cb) {
    for (var i = 1; i < _attrs.length; i++) {
      if (cb(i, this.getAttributeDef(i), _attrs[i]))
      break;
    }
  };


  //See API doc for this.enumObjectProperties below
  function enumObjectPropertiesV1(dbId, cb) {
    //Start offset of this object's properties in the Attribute-Values table
    var propStart = 2 * _offsets[dbId];

    //End offset of this object's properties in the Attribute-Values table
    var propEnd = 2 * _offsets[dbId + 1];

    //Loop over the attribute index - value index pairs for the objects
    //and for each one look up the attribute and the value in their
    //respective arrays.
    for (var _i = propStart; _i < propEnd; _i += 2) {
      var attrId = _avs[_i];
      var valId = _avs[_i + 1];

      if (cb(attrId, valId))
      break;
    }
  }

  //See API doc for this.enumObjectProperties below
  function enumObjectPropertiesV2(dbId, cb) {
    //v2 variable length encoding. Offsets point into delta+varint encoded a-v pairs per object
    var offset = _offsets[dbId];
    var propEnd = _offsets[dbId + 1];
    var buf = _avs;

    var a = 0;
    while (offset < propEnd) {

      //Inlined version of readVarint
      var b = buf[offset++];
      var value = b & 0x7f;
      var shiftBy = 7;
      while (b & 0x80) {
        b = buf[offset++];
        value |= (b & 0x7f) << shiftBy;
        shiftBy += 7;
      }

      //attribute ID is delta encoded from the previously seen attribute ID, add that back in
      a += value;

      //Inlined version of readVarint
      b = buf[offset++];
      value = b & 0x7f;
      shiftBy = 7;
      while (b & 0x80) {
        b = buf[offset++];
        value |= (b & 0x7f) << shiftBy;
        shiftBy += 7;
      }

      if (cb(a, value))
      break;
    }
  }

  /**
     * Iterates over all properties for a given database id and invokes the supplied callback function.
     *
     * @param {number} dbId - The attribute id.
     * @param {function} cb - callback function, that receives 2 arguments: attribute-id (`attrId`) and value-id (`valId`). Have the function return `true` to abort iteration.
     *
     */
  this.enumObjectProperties = _isVarint ? enumObjectPropertiesV2 : enumObjectPropertiesV1;


  var _instanceOfCache = {};

  //See API documentation in this.getPropertiesSubsetWithInheritance below
  function getPropertiesSubsetWithInheritanceV1(dbId, desiredAttrIds, dstValIds) {

    //Start offset of this object's properties in the Attribute-Values table
    var propStart = 2 * _offsets[dbId];

    //End offset of this object's properties in the Attribute-Values table
    var propEnd = 2 * _offsets[dbId + 1];

    //Loop over the attribute index - value index pairs for the objects
    //and for each one look up the attribute and the value in their
    //respective arrays.
    for (var _i2 = propStart; _i2 < propEnd; _i2 += 2) {
      var a = _avs[_i2];
      var value = _avs[_i2 + 1];

      if (a === _instanceOfAttrId) {

        // recursively add parent attributes
        var parentDbId = getAttrValue(a, value);
        var cached = _instanceOfCache[parentDbId];
        if (!cached) {
          _instanceOfCache[parentDbId] = cached = {};
          getPropertiesSubsetWithInheritanceV1(parentDbId, desiredAttrIds, cached);
        }

        for (var _p in cached) {
          if (!dstValIds[_p]) {
            dstValIds[_p] = cached[_p];
          }
        }

      } else {
        if (!desiredAttrIds || desiredAttrIds[a]) {
          dstValIds[a] = value;
        }
      }
    }
  }

  //See API documentation in this.getPropertiesSubsetWithInheritance below
  function getPropertiesSubsetWithInheritanceV2(dbId, desiredAttrIds, dstValIds) {

    //v2 variable length encoding. Offsets point into delta+varint encoded a-v pairs per object
    var offset = _offsets[dbId];
    var propEnd = _offsets[dbId + 1];
    var buf = _avs;

    var a = 0;
    while (offset < propEnd) {

      var b = buf[offset++];
      var value = b & 0x7f;
      var shiftBy = 7;
      while (b & 0x80) {
        b = buf[offset++];
        value |= (b & 0x7f) << shiftBy;
        shiftBy += 7;
      }

      //attribute ID is delta encoded from the previously seen attribute ID, add that back in
      a += value;

      b = buf[offset++];
      value = b & 0x7f;
      shiftBy = 7;
      while (b & 0x80) {
        b = buf[offset++];
        value |= (b & 0x7f) << shiftBy;
        shiftBy += 7;
      }

      if (a === _instanceOfAttrId) {

        // recursively add parent attributes
        var parentDbId = getAttrValue(a, value);
        var cached = _instanceOfCache[parentDbId];
        if (!cached) {
          _instanceOfCache[parentDbId] = cached = {};
          getPropertiesSubsetWithInheritanceV2(parentDbId, desiredAttrIds, cached);
        }

        for (var _p2 in cached) {
          if (!dstValIds[_p2]) {
            dstValIds[_p2] = cached[_p2];
          }
        }

      } else {
        if (!desiredAttrIds || desiredAttrIds[a]) {
          dstValIds[a] = value;
        }
      }
    }
  }

  /**
     * Given an object ID, returns the corresponding value IDs for the given list of attribute Ids.
     * Takes into account instance_of inheritance of properties.
     * @param {integer} dbId - The input object ID
     * @param {Object} desiredAttrIds - A map of the requested attribute Ids, where desiredAttrIds[attrId] is "truthy"
     * @param {Object} dstValIds - A storage target map, such that dstValIds[attrId] will be the resulting value.
     *                          It is the responsibility of the caller to zero initialize this map.
     */
  this.getPropertiesSubsetWithInheritance = _isVarint ? getPropertiesSubsetWithInheritanceV2 : getPropertiesSubsetWithInheritanceV1;

  /**
                                                                                                                                      * Iterates over the property database and finds all layers.
                                                                                                                                      *
                                                                                                                                      * @returns {object}
                                                                                                                                      */
  this.findLayers = function () {

    // Same format as F2d.js::createLayerGroups()
    var ret = { name: 'root', id: 1, index: 1, children: [], isLayer: false, childCount: 0 };

    // Return early when no Layer attribute is present
    if (_layersAttrId === undefined) {
      return ret;
    }

    // Grab all Layer names
    var layers = [];
    var scope = this;
    this.enumObjects(function (dbId) {
      scope.enumObjectProperties(dbId, function (attrId, valId) {
        if (attrId === _layersAttrId) {
          var layerName = scope.getValueAt(valId);
          if (layers.indexOf(layerName) === -1) {
            layers.push(layerName);
          }
          // We found what we wanted => skip remaining attribs for this object
          return true;
        }
      });
    });

    layers.sort(function (a, b) {
      return a.localeCompare(b, undefined, { sensitivity: 'base', numeric: true });
    });

    // Format output to match F2d.js::createLayerGroups()
    ret.childCount = layers.length;
    ret.children = layers.map(function (layerName, index) {
      return {
        name: layerName,
        index: index + 1,
        id: index + 1,
        isLayer: true };

    });

    return ret;
  };

  /**
      * Iterates over all database ids and invokes a callback function.
      *
      * @param {function} cb - callback function. Receives a single parameter: the database-id. Have the function return true to abort iteration.
      * @param {number} fromId - starting id (inclusive)
      * @param {number} toId - end id (exclusive)
      *
      */
  this.enumObjects = function (cb, fromId, toId) {

    // For a given id, the range in _avs is specified by [offsets[id], _offsets[id+1]].
    // The last element in _offsets is just the range end of the final range.
    var idCount = _offsets.length - 1; //== this.getObjectCount()

    if (typeof fromId === "number") {
      fromId = Math.max(fromId, 1);
    } else {
      fromId = 1;
    }

    if (typeof toId === "number") {
      toId = Math.min(idCount, toId);
    } else {
      toId = idCount;
    }

    for (var id = fromId; id < toId; id++) {
      if (cb(id))
      break;
    }
  };

  this.getAttrChild = function () {
    return _childAttrId;
  };

  this.getAttrParent = function () {
    return _parentAttrId;
  };

  this.getAttrName = function () {
    return _nameAttrId;
  };

  this.getAttrLayers = function () {
    return _layersAttrId;
  };

  this.getAttrInstanceOf = function () {
    return _instanceOfAttrId;
  };

  this.getAttrViewableIn = function () {
    return _viewableInAttrId;
  };

  this.getAttrXref = function () {
    return _externalRefAttrId;
  };

  this.getAttrNodeFlags = function () {
    return _nodeFlagsAttrId;
  };

  /**
      * Checks whether an attirbute is hidden or not.
      *
      * @param {number} attrId - The attribute id.
      *
      * @returns {boolean} - true if the attribute is a hidden one.
      */
  this.attributeHidden = function (attrId) {
    var _raw = _attrs[attrId];
    var flags = _raw[6];

    return flags & 1 /*afHidden*/ ||
    attrId == _parentAttrId ||
    attrId == _childAttrId ||
    attrId == _viewableInAttrId ||
    attrId == _externalRefAttrId;
  };

  this._attributeIsBlacklisted = function (attrId) {
    var _raw = _attrs[attrId];
    var name = _raw[0];
    var category = _raw[1];

    //Dimension properties were added at a later time, so
    //some diffs will fail when comparing a file with vs. file without those.
    //Anyway, it's beter to skip those for diff purposes, since they can have numeric
    //noise and result in spurious diffs.
    //See also: https://git.autodesk.com/fluent/modeldb/commit/584d39d5f85a8d2954da557859bb52c224c402af
    if (category === "Dimensions" && RVT_DIM_PROPS.indexOf(name) !== -1)
    return true;

    return false;

  };

  // Helper function for _findDifferences.
  // Finds all attributeIds and valueIds - including inherited ones.
  // Results are pushed to 'result' array as objects { attrId, valId }.
  // Hidden attributes are excluded.
  this._getAttributeAndValueIds = function (dbId, result, sortByAttrId, cachedParentAttribs) {

    var cb = function cb(a, v) {
      if (a === _instanceOfAttrId) {

        // recursively add parent attributes
        var parentDbId = _this.getAttrValue(a, v);

        // If parentDbId is the same as on last call, we just reuse the result and skip the recursive
        // call for collecting parent attribs. This avoids doing recursive search over and over again
        // for the same dbId and can gain signficant speed-up. (e.g. <1s instead of 11) 
        if (cachedParentAttribs) {

          var parentAttribs = cachedParentAttribs.result;

          // If parentDb did change since last call...
          if (parentDbId !== cachedParentAttribs.dbId) {

            // discard previous parent attribs
            parentAttribs.length = 0;

            // collect attributes/values for new parentDbId
            _this._getAttributeAndValueIds(parentDbId, parentAttribs, false);

            // remember for which dbId we cached the result 
            cachedParentAttribs.dbId = parentDbId;
          }

          // add parent attribs/values to result
          result.push.apply(result, parentAttribs);

        } else {
          _this._getAttributeAndValueIds(parentDbId, result, false);
        }
      } else if (!_this.attributeHidden(a) && !_this._attributeIsBlacklisted(a)) {
        result.push({
          attrId: a,
          valId: v });

      }
    };
    _this.enumObjectProperties(dbId, cb);

    if (sortByAttrId) {
      var byIncAtribId = function byIncAtribId(a, b) {
        return a.attrId - b.attrId;
      };
      result.sort(byIncAtribId);
    }
  };

  /* Finds all common dbIds of this and another db for which the properties are not identical.
      * Hidden attributes are excluded.
      *  @param {PropertyDatabase} dbToCompare
      *  @param {Object} [DiffOptions] diffOptions 
      *  @param {function(number)} [onProgress] gets progress values in percent
      *  @returns {Object} 
      * See PropDbLoader.diffProperties for details about diffOptions and return value.
      *
      * NOTE: Current implementation only supports Otg models.
      *
      * @private
      */
  this.findDifferences = function (dbToCompare, diffOptions, onProgress) {

    var result = {
      changedIds: [] };


    // Optional: Restrict search to the given ids
    var dbIds = diffOptions && diffOptions.dbIds;

    // Optional: Collect details about which props have changed
    var listPropChanges = diffOptions && diffOptions.listPropChanges;
    if (listPropChanges) {
      result.propChanges = [];
    }

    var db1 = this;
    var db2 = dbToCompare;

    // Reused array of { attrId, valId } pairs.
    var propIds1 = [];
    var propIds2 = [];

    // To support instanceOf attributes, we need to recursively check parent attributes/values too. (see getAttributesAndValues)
    // Since the parent of subsequent dbId is often the same, we cache the parent attribs/values that we got from last call.
    // This avoids to do the same check several times and can make diff significantly faster.
    var cachedParentAttribs1 = { result: [], dbId: -1 };
    var cachedParentAttribs2 = { result: [], dbId: -1 };

    var diffObject = function diffObject(dbId) {

      // get sorted array of {attrIds, valIds} pairs for both objects
      var i1 = 0;
      var i2 = 0;
      propIds1.length = 0;
      propIds2.length = 0;

      db1._getAttributeAndValueIds(dbId, propIds1, true, cachedParentAttribs1);
      db2._getAttributeAndValueIds(dbId, propIds2, true, cachedParentAttribs2);

      if (!propIds1.length || !propIds2.length) {
        // If an array is empty, this dbId does only exist
        // in one of the two dbs, i.e, the whole object was added or removed.
        // We are only interested in prop changes of matching objects.
        return;
      }

      var changeFound = false;

      // array of prop changes for current dbId
      var propChanges = undefined;

      while (i1 < propIds1.length && i2 < propIds2.length) {

        // Note that some values may be undefined if one of the arrays ended.
        var elem1 = propIds1[i1];
        var elem2 = propIds2[i2];
        var a1 = elem1 && elem1.attrId;
        var v1 = elem1 && elem1.valId;
        var a2 = elem2 && elem2.attrId;
        var v2 = elem2 && elem2.valId;

        // If everything is equal, we are done with this attribute
        if (a1 === a2 && v1 === v2) {
          i1++;
          i2++;
          continue;
        }

        // If we get here, the current attribute has changed
        changeFound = true;

        // If no details are requested, we are done with this dbId
        if (!listPropChanges) {
          break;
        }

        // We exploit here that attributeIds in OTG are always sorted in ascending order
        // Therefore, if a1 > a2, we can safely assume that a1 does not exist in iterator2,
        // but possibly vice versa.
        var prop1Missing = a1 === undefined || a1 > a2;
        var prop2Missing = a2 === undefined || a2 > a1;

        var change = undefined;

        // Handle case that property has been added or removed
        if (prop1Missing) {

          // property was added in db2
          change = db2._getObjectProperty(a2, v2);
          change.displayValueB = change.displayValue;
          change.displayValue = undefined;

          // a2 has been detected as added. Skip it and continue.
          i2++;
        } else if (prop2Missing) {

          // property was removed in db2
          change = db1._getObjectProperty(a1, v1);
          change.displayValueB = undefined;

          // a1 has been detected as removed. Skip it and continue.
          i1++;
        } else {
          // attrib exists in both, but value has changed
          change = db1._getObjectProperty(a1, v1);
          change.displayValueB = _this.getAttrValue(a2, v2);

          i1++;
          i2++;
        }

        // If this is the first prop that change, alloc array for it
        if (!propChanges) {
          propChanges = [];
        }

        propChanges.push(change);
      }

      // Collect dbId of modified object
      if (changeFound) {
        result.changedIds.push(dbId);

        // collect correspondign prop change details
        if (listPropChanges) {
          result.propChanges.push(propChanges);
        }
      }
    };

    // Track progress
    var lastPercent = -1;
    var trackProgress = function trackProgress(idsDone, idsTotal) {
      // Limit calls to 100 - otherwise it would slow-down everything.
      var percent = Math.floor(100 * idsDone / idsTotal);
      if (percent != lastPercent) {
        onProgress && onProgress(percent);
        lastPercent = percent;
      }
    };

    if (dbIds) {
      // diff selected set of Ids
      for (var i = 0; i < dbIds.length; i++) {
        var dbId = dbIds[i];
        diffObject(dbId);
        trackProgress(i, dbIds.length);
      }
    } else {
      // diff all objects
      // Note: We are only searching for common objects that changed. Therefore, the loop
      //       runs only over dbIds that are within the valid range for both.
      var dbIdEnd = Math.min(db1.getObjectCount(), this.getObjectCount());
      for (var dbId = 1; dbId < dbIdEnd; dbId++) {
        diffObject(dbId);
        trackProgress(dbId, dbIdEnd);
      }
    }

    return result;
  };

  this.dtor = function () {
    _attrs = null;
    _offsets = null;
    _avs = null;
    _valuesBlob = null;
    _valuesOffsets = null;
    _idsBlob = null;
    _idsOffsets = null;

    _childAttrId = 0;
    _parentAttrId = 0;
    _nameAttrId = 0;
    _instanceOfAttrId = 0;
    _viewableInAttrId = 0;
    _externalRefAttrId = 0;
    _nodeFlagsAttrId = 0;
  };
}

/***/ }),

/***/ "./src/file-loaders/lmvtk/common/SearchUtils.js":
/*!******************************************************!*\
  !*** ./src/file-loaders/lmvtk/common/SearchUtils.js ***!
  \******************************************************/
/*! exports provided: binarySearch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "binarySearch", function() { return binarySearch; });


/**
               * Finds the index of a number in a sorted Array or numbers. 
               * 
               * @param sortedArray Array of sorted numbers to search in.
               * @param key number value to find.
               * @returns index of the value in the array, or -1 if not found.  
               */
function binarySearch(sortedArray, key) {

  var start = 0;
  var end = sortedArray.length - 1;
  var mid;

  while (start <= end)
  {
    mid = (start + end) / 2 | 0;
    if (key === sortedArray[mid])
    return mid;else
    if (key < sortedArray[mid])
    end = mid - 1;else
    start = mid + 1;
  }
  return -1;
};

/***/ }),

/***/ "./src/file-loaders/lmvtk/common/StringUtils.js":
/*!******************************************************!*\
  !*** ./src/file-loaders/lmvtk/common/StringUtils.js ***!
  \******************************************************/
/*! exports provided: utf8BlobToStr, safeUtf8BlobToStr, utf16to8, utf8ArrayToString, blobToJson, subBlobToJson, subBlobToJsonInt, parseIntArray, findValueOffsets */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utf8BlobToStr", function() { return utf8BlobToStr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "safeUtf8BlobToStr", function() { return safeUtf8BlobToStr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utf16to8", function() { return utf16to8; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utf8ArrayToString", function() { return utf8ArrayToString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blobToJson", function() { return blobToJson; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subBlobToJson", function() { return subBlobToJson; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subBlobToJsonInt", function() { return subBlobToJsonInt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseIntArray", function() { return parseIntArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findValueOffsets", function() { return findValueOffsets; });


// http://www.onicos.com/staff/iz/amuse/javascript/expert/utf.txt
/* utf.js - UTF-8 <=> UTF-16 convertion
 *
 * Copyright (C) 1999 Masanao Izumo <iz@onicos.co.jp>
 * Version: 1.0
 * LastModified: Dec 25 1999
 * This library is free.  You can redistribute it and/or modify it.
 */
function utf8BlobToStr(array, start, length) {
  var out, i, len, c;
  var char2, char3;

  out = '';
  len = length;
  i = 0;
  while (i < len) {
    c = array[start + i++];
    switch (c >> 4) {

      case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:
        // 0xxxxxxx
        out += String.fromCharCode(c);
        break;
      case 12:case 13:
        // 110x xxxx   10xx xxxx
        char2 = array[start + i++];
        out += String.fromCharCode((c & 0x1F) << 6 | char2 & 0x3F);
        break;
      case 14:
        // 1110 xxxx  10xx xxxx  10xx xxxx
        char2 = array[start + i++];
        char3 = array[start + i++];
        out += String.fromCharCode((c & 0x0F) << 12 |
        (char2 & 0x3F) << 6 |
        (char3 & 0x3F) << 0);
        break;}

  }

  return out;
}

/**
   * Safe version of utf8BlobToStr(), where Arrays are used to concatenate chars via join().
   * This function exists because string::operator += crashes on Chrome with large inputs.
   */
function safeUtf8BlobToStr(array, start, length) {
  var out, i, len, c, outArray, count;
  var char2, char3;

  var STR_CVT_LIMIT = 32 * 1024;
  out = '';
  outArray = [];
  len = length;
  count = 0;
  i = 0;
  while (i < len) {
    c = array[start + i++];
    switch (c >> 4) {

      case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:
        // 0xxxxxxx
        outArray.push(String.fromCharCode(c));
        break;
      case 12:case 13:
        // 110x xxxx   10xx xxxx
        char2 = array[start + i++];
        outArray.push(String.fromCharCode((c & 0x1F) << 6 | char2 & 0x3F));
        break;
      case 14:
        // 1110 xxxx  10xx xxxx  10xx xxxx
        char2 = array[start + i++];
        char3 = array[start + i++];
        outArray.push(String.fromCharCode((c & 0x0F) << 12 |
        (char2 & 0x3F) << 6 |
        (char3 & 0x3F) << 0));
        break;}

    if (++count >= STR_CVT_LIMIT || i >= len) {
      out += outArray.join("");
      outArray.length = 0;
      count = 0;
    }
  }

  return out;
}


function utf16to8(str, array, start) {
  var i, len, c;

  var j = start || 0;
  len = str.length;

  if (array) {
    for (i = 0; i < len; i++) {
      c = str.charCodeAt(i);
      if (c >= 0x0001 && c <= 0x007F) {
        array[j++] = c;
      } else if (c > 0x07FF) {
        array[j++] = 0xE0 | c >> 12 & 0x0F;
        array[j++] = 0x80 | c >> 6 & 0x3F;
        array[j++] = 0x80 | c >> 0 & 0x3F;
      } else {
        array[j++] = 0xC0 | c >> 6 & 0x1F;
        array[j++] = 0x80 | c >> 0 & 0x3F;
      }
    }
  } else {
    //If no output buffer is passed in, estimate the required
    //buffer size and return that.
    for (i = 0; i < len; i++) {
      c = str.charCodeAt(i);
      if (c >= 0x0001 && c <= 0x007F) {
        j++;
      } else if (c > 0x07FF) {
        j += 3;
      } else {
        j += 2;
      }
    }
  }

  return j - (start || 0);
}


var USE_MANUAL_UTF8 = true;
var SAFE_UTF_LENGTH = 1024 * 1024;

function utf8ArrayToString(array, start, length) {

  if (start === undefined)
  start = 0;
  if (length === undefined)
  length = array.length;

  if (USE_MANUAL_UTF8) {
    if (length > SAFE_UTF_LENGTH) {
      return safeUtf8BlobToStr(array, start, length);
    }
    return utf8BlobToStr(array, start, length);
  } else {
    var encodedString = "";
    for (var i = start, iEnd = start + length; i < iEnd; i++) {
      encodedString += String.fromCharCode(array[i]);}

    return decodeURIComponent(escape(encodedString));
  }
};

function blobToJson(blob) {

  var decodedString = utf8ArrayToString(blob, 0, blob.length);

  return JSON.parse(decodedString);
};

//parses a piece of json from a given blob (representing an array of json values)
//up to the next comma+newline combo (i.e. array delimiter).
function subBlobToJson(blob, startIndex) {
  if (startIndex === undefined) {
    return '';
  }

  var i = startIndex;

  while (i < blob.length - 1) {
    var c = blob[i];
    if (c == 44 && (blob[i + 1] == 10 || blob[i + 1] == 13)) //comma followed by newline?
      break;
    if (c == 10 || c == 13) //detect newline or line feed
      break;
    i++;
  }

  var decodedString = utf8ArrayToString(blob, startIndex, i - startIndex);
  try {
    return JSON.parse(decodedString);
  } catch (e) {
    console.error("Error parsing property blob to JSON : " + decodedString);
    return decodedString;
  }
};

function subBlobToJsonInt(blob, startIndex) {
  var val = 0;
  var i = startIndex;

  //Check for integers that were serialized as strings.
  //This should not happen, ever, but hey, it does.
  if (blob[i] == 34)
  i++;

  while (i < blob.length - 1) {
    var c = blob[i];
    if (c == 44 && (blob[i + 1] == 10 || blob[i + 1] == 13))
    break;
    if (c == 10 || c == 13 || c == 34)
    break;
    if (c >= 48 && c <= 57)
    val = val * 10 + (c - 48);

    i++;
  }

  return val;
};

//Simple integer array parse -- expects the array in property database
//format, where the array is packed with possibly newline separator,
//but no other white space. Does not do extensive error checking
function parseIntArray(blob, wantSentinel) {

  //find out how many items we have
  var count = 0;
  for (var i = 0, iEnd = blob.length; i < iEnd; i++) {
    if (blob[i] == 44) //44 = ','
      count++;}

  count++; //last item has no comma after it

  var items = new Uint32Array(count + (wantSentinel ? 1 : 0));

  i = 0;
  var end = blob.length;

  while (blob[i] != 91 && i < end) {//91 = '['
    i++;}

  if (i == blob.length)
  return null;

  i++;

  var seenDigit = false;
  count = 0;
  var curInt = 0;
  while (i < end) {
    var c = blob[i];
    if (c >= 48 && c <= 57) {//digit
      curInt = 10 * curInt + (c - 48);
      seenDigit = true;
    } else
    if (c == 44 || c == 93) {//',' or ']'
      if (seenDigit) {
        items[count++] = curInt;
        seenDigit = false;
        curInt = 0;
      }
    } else {
      seenDigit = false; //most likely a newline (the only other thing we have in our arrays
      curInt = 0;
    }
    i++;
  }

  return items;
};

//Scans an array of json values (strings, integers, doubles) and finds the
//offset of each value in the array, so that we can later pick off that
//specific value, without parsing the whole (potentially huge) json array up front.
//This expects the input blob to be in the form serialized by the property database
//C++ component -- one value per line. A more sophisticated parser would be needed
//in case the format changes and this assumption is not true anymore.
function findValueOffsets(blob) {

  //first, count how many items we have
  var count = 0;
  var end = blob.length - 1;

  for (var i = 0; i < end; i++) {
    if (blob[i] == 44 && (blob[i + 1] == 10 || blob[i + 1] == 13)) // ',' + newline is the item delimiter
      count++;
  }

  if (!count)
  return null;

  count++; //one for the last item

  var items = new Uint32Array(count);

  i = 0;
  count = 0;

  //find opening [
  while (blob[i] != 91 && i < end) {//91 = '['
    i++;}

  i++;

  items[count++] = i;
  var seenEol = false;
  while (i < end) {
    if (blob[i] == 10 || blob[i] == 13)
    seenEol = true;else
    if (seenEol) {
      seenEol = false;
      items[count++] = i;
    }

    i++;
  }

  return items;
};

/***/ }),

/***/ "./src/file-loaders/lmvtk/common/SvfPlacementUtils.js":
/*!************************************************************!*\
  !*** ./src/file-loaders/lmvtk/common/SvfPlacementUtils.js ***!
  \************************************************************/
/*! exports provided: derivePlacementTransform, initPlacement, transformAnimations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "derivePlacementTransform", function() { return derivePlacementTransform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initPlacement", function() { return initPlacement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformAnimations", function() { return transformAnimations; });
/* harmony import */ var _wgs_scene_LmvVector3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../wgs/scene/LmvVector3 */ "./src/wgs/scene/LmvVector3.js");
/* harmony import */ var _wgs_scene_LmvBox3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../wgs/scene/LmvBox3 */ "./src/wgs/scene/LmvBox3.js");
/* harmony import */ var _wgs_scene_LmvMatrix4__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../wgs/scene/LmvMatrix4 */ "./src/wgs/scene/LmvMatrix4.js");
function _typeof(obj) {if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {_typeof = function _typeof(obj) {return typeof obj;};} else {_typeof = function _typeof(obj) {return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;};}return _typeof(obj);}




function getUnitScale(unit) {
  //Why are translators not using standard strings for those?!?!?!?
  switch (unit) {
    case 'meter':
    case 'meters':
    case 'm':return 1.0;
    case 'feet and inches':
    case 'foot':
    case 'feet':
    case 'ft':return 0.3048;
    case 'inch':
    case 'inches':
    case 'in':return 0.0254;
    case 'centimeter':
    case 'centimeters':
    case 'cm':return 0.01;
    case 'millimeter':
    case 'millimeters':
    case 'mm':return 0.001;
    default:return 1.0;}

}


function isIdentity(mtx) {
  var e = mtx.elements;
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      if (i === j) {
        if (e[i * 4 + j] !== 1)
        return false;
      } else {
        if (e[i * 4 + j] !== 0)
        return false;
      }
    }
  }

  return true;
}


function derivePlacementTransform(svf, loadContext) {

  // We now will apply overall model transforms, following the following logic:
  //    1) placementTransform = options.placementTransform);
  //    2) placementTransform = placementTransform.multiply(scalingTransform);
  //    3) placementTransform = placementTransform.multiply(refPointTransform);
  // This is for aggregation scenarios, where multiple models are loaded into the scene
  // In such scenarios the client will most probably manually override the model units


  //First, take the input placement transform as is (could be null).
  svf.placementTransform = loadContext.placementTransform;

  // If requested in the load options, apply scaling from optional 'from' to 'to' units.
  // If unpecified, then units will be read from the models metadata.
  // * usage overloads
  //      options.appyScaling: { from: 'ft', to: 'm' }
  //      options.appyScaling: 'm'   ( equivalent to { to: 'm' })
  // * this is aimed at multiple 3D model situations where models potentialy have different units, but
  //   one  doesn't up-front know what these units are.It also allows overriding of such units.
  // * Model methods: getUnitString , getUnitScale &  getDisplayUnit will be automatically return corrected values
  //   as long as there are no additional options.placementTransform scalings applied.
  if (loadContext.applyScaling) {

    // default 'from' & 'to'  units are from metadata, or 'm' not present
    var scalingFromUnit = 'm';
    if (svf.metadata["distance unit"]) {
      scalingFromUnit = svf.metadata["distance unit"]["value"];
    }
    svf.scalingUnit = scalingFromUnit;

    if ('object' === _typeof(loadContext.applyScaling)) {
      if (loadContext.applyScaling.from) {
        scalingFromUnit = loadContext.applyScaling.from;
      }
      if (loadContext.applyScaling.to) {
        svf.scalingUnit = loadContext.applyScaling.to;
      }
    } else {
      svf.scalingUnit = loadContext.applyScaling;
    }


    // Work out overall desired scaling factor.
    var scalingFactor = getUnitScale(scalingFromUnit) / getUnitScale(svf.scalingUnit);

    if (1 != scalingFactor) {

      var placementS = new _wgs_scene_LmvMatrix4__WEBPACK_IMPORTED_MODULE_2__["LmvMatrix4"](true);

      var scalingTransform = new _wgs_scene_LmvMatrix4__WEBPACK_IMPORTED_MODULE_2__["LmvMatrix4"](true);
      scalingTransform.elements[0] = scalingFactor;
      scalingTransform.elements[5] = scalingFactor;
      scalingTransform.elements[10] = scalingFactor;

      if (loadContext.placementTransform) {
        // There may well already be a placementTransform from previous options/operations.
        placementS.copy(loadContext.placementTransform);

      }

      svf.placementTransform = loadContext.placementTransform = placementS.multiply(scalingTransform);
    }
  }


  var custom_values = svf.metadata["custom values"];

  if (custom_values && custom_values.refPointTransform) {

    svf.refPointTransform = new _wgs_scene_LmvMatrix4__WEBPACK_IMPORTED_MODULE_2__["LmvMatrix4"](true);
    var e = svf.refPointTransform.elements;
    var src = custom_values.refPointTransform;

    e[0] = src[0];
    e[1] = src[1];
    e[2] = src[2];

    e[4] = src[3];
    e[5] = src[4];
    e[6] = src[5];

    e[8] = src[6];
    e[9] = src[7];
    e[10] = src[8];

    e[12] = src[9];
    e[13] = src[10];
    e[14] = src[11];

  } else {
    //Is there an extra offset specified in the georeference?
    //This is important when aggregating Revit models from the same Revit
    //project into the same scene, because Revit SVFs use RVT internal coordinates, which
    //need extra offset to get into the world space.
    var georeference = svf.metadata["georeference"];
    var refPointLMV = georeference && georeference["refPointLMV"];

    var angle = 0;
    if (custom_values && custom_values.hasOwnProperty("angleToTrueNorth")) {
      angle = Math.PI / 180.0 * custom_values["angleToTrueNorth"];
    }

    if (refPointLMV || angle) {

      var rotation = new _wgs_scene_LmvMatrix4__WEBPACK_IMPORTED_MODULE_2__["LmvMatrix4"](true);
      var m = rotation.elements;
      m[0] = m[5] = Math.cos(angle);
      m[1] = -Math.sin(angle);
      m[4] = Math.sin(angle);

      //refPointLMV is given in model local coordinates, hence the negation needed
      //to make the translation go from local to shared coordinates.
      var offset = new _wgs_scene_LmvMatrix4__WEBPACK_IMPORTED_MODULE_2__["LmvMatrix4"](true);
      m = offset.elements;
      if (refPointLMV) {
        m[12] = -refPointLMV[0];
        m[13] = -refPointLMV[1];
        m[14] = -refPointLMV[2];
      }

      //Compose the rotation and offset.
      svf.refPointTransform = rotation.multiply(offset);
    }
  }

  //If request in the load options, apply the reference point transform when loading the model
  if (loadContext.applyRefPoint && svf.refPointTransform) {

    var placement = new _wgs_scene_LmvMatrix4__WEBPACK_IMPORTED_MODULE_2__["LmvMatrix4"](true);

    //Normally we expect the input placement transform to come in as identity in case
    //we have it specified in the georef here, but, whatever, let's be thorough for once.
    if (loadContext.placementTransform)
    placement.copy(loadContext.placementTransform);

    placement.multiply(svf.refPointTransform);

    svf.placementTransform = loadContext.placementTransform = placement;

  } else if (!loadContext.applyRefPoint && loadContext.placementTransform) {

    //In case we are given a placement transform that overrides the icoming refPointTransform

    svf.placementTransform = new _wgs_scene_LmvMatrix4__WEBPACK_IMPORTED_MODULE_2__["LmvMatrix4"](true).copy(loadContext.placementTransform);

  }

  if (svf.placementTransform && isIdentity(svf.placementTransform))
  svf.placementTransform = null;

  return svf.placementTransform;
}


function initPlacement(svf, loadContext) {

  if (!svf.metadata)
  return;

  //Retrieve world bounding box
  var bbox = svf.metadata["world bounding box"];
  var min = new _wgs_scene_LmvVector3__WEBPACK_IMPORTED_MODULE_0__["LmvVector3"](bbox.minXYZ[0], bbox.minXYZ[1], bbox.minXYZ[2]);
  var max = new _wgs_scene_LmvVector3__WEBPACK_IMPORTED_MODULE_0__["LmvVector3"](bbox.maxXYZ[0], bbox.maxXYZ[1], bbox.maxXYZ[2]);
  svf.bbox = new _wgs_scene_LmvBox3__WEBPACK_IMPORTED_MODULE_1__["LmvBox3"](min, max);

  var pt = derivePlacementTransform(svf, loadContext);

  //Global offset is used to avoid floating point precision issues for models
  //located enormous distances from the origin. The default is to move the model to the origin
  //but it can be overridden in case of model aggregation scenarios, where multiple
  //models are loaded into the scene and a common offset is needed for all.
  if (loadContext.globalOffset) {
    // Apply user-defined globalOffset
    svf.globalOffset = loadContext.globalOffset;
  } else {
    // Choose global offset automatically at the center of the model. 
    svf.globalOffset = new _wgs_scene_LmvVector3__WEBPACK_IMPORTED_MODULE_0__["LmvVector3"](0.5 * (min.x + max.x), 0.5 * (min.y + max.y), 0.5 * (min.z + max.z));

    // If there is a placement transform, use the bbox center AFTER transforming it. E.g., if a refPoint transform moves
    // the model by a large offset, the global offset should be moved there as well to keep close to the model geometry.
    if (pt) {
      svf.globalOffset.applyMatrix4(pt);
    }
  }

  var go = svf.globalOffset;
  if (go.x || go.y || go.z) {
    if (!pt) {
      pt = new _wgs_scene_LmvMatrix4__WEBPACK_IMPORTED_MODULE_2__["LmvMatrix4"](true);
      pt.makeTranslation(-go.x, -go.y, -go.z);
    } else {
      var pt2 = new _wgs_scene_LmvMatrix4__WEBPACK_IMPORTED_MODULE_2__["LmvMatrix4"](true);
      pt2.copy(pt);
      pt = pt2;
      pt.elements[12] -= go.x;
      pt.elements[13] -= go.y;
      pt.elements[14] -= go.z;
    }

    svf.placementWithOffset = pt;
  } else {
    svf.placementWithOffset = pt;
  }

  if (pt && !svf.bbox.empty()) {
    svf.bbox.applyMatrix4(pt);
  }

  if (svf.metadata.hasOwnProperty("double sided geometry") &&
  svf.metadata["double sided geometry"]["value"]) //TODO: do we want to check the global flag or drop that and rely on material only?
    {
      svf.doubleSided = true;
    }

}

function applyOffset(a, offset) {
  a[0] -= offset.x;
  a[1] -= offset.y;
  a[2] -= offset.z;
}


function transformAnimations(svf) {

  if (!svf.animations)
  return;

  // apply global offset to animations
  var animations = svf.animations["animations"];
  if (animations) {
    var globalOffset = svf.globalOffset;
    var t = new _wgs_scene_LmvMatrix4__WEBPACK_IMPORTED_MODULE_2__["LmvMatrix4"]().makeTranslation(globalOffset.x, globalOffset.y, globalOffset.z);
    var tinv = new _wgs_scene_LmvMatrix4__WEBPACK_IMPORTED_MODULE_2__["LmvMatrix4"]().makeTranslation(-globalOffset.x, -globalOffset.y, -globalOffset.z);
    var r = new _wgs_scene_LmvMatrix4__WEBPACK_IMPORTED_MODULE_2__["LmvMatrix4"]();
    var m = new _wgs_scene_LmvMatrix4__WEBPACK_IMPORTED_MODULE_2__["LmvMatrix4"]();
    for (var a = 0; a < animations.length; a++) {
      var anim = animations[a];
      if (anim.hierarchy) {
        for (var h = 0; h < anim.hierarchy.length; h++) {
          var keys = anim.hierarchy[h].keys;
          if (keys) {
            for (var k = 0; k < keys.length; k++) {
              var pos = keys[k].pos;
              if (pos) {
                var offset = globalOffset;
                var rot = keys[k].rot;
                if (rot) {
                  r.makeRotationFromQuaternion({ x: rot[0], y: rot[1], z: rot[2], w: rot[3] });
                  m.multiplyMatrices(t, r).multiply(tinv);
                  offset = { x: m.elements[12], y: m.elements[13], z: m.elements[14] };
                }
                applyOffset(pos, offset);
              }
              var target = keys[k].target;
              if (target) {
                applyOffset(target, globalOffset);
              }
              var points = keys[k].points;
              if (points) {
                for (var p = 0; p < points.length; p++) {
                  applyOffset(points[p], globalOffset);
                }
              }
            }
          }
        }
      }
    }
  }


}

/***/ }),

/***/ "./src/file-loaders/lmvtk/common/VbUtils.js":
/*!**************************************************!*\
  !*** ./src/file-loaders/lmvtk/common/VbUtils.js ***!
  \**************************************************/
/*! exports provided: VBUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VBUtils", function() { return VBUtils; });



var VBUtils = {


  deduceUVRepetition: function deduceUVRepetition(mesh) {

    for (var p in mesh.vblayout) {

      if (p.indexOf("uv") != 0 || p.indexOf("uvw") == 0)
      continue;

      var baseOffset = mesh.vblayout[p].offset;
      var floatStride = mesh.vbstride;
      var vbf = mesh.vb;
      var vcount = mesh.vb.length / floatStride;

      for (var i = 0, offset = baseOffset; i < vcount; i++, offset += floatStride)
      {
        var u = vbf[offset];
        var v = vbf[offset + 1];
        if (u > 2 || u < 0 || v > 2 || v < 0) {
          mesh.vblayout[p].isPattern = true;
          break;
        }
      }
    }
  },


  //Calculate the 3D bounding box and bounding sphere
  //of a mesh containing an interleaved vertex buffer
  computeBounds3D: function computeBounds3D(mesh) {

    var minx = Infinity,miny = Infinity,minz = Infinity;
    var maxx = -Infinity,maxy = -Infinity,maxz = -Infinity;
    var i, offset, x, y, z;

    var floatStride = mesh.vbstride;
    var baseOffset = mesh.vblayout.position.offset;
    var vbf = mesh.vb;
    var vcount = mesh.vb.length / floatStride;

    for (i = 0, offset = baseOffset; i < vcount; i++, offset += floatStride)
    {
      x = vbf[offset];
      y = vbf[offset + 1];
      z = vbf[offset + 2];

      if (minx > x) minx = x;
      if (miny > y) miny = y;
      if (minz > z) minz = z;

      if (maxx < x) maxx = x;
      if (maxy < y) maxy = y;
      if (maxz < z) maxz = z;
    }

    var bb = mesh.boundingBox = {
      min: { x: minx, y: miny, z: minz },
      max: { x: maxx, y: maxy, z: maxz } };


    var cx = 0.5 * (minx + maxx),cy = 0.5 * (miny + maxy),cz = 0.5 * (minz + maxz);

    var bs = mesh.boundingSphere = {};
    bs.center = { x: cx, y: cy, z: cz };

    var maxRadiusSq = 0;
    for (i = 0, offset = baseOffset; i < vcount; i++, offset += floatStride) {

      x = vbf[offset];
      y = vbf[offset + 1];
      z = vbf[offset + 2];

      var dx = x - cx;
      var dy = y - cy;
      var dz = z - cz;
      var distsq = dx * dx + dy * dy + dz * dz;
      if (distsq > maxRadiusSq)
      maxRadiusSq = distsq;
    }

    bs.radius = Math.sqrt(maxRadiusSq);

  },

  bboxUnion: function bboxUnion(bdst, bsrc) {
    if (bsrc.min.x < bdst.min.x)
    bdst.min.x = bsrc.min.x;
    if (bsrc.min.y < bdst.min.y)
    bdst.min.y = bsrc.min.y;
    if (bsrc.min.z < bdst.min.z)
    bdst.min.z = bsrc.min.z;

    if (bsrc.max.x > bdst.max.x)
    bdst.max.x = bsrc.max.x;
    if (bsrc.max.y > bdst.max.y)
    bdst.max.y = bsrc.max.y;
    if (bsrc.max.z > bdst.max.z)
    bdst.max.z = bsrc.max.z;
  } };

/***/ }),

/***/ "./src/file-loaders/lmvtk/common/VertexBufferBuilder.js":
/*!**************************************************************!*\
  !*** ./src/file-loaders/lmvtk/common/VertexBufferBuilder.js ***!
  \**************************************************************/
/*! exports provided: VertexBufferBuilder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VertexBufferBuilder", function() { return VertexBufferBuilder; });



var TAU = Math.PI * 2;

var VBB_GT_TRIANGLE_INDEXED = 0,
VBB_GT_LINE_SEGMENT = 1,
VBB_GT_ARC_CIRCULAR = 2,
VBB_GT_ARC_ELLIPTICAL = 3,
VBB_GT_TEX_QUAD = 4,
VBB_GT_ONE_TRIANGLE = 5;

var VBB_INSTANCED_FLAG = 0, // this is intentionally 0 for the instancing case!
VBB_SEG_START_RIGHT = 0, // this starts intentionally at 0!
VBB_SEG_START_LEFT = 1,
VBB_SEG_END_RIGHT = 2,
VBB_SEG_END_LEFT = 3;

var VBB_COLOR_OFFSET = 6,
VBB_DBID_OFFSET = 7,
VBB_FLAGS_OFFSET = 8,
VBB_LAYER_VP_OFFSET = 9;

var QUAD_TRIANGLE_INDICES = [0, 1, 3, 0, 3, 2];

function VertexBufferBuilder(useInstancing, allocSize, fullCount, useCompactBuffers)
{
  var MAX_VCOUNT = allocSize || 65536;
  this.FULL_COUNT = (fullCount || 32767) | 0;

  this.useInstancing = useInstancing;
  this.useCompactBuffers = useCompactBuffers;

  this.stride = 10;
  this.allocVcount = 4 * (this.useInstancing ? MAX_VCOUNT / 4 : MAX_VCOUNT);

  this.vb = new ArrayBuffer(this.stride * this.allocVcount);
  this.vbf = new Float32Array(this.vb);
  this.vbi = new Int32Array(this.vb);
  this.ib = this.useInstancing ? null : new Uint16Array(MAX_VCOUNT);
  this.reset(0);

}

VertexBufferBuilder.prototype.reset = function (vcount) {
  // This is used to restore the vcount when restoring stream state as well as at init time.
  this.vcount = vcount;

  this.icount = 0;

  this.minx = this.miny = Infinity;
  this.maxx = this.maxy = -Infinity;

  //Keeps track of objectIds referenced by geometry in the VB
  this.dbIds = {};

  //Keep track of unique colors used by this VB
  this.colors = {};

  this.numEllipticals = 0;
  this.numCirculars = 0;
  this.numTriangleGeoms = 0;

  // If false, all lines are of type 0 (solid), so that we don't need line-pattern support.
  this.hasLineStyles = false;

  //Certain fields can be invariant over large numbers of primitives.
  //We keep track of those in order to optimize the vertex layout by
  //pulling invariants into shader uniforms.
  this.changeTracking = {};

  this.stride = 10;
};

VertexBufferBuilder.prototype.expandStride = function ()
{
  //Currently hardcoded to expand by 4 floats.
  var expandBy = 2;

  var stride = this.stride;

  if (stride >= 12)
  return;

  var nstride = this.stride + expandBy;

  var nvb = new ArrayBuffer(nstride * this.allocVcount);

  var src = new Uint8Array(this.vb);
  var dst = new Uint8Array(nvb);

  for (var i = 0, iEnd = this.vcount; i < iEnd; i++) {
    var os = i * stride * 4;
    var od = i * nstride * 4;

    for (var j = 0; j < stride * 4; j++) {
      dst[od + j] = src[os + j];}
  }

  this.vb = nvb;
  this.vbf = new Float32Array(nvb);
  this.vbi = new Int32Array(nvb);
  this.stride = nstride;

};

VertexBufferBuilder.prototype.addToBounds = function (x, y)
{
  if (x < this.minx) this.minx = x;
  if (x > this.maxx) this.maxx = x;
  if (y < this.miny) this.miny = y;
  if (y > this.maxy) this.maxy = y;
};

var _toInt32 = new Int32Array(1);
function toInt32(c) {
  _toInt32[0] = c;
  return _toInt32[0];
}

VertexBufferBuilder.prototype.trackChanges = function (geomType, color, dbId, layerId, vpId, linePattern) {

  this.dbIds[toInt32(dbId)] = 1;

  if (linePattern) {
    this.hasLineStyles = true;
  }

  if (!this.useCompactBuffers)
  return;

  var ct = this.changeTracking;

  function checkOne(whichAttr, val) {
    if (ct[whichAttr] === undefined)
    ct[whichAttr] = geomType;else
    if (ct[whichAttr] === val)
    ct[whichAttr + "Varies"] = true;
  }

  checkOne("geomType", geomType);
  checkOne("color", color);
  checkOne("dbId", dbId);
  checkOne("layerId", layerId);
  checkOne("viewportId", vpId);
  checkOne("linePattern", linePattern);

  this.colors[toInt32(color)] = 1;
};


VertexBufferBuilder.prototype.setCommonVertexAttribs = function (offset, vertexId, geomType, color, dbId, layerId, vpId, linePattern)
{
  this.trackChanges(geomType, color, dbId, layerId, vpId, linePattern);

  // align changes here with the "decodeCommonAttribs()" function in LineShader.js and VertexBufferReader.js!!!
  vertexId = vertexId & 0xff; //  8 bit
  geomType = geomType & 0xff; //  8 bit
  linePattern = linePattern & 0xff; //  8 bit
  layerId = layerId & 0xffff; // 16 bit
  vpId = vpId & 0xffff; // 16 bit

  this.vbi[offset + VBB_FLAGS_OFFSET] = vertexId | geomType << 8 | linePattern << 16; // vertexId: int8; geomType: int8; linePattern: int8; ghostingFlag: int8
  this.vbi[offset + VBB_COLOR_OFFSET] = color;
  this.vbi[offset + VBB_DBID_OFFSET] = dbId;
  this.vbi[offset + VBB_LAYER_VP_OFFSET] = layerId | vpId << 16; // layerId: int16; vpId: int16
};

//Creates a non-indexed triangle geometry vertex (triangle vertex coords stored in single vertex structure)
VertexBufferBuilder.prototype.addVertexTriangleGeom = function (x1, y1, x2, y2, x3, y3, color, dbId, layerId, vpId)
{
  var vi = this.vcount;
  var vbf = this.vbf;

  var repeat = this.useInstancing ? 1 : 4;
  for (var i = 0; i < repeat; i++) {
    var offset = (vi + i) * this.stride;

    // align changes here with the "decodeTriangleData()" function in LineShader.js!!!
    vbf[offset] = x1;
    vbf[offset + 1] = y1;
    vbf[offset + 2] = x2;

    vbf[offset + 3] = y2;
    vbf[offset + 4] = x3;
    vbf[offset + 5] = y3;

    this.setCommonVertexAttribs(offset, VBB_SEG_START_RIGHT + i, VBB_GT_ONE_TRIANGLE, color, dbId, layerId, vpId, /*linePattern*/0);
    this.vcount++;
  }

  return vi;
};


VertexBufferBuilder.prototype.addVertexLine = function (x, y, angle, distanceAlong, totalDistance, lineWidth, color, dbId, layerId, vpId, lineType)
{
  var vi = this.vcount;
  var vbf = this.vbf;

  var repeat = this.useInstancing ? 1 : 4;
  for (var i = 0; i < repeat; i++) {
    var offset = (vi + i) * this.stride;

    // align changes here with the "decodeSegmentData()" function in LineShader.js and VertexBufferReader!!!
    vbf[offset] = x;
    vbf[offset + 1] = y;
    vbf[offset + 2] = (angle + Math.PI) / TAU;

    vbf[offset + 3] = distanceAlong;
    vbf[offset + 4] = lineWidth * 0.5; // we are storing only the half width (i.e., the radius)
    vbf[offset + 5] = totalDistance;

    this.setCommonVertexAttribs(offset, VBB_SEG_START_RIGHT + i, VBB_GT_LINE_SEGMENT, color, dbId, layerId, vpId, lineType);
    this.vcount++;
  }

  return vi;
};

VertexBufferBuilder.prototype.addVertexTexQuad = function (centerX, centerY, width, height, rotation, color, dbId, layerId, vpId)
{
  var vi = this.vcount;
  var vbf = this.vbf;

  var repeat = this.useInstancing ? 1 : 4;
  for (var i = 0; i < repeat; i++) {
    var offset = (vi + i) * this.stride;

    // align changes here with the "decodeTexQuadData()" function in LineShader.js!!!
    vbf[offset] = centerX;
    vbf[offset + 1] = centerY;
    vbf[offset + 2] = rotation / TAU;

    vbf[offset + 3] = width;
    vbf[offset + 4] = height;

    this.setCommonVertexAttribs(offset, VBB_SEG_START_RIGHT + i, VBB_GT_TEX_QUAD, color, dbId, layerId, vpId, /*linePattern*/0);
    this.vcount++;
  }

  return vi;
};


VertexBufferBuilder.prototype.addVertexArc = function (x, y, startAngle, endAngle, major, minor, tilt, lineWidth, color, dbId, layerId, vpId)
{
  var vi = this.vcount;
  var vbf = this.vbf;

  var geomType = major == minor ? VBB_GT_ARC_CIRCULAR : VBB_GT_ARC_ELLIPTICAL;

  var repeat = this.useInstancing ? 1 : 4;
  for (var i = 0; i < repeat; i++) {
    var offset = (vi + i) * this.stride;

    // align changes here with the "decodeArcData()" function in LineShader.js!!!
    vbf[offset] = x;
    vbf[offset + 1] = y;
    vbf[offset + 2] = startAngle / TAU;

    vbf[offset + 3] = endAngle / TAU;
    vbf[offset + 4] = lineWidth * 0.5; // we are storing only the half width (i.e., the radius)
    vbf[offset + 5] = major; // = radius for circular arcs

    if (geomType === VBB_GT_ARC_ELLIPTICAL) {
      vbf[offset + 10] = minor;
      vbf[offset + 11] = tilt;
    }

    this.setCommonVertexAttribs(offset, VBB_SEG_START_RIGHT + i, geomType, color, dbId, layerId, vpId, /*linePattern*/0);
    this.vcount++;
  }

  return vi;
};




//====================================================================================================
//====================================================================================================
// Indexed triangle code path can only be used when hardware instancing is not in use.
// Otherwise, the addTriangleGeom operation should be used to add simple triangles to the buffer.
//====================================================================================================
//====================================================================================================

VertexBufferBuilder.prototype.addVertex = function (x, y, color, dbId, layerId, vpId)
{
  if (this.useInstancing)
  return; //not supported if instancing is used.

  var vi = this.vcount;
  var offset = this.stride * vi;
  var vbf = this.vbf;

  // align changes here with the "decodeTriangleData()" function in LineShader.js!!!
  vbf[offset] = x;
  vbf[offset + 1] = y;

  this.setCommonVertexAttribs(offset, /*vertexId*/0, VBB_GT_TRIANGLE_INDEXED, color, dbId, layerId, vpId, /*linePattern*/0);
  this.vcount++;

  return vi;
};


VertexBufferBuilder.prototype.addVertexPolytriangle = function (x, y, color, dbId, layerId, vpId)
{
  if (this.useInstancing)
  return; //not supported if instancing is used.

  this.addVertex(x, y, color, dbId, layerId, vpId);

  this.addToBounds(x, y);
};

VertexBufferBuilder.prototype.addIndices = function (indices, vindex) {

  if (this.useInstancing)
  return; //not supported if instancing is used.

  var ib = this.ib;
  var ii = this.icount;

  if (ii + indices.length >= ib.length) {
    var ibnew = new Uint16Array(Math.max(indices.length, ib.length) * 2);
    for (var i = 0; i < ii; ++i) {
      ibnew[i] = ib[i];
    }
    this.ib = ib = ibnew;
  }

  for (var i = 0; i < indices.length; ++i) {
    ib[ii + i] = vindex + indices[i];
  }

  this.icount += indices.length;
};

//====================================================================================================
//====================================================================================================
// End indexed triangle code path.
//====================================================================================================
//====================================================================================================


VertexBufferBuilder.prototype.finalizeQuad = function (vindex)
{
  if (!this.useInstancing) {
    this.addIndices(QUAD_TRIANGLE_INDICES, vindex);
  }
};


VertexBufferBuilder.prototype.addSegment = function (x1, y1, x2, y2, totalDistance, lineWidth, color, dbId, layerId, vpId, lineType)
{
  var dx = x2 - x1;
  var dy = y2 - y1;
  var angle = dx || dy ? Math.atan2(dy, dx) : 0.0;
  var segLen = dx || dy ? Math.sqrt(dx * dx + dy * dy) : 0.0;

  //Add four vertices for the bbox of this line segment
  //This call sets the stuff that's common for all four
  var v = this.addVertexLine(x1, y1, angle, segLen, totalDistance, lineWidth, color, dbId, layerId, vpId, lineType);

  this.finalizeQuad(v);
  this.addToBounds(x1, y1);
  this.addToBounds(x2, y2);
};


//Creates a non-indexed triangle geometry (triangle vertex coords stored in single vertex structure)
VertexBufferBuilder.prototype.addTriangleGeom = function (x1, y1, x2, y2, x3, y3, color, dbId, layerId, vpId)
{
  this.numTriangleGeoms++;

  var v = this.addVertexTriangleGeom(x1, y1, x2, y2, x3, y3, color, dbId, layerId, vpId);

  this.finalizeQuad(v);
  this.addToBounds(x1, y1);
  this.addToBounds(x2, y2);
  this.addToBounds(x3, y3);
};

VertexBufferBuilder.prototype.addArc = function (cx, cy, start, end, major, minor, tilt, lineWidth, color, dbId, layerId, vpId)
{
  if (major == minor) {
    this.numCirculars++;
  } else {
    this.numEllipticals++;

    //Ellipticals need large vertex layout
    this.expandStride();
  }

  // This is a workaround, when the circular arc has rotation, the extractor cannot handle it.
  // After the fix is deployed in extractor, this can be removed.
  var result = fixUglyArc(start, end);
  start = result.start;
  end = result.end;

  //If both start and end angles are exactly 0, it's a complete ellipse/circle
  //This is working around a bug in the F2D writer, where an fmod operation will potentially.
  //convert 2pi to 0.
  if (start == 0 && end == 0)
  end = TAU;

  //Add two zero length segments as round caps at the end points
  {
    //If it's a full ellipse, then we don't need caps
    var range = Math.abs(start - end);
    if (range > 0.0001 && Math.abs(range - TAU) > 0.0001)
    {
      var sx = cx + major * Math.cos(start);
      var sy = cy + minor * Math.sin(start);
      this.addSegment(sx, sy, sx, sy, 0, lineWidth, color, dbId, layerId, vpId);

      var ex = cx + major * Math.cos(end);
      var ey = cy + minor * Math.sin(end);
      this.addSegment(ex, ey, ex, ey, 0, lineWidth, color, dbId, layerId, vpId);

      //TODO: also must add all the vertices at all multiples of PI/2 in the start-end range to get exact bounds
    } else

    {
      this.addToBounds(cx - major, cy - minor);
      this.addToBounds(cx + major, cy + minor);
    }

    // Add the center of the circle / ellipse as a single transparent dot - So it wil be snappable.
    var c = this.addVertexLine(cx, cy, 0, 0.0001, 0, 0, 1, dbId, layerId, vpId);
    this.finalizeQuad(c);
  }

  var v = this.addVertexArc(cx, cy, start, end, major, minor, tilt, lineWidth, color, dbId, layerId, vpId);

  this.finalizeQuad(v);

  //Testing caps
  if (false) { var ey, ex, sy, sx, range; }
};


VertexBufferBuilder.prototype.addTexturedQuad = function (centerX, centerY, width, height, rotation, color, dbId, layerId, vpId)
{
  //Height is specified using the line weight field.
  //This will result in height being clamped to at least one pixel
  //but that's ok (zero height for an image would be rare).
  var v = this.addVertexTexQuad(centerX, centerY, width, height, rotation, color, dbId, layerId, vpId);

  this.finalizeQuad(v);

  var cos = 0.5 * Math.cos(rotation);
  var sin = 0.5 * Math.sin(rotation);
  var w = Math.abs(width * cos) + Math.abs(height * sin);
  var h = Math.abs(width * sin) + Math.abs(height * cos);
  this.addToBounds(centerX - w, centerY - h);
  this.addToBounds(centerX + w, centerY + h);
};

VertexBufferBuilder.prototype.isFull = function (addCount)
{
  addCount = addCount || 3;
  var mult = this.useInstancing ? 4 : 1;

  return this.vcount * mult + addCount > this.FULL_COUNT;
};

//Determines if there are invariant memebers in the vertex layout,
//which can be moved out to shader uniforms to save space.
//Determines if uint16 can be used to store positions data
VertexBufferBuilder.prototype.makeCompactVertexLayout = function () {

  var colorKeys = Object.keys(this.colors);
  var dbIdsKeys = Object.keys(this.dbIds);

  // if (this.changeTracking.geomType === VBB_GT_LINE_SEGMENT && !this.changeTracking.geomTypeVaries) {
  //   console.log("Vertex buffer only has lines");
  // }

  // if (this.changeTracking.color === VBB_GT_LINE_SEGMENT && !this.changeTracking.colorVaries) {
  //     console.log("Vertex buffer has invariant color");
  // } else {
  //     console.log("Num colors:", colorKeys.length);
  // }

  // if (!this.changeTracking.viewportIdVaries) {
  //     console.log("Vertex buffer has invariant viewportId");
  // }

  // if (!this.changeTracking.layerIdVaries) {
  //     console.log("Vertex buffer has invariant layerId");
  // }

  // if (!this.changeTracking.dbIdVaries) {
  //     console.log("Vertex buffer has invariant dbId");
  // } else {
  //     console.log("Num dbIds:", dbIdsKeys.length);
  // }

  if (this.stride !== 10)
  return null;

  //create the color/dbId index texture
  var texLen = colorKeys.length + dbIdsKeys.length;

  if (colorKeys.length + dbIdsKeys.length > 65536)
  return null;

  var texData = new Int32Array(texLen + 1);
  texData[0] = 0;
  var count = 1;
  for (var i = 0; i < colorKeys.length; i++, count++) {
    texData[count] = parseInt(colorKeys[i]);
    this.colors[colorKeys[i]] = count;
  }
  for (var i = 0; i < dbIdsKeys.length; i++, count++) {
    texData[count] = parseInt(dbIdsKeys[i]);
    this.dbIds[dbIdsKeys[i]] = count;
  }

  var compactStride = 6;

  var vb = new ArrayBuffer(compactStride * 4 * this.vcount);
  var vbi = new Int32Array(vb);
  var vbs = new Uint16Array(vb);

  var sx = this.maxx - this.minx || 1;
  var sy = this.maxy - this.miny || 1;
  var ox = this.minx;
  var oy = this.miny;
  var ss = Math.max(sx, sy);

  function tx(x) {
    return 0 | Math.round((x - ox) / sx * 65535);
  }

  function ty(y) {
    return 0 | Math.round((y - oy) / sy * 65535);
  }

  function ts(x) {
    return 0 | Math.round(x / ss * 65535);
  }

  function unit(x) {
    return 0 | x * 65535;
  }

  function lineWeight(x) {
    if (x < 0) {
      return 32768 + Math.min(1.0, -x / 1024) * 32767;
    } else {
      return 0 | Math.round(x / ss * 32767);
    }
  }

  for (var i = 0; i < this.vcount; i++) {

    var srcOffset = this.stride * i;
    var dstOffset = compactStride * i;
    var ushortOffset = dstOffset * 2;

    var gt = this.vbi[srcOffset + VBB_FLAGS_OFFSET] >> 8 & 0xff;

    //Handle data that varies per geometry type and needs scaling
    //to uint16 packing, e.g. positions and angles
    switch (gt) {
      case VBB_GT_TRIANGLE_INDEXED:
        vbs[ushortOffset] = tx(this.vbf[srcOffset]);
        vbs[ushortOffset + 1] = ty(this.vbf[srcOffset + 1]);
        break;

      case VBB_GT_LINE_SEGMENT:
        vbs[ushortOffset] = tx(this.vbf[srcOffset]);
        vbs[ushortOffset + 1] = ty(this.vbf[srcOffset + 1]);
        vbs[ushortOffset + 2] = unit(this.vbf[srcOffset + 2]);
        vbs[ushortOffset + 3] = ts(this.vbf[srcOffset + 3]);
        vbs[ushortOffset + 4] = lineWeight(this.vbf[srcOffset + 4]);
        break;

      case VBB_GT_ARC_CIRCULAR:
        vbs[ushortOffset] = tx(this.vbf[srcOffset]);
        vbs[ushortOffset + 1] = ty(this.vbf[srcOffset + 1]);
        vbs[ushortOffset + 2] = unit(this.vbf[srcOffset + 2]);
        vbs[ushortOffset + 3] = unit(this.vbf[srcOffset + 3]);
        vbs[ushortOffset + 4] = lineWeight(this.vbf[srcOffset + 4]);
        vbs[ushortOffset + 5] = ts(this.vbf[srcOffset + 5]);
        break;

      case VBB_GT_ARC_ELLIPTICAL:
        //will not happen
        break;

      case VBB_GT_TEX_QUAD:
        vbs[ushortOffset] = tx(this.vbf[srcOffset]);
        vbs[ushortOffset + 1] = ty(this.vbf[srcOffset + 1]);
        vbs[ushortOffset + 2] = unit(this.vbf[srcOffset + 2]);
        vbs[ushortOffset + 3] = ts(this.vbf[srcOffset + 3]);
        vbs[ushortOffset + 4] = ts(this.vbf[srcOffset + 4]);
        break;

      case VBB_GT_ONE_TRIANGLE:
        vbs[ushortOffset] = tx(this.vbf[srcOffset]);
        vbs[ushortOffset + 1] = ty(this.vbf[srcOffset + 1]);
        vbs[ushortOffset + 2] = tx(this.vbf[srcOffset + 2]);
        vbs[ushortOffset + 3] = ty(this.vbf[srcOffset + 3]);
        vbs[ushortOffset + 4] = tx(this.vbf[srcOffset + 4]);
        vbs[ushortOffset + 5] = ty(this.vbf[srcOffset + 5]);
        break;

      default:console.error("Unknown geometry type");break;}


    //Copy the common data to the new offset
    vbs[ushortOffset + 6] = this.colors[this.vbi[srcOffset + VBB_COLOR_OFFSET]] || 0;
    vbs[ushortOffset + 7] = this.dbIds[this.vbi[srcOffset + VBB_DBID_OFFSET]] || 0;

    vbi[dstOffset + 4] = this.vbi[srcOffset + VBB_FLAGS_OFFSET];
    vbi[dstOffset + 5] = this.vbi[srcOffset + VBB_LAYER_VP_OFFSET];
  }

  var mesh = {};

  mesh.vb = new Float32Array(vb);
  mesh.vbstride = compactStride;

  var d = this.useInstancing ? 1 : 0;

  mesh.vblayout = {
    "fields1": { offset: 0, itemSize: 2, bytesPerItem: 2, divisor: d, normalize: true },
    "fields2": { offset: 1, itemSize: 4, bytesPerItem: 2, divisor: d, normalize: true },
    "uvIdColor": { offset: 3, itemSize: 2, bytesPerItem: 2, divisor: d, normalize: false },
    "flags4b": { offset: 4, itemSize: 4, bytesPerItem: 1, divisor: d, normalize: false },
    "layerVp4b": { offset: 5, itemSize: 4, bytesPerItem: 1, divisor: d, normalize: false } };


  mesh.unpackXform = { x: sx, y: sy, z: ox, w: oy };
  mesh.texData = texData;

  return mesh;
};

VertexBufferBuilder.prototype.makeWideVertexLayout = function () {
  var mesh = {};

  mesh.vb = new Float32Array(this.vb.slice(0, this.vcount * this.stride * 4));
  mesh.vbstride = this.stride;

  var d = this.useInstancing ? 1 : 0;

  mesh.vblayout = {
    "fields1": { offset: 0, itemSize: 2, bytesPerItem: 4, divisor: d, normalize: false },
    "fields2": { offset: 2, itemSize: 4, bytesPerItem: 4, divisor: d, normalize: false },
    "color4b": { offset: VBB_COLOR_OFFSET, itemSize: 4, bytesPerItem: 1, divisor: d, normalize: true },
    "dbId4b": { offset: VBB_DBID_OFFSET, itemSize: 4, bytesPerItem: 1, divisor: d, normalize: false },
    "flags4b": { offset: VBB_FLAGS_OFFSET, itemSize: 4, bytesPerItem: 1, divisor: d, normalize: false },
    "layerVp4b": { offset: VBB_LAYER_VP_OFFSET, itemSize: 4, bytesPerItem: 1, divisor: d, normalize: false } };


  //Set the expanded vertex layout to use the last two floats in the buffer. If the
  //were allocated then it is good. If they weren't it overlaps the flags4b and layerVp4b
  //channels, but since the extraParams won't be used in the shader it won't matter.
  //Doing this lets the shader connect to something and prevents crashes on iOS.
  mesh.vblayout["extraParams"] = { offset: this.stride - 2, itemSize: 2, bytesPerItem: 4, divisor: d, normalize: false };

  return mesh;
};


VertexBufferBuilder.prototype.toMesh = function ()
{
  var mesh = null;

  if (this.useCompactBuffers)
  mesh = this.makeCompactVertexLayout();

  if (!mesh)
  mesh = this.makeWideVertexLayout();

  if (this.useInstancing) {
    mesh.numInstances = this.vcount;

    //Set up trivial vertexId and index attributes

    var instFlags = new Int32Array([VBB_SEG_START_RIGHT, VBB_SEG_START_LEFT, VBB_SEG_END_RIGHT, VBB_SEG_END_LEFT]);
    mesh.vblayout.instFlags4b = { offset: 0, itemSize: 4, bytesPerItem: 1, divisor: 0, normalize: false };
    mesh.vblayout.instFlags4b.array = instFlags.buffer;

    var idx = mesh.indices = new Uint16Array(QUAD_TRIANGLE_INDICES);
  } else {
    mesh.indices = new Uint16Array(this.ib.buffer.slice(0, 2 * this.icount));
  }

  mesh.dbIds = this.dbIds;

  var w = this.maxx - this.minx;
  var h = this.maxy - this.miny;
  var sz = Math.max(w, h);

  mesh.boundingBox = {
    min: { x: this.minx, y: this.miny, z: -sz * 1e-3 },
    max: { x: this.maxx, y: this.maxy, z: sz * 1e-3 } };


  //Also compute a rough bounding sphere
  var bs = mesh.boundingSphere = {
    center: {
      x: 0.5 * (this.minx + this.maxx),
      y: 0.5 * (this.miny + this.maxy),
      z: 0.0 },

    radius: 0.5 * Math.sqrt(w * w + h * h) };


  return mesh;
};

// The following logic attempts to "fix" imprecisions in arc definitions introduced
// by Heidi's fixed point math, in case that the extractor doesn't handle it correctly.

var fixUglyArc = function fixUglyArc(start, end)
{
  //Snap critical angles exactly
  function snapCritical() {
    function fuzzyEquals(a, b) {return Math.abs(a - b) < 1e-3;}

    if (fuzzyEquals(start, 0)) start = 0.0;
    if (fuzzyEquals(end, 0)) end = 0.0;
    if (fuzzyEquals(start, TAU)) start = TAU;
    if (fuzzyEquals(end, TAU)) end = TAU;
  }

  snapCritical();

  //OK, in some cases the angles are both over-rotated...
  if (start > end) {
    while (start > TAU) {
      start -= TAU;
      end -= TAU;
    }
  } else {
    while (end > TAU) {
      start -= TAU;
      end -= TAU;
    }
  }

  //Snap critical angles exactly -- again
  snapCritical();

  //If the arc crosses the x axis, we have to make it clockwise...
  //This is a side effect of bringing over-rotated arcs in range above.
  //For example start = 5.0, end = 7.0 will result in start < 0 and end > 0,
  //so we have to make start > end in order to indicate we are crossing angle = 0.
  if (start < 0 && end > 0) {
    start += TAU;
  }

  return { start: start, end: end };
};

/***/ }),

/***/ "./src/file-loaders/lmvtk/f2d/CheckedInputStream.js":
/*!**********************************************************!*\
  !*** ./src/file-loaders/lmvtk/f2d/CheckedInputStream.js ***!
  \**********************************************************/
/*! exports provided: CheckedInputStream */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckedInputStream", function() { return CheckedInputStream; });



// Similar as InputStream but with bounds checking.
// Throw exception when out of bounds access is / to be made.
function CheckedInputStream(buf) {
  this.buffer = buf;
  this.offset = 0;
  this.byteLength = buf.length;

  //We will use these shared memory arrays to
  //convert from bytes to the desired data type.
  this.convBuf = new ArrayBuffer(8);
  this.convUint8 = new Uint8Array(this.convBuf);
  this.convUint16 = new Uint16Array(this.convBuf);
  this.convInt32 = new Int32Array(this.convBuf);
  this.convUint32 = new Uint32Array(this.convBuf);
}

function OutOfBoundsBufferAccessException(offset) {
  this.offset = offset;
  this.message = "try to access an offset that is out of bounds: " + this.offset;
  this.toString = function () {
    return this.message;
  };
}

CheckedInputStream.prototype.boundsCheck = function (offset) {
  if (offset >= this.byteLength) {
    throw new OutOfBoundsBufferAccessException(offset);
  }
};

CheckedInputStream.prototype.seek = function (off) {
  this.boundsCheck(off);
  this.offset = off;
};

CheckedInputStream.prototype.getBytes = function (len) {
  this.boundsCheck(this.offset + len);
  var ret = new Uint8Array(this.buffer.buffer, this.offset, len);
  this.offset += len;
  return ret;
};

CheckedInputStream.prototype.skipBytes = function (len) {
  this.boundsCheck(this.offset + len);
  this.offset += len;
};


CheckedInputStream.prototype.getVarints = function () {
  var b;
  var value = 0;
  var shiftBy = 0;
  do {
    this.boundsCheck(this.offset);
    b = this.buffer[this.offset++];
    value |= (b & 0x7f) << shiftBy;
    shiftBy += 7;
  } while (b & 0x80);
  return value;
};

CheckedInputStream.prototype.getUint8 = function () {
  this.boundsCheck(this.offset + 1);
  return this.buffer[this.offset++];
};

CheckedInputStream.prototype.getUint16 = function () {
  this.boundsCheck(this.offset + 2);
  this.convUint8[0] = this.buffer[this.offset++];
  this.convUint8[1] = this.buffer[this.offset++];
  return this.convUint16[0];
};

CheckedInputStream.prototype.getInt16 = function () {
  var tmp = this.getUint16();
  //make negative integer if the ushort is negative
  if (tmp > 0x7fff)
  tmp = tmp | 0xffff0000;
  return tmp;
};

CheckedInputStream.prototype.getInt32 = function () {
  this.boundsCheck(this.offset + 4);
  var src = this.buffer;
  var dst = this.convUint8;
  var off = this.offset;
  dst[0] = src[off];
  dst[1] = src[off + 1];
  dst[2] = src[off + 2];
  dst[3] = src[off + 3];
  this.offset += 4;
  return this.convInt32[0];
};

CheckedInputStream.prototype.getUint32 = function () {
  this.boundsCheck(this.offset + 4);
  var src = this.buffer;
  var dst = this.convUint8;
  var off = this.offset;
  dst[0] = src[off];
  dst[1] = src[off + 1];
  dst[2] = src[off + 2];
  dst[3] = src[off + 3];
  this.offset += 4;
  return this.convUint32[0];
};

CheckedInputStream.prototype.skipUint32 = function () {
  this.boundsCheck(this.offset + 4);
  this.offset += 4;
};

CheckedInputStream.prototype.getFloat32 = function () {
  this.boundsCheck(this.offset + 4);
  this.offset += 4;
  return 0;
};

CheckedInputStream.prototype.getFloat64 = function () {
  this.boundsCheck(this.offset + 8);
  this.offset += 8;
  return 0;
};

CheckedInputStream.prototype.skipFloat64 = function () {
  this.boundsCheck(this.offset + 8);
  this.offset += 8;
};

CheckedInputStream.prototype.reset = function (buf) {
  this.buffer = buf;
  this.offset = 0;
  this.byteLength = buf.length;
};

/***/ }),

/***/ "./src/file-loaders/lmvtk/f2d/F2d.js":
/*!*******************************************!*\
  !*** ./src/file-loaders/lmvtk/f2d/F2d.js ***!
  \*******************************************/
/*! exports provided: F2dDataType, F2dSemanticType, F2D */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F2dDataType", function() { return F2dDataType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F2dSemanticType", function() { return F2dSemanticType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F2D", function() { return F2D; });
/* harmony import */ var _common_VertexBufferBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/VertexBufferBuilder */ "./src/file-loaders/lmvtk/common/VertexBufferBuilder.js");
/* harmony import */ var _wgs_scene_LmvBox3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../wgs/scene/LmvBox3 */ "./src/wgs/scene/LmvBox3.js");
/* harmony import */ var _wgs_scene_LmvVector3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../wgs/scene/LmvVector3 */ "./src/wgs/scene/LmvVector3.js");
/* harmony import */ var _common_VbUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/VbUtils */ "./src/file-loaders/lmvtk/common/VbUtils.js");
/* harmony import */ var _common_InputStream__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/InputStream */ "./src/file-loaders/lmvtk/common/InputStream.js");
/* harmony import */ var _logger_Logger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../logger/Logger */ "./src/logger/Logger.js");
/* harmony import */ var _net_ErrorCodes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../net/ErrorCodes */ "./src/file-loaders/net/ErrorCodes.js");










var MOBILE_MAX_VCOUNT = 16383;

var F2dDataType = {
  //Fixed size types
  dt_object: 0,
  dt_void: 1,
  dt_byte: 2,
  dt_int: 3,
  dt_float: 4,
  dt_double: 5,
  dt_varint: 6,
  dt_point_varint: 7,

  //Variable size types
  //Data bytes are prefixed by an integer
  //representing the number of elements in the array.
  dt_byte_array: 32,
  dt_int_array: 33,
  dt_float_array: 34,
  dt_double_array: 35,
  dt_varint_array: 36,
  //Special variable int encoding for point data
  dt_point_varint_array: 37,

  //Well-known data types that help reduce output size for commonly
  //encountered simple geometries
  dt_arc: 38,
  dt_circle: 39,
  dt_circular_arc: 40,

  dt_string: 63,
  //do not want to go into varint range
  dt_last_data_type: 127 };


var F2dSemanticType = {
  //For objects with fixed serialization (arc, raster) we don't bother having dedicated semantic for each member
  //and assume the parsing application knows the order they appear. There is still an end-object tag of course
  //which shows where the object ends.
  st_object_member: 0,

  //Simple / fixed size attributes
  st_fill: 1,
  st_fill_off: 2,
  st_clip_off: 3,
  st_layer: 4,
  st_link: 5,
  st_line_weight: 6,
  st_miter_angle: 7,
  st_miter_length: 8,
  st_line_pattern_ref: 9,
  st_back_color: 10,
  st_color: 11,
  st_markup: 12,
  st_object_id: 13,
  st_markup_id: 14,
  st_reset_rel_offset: 15,
  st_font_ref: 16,

  //Compound object opcodes

  //Begin a generic object opcode
  st_begin_object: 32,

  //Style attribute related opcodes. Those are compound objects
  st_clip: 33,
  st_line_caps: 34,
  st_line_join: 35,
  st_line_pattern_def: 36,
  st_font_def: 37,
  st_viewport: 38,

  //Drawables are all objects-typed bounded by begin/end object opcodes

  //Root level document begin
  st_sheet: 42,
  //Circle, Ellipse, Arcs
  st_arc: 43,
  //The grandfather of them all
  st_polyline: 44,
  st_raster: 45,
  st_text: 46,
  st_polytriangle: 47,
  st_dot: 48,
  //end object -- could be ending a generic object or drawable, etc.
  st_end_object: 63,

  st_last_semantic_type: 127 };



//Initializes a structure of counters used for statistical purposes and sheet content hash
function initGeomMetrics() {
  return {
    "arcs": 0,
    "circles": 0,
    "circ_arcs": 0,
    "viewports": 0,
    "clips": 0,
    "colors": 0,
    "db_ids": 0,
    "dots": 0,
    "fills": 0,
    "layers": 0,
    "line_caps": 0,
    "line_joins": 0,
    "line_patterns": 0,
    "line_pat_refs": 0,
    "plines": 0,
    "pline_points": 0,
    "line_weights": 0,
    "links": 0,
    "miters": 0,
    "ptris": 0,
    "ptri_indices": 0,
    "ptri_points": 0,
    "rasters": 0,
    "texts": 0,
    "strings": [] };

}


function F2D(metadata, manifest, basePath, options) {
  this.metadata = metadata;
  this.scaleX = 1;
  this.scaleY = 1;
  this.bbox = { min: { x: 0, y: 0, z: 0 }, max: { x: 0, y: 0, z: 0 } };
  this.is2d = true;
  this.layersMap = {};
  this.fontDefs = {};
  this.fontCount = 0;
  this.fontId = 0;
  this.manifestAvailable = false;

  this.objectMemberQueue = [];

  this.propertydb = {
    attrs: [],
    avs: [],
    ids: [],
    values: [],
    offsets: [],
    viewables: [] };


  if (metadata) {

    var dims = metadata.page_dimensions;

    this.paperWidth = dims.page_width;
    this.paperHeight = dims.page_height;

    // TODO: scale parsing.
    this.scaleX = this.paperWidth / dims.plot_width;
    this.scaleY = this.paperHeight / dims.plot_height;

    this.hidePaper = dims.hide_paper;

    var pw = this.paperWidth;
    var ph = this.paperHeight;
    this.bbox.max.x = pw;
    this.bbox.max.y = ph;

    var dim = metadata.page_dimensions || {};
    // If the paper is rotated or offset, include that in the bbox
    if (isFinite(dim.paper_rotation) && dim.paper_rotation !== 0) {
      var angle = dim.paper_rotation * Math.PI / 180;
      var cos = Math.cos(angle);
      var sin = Math.sin(angle);
      var dwx;
      var dwx = pw * cos;
      var dwy = pw * sin;
      var dhx = -ph * sin;
      var dhy = ph * cos;
      this.bbox.min.x = Math.min(0, dwx, dhx, dwx + dhx);
      this.bbox.max.x = Math.max(0, dwx, dhx, dwx + dhx);
      this.bbox.min.y = Math.min(0, dwy, dhy, dwy + dhy);
      this.bbox.max.y = Math.max(0, dwy, dhy, dwy + dhy);
    }
    if (isFinite(dim.paper_offset_x) && dim.paper_offset_x !== 0) {
      this.bbox.min.x += dim.paper_offset_x;
      this.bbox.max.x += dim.paper_offset_x;
    }
    if (isFinite(dim.paper_offset_y) && dim.paper_offset_y !== 0) {
      this.bbox.min.y += dim.paper_offset_y;
      this.bbox.max.y += dim.paper_offset_y;
    }

    //Initialize mapping between layer index -> layer number to be used for rendering
    var count = 0;
    //Some geometry comes on null layer, and we reserve a spot for that one.
    //For example, Revit plots have no layers at all.
    this.layersMap[0] = count++;

    for (var l in metadata.layers) {

      var index = parseInt(l);

      //We store in a map in order to allow non-consecutive layer numbers,
      //which does happen.
      this.layersMap[index] = count++;
    }

    this.layerCount = count;

    //Create a layers tree to be used by the UI -- this splits AutoCAD style
    //layer groups (specified using | character) into a tree of layers.
    this.createLayerGroups(metadata.layers);
  }

  this.hidePaper = this.hidePaper || options && options.modelSpace;

  // For debugging only. Could be removed.
  this.opCount = 0;

  this.excludeTextGeometry = options.excludeTextGeometry;

  this.fontFaces = [];
  this.fontFamilies = [];

  this.viewports = [{}]; // make viewport index start at 1, 0 as paper is used in LineShader
  this.currentVpId = 0; // current viewport index
  this.viewports[0].geom_metrics = this.currentGeomMetrics = initGeomMetrics();

  this.clips = [0]; // make clip index start at 1, matched with viewport index

  this.strings = [];
  this.stringDbIds = [];
  this.stringBoxes = [];
  this.currentStringNumber = -1;
  this.currentStringBox = new _wgs_scene_LmvBox3__WEBPACK_IMPORTED_MODULE_1__["LmvBox3"]();

  this.linkBoxes = [];
  this.currentLinkBox = new _wgs_scene_LmvBox3__WEBPACK_IMPORTED_MODULE_1__["LmvBox3"]();

  this.objectNumber = 0;
  this.currentFakeId = -2; //We tag certain objects that we care about (like strings) that have no ID with fake negative IDs instead of giving them default ID of 0.
  this.imageNumber = 0;
  this.linkNumber = 0;
  this.maxObjectNumber = 0;

  this.objectStack = [];
  this.objectNameStack = [];
  this.parseObjState = {
    polyTriangle: {},
    viewport: {},
    clip: {},
    raster: {},
    text: {},
    fontDef: {},
    uknown: {} };


  this.layer = 0;

  this.bgColor = typeof options.bgColor === "number" ? options.bgColor : 0xffffffff;

  //NOTE: Use of contrast color is turned off in mapColor() until UX makes up their mind
  //one way or another.
  this.contrastColor = this.color = this.fillColor = 0xff000000;
  if (this.hidePaper)
  this.contrastColor = 0xffffff00;

  this.useInstancing = options && !!options.useInstancing;
  this.isMobile = options && !!options.isMobile;
  this.max_vcount = this.isMobile ? MOBILE_MAX_VCOUNT : undefined;
  this.currentVbb = new _common_VertexBufferBuilder__WEBPACK_IMPORTED_MODULE_0__["VertexBufferBuilder"](this.useInstancing, undefined, this.max_vcount, this.isMobile);
  this.meshes = [];

  this.numCircles = this.numEllipses = this.numPolylines = this.numLineSegs = 0;
  this.numPolytriangles = this.numTriangles = 0;

  // Newly added f2d pasing stuff.
  this.error = false;

  // Last absolute positions of point parsed so far.
  // Used to decode relative positions parsed from points array.
  this.offsetX = 0;
  this.offsetY = 0;

  // Parse manifest, do stuff.
  // 1. Build image id to raster URI map used to assign values to texture path.
  // 2. Acquire names of property database json streams.
  if (manifest) {
    this.manifestAvailable = true;
    this.imageId2URI = {};
    var assets = manifest.assets;
    for (var i = 0, e = assets.length; i < e; ++i) {
      var entry = assets[i];
      var mime = entry.mime;
      if (mime.indexOf('image/') != -1) {
        var id = entry.id;
        id = id.substr(0, id.indexOf('.'));
        this.imageId2URI[id] = basePath + entry.URI;
      }

      if (entry.type == "Autodesk.CloudPlatform.PropertyAttributes")
      this.propertydb.attrs.push(entry.URI);
      if (entry.type == "Autodesk.CloudPlatform.PropertyValues")
      this.propertydb.values.push(entry.URI);
      if (entry.type == "Autodesk.CloudPlatform.PropertyIDs")
      this.propertydb.ids.push(entry.URI);
      if (entry.type == "Autodesk.CloudPlatform.PropertyViewables")
      this.propertydb.viewables.push(entry.URI);
      if (entry.type == "Autodesk.CloudPlatform.PropertyOffsets") {
        // rcv and rcv_offsets are not used any longer
        if (entry.id.indexOf('rcv') === -1)
        this.propertydb.offsets.push(entry.URI);
      }
      if (entry.type == "Autodesk.CloudPlatform.PropertyAVs")
      this.propertydb.avs.push(entry.URI);
    }

  }
}

F2D.prototype.load = function (loadContext, fydoPack) {

  if (!(fydoPack instanceof Uint8Array))
  fydoPack = new Uint8Array(fydoPack);
  this.data = fydoPack;
  this.parse();

  if (this.stringBoxes.length) {
    var fbuf = new Float32Array(this.stringBoxes.length);
    fbuf.set(this.stringBoxes);
    this.stringBoxes = fbuf;
  }

  loadContext.loadDoneCB(true);
};

F2D.prototype.loadFrames = function (loadContext) {

  this.loadContext = loadContext;

  var data = loadContext.data;

  if (data) {
    if (!(data instanceof Uint8Array))
    data = new Uint8Array(data);
    this.data = data;
  } else if (loadContext.finalFrame) {
    this.data = null;

    if (this.stringBoxes.length) {
      var fbuf = new Float32Array(this.stringBoxes.length);
      fbuf.set(this.stringBoxes);
      this.stringBoxes = fbuf;
    }
  }

  this.parseFrames(loadContext.finalFrame);

  loadContext.loadDoneCB(true);
};


F2D.prototype.pushMesh = function (mesh) {
  this.meshes.push(mesh);


  mesh.material = {
    skipEllipticals: !this.currentVbb.numEllipticals,
    skipCircles: !this.currentVbb.numCirculars,
    skipTriangleGeoms: !this.currentVbb.numTriangleGeoms,
    useInstancing: this.currentVbb.useInstancing,
    unpackPositions: !!mesh.unpackXform };


  if (this.currentImage) {
    mesh.material.image = this.currentImage;
    mesh.material.image.name = this.imageNumber++;
    this.currentImage = null;
  }
};

F2D.prototype.flushBuffer = function (addCount, finalFlush)
{
  if (!this.currentVbb.vcount && !finalFlush)
  {
    return;
  }

  var flush = finalFlush;
  flush = flush || this.currentVbb.isFull(addCount);

  if (flush) {
    if (this.currentVbb.vcount) {
      var mesh = this.currentVbb.toMesh();
      _common_VbUtils__WEBPACK_IMPORTED_MODULE_3__["VBUtils"].bboxUnion(this.bbox, mesh.boundingBox);

      this.pushMesh(mesh);
      this.currentVbb.reset(0);
    }

    if (this.loadContext)
    this.loadContext.loadDoneCB(true, finalFlush);
  }


};

F2D.prototype.tx = function (x) {
  return this.sx(x);
};

F2D.prototype.ty = function (y) {
  return this.sy(y);
};

F2D.prototype.sx = function (x) {
  //TODO: The hardcoded scale is used to get the integer coords from FYDO
  //into something normal and close to page coordinates
  return x * this.scaleX;
};

F2D.prototype.sy = function (y) {
  //TODO: The hardcoded scale is used to get the integer coords from FYDO
  //into something normal and close to page coordinates
  return y * this.scaleY;
};

F2D.prototype.invertColor = function (c) {
  var a = c >> 24 & 0xff;
  var b = c >> 16 & 0xff;
  var g = c >> 8 & 0xff;
  var r = c & 0xff;

  b = 255 - b;
  g = 255 - g;
  r = 255 - r;

  return a << 24 | b << 16 | g << 8 | r;
};

F2D.prototype.mapColor = function (c, isFill) {

  if (!this.hidePaper)
  return c;

  if (this.bgColor !== 0)
  return c;

  //Color substitution in cases when we want to interleave the 2D drawing
  //into a 3D scene (when bgColor is explicitly specified as transparent black (0)
  //and hidePaper is set to true.

  var r = c & 0xff;
  var g = (c & 0xff00) >> 8;
  var b = (c & 0xff0000) >> 16;

  var isGrey = r === g && r === b;

  if (r < 0x7f) {
    //c = this.contrastColor;
  } else if (isGrey && isFill) {
    c = c & 0x55ffffff;
  }

  return c;
};

// ====================== F2D Parser ================================= //

// Restore sign bit from LSB of an encoded integer which has the sign bit
// moved from MSB to LSB.
// The decoding process is the reverse by restoring the sign bit from LSB to MSB.
F2D.prototype.restoreSignBitFromLSB = function (integer) {
  return integer & 1 ? -(integer >>> 1) : integer >>> 1;
};

// Convert relative positions to absolute positions, and update global offsets.
F2D.prototype.parsePointPositions = function () {
  var x = this.stream.getVarints();
  var y = this.stream.getVarints();

  x = this.restoreSignBitFromLSB(x);
  y = this.restoreSignBitFromLSB(y);

  x += this.offsetX;
  y += this.offsetY;

  this.offsetX = x;
  this.offsetY = y;

  return [this.tx(x), this.ty(y)];
};

F2D.prototype.parserAssert = function (actualType, expectedType, functionName) {
  if (actualType != expectedType) {
    _logger_Logger__WEBPACK_IMPORTED_MODULE_5__["logger"].warn("Expect " + expectedType + "; actual type is " +
    actualType + "; in function " + functionName);
    this.error = true;
    return true;
  } else {
    return false;
  }
};

F2D.prototype.unhandledTypeWarning = function (inFunction, semanticType) {
  _logger_Logger__WEBPACK_IMPORTED_MODULE_5__["logger"].warn("Unhandled semantic type : " + semanticType + " in function " + inFunction);
};

F2D.prototype.parseObject = function () {
  var semantic_type = this.stream.getVarints();
  this.objectStack.push(semantic_type);
  //debug(semantic_type);
  switch (semantic_type) {
    case F2dSemanticType.st_sheet:
      this.objectNameStack.push("sheet");
      this.objectMemberQueue.unshift("paperColor");
      break;
    case F2dSemanticType.st_viewport:
      this.objectNameStack.push("viewport");
      this.objectMemberQueue.unshift("units", "transform");
      break;
    case F2dSemanticType.st_clip:
      this.objectNameStack.push("clip");
      this.objectMemberQueue.unshift("contourCounts", "points", "indices");
      break;
    case F2dSemanticType.st_polytriangle:
      this.objectNameStack.push("polyTriangle");
      this.objectMemberQueue.unshift("points", "indices", "colors");
      break;
    case F2dSemanticType.st_raster:
      this.objectNameStack.push("raster");
      this.objectMemberQueue.unshift("position", "width", "height", "imageId");
      break;
    case F2dSemanticType.st_text:
      this.currentStringNumber = this.strings.length;
      if (this.objectNumber === 0)
      this.objectNumber = this.currentFakeId--;
      this.currentStringBox.makeEmpty();
      this.objectNameStack.push("text");
      this.objectMemberQueue.unshift("string", "position", "height", "widthScale", "rotation", "oblique", "charWidths");
      break;
    case F2dSemanticType.st_font_def:
      this.objectNameStack.push("fontDef");
      this.objectMemberQueue.unshift("name", "fullName", "flags", "spacing", "panose");
      break;
    case F2dSemanticType.st_end_object:{
        this.objectStack.pop(); //pop the end_object we pushed at the beginning of the function

        if (!this.objectStack.length)
        this.parserAssert(0, 1, "parseEndObject (Stack Empty)");else
        {
          //Do any end-of-object post processing depending on object type
          var objType = this.objectStack.pop(); //pop the start object

          switch (objType) {
            case F2dSemanticType.st_polytriangle:this.actOnPolyTriangle();break;
            case F2dSemanticType.st_viewport:this.actOnViewport();break;
            case F2dSemanticType.st_clip:this.actOnClip();break;
            case F2dSemanticType.st_raster:this.actOnRaster();break;
            case F2dSemanticType.st_text:this.actOnText();break;
            case F2dSemanticType.st_font_def:this.actOnFontDef();break;}


          //Zero out the state of the object we just finished processing
          var name = this.objectNameStack.pop();
          var state = this.parseObjState[name];
          for (var p in state) {
            state[p] = null;}
        }

        this.objectMemberQueue.length = 0;
      }
      break;
    default:
      this.objectNameStack.push("unknown");
      this.error = true;
      this.unhandledTypeWarning('parseObject', semantic_type);
      break;}

};


F2D.prototype.initSheet = function (paperColor) {

  this.bgColor = paperColor;

  if (this.hidePaper)
  return;

  if (this.metadata) {
    var pw = this.paperWidth;
    var ph = this.paperHeight;

    var o = { x: 0, y: 0 }; // origin
    var dw = { x: pw, y: 0 }; // paper width direction
    var dh = { x: 0, y: ph }; // paper height direction

    // If the metadata has a non-zero rotation, then use it
    var dim = this.metadata.page_dimensions || {};
    if (isFinite(dim.paper_rotation) && dim.paper_rotation !== 0) {
      var angle = dim.paper_rotation * Math.PI / 180;
      var cos = Math.cos(angle);
      var sin = Math.sin(angle);
      dw.y = pw * sin;
      dw.x = pw * cos;
      dh.x = -ph * sin;
      dh.y = ph * cos;
    }
    // If the metadata has a non-zero offset, then use them
    if (isFinite(dim.paper_offset_x) && dim.paper_offset_x !== 0) {
      o.x = dim.paper_offset_x;
    }
    if (isFinite(dim.paper_offset_y) && dim.paper_offset_y !== 0) {
      o.y = dim.paper_offset_y;
    }

    var vbb = this.currentVbb;

    var ss = pw * 0.0075;
    var ssw = { x: dw.x * ss / pw, y: dw.y * ss / pw }; // shadow offset in width direction
    var ssh = { x: dh.x * ss / ph, y: dh.y * ss / ph }; // shadow offset in height direction
    var ssb = { x: o.x + ssw.x, y: o.y + ssw.y }; // bottom shadow origin
    var ssr = { x: o.x + dw.x, y: o.y + dw.y }; // right shadow origin
    var shadowColor = 0xff555555;

    var points = [o.x, o.y, o.x + dw.x, o.y + dw.y, o.x + dw.x + dh.x, o.y + dw.y + dh.y, o.x + dh.x, o.y + dh.y,
    ssb.x - ssh.x, ssb.y - ssh.y, ssb.x - ssh.x + dw.x, ssb.y - ssh.y + dw.y, ssb.x + dw.x, ssb.y + dw.y, ssb.x, ssb.y,
    ssr.x, ssr.y, ssr.x + ssw.x, ssr.y + ssw.y, ssr.x + ssw.x - ssh.x + dh.x, ssr.y + ssw.y - ssh.y + dh.y, ssr.x - ssh.x + dh.x, ssr.y - ssh.y + dh.y];
    var colors = [paperColor, paperColor, paperColor, paperColor,
    shadowColor, shadowColor, shadowColor, shadowColor,
    shadowColor, shadowColor, shadowColor, shadowColor];

    var indices = [0, 1, 2, 0, 2, 3,
    4, 5, 6, 4, 6, 7,
    8, 9, 10, 8, 10, 11];

    var paperLayer = 0; //Put the paper the null layer so it won't get turned off.
    var paperDbId = -1;

    this.addPolyTriangle(points, colors, indices, 0xffffffff, paperDbId, paperLayer, false);

    //Page outline
    vbb.addSegment(o.x, o.y, o.x + dw.x, o.y + dw.y, 0, 1e-6, 0xff000000, paperDbId, paperLayer, this.currentVpId);
    vbb.addSegment(o.x + dw.x, o.y + dw.y, o.x + dw.x + dh.x, o.y + dw.y + dh.y, 0, 1e-6, 0xff000000, paperDbId, paperLayer, this.currentVpId);
    vbb.addSegment(o.x + dw.x + dh.x, o.y + dw.y + dh.y, o.x + dh.x, o.y + dh.y, 0, 1e-6, 0xff000000, paperDbId, paperLayer, this.currentVpId);
    vbb.addSegment(o.x + dh.x, o.y + dh.y, o.x, o.y, 0, 1e-6, 0xff000000, paperDbId, paperLayer, this.currentVpId);


    //Test pattern for line styles.
    //for (var i=0; i<39; i++) {
    //    vbb.addSegment(0, ph + i * 0.25 + 1, 12, 12 + ph + i * 0.25 + 1, 0, -1 /* device space pixel width */, 0xff000000, 0xffffffff, 0, 0, i);
    //}

    //Test pattern for line styles.
    //for (var i=0; i<39; i++) {
    //    vbb.addSegment(0, ph + (i+39) * 0.25 + 1, 12, 12 + ph + (i+39) * 0.25 + 1, 0, (1.0 / 25.4) /*1mm width*/, 0xff000000, 0xffffffff, 0, 0, i);
    //}

  }
};

F2D.prototype.setObjectMember = function (val) {
  if (!this.objectMemberQueue.length) {
    _logger_Logger__WEBPACK_IMPORTED_MODULE_5__["logger"].warn("Unexpected object member. " + val + " on object " + this.objectNameStack[this.objectNameStack.length - 1]);
    return false;
  }

  var propName = this.objectMemberQueue.shift();
  var curObjName = this.objectNameStack[this.objectNameStack.length - 1];

  //The paper color needs to be processed as soon as it comes in
  //because we want to initialize the page geometry first, before
  //adding any other geometry
  if (curObjName == "sheet" && propName == "paperColor") {
    this.initSheet(val);
    return true;
  } else
  if (curObjName) {
    this.parseObjState[curObjName][propName] = val;
    return true;
  }

  return false;
};


F2D.prototype.parseString = function () {
  var s = this.stream;
  var sema = s.getVarints();

  var len = s.getVarints();
  var ret = s.getString(len);

  switch (sema) {
    case F2dSemanticType.st_object_member:
      if (this.setObjectMember(ret))
      return;
      break;
    default:_logger_Logger__WEBPACK_IMPORTED_MODULE_5__["logger"].info("Unexpected opcode semantic type for string.");break;}


  return ret;
};


F2D.prototype.actOnFontDef = function () {
  var fontDef = this.parseObjState.fontDef;
  this.fontDefs[++this.fontCount] = fontDef;
  this.fontId = this.fontCount;
};


F2D.prototype.parsePoint = function () {
  var s = this.stream;
  var sema = s.getVarints(); //skip past the semantics
  var ret = this.parsePointPositions();

  switch (sema) {
    case F2dSemanticType.st_object_member:
      if (this.setObjectMember(ret))
      return;
      break;
    default:_logger_Logger__WEBPACK_IMPORTED_MODULE_5__["logger"].info("Unexpected opcode semantic type for point.");break;}


  return ret;
};


F2D.prototype.parsePointsArray = function () {

  var s = this.stream;

  var sema = s.getVarints();

  var count = s.getVarints(); // number of coordinates * 2
  if (!count) return;
  count = count / 2;

  var ret = [];
  var position;

  for (var i = 0; i < count; ++i) {
    position = this.parsePointPositions();
    ret.push(position[0]);
    ret.push(position[1]);
  }

  switch (sema) {
    case F2dSemanticType.st_polyline:
      this.actOnPolylinePointsArray(ret);
      return;
    case F2dSemanticType.st_dot:
      this.actOnDot(ret);
      return;
    case F2dSemanticType.st_object_member:
      if (this.setObjectMember(ret))
      return;
      break;
    default:_logger_Logger__WEBPACK_IMPORTED_MODULE_5__["logger"].info("Unexpected opcode semantic type for points array.");break;}


  return ret;
};

F2D.prototype.parseIntArray = function () {
  var s = this.stream;
  var sema = s.getVarints();
  var count = s.getVarints(); // total number of elements in integer array.
  var retVal = [];
  for (var i = 0; i < count; ++i) {
    retVal.push(s.getUint32());
  }

  switch (sema) {
    case F2dSemanticType.st_object_member:
      if (this.setObjectMember(retVal))
      return;
      break;
    default:
      this.unhandledTypeWarning('parseIntArray', sema);
      break;}


  return retVal;
};

F2D.prototype.parseDoubleArray = function () {
  var s = this.stream;
  var sema = s.getVarints();
  var count = s.getVarints(); // total number of elements in integer array.
  var retVal = [];
  for (var i = 0; i < count; ++i) {
    retVal.push(s.getFloat64());
  }

  switch (sema) {
    case F2dSemanticType.st_object_member:
      if (this.setObjectMember(retVal))
      return;
      break;
    default:
      this.unhandledTypeWarning('parseDoubleArray', sema);
      break;}


  return retVal;
};

F2D.prototype.parseByteArray = function () {
  var s = this.stream;
  var sema = s.getVarints();
  var count = s.getVarints(); // total number of elements in byte array.
  var retVal = [];
  for (var i = 0; i < count; ++i) {
    retVal.push(s.getUint8());
  }

  switch (sema) {
    case F2dSemanticType.st_object_member:
      if (this.setObjectMember(retVal))
      return;
      break;
    default:
      this.unhandledTypeWarning('parseByteArray', sema);
      break;}


  return retVal;
};


F2D.prototype.parseVarintArray = function () {
  var s = this.stream;
  var sema = s.getVarints();

  var ret = [];

  // Total number of integers in array, not the total number of bytes.
  var count = s.getVarints();

  for (var i = 0; i < count; ++i) {
    ret.push(s.getVarints());
  }

  switch (sema) {
    case F2dSemanticType.st_object_member:
      if (this.setObjectMember(ret))
      return;
      break;
    default:
      this.unhandledTypeWarning('parseVarIntArray', sema);
      break;}


  return ret;
};


F2D.prototype.parseInt = function () {
  var s = this.stream;
  var sema = s.getVarints();
  var val = s.getUint32();

  switch (sema) {
    case F2dSemanticType.st_color:
      this.color = this.mapColor(val, false);
      this.currentGeomMetrics.colors++;
      break;
    case F2dSemanticType.st_fill:
      this.fill = true;
      this.fillColor = this.mapColor(val, true);
      this.currentGeomMetrics.fills++;
      break;
    case F2dSemanticType.st_object_member:
      if (this.setObjectMember(val))
      return;
    default:
      this.unhandledTypeWarning('parseInt', sema);
      break;}


  return val;
};

F2D.prototype.parseVoid = function () {
  var sema = this.stream.getVarints();
  switch (sema) {
    case F2dSemanticType.st_fill_off:
      this.fill = false;
      this.currentGeomMetrics.fills++;
      break;
    default:
      this.unhandledTypeWarning('parseVoid', sema);
      break;}

};

F2D.prototype.parseVarint = function () {
  var s = this.stream;
  var semantic_type = s.getVarints();
  var val = s.getVarints();

  switch (semantic_type) {
    case F2dSemanticType.st_line_weight:
      this.lineWeight = this.tx(val);
      this.currentGeomMetrics.line_weights++;
      break;
    case F2dSemanticType.st_line_caps:
      this.currentGeomMetrics.line_caps++;
      break;
    case F2dSemanticType.st_line_join:
      this.currentGeomMetrics.line_joins++;
      break;
    case F2dSemanticType.st_object_id:
    case F2dSemanticType.st_markup_id:
      this.objectNumber = val;
      this.maxObjectNumber = Math.max(this.maxObjectNumber, val);
      this.currentGeomMetrics.db_ids++;
      break;
    case F2dSemanticType.st_link:
      if (this.linkNumber) {
        this.linkBoxes[this.linkNumber] = this.currentLinkBox.clone();
        this.currentLinkBox.makeEmpty();
      }
      this.linkNumber = val;
      break;
    case F2dSemanticType.st_layer:
      this.currentGeomMetrics.layers++;
      this.layer = this.layersMap[val];
      break;
    case F2dSemanticType.st_font_ref:
      this.fontId = val;
      break;
    case F2dSemanticType.st_object_member:
      if (this.setObjectMember(val))
      return;
      break;
    default:
      break;}


  return val;
};

F2D.prototype.parseFloat = function () {
  var s = this.stream;
  var semantic_type = s.getVarints();
  var val = s.getFloat32();

  switch (semantic_type) {
    case F2dSemanticType.st_miter_angle:
      break;
    case F2dSemanticType.st_miter_length:
      break;
    case F2dSemanticType.st_object_member:
      if (this.setObjectMember(val)) {
        return;
      }
      break;
    default:
      break;}


  return val;
};

F2D.prototype.parseCircularArc = function () {
  var s = this.stream;
  var sema = s.getVarints();
  if (this.parserAssert(sema, F2dSemanticType.st_arc, 'parseCircularArc')) return;

  var point = this.parsePointPositions();
  var major = s.getVarints(), /*rotation = s.getFloat32(),*/start = s.getFloat32(),end = s.getFloat32();

  this.actOnCircularArc(point[0], point[1], start, end, this.sx(major));
};

F2D.prototype.parseCircle = function () {
  var s = this.stream;
  var sema = s.getVarints();
  if (this.parserAssert(sema, F2dSemanticType.st_arc, 'parseCircle')) return;

  var point = this.parsePointPositions();
  var major = s.getVarints();

  this.actOnCompleteCircle(point[0], point[1], this.sx(major));
};

F2D.prototype.parseArc = function () {
  var s = this.stream;
  var sema = s.getVarints();
  if (this.parserAssert(sema, F2dSemanticType.st_arc, 'parseArc')) return;

  // Relative positions.
  var point = this.parsePointPositions();

  var major = s.getVarints();
  var minor = s.getVarints();

  var rotation = s.getFloat32();
  var start = s.getFloat32();
  var end = s.getFloat32();

  this.actOnArc(point[0], point[1], start, end, this.sx(major), this.sy(minor), rotation);
};

F2D.prototype.parseDataType = function () {
  var data_type = this.stream.getVarints();

  switch (data_type) {
    case F2dDataType.dt_void:
      this.parseVoid();
      break;
    case F2dDataType.dt_int:
      this.parseInt();
      break;
    case F2dDataType.dt_object:
      this.parseObject();
      break;
    case F2dDataType.dt_varint:
      this.parseVarint();
      break;
    case F2dDataType.dt_point_varint:
      this.parsePoint();
      break;
    case F2dDataType.dt_float:
      this.parseFloat();
      break;
    case F2dDataType.dt_point_varint_array:
      this.parsePointsArray();
      break;
    case F2dDataType.dt_circular_arc:
      this.parseCircularArc();
      break;
    case F2dDataType.dt_circle:
      this.parseCircle();
      break;
    case F2dDataType.dt_arc:
      this.parseArc();
      break;
    case F2dDataType.dt_int_array:
      this.parseIntArray();
      break;
    case F2dDataType.dt_varint_array:
      this.parseVarintArray();
      break;
    case F2dDataType.dt_byte_array:
      this.parseByteArray();
      break;
    case F2dDataType.dt_string:
      this.parseString();
      break;
    case F2dDataType.dt_double_array:
      this.parseDoubleArray();
      break;
    default:
      this.error = true;
      _logger_Logger__WEBPACK_IMPORTED_MODULE_5__["logger"].info("Data type not supported yet: " + data_type);
      break;}

};

F2D.prototype.readHeader = function () {
  var stream = this.stream = new _common_InputStream__WEBPACK_IMPORTED_MODULE_4__["InputStream"](this.data);

  // "F2D"
  var header = stream.getString(3);

  if (header !== "F2D") {
    _logger_Logger__WEBPACK_IMPORTED_MODULE_5__["logger"].error("Invalid F2D header : " + header, Object(_net_ErrorCodes__WEBPACK_IMPORTED_MODULE_6__["errorCodeString"])(_net_ErrorCodes__WEBPACK_IMPORTED_MODULE_6__["ErrorCodes"].BAD_DATA));
    return false;
  }

  var versionMajor = stream.getString(2);
  if (versionMajor !== "01") {
    _logger_Logger__WEBPACK_IMPORTED_MODULE_5__["logger"].error("Only support f2d major version 1; actual version is : " + versionMajor, Object(_net_ErrorCodes__WEBPACK_IMPORTED_MODULE_6__["errorCodeString"])(_net_ErrorCodes__WEBPACK_IMPORTED_MODULE_6__["ErrorCodes"].BAD_DATA));
    return false;
  }

  var dot = stream.getString(1);
  if (dot !== ".") {
    _logger_Logger__WEBPACK_IMPORTED_MODULE_5__["logger"].error("Invalid version delimiter.", Object(_net_ErrorCodes__WEBPACK_IMPORTED_MODULE_6__["errorCodeString"])(_net_ErrorCodes__WEBPACK_IMPORTED_MODULE_6__["ErrorCodes"].BAD_DATA));
    return false;
  }

  var versionMinor = stream.getString(2);
  return true;
};

F2D.prototype.parse = function () {
  // Read and check header
  if (!this.readHeader())
  return;

  var stream = this.stream;
  while (stream.offset < stream.byteLength) {
    this.parseDataType();
    if (this.error)
    break;
    this.opCount++;
  }

  if (this.linkNumber) {
    this.linkBoxes[this.linkNumber] = this.currentLinkBox.clone();
    this.currentLinkBox.makeEmpty();
  }

  this.flushBuffer(0, true);
  this.currentVbb = null;

  this.stream = null;
  this.data = null;

  _logger_Logger__WEBPACK_IMPORTED_MODULE_5__["logger"].info("F2d parse: data types count : " + this.opCount);
};

F2D.prototype.parseFrames = function (flush) {

  if (this.data) {
    var stream = this.stream = new _common_InputStream__WEBPACK_IMPORTED_MODULE_4__["InputStream"](this.data);
    while (stream.offset < stream.byteLength) {
      this.parseDataType();
      if (this.error)
      break;
      this.opCount++;
    }
  } else if (!flush) {
    _logger_Logger__WEBPACK_IMPORTED_MODULE_5__["logger"].warn("Unexpected F2D parse state: If there is no data, we only expect a flush command, but flush was false.");
  }

  if (flush) {
    this.flushBuffer(0, true);
  }

  this.stream = null;
  this.data = null;
};

// ================= Semantic Analysis Pass ======================//

F2D.prototype.actOnPolylinePointsArray = function (points) {

  this.flushBuffer();

  // For now only consider this.fill == false case.
  // TODO: handle fill case.

  var count = points.length / 2;

  var totalLen = 0;
  var x0 = points[0];
  var y0 = points[1];
  for (var i = 1; i < count; ++i) {
    var x1 = points[2 * i];
    var y1 = points[2 * i + 1];

    // TODO: make sure this function can be reused as is.
    this.currentVbb.addSegment(x0, y0, x1, y1, totalLen, this.lineWeight, this.color, this.objectNumber, this.layer, this.currentVpId);

    totalLen += Math.sqrt((x1 - x0) * (x1 - x0) + (y1 - y0) * (y1 - y0));

    x0 = x1;
    y0 = y1;
  }

  this.numPolylines++;
  this.numLineSegs += count - 1;

  this.currentGeomMetrics.plines++;
  this.currentGeomMetrics.pline_points += count - 1;
};

F2D.prototype.actOnDot = function (points) {

  this.currentGeomMetrics.dots++;

  var x0 = points[0];
  var y0 = points[1];

  this.actOnCompleteCircle(x0, y0, this.sx(1), true);
};


F2D.prototype.actOnCompleteCircle = function (cx, cy, radius, skipCount) {
  // Relative positions.
  this.flushBuffer();
  this.numCircles++;

  if (!skipCount)
  this.currentGeomMetrics.circles++;

  if (this.fill) {
    //A simple filled circle can be handled
    //as degenerate thick line segment -- lots of these
    //in line style grass clippings
    this.currentVbb.addSegment(cx, cy, cx, cy, 0, 2 * radius, this.color, this.objectNumber,
    this.layer, this.currentVpId, true, false, true);
  } else {
    this.currentVbb.addArc(cx, cy, 0, 2 * Math.PI, /*major*/radius, /*minor*/radius, /*tilt*/0.0,
    this.lineWeight, this.color, this.objectNumber, this.layer, this.currentVpId);
  }
};

F2D.prototype.actOnCircularArc = function (cx, cy, start, end, radius) {
  this.numCircles++;
  this.currentGeomMetrics.circ_arcs++;
  this.flushBuffer();

  //    debug("circle " + start + " " + end + " c " + this.color.toString(16));

  this.currentVbb.addArc(cx, cy, start, end, /*major*/radius, /*minor*/radius, /*tilt*/0.0,
  this.lineWeight, this.color, this.objectNumber, this.layer, this.currentVpId);
};

F2D.prototype.actOnArc = function (cx, cy, start, end, major, minor, rotation) {
  this.numEllipses++;
  this.currentGeomMetrics.arcs++;
  // TODO: need this?
  this.flushBuffer();
  this.currentVbb.addArc(cx, cy, start, end, major, minor, rotation,
  this.lineWeight, this.color, this.objectNumber, this.layer, this.currentVpId);
};

F2D.prototype.actOnRaster = function () {

  if (!this.manifestAvailable)
  return;

  this.flushBuffer(4, true);

  var ps = this.parseObjState.raster;

  var position = ps.position,
  imageId = ps.imageId,
  imageUri = this.imageId2URI[imageId];

  var width = this.sx(ps.width),
  height = this.sy(ps.height);

  var centerX = position[0] + 0.5 * width,
  centerY = position[1] - 0.5 * height;

  this.currentVbb.addTexturedQuad(centerX, centerY, width, height, /*rotation*/0, 0xff00ffff, this.objectNumber, this.layer, this.currentVpId);
  this.currentImage = { dataURI: imageUri };

  //We can do one image per Vertex Buffer, so flush the quad
  this.flushBuffer(0, true);

  //TODO: we need to compare the contents of the raster also.
  this.currentGeomMetrics.rasters++;
};

F2D.prototype.actOnClip = function () {

  var v = this.parseObjState.clip;
  this.parseObjState.clip = {};

  this.clips.push(v);

  this.currentGeomMetrics.clips++;
};

F2D.prototype.actOnText = function () {
  //TODO: text not currently used for rendering,
  //but we collect the strings for search/lookup purposes
  this.strings[this.currentStringNumber] = this.parseObjState.text.string;

  this.currentGeomMetrics.texts++;
  this.currentGeomMetrics.strings.push(this.parseObjState.text.string);

  this.stringDbIds[this.currentStringNumber] = this.objectNumber;
  this.stringBoxes.push(this.currentStringBox.min.x, this.currentStringBox.min.y, this.currentStringBox.max.x, this.currentStringBox.max.y);
  this.currentStringBox.makeEmpty();
  this.currentStringNumber = -1;
  if (this.objectNumber < -1)
  this.objectNumber = 0; //reset the current object ID in case we were using a fake one for the text object
};


var _tmpVector = new _wgs_scene_LmvVector3__WEBPACK_IMPORTED_MODULE_2__["LmvVector3"]();

//Polytriangle processing differs depending on whether
//we want edge antialiasing and whether the renderer is using
//hardware instancing or not, so it require a lot more
//work than other geometries before sending raw primitives to the
//vertex buffer.
F2D.prototype.addPolyTriangle = function (points, colors, inds, color, dbId, layer, antialiasEdges) {
  var me = this;
  var edgeMap = null;

  //For non-text geometry we get good looking results with
  //1 pixel outlines. For text, which is generally small and highly detailed,
  //a 0.5 pixel AA outline does better.
  var aaLineWeight = -1.0; //negative = in pixel units
  if (this.objectStack[this.objectStack.length - 1] == F2dSemanticType.st_text)
  aaLineWeight = -0.5;


  function processEdge(iFrom, iTo) {
    if (iFrom > iTo) {
      var tmp = iFrom;
      iFrom = iTo;
      iTo = tmp;
    }

    if (!edgeMap[iFrom])
    edgeMap[iFrom] = [iTo];else
    {
      var adjacentVerts = edgeMap[iFrom];
      var idx = adjacentVerts.lastIndexOf(iTo);
      if (idx == -1)
      adjacentVerts.push(iTo); //first time we see this edge, so remember it as exterior edge
      else
        adjacentVerts[idx] = -1; //the second time we see an edge mark it as interior edge
    }
  }


  function addAllAntialiasEdges() {

    for (var i = 0, iEnd = edgeMap.length; i < iEnd; i++) {

      var adjacentVerts = edgeMap[i];
      if (!adjacentVerts)
      continue;

      for (var j = 0; j < adjacentVerts.length; j++) {
        var iTo = adjacentVerts[j];
        if (iTo == -1)
        continue; //an interior edge was here -- skip
        else {
            //exterior edge -- add an antialiasing line for it
            me.flushBuffer(4);
            me.currentVbb.addSegment(points[2 * i], points[2 * i + 1],
            points[2 * iTo], points[2 * iTo + 1],
            0,
            aaLineWeight,
            me.mapColor(colors ? colors[i] : color, true),
            dbId, layer, me.currentVpId);
            {
              if (colors && colors[i] != colors[iTo])
              _logger_Logger__WEBPACK_IMPORTED_MODULE_5__["logger"].warn("Gouraud triangle encountered. Will have incorrect antialiasing.");}
          }
      }
    }
  }

  function antialiasOneEdge(iFrom, iTo) {
    if (iFrom > iTo) {
      var tmp = iFrom;
      iFrom = iTo;
      iTo = tmp;
    }

    var adjacentVerts = edgeMap[iFrom];
    if (!adjacentVerts)
    return;

    var idx = adjacentVerts.indexOf(iTo);
    if (idx != -1) {
      //exterior edge -- add an antialiasing line for it
      me.flushBuffer(4);
      me.currentVbb.addSegment(points[2 * iFrom], points[2 * iFrom + 1],
      points[2 * iTo], points[2 * iTo + 1],
      0,
      aaLineWeight,
      me.mapColor(colors ? colors[iFrom] : color, true),
      dbId, layer, me.currentVpId);

      if (colors && colors[iFrom] != colors[iTo])
      _logger_Logger__WEBPACK_IMPORTED_MODULE_5__["logger"].warn("Gouraud triangle encountered. Will have incorrect antialiasing.");
    }
  }

  if (antialiasEdges) {
    edgeMap = new Array(points.length / 2);

    for (var i = 0, iEnd = inds.length; i < iEnd; i += 3) {
      var i0 = inds[i];
      var i1 = inds[i + 1];
      var i2 = inds[i + 2];

      processEdge(i0, i1);
      processEdge(i1, i2);
      processEdge(i2, i0);
    }
  }

  //If the polytriangle is part of tesselated text or hyperlink, add it to the current
  //text object bounding box
  if (this.currentStringNumber !== -1 || this.linkNumber) {
    var count = points.length / 2; // number of vertices
    for (var i = 0; i < count; ++i) {
      _tmpVector.set(points[2 * i], points[2 * i + 1], 0);

      if (this.currentStringNumber !== -1)
      this.currentStringBox.expandByPoint(_tmpVector);

      if (this.linkNumber)
      this.currentLinkBox.expandByPoint(_tmpVector);
    }
  }

  if (this.currentVbb.useInstancing) {
    var count = inds.length;
    for (var i = 0; i < count; i += 3) {
      var i0 = inds[i];
      var i1 = inds[i + 1];
      var i2 = inds[i + 2];

      this.flushBuffer(4);

      this.currentVbb.addTriangleGeom(points[2 * i0], points[2 * i0 + 1],
      points[2 * i1], points[2 * i1 + 1],
      points[2 * i2], points[2 * i2 + 1],
      this.mapColor(colors ? colors[i0] : color, true), dbId, layer, this.currentVpId);

      if (antialiasEdges) {
        antialiasOneEdge(i0, i1);
        antialiasOneEdge(i1, i2);
        antialiasOneEdge(i2, i0);
      }
    }
  } else
  {
    var count = points.length / 2; // number of vertices

    this.flushBuffer(count);
    var vbb = this.currentVbb;
    var vbase = vbb.vcount;

    for (var i = 0; i < count; ++i) {
      var x = points[2 * i];
      var y = points[2 * i + 1];
      vbb.addVertexPolytriangle(x, y, this.mapColor(colors ? colors[i] : color, true), dbId, layer, this.currentVpId);
    }

    vbb.addIndices(inds, vbase);

    if (antialiasEdges) {
      addAllAntialiasEdges();
    }

  }
};

F2D.prototype.actOnPolyTriangle = function () {

  var ptri = this.parseObjState.polyTriangle;
  this.parseObjState.polyTriangle = {};

  var points = ptri.points;
  var inds = ptri.indices;
  var colors = ptri.colors;

  if (!points || !inds) {
    _logger_Logger__WEBPACK_IMPORTED_MODULE_5__["logger"].warn("Malformed polytriangle.");
    return;
  }

  //Skip polytriangles that belong to text strings from the geometry stats
  //as they are not relevant to the sheet signature computation
  if (this.objectStack[this.objectStack.length - 1] == F2dSemanticType.st_text) {
    if (this.excludeTextGeometry) {
      return;
    }
  } else {
    this.currentGeomMetrics.ptris++;
    this.currentGeomMetrics.ptri_points += points.length / 2;
    this.currentGeomMetrics.ptri_indices += inds.length;
  }

  this.numPolytriangles++;
  this.numTriangles += inds.length / 3;

  this.addPolyTriangle(points, colors, inds, this.color, this.objectNumber, this.layer, true);
};

F2D.prototype.actOnViewport = function () {

  var v = this.parseObjState.viewport;
  this.parseObjState.viewport = {};

  v.geom_metrics = this.currentGeomMetrics = initGeomMetrics();

  this.viewports.push(v);
  this.currentVpId = this.viewports.length - 1;
};

F2D.prototype.createLayerGroups = function (layers) {

  // Temporary: build the layers tree. Eventually the extractor
  // should be the one doing this; we're incompletely faking it
  // by looking at the layer names.
  //
  var layersRoot = this.layersRoot = { name: 'root', id: 'root', childrenByName: {}, isLayer: false };
  var groupId = 0,layerId = 0;

  for (var l in layers) {

    var index = parseInt(l);
    var layerDef = layers[l];

    var name = typeof layerDef === "string" ? layerDef : layerDef.name;

    if (!name)
    name = l; //won't get here...

    var path = name.split('|');
    var parent = layersRoot;

    if (path.length > 1) {
      for (var i = 0; i < path.length - 1; ++i) {
        var pathComponent = path[i];
        var item = parent.childrenByName[pathComponent];
        if (!item) {
          item = {
            name: pathComponent,
            id: 'group-' + groupId++,
            childrenByName: {},
            isLayer: false };

          parent.childrenByName[pathComponent] = item;
        }
        parent = item;
      }
    }

    parent.childrenByName[name] = {
      name: name,
      index: index,
      id: layerId++,
      childrenByName: {},
      isLayer: true };

  }

  function sortLayers(parent) {
    var children = Object.keys(parent.childrenByName).map(function (k) {return parent.childrenByName[k];});
    delete parent.childrenByName;

    if (children.length) {
      parent.children = children;

      parent.childCount = 0;

      for (var i = 0; i < children.length; ++i) {
        parent.childCount += sortLayers(children[i]);
      }

      children.sort(function (a, b) {
        if (a.isLayer && !b.isLayer) {
          return -1; // Layers before groups
        } else if (!a.isLayer && b.isLayer) {
          return 1;
        }
        return a.name.localeCompare(b.name, undefined, { sensitivity: 'base', numeric: true }); // Sort layers and groups by name
      });
    }

    return parent.isLayer ? 1 : parent.childCount;
  }
  sortLayers(this.layersRoot);
};

/***/ }),

/***/ "./src/file-loaders/lmvtk/f2d/F2dProbe.js":
/*!************************************************!*\
  !*** ./src/file-loaders/lmvtk/f2d/F2dProbe.js ***!
  \************************************************/
/*! exports provided: F2DProbe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F2DProbe", function() { return F2DProbe; });
/* harmony import */ var _CheckedInputStream__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CheckedInputStream */ "./src/file-loaders/lmvtk/f2d/CheckedInputStream.js");
/* harmony import */ var _F2d__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./F2d */ "./src/file-loaders/lmvtk/f2d/F2d.js");
/* harmony import */ var _net_ErrorCodes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../net/ErrorCodes */ "./src/file-loaders/net/ErrorCodes.js");
/* harmony import */ var _logger_Logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../logger/Logger */ "./src/logger/Logger.js");








function F2DProbe() {
  this.data = null;
  this.frameStart = 0;
  this.frameEnd = 0;
  this.stream = null;
  this.opCount = 0;
  this.marker = { frameStart: this.frameStart,
    frameEnd: this.frameEnd };
}

F2DProbe.prototype.load = function (data) {
  this.data = data;
  this.frameStart = 0;

  if (!this.stream) {
    this.stream = new _CheckedInputStream__WEBPACK_IMPORTED_MODULE_0__["CheckedInputStream"](this.data);
    // Skip headers.
    this.stream.seek(8);
    this.frameStart = 8;
    this.frameEnd = 8;
  } else
  {
    this.stream.reset(this.data);
    this.stream.seek(0);
    this.frameEnd = 0;
  }

  this.probe();
  this.marker.frameStart = this.frameStart;
  this.marker.frameEnd = this.frameEnd;
  return this.marker;
};

var F2dProbeDataType = _F2d__WEBPACK_IMPORTED_MODULE_1__["F2dDataType"];
var F2dProbeSemanticType = _F2d__WEBPACK_IMPORTED_MODULE_1__["F2dSemanticType"];

F2DProbe.prototype.readColor = function () {
  var s = this.stream;
  s.getVarints(); // data type : dt_int 3
  s.getVarints(); // semantic type : st_object_member 0
  s.skipUint32(); // color
};

F2DProbe.prototype.parsePointPositions = function () {
  this.stream.getVarints();
  this.stream.getVarints();
};

F2DProbe.prototype.unhandledTypeWarning = function (inFunction, semanticType) {
  _logger_Logger__WEBPACK_IMPORTED_MODULE_3__["logger"].warn("Unhandled semantic type when probing F2d : " + semanticType + " in function " + inFunction);
};

F2DProbe.prototype.parseObject = function () {
  /*var semantic_type =*/this.stream.getVarints();
  //debug("object parsing : type" + semantic_type);
};


F2DProbe.prototype.parseString = function () {
  var s = this.stream;
  s.getVarints();
  var len = s.getVarints();
  s.skipBytes(len);
};

F2DProbe.prototype.parsePoint = function () {
  this.stream.getVarints();
  this.parsePointPositions();
};

F2DProbe.prototype.parseVarintArray = function () {
  var s = this.stream;
  s.getVarints();

  var count = s.getVarints();
  for (var i = 0; i < count; ++i) {
    s.getVarints();}
};

F2DProbe.prototype.parseByteArray = function () {
  var s = this.stream;
  s.getVarints();
  var count = s.getVarints();
  s.skipBytes(count);
};

F2DProbe.prototype.parseEndOfObject = function () {
  var s = this.stream;
  s.getVarints();
  s.getVarints();
};

F2DProbe.prototype.parsePointsArray = function (context) {
  var s = this.stream;
  var sema = s.getVarints();
  var count = s.getVarints(); // number of coordinates * 2
  if (!count) return;
  count = count / 2;
  for (var i = 0; i < count; ++i) {
    this.parsePointPositions();}
};

F2DProbe.prototype.parsePoint = function (context) {
  var s = this.stream;
  var sema = s.getVarints();
  this.parsePointPositions();
};

F2DProbe.prototype.parseInt = function () {
  var s = this.stream;
  var sema = s.getVarints();

  switch (sema) {
    case F2dProbeSemanticType.st_color:
      s.skipUint32();
      break;
    case F2dProbeSemanticType.st_fill:{
        s.skipUint32();
        break;
      }
    default:
      s.skipUint32();
      this.unhandledTypeWarning('parseInt', sema);
      break;}

};

F2DProbe.prototype.parseVoid = function () {
  var sema = this.stream.getVarints();
  switch (sema) {
    case F2dProbeSemanticType.st_fill_off:
      break;
    default:
      this.unhandledTypeWarning('parseVoid', sema);
      break;}

};

F2DProbe.prototype.parseVarint = function () {
  this.stream.getVarints();
  this.stream.getVarints();
};

F2DProbe.prototype.parseIntArray = function () {
  var s = this.stream;
  s.getVarints();
  var count = s.getVarints();
  for (var i = 0; i < count; ++i) {
    s.skipUint32();}
};

F2DProbe.prototype.parseFloat = function () {
  var s = this.stream;
  s.getVarints();
  s.getFloat32();
};

F2DProbe.prototype.parseDoubleArray = function () {
  var s = this.stream;
  s.getVarints();
  var count = s.getVarints();
  for (var i = 0; i < count; ++i) {
    s.skipFloat64();}
};

F2DProbe.prototype.parseCircularArc = function () {
  var s = this.stream;
  s.getVarints();
  this.parsePointPositions();
  s.getVarints();
  s.getFloat32();
  s.getFloat32();
};

F2DProbe.prototype.parseCircle = function () {
  var s = this.stream;
  s.getVarints();
  this.parsePointPositions();
  s.getVarints();
};

F2DProbe.prototype.parseArc = function () {
  var s = this.stream;
  s.getVarints();
  this.parsePointPositions();
  s.getVarints();
  s.getVarints();
  s.getFloat32();
  s.getFloat32();
  s.getFloat32();
};

F2DProbe.prototype.parseDataType = function () {
  var data_type = this.stream.getVarints();

  switch (data_type) {
    case F2dProbeDataType.dt_void:
      this.parseVoid();
      break;
    case F2dProbeDataType.dt_int:
      this.parseInt();
      break;
    case F2dProbeDataType.dt_object:
      this.parseObject();
      break;
    case F2dProbeDataType.dt_varint:
      this.parseVarint();
      break;
    case F2dProbeDataType.dt_float:
      this.parseFloat();
      break;
    case F2dProbeDataType.dt_point_varint:
      this.parsePoint();
      break;
    case F2dProbeDataType.dt_point_varint_array:
      this.parsePointsArray();
      break;
    case F2dProbeDataType.dt_circular_arc:
      this.parseCircularArc();
      break;
    case F2dProbeDataType.dt_circle:
      this.parseCircle();
      break;
    case F2dProbeDataType.dt_arc:
      this.parseArc();
      break;
    case F2dProbeDataType.dt_varint_array:
      this.parseVarintArray();
      break;
    case F2dProbeDataType.dt_int_array:
      this.parseIntArray();
      break;
    case F2dProbeDataType.dt_byte_array:
      this.parseByteArray();
      break;
    case F2dProbeDataType.dt_string:
      this.parseString();
      break;
    case F2dProbeDataType.dt_double_array:
      this.parseDoubleArray();
      break;
    default:
      this.error = true;
      _logger_Logger__WEBPACK_IMPORTED_MODULE_3__["logger"].error("Bad op code encountered : " + data_type + " , bail out.", Object(_net_ErrorCodes__WEBPACK_IMPORTED_MODULE_2__["errorCodeString"])(_net_ErrorCodes__WEBPACK_IMPORTED_MODULE_2__["ErrorCodes"].BAD_DATA));
      break;}


  if (!this.error)
  this.frameEnd = this.stream.offset;
};

F2DProbe.prototype.probe = function () {
  var stream = this.stream;
  var error = false;

  try {
    while (stream.offset < stream.byteLength) {
      this.parseDataType();
      if (this.error) {
        break;
      }
      this.opCount++;
    }
  } catch (exc) {
    // Typically caused by out of bounds access of data.
    var message = exc.toString();
    var stack = exc.stack ? exc.stack.toString() : "...";

    // Don't panic with this - we are supposed to hit out of bounds a couple of times when probing.
    //debug("Error in F2DProbe.prototype.probe : " + message + " with stack : " + stack);
  }
};

/***/ }),

/***/ "./src/file-loaders/lmvtk/fusion/base64.js":
/*!*************************************************!*\
  !*** ./src/file-loaders/lmvtk/fusion/base64.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, global) {var __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) {if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {_typeof = function _typeof(obj) {return typeof obj;};} else {_typeof = function _typeof(obj) {return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;};}return _typeof(obj);} /*! https://mths.be/base64 v<%= version %> by @mathias | MIT license */
;(function (root) {

  // Detect free variables `exports`.
  var freeExports = ( false ? undefined : _typeof(exports)) == 'object' && exports;

  // Detect free variable `module`.
  var freeModule = ( false ? undefined : _typeof(module)) == 'object' && module &&
  module.exports == freeExports && module;

  // Detect free variable `global`, from Node.js or Browserified code, and use
  // it as `root`.
  var freeGlobal = (typeof global === "undefined" ? "undefined" : _typeof(global)) == 'object' && global;
  if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal) {
    root = freeGlobal;
  }

  /*--------------------------------------------------------------------------*/

  var InvalidCharacterError = function InvalidCharacterError(message) {
    this.message = message;
  };
  InvalidCharacterError.prototype = new Error();
  InvalidCharacterError.prototype.name = 'InvalidCharacterError';

  var error = function error(message) {
    // Note: the error messages used throughout this file match those used by
    // the native `atob`/`btoa` implementation in Chromium.
    throw new InvalidCharacterError(message);
  };

  var TABLE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
  // http://whatwg.org/html/common-microsyntaxes.html#space-character
  var REGEX_SPACE_CHARACTERS = /<%= spaceCharacters %>/g;

  // `decode` is designed to be fully compatible with `atob` as described in the
  // HTML Standard. http://whatwg.org/html/webappapis.html#dom-windowbase64-atob
  // The optimized base64-decoding algorithm used is based on @atk’s excellent
  // implementation. https://gist.github.com/atk/1020396
  var decode = function decode(input) {
    input = String(input).
    replace(REGEX_SPACE_CHARACTERS, '');
    var length = input.length;
    if (length % 4 == 0) {
      input = input.replace(/==?$/, '');
      length = input.length;
    }
    if (
    length % 4 == 1 ||
    // http://whatwg.org/C#alphanumeric-ascii-characters
    /[^+a-zA-Z0-9/]/.test(input))
    {
      error(
      'Invalid character: the string to be decoded is not correctly encoded.');

    }
    var bitCounter = 0;
    var bitStorage;
    var buffer;
    var output = '';
    var position = -1;
    while (++position < length) {
      buffer = TABLE.indexOf(input.charAt(position));
      bitStorage = bitCounter % 4 ? bitStorage * 64 + buffer : buffer;
      // Unless this is the first of a group of 4 characters…
      if (bitCounter++ % 4) {
        // …convert the first 8 bits to a single ASCII character.
        output += String.fromCharCode(
        0xFF & bitStorage >> (-2 * bitCounter & 6));

      }
    }
    return output;
  };

  // `encode` is designed to be fully compatible with `btoa` as described in the
  // HTML Standard: http://whatwg.org/html/webappapis.html#dom-windowbase64-btoa
  var encode = function encode(input) {
    input = String(input);
    if (/[^\0-\xFF]/.test(input)) {
      // Note: no need to special-case astral symbols here, as surrogates are
      // matched, and the input is supposed to only contain ASCII anyway.
      error(
      'The string to be encoded contains characters outside of the ' +
      'Latin1 range.');

    }
    var padding = input.length % 3;
    var output = '';
    var position = -1;
    var a;
    var b;
    var c;
    var d;
    var buffer;
    // Make sure any padding is handled outside of the loop.
    var length = input.length - padding;

    while (++position < length) {
      // Read three bytes, i.e. 24 bits.
      a = input.charCodeAt(position) << 16;
      b = input.charCodeAt(++position) << 8;
      c = input.charCodeAt(++position);
      buffer = a + b + c;
      // Turn the 24 bits into four chunks of 6 bits each, and append the
      // matching character for each of them to the output.
      output +=
      TABLE.charAt(buffer >> 18 & 0x3F) +
      TABLE.charAt(buffer >> 12 & 0x3F) +
      TABLE.charAt(buffer >> 6 & 0x3F) +
      TABLE.charAt(buffer & 0x3F);

    }

    if (padding == 2) {
      a = input.charCodeAt(position) << 8;
      b = input.charCodeAt(++position);
      buffer = a + b;
      output +=
      TABLE.charAt(buffer >> 10) +
      TABLE.charAt(buffer >> 4 & 0x3F) +
      TABLE.charAt(buffer << 2 & 0x3F) +
      '=';

    } else if (padding == 1) {
      buffer = input.charCodeAt(position);
      output +=
      TABLE.charAt(buffer >> 2) +
      TABLE.charAt(buffer << 4 & 0x3F) +
      '==';

    }

    return output;
  };

  var base64 = {
    'encode': encode,
    'decode': decode,
    'version': '<%= version %>' };


  // Some AMD build optimizers, like r.js, check for specific condition patterns
  // like the following:
  if (
  "function" == 'function' &&
  _typeof(__webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js")) == 'object' &&
  __webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js"))
  {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return base64;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (freeExports && !freeExports.nodeType) {
    if (freeModule) {// in Node.js or RingoJS v0.8.0+
      freeModule.exports = base64;
    } else {// in Narwhal or RingoJS v0.7.0-
      for (var key in base64) {
        base64.hasOwnProperty(key) && (freeExports[key] = base64[key]);
      }
    }
  } else {// in Rhino or a web browser
    root.base64 = base64;
  }

})(this);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module), __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/file-loaders/lmvtk/gltf/Gltf.js":
/*!*********************************************!*\
  !*** ./src/file-loaders/lmvtk/gltf/Gltf.js ***!
  \*********************************************/
/*! exports provided: GltfPackage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GltfPackage", function() { return GltfPackage; });
/* harmony import */ var _common_VbUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/VbUtils */ "./src/file-loaders/lmvtk/common/VbUtils.js");
/* harmony import */ var _wgs_scene_LmvVector3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../wgs/scene/LmvVector3 */ "./src/wgs/scene/LmvVector3.js");
/* harmony import */ var _wgs_scene_LmvBox3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../wgs/scene/LmvBox3 */ "./src/wgs/scene/LmvBox3.js");
/* harmony import */ var _wgs_scene_LmvMatrix4__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../wgs/scene/LmvMatrix4 */ "./src/wgs/scene/LmvMatrix4.js");
/* harmony import */ var _net_Xhr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../net/Xhr */ "./src/file-loaders/net/Xhr.js");
function _typeof(obj) {if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {_typeof = function _typeof(obj) {return typeof obj;};} else {_typeof = function _typeof(obj) {return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;};}return _typeof(obj);}





/*
                                                 * base64-arraybuffer
                                                 * https://github.com/niklasvh/base64-arraybuffer
                                                 *
                                                 * Copyright (c) 2012 Niklas von Hertzen
                                                 * Licensed under the MIT license.
                                                 */

var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

// Use a lookup table to find the index.
var lookup = new Uint8Array(256);
for (var i = 0; i < chars.length; i++) {
  lookup[chars.charCodeAt(i)] = i;
}

// currently base64_encode is not used.
/*
var base64_encode = function(arraybuffer) {
  var bytes = new Uint8Array(arraybuffer),
  i, len = bytes.length, base64 = "";
   for (i = 0; i < len; i+=3) {
    base64 += chars[bytes[i] >> 2];
    base64 += chars[((bytes[i] & 3) << 4) | (bytes[i + 1] >> 4)];
    base64 += chars[((bytes[i + 1] & 15) << 2) | (bytes[i + 2] >> 6)];
    base64 += chars[bytes[i + 2] & 63];
  }
   if ((len % 3) === 2) {
    base64 = base64.substring(0, base64.length - 1) + "=";
  } else if (len % 3 === 1) {
    base64 = base64.substring(0, base64.length - 2) + "==";
  }
   return base64;
};
*/




var base64_decode = function base64_decode(base64) {
  var bufferLength = base64.length * 0.75,
  len = base64.length,i,p = 0,
  encoded1,encoded2,encoded3,encoded4;

  if (base64[base64.length - 1] === "=") {
    bufferLength--;
    if (base64[base64.length - 2] === "=") {
      bufferLength--;
    }
  }

  var arraybuffer = new ArrayBuffer(bufferLength),
  bytes = new Uint8Array(arraybuffer);

  for (i = 0; i < len; i += 4) {
    encoded1 = lookup[base64.charCodeAt(i)];
    encoded2 = lookup[base64.charCodeAt(i + 1)];
    encoded3 = lookup[base64.charCodeAt(i + 2)];
    encoded4 = lookup[base64.charCodeAt(i + 3)];

    bytes[p++] = encoded1 << 2 | encoded2 >> 4;
    bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
    bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
  }

  return arraybuffer;
};


function blobToJson(blob) {

  var decodedString;

  if ((typeof TextDecoder === "undefined" ? "undefined" : _typeof(TextDecoder)) !== undefined) {
    decodedString = new TextDecoder("utf-8").decode(blob);
  } else
  {
    var encodedString = "";
    for (var i = 0; i < blob.length; i++) {
      encodedString += String.fromCharCode(blob[i]);}

    decodedString = decodeURIComponent(escape(encodedString));
  }

  return JSON.parse(decodedString);
}


function GltfPackage(gltfJson) {

  this.loadedBuffers = {};

  //Check for binary glTF (glb)
  if (gltfJson instanceof Uint8Array) {
    var header = new Int32Array(gltfJson.buffer, 0, 20);
    if (header[0] !== 0x46546C67) //['g', 'l', 'T', 'F'] in little endian
      debug("glb header " + header[0]);
    var sceneLength = header[3];

    var sceneBlob = new Uint8Array(gltfJson.buffer, 20, sceneLength);

    //TODO: this is a bit lame, copies a large part of the ArrayBuffer,
    //but the geometry parsing logic is made much easier this way, without
    //having to keep track of a base offset to add when creating buffer views.
    var binary_glTF = gltfJson.buffer.slice(20 + sceneLength);

    gltfJson = blobToJson(sceneBlob);

    this.loadedBuffers["binary_glTF"] = binary_glTF;
  }

  this.gltf = gltfJson;
  //NOTE: We will map the GltfPackage contents to a structure similar
  //to an SVF package so that the rendering engine and viewer can work with it.

  this.manifest = null;

  this.metadata = this.gltf.asset || {}; //metadata json
  this.metadata.gltf = this.metadata.version || 1;

  this.materials = this.gltfMaterials = {
    name: "GLTF Materials",
    version: "1.0",
    scene: {
      "SceneUnit": "m" },

    materials: {} };
  //The materials jsons from the GLTF, reindexed

  this.materialToIndex = {};
  this.materialList = [];

  this.geomToIndex = {};
  this.geomList = [];
  this.geomsLoaded = 0;

  this.fragments = {
    length: 0,
    numLoaded: 0,
    boxes: null,
    transforms: null,
    materials: null,

    fragId2dbId: null,
    entityIndexes: null,
    mesh2frag: {} };


  this.geompacks = [];

  this.instances = [];

  this.cameras = [];
  this.lights = [];

  this.bbox = null; //Overall scene bounds

  this.animations = null; // animations json

  this.pendingRequests = 0;

  this.globalOffset = { x: 0, y: 0, z: 0 };
  this.bbox = new _wgs_scene_LmvBox3__WEBPACK_IMPORTED_MODULE_2__["LmvBox3"]();

  this.nodeToDbId = {};
  this.nextDbId = 1;
  this.nextFragId = 0;

}


var BASE64_PREFIX = "data:application/octet-stream;base64,";

//Lists all dependent files, so that their paths can be converted
//to e.g. signed links by the manifest interceptor before they are loaded.
GltfPackage.prototype.loadManifest = function (loadContext) {

  var manifestTemplate = {
    "name": "LMV Manifest",
    "toolkitversion": "LMVTK 2.6.4",
    "manifestversion": 2,
    "adskID": {
      "sourceSystem": "",
      "type": "",
      "id": "",
      "version": "" },

    "assets": [],
    "typesets": [] };


  this.manifest = manifestTemplate;

  var buffers = this.gltf.buffers;

  for (var bid in buffers) {

    //Is it the embedded glb buffer? Skip it, it needs no URI remapping.
    if (bid === "binary_glTF")
    continue;

    var buffer = buffers[bid];

    //Base64 embedded buffers, decode
    //and store in loaded buffers array.
    if (buffer.uri.indexOf(BASE64_PREFIX) === 0) {
      this.loadedBuffers[bid] = base64_decode(buffer.uri.slice(BASE64_PREFIX.length));
      buffer.uri = "embed://" + bid;
      continue;
    }

    var asset = {
      id: bid,
      URI: buffer.uri,
      uri: buffer.uri,
      usize: buffer.byteLength,
      type: buffer.type };


    this.manifest.assets.push(asset);
  }

  var images = this.gltf.images;

  for (var iid in images) {

    var image = images[iid];

    var _asset = {
      id: iid,
      URI: image.uri,
      uri: image.uri,
      name: image.name,
      type: "image" //just so we can differentiate it from the geom buffers
    };

    this.manifest.assets.push(_asset);
  }

  //TODO: Process any other externally referenced assets that we want to support

};


GltfPackage.prototype.loadRemainingSvf = function (loadContext) {

  //In case it was modified by the path interceptor
  if (loadContext.manifest)
  this.manifest = loadContext.manifest;

  //It's more convenient to find assets by their ids
  //when dealing with gltf.
  this.manifest.assetMap = {};
  for (var i = 0; i < this.manifest.assets.length; i++) {
    var a = this.manifest.assets[i];
    this.manifest.assetMap[a.id] = a;
  }

  this.processMeshesList();
  this.processMaterialsList();

  this.deriveInstanceTree();

  loadContext.loadDoneCB("svf");

  //Call the callback for any buffers that were embedded in the gltf,
  //before loading the external ones.
  for (var b in this.loadedBuffers) {
    this.loadGeometry(loadContext, b);
  }

  this.loadBuffers(loadContext);

};

GltfPackage.prototype.loadBuffers = function (loadContext) {

  //Launch an XHR to load the data from external file
  var svf = this;

  var bufList = [];
  var assets = this.manifest.assets;
  for (var i = 0; i < assets.length; i++) {
    if (assets[i].type !== "image")
    bufList.push(assets[i]);
  }

  var currentRequest = -1;

  function xhrCB(responseData) {

    if (currentRequest < bufList.length - 1) {
      var nextBuf = bufList[currentRequest + 1];

      var options = {
        responseType: nextBuf.type || 'arraybuffer' };


      _net_Xhr__WEBPACK_IMPORTED_MODULE_4__["ViewingService"].getItem(
      loadContext,
      loadContext.basePath + nextBuf.URI,
      xhrCB,
      loadContext.onFailureCallback,
      options);

    }

    if (responseData) {
      var curBuf = bufList[currentRequest];
      svf.loadedBuffers[curBuf.id] = responseData.buffer; //Get the ArrayBuffer out of the Uint8Array returned by the ViewingService.getItem
      svf.loadGeometry(loadContext, curBuf.id);
    }

    currentRequest++;

  }

  xhrCB(null);

};

var COMPONENT_TO_BYTES = {
  "5120": 1, //BYTE
  "5121": 1, //UNSIGNED_BYTE
  "5122": 2, //SHORT
  "5123": 2, //UNSIGNED_SHORT
  "5124": 4, //INT
  "5125": 4, //UNSIGNED_INT
  "5126": 4 //FLOAT
};

var TYPE_TO_SIZE = {
  "SCALAR": 1,
  "VEC2": 2,
  "VEC3": 3,
  "VEC4": 4 };



var _tmpfbuf = new Float32Array(1);
var _tmpbbuf = new Uint8Array(_tmpfbuf.buffer);

function extractFloat(bbuf, offset) {
  _tmpbbuf[0] = bbuf[offset];
  _tmpbbuf[1] = bbuf[offset + 1];
  _tmpbbuf[2] = bbuf[offset + 2];
  _tmpbbuf[3] = bbuf[offset + 3];
  return _tmpfbuf[0];
}

//Constructs all meshes that use the buffer
//that was just loaded
//NOTE: This loader pulls out all attributes for a mesh from a possibly
//large shared buffer and interleaves them into a per-mesh vertex buffer
//for each mesh. This fits better with the architecture of the LMV renderer
//right now. But, in the future, things could be refactored so that the GL
//buffers are managed separately from the meshes, and the meshes are pointing
//into larger shared buffers.
GltfPackage.prototype.loadGeometry = function (loadContext, bufferId) {

  var buffer = this.gltf.buffers[bufferId];
  var meshIds = buffer.meshes;
  var scope = this;

  function checkIfBufferAvailable(accessorId) {
    var accessor = scope.gltf.accessors[accessorId];
    var bvId = accessor.bufferView;
    if (bvId) {
      var bufferId = scope.gltf.bufferViews[bvId].buffer;
      if (bufferId) {
        return !!scope.loadedBuffers[bufferId];
      }
    }
    return false;
  }

  for (var meshIdx = 0; meshIdx < meshIds.length; meshIdx++) {

    var mesh = this.gltf.meshes[meshIds[meshIdx]];
    var prims = mesh.primitives;

    var usePackedNormals = typeof loadContext.packNormals !== "undefined" ? loadContext.packNormals : true;

    for (var primIdx = 0; primIdx < prims.length; primIdx++) {

      var prim = prims[primIdx];

      var mesh = {
        vblayout: {},
        vbstride: 0,
        packedNormals: usePackedNormals };


      var canLoad = true;
      if (prim.indices) {
        canLoad = canLoad && checkIfBufferAvailable(prim.indices);
        if (canLoad) {
          var inds = scope.gltf.accessors[prim.indices];
          mesh.triangleCount = inds.count / 3;
          var stride = inds.byteStride;
          var componentSize = 2;

          var bv = scope.gltf.bufferViews[inds.bufferView];
          var byteOffset = inds.byteOffset + bv.byteOffset;
          var buffer = scope.loadedBuffers[bv.buffer];
          var src, dst;

          if (inds.componentType === 5123) {
            dst = mesh.indices = new Uint16Array(inds.count);
            componentSize = 2;
            src = new Uint16Array(buffer);
          } else
          if (inds.componentType === 5125) {
            dst = mesh.indices = new Uint32Array(inds.count);
            componentSize = 4;
            src = new Uint32Array(buffer);
          } else
            // other unimplemented types
            debug("Unimplemented component type for index buffer");

          var srcOffset = byteOffset / componentSize;

          if (stride === 0)
          stride = 1;else

          stride /= componentSize;

          for (var i = 0; i < inds.count; i++) {
            dst[i] = src[srcOffset + i * stride];
          }
        }
      }

      var offset = 0;
      for (var a in prim.attributes) {
        canLoad = canLoad && checkIfBufferAvailable(prim.attributes[a]);
        var attr = scope.gltf.accessors[prim.attributes[a]];

        if (canLoad) {
          if (a === "NORMAL") {
            mesh.vbstride += usePackedNormals ? 1 : 3;

            mesh.vblayout['normal'] = { offset: offset,
              itemSize: usePackedNormals ? 2 : 3,
              bytesPerItem: usePackedNormals ? 2 : 4,
              normalize: usePackedNormals };

            offset += usePackedNormals ? 1 : 3;

          } else
          {
            var attrName = a;

            if (a === "POSITION") {
              attrName = "position";
              mesh.vertexCount = attr.count;
            } else if (a.indexOf("TEXCOORD") === 0) {
              var uvIdx = parseInt(a.split("_")[1]);
              attrName = "uv" + (uvIdx || "");
            } else if (a.indexOf("COLOR") === 0) {
              attrName = "color";
            }

            var byteSize = COMPONENT_TO_BYTES[attr.componentType] * TYPE_TO_SIZE[attr.type];
            mesh.vbstride += byteSize / 4;

            mesh.vblayout[attrName] = { offset: offset,
              itemSize: TYPE_TO_SIZE[attr.type],
              bytesPerItem: COMPONENT_TO_BYTES[attr.componentType],
              normalize: false };


            offset += byteSize / 4;
          }
        }

      }

      //Now that we know how big of a vertex buffer we need, make one, and
      //go over the attributes again to copy their data from the glTF buffer
      //into the mesh vertex buffer
      if (canLoad) {
        var vbf = mesh.vb = new Float32Array(mesh.vertexCount * mesh.vbstride);
        //See if we want to pack the normals into two shorts
        var vbi;
        if (usePackedNormals)
        vbi = new Uint16Array(mesh.vb.buffer);

        for (var a in prim.attributes) {
          var attr = scope.gltf.accessors[prim.attributes[a]];
          var bv = scope.gltf.bufferViews[attr.bufferView];
          var byteOffset = attr.byteOffset + bv.byteOffset;
          var rawbuffer = new Uint8Array(scope.loadedBuffers[bv.buffer]);

          if (a === "NORMAL") {
            var lmvAttr = mesh.vblayout["normal"];

            if (attr.count != mesh.vertexCount)
            debug("Normals count does not equal vertex count");

            //TODO: assumption that they're all floats...
            var stride = attr.byteStride !== 0 ? attr.byteStride : bytesPerItem * TYPE_TO_SIZE[attr.type];
            var srcIdx = byteOffset;
            var offset = lmvAttr.offset;

            for (var i = 0; i < mesh.vertexCount; i++, offset += mesh.vbstride) {
              var nx = extractFloat(rawbuffer, srcIdx);
              var ny = extractFloat(rawbuffer, srcIdx + 4);
              var nz = extractFloat(rawbuffer, srcIdx + 8);

              if (vbi) {
                var pnx = (Math.atan2(ny, nx) / Math.PI + 1.0) * 0.5;
                var pny = (nz + 1.0) * 0.5;

                vbi[offset * 2] = pnx * 65535 | 0;
                vbi[offset * 2 + 1] = pny * 65535 | 0;
              } else {
                vbf[offset] = nx;
                vbf[offset + 1] = ny;
                vbf[offset + 2] = nz;
              }

              srcIdx += stride;
            }
          } else
          {
            var attrName = a;

            //Map common attribute names to ones used by LMV
            if (a === "POSITION") {
              attrName = "position";
              mesh.vertexCount = attr.count;
            } else if (a.indexOf("TEXCOORD") === 0) {
              var uvIdx = parseInt(a.split("_")[1]);
              attrName = "uv" + (uvIdx || "");
            } else if (a.indexOf("COLOR") === 0) {
              attrName = "color";
            }

            var lmvAttr = mesh.vblayout[attrName];

            var bytesPerItem = COMPONENT_TO_BYTES[attr.componentType];
            var stride = attr.byteStride !== 0 ? attr.byteStride : bytesPerItem * TYPE_TO_SIZE[attr.type];
            var src = new Uint8Array(rawbuffer);
            var dst = new Uint8Array(vbf.buffer, lmvAttr.offset * 4);
            var srcIdx = byteOffset;
            var offset = 0;
            for (var i = 0; i < mesh.vertexCount; i++) {

              for (var j = 0; j < lmvAttr.itemSize * bytesPerItem; j++) {
                dst[offset + j] = src[srcIdx + j];
              }

              offset += mesh.vbstride * bytesPerItem;
              srcIdx += stride;
            }
          }

          //If all meshes using this buffer are successfully loaded,
          //free its array buffer from memory.
          var gltfBuffer = scope.gltf.buffers[bv.buffer];
          gltfBuffer.refCount--;
          if (gltfBuffer.refCount === 0) {
            delete scope.loadedBuffers[bv.buffer];
          }
        }

        //Mesh is complete.
        scope.geomsLoaded++;

        _common_VbUtils__WEBPACK_IMPORTED_MODULE_0__["VBUtils"].computeBounds3D(mesh);

        loadContext.loadDoneCB("mesh", { mesh: mesh,

          //Set these so that when SvfLoader adds them together
          //it comes up with the IDs we use in the meshToFrag map.
          packId: meshIds[meshIdx],
          meshIndex: primIdx,

          progress: scope.geomsLoaded / scope.geomList.length });
      }
    }

  }

  buffer.meshes = null;

};

//Converts materials to indexed list, for use in
//the fragment list material indices array
GltfPackage.prototype.processMaterialsList = function () {

  var mats = this.gltf.materials;

  for (var m in mats) {
    var idx = this.materialList.length;
    this.materialToIndex[m] = idx;
    this.gltfMaterials.materials[idx] = mats[m];
    this.materialList.push(m);
  }

};

GltfPackage.prototype.processMeshesList = function () {

  var meshes = this.gltf.meshes;
  var scope = this;

  function processAccessor(accessorId) {
    var accessor = scope.gltf.accessors[accessorId];
    var bvId = accessor.bufferView;
    if (bvId) {
      var bufferId = scope.gltf.bufferViews[bvId].buffer;
      if (bufferId) {
        var buffer = scope.gltf.buffers[bufferId];

        //Keep track of how many buffer views are using this buffer.
        //Once we load all of them, we will free it from memory
        if (!buffer.refCount)
        buffer.refCount = 1;else

        buffer.refCount++;

        //Keep track of meshes using a buffer. We will load those
        //in a batch once a buffer file is loaded.
        if (!buffer.meshes)
        buffer.meshes = [];

        if (!addedToBuffer) {
          buffer.meshes.push(m);
          addedToBuffer = true;
        }
      }
    }
  }

  for (var m in meshes) {
    var mesh = meshes[m];
    var addedToBuffer = false;
    for (var k = 0; k < mesh.primitives.length; k++) {
      var entityId = m + ":" + k;
      this.geomToIndex[entityId] = this.geomList.length;
      this.geomList.push(entityId);

      var prim = mesh.primitives[k];

      if (prim.indices) {
        processAccessor(prim.indices);
      }

      for (var a in prim.attributes) {
        processAccessor(prim.attributes[a]);
      }
    }
  }

  this.numGeoms = this.geomList.length;
};


//Pre-traversal of the node hierarchy to count how many fragments we will
//need in the LMV fragment list
GltfPackage.prototype.countFragments = function () {

  var sceneName = this.gltf.scene;
  var gltfRoot = this.gltf.scenes[sceneName];
  var gltfNodes = this.gltf.nodes;

  var numFrags = 0;

  var scope = this;

  function traverseNodes(gltfNode) {

    var meshes = gltfNode.meshes;
    if (gltfNode.meshes) {
      for (var j = 0; j < meshes.length; j++) {
        var prims = scope.gltf.meshes[meshes[j]].primitives;
        for (var k = 0; k < prims.length; k++) {
          numFrags++;
        }
      }
    }

    var children = gltfNode.children || gltfNode.nodes; //the root scene uses "nodes" instead of "children"
    if (children) {
      for (var i = 0; i < children.length; i++) {
        var gltfChild = gltfNodes[children[i]];
        traverseNodes(gltfChild);
      }
    }
  }

  traverseNodes(gltfRoot);

  this.fragments.length = numFrags;
  this.fragments.boxes = new Float32Array(6 * numFrags);
  this.fragments.transforms = new Float32Array(12 * numFrags);
  this.fragments.materials = new Int32Array(numFrags);
  this.fragments.entityIndexes = new Int32Array(numFrags);
  this.fragments.fragId2dbId = new Int32Array(numFrags);
  this.fragments.packIds = new Int32Array(numFrags); //TODO: not used for gltf

};

//Create an instance tree similar to the one
//that SVF gets from the property db
GltfPackage.prototype.deriveInstanceTree = function () {

  this.countFragments();

  var sceneName = this.gltf.scene;
  var gltfRoot = this.gltf.scenes[sceneName];
  var gltfNodes = this.gltf.nodes;

  this.instanceTree = {
    name: sceneName,
    dbId: this.nextDbId++,
    children: [] };

  this.nodeToDbId[sceneName] = this.instanceTree.dbId;

  var nodeBoxes = [];
  var maxDepth = 1;

  var scope = this;
  var fragments = this.fragments;
  var tmpBox = new _wgs_scene_LmvBox3__WEBPACK_IMPORTED_MODULE_2__["LmvBox3"]();

  function traverseNodes(svfNode, gltfNode, worldTransform, depth) {

    if (depth > maxDepth)
    maxDepth = depth;

    var currentTransform = worldTransform.clone();
    // nodes can have a matrix transform, or a TRS type transform
    if (gltfNode.matrix) {
      var mtx = new _wgs_scene_LmvMatrix4__WEBPACK_IMPORTED_MODULE_3__["LmvMatrix4"](true);
      mtx.fromArray(gltfNode.matrix);
      currentTransform.multiply(mtx);
    } else
    {
      var t = gltfNode.translation;
      var r = gltfNode.rotation;
      var s = gltfNode.scale;

      // if none are defined, don't bother making the matrix -
      // this may be a non-matrix-oriented node
      if (t !== undefined || r !== undefined || s !== undefined) {

        // Rotations are stored as quaternions in glTF. Here is a quick and dirty quaternion class.
        // It's purely for storing the incoming data. We need this below to call the matrix.compose function.
        // Feel free to make a whole separate LmvQuaternion.js file if you're doing serious quaternion work.
        var Quat = function Quat(x, y, z, w) {

          this.x = x || 0;
          this.y = y || 0;
          this.z = z || 0;
          this.w = w || 0;

        };

        var position = t ? new _wgs_scene_LmvVector3__WEBPACK_IMPORTED_MODULE_1__["LmvVector3"](t[0], t[1], t[2]) :
        new _wgs_scene_LmvVector3__WEBPACK_IMPORTED_MODULE_1__["LmvVector3"]();
        var rotation = r ? new Quat(r[0], r[1], r[2], r[3]) :
        new Quat();
        var scale = s ? new _wgs_scene_LmvVector3__WEBPACK_IMPORTED_MODULE_1__["LmvVector3"](s[0], s[1], s[2]) :
        new _wgs_scene_LmvVector3__WEBPACK_IMPORTED_MODULE_1__["LmvVector3"](1, 1, 1);

        var mtx = new _wgs_scene_LmvMatrix4__WEBPACK_IMPORTED_MODULE_3__["LmvMatrix4"](true);
        mtx.compose(position, rotation, scale);
        currentTransform.multiply(mtx);
      }
    }

    var nodeBox = new _wgs_scene_LmvBox3__WEBPACK_IMPORTED_MODULE_2__["LmvBox3"]();

    var meshes = gltfNode.meshes;
    if (gltfNode.meshes) {
      svfNode.fragIds = [];
      for (var j = 0; j < meshes.length; j++) {
        var prims = scope.gltf.meshes[meshes[j]].primitives;
        for (var k = 0; k < prims.length; k++) {

          var entityId = meshes[j] + ":" + k;
          var fragId = scope.nextFragId++;

          svfNode.fragIds.push(fragId);

          fragments.fragId2dbId[fragId] = svfNode.dbId;

          fragments.entityIndexes[fragId] = scope.geomToIndex[entityId];

          if (!fragments.mesh2frag[entityId])
          fragments.mesh2frag[entityId] = [fragId];else

          fragments.mesh2frag[entityId].push(fragId);

          fragments.materials[fragId] = scope.materialToIndex[prims[k].material];

          // Copy the transform to the fraglist array
          var off = fragId * 12;
          var cur = currentTransform.elements;
          var orig = fragments.transforms;
          orig[off] = cur[0];
          orig[off + 1] = cur[1];
          orig[off + 2] = cur[2];
          orig[off + 3] = cur[4];
          orig[off + 4] = cur[5];
          orig[off + 5] = cur[6];
          orig[off + 6] = cur[8];
          orig[off + 7] = cur[9];
          orig[off + 8] = cur[10];
          orig[off + 9] = cur[12];
          orig[off + 10] = cur[13];
          orig[off + 11] = cur[14];

          var posAccessorId = prims[k].attributes["POSITION"];
          if (posAccessorId) {
            var accessor = scope.gltf.accessors[posAccessorId];
            if (accessor.min && accessor.max) {
              tmpBox.min.x = accessor.min[0];
              tmpBox.min.y = accessor.min[1];
              tmpBox.min.z = accessor.min[2];
              tmpBox.max.x = accessor.max[0];
              tmpBox.max.y = accessor.max[1];
              tmpBox.max.z = accessor.max[2];

            } else {

              tmpBox.min.x = -0.5;
              tmpBox.min.y = -0.5;
              tmpBox.min.z = -0.5;
              tmpBox.max.x = 0.5;
              tmpBox.max.y = 0.5;
              tmpBox.max.z = 0.5;

              debug("unknown bbox for mesh, using unit box", meshes[j]);
            }

            tmpBox.applyMatrix4(currentTransform);

            off = fragId * 6;
            var dst = fragments.boxes;
            dst[off] = tmpBox.min.x;
            dst[off + 1] = tmpBox.min.y;
            dst[off + 2] = tmpBox.min.z;

            dst[off + 3] = tmpBox.max.x;
            dst[off + 4] = tmpBox.max.y;
            dst[off + 5] = tmpBox.max.z;

            nodeBox.union(tmpBox);
          }
        }
      }
    }

    var children = gltfNode.children || gltfNode.nodes; //the root scene uses "nodes" instead of "children"
    if (children) {
      svfNode.children = [];
      for (var i = 0; i < children.length; i++) {
        var gltfChild = gltfNodes[children[i]];

        var svfChild = {
          name: gltfChild.name || children[i],
          dbId: scope.nextDbId++ };


        scope.nodeToDbId[children[i]] = svfChild.dbId;

        svfNode.children.push(svfChild);

        var childBox = traverseNodes(svfChild, gltfChild, currentTransform, depth + 1);
        nodeBox.union(childBox);
      }
    }

    var boxOffset = svfNode.dbId * 6;
    var dst = nodeBoxes;
    dst[boxOffset] = nodeBox.min.x;
    dst[boxOffset + 1] = nodeBox.min.y;
    dst[boxOffset + 2] = nodeBox.min.z;
    dst[boxOffset + 3] = nodeBox.max.x;
    dst[boxOffset + 4] = nodeBox.max.y;
    dst[boxOffset + 5] = nodeBox.max.z;

    return nodeBox;
  }

  var rootBox = traverseNodes(this.instanceTree, gltfRoot, new _wgs_scene_LmvMatrix4__WEBPACK_IMPORTED_MODULE_3__["LmvMatrix4"](true), 1);
  scope.bbox.union(rootBox);

  //convert boxes to typed array now that we know the needed size
  this.instanceBoxes = new Float32Array(nodeBoxes.length);
  this.instanceBoxes.set(nodeBoxes);
  this.objectCount = this.nextDbId;
  this.maxTreeDepth = maxDepth;
};

/***/ }),

/***/ "./src/file-loaders/lmvtk/otg/HashStrings.js":
/*!***************************************************!*\
  !*** ./src/file-loaders/lmvtk/otg/HashStrings.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var TO_HEX = new Array(256);
for (var i = 0; i < 256; i++) {
  var s = i.toString(16);
  if (s.length === 1)
  s = "0" + s;
  TO_HEX[i] = s;
}

//Most common case is for SHA1 hashes, which are 20 bytes
var tmpArr20 = new Array(20);

function getHexString(buffer, offset, length) {
  var res = length === 20 ? tmpArr20 : [];

  for (var i = 0; i < length; i++) {
    var b = buffer[offset + i];
    var s = TO_HEX[b];
    res[i] = s;
  }

  return res.join("");
}

var tmpArr10 = new Array(10);

//Converts the input byte array into a string of half the length
//by packing two bytes into each string character (JS strings are two bytes per char)
function getHexStringPacked(buffer, offset, length) {
  var res = length === 20 ? tmpArr10 : [];

  for (var i = 0; i < length; i += 2) {
    var b0 = buffer[offset + i];
    var b1 = buffer[offset + i + 1];
    res[i / 2] = b1 << 8 | b0;
  }

  return String.fromCharCode.apply(null, res);
}

//Converts from UCS16 packed string (two bytes per character) to
//regular ASCII string of 4x the length
function unpackHexString(s) {
  var res = s.length === 10 ? tmpArr20 : [];

  for (var i = 0; i < s.length; i++) {
    var bytes = s.charCodeAt(i);
    res[2 * i] = TO_HEX[bytes & 0xff];
    res[2 * i + 1] = TO_HEX[bytes >> 8 & 0xff];
  }

  return res.join("");
}


function hexToDec(code) {
  //0-9
  if (code >= 48 && code <= 57) {
    return code - 48;
  }
  //A-F
  if (code >= 65 && code <= 70) {
    return code - 55;
  }
  //a-f
  if (code >= 97 && code <= 102) {
    return code - 87;
  }

  return 0;
}

//Convert string in hex format, e.g. "3498572abc" to binary
function hexToBin(str, buf, offset) {

  //TODO: Add utility function that goes directly from packed to bin,
  //instead of unopack, then convert to bin
  var s = str.length === 10 ? unpackHexString(str) : str;

  var j = offset;
  for (var _i = 0; _i < s.length; _i += 2) {
    var d1 = hexToDec(s.charCodeAt(_i));
    var d2 = hexToDec(s.charCodeAt(_i + 1));
    buf[j++] = d1 << 4 | d2;
  }
}

module.exports = {
  //getHexString,
  getHexStringPacked: getHexStringPacked,
  unpackHexString: unpackHexString,
  hexToBin: hexToBin };

/***/ }),

/***/ "./src/file-loaders/lmvtk/otg/LocalDbCache.js":
/*!****************************************************!*\
  !*** ./src/file-loaders/lmvtk/otg/LocalDbCache.js ***!
  \****************************************************/
/*! exports provided: LocalDbCache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalDbCache", function() { return LocalDbCache; });
/* harmony import */ var _common_StringUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/StringUtils */ "./src/file-loaders/lmvtk/common/StringUtils.js");
/* harmony import */ var _compat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../compat */ "./src/compat.js");
function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}



var pako = __webpack_require__(/*! pako */ "./node_modules/pako/index.js");

//All object stores go into this database
var DB_NAME = "otg";

var CONTENT_STORE = "otg-content";
var CONTENT_STORE_LRU = "otg-lru";


var LocalDbCache = /*#__PURE__*/function () {

  function LocalDbCache(forceDisabled) {_classCallCheck(this, LocalDbCache);
    this.db = null;
    this.readTransaction = null;
    this.loaded = false;
    this.opening = false;

    this.dbDisabled = forceDisabled || Object(_compat__WEBPACK_IMPORTED_MODULE_1__["isNodeJS"])() || Object(_compat__WEBPACK_IMPORTED_MODULE_1__["isSafari"])() || Object(_compat__WEBPACK_IMPORTED_MODULE_1__["isMobileDevice"])() || Object(_compat__WEBPACK_IMPORTED_MODULE_1__["isNodeJS"])() || typeof indexedDB === "undefined";
    if (!Object(_compat__WEBPACK_IMPORTED_MODULE_1__["isNodeJS"])() && this.dbDisabled) {
      console.log("IndexedDb disabled");
    }

    this.storeName = CONTENT_STORE;
    this.storeNameTimestamp = CONTENT_STORE_LRU;
    this.bothStoreNames = [this.storeName, this.storeNameTimestamp];

    this.useCompression = true;
    this.pendingTimestampUpdates = {};
    this.pendingTimestampCount = 0;

    this.pendingStores = [];

    this._pendingCallbacks = [];
  }_createClass(LocalDbCache, [{ key: "notifyPendingCallbacks", value: function notifyPendingCallbacks(

    error) {var _this = this;
      this._pendingCallbacks.forEach(function (cb) {return cb(error, _this.db);});
      this._pendingCallbacks = [];
    } }, { key: "open", value: function open(

    cb) {var _this2 = this;

      //Disable on Safari until we figure out why performance is terrible.
      //Disbale on Node.js because we don't need to cache locally on the server side
      //Disable on Mobile until we decide if we want the performance hit there.
      if (this.dbDisabled) {
        cb && cb();
        return;
      }

      //Call back immediately if we are already open
      if (this.loaded) {
        cb && cb(null, this.db);
        return;
      }

      //Delay callback if we are still waiting to open.
      if (this.opening) {
        cb && this._pendingCallbacks.push(cb);
        return;
      }

      this.opening = true;

      //Open the IndexedDb database connection
      var request = indexedDB.open(DB_NAME, 1);

      request.onerror = function (event) {
        console.error("Failed to open or create cache database.");
        _this2.dbDisabled = true;
        _this2.notifyPendingCallbacks(event);
      };
      request.onsuccess = function (event) {

        _this2.opening = false;
        _this2.db = event.target.result;

        _this2.db.onerror = function (event) {
          console.error("Database error", event);
        };

        _this2.loaded = true;
        _this2.notifyPendingCallbacks();

        /*
                                         this.size((err, data) => {
                                             console.log(data);
                                         });
                                         */
      };

      request.onupgradeneeded = function (event) {

        console.log("Db upgrade", _this2.storeName);

        // Save the IDBDatabase interface
        var db = event.target.result;

        // Create the database schema
        db.createObjectStore(CONTENT_STORE);
        var os = db.createObjectStore(CONTENT_STORE_LRU);
        os.createIndex(CONTENT_STORE_LRU + "-index", "t", { unique: false });
      };
    } }, { key: "deleteOld", value: function deleteOld(


    callback) {var _this3 = this;

      if (!this.db) {
        callback();
        return;
      }

      if (this.deleteInProgress)
      return;

      this.deleteInProgress = true;

      var howMany = 200;

      //Avoid deleting stuff that was last used a short while ago, by using a range query
      var upperBoundOpenKeyRange = IDBKeyRange.upperBound(Date.now() - 300 * 1000, true);

      var hashes = [];

      var objectStore = this.db.transaction([this.storeNameTimestamp] /*, "readwrite"*/).objectStore(this.storeNameTimestamp);

      var index = objectStore.index(this.storeNameTimestamp + "-index");

      index.openCursor(upperBoundOpenKeyRange).onsuccess = function (event) {
        var cursor = event.target.result;
        if (cursor && hashes.length < howMany) {
          hashes.push(cursor.primaryKey);
          cursor.continue();
          return;
        }

        if (hashes.length) {

          console.log("Deleting old objects.", hashes.length);

          var transaction = _this3.db.transaction(_this3.bothStoreNames, "readwrite");

          transaction.oncomplete = function (event) {
            _this3.deleteInProgress = false;
            console.log("Delete done");
            callback && callback();
          };

          transaction.onerror = function (event) {
            _this3.deleteInProgress = false;
            console.error("Transaction error.", event);
          };

          transaction.onabort = function (event) {
            _this3.deleteInProgress = false;
            var error = event.target.error; // DOMError
            console.log("Failed to delete cached objects", error);
          };

          var objectStoreMain = transaction.objectStore(_this3.storeName);
          var objectStoreTimestamp = transaction.objectStore(_this3.storeNameTimestamp);

          for (var i = 0; i < hashes.length; i++) {
            objectStoreMain.delete(hashes[i]);
            objectStoreTimestamp.delete(hashes[i]);
          }

        }
      };



    } }, { key: "flush", value: function flush(


    cb) {var _this4 = this;

      if (!this.pendingStores.length) {
        cb && cb();
        return;
      }

      if (!this.writeTransaction) {

        var transaction = this.db.transaction(this.bothStoreNames, "readwrite");

        if (cb) {
          transaction.oncomplete = function (event) {
            //console.log("Transaction complete");
            cb();
          };
        }

        transaction.onerror = function (event) {
          console.error("Transaction error.", event);
          cb && cb(event.target.error);
        };

        transaction.onabort = function (event) {
          var error = event.target.error; // DOMError
          if (error.name === 'QuotaExceededError') {
            //console.log("Quota exceeded");
            _this4.deleteOld(function () {});

          }
          cb && cb(event.target.error);
        };

        this.writeTransaction = transaction;
      }

      for (var i = 0; i < this.pendingStores.length; i += 2) {

        var hash = this.pendingStores[i];
        var data = this.pendingStores[i + 1];

        if (data instanceof Uint8Array && this.useCompression) {
          if (data[0] === 31 && data[1] === 139) {
            //already compressed
          } else {
            //let before = data.length;
            try {
              data = pako.gzip(data);
            } catch (e) {
              console.error("Compression failed.");
            }
            //let after = data.length;
            //console.log(before/after, "x");
          }
        }

        var objectStore = this.writeTransaction.objectStore(this.storeName);

        var storeBlob = objectStore.put(data, hash);

        storeBlob.onerror = function (event) {
          console.error("Object store error.", event);
        };

        var timestampStore = this.writeTransaction.objectStore(this.storeNameTimestamp);
        timestampStore.put({ t: Date.now() }, hash);

      }

      this.pendingStores = [];

      //TODO: reuse this transaction for longer
      this.writeTransaction = null;
    } }, { key: "store", value: function store(


    hash, data, cb) {

      if (!this.db) {
        cb && cb();
        return;
      }

      this.pendingStores.push(hash);
      this.pendingStores.push(data);

      if (this.pendingStores.length < 200) {
        cb && cb();
        return;
      }

      this.flush(cb);
    } }, { key: "flushTimestamps", value: function flushTimestamps(


    cb) {var _this5 = this;

      var transaction = this.db.transaction([this.storeNameTimestamp], "readwrite");

      if (cb) {
        transaction.oncomplete = function (event) {
          //console.log("Transaction complete");
          cb();
        };
      }

      transaction.onerror = function (event) {
        console.error("Transaction error.", event);
        cb && cb(event.target.error);
      };

      transaction.onabort = function (event) {
        var error = event.target.error; // DOMError
        if (error.name === 'QuotaExceededError') {
          console.log("Quota exceeded");
          _this5.deleteOld(function () {});
        }
        cb && cb(event.target.error);
      };


      var timestampStore = transaction.objectStore(this.storeNameTimestamp);

      for (var hash in this.pendingTimestampUpdates) {
        timestampStore.put({ t: this.pendingTimestampUpdates[hash] }, hash);
      }

      this.pendingTimestampUpdates = {};
      this.pendingTimestampCount = 0;
    } }, { key: "_createReadTransaction", value: function _createReadTransaction()

    {var _this6 = this;
      //We try to keep the read transaction alive by reusing it
      //for all new requests. If they come fast enough, the transaction
      //will stay alive. If it completes, we will create a new one.
      var transaction = this.readTransaction = this.db.transaction(this.storeName);

      transaction.oncomplete = function (event) {
        _this6.readTransaction = null;
      };
      transaction.onerror = function (event) {
        console.error("Transaction error.", comment, event);
        _this6.readTransaction = null;
      };
      transaction.onabort = function (event) {
        console.warn("Transaction abort", comment, event);
        _this6.readTransaction = null;
      };
    } }, { key: "get", value: function get(

    hash, cb) {var _this7 = this;

      if (this.opening) {
        console.error("Tried to get IndexedDb resource while database was still opening");
        cb(-1, null);
        return;
      }

      if (!this.db) {
        cb(-1, null);
        return;
      }

      //We try to reuse the same read transaction for as long as it will let us
      if (!this.readTransaction) {
        this._createReadTransaction();
      }

      var req;
      //This can fail if the transaction has gone inactive
      try {
        req = this.readTransaction.objectStore(this.storeName).get(hash);
      } catch (e) {
        this._createReadTransaction();
        req = this.readTransaction.objectStore(this.storeName).get(hash);
      }

      req.onsuccess = function (event) {

        //Somehow we sometimes end up getting null for an existing key
        //so we force reload
        if (!event.target.result) {
          cb(-1, null);
          return;
        }


        var data = event.target.result;

        if (data[0] === 31 && data[1] === 139) {
          try {
            data = pako.ungzip(data);
          } catch (e) {
            console.error("Failed to decompress.", e);
            cb(e, null);
            return;
          }
        }

        cb(null, data);

        //Remember the new timestamp for this hash, but don't update
        //it in the mru table immediately, to avoid slowing down model load
        //with a write transaction.
        _this7.pendingTimestampUpdates[hash] = Date.now();
        _this7.pendingTimestampCount++;
      };

      req.onerror = function (event) {
        cb(event.target.errorCode);
      };

    } }, { key: "updatePendingTimestamps", value: function updatePendingTimestamps()


    {var _this8 = this;

      if (!this.db)
      return;

      this.flush(function (err) {
        //console.log("Updating all timestamps");

        if (err) {
          return;
        }

        _this8.flushTimestamps();

      });

    } }, { key: "size", value: function size(

    callback) {
      if (!this.db) {
        callback();
        return;
      }

      var size = 0;
      var items = 0;

      var transaction = this.db.transaction([this.storeName]).
      objectStore(this.storeName).
      openCursor();

      transaction.onsuccess = function (event) {
        var cursor = event.target.result;
        if (cursor) {
          var storedObject = cursor.value;
          size += storedObject.length;
          items++;
          cursor.continue();
        } else
        {
          callback(null, { size: size, items: items });
        }
      };

      transaction.onerror = function (err) {
        callback(err);
      };
    } }]);return LocalDbCache;}();

/***/ }),

/***/ "./src/file-loaders/lmvtk/otg/OtgFragInfo.js":
/*!***************************************************!*\
  !*** ./src/file-loaders/lmvtk/otg/OtgFragInfo.js ***!
  \***************************************************/
/*! exports provided: OtgFragInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtgFragInfo", function() { return OtgFragInfo; });
/* harmony import */ var _wgs_scene_LmvBox3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../wgs/scene/LmvBox3 */ "./src/wgs/scene/LmvBox3.js");


function setFromArray(array, offset) {

  this.min.x = array[offset];
  this.min.y = array[offset + 1];
  this.min.z = array[offset + 2];

  this.max.x = array[offset + 3];
  this.max.y = array[offset + 4];
  this.max.z = array[offset + 5];
}

function copyToArray(array, offset) {

  array[offset] = this.min.x;
  array[offset + 1] = this.min.y;
  array[offset + 2] = this.min.z;

  array[offset + 3] = this.max.x;
  array[offset + 4] = this.max.y;
  array[offset + 5] = this.max.z;
}

//Overload of the default FragInfo, used with OTG-specific fragments_extra data file
//to initialize the BVH spatial index.
function OtgFragInfo(data, loadContext) {

  var byteStride = data[1] << 8 | data[0];
  //var version = data[3] << 8 | data[2];

  if (!byteStride)
  byteStride = 7 * 4;

  this.boxStride = byteStride / 4;
  this.count = data.byteLength / byteStride - 1;

  //Global offset set by the viewer loader client
  var globalOffset = loadContext.globalOffset || { x: 0, y: 0, z: 0 };

  //Internal double precision offset used in the OTG file format (always set as of November 2018)
  var fo = loadContext.fragmentTransformsOffset || { x: 0, y: 0, z: 0 };

  if (this.count) {
    //make views directly into the first data record (skipping the header record)
    this.boxes = new Float32Array(data.buffer, byteStride);
    this.flags = new Int32Array(data.buffer, byteStride);

    //apply placement transform if given
    var boxes = this.boxes;

    if (loadContext.placementTransform) {
      var tmpBox = new _wgs_scene_LmvBox3__WEBPACK_IMPORTED_MODULE_0__["LmvBox3"]();
      var offset = 0;
      for (var i = 0; i < this.count; i++, offset += this.boxStride) {

        setFromArray.call(tmpBox, boxes, offset);

        //Add back the built-in OTG offset
        tmpBox.min.x += fo.x;
        tmpBox.min.y += fo.y;
        tmpBox.min.z += fo.z;
        tmpBox.max.x += fo.x;
        tmpBox.max.y += fo.y;
        tmpBox.max.z += fo.z;


        tmpBox.applyMatrix4(loadContext.placementWithOffset); //this will apply both placement and global offset at once

        copyToArray.call(tmpBox, boxes, offset);
      }
    } else {

      var ox = fo.x - globalOffset.x;
      var oy = fo.y - globalOffset.y;
      var oz = fo.z - globalOffset.z;

      //Faster code path when we only have global offset and no placement transform
      for (var i = 0, offset = 0; i < this.count; i++, offset += this.boxStride) {

        boxes[offset] += ox;
        boxes[offset + 1] += oy;
        boxes[offset + 2] += oz;

        boxes[offset + 3] += ox;
        boxes[offset + 4] += oy;
        boxes[offset + 5] += oz;
      }
    }
  }

  this.hasPolygonCounts = true;
  this.wantSort = false;
}

OtgFragInfo.prototype.getCount = function () {
  return this.count;
};

OtgFragInfo.prototype.isTransparent = function (i) {
  var flags = this.flags[i * this.boxStride + 6];
  return !!(flags >> 24);
};

OtgFragInfo.prototype.getPolygonCount = function (i) {
  var flags = this.flags[i * this.boxStride + 6];
  return flags & 0xffffff;
};

/***/ }),

/***/ "./src/file-loaders/lmvtk/otg/OtgGeomCodec.js":
/*!****************************************************!*\
  !*** ./src/file-loaders/lmvtk/otg/OtgGeomCodec.js ***!
  \****************************************************/
/*! exports provided: serializeLmvBufferGeom, readLmvBufferGeom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serializeLmvBufferGeom", function() { return serializeLmvBufferGeom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readLmvBufferGeom", function() { return readLmvBufferGeom; });
/* harmony import */ var _compat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../compat */ "./src/compat.js");
/* harmony import */ var _common_InputStream__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/InputStream */ "./src/file-loaders/lmvtk/common/InputStream.js");
/* harmony import */ var _wgs_scene_LmvBox3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../wgs/scene/LmvBox3 */ "./src/wgs/scene/LmvBox3.js");





/*
                                                      Integers encoded in *little endian*
                                                      
                                                      Magic header: LMV0 (4 bytes)
                                                      Flags: 2 bytes (isLine, isPoint, isWideLine, etc.)
                                                      Num buffers: 1 byte
                                                      Num attributes: 1 byte (attributes are fixed size)
                                                      Buf Offsets (from beginning of data block, first buffer is always at 0, so is skipped): 4 bytes each
                                                      Attributes: {
                                                      	Name: 1 byte enum (Index, IndexEdges, Position, Normal, TextureUV, Color)
                                                      	itemSize: 1/2 byte low nibble (must be 1,2,3 or 4)
                                                      	itemType: 1/2 byte hi nibble (BYTE, SHORT, UBYTE, USHORT, FLOAT ...)
                                                      	itemOffset: 1 byte (in bytes)
                                                      	itemStride: 1 byte (stride in bytes)
                                                      	buffer Idx: 1 bytes
                                                      } (5 bytes each)
                                                      
                                                      (padding bytes to make data stream offset a multiple of 4)
                                                      
                                                      Data: binary, concatenated vertex and index streams
                                                      */

var AttributeName = {
  Index: 0,
  IndexEdges: 1,
  Position: 2,
  Normal: 3,
  TextureUV: 4,
  Color: 5 };


var AttributeType = {
  BYTE: 0,
  SHORT: 1,
  UBYTE: 2,
  USHORT: 3,

  BYTE_NORM: 4,
  SHORT_NORM: 5,
  UBYTE_NORM: 6,
  USHORT_NORM: 7,

  FLOAT: 8,
  INT: 9,
  UINT: 10
  //DOUBLE: 11
};


var MeshFlags = {
  //NOTE: Lower two bits are NOT A BITMASK!!!
  TRIANGLES: 0,
  LINES: 1,
  POINTS: 2,
  WIDE_LINES: 3 };





var LMV2OTGAttr = {
  "position": AttributeName.Position,
  "normal": AttributeName.Normal,
  "index": AttributeName.Index,
  "indexlines": AttributeName.IndexEdges,
  "color": AttributeName.Color };


var OTG2LMVAttr = {};
OTG2LMVAttr[AttributeName.Position] = "position";
OTG2LMVAttr[AttributeName.Normal] = "normal";
OTG2LMVAttr[AttributeName.Index] = "index";
OTG2LMVAttr[AttributeName.IndexEdges] = "indexlines";
OTG2LMVAttr[AttributeName.Color] = "color";
OTG2LMVAttr[AttributeName.TextureUV] = "uv";


var AttributeTypeToSize = {};
AttributeTypeToSize[AttributeType.BYTE] = 1;
AttributeTypeToSize[AttributeType.SHORT] = 2;
AttributeTypeToSize[AttributeType.UBYTE] = 1;
AttributeTypeToSize[AttributeType.USHORT] = 2;
AttributeTypeToSize[AttributeType.BYTE_NORM] = 1;
AttributeTypeToSize[AttributeType.SHORT_NORM] = 2;
AttributeTypeToSize[AttributeType.UBYTE_NORM] = 1;
AttributeTypeToSize[AttributeType.USHORT_NORM] = 2;
AttributeTypeToSize[AttributeType.FLOAT] = 4;
AttributeTypeToSize[AttributeType.INT] = 4;
AttributeTypeToSize[AttributeType.UINT] = 4;
//DOUBLE: 11



function rotate(tri) {
  var tmp = tri[0];
  tri[0] = tri[1];
  tri[1] = tri[2];
  tri[2] = tmp;
}

function deltaEncodeIndexBuffer3(ib) {

  var triangles = [];

  for (var i = 0; i < ib.length; i += 3) {
    triangles.push(
    [ib[i], ib[i + 1], ib[i + 2]]);

  }

  //Sort the indices for each triangle so that
  //the first one is smallest
  for (var i = 0; i < triangles.length; i++) {
    var t = triangles[i];

    while (t[0] > t[1] || t[0] > t[2]) {
      rotate(t);
    }
  }

  //Sort triangles by ascending first index
  triangles.sort(function (a, b) {
    return a[0] - b[0];
  });

  //Delta encode the indices
  var t = triangles[0];
  var j = 0;
  ib[j] = t[0];
  ib[j + 1] = t[1] - t[0];
  ib[j + 2] = t[2] - t[0];
  j += 3;

  for (var i = 1; i < triangles.length; i++, j += 3) {
    t = triangles[i];

    ib[j] = t[0] - triangles[i - 1][0];
    ib[j + 1] = t[1] - t[0];
    ib[j + 2] = t[2] - t[0];
  }

}

function deltaEncodeIndexBuffer2(ib) {

  var lines = [];

  for (var i = 0; i < ib.length; i += 2) {
    lines.push(
    [ib[i], ib[i + 1]]);

  }

  //Sort the indices for each triangle so that
  //the first one is smallest
  for (var i = 0; i < lines.length; i++) {
    var t = lines[i];

    if (t[0] > t[1]) {
      var tmp = t[0];
      t[0] = t[1];
      t[1] = tmp;
    }
  }

  //Sort lines by ascending first index
  lines.sort(function (a, b) {
    return a[0] - b[0];
  });

  //Delta encode the indices
  var t = lines[0];
  var j = 0;
  ib[j] = t[0];
  ib[j + 1] = t[1] - t[0];
  j += 2;

  for (var i = 1; i < lines.length; i++, j += 2) {
    t = lines[i];

    ib[j] = t[0] - lines[i - 1][0];
    ib[j + 1] = t[1] - t[0];
  }

}


function deltaDecodeIndexBuffer3(ib) {

  if (!ib.length)
  return;

  ib[1] += ib[0];
  ib[2] += ib[0];

  for (var i = 3; i < ib.length; i += 3) {
    ib[i] += ib[i - 3];
    ib[i + 1] += ib[i];
    ib[i + 2] += ib[i];
  }
}

function deltaDecodeIndexBuffer2(ib) {

  if (!ib.length)
  return;

  ib[1] += ib[0];

  for (var i = 2; i < ib.length; i += 2) {
    ib[i] += ib[i - 2];
    ib[i + 1] += ib[i];
  }
}

function attrNameMapper(attributeName) {

  var name = LMV2OTGAttr[attributeName];
  if (typeof name !== "undefined")
  return name;

  if (attributeName.indexOf("uv") === 0) {
    return AttributeName.TextureUV;
  }

  console.warn("Unknown attribute name");
  return AttributeName.TextureUV;
}


function attrNameToLMV(attrName) {

  var lmvAttr = OTG2LMVAttr[attrName];
  if (lmvAttr)
  return lmvAttr;

  console.error("Unknown vertex attribute");
  return AttributeName.TextureUV;
}


function attrTypeMapper(attr) {

  var type = AttributeType.FLOAT;

  var itemWidth = attr.bytesPerItem || 4;
  if (itemWidth === 1) {
    type = attr.normalize ? AttributeType.UBYTE_NORM : AttributeType.UBYTE;
  } else if (itemWidth === 2) {
    type = attr.normalize ? AttributeType.USHORT_NORM : AttributeType.USHORT;
  }

  return type << 4 | attr.itemSize & 0xf;
}

function indexTypeMapper(attr) {
  var type = AttributeType.USHORT;

  var itemWidth = attr.bytesPerItem || 2;
  if (itemWidth === 1) {
    type = AttributeType.UBYTE;
  } else if (itemWidth === 2) {
    type = AttributeType.USHORT;
  } else if (itemWidth === 4) {
    type = AttributeType.UINT;
  }

  return type << 4 | attr.itemSize & 0xf;
}


function OtgGeomEncoder() {
}


OtgGeomEncoder.prototype.beginHeader = function (meshFlag, numAttributes, dataStreamLengths) {
  var headerSize = 8;

  var numBuffers = dataStreamLengths.length;
  headerSize += (numBuffers - 1) * 4;

  headerSize += numAttributes * 5;

  while (headerSize % 4 !== 0) {
    headerSize++;
  }

  var totalDataSize = 0;
  for (var i = 0; i < dataStreamLengths.length; i++) {
    totalDataSize += dataStreamLengths[i];}

  this.buffer = Buffer.alloc(headerSize + totalDataSize);
  this.writeOffset = 0;

  //Write the 4 byte magic prefix
  var MAGIC = "OTG0";
  for (var i = 0; i < 4; i++) {
    this.writeOffset = this.buffer.writeUInt8(MAGIC.charCodeAt(i), this.writeOffset);
  }

  //TODO: line width if wide lines and pointSize if points

  this.writeOffset = this.buffer.writeUInt16LE(meshFlag, this.writeOffset);

  this.writeOffset = this.buffer.writeUInt8(numBuffers, this.writeOffset);

  this.writeOffset = this.buffer.writeUInt8(numAttributes, this.writeOffset);

  //write buffer offsets from the beginning of the binary data block
  //Skip the first buffer as its at offset zero
  var offset = dataStreamLengths[0];
  for (var i = 1; i < dataStreamLengths.length; i++) {
    this.writeOffset = this.buffer.writeUInt32LE(offset, this.writeOffset);
    offset += dataStreamLengths[i];
  }
};

OtgGeomEncoder.prototype.addAttribute = function (attrName, attr, stride, bufferIndex) {
  this.writeOffset = this.buffer.writeUInt8(attrName, this.writeOffset);

  if (attrName === AttributeName.Index || attrName === AttributeName.IndexEdges) {

    this.writeOffset = this.buffer.writeUInt8(indexTypeMapper(attr), this.writeOffset);

    this.writeOffset = this.buffer.writeUInt8((attr.itemOffset || 0) * 4, this.writeOffset); //itemOffset
    this.writeOffset = this.buffer.writeUInt8((stride || 0) * 4, this.writeOffset); //itemStride

    this.writeOffset = this.buffer.writeUInt8(bufferIndex, this.writeOffset); //buffer index
  } else {
    this.writeOffset = this.buffer.writeUInt8(attrTypeMapper(attr), this.writeOffset);

    this.writeOffset = this.buffer.writeUInt8((attr.itemOffset || 0) * 4, this.writeOffset); //itemOffset (LMV stores in multiples of 4)
    this.writeOffset = this.buffer.writeUInt8((stride || 0) * 4, this.writeOffset); //itemStride (LMV stores in multiples of 4)

    this.writeOffset = this.buffer.writeUInt8(bufferIndex, this.writeOffset); //buffer index
  }
};


OtgGeomEncoder.prototype.endHeader = function () {
  //Padding so that buffers are written at multiple of 4
  while (this.writeOffset % 4 !== 0) {
    this.writeOffset = this.buffer.writeUInt8(0, this.writeOffset);
  }
};

OtgGeomEncoder.prototype.addBuffer = function (buffer) {
  buffer.copy(this.buffer, this.writeOffset);
  this.writeOffset += buffer.length;
};


OtgGeomEncoder.prototype.end = function () {
  if (this.writeOffset !== this.buffer.length) {
    console.error("Incorrect encoding buffer size");
  }

  return this.buffer;
};



function OtgGeomDecoder(buf) {

  this.buffer = buf;
  this.readOffset = 0;

  this.meshFlag = 0;
  this.numBuffers = 0;
  this.numAttributes = 0;
  this.bufferOffsets = [];
  this.attributes = [];
  this.buffers = [];
}


OtgGeomDecoder.prototype.readNodeJS = function () {

  var magic = this.buffer.toString("ascii", 0, 4);
  if (magic !== "OTG0") {
    console.error("Invalid OTG header");
    return false;
  }

  this.readOffset = 4;

  this.meshFlag = this.buffer.readUInt16LE(this.readOffset);
  this.readOffset += 2;

  this.numBuffers = this.buffer.readUInt8(this.readOffset);
  this.readOffset++;

  this.numAttributes = this.buffer.readUInt8(this.readOffset);
  this.readOffset++;

  if (this.numBuffers) {
    this.bufferOffsets.push(0);

    for (var i = 1; i < this.numBuffers; i++) {
      var boff = this.buffer.readUInt32LE(this.readOffset);
      this.readOffset += 4;
      this.bufferOffsets.push(boff);
    }
  }

  for (var i = 0; i < this.numAttributes; i++) {
    var attr = {};

    attr.name = this.buffer.readUInt8(this.readOffset);
    this.readOffset++;

    var type = this.buffer.readUInt8(this.readOffset);
    this.readOffset++;

    attr.itemSize = type & 0xf;
    attr.type = type >> 4;

    attr.bytesPerItem = AttributeTypeToSize[attr.type];

    attr.normalize = attr.type === AttributeType.BYTE_NORM ||
    attr.type === AttributeType.SHORT_NORM ||
    attr.type === AttributeType.UBYTE_NORM ||
    attr.type === AttributeType.USHORT_NORM;


    attr.itemOffset = this.buffer.readUInt8(this.readOffset) / 4;
    this.readOffset++;

    attr.itemStride = this.buffer.readUInt8(this.readOffset) / 4;
    this.readOffset++;

    attr.bufferIndex = this.buffer.readUInt8(this.readOffset);
    this.readOffset++;

    this.attributes.push(attr);
  }

  //seek to the beginning of the buffer data
  while (this.readOffset % 4 !== 0) {
    this.readOffset++;}

  for (var i = 0; i < this.bufferOffsets.length; i++) {

    var startOffset = this.readOffset + this.bufferOffsets[i];
    var endOffset;

    if (i < this.bufferOffsets.length - 1) {
      endOffset = this.readOffset + this.bufferOffsets[i + 1];
    } else {
      endOffset = this.buffer.length;
    }

    this.buffers.push(this.buffer.slice(startOffset, endOffset));
  }

  return true;
};


OtgGeomDecoder.prototype.readWeb = function () {

  var stream = new _common_InputStream__WEBPACK_IMPORTED_MODULE_1__["InputStream"](this.buffer);

  var magic = stream.getString(4);
  if (magic !== "OTG0") {
    console.error("Invalid OTG header");
    return false;
  }


  this.meshFlag = stream.getUint16();
  this.numBuffers = stream.getUint8();
  this.numAttributes = stream.getUint8();

  if (this.numBuffers) {
    this.bufferOffsets.push(0);

    for (var i = 1; i < this.numBuffers; i++) {
      var boff = stream.getUint32();
      this.bufferOffsets.push(boff);
    }
  }

  for (var i = 0; i < this.numAttributes; i++) {
    var attr = {};

    attr.name = stream.getUint8();

    var type = stream.getUint8();

    attr.itemSize = type & 0xf;
    attr.type = type >> 4;

    attr.bytesPerItem = AttributeTypeToSize[attr.type];

    attr.normalize = attr.type === AttributeType.BYTE_NORM ||
    attr.type === AttributeType.SHORT_NORM ||
    attr.type === AttributeType.UBYTE_NORM ||
    attr.type === AttributeType.USHORT_NORM;


    attr.itemOffset = stream.getUint8() / 4;

    attr.itemStride = stream.getUint8() / 4;

    attr.bufferIndex = stream.getUint8();

    this.attributes.push(attr);
  }

  //seek to the beginning of the buffer data
  while (stream.offset % 4 !== 0) {
    stream.offset++;}

  for (var i = 0; i < this.bufferOffsets.length; i++) {

    var startOffset = stream.offset + this.bufferOffsets[i];
    var endOffset;

    if (i < this.bufferOffsets.length - 1) {
      endOffset = stream.offset + this.bufferOffsets[i + 1];
    } else {
      endOffset = stream.byteLength;
    }

    this.buffers.push(this.buffer.subarray(startOffset, endOffset));
  }

  return true;
};


OtgGeomDecoder.prototype.read = function () {

  if (Object(_compat__WEBPACK_IMPORTED_MODULE_0__["isNodeJS"])() && this.buffer instanceof Buffer) {
    return this.readNodeJS();
  } else {
    return this.readWeb();
  }
};



function serializeLmvBufferGeom(geom) {

  var otgEncoder = new OtgGeomEncoder();

  //Check for interleaved buffer. For now
  //this is the only one we support
  var bufSizes = [];
  if (!geom.vb) {
    console.error("Unexpected non-interleaved vertex buffer");
    return null;
  } else {
    bufSizes = [geom.vb.byteLength, geom.ib.byteLength];

    if (geom.iblines) {
      bufSizes.push(geom.iblines.byteLength);
    }
  }

  var attrKeys = Object.keys(geom.attributes);

  var meshFlag = 0;
  if (geom.isLines)
  meshFlag = meshFlag | MeshFlags.LINES;
  if (geom.isWideLines)
  meshFlag = meshFlag | MeshFlags.WIDE_LINES;
  if (geom.isPoints)
  meshFlag = meshFlag | MeshFlags.POINTS;

  otgEncoder.beginHeader(meshFlag, attrKeys.length, bufSizes);

  //Write the attributes
  for (var i = 0; i < attrKeys.length; i++) {
    var attr = geom.attributes[attrKeys[i]];
    var attrName = attrNameMapper(attrKeys[i]);

    if (attrKeys[i] === "index") {
      otgEncoder.addAttribute(attrName, attr, 0, 1);
    } else if (attrKeys[i] === "indexlines") {
      otgEncoder.addAttribute(attrName, attr, 0, 2);
    } else {
      otgEncoder.addAttribute(attrName, attr, geom.vbstride, 0);
    }

  }

  otgEncoder.endHeader();

  //Write the buffers

  //Buffer 0
  var tmp = Buffer.from(geom.vb.buffer, geom.vb.byteOffset, geom.vb.byteLength);
  otgEncoder.addBuffer(tmp);

  //Buffer 1
  if (geom.isLines)
  deltaEncodeIndexBuffer2(geom.ib);else

  deltaEncodeIndexBuffer3(geom.ib);

  tmp = Buffer.from(geom.ib.buffer, geom.ib.byteOffset, geom.ib.byteLength);
  otgEncoder.addBuffer(tmp);

  //Buffer 2
  if (geom.iblines) {
    deltaEncodeIndexBuffer2(geom.iblines);

    tmp = Buffer.from(geom.iblines.buffer, geom.iblines.byteOffset, geom.iblines.byteLength);
    otgEncoder.addBuffer(tmp);
  }

  var buf = otgEncoder.end();

  return buf;
}



var unitBox = new _wgs_scene_LmvBox3__WEBPACK_IMPORTED_MODULE_2__["LmvBox3"]();
unitBox.min.x = -0.5;
unitBox.min.y = -0.5;
unitBox.min.z = -0.5;
unitBox.max.x = 0.5;
unitBox.max.y = 0.5;
unitBox.max.z = 0.5;

//var unitSphere = new THREE.Sphere();
//unitSphere.radius = Math.sqrt(0.5 * 0.5 * 3);
var unitSphere = {
  center: { x: 0, y: 0, z: 0 },
  radius: Math.sqrt(0.5 * 0.5 * 3) };


function readLmvBufferGeom(buffer, skipEdges) {

  var dec = new OtgGeomDecoder(buffer);

  if (!dec.read()) {
    console.error("Failed to parse OTG geometry");
    return null;
  }

  //Assumes the interleaved buffer serialization we use by default
  //Maps the decoded data to the mdata/vblayout structures produced by
  //the LMV loader worker threads. It's slightly different from the LmvBufferGeometry fields
  var mesh = {
    vblayout: {},
    vb: new Float32Array(dec.buffers[0].buffer, dec.buffers[0].byteOffset, dec.buffers[0].byteLength / 4),
    isLines: (dec.meshFlag & 0x3) === MeshFlags.LINES,
    isWideLines: (dec.meshFlag & 0x3) === MeshFlags.WIDE_LINES,
    isPoints: (dec.meshFlag & 0x3) === MeshFlags.POINTS,
    boundingBox: unitBox,
    boundingSphere: unitSphere };


  //TODO: line width

  for (var i = 0; i < dec.attributes.length; i++) {
    var attr = dec.attributes[i];

    if (attr.name === AttributeName.Index) {
      var ib = dec.buffers[1];
      if (attr.bytesPerItem === 1) {
        mesh.indices = ib;
      } else if (attr.bytesPerItem === 2) {
        mesh.indices = new Uint16Array(ib.buffer, ib.byteOffset, ib.byteLength / attr.bytesPerItem);
      } else if (attr.bytesPerItem === 4) {
        mesh.indices = new Uint32Array(ib.buffer, ib.byteOffset, ib.byteLength / attr.bytesPerItem);
      }

      if (mesh.isLines)
      deltaDecodeIndexBuffer2(mesh.indices);else

      deltaDecodeIndexBuffer3(mesh.indices);
    } else if (attr.name === AttributeName.IndexEdges) {
      if (!skipEdges) {
        var iblines = dec.buffers[2];
        if (attr.bytesPerItem === 1) {
          mesh.iblines = iblines;
        } else if (attr.bytesPerItem === 2) {
          mesh.iblines = new Uint16Array(iblines.buffer, iblines.byteOffset, iblines.byteLength / attr.bytesPerItem);
        } else if (attr.bytesPerItem === 4) {
          mesh.iblines = new Uint32Array(iblines.buffer, iblines.byteOffset, iblines.byteLength / attr.bytesPerItem);
        }

        deltaDecodeIndexBuffer2(mesh.iblines);
      }
    } else {
      var lmvAttr = attrNameToLMV(attr.name);

      if (!mesh.vbstride)
      mesh.vbstride = attr.itemStride;else
      {
        //We expect all vertex attributes to be packed into one VB 
        if (mesh.vbstride !== attr.itemStride)
        console.error("Unexpected vertex buffer stride mismatch.");
      }

      mesh.vblayout[lmvAttr] = {
        bytesPerItem: attr.bytesPerItem,
        offset: attr.itemOffset,
        normalize: attr.normalize,
        itemSize: attr.itemSize };

    }

  }

  var mdata = {
    mesh: mesh,
    packId: 0,
    meshIndex: 0 };


  return mdata;

}

/***/ }),

/***/ "./src/file-loaders/lmvtk/otg/OtgWebSocket.js":
/*!****************************************************!*\
  !*** ./src/file-loaders/lmvtk/otg/OtgWebSocket.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}var WebSocket = __webpack_require__(/*! isomorphic-ws */ "./node_modules/isomorphic-ws/browser.js");

var hexToBin = __webpack_require__(/*! ./HashStrings */ "./src/file-loaders/lmvtk/otg/HashStrings.js").hexToBin;
var getHexStringPacked = __webpack_require__(/*! ./HashStrings */ "./src/file-loaders/lmvtk/otg/HashStrings.js").getHexStringPacked;

//Copied from compat.js to avoid importing ES6 exports from plain node.js forge-tools.
var isBrowser = typeof navigator !== "undefined";
var isNodeJS = function isNodeJS() {
  return !isBrowser;
};

var _maxRequests = 200;

//OTG web socket protocol.
var OtgWs = /*#__PURE__*/function () {

  function OtgWs(loadContext, loadCB, errorCB) {_classCallCheck(this, OtgWs);

    this.ws = null;
    this.numRequests = 0;
    this.txMsg = 0;
    this.rxMsg = 0;
    this.authorizeUrns = {};
    this._pendingCallbacks = [];
    this._retriedOpen = 0;
    this._wsUsable = !loadContext.disableWebSocket && typeof WebSocket !== "undefined" && !!loadContext.otg_ws;
    this.loadCB = loadCB;
    this.errorCB = errorCB;

    this._pendingMdata = [];
    this._pendingSends = {
      "g": [],
      "m": [],
      "t": [] };


    this.msgBuffer = new Uint8Array(201);

    this.addAuthorizeUrns(loadContext);
  }_createClass(OtgWs, [{ key: "notifyPendingCallbacks", value: function notifyPendingCallbacks(

    ws) {
      this._pendingCallbacks.forEach(function (cb) {
        cb(ws);
      });
      this._pendingCallbacks = [];
    } }, { key: "addAuthorizeUrns", value: function addAuthorizeUrns(

    loadContext) {var _this = this;
      //Remember which URNs need to be authorized for CDN data via the web socket
      if (loadContext && loadContext.authorizeUrns) {
        loadContext.authorizeUrns.forEach(function (urn) {
          _this.authorizeUrns[urn] = 1;
        });
      }
    } }, { key: "getWebSocket", value: function getWebSocket()

    {

      //Socket already established?
      var ws = this.ws;
      if (ws && ws.readyState === 1) {
        return ws;
      } else if (ws && ws.readyState === 0) {
        console.warn("Reentry into getWebSocket. Should not happen.");
        //If we get called while the web socket is still opening,
        //ignore the callback, we will continue processing once it's open.
        return null;
      }

      return null;
    } }, { key: "startSession", value: function startSession(


    loadContext, doneCB) {

      if (!this._wsUsable) {
        doneCB && doneCB(null);
        return;
      }

      this.addAuthorizeUrns(loadContext);

      var ctx = this;

      //Remember the given callback
      doneCB && ctx._pendingCallbacks.push(doneCB);

      //Are we still in the process of opening the socket?
      if (ctx._opening) {
        return;
      }

      //If socket is already open, notify the callback (and any previously pending callbacks
      var ws = this.getWebSocket();
      if (ws) {
        this.notifyPendingCallbacks(ws);
        return;
      }

      if (loadContext)
      this.loadContext = loadContext;

      //console.log("Init worker called");

      this.openWebSocket(function (ws) {
        //console.log("Web socket open.");

        ctx.flushEvent = setInterval(function () {
          if (ctx.ws)
          ctx.flushSendQueue();
        }, 200);

        ctx.notifyPendingCallbacks(ws);
      });
    } }, { key: "endSession", value: function endSession()

    {
      var ctx = this;

      //The worker can be used by multiple loaders, so only close the
      //web socket if it's not waiting on other requests.
      if (ctx.numRequests) {
        console.warn("Messages still pending. Leaving WebSocket open.");
        return;
      }

      var ws = ctx.getWebSocket();
      if (ws && ws.readyState === 1) {

        console.log("Web socket close.");

        ctx._opening = false;
        ctx._clientClose = true;
        ws.close(1000);
        ctx.ws = null;
      }

      if (ctx.flushEvent) {
        //We do not actually expect any pending messages here, because
        //this function gets called after the whole model is loaded.

        clearInterval(ctx.flushEvent);
        ctx.flushEvent = null;
      }
    } }, { key: "openWebSocket", value: function openWebSocket(

    openCB) {var _this2 = this;

      var loadContext = this.loadContext;
      var ctx = this;

      ctx._opening = true;

      //http and 7124->7125 are here to support local debugging, when the endpoints are overridden to
      //point directly to local node.js process(es).
      var ws = new WebSocket(loadContext.otg_ws.replace("https:", "wss:").replace("http:", "ws:").replace(":7124", ":7125"), undefined, {
        headers: loadContext.headers });


      ws.addEventListener('open', function () {

        ctx._opening = false;
        ctx.ws = ws;
        ctx.accountIdSent = null;

        ws.binaryType = "arraybuffer";

        //On web clients that do not use the cookie approach, the headers
        //will not get sent (unlike on node.js WebSocket implementation
        //so we send the Authorization first thing after open
        if (!isNodeJS()) {
          //console.log("Sending headers as message", JSON.stringify(loadContext.headers));
          ws.send("/headers/" + JSON.stringify(loadContext.headers));
        }

        //Tell the server that we support batched responses
        ws.send("/options/" + JSON.stringify({ batch_responses: true }));
        ctx.batchResponses = true;

        //Tell the server to authorize the web socket
        //for the URNs that we will be loading
        for (var urn in ctx.authorizeUrns) {
          ws.send("/auth/" + urn);
        }

        openCB(ws);
      });

      ws.addEventListener('message', function (data) {
        if (ctx.batchResponses)
        _this2.decodeBatchMessage(new Uint8Array(data.data));else

        _this2.decodeSingleItemMessage(new Uint8Array(data.data));
      });

      ws.addEventListener('close', function close(event) {
        if (ctx.numRequests) {
          console.log("Socket close", event.code, event.reason, "pending:", ctx.numRequests, "tx:", ctx.txMsg, "rx:", ctx.rxMsg);
          //TODO: we need to take care of the case where there were pending requests when the socket
          //closed -- we have to reissue those requests.
        }

        ctx._opening = false;
        ctx.ws = null;

        if (!ctx._clientClose && ctx.numRequests) {

          console.log("Abnormal socket close. Retrying.", event.code, event.reason, "pending:", ctx.numRequests);
          ctx._retriedOpen++;

          ctx.numRequests = 0;

          //case where there were pending requests when the socket
          //closed -- we have to reissue those requests.
          if (ctx._retriedOpen <= 3) {
            setTimeout(function () {
              ctx.openWebSocket(function (ws) {
                ctx.errorCB && ctx.errorCB(ctx.loadContext);
              });
            }, 2000);
          } else {
            console.error("Too many WebSocket failures. Giving up on mesh load.");

            ctx._wsUsable = false;

            //Tell our owner that they need to retry or fail or something.
            ctx.errorCB && ctx.errorCB(ctx.loadContext);
          }
        }

        ctx._clientClose = false;
      });

      ws.addEventListener('error', function incoming(data) {
        console.log("ws error, reverting to plain http.", data);

        ctx._opening = false;
        ctx.ws = null;

        ctx._wsUsable = false;

        ctx.notifyPendingCallbacks(ctx, ws);

        ctx.errorCB && ctx.errorCB(true);
      });

    } }, { key: "decodeSingleItemMessage", value: function decodeSingleItemMessage(

    buf, resourceType) {
      var hash = getHexStringPacked(buf, 0, 20);
      var datagz = new Uint8Array(buf.buffer, buf.byteOffset + 20, buf.length - 20);

      this.numRequests--;
      this.rxMsg++;
      this.loadCB(datagz, hash, this.loadContext, false, resourceType);
    }

    //Packed message format, where the response from the server may contain multiple items in the same
    //buffer.
    /*
        The format is as follows:
         Bytes      Meaning
        ------------------------------
        0-3        Magic number. The bytes 'OPK1'
        4-7        Currently unused flags + resource type (ASCII 'm' or 'g') in byte 0 of this integer.
        8-11       Number of items in the message stream. Little endian.
        12-15      Offset of the first item in the data buffer (first item is implicitly at offset 0, so this is always zero)
        16-19      Offset of the second item in the data buffer
        20-...     etc... subsequent offsets, one per item
        ...
        Remaining bytes: all items combined into single buffer
    */ }, { key: "decodeBatchMessage", value: function decodeBatchMessage(

    data) {

      var prefixLength = 12;

      var headerInt = new Int32Array(data.buffer, 0, prefixLength / 4);

      if (headerInt[0] !== 0x314B504F) {
        console.error("Invalid message format", headerInt[0].toString(16), headerInt[1], data);
        return;
      }

      var resourceType = String.fromCharCode(headerInt[1] & 0xff);

      var numItems = headerInt[2];
      var offsets = new Int32Array(data.buffer, prefixLength, numItems);

      var baseOffset = prefixLength + numItems * 4;

      for (var i = 0; i < offsets.length; i++) {
        var start = offsets[i];
        var end = i < offsets.length - 1 ? offsets[i + 1] : data.length - baseOffset;

        var oneItem = new Uint8Array(data.buffer, start + baseOffset, end - start);

        this.decodeSingleItemMessage(oneItem, resourceType);
      }
    } }, { key: "flushSendQueue", value: function flushSendQueue()


    {

      var ctx = this;

      for (var type in ctx._pendingSends) {

        var msgs = ctx._pendingSends[type];

        if (!msgs.length)
        continue;

        ctx.txMsg += msgs.length;

        //Send all hashes collected in requestResources in a single shot websocket message

        //Enlarge the accumulation buffer if needed
        var len = 1 + msgs.length * 20;
        if (ctx.msgBuffer.length < len) {
          ctx.msgBuffer = new Uint8Array(len);
        }

        var allBufs = ctx.msgBuffer;

        allBufs[0] = type.charCodeAt(0);
        for (var i = 0; i < msgs.length; i++) {
          hexToBin(msgs[i], allBufs, 1 + i * 20);
        }
        var ws = this.getWebSocket();
        ws.send(new Uint8Array(allBufs.buffer, 0, len));

        ctx._pendingSends[type] = [];
      }
    }

    // @param {string}   urls - list of request urls
    // @param {string}   hashes - list of hashes corresponding to each item in the urls list.
    // @param {string}   type - one of "t", "m" or "g"
  }, { key: "requestResources", value: function requestResources(urls, hashes, type) {

      if (!this.ws) {
        console.error("Trying to request resources over non-existent web socket,");
        return;
      }

      var ctx = this;
      type = type || "g";

      for (var i = 0; i < urls.length; i++) {
        ctx.numRequests++;

        var url = urls[i];

        var wspath = url.slice(url.indexOf("/cdn/") + 5);
        var parts = wspath.split("/");

        //Send the account ID prefix just once, it's not likely to vary
        if (ctx.accountIdSent !== parts[1]) {
          this.ws.send("/account_id/" + parts[1]);
          ctx.accountIdSent = parts[1];
        }

        ctx._pendingSends[type].push(hashes[i]);

        if (ctx._pendingSends[type].length > _maxRequests) {
          ctx.flushSendQueue();
        }
      }
    } }]);return OtgWs;}();



module.exports.OtgWs = OtgWs;

/***/ }),

/***/ "./src/file-loaders/lmvtk/svf/Cameras.js":
/*!***********************************************!*\
  !*** ./src/file-loaders/lmvtk/svf/Cameras.js ***!
  \***********************************************/
/*! exports provided: readCameraDefinition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readCameraDefinition", function() { return readCameraDefinition; });


function readCameraDefinition(pfr, inst) {
  var entry = inst.definition;
  var tse = pfr.seekToEntry(entry);
  if (!tse)
  return null;
  if (tse.version > 2 /*Constants::CameraDefinitionVersion*/)
    return null;

  var s = pfr.stream;
  var cam = {
    isPerspective: !s.getUint8(), /* 0 = perspective, 1 = ortho */
    position: pfr.readVector3f(),
    target: pfr.readVector3f(),
    up: pfr.readVector3f(),
    aspect: s.getFloat32(),
    fov: s.getFloat32() * (180 / Math.PI) };

  if (tse.version < 2) {
    // Skip the clip planes for old files.
    s.getFloat32();
    s.getFloat32();
  }

  cam.orthoScale = s.getFloat32();

  return cam;
}

/***/ }),

/***/ "./src/file-loaders/lmvtk/svf/Fragments.js":
/*!*************************************************!*\
  !*** ./src/file-loaders/lmvtk/svf/Fragments.js ***!
  \*************************************************/
/*! exports provided: FragList, readGeometryMetadataIntoFragments, readGeometryMetadata, readFragments, filterFragments */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FragList", function() { return FragList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readGeometryMetadataIntoFragments", function() { return readGeometryMetadataIntoFragments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readGeometryMetadata", function() { return readGeometryMetadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readFragments", function() { return readFragments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterFragments", function() { return filterFragments; });
/* harmony import */ var _wgs_scene_LmvBox3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../wgs/scene/LmvBox3 */ "./src/wgs/scene/LmvBox3.js");
/* harmony import */ var _wgs_scene_LmvMatrix4__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../wgs/scene/LmvMatrix4 */ "./src/wgs/scene/LmvMatrix4.js");
/* harmony import */ var _compat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../compat */ "./src/compat.js");
/* harmony import */ var _wgs_scene_MeshFlags__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../wgs/scene/MeshFlags */ "./src/wgs/scene/MeshFlags.js");





//FragList represents an array of fragments, stored in Structure of Arrays form
//which allows us to free some parts easily and transfer the fragment information in large chunks.
var NUM_FRAGMENT_LIMITS = Object(_compat__WEBPACK_IMPORTED_MODULE_2__["isMobileDevice"])() ? null : null;

/** @constructor */
// note: update transferable var list in SvfWorker.ts if you add a new field
function FragList() {
  this.length = 0;
  this.numLoaded = 0;

  this.boxes = null;
  this.transforms = null;
  this.materials = null;

  this.packIds = null;
  this.entityIndexes = null;

  this.fragId2dbId = null;

  this.topoIndexes = null;

  this.visibilityFlags = null;
}

function readGeometryMetadataIntoFragments(pfr, fragments) {
  var length = fragments.geomDataIndexes.length;
  var stream = pfr.stream;
  var primsCount = 0;

  // Read from cache if the same entry has been reading from stream.
  var entryCache = {};
  var mesh2frag = fragments.mesh2frag = {};
  fragments.polygonCounts = fragments.geomDataIndexes;
  for (var g = 0; g < length; g++) {
    var entry = fragments.geomDataIndexes[g];

    if (entryCache[entry]) {
      var i = entryCache[entry];
      fragments.polygonCounts[g] = fragments.polygonCounts[i];
      fragments.packIds[g] = fragments.packIds[i];
      fragments.entityIndexes[g] = fragments.entityIndexes[i];
      primsCount += fragments.polygonCounts[g];
    } else
    {
      var tse = pfr.seekToEntry(entry);
      if (!tse)
      return;

      // Frag type, seems no use any more.
      stream.getUint8();
      //skip past object space bbox -- we don't use that
      stream.seek(stream.offset + 24);

      fragments.polygonCounts[g] = stream.getUint16();
      fragments.packIds[g] = parseInt(pfr.readString());
      fragments.entityIndexes[g] = pfr.readU32V();
      primsCount += fragments.polygonCounts[g];

      entryCache[entry] = g;
    }

    // Construct mesh2frag here directly
    var meshid = fragments.packIds[g] + ":" + fragments.entityIndexes[g];
    var meshRefs = mesh2frag[meshid];
    if (meshRefs === undefined) {
      //If it's the first fragments for this mesh,
      //store the index directly -- most common case.
      mesh2frag[meshid] = g;
    } else
    if (!Array.isArray(meshRefs)) {
      //otherwise put the fragments that
      //reference the mesh into an array
      mesh2frag[meshid] = [meshRefs, g];
    } else
    {
      //already is an array
      meshRefs.push(g);
    }

  }
  fragments.geomDataIndexes = null;
  entryCache = null;

  return primsCount;
}

function readGeometryMetadata(pfr, geoms)
{
  var numGeoms = pfr.getEntryCounts();
  var stream = pfr.stream;

  geoms.length = numGeoms;
  var fragTypes = geoms.fragTypes = new Uint8Array(numGeoms);
  var primCounts = geoms.primCounts = new Uint16Array(numGeoms);
  var packIds = geoms.packIds = new Int32Array(numGeoms);
  var entityIndexes = geoms.entityIndexes = new Int32Array(numGeoms);
  // Holds the indexes to the topology data.
  var topoIndexes;

  for (var g = 0, gEnd = numGeoms; g < gEnd; g++) {
    var tse = pfr.seekToEntry(g);
    if (!tse)
    return;

    fragTypes[g] = stream.getUint8();
    //skip past object space bbox -- we don't use that
    stream.seek(stream.offset + 24);
    primCounts[g] = stream.getUint16();
    packIds[g] = parseInt(pfr.readString());
    entityIndexes[g] = pfr.readU32V();

    if (tse.version > 2) {
      var topoIndex = stream.getInt32();
      if (topoIndex != -1 && topoIndexes === undefined) {
        topoIndexes = geoms.topoIndexes = new Int32Array(numGeoms);
        // Fill in the first entries to indicate
        for (var i = 0; i < g; i++) {
          topoIndexes[i] = -1;}
      }

      if (topoIndexes != undefined)
      topoIndexes[g] = topoIndex;
    }

  }
}

// Convert a list of object id (dbid) to a list of integers where each integer is an index of the fragment
// in fragment list that associated with the object id.
function objectIds2FragmentIndices(pfr, ids) {
  var ret = [];

  if (!ids) {
    return ret;
  }

  var counts = pfr.getEntryCounts();
  var stream = pfr.stream;
  for (var entry = 0; entry < counts; entry++) {
    var tse = pfr.seekToEntry(entry);
    if (!tse)
    return;
    if (tse.version > 5)
    return;

    // Keep reading fragment fields as usual, but does not store anything as we only
    // interested in the data base id / object id field at the very end.
    if (tse.version > 4) {
      // Flag byte.
      pfr.readU8();
    }
    // Material index
    pfr.readU32V();
    if (tse.version > 2) {
      // Geometry metadata reference
      pfr.readU32V();
    } else {
      // Pack file reference
      pfr.readString();
      pfr.readU32V();
    }

    // Transform
    pfr.readTransform(entry, null, 12 * entry);

    // Bounding box
    for (var i = 0; i < 6; i++) {
      stream.getFloat32();
    }

    if (tse.version > 1) {
      var dbid = pfr.readU32V();
      if (ids.indexOf(dbid) >= 0) {
        ret.push(entry);
      }
    }
  }

  return ret;
}


function readFragments(pfr, frags, globalOffset, placementTransform, fragmentTransformsDouble, ids) {
  var filteredIndices = objectIds2FragmentIndices(pfr, ids);

  //Initialize all the fragments structures
  //once we know how many fragments we have.
  var numFrags = filteredIndices.length ? filteredIndices.length : pfr.getEntryCounts();
  var stream = pfr.stream;

  if (NUM_FRAGMENT_LIMITS && numFrags > NUM_FRAGMENT_LIMITS) {
    numFrags = NUM_FRAGMENT_LIMITS;
  }

  // Recored the total length of the fragments
  frags.totalLength = pfr.getEntryCounts();
  frags.length = numFrags;
  frags.numLoaded = 0;

  //Allocate flat array per fragment property
  var fragBoxes = frags.boxes = fragmentTransformsDouble ? new Float64Array(6 * numFrags) : new Float32Array(6 * numFrags);
  var transforms = frags.transforms = fragmentTransformsDouble ? new Float64Array(12 * numFrags) : new Float32Array(12 * numFrags);
  var materials = frags.materials = new Int32Array(numFrags);
  var packIds = frags.packIds = new Int32Array(numFrags);
  var entityIndexes = frags.entityIndexes = new Int32Array(numFrags);
  var geomDataIndexes = frags.geomDataIndexes = new Int32Array(numFrags);
  var fragId2dbId = frags.fragId2dbId = new Int32Array(numFrags); //NOTE: this potentially truncates IDs bigger than 4 billion -- can be converted to array if needed.
  var visibilityFlags = frags.visibilityFlags = new Uint16Array(numFrags);

  var tmpBox;
  var tmpMat;
  var boxTranslation = [0, 0, 0];
  if (placementTransform) {
    tmpBox = new _wgs_scene_LmvBox3__WEBPACK_IMPORTED_MODULE_0__["LmvBox3"]();
    tmpMat = new _wgs_scene_LmvMatrix4__WEBPACK_IMPORTED_MODULE_1__["LmvMatrix4"](true).fromArray(placementTransform.elements);
  }

  //Helper functions used by the main fragment read loop.

  function applyPlacement(index) {
    if (placementTransform) {
      var offset = index * 6;
      tmpBox.setFromArray(fragBoxes, offset);
      tmpBox.applyMatrix4(tmpMat);
      tmpBox.copyToArray(fragBoxes, offset);
    }
  }

  function readBoundingBox(entry) {
    var offset = entry * 6;
    for (var i = 0; i < 6; i++) {
      fragBoxes[offset++] = stream.getFloat32();}
  }

  function readBoundingBoxOffset(entry, boxTranslation) {
    var offset = entry * 6;
    for (var i = 0; i < 6; i++) {
      fragBoxes[offset++] = stream.getFloat32() + boxTranslation[i % 3];}
  }

  //Spin through all the fragments now
  for (var entry = 0, eEnd = frags.length; entry < eEnd; entry++) {
    var tse = filteredIndices.length ? pfr.seekToEntry(filteredIndices[entry]) : pfr.seekToEntry(entry);

    if (!tse)
    return;
    if (tse.version > 5)
    return;

    var isVisible = true;
    if (tse.version > 4) {
      // Fragments v5+ include a flag byte, the LSB of which denotes
      // visibility
      var flags = pfr.readU8();
      isVisible = (flags & 0x01) != 0;
    }
    visibilityFlags[entry] = isVisible ? _wgs_scene_MeshFlags__WEBPACK_IMPORTED_MODULE_3__["MeshFlags"].MESH_VISIBLE : 0;

    materials[entry] = pfr.readU32V();

    if (tse.version > 2) {
      //In case it's new style fragment that
      //points to a geometry metadata entry
      geomDataIndexes[entry] = pfr.readU32V();
    } else
    {
      //Old style fragment, pack reference is directly
      //encoded in the fragment entry
      packIds[entry] = parseInt(pfr.readString());
      entityIndexes[entry] = pfr.readU32V();
    }

    pfr.readTransform(entry, transforms, 12 * entry, placementTransform, globalOffset, boxTranslation);

    if (tse.version > 3) {
      // With this version the transform's (double precision) translation is subtracted from the BB,
      // so we have to add it back
      readBoundingBoxOffset(entry, boxTranslation);
    } else
    {
      readBoundingBox(entry);
    }

    //Apply the placement transform to the world space bbox
    applyPlacement(entry);

    //Apply any global offset to the world space bbox
    if (globalOffset) {
      var offset = entry * 6;
      fragBoxes[offset++] -= globalOffset.x;
      fragBoxes[offset++] -= globalOffset.y;
      fragBoxes[offset++] -= globalOffset.z;
      fragBoxes[offset++] -= globalOffset.x;
      fragBoxes[offset++] -= globalOffset.y;
      fragBoxes[offset++] -= globalOffset.z;
    }

    if (tse.version > 1) {
      fragId2dbId[entry] = pfr.readU32V();
    }
    // Skip reading path ID which is not in use now.
    // pfr.readPathID();
  }

  frags.finishLoading = true;
}

// Filter fragments based on specified object id list, by picking
// up fragment whose id is in the specified id list, and dropping others.
// This is used to produce a list of fragments that matches a search hit.
function filterFragments(frags, ids) {
  frags.length = ids.length;
  frags.numLoaded = 0;
  var numFrags = frags.length;
  var bb = [Infinity, Infinity, Infinity, -Infinity, -Infinity, -Infinity];

  var fragBoxes = new Float32Array(6 * numFrags);
  var transforms = new Float32Array(12 * numFrags);
  var materials = new Int32Array(numFrags);
  var packIds = new Int32Array(numFrags);
  var entityIndexes = new Int32Array(numFrags);
  var visibilityFlags = new Uint16Array(numFrags);
  var mesh2frag = {};

  for (var i = 0; i < ids.length; ++i) {
    var index = ids[i];

    var idxOld = index * 6;
    var idxNew = i * 6;
    for (var j = 0; j < 6; ++j) {
      fragBoxes[idxNew++] = frags.boxes[idxOld++];}

    idxOld = index * 12;
    idxNew = i * 12;
    for (var j = 0; j < 12; ++j) {
      transforms[idxNew++] = frags.transforms[idxOld++];}

    materials[i] = frags.materials[index];
    packIds[i] = frags.packIds[index];
    entityIndexes[i] = frags.entityIndexes[index];
    visibilityFlags[i] = frags.visibilityFlags[index];

    // TODO: consolidate this with addToMeshMap.
    var meshID = frags.packIds[index] + ":" + frags.entityIndexes[index];
    var meshRefs = mesh2frag[meshID];
    if (meshRefs == undefined) {
      mesh2frag[meshID] = i;
    } else
    if (!Array.isArray(meshRefs)) {
      mesh2frag[meshID] = [meshRefs, i];
    } else
    {
      meshRefs.push(i);
    }

    var bbIndex = i * 6;
    for (var j = 0; j < 3; ++j) {
      if (fragBoxes[bbIndex + j] < bb[j])
      bb[j] = fragBoxes[bbIndex + j];}
    for (var j = 3; j < 6; ++j) {
      if (fragBoxes[bbIndex + j] > bb[j])
      bb[j] = fragBoxes[bbIndex + j];}
  }

  frags.boxes = fragBoxes;
  frags.transforms = transforms;
  frags.materials = materials;
  frags.packIds = packIds;
  frags.entityIndexes = entityIndexes;
  frags.mesh2frag = mesh2frag;
  frags.visibilityFlags = visibilityFlags;

  return bb;
}

/***/ }),

/***/ "./src/file-loaders/lmvtk/svf/Geoms.js":
/*!*********************************************!*\
  !*** ./src/file-loaders/lmvtk/svf/Geoms.js ***!
  \*********************************************/
/*! exports provided: readGeometry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readGeometry", function() { return readGeometry; });
/* harmony import */ var _compat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../compat */ "./src/compat.js");
/* harmony import */ var _common_VbUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/VbUtils */ "./src/file-loaders/lmvtk/common/VbUtils.js");


//import { readOpenCTM_MG2 } from './OctmMG2';

"use strict";

//=====================================================================
//=====================================================================
//=====================================================================
//=====================================================================
//=====================================================================
//=====================================================================
//=====================================================================

var ntmp = new Float32Array(3);

var INV_PI = 1.0 / Math.PI;

var atan2 = Math.atan2;
if (!Object(_compat__WEBPACK_IMPORTED_MODULE_0__["isNodeJS"])()) {
  //Faster approximation to atan2
  //http://math.stackexchange.com/questions/1098487/atan2-faster-approximation
  //The algorithm does not deal with special cases such as x=0,y=0x=0,y=0,
  //nor does it consider special IEEE-754 floating-point operands such as infinities and NaN.
  atan2 = function atan2(y, x) {
    var ax = Math.abs(x);
    var ay = Math.abs(y);
    //var a = (ax > ay) ? ay / ax : ax / ay;
    var a = Math.min(ax, ay) / Math.max(ax, ay);
    var s = a * a;
    var r = ((-0.0464964749 * s + 0.15931422) * s - 0.327622764) * s * a + a;
    if (ay > ax)
    r = 1.57079637 - r;
    if (x < 0)
    r = 3.14159274 - r;
    if (y < 0)
    r = -r;
    return r;
  };
}

function readOpenCTM_RAW(stream, mesh, dstBuffer, startOffset, estimateSizeOnly) {

  var readOpenCTMString = function readOpenCTMString() {
    return stream.getString(stream.getInt32());
  };

  //Now do the data reads
  var name = stream.getString(4);
  if (name != "INDX") return null;

  var vcount = mesh.vertexCount;
  var tcount = mesh.triangleCount;
  var stride = mesh.vbstride;

  //We will create a single ArrayBuffer to back both the vertex and index buffers
  //The indices will be places after the vertex information, because we need alignment
  //of 4 bytes
  var vbSizeFloat = vcount * stride;
  var totalSizeInFloats = vbSizeFloat + (tcount * 3 * 2 + 3) / 4 | 0;

  mesh.sharedBufferBytes = totalSizeInFloats * 4;

  if (estimateSizeOnly) {
    return;
  }

  var vbf;
  if (!dstBuffer) {
    dstBuffer = new ArrayBuffer(totalSizeInFloats * 4);
    startOffset = 0;
  }

  vbf = mesh.vb = new Float32Array(dstBuffer, startOffset, vbSizeFloat);
  mesh.indices = new Uint16Array(dstBuffer, startOffset + vbSizeFloat * 4, tcount * 3);
  stream.getIndicesArray(vbf.buffer, startOffset + vbSizeFloat * 4, tcount * 3);

  name = stream.getString(4);
  if (name != "VERT") return null;

  var vbi;
  //See if we want to pack the normals into two shorts
  if (mesh.vblayout.normal && mesh.vblayout.normal.itemSize === 2)
  vbi = new Uint16Array(vbf.buffer, vbf.byteOffset, vbf.byteLength / 2);

  //Read positions
  stream.getVector3Array(vbf, vcount, mesh.vblayout['position'].offset, stride);

  //Read normals
  var i, t, offset;
  if (mesh.flags & 1) {
    name = stream.getString(4);
    if (name != "NORM") return null;

    if (vbi) {
      if (ntmp.length < vcount * 3)
      ntmp = new Float32Array(vcount * 3);
      stream.getVector3Array(ntmp, vcount, 0, 3);

      for (i = 0, offset = mesh.vblayout['normal'].offset;
      i < vcount;
      i++, offset += stride)
      {
        var pnx = (atan2(ntmp[i * 3 + 1], ntmp[i * 3]) * INV_PI + 1.0) * 0.5;
        var pny = (ntmp[i * 3 + 2] + 1.0) * 0.5;

        vbi[offset * 2] = pnx * 65535 | 0;
        vbi[offset * 2 + 1] = pny * 65535 | 0;
      }
    } else {
      stream.getVector3Array(vbf, vcount, mesh.vblayout['normal'].offset, stride);
    }

  }

  //Read uv layers
  for (t = 0; t < mesh.texMapCount; t++) {
    name = stream.getString(4);
    if (name != "TEXC") return null;

    var uv = {
      name: readOpenCTMString(),
      file: readOpenCTMString() };

    mesh.uvs.push(uv);

    var uvname = "uv";
    if (t)
    uvname += (t + 1).toString();

    stream.getVector2Array(vbf, vcount, mesh.vblayout[uvname].offset, stride);
  }

  var attributeOffset = stride - (mesh.attribMapCount || 0) * 3;

  //Read vertex colors and uvw (and skip any other attributes that we don't know)
  for (t = 0; t < mesh.attribMapCount; t++) {
    name = stream.getString(4);
    if (name != "ATTR") return null;

    var attr = {
      name: readOpenCTMString() };


    // console.log("attribute", attr.name);

    var attrname;
    if (attr.name.indexOf("Color") != -1) //Special case of vertex colors
      attrname = 'color';else
    if (attr.name.indexOf("UVW") != -1) //Only used by prism 3d wood.
      attrname = 'uvw';else
    {
      //Other attributes, though we don't know what to do with those
      mesh.attrs.push(attr);
      stream.getBytes(vcount * 16); //skip past
      continue;
    }

    mesh.vblayout[attrname] = { offset: attributeOffset, itemSize: 3 };

    var v4 = [0, 0, 0, 0];
    for (i = 0, offset = attributeOffset;
    i < vcount;
    i++, offset += stride) {
      stream.getVector4(v4, 0);
      vbf[offset] = v4[0];
      vbf[offset + 1] = v4[1];
      vbf[offset + 2] = v4[2];
      //Ignoring the alpha term. For color attribute, we can actually pack it in a 4-byte attribute,
      //but we do not know in advance (when we allocate the target buffer) if the OCTM attribute is UVW or color
    }
    attributeOffset += 3;
  }

}

// Helper function for calculating new vertex for wide lines
var getLineSplitVertex = function getLineSplitVertex(stride, vbf, neighbourhoods, a, b) {
  // New vertex position
  var pos = {
    x: vbf[stride * a],
    y: vbf[stride * a + 1],
    z: vbf[stride * a + 2] };

  // Direction to the next vertex for segment (must be valid always)
  var next = {
    x: pos.x - vbf[stride * b],
    y: pos.y - vbf[stride * b + 1],
    z: pos.z - vbf[stride * b + 2] };


  // Index of previous point
  var prev_ind = neighbourhoods[a].next == b ? neighbourhoods[a].prev : neighbourhoods[a].next;

  // Direction to previous point
  var prev;
  // If does not exist
  if (prev_ind < 0) {
    // mirror next direction
    prev = {
      x: next.x,
      y: next.y,
      z: next.z };

  } else {
    // else - set directly
    prev = {
      x: vbf[stride * prev_ind] - pos.x,
      y: vbf[stride * prev_ind + 1] - pos.y,
      z: vbf[stride * prev_ind + 2] - pos.z };

  }

  return {
    pos: pos,
    next: next,
    prev: prev };

};

// convert a line mesh into specially organised triangles, which will be drawn
// as lines with a specific width
var convertToWideLines = function convertToWideLines(mesh, stride, vbf, indexPairs, offset) {

  var numCoords = 3;

  // add some extra vertex data to the mesh
  // prev & next are directions specific vertex positions, which are used to specify
  // the offset direction in the shader
  // side is the directed line width used for the magnitude of the offset in the shader
  offset = mesh.vbstride;
  mesh.vblayout['prev'] = { offset: offset, itemSize: numCoords };
  offset += numCoords;
  mesh.vblayout['next'] = { offset: offset, itemSize: numCoords };
  offset += numCoords;
  mesh.vblayout['side'] = { offset: offset, itemSize: 1 };

  mesh.vbstride += 7;

  // Count of shared vertexes
  var connections = 0;

  // Build neighbourhoods of each vertex
  var neighbourhoods = new Array(mesh.vertexCount);
  var i, j, n, a, b;
  for (i = 0; i < mesh.vertexCount; ++i) {
    neighbourhoods[i] = {
      prev: -1, // index of previous vertex
      next: -1, // index of next vertex
      prev_seg: -1 // index of previous segment
    };
  }

  for (j = 0; j < indexPairs; ++j) {
    n = j * 2;
    a = mesh.indices[n];
    b = mesh.indices[n + 1];
    neighbourhoods[a].next = b;
    if (neighbourhoods[a].prev >= 0) {
      ++connections;
    }

    neighbourhoods[b].prev = a;
    neighbourhoods[b].prev_seg = j;
    if (neighbourhoods[b].next >= 0) {
      ++connections;
    }
  }

  // Each segment will have its own vertexes
  var newBaseVertexCount = indexPairs * 2;
  var newBaseVertexies = new Array(newBaseVertexCount);

  // Indexes contains line segments and additional connection for shared vertexes
  var newIndices = new Uint16Array(2 * numCoords * (indexPairs + connections));
  var meshIndex = 0;

  // Split all vertexes and build indexes of all triangles
  for (j = 0; j < indexPairs; ++j) {
    n = j * 2;
    a = mesh.indices[n];
    b = mesh.indices[n + 1];
    // New vertexes with calculated next and previous points
    newBaseVertexies[n] = getLineSplitVertex(stride, vbf, neighbourhoods, a, b);
    newBaseVertexies[n + 1] = getLineSplitVertex(stride, vbf, neighbourhoods, b, a);

    // Segment triangles
    a = n;
    b = n + 1;
    // First two coordinates form line segment are used in ray casting
    newIndices[meshIndex++] = 2 * a + 1;
    newIndices[meshIndex++] = 2 * b;
    newIndices[meshIndex++] = 2 * a;
    newIndices[meshIndex++] = 2 * b;
    newIndices[meshIndex++] = 2 * b + 1;
    newIndices[meshIndex++] = 2 * a;

    // Connection triangles for shared vertexes, if exist
    a = mesh.indices[n];
    if (neighbourhoods[a].prev >= 0) {
      b = neighbourhoods[a].prev_seg * 2 + 1;
      a = n;

      newIndices[meshIndex++] = 2 * b;
      newIndices[meshIndex++] = 2 * a;
      newIndices[meshIndex++] = 2 * b + 1;
      newIndices[meshIndex++] = 2 * a + 1;
      newIndices[meshIndex++] = 2 * a;
      newIndices[meshIndex++] = 2 * b;
    }
  }
  mesh.indices = newIndices;

  // Finally, fill vertex buffer with new data
  var newVertexCount = newBaseVertexCount * 2;
  mesh.vb = new Float32Array(newVertexCount * mesh.vbstride);

  offset = mesh.vblayout['position'].offset;
  for (var c = 0; c < newBaseVertexCount; ++c) {
    // Duplicate every vertex for each side
    for (var side = 0; side < 2; ++side) {
      // Vertex position
      mesh.vb[offset] = newBaseVertexies[c].pos.x;
      mesh.vb[offset + 1] = newBaseVertexies[c].pos.y;
      mesh.vb[offset + 2] = newBaseVertexies[c].pos.z;
      offset += stride;

      // Previous vertex direction
      mesh.vb[offset] = newBaseVertexies[c].prev.x;
      mesh.vb[offset + 1] = newBaseVertexies[c].prev.y;
      mesh.vb[offset + 2] = newBaseVertexies[c].prev.z;
      offset += numCoords;

      // Next vertex direction
      mesh.vb[offset] = newBaseVertexies[c].next.x;
      mesh.vb[offset + 1] = newBaseVertexies[c].next.y;
      mesh.vb[offset + 2] = newBaseVertexies[c].next.z;
      offset += numCoords;

      // Side (offset direction)
      mesh.vb[offset] = side ? -1 : 1;
      offset += 1;
    }
  }

  mesh.vertexCount = newVertexCount;

  // flag to mark this mesh as special
  mesh.isWideLines = true;
};

//=====================================================================
//=====================================================================
//=====================================================================
//=====================================================================
//=====================================================================
//=====================================================================
//=====================================================================


var readOpenCTM = function readOpenCTM(stream, dstBuffer, startOffset, estimateSizeOnly, packNormals) {

  var readOpenCTMString = function readOpenCTMString() {
    return stream.getString(stream.getInt32());
  };

  var fourcc = stream.getString(4);
  if (fourcc != "OCTM") return null;

  var version = stream.getInt32();
  if (version != 5) return null;

  var method = stream.getString(3);
  stream.getUint8(); //read the last 0 char of the RAW or MG2 fourCC.

  var mesh = {
    stream: null,
    vertices: null,
    indices: null,
    normals: null,
    colors: null,
    uvs: [],
    attrs: [] };


  mesh.vertexCount = stream.getInt32();
  mesh.triangleCount = stream.getInt32();
  mesh.texMapCount = stream.getInt32();
  mesh.attribMapCount = stream.getInt32();
  mesh.flags = stream.getInt32();
  mesh.comment = readOpenCTMString();

  var usePackedNormals = packNormals;


  //Calculate stride of the interleaved buffer we need
  mesh.vbstride = 3; //position is always there
  if (mesh.flags & 1)
  mesh.vbstride += usePackedNormals ? 1 : 3; //normal
  mesh.vbstride += 2 * (mesh.texMapCount || 0); //texture coords
  mesh.vbstride += 3 * (mesh.attribMapCount || 0); //we now support color and uvw. Both of them use three floats.

  mesh.vblayout = {};
  var offset = 0;

  mesh.vblayout['position'] = { offset: offset, itemSize: 3 };

  offset += 3;
  if (mesh.flags & 1) {
    mesh.vblayout['normal'] = { offset: offset,
      itemSize: usePackedNormals ? 2 : 3,
      bytesPerItem: usePackedNormals ? 2 : 4,
      normalize: usePackedNormals };

    offset += usePackedNormals ? 1 : 3; //offset is counted in units of 4 bytes
  }
  if (mesh.texMapCount) {
    for (var i = 0; i < mesh.texMapCount; i++) {
      var uvname = "uv";
      if (i)
      uvname += (i + 1).toString();

      mesh.vblayout[uvname] = { offset: offset, itemSize: 2 };
      offset += 2;
    }
  }

  //Now read and populate the mesh data
  if (method == "RAW") {
    readOpenCTM_RAW(stream, mesh, dstBuffer, startOffset, estimateSizeOnly);
    if (!estimateSizeOnly) {
      _common_VbUtils__WEBPACK_IMPORTED_MODULE_1__["VBUtils"].deduceUVRepetition(mesh);
      _common_VbUtils__WEBPACK_IMPORTED_MODULE_1__["VBUtils"].computeBounds3D(mesh);
    }
    return mesh;
  } else
  if (method == "MG2") {
    //This code path is never used, since MG2 compression is disabled at the LMVTK C++ level
    debug("readOpenCTM_MG2(stream, mesh, dstBuffer, startOffset, estimateSizeOnly) not supported");
    if (!estimateSizeOnly) {
      _common_VbUtils__WEBPACK_IMPORTED_MODULE_1__["VBUtils"].deduceUVRepetition(mesh);
      _common_VbUtils__WEBPACK_IMPORTED_MODULE_1__["VBUtils"].computeBounds3D(mesh);
    }
    return mesh;
  } else

  return null;
};


var readLinesOrPoints = function readLinesOrPoints(pfr, tse, estimateSizeOnly, lines) {

  //TODO: Line geometry does not go into shared buffers yet
  if (estimateSizeOnly)
  return null;

  // Initialize mesh
  var mesh = {
    vertices: null,
    indices: null,
    colors: null,
    normals: null,
    uvs: [],
    attrs: [],
    lineWidth: 1.0 };


  // Read vertex count, index count, polyline bound count
  var indexCount;
  if (lines) {
    // Read vertex count, index count, polyline bound count
    var polyLineBoundCount;
    if (tse.version > 1) {
      mesh.vertexCount = pfr.readU16();
      indexCount = pfr.readU16();
      polyLineBoundCount = pfr.readU16();

      if (tse.version > 2) {
        mesh.lineWidth = pfr.readF32();
      }
    } else {
      mesh.vertexCount = pfr.readU32V();
      indexCount = pfr.readU32V();
      polyLineBoundCount = pfr.readU32V();
    }
    mesh.isLines = true;
  } else {
    // Read vertex count, index count, point size
    mesh.vertexCount = pfr.readU16();
    indexCount = pfr.readU16();
    mesh.pointSize = pfr.readF32();
    mesh.isPoints = true;
  }

  // Determine if color is defined
  var hasColor = pfr.stream.getUint8() != 0;


  //Calculate stride of the interleaved buffer we need
  mesh.vbstride = 3; //position is always there
  if (hasColor)
  mesh.vbstride += 3; //we only interleave the color attribute, and we reduce that to RGB from ARGB.

  mesh.vblayout = {};
  var offset = 0;

  mesh.vblayout['position'] = { offset: offset, itemSize: 3 };

  offset += 3;
  if (hasColor) {
    mesh.vblayout['color'] = { offset: offset, itemSize: 3 };
  }

  mesh.vb = new Float32Array(mesh.vertexCount * mesh.vbstride);


  // Read vertices
  var vbf = mesh.vb;
  var stride = mesh.vbstride;
  var stream = pfr.stream;

  stream.getVector3Array(vbf, mesh.vertexCount, mesh.vblayout['position'].offset, stride);

  // Determine color if specified
  var c, cEnd;
  if (hasColor) {
    for (c = 0, offset = mesh.vblayout['color'].offset, cEnd = mesh.vertexCount;
    c < cEnd;
    c++, offset += stride)
    {
      vbf[offset] = stream.getFloat32();
      vbf[offset + 1] = stream.getFloat32();
      vbf[offset + 2] = stream.getFloat32();
      stream.getFloat32(); //skip alpha -- TODO: convert color to ARGB 32 bit integer in the vertex layout and shader
    }
  }

  // Copies bytes from buffer
  var forceCopy = function forceCopy(b) {
    return b.buffer.slice(b.byteOffset, b.byteOffset + b.length);
  };

  // Read indices and polyline bound buffer
  if (lines) {
    var indices;
    var polyLineBoundBuffer;
    if (tse.version > 1) {
      // 16 bit format
      indices = new Uint16Array(forceCopy(stream.getBytes(indexCount * 2)));
      polyLineBoundBuffer = new Uint16Array(forceCopy(stream.getBytes(polyLineBoundCount * 2)));
    } else
    {
      // 32 bit format
      indices = new Int32Array(forceCopy(stream.getBytes(indexCount * 4)));
      polyLineBoundBuffer = new Int32Array(forceCopy(stream.getBytes(polyLineBoundCount * 4)));
    }

    // three.js uses GL-style index pairs in its index buffer. We need one pair
    // per segment in each polyline
    var indexPairs = polyLineBoundBuffer[polyLineBoundCount - 1] - polyLineBoundCount + 1;

    mesh.indices = new Uint16Array(2 * indexPairs);

    // Extract the individual line segment index pairs
    var meshIndex = 0;
    for (var i = 0; i + 1 < polyLineBoundCount; i++) {
      for (var j = polyLineBoundBuffer[i]; j + 1 < polyLineBoundBuffer[i + 1]; j++) {
        mesh.indices[meshIndex++] = indices[j];
        mesh.indices[meshIndex++] = indices[j + 1];
      }
    }
  } else {
    mesh.indices = new Uint16Array(forceCopy(stream.getBytes(indexCount * 2)));
  }

  if (mesh.lineWidth != 1.0) {
    convertToWideLines(mesh, stride, vbf, indexPairs, offset);
  }

  _common_VbUtils__WEBPACK_IMPORTED_MODULE_1__["VBUtils"].computeBounds3D(mesh);

  return mesh;
};

var readLines = function readLines(pfr, tse, estimateSizeOnly) {
  return readLinesOrPoints(pfr, tse, estimateSizeOnly, true);
};

var readPoints = function readPoints(pfr, tse, estimateSizeOnly) {
  return readLinesOrPoints(pfr, tse, estimateSizeOnly, false);
};

function readGeometry(pfr, entry, options) {
  var tse = pfr.seekToEntry(entry);
  if (!tse)
  return null;

  if (tse.entryType == "Autodesk.CloudPlatform.OpenCTM") {
    return readOpenCTM(pfr.stream, options.dstBuffer, options.startOffset, options.estimateSizeOnly, options.packNormals);
  } else
  if (tse.entryType == "Autodesk.CloudPlatform.Lines") {
    return readLines(pfr, tse, options.estimateSizeOnly);
  } else
  if (tse.entryType == "Autodesk.CloudPlatform.Points") {
    return readPoints(pfr, tse, options.estimateSizeOnly);
  }

  return null;
}

/***/ }),

/***/ "./src/file-loaders/lmvtk/svf/Instances.js":
/*!*************************************************!*\
  !*** ./src/file-loaders/lmvtk/svf/Instances.js ***!
  \*************************************************/
/*! exports provided: readInstance, readInstanceTree */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readInstance", function() { return readInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readInstanceTree", function() { return readInstanceTree; });


function readInstance(pfr, entry, placementTransform, globalOffset) {
  var tse = pfr.seekToEntry(entry);
  if (!tse)
  return null;
  if (tse.version > 2 /*Constants::InstanceVersion*/)
    return null;

  var isVisible = true;
  if (tse.version > 1) {
    // Instances v2+ include a flag byte, the LSB of which denotes visibility
    var flags = pfr.readU8();
    isVisible = (flags & 0x01) != 0;
  }

  return {
    definition: pfr.stream.getUint32(),
    transform: pfr.readTransform(undefined, undefined, undefined, placementTransform, globalOffset),
    instanceNodePath: pfr.readPathID() };

}



var NodeType = {
  NT_Inner: 0,
  NT_Geometry: 1,
  NT_Camera: 2,
  NT_Light: 3 };


function readInstanceTree(pfr, version) {

  var transforms = [];
  var dbIds = [];
  var fragIds = [];
  var childCounts = [];
  var nodeIndex = 0;
  var s = pfr.stream;

  while (s.offset < s.byteLength - 8 - 1) {

    pfr.readTransform(nodeIndex, transforms, nodeIndex * 12, undefined, undefined, undefined);

    // Version 1-4 had optional "shared nodes" that were never used in practice. If found, consume and ignore.
    if (version < 5) {
      var hasSharedNode = s.getUint8();
      if (hasSharedNode) {
        s.getUint32();
      }
    }

    var nodeType = s.getUint8();

    // Version 5 introduced a flags byte and the visibility flag.
    if (version >= 5) {
      var flags = s.getUint8();
      var visible = !!(flags & 1);
    }

    // Version 3 introduced the database ID
    if (version >= 3) {
      dbIds[nodeIndex] = s.getVarints();
    }

    if (nodeIndex) {
      // Not a root, behavior depends on type
      // Leaf, instantiate and add fragment references before returning
      switch (nodeType) {

        case NodeType.NT_Inner:
          break;
        case NodeType.NT_Geometry:{
            if (version < 2) {
              var fragCount = s.getUint16();
              if (fragCount === 1) {
                fragIds[nodeIndex] = s.getUint32();
              } else if (fragCount > 0) {
                var flist = [];
                for (var i = 0; i < fragCount; i++) {
                  flist.push(s.getUint32());}
                fragIds[nodeIndex] = flist;
              }
            } else {
              var fragCount = s.getVarints();
              if (fragCount === 1) {
                fragIds[nodeIndex] = s.getVarints();
              } else if (fragCount > 0) {
                var flist = [];
                for (var i = 0; i < fragCount; i++) {
                  flist.push(s.getVarints());}
                fragIds[nodeIndex] = flist;
              }
            }
          }
          break;
        case NodeType.NT_Camera:
        case NodeType.NT_Light:{
            var hasInstanceEntryId = s.getUint8();
            if (hasInstanceEntryId) {
              s.getUint32();
            }
          }
          break;
        default:
          debug("Unrecognized instance tree node type.");
          break;}

    }

    var childCount = 0;
    if (nodeType === NodeType.NT_Inner) {
      if (version < 2) {
        childCount = s.getUint16();
      } else {
        childCount = s.getVarints();
      }
    }
    childCounts[nodeIndex] = childCount;

    nodeIndex++;
  }

  var dbIdBuffer = new Uint32Array(dbIds.length);
  dbIdBuffer.set(dbIds);

  var xformBuffer = new Float32Array(transforms.length);
  xformBuffer.set(transforms);

  var childCountsBuffer = new Uint32Array(childCounts.length);
  childCountsBuffer.set(childCounts);

  return { dbIds: dbIdBuffer, fragIds: fragIds, transforms: xformBuffer, childCounts: childCountsBuffer };
}

/***/ }),

/***/ "./src/file-loaders/lmvtk/svf/Lights.js":
/*!**********************************************!*\
  !*** ./src/file-loaders/lmvtk/svf/Lights.js ***!
  \**********************************************/
/*! exports provided: readLightDefinition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readLightDefinition", function() { return readLightDefinition; });



function readLightDefinition(pfr, entry) {
  var tse = pfr.seekToEntry(entry);
  if (!tse)
  return null;
  if (tse.version > 1 /*Constants::LightDefinitionVersion*/)
    return null;

  var s = pfr.stream;

  var light = {
    position: pfr.readVector3f(),
    dir: pfr.readVector3f(),
    r: s.getFloat32(),
    g: s.getFloat32(),
    b: s.getFloat32(),
    intensity: s.getFloat32(),
    spotAngle: s.getFloat32(),
    size: s.getFloat32(),
    type: s.getUint8() };


  return light;
}

/***/ }),

/***/ "./src/file-loaders/lmvtk/svf/PackReader.js":
/*!**************************************************!*\
  !*** ./src/file-loaders/lmvtk/svf/PackReader.js ***!
  \**************************************************/
/*! exports provided: PackFileReader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackFileReader", function() { return PackFileReader; });
/* harmony import */ var _common_InputStream__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/InputStream */ "./src/file-loaders/lmvtk/common/InputStream.js");
/* harmony import */ var _wgs_scene_LmvMatrix4__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../wgs/scene/LmvMatrix4 */ "./src/wgs/scene/LmvMatrix4.js");




"use strict";

var warnedGzip = false;

/** @constructor */
function PackFileReader(data)
{
  var stream = this.stream = new _common_InputStream__WEBPACK_IMPORTED_MODULE_0__["InputStream"](data);

  var len = stream.getInt32();
  this.type = stream.getString(len);
  this.version = stream.getInt32();

  this.types = null;
  this.entryOffsets = [];

  //read the table of contents
  {
    var offset = stream.offset;

    // Jump to file footer.
    stream.seek(stream.byteLength - 8);

    // Jump to toc.
    var tocOffset = stream.getUint32();
    this.typesOffset = stream.getUint32();

    // Populate type sets.
    stream.seek(this.typesOffset);
    var typesCount = this.readU32V();
    this.types = [];
    for (var i = 0; i < typesCount; ++i) {
      this.types.push({
        "entryClass": this.readString(),
        "entryType": this.readString(),
        "version": this.readU32V() });}


    // Populate data offset list.
    stream.seek(tocOffset);
    var entryCount = this.readU32V();
    var dso = this.entryOffsets;
    for (var i = 0; i < entryCount; ++i) {
      dso.push(stream.getUint32());}

    // Restore sanity of the world.
    stream.seek(offset);
  }
};

PackFileReader.prototype.readVarint = function () {
  var b;
  var value = 0;
  var shiftBy = 0;
  do {
    b = this.stream.getUint8();
    value |= (b & 0x7f) << shiftBy;
    shiftBy += 7;
  } while (b & 0x80);
  return value;
};
PackFileReader.prototype.readU32V = PackFileReader.prototype.readVarint;

PackFileReader.prototype.readU16 = function () {
  return this.stream.getUint16();
};

PackFileReader.prototype.readU8 = function () {
  return this.stream.getUint8();
};

PackFileReader.prototype.readString = function () {
  return this.stream.getString(this.readU32V());
};

PackFileReader.prototype.readVector3f = function () {
  var s = this.stream;
  return { x: s.getFloat32(), y: s.getFloat32(), z: s.getFloat32() };
};

PackFileReader.prototype.readF32 = function () {
  return this.stream.getFloat32();
};

PackFileReader.prototype.readVector3d = function () {

  var t = { x: 0, y: 0, z: 0 };

  return function () {
    var s = this.stream;
    t.x = s.getFloat64();
    t.y = s.getFloat64();
    t.z = s.getFloat64();

    return t;
  };
}();

PackFileReader.prototype.readQuaternionf = function () {

  var q = { x: 0, y: 0, z: 0, w: 0 };

  return function () {
    var s = this.stream;
    q.x = s.getFloat32();
    q.y = s.getFloat32();
    q.z = s.getFloat32();
    q.w = s.getFloat32();

    return q;
  };

}();

PackFileReader.prototype.readMatrix3f = function () {

  var _m = new _wgs_scene_LmvMatrix4__WEBPACK_IMPORTED_MODULE_1__["LmvMatrix4"]();

  return function (dst) {
    if (!dst) dst = _m;

    var s = this.stream;
    dst.identity();
    for (var i = 0; i < 3; ++i) {
      for (var j = 0; j < 3; ++j) {
        dst.elements[4 * i + j] = s.getFloat32();}}

    return dst;
  };

}();



PackFileReader.prototype.readTransform = function () {

  var s = { x: 1, y: 1, z: 1 };
  var m = new _wgs_scene_LmvMatrix4__WEBPACK_IMPORTED_MODULE_1__["LmvMatrix4"](true);

  return function (entityIndex, buffer, offset, placementTransform, globalOffset, originalTranslation)
  {
    var stream = this.stream;
    var t, q;

    var transformType = stream.getUint8();

    switch (transformType) {

      case 4 /*TransformType.Identity*/:{
          m.identity();
        }break;
      case 0 /*TransformType.Translation*/:{
          t = this.readVector3d();
          m.makeTranslation(t.x, t.y, t.z);
        }break;
      case 1 /*TransformType.RotationTranslation*/:{
          q = this.readQuaternionf();
          t = this.readVector3d();
          s.x = 1;s.y = 1;s.z = 1;
          m.compose(t, q, s);
        }break;
      case 2 /*TransformType.UniformScaleRotationTranslation*/:{
          var scale = stream.getFloat32();
          q = this.readQuaternionf();
          t = this.readVector3d();
          s.x = scale;s.y = scale;s.z = scale;
          m.compose(t, q, s);
        }break;
      case 3 /*TransformType.AffineMatrix*/:{
          this.readMatrix3f(m);
          t = this.readVector3d();
          m.setPosition(t);
        }break;
      default:
        break; //ERROR
    }

    //Report the original translation term to the caller, if they need it.
    //This is only required when reading fragment bounding boxes, where the translation
    //term of this matrix is subtracted from the bbox terms.
    if (originalTranslation) {
      originalTranslation[0] = m.elements[12];
      originalTranslation[1] = m.elements[13];
      originalTranslation[2] = m.elements[14];
    }

    //Apply any placement transform
    if (placementTransform) {
      m.multiplyMatrices(placementTransform, m);
    }

    //Apply global double precision offset on top
    if (globalOffset) {
      m.elements[12] -= globalOffset.x;
      m.elements[13] -= globalOffset.y;
      m.elements[14] -= globalOffset.z;
    }

    //Store result back into single precision matrix or array
    if (entityIndex !== undefined) {
      var src = m.elements;
      // Sometimes we don't want to keep this data (e.g. when we are probing the fragment list
      // to find the data base id to fragment index mappings used for fragment filtering) so we
      // pass a null buffer and if that is the case, bail out here.
      if (!buffer) return;
      buffer[offset + 0] = src[0];buffer[offset + 1] = src[1];buffer[offset + 2] = src[2];
      buffer[offset + 3] = src[4];buffer[offset + 4] = src[5];buffer[offset + 5] = src[6];
      buffer[offset + 6] = src[8];buffer[offset + 7] = src[9];buffer[offset + 8] = src[10];
      buffer[offset + 9] = src[12];buffer[offset + 10] = src[13];buffer[offset + 11] = src[14];
    } else
    {
      return new _wgs_scene_LmvMatrix4__WEBPACK_IMPORTED_MODULE_1__["LmvMatrix4"]().copy(m);
    }
  };

}();

PackFileReader.prototype.getEntryCounts = function () {
  return this.entryOffsets.length;
};

PackFileReader.prototype.seekToEntry = function (entryIndex) {
  var count = this.getEntryCounts();
  if (entryIndex >= count)
  return null;

  // Read the type index and populate the entry data
  this.stream.seek(this.entryOffsets[entryIndex]);
  var typeIndex = this.stream.getUint32();
  if (typeIndex >= this.types.length)
  return null;

  return this.types[typeIndex];
};


PackFileReader.prototype.readPathID = function () {
  var s = this.stream;

  //Construct a /-delimited string as the path to a node
  //TODO: in case we need a split representation (e.g. to follow paths), then
  //an array of numbers might be better to return from here.
  if (this.version < 2) {
    var pathLength = s.getUint16();
    if (!pathLength)
    return null;

    //The first number in a path ID is always zero (root)
    //so we skip adding it to the path string here.
    //Remove this section if that is not the case in the future.
    s.getUint16();
    if (pathLength == 1)
    return "";

    var path = s.getUint16();
    for (var i = 2; i < pathLength; ++i) {
      path += "/" + s.getUint16();
    }
  } else
  {
    var pathLength = this.readU32V();
    if (!pathLength)
    return null;

    //The first number in a path ID is always zero (root)
    //so we skip adding it to the path string here.
    //Remove this section if that is not the case in the future.
    this.readU32V();
    if (pathLength == 1)
    return "";

    var path = this.readU32V();
    for (var i = 2; i < pathLength; ++i) {
      path += "/" + this.readU32V();
    }
  }
  return path;
};

/***/ }),

/***/ "./src/file-loaders/lmvtk/svf/Package.js":
/*!***********************************************!*\
  !*** ./src/file-loaders/lmvtk/svf/Package.js ***!
  \***********************************************/
/*! exports provided: Package */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Package", function() { return Package; });
/* harmony import */ var _compat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../compat */ "./src/compat.js");
/* harmony import */ var _wgs_scene_BVHBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../wgs/scene/BVHBuilder */ "./src/wgs/scene/BVHBuilder.js");
/* harmony import */ var _wgs_scene_LmvVector3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../wgs/scene/LmvVector3 */ "./src/wgs/scene/LmvVector3.js");
/* harmony import */ var _net_Xhr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../net/Xhr */ "./src/file-loaders/net/Xhr.js");
/* harmony import */ var _common_InputStream__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/InputStream */ "./src/file-loaders/lmvtk/common/InputStream.js");
/* harmony import */ var _PackReader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PackReader */ "./src/file-loaders/lmvtk/svf/PackReader.js");
/* harmony import */ var _Fragments__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Fragments */ "./src/file-loaders/lmvtk/svf/Fragments.js");
/* harmony import */ var _Instances__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Instances */ "./src/file-loaders/lmvtk/svf/Instances.js");
/* harmony import */ var _common_SvfPlacementUtils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/SvfPlacementUtils */ "./src/file-loaders/lmvtk/common/SvfPlacementUtils.js");
/* harmony import */ var _Cameras__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Cameras */ "./src/file-loaders/lmvtk/svf/Cameras.js");
/* harmony import */ var _Lights__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Lights */ "./src/file-loaders/lmvtk/svf/Lights.js");













var Zlib = __webpack_require__(/*! ../../../../thirdparty/zlib/unzip.min.js */ "./thirdparty/zlib/unzip.min.js").Zlib;


/** @constructor */
function Package(zipPack) {

  this.unzip = new Zlib.Unzip(zipPack);

  this.manifest = null;

  this.materials = null; //The materials json as it came from the SVF

  this.metadata = null; //metadata json

  this.fragments = null; //will be a FragList

  this.geompacks = [];

  //TODO:
  //Those will not be parsed immediately
  //but we will remember the raw arrays
  //and fire off async workers to parse
  //them later, once we are loading geometry packs
  this.instances = [];

  this.cameras = [];
  this.lights = [];

  this.propertydb = {
    attrs: [],
    avs: [],
    ids: [],
    values: [],
    offsets: [] };


  this.bbox = null; //Overall scene bounds

  this.animations = null; // animations json

  this.pendingRequests = 0;

  this.globalOffset = { x: 0, y: 0, z: 0 };

  this.topologyPath = null; // string path to the topology file

}



Package.prototype.loadAsyncResource = function (loadContext, resourcePath, contents, callback) {

  //Data is immediately available from the SVF zip
  if (contents) {
    callback(contents);
    return;
  }

  //Launch an XHR to load the data from external file
  var svf = this;

  this.pendingRequests++;

  function xhrCB(responseData) {
    svf.pendingRequests--;

    callback(responseData);

    if (svf.pendingRequests == 0)
    svf.postLoad(loadContext);
  }

  _net_Xhr__WEBPACK_IMPORTED_MODULE_3__["ViewingService"].getItem(loadContext, loadContext.basePath + resourcePath,
  xhrCB,
  loadContext.onFailureCallback);


};

Package.prototype.loadManifest = function (loadContext) {
  // TODO: zlib.js throws exceptions on failure;
  // it doesn't return null as this code seems to assume.
  // yes, LoadContext is passed in, but is not used.
  var manifestJson = this.unzip.decompress("manifest.json");
  if (!manifestJson)
  return false;

  var jdr = new _common_InputStream__WEBPACK_IMPORTED_MODULE_4__["InputStream"](manifestJson);
  this.manifest = JSON.parse(jdr.getString(manifestJson.byteLength));
};

Package.prototype.parseFragmentList = function (asset, loadContext, path, contents) {

  var self = this;
  this.loadAsyncResource(loadContext, path, contents, function (data) {
    var pfr = new _PackReader__WEBPACK_IMPORTED_MODULE_5__["PackFileReader"](data);

    //Use a single large blocks to store all fragment elements
    //TODO: perhaps have a FragList per pack file to keep block size down?
    var frags = self.fragments = new _Fragments__WEBPACK_IMPORTED_MODULE_6__["FragList"]();
    Object(_Fragments__WEBPACK_IMPORTED_MODULE_6__["readFragments"])(pfr, frags, self.globalOffset, loadContext.placementTransform, loadContext.fragmentTransformsDouble);
    pfr = null;

  });
};

Package.prototype.parseGeometryMetadata = function (asset, loadContext, path, contents) {
  var self = this;
  this.loadAsyncResource(loadContext, path, contents, function (data) {
    var pfr = new _PackReader__WEBPACK_IMPORTED_MODULE_5__["PackFileReader"](data);

    self.geomMetadata = {};
    Object(_Fragments__WEBPACK_IMPORTED_MODULE_6__["readGeometryMetadata"])(pfr, self.geomMetadata);
    self.numGeoms = self.geomMetadata.primCounts.length;
  });
};


Package.prototype.parseInstanceTree = function (loadContext, path, contents, version) {

  var that = this;

  this.loadAsyncResource(loadContext, path, contents, function (data) {
    var pfr = new _PackReader__WEBPACK_IMPORTED_MODULE_5__["PackFileReader"](data);
    that.instanceTransforms = Object(_Instances__WEBPACK_IMPORTED_MODULE_7__["readInstanceTree"])(pfr, version);
  });

};


Package.prototype.loadRemainingSvf = function (loadContext) {
  var svf = this;

  var unzip = this.unzip;

  //var filenames = unzip.getFilenames();
  this.manifest = loadContext.manifest;
  var manifest = this.manifest;

  var assets = manifest["assets"];

  var metadataJson = unzip.decompress("metadata.json");
  var jdr = new _common_InputStream__WEBPACK_IMPORTED_MODULE_4__["InputStream"](metadataJson);

  // Test to see if this is json (not a binary header)
  // Done by verifying that there is no 0 (Hence ASCII)
  if (metadataJson.byteLength > 3 && metadataJson[3] !== 0) {
    this.metadata = JSON.parse(jdr.getString(metadataJson.byteLength)).metadata;

    Object(_common_SvfPlacementUtils__WEBPACK_IMPORTED_MODULE_8__["initPlacement"])(this, loadContext);
  }

  //Version strings seem to be variable at the moment.
  //var manifestVersion = manifest["manifestversion"];
  //if (   manifest["name"] != "LMV Manifest"
  //    || manifest["manifestversion"] != 1)
  //    return false;

  this.packFileTotalSize = 0;
  this.primitiveCount = 0;

  var typesetsList = manifest["typesets"];
  var typesets = {};
  for (var i = 0; i < typesetsList.length; i++) {
    var ts = typesetsList[i];
    typesets[ts['id']] = ts['types'];
  }

  //Loop through the assets, and schedule non-embedded
  //ones for later loading.
  //TODO: currently only geometry pack files are stored for later
  //load and other assets will be loaded by this worker thread before
  //we return to the SvfLoader in the main thread.

  for (var i = 0; i < assets.length; i++)
  {
    var asset = assets[i];
    if (Object(_compat__WEBPACK_IMPORTED_MODULE_0__["isMobileDevice"])() && asset.id === "Set.bin")
    continue;
    var type = asset["type"];
    if (type.indexOf("Autodesk.CloudPlatform.") == 0)
    type = type.substr(23);
    var uri = asset["URI"];
    var typeset = asset["typeset"] ? typesets[asset["typeset"]] : null;
    var usize = asset["usize"] || 0;
    var megaBytes = Math.round(usize / 1048576 * 100000) / 100000 | 0;

    //If the asset is a geometry pack or property pack
    //just remember it for later demand loading
    if (uri.indexOf("embed:/") != 0) {
      if (type == "PackFile") {
        var typeclass = typeset ? typeset[0]["class"] : null;

        if (typeclass == "Autodesk.CloudPlatform.Geometry") {

          this.packFileTotalSize += usize;

          this.geompacks.push({ id: asset["id"], uri: uri, usize: usize });
        }
      } else
      if (type == "PropertyAttributes") {
        this.propertydb.attrs.push(uri);
      } else
      if (type == "PropertyAVs") {
        this.propertydb.avs.push(uri);
      } else
      if (type == "PropertyIDs") {
        this.propertydb.ids.push(uri);
      } else
      if (type == "PropertyOffsets") {
        this.propertydb.offsets.push(uri);
      } else
      if (type == "PropertyValues") {
        this.propertydb.values.push(uri);
      }
    }

    //parse assets which we will need immediately when
    // setting up the scene (whether embedded or not)
    var path = asset["URI"];
    var contents = null; //if the data was in the zip, this will contain it
    if (path.indexOf("embed:/") == 0) {
      path = path.substr(7);
      contents = unzip.decompress(path);
    }

    if (type == "ProteinMaterials") {
      //For simple materials, we want the file named "Materials.json" and not "ProteinMaterials.json"
      if (path.indexOf("Protein") == -1) {
        this.loadAsyncResource(loadContext, path, contents, function (data) {
          var jdr = new _common_InputStream__WEBPACK_IMPORTED_MODULE_4__["InputStream"](data);
          var byteLength = data.byteLength;
          if (0 < byteLength) {
            svf.materials = JSON.parse(jdr.getString(byteLength));
          } else {
            svf.materials = null;
          }
        });
      } else {
        //Also parse the Protein materials -- at the moment this helps
        //With some Prism materials that have properties we can handle, but
        //are not in the Simple variant.
        this.loadAsyncResource(loadContext, path, contents, function (data) {
          var jdr = new _common_InputStream__WEBPACK_IMPORTED_MODULE_4__["InputStream"](data);
          var byteLength = data.byteLength;
          if (0 < byteLength) {
            try {
              svf.proteinMaterials = JSON.parse(jdr.getString(byteLength));
            } catch (e) {
              //TS: This is dumb, but what can we do... Revit extractor had (has?) a bug where
              //materials are written as ANSI instead of UTF8 encoded. So we have this fallback attempt
              var ansi = "";
              for (var i = 0; i < data.length; i++) {
                ansi += String.fromCharCode(data[i]);}

              try {
                svf.proteinMaterials = JSON.parse(ansi);
              } catch (e) {
                console.error("Failed to parse Protein materials file either as UTF8 or ANSI");
              }
            }
          } else {
            svf.proteinMaterials = null;
          }
        });
      }
    } else
    if (type == "FragmentList") {

      this.parseFragmentList(asset, loadContext, path, contents);

    } else
    if (type == "GeometryMetadataList") {

      this.parseGeometryMetadata(asset, loadContext, path, contents);

    } else
    if (type == "PackFile") {

      if (path.indexOf("CameraDefinitions.bin") != -1) {
        this.loadAsyncResource(loadContext, path, contents, function (data) {
          svf.camDefPack = new _PackReader__WEBPACK_IMPORTED_MODULE_5__["PackFileReader"](data);
        });
      } else

      if (path.indexOf("CameraList.bin") != -1) {
        this.loadAsyncResource(loadContext, path, contents, function (data) {
          svf.camInstPack = new _PackReader__WEBPACK_IMPORTED_MODULE_5__["PackFileReader"](data);
        });
      } else

      if (path.indexOf("LightDefinitions.bin") != -1) {
        this.loadAsyncResource(loadContext, path, contents, function (data) {
          svf.lightDefPack = new _PackReader__WEBPACK_IMPORTED_MODULE_5__["PackFileReader"](data);
        });
      } else

      if (path.indexOf("LightList.bin") != -1) {
        this.loadAsyncResource(loadContext, path, contents, function (data) {
          svf.lightInstPack = new _PackReader__WEBPACK_IMPORTED_MODULE_5__["PackFileReader"](data);
        });
      }
    } else
    if (type == "Animations") {
      this.loadAsyncResource(loadContext, path, contents, function (data) {
        var jdr = new _common_InputStream__WEBPACK_IMPORTED_MODULE_4__["InputStream"](data);
        var byteLength = data.byteLength;
        if (0 < byteLength) {
          svf.animations = JSON.parse(jdr.getString(byteLength));

          Object(_common_SvfPlacementUtils__WEBPACK_IMPORTED_MODULE_8__["transformAnimations"])(svf);
        } else {
          svf.animations = null;
        }
      });
    } else
    if (type == "Topology") {

      // save the path for later download.
      svf.topologyPath = loadContext.basePath + path;
      svf.topologySizeMB = megaBytes;

    } else
    if (loadContext.loadInstanceTree && (
    type == "InstanceTree" || type == "InstanceTreeTree")) {//Yes, the typo does occur in some older files

      //Instance tree node serialization version is stored in the type set
      var version = typeset ? typeset[0]["version"] : 1;

      this.parseInstanceTree(loadContext, path, contents, version);
    }
  }


  if (this.pendingRequests == 0)
  this.postLoad(loadContext);

  delete this.unzip;
};

Package.prototype.addTransparencyFlagsToMaterials = function (mats) {
  for (var id in mats) {
    var mat = mats[id];
    var userAssets = mat["userassets"];
    var innerMats = mat["materials"];
    var innerMat = innerMats[userAssets[0]];
    mat.transparent = innerMat["transparent"];
  }
};

Package.prototype.postLoadOfCam = function (loadContext) {

  //Combine camera instances and camera definitions -- we need
  //both to be loaded to get the camera list
  if (this.camDefPack && this.camInstPack) {
    for (var k = 0, kEnd = this.camInstPack.getEntryCounts(); k < kEnd; k++) {
      var inst = Object(_Instances__WEBPACK_IMPORTED_MODULE_7__["readInstance"])(this.camInstPack, k, this.placementTransform, this.globalOffset);
      var cam = Object(_Cameras__WEBPACK_IMPORTED_MODULE_9__["readCameraDefinition"])(this.camDefPack, inst);

      //Apply any instance transform to get the camera to world space.
      if (inst.transform) {
        // Apply any transformations associated with the camera
        // to put it into world space
        inst.transform.transformPoint(cam.position);
        inst.transform.transformPoint(cam.target);
        inst.transform.transformDirection(cam.up);
      }

      // Fix camera's target if it is not inside the scene's bounding box.
      var bbox = this.bbox;
      if (bbox && !bbox.containsPoint(cam.target)) {
        var distanceFromCenter = new _wgs_scene_LmvVector3__WEBPACK_IMPORTED_MODULE_2__["LmvVector3"]().copy(bbox.center()).distanceTo(cam.position);
        var direction = new _wgs_scene_LmvVector3__WEBPACK_IMPORTED_MODULE_2__["LmvVector3"]().copy(cam.target).sub(cam.position).normalize().multiplyScalar(distanceFromCenter);
        cam.target = new _wgs_scene_LmvVector3__WEBPACK_IMPORTED_MODULE_2__["LmvVector3"]().copy(cam.position).add(direction);
      }

      this.cameras.push(cam);
    }

    delete this.camDefPack;
    delete this.camInstPack;
  }

};

Package.prototype.postLoadOfLight = function (loadContext) {

  //Lights need the same thing as the cameras
  if (this.lightDefPack && this.lightInstPack) {
    for (var k = 0, kEnd = this.lightInstPack.getEntryCounts(); k < kEnd; k++) {
      var inst = Object(_Instances__WEBPACK_IMPORTED_MODULE_7__["readInstance"])(this.lightInstPack, k, this.placementTransform, this.globalOffset);
      this.lights.push(Object(_Lights__WEBPACK_IMPORTED_MODULE_10__["readLightDefinition"])(this.lightDefPack, inst.definition));
    }

    delete this.lightInstPack;
    delete this.lightDefPack;
  }

};

Package.prototype.postLoadOfFragments = function (loadContext) {

  //Post processing step -- splice geometry metadata information
  //into the fragments list, in case it was given separately
  //TODO: consider keeping the geom metadata as is instead of splicing
  //into the fragments, as it would be more efficient --
  //but that would require special handling on the viewer side,
  //changing the fragment filter code, etc.
  var frags = this.fragments;

  if (this.geomMetadata) {

    //reusing the geomDataIndexes array to store
    //polygon counts, now that we don't need the geomIndexes
    //after this loop.
    frags.polygonCounts = frags.geomDataIndexes;

    var gm = this.geomMetadata;

    // Holds the indexes to the topology data.
    if (gm.topoIndexes != undefined) {
      frags.topoIndexes = new Int32Array(frags.length);
    }

    for (var i = 0, iEnd = frags.length; i < iEnd; i++) {
      var geomIndex = frags.geomDataIndexes[i];
      frags.entityIndexes[i] = gm.entityIndexes[geomIndex];
      frags.packIds[i] = gm.packIds[geomIndex];

      frags.polygonCounts[i] = gm.primCounts[geomIndex];
      this.primitiveCount += gm.primCounts[geomIndex];

      // Fills in the indexes to the topology data.
      if (gm.topoIndexes != undefined) {
        frags.topoIndexes[i] = gm.topoIndexes[geomIndex];
      }
    }

    frags.geomDataIndexes = null;

    this.geomMetadata = null;
  }

  //Build a map from mesh to its referencing fragment(s)
  //So that we can quickly find them once meshes begin loading
  //incrementally. This requires the packIds and entityIndexes
  //to be known per fragment, so it happens after geometry metadata
  //is resolved above
  this.calculateMesh2Frag(frags);
};

Package.prototype.calculateMesh2Frag = function (frags) {
  var mesh2frag = frags.mesh2frag = {};
  var packIds = frags.packIds;
  var entityIndexes = frags.entityIndexes;

  for (var i = 0, iEnd = frags.length; i < iEnd; i++) {
    var meshid = packIds[i] + ":" + entityIndexes[i];

    var meshRefs = mesh2frag[meshid];
    if (meshRefs === undefined) {
      //If it's the first fragments for this mesh,
      //store the index directly -- most common case.
      mesh2frag[meshid] = i;
    } else
    if (!Array.isArray(meshRefs)) {
      //otherwise put the fragments that
      //reference the mesh into an array
      mesh2frag[meshid] = [meshRefs, i];
    } else
    {
      //already is an array
      meshRefs.push(i);
    }
  }
};

Package.prototype.postLoadOfBBox = function (loadContext) {

  //if we don't know the overall scene bounds, compute them from the
  //fragment boxes
  if (!this.bbox || loadContext.placementTransform) {

    var totalbox = [Infinity, Infinity, Infinity, -Infinity, -Infinity, -Infinity];
    var frags = this.fragments;
    var fragBoxes = frags.boxes;

    for (var f = 0, fEnd = frags.length; f < fEnd; f++) {
      var bboff = f * 6;
      var i;
      for (i = 0; i < 3; i++) {
        if (fragBoxes[bboff + i] < totalbox[i])
        totalbox[i] = fragBoxes[bboff + i];}

      for (i = 3; i < 6; i++) {
        if (fragBoxes[bboff + i] > totalbox[i])
        totalbox[i] = fragBoxes[bboff + i];}
    }

    this.bbox = {
      min: { x: totalbox[0], y: totalbox[1], z: totalbox[2] },
      max: { x: totalbox[3], y: totalbox[4], z: totalbox[5] } };

  }


};

Package.prototype.postLoadOfObjectIds = function (loadContext) {

  // If object ids are specified, clean up pack file list by only keeping the packs that's
  // we intended to load.
  var ids = loadContext.objectIds;
  if (ids != null) {
    var packIds = [];
    var fragIndexes = [];
    // Pick out pack ids that referenced by fragments with specified db ids.
    for (var i = 0; i < ids.length; ++i) {
      for (var j = 0; j < this.fragments.length; ++j) {
        if (this.fragments.fragId2dbId[j] == ids[i]) {
          packIds.push(this.fragments.packIds[j]);
          fragIndexes.push(j);
        }
      }
    }

    // Two fragments could reference same pack file, so packIds may contain duplicates.
    // Remove any duplicates here.
    var end = 1,n = packIds.length; // end is the length of reduced array.
    for (var i = 1; i < n;) {
      while (i < n && packIds[i] == packIds[i - 1]) {
        ++i;}
      if (n == i)
      break;
      packIds[end++] = packIds[i++];
    }
    packIds.splice(end - 1, n - end);

    // Reduce pack files based on selected pack ids.
    var packs = [];
    for (var i = 0; i < this.geompacks.length; ++i) {
      for (var j = 0; j < packIds.length; ++j) {
        // LMVTK pre-2.0 release uses integers for pack file id.
        // LMVTK 2.0 release uses integer + .pf as id.
        // We just drop the suffix here as we did in SVFLoader.
        // More info: https://git.autodesk.com/A360/LMVTK/commit/68b8c07a643a7ac39ecd5651d031d170e3a325be
        if (parseInt(this.geompacks[i].id) == packIds[j])
        packs.push(this.geompacks[i]);
      }
    }
    this.geompacks = packs;

    var bb = Object(_Fragments__WEBPACK_IMPORTED_MODULE_6__["filterFragments"])(this.fragments, fragIndexes);
    this.bbox = {
      min: { x: bb[0], y: bb[1], z: bb[2] },
      max: { x: bb[3], y: bb[4], z: bb[5] } };

  }

};

Package.prototype.postLoadComplete = function (loadContext) {

  loadContext.loadDoneCB("svf");

  if (this.fragments.polygonCounts) {
    //Build the R-Tree
    var t0 = performance.now();
    var mats = this.materials ? this.materials["materials"] : null;
    if (mats)
    this.addTransparencyFlagsToMaterials(mats);
    this.bvh = new _wgs_scene_BVHBuilder__WEBPACK_IMPORTED_MODULE_1__["BVHBuilder"](this.fragments, mats);
    this.bvh.build(loadContext.bvhOptions);
    var t1 = performance.now();
    loadContext.worker.debug("BVH build time (worker thread):" + (t1 - t0));

    // In normal mode, just post back BVH as svf is already posted back earlier.
    loadContext.loadDoneCB("bvh");
  }

  loadContext.loadDoneCB("done");
};

Package.prototype.postLoad = function (loadContext) {

  this.postLoadOfCam(loadContext);

  this.postLoadOfLight(loadContext);

  this.postLoadOfFragments(loadContext);

  this.postLoadOfBBox(loadContext);

  this.postLoadOfObjectIds(loadContext);

  this.postLoadComplete(loadContext);
};

/***/ }),

/***/ "./src/file-loaders/net/ErrorCodes.js":
/*!********************************************!*\
  !*** ./src/file-loaders/net/ErrorCodes.js ***!
  \********************************************/
/*! exports provided: ErrorCodes, errorCodeString, getErrorCode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorCodes", function() { return ErrorCodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errorCodeString", function() { return errorCodeString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getErrorCode", function() { return getErrorCode; });

/**
 * Error code constants
 * These constants will be used in {@link Callbacks#onGenericError} functions.
 *
 * @namespace Autodesk.Viewing.ErrorCodes
 */
var ErrorCodes = {
  /** 
                           * An unknown failure has occurred. 
                           * @constant
                           * @memberof Autodesk.Viewing.ErrorCodes
                           * @default
                           */
  UNKNOWN_FAILURE: 1,

  /** 
                       * Bad data (corrupted or malformed) was encountered. 
                       * @constant
                       * @memberof Autodesk.Viewing.ErrorCodes
                       * @default
                       */
  BAD_DATA: 2,

  /** 
                * A network failure was encountered. 
                * @constant
                * @memberof Autodesk.Viewing.ErrorCodes
                * @default
                */
  NETWORK_FAILURE: 3,

  /** 
                       * Access was denied to a network resource (HTTP 403)
                       * @constant
                       * @memberof Autodesk.Viewing.ErrorCodes
                       * @default
                       */
  NETWORK_ACCESS_DENIED: 4,

  /** 
                             * A network resource could not be found (HTTP 404)
                             * @constant
                             * @memberof Autodesk.Viewing.ErrorCodes
                             * @default
                             */
  NETWORK_FILE_NOT_FOUND: 5,

  /** 
                              * A server error was returned when accessing a network resource (HTTP 5xx)
                              * @constant
                              * @memberof Autodesk.Viewing.ErrorCodes
                              * @default
                              */
  NETWORK_SERVER_ERROR: 6,

  /** 
                            * An unhandled response code was returned when accessing a network resource (HTTP 'everything else')
                            * @constant
                            * @memberof Autodesk.Viewing.ErrorCodes
                            * @default
                            */
  NETWORK_UNHANDLED_RESPONSE_CODE: 7,

  /** 
                                       * Browser error = webGL is not supported by the current browser
                                       * @constant
                                       * @memberof Autodesk.Viewing.ErrorCodes
                                       * @default
                                       */
  BROWSER_WEBGL_NOT_SUPPORTED: 8,

  /** 
                                   * There is nothing viewable in the fetched document 
                                   * @constant
                                   * @memberof Autodesk.Viewing.ErrorCodes
                                   * @default
                                   */
  BAD_DATA_NO_VIEWABLE_CONTENT: 9,

  /** 
                                    * Browser error = webGL is supported, but not enabled 
                                    * @constant
                                    * @memberof Autodesk.Viewing.ErrorCodes
                                    * @default
                                    */
  BROWSER_WEBGL_DISABLED: 10,

  /**
                               * There is no geometry in loaded model
                               * @constant
                               * @memberof Autodesk.Viewing.ErrorCodes
                               * @default
                               */
  BAD_DATA_MODEL_IS_EMPTY: 11,

  /** 
                                * Collaboration server error
                                * @constant
                                * @memberof Autodesk.Viewing.ErrorCodes
                                * @default
                                */
  RTC_ERROR: 12,

  /** 
                  * The extension of the loaded file is not supported 
                  * @constant
                  * @memberof Autodesk.Viewing.ErrorCodes
                  * @default
                  */
  UNSUPORTED_FILE_EXTENSION: 13,

  /** 
                                  * Viewer error: wrong or forbidden usage of the viewer
                                  * @constant
                                  * @memberof Autodesk.Viewing.ErrorCodes
                                  * @default
                                  */
  VIEWER_INTERNAL_ERROR: 14,

  /** 
                              * WebGL error while loading a model, typically due to IE11 limitations
                              * @constant
                              * @memberof Autodesk.Viewing.ErrorCodes 
                              * @default
                              */
  WEBGL_LOST_CONTEXT: 15 };



function errorCodeString(errorCode) {
  return "ErrorCode:" + errorCode + ".";
}

function getErrorCode(networkStatus)
{
  if (networkStatus === 403 || networkStatus === 401)
  {
    return ErrorCodes.NETWORK_ACCESS_DENIED;
  } else
  if (networkStatus === 404)
  {
    return ErrorCodes.NETWORK_FILE_NOT_FOUND;
  } else
  if (networkStatus >= 500)
  {
    return ErrorCodes.NETWORK_SERVER_ERROR;
  }
  return ErrorCodes.NETWORK_UNHANDLED_RESPONSE_CODE;
}

/***/ }),

/***/ "./src/file-loaders/net/Xhr.js":
/*!*************************************!*\
  !*** ./src/file-loaders/net/Xhr.js ***!
  \*************************************/
/*! exports provided: ViewingService, pathToURL, textToArrayBuffer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewingService", function() { return ViewingService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pathToURL", function() { return pathToURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textToArrayBuffer", function() { return textToArrayBuffer; });
/* harmony import */ var _logger_Logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../logger/Logger */ "./src/logger/Logger.js");
/* harmony import */ var _ErrorCodes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ErrorCodes */ "./src/file-loaders/net/ErrorCodes.js");
/* harmony import */ var _lmvtk_common_StringUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lmvtk/common/StringUtils */ "./src/file-loaders/lmvtk/common/StringUtils.js");
/* harmony import */ var _endpoints__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./endpoints */ "./src/file-loaders/net/endpoints.js");
/* harmony import */ var _compat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../compat */ "./src/compat.js");





var pako = __webpack_require__(/*! pako */ "./node_modules/pako/index.js");

var ViewingService = {};

var warnedGzip = false;

// Simplify Unix style file path. For example, turn '/a/./b/../../c/' into "/c".
// Required to deal with OSS crappy URNs where there are embedded '..'.
function simplifyPath(path) {

  var elements = path.split('/');
  if (elements.length == 0)
  return path;

  var stack = [];
  for (var index = 0; index < elements.length; ++index) {
    var c = elements[index];
    if (c === '.') {
      continue;
    }if (c === '..' && stack.length) {
      stack.pop();
    } else {
      stack.push(c);
    }
  }

  // Great, the path commits suicide.
  if (stack.length == 0)
  return '';

  return stack.join("/");
}

//Maps a relative resource path (like a pack file or texture)
//to an absolute URL. If absoluteBasePath is specified, it is
//used to construct the absolute URL, otherwise the window location
//is used.
function pathToURL(path, absoluteBasePath) {

  if (path.indexOf("://") !== -1 ||
  path.indexOf("urn:") === 0) {
    return path;
  }

  if (absoluteBasePath) {
    return absoluteBasePath + path;
  }

  if (typeof window === "undefined")
  return path;

  var rootRelPath = window.location.pathname;
  //chop off the index.html part
  var lastSlash = rootRelPath.lastIndexOf("/");
  rootRelPath = rootRelPath.substr(0, lastSlash + 1);
  var absPath = window.location.protocol + "//" + window.location.host + rootRelPath + path;
  return absPath;
}


ViewingService.simplifyPath = simplifyPath;

function textToArrayBuffer(textBuffer, startOffset) {
  var len = textBuffer.length - startOffset;
  var arrayBuffer = new ArrayBuffer(len);
  var ui8a = new Uint8Array(arrayBuffer, 0);
  for (var i = 0, j = startOffset; i < len; i++, j++) {
    ui8a[i] = textBuffer.charCodeAt(j) & 0xff;}
  return ui8a;
}


ViewingService.OSS_PREFIX = "urn:adsk.objects:os.object:";

/**
                                                            * Construct full URL given a potentially partial viewing service "urn:" prefixed resource
                                                            * @returns {string}
                                                            */
ViewingService.generateUrl = function (baseUrl, api, path) {

  path = path || "";

  //NODE
  if (Object(_compat__WEBPACK_IMPORTED_MODULE_4__["isNodeJS"])() && !isRemotePath(baseUrl, path)) {
    return path;
  }

  path = simplifyPath(path);

  //V2 only accepts URL encoded paths
  var urnidx = path.indexOf("urn:");
  var qidx = path.indexOf("?");
  if (urnidx != -1) {
    if (qidx !== -1) {
      //TODO: not sure this will happen, queryParams are normally
      //passed in separately in the options object
      path = path.slice(0, urnidx) + encodeURIComponent(path.slice(urnidx, qidx)) + path.slice(qidx);
    } else {
      path = path.slice(0, urnidx) + encodeURIComponent(path.slice(urnidx));
    }
  } else {
    path = encodeURI(path);
  }

  //Check if it's a viewing service item path
  //Public/static content will not have the urn: prefix.
  //So URL construction is a no-op
  if (!api || decodeURIComponent(path).indexOf('urn:') !== 0) {
    if (isRemotePath(null, path))
    return path;else

    return baseUrl + path;
  }

  //Remove "urn:" prefix when getting URN-based stuff (manifests and thumbnails)
  if (api !== 'items') {
    path = path.substr(6);
  }

  switch (api) {
    case "items":return _endpoints__WEBPACK_IMPORTED_MODULE_3__["endpoint"].getItemApi(baseUrl, path);
    case "bubbles":return _endpoints__WEBPACK_IMPORTED_MODULE_3__["endpoint"].getManifestApi(baseUrl, path);
    case "thumbnails":return _endpoints__WEBPACK_IMPORTED_MODULE_3__["endpoint"].getThumbnailApi(baseUrl, path);}

};

function isRemotePath(baseUrl, path) {
  if (path.indexOf("file://") !== -1)
  return false;
  if (path.indexOf("://") !== -1)
  return true;
  if (baseUrl)
  return true;
}


//Conditional GET request implementation for node vs. browser
if (Object(_compat__WEBPACK_IMPORTED_MODULE_4__["isNodeJS"])()) {

  (function () {

    var fs = __webpack_require__(/*! fs */ "./node_modules/node-libs-browser/mock/empty.js");
    var zlib = __webpack_require__(/*! zlib */ "./node_modules/node-libs-browser/mock/empty.js");
    var https = __webpack_require__(/*! https */ "./node_modules/node-libs-browser/mock/empty.js");
    var http = __webpack_require__(/*! http */ "./node_modules/node-libs-browser/mock/empty.js");
    var urllib = __webpack_require__(/*! url */ "./node_modules/node-libs-browser/mock/empty.js");

    var httpsAgent = new https.Agent({
      keepAlive: true,
      keepAliveMsecs: 100,
      maxSockets: 10 });

    var httpAgent = new http.Agent({
      keepAlive: true,
      keepAliveMsecs: 100,
      maxSockets: 10 });



    var forgeAgent = new https.Agent({ maxSockets: 10 });

    function loadLocalFile(url, onSuccess, onFailure, options) {

      if (url.indexOf("file://") === 0)
      url = url.substr(7);

      function postProcess(data) {
        if (options.responseType === "json") {
          try {
            return JSON.parse(data.toString("utf8"));
          } catch (e) {
            onFailure(e);
          }
        }
        return data;
      }

      //Always use async on Node
      fs.readFile(url, function (error, data) {
        if (error) {
          onFailure(0, 0, { httpStatusText: error, url: url });
        } else {
          if (data[0] === 31 && data[1] === 139) {
            zlib.gunzip(data, null, function (error, data) {
              if (error)
              onFailure(0, 0, { httpStatusText: error, url: url });else
              {
                data = postProcess(data);
                if (options.ondata)
                options.ondata(data);
                onSuccess(data);
              }
            });
          } else {
            data = postProcess(data);
            if (options.ondata)
            options.ondata(data);
            onSuccess(data);
          }
        }
      });
    }

    function needsGunzip(res, pathname) {

      if (res.headers['content-encoding'] === 'gzip')
      return true;

      //These SVF related files come pre-gzipped
      //regardless of content-encoding header

      if (pathname.endsWith(".json.gz"))
      return true;

      if (pathname.endsWith("FragmentList.pack"))
      return true;

      if (pathname.endsWith("LightList.bin"))
      return true;

      if (pathname.endsWith("CameraList.bin"))
      return true;

      if (pathname.endsWith("CameraDefinitions.bin"))
      return true;

      if (pathname.endsWith("LightDefinitions.bin"))
      return true;

      return false;
    }


    /**
       *  Performs a GET/HEAD request to Viewing Service. (Node.js specific implementation)
       *
       * @param {string} viewingServiceBaseUrl - The base url for the viewing service.
       * @param {string} api - The api to call in the viewing service.
       *  @param {string} url - The url for the request.
       *  @param {function} onSuccess - A function that takes a single parameter that represents the response
       *                                returned if the request is successful.
       *  @param {function} onFailure - A function that takes an integer status code, and a string status, which together represent
       *                                the response returned if the request is unsuccessful, and a third data argument, which
       *                                has more information about the failure.  The data is a dictionary that minimally includes
       *                                the url, and an exception if one was raised.
       *  @param {Object=} [options] - A dictionary of options that can include:
       *                               headers - A dictionary representing the additional headers to add.
       *                               queryParams - A string representing the query parameters
       *                               responseType - A string representing the response type for this request.
       *                               {boolean} [encodeUrn] - when true, encodes the document urn if found.
       *                               {boolean} [noBody] - when true, will perform a HEAD request
       */
    ViewingService.rawGet = function (viewingServiceBaseUrl, api, url, onSuccess, onFailure, options) {

      options = options || {};

      url = ViewingService.generateUrl(viewingServiceBaseUrl, api, url);

      if (!isRemotePath(viewingServiceBaseUrl, url)) {
        loadLocalFile(url, onSuccess, onFailure, options);
        return;
      }

      if (options.queryParams) {
        var concatSymbol = url.indexOf('?') === -1 ? '?' : '&';
        url = url + concatSymbol + options.queryParams;
      }

      var parsed = urllib.parse(url);

      var req = {
        host: parsed.hostname,
        port: parsed.port,
        method: options.method || "GET",
        path: parsed.path,
        headers: {},
        retryCount: 0,
        agent: parsed.protocol === "https:" ? httpsAgent : httpAgent };


      //Don't overload derivative service with requests
      if (req.host.endsWith(".api.autodesk.com") && (
      req.path.startsWith("/derivativeservice") || req.path.startsWith("/modelderivative"))) {
        req.agent = forgeAgent;
      }

      if (options.headers) {
        for (var p in options.headers) {
          req.headers[p] = options.headers[p];
        }
      }

      if (!req.headers['accept-encoding']) {
        req.headers['accept-encoding'] = 'gzip, deflate';
      }

      if (options.range) {
        req.headers["Range"] = "bytes=" + options.range.min + "-" + options.range.max;
      }

      //Undo hack used to make streaming receive work on browser XHR -- the hack
      //involves processing the response as text, so responseType is set to "".
      if (options.ondata || options.onprogress) {
        options.responseType = "arraybuffer";
      }

      var request = (parsed.protocol === "https:" ? https : http).request(req, function (res) {

        var hasError = !(res.statusCode >= 200 && res.statusCode < 400);

        //Pipe through gunzip if needed
        var stream = res;
        if (!hasError && needsGunzip(res, parsed.pathname) && !options.skipDecompress) {
          stream = res.pipe(zlib.createGunzip());
        }

        //Decode as UTF8 string if needed
        if (options.responseType === "json" || options.responseType === "text" || !options.responseType)
        stream.setEncoding('utf8');

        var chunks = [];
        var receiveBuffer = Buffer.allocUnsafe(65536);
        var receivedLen = 0;
        stream.on('data', function (chunk) {

          //The onprogress callback is special in that it
          //want us to accumulate the data as we receive it, and it only looks at it.
          if (options.onprogress) {

            if (chunk.length + receivedLen > receiveBuffer.length) {
              var nb = Buffer.allocUnsafe(0 | Math.ceil(receiveBuffer.length * 1.5));
              receiveBuffer.copy(nb, 0, 0, receivedLen);
              receiveBuffer = nb;
            }

            chunk.copy(receiveBuffer, receivedLen, 0, chunk.length);
            receivedLen += chunk.length;
            var abort = options.onprogress(receiveBuffer, receivedLen);
            if (abort)
            request.abort();
            return;
          } else {
            chunks.push(chunk);
          }

          if (options.ondata) {
            options.ondata(chunk);
          }

        });

        stream.on('end', function () {

          if (res.statusCode >= 200 && res.statusCode < 400) {

            if (options.responseType === "json") {
              var jsobj = JSON.parse(chunks.join(''));
              onSuccess(jsobj);
              return;
            }

            if (options.responseType === "text" || options.responseType === "") {
              var str = chunks.join('');
              onSuccess(str);
              return;
            }

            var buf = options.onprogress ? receiveBuffer : Buffer.concat(chunks);

            if (!options.skipDecompress && buf[0] === 31 && buf[1] === 139) {

              _logger_Logger__WEBPACK_IMPORTED_MODULE_0__["logger"].warn("An LMV resource (" + url + ") was double compressed, or Content-Encoding header missing");

              try {
                buf = zlib.gunzipSync(buf);
                receivedLen = buf.length;
              } catch (err) {
                onFailure(_ErrorCodes__WEBPACK_IMPORTED_MODULE_1__["ErrorCodes"].BAD_DATA,
                "Malformed data received when requesting file",
                { "url": url, "exception": err.toString(), "stack": err.stack });
              }
            }

            onSuccess(buf, receivedLen);

          } else {

            if (onFailure)
            onFailure(res.statusCode, res.statusMessage, { url: url });

          }
        });

      });

      request.on("error", function (error) {
        if (onFailure)
        onFailure(error.code, error.message, { url: url });
      });

      if (options.postData) {
        request.write(options.postData);
      }

      request.end();

    };

  })();

} else {

  var Pend = __webpack_require__(/*! pend */ "./node_modules/pend/index.js");
  var xhrThrottle = new Pend();
  xhrThrottle.max = 25;

  ViewingService.rawGet = function (viewingServiceBaseUrl, api, url, onSuccess, onFailure, options) {
    xhrThrottle.go(function (pendCB) {
      var onFailureWrapped = function onFailureWrapped() {
        pendCB();for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {args[_key] = arguments[_key];}
        onFailure && onFailure.apply(onFailure, args);
      };

      var onSuccessWrapped = function onSuccessWrapped() {
        pendCB();for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {args[_key2] = arguments[_key2];}
        onSuccess && onSuccess.apply(onSuccess, args);
      };

      ViewingService._rawGet(viewingServiceBaseUrl, api, url, onSuccessWrapped, onFailureWrapped, options);
    });
  };

  /**
      *  Performs a GET/HEAD request to Viewing Service.
      *
      * @param {string} viewingServiceBaseUrl - The base url for the viewing service.
      * @param {string} api - The api to call in the viewing service.
      *  @param {string} url - The url for the request.
      *  @param {function} onSuccess - A function that takes a single parameter that represents the response
      *                                returned if the request is successful.
      *  @param {function} onFailure - A function that takes an integer status code, and a string status, which together represent
      *                                the response returned if the request is unsuccessful, and a third data argument, which
      *                                has more information about the failure.  The data is a dictionary that minimally includes
      *                                the url, and an exception if one was raised.
      *  @param {Object=} [options] - A dictionary of options that can include:
      *                               headers - A dictionary representing the additional headers to add.
      *                               queryParams - A string representing the query parameters
      *                               responseType - A string representing the response type for this request.
      *                               {boolean} [encodeUrn] - when true, encodes the document urn if found.
      *                               {boolean} [noBody] - when true, will perform a HEAD request
      */
  ViewingService._rawGet = function (viewingServiceBaseUrl, api, url, onSuccess, onFailure, options) {

    options = options || {};

    url = ViewingService.generateUrl(viewingServiceBaseUrl, api, url);

    if (options.queryParams) {
      var concatSymbol = url.indexOf('?') === -1 ? '?' : '&';
      url = url + concatSymbol + options.queryParams;
    }

    var request = new XMLHttpRequest();

    function onError(e) {
      if (onFailure)
      onFailure(request.status, request.statusText, { url: url });
    }

    function fixJsonResponse(response) {
      if (options.responseType === "json") {
        try {
          if (response instanceof Uint8Array) {
            //This should only happen in the node.js case so we can do toString
            //instead of using the LMV utf8 converter.
            return Object(_lmvtk_common_StringUtils__WEBPACK_IMPORTED_MODULE_2__["blobToJson"])(response);
          } else if (typeof response === "string") {
            return JSON.parse(response);
          }
        } catch (e) {}
      }
      return response;
    }

    function onLoad(e) {
      if (request.status === 200 || request.status === 206) {

        if (request.response &&
        request.response instanceof ArrayBuffer) {
          var rawbuf = new Uint8Array(request.response);
          // It's possible that if the Content-Encoding header is set,
          // the browser unzips the file by itself, so let's check if it did.
          // Return raw buffer if skip decompress is true
          if (!options.skipDecompress && rawbuf[0] === 31 && rawbuf[1] === 139) {
            if (!warnedGzip) {
              warnedGzip = true;
              _logger_Logger__WEBPACK_IMPORTED_MODULE_0__["logger"].warn("An LMV resource (" + url + ") was not uncompressed by the browser. This hurts performance. Check the Content-Encoding header returned by the server and check whether you're getting double-compressed streams. The warning prints only once but it's likely the problem affects multiple resources.");
            }
            try {
              rawbuf = pako.ungzip(rawbuf);
            } catch (err) {
              onFailure(_ErrorCodes__WEBPACK_IMPORTED_MODULE_1__["ErrorCodes"].BAD_DATA,
              "Malformed data received when requesting file",
              { "url": url, "exception": err.toString(), "stack": err.stack });
            }
          }

          onSuccess && onSuccess(fixJsonResponse(rawbuf));
        } else
        {
          var res = request.response;
          if (!res && (!options.responseType || options.responseType === "text"))
          res = request.responseText;

          onSuccess && onSuccess(fixJsonResponse(res));
        }
      } else
      {
        onError(e);
      }
    }

    try {

      var isAsync = options.hasOwnProperty('asynchronous') ? options.asynchronous : true;
      request.open(options.method || (options.noBody ? 'HEAD' : 'GET'), url, isAsync);

      if (options.hasOwnProperty('responseType')) {
        request.responseType = options.responseType;
      }

      request.withCredentials = true;
      if (options.hasOwnProperty("withCredentials"))
      request.withCredentials = options.withCredentials;

      if (options.range) {
        request.setRequestHeader("Range", "bytes=" + options.range.min + "-" + options.range.max);
      }

      if (options.headers) {
        for (var header in options.headers) {
          request.setRequestHeader(header, options.headers[header]);

          // Disable withCredentials if header is Authorization type
          // NOTE: using withCredentials attaches cookie data to request
          if (header.toLocaleLowerCase() === "authorization") {
            request.withCredentials = false;
          }
        }
      }

      if (isAsync) {
        request.onload = onLoad;
        request.onerror = onError;
        request.ontimeout = onError;

        if (options.ondata || options.onprogress) {

          //Set up incremental progress notification
          //if needed. We have to do some magic in order
          //to get the received data progressively.
          //https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest
          request.overrideMimeType('text/plain; charset=x-user-defined');
          options._dlProgress = {
            streamOffset: 0 };


          request.onreadystatechange = function () {

            if (request.readyState > 2 && request.status === 200) {

              if (options.ondata) {

                var textBuffer = request.responseText;

                // No new data coming in.
                if (options._dlProgress.streamOffset >= textBuffer.length)
                return;

                var arrayBuffer = textToArrayBuffer(textBuffer, options._dlProgress.streamOffset);

                options._dlProgress.streamOffset = textBuffer.length;

                options.ondata(arrayBuffer);

              } else if (options.onprogress) {

                var abort = options.onprogress(request.responseText);
                if (abort)
                request.abort();
              }
            }
          };
        }
      }

      request.send(options.postData);

      if (!isAsync) {
        onLoad();
      }
    }
    catch (e) {
      onFailure(request.status, request.statusText, { url: url, exception: e });
    }
  };

} //rawGet conditionsl implementation

// Create the default failure callback.
//
ViewingService.defaultFailureCallback = function (httpStatus, httpStatusText, data) {
  if (httpStatus == 403) {
    this.raiseError(
    _ErrorCodes__WEBPACK_IMPORTED_MODULE_1__["ErrorCodes"].NETWORK_ACCESS_DENIED,
    "Access denied to remote resource",
    { "url": data.url, "httpStatus": httpStatus, "httpStatusText": httpStatusText });
  } else
  if (httpStatus == 404) {
    this.raiseError(
    _ErrorCodes__WEBPACK_IMPORTED_MODULE_1__["ErrorCodes"].NETWORK_FILE_NOT_FOUND,
    "Remote resource not found",
    { "url": data.url, "httpStatus": httpStatus, "httpStatusText": httpStatusText });
  } else
  if (httpStatus >= 500 && httpStatus < 600) {
    this.raiseError(
    _ErrorCodes__WEBPACK_IMPORTED_MODULE_1__["ErrorCodes"].NETWORK_SERVER_ERROR,
    "Server error when accessing resource",
    { "url": data.url, "httpStatus": httpStatus, "httpStatusText": httpStatusText });
  } else
  if (data.exception) {
    this.raiseError(
    _ErrorCodes__WEBPACK_IMPORTED_MODULE_1__["ErrorCodes"].NETWORK_FAILURE,
    "Network failure",
    { "url": data.url, "exception": data.exception.toString(), "stack": data.exception.stack });
  } else
  {
    this.raiseError(
    _ErrorCodes__WEBPACK_IMPORTED_MODULE_1__["ErrorCodes"].NETWORK_UNHANDLED_RESPONSE_CODE,
    "Unhandled response code from server",
    { "url": data.url, "httpStatus": httpStatus, "httpStatusText": httpStatusText, data: data });
  }
};



function copyOptions(loadContext, options) {

  //Those are the usual defaults when called from the LMV worker

  if (!options.hasOwnProperty("responseType"))
  options.responseType = "arraybuffer";

  //Add options junk we got from the main thread context

  if (!options.hasOwnProperty("withCredentials"))
  options.withCredentials = !!loadContext.auth;

  options.headers = loadContext.headers;
  options.queryParams = loadContext.queryParams;
  options.endpoint = loadContext.endpoint;
}

//Utility function called from the web worker to set up the options for a get request,
//then calling ViewingService.get internally
ViewingService.getItem = function (loadContext, url, onSuccess, onFailure, options) {

  options = options || {};

  copyOptions(loadContext, options);

  ViewingService.rawGet(loadContext.endpoint, 'items', url, onSuccess, onFailure, options);

};

//Utility function called from the web worker to set up the options for a get request,
//then calling ViewingService.get internally
ViewingService.getManifest = function (loadContext, url, onSuccess, onFailure, options) {

  options = options || {};

  if (!options.hasOwnProperty("responseType"))
  options.responseType = "json";

  copyOptions(loadContext, options);

  ViewingService.rawGet(loadContext.endpoint, 'bubbles', url, onSuccess, onFailure, options);

};

//Utility function called from the web worker to set up the options for a get request,
//then calling ViewingService.get internally
ViewingService.getThumbnail = function (loadContext, url, onSuccess, onFailure, options) {

  options = options || {};

  copyOptions(loadContext, options);

  var queryParams = options.queryParams || '';
  var missingElements = [];
  if (queryParams.indexOf('guid=') === -1) {
    missingElements.push("guid=" + encodeURIComponent(options.guid));
  }
  if (queryParams.indexOf('role=') === -1) {
    var role = options.role || "rendered";
    missingElements.push("role=" + role);
  }
  if (queryParams.indexOf('width=') === -1) {
    var sz = options.size || 400;
    missingElements.push("width=" + sz);
  }
  if (queryParams.indexOf('height=') === -1) {
    var sz = options.size || 400;
    missingElements.push("height=" + sz);
  }
  if (queryParams.indexOf('acmsession=') === -1 && options.acmsession) {
    missingElements.push("acmsession=" + options.acmsession);
  }
  var thumbQueryParams = missingElements.join('&');

  if (options.queryParams) {
    options.queryParams = options.queryParams + '&' + thumbQueryParams;
  } else {
    options.queryParams = thumbQueryParams;
  }

  ViewingService.rawGet(loadContext.endpoint, 'thumbnails', url, onSuccess, onFailure, options);
};


ViewingService.getACMSession = function (endpoint, acmProperties, onSuccess, onFailure) {

  var acmHeaders = {};
  var token;

  for (var key in acmProperties) {

    if (key === "oauth2AccessToken")
    token = acmProperties[key];else

    if (key.indexOf("x-ads-acm") !== -1)
    acmHeaders[key] = acmProperties[key];
  }

  // The value of this can be anything. Required for some arcane reasons.
  acmHeaders.application = "autodesk";

  var xhr = new XMLHttpRequest();
  xhr.open("POST", endpoint + '/oss-ext/v2/acmsessions', true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.setRequestHeader("Authorization", "Bearer " + token);
  xhr.responseType = "json";

  xhr.onload = function () {
    if (xhr.status === 200 && xhr.response) {
      // If the response is a string (e.g. from IE), need to parse it to an object first
      var response = typeof xhr.response === 'string' ? JSON.parse(xhr.response) : xhr.response;

      if (response && response.acmsession) {
        onSuccess(response.acmsession);
      } else
      {
        onFailure(xhr.status, "Can't get acm session from response.");
      }

    } else {
      onFailure(xhr.status);
    }
  };

  xhr.onerror = onFailure;
  xhr.ontimeout = onFailure;
  xhr.send(JSON.stringify(acmHeaders));

  // "application" header is only required for OSS end point, and should not be passed
  // with normal requests because this header is not in allowed header sets of APIGEE.
  delete acmHeaders.application;

};

if (true) {
  __webpack_require__(/*! ./XhrHfdm */ "./src/file-loaders/net/XhrHfdm.js").initialize(ViewingService);
}

/***/ }),

/***/ "./src/file-loaders/net/XhrHfdm.js":
/*!*****************************************!*\
  !*** ./src/file-loaders/net/XhrHfdm.js ***!
  \*****************************************/
/*! exports provided: initialize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialize", function() { return initialize; });
/* harmony import */ var _workers_HfdmWorker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../workers/HfdmWorker */ "./src/file-loaders/workers/HfdmWorker.js");
/* harmony import */ var _parseHfdmUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parseHfdmUrl */ "./src/file-loaders/net/parseHfdmUrl.js");



/**
                                                * Initialize the hfdm ViewingService
                                                * @param {*} ViewingService The non-hfdm ViewingService
                                                */
function initialize(ViewingService) {
  // Hook into rawGet after throttling if an. NodeJS and browasers are different
  var _rawGet = ViewingService.rawGet; // Save original raw get

  /**
   * Get the content of a binary property
   * @param {string} viewingServiceBaseUrl - The base url for the viewing service.
   * @param {ParsedId} parsedUrl - The parsed id to the binary property
   * @param {string} id - The id of the binary property
   * @param {string} url - The url for the request.
   * @param {function} onSuccess - A function that takes a single parameter that represents the response
   *                               returned if the request is successful.
   * @param {function} onFailure - A function that takes an integer status code, and a string status, which together represent
   *                               the response returned if the request is unsuccessful, and a third data argument, which
   *                               has more information about the failure.  The data is a dictionary that minimally includes
   *                               the url, and an exception if one was raised.
   * @param {Object=} [options] - A dictionary of options that can include:
   *                              headers - A dictionary representing the additional headers to add.
   *                              queryParams - A string representing the query parameters
   *                              responseType - A string representing the response type for this request.
   *                              {boolean} [encodeUrn] - when true, encodes the document urn if found.
   *                              {boolean} [noBody] - when true, will perform a HEAD request
   */
  function getDataContent(viewingServiceBaseUrl, parsedUrl, id, onSuccess, onFailure, options) {
    // v1 signed url request - Taken from the dev tools network console.
    var restUrl = '/v1/signedUrl/branch/' + parsedUrl.branch.substr(parsedUrl.branch.lastIndexOf(":") + 1) + '/action/getObject';
    var signedOptions = {
      responseType: "json",
      queryParams: "key=" + encodeURIComponent(id) + "&response-content-type=" + encodeURIComponent("application/octet-stream"),
      headers: options && options.headers };

    if (options && options.hasOwnProperty("withCredentials"))
    signedOptions.withCredentials = options.withCredentials;
    _rawGet(viewingServiceBaseUrl, "", restUrl, function (response) {
      var getOptions = {
        withCredentials: false,
        ondata: options.ondata };

      if (options && options.hasOwnProperty("responseType"))
      getOptions.responseType = options.responseType;
      var url = response.url;
      var queryParams = url.indexOf("?");
      if (queryParams !== -1) {
        getOptions.queryParams = url.substr(queryParams + 1);
        url = url.substr(0, queryParams);
      }
      // console.log("Response URL: " + response.url);
      _rawGet(viewingServiceBaseUrl, "", url, onSuccess, onFailure, getOptions);
    }, onFailure, signedOptions);
  }

  /**
     *  Performs a GET/HEAD request to Viewing Service. This function replaces the original
     *
     * @param {string} viewingServiceBaseUrl - The base url for the viewing service.
     * @param {string} api - The api to call in the viewing service.
     * @param {string} url - The url for the request.
     * @param {function} onSuccess - A function that takes a single parameter that represents the response
     *                               returned if the request is successful.
     * @param {function} onFailure - A function that takes an integer status code, and a string status, which together represent
     *                               the response returned if the request is unsuccessful, and a third data argument, which
     *                               has more information about the failure.  The data is a dictionary that minimally includes
     *                               the url, and an exception if one was raised.
     * @param {Object=} [options] - A dictionary of options that can include:
     *                              headers - A dictionary representing the additional headers to add.
     *                              queryParams - A string representing the query parameters
     *                              responseType - A string representing the response type for this request.
     *                              {boolean} [encodeUrn] - when true, encodes the document urn if found.
     *                              {boolean} [noBody] - when true, will perform a HEAD request
     */
  ViewingService.rawGet = function (viewingServiceBaseUrl, api, url, onSuccess, onFailure, options) {
    // Only use the HFDM path, if we are using the hfdm api flavor and the url has a URN in it
    // and we can parse the URL.
    var parsedUrl = Object(_parseHfdmUrl__WEBPACK_IMPORTED_MODULE_1__["parseHfdmUrl"])(url, ViewingService, api, viewingServiceBaseUrl);
    if (parsedUrl) {
      var hfdm;
      try {
        if (!(hfdm = Object(_workers_HfdmWorker__WEBPACK_IMPORTED_MODULE_0__["getHFDM"])())) {
          onFailure(500, "HFDM not initialized", { url: url });
          return;
        }

        // Figure out what we want and ask for it.
        switch (parsedUrl.type) {
          case "manifest":
            onFailure('Must not be called from here...');
            break;
          case "thumbnails":
            hfdm.getThumbnailId(parsedUrl, function (id) {
              getDataContent(viewingServiceBaseUrl, parsedUrl, id, onSuccess, onFailure, options);
            }, onFailure, options);
            break;
          default:
            hfdm.getValueAtPath(parsedUrl.branch, parsedUrl.path.concat("objectKey"), function (id) {
              getDataContent(viewingServiceBaseUrl, parsedUrl, id, onSuccess, onFailure, options);
            }, onFailure, options);
            break;}

      } catch (e) {
        // Exception - return non specific error.
        onFailure(0, "Exception", { url: url, exception: e });
      }
    } else {
      // Not HFDM use original viewing service
      _rawGet.call(ViewingService, viewingServiceBaseUrl, api, url, onSuccess, onFailure, options);
    }
  };
}

/***/ }),

/***/ "./src/file-loaders/net/endpoints.js":
/*!*******************************************!*\
  !*** ./src/file-loaders/net/endpoints.js ***!
  \*******************************************/
/*! exports provided: getEnv, setEnv, isOffline, setOffline, setOfflineResourcePrefix, getOfflineResourcePrefix, endpoint, initLoadContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEnv", function() { return getEnv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setEnv", function() { return setEnv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isOffline", function() { return isOffline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setOffline", function() { return setOffline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setOfflineResourcePrefix", function() { return setOfflineResourcePrefix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOfflineResourcePrefix", function() { return getOfflineResourcePrefix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "endpoint", function() { return endpoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initLoadContext", function() { return initLoadContext; });
/* harmony import */ var _compat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../compat */ "./src/compat.js");



var endp = {};

var CDN_ROOT = null;
endp.ENDPOINT_API_DERIVATIVE_SERVICE_V2 = 'derivativeV2';
endp.ENDPOINT_API_MODEL_DERIVATIVE_V2 = 'modelDerivativeV2'; // Forge
endp.ENDPOINT_API_FLUENT = 'fluent';
endp.ENDPOINT_API_HFDM = 'hfdm'; // Forge Data

var _apis_data = {
  derivativeV2: {
    baseURL: '/derivativeservice/v2',
    itemURL: '/derivativeservice/v2/derivatives/:derivativeurn',
    manifestURL: '/derivativeservice/v2/manifest/:urn',
    thumbnailsURL: '/derivativeservice/v2/thumbnails/:urn' },

  derivativeV2_EU: {
    baseURL: '/derivativeservice/v2/regions/eu',
    itemURL: '/derivativeservice/v2/regions/eu/derivatives/:derivativeurn',
    manifestURL: '/derivativeservice/v2/regions/eu/manifest/:urn',
    thumbnailsURL: '/derivativeservice/v2/regions/eu/thumbnails/:urn' },

  modelDerivativeV2: {
    baseURL: '/modelderivative/v2/',
    itemURL: '/modelderivative/v2/designdata/:urn/manifest/:derivativeurn',
    manifestURL: '/modelderivative/v2/designdata/:urn/manifest',
    thumbnailsURL: '/modelderivative/v2/designdata/:urn/thumbnail' },

  fluent: {
    baseURL: '/modeldata',
    itemURL: '/modeldata/file/:derivativeurn',
    manifestURL: '/modeldata/manifest/:urn',
    thumbnailsURL: '/derivativeservice/v2/thumbnails/:urn',
    cdnURL: '/cdn',
    cdnWS: '/cdnws'
    //cdnRedirectURL: '/cdnurl', //There is no separate CDN endpoint currently
  },
  hfdm: {
    baseURL: '',
    itemURL: '/derivatives/:derivativeurn',
    manifestURL: '/manifest/:urn',
    thumbnailsURL: '/thumbnails/:urn' } };



var _endpoint = '';
var _api = endp.ENDPOINT_API_DERIVATIVE_SERVICE_V2;
var _useCredentials = false;
var _useCookie = false;
var _acmSession = '';

endp.HTTP_REQUEST_HEADERS = {};

/**
                                 * Sets the endpoint and api to be used to create REST API request strings.
                                 * @param {string} endpoint
                                 * @param {string} [api] - Possible values are derivativeV2, modelDerivativeV2
                                 */
endp.setEndpointAndApi = function (endpoint, api) {
  _endpoint = endpoint;
  if (api) {
    _api = api;
  }
};

/**
    * Returns the endpoint plus the api used to create REST API request strings.
    * Example: "developer.api.autodesk.com/modelderivative/v2"
    * @returns {string}
    */
endp.getEndpointAndApi = function () {
  return _endpoint + _apis_data[_api].baseURL;
};

/**
    * Returns the endpoint used to create REST API request strings.
    * Examples: "developer.api.autodesk.com"
    * @returns {string}
    */
endp.getApiEndpoint = function () {
  return _endpoint;
};

/**
    * @private
    * @returns {string}
    */
endp.getApiFlavor = function () {
  return _api;
};

/**
    * Returns the default shared resource CDN location.
    * For best performance (and to not overload our servers), this should
    * be replaced by a direct CloudFront url during initialization, by
    * calling the cdnRedirectUrl and looking at the result.
    */
endp.getCdnUrl = function () {
  return CDN_ROOT || (_endpoint ? _endpoint + _apis_data[_api].cdnURL : undefined);
};

endp.getCdnWebSocketEndpoint = function () {
  return _endpoint + (_apis_data[_api].cdnWS || '');
};

endp.setCdnUrl = function (url) {
  CDN_ROOT = url;
};

endp.getCdnRedirectUrl = function () {
  var redirect = _apis_data[_api].cdnRedirectURL;
  if (!redirect)
  return null;
  return _endpoint + redirect;
};

endp.setAcmSession = function (value) {
  _acmSession = value;
};

endp.getAcmSession = function () {
  return _acmSession;
};

/**
    * Returns a REST API request strings to be used to get the manifest of the provided urn.
    * Example: "developer.api.autodesk.com/modelderivative/v2/designdata/:urn/manifest"
    * @param {string | null} endpoint - When provided is used instead of the globally set endpoint.
    * @param {string} urn
    * @param {string} api - When provided is used instead of the globally set API flavor
    * @returns {string}
    */
endp.getManifestApi = function (endpoint, urn, api) {
  var url = endpoint || _endpoint;
  api = api || _api;
  url += _apis_data[api].manifestURL;
  // If urn is not provided we return same string that before for backward compatibility.
  urn = urn || '';
  url = url.replace(':urn', urn);
  return url;
};

/**
    * Returns a REST API request strings to be used to get a derivative urn.
    * Example: "developer.api.autodesk.com/modelderivative/v2/designdata/:urn/manifest/:derivativeUrn"
    * @param {string | null} endpoint - When provided is used instead of the globally set API endpoint.
    * @param {string} derivativeUrn
    * @param {string} api - When provided is used instead of the globally set API flavor
    * @returns {string}
    */
endp.getItemApi = function (endpoint, derivativeUrn, api) {
  var theApi = api || _api;
  var itemApi = (endpoint || _endpoint) + _apis_data[theApi].itemURL;
  // If urn is not provided we return same string that before for backward compatibility.
  derivativeUrn = derivativeUrn || '';
  var decodedUrn = decodeURIComponent(derivativeUrn);

  // Extract svf urn from item urn, needed when using model derivative.
  if (itemApi.indexOf(':urn') !== -1) {
    var parts = decodedUrn.split('/');
    var urn = parts[0] || '';
    urn = urn.split(':');
    urn = urn[urn.length - 1] || '';

    itemApi = itemApi.replace(':urn', urn);
  }

  if (theApi === endp.ENDPOINT_API_MODEL_DERIVATIVE_V2) {
    derivativeUrn = encodeURIComponent(decodedUrn);
  }

  itemApi = itemApi.replace(':derivativeurn', derivativeUrn);

  return itemApi;
};

/**
    * Returns a REST API request strings to be used to get the thumbnail for a specific urn.
    * Example: "developer.api.autodesk.com/modelderivative/v2/designdata/:urn/thumbnail"
    * @param {string | null} endpoint - When provided is used instead of the globally set endpoint.
    * @param {string} urn
    * @param {string} api - When provided is used instead of the globally set API flavor
    * @returns {string}
    */
endp.getThumbnailApi = function (endpoint, urn, api) {
  var thumbnailApi = (endpoint || _endpoint) + _apis_data[api || _api].thumbnailsURL;
  return thumbnailApi.replace(':urn', urn || '');
};

endp.getUseCredentials = function () {
  return _useCredentials;
};

endp.getDomainParam = function () {
  return this.getUseCredentials() && !Object(_compat__WEBPACK_IMPORTED_MODULE_0__["isNodeJS"])() ? "domain=" + encodeURIComponent(window.location.origin) : "";
};

endp.setUseCredentials = function (useCredentials) {
  _useCredentials = useCredentials;
};

endp.setUseCookie = function (useCookie) {
  _useCookie = useCookie;
};

endp.getUseCookie = function () {
  return _useCookie;
};

endp.initLoadContext = function (inputObj) {

  inputObj = inputObj || {};

  inputObj.auth = this.getUseCredentials();

  if (!inputObj.endpoint)
  inputObj.endpoint = this.getApiEndpoint();

  if (!inputObj.api)
  inputObj.api = this.getApiFlavor();

  if (!inputObj.headers)
  inputObj.headers = {};

  for (var p in this.HTTP_REQUEST_HEADERS) {
    inputObj.headers[p] = this.HTTP_REQUEST_HEADERS[p];
  }

  //This is done to avoid CORS errors on content served from proxy or browser cache
  //The cache will respond with a previously received response, but the Access-Control-Allow-Origin
  //response header might not match the current Origin header (e.g. localhost vs. developer.api.autodesk.com)
  //which will cause a CORS error on the second request for the same resource.
  var domainParam = this.getDomainParam();
  if (domainParam) {
    if (inputObj.queryParams) {
      inputObj.queryParams += "&" + domainParam;
    } else {
      inputObj.queryParams = domainParam;
    }
  }

  //shared geometry/material storage
  inputObj.otg_cdn = CDN_ROOT || this.getCdnUrl();
  inputObj.otg_ws = this.getCdnWebSocketEndpoint();

  return inputObj;
};

//TODO: Globals that need a better place
var _env; //formerly avp.env
function getEnv() {
  return _env;
}
function setEnv(env) {
  _env = env;
}

// Set viewer in offline mode if set to true. In offline mode, viewer would ignore all URNs in bubble JSON
// and assume the viewables are laid out in local file system path relative to the bubble.json.
var _offline = false;
function isOffline() {
  return _offline;
}
function setOffline(offline) {
  _offline = offline;
}

// Offline resource prefix specified by viewer consumer (e.g. IOS web view). Used as prefix to concatenate with
// each resource relative path to form the absolute path of each resource.
var _offlineResourcePrefix = "";
function setOfflineResourcePrefix(prefix) {
  _offlineResourcePrefix = prefix;
}
function getOfflineResourcePrefix() {
  return _offlineResourcePrefix;
}

var endpoint = endp;

//For backwards compatibility until all code is converted to use
//the function from the endpoint instance.
var initLoadContext = endp.initLoadContext.bind(endp);

/***/ }),

/***/ "./src/file-loaders/net/parseHfdmUrl.js":
/*!**********************************************!*\
  !*** ./src/file-loaders/net/parseHfdmUrl.js ***!
  \**********************************************/
/*! exports provided: parseHfdmUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseHfdmUrl", function() { return parseHfdmUrl; });
/* harmony import */ var _endpoints__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./endpoints */ "./src/file-loaders/net/endpoints.js");


/**
                                         * @typedef ParsedId
                                         * @property {URL} url The dummy url to the property
                                         * @property {string} branch The urn of the branch containing the property
                                         * @property {string} type The type of the property, can be "derivatives", "manifest"
                                         *  or "thumbnails".
                                         * @property {string[]} path The path from the root of branch to the property.
                                         *  Each entry in the array is the name of a property along the path.
                                         */

var parse = /^.*\/(((derivatives)(\/urn:))|((manifest|thumbnails)\/))([^/]+)(\/(.*))?$/;
/**
                                                                                          * Extract the relevant data from a url string for data from HFDM
                                                                                          * @param {string} url The url to parse
                                                                                          * @param {ViewingService} ViewingService The Viewing Service
                                                                                          * @param {string} [api] The api to use for the url - defaults to derivatives
                                                                                          * @param {string} [baseUrl] The base url to use - defaults to the configured endpoint
                                                                                          * @return {ParsedId} The extracted data
                                                                                          */
function parseHfdmUrl(url, ViewingService, api, baseUrl) {
  var urnLoc;
  if (_endpoints__WEBPACK_IMPORTED_MODULE_0__["endpoint"].getApiFlavor().indexOf("hfdm") !== 0 ||
  (urnLoc = url.indexOf("urn:")) === -1 ||
  urnLoc !== 0 && url[urnLoc - 1] !== '/') {
    return null;
  }

  api = api || "derivatives";
  baseUrl = baseUrl || _endpoints__WEBPACK_IMPORTED_MODULE_0__["endpoint"].getApiEndpoint();
  url = ViewingService.generateUrl(baseUrl, api, url);

  // Create a URL object from the url
  var parsed = new URL(url);
  // Extract the data type, branch urn and path to the property
  var path = parse.exec(decodeURIComponent(parsed.pathname));
  // If no match, or no data type or no branch urn, then fail
  if (!path || !(path[3] || path[6]) || !path[7])
  return null;
  var array;
  // Convert the property path to an array
  array = path[9] ? path[9].split('/') : [];

  return {
    url: parsed,
    branch: "urn:" + path[7],
    type: path[3] || path[6],
    path: array };

}

/***/ }),

/***/ "./src/file-loaders/workers/ConsolidationWorker.js":
/*!*********************************************************!*\
  !*** ./src/file-loaders/workers/ConsolidationWorker.js ***!
  \*********************************************************/
/*! exports provided: doGeomMerge, register */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doGeomMerge", function() { return doGeomMerge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony import */ var _wgs_scene_LmvMatrix4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../wgs/scene/LmvMatrix4 */ "./src/wgs/scene/LmvMatrix4.js");
/* harmony import */ var _wgs_scene_LmvVector3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../wgs/scene/LmvVector3 */ "./src/wgs/scene/LmvVector3.js");
/* harmony import */ var _wgs_scene_GeomMergeTask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../wgs/scene/GeomMergeTask */ "./src/wgs/scene/GeomMergeTask.js");




/**
                                                                * Main function of ConsolidationWorker. The purpose of this function is to overtake some time-consuming
                                                                * work from mergeGeometries (see Consolidation.js), e.g., baking transforms into vertex-positions and normals.
                                                                *  @param {Object}      context
                                                                *  @param {MergeTask[]} context.tasks - Each MergeTask provides the input data to process a single consolidated mesh.
                                                                *                                       See ParallelGeomMerge.js for details.
                                                                */
function doGeomMerge(context) {

  // Since we are running in the worker script, use LmvVector/LmvMatrix to run the MergeTask
  var matrix = new _wgs_scene_LmvMatrix4__WEBPACK_IMPORTED_MODULE_0__["LmvMatrix4"]();
  var vec = new _wgs_scene_LmvVector3__WEBPACK_IMPORTED_MODULE_1__["LmvVector3"]();

  var results = [];
  for (var i = 0; i < context.tasks.length; i++) {
    var task = context.tasks[i];

    var result = _wgs_scene_GeomMergeTask__WEBPACK_IMPORTED_MODULE_2__["GeomMergeTask"].prototype.run.call(task, matrix, vec);

    results.push(result);
  }

  // add result array buffers to transferlist to avoid copying
  var transferList = [];
  for (var i = 0; i < results.length; i++) {
    transferList.push(results[i].vb.buffer);
    transferList.push(results[i].vertexIds.buffer);
  }

  // send back result
  context.worker.postMessage(results, transferList);
}

function register(workerMain) {
  workerMain.register("MERGE_GEOMETRY", { doOperation: doGeomMerge });
}

/***/ }),

/***/ "./src/file-loaders/workers/DecompressWorker.js":
/*!******************************************************!*\
  !*** ./src/file-loaders/workers/DecompressWorker.js ***!
  \******************************************************/
/*! exports provided: doDecompressDelta, register */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doDecompressDelta", function() { return doDecompressDelta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony import */ var _lmvtk_fusion_base64__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lmvtk/fusion/base64 */ "./src/file-loaders/lmvtk/fusion/base64.js");
/* harmony import */ var _lmvtk_fusion_base64__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lmvtk_fusion_base64__WEBPACK_IMPORTED_MODULE_0__);



var pako = __webpack_require__(/*! pako */ "./node_modules/pako/index.js");

//FUSION SPECIFIC

function doDecompressDelta(loadContext) {

  var _this = loadContext.worker;

  // Step1:decode the compressed data
  var compressData = _lmvtk_fusion_base64__WEBPACK_IMPORTED_MODULE_0__["decode"](loadContext.delta);
  compressData = compressData.split('').map(function (e) {
    return e.charCodeAt(0);
  });

  //Step2:decompress the data
  var output = pako.inflate(compressData);

  //Step3:convert byte array to string
  var json = "";
  for (var i = 0; i < output.length; i++) {
    json += String.fromCharCode(output[i]);
  }

  //Step4:parse scene json
  json = JSON.parse(json);
  _this.postMessage({ cbId: loadContext.cbId, index: loadContext.index, res: json });
}

function register(workerMain) {
  workerMain.register("DECOMPRESS_DELTA", { doOperation: doDecompressDelta });
}

/***/ }),

/***/ "./src/file-loaders/workers/F2dParseWorker.js":
/*!****************************************************!*\
  !*** ./src/file-loaders/workers/F2dParseWorker.js ***!
  \****************************************************/
/*! exports provided: register */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony import */ var _lmvtk_f2d_F2d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lmvtk/f2d/F2d */ "./src/file-loaders/lmvtk/f2d/F2d.js");
/* harmony import */ var _net_ErrorCodes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../net/ErrorCodes */ "./src/file-loaders/net/ErrorCodes.js");




function tryCatch(_this, f) {
  try {
    f();
  }
  catch (exc) {
    _this.raiseError(
    _net_ErrorCodes__WEBPACK_IMPORTED_MODULE_1__["ErrorCodes"].BAD_DATA, "",
    { "exception": exc.toString(), "stack": exc.stack });
    _this.postMessage(null);
  }
}

function doParseF2D(loadContext) {

  var _this = loadContext.worker;

  _this.postMessage({ progress: 0.01 }); //Tell the main thread we are alive

  if (loadContext.data) {

    _this.postMessage({ progress: 0.5 }); //rough progress reporting -- can do better

    var f2d = new _lmvtk_f2d_F2d__WEBPACK_IMPORTED_MODULE_0__["F2D"](loadContext.metadata, loadContext.manifest, loadContext.basePath, loadContext.f2dLoadOptions);

    loadContext.loadDoneCB = function (success) {

      if (success) {
        var msg = { "f2d": f2d };
        _this.postMessage(msg);
      } else
      {
        _this.raiseError(_net_ErrorCodes__WEBPACK_IMPORTED_MODULE_1__["ErrorCodes"].BAD_DATA, "", {});
        _this.postMessage(null);
      }
    };

    tryCatch(_this, function () {
      f2d.load(loadContext, loadContext.data);
    });
  } else
  {
    _this.postMessage(null);
  }
}

function doParseF2DFrame(loadContext) {

  var _this = loadContext.worker;

  var f2d = _this.f2d;

  if (!f2d) {
    _this.postMessage({ progress: 0.5 }); //rough progress reporting -- can do better

    f2d = _this.f2d = new _lmvtk_f2d_F2d__WEBPACK_IMPORTED_MODULE_0__["F2D"](loadContext.metadata, loadContext.manifest, loadContext.basePath, loadContext.f2dLoadOptions);

    f2d.F2D_MESH_COUNT_OLD = 0;

    // First post needs to post entire F2D so we can set up bounding boxes, etc.
    var msg = { "f2dframe": f2d };
    _this.postMessage(msg);
  }

  function loadDoneCallback(success, finalFlush) {
    if (success) {

      if (!f2d.meshes.length && !finalFlush) {
        // No new data coming in.
        // debug("F2D streaming : no new data coming in.");
        return;
      } else {

        var msg = { "f2dframe": true,
          "meshes": f2d.meshes,
          "baseIndex": f2d.F2D_MESH_COUNT_OLD,
          "bbox": f2d.bbox };


        if (loadContext.finalFrame) {

          //Add f2d properties which are cumulative and their
          //final values are not known until the end
          msg.cumulativeProps = {
            maxObjectNumber: f2d.maxObjectNumber,
            viewports: f2d.viewports,
            clips: f2d.clips,
            strings: f2d.strings,
            stringDbIds: f2d.stringDbIds,
            stringBoxes: f2d.stringBoxes,
            linkBoxes: f2d.linkBoxes };


          msg.finalFrame = finalFlush;
        }

        // User transferable objects to pass the array buffers used by mesh without deep copying.
        var transferList = [];
        for (var i = 0, e = f2d.meshes.length; i < e; ++i) {
          transferList.push(f2d.meshes[i].vb.buffer);
          transferList.push(f2d.meshes[i].indices.buffer);
        }
        _this.postMessage(msg, transferList);

        f2d.F2D_MESH_COUNT_OLD += f2d.meshes.length;
        f2d.meshes = [];
      }
    } else
    {
      _this.raiseError(
      _net_ErrorCodes__WEBPACK_IMPORTED_MODULE_1__["ErrorCodes"].BAD_DATA, "",
      {});
      _this.postMessage(null);
    }
  }

  loadContext.loadDoneCB = loadDoneCallback;

  tryCatch(_this, function () {
    f2d.loadFrames(loadContext);
  });
}


function register(workerMain) {
  workerMain.register("PARSE_F2D", { doOperation: doParseF2D });
  workerMain.register("PARSE_F2D_FRAME", { doOperation: doParseF2DFrame });
}

/***/ }),

/***/ "./src/file-loaders/workers/F2dStreamWorker.js":
/*!*****************************************************!*\
  !*** ./src/file-loaders/workers/F2dStreamWorker.js ***!
  \*****************************************************/
/*! exports provided: register */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony import */ var _net_Xhr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../net/Xhr */ "./src/file-loaders/net/Xhr.js");
/* harmony import */ var _lmvtk_f2d_F2dProbe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lmvtk/f2d/F2dProbe */ "./src/file-loaders/lmvtk/f2d/F2dProbe.js");
/* harmony import */ var _logger_Logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../logger/Logger */ "./src/logger/Logger.js");
/* harmony import */ var _lmvtk_common_StringUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lmvtk/common/StringUtils */ "./src/file-loaders/lmvtk/common/StringUtils.js");
/* harmony import */ var _net_ErrorCodes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../net/ErrorCodes */ "./src/file-loaders/net/ErrorCodes.js");








var pako = __webpack_require__(/*! pako */ "./node_modules/pako/index.js");

var ENABLE_F2D_STREAMING_MODE = true;

function requestFileF2D(loadContext, filename, onSuccess) {
  var url = loadContext.basePath + filename;
  _net_Xhr__WEBPACK_IMPORTED_MODULE_0__["ViewingService"].getItem(loadContext, url, onSuccess, null);
}

// Stream loading f2d data and prepare parseable data frames.
function doStreamF2D(loadContext) {

  var _this = loadContext.worker;

  _this.postMessage({ progress: 0.01 }); //Tell the main thread we are alive

  //Get the metadata and manifest first.
  var metadata;
  var manifest;
  var doneFiles = 0;

  var accumulatedStream = new Uint8Array(65536);
  var accumulatedBytes = 0;
  var responseData = null;

  function accumulateData(partial) {
    //Add the new bytes to the accumulation buffer
    if (accumulatedStream.length < partial.length + accumulatedBytes) {
      var newlen = Math.max(accumulatedStream.length * 2, partial.length + accumulatedBytes);
      var ns = new Uint8Array(newlen);
      ns.set(accumulatedStream);
      accumulatedStream = ns;
    }
    accumulatedStream.set(partial, accumulatedBytes);
    accumulatedBytes += partial.length;
  }

  function markSucceeded(response) {
    responseData = response;
  }

  var dataReceived = accumulateData;
  var requestSucceeded = markSucceeded;

  // Start the request for the primary graphics
  // Just accumulate data as it comes in, and remember response
  // when it succeeds. The dataReceived and requestSucceeded
  // variables are changed to other functions once the manifest
  // and metadata are read.
  _net_Xhr__WEBPACK_IMPORTED_MODULE_0__["ViewingService"].getItem(loadContext, loadContext.url, function (responseData) {
    requestSucceeded(responseData);
  }, loadContext.onFailureCallback, {
    ondata: function ondata(partial) {
      dataReceived(partial);
    },
    responseType: "" });



  requestFileF2D(loadContext, "metadata.json.gz", function (data) {
    try {
      metadata = JSON.parse(Object(_lmvtk_common_StringUtils__WEBPACK_IMPORTED_MODULE_3__["utf8ArrayToString"])(data));
      doneFiles++;
    } catch (e) {
      self.raiseError(
      _net_ErrorCodes__WEBPACK_IMPORTED_MODULE_4__["ErrorCodes"].BAD_DATA,
      "" /* does not matter what strings we put here since the final user facing error message is solely decided
         by ErrorCodes. Invent another code if we want a specific error message for this error. */);

    }

    if (doneFiles === 2)
    doStreamF2D_Continued(loadContext, manifest, metadata);
  });
  requestFileF2D(loadContext, "manifest.json.gz", function (data) {
    try {
      if (data)
      manifest = JSON.parse(Object(_lmvtk_common_StringUtils__WEBPACK_IMPORTED_MODULE_3__["utf8ArrayToString"])(data));
      //The F2D does not necessarily need a manifest file to load (some old F2Ds don't have that)
      doneFiles++;
    } catch (e) {}

    if (doneFiles === 2)
    doStreamF2D_Continued(loadContext, manifest, metadata);
  });

  //Loads the F2D stream once the metadata and manifest files are fetched
  function doStreamF2D_Continued(loadContext, manifest, metadata) {

    var _this = loadContext.worker;

    var url = loadContext.url;

    // Collect asset urls that to be send to main thread for mobile usage.
    var assets = [];

    var f2dSize = 0;
    var altSize = 0;
    if (manifest && manifest.assets) {
      var a = manifest.assets;
      for (var i = 0; i < a.length; i++) {
        if (url.indexOf(a[i].URI) != -1) {
          f2dSize = a[i].usize || 0;
          break;
        } else if (a[i].type == "Autodesk.CloudPlatform.F2D")
        altSize = a[i].usize || 0;
      }
    }
    if (f2dSize == 0 && altSize > 0)
    f2dSize = altSize;

    var probe = new _lmvtk_f2d_F2dProbe__WEBPACK_IMPORTED_MODULE_1__["F2DProbe"]();

    var first = true;
    var streamOffset = 0;
    var sentMetadata = false;

    function onSuccess(responseData) {
      // Send collected f2d resource urls to main thread.
      _this.postMessage({ "type": "F2DAssetURL", "urls": assets });
      assets = null;

      if (ENABLE_F2D_STREAMING_MODE) {

        var msg = {
          "type": "F2DSTREAM",
          "finalFrame": true,
          "finished": true,
          "progress": 1 };


        if (!sentMetadata) {
          msg.manifest = manifest;
          msg.metadata = metadata;
          msg.basePath = loadContext.basePath;
          msg.f2dSize = f2dSize;
          sentMetadata = true;
        }

        _this.debug("Total text bytes count : " + responseData.length);

        _this.postMessage(msg);

        //Streaming code path ends here -- we have already sent
        //the data back from the progress callback
        return;
      }

      //Non-streaming code path here
      if (accumulatedStream.length > accumulatedBytes)
      accumulatedStream = new Uint8Array(accumulatedStream.buffer.slice(0, accumulatedBytes));

      var view;
      if (accumulatedStream[0] == 31 && accumulatedStream[1] == 139) {
        try {
          view = new Uint8Array(accumulatedStream.buffer, 0, accumulatedBytes);
          view = pako.ungzip(view);
        } catch (e) {
          console.error(e);
        }
      }

      var msg = { "type": "F2DBLOB",
        "metadata": metadata,
        "manifest": manifest,
        "f2dSize": f2dSize,
        "basePath": loadContext.basePath, // TODO: we might be able to infer this elsewhere.
        "progress": 1,
        "buffer": view.buffer };
      var transferList = [];
      transferList.push(view.buffer);
      _this.postMessage(msg, transferList);
    }

    function processData() {

      if (!ENABLE_F2D_STREAMING_MODE)
      return;

      if (first) {
        first = false;

        // If the very first two bytes of the entire stream is GZIP magic number,
        // then we fall back on none streaming mode, because streaming mode only
        // work with browser decompression, and the presence of such magic number
        // implies browser decompression fails, for whatever reasons.
        if (accumulatedStream[0] == 31 && accumulatedStream[1] == 139) {
          _logger_Logger__WEBPACK_IMPORTED_MODULE_2__["logger"].error("F2D streaming broken by non-streaming unzip!", Object(_net_ErrorCodes__WEBPACK_IMPORTED_MODULE_4__["errorCodeString"])(_net_ErrorCodes__WEBPACK_IMPORTED_MODULE_4__["ErrorCodes"].BAD_DATA));
          ENABLE_F2D_STREAMING_MODE = false;
          return;
        }
      }

      var view = new Uint8Array(accumulatedStream.buffer, streamOffset, accumulatedBytes - streamOffset);

      try {
        var marker = probe.load(view);

        if (marker.frameEnd > marker.frameStart) {
          var frames = accumulatedStream.buffer.slice(streamOffset + marker.frameStart, streamOffset + marker.frameEnd);
          streamOffset += marker.frameEnd;

          var transferList = [];
          transferList.push(frames);

          var msg = { "type": "F2DSTREAM",
            "frames": frames,
            "finalFrame": false };


          if (f2dSize)
          msg.progress = streamOffset / f2dSize;

          if (!sentMetadata) {
            msg.manifest = manifest;
            msg.metadata = metadata;
            msg.f2dSize = f2dSize;
            msg.basePath = loadContext.basePath;
            sentMetadata = true;
          }

          _this.postMessage(msg, transferList);

        }
      } catch (e) {
        _this.debug(e);
      }
    }

    function onData(partial) {
      accumulateData(partial);
      processData();
    }

    requestSucceeded = onSuccess;
    dataReceived = onData;
    // check to see if the primary graphics request has received any data
    if (accumulatedBytes > 0)
    processData();
    // check to see if primary graphics request succeeded
    if (responseData != null)
    onSuccess(responseData);
  }
}

function register(workerMain) {
  workerMain.register("STREAM_F2D", { doOperation: doStreamF2D });
}

/***/ }),

/***/ "./src/file-loaders/workers/GeomWorker.js":
/*!************************************************!*\
  !*** ./src/file-loaders/workers/GeomWorker.js ***!
  \************************************************/
/*! exports provided: register */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony import */ var _lmvtk_svf_PackReader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lmvtk/svf/PackReader */ "./src/file-loaders/lmvtk/svf/PackReader.js");
/* harmony import */ var _lmvtk_svf_Geoms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lmvtk/svf/Geoms */ "./src/file-loaders/lmvtk/svf/Geoms.js");
/* harmony import */ var _net_ErrorCodes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../net/ErrorCodes */ "./src/file-loaders/net/ErrorCodes.js");
/* harmony import */ var _net_Xhr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../net/Xhr */ "./src/file-loaders/net/Xhr.js");
/* harmony import */ var _wgs_scene_DeriveTopology__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../wgs/scene/DeriveTopology */ "./src/wgs/scene/DeriveTopology.js");






function guardFunction(loadContext, f) {
  try {
    f();
  }
  catch (exc) {
    loadContext.raiseError(
    _net_ErrorCodes__WEBPACK_IMPORTED_MODULE_2__["ErrorCodes"].BAD_DATA, "Unhandled exception while reading pack file",
    { "url": loadContext.url, "exception": exc.toString(), "stack": exc.stack });
  }
}

function doGeomLoad(loadContext) {

  var _this = loadContext.worker;

  //Make a blocking request -- it's ok, because
  //we are in a worker thread.

  function onSuccess(arrayBuffer) {
    _this.postMessage({
      url: loadContext.url,
      workerId: loadContext.workerId,
      progress: 0.5 });
    //rough progress reporting -- can do better

    guardFunction(loadContext, function () {

      var pfr = new _lmvtk_svf_PackReader__WEBPACK_IMPORTED_MODULE_0__["PackFileReader"](arrayBuffer);

      var raisedError = false;

      var options = {
        estimateSizeOnly: true,
        packNormals: typeof loadContext.packNormals !== "undefined" ? loadContext.packNormals : true };


      var i,iEnd = pfr.getEntryCounts(),mesh;
      var skip = loadContext.inMemory || [];
      var estLength = 0;
      var shouldReadNext = function shouldReadNext(i) {
        var v = skip[i >> 5];
        return !v || !(v & 1 << (i & 31));
      };

      for (i = 0; i < iEnd; i++)
      {
        if (shouldReadNext(i)) {
          mesh = Object(_lmvtk_svf_Geoms__WEBPACK_IMPORTED_MODULE_1__["readGeometry"])(pfr, i, options);
          estLength += mesh && mesh.sharedBufferBytes || 0;
        }
      }

      var sharedBuffer = estLength ? new ArrayBuffer(estLength) : null;
      var currentOffset = 0;

      var msg = { "packId": loadContext.packId,
        "workerId": loadContext.workerId,
        "progress": 1,
        "meshes": [],
        "sharedBuffer": sharedBuffer };


      var transferList = sharedBuffer ? [sharedBuffer] : [];

      options = {
        dstBuffer: sharedBuffer,
        startOffset: 0,
        estimateSizeOnly: false,
        packNormals: typeof loadContext.packNormals !== "undefined" ? loadContext.packNormals : true };


      for (i = 0; i < iEnd; i++)
      {
        options.startOffset = currentOffset;

        if (shouldReadNext(i)) {
          mesh = Object(_lmvtk_svf_Geoms__WEBPACK_IMPORTED_MODULE_1__["readGeometry"])(pfr, i, options);

          if (mesh) {
            currentOffset += mesh.sharedBufferBytes || 0;
            msg.meshes[i] = mesh;

            if (loadContext.createWireframe) {
              Object(_wgs_scene_DeriveTopology__WEBPACK_IMPORTED_MODULE_4__["createWireframe"])(mesh);

              //TODO: optimize the storage of the lines index buffer to use
              //a single shared buffer for all meshes in the pack
              if (mesh.iblines)
              transferList.push(mesh.iblines.buffer);
            }
          } else {
            // it doesn't make much sense to raise an error for each entry that can't
            // be read, because chances are they will all be unreadable after the
            // first bad one.
            if (!raisedError) {
              _this.raiseError(
              _net_ErrorCodes__WEBPACK_IMPORTED_MODULE_2__["ErrorCodes"].BAD_DATA, "Unable to load geometry",
              { "url": loadContext.url });
              raisedError = true;
            }

            // in this case, we still post the full message instead of just null;
            // the mesh itself will be null, of course.
            _this.postMessage(msg);
          }
        }
      }

      _this.postMessage(msg, transferList);
    });

  }

  // With this option to control whether want to record assets request.
  var options = {
    skipAssetCallback: loadContext.skipAssetCallback };

  _net_Xhr__WEBPACK_IMPORTED_MODULE_3__["ViewingService"].getItem(loadContext, loadContext.url, onSuccess, loadContext.onFailureCallback, options);

}

function register(workerMain) {
  workerMain.register("LOAD_GEOMETRY", { doOperation: doGeomLoad });
}

/***/ }),

/***/ "./src/file-loaders/workers/HfdmWorker.js":
/*!************************************************!*\
  !*** ./src/file-loaders/workers/HfdmWorker.js ***!
  \************************************************/
/*! exports provided: getHFDM, register */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHFDM", function() { return getHFDM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/**
 * Interface to HFDM.
 */

// A function that returns the interface to the Hfdm extension
var getHFDM;
// A function that register this worker
var register;

if (true) {






  /**
                             * Get the value of a property
                             * @param {string} branchUrn - The urn for the branch with the property
                             * @param {string[]} path - The path from the branch root to the property
                             * @param {function} onSuccess - A function that takes a single string parameter that is the id.
                             * @param {function} onFailure - A function that takes an integer status code, and a string status, which together represent
                             *                               the response returned if the request is unsuccessful, and a third data argument, which
                             *                               has more information about the failure.  The data is a dictionary that minimally includes
                             *                               the url, and an exception if one was raised.
                            */var
  getValueFromMainThread = function getValueFromMainThread(branchUrn, path, onSuccess, onFailure) {
    // If the port isn't initialized then this is an error
    if (!hfdmPort) {
      onFailure(0, "Worker thread not properly initialized", {});
      return;
    }

    // Remember the request
    requests[++requestId] = [onSuccess, onFailure];

    // Ask the main thread for the value
    hfdmPort.postMessage({
      requestId: requestId,
      branchUrn: branchUrn,
      path: path });

  };

  /**
      * Message handler for "HFDM_SET_PORT" operation
      * @param {*} data 
      */var
  setHfdmPort = function setHfdmPort(data) {
    // Set the port
    hfdmPort = data.port;

    // Set the message handler for property values from the main thread
    hfdmPort.onmessage = function (ev) {
      try {
        // Get the request this reply was sent for, and then delete it
        var request = requests[ev.data.requestId];
        delete requests[ev.data.requestId];
        if (request) {
          // Return the value or an error
          if (ev.data.id) {
            request[0](ev.data.id);
            return;
          } else if (ev.data.error) {
            request[1](ev.data.error.status, ev.data.error.statusText, ev.data.error.moreInfo);
            return;
          }
        }
        onFailure(0, "Unspecified error getting binary data id", {});
      } catch (e) {
        onFailure(0, "Unspecified error getting binary data id", { exception: e });
      }
    };
  };

  // Register the HFDM_SET_PORT handler
  // In workers we use a MessageChannel to communicate with the main thread to get
  // property values. We don't support getting thumbnails or the DS manifest on a worker
  var hfdmPort;var requestId = 0;var requests = {};register = function register(workerMain) {workerMain.register("HFDM_SET_PORT", { doOperation: setHfdmPort });};

  // We are on a worker thread so there isn't an extension. Make some
  // dummy functions that will error except for binarey data and use
  // the hfdm channel to get the id from the main thread.
  var workerHFDM = {
    getDSManifest: function getDSManifest(parsedUrl, onSuccess, onFailure, options) {
      onFailure(0, "Manifest not available on worker thread", { url: parsedUrl.href });
    },
    getThumbnailId: function getThumbnailId(parsedUrl, onSuccess, onFailure, options) {
      onFailure(0, "Thumnails not available on worker thread", { url: parsedUrl.href });
    },
    getValueAtPath: function getValueAtPath(branchUrn, path, onSuccess, onFailure, options) {
      getValueFromMainThread(branchUrn, path, onSuccess, onFailure, options);
    } };

  getHFDM = function getHFDM() {
    return workerHFDM;
  };
} else {}

/***/ }),

/***/ "./src/file-loaders/workers/MainWorker-web.js":
/*!****************************************************!*\
  !*** ./src/file-loaders/workers/MainWorker-web.js ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MainWorker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MainWorker */ "./src/file-loaders/workers/MainWorker.js");



//Web worker dispatcher function -- received a message
//from the main thread and calls the appropriate handler
self.addEventListener('message', function (e) {

  var loadContext = e.data;
  loadContext.worker = self;

  _MainWorker__WEBPACK_IMPORTED_MODULE_0__["workerMain"].dispatch(loadContext);

}, false);


self.raiseError = function (code, msg, args) {
  self.postMessage({ "error": { "code": code, "msg": msg, "args": args } });
};

// Shared by all workers to output debug message on console of main thread.
function debug(msg) {
  self.postMessage({ debug: 1, message: msg });
}

self.debug = debug;

/***/ }),

/***/ "./src/file-loaders/workers/MainWorker.js":
/*!************************************************!*\
  !*** ./src/file-loaders/workers/MainWorker.js ***!
  \************************************************/
/*! exports provided: WorkerMain, workerMain */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkerMain", function() { return WorkerMain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "workerMain", function() { return workerMain; });
/* harmony import */ var _net_Xhr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../net/Xhr */ "./src/file-loaders/net/Xhr.js");
/* harmony import */ var _net_endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../net/endpoints */ "./src/file-loaders/net/endpoints.js");
function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}


var WorkerMain = /*#__PURE__*/function () {

  function WorkerMain() {_classCallCheck(this, WorkerMain);
    this._workers = {};
  }_createClass(WorkerMain, [{ key: "dispatch", value: function dispatch(
    loadContext) {

      if (!loadContext.hasOwnProperty('operation')) {
        return;
      }

      //TODO TS:
      if (loadContext.endpoint)
      _net_endpoints__WEBPACK_IMPORTED_MODULE_1__["endpoint"].setEndpointAndApi(loadContext.endpoint, loadContext.api);


      var target = this._workers[loadContext.operation];
      if (!target)
      return;

      //Initialize the path that contains the requested
      //file. It's the root for other relative paths referenced
      //by the base file.
      loadContext.basePath = "";
      if (loadContext.url) {
        var lastSlash = loadContext.url.lastIndexOf("/");
        if (lastSlash != -1)
        loadContext.basePath = loadContext.url.substr(0, lastSlash + 1);
      }

      // Create the default failure callback.
      //
      loadContext.raiseError = function () {
        loadContext.worker.raiseError.apply(loadContext.worker, arguments);
      };
      loadContext.onFailureCallback = _net_Xhr__WEBPACK_IMPORTED_MODULE_0__["ViewingService"].defaultFailureCallback.bind(loadContext);

      target.doOperation(loadContext);
    } }, { key: "register", value: function register(

    operation, worker) {
      this._workers[operation] = worker;
    } }, { key: "unregister", value: function unregister(

    operation) {
      delete this._workers[operation];
    } }]);return WorkerMain;}();


var workerMain = new WorkerMain();

//Add all the worker entry points.
//Those need to execute in order to register themselves
//with the web worker operation dispatcher
if (true) {
  __webpack_require__(/*! ./SvfWorker */ "./src/file-loaders/workers/SvfWorker.js").register(workerMain);
  __webpack_require__(/*! ./GeomWorker */ "./src/file-loaders/workers/GeomWorker.js").register(workerMain);
}
__webpack_require__(/*! ./F2dParseWorker */ "./src/file-loaders/workers/F2dParseWorker.js").register(workerMain);
__webpack_require__(/*! ./F2dStreamWorker */ "./src/file-loaders/workers/F2dStreamWorker.js").register(workerMain);
__webpack_require__(/*! ./OtgBvhWorker */ "./src/file-loaders/workers/OtgBvhWorker.js").register(workerMain);
__webpack_require__(/*! ./OtgLoadWorker */ "./src/file-loaders/workers/OtgLoadWorker.js").register(workerMain);
__webpack_require__(/*! ./PropWorker */ "./src/file-loaders/workers/PropWorker.js").register(workerMain);
__webpack_require__(/*! ./ConsolidationWorker */ "./src/file-loaders/workers/ConsolidationWorker.js").register(workerMain);

if (true) {
  __webpack_require__(/*! ./DecompressWorker */ "./src/file-loaders/workers/DecompressWorker.js").register(workerMain);
}

if (true) {
  __webpack_require__(/*! ./HfdmWorker */ "./src/file-loaders/workers/HfdmWorker.js").register(workerMain);
}

/***/ }),

/***/ "./src/file-loaders/workers/OtgBvhWorker.js":
/*!**************************************************!*\
  !*** ./src/file-loaders/workers/OtgBvhWorker.js ***!
  \**************************************************/
/*! exports provided: register */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony import */ var _net_Xhr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../net/Xhr */ "./src/file-loaders/net/Xhr.js");
/* harmony import */ var _wgs_scene_BVHBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../wgs/scene/BVHBuilder */ "./src/wgs/scene/BVHBuilder.js");
/* harmony import */ var _lmvtk_otg_OtgFragInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lmvtk/otg/OtgFragInfo */ "./src/file-loaders/lmvtk/otg/OtgFragInfo.js");




function loadAsyncResource(loadContext, resourcePath, responseType, callback) {

  _net_Xhr__WEBPACK_IMPORTED_MODULE_0__["ViewingService"].getItem(loadContext, resourcePath,
  callback,
  loadContext.onFailureCallback,
  {
    responseType: responseType || "arraybuffer" });



}

function doLoadOtgBvh(loadContext) {

  //TODO: We could process bboxes progressively (in the OtgFragInfo constructions) instead of doing it once the whole file is in
  //although it's probably not worth it, given we are reunning in a worker thread
  if (loadContext.fragments_extra) {
    loadAsyncResource(loadContext, loadContext.fragments_extra, "", function (data) {

      if (!data || !data.length) {
        return;
      }

      //Build the R-Tree
      //var t0 = performance.now();

      var finfo = new _lmvtk_otg_OtgFragInfo__WEBPACK_IMPORTED_MODULE_2__["OtgFragInfo"](data, loadContext);

      if (finfo.count) {
        var tmpbvh = new _wgs_scene_BVHBuilder__WEBPACK_IMPORTED_MODULE_1__["BVHBuilder"](null, null, finfo);
        tmpbvh.build(loadContext.bvhOptions);

        var bvh = {
          nodes: tmpbvh.nodes.getRawData(),
          primitives: tmpbvh.primitives };


        //var t1 = performance.now();
        //console.log("BVH build time:" + (t1 - t0));

        loadContext.worker.postMessage({ bvh: bvh, boxes: finfo.boxes, boxStride: finfo.boxStride },
        [bvh.nodes, bvh.primitives.buffer, finfo.boxes.buffer]);
      }

    });
  }


}

function register(workerMain) {
  workerMain.register("LOAD_OTG_BVH", { doOperation: doLoadOtgBvh });
}

/***/ }),

/***/ "./src/file-loaders/workers/OtgLoadWorker.js":
/*!***************************************************!*\
  !*** ./src/file-loaders/workers/OtgLoadWorker.js ***!
  \***************************************************/
/*! exports provided: register */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony import */ var _net_Xhr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../net/Xhr */ "./src/file-loaders/net/Xhr.js");
/* harmony import */ var _lmvtk_otg_OtgGeomCodec__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lmvtk/otg/OtgGeomCodec */ "./src/file-loaders/lmvtk/otg/OtgGeomCodec.js");
/* harmony import */ var _lmvtk_otg_LocalDbCache__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lmvtk/otg/LocalDbCache */ "./src/file-loaders/lmvtk/otg/LocalDbCache.js");
/* harmony import */ var _compat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../compat */ "./src/compat.js");
/* harmony import */ var _lmvtk_otg_OtgWebSocket__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lmvtk/otg/OtgWebSocket */ "./src/file-loaders/lmvtk/otg/OtgWebSocket.js");
/* harmony import */ var _lmvtk_otg_OtgWebSocket__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_lmvtk_otg_OtgWebSocket__WEBPACK_IMPORTED_MODULE_4__);




var pako = __webpack_require__(/*! pako */ "./node_modules/pako/index.js");



// OtgLoadWorker implements the "LOAD_CDN_RESOURCE_OTG" operation.

//Do not store state data directly in "self" because in the node.js code path
//there are no separate worker contexts
function getWorkerContext(loadContext) {

  //Initialize the worker context -- we cannot use module/global vars here,
  //because in node.js the module variables are shared for all instances of the worker.
  if (!loadContext.worker.ctx) {

    loadContext.worker.ctx = {

      otgws: new _lmvtk_otg_OtgWebSocket__WEBPACK_IMPORTED_MODULE_4__["OtgWs"](loadContext, onCdnResourceLoaded, retryAllPending),
      localCache: new _lmvtk_otg_LocalDbCache__WEBPACK_IMPORTED_MODULE_2__["LocalDbCache"](loadContext.disableIndexedDb),

      numRequests: 0,
      inprogress: {}, //all currently pending requests (in case we need to retry them due to connection failure, etc)

      //Keeps batches of messages to be sent back to the main thread
      _pendingMdata: [],
      _pendingTransferList: [],
      _pendingSends: [] };

  }

  return loadContext.worker.ctx;
}

function isGzip(data) {
  return data[0] === 31 && data[1] === 139;
}

function decodeGeometryOtg(data, hash) {

  //This should not happen in production, but apparently some data made it
  //that way to staging, and we want to detect and fix those models.
  if (isGzip(data)) {
    console.error("Double compressed OTG resource.", hash);
    data = pako.ungzip(data);
  }

  // Read Otg package
  var mdata = _lmvtk_otg_OtgGeomCodec__WEBPACK_IMPORTED_MODULE_1__["readLmvBufferGeom"](data);

  if (!mdata) {
    console.error("Failed to parse geometry", hash);
    return;
  }

  mdata.hash = hash;

  return mdata;
}


// Use custom error handler: It  forwards to the default one, but...
//  1. adds the geometry hash to the error message. This is needed by the geometry cache.
//     We use it to determine for which geometry the problem occurred, so that the affected
//     loaders can be informed (see OtgResourceCache.js).
//  2. If any other requests were blocked before to limit the number of parallel
//     requests, we must make sure that these enqueued  requests are processed too.
function getErrorHandler(loadContext, hash, resourceType) {

  // add error handler to override raiseError function
  var errorHandler = {
    // add hash and pass on to loadContext.raiseError.
    raiseError: function raiseError(code, msg, args) {
      args.hash = hash;
      args.type = resourceType;
      loadContext.raiseError(code, msg, args);
    } };


  return function () {
    // forward to default error handler
    _net_Xhr__WEBPACK_IMPORTED_MODULE_0__["ViewingService"].defaultFailureCallback.apply(errorHandler, arguments);

    // process next requests (if any)
    var ctx = getWorkerContext(loadContext);
    delete ctx.inprogress[hash];
    ctx.numRequests--;

    //If the main thread asked us to end things, but we delayed due to pending requests,
    //do it now
    if (ctx.closeRequested && !ctx.numRequests) {
      ctx.otgws.endSession();
    }
  };
}

function retryAllPending(loadContext) {

  var ctx = getWorkerContext(loadContext);

  var old = ctx.inprogress;

  ctx.inprogress = {};

  for (var h in old) {
    var item = old[h];
    loadContext.queryParams = item.queryParams;
    loadCdnResource(item.url, h, loadContext, item.type);
  }
}

function queueGeometryMessage(loadContext, mdata) {

  if (!Array.isArray(mdata))
  mdata = [mdata];

  // send message with result
  var transferList = [];

  //Add all ArrayBuffers to the transferable objects list
  for (var i = 0; i < mdata.length; i++) {
    var mesh = mdata[i].mesh;
    if (mesh) {
      var b = mesh.vb.buffer;
      transferList.push(b);

      if (mesh.indices && mesh.indices.buffer !== b)
      transferList.push(mesh.indices.buffer);

      if (mesh.iblines && mesh.iblines.buffer !== b)
      transferList.push(mesh.iblines.buffer);
    }
  }

  //loadContext.worker.postMessage(mdata, transferList);

  var ctx = getWorkerContext(loadContext);
  ctx._pendingMdata.push.apply(ctx._pendingMdata, mdata);
  ctx._pendingTransferList.push.apply(ctx._pendingTransferList, transferList);

}

function onCdnResourceLoaded(data, hash, loadContext, skipCache, resourceType) {

  var ctx = getWorkerContext(loadContext);

  if (!skipCache) {
    ctx.localCache.store(hash, data);

    // Why cloning?:
    // If IndexedDB is used, data is enqueued by LocalDBCache and stored to IndexedDB later.
    // Therefore, we must make sure that 'data' keeps valid.
    //
    // If it contains uncompressed data, it will be referenced by decoded geometry directly
    // and will finally be handed over to the main thread via transfer list (which makes unusable).
    // For this case, we need to copy it. (unless in NodeJS, where transferLists have no effect)
    var isCompressed = data && isGzip(data);
    if (data && !Object(_compat__WEBPACK_IMPORTED_MODULE_3__["isNodeJS"])() && !loadContext.disableIndexedDb && !isCompressed) {
      data = data.slice();
    }
  }

  if (isGzip(data)) {
    data = pako.ungzip(data);
  }

  delete ctx.inprogress[hash];
  ctx.numRequests--;

  if (resourceType === "m") {
    //Post materials as soon as possible without batching -- those are fewer
    //and more critical as they are shared across multiple meshes.
    if (data) {
      loadContext.worker.postMessage({ material: data, hash: hash }, [data.buffer]);
    } else {
      getErrorHandler(loadContext, hash, resourceType)(-1, "", {});
    }
  } else {
    var mdata = data && decodeGeometryOtg(data, hash);
    if (mdata) {
      queueGeometryMessage(loadContext, mdata);
    } else {
      getErrorHandler(loadContext, hash, resourceType)(-1, "", {});
    }
  }

  //If the main thread asked us to end things, but we delayed due to pending requests,
  //do it now
  if (ctx.closeRequested && !ctx.numRequests) {
    ctx.otgws.endSession();
  }
}

// Request raw geometry data (arraybuffer) and call processGeometry with the result
//  @param {Object}   loadContext - passed through to the receiving callback
//  @param {function) onSuccess   - function(loadContext, result). result.mesh contains the mesh data.
function loadCdnResource(url, hash, loadContext, resourceType) {

  var ctx = getWorkerContext(loadContext);

  //Make sure the IndexedDb session is started before we ask to get() anything.
  //This is done by a call to open, which will call us back immediately, or delay until
  //the database is open.
  ctx.localCache.open(function () {return ctx.localCache.get(hash, function (error, data) {
      if (data) {
        onCdnResourceLoaded(data, hash, loadContext, true, resourceType);
      } else {

        if (ctx.inprogress[hash]) {
          console.warn("Unexpected repeated request for same OTG resource.");
        }

        ctx.inprogress[hash] = { url: url, type: resourceType, queryParams: loadContext.queryParams };

        if (ctx.otgws._wsUsable) {

          //Make sure the WebSocket session is started before we request anything.
          //The call to startSession() is reentrant and will call the callback once the WebSocket is open.
          ctx.otgws.startSession(loadContext, function () {return ctx.otgws.requestResources([url], [hash], resourceType);});

        } else {
          //Fallback to XHR/HTTP2
          _net_Xhr__WEBPACK_IMPORTED_MODULE_0__["ViewingService"].getItem(
          loadContext,
          url,
          function (data) {return onCdnResourceLoaded(data, hash, loadContext, false, resourceType);},
          getErrorHandler(loadContext, hash),
          {
            responseType: "arraybuffer",
            withCredentials: true });


        }
      }
    });});
}

// @param {string[]}   loadContext.urls            - request urls
// @param {string[]}   loadContext.hashes          - content hashes corresponding to each request URL
// @param {function} loadContext.onFailureCallback - defined in workerMain()
// @param {Worker}   loadContext.worker            - defined in MainWorker.worker
function doCdnResourceLoad(loadContext) {
  var ctx = getWorkerContext(loadContext);

  for (var i = 0; i < loadContext.urls.length; i++) {
    loadCdnResource(loadContext.urls[i], loadContext.hashes[i], loadContext, loadContext.type || "g");
    ctx.numRequests++;
  }
}

//Sends recently received (since last flush) resources back to the main thread
function flushMessages(loadContext) {

  var ctx = getWorkerContext(loadContext);

  if (!ctx._pendingMdata.length)
  return;

  loadContext.worker.postMessage(ctx._pendingMdata, ctx._pendingTransferList);
  ctx._pendingMdata = [];
  ctx._pendingTransferList = [];
}

function doInitGeomWorker(loadContext) {

  //console.log("Init worker called");
  var ctx = getWorkerContext(loadContext);

  //Begin opening the web socket
  ctx.otgws.startSession(loadContext);

  //Begin opening the IndexedDb database
  ctx.localCache.open(null);

  if (!ctx.flushMessages) {
    ctx.flushMessages = setInterval(function () {
      flushMessages(loadContext);
    }, 66);
  }
}

//Shuts down the load worker
function doPostLoad(loadContext) {

  var ctx = getWorkerContext(loadContext);

  if (ctx.flushMessages) {
    flushMessages(loadContext);
  }

  //The worker can be used by multiple loaders, so only close the
  //web socket if it's not waiting on other requests.
  if (loadContext.endSession) {
    if (!ctx.numRequests) {
      //console.log("End web socket session due to idle.");
      ctx.otgws.endSession();

      //Clear the timer also, in case nothing is pending and session is ending.
      clearInterval(ctx.flushMessages);
      ctx.flushMessages = null;
    } else {
      ctx.closeRequested = true;
    }
  }

  ctx.localCache && ctx.localCache.open(function () {return ctx.localCache.updatePendingTimestamps();});
}

function register(workerMain) {
  workerMain.register("LOAD_CDN_RESOURCE_OTG", { doOperation: doCdnResourceLoad });
  workerMain.register("INIT_WORKER_OTG", { doOperation: doInitGeomWorker });
  workerMain.register("UPDATE_MRU_TIMESTAMPS_OTG", { doOperation: doPostLoad });
}

/***/ }),

/***/ "./src/file-loaders/workers/PropWorker.js":
/*!************************************************!*\
  !*** ./src/file-loaders/workers/PropWorker.js ***!
  \************************************************/
/*! exports provided: register */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony import */ var _net_Xhr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../net/Xhr */ "./src/file-loaders/net/Xhr.js");
/* harmony import */ var _lmvtk_common_Propdb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lmvtk/common/Propdb */ "./src/file-loaders/lmvtk/common/Propdb.js");
/* harmony import */ var _wgs_scene_InstanceTreeStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../wgs/scene/InstanceTreeStorage */ "./src/wgs/scene/InstanceTreeStorage.js");






"use strict";

function PdbCacheEntry(dbPath, isShared) {
  this.pdb = null;
  this.waitingCallbacks = [];
  this.error = false;
  this.dbPath = dbPath;
  this.dbFiles = null;
  this.isShared = isShared;
}

function FileCacheEntry(data) {
  this.data = data;
  this.refCount = 1;
}


function loadPropertyPacks(loadContext, dbId, onPropertyPackLoadComplete) {

  if (!loadContext.worker.pdbCache) {
    loadContext.worker.pdbCache = {};
    loadContext.worker.fileCache = {};
  }

  //get the cache entry for the given property database URL
  var cacheEntry = loadContext.worker.pdbCache[loadContext.dbPath];
  var repeatedCall = false;
  if (!cacheEntry) {
    loadContext.worker.pdbCache[loadContext.dbPath] = cacheEntry = new PdbCacheEntry(loadContext.dbPath, loadContext.sharedDbPath);
  } else {
    repeatedCall = true;
  }

  if (cacheEntry.pdb) {
    onPropertyPackLoadComplete(cacheEntry.pdb, cacheEntry.dbidOldToNew);
    return;
  } else if (!cacheEntry.error) {
    //If we are already loading the same property database, queue the callback
    if (repeatedCall) {
      cacheEntry.waitingCallbacks.push(onPropertyPackLoadComplete);
      return;
    }
  } else {
    onPropertyPackLoadComplete(null);
    return;
  }

  var dbfiles = loadContext.propertydb;
  if (!dbfiles) {
    loadContext.worker.propdbFailed = true;
    onPropertyPackLoadComplete(null);
    return;
  }

  var loadedDbFiles = {};
  var filesToRequest = [];

  if (dbfiles.avs.length) {

    for (var tag in dbfiles) {
      // Skip loading of externalId table if wanted
      if (loadContext.skipExternalIds && tag == 'ids') {
        continue;
      }

      loadedDbFiles[tag] = {};
      filesToRequest.push({ filename: dbfiles[tag][0], storage: loadedDbFiles[tag] });
    }

  } else {

    //Hardcoded list of pdb files -- deprecated, still used when loading F2D files locally, without
    //having loaded a manifest first. And probably in some other cases.

    loadedDbFiles = {
      ids: {},
      attrs: {},
      offsets: {},
      values: {},
      avs: {} };


    filesToRequest.push({ filename: dbfiles.attrs.length ? dbfiles.attrs[0] : "objects_attrs.json.gz", storage: loadedDbFiles.attrs });
    filesToRequest.push({ filename: dbfiles.values.length ? dbfiles.values[0] : "objects_vals.json.gz", storage: loadedDbFiles.values });
    filesToRequest.push({ filename: dbfiles.avs.length ? dbfiles.avs[0] : "objects_avs.json.gz", storage: loadedDbFiles.avs });
    filesToRequest.push({ filename: dbfiles.offsets.length ? dbfiles.offsets[0] : "objects_offs.json.gz", storage: loadedDbFiles.offsets });

    // Loading the externalId table is optional
    if (!loadContext.skipExternalIds) {
      filesToRequest.push({ filename: dbfiles.ids.length ? dbfiles.ids[0] : "objects_ids.json.gz", storage: loadedDbFiles.ids });
    }
  }

  var filesRemaining = filesToRequest.length;
  var filesFailed = 0;

  function onRequestCompletion(data) {

    filesRemaining--;

    // Rough estimate for progress. Although we just count received files here, 
    // it already helps to signficantly reduce the perceived "nothing happens" time periods.
    //
    // Tracking the progress of single requests would be more accurate, but:
    //  - Attaching an onprogress handler to XHR would cause it to consume 2-3x more memory,
    //    because it has to receive the data as text and then convert to array buffer on the fly.
    //  - Due to the content encoding, the progress callbacks wouldn't know the file size, but only
    //    the amount of transferred data, so that they wouldn't help much.
    loadContext.worker.postMessage({
      cbId: loadContext.cbId,
      progress: {
        // Having all files loaded doesn't mean we are fully done. Reserve 5 percent for the rest.
        percent: 95 * (filesToRequest.length - filesRemaining) / filesToRequest.length } });



    if (!data)
    filesFailed++;

    // If all of the files we've requested have been retrieved, create the
    // property database.  Otherwise, request the next required file.
    //
    if (!filesRemaining) {
      if (filesFailed) {
        cacheEntry.error = true;
        onPropertyPackLoadComplete(null);
        while (cacheEntry.waitingCallbacks.length) {
          cacheEntry.waitingCallbacks.shift()(null);
        }
      } else {

        //De-reference the result buffer from this array so that
        //it can be freed on the fly when the PropertyDatabases parses itself
        filesToRequest.forEach(function (f) {
          f.storage = null;
        });

        //Store the property db instance in its cache entry
        try {
          cacheEntry.pdb = new _lmvtk_common_Propdb__WEBPACK_IMPORTED_MODULE_1__["PropertyDatabase"](loadedDbFiles);
          cacheEntry.pdb.refCount = 0; //will be incremented by the success callback
          cacheEntry.loaded = true;
          cacheEntry.dbFiles = filesToRequest;

          for (var p in loadedDbFiles.dbid) {
            var b = loadedDbFiles.dbid[p];
            cacheEntry.dbidOldToNew = new Int32Array(b.buffer, b.byteOffset, b.byteLength / 4);
            break;
          }

          onPropertyPackLoadComplete(cacheEntry.pdb, cacheEntry.dbidOldToNew);

          while (cacheEntry.waitingCallbacks.length) {
            cacheEntry.waitingCallbacks.shift()(cacheEntry.pdb);
          }
        }
        catch (err) {
          onPropertyPackLoadComplete(null, null, err && err.message);
        }
      }
    }
  }
  // Request the files.
  //
  filesToRequest.forEach(function (f) {
    requestFile(f.filename, loadContext, onRequestCompletion, f.storage);
  });
}


function requestFile(filename, loadContext, onRequestCompletion, storage) {

  function onFailure(status, statusText, data) {
    // We're explicitly ignoring missing property files.
    if (status !== 404) {
      loadContext.onFailureCallback(status, statusText, data);
    }
    onRequestCompletion(null);
  }

  var url;
  if (filename.indexOf("://") !== -1 || filename.indexOf("urn:") === 0) {
    url = filename;
  } else {
    url = (loadContext.dbPath || '') + filename;
  }

  var fullPath = _net_Xhr__WEBPACK_IMPORTED_MODULE_0__["ViewingService"].generateUrl(loadContext.endpoint, "items", url);

  var onSuccess = function onSuccess(response)
  {
    //Cache for future reuse
    loadContext.worker.fileCache[fullPath] = new FileCacheEntry(response);

    storage[fullPath] = response;
    onRequestCompletion(response);
  };

  //Fulfill the request from cache if available
  var cacheEntry = loadContext.worker.fileCache[fullPath];
  if (cacheEntry) {
    cacheEntry.refCount++;
    onSuccess(cacheEntry.data);
  } else {
    _net_Xhr__WEBPACK_IMPORTED_MODULE_0__["ViewingService"].getItem(loadContext, url, onSuccess, onFailure);
  }

}


function doObjectTreeParse(loadContext) {

  var _this = loadContext.worker;

  function onPropertyPackLoadComplete(propertyDb, dbidOldToNew, errorMessage) {
    if (!propertyDb) {
      _this.postMessage({
        cbId: loadContext.cbId,
        error: { instanceTree: null, maxTreeDepth: 0, err: errorMessage } });

      return;
    }

    propertyDb.refCount++;

    //Find the root object:
    //TODO: internalize this into the pdb object.
    if (!loadContext.skipInstanceTreeResult && !propertyDb.rootsDone) {
      propertyDb.idroots = propertyDb.findRootNodes();
      propertyDb.rootsDone = true;
    }

    var rootId;
    var maxDepth = [0];

    var transferList = [];
    var storage;

    var fragToDbId = loadContext.fragToDbId;

    if (loadContext.needsDbIdRemap) {
      if (!dbidOldToNew) {
        console.warn("ID remap required, but not loaded.");
      } else if (!fragToDbId) {
        console.warn("No frag->dbid mapping!.");
      } else {

        //Replace the frag2dbid mapping by a new one using the
        //correct property db v2 ids.
        var old2new = dbidOldToNew;
        var fr2id = [];

        for (var i = 0; i < fragToDbId.length; i++) {

          var d = fragToDbId[i];

          if (!Array.isArray(d)) {
            fr2id[i] = old2new[d];
          } else {
            fr2id[i] = [];
            for (var j = 0; j < d.length; j++) {
              fr2id[i][j] = old2new[d[j]];
            }
          }
        }

        fragToDbId = fr2id;
      }
    }

    //In the cases of 2D drawings, there is no meaningful
    //object hierarchy, so we don't build a tree.
    var idroots = propertyDb.idroots;
    if (idroots && idroots.length)
    {
      storage = new _wgs_scene_InstanceTreeStorage__WEBPACK_IMPORTED_MODULE_2__["InstanceTreeStorage"](propertyDb.getObjectCount(), fragToDbId ? fragToDbId.length : 0);

      if (idroots.length == 1) {
        //Case of a single root in the property database,
        //use that as the document root.
        rootId = idroots[0];
        propertyDb.buildObjectTree(rootId, fragToDbId, maxDepth, storage);
      } else
      {
        //Case of multiple nodes at the root level
        //This happens in DWFs coming from Revit.
        //Create a dummy root and add all the other roots
        //as its children.
        rootId = -1e10; // Big negative number to prevent conflicts with F2D
        var childrenIds = [];

        for (var i = 0; i < idroots.length; i++) {
          propertyDb.buildObjectTree(idroots[i], fragToDbId, maxDepth, storage);
          childrenIds.push(idroots[i]);
        }

        storage.setNode(rootId, 0, "", 0, childrenIds, false);
      }

      storage.flatten();
      transferList.push(storage.nodes.buffer);
      transferList.push(storage.children.buffer);
      transferList.push(storage.strings.buf.buffer);
      transferList.push(storage.strings.idx.buffer);


      //Now compute the bounding boxes for instance tree nodes
      if (loadContext.fragBoxes) {
        var nodeAccess = new _wgs_scene_InstanceTreeStorage__WEBPACK_IMPORTED_MODULE_2__["InstanceTreeAccess"](storage, rootId);
        nodeAccess.computeBoxes(loadContext.fragBoxes);
        transferList.push(nodeAccess.nodeBoxes.buffer);
      }
    }

    _this.postMessage({ cbId: loadContext.cbId,
      result: {
        rootId: rootId,
        instanceTreeStorage: storage,
        instanceBoxes: !!nodeAccess ? nodeAccess.nodeBoxes : undefined,
        dbidOldToNew: loadContext.needsDbIdRemap ? dbidOldToNew : null, //If we have a dbId mapping (from new OTG dbIds to old F2D dbIds send it to the main thread.
        maxTreeDepth: maxDepth[0],
        objectCount: propertyDb.getObjectCount() } },

    transferList);
  }

  loadPropertyPacks(loadContext, null, onPropertyPackLoadComplete);
}

function doPropertySearch(loadContext) {

  var _this = loadContext.worker;

  var cacheEntry = _this.pdbCache && _this.pdbCache[loadContext.dbPath];

  if (cacheEntry && cacheEntry.pdb) {
    var searchText = loadContext.searchText;
    var result = cacheEntry.pdb.bruteForceSearch(searchText, loadContext.attributeNames);
    _this.postMessage({ cbId: loadContext.cbId, result: result });
  }

}

function doPropertyDiff(loadContext) {

  var _this = loadContext.worker;

  // get property dbs to compare
  var cacheEntry1 = _this.pdbCache && _this.pdbCache[loadContext.dbPath];
  var cacheEntry2 = _this.pdbCache && _this.pdbCache[loadContext.dbPath2];
  var pdb1 = cacheEntry1 && cacheEntry1.pdb;
  var pdb2 = cacheEntry2 && cacheEntry2.pdb;

  // send messages for progress events to main thread
  var onProgress = function onProgress(percent) {
    loadContext.worker.postMessage({
      cbId: loadContext.cbId,
      progress: { percent: percent } });

  };

  if (pdb1 && pdb2) {
    var result = pdb1.findDifferences(pdb2, loadContext.diffOptions, onProgress);
    _this.postMessage({ cbId: loadContext.cbId, result: result });
  }
}

function doPropertyFind(loadContext) {

  var _this = loadContext.worker;

  var cacheEntry = _this.pdbCache && _this.pdbCache[loadContext.dbPath];

  if (cacheEntry && cacheEntry.pdb) {
    var result = cacheEntry.pdb.bruteForceFind(loadContext.propertyName);
    _this.postMessage({ cbId: loadContext.cbId, result: result });
  }

}

function doLayersFind(loadContext) {
  var _this = loadContext.worker;

  var cacheEntry = _this.pdbCache && _this.pdbCache[loadContext.dbPath];

  if (cacheEntry && cacheEntry.pdb) {
    var result = cacheEntry.pdb.findLayers();
    _this.postMessage({ cbId: loadContext.cbId, result: result });
  }
}


function doPropertyGet(loadContext) {

  var _this = loadContext.worker;

  var cacheEntry = _this.pdbCache && _this.pdbCache[loadContext.dbPath];

  if (!cacheEntry || !cacheEntry.pdb) {
    loadContext.worker.postMessage({ cbId: loadContext.cbId, error: { msg: "Properties are not available." } });
    return;
  }

  var dbId = loadContext.dbId;
  var dbIds = loadContext.dbIds;
  var propFilter = loadContext.propFilter;
  var ignoreHidden = loadContext.ignoreHidden;

  if (typeof dbIds !== "undefined") {
    var results = [];
    if (dbIds && dbIds.length) {
      for (var i = 0; i < dbIds.length; i++) {
        var result = cacheEntry.pdb.getObjectProperties(dbIds[i], propFilter, ignoreHidden);
        if (result)
        results.push(result);
      }
    } else {//If dbIds is empty, return results for all objects (i.e. no ID filter)
      for (var i = 1, last = cacheEntry.pdb.getObjectCount(); i <= last; i++) {
        var result = cacheEntry.pdb.getObjectProperties(i, propFilter, ignoreHidden);
        if (result)
        results.push(result);
      }
    }
    loadContext.worker.postMessage({ cbId: loadContext.cbId, result: results });
  } else {
    var result = cacheEntry.pdb.getObjectProperties(dbId, propFilter);
    loadContext.worker.postMessage({ cbId: loadContext.cbId, result: result });
  }
}


function doBuildExternalIdMapping(loadContext) {

  var _this = loadContext.worker;

  var cacheEntry = _this.pdbCache && _this.pdbCache[loadContext.dbPath];

  if (cacheEntry && cacheEntry.pdb) {
    var mapping = cacheEntry.pdb.getExternalIdMapping(loadContext.extIdFilter);
    _this.postMessage({ cbId: loadContext.cbId, result: mapping });
  }
}

function doBuildLayerToNodeIdMapping(loadContext) {
  var _this = loadContext.worker;

  var cacheEntry = _this.pdbCache && _this.pdbCache[loadContext.dbPath];

  if (cacheEntry && cacheEntry.pdb) {
    var mapping = cacheEntry.pdb.getLayerToNodeIdMapping();
    _this.postMessage({ cbId: loadContext.cbId, result: mapping });
  }
}

// Releases a fileCache entry reference if a file is not used anymore.
//   @param {Object} storage - contains the full file path as (only) key
function unrefFileCacheEntry(storage, loadContext) {
  var _this = loadContext.worker;

  // key is the full file path
  for (var key in storage) {
    var fileCacheEntry = _this.fileCache[key];
    if (fileCacheEntry) {
      fileCacheEntry.refCount--;
      if (fileCacheEntry.refCount === 0)
      delete _this.fileCache[key];
    }
  }
}

function doUnloadPropertyDb(loadContext) {
  var _this = loadContext.worker;

  if (loadContext.clearCaches) {
    _this.pdbCache = {};
    _this.fileCache = {};
    return;
  }

  var cacheEntry = _this.pdbCache && _this.pdbCache[loadContext.dbPath];

  if (cacheEntry && cacheEntry.pdb)
  cacheEntry.pdb.refCount--;else

  return;

  if (cacheEntry.pdb.refCount === 0) {

    //TODO: erase the entry even if db is shared once it's no longer used?
    //The db files are still cached anyway.
    if (!cacheEntry.isShared) {
      delete _this.pdbCache[loadContext.dbPath];
    }

    if (!cacheEntry.isShared) {
      //Also erase any per-file cache, unless the file is shared across multiple property databases
      for (var fileName in cacheEntry.dbFiles) {
        var file = cacheEntry.dbFiles[fileName];
        unrefFileCacheEntry(file.storage, loadContext);
      }
    }
  }
}

// Required params 
//  @param {string} loadContext.dbPath
//  @param {string} loadContext.idsFile - filename of the ids-file
//  @param {string} loadContext.cbId    - worker callback id
//  @param {Object} loadContext.worker  - global worker context
//
// Preconditions:
//  - PropDbLoader makes sure that this task is not called before propDb finished loading. (see asyncPropertyOperation in PropDblLoader)
function doLoadExternalIds(loadContext) {

  var _this = loadContext.worker;

  // Deprecated case: If pdbFiles are not known use hard-wired one (see comment in loadPropertyPacks)
  var idsFile = loadContext.idsFile || "objects_ids.json.gz";

  // After loading, storage[fullPath] will contain the response blob.
  var storage = {};

  // Purpose of doLoadExternalIds is to delay-load the ids for a PropDb.
  // If this propDb is not loaded and not even requested to load, we cannot add externalIds to it.
  var cacheEntry = loadContext.worker.pdbCache[loadContext.dbPath];
  if (!cacheEntry) {
    console.error('Delay-loading of externalIDs requires to load the propDb first.');
    return;
  }

  // Skip here if we have the ids already. Note that this will usually be prevented by propDbLoader already.
  if (cacheEntry.pdb && cacheEntry.pdb.externalIdsLoaded()) {
    _this.postMessage({ cbId: loadContext.cbId });
    return;
  }

  // Receives ids-file blob (or null on failure)
  var onDone = function onDone(data) {

    if (!data) {
      // Loading failed. requestFile() already posted an error message in this case.
      return;
    }

    // Find propertyDB in cache that we want to load ids for
    cacheEntry = loadContext.worker.pdbCache[loadContext.dbPath];
    if (!cacheEntry || !cacheEntry.pdb) {

      // PropDBLoader delays id-loading until propertyDB finished loading.
      // So, if we get here and cannot find the propDb, we can assume that the propertyDb must have been unloaded meanwhile.

      // Make sure that we don't leak the blob in the file-cache (requestFile adds the reference automatically)
      unrefFileCacheEntry(storage, loadContext);

      // Send message to inform that waiting makes no sense anymore, because
      // propDb has been unloaded meanwhile. 
      _this.postMessage({
        cbId: loadContext.cbId,
        error: {
          propDbWasUnloaded: true } });


    }

    // Make ids available in pdb
    cacheEntry.pdb.setIdsBlob(data);

    // Append entry to cacheEntry.dbFiles. This makes sure that the id file blob is released just like
    // all other dbFiles when the propDb is unloaded later. (see unloadPropertyDb)
    var newFile = {
      filename: idsFile,
      storage: storage };

    cacheEntry.dbFiles.push(newFile);

    // Signal that we are done - main thread is now ready to query externalIds.
    _this.postMessage({ cbId: loadContext.cbId });
  };

  requestFile(loadContext.idsFile, loadContext, onDone, storage);
}

function doExecuteCode(loadContext) {

  var _this = loadContext.worker;

  //This is expected to load a function named "userFunction"
  if (loadContext.userFunction) {
    try {
      importScripts(loadContext.userFunction);
    } catch (err) {
      console.error(err);
      _this.postMessage({ cbId: loadContext.cbId, error: { msg: "Error while importing 'userFunction'." } });
      return;
    }
  }

  if (!self.userFunction) {
    _this.postMessage({ cbId: loadContext.cbId, error: { msg: "function 'userFunction' was not found." } });
    return;
  }

  var cacheEntry = _this.pdbCache && _this.pdbCache[loadContext.dbPath];

  if (cacheEntry && cacheEntry.pdb) {
    var result;
    try {
      result = self.userFunction(cacheEntry.pdb, loadContext.userData);
    } catch (err) {
      console.error(err);
      _this.postMessage({ cbId: loadContext.cbId, error: { msg: "Error while executing 'userFunction'." } });
      return;
    } finally {
      self.userFunction = undefined; // cleanup
    }
    _this.postMessage({ cbId: loadContext.cbId, result: result });
  }
}

function register(workerMain) {
  workerMain.register("BUILD_EXTERNAL_ID_MAPPING", { doOperation: doBuildExternalIdMapping });
  workerMain.register("BUILD_LAYER_TO_NODE_ID_MAPPING", { doOperation: doBuildLayerToNodeIdMapping });
  workerMain.register("GET_PROPERTIES", { doOperation: doPropertyGet });
  workerMain.register("SEARCH_PROPERTIES", { doOperation: doPropertySearch });
  workerMain.register("DIFF_PROPERTIES", { doOperation: doPropertyDiff });
  workerMain.register("FIND_PROPERTY", { doOperation: doPropertyFind });
  workerMain.register("FIND_LAYERS", { doOperation: doLayersFind });
  workerMain.register("LOAD_PROPERTYDB", { doOperation: doObjectTreeParse });
  workerMain.register("UNLOAD_PROPERTYDB", { doOperation: doUnloadPropertyDb });
  workerMain.register("USER_FUNCTION", { doOperation: doExecuteCode });
  workerMain.register("LOAD_EXTERNAL_IDS", { doOperation: doLoadExternalIds });
}

/***/ }),

/***/ "./src/file-loaders/workers/SvfWorker.js":
/*!***********************************************!*\
  !*** ./src/file-loaders/workers/SvfWorker.js ***!
  \***********************************************/
/*! exports provided: register */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony import */ var _lmvtk_gltf_Gltf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lmvtk/gltf/Gltf */ "./src/file-loaders/lmvtk/gltf/Gltf.js");
/* harmony import */ var _lmvtk_svf_Package__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lmvtk/svf/Package */ "./src/file-loaders/lmvtk/svf/Package.js");
/* harmony import */ var _lmvtk_common_InputStream__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lmvtk/common/InputStream */ "./src/file-loaders/lmvtk/common/InputStream.js");
/* harmony import */ var _net_Xhr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../net/Xhr */ "./src/file-loaders/net/Xhr.js");
/* harmony import */ var _net_ErrorCodes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../net/ErrorCodes */ "./src/file-loaders/net/ErrorCodes.js");






function guardFunction(loadContext, func)
{
  try {
    func();
  }
  catch (exc) {
    loadContext.worker.raiseError(
    _net_ErrorCodes__WEBPACK_IMPORTED_MODULE_4__["ErrorCodes"].BAD_DATA, "Unhandled exception while loading SVF",
    { "url": loadContext.url, "exception": exc.toString(), "stack": exc.stack });
    loadContext.worker.postMessage(null);
  }
}

function doLoadSvfContinued(loadContext)
{
  var _this = loadContext.worker;

  guardFunction(loadContext, function () {
    var svf = loadContext.svf;
    function loadDoneCallback(type, meshMessage) {
      if (type == "svf") {

        var msg, xfer;
        var frags = svf.fragments;
        var transferable = [
        frags.transforms.buffer,
        frags.packIds.buffer,
        frags.entityIndexes.buffer,
        frags.fragId2dbId.buffer,
        frags.visibilityFlags.buffer];


        if (svf.bvh) {
          // BVH is posted together with svf,
          // so can add more buffer to transfer.
          xfer = {
            nodes: svf.bvh.nodes.getRawData(),
            primitives: svf.bvh.primitives,
            useLeanNodes: svf.bvh.nodes.bytes_per_node == 32 };

          transferable.push(xfer.nodes);
          transferable.push(xfer.primitives.buffer);

          // Then can safely transfer following buffers from fragments.
          transferable.push(frags.boxes.buffer);
          transferable.push(frags.polygonCounts.buffer);
          transferable.push(frags.materials.buffer);

          msg = { "svf": svf, "bvh": xfer, progress: 1.0 };
        } else
        {
          msg = { "svf": svf, progress: 0.8 };
        }

        _this.postMessage(msg, transferable);
      } else if (type == "bvh") {
        xfer = {
          nodes: svf.bvh.nodes.getRawData(),
          primitives: svf.bvh.primitives,
          useLeanNodes: svf.bvh.nodes.bytes_per_node == 32 };


        _this.postMessage({ "bvh": xfer, basePath: svf.basePath, progress: 1.0 },
        [xfer.nodes, xfer.primitives.buffer]);

      } else if (type == "mesh") {

        var transferList = [];
        if (meshMessage.mesh)
        transferList.push(meshMessage.mesh.vb.buffer);

        _this.postMessage(meshMessage, transferList);

      } else if (type == "done") {
        _this.postMessage({ progress: 1.0 });
      } else
      {
        _this.raiseError(
        _net_ErrorCodes__WEBPACK_IMPORTED_MODULE_4__["ErrorCodes"].BAD_DATA, "Failure while loading SVF",
        { "url": loadContext.url });
        _this.postMessage(null);
      }
    }

    loadContext.loadDoneCB = loadDoneCallback;

    svf.loadRemainingSvf(loadContext);
  });
}

function doLoadSvf(loadContext) {

  var _this = loadContext.worker;

  _this.postMessage({ progress: 0.01 }); //Tell the main thread we are alive

  var type = "svf";
  var url = loadContext.url.toLocaleLowerCase();
  if (url.lastIndexOf(".gltf") === url.length - 5)
  type = "gltf";
  if (url.lastIndexOf(".glb") === url.length - 4)
  type = "glb";

  function onSuccess(result) {

    _this.postMessage({ progress: 0.5 }); //rough progress reporting -- can do better

    guardFunction(loadContext, function () {

      var svf;
      if (type === "gltf" || type === "glb") {
        // result is json
        svf = new _lmvtk_gltf_Gltf__WEBPACK_IMPORTED_MODULE_0__["GltfPackage"](result);
      } else {
        // result is arraybuffer
        svf = new _lmvtk_svf_Package__WEBPACK_IMPORTED_MODULE_1__["Package"](new Uint8Array(result));
      }
      loadContext.svf = svf;
      svf.loadManifest(loadContext);


      if (loadContext.interceptManifest) {
        _this.postMessage({ "manifest": svf.manifest });
      } else {
        loadContext.manifest = svf.manifest;
        doLoadSvfContinued(loadContext);
      }
    });
  }

  var options = {
    responseType: type === "gltf" ? "json" : "arraybuffer" };

  _net_Xhr__WEBPACK_IMPORTED_MODULE_3__["ViewingService"].getItem(loadContext, loadContext.url, onSuccess, loadContext.onFailureCallback, options);

  //Prefetch the first geometry pack (we assume there is one), to mask some latency
  //We intentionally ignore any errors here.
  if (type === "svf") {
    _net_Xhr__WEBPACK_IMPORTED_MODULE_3__["ViewingService"].getItem(loadContext, loadContext.basePath + "0.pf", function () {}, function () {}, options);
  }
}


function doFetchTopology(loadContext) {

  var _this = loadContext.worker;
  _net_Xhr__WEBPACK_IMPORTED_MODULE_3__["ViewingService"].getItem(loadContext, loadContext.path, onSuccess, onFailure);

  // on success
  function onSuccess(data) {

    _this.postMessage({ "status-topology": {} }); // download is complete

    // This lines below may take a while...
    var topology = null;
    try {
      var jdr = new _lmvtk_common_InputStream__WEBPACK_IMPORTED_MODULE_2__["InputStream"](data);
      var byteLength = data.byteLength;
      if (0 < byteLength) {
        topology = JSON.parse(jdr.getString(byteLength));
      }
      if (topology) {
        _this.postMessage({ "fetch-topology": { error: null, topology: topology } }); // parsing is complete
      } else {
        onFailure('topology-no-content');
      }
    } catch (eee) {
      onFailure(eee);
    }
  }

  // on-failure
  function onFailure(err) {
    _this.postMessage({ "fetch-topology": { error: err, topology: null } }); // something went wrong
  }
}

function register(workerMain) {
  workerMain.register("LOAD_SVF", { doOperation: doLoadSvf });
  workerMain.register("LOAD_SVF_CONTD", { doOperation: doLoadSvfContinued });
  workerMain.register("FETCH_TOPOLOGY", { doOperation: doFetchTopology });
}

/***/ }),

/***/ "./src/logger/Logger.js":
/*!******************************!*\
  !*** ./src/logger/Logger.js ***!
  \******************************/
/*! exports provided: LogLevels, Logger, logger, setLogger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogLevels", function() { return LogLevels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logger", function() { return Logger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logger", function() { return logger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLogger", function() { return setLogger; });
/* harmony import */ var _compat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../compat */ "./src/compat.js");
/* harmony import */ var _file_loaders_net_endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../file-loaders/net/endpoints */ "./src/file-loaders/net/endpoints.js");




var global = Object(_compat__WEBPACK_IMPORTED_MODULE_0__["getGlobal"])();

/**
                           * Logging levels. Higher number means more verbose logs,
                           * for example, with level 3, `info`, `warn`, or `error`
                           * logs will show up in the console but `debug` and `log` won't.
                           *
                           * Semantics of specific levels:
                           *  - debug: low-level debugging logs
                           *  - log: common, higher-level debugging logs
                           *  - info: helpful runtime information (even for stag/prod environments)
                           *  - warn: potentially problematic situations; handled exceptions
                           *  - error: definitely problematic situations; unhandled exceptions
                           * @readonly
                           * @enum {number}
                           */
var LogLevels = {
  DEBUG: 5,
  LOG: 4,
  INFO: 3,
  WARNING: 2,
  ERROR: 1,
  NONE: 0 };



/**
              * Logger class. 
              * Depending on options.logLevel setting in initilize function, corresponding functions would be activated.
              */
function Logger() {
  this.runtimeStats = {};
  this.level = -1;
  this.setLevel(LogLevels.ERROR);
  this._reportError = this._reportError.bind(this);
}

/**
   * Initialize Logger object with options. 
   * 
   * @param {object}   [options] - Options object to configure the Logger.
   * @param {function} [options.eventCallback] - An optional callback used for processing the log entry with properties like "category", "timestamp", etc. 
                                                 It can be used as for analytics tracking by filtering and listening to specific category users are interested. 
                                                 The expected argument is the user supplied entry object instrumented with "timestamp" and "sessionId" properties. 
   * @param {string}   [options.sessionId] - An optional id for each browser session. Default gets generated based on current time stamp if not specified. 
   * @param {number}   [options.logLevel] - An optional level to define the log level. Default is LogLevels.ERROR if not specified.
   *
   */

Logger.prototype.initialize = function (options) {

  if (options.eventCallback)
  this.callback = options.eventCallback;

  this.sessionId = options.sessionId;
  if (!this.sessionId) {
    var now = Date.now() + "";
    this.sessionId = parseFloat((Math.random() * 10000 | 0) + "" + now.substring(4));
  }

  // Initialize log level is passed in
  if (typeof options.logLevel === 'number') {
    this.setLevel(options.logLevel);
  }

  this.environmentInfo = {
    touch: Object(_compat__WEBPACK_IMPORTED_MODULE_0__["isTouchDevice"])(),
    env: Object(_file_loaders_net_endpoints__WEBPACK_IMPORTED_MODULE_1__["getEnv"])(),
    referer: getReferer(),
    version: global.LMV_VIEWER_VERSION,
    build_type: global.LMV_BUILD_TYPE };


  //Kick off with a viewer start event
  var startEvent = {
    category: "viewer_start",
    touch: this.environmentInfo.touch,
    env: this.environmentInfo.env,
    referer: this.environmentInfo.referer,
    version: this.environmentInfo.version,
    build_type: this.environmentInfo.build_type };

  this.track(startEvent);

  var _this = this;
  this.interval = setInterval(function () {
    _this.reportRuntimeStats();
  }, 60000);
};

/**
    * Stop the runtime stats reporting every min.
    */
Logger.prototype.shutdown = function () {
  clearInterval(this.interval);
  this.interval = undefined;
};


/**
    * Track the user inputted entry by appending additional info "timestamp", "sessionId"
    * @param {object} [entry] - User object to define the track object, 
           e.g. {
               category : "load_document",
               urn: "xyz"
           }   
    */
Logger.prototype.track = function (entry) {

  this.updateRuntimeStats(entry);

  if (Object(_file_loaders_net_endpoints__WEBPACK_IMPORTED_MODULE_1__["isOffline"])() || !this.sessionId) {
    return;
  }

  if (this.callback) {

    entry.timestamp = Date.now();
    entry.sessionId = this.sessionId;

    this.callback(entry);
  }
};

Logger.prototype.updateRuntimeStats = function (entry) {
  if (entry.hasOwnProperty('aggregate')) {
    switch (entry.aggregate) {
      case 'count':
        if (this.runtimeStats[entry.name] > 0) {
          this.runtimeStats[entry.name]++;
        } else {
          this.runtimeStats[entry.name] = 1;
        }
        this.runtimeStats._nonempty = true;
        break;
      case 'last':
        this.runtimeStats[entry.name] = entry.value;
        this.runtimeStats._nonempty = true;
        break;
      default:
        this.warn('unknown log aggregate type');}

  }
};

Logger.prototype.reportRuntimeStats = function () {
  if (this.runtimeStats._nonempty) {
    delete this.runtimeStats._nonempty;

    this.runtimeStats.category = 'misc_stats';
    this.track(this.runtimeStats);
    this.runtimeStats = {};
  }
};

Logger.prototype.setLevel = function (level) {
  if (this.level === level)
  return;

  this.level = level;

  // Bind to console
  this.debug = level >= LogLevels.DEBUG ? console.log : consoleNothing;
  this.log = level >= LogLevels.LOG ? console.log : consoleNothing;
  this.info = level >= LogLevels.INFO ? console.info : consoleNothing;
  this.warn = level >= LogLevels.WARNING ? console.warn : consoleNothing;
  this.error = level >= LogLevels.ERROR ? this._reportError : consoleNothing;
};


/**
    * Reports an error to the browser console and to the logger's callback.
    * Invoked by developers when method `logger.error()` is used. 
    * Forwards the arguments directly into `console.error()`. 
    * @private
    */
Logger.prototype._reportError = function () {
  if (this.callback) {
    var msg = Array.prototype.slice.call(arguments).join(' ');
    this.callback({ category: 'error', message: msg });
  }
  console.error.apply(console, arguments);
};

/**
    * @private
    */
function getReferer() {
  // Wrapping href retrieval due to Fortify complains
  if (typeof window !== 'undefined') {
    return encodeURI(window.location.href);
  }
  return '';
}



/**
   * Swallows log/debug/info/warn/error calls when the logLevel disallows it.
   * @private
   */
function consoleNothing() {

}


var logger = new Logger();

function setLogger(l) {
  logger = l;
}

/***/ }),

/***/ "./src/wgs/scene/BVHBuilder.js":
/*!*************************************!*\
  !*** ./src/wgs/scene/BVHBuilder.js ***!
  \*************************************/
/*! exports provided: NodeArray, BVHBuilder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodeArray", function() { return NodeArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BVHBuilder", function() { return BVHBuilder; });
/**
 * BVH definitions:
 *
 * BVH Node: if this was C (the only real programming language), it would go something like this,
 * but with better alignment.
 *
 * This is definition for "fat" nodes (for rasterization),
 * i.e. when inner nodes also contain primitives.
 * struct Node {                                                            byte/short/int offset
 *      float worldBox[6]; //world box of the node node                         0/0/0
 *      int leftChildIndex; //pointer to left child node (right is left+1)     24/12/6
 *      ushort primCount; //how many fragments are at this node                28/14/7
 *      ushort flags; //bitfield of good stuff                                 30/15/7.5
 *
 *      int primStart; //start of node's own primitives (fragments) list       32/16/8
 * };
 * => sizeof(Node) = 36 bytes

 * Definition for lean nodes (for ray casting): when a node is either inner node (just children, no primitives)
 * or leaf (just primitives, no children).
 * struct Node {
 *      float worldBox[6]; //world box of the node
 *      union {
 *          int leftChildIndex; //pointer to left child node (right is left+1)
 *          int primStart; //start of node's own primitives (fragments) list
 *      };
 *      ushort primCount; //how many fragments are at this node
 *      ushort flags; //bitfield of good stuff
 * };
 * => sizeof(Node) = 32 bytes
 *
 * The class below encapsulates an array of such nodes using ArrayBuffer as backing store.
 *
 * @param {ArrayBuffer|number} initialData  Initial content of the NodeArray, or initial allocation of empty nodes
 * @param {boolean} useLeanNode Use minimal node structure size. Currently this parameter must be set to false.
 * @constructor
 */
function NodeArray(initialData, useLeanNode) {
  'use strict';

  if (useLeanNode) {
    this.bytes_per_node = 32;
  } else {
    this.bytes_per_node = 36;
  }

  var initialCount;
  var initialBuffer;

  if (initialData instanceof ArrayBuffer) {
    initialCount = initialData.byteLength / this.bytes_per_node;
    initialBuffer = initialData;
    this.nodeCount = initialCount;
  } else
  {
    initialCount = initialData | 0;
    initialBuffer = new ArrayBuffer(this.bytes_per_node * initialCount);
    this.nodeCount = 0;
  }

  this.nodeCapacity = initialCount;
  this.nodesRaw = initialBuffer;

  this.is_lean_node = useLeanNode;
  this.node_stride = this.bytes_per_node / 4;
  this.node_stride_short = this.bytes_per_node / 2;

  //Allocate memory buffer for all tree nodes
  this.nodesF = new Float32Array(this.nodesRaw);
  this.nodesI = new Int32Array(this.nodesRaw);
  this.nodesS = new Uint16Array(this.nodesRaw);
}

NodeArray.prototype.setLeftChild = function (nodeidx, childidx) {
  this.nodesI[nodeidx * this.node_stride + 6] = childidx;
};
NodeArray.prototype.getLeftChild = function (nodeidx) {
  return this.nodesI[nodeidx * this.node_stride + 6];
};

NodeArray.prototype.setPrimStart = function (nodeidx, start) {
  if (this.is_lean_node)
  this.nodesI[nodeidx * this.node_stride + 6] = start;else

  this.nodesI[nodeidx * this.node_stride + 8] = start;
};
NodeArray.prototype.getPrimStart = function (nodeidx) {
  if (this.is_lean_node)
  return this.nodesI[nodeidx * this.node_stride + 6];else

  return this.nodesI[nodeidx * this.node_stride + 8];
};

NodeArray.prototype.setPrimCount = function (nodeidx, count) {
  this.nodesS[nodeidx * this.node_stride_short + 14] = count;
};
NodeArray.prototype.getPrimCount = function (nodeidx) {
  return this.nodesS[nodeidx * this.node_stride_short + 14];
};

NodeArray.prototype.setFlags = function (nodeidx, axis, isFirst, isTransparent) {
  this.nodesS[nodeidx * this.node_stride_short + 15] = isTransparent << 3 | isFirst << 2 | axis & 0x3;
};
NodeArray.prototype.getFlags = function (nodeidx) {
  return this.nodesS[nodeidx * this.node_stride_short + 15];
};

NodeArray.prototype.setBox0 = function (nodeidx, src) {
  var off = nodeidx * this.node_stride;
  var dst = this.nodesF;
  dst[off] = src[0];
  dst[off + 1] = src[1];
  dst[off + 2] = src[2];
  dst[off + 3] = src[3];
  dst[off + 4] = src[4];
  dst[off + 5] = src[5];
};
NodeArray.prototype.getBoxThree = function (nodeidx, dst) {
  var off = nodeidx * this.node_stride;
  var src = this.nodesF;
  dst.min.x = src[off];
  dst.min.y = src[off + 1];
  dst.min.z = src[off + 2];
  dst.max.x = src[off + 3];
  dst.max.y = src[off + 4];
  dst.max.z = src[off + 5];
};
NodeArray.prototype.getBoxArray = function (nodeidx, dst, offset) {
  var off = nodeidx * this.node_stride;
  var src = this.nodesF;
  offset = offset || 0;
  dst[0 + offset] = src[off];
  dst[1 + offset] = src[off + 1];
  dst[2 + offset] = src[off + 2];
  dst[3 + offset] = src[off + 3];
  dst[4 + offset] = src[off + 4];
  dst[5 + offset] = src[off + 5];
};
NodeArray.prototype.setBoxThree = function (nodeidx, src) {
  var off = nodeidx * this.node_stride;
  var dst = this.nodesF;
  dst[off] = src.min.x;
  dst[off + 1] = src.min.y;
  dst[off + 2] = src.min.z;
  dst[off + 3] = src.max.x;
  dst[off + 4] = src.max.y;
  dst[off + 5] = src.max.z;
};




NodeArray.prototype.makeEmpty = function (nodeidx) {

  var off = nodeidx * this.node_stride;
  var dst = this.nodesI;

  //No point to makeEmpty here, because the box gets set
  //directly when the node is initialized in bvh_subdivide.
  //box_make_empty(this.nodesF, off);

  //_this.setLeftChild(nodeidx,-1);
  dst[off + 6] = -1;

  //both prim count and flags to 0
  dst[off + 7] = 0;

  //_this.setPrimStart(nodeidx, -1);
  if (!this.is_lean_node)
  dst[off + 8] = -1;

};

NodeArray.prototype.realloc = function (extraSize) {
  if (this.nodeCount + extraSize > this.nodeCapacity) {
    var nsz = 0 | this.nodeCapacity * 3 / 2;
    if (nsz < this.nodeCount + extraSize)
    nsz = this.nodeCount + extraSize;

    var nnodes = new ArrayBuffer(nsz * this.bytes_per_node);
    var nnodesI = new Int32Array(nnodes);
    nnodesI.set(this.nodesI);

    this.nodeCapacity = nsz;
    this.nodesRaw = nnodes;
    this.nodesF = new Float32Array(nnodes);
    this.nodesI = nnodesI;
    this.nodesS = new Uint16Array(nnodes);
  }
};

NodeArray.prototype.nextNodes = function (howMany) {

  this.realloc(howMany);

  var res = this.nodeCount;
  this.nodeCount += howMany;

  for (var i = 0; i < howMany; i++) {
    this.makeEmpty(res + i);
  }

  return res;
};

NodeArray.prototype.getRawData = function () {
  return this.nodesRaw.slice(0, this.nodeCount * this.bytes_per_node);
};

var POINT_STRIDE = 3;
var BOX_EPSILON = 1e-5;
var BOX_SCALE_EPSILON = 1e-5;
var MAX_DEPTH = 15; /* max tree depth */
var MAX_BINS = 16;

/**
                   * Bounding Volume Hierarchy build algorithm.
                   * Uses top down binning -- see "On fast Construction of SAH-based Bounding Volume Hierarchies" by I.Wald
                   * Ported from the C version here: https://git.autodesk.com/stanevt/t-ray/blob/master/render3d/t-ray/t-core/t-bvh.c
                   * Optimized for JavaScript.
                   */
var BVHModule = function () {
  //There be dragons in this closure.

  "use strict";


  /**
                 * Utilities for manipulating bounding boxes stored
                 * in external array (as sextuplets of float32)
                 */


  function box_get_centroid(dst, dst_off, src, src_off) {
    dst[dst_off] = 0.5 * (src[src_off] + src[src_off + 3]);
    dst[dst_off + 1] = 0.5 * (src[src_off + 1] + src[src_off + 4]);
    dst[dst_off + 2] = 0.5 * (src[src_off + 2] + src[src_off + 5]);
  }

  function box_add_point_0(dst, src, src_off) {

    if (dst[0] > src[src_off]) dst[0] = src[src_off];
    if (dst[3] < src[src_off]) dst[3] = src[src_off];

    if (dst[1] > src[src_off + 1]) dst[1] = src[src_off + 1];
    if (dst[4] < src[src_off + 1]) dst[4] = src[src_off + 1];

    if (dst[2] > src[src_off + 2]) dst[2] = src[src_off + 2];
    if (dst[5] < src[src_off + 2]) dst[5] = src[src_off + 2];

  }

  function box_add_box_0(dst, src, src_off) {

    if (dst[0] > src[src_off]) dst[0] = src[src_off];
    if (dst[1] > src[src_off + 1]) dst[1] = src[src_off + 1];
    if (dst[2] > src[src_off + 2]) dst[2] = src[src_off + 2];

    if (dst[3] < src[src_off + 3]) dst[3] = src[src_off + 3];
    if (dst[4] < src[src_off + 4]) dst[4] = src[src_off + 4];
    if (dst[5] < src[src_off + 5]) dst[5] = src[src_off + 5];
  }

  function box_add_box_00(dst, src) {
    if (dst[0] > src[0]) dst[0] = src[0];
    if (dst[1] > src[1]) dst[1] = src[1];
    if (dst[2] > src[2]) dst[2] = src[2];

    if (dst[3] < src[3]) dst[3] = src[3];
    if (dst[4] < src[4]) dst[4] = src[4];
    if (dst[5] < src[5]) dst[5] = src[5];
  }

  function box_get_size(dst, dst_off, src, src_off) {
    for (var i = 0; i < 3; i++) {
      dst[dst_off + i] = src[src_off + 3 + i] - src[src_off + i];
    }
  }

  //function box_copy(dst, dst_off, src, src_off) {
  //    for (var i=0; i<6; i++) {
  //        dst[dst_off+i] = src[src_off+i];
  //    }
  //}

  // unwound version of box_copy
  function box_copy_00(dst, src) {
    dst[0] = src[0];
    dst[1] = src[1];
    dst[2] = src[2];
    dst[3] = src[3];
    dst[4] = src[4];
    dst[5] = src[5];
  }

  var dbl_max = Infinity;

  //function box_make_empty(dst, dst_off) {
  //        dst[dst_off]   =  dbl_max;
  //        dst[dst_off+1] =  dbl_max;
  //        dst[dst_off+2] =  dbl_max;
  //        dst[dst_off+3] = -dbl_max;
  //        dst[dst_off+4] = -dbl_max;
  //        dst[dst_off+5] = -dbl_max;
  //}

  function box_make_empty_0(dst) {
    dst[0] = dbl_max;
    dst[1] = dbl_max;
    dst[2] = dbl_max;
    dst[3] = -dbl_max;
    dst[4] = -dbl_max;
    dst[5] = -dbl_max;
  }

  function box_area(src, src_off) {

    var dx = src[src_off + 3] - src[src_off];
    var dy = src[src_off + 4] - src[src_off + 1];
    var dz = src[src_off + 5] - src[src_off + 2];

    if (dx < 0 || dy < 0 || dz < 0)
    return 0;

    return 2.0 * (dx * dy + dy * dz + dz * dx);
  }

  function box_area_0(src) {

    var dx = src[3] - src[0];
    var dy = src[4] - src[1];
    var dz = src[5] - src[2];

    if (dx < 0 || dy < 0 || dz < 0)
    return 0;

    return 2.0 * (dx * dy + dy * dz + dz * dx);
  }





  function bvh_split_info() {
    this.vb_left = new Float32Array(6);
    this.vb_right = new Float32Array(6);
    this.cb_left = new Float32Array(6);
    this.cb_right = new Float32Array(6);
    this.num_left = 0;
    this.best_split = -1;
    this.best_cost = -1;
    this.num_bins = -1;
  }

  bvh_split_info.prototype.reset = function () {
    this.num_left = 0;
    this.best_split = -1;
    this.best_cost = -1;
    this.num_bins = -1;
  };


  function bvh_bin() {
    this.box_bbox = new Float32Array(6); // bbox of all primitive bboxes
    this.box_centroid = new Float32Array(6); // bbox of all primitive centroids
    this.num_prims = 0; // number of primitives in the bin
  }

  bvh_bin.prototype.reset = function () {
    this.num_prims = 0; // number of primitives in the bin
    box_make_empty_0(this.box_bbox);
    box_make_empty_0(this.box_centroid);
  };

  function accum_bin_info() {
    this.BL = new Float32Array(6);
    this.CL = new Float32Array(6);
    this.NL = 0;
    this.AL = 0;
  }

  accum_bin_info.prototype.reset = function () {
    this.NL = 0;
    this.AL = 0;

    box_make_empty_0(this.BL);
    box_make_empty_0(this.CL);
  };


  //Scratch variables used by bvh_bin_axis
  //TODO: can be replaced by a flat ArrayBuffer
  var bins = [];
  var i;
  for (i = 0; i < MAX_BINS; i++) {
    bins.push(new bvh_bin());
  }

  //TODO: can be replaced by a flat ArrayBuffer
  var ai = [];
  for (i = 0; i < MAX_BINS - 1; i++) {
    ai.push(new accum_bin_info());}

  var BR = new Float32Array(6);
  var CR = new Float32Array(6);


  function assign_bins(bvh, start, end, axis, cb, cbdiag, num_bins) {

    var centroids = bvh.centroids;
    var primitives = bvh.primitives;
    var boxes = bvh.finfo.boxes;
    var boxStride = bvh.finfo.boxStride;

    /* bin assignment */
    var k1 = num_bins * (1.0 - BOX_SCALE_EPSILON) / cbdiag[axis];
    var cbaxis = cb[axis];
    var sp = bvh.sort_prims;

    for (var j = start; j <= end; j++)
    {
      /* map array index to primitive index -- since primitive index array gets reordered by the BVH build*/
      /* while the primitive info array is not reordered */
      var iprim = primitives[j] | 0;

      var fpbin = k1 * (centroids[iprim * 3 /*POINT_STRIDE*/ + axis] - cbaxis);
      var binid = fpbin | 0; //Truncate to int is algorithmic -> not an optimization thing!

      /* possible floating point problems */
      if (binid < 0)
      {
        binid = 0;
        //debug("Bin index out of range " + fpbin);
      } else
      if (binid >= num_bins)
      {
        binid = num_bins - 1;
        //debug("Bin index out of range. " + fpbin);
      }

      /* Store the bin index for the partitioning step, so we don't recompute it there */
      sp[j] = binid;

      /* update other bin data with the new primitive */
      //var bin = bins[binid];
      bins[binid].num_prims++;

      box_add_box_0(bins[binid].box_bbox, boxes, iprim * boxStride);
      box_add_point_0(bins[binid].box_centroid, centroids, iprim * 3 /*POINT_STRIDE*/);
    }
    /* at this point all primitves are assigned to a bin */
  }


  function bvh_bin_axis(bvh, start, end, axis, cb, cbdiag, split_info) {

    /* if size is near 0 on this axis, cost of split is infinite */
    if (cbdiag[axis] < bvh.scene_epsilon)
    {
      split_info.best_cost = Infinity;
      return;
    }

    var num_bins = MAX_BINS;
    if (num_bins > end - start + 1)
    num_bins = end - start + 1;

    var i;
    for (i = 0; i < num_bins; i++) {
      bins[i].reset();}

    for (i = 0; i < num_bins - 1; i++) {
      ai[i].reset();}

    split_info.num_bins = num_bins;

    assign_bins(bvh, start, end, axis, cb, cbdiag, num_bins);


    /* now do the accumulation sweep from left to right */
    box_copy_00(ai[0].BL, bins[0].box_bbox);
    box_copy_00(ai[0].CL, bins[0].box_centroid);
    ai[0].AL = box_area_0(ai[0].BL);
    ai[0].NL = bins[0].num_prims;
    var bin;
    for (i = 1; i < num_bins - 1; i++)
    {
      bin = bins[i];
      var aii = ai[i];
      box_copy_00(aii.BL, ai[i - 1].BL);
      box_add_box_00(aii.BL, bin.box_bbox);
      aii.AL = box_area_0(aii.BL);

      box_copy_00(aii.CL, ai[i - 1].CL);
      box_add_box_00(aii.CL, bin.box_centroid);

      aii.NL = ai[i - 1].NL + bin.num_prims;
    }

    /* sweep from right to left, keeping track of lowest cost and split */
    i = num_bins - 1;
    box_copy_00(BR, bins[i].box_bbox);
    box_copy_00(CR, bins[i].box_centroid);
    var AR = box_area_0(BR);
    var NR = bins[i].num_prims;

    var best_split = i;
    var best_cost = AR * NR + ai[i - 1].AL * ai[i - 1].NL;
    box_copy_00(split_info.vb_right, BR);
    box_copy_00(split_info.cb_right, bins[i].box_centroid);
    box_copy_00(split_info.vb_left, ai[i - 1].BL);
    box_copy_00(split_info.cb_left, ai[i - 1].CL);
    split_info.num_left = ai[i - 1].NL;

    for (i = i - 1; i >= 1; i--)
    {
      bin = bins[i];
      box_add_box_00(BR, bin.box_bbox);
      box_add_box_00(CR, bin.box_centroid);
      AR = box_area_0(BR);
      NR += bin.num_prims;

      var cur_cost = AR * NR + ai[i - 1].AL * ai[i - 1].NL;

      if (cur_cost <= best_cost)
      {
        best_cost = cur_cost;
        best_split = i;

        box_copy_00(split_info.vb_right, BR);
        box_copy_00(split_info.cb_right, CR);
        box_copy_00(split_info.vb_left, ai[i - 1].BL);
        box_copy_00(split_info.cb_left, ai[i - 1].CL);
        split_info.num_left = ai[i - 1].NL;
      }
    }

    split_info.best_split = best_split;
    split_info.best_cost = best_cost;
  }

  function bvh_partition(bvh, start, end, axis, cb, cbdiag, split_info) {

    //At this point, the original algorithm does an in-place NON-STABLE partition
    //to move primitives to the left and right sides of the split plane
    //into contiguous location of the primitives list for use by
    //the child nodes. But, we want to preserve the ordering by size
    //without having to do another sort, so we have to use
    //a temporary storage location to copy into. We place right-side primitives
    //in temporary storage, then copy back into the original storage in the right order.
    //Left-side primitives are still put directly into the destination location.
    var primitives = bvh.primitives;
    //var centroids = bvh.centroids;
    var i, j;

    //sort_prims contains bin indices computed during the split step.
    //Here we read those and also use sort_prims as temporary holding
    //of primitive indices. Hopefully the read happens before the write. :)
    //In C it was cheap enough to compute this again...
    //var k1 = split_info.num_bins * (1.0 - BOX_SCALE_EPSILON) / cbdiag[axis];
    //var cbaxis = cb[axis];
    var sp = bvh.sort_prims;

    var right = 0;
    var left = start | 0;
    var best_split = split_info.best_split | 0;

    for (i = start; i <= end; i++) {
      var iprim = primitives[i] | 0;
      //var fpbin = (k1 * (centroids[3/*POINT_STRIDE*/ * iprim + axis] - cbaxis));
      var binid = sp[i]; /* fpbin|0; */

      if (binid < best_split) {
        primitives[left++] = iprim;
      } else {
        sp[right++] = iprim;
      }
    }

    //if ((left-start) != split_info.num_left)
    //    debug("Mismatch between binning and partitioning.");

    //Copy back the right-side primitives into main primitives array, while
    //maintaining order
    for (j = 0; j < right; j++) {
      primitives[left + j] = sp[j];
    }
    /* at this point the binning is complete and we have computed a split */
  }


  function bvh_fatten_inner_node(bvh, nodes, nodeidx, start, end, cb, cbdiag, poly_cut_off) {

    var primitives = bvh.primitives;
    var centroids = bvh.centroids;

    //Take the first few items to place into the inner node,
    //but do not go over the max item or polygon count.
    var prim_count = end - start + 1;

    if (prim_count > bvh.frags_per_inner_node)
    prim_count = bvh.frags_per_inner_node;

    if (prim_count > poly_cut_off)
    prim_count = poly_cut_off;


    nodes.setPrimStart(nodeidx, start);
    nodes.setPrimCount(nodeidx, prim_count);
    start += prim_count;

    //Because we take some primitives off the input, we have to recompute
    //the bounding box used for computing the node split.
    box_make_empty_0(cb);
    for (var i = start; i <= end; i++) {
      box_add_point_0(cb, centroids, 3 /*POINT_STRIDE*/ * primitives[i]);
    }

    //Also update the split axis -- it could possibly change too.
    box_get_size(cbdiag, 0, cb, 0);
    //Decide which axis to split on. Done purely by longest.
    var axis = 0;
    if (cbdiag[1] > cbdiag[0])
    axis = 1;
    if (cbdiag[2] > cbdiag[axis])
    axis = 2;

    return axis;
  }


  var cbdiag = new Float32Array(3); //scratch variable used in bvh_subdivide

  function bvh_subdivide(bvh,
  nodeidx, /* current parent node to consider splitting */
  start, end, /* primitive sub-range to be considered at this recursion step */
  vb, /* bounding volume of the primitives' bounds in the sub-range */
  cb, /* bounding box of primitive centroids in this range */
  transparent, /* does the node contain opaque or transparent objects */
  depth /* recursion depth */)

  {
    box_get_size(cbdiag, 0, cb, 0);
    var nodes = bvh.nodes;
    var frags_per_leaf = transparent ? bvh.frags_per_leaf_node_transparent : bvh.frags_per_leaf_node;
    var frags_per_inner = transparent ? bvh.frags_per_inner_node_transparent : bvh.frags_per_inner_node;
    var polys_per_node = bvh.max_polys_per_node;

    //Decide which axis to split on.
    var axis = 0;
    if (cbdiag[1] > cbdiag[0])
    axis = 1;
    if (cbdiag[2] > cbdiag[axis])
    axis = 2;

    //Whether the node gets split or not, it gets
    //the same overall bounding box.
    nodes.setBox0(nodeidx, vb);

    //Check the expected polygon count of the node. This figures out the maximum number of fragments
    // we can put at the node as determined by polys_per_node
    var poly_count = 0;
    var poly_cut_off = 0;
    var prim_count = end - start + 1;

    // If we have the number of triangles in each mesh, limit the number of primitives in an inner node.
    if (bvh.finfo.hasPolygonCounts && bvh.frags_per_inner_node) {
      // Walk through primitives, add up the counts until we reach polys_per_node (10000), or run through
      // frags_per_inner_node (usually 32).
      // We know that later on we'll limit the number to frags_per_inner_node, so also do it here.
      var shorten_end = prim_count <= bvh.frags_per_inner_node ? end : start + bvh.frags_per_inner_node - 1;
      for (var i = start; i <= shorten_end; i++) {
        poly_count += bvh.finfo.getPolygonCount(bvh.primitives[i]);
        poly_cut_off++;
        if (poly_count > polys_per_node)
        break;
      }
    }

    var isSmall = prim_count <= frags_per_leaf && poly_count < polys_per_node ||
    prim_count === 1;

    //Decide whether to terminate recursion
    if (isSmall ||
    depth > MAX_DEPTH || //max recursion depth
    cbdiag[axis] < bvh.scene_epsilon) //node would be way too tiny for math to make sense (a point)
      {
        nodes.setLeftChild(nodeidx, -1);
        nodes.setPrimStart(nodeidx, start);
        nodes.setPrimCount(nodeidx, end - start + 1);
        nodes.setFlags(nodeidx, 0, 0, transparent ? 1 : 0);
        return;
      }

    //Pick the largest (first) primitives to live in this node
    //NOTE: this assumes primitives are sorted by size.
    //NOTE: This step is an optional departure from the original, and we also do a check for it above
    // to compute poly_cut_off.
    if (frags_per_inner) {
      axis = bvh_fatten_inner_node(bvh, nodes, nodeidx, start, end, cb, cbdiag, poly_cut_off);
      start = start + nodes.getPrimCount(nodeidx);
    }

    var split_info = new bvh_split_info();

    //Do the binning of the remaining primitives to go into child nodes
    bvh_bin_axis(bvh, start, end, axis, cb, cbdiag, split_info);

    if (split_info.num_bins < 0) {
      //Split was too costly, so add all objects to the current node and bail
      nodes.setPrimCount(nodeidx, nodes.getPrimCount(nodeidx) + end - start + 1);
      return;
    }

    bvh_partition(bvh, start, end, axis, cb, cbdiag, split_info);

    var child_idx = nodes.nextNodes(2);

    /* set info about split into the node */
    var cleft = (split_info.vb_left[3 + axis] + split_info.vb_left[axis]) * 0.5;
    var cright = (split_info.vb_right[3 + axis] + split_info.vb_right[axis]) * 0.5;

    nodes.setFlags(nodeidx, axis, cleft < cright ? 0 : 1, transparent ? 1 : 0);
    nodes.setLeftChild(nodeidx, child_idx);


    /* validate split */
    /*
                         if (true) {
                             for (var i=start; i< start+num_left; i++)
                             {
                                 //int binid = (int)(k1 * (info->prim_info[info->bvh->iprims[i]].centroid.v[axis] - cb->min.v[axis]));
                                 var cen = primitives[i] * POINT_STRIDE;
                                 if (   centroids[cen] < split_info.cb_left[0]
                                     || centroids[cen] > split_info.cb_left[3]
                                     || centroids[cen+1] < split_info.cb_left[1]
                                     || centroids[cen+1] > split_info.cb_left[4]
                                     || centroids[cen+2] < split_info.cb_left[2]
                                     || centroids[cen+2] > split_info.cb_left[5])
                                 {
                                     debug ("wrong centroid box");
                                 }
                             }
                              for (i=start+num_left; i<=end; i++)
                             {
                                 //int binid = (int)(k1 * (info->prim_info[info->bvh->iprims[i]].centroid.v[axis] - cb->min.v[axis]));
                                 var cen = primitives[i] * POINT_STRIDE;
                                 if (   centroids[cen] < split_info.cb_right[0]
                                     || centroids[cen] > split_info.cb_right[3]
                                     || centroids[cen+1] < split_info.cb_right[1]
                                     || centroids[cen+1] > split_info.cb_right[4]
                                     || centroids[cen+2] < split_info.cb_right[2]
                                     || centroids[cen+2] > split_info.cb_right[5])
                                 {
                                     debug ("wrong centroid box");
                                 }
                             }
                         }
                         */


    /* recurse */
    //bvh_subdivide(bvh, child_idx, start, start + split_info.num_left - 1, split_info.vb_left, split_info.cb_left, transparent, depth+1);
    //bvh_subdivide(bvh, child_idx + 1, start + split_info.num_left, end, split_info.vb_right, split_info.cb_right, transparent, depth+1);

    //Iterative stack-based recursion for easier profiling
    bvh.recursion_stack.push([bvh, child_idx + 1, start + split_info.num_left, end, split_info.vb_right, split_info.cb_right, transparent, depth + 1]);
    bvh.recursion_stack.push([bvh, child_idx, start, start + split_info.num_left - 1, split_info.vb_left, split_info.cb_left, transparent, depth + 1]);

  }


  function compute_boxes(bvh) {

    var boxv_o = bvh.boxv_o;
    var boxc_o = bvh.boxc_o;
    var boxv_t = bvh.boxv_t;
    var boxc_t = bvh.boxc_t;

    box_make_empty_0(boxv_o);
    box_make_empty_0(boxc_o);
    box_make_empty_0(boxv_t);
    box_make_empty_0(boxc_t);

    var c = bvh.centroids;
    var b = bvh.finfo.boxes;
    var boxStride = bvh.finfo.boxStride;

    for (var i = 0, iEnd = bvh.prim_count; i < iEnd; i++) {

      // find which primitive in the sorted list to use next
      var p = bvh.primitives[i];
      box_get_centroid(c, 3 /*POINT_STRIDE*/ * p, b, boxStride * p);

      if (i >= bvh.first_transparent) {

        box_add_point_0(boxc_t, c, 3 /*POINT_STRIDE*/ * p);
        box_add_box_0(boxv_t, b, boxStride * p);

      } else {

        box_add_point_0(boxc_o, c, 3 /*POINT_STRIDE*/ * p);
        box_add_box_0(boxv_o, b, boxStride * p);

      }
    }

    box_get_size(cbdiag, 0, bvh.boxv_o, 0);
    var maxsz = Math.max(cbdiag[0], cbdiag[1], cbdiag[2]);
    bvh.scene_epsilon = BOX_EPSILON * maxsz;
  }




  //Module exports
  return {
    bvh_subdivide: bvh_subdivide,
    compute_boxes: compute_boxes,
    box_area: box_area };


}();


function FragInfo(fragments, materialDefs) {
  //Invariants
  this.boxes = fragments.boxes; //Array of Float32, each bbox is a sextuplet
  this.polygonCounts = fragments.polygonCounts;
  this.hasPolygonCounts = !!this.polygonCounts;
  this.materials = fragments.materials; //material indices (we need to know which fragments are transparent)
  this.materialDefs = materialDefs;
  this.count = fragments.length;
  this.boxStride = 6;
  this.wantSort = true;
}

FragInfo.prototype.getCount = function () {
  return this.count;
};

FragInfo.prototype.isTransparent = function (i) {
  return this.materialDefs && this.materialDefs[this.materials[i]] ? this.materialDefs[this.materials[i]].transparent : false;
};

FragInfo.prototype.getPolygonCount = function (i) {
  return this.polygonCounts[i];
};

/**
    * Given a list of LMV fragments, builds a spatial index for view-dependent traversal and hit testing.
    * @constructor
    */
function BVHBuilder(fragments, materialDefs, finfo) {

  //Initialize the inputs (bboxes, transparent flags, polygon counts)
  this.finfo = finfo || new FragInfo(fragments, materialDefs);

  this.prim_count = this.finfo.getCount();

  //To be initialized by build() function based on build options
  this.frags_per_leaf_node = -1;
  this.frags_per_inner_node = -1;
  this.nodes = null;

  this.work_buf = new ArrayBuffer(this.prim_count * 4);
  this.sort_prims = new Int32Array(this.work_buf);

  //Allocate memory buffer for re-ordered fragment primitive indices,
  //which will be sorted by node ownership and point to the index
  //of the fragment data.
  this.primitives = new Int32Array(this.prim_count);

  //The BVH split algorithm works based on centroids of the bboxes.
  this.centroids = new Float32Array(POINT_STRIDE * this.prim_count);

  //BBoxes and centroid bboxes for opaque and transparent primitive sets
  this.boxv_o = new Float32Array(6);
  this.boxc_o = new Float32Array(6);
  this.boxv_t = new Float32Array(6);
  this.boxc_t = new Float32Array(6);


  this.recursion_stack = [];
}

BVHBuilder.prototype.sortPrimitives = function (wantSort) {

  var prim_sizes = new Float32Array(this.work_buf);
  var primitives = this.primitives;
  var numTransparent = 0;

  //Sort the input objects by size
  //We assume all LMV SVF files come
  //sorted by draw priority already, so in theory we can skip this step.
  //This turns out to not be the case - some fragments are badly sorted.
  //Part of the reason may be that the surface area of the geometry itself,
  //not its bounding box, is used to sort by physical size in LMVTK.
  //In any case, the transparent objects do not always come last (bug in LMVTK?),
  //so we still have to pull them out to the end of the list, so some sorting
  //takes place no matter how this value is set.
  // Turning this option on will mean that the BVH building process as a whole
  // will be 45% to 75% longer, for large models - full sorting takes awhile.
  // In absolute terms this is an increase of a maximum of 1.15 seconds for a
  // very large model (one with over 1 million fragments, i.e., mesh instances).
  // This cost may be acceptable. For smaller models - "only" 70K instances -
  // the cost is 0.05 seconds. For 130k instances, 0.1 seconds. The rise is
  // slightly more than linear, but not excessively slow. I think it's acceptable,
  // given that the cost is still much less than loading even a small part of the
  // model.
  var doSort = wantSort;

  // console.log("BVH sort is " + WANT_SORT);

  var i, iEnd;
  for (i = 0, iEnd = this.prim_count; i < iEnd; i++) {

    //Start with trivial 1:1 order of the indices array
    primitives[i] = i;

    var transparent = this.finfo.isTransparent(i);

    if (transparent)
    numTransparent++;

    if (doSort) {
      prim_sizes[i] = BVHModule.box_area(this.finfo.boxes, this.finfo.boxStride * i);

      //In order to make transparent objects appear last,
      //we give them a negative size, so that they are naturally
      //sorted last in the sort by size.
      if (transparent)
      prim_sizes[i] = -prim_sizes[i];
    } else {
      //We still need the transparency flag for the loop below
      //where we find the last opaque item, but we can
      //short-cut the size computation.
      prim_sizes[i] = transparent ? -1 : 1;
    }
  }


  if (doSort) {
    Array.prototype.sort.call(this.primitives, function (a, b) {
      return prim_sizes[b] - prim_sizes[a];
    });
  } else {
    if (numTransparent && numTransparent < this.prim_count) {

      var tmpTransparent = new Int32Array(numTransparent);
      var oidx = 0,tidx = 0;

      for (i = 0, iEnd = this.prim_count; i < iEnd; i++) {
        if (prim_sizes[i] >= 0)
        primitives[oidx++] = primitives[i];else

        tmpTransparent[tidx++] = primitives[i];
      }

      primitives.set(tmpTransparent, this.prim_count - numTransparent);
    }
  }

  this.first_transparent = this.prim_count - numTransparent;
};


BVHBuilder.prototype.build = function (options) {
  //Kick off the BVH build.

  var useSlimNodes = options && !!options.useSlimNodes;

  var self = this;
  function assign_option(name, defaultVal) {
    if (options.hasOwnProperty(name))
    self[name] = options[name];else

    self[name] = defaultVal;
  }

  // note: frags_per_leaf_node does *not* make an upper limit for the number of frags per node.

  //options for build optimized for rasterization renderer scenes
  if (useSlimNodes) {
    assign_option("frags_per_leaf_node", 1);
    assign_option("frags_per_inner_node", 0);
    assign_option("frags_per_leaf_node_transparent", 1);
    assign_option("frags_per_inner_node_transparent", 0);
    assign_option("max_polys_per_node", Infinity);
  } else {
    var multiplier = options.isWeakDevice ? 0.5 : 1.0;

    //TODO: tune these constants
    assign_option("frags_per_leaf_node", 0 | 256 * multiplier);
    //Placing fragments at inner nodes places more emphasis on bigger objects during tree traversal
    //but it can only be done for opaque objects. Transparent objects have to be strictly back to front
    //traversal regardless of size, unless a unified traversal
    assign_option("frags_per_inner_node", 0 | this.frags_per_leaf_node);
    assign_option("frags_per_leaf_node_transparent", this.frags_per_leaf_node);
    assign_option("frags_per_inner_node_transparent", 0);
    assign_option("max_polys_per_node", 0 | 20000 * multiplier);
  }

  //Reuse existing node array if there
  if (this.nodes && this.nodes.is_lean_node == useSlimNodes)
  this.nodes.nodeCount = 0;else
  {
    var est_nodes = this.prim_count / this.frags_per_leaf_node;
    var num_nodes = 1;
    while (num_nodes < est_nodes) {
      num_nodes *= 2;}

    this.nodes = new NodeArray(num_nodes, options ? options.useSlimNodes : false);
  }

  this.sortPrimitives(this.finfo.wantSort);

  BVHModule.compute_boxes(this);

  //Init the root nodes at 0 for opaque
  //and 1 for transparent objects
  var root = this.nodes.nextNodes(2);

  //Now kick off the recursive tree build

  //Opaque
  BVHModule.bvh_subdivide(this, root, 0, this.first_transparent - 1, this.boxv_o, this.boxc_o, false, 0);

  var a;
  while (this.recursion_stack.length) {
    a = this.recursion_stack.pop();
    BVHModule.bvh_subdivide(a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7]);
  }

  //Transparent
  BVHModule.bvh_subdivide(this, root + 1, this.first_transparent, this.prim_count - 1, this.boxv_t, this.boxc_t, true, 0);

  while (this.recursion_stack.length) {
    a = this.recursion_stack.pop();
    BVHModule.bvh_subdivide(a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7]);
  }
};

/***/ }),

/***/ "./src/wgs/scene/DeriveTopology.js":
/*!*****************************************!*\
  !*** ./src/wgs/scene/DeriveTopology.js ***!
  \*****************************************/
/*! exports provided: createWireframe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createWireframe", function() { return createWireframe; });
/* harmony import */ var _VertexEnumerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VertexEnumerator */ "./src/wgs/scene/VertexEnumerator.js");
/* harmony import */ var _LmvVector3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LmvVector3 */ "./src/wgs/scene/LmvVector3.js");
/* harmony import */ var _LmvBox3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LmvBox3 */ "./src/wgs/scene/LmvBox3.js");




function remapVertices(geom, boundingBox) {
  //de-duplicate vertices based on position only (ignoring normals)

  var remap = [];
  var uniqueV = {};

  var boxScale = 1.0;
  if (geom.boundingBox || boundingBox) {
    var bbox = new _LmvBox3__WEBPACK_IMPORTED_MODULE_2__["LmvBox3"]().copy(geom.boundingBox || boundingBox);
    var sz = bbox.size();
    boxScale = Math.max(sz.x, Math.max(sz.y, sz.z));
  }

  var SCALE = (1 << 16) / boxScale; //snap scale, assuming unit mesh

  function getVertexIndex(v, i) {
    var x = 0 | v.x * SCALE;
    var y = 0 | v.y * SCALE;
    var z = 0 | v.z * SCALE;

    var mx = uniqueV[x];
    if (!mx) {
      uniqueV[x] = mx = {};
    }

    var my = mx[y];
    if (!my) {
      mx[y] = my = {};
    }

    var mz = my[z];
    if (mz === undefined) {
      my[z] = mz = i;
    }

    return mz;
  }

  function remapcb(v, n, uv, i) {
    var vidx = getVertexIndex(v, i);
    remap[i] = vidx;
  }

  Object(_VertexEnumerator__WEBPACK_IMPORTED_MODULE_0__["enumMeshVertices"])(geom, remapcb);

  return remap;
}


function transformVertices(geom, toWorld) {

  var vbuf = new Float32Array(3 * Object(_VertexEnumerator__WEBPACK_IMPORTED_MODULE_0__["getVertexCount"])(geom));

  function cb(v, n, uv, i) {
    vbuf[3 * i] = v.x;
    vbuf[3 * i + 1] = v.y;
    vbuf[3 * i + 2] = v.z;
  }

  Object(_VertexEnumerator__WEBPACK_IMPORTED_MODULE_0__["enumMeshVertices"])(geom, cb, toWorld);

  return vbuf;
}

function createWireframe(geom, toWorld, boundingBox, wantAllTriangleEdges) {

  if (geom.isLines)
  return;

  if (geom.iblines)
  return;

  //find unique vertices
  var remap = remapVertices(geom, boundingBox);

  //get vertices in world space -- we need this for
  //correct angle calculations
  var worldVerts = transformVertices(geom, toWorld);

  //loop over all triangles, keeping track of
  //edges that seem important
  var seenEdges = {};

  var edgeIB = [];

  var _v1 = new _LmvVector3__WEBPACK_IMPORTED_MODULE_1__["LmvVector3"]();
  var _v2 = new _LmvVector3__WEBPACK_IMPORTED_MODULE_1__["LmvVector3"]();
  var _v3 = new _LmvVector3__WEBPACK_IMPORTED_MODULE_1__["LmvVector3"]();
  var _n1 = new _LmvVector3__WEBPACK_IMPORTED_MODULE_1__["LmvVector3"]();
  var _n2 = new _LmvVector3__WEBPACK_IMPORTED_MODULE_1__["LmvVector3"]();

  function getV(i, v) {
    v.x = worldVerts[3 * i];
    v.y = worldVerts[3 * i + 1];
    v.z = worldVerts[3 * i + 2];
  }

  function getNormal(i1, i2, i3, n) {
    getV(i1, _v1);
    getV(i2, _v2);
    getV(i3, _v3);

    _v2.sub(_v1);
    _v3.sub(_v1);
    _v2.cross(_v3);

    n.copy(_v2).normalize();
  }

  function doOneEdge(i1orig, i2orig, opp1orig) {

    var i1 = remap[i1orig];
    var i2 = remap[i2orig];
    var opp1 = remap[opp1orig];

    //Ignore degenerates
    if (i1 === i2 || i1 === opp1 || i2 === opp1)
    return;

    var reversed = false;
    if (i1 > i2) {
      var tmp = i1;
      i1 = i2;
      i2 = tmp;
      reversed = true;
    }

    var e1 = seenEdges[i1];
    if (e1) {
      var opp2orig = e1[i2];
      if (opp2orig === undefined) {
        e1[i2] = reversed ? -opp1orig - 1 : opp1orig;
      } else {
        //We now know two triangles that share this edge,
        //we can check if it's important

        if (!wantAllTriangleEdges) {
          //Use original indices, so that we
          //can do the math with the correct winding order
          getNormal(i1orig, i2orig, opp1orig, _n1);

          if (opp2orig < 0) {
            getNormal(i2, i1, remap[-opp2orig - 1], _n2);
          } else {
            getNormal(i1, i2, remap[opp2orig], _n2);
          }

          var dot = _n1.dot(_n2);

          if (Math.abs(dot) < 0.25) {
            edgeIB.push(i1orig);
            edgeIB.push(i2orig);
          }
        } else {
          edgeIB.push(i1orig);
          edgeIB.push(i2orig);
        }

        delete e1[i2];
      }
    } else {
      seenEdges[i1] = {};
      seenEdges[i1][i2] = opp1orig;
    }
  }

  function tricb(vA, vB, vC, iA, iB, iC) {
    doOneEdge(iA, iB, iC);
    doOneEdge(iB, iC, iA);
    doOneEdge(iC, iA, iB);
  }

  //find edges that have neighboring triangles at sharp angle
  Object(_VertexEnumerator__WEBPACK_IMPORTED_MODULE_0__["enumMeshTriangles"])(geom, tricb);

  //process remaining edges (outer edges that only have one triangle)

  for (var i1 in seenEdges) {
    for (var i2 in seenEdges[i1]) {
      edgeIB.push(parseInt(i1));
      edgeIB.push(parseInt(i2));
    }
  }


  if (edgeIB.length > 1) {
    geom.iblines = new Uint16Array(edgeIB.length);
    geom.iblines.set(edgeIB);
  }

  /*
        for (var i=0; i<geom.ib.length; i++) {
            geom.ib[i] = remap[geom.ib[i]];
        }
        */
}

/***/ }),

/***/ "./src/wgs/scene/GeomMergeTask.js":
/*!****************************************!*\
  !*** ./src/wgs/scene/GeomMergeTask.js ***!
  \****************************************/
/*! exports provided: GeomMergeTask, writeIdToBuffer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeomMergeTask", function() { return GeomMergeTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "writeIdToBuffer", function() { return writeIdToBuffer; });
/**
 * A GeomMergeTask is used for mesh consolidation. It fills vertex buffer and id buffer of a consolidated mesh
 * based on a set of compatible input meshes.
 *
 * GeomMergeTask is shared by main wgs script and worker script, so that the same code can be used for single-threaded
 * and multi-threaded consolidation.
 */

// unique task ids
var _nextTaskId = 1;
function createTaskId() {return _nextTaskId++;}

function GeomMergeTask() {

  // Interleaved vertex buffers as Float32Array.
  this.vb = null;

  // floats per vertex
  this.vbstride = 0;

  // offsets in floats where to find position/normal in vertex buffer
  this.posOffset = 0;
  this.normalOffset = 0;

  // matrices per src-geom (Float32Array with 16 floats per matrix)
  this.matrices = null;
  this.ranges = null;

  // must be an Uint32Array that we can efficiently hand-over to the worker
  this.dbIds = null;

  // unique task-id used to find BufferGeometry when a merged vb is returned from worker
  this.id = createTaskId();
}

/**
   *  Packs a Vector3 normal vector into 2 components. This is a CPU-side implementation of PackNormalsShaderChunk
   *  (see ShaderChunks.js)
   *
   *   @param {THREE.Vector3|LmvVector3} normal - InOut normal vector.
   *
   *  Note that 'normal' must be normalized!
   */
function encodeNormal(normal) {
  normal.x = 0.5 * (1.0 + Math.atan2(normal.y, normal.x) / Math.PI);
  normal.y = 0.5 * (1.0 + normal.z);
  normal.z = 0.0; // not used for result
}

/**
   * @param {THREE.Vector3|LmvVector3} normal - InOut normal vector. Input z is ignored.
   */
function decodeNormal(normal) {
  var angX = 2.0 * normal.x - 1.0;
  var angY = 2.0 * normal.y - 1.0;
  var scthX = Math.sin(angX * Math.PI);
  var scthY = Math.cos(angX * Math.PI);
  var scphiX = Math.sqrt(1.0 - angY * angY);
  var scphiY = angY;
  normal.x = scthY * scphiX;
  normal.y = scthX * scphiX;
  normal.z = scphiY;
}

/**
   *  Writes a dbId into 4 subsequent bytes of an Uint8Array. (4th is only for alignment and always 0)
   *   @param {Number}     dbId
   *   @param {Uint8Array} bufferUint8 - view into the vertex buffer that we write to.
   *   @param {Number}     writeIndex  - Index into the uint8 array where we write the first byte.
   */
function writeIdToBuffer(dbId, bufferUint8, writeIndex) {
  bufferUint8[writeIndex++] = dbId & 0xff;
  bufferUint8[writeIndex++] = dbId >> 8 & 0xff;
  bufferUint8[writeIndex++] = dbId >> 16 & 0xff;
  bufferUint8[writeIndex] = 0; // dbIds are only vec3 in the shader
}

// We don't have THREE.Matrix3 in a worker, so that we cannot use getNormalTransform()
function getNormalMatrix(matrix, dstMatrix) {

  // eliminate translation part
  dstMatrix.copy(matrix);
  dstMatrix[12] = 0;
  dstMatrix[13] = 0;
  dstMatrix[14] = 0;

  // tranpose of inverse
  return dstMatrix.getInverse(dstMatrix).transpose();
}

/**
   *  Transforms positions and normals of a vertex buffer range.
   *
   *  NOTE: Only interleaved buffers with packed normals are supported.
   *
   *   @param {GeomInfo}      geom
   *   @param {Uint16Array}   vbUint16     - additional uint16-view to interleaved vertex-buffer
   *   @param {LmvMatrix4}    matrix
   *   @param {Number}        [rangeStart] - First vertex to transform. (default: 0)
   *   @param {Number}        [rangeEnd]   - End of vertex range.       (default: #vertices)
   *   @param {LmvMatrix4}    tmpMatrix    - reused tmp matrix
   *   @param {LmvVector3}    tmpVec       - reused tmp vector
   */
var transformVertexRange = function transformVertexRange(geom, vbUint16, matrix, rangeStart, rangeEnd, tmpMatrix, tmpVec) {

  // transform positions
  var posOffset = geom.posOffset;
  for (var i = rangeStart; i < rangeEnd; i++) {

    // read vertex position i
    var offset = i * geom.vbstride + posOffset;
    tmpVec.set(geom.vb[offset], geom.vb[offset + 1], geom.vb[offset + 2]);

    tmpVec.applyMatrix4(matrix);

    // write vertex position i
    geom.vb[offset] = tmpVec.x;
    geom.vb[offset + 1] = tmpVec.y;
    geom.vb[offset + 2] = tmpVec.z;
  }

  // transform normals (if available)
  if (geom.normalOffset !== -1) {

    // To transform normals, we need an Uint16-view to the data.
    // Packed normals are 2-component Uint16-vectors.
    var uint16PerVertex = geom.vbstride * 2; // Multiply by 2, because vbstride and itemOffset
    var uint16NormalOffset = geom.normalOffset * 2; // are counting 32Bit floats.
    var maxUint16 = 0xFFFF;

    // compute normal transform
    var normalMatrix = getNormalMatrix(matrix, tmpMatrix);

    // transform normal vectors
    for (i = rangeStart; i < rangeEnd; i++) {
      // read byte-normal of vertex i
      var normalIndex = i * uint16PerVertex + uint16NormalOffset;
      tmpVec.set(vbUint16[normalIndex], vbUint16[normalIndex + 1], 0.0);

      // decode to vec3 with components in [0,1]
      tmpVec.divideScalar(maxUint16);
      decodeNormal(tmpVec);

      // Note that normalMatrix is a LmvMatrix4 (although we only use 3x3 matrix)
      tmpVec.applyMatrix4(normalMatrix);

      // Note that encodeNormal requires normalized values. Although a decodedNormal is
      // always normalized, the normalMatrix may involve a scaling.
      tmpVec.normalize();

      // encode back to 2-component uint16
      encodeNormal(tmpVec);
      tmpVec.multiplyScalar(maxUint16);

      // write back to vertex buffer
      vbUint16[normalIndex] = tmpVec.x;
      vbUint16[normalIndex + 1] = tmpVec.y;
    }
  }
};

// read matrix i from Float32 array to target LmvMatrix4
function getMatrix(index, array, target) {
  // TypedArray.set does not support a srcOffset parameter. So we have to use manual copy here.
  var offset = 16 * index;
  for (var i = 0; i < 16; i++) {
    target.elements[i] = array[i + offset];
  }
}

/**
   *  Run merge task. This can be done using Vector/Matrix types from THREE (in main) or LmvVector/LmvMatrix (worker).
   *  To define which types to use while keeping the code independent, a preallocated matrix/vector must be provided.
   *
   *  @param {LmvMatrix4|THREE.Matrix4} matrix
   *  @param {LmvVector3|THREE.Vector3} vector
   *  @returns {Object} - merge result r, containing
   *                        {number}       r.id:        task id
   *                        {Float32Array} r.vb:        merged interleaved vertex buffer
   *                        {Uint8Array}   r.vertexIds: buffer for separate per-vertex id attribute
   */
GeomMergeTask.prototype.run = function (matrix, vec) {

  var vb = this.vb;
  var vertexCount = vb.length / this.vbstride;

  var tmpMatrix = matrix.clone();

  // create buffer for per-vertex ids of consolidated mesh
  var IDBytesPerVertex = 3;
  var dstIds = new Uint8Array(IDBytesPerVertex * vertexCount);

  // to transform normals, we need an Uint16-view to the interleaved vertex buffer.
  // packed normals are 2-component Uin16-vectors.
  var hasNormals = this.normalOffset !== -1;
  var vbUint16 = hasNormals ? new Uint16Array(vb.buffer, vb.byteOffset, vb.length * 2) : null;

  // transform vertex-range and write ids. Each range corresponds to a source fragment geometry
  var ranges = this.ranges;
  var matrices = this.matrices;
  var numRanges = ranges.length - 1; // note that ranges contains an extra element for the last range end
  for (var j = 0; j < numRanges; j++) {

    // get vertex range corresponding to src geom i
    var rangeBegin = ranges[j];
    var rangeEnd = ranges[j + 1];

    // get matrix for src geom i
    getMatrix(j, matrices, matrix);

    // transform vertex positions and normals in this range
    transformVertexRange(this, vbUint16, matrix, rangeBegin, rangeEnd, tmpMatrix, vec);

    // assign dbId to all vertices of this range
    var dstIdsByteOffset = rangeBegin * IDBytesPerVertex;
    var rangeLength = rangeEnd - rangeBegin;
    var dbId = this.dbIds[j];
    for (var k = 0; k < rangeLength; k++) {
      writeIdToBuffer(dbId, dstIds, dstIdsByteOffset);
      dstIdsByteOffset += IDBytesPerVertex;
    }
  }

  // return result object. It contains everything we need to finish a single consolidated mesh.
  return {
    taskId: this.id,
    vb: this.vb, // note that we have to pass back the byte-view
    vertexIds: dstIds };

};

/***/ }),

/***/ "./src/wgs/scene/InstanceTreeStorage.js":
/*!**********************************************!*\
  !*** ./src/wgs/scene/InstanceTreeStorage.js ***!
  \**********************************************/
/*! exports provided: FlatStringStorage, InstanceTreeStorage, InstanceTreeAccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlatStringStorage", function() { return FlatStringStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstanceTreeStorage", function() { return InstanceTreeStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstanceTreeAccess", function() { return InstanceTreeAccess; });
/* harmony import */ var _file_loaders_lmvtk_common_StringUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../file-loaders/lmvtk/common/StringUtils */ "./src/file-loaders/lmvtk/common/StringUtils.js");
function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}



var FlatStringStorage = /*#__PURE__*/function () {

  function FlatStringStorage(initial) {_classCallCheck(this, FlatStringStorage);
    if (initial) {
      this.buf = initial.buf;
      this.idx = initial.idx;
      this.next = initial.next;
    } else {
      this.buf = new Uint8Array(256);
      this.next = 0;
      this.idx = [0];
    }
  }_createClass(FlatStringStorage, [{ key: "allocate", value: function allocate(

    len) {
      if (this.buf.length - this.next < len) {
        var nsz = Math.max(this.buf.length * 3 / 2, this.buf.length + len);
        var nb = new Uint8Array(nsz);
        nb.set(this.buf);
        this.buf = nb;
      }
    } }, { key: "add", value: function add(

    s) {
      if (s === null || typeof s === "undefined") {
        return 0;
      }

      if (!s.length) {
        this.idx.push(this.next);
        return this.idx.length - 1;
      }

      var len = Object(_file_loaders_lmvtk_common_StringUtils__WEBPACK_IMPORTED_MODULE_0__["utf16to8"])(s, null);
      this.allocate(len);
      this.next += Object(_file_loaders_lmvtk_common_StringUtils__WEBPACK_IMPORTED_MODULE_0__["utf16to8"])(s, this.buf, this.next);
      this.idx.push(this.next);
      return this.idx.length - 1;
    } }, { key: "get", value: function get(

    i) {
      if (!i) {
        return undefined;
      }

      var start = this.idx[i - 1];
      var end = this.idx[i];
      if (start === end)
      return "";
      return Object(_file_loaders_lmvtk_common_StringUtils__WEBPACK_IMPORTED_MODULE_0__["utf8BlobToStr"])(this.buf, start, end - start);
    } }, { key: "flatten", value: function flatten()

    {
      this.idx = arrayToBuffer(this.idx);
      //TODO: we could also clip this.buf to the actually used size, but that requires reallocation
    } }]);return FlatStringStorage;}();




//
// struct Node {
//     int dbId;
//     int parentDbId;
//     int firstChild; //if negative it's a fragment list
//     int numChildren;
//     int flags;   
// };
// sizeof(Node) == 20
var SIZEOF_NODE = 5, //integers
OFFSET_DBID = 0,
OFFSET_PARENT = 1,
OFFSET_FIRST_CHILD = 2,
OFFSET_NUM_CHILD = 3,
OFFSET_FLAGS = 4;

// note: objectCount and fragmentCount are not used
function InstanceTreeStorage(objectCount, fragmentCount) {

  this.nodes = [];
  this.nextNode = 0;

  this.children = [];
  this.nextChild = 0;

  this.dbIdToIndex = {};

  this.names = [];
  this.s2i = {}; //duplicate string pool
  this.strings = new FlatStringStorage();
  this.nameSuffixes = []; //integers

  //Occupy index zero so that we can use index 0 as undefined
  this.getIndex(0);
}

InstanceTreeStorage.prototype.getIndex = function (dbId) {

  var index = this.dbIdToIndex[dbId];

  if (index)
  return index;

  index = this.nextNode++;

  //Allocate space for new node
  this.nodes.push(dbId); //store the dbId as first integer in the Node structure
  //Add four blank integers to be filled by setNode
  for (var i = 1; i < SIZEOF_NODE; i++) {
    this.nodes.push(0);}

  this.dbIdToIndex[dbId] = index;

  return index;
};

InstanceTreeStorage.prototype.setNode = function (dbId, parentDbId, name, flags, childrenIds, fragIds) {

  var index = this.getIndex(dbId);

  var baseOffset = index * SIZEOF_NODE;

  var numChildren = childrenIds.length;
  var hasFragments = fragIds && fragIds.length;
  if (hasFragments) {
    numChildren += fragIds.length;
  }

  this.nodes[baseOffset + OFFSET_PARENT] = parentDbId;
  this.nodes[baseOffset + OFFSET_FIRST_CHILD] = this.nextChild;
  this.nodes[baseOffset + OFFSET_NUM_CHILD] = hasFragments ? -numChildren : numChildren;
  this.nodes[baseOffset + OFFSET_FLAGS] = flags;

  var i;
  for (i = 0; i < childrenIds.length; i++) {
    this.children[this.nextChild++] = this.getIndex(childrenIds[i]);}

  //Store fragIds as negative numbers so we can differentiate them when looking through
  //the array later.
  if (hasFragments) {
    for (i = 0; i < fragIds.length; i++) {
      this.children[this.nextChild++] = -fragIds[i] - 1;} //index 0 stored as -1, etc., since 0 is not negative
  }

  if (this.nextChild > this.children.length) {
    // TODO: this code may run in a worker, replace console with something else
    console.error("Child index out of bounds -- should not happen");
  }

  this.processName(index, name);
};

InstanceTreeStorage.prototype.processName = function (index, name) {

  //Attempt to decompose the name into a base string + integer,
  //like for example "Base Wall [12345678]" or "Crank Shaft:1"
  //We will try to reduce memory usage by storing "Base Wall" just once.
  var base;
  var suffix;

  //Try Revit style [1234] first
  var iStart = -1;
  var iEnd = -1;

  if (name) {//name should not be empty, but hey, it happens.
    iEnd = name.lastIndexOf("]");
    iStart = name.lastIndexOf("[");

    //Try Inventor style :1234
    if (iStart === -1 || iEnd === -1) {
      iStart = name.lastIndexOf(":");
      iEnd = name.length;
    }
  }

  //TODO: Any other separators? What does AutoCAD use?

  if (iStart >= 0 && iEnd > iStart) {
    base = name.slice(0, iStart + 1);
    var ssuffix = name.slice(iStart + 1, iEnd);
    suffix = parseInt(ssuffix, 10);

    //make sure we get the same thing back when
    //converting back to string, otherwise don't 
    //decompose it.
    if (!suffix || suffix + "" !== ssuffix) {
      base = name;
      suffix = 0;
    }
  } else {
    base = name;
    suffix = 0;
  }


  var idx = this.s2i[base];
  if (idx === undefined) {
    idx = this.strings.add(base);
    this.s2i[base] = idx;
  }

  this.names[index] = idx;
  this.nameSuffixes[index] = suffix;
};


function arrayToBuffer(a) {
  var b = new Int32Array(a.length);
  b.set(a);
  return b;
}

// note none of these arguments are used
InstanceTreeStorage.prototype.flatten = function (dbId, parentDbId, name, flags, childrenIds, isLeaf) {
  this.nodes = arrayToBuffer(this.nodes);
  this.children = arrayToBuffer(this.children);
  this.names = arrayToBuffer(this.names);
  this.nameSuffixes = arrayToBuffer(this.nameSuffixes);
  this.strings.flatten();
  this.s2i = null; //we don't need this temporary map once we've built the strings list
};



function InstanceTreeAccess(nodeArray, rootId, nodeBoxes) {
  this.nodes = nodeArray.nodes;
  this.children = nodeArray.children;
  this.dbIdToIndex = nodeArray.dbIdToIndex;
  this.names = nodeArray.names;
  this.nameSuffixes = nodeArray.nameSuffixes;
  this.strings = new FlatStringStorage(nodeArray.strings);
  this.rootId = rootId;
  this.numNodes = this.nodes.length / SIZEOF_NODE;
  this.visibleIds = null;

  // only used if bboxes are precomputed
  this.nodeBoxes = nodeBoxes;
}

InstanceTreeAccess.prototype.getNumNodes = function () {
  return this.numNodes;
};

InstanceTreeAccess.prototype.getIndex = function (dbId) {
  return this.dbIdToIndex[dbId];
};

InstanceTreeAccess.prototype.name = function (dbId, includeCount) {
  var idx = this.dbIdToIndex[dbId];
  var base = this.strings.get(this.names[idx]);
  var suffix = this.nameSuffixes[idx];
  var name;
  if (suffix) {
    //NOTE: update this logic if more separators are supported in processName above
    var lastChar = base.charAt(base.length - 1);
    if (lastChar === "[")
    name = base + suffix + "]";else

    name = base + suffix;
  } else {
    name = base;
  }

  if (includeCount) {
    if (!this.childCounts) {
      this.computeChildCounts();
    }
    if (this.childCounts[dbId] > 0) {
      name += " (" + this.childCounts[dbId] + ")";
    }
  }

  return name;
};

InstanceTreeAccess.prototype.getParentId = function (dbId) {
  var idx = this.dbIdToIndex[dbId];
  return this.nodes[idx * SIZEOF_NODE + OFFSET_PARENT];
};

InstanceTreeAccess.prototype.getNodeFlags = function (dbId) {
  var idx = this.dbIdToIndex[dbId];
  return this.nodes[idx * SIZEOF_NODE + OFFSET_FLAGS];
};

InstanceTreeAccess.prototype.setNodeFlags = function (dbId, flags) {
  var idx = this.dbIdToIndex[dbId];
  if (idx) {
    this.nodes[idx * SIZEOF_NODE + OFFSET_FLAGS] = flags;
  }
};

InstanceTreeAccess.prototype.getNumChildren = function (dbId) {

  var idx = this.dbIdToIndex[dbId];
  var numChildren = this.nodes[idx * SIZEOF_NODE + OFFSET_NUM_CHILD];

  //If numChildren is non-negative, then all children are nodes (not fragments)
  if (numChildren >= 0)
  return numChildren;

  //Node has mixed fragments and child nodes, so we have to loop and collect just the node children
  var firstChild = this.nodes[idx * SIZEOF_NODE + OFFSET_FIRST_CHILD];

  numChildren = Math.abs(numChildren);

  var numNodeChildren = 0;

  for (var i = 0; i < numChildren; i++) {
    var childIdx = this.children[firstChild + i];

    //did we reach the fragment ids sub-list?
    if (childIdx < 0)
    break;

    numNodeChildren++;
  }

  return numNodeChildren;
};

InstanceTreeAccess.prototype.getNumFragments = function (dbId) {
  var idx = this.dbIdToIndex[dbId];

  var numChildren = this.nodes[idx * SIZEOF_NODE + OFFSET_NUM_CHILD];

  //If numChildren is non-negative, there aren't any fragments belonging to this node
  if (numChildren >= 0)
  return 0;

  //Node has mixed fragments and child nodes, so we have to loop and collect just the node children
  var firstChild = this.nodes[idx * SIZEOF_NODE + OFFSET_FIRST_CHILD];

  numChildren = Math.abs(numChildren);

  var numFragChildren = 0;

  //Iterate backwards, because fragment children are at the back of the children list
  for (var i = numChildren - 1; i >= 0; i--) {
    var childIdx = this.children[firstChild + i];

    //did we reach the inner node children ids sub-list?
    if (childIdx >= 0)
    break;

    numFragChildren++;
  }

  return numFragChildren;
};

// NOTE: This can only be used if precomputed bboxes are available.
InstanceTreeAccess.prototype.getNodeBox = function (dbId, dst) {
  var idx = this.getIndex(dbId);
  var off = idx * 6;
  for (var i = 0; i < 6; i++) {
    dst[i] = this.nodeBoxes[off + i];}
};

//Returns an array containing the dbIds of all objects
//that are physically represented in the scene. Not all
//objects in the property database occur physically in each graphics viewable.
InstanceTreeAccess.prototype.getVisibleIds = function () {
  if (!this.visibleIds) {
    this.visibleIds = Object.keys(this.dbIdToIndex).map(function (k) {return parseInt(k);});
  }

  return this.visibleIds;
};


InstanceTreeAccess.prototype.enumNodeChildren = function (dbId, callback) {
  var idx = this.dbIdToIndex[dbId];
  var firstChild = this.nodes[idx * SIZEOF_NODE + OFFSET_FIRST_CHILD];
  var numChildren = this.nodes[idx * SIZEOF_NODE + OFFSET_NUM_CHILD];

  numChildren = Math.abs(numChildren);

  for (var i = 0; i < numChildren; i++) {
    var childIdx = this.children[firstChild + i];

    //did we reach the fragment ids sub-list?
    if (childIdx < 0)
    break;

    var childDbId = this.nodes[childIdx * SIZEOF_NODE + OFFSET_DBID];
    if (callback(childDbId, dbId, idx)) {
      return dbId;
    }
  }
};

InstanceTreeAccess.prototype.enumNodeFragments = function (dbId, callback) {
  var idx = this.dbIdToIndex[dbId];
  var firstChild = this.nodes[idx * SIZEOF_NODE + OFFSET_FIRST_CHILD];
  var numChildren = this.nodes[idx * SIZEOF_NODE + OFFSET_NUM_CHILD];

  //If numChildren is negative, it means there are fragments in the node
  if (numChildren < 0) {
    numChildren = -numChildren;
    for (var i = 0; i < numChildren; i++) {
      var childIdx = this.children[firstChild + i];

      //skip past children that are inner nodes (not fragments)
      if (childIdx > 0)
      continue;

      //Convert fragId from -1 based negative back to the actual fragId
      if (callback(-childIdx - 1, dbId, idx)) {
        return dbId;
      }
    }
  }
};

InstanceTreeAccess.prototype.computeBoxes = function (fragBoxes) {

  if (!this.nodeBoxes) {
    this.nodeBoxes = new Float32Array(6 * this.numNodes);
  }

  var nodeAccess = this;
  var idx = nodeAccess.getIndex(nodeAccess.rootId);
  var nodeBoxes = nodeAccess.nodeBoxes;

  function traverseChildren(child_dbId, parentDbID, parentIdx) {

    var childIdx = nodeAccess.getIndex(child_dbId);

    //Recurse, then add all child boxes to make this node's box
    computeTreeBBoxesRec(child_dbId, childIdx);

    var box_offset = parentIdx * 6;
    var child_box_offset = childIdx * 6;
    for (var k = 0; k < 3; k++) {
      if (nodeBoxes[box_offset + k] > nodeBoxes[child_box_offset + k])
      nodeBoxes[box_offset + k] = nodeBoxes[child_box_offset + k];
      if (nodeBoxes[box_offset + k + 3] < nodeBoxes[child_box_offset + k + 3])
      nodeBoxes[box_offset + k + 3] = nodeBoxes[child_box_offset + k + 3];
    }
  }

  function traverseFragments(fragId, dbId, idx) {
    var frag_box_offset = fragId * 6;
    var box_offset = idx * 6;

    for (var k = 0; k < 3; k++) {
      if (nodeBoxes[box_offset + k] > fragBoxes[frag_box_offset + k])
      nodeBoxes[box_offset + k] = fragBoxes[frag_box_offset + k];
      if (nodeBoxes[box_offset + k + 3] < fragBoxes[frag_box_offset + k + 3])
      nodeBoxes[box_offset + k + 3] = fragBoxes[frag_box_offset + k + 3];
    }
  }

  function computeTreeBBoxesRec(dbId, idx) {

    var box_offset = idx * 6;
    nodeBoxes[box_offset] = nodeBoxes[box_offset + 1] = nodeBoxes[box_offset + 2] = Infinity;
    nodeBoxes[box_offset + 3] = nodeBoxes[box_offset + 4] = nodeBoxes[box_offset + 5] = -Infinity;

    if (nodeAccess.getNumChildren(dbId)) {
      nodeAccess.enumNodeChildren(dbId, traverseChildren, true);
    }

    //Leaf node -- don't think it's possible for a node to have
    //both children and leaf fragments, but we do handle that here.
    if (nodeAccess.getNumFragments(dbId)) {
      nodeAccess.enumNodeFragments(dbId, traverseFragments);
    }

  }

  computeTreeBBoxesRec(nodeAccess.rootId, idx);
};

InstanceTreeAccess.prototype.computeChildCounts = function () {
  if (!this.childCounts) {
    this.childCounts = new Uint32Array(this.numNodes);
  }

  var nodeAccess = this;
  var idx = nodeAccess.getIndex(nodeAccess.rootId);
  var childCounts = nodeAccess.childCounts;

  function traverseChildren(child_dbId, parentDbID, parentIdx) {

    var childIdx = nodeAccess.getIndex(child_dbId);

    //Recurse, then add all child boxes to make this node's box
    var count = computeChildCountsRec(child_dbId, childIdx);

    childCounts[parentDbID] += count;
  }


  function computeChildCountsRec(dbId, idx) {

    var flags = nodeAccess.getNodeFlags(dbId);
    var myCount = 0;

    if (flags === 0x4 /*NODE_TYPE_COMPOSITE*/) {
        //If it's a composite node, treat it as a single
        //opaque object whose contents don't matter to the user
        //for counting purposes.
        myCount = 1;
      } else {

      if (nodeAccess.getNumChildren(dbId)) {
        nodeAccess.enumNodeChildren(dbId, traverseChildren, true);
      }

      //Leaf node
      if (nodeAccess.getNumFragments(dbId)) {
        myCount = 1;
      }
    }

    return myCount + childCounts[dbId];
  }

  computeChildCountsRec(nodeAccess.rootId, idx);
};

/***/ }),

/***/ "./src/wgs/scene/LmvBox3.js":
/*!**********************************!*\
  !*** ./src/wgs/scene/LmvBox3.js ***!
  \**********************************/
/*! exports provided: LmvBox3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LmvBox3", function() { return LmvBox3; });
/* harmony import */ var _LmvVector3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LmvVector3 */ "./src/wgs/scene/LmvVector3.js");
/**
 * @author bhouston / http://exocortex.com
 * @author WestLangley / http://github.com/WestLangley
 */
/* Pruned version of THREE.Box3, for use in the LMV web worker */



var LmvBox3 = function LmvBox3(min, max) {

  this.min = min !== undefined ? min : new _LmvVector3__WEBPACK_IMPORTED_MODULE_0__["LmvVector3"](Infinity, Infinity, Infinity);
  this.max = max !== undefined ? max : new _LmvVector3__WEBPACK_IMPORTED_MODULE_0__["LmvVector3"](-Infinity, -Infinity, -Infinity);

};

LmvBox3.prototype = {

  constructor: LmvBox3,

  set: function set(min, max) {

    this.min.copy(min);
    this.max.copy(max);

    return this;

  },

  setFromPoints: function setFromPoints(points) {

    this.makeEmpty();

    for (var i = 0, il = points.length; i < il; i++) {

      this.expandByPoint(points[i]);

    }

    return this;

  },

  setFromArray: function setFromArray(array, offset) {

    this.min.x = array[offset];
    this.min.y = array[offset + 1];
    this.min.z = array[offset + 2];

    this.max.x = array[offset + 3];
    this.max.y = array[offset + 4];
    this.max.z = array[offset + 5];

    return this;

  },

  copyToArray: function copyToArray(array, offset) {

    array[offset] = this.min.x;
    array[offset + 1] = this.min.y;
    array[offset + 2] = this.min.z;

    array[offset + 3] = this.max.x;
    array[offset + 4] = this.max.y;
    array[offset + 5] = this.max.z;

  },

  setFromCenterAndSize: function () {

    var v1 = new _LmvVector3__WEBPACK_IMPORTED_MODULE_0__["LmvVector3"]();

    return function (center, size) {

      var halfSize = v1.copy(size).multiplyScalar(0.5);

      this.min.copy(center).sub(halfSize);
      this.max.copy(center).add(halfSize);

      return this;

    };

  }(),

  clone: function clone() {

    return new this.constructor().copy(this);

  },

  copy: function copy(box) {

    this.min.copy(box.min);
    this.max.copy(box.max);

    return this;

  },

  makeEmpty: function makeEmpty() {

    this.min.x = this.min.y = this.min.z = Infinity;
    this.max.x = this.max.y = this.max.z = -Infinity;

    return this;

  },

  empty: function empty() {

    // this is a more robust check for empty than ( volume <= 0 ) because volume can get positive with two negative axes

    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;

  },

  center: function center(optionalTarget) {

    var result = optionalTarget || new _LmvVector3__WEBPACK_IMPORTED_MODULE_0__["LmvVector3"]();
    return result.addVectors(this.min, this.max).multiplyScalar(0.5);

  },

  size: function size(optionalTarget) {

    var result = optionalTarget || new _LmvVector3__WEBPACK_IMPORTED_MODULE_0__["LmvVector3"]();
    return result.subVectors(this.max, this.min);

  },

  expandByPoint: function expandByPoint(point) {

    this.min.min(point);
    this.max.max(point);

    return this;

  },

  expandByVector: function expandByVector(vector) {

    this.min.sub(vector);
    this.max.add(vector);

    return this;

  },

  expandByScalar: function expandByScalar(scalar) {

    this.min.addScalar(-scalar);
    this.max.addScalar(scalar);

    return this;

  },

  containsPoint: function containsPoint(point) {

    if (point.x < this.min.x || point.x > this.max.x ||
    point.y < this.min.y || point.y > this.max.y ||
    point.z < this.min.z || point.z > this.max.z) {

      return false;

    }

    return true;

  },

  containsBox: function containsBox(box) {

    if (this.min.x <= box.min.x && box.max.x <= this.max.x &&
    this.min.y <= box.min.y && box.max.y <= this.max.y &&
    this.min.z <= box.min.z && box.max.z <= this.max.z) {

      return true;

    }

    return false;

  },

  getParameter: function getParameter(point, optionalTarget) {

    // This can potentially have a divide by zero if the box
    // has a size dimension of 0.

    var result = optionalTarget || new _LmvVector3__WEBPACK_IMPORTED_MODULE_0__["LmvVector3"]();

    return result.set(
    (point.x - this.min.x) / (this.max.x - this.min.x),
    (point.y - this.min.y) / (this.max.y - this.min.y),
    (point.z - this.min.z) / (this.max.z - this.min.z));


  },

  isIntersectionBox: function isIntersectionBox(box) {

    // using 6 splitting planes to rule out intersections.

    if (box.max.x < this.min.x || box.min.x > this.max.x ||
    box.max.y < this.min.y || box.min.y > this.max.y ||
    box.max.z < this.min.z || box.min.z > this.max.z) {

      return false;

    }

    return true;

  },

  clampPoint: function clampPoint(point, optionalTarget) {

    var result = optionalTarget || new _LmvVector3__WEBPACK_IMPORTED_MODULE_0__["LmvVector3"]();
    return result.copy(point).clamp(this.min, this.max);

  },

  distanceToPoint: function () {

    var v1 = new _LmvVector3__WEBPACK_IMPORTED_MODULE_0__["LmvVector3"]();

    return function (point) {

      var clampedPoint = v1.copy(point).clamp(this.min, this.max);
      return clampedPoint.sub(point).length();

    };

  }(),

  intersect: function intersect(box) {

    this.min.max(box.min);
    this.max.min(box.max);

    return this;

  },

  union: function union(box) {

    this.min.min(box.min);
    this.max.max(box.max);

    return this;

  },

  applyMatrix4: function () {

    var points = [
    new _LmvVector3__WEBPACK_IMPORTED_MODULE_0__["LmvVector3"](),
    new _LmvVector3__WEBPACK_IMPORTED_MODULE_0__["LmvVector3"](),
    new _LmvVector3__WEBPACK_IMPORTED_MODULE_0__["LmvVector3"](),
    new _LmvVector3__WEBPACK_IMPORTED_MODULE_0__["LmvVector3"](),
    new _LmvVector3__WEBPACK_IMPORTED_MODULE_0__["LmvVector3"](),
    new _LmvVector3__WEBPACK_IMPORTED_MODULE_0__["LmvVector3"](),
    new _LmvVector3__WEBPACK_IMPORTED_MODULE_0__["LmvVector3"](),
    new _LmvVector3__WEBPACK_IMPORTED_MODULE_0__["LmvVector3"]()];


    return function (matrix) {

      // NOTE: I am using a binary pattern to specify all 2^3 combinations below
      points[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(matrix); // 000
      points[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(matrix); // 001
      points[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(matrix); // 010
      points[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(matrix); // 011
      points[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(matrix); // 100
      points[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(matrix); // 101
      points[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(matrix); // 110
      points[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(matrix); // 111

      this.makeEmpty();
      this.setFromPoints(points);

      return this;

    };

  }(),

  translate: function translate(offset) {

    this.min.add(offset);
    this.max.add(offset);

    return this;

  },

  equals: function equals(box) {

    return box.min.equals(this.min) && box.max.equals(this.max);

  } };

/***/ }),

/***/ "./src/wgs/scene/LmvMatrix4.js":
/*!*************************************!*\
  !*** ./src/wgs/scene/LmvMatrix4.js ***!
  \*************************************/
/*! exports provided: LmvMatrix4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LmvMatrix4", function() { return LmvMatrix4; });
/**
 * @author mrdoob / http://mrdoob.com/
 * @author supereggbert / http://www.paulbrunt.co.uk/
 * @author philogb / http://blog.thejit.org/
 * @author jordi_ros / http://plattsoft.com
 * @author D1plo1d / http://github.com/D1plo1d
 * @author alteredq / http://alteredqualia.com/
 * @author mikael emtinger / http://gomo.se/
 * @author timknip / http://www.floorplanner.com/
 * @author bhouston / http://exocortex.com
 * @author WestLangley / http://github.com/WestLangley
 */
/* Pruned version of THREE.Matrix4, for use in the LMV web worker */

var LmvMatrix4 = function LmvMatrix4(useDoublePrecision) {

  if (useDoublePrecision) {

    this.elements = new Float64Array([

    1, 0, 0, 0,
    0, 1, 0, 0,
    0, 0, 1, 0,
    0, 0, 0, 1]);



  } else {

    this.elements = new Float32Array([

    1, 0, 0, 0,
    0, 1, 0, 0,
    0, 0, 1, 0,
    0, 0, 0, 1]);



  }

};

LmvMatrix4.prototype = {

  constructor: LmvMatrix4,

  set: function set(n11, n12, n13, n14, n21, n22, n23, n24, n31, n32, n33, n34, n41, n42, n43, n44) {

    var te = this.elements;

    te[0] = n11;te[4] = n12;te[8] = n13;te[12] = n14;
    te[1] = n21;te[5] = n22;te[9] = n23;te[13] = n24;
    te[2] = n31;te[6] = n32;te[10] = n33;te[14] = n34;
    te[3] = n41;te[7] = n42;te[11] = n43;te[15] = n44;

    return this;

  },

  identity: function identity() {

    this.set(

    1, 0, 0, 0,
    0, 1, 0, 0,
    0, 0, 1, 0,
    0, 0, 0, 1);



    return this;

  },

  copy: function copy(m) {

    this.elements.set(m.elements);

    return this;

  },

  makeRotationFromQuaternion: function makeRotationFromQuaternion(q) {

    var te = this.elements;

    var x = q.x,y = q.y,z = q.z,w = q.w;
    var x2 = x + x,y2 = y + y,z2 = z + z;
    var xx = x * x2,xy = x * y2,xz = x * z2;
    var yy = y * y2,yz = y * z2,zz = z * z2;
    var wx = w * x2,wy = w * y2,wz = w * z2;

    te[0] = 1 - (yy + zz);
    te[4] = xy - wz;
    te[8] = xz + wy;

    te[1] = xy + wz;
    te[5] = 1 - (xx + zz);
    te[9] = yz - wx;

    te[2] = xz - wy;
    te[6] = yz + wx;
    te[10] = 1 - (xx + yy);

    // last column
    te[3] = 0;
    te[7] = 0;
    te[11] = 0;

    // bottom row
    te[12] = 0;
    te[13] = 0;
    te[14] = 0;
    te[15] = 1;

    return this;

  },

  multiply: function multiply(n) {

    return this.multiplyMatrices(this, n);

  },

  multiplyMatrices: function multiplyMatrices(a, b) {

    var ae = a.elements;
    var be = b.elements;
    var te = this.elements;

    var a11 = ae[0],a12 = ae[4],a13 = ae[8],a14 = ae[12];
    var a21 = ae[1],a22 = ae[5],a23 = ae[9],a24 = ae[13];
    var a31 = ae[2],a32 = ae[6],a33 = ae[10],a34 = ae[14];
    var a41 = ae[3],a42 = ae[7],a43 = ae[11],a44 = ae[15];

    var b11 = be[0],b12 = be[4],b13 = be[8],b14 = be[12];
    var b21 = be[1],b22 = be[5],b23 = be[9],b24 = be[13];
    var b31 = be[2],b32 = be[6],b33 = be[10],b34 = be[14];
    var b41 = be[3],b42 = be[7],b43 = be[11],b44 = be[15];

    te[0] = a11 * b11 + a12 * b21 + a13 * b31 + a14 * b41;
    te[4] = a11 * b12 + a12 * b22 + a13 * b32 + a14 * b42;
    te[8] = a11 * b13 + a12 * b23 + a13 * b33 + a14 * b43;
    te[12] = a11 * b14 + a12 * b24 + a13 * b34 + a14 * b44;

    te[1] = a21 * b11 + a22 * b21 + a23 * b31 + a24 * b41;
    te[5] = a21 * b12 + a22 * b22 + a23 * b32 + a24 * b42;
    te[9] = a21 * b13 + a22 * b23 + a23 * b33 + a24 * b43;
    te[13] = a21 * b14 + a22 * b24 + a23 * b34 + a24 * b44;

    te[2] = a31 * b11 + a32 * b21 + a33 * b31 + a34 * b41;
    te[6] = a31 * b12 + a32 * b22 + a33 * b32 + a34 * b42;
    te[10] = a31 * b13 + a32 * b23 + a33 * b33 + a34 * b43;
    te[14] = a31 * b14 + a32 * b24 + a33 * b34 + a34 * b44;

    te[3] = a41 * b11 + a42 * b21 + a43 * b31 + a44 * b41;
    te[7] = a41 * b12 + a42 * b22 + a43 * b32 + a44 * b42;
    te[11] = a41 * b13 + a42 * b23 + a43 * b33 + a44 * b43;
    te[15] = a41 * b14 + a42 * b24 + a43 * b34 + a44 * b44;

    return this;

  },

  multiplyToArray: function multiplyToArray(a, b, r) {

    var te = this.elements;

    this.multiplyMatrices(a, b);

    r[0] = te[0];r[1] = te[1];r[2] = te[2];r[3] = te[3];
    r[4] = te[4];r[5] = te[5];r[6] = te[6];r[7] = te[7];
    r[8] = te[8];r[9] = te[9];r[10] = te[10];r[11] = te[11];
    r[12] = te[12];r[13] = te[13];r[14] = te[14];r[15] = te[15];

    return this;

  },

  multiplyScalar: function multiplyScalar(s) {

    var te = this.elements;

    te[0] *= s;te[4] *= s;te[8] *= s;te[12] *= s;
    te[1] *= s;te[5] *= s;te[9] *= s;te[13] *= s;
    te[2] *= s;te[6] *= s;te[10] *= s;te[14] *= s;
    te[3] *= s;te[7] *= s;te[11] *= s;te[15] *= s;

    return this;

  },

  determinant: function determinant() {

    var te = this.elements;

    var n11 = te[0],n12 = te[4],n13 = te[8],n14 = te[12];
    var n21 = te[1],n22 = te[5],n23 = te[9],n24 = te[13];
    var n31 = te[2],n32 = te[6],n33 = te[10],n34 = te[14];
    var n41 = te[3],n42 = te[7],n43 = te[11],n44 = te[15];

    //TODO: make this more efficient
    //( based on http://www.euclideanspace.com/maths/algebra/matrix/functions/inverse/fourD/index.htm )

    return (
      n41 * (
      +n14 * n23 * n32 -
      n13 * n24 * n32 -
      n14 * n22 * n33 +
      n12 * n24 * n33 +
      n13 * n22 * n34 -
      n12 * n23 * n34) +

      n42 * (
      +n11 * n23 * n34 -
      n11 * n24 * n33 +
      n14 * n21 * n33 -
      n13 * n21 * n34 +
      n13 * n24 * n31 -
      n14 * n23 * n31) +

      n43 * (
      +n11 * n24 * n32 -
      n11 * n22 * n34 -
      n14 * n21 * n32 +
      n12 * n21 * n34 +
      n14 * n22 * n31 -
      n12 * n24 * n31) +

      n44 * (
      -n13 * n22 * n31 -
      n11 * n23 * n32 +
      n11 * n22 * n33 +
      n13 * n21 * n32 -
      n12 * n21 * n33 +
      n12 * n23 * n31));




  },

  transpose: function transpose() {

    var te = this.elements;
    var tmp;

    tmp = te[1];te[1] = te[4];te[4] = tmp;
    tmp = te[2];te[2] = te[8];te[8] = tmp;
    tmp = te[6];te[6] = te[9];te[9] = tmp;

    tmp = te[3];te[3] = te[12];te[12] = tmp;
    tmp = te[7];te[7] = te[13];te[13] = tmp;
    tmp = te[11];te[11] = te[14];te[14] = tmp;

    return this;

  },

  flattenToArrayOffset: function flattenToArrayOffset(array, offset) {

    var te = this.elements;

    array[offset] = te[0];
    array[offset + 1] = te[1];
    array[offset + 2] = te[2];
    array[offset + 3] = te[3];

    array[offset + 4] = te[4];
    array[offset + 5] = te[5];
    array[offset + 6] = te[6];
    array[offset + 7] = te[7];

    array[offset + 8] = te[8];
    array[offset + 9] = te[9];
    array[offset + 10] = te[10];
    array[offset + 11] = te[11];

    array[offset + 12] = te[12];
    array[offset + 13] = te[13];
    array[offset + 14] = te[14];
    array[offset + 15] = te[15];

    return array;

  },

  setPosition: function setPosition(v) {

    var te = this.elements;

    te[12] = v.x;
    te[13] = v.y;
    te[14] = v.z;

    return this;

  },

  getInverse: function getInverse(m, throwOnInvertible) {

    // based on http://www.euclideanspace.com/maths/algebra/matrix/functions/inverse/fourD/index.htm
    var te = this.elements;
    var me = m.elements;

    var n11 = me[0],n12 = me[4],n13 = me[8],n14 = me[12];
    var n21 = me[1],n22 = me[5],n23 = me[9],n24 = me[13];
    var n31 = me[2],n32 = me[6],n33 = me[10],n34 = me[14];
    var n41 = me[3],n42 = me[7],n43 = me[11],n44 = me[15];

    te[0] = n23 * n34 * n42 - n24 * n33 * n42 + n24 * n32 * n43 - n22 * n34 * n43 - n23 * n32 * n44 + n22 * n33 * n44;
    te[4] = n14 * n33 * n42 - n13 * n34 * n42 - n14 * n32 * n43 + n12 * n34 * n43 + n13 * n32 * n44 - n12 * n33 * n44;
    te[8] = n13 * n24 * n42 - n14 * n23 * n42 + n14 * n22 * n43 - n12 * n24 * n43 - n13 * n22 * n44 + n12 * n23 * n44;
    te[12] = n14 * n23 * n32 - n13 * n24 * n32 - n14 * n22 * n33 + n12 * n24 * n33 + n13 * n22 * n34 - n12 * n23 * n34;
    te[1] = n24 * n33 * n41 - n23 * n34 * n41 - n24 * n31 * n43 + n21 * n34 * n43 + n23 * n31 * n44 - n21 * n33 * n44;
    te[5] = n13 * n34 * n41 - n14 * n33 * n41 + n14 * n31 * n43 - n11 * n34 * n43 - n13 * n31 * n44 + n11 * n33 * n44;
    te[9] = n14 * n23 * n41 - n13 * n24 * n41 - n14 * n21 * n43 + n11 * n24 * n43 + n13 * n21 * n44 - n11 * n23 * n44;
    te[13] = n13 * n24 * n31 - n14 * n23 * n31 + n14 * n21 * n33 - n11 * n24 * n33 - n13 * n21 * n34 + n11 * n23 * n34;
    te[2] = n22 * n34 * n41 - n24 * n32 * n41 + n24 * n31 * n42 - n21 * n34 * n42 - n22 * n31 * n44 + n21 * n32 * n44;
    te[6] = n14 * n32 * n41 - n12 * n34 * n41 - n14 * n31 * n42 + n11 * n34 * n42 + n12 * n31 * n44 - n11 * n32 * n44;
    te[10] = n12 * n24 * n41 - n14 * n22 * n41 + n14 * n21 * n42 - n11 * n24 * n42 - n12 * n21 * n44 + n11 * n22 * n44;
    te[14] = n14 * n22 * n31 - n12 * n24 * n31 - n14 * n21 * n32 + n11 * n24 * n32 + n12 * n21 * n34 - n11 * n22 * n34;
    te[3] = n23 * n32 * n41 - n22 * n33 * n41 - n23 * n31 * n42 + n21 * n33 * n42 + n22 * n31 * n43 - n21 * n32 * n43;
    te[7] = n12 * n33 * n41 - n13 * n32 * n41 + n13 * n31 * n42 - n11 * n33 * n42 - n12 * n31 * n43 + n11 * n32 * n43;
    te[11] = n13 * n22 * n41 - n12 * n23 * n41 - n13 * n21 * n42 + n11 * n23 * n42 + n12 * n21 * n43 - n11 * n22 * n43;
    te[15] = n12 * n23 * n31 - n13 * n22 * n31 + n13 * n21 * n32 - n11 * n23 * n32 - n12 * n21 * n33 + n11 * n22 * n33;

    var det = n11 * te[0] + n21 * te[4] + n31 * te[8] + n41 * te[12];

    if (det == 0) {

      var msg = "Matrix4.getInverse(): can't invert matrix, determinant is 0";

      if (throwOnInvertible || false) {

        throw new Error(msg);

      } else {

        console.warn(msg);

      }

      this.identity();

      return this;
    }

    this.multiplyScalar(1 / det);

    return this;

  },

  scale: function scale(v) {

    var te = this.elements;
    var x = v.x,y = v.y,z = v.z;

    te[0] *= x;te[4] *= y;te[8] *= z;
    te[1] *= x;te[5] *= y;te[9] *= z;
    te[2] *= x;te[6] *= y;te[10] *= z;
    te[3] *= x;te[7] *= y;te[11] *= z;

    return this;

  },

  makeTranslation: function makeTranslation(x, y, z) {

    this.set(

    1, 0, 0, x,
    0, 1, 0, y,
    0, 0, 1, z,
    0, 0, 0, 1);



    return this;

  },

  makeRotationX: function makeRotationX(theta) {

    var c = Math.cos(theta),s = Math.sin(theta);

    this.set(

    1, 0, 0, 0,
    0, c, -s, 0,
    0, s, c, 0,
    0, 0, 0, 1);



    return this;

  },

  makeRotationY: function makeRotationY(theta) {

    var c = Math.cos(theta),s = Math.sin(theta);

    this.set(

    c, 0, s, 0,
    0, 1, 0, 0,
    -s, 0, c, 0,
    0, 0, 0, 1);



    return this;

  },

  makeRotationZ: function makeRotationZ(theta) {

    var c = Math.cos(theta),s = Math.sin(theta);

    this.set(

    c, -s, 0, 0,
    s, c, 0, 0,
    0, 0, 1, 0,
    0, 0, 0, 1);



    return this;

  },

  makeRotationAxis: function makeRotationAxis(axis, angle) {

    // Based on http://www.gamedev.net/reference/articles/article1199.asp

    var c = Math.cos(angle);
    var s = Math.sin(angle);
    var t = 1 - c;
    var x = axis.x,y = axis.y,z = axis.z;
    var tx = t * x,ty = t * y;

    this.set(

    tx * x + c, tx * y - s * z, tx * z + s * y, 0,
    tx * y + s * z, ty * y + c, ty * z - s * x, 0,
    tx * z - s * y, ty * z + s * x, t * z * z + c, 0,
    0, 0, 0, 1);



    return this;

  },

  makeScale: function makeScale(x, y, z) {

    this.set(

    x, 0, 0, 0,
    0, y, 0, 0,
    0, 0, z, 0,
    0, 0, 0, 1);



    return this;

  },

  compose: function compose(position, quaternion, scale) {

    this.makeRotationFromQuaternion(quaternion);
    this.scale(scale);
    this.setPosition(position);

    return this;

  },

  //Added for LMV
  transformPoint: function transformPoint(pt) {

    // input: THREE.Matrix4 affine matrix

    var x = pt.x,y = pt.y,z = pt.z;

    var e = this.elements;

    pt.x = e[0] * x + e[4] * y + e[8] * z + e[12];
    pt.y = e[1] * x + e[5] * y + e[9] * z + e[13];
    pt.z = e[2] * x + e[6] * y + e[10] * z + e[14];

    return pt;
  },

  //Added for LMV
  transformDirection: function transformDirection(v) {

    // input: THREE.Matrix4 affine matrix
    // vector interpreted as a direction

    var x = v.x,y = v.y,z = v.z;

    var e = this.elements;

    v.x = e[0] * x + e[4] * y + e[8] * z;
    v.y = e[1] * x + e[5] * y + e[9] * z;
    v.z = e[2] * x + e[6] * y + e[10] * z;

    var len = Math.sqrt(v.x * v.x + v.y * v.y + v.z * v.z);
    if (len > 0) {
      var ilen = 1.0 / len;
      v.x *= ilen;
      v.y *= ilen;
      v.z *= ilen;
    }

    return v;
  },


  fromArray: function fromArray(array) {

    this.elements.set(array);

    return this;

  },

  toArray: function toArray() {

    var te = this.elements;

    return [
    te[0], te[1], te[2], te[3],
    te[4], te[5], te[6], te[7],
    te[8], te[9], te[10], te[11],
    te[12], te[13], te[14], te[15]];


  },

  clone: function clone() {

    return new LmvMatrix4(this.elements instanceof Float64Array).fromArray(this.elements);

  } };

/***/ }),

/***/ "./src/wgs/scene/LmvVector3.js":
/*!*************************************!*\
  !*** ./src/wgs/scene/LmvVector3.js ***!
  \*************************************/
/*! exports provided: LmvVector3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LmvVector3", function() { return LmvVector3; });
/**
 * @author mrdoob / http://mrdoob.com/
 * @author *kile / http://kile.stravaganza.org/
 * @author philogb / http://blog.thejit.org/
 * @author mikael emtinger / http://gomo.se/
 * @author egraether / http://egraether.com/
 * @author WestLangley / http://github.com/WestLangley
 */
/* Pruned version of THREE.Vector3, for use in the LMV web worker */

var LmvVector3 = function LmvVector3(x, y, z) {

  this.x = x || 0;
  this.y = y || 0;
  this.z = z || 0;

};

LmvVector3.prototype = {

  constructor: LmvVector3,

  set: function set(x, y, z) {

    this.x = x;
    this.y = y;
    this.z = z;

    return this;

  },

  setX: function setX(x) {

    this.x = x;

    return this;

  },

  setY: function setY(y) {

    this.y = y;

    return this;

  },

  setZ: function setZ(z) {

    this.z = z;

    return this;

  },

  setComponent: function setComponent(index, value) {

    switch (index) {

      case 0:this.x = value;break;
      case 1:this.y = value;break;
      case 2:this.z = value;break;
      default:throw new Error('index is out of range: ' + index);}



  },

  getComponent: function getComponent(index) {

    switch (index) {

      case 0:return this.x;
      case 1:return this.y;
      case 2:return this.z;
      default:throw new Error('index is out of range: ' + index);}



  },

  clone: function clone() {

    return new this.constructor(this.x, this.y, this.z);

  },

  copy: function copy(v) {

    this.x = v.x;
    this.y = v.y;
    this.z = v.z;

    return this;

  },

  add: function add(v, w) {

    if (w !== undefined) {

      console.warn('THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead.');
      return this.addVectors(v, w);

    }

    this.x += v.x;
    this.y += v.y;
    this.z += v.z;

    return this;

  },

  addScalar: function addScalar(s) {

    this.x += s;
    this.y += s;
    this.z += s;

    return this;

  },

  addVectors: function addVectors(a, b) {

    this.x = a.x + b.x;
    this.y = a.y + b.y;
    this.z = a.z + b.z;

    return this;

  },

  addScaledVector: function addScaledVector(v, s) {

    this.x += v.x * s;
    this.y += v.y * s;
    this.z += v.z * s;

    return this;

  },

  sub: function sub(v, w) {

    if (w !== undefined) {

      console.warn('THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead.');
      return this.subVectors(v, w);

    }

    this.x -= v.x;
    this.y -= v.y;
    this.z -= v.z;

    return this;

  },

  subScalar: function subScalar(s) {

    this.x -= s;
    this.y -= s;
    this.z -= s;

    return this;

  },

  subVectors: function subVectors(a, b) {

    this.x = a.x - b.x;
    this.y = a.y - b.y;
    this.z = a.z - b.z;

    return this;

  },

  multiply: function multiply(v, w) {

    if (w !== undefined) {

      console.warn('THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead.');
      return this.multiplyVectors(v, w);

    }

    this.x *= v.x;
    this.y *= v.y;
    this.z *= v.z;

    return this;

  },

  multiplyScalar: function multiplyScalar(scalar) {

    this.x *= scalar;
    this.y *= scalar;
    this.z *= scalar;

    return this;

  },

  multiplyVectors: function multiplyVectors(a, b) {

    this.x = a.x * b.x;
    this.y = a.y * b.y;
    this.z = a.z * b.z;

    return this;

  },

  applyMatrix3: function applyMatrix3(m) {

    var x = this.x;
    var y = this.y;
    var z = this.z;

    var e = m.elements;

    this.x = e[0] * x + e[3] * y + e[6] * z;
    this.y = e[1] * x + e[4] * y + e[7] * z;
    this.z = e[2] * x + e[5] * y + e[8] * z;

    return this;

  },

  applyMatrix4: function applyMatrix4(m) {

    // input: THREE.Matrix4 affine matrix

    var x = this.x,y = this.y,z = this.z;

    var e = m.elements;

    this.x = e[0] * x + e[4] * y + e[8] * z + e[12];
    this.y = e[1] * x + e[5] * y + e[9] * z + e[13];
    this.z = e[2] * x + e[6] * y + e[10] * z + e[14];

    return this;

  },

  applyProjection: function applyProjection(m) {

    // input: THREE.Matrix4 projection matrix

    var x = this.x,y = this.y,z = this.z;

    var e = m.elements;
    var d = 1 / (e[3] * x + e[7] * y + e[11] * z + e[15]); // perspective divide

    this.x = (e[0] * x + e[4] * y + e[8] * z + e[12]) * d;
    this.y = (e[1] * x + e[5] * y + e[9] * z + e[13]) * d;
    this.z = (e[2] * x + e[6] * y + e[10] * z + e[14]) * d;

    return this;

  },

  applyQuaternion: function applyQuaternion(q) {

    var x = this.x;
    var y = this.y;
    var z = this.z;

    var qx = q.x;
    var qy = q.y;
    var qz = q.z;
    var qw = q.w;

    // calculate quat * vector

    var ix = qw * x + qy * z - qz * y;
    var iy = qw * y + qz * x - qx * z;
    var iz = qw * z + qx * y - qy * x;
    var iw = -qx * x - qy * y - qz * z;

    // calculate result * inverse quat

    this.x = ix * qw + iw * -qx + iy * -qz - iz * -qy;
    this.y = iy * qw + iw * -qy + iz * -qx - ix * -qz;
    this.z = iz * qw + iw * -qz + ix * -qy - iy * -qx;

    return this;

  },

  transformDirection: function transformDirection(m) {

    // input: THREE.Matrix4 affine matrix
    // vector interpreted as a direction

    var x = this.x,y = this.y,z = this.z;

    var e = m.elements;

    this.x = e[0] * x + e[4] * y + e[8] * z;
    this.y = e[1] * x + e[5] * y + e[9] * z;
    this.z = e[2] * x + e[6] * y + e[10] * z;

    this.normalize();

    return this;

  },

  divide: function divide(v) {

    this.x /= v.x;
    this.y /= v.y;
    this.z /= v.z;

    return this;

  },

  divideScalar: function divideScalar(scalar) {

    if (scalar !== 0) {

      var invScalar = 1 / scalar;

      this.x *= invScalar;
      this.y *= invScalar;
      this.z *= invScalar;

    } else {

      this.x = 0;
      this.y = 0;
      this.z = 0;

    }

    return this;

  },

  min: function min(v) {

    if (this.x > v.x) {

      this.x = v.x;

    }

    if (this.y > v.y) {

      this.y = v.y;

    }

    if (this.z > v.z) {

      this.z = v.z;

    }

    return this;

  },

  max: function max(v) {

    if (this.x < v.x) {

      this.x = v.x;

    }

    if (this.y < v.y) {

      this.y = v.y;

    }

    if (this.z < v.z) {

      this.z = v.z;

    }

    return this;

  },

  clamp: function clamp(min, max) {

    // This function assumes min < max, if this assumption isn't true it will not operate correctly

    if (this.x < min.x) {

      this.x = min.x;

    } else if (this.x > max.x) {

      this.x = max.x;

    }

    if (this.y < min.y) {

      this.y = min.y;

    } else if (this.y > max.y) {

      this.y = max.y;

    }

    if (this.z < min.z) {

      this.z = min.z;

    } else if (this.z > max.z) {

      this.z = max.z;

    }

    return this;

  },

  clampScalar: function () {

    var min, max;

    return function clampScalar(minVal, maxVal) {

      if (min === undefined) {

        min = new LmvVector3();
        max = new LmvVector3();

      }

      min.set(minVal, minVal, minVal);
      max.set(maxVal, maxVal, maxVal);

      return this.clamp(min, max);

    };

  }(),

  floor: function floor() {

    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    this.z = Math.floor(this.z);

    return this;

  },

  ceil: function ceil() {

    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    this.z = Math.ceil(this.z);

    return this;

  },

  round: function round() {

    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    this.z = Math.round(this.z);

    return this;

  },

  roundToZero: function roundToZero() {

    this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x);
    this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y);
    this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z);

    return this;

  },

  negate: function negate() {

    this.x = -this.x;
    this.y = -this.y;
    this.z = -this.z;

    return this;

  },

  dot: function dot(v) {

    return this.x * v.x + this.y * v.y + this.z * v.z;

  },

  lengthSq: function lengthSq() {

    return this.x * this.x + this.y * this.y + this.z * this.z;

  },

  length: function length() {

    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);

  },

  lengthManhattan: function lengthManhattan() {

    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);

  },

  normalize: function normalize() {

    return this.divideScalar(this.length());

  },

  setLength: function setLength(l) {

    var oldLength = this.length();

    if (oldLength !== 0 && l !== oldLength) {

      this.multiplyScalar(l / oldLength);

    }

    return this;

  },

  lerp: function lerp(v, alpha) {

    this.x += (v.x - this.x) * alpha;
    this.y += (v.y - this.y) * alpha;
    this.z += (v.z - this.z) * alpha;

    return this;

  },

  lerpVectors: function lerpVectors(v1, v2, alpha) {

    this.subVectors(v2, v1).multiplyScalar(alpha).add(v1);

    return this;

  },

  cross: function cross(v, w) {

    if (w !== undefined) {

      console.warn('THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead.');
      return this.crossVectors(v, w);

    }

    var x = this.x,y = this.y,z = this.z;

    this.x = y * v.z - z * v.y;
    this.y = z * v.x - x * v.z;
    this.z = x * v.y - y * v.x;

    return this;

  },

  crossVectors: function crossVectors(a, b) {

    var ax = a.x,ay = a.y,az = a.z;
    var bx = b.x,by = b.y,bz = b.z;

    this.x = ay * bz - az * by;
    this.y = az * bx - ax * bz;
    this.z = ax * by - ay * bx;

    return this;

  },

  projectOnVector: function () {

    var v1, dot;

    return function projectOnVector(vector) {

      if (v1 === undefined) v1 = new LmvVector3();

      v1.copy(vector).normalize();

      dot = this.dot(v1);

      return this.copy(v1).multiplyScalar(dot);

    };

  }(),

  projectOnPlane: function () {

    var v1;

    return function projectOnPlane(planeNormal) {

      if (v1 === undefined) v1 = new LmvVector3();

      v1.copy(this).projectOnVector(planeNormal);

      return this.sub(v1);

    };

  }(),

  reflect: function () {

    // reflect incident vector off plane orthogonal to normal
    // normal is assumed to have unit length

    var v1;

    return function reflect(normal) {

      if (v1 === undefined) v1 = new LmvVector3();

      return this.sub(v1.copy(normal).multiplyScalar(2 * this.dot(normal)));

    };

  }(),

  distanceTo: function distanceTo(v) {

    return Math.sqrt(this.distanceToSquared(v));

  },

  distanceToSquared: function distanceToSquared(v) {

    var dx = this.x - v.x;
    var dy = this.y - v.y;
    var dz = this.z - v.z;

    return dx * dx + dy * dy + dz * dz;

  },

  setEulerFromRotationMatrix: function setEulerFromRotationMatrix(m, order) {

    console.error('THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.');

  },

  setEulerFromQuaternion: function setEulerFromQuaternion(q, order) {

    console.error('THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.');

  },

  getPositionFromMatrix: function getPositionFromMatrix(m) {

    console.warn('THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition().');

    return this.setFromMatrixPosition(m);

  },

  getScaleFromMatrix: function getScaleFromMatrix(m) {

    console.warn('THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale().');

    return this.setFromMatrixScale(m);

  },

  getColumnFromMatrix: function getColumnFromMatrix(index, matrix) {

    console.warn('THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn().');

    return this.setFromMatrixColumn(index, matrix);

  },

  setFromMatrixPosition: function setFromMatrixPosition(m) {

    this.x = m.elements[12];
    this.y = m.elements[13];
    this.z = m.elements[14];

    return this;

  },

  setFromMatrixScale: function setFromMatrixScale(m) {

    var sx = this.set(m.elements[0], m.elements[1], m.elements[2]).length();
    var sy = this.set(m.elements[4], m.elements[5], m.elements[6]).length();
    var sz = this.set(m.elements[8], m.elements[9], m.elements[10]).length();

    this.x = sx;
    this.y = sy;
    this.z = sz;

    return this;

  },

  setFromMatrixColumn: function setFromMatrixColumn(index, matrix) {

    var offset = index * 4;

    var me = matrix.elements;

    this.x = me[offset];
    this.y = me[offset + 1];
    this.z = me[offset + 2];

    return this;

  },

  equals: function equals(v) {

    return v.x === this.x && v.y === this.y && v.z === this.z;

  },

  fromArray: function fromArray(array, offset) {

    if (offset === undefined) offset = 0;

    this.x = array[offset];
    this.y = array[offset + 1];
    this.z = array[offset + 2];

    return this;

  },

  toArray: function toArray(array, offset) {

    if (array === undefined) array = [];
    if (offset === undefined) offset = 0;

    array[offset] = this.x;
    array[offset + 1] = this.y;
    array[offset + 2] = this.z;

    return array;

  },

  fromAttribute: function fromAttribute(attribute, index, offset) {

    if (offset === undefined) offset = 0;

    index = index * attribute.itemSize + offset;

    this.x = attribute.array[index];
    this.y = attribute.array[index + 1];
    this.z = attribute.array[index + 2];

    return this;

  } };

/***/ }),

/***/ "./src/wgs/scene/MeshFlags.js":
/*!************************************!*\
  !*** ./src/wgs/scene/MeshFlags.js ***!
  \************************************/
/*! exports provided: MeshFlags */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeshFlags", function() { return MeshFlags; });
var MeshFlags = {
  // FragmentList flags
  //visibility/highlight bitmask flags

  //Byte 0

  //NOTE: This is confusing and it should be fixed, but when the MESH_VISIBLE bit is off, the mesh
  //will draw in ghosted mode. To completely skip drawing a mesh, set the HIDE flag.
  MESH_VISIBLE: 1,
  MESH_HIGHLIGHTED: 2,
  MESH_HIDE: 4,
  MESH_ISLINE: 8,
  MESH_MOVED: 0x10, // indicates if an animation matrix is set
  MESH_RENDERFLAG: 0x20,
  MESH_NOTLOADED: 0x40, // the mesh has not yet loaded or has been unloaded
  MESH_ISPOINT: 0x80, // indicates that the mesh is vertex-only

  //Byte 1
  //TODO: Two bits are enough to hold ISLINE, ISWIDELINE and ISPOINT, we don't need to waste three,
  //but there is no point to optimizing this as long as the required flags go over one byte.
  MESH_ISWIDELINE: 0x100, // indicates that the mesh is wide line
  MESH_TRAVERSED: 0x200, // only used for paging: drawn fragments are tagged and then skipped by forEach() until the flag is being reset (e.g. on scene/camera changes)
  MESH_DRAWN: 0x400 // only used for paging: drawn fragments are tagged. At the end of all render passes flag is copied to MESH_TRAVERSED.
  // The Memory Limited Extension uses the high order three bits of this byte
};

/***/ }),

/***/ "./src/wgs/scene/VertexEnumerator.js":
/*!*******************************************!*\
  !*** ./src/wgs/scene/VertexEnumerator.js ***!
  \*******************************************/
/*! exports provided: getVertexCount, enumMeshVertices, enumMeshIndices, enumMeshTriangles, enumMeshLines, enumMeshEdges, VertexEnumerator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVertexCount", function() { return getVertexCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enumMeshVertices", function() { return enumMeshVertices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enumMeshIndices", function() { return enumMeshIndices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enumMeshTriangles", function() { return enumMeshTriangles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enumMeshLines", function() { return enumMeshLines; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enumMeshEdges", function() { return enumMeshEdges; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VertexEnumerator", function() { return VertexEnumerator; });
/* harmony import */ var _LmvVector3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LmvVector3 */ "./src/wgs/scene/LmvVector3.js");


//Utility logic for listing vertex data from LmvBufferGeometry interleaved buffers



//These functions work for both workers side interleaved buffer structures
//and main thread side LmvBufferGeometry instances. The difference in naming
//if the index attribute on both sides is super annoying and should be cleaned up.


/** Works for BufferGeometry as well as THREE.BufferGeometry. Supports interleaved and non-interleaved buffers.
 *   @param {BufferGeometry|THREE.BufferGeometry} geom
 *   @returns {number}
 */
function getVertexCount(geom) {
  if (geom.vb) {
    // interleaved
    return geom.vb.length / geom.vbstride;
  }
  // no interleaved buffer. Return count from position attribute or 0
  return geom.attributes.positions ? geom.attributes.positions.count : 0;
}


var _p, _n, _uv;
var _normalsMatrix;

function enumMeshVertices(geometry, callback, matrix) {

  var attributes = geometry.attributes;

  if (!_p) {
    _p = new _LmvVector3__WEBPACK_IMPORTED_MODULE_0__["LmvVector3"]();
    _n = new _LmvVector3__WEBPACK_IMPORTED_MODULE_0__["LmvVector3"]();
    _uv = new _LmvVector3__WEBPACK_IMPORTED_MODULE_0__["LmvVector3"]();
  }

  if (matrix) {
    if (!_normalsMatrix)
    _normalsMatrix = new THREE.Matrix3();

    _normalsMatrix.getNormalMatrix(matrix);
  }

  var positions = geometry.vb || attributes.position.array;
  var normals = geometry.vb || attributes.normal && attributes.normal.array;
  var stride = geometry.vb ? geometry.vbstride : 3;
  // Get the offset to positions in the buffer. Be careful, 2D buffers
  // don't use the 'position' attribute for positions. Reject those.
  var poffset;
  if (geometry.vblayout) {
    if (!geometry.vblayout.position)
    return; // No positions, what to do??
    poffset = geometry.vblayout.position.offset;
  } else if (!attributes.position)
  return; // No positions, what to do??
  else
    poffset = attributes.position.itemOffset || 0;

  var noffset = 0;
  var nattr = geometry.vblayout ? geometry.vblayout.normal : attributes.normal || null;
  if (nattr) {
    noffset = nattr.offset || nattr.itemOffset || 0;
  } else {
    normals = null;
  }

  //TODO: UV channel

  if (nattr && (nattr.itemSize !== 3 || nattr.bytesPerItem !== 4)) {
    //console.log("Normals are packed, will be skipped from enumMeshTriangles. Use packNormals=false load option.");
    normals = null;
  }

  var vcount = geometry.vb ? geometry.vb.length / geometry.vbstride : positions.length;

  var pi = poffset;
  var ni = noffset;
  for (var i = 0; i < vcount; i++, pi += stride, ni += stride) {

    _p.set(positions[pi], positions[pi + 1], positions[pi + 2]);

    if (matrix)
    _p.applyMatrix4(matrix);

    if (normals) {
      _n.set(normals[ni], normals[ni + 1], normals[ni + 2]);

      if (matrix) {
        _n.applyMatrix3(_normalsMatrix);
      }
    }

    //TODO: UV channel

    callback(_p, normals ? _n : null, null /*, _uv*/, i);
  }
}

function enumMeshIndices(geometry, callback) {

  var indices = geometry.ib || geometry.indices || (attributes.index ? attributes.index.array : null);

  if (indices) {

    var offsets = geometry.offsets;

    if (!offsets || offsets.length === 0) {
      offsets = [{ start: 0, count: indices.length, index: 0 }];
    }

    for (var oi = 0, ol = offsets.length; oi < ol; ++oi) {

      var start = offsets[oi].start;
      var count = offsets[oi].count;
      var index = offsets[oi].index;

      for (var i = start, il = start + count; i < il; i += 3) {

        var a = index + indices[i];
        var b = index + indices[i + 1];
        var c = index + indices[i + 2];

        callback(a, b, c);
      }
    }
  } else {

    var positions = geometry.vb || attributes.position.array;
    var vcount = geometry.vb ? geometry.vb.length / geometry.vbstride : positions.length / 3;

    for (var _i = 0; _i < vcount; _i++) {

      var _a = 3 * _i;
      var _b = 3 * _i + 1;
      var _c = 3 * _i + 2;

      callback(_a, _b, _c);
    }
  }
}


var vA, vB, vC, nA, nB, nC;

function enumMeshTriangles(geometry, callback) {

  var attributes = geometry.attributes;

  var a, b, c;

  if (!vA) {
    vA = new _LmvVector3__WEBPACK_IMPORTED_MODULE_0__["LmvVector3"]();
    vB = new _LmvVector3__WEBPACK_IMPORTED_MODULE_0__["LmvVector3"]();
    vC = new _LmvVector3__WEBPACK_IMPORTED_MODULE_0__["LmvVector3"]();

    nA = new _LmvVector3__WEBPACK_IMPORTED_MODULE_0__["LmvVector3"]();
    nB = new _LmvVector3__WEBPACK_IMPORTED_MODULE_0__["LmvVector3"]();
    nC = new _LmvVector3__WEBPACK_IMPORTED_MODULE_0__["LmvVector3"]();
  }

  var positions = geometry.vb || attributes.position.array;
  var normals = geometry.vb || attributes.normal && attributes.normal.array;
  var stride = geometry.vb ? geometry.vbstride : 3;
  // Get the offset to positions in the buffer. Be careful, 2D buffers
  // don't use the 'position' attribute for positions. Reject those.
  var poffset;
  if (geometry.vblayout) {
    if (!geometry.vblayout.position)
    return; // No positions, what to do??
    poffset = geometry.vblayout.position.offset;
  } else if (!attributes.position)
  return; // No positions, what to do??
  else
    poffset = attributes.position.itemOffset || 0;

  var noffset = 0;
  var nattr = geometry.vblayout ? geometry.vblayout.normal : attributes.normal || null;
  if (nattr) {
    noffset = nattr.offset || nattr.itemOffset || 0;
  } else {
    normals = null;
  }

  if (nattr && (nattr.itemSize !== 3 || nattr.bytesPerItem !== 4)) {
    //console.log("Normals are packed, will be skipped from enumMeshTriangles. Use packNormals=false load option.");
    normals = null;
  }

  var indices = geometry.ib || geometry.indices || (attributes.index ? attributes.index.array : null);

  if (indices) {

    var offsets = geometry.offsets;

    if (!offsets || offsets.length === 0) {
      offsets = [{ start: 0, count: indices.length, index: 0 }];
    }

    for (var oi = 0, ol = offsets.length; oi < ol; ++oi) {

      var start = offsets[oi].start;
      var count = offsets[oi].count;
      var index = offsets[oi].index;

      for (var i = start, il = start + count; i < il; i += 3) {

        a = index + indices[i];
        b = index + indices[i + 1];
        c = index + indices[i + 2];

        var pa = a * stride + poffset;
        var pb = b * stride + poffset;
        var pc = c * stride + poffset;

        vA.x = positions[pa];vA.y = positions[pa + 1];vA.z = positions[pa + 2];
        vB.x = positions[pb];vB.y = positions[pb + 1];vB.z = positions[pb + 2];
        vC.x = positions[pc];vC.y = positions[pc + 1];vC.z = positions[pc + 2];

        if (normals) {
          var na = a * stride + noffset;
          var nb = b * stride + noffset;
          var nc = c * stride + noffset;

          nA.x = normals[na];nA.y = normals[na + 1];nA.z = normals[na + 2];
          nB.x = normals[nb];nB.y = normals[nb + 1];nB.z = normals[nb + 2];
          nC.x = normals[nc];nC.y = normals[nc + 1];nC.z = normals[nc + 2];

          callback(vA, vB, vC, a, b, c, nA, nB, nC);
        } else {
          callback(vA, vB, vC, a, b, c);
        }


      }

    }

  } else {

    var vcount = geometry.vb ? geometry.vb.length / geometry.vbstride : positions.length / 3;

    for (var i = 0; i < vcount; i++) {

      a = 3 * i;
      b = 3 * i + 1;
      c = 3 * i + 2;

      var pa = a * stride + poffset;
      var pb = b * stride + poffset;
      var pc = c * stride + poffset;

      vA.x = positions[pa];vA.y = positions[pa + 1];vA.z = positions[pa + 2];
      vB.x = positions[pb];vB.y = positions[pb + 1];vB.z = positions[pb + 2];
      vC.x = positions[pc];vC.y = positions[pc + 1];vC.z = positions[pc + 2];

      if (normals) {
        var na = a * stride + noffset;
        var nb = b * stride + noffset;
        var nc = c * stride + noffset;

        nA.x = normals[na];nA.y = normals[na + 1];nA.z = normals[na + 2];
        nB.x = normals[nb];nB.y = normals[nb + 1];nB.z = normals[nb + 2];
        nC.x = normals[nc];nC.y = normals[nc + 1];nC.z = normals[nc + 2];

        callback(vA, vB, vC, a, b, c, nA, nB, nC);
      } else {
        callback(vA, vB, vC, a, b, c);
      }
    }

  }
}


var vP, vQ;

function enumMeshLines(geometry, callback) {

  var attributes = geometry.attributes;

  var a, b;

  if (!vP) {
    vP = new _LmvVector3__WEBPACK_IMPORTED_MODULE_0__["LmvVector3"]();
    vQ = new _LmvVector3__WEBPACK_IMPORTED_MODULE_0__["LmvVector3"]();
  }

  var istep = 2;
  if (geometry.lineWidth) {
    istep = 6;
  }


  var indices = geometry.ib || geometry.indices || (attributes.index ? attributes.index.array : null);

  if (indices) {

    var positions = geometry.vb ? geometry.vb : attributes.position.array;
    var stride = geometry.vb ? geometry.vbstride : 3;
    var offsets = geometry.offsets;

    if (!offsets || offsets.length === 0) {

      offsets = [{ start: 0, count: indices.length, index: 0 }];

    }

    for (var oi = 0, ol = offsets.length; oi < ol; ++oi) {

      var start = offsets[oi].start;
      var count = offsets[oi].count;
      var index = offsets[oi].index;

      for (var i = start, il = start + count; i < il; i += istep) {

        a = index + indices[i];
        b = index + indices[i + 1];

        vP.x = positions[a * stride];vP.y = positions[a * stride + 1];vP.z = positions[a * stride + 2];
        vQ.x = positions[b * stride];vQ.y = positions[b * stride + 1];vQ.z = positions[b * stride + 2];

        callback(vP, vQ, a, b);
      }

    }

  } else {

    var positions = geometry.vb ? geometry.vb : attributes.position.array;
    var stride = geometry.vb ? geometry.vbstride : 3;

    for (var i = 0, il = positions.length; i < il; i += istep) {

      a = i;
      b = i + 1;

      vP.x = positions[a * stride];vP.y = positions[a * stride + 1];vP.z = positions[a * stride + 2];
      vQ.x = positions[b * stride];vQ.y = positions[b * stride + 1];vQ.z = positions[b * stride + 2];

      callback(vP, vQ, a, b);
    }

  }
}


function enumMeshEdges(geometry, callback) {
  var attributes = geometry.attributes;

  var a, b;

  if (!vP) {
    vP = new _LmvVector3__WEBPACK_IMPORTED_MODULE_0__["LmvVector3"]();
    vQ = new _LmvVector3__WEBPACK_IMPORTED_MODULE_0__["LmvVector3"]();
  }

  var istep = 2;

  var indices = geometry.iblines;

  if (!indices) {
    return;
  }

  var positions = geometry.vb ? geometry.vb : attributes.position.array;
  var stride = geometry.vb ? geometry.vbstride : 3;
  var offsets = geometry.offsets;

  if (!offsets || offsets.length === 0) {

    offsets = [{ start: 0, count: indices.length, index: 0 }];

  }

  for (var oi = 0, ol = offsets.length; oi < ol; ++oi) {

    var start = offsets[oi].start;
    var count = offsets[oi].count;
    var index = offsets[oi].index;

    for (var i = start, il = start + count; i < il; i += istep) {

      a = index + indices[i];
      b = index + indices[i + 1];

      vP.x = positions[a * stride];vP.y = positions[a * stride + 1];vP.z = positions[a * stride + 2];
      vQ.x = positions[b * stride];vQ.y = positions[b * stride + 1];vQ.z = positions[b * stride + 2];

      callback(vP, vQ, a, b);
    }

  }
}

var VertexEnumerator = {
  getVertexCount: getVertexCount,
  enumMeshVertices: enumMeshVertices,
  enumMeshIndices: enumMeshIndices,
  enumMeshTriangles: enumMeshTriangles,
  enumMeshLines: enumMeshLines,
  enumMeshEdges: enumMeshEdges };

/***/ }),

/***/ "./thirdparty/zlib/unzip.min.js":
/*!**************************************!*\
  !*** ./thirdparty/zlib/unzip.min.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** @license zlib.js 2012 - imaya [ https://github.com/imaya/zlib.js ] The MIT License */(function() {'use strict';function m(a){throw a;}var p=void 0,t,aa=this;function v(a,b){var c=a.split("."),d=aa;!(c[0]in d)&&d.execScript&&d.execScript("var "+c[0]);for(var g;c.length&&(g=c.shift());)!c.length&&b!==p?d[g]=b:d=d[g]?d[g]:d[g]={}};var w="undefined"!==typeof Uint8Array&&"undefined"!==typeof Uint16Array&&"undefined"!==typeof Uint32Array;new (w?Uint8Array:Array)(256);var x;for(x=0;256>x;++x)for(var y=x,ba=7,y=y>>>1;y;y>>>=1)--ba;var z=[0,1996959894,3993919788,2567524794,124634137,1886057615,3915621685,2657392035,249268274,2044508324,3772115230,2547177864,162941995,2125561021,3887607047,2428444049,498536548,1789927666,4089016648,2227061214,450548861,1843258603,4107580753,2211677639,325883990,1684777152,4251122042,2321926636,335633487,1661365465,4195302755,2366115317,997073096,1281953886,3579855332,2724688242,1006888145,1258607687,3524101629,2768942443,901097722,1119000684,3686517206,2898065728,853044451,1172266101,3705015759,
2882616665,651767980,1373503546,3369554304,3218104598,565507253,1454621731,3485111705,3099436303,671266974,1594198024,3322730930,2970347812,795835527,1483230225,3244367275,3060149565,1994146192,31158534,2563907772,4023717930,1907459465,112637215,2680153253,3904427059,2013776290,251722036,2517215374,3775830040,2137656763,141376813,2439277719,3865271297,1802195444,476864866,2238001368,4066508878,1812370925,453092731,2181625025,4111451223,1706088902,314042704,2344532202,4240017532,1658658271,366619977,
2362670323,4224994405,1303535960,984961486,2747007092,3569037538,1256170817,1037604311,2765210733,3554079995,1131014506,879679996,2909243462,3663771856,1141124467,855842277,2852801631,3708648649,1342533948,654459306,3188396048,3373015174,1466479909,544179635,3110523913,3462522015,1591671054,702138776,2966460450,3352799412,1504918807,783551873,3082640443,3233442989,3988292384,2596254646,62317068,1957810842,3939845945,2647816111,81470997,1943803523,3814918930,2489596804,225274430,2053790376,3826175755,
2466906013,167816743,2097651377,4027552580,2265490386,503444072,1762050814,4150417245,2154129355,426522225,1852507879,4275313526,2312317920,282753626,1742555852,4189708143,2394877945,397917763,1622183637,3604390888,2714866558,953729732,1340076626,3518719985,2797360999,1068828381,1219638859,3624741850,2936675148,906185462,1090812512,3747672003,2825379669,829329135,1181335161,3412177804,3160834842,628085408,1382605366,3423369109,3138078467,570562233,1426400815,3317316542,2998733608,733239954,1555261956,
3268935591,3050360625,752459403,1541320221,2607071920,3965973030,1969922972,40735498,2617837225,3943577151,1913087877,83908371,2512341634,3803740692,2075208622,213261112,2463272603,3855990285,2094854071,198958881,2262029012,4057260610,1759359992,534414190,2176718541,4139329115,1873836001,414664567,2282248934,4279200368,1711684554,285281116,2405801727,4167216745,1634467795,376229701,2685067896,3608007406,1308918612,956543938,2808555105,3495958263,1231636301,1047427035,2932959818,3654703836,1088359270,
936918E3,2847714899,3736837829,1202900863,817233897,3183342108,3401237130,1404277552,615818150,3134207493,3453421203,1423857449,601450431,3009837614,3294710456,1567103746,711928724,3020668471,3272380065,1510334235,755167117],A=w?new Uint32Array(z):z;function B(a){var b=a.length,c=0,d=Number.POSITIVE_INFINITY,g,f,h,e,k,l,q,s,r;for(s=0;s<b;++s)a[s]>c&&(c=a[s]),a[s]<d&&(d=a[s]);g=1<<c;f=new (w?Uint32Array:Array)(g);h=1;e=0;for(k=2;h<=c;){for(s=0;s<b;++s)if(a[s]===h){l=0;q=e;for(r=0;r<h;++r)l=l<<1|q&1,q>>=1;for(r=l;r<g;r+=k)f[r]=h<<16|s;++e}++h;e<<=1;k<<=1}return[f,c,d]};var C=[],D;for(D=0;288>D;D++)switch(!0){case 143>=D:C.push([D+48,8]);break;case 255>=D:C.push([D-144+400,9]);break;case 279>=D:C.push([D-256+0,7]);break;case 287>=D:C.push([D-280+192,8]);break;default:m("invalid literal: "+D)}
var ca=function(){function a(a){switch(!0){case 3===a:return[257,a-3,0];case 4===a:return[258,a-4,0];case 5===a:return[259,a-5,0];case 6===a:return[260,a-6,0];case 7===a:return[261,a-7,0];case 8===a:return[262,a-8,0];case 9===a:return[263,a-9,0];case 10===a:return[264,a-10,0];case 12>=a:return[265,a-11,1];case 14>=a:return[266,a-13,1];case 16>=a:return[267,a-15,1];case 18>=a:return[268,a-17,1];case 22>=a:return[269,a-19,2];case 26>=a:return[270,a-23,2];case 30>=a:return[271,a-27,2];case 34>=a:return[272,
a-31,2];case 42>=a:return[273,a-35,3];case 50>=a:return[274,a-43,3];case 58>=a:return[275,a-51,3];case 66>=a:return[276,a-59,3];case 82>=a:return[277,a-67,4];case 98>=a:return[278,a-83,4];case 114>=a:return[279,a-99,4];case 130>=a:return[280,a-115,4];case 162>=a:return[281,a-131,5];case 194>=a:return[282,a-163,5];case 226>=a:return[283,a-195,5];case 257>=a:return[284,a-227,5];case 258===a:return[285,a-258,0];default:m("invalid length: "+a)}}var b=[],c,d;for(c=3;258>=c;c++)d=a(c),b[c]=d[2]<<24|d[1]<<
16|d[0];return b}();w&&new Uint32Array(ca);function E(a,b){this.l=[];this.m=32768;this.d=this.f=this.c=this.t=0;this.input=w?new Uint8Array(a):a;this.u=!1;this.n=F;this.K=!1;if(b||!(b={}))b.index&&(this.c=b.index),b.bufferSize&&(this.m=b.bufferSize),b.bufferType&&(this.n=b.bufferType),b.resize&&(this.K=b.resize);switch(this.n){case G:this.a=32768;this.b=new (w?Uint8Array:Array)(32768+this.m+258);break;case F:this.a=0;this.b=new (w?Uint8Array:Array)(this.m);this.e=this.W;this.B=this.R;this.q=this.V;break;default:m(Error("invalid inflate mode"))}}
var G=0,F=1;
E.prototype.r=function(){for(;!this.u;){var a=H(this,3);a&1&&(this.u=!0);a>>>=1;switch(a){case 0:var b=this.input,c=this.c,d=this.b,g=this.a,f=p,h=p,e=p,k=d.length,l=p;this.d=this.f=0;f=b[c++];f===p&&m(Error("invalid uncompressed block header: LEN (first byte)"));h=f;f=b[c++];f===p&&m(Error("invalid uncompressed block header: LEN (second byte)"));h|=f<<8;f=b[c++];f===p&&m(Error("invalid uncompressed block header: NLEN (first byte)"));e=f;f=b[c++];f===p&&m(Error("invalid uncompressed block header: NLEN (second byte)"));e|=
f<<8;h===~e&&m(Error("invalid uncompressed block header: length verify"));c+h>b.length&&m(Error("input buffer is broken"));switch(this.n){case G:for(;g+h>d.length;){l=k-g;h-=l;if(w)d.set(b.subarray(c,c+l),g),g+=l,c+=l;else for(;l--;)d[g++]=b[c++];this.a=g;d=this.e();g=this.a}break;case F:for(;g+h>d.length;)d=this.e({H:2});break;default:m(Error("invalid inflate mode"))}if(w)d.set(b.subarray(c,c+h),g),g+=h,c+=h;else for(;h--;)d[g++]=b[c++];this.c=c;this.a=g;this.b=d;break;case 1:this.q(da,ea);break;
case 2:fa(this);break;default:m(Error("unknown BTYPE: "+a))}}return this.B()};
var I=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],J=w?new Uint16Array(I):I,K=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,258,258],L=w?new Uint16Array(K):K,ga=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0],O=w?new Uint8Array(ga):ga,ha=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577],ia=w?new Uint16Array(ha):ha,ja=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,
12,12,13,13],P=w?new Uint8Array(ja):ja,Q=new (w?Uint8Array:Array)(288),R,la;R=0;for(la=Q.length;R<la;++R)Q[R]=143>=R?8:255>=R?9:279>=R?7:8;var da=B(Q),S=new (w?Uint8Array:Array)(30),T,ma;T=0;for(ma=S.length;T<ma;++T)S[T]=5;var ea=B(S);function H(a,b){for(var c=a.f,d=a.d,g=a.input,f=a.c,h;d<b;)h=g[f++],h===p&&m(Error("input buffer is broken")),c|=h<<d,d+=8;h=c&(1<<b)-1;a.f=c>>>b;a.d=d-b;a.c=f;return h}
function U(a,b){for(var c=a.f,d=a.d,g=a.input,f=a.c,h=b[0],e=b[1],k,l,q;d<e;){k=g[f++];if(k===p)break;c|=k<<d;d+=8}l=h[c&(1<<e)-1];q=l>>>16;a.f=c>>q;a.d=d-q;a.c=f;return l&65535}
function fa(a){function b(a,b,c){var d,e,f,g;for(g=0;g<a;)switch(d=U(this,b),d){case 16:for(f=3+H(this,2);f--;)c[g++]=e;break;case 17:for(f=3+H(this,3);f--;)c[g++]=0;e=0;break;case 18:for(f=11+H(this,7);f--;)c[g++]=0;e=0;break;default:e=c[g++]=d}return c}var c=H(a,5)+257,d=H(a,5)+1,g=H(a,4)+4,f=new (w?Uint8Array:Array)(J.length),h,e,k,l;for(l=0;l<g;++l)f[J[l]]=H(a,3);h=B(f);e=new (w?Uint8Array:Array)(c);k=new (w?Uint8Array:Array)(d);a.q(B(b.call(a,c,h,e)),B(b.call(a,d,h,k)))}t=E.prototype;
t.q=function(a,b){var c=this.b,d=this.a;this.C=a;for(var g=c.length-258,f,h,e,k;256!==(f=U(this,a));)if(256>f)d>=g&&(this.a=d,c=this.e(),d=this.a),c[d++]=f;else{h=f-257;k=L[h];0<O[h]&&(k+=H(this,O[h]));f=U(this,b);e=ia[f];0<P[f]&&(e+=H(this,P[f]));d>=g&&(this.a=d,c=this.e(),d=this.a);for(;k--;)c[d]=c[d++-e]}for(;8<=this.d;)this.d-=8,this.c--;this.a=d};
t.V=function(a,b){var c=this.b,d=this.a;this.C=a;for(var g=c.length,f,h,e,k;256!==(f=U(this,a));)if(256>f)d>=g&&(c=this.e(),g=c.length),c[d++]=f;else{h=f-257;k=L[h];0<O[h]&&(k+=H(this,O[h]));f=U(this,b);e=ia[f];0<P[f]&&(e+=H(this,P[f]));d+k>g&&(c=this.e(),g=c.length);for(;k--;)c[d]=c[d++-e]}for(;8<=this.d;)this.d-=8,this.c--;this.a=d};
t.e=function(){var a=new (w?Uint8Array:Array)(this.a-32768),b=this.a-32768,c,d,g=this.b;if(w)a.set(g.subarray(32768,a.length));else{c=0;for(d=a.length;c<d;++c)a[c]=g[c+32768]}this.l.push(a);this.t+=a.length;if(w)g.set(g.subarray(b,b+32768));else for(c=0;32768>c;++c)g[c]=g[b+c];this.a=32768;return g};
t.W=function(a){var b,c=this.input.length/this.c+1|0,d,g,f,h=this.input,e=this.b;a&&("number"===typeof a.H&&(c=a.H),"number"===typeof a.P&&(c+=a.P));2>c?(d=(h.length-this.c)/this.C[2],f=258*(d/2)|0,g=f<e.length?e.length+f:e.length<<1):g=e.length*c;w?(b=new Uint8Array(g),b.set(e)):b=e;return this.b=b};
t.B=function(){var a=0,b=this.b,c=this.l,d,g=new (w?Uint8Array:Array)(this.t+(this.a-32768)),f,h,e,k;if(0===c.length)return w?this.b.subarray(32768,this.a):this.b.slice(32768,this.a);f=0;for(h=c.length;f<h;++f){d=c[f];e=0;for(k=d.length;e<k;++e)g[a++]=d[e]}f=32768;for(h=this.a;f<h;++f)g[a++]=b[f];this.l=[];return this.buffer=g};
t.R=function(){var a,b=this.a;w?this.K?(a=new Uint8Array(b),a.set(this.b.subarray(0,b))):a=this.b.subarray(0,b):(this.b.length>b&&(this.b.length=b),a=this.b);return this.buffer=a};function V(a){a=a||{};this.files=[];this.v=a.comment}V.prototype.L=function(a){this.j=a};V.prototype.s=function(a){var b=a[2]&65535|2;return b*(b^1)>>8&255};V.prototype.k=function(a,b){a[0]=(A[(a[0]^b)&255]^a[0]>>>8)>>>0;a[1]=(6681*(20173*(a[1]+(a[0]&255))>>>0)>>>0)+1>>>0;a[2]=(A[(a[2]^a[1]>>>24)&255]^a[2]>>>8)>>>0};V.prototype.T=function(a){var b=[305419896,591751049,878082192],c,d;w&&(b=new Uint32Array(b));c=0;for(d=a.length;c<d;++c)this.k(b,a[c]&255);return b};function W(a,b){b=b||{};this.input=w&&a instanceof Array?new Uint8Array(a):a;this.c=0;this.ba=b.verify||!1;this.j=b.password}var na={O:0,M:8},X=[80,75,1,2],Y=[80,75,3,4],Z=[80,75,5,6];function oa(a,b){this.input=a;this.offset=b}
oa.prototype.parse=function(){var a=this.input,b=this.offset;(a[b++]!==X[0]||a[b++]!==X[1]||a[b++]!==X[2]||a[b++]!==X[3])&&m(Error("invalid file header signature"));this.version=a[b++];this.ia=a[b++];this.Z=a[b++]|a[b++]<<8;this.I=a[b++]|a[b++]<<8;this.A=a[b++]|a[b++]<<8;this.time=a[b++]|a[b++]<<8;this.U=a[b++]|a[b++]<<8;this.p=(a[b++]|a[b++]<<8|a[b++]<<16|a[b++]<<24)>>>0;this.z=(a[b++]|a[b++]<<8|a[b++]<<16|a[b++]<<24)>>>0;this.J=(a[b++]|a[b++]<<8|a[b++]<<16|a[b++]<<24)>>>0;this.h=a[b++]|a[b++]<<
8;this.g=a[b++]|a[b++]<<8;this.F=a[b++]|a[b++]<<8;this.ea=a[b++]|a[b++]<<8;this.ga=a[b++]|a[b++]<<8;this.fa=a[b++]|a[b++]<<8|a[b++]<<16|a[b++]<<24;this.$=(a[b++]|a[b++]<<8|a[b++]<<16|a[b++]<<24)>>>0;this.filename=String.fromCharCode.apply(null,w?a.subarray(b,b+=this.h):a.slice(b,b+=this.h));this.X=w?a.subarray(b,b+=this.g):a.slice(b,b+=this.g);this.v=w?a.subarray(b,b+this.F):a.slice(b,b+this.F);this.length=b-this.offset};function pa(a,b){this.input=a;this.offset=b}var qa={N:1,ca:8,da:2048};
pa.prototype.parse=function(){var a=this.input,b=this.offset;(a[b++]!==Y[0]||a[b++]!==Y[1]||a[b++]!==Y[2]||a[b++]!==Y[3])&&m(Error("invalid local file header signature"));this.Z=a[b++]|a[b++]<<8;this.I=a[b++]|a[b++]<<8;this.A=a[b++]|a[b++]<<8;this.time=a[b++]|a[b++]<<8;this.U=a[b++]|a[b++]<<8;this.p=(a[b++]|a[b++]<<8|a[b++]<<16|a[b++]<<24)>>>0;this.z=(a[b++]|a[b++]<<8|a[b++]<<16|a[b++]<<24)>>>0;this.J=(a[b++]|a[b++]<<8|a[b++]<<16|a[b++]<<24)>>>0;this.h=a[b++]|a[b++]<<8;this.g=a[b++]|a[b++]<<8;this.filename=
String.fromCharCode.apply(null,w?a.subarray(b,b+=this.h):a.slice(b,b+=this.h));this.X=w?a.subarray(b,b+=this.g):a.slice(b,b+=this.g);this.length=b-this.offset};
function $(a){var b=[],c={},d,g,f,h;if(!a.i){if(a.o===p){var e=a.input,k;if(!a.D)a:{var l=a.input,q;for(q=l.length-12;0<q;--q)if(l[q]===Z[0]&&l[q+1]===Z[1]&&l[q+2]===Z[2]&&l[q+3]===Z[3]){a.D=q;break a}m(Error("End of Central Directory Record not found"))}k=a.D;(e[k++]!==Z[0]||e[k++]!==Z[1]||e[k++]!==Z[2]||e[k++]!==Z[3])&&m(Error("invalid signature"));a.ha=e[k++]|e[k++]<<8;a.ja=e[k++]|e[k++]<<8;a.ka=e[k++]|e[k++]<<8;a.aa=e[k++]|e[k++]<<8;a.Q=(e[k++]|e[k++]<<8|e[k++]<<16|e[k++]<<24)>>>0;a.o=(e[k++]|
e[k++]<<8|e[k++]<<16|e[k++]<<24)>>>0;a.w=e[k++]|e[k++]<<8;a.v=w?e.subarray(k,k+a.w):e.slice(k,k+a.w)}d=a.o;f=0;for(h=a.aa;f<h;++f)g=new oa(a.input,d),g.parse(),d+=g.length,b[f]=g,c[g.filename]=f;a.Q<d-a.o&&m(Error("invalid file header size"));a.i=b;a.G=c}}t=W.prototype;t.Y=function(){var a=[],b,c,d;this.i||$(this);d=this.i;b=0;for(c=d.length;b<c;++b)a[b]=d[b].filename;return a};
t.r=function(a,b){var c;this.G||$(this);c=this.G[a];c===p&&m(Error(a+" not found"));var d;d=b||{};var g=this.input,f=this.i,h,e,k,l,q,s,r,M;f||$(this);f[c]===p&&m(Error("wrong index"));e=f[c].$;h=new pa(this.input,e);h.parse();e+=h.length;k=h.z;if(0!==(h.I&qa.N)){!d.password&&!this.j&&m(Error("please set password"));s=this.S(d.password||this.j);r=e;for(M=e+12;r<M;++r)ra(this,s,g[r]);e+=12;k-=12;r=e;for(M=e+k;r<M;++r)g[r]=ra(this,s,g[r])}switch(h.A){case na.O:l=w?this.input.subarray(e,e+k):this.input.slice(e,
e+k);break;case na.M:l=(new E(this.input,{index:e,bufferSize:h.J})).r();break;default:m(Error("unknown compression type"))}if(this.ba){var u=p,n,N="number"===typeof u?u:u=0,ka=l.length;n=-1;for(N=ka&7;N--;++u)n=n>>>8^A[(n^l[u])&255];for(N=ka>>3;N--;u+=8)n=n>>>8^A[(n^l[u])&255],n=n>>>8^A[(n^l[u+1])&255],n=n>>>8^A[(n^l[u+2])&255],n=n>>>8^A[(n^l[u+3])&255],n=n>>>8^A[(n^l[u+4])&255],n=n>>>8^A[(n^l[u+5])&255],n=n>>>8^A[(n^l[u+6])&255],n=n>>>8^A[(n^l[u+7])&255];q=(n^4294967295)>>>0;h.p!==q&&m(Error("wrong crc: file=0x"+
h.p.toString(16)+", data=0x"+q.toString(16)))}return l};t.L=function(a){this.j=a};function ra(a,b,c){c^=a.s(b);a.k(b,c);return c}t.k=V.prototype.k;t.S=V.prototype.T;t.s=V.prototype.s;v("Zlib.Unzip",W);v("Zlib.Unzip.prototype.decompress",W.prototype.r);v("Zlib.Unzip.prototype.getFilenames",W.prototype.Y);v("Zlib.Unzip.prototype.setPassword",W.prototype.L);}).call(this);


/***/ })

/******/ });
//# sourceMappingURL=lmvworker.js.map