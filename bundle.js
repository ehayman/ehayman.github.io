!function(e){function r(e,r,o){return 4===arguments.length?t.apply(this,arguments):void n(e,{declarative:!0,deps:r,declare:o})}function t(e,r,t,o){n(e,{declarative:!1,deps:r,executingRequire:t,execute:o})}function n(e,r){r.name=e,e in v||(v[e]=r),r.normalizedDeps=r.deps}function o(e,r){if(r[e.groupIndex]=r[e.groupIndex]||[],-1==g.call(r[e.groupIndex],e)){r[e.groupIndex].push(e);for(var t=0,n=e.normalizedDeps.length;n>t;t++){var a=e.normalizedDeps[t],u=v[a];if(u&&!u.evaluated){var d=e.groupIndex+(u.declarative!=e.declarative);if(void 0===u.groupIndex||u.groupIndex<d){if(void 0!==u.groupIndex&&(r[u.groupIndex].splice(g.call(r[u.groupIndex],u),1),0==r[u.groupIndex].length))throw new TypeError("Mixed dependency cycle detected");u.groupIndex=d}o(u,r)}}}}function a(e){var r=v[e];r.groupIndex=0;var t=[];o(r,t);for(var n=!!r.declarative==t.length%2,a=t.length-1;a>=0;a--){for(var u=t[a],i=0;i<u.length;i++){var s=u[i];n?d(s):l(s)}n=!n}}function u(e){return y[e]||(y[e]={name:e,dependencies:[],exports:{},importers:[]})}function d(r){if(!r.module){var t=r.module=u(r.name),n=r.module.exports,o=r.declare.call(e,function(e,r){if(t.locked=!0,"object"==typeof e)for(var o in e)n[o]=e[o];else n[e]=r;for(var a=0,u=t.importers.length;u>a;a++){var d=t.importers[a];if(!d.locked)for(var i=0;i<d.dependencies.length;++i)d.dependencies[i]===t&&d.setters[i](n)}return t.locked=!1,r},r.name);t.setters=o.setters,t.execute=o.execute;for(var a=0,i=r.normalizedDeps.length;i>a;a++){var l,s=r.normalizedDeps[a],c=v[s],f=y[s];f?l=f.exports:c&&!c.declarative?l=c.esModule:c?(d(c),f=c.module,l=f.exports):l=p(s),f&&f.importers?(f.importers.push(t),t.dependencies.push(f)):t.dependencies.push(null),t.setters[a]&&t.setters[a](l)}}}function i(e){var r,t=v[e];if(t)t.declarative?f(e,[]):t.evaluated||l(t),r=t.module.exports;else if(r=p(e),!r)throw new Error("Unable to load dependency "+e+".");return(!t||t.declarative)&&r&&r.__useDefault?r["default"]:r}function l(r){if(!r.module){var t={},n=r.module={exports:t,id:r.name};if(!r.executingRequire)for(var o=0,a=r.normalizedDeps.length;a>o;o++){var u=r.normalizedDeps[o],d=v[u];d&&l(d)}r.evaluated=!0;var c=r.execute.call(e,function(e){for(var t=0,n=r.deps.length;n>t;t++)if(r.deps[t]==e)return i(r.normalizedDeps[t]);throw new TypeError("Module "+e+" not declared as a dependency.")},t,n);c&&(n.exports=c),t=n.exports,t&&t.__esModule?r.esModule=t:r.esModule=s(t)}}function s(r){var t={};if(("object"==typeof r||"function"==typeof r)&&r!==e)if(m)for(var n in r)"default"!==n&&c(t,r,n);else{var o=r&&r.hasOwnProperty;for(var n in r)"default"===n||o&&!r.hasOwnProperty(n)||(t[n]=r[n])}return t["default"]=r,x(t,"__useDefault",{value:!0}),t}function c(e,r,t){try{var n;(n=Object.getOwnPropertyDescriptor(r,t))&&x(e,t,n)}catch(o){return e[t]=r[t],!1}}function f(r,t){var n=v[r];if(n&&!n.evaluated&&n.declarative){t.push(r);for(var o=0,a=n.normalizedDeps.length;a>o;o++){var u=n.normalizedDeps[o];-1==g.call(t,u)&&(v[u]?f(u,t):p(u))}n.evaluated||(n.evaluated=!0,n.module.execute.call(e))}}function p(e){if(I[e])return I[e];if("@node/"==e.substr(0,6))return D(e.substr(6));var r=v[e];if(!r)throw"Module "+e+" not present.";return a(e),f(e,[]),v[e]=void 0,r.declarative&&x(r.module.exports,"__esModule",{value:!0}),I[e]=r.declarative?r.module.exports:r.esModule}var v={},g=Array.prototype.indexOf||function(e){for(var r=0,t=this.length;t>r;r++)if(this[r]===e)return r;return-1},m=!0;try{Object.getOwnPropertyDescriptor({a:0},"a")}catch(h){m=!1}var x;!function(){try{Object.defineProperty({},"a",{})&&(x=Object.defineProperty)}catch(e){x=function(e,r,t){try{e[r]=t.value||t.get.call(e)}catch(n){}}}}();var y={},D="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&require.resolve&&"undefined"!=typeof process&&require,I={"@empty":{}};return function(e,n,o,a){return function(u){u(function(u){for(var d={_nodeRequire:D,register:r,registerDynamic:t,get:p,set:function(e,r){I[e]=r},newModule:function(e){return e}},i=0;i<n.length;i++)(function(e,r){r&&r.__esModule?I[e]=r:I[e]=s(r)})(n[i],arguments[i]);a(d);var l=p(e[0]);if(e.length>1)for(var i=1;i<e.length;i++)p(e[i]);return o?l["default"]:l})}}}("undefined"!=typeof self?self:global)

(["1"], [], false, function($__System) {
var require = this.require, exports = this.exports, module = this.module;
!function(e){function r(e,r){for(var n=e.split(".");n.length;)r=r[n.shift()];return r}function n(n){if("string"==typeof n)return r(n,e);if(!(n instanceof Array))throw new Error("Global exports must be a string or array.");for(var t={},o=!0,f=0;f<n.length;f++){var i=r(n[f],e);o&&(t["default"]=i,o=!1),t[n[f].split(".").pop()]=i}return t}function t(r){if(Object.keys)Object.keys(e).forEach(r);else for(var n in e)a.call(e,n)&&r(n)}function o(r){t(function(n){if(-1==l.call(s,n)){try{var t=e[n]}catch(o){s.push(n)}r(n,t)}})}var f,i=$__System,a=Object.prototype.hasOwnProperty,l=Array.prototype.indexOf||function(e){for(var r=0,n=this.length;n>r;r++)if(this[r]===e)return r;return-1},s=["_g","sessionStorage","localStorage","clipboardData","frames","frameElement","external","mozAnimationStartTime","webkitStorageInfo","webkitIndexedDB","mozInnerScreenY","mozInnerScreenX"];i.set("@@global-helpers",i.newModule({prepareGlobal:function(r,t,i){var a=e.define;e.define=void 0;var l;if(i){l={};for(var s in i)l[s]=e[s],e[s]=i[s]}return t||(f={},o(function(e,r){f[e]=r})),function(){var r;if(t)r=n(t);else{r={};var i,s;o(function(e,n){f[e]!==n&&"undefined"!=typeof n&&(r[e]=n,"undefined"!=typeof i?s||i===n||(s=!0):i=n)}),r=s?r:i}if(l)for(var u in l)e[u]=l[u];return e.define=a,r}}}))}("undefined"!=typeof self?self:global);
!function(e){function n(e,n){e=e.replace(l,"");var r=e.match(u),t=(r[1].split(",")[n]||"require").replace(s,""),i=p[t]||(p[t]=new RegExp(a+t+f,"g"));i.lastIndex=0;for(var o,c=[];o=i.exec(e);)c.push(o[2]||o[3]);return c}function r(e,n,t,o){if("object"==typeof e&&!(e instanceof Array))return r.apply(null,Array.prototype.splice.call(arguments,1,arguments.length-1));if("string"==typeof e&&"function"==typeof n&&(e=[e]),!(e instanceof Array)){if("string"==typeof e){var l=i.get(e);return l.__useDefault?l["default"]:l}throw new TypeError("Invalid require")}for(var a=[],f=0;f<e.length;f++)a.push(i["import"](e[f],o));Promise.all(a).then(function(e){n&&n.apply(null,e)},t)}function t(t,l,a){"string"!=typeof t&&(a=l,l=t,t=null),l instanceof Array||(a=l,l=["require","exports","module"].splice(0,a.length)),"function"!=typeof a&&(a=function(e){return function(){return e}}(a)),void 0===l[l.length-1]&&l.pop();var f,u,s;-1!=(f=o.call(l,"require"))&&(l.splice(f,1),t||(l=l.concat(n(a.toString(),f)))),-1!=(u=o.call(l,"exports"))&&l.splice(u,1),-1!=(s=o.call(l,"module"))&&l.splice(s,1);var p={name:t,deps:l,execute:function(n,t,o){for(var p=[],c=0;c<l.length;c++)p.push(n(l[c]));o.uri=o.id,o.config=function(){},-1!=s&&p.splice(s,0,o),-1!=u&&p.splice(u,0,t),-1!=f&&p.splice(f,0,function(e,t,l){return"string"==typeof e&&"function"!=typeof t?n(e):r.call(i,e,t,l,o.id)});var d=a.apply(-1==u?e:t,p);return"undefined"==typeof d&&o&&(d=o.exports),"undefined"!=typeof d?d:void 0}};if(t)c.anonDefine||c.isBundle?c.anonDefine&&c.anonDefine.name&&(c.anonDefine=null):c.anonDefine=p,c.isBundle=!0,i.registerDynamic(p.name,p.deps,!1,p.execute);else{if(c.anonDefine&&!c.anonDefine.name)throw new Error("Multiple anonymous defines in module "+t);c.anonDefine=p}}var i=$__System,o=Array.prototype.indexOf||function(e){for(var n=0,r=this.length;r>n;n++)if(this[n]===e)return n;return-1},l=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,a="(?:^|[^$_a-zA-Z\\xA0-\\uFFFF.])",f="\\s*\\(\\s*(\"([^\"]+)\"|'([^']+)')\\s*\\)",u=/\(([^\)]*)\)/,s=/^\s+|\s+$/g,p={};t.amd={};var c={isBundle:!1,anonDefine:null};i.amdDefine=t,i.amdRequire=r}("undefined"!=typeof self?self:global);
$__System.registerDynamic("2", [], false, function($__require, $__exports, $__module) {
  var _retrieveGlobal = $__System.get("@@global-helpers").prepareGlobal($__module.id, "angular", null);
  (function() {
    "format global";
    "exports angular";
    (function(window) {
      'use strict';
      function minErr(module, ErrorConstructor) {
        ErrorConstructor = ErrorConstructor || Error;
        return function() {
          var SKIP_INDEXES = 2;
          var templateArgs = arguments,
              code = templateArgs[0],
              message = '[' + (module ? module + ':' : '') + code + '] ',
              template = templateArgs[1],
              paramPrefix,
              i;
          message += template.replace(/\{\d+\}/g, function(match) {
            var index = +match.slice(1, -1),
                shiftedIndex = index + SKIP_INDEXES;
            if (shiftedIndex < templateArgs.length) {
              return toDebugString(templateArgs[shiftedIndex]);
            }
            return match;
          });
          message += '\nhttp://errors.angularjs.org/1.5.7/' + (module ? module + '/' : '') + code;
          for (i = SKIP_INDEXES, paramPrefix = '?'; i < templateArgs.length; i++, paramPrefix = '&') {
            message += paramPrefix + 'p' + (i - SKIP_INDEXES) + '=' + encodeURIComponent(toDebugString(templateArgs[i]));
          }
          return new ErrorConstructor(message);
        };
      }
      var REGEX_STRING_REGEXP = /^\/(.+)\/([a-z]*)$/;
      var VALIDITY_STATE_PROPERTY = 'validity';
      var hasOwnProperty = Object.prototype.hasOwnProperty;
      var lowercase = function(string) {
        return isString(string) ? string.toLowerCase() : string;
      };
      var uppercase = function(string) {
        return isString(string) ? string.toUpperCase() : string;
      };
      var manualLowercase = function(s) {
        return isString(s) ? s.replace(/[A-Z]/g, function(ch) {
          return String.fromCharCode(ch.charCodeAt(0) | 32);
        }) : s;
      };
      var manualUppercase = function(s) {
        return isString(s) ? s.replace(/[a-z]/g, function(ch) {
          return String.fromCharCode(ch.charCodeAt(0) & ~32);
        }) : s;
      };
      if ('i' !== 'I'.toLowerCase()) {
        lowercase = manualLowercase;
        uppercase = manualUppercase;
      }
      var msie,
          jqLite,
          jQuery,
          slice = [].slice,
          splice = [].splice,
          push = [].push,
          toString = Object.prototype.toString,
          getPrototypeOf = Object.getPrototypeOf,
          ngMinErr = minErr('ng'),
          angular = window.angular || (window.angular = {}),
          angularModule,
          uid = 0;
      msie = window.document.documentMode;
      function isArrayLike(obj) {
        if (obj == null || isWindow(obj))
          return false;
        if (isArray(obj) || isString(obj) || (jqLite && obj instanceof jqLite))
          return true;
        var length = "length" in Object(obj) && obj.length;
        return isNumber(length) && (length >= 0 && ((length - 1) in obj || obj instanceof Array) || typeof obj.item == 'function');
      }
      function forEach(obj, iterator, context) {
        var key,
            length;
        if (obj) {
          if (isFunction(obj)) {
            for (key in obj) {
              if (key != 'prototype' && key != 'length' && key != 'name' && (!obj.hasOwnProperty || obj.hasOwnProperty(key))) {
                iterator.call(context, obj[key], key, obj);
              }
            }
          } else if (isArray(obj) || isArrayLike(obj)) {
            var isPrimitive = typeof obj !== 'object';
            for (key = 0, length = obj.length; key < length; key++) {
              if (isPrimitive || key in obj) {
                iterator.call(context, obj[key], key, obj);
              }
            }
          } else if (obj.forEach && obj.forEach !== forEach) {
            obj.forEach(iterator, context, obj);
          } else if (isBlankObject(obj)) {
            for (key in obj) {
              iterator.call(context, obj[key], key, obj);
            }
          } else if (typeof obj.hasOwnProperty === 'function') {
            for (key in obj) {
              if (obj.hasOwnProperty(key)) {
                iterator.call(context, obj[key], key, obj);
              }
            }
          } else {
            for (key in obj) {
              if (hasOwnProperty.call(obj, key)) {
                iterator.call(context, obj[key], key, obj);
              }
            }
          }
        }
        return obj;
      }
      function forEachSorted(obj, iterator, context) {
        var keys = Object.keys(obj).sort();
        for (var i = 0; i < keys.length; i++) {
          iterator.call(context, obj[keys[i]], keys[i]);
        }
        return keys;
      }
      function reverseParams(iteratorFn) {
        return function(value, key) {
          iteratorFn(key, value);
        };
      }
      function nextUid() {
        return ++uid;
      }
      function setHashKey(obj, h) {
        if (h) {
          obj.$$hashKey = h;
        } else {
          delete obj.$$hashKey;
        }
      }
      function baseExtend(dst, objs, deep) {
        var h = dst.$$hashKey;
        for (var i = 0,
            ii = objs.length; i < ii; ++i) {
          var obj = objs[i];
          if (!isObject(obj) && !isFunction(obj))
            continue;
          var keys = Object.keys(obj);
          for (var j = 0,
              jj = keys.length; j < jj; j++) {
            var key = keys[j];
            var src = obj[key];
            if (deep && isObject(src)) {
              if (isDate(src)) {
                dst[key] = new Date(src.valueOf());
              } else if (isRegExp(src)) {
                dst[key] = new RegExp(src);
              } else if (src.nodeName) {
                dst[key] = src.cloneNode(true);
              } else if (isElement(src)) {
                dst[key] = src.clone();
              } else {
                if (!isObject(dst[key]))
                  dst[key] = isArray(src) ? [] : {};
                baseExtend(dst[key], [src], true);
              }
            } else {
              dst[key] = src;
            }
          }
        }
        setHashKey(dst, h);
        return dst;
      }
      function extend(dst) {
        return baseExtend(dst, slice.call(arguments, 1), false);
      }
      function merge(dst) {
        return baseExtend(dst, slice.call(arguments, 1), true);
      }
      function toInt(str) {
        return parseInt(str, 10);
      }
      function inherit(parent, extra) {
        return extend(Object.create(parent), extra);
      }
      function noop() {}
      noop.$inject = [];
      function identity($) {
        return $;
      }
      identity.$inject = [];
      function valueFn(value) {
        return function valueRef() {
          return value;
        };
      }
      function hasCustomToString(obj) {
        return isFunction(obj.toString) && obj.toString !== toString;
      }
      function isUndefined(value) {
        return typeof value === 'undefined';
      }
      function isDefined(value) {
        return typeof value !== 'undefined';
      }
      function isObject(value) {
        return value !== null && typeof value === 'object';
      }
      function isBlankObject(value) {
        return value !== null && typeof value === 'object' && !getPrototypeOf(value);
      }
      function isString(value) {
        return typeof value === 'string';
      }
      function isNumber(value) {
        return typeof value === 'number';
      }
      function isDate(value) {
        return toString.call(value) === '[object Date]';
      }
      var isArray = Array.isArray;
      function isFunction(value) {
        return typeof value === 'function';
      }
      function isRegExp(value) {
        return toString.call(value) === '[object RegExp]';
      }
      function isWindow(obj) {
        return obj && obj.window === obj;
      }
      function isScope(obj) {
        return obj && obj.$evalAsync && obj.$watch;
      }
      function isFile(obj) {
        return toString.call(obj) === '[object File]';
      }
      function isFormData(obj) {
        return toString.call(obj) === '[object FormData]';
      }
      function isBlob(obj) {
        return toString.call(obj) === '[object Blob]';
      }
      function isBoolean(value) {
        return typeof value === 'boolean';
      }
      function isPromiseLike(obj) {
        return obj && isFunction(obj.then);
      }
      var TYPED_ARRAY_REGEXP = /^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array\]$/;
      function isTypedArray(value) {
        return value && isNumber(value.length) && TYPED_ARRAY_REGEXP.test(toString.call(value));
      }
      function isArrayBuffer(obj) {
        return toString.call(obj) === '[object ArrayBuffer]';
      }
      var trim = function(value) {
        return isString(value) ? value.trim() : value;
      };
      var escapeForRegexp = function(s) {
        return s.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, '\\$1').replace(/\x08/g, '\\x08');
      };
      function isElement(node) {
        return !!(node && (node.nodeName || (node.prop && node.attr && node.find)));
      }
      function makeMap(str) {
        var obj = {},
            items = str.split(','),
            i;
        for (i = 0; i < items.length; i++) {
          obj[items[i]] = true;
        }
        return obj;
      }
      function nodeName_(element) {
        return lowercase(element.nodeName || (element[0] && element[0].nodeName));
      }
      function includes(array, obj) {
        return Array.prototype.indexOf.call(array, obj) != -1;
      }
      function arrayRemove(array, value) {
        var index = array.indexOf(value);
        if (index >= 0) {
          array.splice(index, 1);
        }
        return index;
      }
      function copy(source, destination) {
        var stackSource = [];
        var stackDest = [];
        if (destination) {
          if (isTypedArray(destination) || isArrayBuffer(destination)) {
            throw ngMinErr('cpta', "Can't copy! TypedArray destination cannot be mutated.");
          }
          if (source === destination) {
            throw ngMinErr('cpi', "Can't copy! Source and destination are identical.");
          }
          if (isArray(destination)) {
            destination.length = 0;
          } else {
            forEach(destination, function(value, key) {
              if (key !== '$$hashKey') {
                delete destination[key];
              }
            });
          }
          stackSource.push(source);
          stackDest.push(destination);
          return copyRecurse(source, destination);
        }
        return copyElement(source);
        function copyRecurse(source, destination) {
          var h = destination.$$hashKey;
          var key;
          if (isArray(source)) {
            for (var i = 0,
                ii = source.length; i < ii; i++) {
              destination.push(copyElement(source[i]));
            }
          } else if (isBlankObject(source)) {
            for (key in source) {
              destination[key] = copyElement(source[key]);
            }
          } else if (source && typeof source.hasOwnProperty === 'function') {
            for (key in source) {
              if (source.hasOwnProperty(key)) {
                destination[key] = copyElement(source[key]);
              }
            }
          } else {
            for (key in source) {
              if (hasOwnProperty.call(source, key)) {
                destination[key] = copyElement(source[key]);
              }
            }
          }
          setHashKey(destination, h);
          return destination;
        }
        function copyElement(source) {
          if (!isObject(source)) {
            return source;
          }
          var index = stackSource.indexOf(source);
          if (index !== -1) {
            return stackDest[index];
          }
          if (isWindow(source) || isScope(source)) {
            throw ngMinErr('cpws', "Can't copy! Making copies of Window or Scope instances is not supported.");
          }
          var needsRecurse = false;
          var destination = copyType(source);
          if (destination === undefined) {
            destination = isArray(source) ? [] : Object.create(getPrototypeOf(source));
            needsRecurse = true;
          }
          stackSource.push(source);
          stackDest.push(destination);
          return needsRecurse ? copyRecurse(source, destination) : destination;
        }
        function copyType(source) {
          switch (toString.call(source)) {
            case '[object Int8Array]':
            case '[object Int16Array]':
            case '[object Int32Array]':
            case '[object Float32Array]':
            case '[object Float64Array]':
            case '[object Uint8Array]':
            case '[object Uint8ClampedArray]':
            case '[object Uint16Array]':
            case '[object Uint32Array]':
              return new source.constructor(copyElement(source.buffer));
            case '[object ArrayBuffer]':
              if (!source.slice) {
                var copied = new ArrayBuffer(source.byteLength);
                new Uint8Array(copied).set(new Uint8Array(source));
                return copied;
              }
              return source.slice(0);
            case '[object Boolean]':
            case '[object Number]':
            case '[object String]':
            case '[object Date]':
              return new source.constructor(source.valueOf());
            case '[object RegExp]':
              var re = new RegExp(source.source, source.toString().match(/[^\/]*$/)[0]);
              re.lastIndex = source.lastIndex;
              return re;
            case '[object Blob]':
              return new source.constructor([source], {type: source.type});
          }
          if (isFunction(source.cloneNode)) {
            return source.cloneNode(true);
          }
        }
      }
      function equals(o1, o2) {
        if (o1 === o2)
          return true;
        if (o1 === null || o2 === null)
          return false;
        if (o1 !== o1 && o2 !== o2)
          return true;
        var t1 = typeof o1,
            t2 = typeof o2,
            length,
            key,
            keySet;
        if (t1 == t2 && t1 == 'object') {
          if (isArray(o1)) {
            if (!isArray(o2))
              return false;
            if ((length = o1.length) == o2.length) {
              for (key = 0; key < length; key++) {
                if (!equals(o1[key], o2[key]))
                  return false;
              }
              return true;
            }
          } else if (isDate(o1)) {
            if (!isDate(o2))
              return false;
            return equals(o1.getTime(), o2.getTime());
          } else if (isRegExp(o1)) {
            if (!isRegExp(o2))
              return false;
            return o1.toString() == o2.toString();
          } else {
            if (isScope(o1) || isScope(o2) || isWindow(o1) || isWindow(o2) || isArray(o2) || isDate(o2) || isRegExp(o2))
              return false;
            keySet = createMap();
            for (key in o1) {
              if (key.charAt(0) === '$' || isFunction(o1[key]))
                continue;
              if (!equals(o1[key], o2[key]))
                return false;
              keySet[key] = true;
            }
            for (key in o2) {
              if (!(key in keySet) && key.charAt(0) !== '$' && isDefined(o2[key]) && !isFunction(o2[key]))
                return false;
            }
            return true;
          }
        }
        return false;
      }
      var csp = function() {
        if (!isDefined(csp.rules)) {
          var ngCspElement = (window.document.querySelector('[ng-csp]') || window.document.querySelector('[data-ng-csp]'));
          if (ngCspElement) {
            var ngCspAttribute = ngCspElement.getAttribute('ng-csp') || ngCspElement.getAttribute('data-ng-csp');
            csp.rules = {
              noUnsafeEval: !ngCspAttribute || (ngCspAttribute.indexOf('no-unsafe-eval') !== -1),
              noInlineStyle: !ngCspAttribute || (ngCspAttribute.indexOf('no-inline-style') !== -1)
            };
          } else {
            csp.rules = {
              noUnsafeEval: noUnsafeEval(),
              noInlineStyle: false
            };
          }
        }
        return csp.rules;
        function noUnsafeEval() {
          try {
            new Function('');
            return false;
          } catch (e) {
            return true;
          }
        }
      };
      var jq = function() {
        if (isDefined(jq.name_))
          return jq.name_;
        var el;
        var i,
            ii = ngAttrPrefixes.length,
            prefix,
            name;
        for (i = 0; i < ii; ++i) {
          prefix = ngAttrPrefixes[i];
          if (el = window.document.querySelector('[' + prefix.replace(':', '\\:') + 'jq]')) {
            name = el.getAttribute(prefix + 'jq');
            break;
          }
        }
        return (jq.name_ = name);
      };
      function concat(array1, array2, index) {
        return array1.concat(slice.call(array2, index));
      }
      function sliceArgs(args, startIndex) {
        return slice.call(args, startIndex || 0);
      }
      function bind(self, fn) {
        var curryArgs = arguments.length > 2 ? sliceArgs(arguments, 2) : [];
        if (isFunction(fn) && !(fn instanceof RegExp)) {
          return curryArgs.length ? function() {
            return arguments.length ? fn.apply(self, concat(curryArgs, arguments, 0)) : fn.apply(self, curryArgs);
          } : function() {
            return arguments.length ? fn.apply(self, arguments) : fn.call(self);
          };
        } else {
          return fn;
        }
      }
      function toJsonReplacer(key, value) {
        var val = value;
        if (typeof key === 'string' && key.charAt(0) === '$' && key.charAt(1) === '$') {
          val = undefined;
        } else if (isWindow(value)) {
          val = '$WINDOW';
        } else if (value && window.document === value) {
          val = '$DOCUMENT';
        } else if (isScope(value)) {
          val = '$SCOPE';
        }
        return val;
      }
      function toJson(obj, pretty) {
        if (isUndefined(obj))
          return undefined;
        if (!isNumber(pretty)) {
          pretty = pretty ? 2 : null;
        }
        return JSON.stringify(obj, toJsonReplacer, pretty);
      }
      function fromJson(json) {
        return isString(json) ? JSON.parse(json) : json;
      }
      var ALL_COLONS = /:/g;
      function timezoneToOffset(timezone, fallback) {
        timezone = timezone.replace(ALL_COLONS, '');
        var requestedTimezoneOffset = Date.parse('Jan 01, 1970 00:00:00 ' + timezone) / 60000;
        return isNaN(requestedTimezoneOffset) ? fallback : requestedTimezoneOffset;
      }
      function addDateMinutes(date, minutes) {
        date = new Date(date.getTime());
        date.setMinutes(date.getMinutes() + minutes);
        return date;
      }
      function convertTimezoneToLocal(date, timezone, reverse) {
        reverse = reverse ? -1 : 1;
        var dateTimezoneOffset = date.getTimezoneOffset();
        var timezoneOffset = timezoneToOffset(timezone, dateTimezoneOffset);
        return addDateMinutes(date, reverse * (timezoneOffset - dateTimezoneOffset));
      }
      function startingTag(element) {
        element = jqLite(element).clone();
        try {
          element.empty();
        } catch (e) {}
        var elemHtml = jqLite('<div>').append(element).html();
        try {
          return element[0].nodeType === NODE_TYPE_TEXT ? lowercase(elemHtml) : elemHtml.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function(match, nodeName) {
            return '<' + lowercase(nodeName);
          });
        } catch (e) {
          return lowercase(elemHtml);
        }
      }
      function tryDecodeURIComponent(value) {
        try {
          return decodeURIComponent(value);
        } catch (e) {}
      }
      function parseKeyValue(keyValue) {
        var obj = {};
        forEach((keyValue || "").split('&'), function(keyValue) {
          var splitPoint,
              key,
              val;
          if (keyValue) {
            key = keyValue = keyValue.replace(/\+/g, '%20');
            splitPoint = keyValue.indexOf('=');
            if (splitPoint !== -1) {
              key = keyValue.substring(0, splitPoint);
              val = keyValue.substring(splitPoint + 1);
            }
            key = tryDecodeURIComponent(key);
            if (isDefined(key)) {
              val = isDefined(val) ? tryDecodeURIComponent(val) : true;
              if (!hasOwnProperty.call(obj, key)) {
                obj[key] = val;
              } else if (isArray(obj[key])) {
                obj[key].push(val);
              } else {
                obj[key] = [obj[key], val];
              }
            }
          }
        });
        return obj;
      }
      function toKeyValue(obj) {
        var parts = [];
        forEach(obj, function(value, key) {
          if (isArray(value)) {
            forEach(value, function(arrayValue) {
              parts.push(encodeUriQuery(key, true) + (arrayValue === true ? '' : '=' + encodeUriQuery(arrayValue, true)));
            });
          } else {
            parts.push(encodeUriQuery(key, true) + (value === true ? '' : '=' + encodeUriQuery(value, true)));
          }
        });
        return parts.length ? parts.join('&') : '';
      }
      function encodeUriSegment(val) {
        return encodeUriQuery(val, true).replace(/%26/gi, '&').replace(/%3D/gi, '=').replace(/%2B/gi, '+');
      }
      function encodeUriQuery(val, pctEncodeSpaces) {
        return encodeURIComponent(val).replace(/%40/gi, '@').replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%3B/gi, ';').replace(/%20/g, (pctEncodeSpaces ? '%20' : '+'));
      }
      var ngAttrPrefixes = ['ng-', 'data-ng-', 'ng:', 'x-ng-'];
      function getNgAttribute(element, ngAttr) {
        var attr,
            i,
            ii = ngAttrPrefixes.length;
        for (i = 0; i < ii; ++i) {
          attr = ngAttrPrefixes[i] + ngAttr;
          if (isString(attr = element.getAttribute(attr))) {
            return attr;
          }
        }
        return null;
      }
      function angularInit(element, bootstrap) {
        var appElement,
            module,
            config = {};
        forEach(ngAttrPrefixes, function(prefix) {
          var name = prefix + 'app';
          if (!appElement && element.hasAttribute && element.hasAttribute(name)) {
            appElement = element;
            module = element.getAttribute(name);
          }
        });
        forEach(ngAttrPrefixes, function(prefix) {
          var name = prefix + 'app';
          var candidate;
          if (!appElement && (candidate = element.querySelector('[' + name.replace(':', '\\:') + ']'))) {
            appElement = candidate;
            module = candidate.getAttribute(name);
          }
        });
        if (appElement) {
          config.strictDi = getNgAttribute(appElement, "strict-di") !== null;
          bootstrap(appElement, module ? [module] : [], config);
        }
      }
      function bootstrap(element, modules, config) {
        if (!isObject(config))
          config = {};
        var defaultConfig = {strictDi: false};
        config = extend(defaultConfig, config);
        var doBootstrap = function() {
          element = jqLite(element);
          if (element.injector()) {
            var tag = (element[0] === window.document) ? 'document' : startingTag(element);
            throw ngMinErr('btstrpd', "App already bootstrapped with this element '{0}'", tag.replace(/</, '&lt;').replace(/>/, '&gt;'));
          }
          modules = modules || [];
          modules.unshift(['$provide', function($provide) {
            $provide.value('$rootElement', element);
          }]);
          if (config.debugInfoEnabled) {
            modules.push(['$compileProvider', function($compileProvider) {
              $compileProvider.debugInfoEnabled(true);
            }]);
          }
          modules.unshift('ng');
          var injector = createInjector(modules, config.strictDi);
          injector.invoke(['$rootScope', '$rootElement', '$compile', '$injector', function bootstrapApply(scope, element, compile, injector) {
            scope.$apply(function() {
              element.data('$injector', injector);
              compile(element)(scope);
            });
          }]);
          return injector;
        };
        var NG_ENABLE_DEBUG_INFO = /^NG_ENABLE_DEBUG_INFO!/;
        var NG_DEFER_BOOTSTRAP = /^NG_DEFER_BOOTSTRAP!/;
        if (window && NG_ENABLE_DEBUG_INFO.test(window.name)) {
          config.debugInfoEnabled = true;
          window.name = window.name.replace(NG_ENABLE_DEBUG_INFO, '');
        }
        if (window && !NG_DEFER_BOOTSTRAP.test(window.name)) {
          return doBootstrap();
        }
        window.name = window.name.replace(NG_DEFER_BOOTSTRAP, '');
        angular.resumeBootstrap = function(extraModules) {
          forEach(extraModules, function(module) {
            modules.push(module);
          });
          return doBootstrap();
        };
        if (isFunction(angular.resumeDeferredBootstrap)) {
          angular.resumeDeferredBootstrap();
        }
      }
      function reloadWithDebugInfo() {
        window.name = 'NG_ENABLE_DEBUG_INFO!' + window.name;
        window.location.reload();
      }
      function getTestability(rootElement) {
        var injector = angular.element(rootElement).injector();
        if (!injector) {
          throw ngMinErr('test', 'no injector found for element argument to getTestability');
        }
        return injector.get('$$testability');
      }
      var SNAKE_CASE_REGEXP = /[A-Z]/g;
      function snake_case(name, separator) {
        separator = separator || '_';
        return name.replace(SNAKE_CASE_REGEXP, function(letter, pos) {
          return (pos ? separator : '') + letter.toLowerCase();
        });
      }
      var bindJQueryFired = false;
      function bindJQuery() {
        var originalCleanData;
        if (bindJQueryFired) {
          return;
        }
        var jqName = jq();
        jQuery = isUndefined(jqName) ? window.jQuery : !jqName ? undefined : window[jqName];
        if (jQuery && jQuery.fn.on) {
          jqLite = jQuery;
          extend(jQuery.fn, {
            scope: JQLitePrototype.scope,
            isolateScope: JQLitePrototype.isolateScope,
            controller: JQLitePrototype.controller,
            injector: JQLitePrototype.injector,
            inheritedData: JQLitePrototype.inheritedData
          });
          originalCleanData = jQuery.cleanData;
          jQuery.cleanData = function(elems) {
            var events;
            for (var i = 0,
                elem; (elem = elems[i]) != null; i++) {
              events = jQuery._data(elem, "events");
              if (events && events.$destroy) {
                jQuery(elem).triggerHandler('$destroy');
              }
            }
            originalCleanData(elems);
          };
        } else {
          jqLite = JQLite;
        }
        angular.element = jqLite;
        bindJQueryFired = true;
      }
      function assertArg(arg, name, reason) {
        if (!arg) {
          throw ngMinErr('areq', "Argument '{0}' is {1}", (name || '?'), (reason || "required"));
        }
        return arg;
      }
      function assertArgFn(arg, name, acceptArrayAnnotation) {
        if (acceptArrayAnnotation && isArray(arg)) {
          arg = arg[arg.length - 1];
        }
        assertArg(isFunction(arg), name, 'not a function, got ' + (arg && typeof arg === 'object' ? arg.constructor.name || 'Object' : typeof arg));
        return arg;
      }
      function assertNotHasOwnProperty(name, context) {
        if (name === 'hasOwnProperty') {
          throw ngMinErr('badname', "hasOwnProperty is not a valid {0} name", context);
        }
      }
      function getter(obj, path, bindFnToScope) {
        if (!path)
          return obj;
        var keys = path.split('.');
        var key;
        var lastInstance = obj;
        var len = keys.length;
        for (var i = 0; i < len; i++) {
          key = keys[i];
          if (obj) {
            obj = (lastInstance = obj)[key];
          }
        }
        if (!bindFnToScope && isFunction(obj)) {
          return bind(lastInstance, obj);
        }
        return obj;
      }
      function getBlockNodes(nodes) {
        var node = nodes[0];
        var endNode = nodes[nodes.length - 1];
        var blockNodes;
        for (var i = 1; node !== endNode && (node = node.nextSibling); i++) {
          if (blockNodes || nodes[i] !== node) {
            if (!blockNodes) {
              blockNodes = jqLite(slice.call(nodes, 0, i));
            }
            blockNodes.push(node);
          }
        }
        return blockNodes || nodes;
      }
      function createMap() {
        return Object.create(null);
      }
      var NODE_TYPE_ELEMENT = 1;
      var NODE_TYPE_ATTRIBUTE = 2;
      var NODE_TYPE_TEXT = 3;
      var NODE_TYPE_COMMENT = 8;
      var NODE_TYPE_DOCUMENT = 9;
      var NODE_TYPE_DOCUMENT_FRAGMENT = 11;
      function setupModuleLoader(window) {
        var $injectorMinErr = minErr('$injector');
        var ngMinErr = minErr('ng');
        function ensure(obj, name, factory) {
          return obj[name] || (obj[name] = factory());
        }
        var angular = ensure(window, 'angular', Object);
        angular.$$minErr = angular.$$minErr || minErr;
        return ensure(angular, 'module', function() {
          var modules = {};
          return function module(name, requires, configFn) {
            var assertNotHasOwnProperty = function(name, context) {
              if (name === 'hasOwnProperty') {
                throw ngMinErr('badname', 'hasOwnProperty is not a valid {0} name', context);
              }
            };
            assertNotHasOwnProperty(name, 'module');
            if (requires && modules.hasOwnProperty(name)) {
              modules[name] = null;
            }
            return ensure(modules, name, function() {
              if (!requires) {
                throw $injectorMinErr('nomod', "Module '{0}' is not available! You either misspelled " + "the module name or forgot to load it. If registering a module ensure that you " + "specify the dependencies as the second argument.", name);
              }
              var invokeQueue = [];
              var configBlocks = [];
              var runBlocks = [];
              var config = invokeLater('$injector', 'invoke', 'push', configBlocks);
              var moduleInstance = {
                _invokeQueue: invokeQueue,
                _configBlocks: configBlocks,
                _runBlocks: runBlocks,
                requires: requires,
                name: name,
                provider: invokeLaterAndSetModuleName('$provide', 'provider'),
                factory: invokeLaterAndSetModuleName('$provide', 'factory'),
                service: invokeLaterAndSetModuleName('$provide', 'service'),
                value: invokeLater('$provide', 'value'),
                constant: invokeLater('$provide', 'constant', 'unshift'),
                decorator: invokeLaterAndSetModuleName('$provide', 'decorator'),
                animation: invokeLaterAndSetModuleName('$animateProvider', 'register'),
                filter: invokeLaterAndSetModuleName('$filterProvider', 'register'),
                controller: invokeLaterAndSetModuleName('$controllerProvider', 'register'),
                directive: invokeLaterAndSetModuleName('$compileProvider', 'directive'),
                component: invokeLaterAndSetModuleName('$compileProvider', 'component'),
                config: config,
                run: function(block) {
                  runBlocks.push(block);
                  return this;
                }
              };
              if (configFn) {
                config(configFn);
              }
              return moduleInstance;
              function invokeLater(provider, method, insertMethod, queue) {
                if (!queue)
                  queue = invokeQueue;
                return function() {
                  queue[insertMethod || 'push']([provider, method, arguments]);
                  return moduleInstance;
                };
              }
              function invokeLaterAndSetModuleName(provider, method) {
                return function(recipeName, factoryFunction) {
                  if (factoryFunction && isFunction(factoryFunction))
                    factoryFunction.$$moduleName = name;
                  invokeQueue.push([provider, method, arguments]);
                  return moduleInstance;
                };
              }
            });
          };
        });
      }
      function shallowCopy(src, dst) {
        if (isArray(src)) {
          dst = dst || [];
          for (var i = 0,
              ii = src.length; i < ii; i++) {
            dst[i] = src[i];
          }
        } else if (isObject(src)) {
          dst = dst || {};
          for (var key in src) {
            if (!(key.charAt(0) === '$' && key.charAt(1) === '$')) {
              dst[key] = src[key];
            }
          }
        }
        return dst || src;
      }
      function serializeObject(obj) {
        var seen = [];
        return JSON.stringify(obj, function(key, val) {
          val = toJsonReplacer(key, val);
          if (isObject(val)) {
            if (seen.indexOf(val) >= 0)
              return '...';
            seen.push(val);
          }
          return val;
        });
      }
      function toDebugString(obj) {
        if (typeof obj === 'function') {
          return obj.toString().replace(/ \{[\s\S]*$/, '');
        } else if (isUndefined(obj)) {
          return 'undefined';
        } else if (typeof obj !== 'string') {
          return serializeObject(obj);
        }
        return obj;
      }
      var version = {
        full: '1.5.7',
        major: 1,
        minor: 5,
        dot: 7,
        codeName: 'hexagonal-circumvolution'
      };
      function publishExternalAPI(angular) {
        extend(angular, {
          'bootstrap': bootstrap,
          'copy': copy,
          'extend': extend,
          'merge': merge,
          'equals': equals,
          'element': jqLite,
          'forEach': forEach,
          'injector': createInjector,
          'noop': noop,
          'bind': bind,
          'toJson': toJson,
          'fromJson': fromJson,
          'identity': identity,
          'isUndefined': isUndefined,
          'isDefined': isDefined,
          'isString': isString,
          'isFunction': isFunction,
          'isObject': isObject,
          'isNumber': isNumber,
          'isElement': isElement,
          'isArray': isArray,
          'version': version,
          'isDate': isDate,
          'lowercase': lowercase,
          'uppercase': uppercase,
          'callbacks': {counter: 0},
          'getTestability': getTestability,
          '$$minErr': minErr,
          '$$csp': csp,
          'reloadWithDebugInfo': reloadWithDebugInfo
        });
        angularModule = setupModuleLoader(window);
        angularModule('ng', ['ngLocale'], ['$provide', function ngModule($provide) {
          $provide.provider({$$sanitizeUri: $$SanitizeUriProvider});
          $provide.provider('$compile', $CompileProvider).directive({
            a: htmlAnchorDirective,
            input: inputDirective,
            textarea: inputDirective,
            form: formDirective,
            script: scriptDirective,
            select: selectDirective,
            style: styleDirective,
            option: optionDirective,
            ngBind: ngBindDirective,
            ngBindHtml: ngBindHtmlDirective,
            ngBindTemplate: ngBindTemplateDirective,
            ngClass: ngClassDirective,
            ngClassEven: ngClassEvenDirective,
            ngClassOdd: ngClassOddDirective,
            ngCloak: ngCloakDirective,
            ngController: ngControllerDirective,
            ngForm: ngFormDirective,
            ngHide: ngHideDirective,
            ngIf: ngIfDirective,
            ngInclude: ngIncludeDirective,
            ngInit: ngInitDirective,
            ngNonBindable: ngNonBindableDirective,
            ngPluralize: ngPluralizeDirective,
            ngRepeat: ngRepeatDirective,
            ngShow: ngShowDirective,
            ngStyle: ngStyleDirective,
            ngSwitch: ngSwitchDirective,
            ngSwitchWhen: ngSwitchWhenDirective,
            ngSwitchDefault: ngSwitchDefaultDirective,
            ngOptions: ngOptionsDirective,
            ngTransclude: ngTranscludeDirective,
            ngModel: ngModelDirective,
            ngList: ngListDirective,
            ngChange: ngChangeDirective,
            pattern: patternDirective,
            ngPattern: patternDirective,
            required: requiredDirective,
            ngRequired: requiredDirective,
            minlength: minlengthDirective,
            ngMinlength: minlengthDirective,
            maxlength: maxlengthDirective,
            ngMaxlength: maxlengthDirective,
            ngValue: ngValueDirective,
            ngModelOptions: ngModelOptionsDirective
          }).directive({ngInclude: ngIncludeFillContentDirective}).directive(ngAttributeAliasDirectives).directive(ngEventDirectives);
          $provide.provider({
            $anchorScroll: $AnchorScrollProvider,
            $animate: $AnimateProvider,
            $animateCss: $CoreAnimateCssProvider,
            $$animateJs: $$CoreAnimateJsProvider,
            $$animateQueue: $$CoreAnimateQueueProvider,
            $$AnimateRunner: $$AnimateRunnerFactoryProvider,
            $$animateAsyncRun: $$AnimateAsyncRunFactoryProvider,
            $browser: $BrowserProvider,
            $cacheFactory: $CacheFactoryProvider,
            $controller: $ControllerProvider,
            $document: $DocumentProvider,
            $exceptionHandler: $ExceptionHandlerProvider,
            $filter: $FilterProvider,
            $$forceReflow: $$ForceReflowProvider,
            $interpolate: $InterpolateProvider,
            $interval: $IntervalProvider,
            $http: $HttpProvider,
            $httpParamSerializer: $HttpParamSerializerProvider,
            $httpParamSerializerJQLike: $HttpParamSerializerJQLikeProvider,
            $httpBackend: $HttpBackendProvider,
            $xhrFactory: $xhrFactoryProvider,
            $location: $LocationProvider,
            $log: $LogProvider,
            $parse: $ParseProvider,
            $rootScope: $RootScopeProvider,
            $q: $QProvider,
            $$q: $$QProvider,
            $sce: $SceProvider,
            $sceDelegate: $SceDelegateProvider,
            $sniffer: $SnifferProvider,
            $templateCache: $TemplateCacheProvider,
            $templateRequest: $TemplateRequestProvider,
            $$testability: $$TestabilityProvider,
            $timeout: $TimeoutProvider,
            $window: $WindowProvider,
            $$rAF: $$RAFProvider,
            $$jqLite: $$jqLiteProvider,
            $$HashMap: $$HashMapProvider,
            $$cookieReader: $$CookieReaderProvider
          });
        }]);
      }
      JQLite.expando = 'ng339';
      var jqCache = JQLite.cache = {},
          jqId = 1,
          addEventListenerFn = function(element, type, fn) {
            element.addEventListener(type, fn, false);
          },
          removeEventListenerFn = function(element, type, fn) {
            element.removeEventListener(type, fn, false);
          };
      JQLite._data = function(node) {
        return this.cache[node[this.expando]] || {};
      };
      function jqNextId() {
        return ++jqId;
      }
      var SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g;
      var MOZ_HACK_REGEXP = /^moz([A-Z])/;
      var MOUSE_EVENT_MAP = {
        mouseleave: "mouseout",
        mouseenter: "mouseover"
      };
      var jqLiteMinErr = minErr('jqLite');
      function camelCase(name) {
        return name.replace(SPECIAL_CHARS_REGEXP, function(_, separator, letter, offset) {
          return offset ? letter.toUpperCase() : letter;
        }).replace(MOZ_HACK_REGEXP, 'Moz$1');
      }
      var SINGLE_TAG_REGEXP = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/;
      var HTML_REGEXP = /<|&#?\w+;/;
      var TAG_NAME_REGEXP = /<([\w:-]+)/;
      var XHTML_TAG_REGEXP = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi;
      var wrapMap = {
        'option': [1, '<select multiple="multiple">', '</select>'],
        'thead': [1, '<table>', '</table>'],
        'col': [2, '<table><colgroup>', '</colgroup></table>'],
        'tr': [2, '<table><tbody>', '</tbody></table>'],
        'td': [3, '<table><tbody><tr>', '</tr></tbody></table>'],
        '_default': [0, "", ""]
      };
      wrapMap.optgroup = wrapMap.option;
      wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
      wrapMap.th = wrapMap.td;
      function jqLiteIsTextNode(html) {
        return !HTML_REGEXP.test(html);
      }
      function jqLiteAcceptsData(node) {
        var nodeType = node.nodeType;
        return nodeType === NODE_TYPE_ELEMENT || !nodeType || nodeType === NODE_TYPE_DOCUMENT;
      }
      function jqLiteHasData(node) {
        for (var key in jqCache[node.ng339]) {
          return true;
        }
        return false;
      }
      function jqLiteCleanData(nodes) {
        for (var i = 0,
            ii = nodes.length; i < ii; i++) {
          jqLiteRemoveData(nodes[i]);
        }
      }
      function jqLiteBuildFragment(html, context) {
        var tmp,
            tag,
            wrap,
            fragment = context.createDocumentFragment(),
            nodes = [],
            i;
        if (jqLiteIsTextNode(html)) {
          nodes.push(context.createTextNode(html));
        } else {
          tmp = tmp || fragment.appendChild(context.createElement("div"));
          tag = (TAG_NAME_REGEXP.exec(html) || ["", ""])[1].toLowerCase();
          wrap = wrapMap[tag] || wrapMap._default;
          tmp.innerHTML = wrap[1] + html.replace(XHTML_TAG_REGEXP, "<$1></$2>") + wrap[2];
          i = wrap[0];
          while (i--) {
            tmp = tmp.lastChild;
          }
          nodes = concat(nodes, tmp.childNodes);
          tmp = fragment.firstChild;
          tmp.textContent = "";
        }
        fragment.textContent = "";
        fragment.innerHTML = "";
        forEach(nodes, function(node) {
          fragment.appendChild(node);
        });
        return fragment;
      }
      function jqLiteParseHTML(html, context) {
        context = context || window.document;
        var parsed;
        if ((parsed = SINGLE_TAG_REGEXP.exec(html))) {
          return [context.createElement(parsed[1])];
        }
        if ((parsed = jqLiteBuildFragment(html, context))) {
          return parsed.childNodes;
        }
        return [];
      }
      function jqLiteWrapNode(node, wrapper) {
        var parent = node.parentNode;
        if (parent) {
          parent.replaceChild(wrapper, node);
        }
        wrapper.appendChild(node);
      }
      var jqLiteContains = window.Node.prototype.contains || function(arg) {
        return !!(this.compareDocumentPosition(arg) & 16);
      };
      function JQLite(element) {
        if (element instanceof JQLite) {
          return element;
        }
        var argIsString;
        if (isString(element)) {
          element = trim(element);
          argIsString = true;
        }
        if (!(this instanceof JQLite)) {
          if (argIsString && element.charAt(0) != '<') {
            throw jqLiteMinErr('nosel', 'Looking up elements via selectors is not supported by jqLite! See: http://docs.angularjs.org/api/angular.element');
          }
          return new JQLite(element);
        }
        if (argIsString) {
          jqLiteAddNodes(this, jqLiteParseHTML(element));
        } else {
          jqLiteAddNodes(this, element);
        }
      }
      function jqLiteClone(element) {
        return element.cloneNode(true);
      }
      function jqLiteDealoc(element, onlyDescendants) {
        if (!onlyDescendants)
          jqLiteRemoveData(element);
        if (element.querySelectorAll) {
          var descendants = element.querySelectorAll('*');
          for (var i = 0,
              l = descendants.length; i < l; i++) {
            jqLiteRemoveData(descendants[i]);
          }
        }
      }
      function jqLiteOff(element, type, fn, unsupported) {
        if (isDefined(unsupported))
          throw jqLiteMinErr('offargs', 'jqLite#off() does not support the `selector` argument');
        var expandoStore = jqLiteExpandoStore(element);
        var events = expandoStore && expandoStore.events;
        var handle = expandoStore && expandoStore.handle;
        if (!handle)
          return;
        if (!type) {
          for (type in events) {
            if (type !== '$destroy') {
              removeEventListenerFn(element, type, handle);
            }
            delete events[type];
          }
        } else {
          var removeHandler = function(type) {
            var listenerFns = events[type];
            if (isDefined(fn)) {
              arrayRemove(listenerFns || [], fn);
            }
            if (!(isDefined(fn) && listenerFns && listenerFns.length > 0)) {
              removeEventListenerFn(element, type, handle);
              delete events[type];
            }
          };
          forEach(type.split(' '), function(type) {
            removeHandler(type);
            if (MOUSE_EVENT_MAP[type]) {
              removeHandler(MOUSE_EVENT_MAP[type]);
            }
          });
        }
      }
      function jqLiteRemoveData(element, name) {
        var expandoId = element.ng339;
        var expandoStore = expandoId && jqCache[expandoId];
        if (expandoStore) {
          if (name) {
            delete expandoStore.data[name];
            return;
          }
          if (expandoStore.handle) {
            if (expandoStore.events.$destroy) {
              expandoStore.handle({}, '$destroy');
            }
            jqLiteOff(element);
          }
          delete jqCache[expandoId];
          element.ng339 = undefined;
        }
      }
      function jqLiteExpandoStore(element, createIfNecessary) {
        var expandoId = element.ng339,
            expandoStore = expandoId && jqCache[expandoId];
        if (createIfNecessary && !expandoStore) {
          element.ng339 = expandoId = jqNextId();
          expandoStore = jqCache[expandoId] = {
            events: {},
            data: {},
            handle: undefined
          };
        }
        return expandoStore;
      }
      function jqLiteData(element, key, value) {
        if (jqLiteAcceptsData(element)) {
          var isSimpleSetter = isDefined(value);
          var isSimpleGetter = !isSimpleSetter && key && !isObject(key);
          var massGetter = !key;
          var expandoStore = jqLiteExpandoStore(element, !isSimpleGetter);
          var data = expandoStore && expandoStore.data;
          if (isSimpleSetter) {
            data[key] = value;
          } else {
            if (massGetter) {
              return data;
            } else {
              if (isSimpleGetter) {
                return data && data[key];
              } else {
                extend(data, key);
              }
            }
          }
        }
      }
      function jqLiteHasClass(element, selector) {
        if (!element.getAttribute)
          return false;
        return ((" " + (element.getAttribute('class') || '') + " ").replace(/[\n\t]/g, " ").indexOf(" " + selector + " ") > -1);
      }
      function jqLiteRemoveClass(element, cssClasses) {
        if (cssClasses && element.setAttribute) {
          forEach(cssClasses.split(' '), function(cssClass) {
            element.setAttribute('class', trim((" " + (element.getAttribute('class') || '') + " ").replace(/[\n\t]/g, " ").replace(" " + trim(cssClass) + " ", " ")));
          });
        }
      }
      function jqLiteAddClass(element, cssClasses) {
        if (cssClasses && element.setAttribute) {
          var existingClasses = (' ' + (element.getAttribute('class') || '') + ' ').replace(/[\n\t]/g, " ");
          forEach(cssClasses.split(' '), function(cssClass) {
            cssClass = trim(cssClass);
            if (existingClasses.indexOf(' ' + cssClass + ' ') === -1) {
              existingClasses += cssClass + ' ';
            }
          });
          element.setAttribute('class', trim(existingClasses));
        }
      }
      function jqLiteAddNodes(root, elements) {
        if (elements) {
          if (elements.nodeType) {
            root[root.length++] = elements;
          } else {
            var length = elements.length;
            if (typeof length === 'number' && elements.window !== elements) {
              if (length) {
                for (var i = 0; i < length; i++) {
                  root[root.length++] = elements[i];
                }
              }
            } else {
              root[root.length++] = elements;
            }
          }
        }
      }
      function jqLiteController(element, name) {
        return jqLiteInheritedData(element, '$' + (name || 'ngController') + 'Controller');
      }
      function jqLiteInheritedData(element, name, value) {
        if (element.nodeType == NODE_TYPE_DOCUMENT) {
          element = element.documentElement;
        }
        var names = isArray(name) ? name : [name];
        while (element) {
          for (var i = 0,
              ii = names.length; i < ii; i++) {
            if (isDefined(value = jqLite.data(element, names[i])))
              return value;
          }
          element = element.parentNode || (element.nodeType === NODE_TYPE_DOCUMENT_FRAGMENT && element.host);
        }
      }
      function jqLiteEmpty(element) {
        jqLiteDealoc(element, true);
        while (element.firstChild) {
          element.removeChild(element.firstChild);
        }
      }
      function jqLiteRemove(element, keepData) {
        if (!keepData)
          jqLiteDealoc(element);
        var parent = element.parentNode;
        if (parent)
          parent.removeChild(element);
      }
      function jqLiteDocumentLoaded(action, win) {
        win = win || window;
        if (win.document.readyState === 'complete') {
          win.setTimeout(action);
        } else {
          jqLite(win).on('load', action);
        }
      }
      var JQLitePrototype = JQLite.prototype = {
        ready: function(fn) {
          var fired = false;
          function trigger() {
            if (fired)
              return;
            fired = true;
            fn();
          }
          if (window.document.readyState === 'complete') {
            window.setTimeout(trigger);
          } else {
            this.on('DOMContentLoaded', trigger);
            JQLite(window).on('load', trigger);
          }
        },
        toString: function() {
          var value = [];
          forEach(this, function(e) {
            value.push('' + e);
          });
          return '[' + value.join(', ') + ']';
        },
        eq: function(index) {
          return (index >= 0) ? jqLite(this[index]) : jqLite(this[this.length + index]);
        },
        length: 0,
        push: push,
        sort: [].sort,
        splice: [].splice
      };
      var BOOLEAN_ATTR = {};
      forEach('multiple,selected,checked,disabled,readOnly,required,open'.split(','), function(value) {
        BOOLEAN_ATTR[lowercase(value)] = value;
      });
      var BOOLEAN_ELEMENTS = {};
      forEach('input,select,option,textarea,button,form,details'.split(','), function(value) {
        BOOLEAN_ELEMENTS[value] = true;
      });
      var ALIASED_ATTR = {
        'ngMinlength': 'minlength',
        'ngMaxlength': 'maxlength',
        'ngMin': 'min',
        'ngMax': 'max',
        'ngPattern': 'pattern'
      };
      function getBooleanAttrName(element, name) {
        var booleanAttr = BOOLEAN_ATTR[name.toLowerCase()];
        return booleanAttr && BOOLEAN_ELEMENTS[nodeName_(element)] && booleanAttr;
      }
      function getAliasedAttrName(name) {
        return ALIASED_ATTR[name];
      }
      forEach({
        data: jqLiteData,
        removeData: jqLiteRemoveData,
        hasData: jqLiteHasData,
        cleanData: jqLiteCleanData
      }, function(fn, name) {
        JQLite[name] = fn;
      });
      forEach({
        data: jqLiteData,
        inheritedData: jqLiteInheritedData,
        scope: function(element) {
          return jqLite.data(element, '$scope') || jqLiteInheritedData(element.parentNode || element, ['$isolateScope', '$scope']);
        },
        isolateScope: function(element) {
          return jqLite.data(element, '$isolateScope') || jqLite.data(element, '$isolateScopeNoTemplate');
        },
        controller: jqLiteController,
        injector: function(element) {
          return jqLiteInheritedData(element, '$injector');
        },
        removeAttr: function(element, name) {
          element.removeAttribute(name);
        },
        hasClass: jqLiteHasClass,
        css: function(element, name, value) {
          name = camelCase(name);
          if (isDefined(value)) {
            element.style[name] = value;
          } else {
            return element.style[name];
          }
        },
        attr: function(element, name, value) {
          var nodeType = element.nodeType;
          if (nodeType === NODE_TYPE_TEXT || nodeType === NODE_TYPE_ATTRIBUTE || nodeType === NODE_TYPE_COMMENT) {
            return;
          }
          var lowercasedName = lowercase(name);
          if (BOOLEAN_ATTR[lowercasedName]) {
            if (isDefined(value)) {
              if (!!value) {
                element[name] = true;
                element.setAttribute(name, lowercasedName);
              } else {
                element[name] = false;
                element.removeAttribute(lowercasedName);
              }
            } else {
              return (element[name] || (element.attributes.getNamedItem(name) || noop).specified) ? lowercasedName : undefined;
            }
          } else if (isDefined(value)) {
            element.setAttribute(name, value);
          } else if (element.getAttribute) {
            var ret = element.getAttribute(name, 2);
            return ret === null ? undefined : ret;
          }
        },
        prop: function(element, name, value) {
          if (isDefined(value)) {
            element[name] = value;
          } else {
            return element[name];
          }
        },
        text: (function() {
          getText.$dv = '';
          return getText;
          function getText(element, value) {
            if (isUndefined(value)) {
              var nodeType = element.nodeType;
              return (nodeType === NODE_TYPE_ELEMENT || nodeType === NODE_TYPE_TEXT) ? element.textContent : '';
            }
            element.textContent = value;
          }
        })(),
        val: function(element, value) {
          if (isUndefined(value)) {
            if (element.multiple && nodeName_(element) === 'select') {
              var result = [];
              forEach(element.options, function(option) {
                if (option.selected) {
                  result.push(option.value || option.text);
                }
              });
              return result.length === 0 ? null : result;
            }
            return element.value;
          }
          element.value = value;
        },
        html: function(element, value) {
          if (isUndefined(value)) {
            return element.innerHTML;
          }
          jqLiteDealoc(element, true);
          element.innerHTML = value;
        },
        empty: jqLiteEmpty
      }, function(fn, name) {
        JQLite.prototype[name] = function(arg1, arg2) {
          var i,
              key;
          var nodeCount = this.length;
          if (fn !== jqLiteEmpty && (isUndefined((fn.length == 2 && (fn !== jqLiteHasClass && fn !== jqLiteController)) ? arg1 : arg2))) {
            if (isObject(arg1)) {
              for (i = 0; i < nodeCount; i++) {
                if (fn === jqLiteData) {
                  fn(this[i], arg1);
                } else {
                  for (key in arg1) {
                    fn(this[i], key, arg1[key]);
                  }
                }
              }
              return this;
            } else {
              var value = fn.$dv;
              var jj = (isUndefined(value)) ? Math.min(nodeCount, 1) : nodeCount;
              for (var j = 0; j < jj; j++) {
                var nodeValue = fn(this[j], arg1, arg2);
                value = value ? value + nodeValue : nodeValue;
              }
              return value;
            }
          } else {
            for (i = 0; i < nodeCount; i++) {
              fn(this[i], arg1, arg2);
            }
            return this;
          }
        };
      });
      function createEventHandler(element, events) {
        var eventHandler = function(event, type) {
          event.isDefaultPrevented = function() {
            return event.defaultPrevented;
          };
          var eventFns = events[type || event.type];
          var eventFnsLength = eventFns ? eventFns.length : 0;
          if (!eventFnsLength)
            return;
          if (isUndefined(event.immediatePropagationStopped)) {
            var originalStopImmediatePropagation = event.stopImmediatePropagation;
            event.stopImmediatePropagation = function() {
              event.immediatePropagationStopped = true;
              if (event.stopPropagation) {
                event.stopPropagation();
              }
              if (originalStopImmediatePropagation) {
                originalStopImmediatePropagation.call(event);
              }
            };
          }
          event.isImmediatePropagationStopped = function() {
            return event.immediatePropagationStopped === true;
          };
          var handlerWrapper = eventFns.specialHandlerWrapper || defaultHandlerWrapper;
          if ((eventFnsLength > 1)) {
            eventFns = shallowCopy(eventFns);
          }
          for (var i = 0; i < eventFnsLength; i++) {
            if (!event.isImmediatePropagationStopped()) {
              handlerWrapper(element, event, eventFns[i]);
            }
          }
        };
        eventHandler.elem = element;
        return eventHandler;
      }
      function defaultHandlerWrapper(element, event, handler) {
        handler.call(element, event);
      }
      function specialMouseHandlerWrapper(target, event, handler) {
        var related = event.relatedTarget;
        if (!related || (related !== target && !jqLiteContains.call(target, related))) {
          handler.call(target, event);
        }
      }
      forEach({
        removeData: jqLiteRemoveData,
        on: function jqLiteOn(element, type, fn, unsupported) {
          if (isDefined(unsupported))
            throw jqLiteMinErr('onargs', 'jqLite#on() does not support the `selector` or `eventData` parameters');
          if (!jqLiteAcceptsData(element)) {
            return;
          }
          var expandoStore = jqLiteExpandoStore(element, true);
          var events = expandoStore.events;
          var handle = expandoStore.handle;
          if (!handle) {
            handle = expandoStore.handle = createEventHandler(element, events);
          }
          var types = type.indexOf(' ') >= 0 ? type.split(' ') : [type];
          var i = types.length;
          var addHandler = function(type, specialHandlerWrapper, noEventListener) {
            var eventFns = events[type];
            if (!eventFns) {
              eventFns = events[type] = [];
              eventFns.specialHandlerWrapper = specialHandlerWrapper;
              if (type !== '$destroy' && !noEventListener) {
                addEventListenerFn(element, type, handle);
              }
            }
            eventFns.push(fn);
          };
          while (i--) {
            type = types[i];
            if (MOUSE_EVENT_MAP[type]) {
              addHandler(MOUSE_EVENT_MAP[type], specialMouseHandlerWrapper);
              addHandler(type, undefined, true);
            } else {
              addHandler(type);
            }
          }
        },
        off: jqLiteOff,
        one: function(element, type, fn) {
          element = jqLite(element);
          element.on(type, function onFn() {
            element.off(type, fn);
            element.off(type, onFn);
          });
          element.on(type, fn);
        },
        replaceWith: function(element, replaceNode) {
          var index,
              parent = element.parentNode;
          jqLiteDealoc(element);
          forEach(new JQLite(replaceNode), function(node) {
            if (index) {
              parent.insertBefore(node, index.nextSibling);
            } else {
              parent.replaceChild(node, element);
            }
            index = node;
          });
        },
        children: function(element) {
          var children = [];
          forEach(element.childNodes, function(element) {
            if (element.nodeType === NODE_TYPE_ELEMENT) {
              children.push(element);
            }
          });
          return children;
        },
        contents: function(element) {
          return element.contentDocument || element.childNodes || [];
        },
        append: function(element, node) {
          var nodeType = element.nodeType;
          if (nodeType !== NODE_TYPE_ELEMENT && nodeType !== NODE_TYPE_DOCUMENT_FRAGMENT)
            return;
          node = new JQLite(node);
          for (var i = 0,
              ii = node.length; i < ii; i++) {
            var child = node[i];
            element.appendChild(child);
          }
        },
        prepend: function(element, node) {
          if (element.nodeType === NODE_TYPE_ELEMENT) {
            var index = element.firstChild;
            forEach(new JQLite(node), function(child) {
              element.insertBefore(child, index);
            });
          }
        },
        wrap: function(element, wrapNode) {
          jqLiteWrapNode(element, jqLite(wrapNode).eq(0).clone()[0]);
        },
        remove: jqLiteRemove,
        detach: function(element) {
          jqLiteRemove(element, true);
        },
        after: function(element, newElement) {
          var index = element,
              parent = element.parentNode;
          newElement = new JQLite(newElement);
          for (var i = 0,
              ii = newElement.length; i < ii; i++) {
            var node = newElement[i];
            parent.insertBefore(node, index.nextSibling);
            index = node;
          }
        },
        addClass: jqLiteAddClass,
        removeClass: jqLiteRemoveClass,
        toggleClass: function(element, selector, condition) {
          if (selector) {
            forEach(selector.split(' '), function(className) {
              var classCondition = condition;
              if (isUndefined(classCondition)) {
                classCondition = !jqLiteHasClass(element, className);
              }
              (classCondition ? jqLiteAddClass : jqLiteRemoveClass)(element, className);
            });
          }
        },
        parent: function(element) {
          var parent = element.parentNode;
          return parent && parent.nodeType !== NODE_TYPE_DOCUMENT_FRAGMENT ? parent : null;
        },
        next: function(element) {
          return element.nextElementSibling;
        },
        find: function(element, selector) {
          if (element.getElementsByTagName) {
            return element.getElementsByTagName(selector);
          } else {
            return [];
          }
        },
        clone: jqLiteClone,
        triggerHandler: function(element, event, extraParameters) {
          var dummyEvent,
              eventFnsCopy,
              handlerArgs;
          var eventName = event.type || event;
          var expandoStore = jqLiteExpandoStore(element);
          var events = expandoStore && expandoStore.events;
          var eventFns = events && events[eventName];
          if (eventFns) {
            dummyEvent = {
              preventDefault: function() {
                this.defaultPrevented = true;
              },
              isDefaultPrevented: function() {
                return this.defaultPrevented === true;
              },
              stopImmediatePropagation: function() {
                this.immediatePropagationStopped = true;
              },
              isImmediatePropagationStopped: function() {
                return this.immediatePropagationStopped === true;
              },
              stopPropagation: noop,
              type: eventName,
              target: element
            };
            if (event.type) {
              dummyEvent = extend(dummyEvent, event);
            }
            eventFnsCopy = shallowCopy(eventFns);
            handlerArgs = extraParameters ? [dummyEvent].concat(extraParameters) : [dummyEvent];
            forEach(eventFnsCopy, function(fn) {
              if (!dummyEvent.isImmediatePropagationStopped()) {
                fn.apply(element, handlerArgs);
              }
            });
          }
        }
      }, function(fn, name) {
        JQLite.prototype[name] = function(arg1, arg2, arg3) {
          var value;
          for (var i = 0,
              ii = this.length; i < ii; i++) {
            if (isUndefined(value)) {
              value = fn(this[i], arg1, arg2, arg3);
              if (isDefined(value)) {
                value = jqLite(value);
              }
            } else {
              jqLiteAddNodes(value, fn(this[i], arg1, arg2, arg3));
            }
          }
          return isDefined(value) ? value : this;
        };
        JQLite.prototype.bind = JQLite.prototype.on;
        JQLite.prototype.unbind = JQLite.prototype.off;
      });
      function $$jqLiteProvider() {
        this.$get = function $$jqLite() {
          return extend(JQLite, {
            hasClass: function(node, classes) {
              if (node.attr)
                node = node[0];
              return jqLiteHasClass(node, classes);
            },
            addClass: function(node, classes) {
              if (node.attr)
                node = node[0];
              return jqLiteAddClass(node, classes);
            },
            removeClass: function(node, classes) {
              if (node.attr)
                node = node[0];
              return jqLiteRemoveClass(node, classes);
            }
          });
        };
      }
      function hashKey(obj, nextUidFn) {
        var key = obj && obj.$$hashKey;
        if (key) {
          if (typeof key === 'function') {
            key = obj.$$hashKey();
          }
          return key;
        }
        var objType = typeof obj;
        if (objType == 'function' || (objType == 'object' && obj !== null)) {
          key = obj.$$hashKey = objType + ':' + (nextUidFn || nextUid)();
        } else {
          key = objType + ':' + obj;
        }
        return key;
      }
      function HashMap(array, isolatedUid) {
        if (isolatedUid) {
          var uid = 0;
          this.nextUid = function() {
            return ++uid;
          };
        }
        forEach(array, this.put, this);
      }
      HashMap.prototype = {
        put: function(key, value) {
          this[hashKey(key, this.nextUid)] = value;
        },
        get: function(key) {
          return this[hashKey(key, this.nextUid)];
        },
        remove: function(key) {
          var value = this[key = hashKey(key, this.nextUid)];
          delete this[key];
          return value;
        }
      };
      var $$HashMapProvider = [function() {
        this.$get = [function() {
          return HashMap;
        }];
      }];
      var ARROW_ARG = /^([^\(]+?)=>/;
      var FN_ARGS = /^[^\(]*\(\s*([^\)]*)\)/m;
      var FN_ARG_SPLIT = /,/;
      var FN_ARG = /^\s*(_?)(\S+?)\1\s*$/;
      var STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;
      var $injectorMinErr = minErr('$injector');
      function stringifyFn(fn) {
        return Function.prototype.toString.call(fn) + ' ';
      }
      function extractArgs(fn) {
        var fnText = stringifyFn(fn).replace(STRIP_COMMENTS, ''),
            args = fnText.match(ARROW_ARG) || fnText.match(FN_ARGS);
        return args;
      }
      function anonFn(fn) {
        var args = extractArgs(fn);
        if (args) {
          return 'function(' + (args[1] || '').replace(/[\s\r\n]+/, ' ') + ')';
        }
        return 'fn';
      }
      function annotate(fn, strictDi, name) {
        var $inject,
            argDecl,
            last;
        if (typeof fn === 'function') {
          if (!($inject = fn.$inject)) {
            $inject = [];
            if (fn.length) {
              if (strictDi) {
                if (!isString(name) || !name) {
                  name = fn.name || anonFn(fn);
                }
                throw $injectorMinErr('strictdi', '{0} is not using explicit annotation and cannot be invoked in strict mode', name);
              }
              argDecl = extractArgs(fn);
              forEach(argDecl[1].split(FN_ARG_SPLIT), function(arg) {
                arg.replace(FN_ARG, function(all, underscore, name) {
                  $inject.push(name);
                });
              });
            }
            fn.$inject = $inject;
          }
        } else if (isArray(fn)) {
          last = fn.length - 1;
          assertArgFn(fn[last], 'fn');
          $inject = fn.slice(0, last);
        } else {
          assertArgFn(fn, 'fn', true);
        }
        return $inject;
      }
      function createInjector(modulesToLoad, strictDi) {
        strictDi = (strictDi === true);
        var INSTANTIATING = {},
            providerSuffix = 'Provider',
            path = [],
            loadedModules = new HashMap([], true),
            providerCache = {$provide: {
                provider: supportObject(provider),
                factory: supportObject(factory),
                service: supportObject(service),
                value: supportObject(value),
                constant: supportObject(constant),
                decorator: decorator
              }},
            providerInjector = (providerCache.$injector = createInternalInjector(providerCache, function(serviceName, caller) {
              if (angular.isString(caller)) {
                path.push(caller);
              }
              throw $injectorMinErr('unpr', "Unknown provider: {0}", path.join(' <- '));
            })),
            instanceCache = {},
            protoInstanceInjector = createInternalInjector(instanceCache, function(serviceName, caller) {
              var provider = providerInjector.get(serviceName + providerSuffix, caller);
              return instanceInjector.invoke(provider.$get, provider, undefined, serviceName);
            }),
            instanceInjector = protoInstanceInjector;
        providerCache['$injector' + providerSuffix] = {$get: valueFn(protoInstanceInjector)};
        var runBlocks = loadModules(modulesToLoad);
        instanceInjector = protoInstanceInjector.get('$injector');
        instanceInjector.strictDi = strictDi;
        forEach(runBlocks, function(fn) {
          if (fn)
            instanceInjector.invoke(fn);
        });
        return instanceInjector;
        function supportObject(delegate) {
          return function(key, value) {
            if (isObject(key)) {
              forEach(key, reverseParams(delegate));
            } else {
              return delegate(key, value);
            }
          };
        }
        function provider(name, provider_) {
          assertNotHasOwnProperty(name, 'service');
          if (isFunction(provider_) || isArray(provider_)) {
            provider_ = providerInjector.instantiate(provider_);
          }
          if (!provider_.$get) {
            throw $injectorMinErr('pget', "Provider '{0}' must define $get factory method.", name);
          }
          return providerCache[name + providerSuffix] = provider_;
        }
        function enforceReturnValue(name, factory) {
          return function enforcedReturnValue() {
            var result = instanceInjector.invoke(factory, this);
            if (isUndefined(result)) {
              throw $injectorMinErr('undef', "Provider '{0}' must return a value from $get factory method.", name);
            }
            return result;
          };
        }
        function factory(name, factoryFn, enforce) {
          return provider(name, {$get: enforce !== false ? enforceReturnValue(name, factoryFn) : factoryFn});
        }
        function service(name, constructor) {
          return factory(name, ['$injector', function($injector) {
            return $injector.instantiate(constructor);
          }]);
        }
        function value(name, val) {
          return factory(name, valueFn(val), false);
        }
        function constant(name, value) {
          assertNotHasOwnProperty(name, 'constant');
          providerCache[name] = value;
          instanceCache[name] = value;
        }
        function decorator(serviceName, decorFn) {
          var origProvider = providerInjector.get(serviceName + providerSuffix),
              orig$get = origProvider.$get;
          origProvider.$get = function() {
            var origInstance = instanceInjector.invoke(orig$get, origProvider);
            return instanceInjector.invoke(decorFn, null, {$delegate: origInstance});
          };
        }
        function loadModules(modulesToLoad) {
          assertArg(isUndefined(modulesToLoad) || isArray(modulesToLoad), 'modulesToLoad', 'not an array');
          var runBlocks = [],
              moduleFn;
          forEach(modulesToLoad, function(module) {
            if (loadedModules.get(module))
              return;
            loadedModules.put(module, true);
            function runInvokeQueue(queue) {
              var i,
                  ii;
              for (i = 0, ii = queue.length; i < ii; i++) {
                var invokeArgs = queue[i],
                    provider = providerInjector.get(invokeArgs[0]);
                provider[invokeArgs[1]].apply(provider, invokeArgs[2]);
              }
            }
            try {
              if (isString(module)) {
                moduleFn = angularModule(module);
                runBlocks = runBlocks.concat(loadModules(moduleFn.requires)).concat(moduleFn._runBlocks);
                runInvokeQueue(moduleFn._invokeQueue);
                runInvokeQueue(moduleFn._configBlocks);
              } else if (isFunction(module)) {
                runBlocks.push(providerInjector.invoke(module));
              } else if (isArray(module)) {
                runBlocks.push(providerInjector.invoke(module));
              } else {
                assertArgFn(module, 'module');
              }
            } catch (e) {
              if (isArray(module)) {
                module = module[module.length - 1];
              }
              if (e.message && e.stack && e.stack.indexOf(e.message) == -1) {
                e = e.message + '\n' + e.stack;
              }
              throw $injectorMinErr('modulerr', "Failed to instantiate module {0} due to:\n{1}", module, e.stack || e.message || e);
            }
          });
          return runBlocks;
        }
        function createInternalInjector(cache, factory) {
          function getService(serviceName, caller) {
            if (cache.hasOwnProperty(serviceName)) {
              if (cache[serviceName] === INSTANTIATING) {
                throw $injectorMinErr('cdep', 'Circular dependency found: {0}', serviceName + ' <- ' + path.join(' <- '));
              }
              return cache[serviceName];
            } else {
              try {
                path.unshift(serviceName);
                cache[serviceName] = INSTANTIATING;
                return cache[serviceName] = factory(serviceName, caller);
              } catch (err) {
                if (cache[serviceName] === INSTANTIATING) {
                  delete cache[serviceName];
                }
                throw err;
              } finally {
                path.shift();
              }
            }
          }
          function injectionArgs(fn, locals, serviceName) {
            var args = [],
                $inject = createInjector.$$annotate(fn, strictDi, serviceName);
            for (var i = 0,
                length = $inject.length; i < length; i++) {
              var key = $inject[i];
              if (typeof key !== 'string') {
                throw $injectorMinErr('itkn', 'Incorrect injection token! Expected service name as string, got {0}', key);
              }
              args.push(locals && locals.hasOwnProperty(key) ? locals[key] : getService(key, serviceName));
            }
            return args;
          }
          function isClass(func) {
            if (msie <= 11) {
              return false;
            }
            return typeof func === 'function' && /^(?:class\s|constructor\()/.test(stringifyFn(func));
          }
          function invoke(fn, self, locals, serviceName) {
            if (typeof locals === 'string') {
              serviceName = locals;
              locals = null;
            }
            var args = injectionArgs(fn, locals, serviceName);
            if (isArray(fn)) {
              fn = fn[fn.length - 1];
            }
            if (!isClass(fn)) {
              return fn.apply(self, args);
            } else {
              args.unshift(null);
              return new (Function.prototype.bind.apply(fn, args))();
            }
          }
          function instantiate(Type, locals, serviceName) {
            var ctor = (isArray(Type) ? Type[Type.length - 1] : Type);
            var args = injectionArgs(Type, locals, serviceName);
            args.unshift(null);
            return new (Function.prototype.bind.apply(ctor, args))();
          }
          return {
            invoke: invoke,
            instantiate: instantiate,
            get: getService,
            annotate: createInjector.$$annotate,
            has: function(name) {
              return providerCache.hasOwnProperty(name + providerSuffix) || cache.hasOwnProperty(name);
            }
          };
        }
      }
      createInjector.$$annotate = annotate;
      function $AnchorScrollProvider() {
        var autoScrollingEnabled = true;
        this.disableAutoScrolling = function() {
          autoScrollingEnabled = false;
        };
        this.$get = ['$window', '$location', '$rootScope', function($window, $location, $rootScope) {
          var document = $window.document;
          function getFirstAnchor(list) {
            var result = null;
            Array.prototype.some.call(list, function(element) {
              if (nodeName_(element) === 'a') {
                result = element;
                return true;
              }
            });
            return result;
          }
          function getYOffset() {
            var offset = scroll.yOffset;
            if (isFunction(offset)) {
              offset = offset();
            } else if (isElement(offset)) {
              var elem = offset[0];
              var style = $window.getComputedStyle(elem);
              if (style.position !== 'fixed') {
                offset = 0;
              } else {
                offset = elem.getBoundingClientRect().bottom;
              }
            } else if (!isNumber(offset)) {
              offset = 0;
            }
            return offset;
          }
          function scrollTo(elem) {
            if (elem) {
              elem.scrollIntoView();
              var offset = getYOffset();
              if (offset) {
                var elemTop = elem.getBoundingClientRect().top;
                $window.scrollBy(0, elemTop - offset);
              }
            } else {
              $window.scrollTo(0, 0);
            }
          }
          function scroll(hash) {
            hash = isString(hash) ? hash : $location.hash();
            var elm;
            if (!hash)
              scrollTo(null);
            else if ((elm = document.getElementById(hash)))
              scrollTo(elm);
            else if ((elm = getFirstAnchor(document.getElementsByName(hash))))
              scrollTo(elm);
            else if (hash === 'top')
              scrollTo(null);
          }
          if (autoScrollingEnabled) {
            $rootScope.$watch(function autoScrollWatch() {
              return $location.hash();
            }, function autoScrollWatchAction(newVal, oldVal) {
              if (newVal === oldVal && newVal === '')
                return;
              jqLiteDocumentLoaded(function() {
                $rootScope.$evalAsync(scroll);
              });
            });
          }
          return scroll;
        }];
      }
      var $animateMinErr = minErr('$animate');
      var ELEMENT_NODE = 1;
      var NG_ANIMATE_CLASSNAME = 'ng-animate';
      function mergeClasses(a, b) {
        if (!a && !b)
          return '';
        if (!a)
          return b;
        if (!b)
          return a;
        if (isArray(a))
          a = a.join(' ');
        if (isArray(b))
          b = b.join(' ');
        return a + ' ' + b;
      }
      function extractElementNode(element) {
        for (var i = 0; i < element.length; i++) {
          var elm = element[i];
          if (elm.nodeType === ELEMENT_NODE) {
            return elm;
          }
        }
      }
      function splitClasses(classes) {
        if (isString(classes)) {
          classes = classes.split(' ');
        }
        var obj = createMap();
        forEach(classes, function(klass) {
          if (klass.length) {
            obj[klass] = true;
          }
        });
        return obj;
      }
      function prepareAnimateOptions(options) {
        return isObject(options) ? options : {};
      }
      var $$CoreAnimateJsProvider = function() {
        this.$get = noop;
      };
      var $$CoreAnimateQueueProvider = function() {
        var postDigestQueue = new HashMap();
        var postDigestElements = [];
        this.$get = ['$$AnimateRunner', '$rootScope', function($$AnimateRunner, $rootScope) {
          return {
            enabled: noop,
            on: noop,
            off: noop,
            pin: noop,
            push: function(element, event, options, domOperation) {
              domOperation && domOperation();
              options = options || {};
              options.from && element.css(options.from);
              options.to && element.css(options.to);
              if (options.addClass || options.removeClass) {
                addRemoveClassesPostDigest(element, options.addClass, options.removeClass);
              }
              var runner = new $$AnimateRunner();
              runner.complete();
              return runner;
            }
          };
          function updateData(data, classes, value) {
            var changed = false;
            if (classes) {
              classes = isString(classes) ? classes.split(' ') : isArray(classes) ? classes : [];
              forEach(classes, function(className) {
                if (className) {
                  changed = true;
                  data[className] = value;
                }
              });
            }
            return changed;
          }
          function handleCSSClassChanges() {
            forEach(postDigestElements, function(element) {
              var data = postDigestQueue.get(element);
              if (data) {
                var existing = splitClasses(element.attr('class'));
                var toAdd = '';
                var toRemove = '';
                forEach(data, function(status, className) {
                  var hasClass = !!existing[className];
                  if (status !== hasClass) {
                    if (status) {
                      toAdd += (toAdd.length ? ' ' : '') + className;
                    } else {
                      toRemove += (toRemove.length ? ' ' : '') + className;
                    }
                  }
                });
                forEach(element, function(elm) {
                  toAdd && jqLiteAddClass(elm, toAdd);
                  toRemove && jqLiteRemoveClass(elm, toRemove);
                });
                postDigestQueue.remove(element);
              }
            });
            postDigestElements.length = 0;
          }
          function addRemoveClassesPostDigest(element, add, remove) {
            var data = postDigestQueue.get(element) || {};
            var classesAdded = updateData(data, add, true);
            var classesRemoved = updateData(data, remove, false);
            if (classesAdded || classesRemoved) {
              postDigestQueue.put(element, data);
              postDigestElements.push(element);
              if (postDigestElements.length === 1) {
                $rootScope.$$postDigest(handleCSSClassChanges);
              }
            }
          }
        }];
      };
      var $AnimateProvider = ['$provide', function($provide) {
        var provider = this;
        this.$$registeredAnimations = Object.create(null);
        this.register = function(name, factory) {
          if (name && name.charAt(0) !== '.') {
            throw $animateMinErr('notcsel', "Expecting class selector starting with '.' got '{0}'.", name);
          }
          var key = name + '-animation';
          provider.$$registeredAnimations[name.substr(1)] = key;
          $provide.factory(key, factory);
        };
        this.classNameFilter = function(expression) {
          if (arguments.length === 1) {
            this.$$classNameFilter = (expression instanceof RegExp) ? expression : null;
            if (this.$$classNameFilter) {
              var reservedRegex = new RegExp("(\\s+|\\/)" + NG_ANIMATE_CLASSNAME + "(\\s+|\\/)");
              if (reservedRegex.test(this.$$classNameFilter.toString())) {
                throw $animateMinErr('nongcls', '$animateProvider.classNameFilter(regex) prohibits accepting a regex value which matches/contains the "{0}" CSS class.', NG_ANIMATE_CLASSNAME);
              }
            }
          }
          return this.$$classNameFilter;
        };
        this.$get = ['$$animateQueue', function($$animateQueue) {
          function domInsert(element, parentElement, afterElement) {
            if (afterElement) {
              var afterNode = extractElementNode(afterElement);
              if (afterNode && !afterNode.parentNode && !afterNode.previousElementSibling) {
                afterElement = null;
              }
            }
            afterElement ? afterElement.after(element) : parentElement.prepend(element);
          }
          return {
            on: $$animateQueue.on,
            off: $$animateQueue.off,
            pin: $$animateQueue.pin,
            enabled: $$animateQueue.enabled,
            cancel: function(runner) {
              runner.end && runner.end();
            },
            enter: function(element, parent, after, options) {
              parent = parent && jqLite(parent);
              after = after && jqLite(after);
              parent = parent || after.parent();
              domInsert(element, parent, after);
              return $$animateQueue.push(element, 'enter', prepareAnimateOptions(options));
            },
            move: function(element, parent, after, options) {
              parent = parent && jqLite(parent);
              after = after && jqLite(after);
              parent = parent || after.parent();
              domInsert(element, parent, after);
              return $$animateQueue.push(element, 'move', prepareAnimateOptions(options));
            },
            leave: function(element, options) {
              return $$animateQueue.push(element, 'leave', prepareAnimateOptions(options), function() {
                element.remove();
              });
            },
            addClass: function(element, className, options) {
              options = prepareAnimateOptions(options);
              options.addClass = mergeClasses(options.addclass, className);
              return $$animateQueue.push(element, 'addClass', options);
            },
            removeClass: function(element, className, options) {
              options = prepareAnimateOptions(options);
              options.removeClass = mergeClasses(options.removeClass, className);
              return $$animateQueue.push(element, 'removeClass', options);
            },
            setClass: function(element, add, remove, options) {
              options = prepareAnimateOptions(options);
              options.addClass = mergeClasses(options.addClass, add);
              options.removeClass = mergeClasses(options.removeClass, remove);
              return $$animateQueue.push(element, 'setClass', options);
            },
            animate: function(element, from, to, className, options) {
              options = prepareAnimateOptions(options);
              options.from = options.from ? extend(options.from, from) : from;
              options.to = options.to ? extend(options.to, to) : to;
              className = className || 'ng-inline-animate';
              options.tempClasses = mergeClasses(options.tempClasses, className);
              return $$animateQueue.push(element, 'animate', options);
            }
          };
        }];
      }];
      var $$AnimateAsyncRunFactoryProvider = function() {
        this.$get = ['$$rAF', function($$rAF) {
          var waitQueue = [];
          function waitForTick(fn) {
            waitQueue.push(fn);
            if (waitQueue.length > 1)
              return;
            $$rAF(function() {
              for (var i = 0; i < waitQueue.length; i++) {
                waitQueue[i]();
              }
              waitQueue = [];
            });
          }
          return function() {
            var passed = false;
            waitForTick(function() {
              passed = true;
            });
            return function(callback) {
              passed ? callback() : waitForTick(callback);
            };
          };
        }];
      };
      var $$AnimateRunnerFactoryProvider = function() {
        this.$get = ['$q', '$sniffer', '$$animateAsyncRun', '$document', '$timeout', function($q, $sniffer, $$animateAsyncRun, $document, $timeout) {
          var INITIAL_STATE = 0;
          var DONE_PENDING_STATE = 1;
          var DONE_COMPLETE_STATE = 2;
          AnimateRunner.chain = function(chain, callback) {
            var index = 0;
            next();
            function next() {
              if (index === chain.length) {
                callback(true);
                return;
              }
              chain[index](function(response) {
                if (response === false) {
                  callback(false);
                  return;
                }
                index++;
                next();
              });
            }
          };
          AnimateRunner.all = function(runners, callback) {
            var count = 0;
            var status = true;
            forEach(runners, function(runner) {
              runner.done(onProgress);
            });
            function onProgress(response) {
              status = status && response;
              if (++count === runners.length) {
                callback(status);
              }
            }
          };
          function AnimateRunner(host) {
            this.setHost(host);
            var rafTick = $$animateAsyncRun();
            var timeoutTick = function(fn) {
              $timeout(fn, 0, false);
            };
            this._doneCallbacks = [];
            this._tick = function(fn) {
              var doc = $document[0];
              if (doc && doc.hidden) {
                timeoutTick(fn);
              } else {
                rafTick(fn);
              }
            };
            this._state = 0;
          }
          AnimateRunner.prototype = {
            setHost: function(host) {
              this.host = host || {};
            },
            done: function(fn) {
              if (this._state === DONE_COMPLETE_STATE) {
                fn();
              } else {
                this._doneCallbacks.push(fn);
              }
            },
            progress: noop,
            getPromise: function() {
              if (!this.promise) {
                var self = this;
                this.promise = $q(function(resolve, reject) {
                  self.done(function(status) {
                    status === false ? reject() : resolve();
                  });
                });
              }
              return this.promise;
            },
            then: function(resolveHandler, rejectHandler) {
              return this.getPromise().then(resolveHandler, rejectHandler);
            },
            'catch': function(handler) {
              return this.getPromise()['catch'](handler);
            },
            'finally': function(handler) {
              return this.getPromise()['finally'](handler);
            },
            pause: function() {
              if (this.host.pause) {
                this.host.pause();
              }
            },
            resume: function() {
              if (this.host.resume) {
                this.host.resume();
              }
            },
            end: function() {
              if (this.host.end) {
                this.host.end();
              }
              this._resolve(true);
            },
            cancel: function() {
              if (this.host.cancel) {
                this.host.cancel();
              }
              this._resolve(false);
            },
            complete: function(response) {
              var self = this;
              if (self._state === INITIAL_STATE) {
                self._state = DONE_PENDING_STATE;
                self._tick(function() {
                  self._resolve(response);
                });
              }
            },
            _resolve: function(response) {
              if (this._state !== DONE_COMPLETE_STATE) {
                forEach(this._doneCallbacks, function(fn) {
                  fn(response);
                });
                this._doneCallbacks.length = 0;
                this._state = DONE_COMPLETE_STATE;
              }
            }
          };
          return AnimateRunner;
        }];
      };
      var $CoreAnimateCssProvider = function() {
        this.$get = ['$$rAF', '$q', '$$AnimateRunner', function($$rAF, $q, $$AnimateRunner) {
          return function(element, initialOptions) {
            var options = initialOptions || {};
            if (!options.$$prepared) {
              options = copy(options);
            }
            if (options.cleanupStyles) {
              options.from = options.to = null;
            }
            if (options.from) {
              element.css(options.from);
              options.from = null;
            }
            var closed,
                runner = new $$AnimateRunner();
            return {
              start: run,
              end: run
            };
            function run() {
              $$rAF(function() {
                applyAnimationContents();
                if (!closed) {
                  runner.complete();
                }
                closed = true;
              });
              return runner;
            }
            function applyAnimationContents() {
              if (options.addClass) {
                element.addClass(options.addClass);
                options.addClass = null;
              }
              if (options.removeClass) {
                element.removeClass(options.removeClass);
                options.removeClass = null;
              }
              if (options.to) {
                element.css(options.to);
                options.to = null;
              }
            }
          };
        }];
      };
      function Browser(window, document, $log, $sniffer) {
        var self = this,
            location = window.location,
            history = window.history,
            setTimeout = window.setTimeout,
            clearTimeout = window.clearTimeout,
            pendingDeferIds = {};
        self.isMock = false;
        var outstandingRequestCount = 0;
        var outstandingRequestCallbacks = [];
        self.$$completeOutstandingRequest = completeOutstandingRequest;
        self.$$incOutstandingRequestCount = function() {
          outstandingRequestCount++;
        };
        function completeOutstandingRequest(fn) {
          try {
            fn.apply(null, sliceArgs(arguments, 1));
          } finally {
            outstandingRequestCount--;
            if (outstandingRequestCount === 0) {
              while (outstandingRequestCallbacks.length) {
                try {
                  outstandingRequestCallbacks.pop()();
                } catch (e) {
                  $log.error(e);
                }
              }
            }
          }
        }
        function getHash(url) {
          var index = url.indexOf('#');
          return index === -1 ? '' : url.substr(index);
        }
        self.notifyWhenNoOutstandingRequests = function(callback) {
          if (outstandingRequestCount === 0) {
            callback();
          } else {
            outstandingRequestCallbacks.push(callback);
          }
        };
        var cachedState,
            lastHistoryState,
            lastBrowserUrl = location.href,
            baseElement = document.find('base'),
            pendingLocation = null,
            getCurrentState = !$sniffer.history ? noop : function getCurrentState() {
              try {
                return history.state;
              } catch (e) {}
            };
        cacheState();
        lastHistoryState = cachedState;
        self.url = function(url, replace, state) {
          if (isUndefined(state)) {
            state = null;
          }
          if (location !== window.location)
            location = window.location;
          if (history !== window.history)
            history = window.history;
          if (url) {
            var sameState = lastHistoryState === state;
            if (lastBrowserUrl === url && (!$sniffer.history || sameState)) {
              return self;
            }
            var sameBase = lastBrowserUrl && stripHash(lastBrowserUrl) === stripHash(url);
            lastBrowserUrl = url;
            lastHistoryState = state;
            if ($sniffer.history && (!sameBase || !sameState)) {
              history[replace ? 'replaceState' : 'pushState'](state, '', url);
              cacheState();
              lastHistoryState = cachedState;
            } else {
              if (!sameBase) {
                pendingLocation = url;
              }
              if (replace) {
                location.replace(url);
              } else if (!sameBase) {
                location.href = url;
              } else {
                location.hash = getHash(url);
              }
              if (location.href !== url) {
                pendingLocation = url;
              }
            }
            if (pendingLocation) {
              pendingLocation = url;
            }
            return self;
          } else {
            return pendingLocation || location.href.replace(/%27/g, "'");
          }
        };
        self.state = function() {
          return cachedState;
        };
        var urlChangeListeners = [],
            urlChangeInit = false;
        function cacheStateAndFireUrlChange() {
          pendingLocation = null;
          cacheState();
          fireUrlChange();
        }
        var lastCachedState = null;
        function cacheState() {
          cachedState = getCurrentState();
          cachedState = isUndefined(cachedState) ? null : cachedState;
          if (equals(cachedState, lastCachedState)) {
            cachedState = lastCachedState;
          }
          lastCachedState = cachedState;
        }
        function fireUrlChange() {
          if (lastBrowserUrl === self.url() && lastHistoryState === cachedState) {
            return;
          }
          lastBrowserUrl = self.url();
          lastHistoryState = cachedState;
          forEach(urlChangeListeners, function(listener) {
            listener(self.url(), cachedState);
          });
        }
        self.onUrlChange = function(callback) {
          if (!urlChangeInit) {
            if ($sniffer.history)
              jqLite(window).on('popstate', cacheStateAndFireUrlChange);
            jqLite(window).on('hashchange', cacheStateAndFireUrlChange);
            urlChangeInit = true;
          }
          urlChangeListeners.push(callback);
          return callback;
        };
        self.$$applicationDestroyed = function() {
          jqLite(window).off('hashchange popstate', cacheStateAndFireUrlChange);
        };
        self.$$checkUrlChange = fireUrlChange;
        self.baseHref = function() {
          var href = baseElement.attr('href');
          return href ? href.replace(/^(https?\:)?\/\/[^\/]*/, '') : '';
        };
        self.defer = function(fn, delay) {
          var timeoutId;
          outstandingRequestCount++;
          timeoutId = setTimeout(function() {
            delete pendingDeferIds[timeoutId];
            completeOutstandingRequest(fn);
          }, delay || 0);
          pendingDeferIds[timeoutId] = true;
          return timeoutId;
        };
        self.defer.cancel = function(deferId) {
          if (pendingDeferIds[deferId]) {
            delete pendingDeferIds[deferId];
            clearTimeout(deferId);
            completeOutstandingRequest(noop);
            return true;
          }
          return false;
        };
      }
      function $BrowserProvider() {
        this.$get = ['$window', '$log', '$sniffer', '$document', function($window, $log, $sniffer, $document) {
          return new Browser($window, $document, $log, $sniffer);
        }];
      }
      function $CacheFactoryProvider() {
        this.$get = function() {
          var caches = {};
          function cacheFactory(cacheId, options) {
            if (cacheId in caches) {
              throw minErr('$cacheFactory')('iid', "CacheId '{0}' is already taken!", cacheId);
            }
            var size = 0,
                stats = extend({}, options, {id: cacheId}),
                data = createMap(),
                capacity = (options && options.capacity) || Number.MAX_VALUE,
                lruHash = createMap(),
                freshEnd = null,
                staleEnd = null;
            return caches[cacheId] = {
              put: function(key, value) {
                if (isUndefined(value))
                  return;
                if (capacity < Number.MAX_VALUE) {
                  var lruEntry = lruHash[key] || (lruHash[key] = {key: key});
                  refresh(lruEntry);
                }
                if (!(key in data))
                  size++;
                data[key] = value;
                if (size > capacity) {
                  this.remove(staleEnd.key);
                }
                return value;
              },
              get: function(key) {
                if (capacity < Number.MAX_VALUE) {
                  var lruEntry = lruHash[key];
                  if (!lruEntry)
                    return;
                  refresh(lruEntry);
                }
                return data[key];
              },
              remove: function(key) {
                if (capacity < Number.MAX_VALUE) {
                  var lruEntry = lruHash[key];
                  if (!lruEntry)
                    return;
                  if (lruEntry == freshEnd)
                    freshEnd = lruEntry.p;
                  if (lruEntry == staleEnd)
                    staleEnd = lruEntry.n;
                  link(lruEntry.n, lruEntry.p);
                  delete lruHash[key];
                }
                if (!(key in data))
                  return;
                delete data[key];
                size--;
              },
              removeAll: function() {
                data = createMap();
                size = 0;
                lruHash = createMap();
                freshEnd = staleEnd = null;
              },
              destroy: function() {
                data = null;
                stats = null;
                lruHash = null;
                delete caches[cacheId];
              },
              info: function() {
                return extend({}, stats, {size: size});
              }
            };
            function refresh(entry) {
              if (entry != freshEnd) {
                if (!staleEnd) {
                  staleEnd = entry;
                } else if (staleEnd == entry) {
                  staleEnd = entry.n;
                }
                link(entry.n, entry.p);
                link(entry, freshEnd);
                freshEnd = entry;
                freshEnd.n = null;
              }
            }
            function link(nextEntry, prevEntry) {
              if (nextEntry != prevEntry) {
                if (nextEntry)
                  nextEntry.p = prevEntry;
                if (prevEntry)
                  prevEntry.n = nextEntry;
              }
            }
          }
          cacheFactory.info = function() {
            var info = {};
            forEach(caches, function(cache, cacheId) {
              info[cacheId] = cache.info();
            });
            return info;
          };
          cacheFactory.get = function(cacheId) {
            return caches[cacheId];
          };
          return cacheFactory;
        };
      }
      function $TemplateCacheProvider() {
        this.$get = ['$cacheFactory', function($cacheFactory) {
          return $cacheFactory('templates');
        }];
      }
      var $compileMinErr = minErr('$compile');
      function UNINITIALIZED_VALUE() {}
      var _UNINITIALIZED_VALUE = new UNINITIALIZED_VALUE();
      $CompileProvider.$inject = ['$provide', '$$sanitizeUriProvider'];
      function $CompileProvider($provide, $$sanitizeUriProvider) {
        var hasDirectives = {},
            Suffix = 'Directive',
            COMMENT_DIRECTIVE_REGEXP = /^\s*directive\:\s*([\w\-]+)\s+(.*)$/,
            CLASS_DIRECTIVE_REGEXP = /(([\w\-]+)(?:\:([^;]+))?;?)/,
            ALL_OR_NOTHING_ATTRS = makeMap('ngSrc,ngSrcset,src,srcset'),
            REQUIRE_PREFIX_REGEXP = /^(?:(\^\^?)?(\?)?(\^\^?)?)?/;
        var EVENT_HANDLER_ATTR_REGEXP = /^(on[a-z]+|formaction)$/;
        var bindingCache = createMap();
        function parseIsolateBindings(scope, directiveName, isController) {
          var LOCAL_REGEXP = /^\s*([@&<]|=(\*?))(\??)\s*(\w*)\s*$/;
          var bindings = createMap();
          forEach(scope, function(definition, scopeName) {
            if (definition in bindingCache) {
              bindings[scopeName] = bindingCache[definition];
              return;
            }
            var match = definition.match(LOCAL_REGEXP);
            if (!match) {
              throw $compileMinErr('iscp', "Invalid {3} for directive '{0}'." + " Definition: {... {1}: '{2}' ...}", directiveName, scopeName, definition, (isController ? "controller bindings definition" : "isolate scope definition"));
            }
            bindings[scopeName] = {
              mode: match[1][0],
              collection: match[2] === '*',
              optional: match[3] === '?',
              attrName: match[4] || scopeName
            };
            if (match[4]) {
              bindingCache[definition] = bindings[scopeName];
            }
          });
          return bindings;
        }
        function parseDirectiveBindings(directive, directiveName) {
          var bindings = {
            isolateScope: null,
            bindToController: null
          };
          if (isObject(directive.scope)) {
            if (directive.bindToController === true) {
              bindings.bindToController = parseIsolateBindings(directive.scope, directiveName, true);
              bindings.isolateScope = {};
            } else {
              bindings.isolateScope = parseIsolateBindings(directive.scope, directiveName, false);
            }
          }
          if (isObject(directive.bindToController)) {
            bindings.bindToController = parseIsolateBindings(directive.bindToController, directiveName, true);
          }
          if (isObject(bindings.bindToController)) {
            var controller = directive.controller;
            var controllerAs = directive.controllerAs;
            if (!controller) {
              throw $compileMinErr('noctrl', "Cannot bind to controller without directive '{0}'s controller.", directiveName);
            } else if (!identifierForController(controller, controllerAs)) {
              throw $compileMinErr('noident', "Cannot bind to controller without identifier for directive '{0}'.", directiveName);
            }
          }
          return bindings;
        }
        function assertValidDirectiveName(name) {
          var letter = name.charAt(0);
          if (!letter || letter !== lowercase(letter)) {
            throw $compileMinErr('baddir', "Directive/Component name '{0}' is invalid. The first character must be a lowercase letter", name);
          }
          if (name !== name.trim()) {
            throw $compileMinErr('baddir', "Directive/Component name '{0}' is invalid. The name should not contain leading or trailing whitespaces", name);
          }
        }
        function getDirectiveRequire(directive) {
          var require = directive.require || (directive.controller && directive.name);
          if (!isArray(require) && isObject(require)) {
            forEach(require, function(value, key) {
              var match = value.match(REQUIRE_PREFIX_REGEXP);
              var name = value.substring(match[0].length);
              if (!name)
                require[key] = match[0] + key;
            });
          }
          return require;
        }
        this.directive = function registerDirective(name, directiveFactory) {
          assertNotHasOwnProperty(name, 'directive');
          if (isString(name)) {
            assertValidDirectiveName(name);
            assertArg(directiveFactory, 'directiveFactory');
            if (!hasDirectives.hasOwnProperty(name)) {
              hasDirectives[name] = [];
              $provide.factory(name + Suffix, ['$injector', '$exceptionHandler', function($injector, $exceptionHandler) {
                var directives = [];
                forEach(hasDirectives[name], function(directiveFactory, index) {
                  try {
                    var directive = $injector.invoke(directiveFactory);
                    if (isFunction(directive)) {
                      directive = {compile: valueFn(directive)};
                    } else if (!directive.compile && directive.link) {
                      directive.compile = valueFn(directive.link);
                    }
                    directive.priority = directive.priority || 0;
                    directive.index = index;
                    directive.name = directive.name || name;
                    directive.require = getDirectiveRequire(directive);
                    directive.restrict = directive.restrict || 'EA';
                    directive.$$moduleName = directiveFactory.$$moduleName;
                    directives.push(directive);
                  } catch (e) {
                    $exceptionHandler(e);
                  }
                });
                return directives;
              }]);
            }
            hasDirectives[name].push(directiveFactory);
          } else {
            forEach(name, reverseParams(registerDirective));
          }
          return this;
        };
        this.component = function registerComponent(name, options) {
          var controller = options.controller || function() {};
          function factory($injector) {
            function makeInjectable(fn) {
              if (isFunction(fn) || isArray(fn)) {
                return function(tElement, tAttrs) {
                  return $injector.invoke(fn, this, {
                    $element: tElement,
                    $attrs: tAttrs
                  });
                };
              } else {
                return fn;
              }
            }
            var template = (!options.template && !options.templateUrl ? '' : options.template);
            var ddo = {
              controller: controller,
              controllerAs: identifierForController(options.controller) || options.controllerAs || '$ctrl',
              template: makeInjectable(template),
              templateUrl: makeInjectable(options.templateUrl),
              transclude: options.transclude,
              scope: {},
              bindToController: options.bindings || {},
              restrict: 'E',
              require: options.require
            };
            forEach(options, function(val, key) {
              if (key.charAt(0) === '$')
                ddo[key] = val;
            });
            return ddo;
          }
          forEach(options, function(val, key) {
            if (key.charAt(0) === '$') {
              factory[key] = val;
              if (isFunction(controller))
                controller[key] = val;
            }
          });
          factory.$inject = ['$injector'];
          return this.directive(name, factory);
        };
        this.aHrefSanitizationWhitelist = function(regexp) {
          if (isDefined(regexp)) {
            $$sanitizeUriProvider.aHrefSanitizationWhitelist(regexp);
            return this;
          } else {
            return $$sanitizeUriProvider.aHrefSanitizationWhitelist();
          }
        };
        this.imgSrcSanitizationWhitelist = function(regexp) {
          if (isDefined(regexp)) {
            $$sanitizeUriProvider.imgSrcSanitizationWhitelist(regexp);
            return this;
          } else {
            return $$sanitizeUriProvider.imgSrcSanitizationWhitelist();
          }
        };
        var debugInfoEnabled = true;
        this.debugInfoEnabled = function(enabled) {
          if (isDefined(enabled)) {
            debugInfoEnabled = enabled;
            return this;
          }
          return debugInfoEnabled;
        };
        var TTL = 10;
        this.onChangesTtl = function(value) {
          if (arguments.length) {
            TTL = value;
            return this;
          }
          return TTL;
        };
        this.$get = ['$injector', '$interpolate', '$exceptionHandler', '$templateRequest', '$parse', '$controller', '$rootScope', '$sce', '$animate', '$$sanitizeUri', function($injector, $interpolate, $exceptionHandler, $templateRequest, $parse, $controller, $rootScope, $sce, $animate, $$sanitizeUri) {
          var SIMPLE_ATTR_NAME = /^\w/;
          var specialAttrHolder = window.document.createElement('div');
          var onChangesTtl = TTL;
          var onChangesQueue;
          function flushOnChangesQueue() {
            try {
              if (!(--onChangesTtl)) {
                onChangesQueue = undefined;
                throw $compileMinErr('infchng', '{0} $onChanges() iterations reached. Aborting!\n', TTL);
              }
              $rootScope.$apply(function() {
                var errors = [];
                for (var i = 0,
                    ii = onChangesQueue.length; i < ii; ++i) {
                  try {
                    onChangesQueue[i]();
                  } catch (e) {
                    errors.push(e);
                  }
                }
                onChangesQueue = undefined;
                if (errors.length) {
                  throw errors;
                }
              });
            } finally {
              onChangesTtl++;
            }
          }
          function Attributes(element, attributesToCopy) {
            if (attributesToCopy) {
              var keys = Object.keys(attributesToCopy);
              var i,
                  l,
                  key;
              for (i = 0, l = keys.length; i < l; i++) {
                key = keys[i];
                this[key] = attributesToCopy[key];
              }
            } else {
              this.$attr = {};
            }
            this.$$element = element;
          }
          Attributes.prototype = {
            $normalize: directiveNormalize,
            $addClass: function(classVal) {
              if (classVal && classVal.length > 0) {
                $animate.addClass(this.$$element, classVal);
              }
            },
            $removeClass: function(classVal) {
              if (classVal && classVal.length > 0) {
                $animate.removeClass(this.$$element, classVal);
              }
            },
            $updateClass: function(newClasses, oldClasses) {
              var toAdd = tokenDifference(newClasses, oldClasses);
              if (toAdd && toAdd.length) {
                $animate.addClass(this.$$element, toAdd);
              }
              var toRemove = tokenDifference(oldClasses, newClasses);
              if (toRemove && toRemove.length) {
                $animate.removeClass(this.$$element, toRemove);
              }
            },
            $set: function(key, value, writeAttr, attrName) {
              var node = this.$$element[0],
                  booleanKey = getBooleanAttrName(node, key),
                  aliasedKey = getAliasedAttrName(key),
                  observer = key,
                  nodeName;
              if (booleanKey) {
                this.$$element.prop(key, value);
                attrName = booleanKey;
              } else if (aliasedKey) {
                this[aliasedKey] = value;
                observer = aliasedKey;
              }
              this[key] = value;
              if (attrName) {
                this.$attr[key] = attrName;
              } else {
                attrName = this.$attr[key];
                if (!attrName) {
                  this.$attr[key] = attrName = snake_case(key, '-');
                }
              }
              nodeName = nodeName_(this.$$element);
              if ((nodeName === 'a' && (key === 'href' || key === 'xlinkHref')) || (nodeName === 'img' && key === 'src')) {
                this[key] = value = $$sanitizeUri(value, key === 'src');
              } else if (nodeName === 'img' && key === 'srcset' && isDefined(value)) {
                var result = "";
                var trimmedSrcset = trim(value);
                var srcPattern = /(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/;
                var pattern = /\s/.test(trimmedSrcset) ? srcPattern : /(,)/;
                var rawUris = trimmedSrcset.split(pattern);
                var nbrUrisWith2parts = Math.floor(rawUris.length / 2);
                for (var i = 0; i < nbrUrisWith2parts; i++) {
                  var innerIdx = i * 2;
                  result += $$sanitizeUri(trim(rawUris[innerIdx]), true);
                  result += (" " + trim(rawUris[innerIdx + 1]));
                }
                var lastTuple = trim(rawUris[i * 2]).split(/\s/);
                result += $$sanitizeUri(trim(lastTuple[0]), true);
                if (lastTuple.length === 2) {
                  result += (" " + trim(lastTuple[1]));
                }
                this[key] = value = result;
              }
              if (writeAttr !== false) {
                if (value === null || isUndefined(value)) {
                  this.$$element.removeAttr(attrName);
                } else {
                  if (SIMPLE_ATTR_NAME.test(attrName)) {
                    this.$$element.attr(attrName, value);
                  } else {
                    setSpecialAttr(this.$$element[0], attrName, value);
                  }
                }
              }
              var $$observers = this.$$observers;
              $$observers && forEach($$observers[observer], function(fn) {
                try {
                  fn(value);
                } catch (e) {
                  $exceptionHandler(e);
                }
              });
            },
            $observe: function(key, fn) {
              var attrs = this,
                  $$observers = (attrs.$$observers || (attrs.$$observers = createMap())),
                  listeners = ($$observers[key] || ($$observers[key] = []));
              listeners.push(fn);
              $rootScope.$evalAsync(function() {
                if (!listeners.$$inter && attrs.hasOwnProperty(key) && !isUndefined(attrs[key])) {
                  fn(attrs[key]);
                }
              });
              return function() {
                arrayRemove(listeners, fn);
              };
            }
          };
          function setSpecialAttr(element, attrName, value) {
            specialAttrHolder.innerHTML = "<span " + attrName + ">";
            var attributes = specialAttrHolder.firstChild.attributes;
            var attribute = attributes[0];
            attributes.removeNamedItem(attribute.name);
            attribute.value = value;
            element.attributes.setNamedItem(attribute);
          }
          function safeAddClass($element, className) {
            try {
              $element.addClass(className);
            } catch (e) {}
          }
          var startSymbol = $interpolate.startSymbol(),
              endSymbol = $interpolate.endSymbol(),
              denormalizeTemplate = (startSymbol == '{{' && endSymbol == '}}') ? identity : function denormalizeTemplate(template) {
                return template.replace(/\{\{/g, startSymbol).replace(/}}/g, endSymbol);
              },
              NG_ATTR_BINDING = /^ngAttr[A-Z]/;
          var MULTI_ELEMENT_DIR_RE = /^(.+)Start$/;
          compile.$$addBindingInfo = debugInfoEnabled ? function $$addBindingInfo($element, binding) {
            var bindings = $element.data('$binding') || [];
            if (isArray(binding)) {
              bindings = bindings.concat(binding);
            } else {
              bindings.push(binding);
            }
            $element.data('$binding', bindings);
          } : noop;
          compile.$$addBindingClass = debugInfoEnabled ? function $$addBindingClass($element) {
            safeAddClass($element, 'ng-binding');
          } : noop;
          compile.$$addScopeInfo = debugInfoEnabled ? function $$addScopeInfo($element, scope, isolated, noTemplate) {
            var dataName = isolated ? (noTemplate ? '$isolateScopeNoTemplate' : '$isolateScope') : '$scope';
            $element.data(dataName, scope);
          } : noop;
          compile.$$addScopeClass = debugInfoEnabled ? function $$addScopeClass($element, isolated) {
            safeAddClass($element, isolated ? 'ng-isolate-scope' : 'ng-scope');
          } : noop;
          compile.$$createComment = function(directiveName, comment) {
            var content = '';
            if (debugInfoEnabled) {
              content = ' ' + (directiveName || '') + ': ';
              if (comment)
                content += comment + ' ';
            }
            return window.document.createComment(content);
          };
          return compile;
          function compile($compileNodes, transcludeFn, maxPriority, ignoreDirective, previousCompileContext) {
            if (!($compileNodes instanceof jqLite)) {
              $compileNodes = jqLite($compileNodes);
            }
            var NOT_EMPTY = /\S+/;
            for (var i = 0,
                len = $compileNodes.length; i < len; i++) {
              var domNode = $compileNodes[i];
              if (domNode.nodeType === NODE_TYPE_TEXT && domNode.nodeValue.match(NOT_EMPTY)) {
                jqLiteWrapNode(domNode, $compileNodes[i] = window.document.createElement('span'));
              }
            }
            var compositeLinkFn = compileNodes($compileNodes, transcludeFn, $compileNodes, maxPriority, ignoreDirective, previousCompileContext);
            compile.$$addScopeClass($compileNodes);
            var namespace = null;
            return function publicLinkFn(scope, cloneConnectFn, options) {
              assertArg(scope, 'scope');
              if (previousCompileContext && previousCompileContext.needsNewScope) {
                scope = scope.$parent.$new();
              }
              options = options || {};
              var parentBoundTranscludeFn = options.parentBoundTranscludeFn,
                  transcludeControllers = options.transcludeControllers,
                  futureParentElement = options.futureParentElement;
              if (parentBoundTranscludeFn && parentBoundTranscludeFn.$$boundTransclude) {
                parentBoundTranscludeFn = parentBoundTranscludeFn.$$boundTransclude;
              }
              if (!namespace) {
                namespace = detectNamespaceForChildElements(futureParentElement);
              }
              var $linkNode;
              if (namespace !== 'html') {
                $linkNode = jqLite(wrapTemplate(namespace, jqLite('<div>').append($compileNodes).html()));
              } else if (cloneConnectFn) {
                $linkNode = JQLitePrototype.clone.call($compileNodes);
              } else {
                $linkNode = $compileNodes;
              }
              if (transcludeControllers) {
                for (var controllerName in transcludeControllers) {
                  $linkNode.data('$' + controllerName + 'Controller', transcludeControllers[controllerName].instance);
                }
              }
              compile.$$addScopeInfo($linkNode, scope);
              if (cloneConnectFn)
                cloneConnectFn($linkNode, scope);
              if (compositeLinkFn)
                compositeLinkFn(scope, $linkNode, $linkNode, parentBoundTranscludeFn);
              return $linkNode;
            };
          }
          function detectNamespaceForChildElements(parentElement) {
            var node = parentElement && parentElement[0];
            if (!node) {
              return 'html';
            } else {
              return nodeName_(node) !== 'foreignobject' && toString.call(node).match(/SVG/) ? 'svg' : 'html';
            }
          }
          function compileNodes(nodeList, transcludeFn, $rootElement, maxPriority, ignoreDirective, previousCompileContext) {
            var linkFns = [],
                attrs,
                directives,
                nodeLinkFn,
                childNodes,
                childLinkFn,
                linkFnFound,
                nodeLinkFnFound;
            for (var i = 0; i < nodeList.length; i++) {
              attrs = new Attributes();
              directives = collectDirectives(nodeList[i], [], attrs, i === 0 ? maxPriority : undefined, ignoreDirective);
              nodeLinkFn = (directives.length) ? applyDirectivesToNode(directives, nodeList[i], attrs, transcludeFn, $rootElement, null, [], [], previousCompileContext) : null;
              if (nodeLinkFn && nodeLinkFn.scope) {
                compile.$$addScopeClass(attrs.$$element);
              }
              childLinkFn = (nodeLinkFn && nodeLinkFn.terminal || !(childNodes = nodeList[i].childNodes) || !childNodes.length) ? null : compileNodes(childNodes, nodeLinkFn ? ((nodeLinkFn.transcludeOnThisElement || !nodeLinkFn.templateOnThisElement) && nodeLinkFn.transclude) : transcludeFn);
              if (nodeLinkFn || childLinkFn) {
                linkFns.push(i, nodeLinkFn, childLinkFn);
                linkFnFound = true;
                nodeLinkFnFound = nodeLinkFnFound || nodeLinkFn;
              }
              previousCompileContext = null;
            }
            return linkFnFound ? compositeLinkFn : null;
            function compositeLinkFn(scope, nodeList, $rootElement, parentBoundTranscludeFn) {
              var nodeLinkFn,
                  childLinkFn,
                  node,
                  childScope,
                  i,
                  ii,
                  idx,
                  childBoundTranscludeFn;
              var stableNodeList;
              if (nodeLinkFnFound) {
                var nodeListLength = nodeList.length;
                stableNodeList = new Array(nodeListLength);
                for (i = 0; i < linkFns.length; i += 3) {
                  idx = linkFns[i];
                  stableNodeList[idx] = nodeList[idx];
                }
              } else {
                stableNodeList = nodeList;
              }
              for (i = 0, ii = linkFns.length; i < ii; ) {
                node = stableNodeList[linkFns[i++]];
                nodeLinkFn = linkFns[i++];
                childLinkFn = linkFns[i++];
                if (nodeLinkFn) {
                  if (nodeLinkFn.scope) {
                    childScope = scope.$new();
                    compile.$$addScopeInfo(jqLite(node), childScope);
                  } else {
                    childScope = scope;
                  }
                  if (nodeLinkFn.transcludeOnThisElement) {
                    childBoundTranscludeFn = createBoundTranscludeFn(scope, nodeLinkFn.transclude, parentBoundTranscludeFn);
                  } else if (!nodeLinkFn.templateOnThisElement && parentBoundTranscludeFn) {
                    childBoundTranscludeFn = parentBoundTranscludeFn;
                  } else if (!parentBoundTranscludeFn && transcludeFn) {
                    childBoundTranscludeFn = createBoundTranscludeFn(scope, transcludeFn);
                  } else {
                    childBoundTranscludeFn = null;
                  }
                  nodeLinkFn(childLinkFn, childScope, node, $rootElement, childBoundTranscludeFn);
                } else if (childLinkFn) {
                  childLinkFn(scope, node.childNodes, undefined, parentBoundTranscludeFn);
                }
              }
            }
          }
          function createBoundTranscludeFn(scope, transcludeFn, previousBoundTranscludeFn) {
            function boundTranscludeFn(transcludedScope, cloneFn, controllers, futureParentElement, containingScope) {
              if (!transcludedScope) {
                transcludedScope = scope.$new(false, containingScope);
                transcludedScope.$$transcluded = true;
              }
              return transcludeFn(transcludedScope, cloneFn, {
                parentBoundTranscludeFn: previousBoundTranscludeFn,
                transcludeControllers: controllers,
                futureParentElement: futureParentElement
              });
            }
            var boundSlots = boundTranscludeFn.$$slots = createMap();
            for (var slotName in transcludeFn.$$slots) {
              if (transcludeFn.$$slots[slotName]) {
                boundSlots[slotName] = createBoundTranscludeFn(scope, transcludeFn.$$slots[slotName], previousBoundTranscludeFn);
              } else {
                boundSlots[slotName] = null;
              }
            }
            return boundTranscludeFn;
          }
          function collectDirectives(node, directives, attrs, maxPriority, ignoreDirective) {
            var nodeType = node.nodeType,
                attrsMap = attrs.$attr,
                match,
                className;
            switch (nodeType) {
              case NODE_TYPE_ELEMENT:
                addDirective(directives, directiveNormalize(nodeName_(node)), 'E', maxPriority, ignoreDirective);
                for (var attr,
                    name,
                    nName,
                    ngAttrName,
                    value,
                    isNgAttr,
                    nAttrs = node.attributes,
                    j = 0,
                    jj = nAttrs && nAttrs.length; j < jj; j++) {
                  var attrStartName = false;
                  var attrEndName = false;
                  attr = nAttrs[j];
                  name = attr.name;
                  value = trim(attr.value);
                  ngAttrName = directiveNormalize(name);
                  if (isNgAttr = NG_ATTR_BINDING.test(ngAttrName)) {
                    name = name.replace(PREFIX_REGEXP, '').substr(8).replace(/_(.)/g, function(match, letter) {
                      return letter.toUpperCase();
                    });
                  }
                  var multiElementMatch = ngAttrName.match(MULTI_ELEMENT_DIR_RE);
                  if (multiElementMatch && directiveIsMultiElement(multiElementMatch[1])) {
                    attrStartName = name;
                    attrEndName = name.substr(0, name.length - 5) + 'end';
                    name = name.substr(0, name.length - 6);
                  }
                  nName = directiveNormalize(name.toLowerCase());
                  attrsMap[nName] = name;
                  if (isNgAttr || !attrs.hasOwnProperty(nName)) {
                    attrs[nName] = value;
                    if (getBooleanAttrName(node, nName)) {
                      attrs[nName] = true;
                    }
                  }
                  addAttrInterpolateDirective(node, directives, value, nName, isNgAttr);
                  addDirective(directives, nName, 'A', maxPriority, ignoreDirective, attrStartName, attrEndName);
                }
                className = node.className;
                if (isObject(className)) {
                  className = className.animVal;
                }
                if (isString(className) && className !== '') {
                  while (match = CLASS_DIRECTIVE_REGEXP.exec(className)) {
                    nName = directiveNormalize(match[2]);
                    if (addDirective(directives, nName, 'C', maxPriority, ignoreDirective)) {
                      attrs[nName] = trim(match[3]);
                    }
                    className = className.substr(match.index + match[0].length);
                  }
                }
                break;
              case NODE_TYPE_TEXT:
                if (msie === 11) {
                  while (node.parentNode && node.nextSibling && node.nextSibling.nodeType === NODE_TYPE_TEXT) {
                    node.nodeValue = node.nodeValue + node.nextSibling.nodeValue;
                    node.parentNode.removeChild(node.nextSibling);
                  }
                }
                addTextInterpolateDirective(directives, node.nodeValue);
                break;
              case NODE_TYPE_COMMENT:
                try {
                  match = COMMENT_DIRECTIVE_REGEXP.exec(node.nodeValue);
                  if (match) {
                    nName = directiveNormalize(match[1]);
                    if (addDirective(directives, nName, 'M', maxPriority, ignoreDirective)) {
                      attrs[nName] = trim(match[2]);
                    }
                  }
                } catch (e) {}
                break;
            }
            directives.sort(byPriority);
            return directives;
          }
          function groupScan(node, attrStart, attrEnd) {
            var nodes = [];
            var depth = 0;
            if (attrStart && node.hasAttribute && node.hasAttribute(attrStart)) {
              do {
                if (!node) {
                  throw $compileMinErr('uterdir', "Unterminated attribute, found '{0}' but no matching '{1}' found.", attrStart, attrEnd);
                }
                if (node.nodeType == NODE_TYPE_ELEMENT) {
                  if (node.hasAttribute(attrStart))
                    depth++;
                  if (node.hasAttribute(attrEnd))
                    depth--;
                }
                nodes.push(node);
                node = node.nextSibling;
              } while (depth > 0);
            } else {
              nodes.push(node);
            }
            return jqLite(nodes);
          }
          function groupElementsLinkFnWrapper(linkFn, attrStart, attrEnd) {
            return function groupedElementsLink(scope, element, attrs, controllers, transcludeFn) {
              element = groupScan(element[0], attrStart, attrEnd);
              return linkFn(scope, element, attrs, controllers, transcludeFn);
            };
          }
          function compilationGenerator(eager, $compileNodes, transcludeFn, maxPriority, ignoreDirective, previousCompileContext) {
            var compiled;
            if (eager) {
              return compile($compileNodes, transcludeFn, maxPriority, ignoreDirective, previousCompileContext);
            }
            return function lazyCompilation() {
              if (!compiled) {
                compiled = compile($compileNodes, transcludeFn, maxPriority, ignoreDirective, previousCompileContext);
                $compileNodes = transcludeFn = previousCompileContext = null;
              }
              return compiled.apply(this, arguments);
            };
          }
          function applyDirectivesToNode(directives, compileNode, templateAttrs, transcludeFn, jqCollection, originalReplaceDirective, preLinkFns, postLinkFns, previousCompileContext) {
            previousCompileContext = previousCompileContext || {};
            var terminalPriority = -Number.MAX_VALUE,
                newScopeDirective = previousCompileContext.newScopeDirective,
                controllerDirectives = previousCompileContext.controllerDirectives,
                newIsolateScopeDirective = previousCompileContext.newIsolateScopeDirective,
                templateDirective = previousCompileContext.templateDirective,
                nonTlbTranscludeDirective = previousCompileContext.nonTlbTranscludeDirective,
                hasTranscludeDirective = false,
                hasTemplate = false,
                hasElementTranscludeDirective = previousCompileContext.hasElementTranscludeDirective,
                $compileNode = templateAttrs.$$element = jqLite(compileNode),
                directive,
                directiveName,
                $template,
                replaceDirective = originalReplaceDirective,
                childTranscludeFn = transcludeFn,
                linkFn,
                didScanForMultipleTransclusion = false,
                mightHaveMultipleTransclusionError = false,
                directiveValue;
            for (var i = 0,
                ii = directives.length; i < ii; i++) {
              directive = directives[i];
              var attrStart = directive.$$start;
              var attrEnd = directive.$$end;
              if (attrStart) {
                $compileNode = groupScan(compileNode, attrStart, attrEnd);
              }
              $template = undefined;
              if (terminalPriority > directive.priority) {
                break;
              }
              if (directiveValue = directive.scope) {
                if (!directive.templateUrl) {
                  if (isObject(directiveValue)) {
                    assertNoDuplicate('new/isolated scope', newIsolateScopeDirective || newScopeDirective, directive, $compileNode);
                    newIsolateScopeDirective = directive;
                  } else {
                    assertNoDuplicate('new/isolated scope', newIsolateScopeDirective, directive, $compileNode);
                  }
                }
                newScopeDirective = newScopeDirective || directive;
              }
              directiveName = directive.name;
              if (!didScanForMultipleTransclusion && ((directive.replace && (directive.templateUrl || directive.template)) || (directive.transclude && !directive.$$tlb))) {
                var candidateDirective;
                for (var scanningIndex = i + 1; candidateDirective = directives[scanningIndex++]; ) {
                  if ((candidateDirective.transclude && !candidateDirective.$$tlb) || (candidateDirective.replace && (candidateDirective.templateUrl || candidateDirective.template))) {
                    mightHaveMultipleTransclusionError = true;
                    break;
                  }
                }
                didScanForMultipleTransclusion = true;
              }
              if (!directive.templateUrl && directive.controller) {
                directiveValue = directive.controller;
                controllerDirectives = controllerDirectives || createMap();
                assertNoDuplicate("'" + directiveName + "' controller", controllerDirectives[directiveName], directive, $compileNode);
                controllerDirectives[directiveName] = directive;
              }
              if (directiveValue = directive.transclude) {
                hasTranscludeDirective = true;
                if (!directive.$$tlb) {
                  assertNoDuplicate('transclusion', nonTlbTranscludeDirective, directive, $compileNode);
                  nonTlbTranscludeDirective = directive;
                }
                if (directiveValue == 'element') {
                  hasElementTranscludeDirective = true;
                  terminalPriority = directive.priority;
                  $template = $compileNode;
                  $compileNode = templateAttrs.$$element = jqLite(compile.$$createComment(directiveName, templateAttrs[directiveName]));
                  compileNode = $compileNode[0];
                  replaceWith(jqCollection, sliceArgs($template), compileNode);
                  $template[0].$$parentNode = $template[0].parentNode;
                  childTranscludeFn = compilationGenerator(mightHaveMultipleTransclusionError, $template, transcludeFn, terminalPriority, replaceDirective && replaceDirective.name, {nonTlbTranscludeDirective: nonTlbTranscludeDirective});
                } else {
                  var slots = createMap();
                  $template = jqLite(jqLiteClone(compileNode)).contents();
                  if (isObject(directiveValue)) {
                    $template = [];
                    var slotMap = createMap();
                    var filledSlots = createMap();
                    forEach(directiveValue, function(elementSelector, slotName) {
                      var optional = (elementSelector.charAt(0) === '?');
                      elementSelector = optional ? elementSelector.substring(1) : elementSelector;
                      slotMap[elementSelector] = slotName;
                      slots[slotName] = null;
                      filledSlots[slotName] = optional;
                    });
                    forEach($compileNode.contents(), function(node) {
                      var slotName = slotMap[directiveNormalize(nodeName_(node))];
                      if (slotName) {
                        filledSlots[slotName] = true;
                        slots[slotName] = slots[slotName] || [];
                        slots[slotName].push(node);
                      } else {
                        $template.push(node);
                      }
                    });
                    forEach(filledSlots, function(filled, slotName) {
                      if (!filled) {
                        throw $compileMinErr('reqslot', 'Required transclusion slot `{0}` was not filled.', slotName);
                      }
                    });
                    for (var slotName in slots) {
                      if (slots[slotName]) {
                        slots[slotName] = compilationGenerator(mightHaveMultipleTransclusionError, slots[slotName], transcludeFn);
                      }
                    }
                  }
                  $compileNode.empty();
                  childTranscludeFn = compilationGenerator(mightHaveMultipleTransclusionError, $template, transcludeFn, undefined, undefined, {needsNewScope: directive.$$isolateScope || directive.$$newScope});
                  childTranscludeFn.$$slots = slots;
                }
              }
              if (directive.template) {
                hasTemplate = true;
                assertNoDuplicate('template', templateDirective, directive, $compileNode);
                templateDirective = directive;
                directiveValue = (isFunction(directive.template)) ? directive.template($compileNode, templateAttrs) : directive.template;
                directiveValue = denormalizeTemplate(directiveValue);
                if (directive.replace) {
                  replaceDirective = directive;
                  if (jqLiteIsTextNode(directiveValue)) {
                    $template = [];
                  } else {
                    $template = removeComments(wrapTemplate(directive.templateNamespace, trim(directiveValue)));
                  }
                  compileNode = $template[0];
                  if ($template.length != 1 || compileNode.nodeType !== NODE_TYPE_ELEMENT) {
                    throw $compileMinErr('tplrt', "Template for directive '{0}' must have exactly one root element. {1}", directiveName, '');
                  }
                  replaceWith(jqCollection, $compileNode, compileNode);
                  var newTemplateAttrs = {$attr: {}};
                  var templateDirectives = collectDirectives(compileNode, [], newTemplateAttrs);
                  var unprocessedDirectives = directives.splice(i + 1, directives.length - (i + 1));
                  if (newIsolateScopeDirective || newScopeDirective) {
                    markDirectiveScope(templateDirectives, newIsolateScopeDirective, newScopeDirective);
                  }
                  directives = directives.concat(templateDirectives).concat(unprocessedDirectives);
                  mergeTemplateAttributes(templateAttrs, newTemplateAttrs);
                  ii = directives.length;
                } else {
                  $compileNode.html(directiveValue);
                }
              }
              if (directive.templateUrl) {
                hasTemplate = true;
                assertNoDuplicate('template', templateDirective, directive, $compileNode);
                templateDirective = directive;
                if (directive.replace) {
                  replaceDirective = directive;
                }
                nodeLinkFn = compileTemplateUrl(directives.splice(i, directives.length - i), $compileNode, templateAttrs, jqCollection, hasTranscludeDirective && childTranscludeFn, preLinkFns, postLinkFns, {
                  controllerDirectives: controllerDirectives,
                  newScopeDirective: (newScopeDirective !== directive) && newScopeDirective,
                  newIsolateScopeDirective: newIsolateScopeDirective,
                  templateDirective: templateDirective,
                  nonTlbTranscludeDirective: nonTlbTranscludeDirective
                });
                ii = directives.length;
              } else if (directive.compile) {
                try {
                  linkFn = directive.compile($compileNode, templateAttrs, childTranscludeFn);
                  var context = directive.$$originalDirective || directive;
                  if (isFunction(linkFn)) {
                    addLinkFns(null, bind(context, linkFn), attrStart, attrEnd);
                  } else if (linkFn) {
                    addLinkFns(bind(context, linkFn.pre), bind(context, linkFn.post), attrStart, attrEnd);
                  }
                } catch (e) {
                  $exceptionHandler(e, startingTag($compileNode));
                }
              }
              if (directive.terminal) {
                nodeLinkFn.terminal = true;
                terminalPriority = Math.max(terminalPriority, directive.priority);
              }
            }
            nodeLinkFn.scope = newScopeDirective && newScopeDirective.scope === true;
            nodeLinkFn.transcludeOnThisElement = hasTranscludeDirective;
            nodeLinkFn.templateOnThisElement = hasTemplate;
            nodeLinkFn.transclude = childTranscludeFn;
            previousCompileContext.hasElementTranscludeDirective = hasElementTranscludeDirective;
            return nodeLinkFn;
            function addLinkFns(pre, post, attrStart, attrEnd) {
              if (pre) {
                if (attrStart)
                  pre = groupElementsLinkFnWrapper(pre, attrStart, attrEnd);
                pre.require = directive.require;
                pre.directiveName = directiveName;
                if (newIsolateScopeDirective === directive || directive.$$isolateScope) {
                  pre = cloneAndAnnotateFn(pre, {isolateScope: true});
                }
                preLinkFns.push(pre);
              }
              if (post) {
                if (attrStart)
                  post = groupElementsLinkFnWrapper(post, attrStart, attrEnd);
                post.require = directive.require;
                post.directiveName = directiveName;
                if (newIsolateScopeDirective === directive || directive.$$isolateScope) {
                  post = cloneAndAnnotateFn(post, {isolateScope: true});
                }
                postLinkFns.push(post);
              }
            }
            function nodeLinkFn(childLinkFn, scope, linkNode, $rootElement, boundTranscludeFn) {
              var i,
                  ii,
                  linkFn,
                  isolateScope,
                  controllerScope,
                  elementControllers,
                  transcludeFn,
                  $element,
                  attrs,
                  scopeBindingInfo;
              if (compileNode === linkNode) {
                attrs = templateAttrs;
                $element = templateAttrs.$$element;
              } else {
                $element = jqLite(linkNode);
                attrs = new Attributes($element, templateAttrs);
              }
              controllerScope = scope;
              if (newIsolateScopeDirective) {
                isolateScope = scope.$new(true);
              } else if (newScopeDirective) {
                controllerScope = scope.$parent;
              }
              if (boundTranscludeFn) {
                transcludeFn = controllersBoundTransclude;
                transcludeFn.$$boundTransclude = boundTranscludeFn;
                transcludeFn.isSlotFilled = function(slotName) {
                  return !!boundTranscludeFn.$$slots[slotName];
                };
              }
              if (controllerDirectives) {
                elementControllers = setupControllers($element, attrs, transcludeFn, controllerDirectives, isolateScope, scope, newIsolateScopeDirective);
              }
              if (newIsolateScopeDirective) {
                compile.$$addScopeInfo($element, isolateScope, true, !(templateDirective && (templateDirective === newIsolateScopeDirective || templateDirective === newIsolateScopeDirective.$$originalDirective)));
                compile.$$addScopeClass($element, true);
                isolateScope.$$isolateBindings = newIsolateScopeDirective.$$isolateBindings;
                scopeBindingInfo = initializeDirectiveBindings(scope, attrs, isolateScope, isolateScope.$$isolateBindings, newIsolateScopeDirective);
                if (scopeBindingInfo.removeWatches) {
                  isolateScope.$on('$destroy', scopeBindingInfo.removeWatches);
                }
              }
              for (var name in elementControllers) {
                var controllerDirective = controllerDirectives[name];
                var controller = elementControllers[name];
                var bindings = controllerDirective.$$bindings.bindToController;
                if (controller.identifier && bindings) {
                  controller.bindingInfo = initializeDirectiveBindings(controllerScope, attrs, controller.instance, bindings, controllerDirective);
                } else {
                  controller.bindingInfo = {};
                }
                var controllerResult = controller();
                if (controllerResult !== controller.instance) {
                  controller.instance = controllerResult;
                  $element.data('$' + controllerDirective.name + 'Controller', controllerResult);
                  controller.bindingInfo.removeWatches && controller.bindingInfo.removeWatches();
                  controller.bindingInfo = initializeDirectiveBindings(controllerScope, attrs, controller.instance, bindings, controllerDirective);
                }
              }
              forEach(controllerDirectives, function(controllerDirective, name) {
                var require = controllerDirective.require;
                if (controllerDirective.bindToController && !isArray(require) && isObject(require)) {
                  extend(elementControllers[name].instance, getControllers(name, require, $element, elementControllers));
                }
              });
              forEach(elementControllers, function(controller) {
                var controllerInstance = controller.instance;
                if (isFunction(controllerInstance.$onChanges)) {
                  try {
                    controllerInstance.$onChanges(controller.bindingInfo.initialChanges);
                  } catch (e) {
                    $exceptionHandler(e);
                  }
                }
                if (isFunction(controllerInstance.$onInit)) {
                  try {
                    controllerInstance.$onInit();
                  } catch (e) {
                    $exceptionHandler(e);
                  }
                }
                if (isFunction(controllerInstance.$onDestroy)) {
                  controllerScope.$on('$destroy', function callOnDestroyHook() {
                    controllerInstance.$onDestroy();
                  });
                }
              });
              for (i = 0, ii = preLinkFns.length; i < ii; i++) {
                linkFn = preLinkFns[i];
                invokeLinkFn(linkFn, linkFn.isolateScope ? isolateScope : scope, $element, attrs, linkFn.require && getControllers(linkFn.directiveName, linkFn.require, $element, elementControllers), transcludeFn);
              }
              var scopeToChild = scope;
              if (newIsolateScopeDirective && (newIsolateScopeDirective.template || newIsolateScopeDirective.templateUrl === null)) {
                scopeToChild = isolateScope;
              }
              childLinkFn && childLinkFn(scopeToChild, linkNode.childNodes, undefined, boundTranscludeFn);
              for (i = postLinkFns.length - 1; i >= 0; i--) {
                linkFn = postLinkFns[i];
                invokeLinkFn(linkFn, linkFn.isolateScope ? isolateScope : scope, $element, attrs, linkFn.require && getControllers(linkFn.directiveName, linkFn.require, $element, elementControllers), transcludeFn);
              }
              forEach(elementControllers, function(controller) {
                var controllerInstance = controller.instance;
                if (isFunction(controllerInstance.$postLink)) {
                  controllerInstance.$postLink();
                }
              });
              function controllersBoundTransclude(scope, cloneAttachFn, futureParentElement, slotName) {
                var transcludeControllers;
                if (!isScope(scope)) {
                  slotName = futureParentElement;
                  futureParentElement = cloneAttachFn;
                  cloneAttachFn = scope;
                  scope = undefined;
                }
                if (hasElementTranscludeDirective) {
                  transcludeControllers = elementControllers;
                }
                if (!futureParentElement) {
                  futureParentElement = hasElementTranscludeDirective ? $element.parent() : $element;
                }
                if (slotName) {
                  var slotTranscludeFn = boundTranscludeFn.$$slots[slotName];
                  if (slotTranscludeFn) {
                    return slotTranscludeFn(scope, cloneAttachFn, transcludeControllers, futureParentElement, scopeToChild);
                  } else if (isUndefined(slotTranscludeFn)) {
                    throw $compileMinErr('noslot', 'No parent directive that requires a transclusion with slot name "{0}". ' + 'Element: {1}', slotName, startingTag($element));
                  }
                } else {
                  return boundTranscludeFn(scope, cloneAttachFn, transcludeControllers, futureParentElement, scopeToChild);
                }
              }
            }
          }
          function getControllers(directiveName, require, $element, elementControllers) {
            var value;
            if (isString(require)) {
              var match = require.match(REQUIRE_PREFIX_REGEXP);
              var name = require.substring(match[0].length);
              var inheritType = match[1] || match[3];
              var optional = match[2] === '?';
              if (inheritType === '^^') {
                $element = $element.parent();
              } else {
                value = elementControllers && elementControllers[name];
                value = value && value.instance;
              }
              if (!value) {
                var dataName = '$' + name + 'Controller';
                value = inheritType ? $element.inheritedData(dataName) : $element.data(dataName);
              }
              if (!value && !optional) {
                throw $compileMinErr('ctreq', "Controller '{0}', required by directive '{1}', can't be found!", name, directiveName);
              }
            } else if (isArray(require)) {
              value = [];
              for (var i = 0,
                  ii = require.length; i < ii; i++) {
                value[i] = getControllers(directiveName, require[i], $element, elementControllers);
              }
            } else if (isObject(require)) {
              value = {};
              forEach(require, function(controller, property) {
                value[property] = getControllers(directiveName, controller, $element, elementControllers);
              });
            }
            return value || null;
          }
          function setupControllers($element, attrs, transcludeFn, controllerDirectives, isolateScope, scope, newIsolateScopeDirective) {
            var elementControllers = createMap();
            for (var controllerKey in controllerDirectives) {
              var directive = controllerDirectives[controllerKey];
              var locals = {
                $scope: directive === newIsolateScopeDirective || directive.$$isolateScope ? isolateScope : scope,
                $element: $element,
                $attrs: attrs,
                $transclude: transcludeFn
              };
              var controller = directive.controller;
              if (controller == '@') {
                controller = attrs[directive.name];
              }
              var controllerInstance = $controller(controller, locals, true, directive.controllerAs);
              elementControllers[directive.name] = controllerInstance;
              $element.data('$' + directive.name + 'Controller', controllerInstance.instance);
            }
            return elementControllers;
          }
          function markDirectiveScope(directives, isolateScope, newScope) {
            for (var j = 0,
                jj = directives.length; j < jj; j++) {
              directives[j] = inherit(directives[j], {
                $$isolateScope: isolateScope,
                $$newScope: newScope
              });
            }
          }
          function addDirective(tDirectives, name, location, maxPriority, ignoreDirective, startAttrName, endAttrName) {
            if (name === ignoreDirective)
              return null;
            var match = null;
            if (hasDirectives.hasOwnProperty(name)) {
              for (var directive,
                  directives = $injector.get(name + Suffix),
                  i = 0,
                  ii = directives.length; i < ii; i++) {
                try {
                  directive = directives[i];
                  if ((isUndefined(maxPriority) || maxPriority > directive.priority) && directive.restrict.indexOf(location) != -1) {
                    if (startAttrName) {
                      directive = inherit(directive, {
                        $$start: startAttrName,
                        $$end: endAttrName
                      });
                    }
                    if (!directive.$$bindings) {
                      var bindings = directive.$$bindings = parseDirectiveBindings(directive, directive.name);
                      if (isObject(bindings.isolateScope)) {
                        directive.$$isolateBindings = bindings.isolateScope;
                      }
                    }
                    tDirectives.push(directive);
                    match = directive;
                  }
                } catch (e) {
                  $exceptionHandler(e);
                }
              }
            }
            return match;
          }
          function directiveIsMultiElement(name) {
            if (hasDirectives.hasOwnProperty(name)) {
              for (var directive,
                  directives = $injector.get(name + Suffix),
                  i = 0,
                  ii = directives.length; i < ii; i++) {
                directive = directives[i];
                if (directive.multiElement) {
                  return true;
                }
              }
            }
            return false;
          }
          function mergeTemplateAttributes(dst, src) {
            var srcAttr = src.$attr,
                dstAttr = dst.$attr,
                $element = dst.$$element;
            forEach(dst, function(value, key) {
              if (key.charAt(0) != '$') {
                if (src[key] && src[key] !== value) {
                  value += (key === 'style' ? ';' : ' ') + src[key];
                }
                dst.$set(key, value, true, srcAttr[key]);
              }
            });
            forEach(src, function(value, key) {
              if (!dst.hasOwnProperty(key) && key.charAt(0) !== '$') {
                dst[key] = value;
                if (key !== 'class' && key !== 'style') {
                  dstAttr[key] = srcAttr[key];
                }
              }
            });
          }
          function compileTemplateUrl(directives, $compileNode, tAttrs, $rootElement, childTranscludeFn, preLinkFns, postLinkFns, previousCompileContext) {
            var linkQueue = [],
                afterTemplateNodeLinkFn,
                afterTemplateChildLinkFn,
                beforeTemplateCompileNode = $compileNode[0],
                origAsyncDirective = directives.shift(),
                derivedSyncDirective = inherit(origAsyncDirective, {
                  templateUrl: null,
                  transclude: null,
                  replace: null,
                  $$originalDirective: origAsyncDirective
                }),
                templateUrl = (isFunction(origAsyncDirective.templateUrl)) ? origAsyncDirective.templateUrl($compileNode, tAttrs) : origAsyncDirective.templateUrl,
                templateNamespace = origAsyncDirective.templateNamespace;
            $compileNode.empty();
            $templateRequest(templateUrl).then(function(content) {
              var compileNode,
                  tempTemplateAttrs,
                  $template,
                  childBoundTranscludeFn;
              content = denormalizeTemplate(content);
              if (origAsyncDirective.replace) {
                if (jqLiteIsTextNode(content)) {
                  $template = [];
                } else {
                  $template = removeComments(wrapTemplate(templateNamespace, trim(content)));
                }
                compileNode = $template[0];
                if ($template.length != 1 || compileNode.nodeType !== NODE_TYPE_ELEMENT) {
                  throw $compileMinErr('tplrt', "Template for directive '{0}' must have exactly one root element. {1}", origAsyncDirective.name, templateUrl);
                }
                tempTemplateAttrs = {$attr: {}};
                replaceWith($rootElement, $compileNode, compileNode);
                var templateDirectives = collectDirectives(compileNode, [], tempTemplateAttrs);
                if (isObject(origAsyncDirective.scope)) {
                  markDirectiveScope(templateDirectives, true);
                }
                directives = templateDirectives.concat(directives);
                mergeTemplateAttributes(tAttrs, tempTemplateAttrs);
              } else {
                compileNode = beforeTemplateCompileNode;
                $compileNode.html(content);
              }
              directives.unshift(derivedSyncDirective);
              afterTemplateNodeLinkFn = applyDirectivesToNode(directives, compileNode, tAttrs, childTranscludeFn, $compileNode, origAsyncDirective, preLinkFns, postLinkFns, previousCompileContext);
              forEach($rootElement, function(node, i) {
                if (node == compileNode) {
                  $rootElement[i] = $compileNode[0];
                }
              });
              afterTemplateChildLinkFn = compileNodes($compileNode[0].childNodes, childTranscludeFn);
              while (linkQueue.length) {
                var scope = linkQueue.shift(),
                    beforeTemplateLinkNode = linkQueue.shift(),
                    linkRootElement = linkQueue.shift(),
                    boundTranscludeFn = linkQueue.shift(),
                    linkNode = $compileNode[0];
                if (scope.$$destroyed)
                  continue;
                if (beforeTemplateLinkNode !== beforeTemplateCompileNode) {
                  var oldClasses = beforeTemplateLinkNode.className;
                  if (!(previousCompileContext.hasElementTranscludeDirective && origAsyncDirective.replace)) {
                    linkNode = jqLiteClone(compileNode);
                  }
                  replaceWith(linkRootElement, jqLite(beforeTemplateLinkNode), linkNode);
                  safeAddClass(jqLite(linkNode), oldClasses);
                }
                if (afterTemplateNodeLinkFn.transcludeOnThisElement) {
                  childBoundTranscludeFn = createBoundTranscludeFn(scope, afterTemplateNodeLinkFn.transclude, boundTranscludeFn);
                } else {
                  childBoundTranscludeFn = boundTranscludeFn;
                }
                afterTemplateNodeLinkFn(afterTemplateChildLinkFn, scope, linkNode, $rootElement, childBoundTranscludeFn);
              }
              linkQueue = null;
            });
            return function delayedNodeLinkFn(ignoreChildLinkFn, scope, node, rootElement, boundTranscludeFn) {
              var childBoundTranscludeFn = boundTranscludeFn;
              if (scope.$$destroyed)
                return;
              if (linkQueue) {
                linkQueue.push(scope, node, rootElement, childBoundTranscludeFn);
              } else {
                if (afterTemplateNodeLinkFn.transcludeOnThisElement) {
                  childBoundTranscludeFn = createBoundTranscludeFn(scope, afterTemplateNodeLinkFn.transclude, boundTranscludeFn);
                }
                afterTemplateNodeLinkFn(afterTemplateChildLinkFn, scope, node, rootElement, childBoundTranscludeFn);
              }
            };
          }
          function byPriority(a, b) {
            var diff = b.priority - a.priority;
            if (diff !== 0)
              return diff;
            if (a.name !== b.name)
              return (a.name < b.name) ? -1 : 1;
            return a.index - b.index;
          }
          function assertNoDuplicate(what, previousDirective, directive, element) {
            function wrapModuleNameIfDefined(moduleName) {
              return moduleName ? (' (module: ' + moduleName + ')') : '';
            }
            if (previousDirective) {
              throw $compileMinErr('multidir', 'Multiple directives [{0}{1}, {2}{3}] asking for {4} on: {5}', previousDirective.name, wrapModuleNameIfDefined(previousDirective.$$moduleName), directive.name, wrapModuleNameIfDefined(directive.$$moduleName), what, startingTag(element));
            }
          }
          function addTextInterpolateDirective(directives, text) {
            var interpolateFn = $interpolate(text, true);
            if (interpolateFn) {
              directives.push({
                priority: 0,
                compile: function textInterpolateCompileFn(templateNode) {
                  var templateNodeParent = templateNode.parent(),
                      hasCompileParent = !!templateNodeParent.length;
                  if (hasCompileParent)
                    compile.$$addBindingClass(templateNodeParent);
                  return function textInterpolateLinkFn(scope, node) {
                    var parent = node.parent();
                    if (!hasCompileParent)
                      compile.$$addBindingClass(parent);
                    compile.$$addBindingInfo(parent, interpolateFn.expressions);
                    scope.$watch(interpolateFn, function interpolateFnWatchAction(value) {
                      node[0].nodeValue = value;
                    });
                  };
                }
              });
            }
          }
          function wrapTemplate(type, template) {
            type = lowercase(type || 'html');
            switch (type) {
              case 'svg':
              case 'math':
                var wrapper = window.document.createElement('div');
                wrapper.innerHTML = '<' + type + '>' + template + '</' + type + '>';
                return wrapper.childNodes[0].childNodes;
              default:
                return template;
            }
          }
          function getTrustedContext(node, attrNormalizedName) {
            if (attrNormalizedName == "srcdoc") {
              return $sce.HTML;
            }
            var tag = nodeName_(node);
            if (attrNormalizedName == "xlinkHref" || (tag == "form" && attrNormalizedName == "action") || (tag != "img" && (attrNormalizedName == "src" || attrNormalizedName == "ngSrc"))) {
              return $sce.RESOURCE_URL;
            }
          }
          function addAttrInterpolateDirective(node, directives, value, name, allOrNothing) {
            var trustedContext = getTrustedContext(node, name);
            allOrNothing = ALL_OR_NOTHING_ATTRS[name] || allOrNothing;
            var interpolateFn = $interpolate(value, true, trustedContext, allOrNothing);
            if (!interpolateFn)
              return;
            if (name === "multiple" && nodeName_(node) === "select") {
              throw $compileMinErr("selmulti", "Binding to the 'multiple' attribute is not supported. Element: {0}", startingTag(node));
            }
            directives.push({
              priority: 100,
              compile: function() {
                return {pre: function attrInterpolatePreLinkFn(scope, element, attr) {
                    var $$observers = (attr.$$observers || (attr.$$observers = createMap()));
                    if (EVENT_HANDLER_ATTR_REGEXP.test(name)) {
                      throw $compileMinErr('nodomevents', "Interpolations for HTML DOM event attributes are disallowed.  Please use the " + "ng- versions (such as ng-click instead of onclick) instead.");
                    }
                    var newValue = attr[name];
                    if (newValue !== value) {
                      interpolateFn = newValue && $interpolate(newValue, true, trustedContext, allOrNothing);
                      value = newValue;
                    }
                    if (!interpolateFn)
                      return;
                    attr[name] = interpolateFn(scope);
                    ($$observers[name] || ($$observers[name] = [])).$$inter = true;
                    (attr.$$observers && attr.$$observers[name].$$scope || scope).$watch(interpolateFn, function interpolateFnWatchAction(newValue, oldValue) {
                      if (name === 'class' && newValue != oldValue) {
                        attr.$updateClass(newValue, oldValue);
                      } else {
                        attr.$set(name, newValue);
                      }
                    });
                  }};
              }
            });
          }
          function replaceWith($rootElement, elementsToRemove, newNode) {
            var firstElementToRemove = elementsToRemove[0],
                removeCount = elementsToRemove.length,
                parent = firstElementToRemove.parentNode,
                i,
                ii;
            if ($rootElement) {
              for (i = 0, ii = $rootElement.length; i < ii; i++) {
                if ($rootElement[i] == firstElementToRemove) {
                  $rootElement[i++] = newNode;
                  for (var j = i,
                      j2 = j + removeCount - 1,
                      jj = $rootElement.length; j < jj; j++, j2++) {
                    if (j2 < jj) {
                      $rootElement[j] = $rootElement[j2];
                    } else {
                      delete $rootElement[j];
                    }
                  }
                  $rootElement.length -= removeCount - 1;
                  if ($rootElement.context === firstElementToRemove) {
                    $rootElement.context = newNode;
                  }
                  break;
                }
              }
            }
            if (parent) {
              parent.replaceChild(newNode, firstElementToRemove);
            }
            var fragment = window.document.createDocumentFragment();
            for (i = 0; i < removeCount; i++) {
              fragment.appendChild(elementsToRemove[i]);
            }
            if (jqLite.hasData(firstElementToRemove)) {
              jqLite.data(newNode, jqLite.data(firstElementToRemove));
              jqLite(firstElementToRemove).off('$destroy');
            }
            jqLite.cleanData(fragment.querySelectorAll('*'));
            for (i = 1; i < removeCount; i++) {
              delete elementsToRemove[i];
            }
            elementsToRemove[0] = newNode;
            elementsToRemove.length = 1;
          }
          function cloneAndAnnotateFn(fn, annotation) {
            return extend(function() {
              return fn.apply(null, arguments);
            }, fn, annotation);
          }
          function invokeLinkFn(linkFn, scope, $element, attrs, controllers, transcludeFn) {
            try {
              linkFn(scope, $element, attrs, controllers, transcludeFn);
            } catch (e) {
              $exceptionHandler(e, startingTag($element));
            }
          }
          function initializeDirectiveBindings(scope, attrs, destination, bindings, directive) {
            var removeWatchCollection = [];
            var initialChanges = {};
            var changes;
            forEach(bindings, function initializeBinding(definition, scopeName) {
              var attrName = definition.attrName,
                  optional = definition.optional,
                  mode = definition.mode,
                  lastValue,
                  parentGet,
                  parentSet,
                  compare,
                  removeWatch;
              switch (mode) {
                case '@':
                  if (!optional && !hasOwnProperty.call(attrs, attrName)) {
                    destination[scopeName] = attrs[attrName] = void 0;
                  }
                  attrs.$observe(attrName, function(value) {
                    if (isString(value) || isBoolean(value)) {
                      var oldValue = destination[scopeName];
                      recordChanges(scopeName, value, oldValue);
                      destination[scopeName] = value;
                    }
                  });
                  attrs.$$observers[attrName].$$scope = scope;
                  lastValue = attrs[attrName];
                  if (isString(lastValue)) {
                    destination[scopeName] = $interpolate(lastValue)(scope);
                  } else if (isBoolean(lastValue)) {
                    destination[scopeName] = lastValue;
                  }
                  initialChanges[scopeName] = new SimpleChange(_UNINITIALIZED_VALUE, destination[scopeName]);
                  break;
                case '=':
                  if (!hasOwnProperty.call(attrs, attrName)) {
                    if (optional)
                      break;
                    attrs[attrName] = void 0;
                  }
                  if (optional && !attrs[attrName])
                    break;
                  parentGet = $parse(attrs[attrName]);
                  if (parentGet.literal) {
                    compare = equals;
                  } else {
                    compare = function simpleCompare(a, b) {
                      return a === b || (a !== a && b !== b);
                    };
                  }
                  parentSet = parentGet.assign || function() {
                    lastValue = destination[scopeName] = parentGet(scope);
                    throw $compileMinErr('nonassign', "Expression '{0}' in attribute '{1}' used with directive '{2}' is non-assignable!", attrs[attrName], attrName, directive.name);
                  };
                  lastValue = destination[scopeName] = parentGet(scope);
                  var parentValueWatch = function parentValueWatch(parentValue) {
                    if (!compare(parentValue, destination[scopeName])) {
                      if (!compare(parentValue, lastValue)) {
                        destination[scopeName] = parentValue;
                      } else {
                        parentSet(scope, parentValue = destination[scopeName]);
                      }
                    }
                    return lastValue = parentValue;
                  };
                  parentValueWatch.$stateful = true;
                  if (definition.collection) {
                    removeWatch = scope.$watchCollection(attrs[attrName], parentValueWatch);
                  } else {
                    removeWatch = scope.$watch($parse(attrs[attrName], parentValueWatch), null, parentGet.literal);
                  }
                  removeWatchCollection.push(removeWatch);
                  break;
                case '<':
                  if (!hasOwnProperty.call(attrs, attrName)) {
                    if (optional)
                      break;
                    attrs[attrName] = void 0;
                  }
                  if (optional && !attrs[attrName])
                    break;
                  parentGet = $parse(attrs[attrName]);
                  var initialValue = destination[scopeName] = parentGet(scope);
                  initialChanges[scopeName] = new SimpleChange(_UNINITIALIZED_VALUE, destination[scopeName]);
                  removeWatch = scope.$watch(parentGet, function parentValueWatchAction(newValue, oldValue) {
                    if (oldValue === newValue) {
                      if (oldValue === initialValue)
                        return;
                      oldValue = initialValue;
                    }
                    recordChanges(scopeName, newValue, oldValue);
                    destination[scopeName] = newValue;
                  }, parentGet.literal);
                  removeWatchCollection.push(removeWatch);
                  break;
                case '&':
                  parentGet = attrs.hasOwnProperty(attrName) ? $parse(attrs[attrName]) : noop;
                  if (parentGet === noop && optional)
                    break;
                  destination[scopeName] = function(locals) {
                    return parentGet(scope, locals);
                  };
                  break;
              }
            });
            function recordChanges(key, currentValue, previousValue) {
              if (isFunction(destination.$onChanges) && currentValue !== previousValue) {
                if (!onChangesQueue) {
                  scope.$$postDigest(flushOnChangesQueue);
                  onChangesQueue = [];
                }
                if (!changes) {
                  changes = {};
                  onChangesQueue.push(triggerOnChangesHook);
                }
                if (changes[key]) {
                  previousValue = changes[key].previousValue;
                }
                changes[key] = new SimpleChange(previousValue, currentValue);
              }
            }
            function triggerOnChangesHook() {
              destination.$onChanges(changes);
              changes = undefined;
            }
            return {
              initialChanges: initialChanges,
              removeWatches: removeWatchCollection.length && function removeWatches() {
                for (var i = 0,
                    ii = removeWatchCollection.length; i < ii; ++i) {
                  removeWatchCollection[i]();
                }
              }
            };
          }
        }];
      }
      function SimpleChange(previous, current) {
        this.previousValue = previous;
        this.currentValue = current;
      }
      SimpleChange.prototype.isFirstChange = function() {
        return this.previousValue === _UNINITIALIZED_VALUE;
      };
      var PREFIX_REGEXP = /^((?:x|data)[\:\-_])/i;
      function directiveNormalize(name) {
        return camelCase(name.replace(PREFIX_REGEXP, ''));
      }
      function nodesetLinkingFn(scope, nodeList, rootElement, boundTranscludeFn) {}
      function directiveLinkingFn(nodesetLinkingFn, scope, node, rootElement, boundTranscludeFn) {}
      function tokenDifference(str1, str2) {
        var values = '',
            tokens1 = str1.split(/\s+/),
            tokens2 = str2.split(/\s+/);
        outer: for (var i = 0; i < tokens1.length; i++) {
          var token = tokens1[i];
          for (var j = 0; j < tokens2.length; j++) {
            if (token == tokens2[j])
              continue outer;
          }
          values += (values.length > 0 ? ' ' : '') + token;
        }
        return values;
      }
      function removeComments(jqNodes) {
        jqNodes = jqLite(jqNodes);
        var i = jqNodes.length;
        if (i <= 1) {
          return jqNodes;
        }
        while (i--) {
          var node = jqNodes[i];
          if (node.nodeType === NODE_TYPE_COMMENT) {
            splice.call(jqNodes, i, 1);
          }
        }
        return jqNodes;
      }
      var $controllerMinErr = minErr('$controller');
      var CNTRL_REG = /^(\S+)(\s+as\s+([\w$]+))?$/;
      function identifierForController(controller, ident) {
        if (ident && isString(ident))
          return ident;
        if (isString(controller)) {
          var match = CNTRL_REG.exec(controller);
          if (match)
            return match[3];
        }
      }
      function $ControllerProvider() {
        var controllers = {},
            globals = false;
        this.has = function(name) {
          return controllers.hasOwnProperty(name);
        };
        this.register = function(name, constructor) {
          assertNotHasOwnProperty(name, 'controller');
          if (isObject(name)) {
            extend(controllers, name);
          } else {
            controllers[name] = constructor;
          }
        };
        this.allowGlobals = function() {
          globals = true;
        };
        this.$get = ['$injector', '$window', function($injector, $window) {
          return function $controller(expression, locals, later, ident) {
            var instance,
                match,
                constructor,
                identifier;
            later = later === true;
            if (ident && isString(ident)) {
              identifier = ident;
            }
            if (isString(expression)) {
              match = expression.match(CNTRL_REG);
              if (!match) {
                throw $controllerMinErr('ctrlfmt', "Badly formed controller string '{0}'. " + "Must match `__name__ as __id__` or `__name__`.", expression);
              }
              constructor = match[1], identifier = identifier || match[3];
              expression = controllers.hasOwnProperty(constructor) ? controllers[constructor] : getter(locals.$scope, constructor, true) || (globals ? getter($window, constructor, true) : undefined);
              assertArgFn(expression, constructor, true);
            }
            if (later) {
              var controllerPrototype = (isArray(expression) ? expression[expression.length - 1] : expression).prototype;
              instance = Object.create(controllerPrototype || null);
              if (identifier) {
                addIdentifier(locals, identifier, instance, constructor || expression.name);
              }
              var instantiate;
              return instantiate = extend(function $controllerInit() {
                var result = $injector.invoke(expression, instance, locals, constructor);
                if (result !== instance && (isObject(result) || isFunction(result))) {
                  instance = result;
                  if (identifier) {
                    addIdentifier(locals, identifier, instance, constructor || expression.name);
                  }
                }
                return instance;
              }, {
                instance: instance,
                identifier: identifier
              });
            }
            instance = $injector.instantiate(expression, locals, constructor);
            if (identifier) {
              addIdentifier(locals, identifier, instance, constructor || expression.name);
            }
            return instance;
          };
          function addIdentifier(locals, identifier, instance, name) {
            if (!(locals && isObject(locals.$scope))) {
              throw minErr('$controller')('noscp', "Cannot export controller '{0}' as '{1}'! No $scope object provided via `locals`.", name, identifier);
            }
            locals.$scope[identifier] = instance;
          }
        }];
      }
      function $DocumentProvider() {
        this.$get = ['$window', function(window) {
          return jqLite(window.document);
        }];
      }
      function $ExceptionHandlerProvider() {
        this.$get = ['$log', function($log) {
          return function(exception, cause) {
            $log.error.apply($log, arguments);
          };
        }];
      }
      var $$ForceReflowProvider = function() {
        this.$get = ['$document', function($document) {
          return function(domNode) {
            if (domNode) {
              if (!domNode.nodeType && domNode instanceof jqLite) {
                domNode = domNode[0];
              }
            } else {
              domNode = $document[0].body;
            }
            return domNode.offsetWidth + 1;
          };
        }];
      };
      var APPLICATION_JSON = 'application/json';
      var CONTENT_TYPE_APPLICATION_JSON = {'Content-Type': APPLICATION_JSON + ';charset=utf-8'};
      var JSON_START = /^\[|^\{(?!\{)/;
      var JSON_ENDS = {
        '[': /]$/,
        '{': /}$/
      };
      var JSON_PROTECTION_PREFIX = /^\)\]\}',?\n/;
      var $httpMinErr = minErr('$http');
      var $httpMinErrLegacyFn = function(method) {
        return function() {
          throw $httpMinErr('legacy', 'The method `{0}` on the promise returned from `$http` has been disabled.', method);
        };
      };
      function serializeValue(v) {
        if (isObject(v)) {
          return isDate(v) ? v.toISOString() : toJson(v);
        }
        return v;
      }
      function $HttpParamSerializerProvider() {
        this.$get = function() {
          return function ngParamSerializer(params) {
            if (!params)
              return '';
            var parts = [];
            forEachSorted(params, function(value, key) {
              if (value === null || isUndefined(value))
                return;
              if (isArray(value)) {
                forEach(value, function(v) {
                  parts.push(encodeUriQuery(key) + '=' + encodeUriQuery(serializeValue(v)));
                });
              } else {
                parts.push(encodeUriQuery(key) + '=' + encodeUriQuery(serializeValue(value)));
              }
            });
            return parts.join('&');
          };
        };
      }
      function $HttpParamSerializerJQLikeProvider() {
        this.$get = function() {
          return function jQueryLikeParamSerializer(params) {
            if (!params)
              return '';
            var parts = [];
            serialize(params, '', true);
            return parts.join('&');
            function serialize(toSerialize, prefix, topLevel) {
              if (toSerialize === null || isUndefined(toSerialize))
                return;
              if (isArray(toSerialize)) {
                forEach(toSerialize, function(value, index) {
                  serialize(value, prefix + '[' + (isObject(value) ? index : '') + ']');
                });
              } else if (isObject(toSerialize) && !isDate(toSerialize)) {
                forEachSorted(toSerialize, function(value, key) {
                  serialize(value, prefix + (topLevel ? '' : '[') + key + (topLevel ? '' : ']'));
                });
              } else {
                parts.push(encodeUriQuery(prefix) + '=' + encodeUriQuery(serializeValue(toSerialize)));
              }
            }
          };
        };
      }
      function defaultHttpResponseTransform(data, headers) {
        if (isString(data)) {
          var tempData = data.replace(JSON_PROTECTION_PREFIX, '').trim();
          if (tempData) {
            var contentType = headers('Content-Type');
            if ((contentType && (contentType.indexOf(APPLICATION_JSON) === 0)) || isJsonLike(tempData)) {
              data = fromJson(tempData);
            }
          }
        }
        return data;
      }
      function isJsonLike(str) {
        var jsonStart = str.match(JSON_START);
        return jsonStart && JSON_ENDS[jsonStart[0]].test(str);
      }
      function parseHeaders(headers) {
        var parsed = createMap(),
            i;
        function fillInParsed(key, val) {
          if (key) {
            parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
          }
        }
        if (isString(headers)) {
          forEach(headers.split('\n'), function(line) {
            i = line.indexOf(':');
            fillInParsed(lowercase(trim(line.substr(0, i))), trim(line.substr(i + 1)));
          });
        } else if (isObject(headers)) {
          forEach(headers, function(headerVal, headerKey) {
            fillInParsed(lowercase(headerKey), trim(headerVal));
          });
        }
        return parsed;
      }
      function headersGetter(headers) {
        var headersObj;
        return function(name) {
          if (!headersObj)
            headersObj = parseHeaders(headers);
          if (name) {
            var value = headersObj[lowercase(name)];
            if (value === void 0) {
              value = null;
            }
            return value;
          }
          return headersObj;
        };
      }
      function transformData(data, headers, status, fns) {
        if (isFunction(fns)) {
          return fns(data, headers, status);
        }
        forEach(fns, function(fn) {
          data = fn(data, headers, status);
        });
        return data;
      }
      function isSuccess(status) {
        return 200 <= status && status < 300;
      }
      function $HttpProvider() {
        var defaults = this.defaults = {
          transformResponse: [defaultHttpResponseTransform],
          transformRequest: [function(d) {
            return isObject(d) && !isFile(d) && !isBlob(d) && !isFormData(d) ? toJson(d) : d;
          }],
          headers: {
            common: {'Accept': 'application/json, text/plain, */*'},
            post: shallowCopy(CONTENT_TYPE_APPLICATION_JSON),
            put: shallowCopy(CONTENT_TYPE_APPLICATION_JSON),
            patch: shallowCopy(CONTENT_TYPE_APPLICATION_JSON)
          },
          xsrfCookieName: 'XSRF-TOKEN',
          xsrfHeaderName: 'X-XSRF-TOKEN',
          paramSerializer: '$httpParamSerializer'
        };
        var useApplyAsync = false;
        this.useApplyAsync = function(value) {
          if (isDefined(value)) {
            useApplyAsync = !!value;
            return this;
          }
          return useApplyAsync;
        };
        var useLegacyPromise = true;
        this.useLegacyPromiseExtensions = function(value) {
          if (isDefined(value)) {
            useLegacyPromise = !!value;
            return this;
          }
          return useLegacyPromise;
        };
        var interceptorFactories = this.interceptors = [];
        this.$get = ['$httpBackend', '$$cookieReader', '$cacheFactory', '$rootScope', '$q', '$injector', function($httpBackend, $$cookieReader, $cacheFactory, $rootScope, $q, $injector) {
          var defaultCache = $cacheFactory('$http');
          defaults.paramSerializer = isString(defaults.paramSerializer) ? $injector.get(defaults.paramSerializer) : defaults.paramSerializer;
          var reversedInterceptors = [];
          forEach(interceptorFactories, function(interceptorFactory) {
            reversedInterceptors.unshift(isString(interceptorFactory) ? $injector.get(interceptorFactory) : $injector.invoke(interceptorFactory));
          });
          function $http(requestConfig) {
            if (!isObject(requestConfig)) {
              throw minErr('$http')('badreq', 'Http request configuration must be an object.  Received: {0}', requestConfig);
            }
            if (!isString(requestConfig.url)) {
              throw minErr('$http')('badreq', 'Http request configuration url must be a string.  Received: {0}', requestConfig.url);
            }
            var config = extend({
              method: 'get',
              transformRequest: defaults.transformRequest,
              transformResponse: defaults.transformResponse,
              paramSerializer: defaults.paramSerializer
            }, requestConfig);
            config.headers = mergeHeaders(requestConfig);
            config.method = uppercase(config.method);
            config.paramSerializer = isString(config.paramSerializer) ? $injector.get(config.paramSerializer) : config.paramSerializer;
            var serverRequest = function(config) {
              var headers = config.headers;
              var reqData = transformData(config.data, headersGetter(headers), undefined, config.transformRequest);
              if (isUndefined(reqData)) {
                forEach(headers, function(value, header) {
                  if (lowercase(header) === 'content-type') {
                    delete headers[header];
                  }
                });
              }
              if (isUndefined(config.withCredentials) && !isUndefined(defaults.withCredentials)) {
                config.withCredentials = defaults.withCredentials;
              }
              return sendReq(config, reqData).then(transformResponse, transformResponse);
            };
            var chain = [serverRequest, undefined];
            var promise = $q.when(config);
            forEach(reversedInterceptors, function(interceptor) {
              if (interceptor.request || interceptor.requestError) {
                chain.unshift(interceptor.request, interceptor.requestError);
              }
              if (interceptor.response || interceptor.responseError) {
                chain.push(interceptor.response, interceptor.responseError);
              }
            });
            while (chain.length) {
              var thenFn = chain.shift();
              var rejectFn = chain.shift();
              promise = promise.then(thenFn, rejectFn);
            }
            if (useLegacyPromise) {
              promise.success = function(fn) {
                assertArgFn(fn, 'fn');
                promise.then(function(response) {
                  fn(response.data, response.status, response.headers, config);
                });
                return promise;
              };
              promise.error = function(fn) {
                assertArgFn(fn, 'fn');
                promise.then(null, function(response) {
                  fn(response.data, response.status, response.headers, config);
                });
                return promise;
              };
            } else {
              promise.success = $httpMinErrLegacyFn('success');
              promise.error = $httpMinErrLegacyFn('error');
            }
            return promise;
            function transformResponse(response) {
              var resp = extend({}, response);
              resp.data = transformData(response.data, response.headers, response.status, config.transformResponse);
              return (isSuccess(response.status)) ? resp : $q.reject(resp);
            }
            function executeHeaderFns(headers, config) {
              var headerContent,
                  processedHeaders = {};
              forEach(headers, function(headerFn, header) {
                if (isFunction(headerFn)) {
                  headerContent = headerFn(config);
                  if (headerContent != null) {
                    processedHeaders[header] = headerContent;
                  }
                } else {
                  processedHeaders[header] = headerFn;
                }
              });
              return processedHeaders;
            }
            function mergeHeaders(config) {
              var defHeaders = defaults.headers,
                  reqHeaders = extend({}, config.headers),
                  defHeaderName,
                  lowercaseDefHeaderName,
                  reqHeaderName;
              defHeaders = extend({}, defHeaders.common, defHeaders[lowercase(config.method)]);
              defaultHeadersIteration: for (defHeaderName in defHeaders) {
                lowercaseDefHeaderName = lowercase(defHeaderName);
                for (reqHeaderName in reqHeaders) {
                  if (lowercase(reqHeaderName) === lowercaseDefHeaderName) {
                    continue defaultHeadersIteration;
                  }
                }
                reqHeaders[defHeaderName] = defHeaders[defHeaderName];
              }
              return executeHeaderFns(reqHeaders, shallowCopy(config));
            }
          }
          $http.pendingRequests = [];
          createShortMethods('get', 'delete', 'head', 'jsonp');
          createShortMethodsWithData('post', 'put', 'patch');
          $http.defaults = defaults;
          return $http;
          function createShortMethods(names) {
            forEach(arguments, function(name) {
              $http[name] = function(url, config) {
                return $http(extend({}, config || {}, {
                  method: name,
                  url: url
                }));
              };
            });
          }
          function createShortMethodsWithData(name) {
            forEach(arguments, function(name) {
              $http[name] = function(url, data, config) {
                return $http(extend({}, config || {}, {
                  method: name,
                  url: url,
                  data: data
                }));
              };
            });
          }
          function sendReq(config, reqData) {
            var deferred = $q.defer(),
                promise = deferred.promise,
                cache,
                cachedResp,
                reqHeaders = config.headers,
                url = buildUrl(config.url, config.paramSerializer(config.params));
            $http.pendingRequests.push(config);
            promise.then(removePendingReq, removePendingReq);
            if ((config.cache || defaults.cache) && config.cache !== false && (config.method === 'GET' || config.method === 'JSONP')) {
              cache = isObject(config.cache) ? config.cache : isObject(defaults.cache) ? defaults.cache : defaultCache;
            }
            if (cache) {
              cachedResp = cache.get(url);
              if (isDefined(cachedResp)) {
                if (isPromiseLike(cachedResp)) {
                  cachedResp.then(resolvePromiseWithResult, resolvePromiseWithResult);
                } else {
                  if (isArray(cachedResp)) {
                    resolvePromise(cachedResp[1], cachedResp[0], shallowCopy(cachedResp[2]), cachedResp[3]);
                  } else {
                    resolvePromise(cachedResp, 200, {}, 'OK');
                  }
                }
              } else {
                cache.put(url, promise);
              }
            }
            if (isUndefined(cachedResp)) {
              var xsrfValue = urlIsSameOrigin(config.url) ? $$cookieReader()[config.xsrfCookieName || defaults.xsrfCookieName] : undefined;
              if (xsrfValue) {
                reqHeaders[(config.xsrfHeaderName || defaults.xsrfHeaderName)] = xsrfValue;
              }
              $httpBackend(config.method, url, reqData, done, reqHeaders, config.timeout, config.withCredentials, config.responseType, createApplyHandlers(config.eventHandlers), createApplyHandlers(config.uploadEventHandlers));
            }
            return promise;
            function createApplyHandlers(eventHandlers) {
              if (eventHandlers) {
                var applyHandlers = {};
                forEach(eventHandlers, function(eventHandler, key) {
                  applyHandlers[key] = function(event) {
                    if (useApplyAsync) {
                      $rootScope.$applyAsync(callEventHandler);
                    } else if ($rootScope.$$phase) {
                      callEventHandler();
                    } else {
                      $rootScope.$apply(callEventHandler);
                    }
                    function callEventHandler() {
                      eventHandler(event);
                    }
                  };
                });
                return applyHandlers;
              }
            }
            function done(status, response, headersString, statusText) {
              if (cache) {
                if (isSuccess(status)) {
                  cache.put(url, [status, response, parseHeaders(headersString), statusText]);
                } else {
                  cache.remove(url);
                }
              }
              function resolveHttpPromise() {
                resolvePromise(response, status, headersString, statusText);
              }
              if (useApplyAsync) {
                $rootScope.$applyAsync(resolveHttpPromise);
              } else {
                resolveHttpPromise();
                if (!$rootScope.$$phase)
                  $rootScope.$apply();
              }
            }
            function resolvePromise(response, status, headers, statusText) {
              status = status >= -1 ? status : 0;
              (isSuccess(status) ? deferred.resolve : deferred.reject)({
                data: response,
                status: status,
                headers: headersGetter(headers),
                config: config,
                statusText: statusText
              });
            }
            function resolvePromiseWithResult(result) {
              resolvePromise(result.data, result.status, shallowCopy(result.headers()), result.statusText);
            }
            function removePendingReq() {
              var idx = $http.pendingRequests.indexOf(config);
              if (idx !== -1)
                $http.pendingRequests.splice(idx, 1);
            }
          }
          function buildUrl(url, serializedParams) {
            if (serializedParams.length > 0) {
              url += ((url.indexOf('?') == -1) ? '?' : '&') + serializedParams;
            }
            return url;
          }
        }];
      }
      function $xhrFactoryProvider() {
        this.$get = function() {
          return function createXhr() {
            return new window.XMLHttpRequest();
          };
        };
      }
      function $HttpBackendProvider() {
        this.$get = ['$browser', '$window', '$document', '$xhrFactory', function($browser, $window, $document, $xhrFactory) {
          return createHttpBackend($browser, $xhrFactory, $browser.defer, $window.angular.callbacks, $document[0]);
        }];
      }
      function createHttpBackend($browser, createXhr, $browserDefer, callbacks, rawDocument) {
        return function(method, url, post, callback, headers, timeout, withCredentials, responseType, eventHandlers, uploadEventHandlers) {
          $browser.$$incOutstandingRequestCount();
          url = url || $browser.url();
          if (lowercase(method) == 'jsonp') {
            var callbackId = '_' + (callbacks.counter++).toString(36);
            callbacks[callbackId] = function(data) {
              callbacks[callbackId].data = data;
              callbacks[callbackId].called = true;
            };
            var jsonpDone = jsonpReq(url.replace('JSON_CALLBACK', 'angular.callbacks.' + callbackId), callbackId, function(status, text) {
              completeRequest(callback, status, callbacks[callbackId].data, "", text);
              callbacks[callbackId] = noop;
            });
          } else {
            var xhr = createXhr(method, url);
            xhr.open(method, url, true);
            forEach(headers, function(value, key) {
              if (isDefined(value)) {
                xhr.setRequestHeader(key, value);
              }
            });
            xhr.onload = function requestLoaded() {
              var statusText = xhr.statusText || '';
              var response = ('response' in xhr) ? xhr.response : xhr.responseText;
              var status = xhr.status === 1223 ? 204 : xhr.status;
              if (status === 0) {
                status = response ? 200 : urlResolve(url).protocol == 'file' ? 404 : 0;
              }
              completeRequest(callback, status, response, xhr.getAllResponseHeaders(), statusText);
            };
            var requestError = function() {
              completeRequest(callback, -1, null, null, '');
            };
            xhr.onerror = requestError;
            xhr.onabort = requestError;
            forEach(eventHandlers, function(value, key) {
              xhr.addEventListener(key, value);
            });
            forEach(uploadEventHandlers, function(value, key) {
              xhr.upload.addEventListener(key, value);
            });
            if (withCredentials) {
              xhr.withCredentials = true;
            }
            if (responseType) {
              try {
                xhr.responseType = responseType;
              } catch (e) {
                if (responseType !== 'json') {
                  throw e;
                }
              }
            }
            xhr.send(isUndefined(post) ? null : post);
          }
          if (timeout > 0) {
            var timeoutId = $browserDefer(timeoutRequest, timeout);
          } else if (isPromiseLike(timeout)) {
            timeout.then(timeoutRequest);
          }
          function timeoutRequest() {
            jsonpDone && jsonpDone();
            xhr && xhr.abort();
          }
          function completeRequest(callback, status, response, headersString, statusText) {
            if (isDefined(timeoutId)) {
              $browserDefer.cancel(timeoutId);
            }
            jsonpDone = xhr = null;
            callback(status, response, headersString, statusText);
            $browser.$$completeOutstandingRequest(noop);
          }
        };
        function jsonpReq(url, callbackId, done) {
          var script = rawDocument.createElement('script'),
              callback = null;
          script.type = "text/javascript";
          script.src = url;
          script.async = true;
          callback = function(event) {
            removeEventListenerFn(script, "load", callback);
            removeEventListenerFn(script, "error", callback);
            rawDocument.body.removeChild(script);
            script = null;
            var status = -1;
            var text = "unknown";
            if (event) {
              if (event.type === "load" && !callbacks[callbackId].called) {
                event = {type: "error"};
              }
              text = event.type;
              status = event.type === "error" ? 404 : 200;
            }
            if (done) {
              done(status, text);
            }
          };
          addEventListenerFn(script, "load", callback);
          addEventListenerFn(script, "error", callback);
          rawDocument.body.appendChild(script);
          return callback;
        }
      }
      var $interpolateMinErr = angular.$interpolateMinErr = minErr('$interpolate');
      $interpolateMinErr.throwNoconcat = function(text) {
        throw $interpolateMinErr('noconcat', "Error while interpolating: {0}\nStrict Contextual Escaping disallows " + "interpolations that concatenate multiple expressions when a trusted value is " + "required.  See http://docs.angularjs.org/api/ng.$sce", text);
      };
      $interpolateMinErr.interr = function(text, err) {
        return $interpolateMinErr('interr', "Can't interpolate: {0}\n{1}", text, err.toString());
      };
      function $InterpolateProvider() {
        var startSymbol = '{{';
        var endSymbol = '}}';
        this.startSymbol = function(value) {
          if (value) {
            startSymbol = value;
            return this;
          } else {
            return startSymbol;
          }
        };
        this.endSymbol = function(value) {
          if (value) {
            endSymbol = value;
            return this;
          } else {
            return endSymbol;
          }
        };
        this.$get = ['$parse', '$exceptionHandler', '$sce', function($parse, $exceptionHandler, $sce) {
          var startSymbolLength = startSymbol.length,
              endSymbolLength = endSymbol.length,
              escapedStartRegexp = new RegExp(startSymbol.replace(/./g, escape), 'g'),
              escapedEndRegexp = new RegExp(endSymbol.replace(/./g, escape), 'g');
          function escape(ch) {
            return '\\\\\\' + ch;
          }
          function unescapeText(text) {
            return text.replace(escapedStartRegexp, startSymbol).replace(escapedEndRegexp, endSymbol);
          }
          function stringify(value) {
            if (value == null) {
              return '';
            }
            switch (typeof value) {
              case 'string':
                break;
              case 'number':
                value = '' + value;
                break;
              default:
                value = toJson(value);
            }
            return value;
          }
          function constantWatchDelegate(scope, listener, objectEquality, constantInterp) {
            var unwatch;
            return unwatch = scope.$watch(function constantInterpolateWatch(scope) {
              unwatch();
              return constantInterp(scope);
            }, listener, objectEquality);
          }
          function $interpolate(text, mustHaveExpression, trustedContext, allOrNothing) {
            if (!text.length || text.indexOf(startSymbol) === -1) {
              var constantInterp;
              if (!mustHaveExpression) {
                var unescapedText = unescapeText(text);
                constantInterp = valueFn(unescapedText);
                constantInterp.exp = text;
                constantInterp.expressions = [];
                constantInterp.$$watchDelegate = constantWatchDelegate;
              }
              return constantInterp;
            }
            allOrNothing = !!allOrNothing;
            var startIndex,
                endIndex,
                index = 0,
                expressions = [],
                parseFns = [],
                textLength = text.length,
                exp,
                concat = [],
                expressionPositions = [];
            while (index < textLength) {
              if (((startIndex = text.indexOf(startSymbol, index)) != -1) && ((endIndex = text.indexOf(endSymbol, startIndex + startSymbolLength)) != -1)) {
                if (index !== startIndex) {
                  concat.push(unescapeText(text.substring(index, startIndex)));
                }
                exp = text.substring(startIndex + startSymbolLength, endIndex);
                expressions.push(exp);
                parseFns.push($parse(exp, parseStringifyInterceptor));
                index = endIndex + endSymbolLength;
                expressionPositions.push(concat.length);
                concat.push('');
              } else {
                if (index !== textLength) {
                  concat.push(unescapeText(text.substring(index)));
                }
                break;
              }
            }
            if (trustedContext && concat.length > 1) {
              $interpolateMinErr.throwNoconcat(text);
            }
            if (!mustHaveExpression || expressions.length) {
              var compute = function(values) {
                for (var i = 0,
                    ii = expressions.length; i < ii; i++) {
                  if (allOrNothing && isUndefined(values[i]))
                    return;
                  concat[expressionPositions[i]] = values[i];
                }
                return concat.join('');
              };
              var getValue = function(value) {
                return trustedContext ? $sce.getTrusted(trustedContext, value) : $sce.valueOf(value);
              };
              return extend(function interpolationFn(context) {
                var i = 0;
                var ii = expressions.length;
                var values = new Array(ii);
                try {
                  for (; i < ii; i++) {
                    values[i] = parseFns[i](context);
                  }
                  return compute(values);
                } catch (err) {
                  $exceptionHandler($interpolateMinErr.interr(text, err));
                }
              }, {
                exp: text,
                expressions: expressions,
                $$watchDelegate: function(scope, listener) {
                  var lastValue;
                  return scope.$watchGroup(parseFns, function interpolateFnWatcher(values, oldValues) {
                    var currValue = compute(values);
                    if (isFunction(listener)) {
                      listener.call(this, currValue, values !== oldValues ? lastValue : currValue, scope);
                    }
                    lastValue = currValue;
                  });
                }
              });
            }
            function parseStringifyInterceptor(value) {
              try {
                value = getValue(value);
                return allOrNothing && !isDefined(value) ? value : stringify(value);
              } catch (err) {
                $exceptionHandler($interpolateMinErr.interr(text, err));
              }
            }
          }
          $interpolate.startSymbol = function() {
            return startSymbol;
          };
          $interpolate.endSymbol = function() {
            return endSymbol;
          };
          return $interpolate;
        }];
      }
      function $IntervalProvider() {
        this.$get = ['$rootScope', '$window', '$q', '$$q', '$browser', function($rootScope, $window, $q, $$q, $browser) {
          var intervals = {};
          function interval(fn, delay, count, invokeApply) {
            var hasParams = arguments.length > 4,
                args = hasParams ? sliceArgs(arguments, 4) : [],
                setInterval = $window.setInterval,
                clearInterval = $window.clearInterval,
                iteration = 0,
                skipApply = (isDefined(invokeApply) && !invokeApply),
                deferred = (skipApply ? $$q : $q).defer(),
                promise = deferred.promise;
            count = isDefined(count) ? count : 0;
            promise.$$intervalId = setInterval(function tick() {
              if (skipApply) {
                $browser.defer(callback);
              } else {
                $rootScope.$evalAsync(callback);
              }
              deferred.notify(iteration++);
              if (count > 0 && iteration >= count) {
                deferred.resolve(iteration);
                clearInterval(promise.$$intervalId);
                delete intervals[promise.$$intervalId];
              }
              if (!skipApply)
                $rootScope.$apply();
            }, delay);
            intervals[promise.$$intervalId] = deferred;
            return promise;
            function callback() {
              if (!hasParams) {
                fn(iteration);
              } else {
                fn.apply(null, args);
              }
            }
          }
          interval.cancel = function(promise) {
            if (promise && promise.$$intervalId in intervals) {
              intervals[promise.$$intervalId].reject('canceled');
              $window.clearInterval(promise.$$intervalId);
              delete intervals[promise.$$intervalId];
              return true;
            }
            return false;
          };
          return interval;
        }];
      }
      var PATH_MATCH = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/,
          DEFAULT_PORTS = {
            'http': 80,
            'https': 443,
            'ftp': 21
          };
      var $locationMinErr = minErr('$location');
      function encodePath(path) {
        var segments = path.split('/'),
            i = segments.length;
        while (i--) {
          segments[i] = encodeUriSegment(segments[i]);
        }
        return segments.join('/');
      }
      function parseAbsoluteUrl(absoluteUrl, locationObj) {
        var parsedUrl = urlResolve(absoluteUrl);
        locationObj.$$protocol = parsedUrl.protocol;
        locationObj.$$host = parsedUrl.hostname;
        locationObj.$$port = toInt(parsedUrl.port) || DEFAULT_PORTS[parsedUrl.protocol] || null;
      }
      function parseAppUrl(relativeUrl, locationObj) {
        var prefixed = (relativeUrl.charAt(0) !== '/');
        if (prefixed) {
          relativeUrl = '/' + relativeUrl;
        }
        var match = urlResolve(relativeUrl);
        locationObj.$$path = decodeURIComponent(prefixed && match.pathname.charAt(0) === '/' ? match.pathname.substring(1) : match.pathname);
        locationObj.$$search = parseKeyValue(match.search);
        locationObj.$$hash = decodeURIComponent(match.hash);
        if (locationObj.$$path && locationObj.$$path.charAt(0) != '/') {
          locationObj.$$path = '/' + locationObj.$$path;
        }
      }
      function startsWith(haystack, needle) {
        return haystack.lastIndexOf(needle, 0) === 0;
      }
      function stripBaseUrl(base, url) {
        if (startsWith(url, base)) {
          return url.substr(base.length);
        }
      }
      function stripHash(url) {
        var index = url.indexOf('#');
        return index == -1 ? url : url.substr(0, index);
      }
      function trimEmptyHash(url) {
        return url.replace(/(#.+)|#$/, '$1');
      }
      function stripFile(url) {
        return url.substr(0, stripHash(url).lastIndexOf('/') + 1);
      }
      function serverBase(url) {
        return url.substring(0, url.indexOf('/', url.indexOf('//') + 2));
      }
      function LocationHtml5Url(appBase, appBaseNoFile, basePrefix) {
        this.$$html5 = true;
        basePrefix = basePrefix || '';
        parseAbsoluteUrl(appBase, this);
        this.$$parse = function(url) {
          var pathUrl = stripBaseUrl(appBaseNoFile, url);
          if (!isString(pathUrl)) {
            throw $locationMinErr('ipthprfx', 'Invalid url "{0}", missing path prefix "{1}".', url, appBaseNoFile);
          }
          parseAppUrl(pathUrl, this);
          if (!this.$$path) {
            this.$$path = '/';
          }
          this.$$compose();
        };
        this.$$compose = function() {
          var search = toKeyValue(this.$$search),
              hash = this.$$hash ? '#' + encodeUriSegment(this.$$hash) : '';
          this.$$url = encodePath(this.$$path) + (search ? '?' + search : '') + hash;
          this.$$absUrl = appBaseNoFile + this.$$url.substr(1);
        };
        this.$$parseLinkUrl = function(url, relHref) {
          if (relHref && relHref[0] === '#') {
            this.hash(relHref.slice(1));
            return true;
          }
          var appUrl,
              prevAppUrl;
          var rewrittenUrl;
          if (isDefined(appUrl = stripBaseUrl(appBase, url))) {
            prevAppUrl = appUrl;
            if (isDefined(appUrl = stripBaseUrl(basePrefix, appUrl))) {
              rewrittenUrl = appBaseNoFile + (stripBaseUrl('/', appUrl) || appUrl);
            } else {
              rewrittenUrl = appBase + prevAppUrl;
            }
          } else if (isDefined(appUrl = stripBaseUrl(appBaseNoFile, url))) {
            rewrittenUrl = appBaseNoFile + appUrl;
          } else if (appBaseNoFile == url + '/') {
            rewrittenUrl = appBaseNoFile;
          }
          if (rewrittenUrl) {
            this.$$parse(rewrittenUrl);
          }
          return !!rewrittenUrl;
        };
      }
      function LocationHashbangUrl(appBase, appBaseNoFile, hashPrefix) {
        parseAbsoluteUrl(appBase, this);
        this.$$parse = function(url) {
          var withoutBaseUrl = stripBaseUrl(appBase, url) || stripBaseUrl(appBaseNoFile, url);
          var withoutHashUrl;
          if (!isUndefined(withoutBaseUrl) && withoutBaseUrl.charAt(0) === '#') {
            withoutHashUrl = stripBaseUrl(hashPrefix, withoutBaseUrl);
            if (isUndefined(withoutHashUrl)) {
              withoutHashUrl = withoutBaseUrl;
            }
          } else {
            if (this.$$html5) {
              withoutHashUrl = withoutBaseUrl;
            } else {
              withoutHashUrl = '';
              if (isUndefined(withoutBaseUrl)) {
                appBase = url;
                this.replace();
              }
            }
          }
          parseAppUrl(withoutHashUrl, this);
          this.$$path = removeWindowsDriveName(this.$$path, withoutHashUrl, appBase);
          this.$$compose();
          function removeWindowsDriveName(path, url, base) {
            var windowsFilePathExp = /^\/[A-Z]:(\/.*)/;
            var firstPathSegmentMatch;
            if (startsWith(url, base)) {
              url = url.replace(base, '');
            }
            if (windowsFilePathExp.exec(url)) {
              return path;
            }
            firstPathSegmentMatch = windowsFilePathExp.exec(path);
            return firstPathSegmentMatch ? firstPathSegmentMatch[1] : path;
          }
        };
        this.$$compose = function() {
          var search = toKeyValue(this.$$search),
              hash = this.$$hash ? '#' + encodeUriSegment(this.$$hash) : '';
          this.$$url = encodePath(this.$$path) + (search ? '?' + search : '') + hash;
          this.$$absUrl = appBase + (this.$$url ? hashPrefix + this.$$url : '');
        };
        this.$$parseLinkUrl = function(url, relHref) {
          if (stripHash(appBase) == stripHash(url)) {
            this.$$parse(url);
            return true;
          }
          return false;
        };
      }
      function LocationHashbangInHtml5Url(appBase, appBaseNoFile, hashPrefix) {
        this.$$html5 = true;
        LocationHashbangUrl.apply(this, arguments);
        this.$$parseLinkUrl = function(url, relHref) {
          if (relHref && relHref[0] === '#') {
            this.hash(relHref.slice(1));
            return true;
          }
          var rewrittenUrl;
          var appUrl;
          if (appBase == stripHash(url)) {
            rewrittenUrl = url;
          } else if ((appUrl = stripBaseUrl(appBaseNoFile, url))) {
            rewrittenUrl = appBase + hashPrefix + appUrl;
          } else if (appBaseNoFile === url + '/') {
            rewrittenUrl = appBaseNoFile;
          }
          if (rewrittenUrl) {
            this.$$parse(rewrittenUrl);
          }
          return !!rewrittenUrl;
        };
        this.$$compose = function() {
          var search = toKeyValue(this.$$search),
              hash = this.$$hash ? '#' + encodeUriSegment(this.$$hash) : '';
          this.$$url = encodePath(this.$$path) + (search ? '?' + search : '') + hash;
          this.$$absUrl = appBase + hashPrefix + this.$$url;
        };
      }
      var locationPrototype = {
        $$absUrl: '',
        $$html5: false,
        $$replace: false,
        absUrl: locationGetter('$$absUrl'),
        url: function(url) {
          if (isUndefined(url)) {
            return this.$$url;
          }
          var match = PATH_MATCH.exec(url);
          if (match[1] || url === '')
            this.path(decodeURIComponent(match[1]));
          if (match[2] || match[1] || url === '')
            this.search(match[3] || '');
          this.hash(match[5] || '');
          return this;
        },
        protocol: locationGetter('$$protocol'),
        host: locationGetter('$$host'),
        port: locationGetter('$$port'),
        path: locationGetterSetter('$$path', function(path) {
          path = path !== null ? path.toString() : '';
          return path.charAt(0) == '/' ? path : '/' + path;
        }),
        search: function(search, paramValue) {
          switch (arguments.length) {
            case 0:
              return this.$$search;
            case 1:
              if (isString(search) || isNumber(search)) {
                search = search.toString();
                this.$$search = parseKeyValue(search);
              } else if (isObject(search)) {
                search = copy(search, {});
                forEach(search, function(value, key) {
                  if (value == null)
                    delete search[key];
                });
                this.$$search = search;
              } else {
                throw $locationMinErr('isrcharg', 'The first argument of the `$location#search()` call must be a string or an object.');
              }
              break;
            default:
              if (isUndefined(paramValue) || paramValue === null) {
                delete this.$$search[search];
              } else {
                this.$$search[search] = paramValue;
              }
          }
          this.$$compose();
          return this;
        },
        hash: locationGetterSetter('$$hash', function(hash) {
          return hash !== null ? hash.toString() : '';
        }),
        replace: function() {
          this.$$replace = true;
          return this;
        }
      };
      forEach([LocationHashbangInHtml5Url, LocationHashbangUrl, LocationHtml5Url], function(Location) {
        Location.prototype = Object.create(locationPrototype);
        Location.prototype.state = function(state) {
          if (!arguments.length) {
            return this.$$state;
          }
          if (Location !== LocationHtml5Url || !this.$$html5) {
            throw $locationMinErr('nostate', 'History API state support is available only ' + 'in HTML5 mode and only in browsers supporting HTML5 History API');
          }
          this.$$state = isUndefined(state) ? null : state;
          return this;
        };
      });
      function locationGetter(property) {
        return function() {
          return this[property];
        };
      }
      function locationGetterSetter(property, preprocess) {
        return function(value) {
          if (isUndefined(value)) {
            return this[property];
          }
          this[property] = preprocess(value);
          this.$$compose();
          return this;
        };
      }
      function $LocationProvider() {
        var hashPrefix = '',
            html5Mode = {
              enabled: false,
              requireBase: true,
              rewriteLinks: true
            };
        this.hashPrefix = function(prefix) {
          if (isDefined(prefix)) {
            hashPrefix = prefix;
            return this;
          } else {
            return hashPrefix;
          }
        };
        this.html5Mode = function(mode) {
          if (isBoolean(mode)) {
            html5Mode.enabled = mode;
            return this;
          } else if (isObject(mode)) {
            if (isBoolean(mode.enabled)) {
              html5Mode.enabled = mode.enabled;
            }
            if (isBoolean(mode.requireBase)) {
              html5Mode.requireBase = mode.requireBase;
            }
            if (isBoolean(mode.rewriteLinks)) {
              html5Mode.rewriteLinks = mode.rewriteLinks;
            }
            return this;
          } else {
            return html5Mode;
          }
        };
        this.$get = ['$rootScope', '$browser', '$sniffer', '$rootElement', '$window', function($rootScope, $browser, $sniffer, $rootElement, $window) {
          var $location,
              LocationMode,
              baseHref = $browser.baseHref(),
              initialUrl = $browser.url(),
              appBase;
          if (html5Mode.enabled) {
            if (!baseHref && html5Mode.requireBase) {
              throw $locationMinErr('nobase', "$location in HTML5 mode requires a <base> tag to be present!");
            }
            appBase = serverBase(initialUrl) + (baseHref || '/');
            LocationMode = $sniffer.history ? LocationHtml5Url : LocationHashbangInHtml5Url;
          } else {
            appBase = stripHash(initialUrl);
            LocationMode = LocationHashbangUrl;
          }
          var appBaseNoFile = stripFile(appBase);
          $location = new LocationMode(appBase, appBaseNoFile, '#' + hashPrefix);
          $location.$$parseLinkUrl(initialUrl, initialUrl);
          $location.$$state = $browser.state();
          var IGNORE_URI_REGEXP = /^\s*(javascript|mailto):/i;
          function setBrowserUrlWithFallback(url, replace, state) {
            var oldUrl = $location.url();
            var oldState = $location.$$state;
            try {
              $browser.url(url, replace, state);
              $location.$$state = $browser.state();
            } catch (e) {
              $location.url(oldUrl);
              $location.$$state = oldState;
              throw e;
            }
          }
          $rootElement.on('click', function(event) {
            if (!html5Mode.rewriteLinks || event.ctrlKey || event.metaKey || event.shiftKey || event.which == 2 || event.button == 2)
              return;
            var elm = jqLite(event.target);
            while (nodeName_(elm[0]) !== 'a') {
              if (elm[0] === $rootElement[0] || !(elm = elm.parent())[0])
                return;
            }
            var absHref = elm.prop('href');
            var relHref = elm.attr('href') || elm.attr('xlink:href');
            if (isObject(absHref) && absHref.toString() === '[object SVGAnimatedString]') {
              absHref = urlResolve(absHref.animVal).href;
            }
            if (IGNORE_URI_REGEXP.test(absHref))
              return;
            if (absHref && !elm.attr('target') && !event.isDefaultPrevented()) {
              if ($location.$$parseLinkUrl(absHref, relHref)) {
                event.preventDefault();
                if ($location.absUrl() != $browser.url()) {
                  $rootScope.$apply();
                  $window.angular['ff-684208-preventDefault'] = true;
                }
              }
            }
          });
          if (trimEmptyHash($location.absUrl()) != trimEmptyHash(initialUrl)) {
            $browser.url($location.absUrl(), true);
          }
          var initializing = true;
          $browser.onUrlChange(function(newUrl, newState) {
            if (isUndefined(stripBaseUrl(appBaseNoFile, newUrl))) {
              $window.location.href = newUrl;
              return;
            }
            $rootScope.$evalAsync(function() {
              var oldUrl = $location.absUrl();
              var oldState = $location.$$state;
              var defaultPrevented;
              newUrl = trimEmptyHash(newUrl);
              $location.$$parse(newUrl);
              $location.$$state = newState;
              defaultPrevented = $rootScope.$broadcast('$locationChangeStart', newUrl, oldUrl, newState, oldState).defaultPrevented;
              if ($location.absUrl() !== newUrl)
                return;
              if (defaultPrevented) {
                $location.$$parse(oldUrl);
                $location.$$state = oldState;
                setBrowserUrlWithFallback(oldUrl, false, oldState);
              } else {
                initializing = false;
                afterLocationChange(oldUrl, oldState);
              }
            });
            if (!$rootScope.$$phase)
              $rootScope.$digest();
          });
          $rootScope.$watch(function $locationWatch() {
            var oldUrl = trimEmptyHash($browser.url());
            var newUrl = trimEmptyHash($location.absUrl());
            var oldState = $browser.state();
            var currentReplace = $location.$$replace;
            var urlOrStateChanged = oldUrl !== newUrl || ($location.$$html5 && $sniffer.history && oldState !== $location.$$state);
            if (initializing || urlOrStateChanged) {
              initializing = false;
              $rootScope.$evalAsync(function() {
                var newUrl = $location.absUrl();
                var defaultPrevented = $rootScope.$broadcast('$locationChangeStart', newUrl, oldUrl, $location.$$state, oldState).defaultPrevented;
                if ($location.absUrl() !== newUrl)
                  return;
                if (defaultPrevented) {
                  $location.$$parse(oldUrl);
                  $location.$$state = oldState;
                } else {
                  if (urlOrStateChanged) {
                    setBrowserUrlWithFallback(newUrl, currentReplace, oldState === $location.$$state ? null : $location.$$state);
                  }
                  afterLocationChange(oldUrl, oldState);
                }
              });
            }
            $location.$$replace = false;
          });
          return $location;
          function afterLocationChange(oldUrl, oldState) {
            $rootScope.$broadcast('$locationChangeSuccess', $location.absUrl(), oldUrl, $location.$$state, oldState);
          }
        }];
      }
      function $LogProvider() {
        var debug = true,
            self = this;
        this.debugEnabled = function(flag) {
          if (isDefined(flag)) {
            debug = flag;
            return this;
          } else {
            return debug;
          }
        };
        this.$get = ['$window', function($window) {
          return {
            log: consoleLog('log'),
            info: consoleLog('info'),
            warn: consoleLog('warn'),
            error: consoleLog('error'),
            debug: (function() {
              var fn = consoleLog('debug');
              return function() {
                if (debug) {
                  fn.apply(self, arguments);
                }
              };
            }())
          };
          function formatError(arg) {
            if (arg instanceof Error) {
              if (arg.stack) {
                arg = (arg.message && arg.stack.indexOf(arg.message) === -1) ? 'Error: ' + arg.message + '\n' + arg.stack : arg.stack;
              } else if (arg.sourceURL) {
                arg = arg.message + '\n' + arg.sourceURL + ':' + arg.line;
              }
            }
            return arg;
          }
          function consoleLog(type) {
            var console = $window.console || {},
                logFn = console[type] || console.log || noop,
                hasApply = false;
            try {
              hasApply = !!logFn.apply;
            } catch (e) {}
            if (hasApply) {
              return function() {
                var args = [];
                forEach(arguments, function(arg) {
                  args.push(formatError(arg));
                });
                return logFn.apply(console, args);
              };
            }
            return function(arg1, arg2) {
              logFn(arg1, arg2 == null ? '' : arg2);
            };
          }
        }];
      }
      var $parseMinErr = minErr('$parse');
      function ensureSafeMemberName(name, fullExpression) {
        if (name === "__defineGetter__" || name === "__defineSetter__" || name === "__lookupGetter__" || name === "__lookupSetter__" || name === "__proto__") {
          throw $parseMinErr('isecfld', 'Attempting to access a disallowed field in Angular expressions! ' + 'Expression: {0}', fullExpression);
        }
        return name;
      }
      function getStringValue(name) {
        return name + '';
      }
      function ensureSafeObject(obj, fullExpression) {
        if (obj) {
          if (obj.constructor === obj) {
            throw $parseMinErr('isecfn', 'Referencing Function in Angular expressions is disallowed! Expression: {0}', fullExpression);
          } else if (obj.window === obj) {
            throw $parseMinErr('isecwindow', 'Referencing the Window in Angular expressions is disallowed! Expression: {0}', fullExpression);
          } else if (obj.children && (obj.nodeName || (obj.prop && obj.attr && obj.find))) {
            throw $parseMinErr('isecdom', 'Referencing DOM nodes in Angular expressions is disallowed! Expression: {0}', fullExpression);
          } else if (obj === Object) {
            throw $parseMinErr('isecobj', 'Referencing Object in Angular expressions is disallowed! Expression: {0}', fullExpression);
          }
        }
        return obj;
      }
      var CALL = Function.prototype.call;
      var APPLY = Function.prototype.apply;
      var BIND = Function.prototype.bind;
      function ensureSafeFunction(obj, fullExpression) {
        if (obj) {
          if (obj.constructor === obj) {
            throw $parseMinErr('isecfn', 'Referencing Function in Angular expressions is disallowed! Expression: {0}', fullExpression);
          } else if (obj === CALL || obj === APPLY || obj === BIND) {
            throw $parseMinErr('isecff', 'Referencing call, apply or bind in Angular expressions is disallowed! Expression: {0}', fullExpression);
          }
        }
      }
      function ensureSafeAssignContext(obj, fullExpression) {
        if (obj) {
          if (obj === (0).constructor || obj === (false).constructor || obj === ''.constructor || obj === {}.constructor || obj === [].constructor || obj === Function.constructor) {
            throw $parseMinErr('isecaf', 'Assigning to a constructor is disallowed! Expression: {0}', fullExpression);
          }
        }
      }
      var OPERATORS = createMap();
      forEach('+ - * / % === !== == != < > <= >= && || ! = |'.split(' '), function(operator) {
        OPERATORS[operator] = true;
      });
      var ESCAPE = {
        "n": "\n",
        "f": "\f",
        "r": "\r",
        "t": "\t",
        "v": "\v",
        "'": "'",
        '"': '"'
      };
      var Lexer = function(options) {
        this.options = options;
      };
      Lexer.prototype = {
        constructor: Lexer,
        lex: function(text) {
          this.text = text;
          this.index = 0;
          this.tokens = [];
          while (this.index < this.text.length) {
            var ch = this.text.charAt(this.index);
            if (ch === '"' || ch === "'") {
              this.readString(ch);
            } else if (this.isNumber(ch) || ch === '.' && this.isNumber(this.peek())) {
              this.readNumber();
            } else if (this.isIdentifierStart(this.peekMultichar())) {
              this.readIdent();
            } else if (this.is(ch, '(){}[].,;:?')) {
              this.tokens.push({
                index: this.index,
                text: ch
              });
              this.index++;
            } else if (this.isWhitespace(ch)) {
              this.index++;
            } else {
              var ch2 = ch + this.peek();
              var ch3 = ch2 + this.peek(2);
              var op1 = OPERATORS[ch];
              var op2 = OPERATORS[ch2];
              var op3 = OPERATORS[ch3];
              if (op1 || op2 || op3) {
                var token = op3 ? ch3 : (op2 ? ch2 : ch);
                this.tokens.push({
                  index: this.index,
                  text: token,
                  operator: true
                });
                this.index += token.length;
              } else {
                this.throwError('Unexpected next character ', this.index, this.index + 1);
              }
            }
          }
          return this.tokens;
        },
        is: function(ch, chars) {
          return chars.indexOf(ch) !== -1;
        },
        peek: function(i) {
          var num = i || 1;
          return (this.index + num < this.text.length) ? this.text.charAt(this.index + num) : false;
        },
        isNumber: function(ch) {
          return ('0' <= ch && ch <= '9') && typeof ch === "string";
        },
        isWhitespace: function(ch) {
          return (ch === ' ' || ch === '\r' || ch === '\t' || ch === '\n' || ch === '\v' || ch === '\u00A0');
        },
        isIdentifierStart: function(ch) {
          return this.options.isIdentifierStart ? this.options.isIdentifierStart(ch, this.codePointAt(ch)) : this.isValidIdentifierStart(ch);
        },
        isValidIdentifierStart: function(ch) {
          return ('a' <= ch && ch <= 'z' || 'A' <= ch && ch <= 'Z' || '_' === ch || ch === '$');
        },
        isIdentifierContinue: function(ch) {
          return this.options.isIdentifierContinue ? this.options.isIdentifierContinue(ch, this.codePointAt(ch)) : this.isValidIdentifierContinue(ch);
        },
        isValidIdentifierContinue: function(ch, cp) {
          return this.isValidIdentifierStart(ch, cp) || this.isNumber(ch);
        },
        codePointAt: function(ch) {
          if (ch.length === 1)
            return ch.charCodeAt(0);
          return (ch.charCodeAt(0) << 10) + ch.charCodeAt(1) - 0x35FDC00;
        },
        peekMultichar: function() {
          var ch = this.text.charAt(this.index);
          var peek = this.peek();
          if (!peek) {
            return ch;
          }
          var cp1 = ch.charCodeAt(0);
          var cp2 = peek.charCodeAt(0);
          if (cp1 >= 0xD800 && cp1 <= 0xDBFF && cp2 >= 0xDC00 && cp2 <= 0xDFFF) {
            return ch + peek;
          }
          return ch;
        },
        isExpOperator: function(ch) {
          return (ch === '-' || ch === '+' || this.isNumber(ch));
        },
        throwError: function(error, start, end) {
          end = end || this.index;
          var colStr = (isDefined(start) ? 's ' + start + '-' + this.index + ' [' + this.text.substring(start, end) + ']' : ' ' + end);
          throw $parseMinErr('lexerr', 'Lexer Error: {0} at column{1} in expression [{2}].', error, colStr, this.text);
        },
        readNumber: function() {
          var number = '';
          var start = this.index;
          while (this.index < this.text.length) {
            var ch = lowercase(this.text.charAt(this.index));
            if (ch == '.' || this.isNumber(ch)) {
              number += ch;
            } else {
              var peekCh = this.peek();
              if (ch == 'e' && this.isExpOperator(peekCh)) {
                number += ch;
              } else if (this.isExpOperator(ch) && peekCh && this.isNumber(peekCh) && number.charAt(number.length - 1) == 'e') {
                number += ch;
              } else if (this.isExpOperator(ch) && (!peekCh || !this.isNumber(peekCh)) && number.charAt(number.length - 1) == 'e') {
                this.throwError('Invalid exponent');
              } else {
                break;
              }
            }
            this.index++;
          }
          this.tokens.push({
            index: start,
            text: number,
            constant: true,
            value: Number(number)
          });
        },
        readIdent: function() {
          var start = this.index;
          this.index += this.peekMultichar().length;
          while (this.index < this.text.length) {
            var ch = this.peekMultichar();
            if (!this.isIdentifierContinue(ch)) {
              break;
            }
            this.index += ch.length;
          }
          this.tokens.push({
            index: start,
            text: this.text.slice(start, this.index),
            identifier: true
          });
        },
        readString: function(quote) {
          var start = this.index;
          this.index++;
          var string = '';
          var rawString = quote;
          var escape = false;
          while (this.index < this.text.length) {
            var ch = this.text.charAt(this.index);
            rawString += ch;
            if (escape) {
              if (ch === 'u') {
                var hex = this.text.substring(this.index + 1, this.index + 5);
                if (!hex.match(/[\da-f]{4}/i)) {
                  this.throwError('Invalid unicode escape [\\u' + hex + ']');
                }
                this.index += 4;
                string += String.fromCharCode(parseInt(hex, 16));
              } else {
                var rep = ESCAPE[ch];
                string = string + (rep || ch);
              }
              escape = false;
            } else if (ch === '\\') {
              escape = true;
            } else if (ch === quote) {
              this.index++;
              this.tokens.push({
                index: start,
                text: rawString,
                constant: true,
                value: string
              });
              return;
            } else {
              string += ch;
            }
            this.index++;
          }
          this.throwError('Unterminated quote', start);
        }
      };
      var AST = function(lexer, options) {
        this.lexer = lexer;
        this.options = options;
      };
      AST.Program = 'Program';
      AST.ExpressionStatement = 'ExpressionStatement';
      AST.AssignmentExpression = 'AssignmentExpression';
      AST.ConditionalExpression = 'ConditionalExpression';
      AST.LogicalExpression = 'LogicalExpression';
      AST.BinaryExpression = 'BinaryExpression';
      AST.UnaryExpression = 'UnaryExpression';
      AST.CallExpression = 'CallExpression';
      AST.MemberExpression = 'MemberExpression';
      AST.Identifier = 'Identifier';
      AST.Literal = 'Literal';
      AST.ArrayExpression = 'ArrayExpression';
      AST.Property = 'Property';
      AST.ObjectExpression = 'ObjectExpression';
      AST.ThisExpression = 'ThisExpression';
      AST.LocalsExpression = 'LocalsExpression';
      AST.NGValueParameter = 'NGValueParameter';
      AST.prototype = {
        ast: function(text) {
          this.text = text;
          this.tokens = this.lexer.lex(text);
          var value = this.program();
          if (this.tokens.length !== 0) {
            this.throwError('is an unexpected token', this.tokens[0]);
          }
          return value;
        },
        program: function() {
          var body = [];
          while (true) {
            if (this.tokens.length > 0 && !this.peek('}', ')', ';', ']'))
              body.push(this.expressionStatement());
            if (!this.expect(';')) {
              return {
                type: AST.Program,
                body: body
              };
            }
          }
        },
        expressionStatement: function() {
          return {
            type: AST.ExpressionStatement,
            expression: this.filterChain()
          };
        },
        filterChain: function() {
          var left = this.expression();
          var token;
          while ((token = this.expect('|'))) {
            left = this.filter(left);
          }
          return left;
        },
        expression: function() {
          return this.assignment();
        },
        assignment: function() {
          var result = this.ternary();
          if (this.expect('=')) {
            result = {
              type: AST.AssignmentExpression,
              left: result,
              right: this.assignment(),
              operator: '='
            };
          }
          return result;
        },
        ternary: function() {
          var test = this.logicalOR();
          var alternate;
          var consequent;
          if (this.expect('?')) {
            alternate = this.expression();
            if (this.consume(':')) {
              consequent = this.expression();
              return {
                type: AST.ConditionalExpression,
                test: test,
                alternate: alternate,
                consequent: consequent
              };
            }
          }
          return test;
        },
        logicalOR: function() {
          var left = this.logicalAND();
          while (this.expect('||')) {
            left = {
              type: AST.LogicalExpression,
              operator: '||',
              left: left,
              right: this.logicalAND()
            };
          }
          return left;
        },
        logicalAND: function() {
          var left = this.equality();
          while (this.expect('&&')) {
            left = {
              type: AST.LogicalExpression,
              operator: '&&',
              left: left,
              right: this.equality()
            };
          }
          return left;
        },
        equality: function() {
          var left = this.relational();
          var token;
          while ((token = this.expect('==', '!=', '===', '!=='))) {
            left = {
              type: AST.BinaryExpression,
              operator: token.text,
              left: left,
              right: this.relational()
            };
          }
          return left;
        },
        relational: function() {
          var left = this.additive();
          var token;
          while ((token = this.expect('<', '>', '<=', '>='))) {
            left = {
              type: AST.BinaryExpression,
              operator: token.text,
              left: left,
              right: this.additive()
            };
          }
          return left;
        },
        additive: function() {
          var left = this.multiplicative();
          var token;
          while ((token = this.expect('+', '-'))) {
            left = {
              type: AST.BinaryExpression,
              operator: token.text,
              left: left,
              right: this.multiplicative()
            };
          }
          return left;
        },
        multiplicative: function() {
          var left = this.unary();
          var token;
          while ((token = this.expect('*', '/', '%'))) {
            left = {
              type: AST.BinaryExpression,
              operator: token.text,
              left: left,
              right: this.unary()
            };
          }
          return left;
        },
        unary: function() {
          var token;
          if ((token = this.expect('+', '-', '!'))) {
            return {
              type: AST.UnaryExpression,
              operator: token.text,
              prefix: true,
              argument: this.unary()
            };
          } else {
            return this.primary();
          }
        },
        primary: function() {
          var primary;
          if (this.expect('(')) {
            primary = this.filterChain();
            this.consume(')');
          } else if (this.expect('[')) {
            primary = this.arrayDeclaration();
          } else if (this.expect('{')) {
            primary = this.object();
          } else if (this.selfReferential.hasOwnProperty(this.peek().text)) {
            primary = copy(this.selfReferential[this.consume().text]);
          } else if (this.options.literals.hasOwnProperty(this.peek().text)) {
            primary = {
              type: AST.Literal,
              value: this.options.literals[this.consume().text]
            };
          } else if (this.peek().identifier) {
            primary = this.identifier();
          } else if (this.peek().constant) {
            primary = this.constant();
          } else {
            this.throwError('not a primary expression', this.peek());
          }
          var next;
          while ((next = this.expect('(', '[', '.'))) {
            if (next.text === '(') {
              primary = {
                type: AST.CallExpression,
                callee: primary,
                arguments: this.parseArguments()
              };
              this.consume(')');
            } else if (next.text === '[') {
              primary = {
                type: AST.MemberExpression,
                object: primary,
                property: this.expression(),
                computed: true
              };
              this.consume(']');
            } else if (next.text === '.') {
              primary = {
                type: AST.MemberExpression,
                object: primary,
                property: this.identifier(),
                computed: false
              };
            } else {
              this.throwError('IMPOSSIBLE');
            }
          }
          return primary;
        },
        filter: function(baseExpression) {
          var args = [baseExpression];
          var result = {
            type: AST.CallExpression,
            callee: this.identifier(),
            arguments: args,
            filter: true
          };
          while (this.expect(':')) {
            args.push(this.expression());
          }
          return result;
        },
        parseArguments: function() {
          var args = [];
          if (this.peekToken().text !== ')') {
            do {
              args.push(this.filterChain());
            } while (this.expect(','));
          }
          return args;
        },
        identifier: function() {
          var token = this.consume();
          if (!token.identifier) {
            this.throwError('is not a valid identifier', token);
          }
          return {
            type: AST.Identifier,
            name: token.text
          };
        },
        constant: function() {
          return {
            type: AST.Literal,
            value: this.consume().value
          };
        },
        arrayDeclaration: function() {
          var elements = [];
          if (this.peekToken().text !== ']') {
            do {
              if (this.peek(']')) {
                break;
              }
              elements.push(this.expression());
            } while (this.expect(','));
          }
          this.consume(']');
          return {
            type: AST.ArrayExpression,
            elements: elements
          };
        },
        object: function() {
          var properties = [],
              property;
          if (this.peekToken().text !== '}') {
            do {
              if (this.peek('}')) {
                break;
              }
              property = {
                type: AST.Property,
                kind: 'init'
              };
              if (this.peek().constant) {
                property.key = this.constant();
                property.computed = false;
                this.consume(':');
                property.value = this.expression();
              } else if (this.peek().identifier) {
                property.key = this.identifier();
                property.computed = false;
                if (this.peek(':')) {
                  this.consume(':');
                  property.value = this.expression();
                } else {
                  property.value = property.key;
                }
              } else if (this.peek('[')) {
                this.consume('[');
                property.key = this.expression();
                this.consume(']');
                property.computed = true;
                this.consume(':');
                property.value = this.expression();
              } else {
                this.throwError("invalid key", this.peek());
              }
              properties.push(property);
            } while (this.expect(','));
          }
          this.consume('}');
          return {
            type: AST.ObjectExpression,
            properties: properties
          };
        },
        throwError: function(msg, token) {
          throw $parseMinErr('syntax', 'Syntax Error: Token \'{0}\' {1} at column {2} of the expression [{3}] starting at [{4}].', token.text, msg, (token.index + 1), this.text, this.text.substring(token.index));
        },
        consume: function(e1) {
          if (this.tokens.length === 0) {
            throw $parseMinErr('ueoe', 'Unexpected end of expression: {0}', this.text);
          }
          var token = this.expect(e1);
          if (!token) {
            this.throwError('is unexpected, expecting [' + e1 + ']', this.peek());
          }
          return token;
        },
        peekToken: function() {
          if (this.tokens.length === 0) {
            throw $parseMinErr('ueoe', 'Unexpected end of expression: {0}', this.text);
          }
          return this.tokens[0];
        },
        peek: function(e1, e2, e3, e4) {
          return this.peekAhead(0, e1, e2, e3, e4);
        },
        peekAhead: function(i, e1, e2, e3, e4) {
          if (this.tokens.length > i) {
            var token = this.tokens[i];
            var t = token.text;
            if (t === e1 || t === e2 || t === e3 || t === e4 || (!e1 && !e2 && !e3 && !e4)) {
              return token;
            }
          }
          return false;
        },
        expect: function(e1, e2, e3, e4) {
          var token = this.peek(e1, e2, e3, e4);
          if (token) {
            this.tokens.shift();
            return token;
          }
          return false;
        },
        selfReferential: {
          'this': {type: AST.ThisExpression},
          '$locals': {type: AST.LocalsExpression}
        }
      };
      function ifDefined(v, d) {
        return typeof v !== 'undefined' ? v : d;
      }
      function plusFn(l, r) {
        if (typeof l === 'undefined')
          return r;
        if (typeof r === 'undefined')
          return l;
        return l + r;
      }
      function isStateless($filter, filterName) {
        var fn = $filter(filterName);
        return !fn.$stateful;
      }
      function findConstantAndWatchExpressions(ast, $filter) {
        var allConstants;
        var argsToWatch;
        switch (ast.type) {
          case AST.Program:
            allConstants = true;
            forEach(ast.body, function(expr) {
              findConstantAndWatchExpressions(expr.expression, $filter);
              allConstants = allConstants && expr.expression.constant;
            });
            ast.constant = allConstants;
            break;
          case AST.Literal:
            ast.constant = true;
            ast.toWatch = [];
            break;
          case AST.UnaryExpression:
            findConstantAndWatchExpressions(ast.argument, $filter);
            ast.constant = ast.argument.constant;
            ast.toWatch = ast.argument.toWatch;
            break;
          case AST.BinaryExpression:
            findConstantAndWatchExpressions(ast.left, $filter);
            findConstantAndWatchExpressions(ast.right, $filter);
            ast.constant = ast.left.constant && ast.right.constant;
            ast.toWatch = ast.left.toWatch.concat(ast.right.toWatch);
            break;
          case AST.LogicalExpression:
            findConstantAndWatchExpressions(ast.left, $filter);
            findConstantAndWatchExpressions(ast.right, $filter);
            ast.constant = ast.left.constant && ast.right.constant;
            ast.toWatch = ast.constant ? [] : [ast];
            break;
          case AST.ConditionalExpression:
            findConstantAndWatchExpressions(ast.test, $filter);
            findConstantAndWatchExpressions(ast.alternate, $filter);
            findConstantAndWatchExpressions(ast.consequent, $filter);
            ast.constant = ast.test.constant && ast.alternate.constant && ast.consequent.constant;
            ast.toWatch = ast.constant ? [] : [ast];
            break;
          case AST.Identifier:
            ast.constant = false;
            ast.toWatch = [ast];
            break;
          case AST.MemberExpression:
            findConstantAndWatchExpressions(ast.object, $filter);
            if (ast.computed) {
              findConstantAndWatchExpressions(ast.property, $filter);
            }
            ast.constant = ast.object.constant && (!ast.computed || ast.property.constant);
            ast.toWatch = [ast];
            break;
          case AST.CallExpression:
            allConstants = ast.filter ? isStateless($filter, ast.callee.name) : false;
            argsToWatch = [];
            forEach(ast.arguments, function(expr) {
              findConstantAndWatchExpressions(expr, $filter);
              allConstants = allConstants && expr.constant;
              if (!expr.constant) {
                argsToWatch.push.apply(argsToWatch, expr.toWatch);
              }
            });
            ast.constant = allConstants;
            ast.toWatch = ast.filter && isStateless($filter, ast.callee.name) ? argsToWatch : [ast];
            break;
          case AST.AssignmentExpression:
            findConstantAndWatchExpressions(ast.left, $filter);
            findConstantAndWatchExpressions(ast.right, $filter);
            ast.constant = ast.left.constant && ast.right.constant;
            ast.toWatch = [ast];
            break;
          case AST.ArrayExpression:
            allConstants = true;
            argsToWatch = [];
            forEach(ast.elements, function(expr) {
              findConstantAndWatchExpressions(expr, $filter);
              allConstants = allConstants && expr.constant;
              if (!expr.constant) {
                argsToWatch.push.apply(argsToWatch, expr.toWatch);
              }
            });
            ast.constant = allConstants;
            ast.toWatch = argsToWatch;
            break;
          case AST.ObjectExpression:
            allConstants = true;
            argsToWatch = [];
            forEach(ast.properties, function(property) {
              findConstantAndWatchExpressions(property.value, $filter);
              allConstants = allConstants && property.value.constant && !property.computed;
              if (!property.value.constant) {
                argsToWatch.push.apply(argsToWatch, property.value.toWatch);
              }
            });
            ast.constant = allConstants;
            ast.toWatch = argsToWatch;
            break;
          case AST.ThisExpression:
            ast.constant = false;
            ast.toWatch = [];
            break;
          case AST.LocalsExpression:
            ast.constant = false;
            ast.toWatch = [];
            break;
        }
      }
      function getInputs(body) {
        if (body.length != 1)
          return;
        var lastExpression = body[0].expression;
        var candidate = lastExpression.toWatch;
        if (candidate.length !== 1)
          return candidate;
        return candidate[0] !== lastExpression ? candidate : undefined;
      }
      function isAssignable(ast) {
        return ast.type === AST.Identifier || ast.type === AST.MemberExpression;
      }
      function assignableAST(ast) {
        if (ast.body.length === 1 && isAssignable(ast.body[0].expression)) {
          return {
            type: AST.AssignmentExpression,
            left: ast.body[0].expression,
            right: {type: AST.NGValueParameter},
            operator: '='
          };
        }
      }
      function isLiteral(ast) {
        return ast.body.length === 0 || ast.body.length === 1 && (ast.body[0].expression.type === AST.Literal || ast.body[0].expression.type === AST.ArrayExpression || ast.body[0].expression.type === AST.ObjectExpression);
      }
      function isConstant(ast) {
        return ast.constant;
      }
      function ASTCompiler(astBuilder, $filter) {
        this.astBuilder = astBuilder;
        this.$filter = $filter;
      }
      ASTCompiler.prototype = {
        compile: function(expression, expensiveChecks) {
          var self = this;
          var ast = this.astBuilder.ast(expression);
          this.state = {
            nextId: 0,
            filters: {},
            expensiveChecks: expensiveChecks,
            fn: {
              vars: [],
              body: [],
              own: {}
            },
            assign: {
              vars: [],
              body: [],
              own: {}
            },
            inputs: []
          };
          findConstantAndWatchExpressions(ast, self.$filter);
          var extra = '';
          var assignable;
          this.stage = 'assign';
          if ((assignable = assignableAST(ast))) {
            this.state.computing = 'assign';
            var result = this.nextId();
            this.recurse(assignable, result);
            this.return_(result);
            extra = 'fn.assign=' + this.generateFunction('assign', 's,v,l');
          }
          var toWatch = getInputs(ast.body);
          self.stage = 'inputs';
          forEach(toWatch, function(watch, key) {
            var fnKey = 'fn' + key;
            self.state[fnKey] = {
              vars: [],
              body: [],
              own: {}
            };
            self.state.computing = fnKey;
            var intoId = self.nextId();
            self.recurse(watch, intoId);
            self.return_(intoId);
            self.state.inputs.push(fnKey);
            watch.watchId = key;
          });
          this.state.computing = 'fn';
          this.stage = 'main';
          this.recurse(ast);
          var fnString = '"' + this.USE + ' ' + this.STRICT + '";\n' + this.filterPrefix() + 'var fn=' + this.generateFunction('fn', 's,l,a,i') + extra + this.watchFns() + 'return fn;';
          var fn = (new Function('$filter', 'ensureSafeMemberName', 'ensureSafeObject', 'ensureSafeFunction', 'getStringValue', 'ensureSafeAssignContext', 'ifDefined', 'plus', 'text', fnString))(this.$filter, ensureSafeMemberName, ensureSafeObject, ensureSafeFunction, getStringValue, ensureSafeAssignContext, ifDefined, plusFn, expression);
          this.state = this.stage = undefined;
          fn.literal = isLiteral(ast);
          fn.constant = isConstant(ast);
          return fn;
        },
        USE: 'use',
        STRICT: 'strict',
        watchFns: function() {
          var result = [];
          var fns = this.state.inputs;
          var self = this;
          forEach(fns, function(name) {
            result.push('var ' + name + '=' + self.generateFunction(name, 's'));
          });
          if (fns.length) {
            result.push('fn.inputs=[' + fns.join(',') + '];');
          }
          return result.join('');
        },
        generateFunction: function(name, params) {
          return 'function(' + params + '){' + this.varsPrefix(name) + this.body(name) + '};';
        },
        filterPrefix: function() {
          var parts = [];
          var self = this;
          forEach(this.state.filters, function(id, filter) {
            parts.push(id + '=$filter(' + self.escape(filter) + ')');
          });
          if (parts.length)
            return 'var ' + parts.join(',') + ';';
          return '';
        },
        varsPrefix: function(section) {
          return this.state[section].vars.length ? 'var ' + this.state[section].vars.join(',') + ';' : '';
        },
        body: function(section) {
          return this.state[section].body.join('');
        },
        recurse: function(ast, intoId, nameId, recursionFn, create, skipWatchIdCheck) {
          var left,
              right,
              self = this,
              args,
              expression,
              computed;
          recursionFn = recursionFn || noop;
          if (!skipWatchIdCheck && isDefined(ast.watchId)) {
            intoId = intoId || this.nextId();
            this.if_('i', this.lazyAssign(intoId, this.computedMember('i', ast.watchId)), this.lazyRecurse(ast, intoId, nameId, recursionFn, create, true));
            return;
          }
          switch (ast.type) {
            case AST.Program:
              forEach(ast.body, function(expression, pos) {
                self.recurse(expression.expression, undefined, undefined, function(expr) {
                  right = expr;
                });
                if (pos !== ast.body.length - 1) {
                  self.current().body.push(right, ';');
                } else {
                  self.return_(right);
                }
              });
              break;
            case AST.Literal:
              expression = this.escape(ast.value);
              this.assign(intoId, expression);
              recursionFn(expression);
              break;
            case AST.UnaryExpression:
              this.recurse(ast.argument, undefined, undefined, function(expr) {
                right = expr;
              });
              expression = ast.operator + '(' + this.ifDefined(right, 0) + ')';
              this.assign(intoId, expression);
              recursionFn(expression);
              break;
            case AST.BinaryExpression:
              this.recurse(ast.left, undefined, undefined, function(expr) {
                left = expr;
              });
              this.recurse(ast.right, undefined, undefined, function(expr) {
                right = expr;
              });
              if (ast.operator === '+') {
                expression = this.plus(left, right);
              } else if (ast.operator === '-') {
                expression = this.ifDefined(left, 0) + ast.operator + this.ifDefined(right, 0);
              } else {
                expression = '(' + left + ')' + ast.operator + '(' + right + ')';
              }
              this.assign(intoId, expression);
              recursionFn(expression);
              break;
            case AST.LogicalExpression:
              intoId = intoId || this.nextId();
              self.recurse(ast.left, intoId);
              self.if_(ast.operator === '&&' ? intoId : self.not(intoId), self.lazyRecurse(ast.right, intoId));
              recursionFn(intoId);
              break;
            case AST.ConditionalExpression:
              intoId = intoId || this.nextId();
              self.recurse(ast.test, intoId);
              self.if_(intoId, self.lazyRecurse(ast.alternate, intoId), self.lazyRecurse(ast.consequent, intoId));
              recursionFn(intoId);
              break;
            case AST.Identifier:
              intoId = intoId || this.nextId();
              if (nameId) {
                nameId.context = self.stage === 'inputs' ? 's' : this.assign(this.nextId(), this.getHasOwnProperty('l', ast.name) + '?l:s');
                nameId.computed = false;
                nameId.name = ast.name;
              }
              ensureSafeMemberName(ast.name);
              self.if_(self.stage === 'inputs' || self.not(self.getHasOwnProperty('l', ast.name)), function() {
                self.if_(self.stage === 'inputs' || 's', function() {
                  if (create && create !== 1) {
                    self.if_(self.not(self.nonComputedMember('s', ast.name)), self.lazyAssign(self.nonComputedMember('s', ast.name), '{}'));
                  }
                  self.assign(intoId, self.nonComputedMember('s', ast.name));
                });
              }, intoId && self.lazyAssign(intoId, self.nonComputedMember('l', ast.name)));
              if (self.state.expensiveChecks || isPossiblyDangerousMemberName(ast.name)) {
                self.addEnsureSafeObject(intoId);
              }
              recursionFn(intoId);
              break;
            case AST.MemberExpression:
              left = nameId && (nameId.context = this.nextId()) || this.nextId();
              intoId = intoId || this.nextId();
              self.recurse(ast.object, left, undefined, function() {
                self.if_(self.notNull(left), function() {
                  if (create && create !== 1) {
                    self.addEnsureSafeAssignContext(left);
                  }
                  if (ast.computed) {
                    right = self.nextId();
                    self.recurse(ast.property, right);
                    self.getStringValue(right);
                    self.addEnsureSafeMemberName(right);
                    if (create && create !== 1) {
                      self.if_(self.not(self.computedMember(left, right)), self.lazyAssign(self.computedMember(left, right), '{}'));
                    }
                    expression = self.ensureSafeObject(self.computedMember(left, right));
                    self.assign(intoId, expression);
                    if (nameId) {
                      nameId.computed = true;
                      nameId.name = right;
                    }
                  } else {
                    ensureSafeMemberName(ast.property.name);
                    if (create && create !== 1) {
                      self.if_(self.not(self.nonComputedMember(left, ast.property.name)), self.lazyAssign(self.nonComputedMember(left, ast.property.name), '{}'));
                    }
                    expression = self.nonComputedMember(left, ast.property.name);
                    if (self.state.expensiveChecks || isPossiblyDangerousMemberName(ast.property.name)) {
                      expression = self.ensureSafeObject(expression);
                    }
                    self.assign(intoId, expression);
                    if (nameId) {
                      nameId.computed = false;
                      nameId.name = ast.property.name;
                    }
                  }
                }, function() {
                  self.assign(intoId, 'undefined');
                });
                recursionFn(intoId);
              }, !!create);
              break;
            case AST.CallExpression:
              intoId = intoId || this.nextId();
              if (ast.filter) {
                right = self.filter(ast.callee.name);
                args = [];
                forEach(ast.arguments, function(expr) {
                  var argument = self.nextId();
                  self.recurse(expr, argument);
                  args.push(argument);
                });
                expression = right + '(' + args.join(',') + ')';
                self.assign(intoId, expression);
                recursionFn(intoId);
              } else {
                right = self.nextId();
                left = {};
                args = [];
                self.recurse(ast.callee, right, left, function() {
                  self.if_(self.notNull(right), function() {
                    self.addEnsureSafeFunction(right);
                    forEach(ast.arguments, function(expr) {
                      self.recurse(expr, self.nextId(), undefined, function(argument) {
                        args.push(self.ensureSafeObject(argument));
                      });
                    });
                    if (left.name) {
                      if (!self.state.expensiveChecks) {
                        self.addEnsureSafeObject(left.context);
                      }
                      expression = self.member(left.context, left.name, left.computed) + '(' + args.join(',') + ')';
                    } else {
                      expression = right + '(' + args.join(',') + ')';
                    }
                    expression = self.ensureSafeObject(expression);
                    self.assign(intoId, expression);
                  }, function() {
                    self.assign(intoId, 'undefined');
                  });
                  recursionFn(intoId);
                });
              }
              break;
            case AST.AssignmentExpression:
              right = this.nextId();
              left = {};
              if (!isAssignable(ast.left)) {
                throw $parseMinErr('lval', 'Trying to assign a value to a non l-value');
              }
              this.recurse(ast.left, undefined, left, function() {
                self.if_(self.notNull(left.context), function() {
                  self.recurse(ast.right, right);
                  self.addEnsureSafeObject(self.member(left.context, left.name, left.computed));
                  self.addEnsureSafeAssignContext(left.context);
                  expression = self.member(left.context, left.name, left.computed) + ast.operator + right;
                  self.assign(intoId, expression);
                  recursionFn(intoId || expression);
                });
              }, 1);
              break;
            case AST.ArrayExpression:
              args = [];
              forEach(ast.elements, function(expr) {
                self.recurse(expr, self.nextId(), undefined, function(argument) {
                  args.push(argument);
                });
              });
              expression = '[' + args.join(',') + ']';
              this.assign(intoId, expression);
              recursionFn(expression);
              break;
            case AST.ObjectExpression:
              args = [];
              computed = false;
              forEach(ast.properties, function(property) {
                if (property.computed) {
                  computed = true;
                }
              });
              if (computed) {
                intoId = intoId || this.nextId();
                this.assign(intoId, '{}');
                forEach(ast.properties, function(property) {
                  if (property.computed) {
                    left = self.nextId();
                    self.recurse(property.key, left);
                  } else {
                    left = property.key.type === AST.Identifier ? property.key.name : ('' + property.key.value);
                  }
                  right = self.nextId();
                  self.recurse(property.value, right);
                  self.assign(self.member(intoId, left, property.computed), right);
                });
              } else {
                forEach(ast.properties, function(property) {
                  self.recurse(property.value, ast.constant ? undefined : self.nextId(), undefined, function(expr) {
                    args.push(self.escape(property.key.type === AST.Identifier ? property.key.name : ('' + property.key.value)) + ':' + expr);
                  });
                });
                expression = '{' + args.join(',') + '}';
                this.assign(intoId, expression);
              }
              recursionFn(intoId || expression);
              break;
            case AST.ThisExpression:
              this.assign(intoId, 's');
              recursionFn('s');
              break;
            case AST.LocalsExpression:
              this.assign(intoId, 'l');
              recursionFn('l');
              break;
            case AST.NGValueParameter:
              this.assign(intoId, 'v');
              recursionFn('v');
              break;
          }
        },
        getHasOwnProperty: function(element, property) {
          var key = element + '.' + property;
          var own = this.current().own;
          if (!own.hasOwnProperty(key)) {
            own[key] = this.nextId(false, element + '&&(' + this.escape(property) + ' in ' + element + ')');
          }
          return own[key];
        },
        assign: function(id, value) {
          if (!id)
            return;
          this.current().body.push(id, '=', value, ';');
          return id;
        },
        filter: function(filterName) {
          if (!this.state.filters.hasOwnProperty(filterName)) {
            this.state.filters[filterName] = this.nextId(true);
          }
          return this.state.filters[filterName];
        },
        ifDefined: function(id, defaultValue) {
          return 'ifDefined(' + id + ',' + this.escape(defaultValue) + ')';
        },
        plus: function(left, right) {
          return 'plus(' + left + ',' + right + ')';
        },
        return_: function(id) {
          this.current().body.push('return ', id, ';');
        },
        if_: function(test, alternate, consequent) {
          if (test === true) {
            alternate();
          } else {
            var body = this.current().body;
            body.push('if(', test, '){');
            alternate();
            body.push('}');
            if (consequent) {
              body.push('else{');
              consequent();
              body.push('}');
            }
          }
        },
        not: function(expression) {
          return '!(' + expression + ')';
        },
        notNull: function(expression) {
          return expression + '!=null';
        },
        nonComputedMember: function(left, right) {
          var SAFE_IDENTIFIER = /[$_a-zA-Z][$_a-zA-Z0-9]*/;
          var UNSAFE_CHARACTERS = /[^$_a-zA-Z0-9]/g;
          if (SAFE_IDENTIFIER.test(right)) {
            return left + '.' + right;
          } else {
            return left + '["' + right.replace(UNSAFE_CHARACTERS, this.stringEscapeFn) + '"]';
          }
        },
        computedMember: function(left, right) {
          return left + '[' + right + ']';
        },
        member: function(left, right, computed) {
          if (computed)
            return this.computedMember(left, right);
          return this.nonComputedMember(left, right);
        },
        addEnsureSafeObject: function(item) {
          this.current().body.push(this.ensureSafeObject(item), ';');
        },
        addEnsureSafeMemberName: function(item) {
          this.current().body.push(this.ensureSafeMemberName(item), ';');
        },
        addEnsureSafeFunction: function(item) {
          this.current().body.push(this.ensureSafeFunction(item), ';');
        },
        addEnsureSafeAssignContext: function(item) {
          this.current().body.push(this.ensureSafeAssignContext(item), ';');
        },
        ensureSafeObject: function(item) {
          return 'ensureSafeObject(' + item + ',text)';
        },
        ensureSafeMemberName: function(item) {
          return 'ensureSafeMemberName(' + item + ',text)';
        },
        ensureSafeFunction: function(item) {
          return 'ensureSafeFunction(' + item + ',text)';
        },
        getStringValue: function(item) {
          this.assign(item, 'getStringValue(' + item + ')');
        },
        ensureSafeAssignContext: function(item) {
          return 'ensureSafeAssignContext(' + item + ',text)';
        },
        lazyRecurse: function(ast, intoId, nameId, recursionFn, create, skipWatchIdCheck) {
          var self = this;
          return function() {
            self.recurse(ast, intoId, nameId, recursionFn, create, skipWatchIdCheck);
          };
        },
        lazyAssign: function(id, value) {
          var self = this;
          return function() {
            self.assign(id, value);
          };
        },
        stringEscapeRegex: /[^ a-zA-Z0-9]/g,
        stringEscapeFn: function(c) {
          return '\\u' + ('0000' + c.charCodeAt(0).toString(16)).slice(-4);
        },
        escape: function(value) {
          if (isString(value))
            return "'" + value.replace(this.stringEscapeRegex, this.stringEscapeFn) + "'";
          if (isNumber(value))
            return value.toString();
          if (value === true)
            return 'true';
          if (value === false)
            return 'false';
          if (value === null)
            return 'null';
          if (typeof value === 'undefined')
            return 'undefined';
          throw $parseMinErr('esc', 'IMPOSSIBLE');
        },
        nextId: function(skip, init) {
          var id = 'v' + (this.state.nextId++);
          if (!skip) {
            this.current().vars.push(id + (init ? '=' + init : ''));
          }
          return id;
        },
        current: function() {
          return this.state[this.state.computing];
        }
      };
      function ASTInterpreter(astBuilder, $filter) {
        this.astBuilder = astBuilder;
        this.$filter = $filter;
      }
      ASTInterpreter.prototype = {
        compile: function(expression, expensiveChecks) {
          var self = this;
          var ast = this.astBuilder.ast(expression);
          this.expression = expression;
          this.expensiveChecks = expensiveChecks;
          findConstantAndWatchExpressions(ast, self.$filter);
          var assignable;
          var assign;
          if ((assignable = assignableAST(ast))) {
            assign = this.recurse(assignable);
          }
          var toWatch = getInputs(ast.body);
          var inputs;
          if (toWatch) {
            inputs = [];
            forEach(toWatch, function(watch, key) {
              var input = self.recurse(watch);
              watch.input = input;
              inputs.push(input);
              watch.watchId = key;
            });
          }
          var expressions = [];
          forEach(ast.body, function(expression) {
            expressions.push(self.recurse(expression.expression));
          });
          var fn = ast.body.length === 0 ? noop : ast.body.length === 1 ? expressions[0] : function(scope, locals) {
            var lastValue;
            forEach(expressions, function(exp) {
              lastValue = exp(scope, locals);
            });
            return lastValue;
          };
          if (assign) {
            fn.assign = function(scope, value, locals) {
              return assign(scope, locals, value);
            };
          }
          if (inputs) {
            fn.inputs = inputs;
          }
          fn.literal = isLiteral(ast);
          fn.constant = isConstant(ast);
          return fn;
        },
        recurse: function(ast, context, create) {
          var left,
              right,
              self = this,
              args,
              expression;
          if (ast.input) {
            return this.inputs(ast.input, ast.watchId);
          }
          switch (ast.type) {
            case AST.Literal:
              return this.value(ast.value, context);
            case AST.UnaryExpression:
              right = this.recurse(ast.argument);
              return this['unary' + ast.operator](right, context);
            case AST.BinaryExpression:
              left = this.recurse(ast.left);
              right = this.recurse(ast.right);
              return this['binary' + ast.operator](left, right, context);
            case AST.LogicalExpression:
              left = this.recurse(ast.left);
              right = this.recurse(ast.right);
              return this['binary' + ast.operator](left, right, context);
            case AST.ConditionalExpression:
              return this['ternary?:'](this.recurse(ast.test), this.recurse(ast.alternate), this.recurse(ast.consequent), context);
            case AST.Identifier:
              ensureSafeMemberName(ast.name, self.expression);
              return self.identifier(ast.name, self.expensiveChecks || isPossiblyDangerousMemberName(ast.name), context, create, self.expression);
            case AST.MemberExpression:
              left = this.recurse(ast.object, false, !!create);
              if (!ast.computed) {
                ensureSafeMemberName(ast.property.name, self.expression);
                right = ast.property.name;
              }
              if (ast.computed)
                right = this.recurse(ast.property);
              return ast.computed ? this.computedMember(left, right, context, create, self.expression) : this.nonComputedMember(left, right, self.expensiveChecks, context, create, self.expression);
            case AST.CallExpression:
              args = [];
              forEach(ast.arguments, function(expr) {
                args.push(self.recurse(expr));
              });
              if (ast.filter)
                right = this.$filter(ast.callee.name);
              if (!ast.filter)
                right = this.recurse(ast.callee, true);
              return ast.filter ? function(scope, locals, assign, inputs) {
                var values = [];
                for (var i = 0; i < args.length; ++i) {
                  values.push(args[i](scope, locals, assign, inputs));
                }
                var value = right.apply(undefined, values, inputs);
                return context ? {
                  context: undefined,
                  name: undefined,
                  value: value
                } : value;
              } : function(scope, locals, assign, inputs) {
                var rhs = right(scope, locals, assign, inputs);
                var value;
                if (rhs.value != null) {
                  ensureSafeObject(rhs.context, self.expression);
                  ensureSafeFunction(rhs.value, self.expression);
                  var values = [];
                  for (var i = 0; i < args.length; ++i) {
                    values.push(ensureSafeObject(args[i](scope, locals, assign, inputs), self.expression));
                  }
                  value = ensureSafeObject(rhs.value.apply(rhs.context, values), self.expression);
                }
                return context ? {value: value} : value;
              };
            case AST.AssignmentExpression:
              left = this.recurse(ast.left, true, 1);
              right = this.recurse(ast.right);
              return function(scope, locals, assign, inputs) {
                var lhs = left(scope, locals, assign, inputs);
                var rhs = right(scope, locals, assign, inputs);
                ensureSafeObject(lhs.value, self.expression);
                ensureSafeAssignContext(lhs.context);
                lhs.context[lhs.name] = rhs;
                return context ? {value: rhs} : rhs;
              };
            case AST.ArrayExpression:
              args = [];
              forEach(ast.elements, function(expr) {
                args.push(self.recurse(expr));
              });
              return function(scope, locals, assign, inputs) {
                var value = [];
                for (var i = 0; i < args.length; ++i) {
                  value.push(args[i](scope, locals, assign, inputs));
                }
                return context ? {value: value} : value;
              };
            case AST.ObjectExpression:
              args = [];
              forEach(ast.properties, function(property) {
                if (property.computed) {
                  args.push({
                    key: self.recurse(property.key),
                    computed: true,
                    value: self.recurse(property.value)
                  });
                } else {
                  args.push({
                    key: property.key.type === AST.Identifier ? property.key.name : ('' + property.key.value),
                    computed: false,
                    value: self.recurse(property.value)
                  });
                }
              });
              return function(scope, locals, assign, inputs) {
                var value = {};
                for (var i = 0; i < args.length; ++i) {
                  if (args[i].computed) {
                    value[args[i].key(scope, locals, assign, inputs)] = args[i].value(scope, locals, assign, inputs);
                  } else {
                    value[args[i].key] = args[i].value(scope, locals, assign, inputs);
                  }
                }
                return context ? {value: value} : value;
              };
            case AST.ThisExpression:
              return function(scope) {
                return context ? {value: scope} : scope;
              };
            case AST.LocalsExpression:
              return function(scope, locals) {
                return context ? {value: locals} : locals;
              };
            case AST.NGValueParameter:
              return function(scope, locals, assign) {
                return context ? {value: assign} : assign;
              };
          }
        },
        'unary+': function(argument, context) {
          return function(scope, locals, assign, inputs) {
            var arg = argument(scope, locals, assign, inputs);
            if (isDefined(arg)) {
              arg = +arg;
            } else {
              arg = 0;
            }
            return context ? {value: arg} : arg;
          };
        },
        'unary-': function(argument, context) {
          return function(scope, locals, assign, inputs) {
            var arg = argument(scope, locals, assign, inputs);
            if (isDefined(arg)) {
              arg = -arg;
            } else {
              arg = 0;
            }
            return context ? {value: arg} : arg;
          };
        },
        'unary!': function(argument, context) {
          return function(scope, locals, assign, inputs) {
            var arg = !argument(scope, locals, assign, inputs);
            return context ? {value: arg} : arg;
          };
        },
        'binary+': function(left, right, context) {
          return function(scope, locals, assign, inputs) {
            var lhs = left(scope, locals, assign, inputs);
            var rhs = right(scope, locals, assign, inputs);
            var arg = plusFn(lhs, rhs);
            return context ? {value: arg} : arg;
          };
        },
        'binary-': function(left, right, context) {
          return function(scope, locals, assign, inputs) {
            var lhs = left(scope, locals, assign, inputs);
            var rhs = right(scope, locals, assign, inputs);
            var arg = (isDefined(lhs) ? lhs : 0) - (isDefined(rhs) ? rhs : 0);
            return context ? {value: arg} : arg;
          };
        },
        'binary*': function(left, right, context) {
          return function(scope, locals, assign, inputs) {
            var arg = left(scope, locals, assign, inputs) * right(scope, locals, assign, inputs);
            return context ? {value: arg} : arg;
          };
        },
        'binary/': function(left, right, context) {
          return function(scope, locals, assign, inputs) {
            var arg = left(scope, locals, assign, inputs) / right(scope, locals, assign, inputs);
            return context ? {value: arg} : arg;
          };
        },
        'binary%': function(left, right, context) {
          return function(scope, locals, assign, inputs) {
            var arg = left(scope, locals, assign, inputs) % right(scope, locals, assign, inputs);
            return context ? {value: arg} : arg;
          };
        },
        'binary===': function(left, right, context) {
          return function(scope, locals, assign, inputs) {
            var arg = left(scope, locals, assign, inputs) === right(scope, locals, assign, inputs);
            return context ? {value: arg} : arg;
          };
        },
        'binary!==': function(left, right, context) {
          return function(scope, locals, assign, inputs) {
            var arg = left(scope, locals, assign, inputs) !== right(scope, locals, assign, inputs);
            return context ? {value: arg} : arg;
          };
        },
        'binary==': function(left, right, context) {
          return function(scope, locals, assign, inputs) {
            var arg = left(scope, locals, assign, inputs) == right(scope, locals, assign, inputs);
            return context ? {value: arg} : arg;
          };
        },
        'binary!=': function(left, right, context) {
          return function(scope, locals, assign, inputs) {
            var arg = left(scope, locals, assign, inputs) != right(scope, locals, assign, inputs);
            return context ? {value: arg} : arg;
          };
        },
        'binary<': function(left, right, context) {
          return function(scope, locals, assign, inputs) {
            var arg = left(scope, locals, assign, inputs) < right(scope, locals, assign, inputs);
            return context ? {value: arg} : arg;
          };
        },
        'binary>': function(left, right, context) {
          return function(scope, locals, assign, inputs) {
            var arg = left(scope, locals, assign, inputs) > right(scope, locals, assign, inputs);
            return context ? {value: arg} : arg;
          };
        },
        'binary<=': function(left, right, context) {
          return function(scope, locals, assign, inputs) {
            var arg = left(scope, locals, assign, inputs) <= right(scope, locals, assign, inputs);
            return context ? {value: arg} : arg;
          };
        },
        'binary>=': function(left, right, context) {
          return function(scope, locals, assign, inputs) {
            var arg = left(scope, locals, assign, inputs) >= right(scope, locals, assign, inputs);
            return context ? {value: arg} : arg;
          };
        },
        'binary&&': function(left, right, context) {
          return function(scope, locals, assign, inputs) {
            var arg = left(scope, locals, assign, inputs) && right(scope, locals, assign, inputs);
            return context ? {value: arg} : arg;
          };
        },
        'binary||': function(left, right, context) {
          return function(scope, locals, assign, inputs) {
            var arg = left(scope, locals, assign, inputs) || right(scope, locals, assign, inputs);
            return context ? {value: arg} : arg;
          };
        },
        'ternary?:': function(test, alternate, consequent, context) {
          return function(scope, locals, assign, inputs) {
            var arg = test(scope, locals, assign, inputs) ? alternate(scope, locals, assign, inputs) : consequent(scope, locals, assign, inputs);
            return context ? {value: arg} : arg;
          };
        },
        value: function(value, context) {
          return function() {
            return context ? {
              context: undefined,
              name: undefined,
              value: value
            } : value;
          };
        },
        identifier: function(name, expensiveChecks, context, create, expression) {
          return function(scope, locals, assign, inputs) {
            var base = locals && (name in locals) ? locals : scope;
            if (create && create !== 1 && base && !(base[name])) {
              base[name] = {};
            }
            var value = base ? base[name] : undefined;
            if (expensiveChecks) {
              ensureSafeObject(value, expression);
            }
            if (context) {
              return {
                context: base,
                name: name,
                value: value
              };
            } else {
              return value;
            }
          };
        },
        computedMember: function(left, right, context, create, expression) {
          return function(scope, locals, assign, inputs) {
            var lhs = left(scope, locals, assign, inputs);
            var rhs;
            var value;
            if (lhs != null) {
              rhs = right(scope, locals, assign, inputs);
              rhs = getStringValue(rhs);
              ensureSafeMemberName(rhs, expression);
              if (create && create !== 1) {
                ensureSafeAssignContext(lhs);
                if (lhs && !(lhs[rhs])) {
                  lhs[rhs] = {};
                }
              }
              value = lhs[rhs];
              ensureSafeObject(value, expression);
            }
            if (context) {
              return {
                context: lhs,
                name: rhs,
                value: value
              };
            } else {
              return value;
            }
          };
        },
        nonComputedMember: function(left, right, expensiveChecks, context, create, expression) {
          return function(scope, locals, assign, inputs) {
            var lhs = left(scope, locals, assign, inputs);
            if (create && create !== 1) {
              ensureSafeAssignContext(lhs);
              if (lhs && !(lhs[right])) {
                lhs[right] = {};
              }
            }
            var value = lhs != null ? lhs[right] : undefined;
            if (expensiveChecks || isPossiblyDangerousMemberName(right)) {
              ensureSafeObject(value, expression);
            }
            if (context) {
              return {
                context: lhs,
                name: right,
                value: value
              };
            } else {
              return value;
            }
          };
        },
        inputs: function(input, watchId) {
          return function(scope, value, locals, inputs) {
            if (inputs)
              return inputs[watchId];
            return input(scope, value, locals);
          };
        }
      };
      var Parser = function(lexer, $filter, options) {
        this.lexer = lexer;
        this.$filter = $filter;
        this.options = options;
        this.ast = new AST(lexer, options);
        this.astCompiler = options.csp ? new ASTInterpreter(this.ast, $filter) : new ASTCompiler(this.ast, $filter);
      };
      Parser.prototype = {
        constructor: Parser,
        parse: function(text) {
          return this.astCompiler.compile(text, this.options.expensiveChecks);
        }
      };
      function isPossiblyDangerousMemberName(name) {
        return name == 'constructor';
      }
      var objectValueOf = Object.prototype.valueOf;
      function getValueOf(value) {
        return isFunction(value.valueOf) ? value.valueOf() : objectValueOf.call(value);
      }
      function $ParseProvider() {
        var cacheDefault = createMap();
        var cacheExpensive = createMap();
        var literals = {
          'true': true,
          'false': false,
          'null': null,
          'undefined': undefined
        };
        var identStart,
            identContinue;
        this.addLiteral = function(literalName, literalValue) {
          literals[literalName] = literalValue;
        };
        this.setIdentifierFns = function(identifierStart, identifierContinue) {
          identStart = identifierStart;
          identContinue = identifierContinue;
          return this;
        };
        this.$get = ['$filter', function($filter) {
          var noUnsafeEval = csp().noUnsafeEval;
          var $parseOptions = {
            csp: noUnsafeEval,
            expensiveChecks: false,
            literals: copy(literals),
            isIdentifierStart: isFunction(identStart) && identStart,
            isIdentifierContinue: isFunction(identContinue) && identContinue
          },
              $parseOptionsExpensive = {
                csp: noUnsafeEval,
                expensiveChecks: true,
                literals: copy(literals),
                isIdentifierStart: isFunction(identStart) && identStart,
                isIdentifierContinue: isFunction(identContinue) && identContinue
              };
          var runningChecksEnabled = false;
          $parse.$$runningExpensiveChecks = function() {
            return runningChecksEnabled;
          };
          return $parse;
          function $parse(exp, interceptorFn, expensiveChecks) {
            var parsedExpression,
                oneTime,
                cacheKey;
            expensiveChecks = expensiveChecks || runningChecksEnabled;
            switch (typeof exp) {
              case 'string':
                exp = exp.trim();
                cacheKey = exp;
                var cache = (expensiveChecks ? cacheExpensive : cacheDefault);
                parsedExpression = cache[cacheKey];
                if (!parsedExpression) {
                  if (exp.charAt(0) === ':' && exp.charAt(1) === ':') {
                    oneTime = true;
                    exp = exp.substring(2);
                  }
                  var parseOptions = expensiveChecks ? $parseOptionsExpensive : $parseOptions;
                  var lexer = new Lexer(parseOptions);
                  var parser = new Parser(lexer, $filter, parseOptions);
                  parsedExpression = parser.parse(exp);
                  if (parsedExpression.constant) {
                    parsedExpression.$$watchDelegate = constantWatchDelegate;
                  } else if (oneTime) {
                    parsedExpression.$$watchDelegate = parsedExpression.literal ? oneTimeLiteralWatchDelegate : oneTimeWatchDelegate;
                  } else if (parsedExpression.inputs) {
                    parsedExpression.$$watchDelegate = inputsWatchDelegate;
                  }
                  if (expensiveChecks) {
                    parsedExpression = expensiveChecksInterceptor(parsedExpression);
                  }
                  cache[cacheKey] = parsedExpression;
                }
                return addInterceptor(parsedExpression, interceptorFn);
              case 'function':
                return addInterceptor(exp, interceptorFn);
              default:
                return addInterceptor(noop, interceptorFn);
            }
          }
          function expensiveChecksInterceptor(fn) {
            if (!fn)
              return fn;
            expensiveCheckFn.$$watchDelegate = fn.$$watchDelegate;
            expensiveCheckFn.assign = expensiveChecksInterceptor(fn.assign);
            expensiveCheckFn.constant = fn.constant;
            expensiveCheckFn.literal = fn.literal;
            for (var i = 0; fn.inputs && i < fn.inputs.length; ++i) {
              fn.inputs[i] = expensiveChecksInterceptor(fn.inputs[i]);
            }
            expensiveCheckFn.inputs = fn.inputs;
            return expensiveCheckFn;
            function expensiveCheckFn(scope, locals, assign, inputs) {
              var expensiveCheckOldValue = runningChecksEnabled;
              runningChecksEnabled = true;
              try {
                return fn(scope, locals, assign, inputs);
              } finally {
                runningChecksEnabled = expensiveCheckOldValue;
              }
            }
          }
          function expressionInputDirtyCheck(newValue, oldValueOfValue) {
            if (newValue == null || oldValueOfValue == null) {
              return newValue === oldValueOfValue;
            }
            if (typeof newValue === 'object') {
              newValue = getValueOf(newValue);
              if (typeof newValue === 'object') {
                return false;
              }
            }
            return newValue === oldValueOfValue || (newValue !== newValue && oldValueOfValue !== oldValueOfValue);
          }
          function inputsWatchDelegate(scope, listener, objectEquality, parsedExpression, prettyPrintExpression) {
            var inputExpressions = parsedExpression.inputs;
            var lastResult;
            if (inputExpressions.length === 1) {
              var oldInputValueOf = expressionInputDirtyCheck;
              inputExpressions = inputExpressions[0];
              return scope.$watch(function expressionInputWatch(scope) {
                var newInputValue = inputExpressions(scope);
                if (!expressionInputDirtyCheck(newInputValue, oldInputValueOf)) {
                  lastResult = parsedExpression(scope, undefined, undefined, [newInputValue]);
                  oldInputValueOf = newInputValue && getValueOf(newInputValue);
                }
                return lastResult;
              }, listener, objectEquality, prettyPrintExpression);
            }
            var oldInputValueOfValues = [];
            var oldInputValues = [];
            for (var i = 0,
                ii = inputExpressions.length; i < ii; i++) {
              oldInputValueOfValues[i] = expressionInputDirtyCheck;
              oldInputValues[i] = null;
            }
            return scope.$watch(function expressionInputsWatch(scope) {
              var changed = false;
              for (var i = 0,
                  ii = inputExpressions.length; i < ii; i++) {
                var newInputValue = inputExpressions[i](scope);
                if (changed || (changed = !expressionInputDirtyCheck(newInputValue, oldInputValueOfValues[i]))) {
                  oldInputValues[i] = newInputValue;
                  oldInputValueOfValues[i] = newInputValue && getValueOf(newInputValue);
                }
              }
              if (changed) {
                lastResult = parsedExpression(scope, undefined, undefined, oldInputValues);
              }
              return lastResult;
            }, listener, objectEquality, prettyPrintExpression);
          }
          function oneTimeWatchDelegate(scope, listener, objectEquality, parsedExpression) {
            var unwatch,
                lastValue;
            return unwatch = scope.$watch(function oneTimeWatch(scope) {
              return parsedExpression(scope);
            }, function oneTimeListener(value, old, scope) {
              lastValue = value;
              if (isFunction(listener)) {
                listener.apply(this, arguments);
              }
              if (isDefined(value)) {
                scope.$$postDigest(function() {
                  if (isDefined(lastValue)) {
                    unwatch();
                  }
                });
              }
            }, objectEquality);
          }
          function oneTimeLiteralWatchDelegate(scope, listener, objectEquality, parsedExpression) {
            var unwatch,
                lastValue;
            return unwatch = scope.$watch(function oneTimeWatch(scope) {
              return parsedExpression(scope);
            }, function oneTimeListener(value, old, scope) {
              lastValue = value;
              if (isFunction(listener)) {
                listener.call(this, value, old, scope);
              }
              if (isAllDefined(value)) {
                scope.$$postDigest(function() {
                  if (isAllDefined(lastValue))
                    unwatch();
                });
              }
            }, objectEquality);
            function isAllDefined(value) {
              var allDefined = true;
              forEach(value, function(val) {
                if (!isDefined(val))
                  allDefined = false;
              });
              return allDefined;
            }
          }
          function constantWatchDelegate(scope, listener, objectEquality, parsedExpression) {
            var unwatch;
            return unwatch = scope.$watch(function constantWatch(scope) {
              unwatch();
              return parsedExpression(scope);
            }, listener, objectEquality);
          }
          function addInterceptor(parsedExpression, interceptorFn) {
            if (!interceptorFn)
              return parsedExpression;
            var watchDelegate = parsedExpression.$$watchDelegate;
            var useInputs = false;
            var regularWatch = watchDelegate !== oneTimeLiteralWatchDelegate && watchDelegate !== oneTimeWatchDelegate;
            var fn = regularWatch ? function regularInterceptedExpression(scope, locals, assign, inputs) {
              var value = useInputs && inputs ? inputs[0] : parsedExpression(scope, locals, assign, inputs);
              return interceptorFn(value, scope, locals);
            } : function oneTimeInterceptedExpression(scope, locals, assign, inputs) {
              var value = parsedExpression(scope, locals, assign, inputs);
              var result = interceptorFn(value, scope, locals);
              return isDefined(value) ? result : value;
            };
            if (parsedExpression.$$watchDelegate && parsedExpression.$$watchDelegate !== inputsWatchDelegate) {
              fn.$$watchDelegate = parsedExpression.$$watchDelegate;
            } else if (!interceptorFn.$stateful) {
              fn.$$watchDelegate = inputsWatchDelegate;
              useInputs = !parsedExpression.inputs;
              fn.inputs = parsedExpression.inputs ? parsedExpression.inputs : [parsedExpression];
            }
            return fn;
          }
        }];
      }
      function $QProvider() {
        this.$get = ['$rootScope', '$exceptionHandler', function($rootScope, $exceptionHandler) {
          return qFactory(function(callback) {
            $rootScope.$evalAsync(callback);
          }, $exceptionHandler);
        }];
      }
      function $$QProvider() {
        this.$get = ['$browser', '$exceptionHandler', function($browser, $exceptionHandler) {
          return qFactory(function(callback) {
            $browser.defer(callback);
          }, $exceptionHandler);
        }];
      }
      function qFactory(nextTick, exceptionHandler) {
        var $qMinErr = minErr('$q', TypeError);
        var defer = function() {
          var d = new Deferred();
          d.resolve = simpleBind(d, d.resolve);
          d.reject = simpleBind(d, d.reject);
          d.notify = simpleBind(d, d.notify);
          return d;
        };
        function Promise() {
          this.$$state = {status: 0};
        }
        extend(Promise.prototype, {
          then: function(onFulfilled, onRejected, progressBack) {
            if (isUndefined(onFulfilled) && isUndefined(onRejected) && isUndefined(progressBack)) {
              return this;
            }
            var result = new Deferred();
            this.$$state.pending = this.$$state.pending || [];
            this.$$state.pending.push([result, onFulfilled, onRejected, progressBack]);
            if (this.$$state.status > 0)
              scheduleProcessQueue(this.$$state);
            return result.promise;
          },
          "catch": function(callback) {
            return this.then(null, callback);
          },
          "finally": function(callback, progressBack) {
            return this.then(function(value) {
              return handleCallback(value, true, callback);
            }, function(error) {
              return handleCallback(error, false, callback);
            }, progressBack);
          }
        });
        function simpleBind(context, fn) {
          return function(value) {
            fn.call(context, value);
          };
        }
        function processQueue(state) {
          var fn,
              deferred,
              pending;
          pending = state.pending;
          state.processScheduled = false;
          state.pending = undefined;
          for (var i = 0,
              ii = pending.length; i < ii; ++i) {
            deferred = pending[i][0];
            fn = pending[i][state.status];
            try {
              if (isFunction(fn)) {
                deferred.resolve(fn(state.value));
              } else if (state.status === 1) {
                deferred.resolve(state.value);
              } else {
                deferred.reject(state.value);
              }
            } catch (e) {
              deferred.reject(e);
              exceptionHandler(e);
            }
          }
        }
        function scheduleProcessQueue(state) {
          if (state.processScheduled || !state.pending)
            return;
          state.processScheduled = true;
          nextTick(function() {
            processQueue(state);
          });
        }
        function Deferred() {
          this.promise = new Promise();
        }
        extend(Deferred.prototype, {
          resolve: function(val) {
            if (this.promise.$$state.status)
              return;
            if (val === this.promise) {
              this.$$reject($qMinErr('qcycle', "Expected promise to be resolved with value other than itself '{0}'", val));
            } else {
              this.$$resolve(val);
            }
          },
          $$resolve: function(val) {
            var then;
            var that = this;
            var done = false;
            try {
              if ((isObject(val) || isFunction(val)))
                then = val && val.then;
              if (isFunction(then)) {
                this.promise.$$state.status = -1;
                then.call(val, resolvePromise, rejectPromise, simpleBind(this, this.notify));
              } else {
                this.promise.$$state.value = val;
                this.promise.$$state.status = 1;
                scheduleProcessQueue(this.promise.$$state);
              }
            } catch (e) {
              rejectPromise(e);
              exceptionHandler(e);
            }
            function resolvePromise(val) {
              if (done)
                return;
              done = true;
              that.$$resolve(val);
            }
            function rejectPromise(val) {
              if (done)
                return;
              done = true;
              that.$$reject(val);
            }
          },
          reject: function(reason) {
            if (this.promise.$$state.status)
              return;
            this.$$reject(reason);
          },
          $$reject: function(reason) {
            this.promise.$$state.value = reason;
            this.promise.$$state.status = 2;
            scheduleProcessQueue(this.promise.$$state);
          },
          notify: function(progress) {
            var callbacks = this.promise.$$state.pending;
            if ((this.promise.$$state.status <= 0) && callbacks && callbacks.length) {
              nextTick(function() {
                var callback,
                    result;
                for (var i = 0,
                    ii = callbacks.length; i < ii; i++) {
                  result = callbacks[i][0];
                  callback = callbacks[i][3];
                  try {
                    result.notify(isFunction(callback) ? callback(progress) : progress);
                  } catch (e) {
                    exceptionHandler(e);
                  }
                }
              });
            }
          }
        });
        var reject = function(reason) {
          var result = new Deferred();
          result.reject(reason);
          return result.promise;
        };
        var makePromise = function makePromise(value, resolved) {
          var result = new Deferred();
          if (resolved) {
            result.resolve(value);
          } else {
            result.reject(value);
          }
          return result.promise;
        };
        var handleCallback = function handleCallback(value, isResolved, callback) {
          var callbackOutput = null;
          try {
            if (isFunction(callback))
              callbackOutput = callback();
          } catch (e) {
            return makePromise(e, false);
          }
          if (isPromiseLike(callbackOutput)) {
            return callbackOutput.then(function() {
              return makePromise(value, isResolved);
            }, function(error) {
              return makePromise(error, false);
            });
          } else {
            return makePromise(value, isResolved);
          }
        };
        var when = function(value, callback, errback, progressBack) {
          var result = new Deferred();
          result.resolve(value);
          return result.promise.then(callback, errback, progressBack);
        };
        var resolve = when;
        function all(promises) {
          var deferred = new Deferred(),
              counter = 0,
              results = isArray(promises) ? [] : {};
          forEach(promises, function(promise, key) {
            counter++;
            when(promise).then(function(value) {
              if (results.hasOwnProperty(key))
                return;
              results[key] = value;
              if (!(--counter))
                deferred.resolve(results);
            }, function(reason) {
              if (results.hasOwnProperty(key))
                return;
              deferred.reject(reason);
            });
          });
          if (counter === 0) {
            deferred.resolve(results);
          }
          return deferred.promise;
        }
        var $Q = function Q(resolver) {
          if (!isFunction(resolver)) {
            throw $qMinErr('norslvr', "Expected resolverFn, got '{0}'", resolver);
          }
          var deferred = new Deferred();
          function resolveFn(value) {
            deferred.resolve(value);
          }
          function rejectFn(reason) {
            deferred.reject(reason);
          }
          resolver(resolveFn, rejectFn);
          return deferred.promise;
        };
        $Q.prototype = Promise.prototype;
        $Q.defer = defer;
        $Q.reject = reject;
        $Q.when = when;
        $Q.resolve = resolve;
        $Q.all = all;
        return $Q;
      }
      function $$RAFProvider() {
        this.$get = ['$window', '$timeout', function($window, $timeout) {
          var requestAnimationFrame = $window.requestAnimationFrame || $window.webkitRequestAnimationFrame;
          var cancelAnimationFrame = $window.cancelAnimationFrame || $window.webkitCancelAnimationFrame || $window.webkitCancelRequestAnimationFrame;
          var rafSupported = !!requestAnimationFrame;
          var raf = rafSupported ? function(fn) {
            var id = requestAnimationFrame(fn);
            return function() {
              cancelAnimationFrame(id);
            };
          } : function(fn) {
            var timer = $timeout(fn, 16.66, false);
            return function() {
              $timeout.cancel(timer);
            };
          };
          raf.supported = rafSupported;
          return raf;
        }];
      }
      function $RootScopeProvider() {
        var TTL = 10;
        var $rootScopeMinErr = minErr('$rootScope');
        var lastDirtyWatch = null;
        var applyAsyncId = null;
        this.digestTtl = function(value) {
          if (arguments.length) {
            TTL = value;
          }
          return TTL;
        };
        function createChildScopeClass(parent) {
          function ChildScope() {
            this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null;
            this.$$listeners = {};
            this.$$listenerCount = {};
            this.$$watchersCount = 0;
            this.$id = nextUid();
            this.$$ChildScope = null;
          }
          ChildScope.prototype = parent;
          return ChildScope;
        }
        this.$get = ['$exceptionHandler', '$parse', '$browser', function($exceptionHandler, $parse, $browser) {
          function destroyChildScope($event) {
            $event.currentScope.$$destroyed = true;
          }
          function cleanUpScope($scope) {
            if (msie === 9) {
              $scope.$$childHead && cleanUpScope($scope.$$childHead);
              $scope.$$nextSibling && cleanUpScope($scope.$$nextSibling);
            }
            $scope.$parent = $scope.$$nextSibling = $scope.$$prevSibling = $scope.$$childHead = $scope.$$childTail = $scope.$root = $scope.$$watchers = null;
          }
          function Scope() {
            this.$id = nextUid();
            this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null;
            this.$root = this;
            this.$$destroyed = false;
            this.$$listeners = {};
            this.$$listenerCount = {};
            this.$$watchersCount = 0;
            this.$$isolateBindings = null;
          }
          Scope.prototype = {
            constructor: Scope,
            $new: function(isolate, parent) {
              var child;
              parent = parent || this;
              if (isolate) {
                child = new Scope();
                child.$root = this.$root;
              } else {
                if (!this.$$ChildScope) {
                  this.$$ChildScope = createChildScopeClass(this);
                }
                child = new this.$$ChildScope();
              }
              child.$parent = parent;
              child.$$prevSibling = parent.$$childTail;
              if (parent.$$childHead) {
                parent.$$childTail.$$nextSibling = child;
                parent.$$childTail = child;
              } else {
                parent.$$childHead = parent.$$childTail = child;
              }
              if (isolate || parent != this)
                child.$on('$destroy', destroyChildScope);
              return child;
            },
            $watch: function(watchExp, listener, objectEquality, prettyPrintExpression) {
              var get = $parse(watchExp);
              if (get.$$watchDelegate) {
                return get.$$watchDelegate(this, listener, objectEquality, get, watchExp);
              }
              var scope = this,
                  array = scope.$$watchers,
                  watcher = {
                    fn: listener,
                    last: initWatchVal,
                    get: get,
                    exp: prettyPrintExpression || watchExp,
                    eq: !!objectEquality
                  };
              lastDirtyWatch = null;
              if (!isFunction(listener)) {
                watcher.fn = noop;
              }
              if (!array) {
                array = scope.$$watchers = [];
              }
              array.unshift(watcher);
              incrementWatchersCount(this, 1);
              return function deregisterWatch() {
                if (arrayRemove(array, watcher) >= 0) {
                  incrementWatchersCount(scope, -1);
                }
                lastDirtyWatch = null;
              };
            },
            $watchGroup: function(watchExpressions, listener) {
              var oldValues = new Array(watchExpressions.length);
              var newValues = new Array(watchExpressions.length);
              var deregisterFns = [];
              var self = this;
              var changeReactionScheduled = false;
              var firstRun = true;
              if (!watchExpressions.length) {
                var shouldCall = true;
                self.$evalAsync(function() {
                  if (shouldCall)
                    listener(newValues, newValues, self);
                });
                return function deregisterWatchGroup() {
                  shouldCall = false;
                };
              }
              if (watchExpressions.length === 1) {
                return this.$watch(watchExpressions[0], function watchGroupAction(value, oldValue, scope) {
                  newValues[0] = value;
                  oldValues[0] = oldValue;
                  listener(newValues, (value === oldValue) ? newValues : oldValues, scope);
                });
              }
              forEach(watchExpressions, function(expr, i) {
                var unwatchFn = self.$watch(expr, function watchGroupSubAction(value, oldValue) {
                  newValues[i] = value;
                  oldValues[i] = oldValue;
                  if (!changeReactionScheduled) {
                    changeReactionScheduled = true;
                    self.$evalAsync(watchGroupAction);
                  }
                });
                deregisterFns.push(unwatchFn);
              });
              function watchGroupAction() {
                changeReactionScheduled = false;
                if (firstRun) {
                  firstRun = false;
                  listener(newValues, newValues, self);
                } else {
                  listener(newValues, oldValues, self);
                }
              }
              return function deregisterWatchGroup() {
                while (deregisterFns.length) {
                  deregisterFns.shift()();
                }
              };
            },
            $watchCollection: function(obj, listener) {
              $watchCollectionInterceptor.$stateful = true;
              var self = this;
              var newValue;
              var oldValue;
              var veryOldValue;
              var trackVeryOldValue = (listener.length > 1);
              var changeDetected = 0;
              var changeDetector = $parse(obj, $watchCollectionInterceptor);
              var internalArray = [];
              var internalObject = {};
              var initRun = true;
              var oldLength = 0;
              function $watchCollectionInterceptor(_value) {
                newValue = _value;
                var newLength,
                    key,
                    bothNaN,
                    newItem,
                    oldItem;
                if (isUndefined(newValue))
                  return;
                if (!isObject(newValue)) {
                  if (oldValue !== newValue) {
                    oldValue = newValue;
                    changeDetected++;
                  }
                } else if (isArrayLike(newValue)) {
                  if (oldValue !== internalArray) {
                    oldValue = internalArray;
                    oldLength = oldValue.length = 0;
                    changeDetected++;
                  }
                  newLength = newValue.length;
                  if (oldLength !== newLength) {
                    changeDetected++;
                    oldValue.length = oldLength = newLength;
                  }
                  for (var i = 0; i < newLength; i++) {
                    oldItem = oldValue[i];
                    newItem = newValue[i];
                    bothNaN = (oldItem !== oldItem) && (newItem !== newItem);
                    if (!bothNaN && (oldItem !== newItem)) {
                      changeDetected++;
                      oldValue[i] = newItem;
                    }
                  }
                } else {
                  if (oldValue !== internalObject) {
                    oldValue = internalObject = {};
                    oldLength = 0;
                    changeDetected++;
                  }
                  newLength = 0;
                  for (key in newValue) {
                    if (hasOwnProperty.call(newValue, key)) {
                      newLength++;
                      newItem = newValue[key];
                      oldItem = oldValue[key];
                      if (key in oldValue) {
                        bothNaN = (oldItem !== oldItem) && (newItem !== newItem);
                        if (!bothNaN && (oldItem !== newItem)) {
                          changeDetected++;
                          oldValue[key] = newItem;
                        }
                      } else {
                        oldLength++;
                        oldValue[key] = newItem;
                        changeDetected++;
                      }
                    }
                  }
                  if (oldLength > newLength) {
                    changeDetected++;
                    for (key in oldValue) {
                      if (!hasOwnProperty.call(newValue, key)) {
                        oldLength--;
                        delete oldValue[key];
                      }
                    }
                  }
                }
                return changeDetected;
              }
              function $watchCollectionAction() {
                if (initRun) {
                  initRun = false;
                  listener(newValue, newValue, self);
                } else {
                  listener(newValue, veryOldValue, self);
                }
                if (trackVeryOldValue) {
                  if (!isObject(newValue)) {
                    veryOldValue = newValue;
                  } else if (isArrayLike(newValue)) {
                    veryOldValue = new Array(newValue.length);
                    for (var i = 0; i < newValue.length; i++) {
                      veryOldValue[i] = newValue[i];
                    }
                  } else {
                    veryOldValue = {};
                    for (var key in newValue) {
                      if (hasOwnProperty.call(newValue, key)) {
                        veryOldValue[key] = newValue[key];
                      }
                    }
                  }
                }
              }
              return this.$watch(changeDetector, $watchCollectionAction);
            },
            $digest: function() {
              var watch,
                  value,
                  last,
                  fn,
                  get,
                  watchers,
                  length,
                  dirty,
                  ttl = TTL,
                  next,
                  current,
                  target = this,
                  watchLog = [],
                  logIdx,
                  asyncTask;
              beginPhase('$digest');
              $browser.$$checkUrlChange();
              if (this === $rootScope && applyAsyncId !== null) {
                $browser.defer.cancel(applyAsyncId);
                flushApplyAsync();
              }
              lastDirtyWatch = null;
              do {
                dirty = false;
                current = target;
                for (var asyncQueuePosition = 0; asyncQueuePosition < asyncQueue.length; asyncQueuePosition++) {
                  try {
                    asyncTask = asyncQueue[asyncQueuePosition];
                    asyncTask.scope.$eval(asyncTask.expression, asyncTask.locals);
                  } catch (e) {
                    $exceptionHandler(e);
                  }
                  lastDirtyWatch = null;
                }
                asyncQueue.length = 0;
                traverseScopesLoop: do {
                  if ((watchers = current.$$watchers)) {
                    length = watchers.length;
                    while (length--) {
                      try {
                        watch = watchers[length];
                        if (watch) {
                          get = watch.get;
                          if ((value = get(current)) !== (last = watch.last) && !(watch.eq ? equals(value, last) : (typeof value === 'number' && typeof last === 'number' && isNaN(value) && isNaN(last)))) {
                            dirty = true;
                            lastDirtyWatch = watch;
                            watch.last = watch.eq ? copy(value, null) : value;
                            fn = watch.fn;
                            fn(value, ((last === initWatchVal) ? value : last), current);
                            if (ttl < 5) {
                              logIdx = 4 - ttl;
                              if (!watchLog[logIdx])
                                watchLog[logIdx] = [];
                              watchLog[logIdx].push({
                                msg: isFunction(watch.exp) ? 'fn: ' + (watch.exp.name || watch.exp.toString()) : watch.exp,
                                newVal: value,
                                oldVal: last
                              });
                            }
                          } else if (watch === lastDirtyWatch) {
                            dirty = false;
                            break traverseScopesLoop;
                          }
                        }
                      } catch (e) {
                        $exceptionHandler(e);
                      }
                    }
                  }
                  if (!(next = ((current.$$watchersCount && current.$$childHead) || (current !== target && current.$$nextSibling)))) {
                    while (current !== target && !(next = current.$$nextSibling)) {
                      current = current.$parent;
                    }
                  }
                } while ((current = next));
                if ((dirty || asyncQueue.length) && !(ttl--)) {
                  clearPhase();
                  throw $rootScopeMinErr('infdig', '{0} $digest() iterations reached. Aborting!\n' + 'Watchers fired in the last 5 iterations: {1}', TTL, watchLog);
                }
              } while (dirty || asyncQueue.length);
              clearPhase();
              while (postDigestQueuePosition < postDigestQueue.length) {
                try {
                  postDigestQueue[postDigestQueuePosition++]();
                } catch (e) {
                  $exceptionHandler(e);
                }
              }
              postDigestQueue.length = postDigestQueuePosition = 0;
            },
            $destroy: function() {
              if (this.$$destroyed)
                return;
              var parent = this.$parent;
              this.$broadcast('$destroy');
              this.$$destroyed = true;
              if (this === $rootScope) {
                $browser.$$applicationDestroyed();
              }
              incrementWatchersCount(this, -this.$$watchersCount);
              for (var eventName in this.$$listenerCount) {
                decrementListenerCount(this, this.$$listenerCount[eventName], eventName);
              }
              if (parent && parent.$$childHead == this)
                parent.$$childHead = this.$$nextSibling;
              if (parent && parent.$$childTail == this)
                parent.$$childTail = this.$$prevSibling;
              if (this.$$prevSibling)
                this.$$prevSibling.$$nextSibling = this.$$nextSibling;
              if (this.$$nextSibling)
                this.$$nextSibling.$$prevSibling = this.$$prevSibling;
              this.$destroy = this.$digest = this.$apply = this.$evalAsync = this.$applyAsync = noop;
              this.$on = this.$watch = this.$watchGroup = function() {
                return noop;
              };
              this.$$listeners = {};
              this.$$nextSibling = null;
              cleanUpScope(this);
            },
            $eval: function(expr, locals) {
              return $parse(expr)(this, locals);
            },
            $evalAsync: function(expr, locals) {
              if (!$rootScope.$$phase && !asyncQueue.length) {
                $browser.defer(function() {
                  if (asyncQueue.length) {
                    $rootScope.$digest();
                  }
                });
              }
              asyncQueue.push({
                scope: this,
                expression: $parse(expr),
                locals: locals
              });
            },
            $$postDigest: function(fn) {
              postDigestQueue.push(fn);
            },
            $apply: function(expr) {
              try {
                beginPhase('$apply');
                try {
                  return this.$eval(expr);
                } finally {
                  clearPhase();
                }
              } catch (e) {
                $exceptionHandler(e);
              } finally {
                try {
                  $rootScope.$digest();
                } catch (e) {
                  $exceptionHandler(e);
                  throw e;
                }
              }
            },
            $applyAsync: function(expr) {
              var scope = this;
              expr && applyAsyncQueue.push($applyAsyncExpression);
              expr = $parse(expr);
              scheduleApplyAsync();
              function $applyAsyncExpression() {
                scope.$eval(expr);
              }
            },
            $on: function(name, listener) {
              var namedListeners = this.$$listeners[name];
              if (!namedListeners) {
                this.$$listeners[name] = namedListeners = [];
              }
              namedListeners.push(listener);
              var current = this;
              do {
                if (!current.$$listenerCount[name]) {
                  current.$$listenerCount[name] = 0;
                }
                current.$$listenerCount[name]++;
              } while ((current = current.$parent));
              var self = this;
              return function() {
                var indexOfListener = namedListeners.indexOf(listener);
                if (indexOfListener !== -1) {
                  namedListeners[indexOfListener] = null;
                  decrementListenerCount(self, 1, name);
                }
              };
            },
            $emit: function(name, args) {
              var empty = [],
                  namedListeners,
                  scope = this,
                  stopPropagation = false,
                  event = {
                    name: name,
                    targetScope: scope,
                    stopPropagation: function() {
                      stopPropagation = true;
                    },
                    preventDefault: function() {
                      event.defaultPrevented = true;
                    },
                    defaultPrevented: false
                  },
                  listenerArgs = concat([event], arguments, 1),
                  i,
                  length;
              do {
                namedListeners = scope.$$listeners[name] || empty;
                event.currentScope = scope;
                for (i = 0, length = namedListeners.length; i < length; i++) {
                  if (!namedListeners[i]) {
                    namedListeners.splice(i, 1);
                    i--;
                    length--;
                    continue;
                  }
                  try {
                    namedListeners[i].apply(null, listenerArgs);
                  } catch (e) {
                    $exceptionHandler(e);
                  }
                }
                if (stopPropagation) {
                  event.currentScope = null;
                  return event;
                }
                scope = scope.$parent;
              } while (scope);
              event.currentScope = null;
              return event;
            },
            $broadcast: function(name, args) {
              var target = this,
                  current = target,
                  next = target,
                  event = {
                    name: name,
                    targetScope: target,
                    preventDefault: function() {
                      event.defaultPrevented = true;
                    },
                    defaultPrevented: false
                  };
              if (!target.$$listenerCount[name])
                return event;
              var listenerArgs = concat([event], arguments, 1),
                  listeners,
                  i,
                  length;
              while ((current = next)) {
                event.currentScope = current;
                listeners = current.$$listeners[name] || [];
                for (i = 0, length = listeners.length; i < length; i++) {
                  if (!listeners[i]) {
                    listeners.splice(i, 1);
                    i--;
                    length--;
                    continue;
                  }
                  try {
                    listeners[i].apply(null, listenerArgs);
                  } catch (e) {
                    $exceptionHandler(e);
                  }
                }
                if (!(next = ((current.$$listenerCount[name] && current.$$childHead) || (current !== target && current.$$nextSibling)))) {
                  while (current !== target && !(next = current.$$nextSibling)) {
                    current = current.$parent;
                  }
                }
              }
              event.currentScope = null;
              return event;
            }
          };
          var $rootScope = new Scope();
          var asyncQueue = $rootScope.$$asyncQueue = [];
          var postDigestQueue = $rootScope.$$postDigestQueue = [];
          var applyAsyncQueue = $rootScope.$$applyAsyncQueue = [];
          var postDigestQueuePosition = 0;
          return $rootScope;
          function beginPhase(phase) {
            if ($rootScope.$$phase) {
              throw $rootScopeMinErr('inprog', '{0} already in progress', $rootScope.$$phase);
            }
            $rootScope.$$phase = phase;
          }
          function clearPhase() {
            $rootScope.$$phase = null;
          }
          function incrementWatchersCount(current, count) {
            do {
              current.$$watchersCount += count;
            } while ((current = current.$parent));
          }
          function decrementListenerCount(current, count, name) {
            do {
              current.$$listenerCount[name] -= count;
              if (current.$$listenerCount[name] === 0) {
                delete current.$$listenerCount[name];
              }
            } while ((current = current.$parent));
          }
          function initWatchVal() {}
          function flushApplyAsync() {
            while (applyAsyncQueue.length) {
              try {
                applyAsyncQueue.shift()();
              } catch (e) {
                $exceptionHandler(e);
              }
            }
            applyAsyncId = null;
          }
          function scheduleApplyAsync() {
            if (applyAsyncId === null) {
              applyAsyncId = $browser.defer(function() {
                $rootScope.$apply(flushApplyAsync);
              });
            }
          }
        }];
      }
      function $$SanitizeUriProvider() {
        var aHrefSanitizationWhitelist = /^\s*(https?|ftp|mailto|tel|file):/,
            imgSrcSanitizationWhitelist = /^\s*((https?|ftp|file|blob):|data:image\/)/;
        this.aHrefSanitizationWhitelist = function(regexp) {
          if (isDefined(regexp)) {
            aHrefSanitizationWhitelist = regexp;
            return this;
          }
          return aHrefSanitizationWhitelist;
        };
        this.imgSrcSanitizationWhitelist = function(regexp) {
          if (isDefined(regexp)) {
            imgSrcSanitizationWhitelist = regexp;
            return this;
          }
          return imgSrcSanitizationWhitelist;
        };
        this.$get = function() {
          return function sanitizeUri(uri, isImage) {
            var regex = isImage ? imgSrcSanitizationWhitelist : aHrefSanitizationWhitelist;
            var normalizedVal;
            normalizedVal = urlResolve(uri).href;
            if (normalizedVal !== '' && !normalizedVal.match(regex)) {
              return 'unsafe:' + normalizedVal;
            }
            return uri;
          };
        };
      }
      var $sceMinErr = minErr('$sce');
      var SCE_CONTEXTS = {
        HTML: 'html',
        CSS: 'css',
        URL: 'url',
        RESOURCE_URL: 'resourceUrl',
        JS: 'js'
      };
      function adjustMatcher(matcher) {
        if (matcher === 'self') {
          return matcher;
        } else if (isString(matcher)) {
          if (matcher.indexOf('***') > -1) {
            throw $sceMinErr('iwcard', 'Illegal sequence *** in string matcher.  String: {0}', matcher);
          }
          matcher = escapeForRegexp(matcher).replace('\\*\\*', '.*').replace('\\*', '[^:/.?&;]*');
          return new RegExp('^' + matcher + '$');
        } else if (isRegExp(matcher)) {
          return new RegExp('^' + matcher.source + '$');
        } else {
          throw $sceMinErr('imatcher', 'Matchers may only be "self", string patterns or RegExp objects');
        }
      }
      function adjustMatchers(matchers) {
        var adjustedMatchers = [];
        if (isDefined(matchers)) {
          forEach(matchers, function(matcher) {
            adjustedMatchers.push(adjustMatcher(matcher));
          });
        }
        return adjustedMatchers;
      }
      function $SceDelegateProvider() {
        this.SCE_CONTEXTS = SCE_CONTEXTS;
        var resourceUrlWhitelist = ['self'],
            resourceUrlBlacklist = [];
        this.resourceUrlWhitelist = function(value) {
          if (arguments.length) {
            resourceUrlWhitelist = adjustMatchers(value);
          }
          return resourceUrlWhitelist;
        };
        this.resourceUrlBlacklist = function(value) {
          if (arguments.length) {
            resourceUrlBlacklist = adjustMatchers(value);
          }
          return resourceUrlBlacklist;
        };
        this.$get = ['$injector', function($injector) {
          var htmlSanitizer = function htmlSanitizer(html) {
            throw $sceMinErr('unsafe', 'Attempting to use an unsafe value in a safe context.');
          };
          if ($injector.has('$sanitize')) {
            htmlSanitizer = $injector.get('$sanitize');
          }
          function matchUrl(matcher, parsedUrl) {
            if (matcher === 'self') {
              return urlIsSameOrigin(parsedUrl);
            } else {
              return !!matcher.exec(parsedUrl.href);
            }
          }
          function isResourceUrlAllowedByPolicy(url) {
            var parsedUrl = urlResolve(url.toString());
            var i,
                n,
                allowed = false;
            for (i = 0, n = resourceUrlWhitelist.length; i < n; i++) {
              if (matchUrl(resourceUrlWhitelist[i], parsedUrl)) {
                allowed = true;
                break;
              }
            }
            if (allowed) {
              for (i = 0, n = resourceUrlBlacklist.length; i < n; i++) {
                if (matchUrl(resourceUrlBlacklist[i], parsedUrl)) {
                  allowed = false;
                  break;
                }
              }
            }
            return allowed;
          }
          function generateHolderType(Base) {
            var holderType = function TrustedValueHolderType(trustedValue) {
              this.$$unwrapTrustedValue = function() {
                return trustedValue;
              };
            };
            if (Base) {
              holderType.prototype = new Base();
            }
            holderType.prototype.valueOf = function sceValueOf() {
              return this.$$unwrapTrustedValue();
            };
            holderType.prototype.toString = function sceToString() {
              return this.$$unwrapTrustedValue().toString();
            };
            return holderType;
          }
          var trustedValueHolderBase = generateHolderType(),
              byType = {};
          byType[SCE_CONTEXTS.HTML] = generateHolderType(trustedValueHolderBase);
          byType[SCE_CONTEXTS.CSS] = generateHolderType(trustedValueHolderBase);
          byType[SCE_CONTEXTS.URL] = generateHolderType(trustedValueHolderBase);
          byType[SCE_CONTEXTS.JS] = generateHolderType(trustedValueHolderBase);
          byType[SCE_CONTEXTS.RESOURCE_URL] = generateHolderType(byType[SCE_CONTEXTS.URL]);
          function trustAs(type, trustedValue) {
            var Constructor = (byType.hasOwnProperty(type) ? byType[type] : null);
            if (!Constructor) {
              throw $sceMinErr('icontext', 'Attempted to trust a value in invalid context. Context: {0}; Value: {1}', type, trustedValue);
            }
            if (trustedValue === null || isUndefined(trustedValue) || trustedValue === '') {
              return trustedValue;
            }
            if (typeof trustedValue !== 'string') {
              throw $sceMinErr('itype', 'Attempted to trust a non-string value in a content requiring a string: Context: {0}', type);
            }
            return new Constructor(trustedValue);
          }
          function valueOf(maybeTrusted) {
            if (maybeTrusted instanceof trustedValueHolderBase) {
              return maybeTrusted.$$unwrapTrustedValue();
            } else {
              return maybeTrusted;
            }
          }
          function getTrusted(type, maybeTrusted) {
            if (maybeTrusted === null || isUndefined(maybeTrusted) || maybeTrusted === '') {
              return maybeTrusted;
            }
            var constructor = (byType.hasOwnProperty(type) ? byType[type] : null);
            if (constructor && maybeTrusted instanceof constructor) {
              return maybeTrusted.$$unwrapTrustedValue();
            }
            if (type === SCE_CONTEXTS.RESOURCE_URL) {
              if (isResourceUrlAllowedByPolicy(maybeTrusted)) {
                return maybeTrusted;
              } else {
                throw $sceMinErr('insecurl', 'Blocked loading resource from url not allowed by $sceDelegate policy.  URL: {0}', maybeTrusted.toString());
              }
            } else if (type === SCE_CONTEXTS.HTML) {
              return htmlSanitizer(maybeTrusted);
            }
            throw $sceMinErr('unsafe', 'Attempting to use an unsafe value in a safe context.');
          }
          return {
            trustAs: trustAs,
            getTrusted: getTrusted,
            valueOf: valueOf
          };
        }];
      }
      function $SceProvider() {
        var enabled = true;
        this.enabled = function(value) {
          if (arguments.length) {
            enabled = !!value;
          }
          return enabled;
        };
        this.$get = ['$parse', '$sceDelegate', function($parse, $sceDelegate) {
          if (enabled && msie < 8) {
            throw $sceMinErr('iequirks', 'Strict Contextual Escaping does not support Internet Explorer version < 11 in quirks ' + 'mode.  You can fix this by adding the text <!doctype html> to the top of your HTML ' + 'document.  See http://docs.angularjs.org/api/ng.$sce for more information.');
          }
          var sce = shallowCopy(SCE_CONTEXTS);
          sce.isEnabled = function() {
            return enabled;
          };
          sce.trustAs = $sceDelegate.trustAs;
          sce.getTrusted = $sceDelegate.getTrusted;
          sce.valueOf = $sceDelegate.valueOf;
          if (!enabled) {
            sce.trustAs = sce.getTrusted = function(type, value) {
              return value;
            };
            sce.valueOf = identity;
          }
          sce.parseAs = function sceParseAs(type, expr) {
            var parsed = $parse(expr);
            if (parsed.literal && parsed.constant) {
              return parsed;
            } else {
              return $parse(expr, function(value) {
                return sce.getTrusted(type, value);
              });
            }
          };
          var parse = sce.parseAs,
              getTrusted = sce.getTrusted,
              trustAs = sce.trustAs;
          forEach(SCE_CONTEXTS, function(enumValue, name) {
            var lName = lowercase(name);
            sce[camelCase("parse_as_" + lName)] = function(expr) {
              return parse(enumValue, expr);
            };
            sce[camelCase("get_trusted_" + lName)] = function(value) {
              return getTrusted(enumValue, value);
            };
            sce[camelCase("trust_as_" + lName)] = function(value) {
              return trustAs(enumValue, value);
            };
          });
          return sce;
        }];
      }
      function $SnifferProvider() {
        this.$get = ['$window', '$document', function($window, $document) {
          var eventSupport = {},
              isChromePackagedApp = $window.chrome && $window.chrome.app && $window.chrome.app.runtime,
              hasHistoryPushState = !isChromePackagedApp && $window.history && $window.history.pushState,
              android = toInt((/android (\d+)/.exec(lowercase(($window.navigator || {}).userAgent)) || [])[1]),
              boxee = /Boxee/i.test(($window.navigator || {}).userAgent),
              document = $document[0] || {},
              vendorPrefix,
              vendorRegex = /^(Moz|webkit|ms)(?=[A-Z])/,
              bodyStyle = document.body && document.body.style,
              transitions = false,
              animations = false,
              match;
          if (bodyStyle) {
            for (var prop in bodyStyle) {
              if (match = vendorRegex.exec(prop)) {
                vendorPrefix = match[0];
                vendorPrefix = vendorPrefix[0].toUpperCase() + vendorPrefix.substr(1);
                break;
              }
            }
            if (!vendorPrefix) {
              vendorPrefix = ('WebkitOpacity' in bodyStyle) && 'webkit';
            }
            transitions = !!(('transition' in bodyStyle) || (vendorPrefix + 'Transition' in bodyStyle));
            animations = !!(('animation' in bodyStyle) || (vendorPrefix + 'Animation' in bodyStyle));
            if (android && (!transitions || !animations)) {
              transitions = isString(bodyStyle.webkitTransition);
              animations = isString(bodyStyle.webkitAnimation);
            }
          }
          return {
            history: !!(hasHistoryPushState && !(android < 4) && !boxee),
            hasEvent: function(event) {
              if (event === 'input' && msie <= 11)
                return false;
              if (isUndefined(eventSupport[event])) {
                var divElm = document.createElement('div');
                eventSupport[event] = 'on' + event in divElm;
              }
              return eventSupport[event];
            },
            csp: csp(),
            vendorPrefix: vendorPrefix,
            transitions: transitions,
            animations: animations,
            android: android
          };
        }];
      }
      var $templateRequestMinErr = minErr('$compile');
      function $TemplateRequestProvider() {
        var httpOptions;
        this.httpOptions = function(val) {
          if (val) {
            httpOptions = val;
            return this;
          }
          return httpOptions;
        };
        this.$get = ['$templateCache', '$http', '$q', '$sce', function($templateCache, $http, $q, $sce) {
          function handleRequestFn(tpl, ignoreRequestError) {
            handleRequestFn.totalPendingRequests++;
            if (!isString(tpl) || isUndefined($templateCache.get(tpl))) {
              tpl = $sce.getTrustedResourceUrl(tpl);
            }
            var transformResponse = $http.defaults && $http.defaults.transformResponse;
            if (isArray(transformResponse)) {
              transformResponse = transformResponse.filter(function(transformer) {
                return transformer !== defaultHttpResponseTransform;
              });
            } else if (transformResponse === defaultHttpResponseTransform) {
              transformResponse = null;
            }
            return $http.get(tpl, extend({
              cache: $templateCache,
              transformResponse: transformResponse
            }, httpOptions))['finally'](function() {
              handleRequestFn.totalPendingRequests--;
            }).then(function(response) {
              $templateCache.put(tpl, response.data);
              return response.data;
            }, handleError);
            function handleError(resp) {
              if (!ignoreRequestError) {
                throw $templateRequestMinErr('tpload', 'Failed to load template: {0} (HTTP status: {1} {2})', tpl, resp.status, resp.statusText);
              }
              return $q.reject(resp);
            }
          }
          handleRequestFn.totalPendingRequests = 0;
          return handleRequestFn;
        }];
      }
      function $$TestabilityProvider() {
        this.$get = ['$rootScope', '$browser', '$location', function($rootScope, $browser, $location) {
          var testability = {};
          testability.findBindings = function(element, expression, opt_exactMatch) {
            var bindings = element.getElementsByClassName('ng-binding');
            var matches = [];
            forEach(bindings, function(binding) {
              var dataBinding = angular.element(binding).data('$binding');
              if (dataBinding) {
                forEach(dataBinding, function(bindingName) {
                  if (opt_exactMatch) {
                    var matcher = new RegExp('(^|\\s)' + escapeForRegexp(expression) + '(\\s|\\||$)');
                    if (matcher.test(bindingName)) {
                      matches.push(binding);
                    }
                  } else {
                    if (bindingName.indexOf(expression) != -1) {
                      matches.push(binding);
                    }
                  }
                });
              }
            });
            return matches;
          };
          testability.findModels = function(element, expression, opt_exactMatch) {
            var prefixes = ['ng-', 'data-ng-', 'ng\\:'];
            for (var p = 0; p < prefixes.length; ++p) {
              var attributeEquals = opt_exactMatch ? '=' : '*=';
              var selector = '[' + prefixes[p] + 'model' + attributeEquals + '"' + expression + '"]';
              var elements = element.querySelectorAll(selector);
              if (elements.length) {
                return elements;
              }
            }
          };
          testability.getLocation = function() {
            return $location.url();
          };
          testability.setLocation = function(url) {
            if (url !== $location.url()) {
              $location.url(url);
              $rootScope.$digest();
            }
          };
          testability.whenStable = function(callback) {
            $browser.notifyWhenNoOutstandingRequests(callback);
          };
          return testability;
        }];
      }
      function $TimeoutProvider() {
        this.$get = ['$rootScope', '$browser', '$q', '$$q', '$exceptionHandler', function($rootScope, $browser, $q, $$q, $exceptionHandler) {
          var deferreds = {};
          function timeout(fn, delay, invokeApply) {
            if (!isFunction(fn)) {
              invokeApply = delay;
              delay = fn;
              fn = noop;
            }
            var args = sliceArgs(arguments, 3),
                skipApply = (isDefined(invokeApply) && !invokeApply),
                deferred = (skipApply ? $$q : $q).defer(),
                promise = deferred.promise,
                timeoutId;
            timeoutId = $browser.defer(function() {
              try {
                deferred.resolve(fn.apply(null, args));
              } catch (e) {
                deferred.reject(e);
                $exceptionHandler(e);
              } finally {
                delete deferreds[promise.$$timeoutId];
              }
              if (!skipApply)
                $rootScope.$apply();
            }, delay);
            promise.$$timeoutId = timeoutId;
            deferreds[timeoutId] = deferred;
            return promise;
          }
          timeout.cancel = function(promise) {
            if (promise && promise.$$timeoutId in deferreds) {
              deferreds[promise.$$timeoutId].reject('canceled');
              delete deferreds[promise.$$timeoutId];
              return $browser.defer.cancel(promise.$$timeoutId);
            }
            return false;
          };
          return timeout;
        }];
      }
      var urlParsingNode = window.document.createElement("a");
      var originUrl = urlResolve(window.location.href);
      function urlResolve(url) {
        var href = url;
        if (msie) {
          urlParsingNode.setAttribute("href", href);
          href = urlParsingNode.href;
        }
        urlParsingNode.setAttribute('href', href);
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ? urlParsingNode.pathname : '/' + urlParsingNode.pathname
        };
      }
      function urlIsSameOrigin(requestUrl) {
        var parsed = (isString(requestUrl)) ? urlResolve(requestUrl) : requestUrl;
        return (parsed.protocol === originUrl.protocol && parsed.host === originUrl.host);
      }
      function $WindowProvider() {
        this.$get = valueFn(window);
      }
      function $$CookieReader($document) {
        var rawDocument = $document[0] || {};
        var lastCookies = {};
        var lastCookieString = '';
        function safeDecodeURIComponent(str) {
          try {
            return decodeURIComponent(str);
          } catch (e) {
            return str;
          }
        }
        return function() {
          var cookieArray,
              cookie,
              i,
              index,
              name;
          var currentCookieString = rawDocument.cookie || '';
          if (currentCookieString !== lastCookieString) {
            lastCookieString = currentCookieString;
            cookieArray = lastCookieString.split('; ');
            lastCookies = {};
            for (i = 0; i < cookieArray.length; i++) {
              cookie = cookieArray[i];
              index = cookie.indexOf('=');
              if (index > 0) {
                name = safeDecodeURIComponent(cookie.substring(0, index));
                if (isUndefined(lastCookies[name])) {
                  lastCookies[name] = safeDecodeURIComponent(cookie.substring(index + 1));
                }
              }
            }
          }
          return lastCookies;
        };
      }
      $$CookieReader.$inject = ['$document'];
      function $$CookieReaderProvider() {
        this.$get = $$CookieReader;
      }
      $FilterProvider.$inject = ['$provide'];
      function $FilterProvider($provide) {
        var suffix = 'Filter';
        function register(name, factory) {
          if (isObject(name)) {
            var filters = {};
            forEach(name, function(filter, key) {
              filters[key] = register(key, filter);
            });
            return filters;
          } else {
            return $provide.factory(name + suffix, factory);
          }
        }
        this.register = register;
        this.$get = ['$injector', function($injector) {
          return function(name) {
            return $injector.get(name + suffix);
          };
        }];
        register('currency', currencyFilter);
        register('date', dateFilter);
        register('filter', filterFilter);
        register('json', jsonFilter);
        register('limitTo', limitToFilter);
        register('lowercase', lowercaseFilter);
        register('number', numberFilter);
        register('orderBy', orderByFilter);
        register('uppercase', uppercaseFilter);
      }
      function filterFilter() {
        return function(array, expression, comparator) {
          if (!isArrayLike(array)) {
            if (array == null) {
              return array;
            } else {
              throw minErr('filter')('notarray', 'Expected array but received: {0}', array);
            }
          }
          var expressionType = getTypeForFilter(expression);
          var predicateFn;
          var matchAgainstAnyProp;
          switch (expressionType) {
            case 'function':
              predicateFn = expression;
              break;
            case 'boolean':
            case 'null':
            case 'number':
            case 'string':
              matchAgainstAnyProp = true;
            case 'object':
              predicateFn = createPredicateFn(expression, comparator, matchAgainstAnyProp);
              break;
            default:
              return array;
          }
          return Array.prototype.filter.call(array, predicateFn);
        };
      }
      function createPredicateFn(expression, comparator, matchAgainstAnyProp) {
        var shouldMatchPrimitives = isObject(expression) && ('$' in expression);
        var predicateFn;
        if (comparator === true) {
          comparator = equals;
        } else if (!isFunction(comparator)) {
          comparator = function(actual, expected) {
            if (isUndefined(actual)) {
              return false;
            }
            if ((actual === null) || (expected === null)) {
              return actual === expected;
            }
            if (isObject(expected) || (isObject(actual) && !hasCustomToString(actual))) {
              return false;
            }
            actual = lowercase('' + actual);
            expected = lowercase('' + expected);
            return actual.indexOf(expected) !== -1;
          };
        }
        predicateFn = function(item) {
          if (shouldMatchPrimitives && !isObject(item)) {
            return deepCompare(item, expression.$, comparator, false);
          }
          return deepCompare(item, expression, comparator, matchAgainstAnyProp);
        };
        return predicateFn;
      }
      function deepCompare(actual, expected, comparator, matchAgainstAnyProp, dontMatchWholeObject) {
        var actualType = getTypeForFilter(actual);
        var expectedType = getTypeForFilter(expected);
        if ((expectedType === 'string') && (expected.charAt(0) === '!')) {
          return !deepCompare(actual, expected.substring(1), comparator, matchAgainstAnyProp);
        } else if (isArray(actual)) {
          return actual.some(function(item) {
            return deepCompare(item, expected, comparator, matchAgainstAnyProp);
          });
        }
        switch (actualType) {
          case 'object':
            var key;
            if (matchAgainstAnyProp) {
              for (key in actual) {
                if ((key.charAt(0) !== '$') && deepCompare(actual[key], expected, comparator, true)) {
                  return true;
                }
              }
              return dontMatchWholeObject ? false : deepCompare(actual, expected, comparator, false);
            } else if (expectedType === 'object') {
              for (key in expected) {
                var expectedVal = expected[key];
                if (isFunction(expectedVal) || isUndefined(expectedVal)) {
                  continue;
                }
                var matchAnyProperty = key === '$';
                var actualVal = matchAnyProperty ? actual : actual[key];
                if (!deepCompare(actualVal, expectedVal, comparator, matchAnyProperty, matchAnyProperty)) {
                  return false;
                }
              }
              return true;
            } else {
              return comparator(actual, expected);
            }
            break;
          case 'function':
            return false;
          default:
            return comparator(actual, expected);
        }
      }
      function getTypeForFilter(val) {
        return (val === null) ? 'null' : typeof val;
      }
      var MAX_DIGITS = 22;
      var DECIMAL_SEP = '.';
      var ZERO_CHAR = '0';
      currencyFilter.$inject = ['$locale'];
      function currencyFilter($locale) {
        var formats = $locale.NUMBER_FORMATS;
        return function(amount, currencySymbol, fractionSize) {
          if (isUndefined(currencySymbol)) {
            currencySymbol = formats.CURRENCY_SYM;
          }
          if (isUndefined(fractionSize)) {
            fractionSize = formats.PATTERNS[1].maxFrac;
          }
          return (amount == null) ? amount : formatNumber(amount, formats.PATTERNS[1], formats.GROUP_SEP, formats.DECIMAL_SEP, fractionSize).replace(/\u00A4/g, currencySymbol);
        };
      }
      numberFilter.$inject = ['$locale'];
      function numberFilter($locale) {
        var formats = $locale.NUMBER_FORMATS;
        return function(number, fractionSize) {
          return (number == null) ? number : formatNumber(number, formats.PATTERNS[0], formats.GROUP_SEP, formats.DECIMAL_SEP, fractionSize);
        };
      }
      function parse(numStr) {
        var exponent = 0,
            digits,
            numberOfIntegerDigits;
        var i,
            j,
            zeros;
        if ((numberOfIntegerDigits = numStr.indexOf(DECIMAL_SEP)) > -1) {
          numStr = numStr.replace(DECIMAL_SEP, '');
        }
        if ((i = numStr.search(/e/i)) > 0) {
          if (numberOfIntegerDigits < 0)
            numberOfIntegerDigits = i;
          numberOfIntegerDigits += +numStr.slice(i + 1);
          numStr = numStr.substring(0, i);
        } else if (numberOfIntegerDigits < 0) {
          numberOfIntegerDigits = numStr.length;
        }
        for (i = 0; numStr.charAt(i) == ZERO_CHAR; i++) {}
        if (i == (zeros = numStr.length)) {
          digits = [0];
          numberOfIntegerDigits = 1;
        } else {
          zeros--;
          while (numStr.charAt(zeros) == ZERO_CHAR)
            zeros--;
          numberOfIntegerDigits -= i;
          digits = [];
          for (j = 0; i <= zeros; i++, j++) {
            digits[j] = +numStr.charAt(i);
          }
        }
        if (numberOfIntegerDigits > MAX_DIGITS) {
          digits = digits.splice(0, MAX_DIGITS - 1);
          exponent = numberOfIntegerDigits - 1;
          numberOfIntegerDigits = 1;
        }
        return {
          d: digits,
          e: exponent,
          i: numberOfIntegerDigits
        };
      }
      function roundNumber(parsedNumber, fractionSize, minFrac, maxFrac) {
        var digits = parsedNumber.d;
        var fractionLen = digits.length - parsedNumber.i;
        fractionSize = (isUndefined(fractionSize)) ? Math.min(Math.max(minFrac, fractionLen), maxFrac) : +fractionSize;
        var roundAt = fractionSize + parsedNumber.i;
        var digit = digits[roundAt];
        if (roundAt > 0) {
          digits.splice(Math.max(parsedNumber.i, roundAt));
          for (var j = roundAt; j < digits.length; j++) {
            digits[j] = 0;
          }
        } else {
          fractionLen = Math.max(0, fractionLen);
          parsedNumber.i = 1;
          digits.length = Math.max(1, roundAt = fractionSize + 1);
          digits[0] = 0;
          for (var i = 1; i < roundAt; i++)
            digits[i] = 0;
        }
        if (digit >= 5) {
          if (roundAt - 1 < 0) {
            for (var k = 0; k > roundAt; k--) {
              digits.unshift(0);
              parsedNumber.i++;
            }
            digits.unshift(1);
            parsedNumber.i++;
          } else {
            digits[roundAt - 1]++;
          }
        }
        for (; fractionLen < Math.max(0, fractionSize); fractionLen++)
          digits.push(0);
        var carry = digits.reduceRight(function(carry, d, i, digits) {
          d = d + carry;
          digits[i] = d % 10;
          return Math.floor(d / 10);
        }, 0);
        if (carry) {
          digits.unshift(carry);
          parsedNumber.i++;
        }
      }
      function formatNumber(number, pattern, groupSep, decimalSep, fractionSize) {
        if (!(isString(number) || isNumber(number)) || isNaN(number))
          return '';
        var isInfinity = !isFinite(number);
        var isZero = false;
        var numStr = Math.abs(number) + '',
            formattedText = '',
            parsedNumber;
        if (isInfinity) {
          formattedText = '\u221e';
        } else {
          parsedNumber = parse(numStr);
          roundNumber(parsedNumber, fractionSize, pattern.minFrac, pattern.maxFrac);
          var digits = parsedNumber.d;
          var integerLen = parsedNumber.i;
          var exponent = parsedNumber.e;
          var decimals = [];
          isZero = digits.reduce(function(isZero, d) {
            return isZero && !d;
          }, true);
          while (integerLen < 0) {
            digits.unshift(0);
            integerLen++;
          }
          if (integerLen > 0) {
            decimals = digits.splice(integerLen, digits.length);
          } else {
            decimals = digits;
            digits = [0];
          }
          var groups = [];
          if (digits.length >= pattern.lgSize) {
            groups.unshift(digits.splice(-pattern.lgSize, digits.length).join(''));
          }
          while (digits.length > pattern.gSize) {
            groups.unshift(digits.splice(-pattern.gSize, digits.length).join(''));
          }
          if (digits.length) {
            groups.unshift(digits.join(''));
          }
          formattedText = groups.join(groupSep);
          if (decimals.length) {
            formattedText += decimalSep + decimals.join('');
          }
          if (exponent) {
            formattedText += 'e+' + exponent;
          }
        }
        if (number < 0 && !isZero) {
          return pattern.negPre + formattedText + pattern.negSuf;
        } else {
          return pattern.posPre + formattedText + pattern.posSuf;
        }
      }
      function padNumber(num, digits, trim, negWrap) {
        var neg = '';
        if (num < 0 || (negWrap && num <= 0)) {
          if (negWrap) {
            num = -num + 1;
          } else {
            num = -num;
            neg = '-';
          }
        }
        num = '' + num;
        while (num.length < digits)
          num = ZERO_CHAR + num;
        if (trim) {
          num = num.substr(num.length - digits);
        }
        return neg + num;
      }
      function dateGetter(name, size, offset, trim, negWrap) {
        offset = offset || 0;
        return function(date) {
          var value = date['get' + name]();
          if (offset > 0 || value > -offset) {
            value += offset;
          }
          if (value === 0 && offset == -12)
            value = 12;
          return padNumber(value, size, trim, negWrap);
        };
      }
      function dateStrGetter(name, shortForm, standAlone) {
        return function(date, formats) {
          var value = date['get' + name]();
          var propPrefix = (standAlone ? 'STANDALONE' : '') + (shortForm ? 'SHORT' : '');
          var get = uppercase(propPrefix + name);
          return formats[get][value];
        };
      }
      function timeZoneGetter(date, formats, offset) {
        var zone = -1 * offset;
        var paddedZone = (zone >= 0) ? "+" : "";
        paddedZone += padNumber(Math[zone > 0 ? 'floor' : 'ceil'](zone / 60), 2) + padNumber(Math.abs(zone % 60), 2);
        return paddedZone;
      }
      function getFirstThursdayOfYear(year) {
        var dayOfWeekOnFirst = (new Date(year, 0, 1)).getDay();
        return new Date(year, 0, ((dayOfWeekOnFirst <= 4) ? 5 : 12) - dayOfWeekOnFirst);
      }
      function getThursdayThisWeek(datetime) {
        return new Date(datetime.getFullYear(), datetime.getMonth(), datetime.getDate() + (4 - datetime.getDay()));
      }
      function weekGetter(size) {
        return function(date) {
          var firstThurs = getFirstThursdayOfYear(date.getFullYear()),
              thisThurs = getThursdayThisWeek(date);
          var diff = +thisThurs - +firstThurs,
              result = 1 + Math.round(diff / 6.048e8);
          return padNumber(result, size);
        };
      }
      function ampmGetter(date, formats) {
        return date.getHours() < 12 ? formats.AMPMS[0] : formats.AMPMS[1];
      }
      function eraGetter(date, formats) {
        return date.getFullYear() <= 0 ? formats.ERAS[0] : formats.ERAS[1];
      }
      function longEraGetter(date, formats) {
        return date.getFullYear() <= 0 ? formats.ERANAMES[0] : formats.ERANAMES[1];
      }
      var DATE_FORMATS = {
        yyyy: dateGetter('FullYear', 4, 0, false, true),
        yy: dateGetter('FullYear', 2, 0, true, true),
        y: dateGetter('FullYear', 1, 0, false, true),
        MMMM: dateStrGetter('Month'),
        MMM: dateStrGetter('Month', true),
        MM: dateGetter('Month', 2, 1),
        M: dateGetter('Month', 1, 1),
        LLLL: dateStrGetter('Month', false, true),
        dd: dateGetter('Date', 2),
        d: dateGetter('Date', 1),
        HH: dateGetter('Hours', 2),
        H: dateGetter('Hours', 1),
        hh: dateGetter('Hours', 2, -12),
        h: dateGetter('Hours', 1, -12),
        mm: dateGetter('Minutes', 2),
        m: dateGetter('Minutes', 1),
        ss: dateGetter('Seconds', 2),
        s: dateGetter('Seconds', 1),
        sss: dateGetter('Milliseconds', 3),
        EEEE: dateStrGetter('Day'),
        EEE: dateStrGetter('Day', true),
        a: ampmGetter,
        Z: timeZoneGetter,
        ww: weekGetter(2),
        w: weekGetter(1),
        G: eraGetter,
        GG: eraGetter,
        GGG: eraGetter,
        GGGG: longEraGetter
      };
      var DATE_FORMATS_SPLIT = /((?:[^yMLdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,
          NUMBER_STRING = /^\-?\d+$/;
      dateFilter.$inject = ['$locale'];
      function dateFilter($locale) {
        var R_ISO8601_STR = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
        function jsonStringToDate(string) {
          var match;
          if (match = string.match(R_ISO8601_STR)) {
            var date = new Date(0),
                tzHour = 0,
                tzMin = 0,
                dateSetter = match[8] ? date.setUTCFullYear : date.setFullYear,
                timeSetter = match[8] ? date.setUTCHours : date.setHours;
            if (match[9]) {
              tzHour = toInt(match[9] + match[10]);
              tzMin = toInt(match[9] + match[11]);
            }
            dateSetter.call(date, toInt(match[1]), toInt(match[2]) - 1, toInt(match[3]));
            var h = toInt(match[4] || 0) - tzHour;
            var m = toInt(match[5] || 0) - tzMin;
            var s = toInt(match[6] || 0);
            var ms = Math.round(parseFloat('0.' + (match[7] || 0)) * 1000);
            timeSetter.call(date, h, m, s, ms);
            return date;
          }
          return string;
        }
        return function(date, format, timezone) {
          var text = '',
              parts = [],
              fn,
              match;
          format = format || 'mediumDate';
          format = $locale.DATETIME_FORMATS[format] || format;
          if (isString(date)) {
            date = NUMBER_STRING.test(date) ? toInt(date) : jsonStringToDate(date);
          }
          if (isNumber(date)) {
            date = new Date(date);
          }
          if (!isDate(date) || !isFinite(date.getTime())) {
            return date;
          }
          while (format) {
            match = DATE_FORMATS_SPLIT.exec(format);
            if (match) {
              parts = concat(parts, match, 1);
              format = parts.pop();
            } else {
              parts.push(format);
              format = null;
            }
          }
          var dateTimezoneOffset = date.getTimezoneOffset();
          if (timezone) {
            dateTimezoneOffset = timezoneToOffset(timezone, dateTimezoneOffset);
            date = convertTimezoneToLocal(date, timezone, true);
          }
          forEach(parts, function(value) {
            fn = DATE_FORMATS[value];
            text += fn ? fn(date, $locale.DATETIME_FORMATS, dateTimezoneOffset) : value === "''" ? "'" : value.replace(/(^'|'$)/g, '').replace(/''/g, "'");
          });
          return text;
        };
      }
      function jsonFilter() {
        return function(object, spacing) {
          if (isUndefined(spacing)) {
            spacing = 2;
          }
          return toJson(object, spacing);
        };
      }
      var lowercaseFilter = valueFn(lowercase);
      var uppercaseFilter = valueFn(uppercase);
      function limitToFilter() {
        return function(input, limit, begin) {
          if (Math.abs(Number(limit)) === Infinity) {
            limit = Number(limit);
          } else {
            limit = toInt(limit);
          }
          if (isNaN(limit))
            return input;
          if (isNumber(input))
            input = input.toString();
          if (!isArrayLike(input))
            return input;
          begin = (!begin || isNaN(begin)) ? 0 : toInt(begin);
          begin = (begin < 0) ? Math.max(0, input.length + begin) : begin;
          if (limit >= 0) {
            return sliceFn(input, begin, begin + limit);
          } else {
            if (begin === 0) {
              return sliceFn(input, limit, input.length);
            } else {
              return sliceFn(input, Math.max(0, begin + limit), begin);
            }
          }
        };
      }
      function sliceFn(input, begin, end) {
        if (isString(input))
          return input.slice(begin, end);
        return slice.call(input, begin, end);
      }
      orderByFilter.$inject = ['$parse'];
      function orderByFilter($parse) {
        return function(array, sortPredicate, reverseOrder, compareFn) {
          if (array == null)
            return array;
          if (!isArrayLike(array)) {
            throw minErr('orderBy')('notarray', 'Expected array but received: {0}', array);
          }
          if (!isArray(sortPredicate)) {
            sortPredicate = [sortPredicate];
          }
          if (sortPredicate.length === 0) {
            sortPredicate = ['+'];
          }
          var predicates = processPredicates(sortPredicate);
          var descending = reverseOrder ? -1 : 1;
          var compare = isFunction(compareFn) ? compareFn : defaultCompare;
          var compareValues = Array.prototype.map.call(array, getComparisonObject);
          compareValues.sort(doComparison);
          array = compareValues.map(function(item) {
            return item.value;
          });
          return array;
          function getComparisonObject(value, index) {
            return {
              value: value,
              tieBreaker: {
                value: index,
                type: 'number',
                index: index
              },
              predicateValues: predicates.map(function(predicate) {
                return getPredicateValue(predicate.get(value), index);
              })
            };
          }
          function doComparison(v1, v2) {
            for (var i = 0,
                ii = predicates.length; i < ii; i++) {
              var result = compare(v1.predicateValues[i], v2.predicateValues[i]);
              if (result) {
                return result * predicates[i].descending * descending;
              }
            }
            return compare(v1.tieBreaker, v2.tieBreaker) * descending;
          }
        };
        function processPredicates(sortPredicates) {
          return sortPredicates.map(function(predicate) {
            var descending = 1,
                get = identity;
            if (isFunction(predicate)) {
              get = predicate;
            } else if (isString(predicate)) {
              if ((predicate.charAt(0) == '+' || predicate.charAt(0) == '-')) {
                descending = predicate.charAt(0) == '-' ? -1 : 1;
                predicate = predicate.substring(1);
              }
              if (predicate !== '') {
                get = $parse(predicate);
                if (get.constant) {
                  var key = get();
                  get = function(value) {
                    return value[key];
                  };
                }
              }
            }
            return {
              get: get,
              descending: descending
            };
          });
        }
        function isPrimitive(value) {
          switch (typeof value) {
            case 'number':
            case 'boolean':
            case 'string':
              return true;
            default:
              return false;
          }
        }
        function objectValue(value) {
          if (isFunction(value.valueOf)) {
            value = value.valueOf();
            if (isPrimitive(value))
              return value;
          }
          if (hasCustomToString(value)) {
            value = value.toString();
            if (isPrimitive(value))
              return value;
          }
          return value;
        }
        function getPredicateValue(value, index) {
          var type = typeof value;
          if (value === null) {
            type = 'string';
            value = 'null';
          } else if (type === 'object') {
            value = objectValue(value);
          }
          return {
            value: value,
            type: type,
            index: index
          };
        }
        function defaultCompare(v1, v2) {
          var result = 0;
          var type1 = v1.type;
          var type2 = v2.type;
          if (type1 === type2) {
            var value1 = v1.value;
            var value2 = v2.value;
            if (type1 === 'string') {
              value1 = value1.toLowerCase();
              value2 = value2.toLowerCase();
            } else if (type1 === 'object') {
              if (isObject(value1))
                value1 = v1.index;
              if (isObject(value2))
                value2 = v2.index;
            }
            if (value1 !== value2) {
              result = value1 < value2 ? -1 : 1;
            }
          } else {
            result = type1 < type2 ? -1 : 1;
          }
          return result;
        }
      }
      function ngDirective(directive) {
        if (isFunction(directive)) {
          directive = {link: directive};
        }
        directive.restrict = directive.restrict || 'AC';
        return valueFn(directive);
      }
      var htmlAnchorDirective = valueFn({
        restrict: 'E',
        compile: function(element, attr) {
          if (!attr.href && !attr.xlinkHref) {
            return function(scope, element) {
              if (element[0].nodeName.toLowerCase() !== 'a')
                return;
              var href = toString.call(element.prop('href')) === '[object SVGAnimatedString]' ? 'xlink:href' : 'href';
              element.on('click', function(event) {
                if (!element.attr(href)) {
                  event.preventDefault();
                }
              });
            };
          }
        }
      });
      var ngAttributeAliasDirectives = {};
      forEach(BOOLEAN_ATTR, function(propName, attrName) {
        if (propName == "multiple")
          return;
        function defaultLinkFn(scope, element, attr) {
          scope.$watch(attr[normalized], function ngBooleanAttrWatchAction(value) {
            attr.$set(attrName, !!value);
          });
        }
        var normalized = directiveNormalize('ng-' + attrName);
        var linkFn = defaultLinkFn;
        if (propName === 'checked') {
          linkFn = function(scope, element, attr) {
            if (attr.ngModel !== attr[normalized]) {
              defaultLinkFn(scope, element, attr);
            }
          };
        }
        ngAttributeAliasDirectives[normalized] = function() {
          return {
            restrict: 'A',
            priority: 100,
            link: linkFn
          };
        };
      });
      forEach(ALIASED_ATTR, function(htmlAttr, ngAttr) {
        ngAttributeAliasDirectives[ngAttr] = function() {
          return {
            priority: 100,
            link: function(scope, element, attr) {
              if (ngAttr === "ngPattern" && attr.ngPattern.charAt(0) == "/") {
                var match = attr.ngPattern.match(REGEX_STRING_REGEXP);
                if (match) {
                  attr.$set("ngPattern", new RegExp(match[1], match[2]));
                  return;
                }
              }
              scope.$watch(attr[ngAttr], function ngAttrAliasWatchAction(value) {
                attr.$set(ngAttr, value);
              });
            }
          };
        };
      });
      forEach(['src', 'srcset', 'href'], function(attrName) {
        var normalized = directiveNormalize('ng-' + attrName);
        ngAttributeAliasDirectives[normalized] = function() {
          return {
            priority: 99,
            link: function(scope, element, attr) {
              var propName = attrName,
                  name = attrName;
              if (attrName === 'href' && toString.call(element.prop('href')) === '[object SVGAnimatedString]') {
                name = 'xlinkHref';
                attr.$attr[name] = 'xlink:href';
                propName = null;
              }
              attr.$observe(normalized, function(value) {
                if (!value) {
                  if (attrName === 'href') {
                    attr.$set(name, null);
                  }
                  return;
                }
                attr.$set(name, value);
                if (msie && propName)
                  element.prop(propName, attr[name]);
              });
            }
          };
        };
      });
      var nullFormCtrl = {
        $addControl: noop,
        $$renameControl: nullFormRenameControl,
        $removeControl: noop,
        $setValidity: noop,
        $setDirty: noop,
        $setPristine: noop,
        $setSubmitted: noop
      },
          SUBMITTED_CLASS = 'ng-submitted';
      function nullFormRenameControl(control, name) {
        control.$name = name;
      }
      FormController.$inject = ['$element', '$attrs', '$scope', '$animate', '$interpolate'];
      function FormController(element, attrs, $scope, $animate, $interpolate) {
        var form = this,
            controls = [];
        form.$error = {};
        form.$$success = {};
        form.$pending = undefined;
        form.$name = $interpolate(attrs.name || attrs.ngForm || '')($scope);
        form.$dirty = false;
        form.$pristine = true;
        form.$valid = true;
        form.$invalid = false;
        form.$submitted = false;
        form.$$parentForm = nullFormCtrl;
        form.$rollbackViewValue = function() {
          forEach(controls, function(control) {
            control.$rollbackViewValue();
          });
        };
        form.$commitViewValue = function() {
          forEach(controls, function(control) {
            control.$commitViewValue();
          });
        };
        form.$addControl = function(control) {
          assertNotHasOwnProperty(control.$name, 'input');
          controls.push(control);
          if (control.$name) {
            form[control.$name] = control;
          }
          control.$$parentForm = form;
        };
        form.$$renameControl = function(control, newName) {
          var oldName = control.$name;
          if (form[oldName] === control) {
            delete form[oldName];
          }
          form[newName] = control;
          control.$name = newName;
        };
        form.$removeControl = function(control) {
          if (control.$name && form[control.$name] === control) {
            delete form[control.$name];
          }
          forEach(form.$pending, function(value, name) {
            form.$setValidity(name, null, control);
          });
          forEach(form.$error, function(value, name) {
            form.$setValidity(name, null, control);
          });
          forEach(form.$$success, function(value, name) {
            form.$setValidity(name, null, control);
          });
          arrayRemove(controls, control);
          control.$$parentForm = nullFormCtrl;
        };
        addSetValidityMethod({
          ctrl: this,
          $element: element,
          set: function(object, property, controller) {
            var list = object[property];
            if (!list) {
              object[property] = [controller];
            } else {
              var index = list.indexOf(controller);
              if (index === -1) {
                list.push(controller);
              }
            }
          },
          unset: function(object, property, controller) {
            var list = object[property];
            if (!list) {
              return;
            }
            arrayRemove(list, controller);
            if (list.length === 0) {
              delete object[property];
            }
          },
          $animate: $animate
        });
        form.$setDirty = function() {
          $animate.removeClass(element, PRISTINE_CLASS);
          $animate.addClass(element, DIRTY_CLASS);
          form.$dirty = true;
          form.$pristine = false;
          form.$$parentForm.$setDirty();
        };
        form.$setPristine = function() {
          $animate.setClass(element, PRISTINE_CLASS, DIRTY_CLASS + ' ' + SUBMITTED_CLASS);
          form.$dirty = false;
          form.$pristine = true;
          form.$submitted = false;
          forEach(controls, function(control) {
            control.$setPristine();
          });
        };
        form.$setUntouched = function() {
          forEach(controls, function(control) {
            control.$setUntouched();
          });
        };
        form.$setSubmitted = function() {
          $animate.addClass(element, SUBMITTED_CLASS);
          form.$submitted = true;
          form.$$parentForm.$setSubmitted();
        };
      }
      var formDirectiveFactory = function(isNgForm) {
        return ['$timeout', '$parse', function($timeout, $parse) {
          var formDirective = {
            name: 'form',
            restrict: isNgForm ? 'EAC' : 'E',
            require: ['form', '^^?form'],
            controller: FormController,
            compile: function ngFormCompile(formElement, attr) {
              formElement.addClass(PRISTINE_CLASS).addClass(VALID_CLASS);
              var nameAttr = attr.name ? 'name' : (isNgForm && attr.ngForm ? 'ngForm' : false);
              return {pre: function ngFormPreLink(scope, formElement, attr, ctrls) {
                  var controller = ctrls[0];
                  if (!('action' in attr)) {
                    var handleFormSubmission = function(event) {
                      scope.$apply(function() {
                        controller.$commitViewValue();
                        controller.$setSubmitted();
                      });
                      event.preventDefault();
                    };
                    addEventListenerFn(formElement[0], 'submit', handleFormSubmission);
                    formElement.on('$destroy', function() {
                      $timeout(function() {
                        removeEventListenerFn(formElement[0], 'submit', handleFormSubmission);
                      }, 0, false);
                    });
                  }
                  var parentFormCtrl = ctrls[1] || controller.$$parentForm;
                  parentFormCtrl.$addControl(controller);
                  var setter = nameAttr ? getSetter(controller.$name) : noop;
                  if (nameAttr) {
                    setter(scope, controller);
                    attr.$observe(nameAttr, function(newValue) {
                      if (controller.$name === newValue)
                        return;
                      setter(scope, undefined);
                      controller.$$parentForm.$$renameControl(controller, newValue);
                      setter = getSetter(controller.$name);
                      setter(scope, controller);
                    });
                  }
                  formElement.on('$destroy', function() {
                    controller.$$parentForm.$removeControl(controller);
                    setter(scope, undefined);
                    extend(controller, nullFormCtrl);
                  });
                }};
            }
          };
          return formDirective;
          function getSetter(expression) {
            if (expression === '') {
              return $parse('this[""]').assign;
            }
            return $parse(expression).assign || noop;
          }
        }];
      };
      var formDirective = formDirectiveFactory();
      var ngFormDirective = formDirectiveFactory(true);
      var ISO_DATE_REGEXP = /^\d{4,}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+(?:[+-][0-2]\d:[0-5]\d|Z)$/;
      var URL_REGEXP = /^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:/?#]+|\[[a-f\d:]+\])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i;
      var EMAIL_REGEXP = /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+\/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+\/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/;
      var NUMBER_REGEXP = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/;
      var DATE_REGEXP = /^(\d{4,})-(\d{2})-(\d{2})$/;
      var DATETIMELOCAL_REGEXP = /^(\d{4,})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/;
      var WEEK_REGEXP = /^(\d{4,})-W(\d\d)$/;
      var MONTH_REGEXP = /^(\d{4,})-(\d\d)$/;
      var TIME_REGEXP = /^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/;
      var PARTIAL_VALIDATION_EVENTS = 'keydown wheel mousedown';
      var PARTIAL_VALIDATION_TYPES = createMap();
      forEach('date,datetime-local,month,time,week'.split(','), function(type) {
        PARTIAL_VALIDATION_TYPES[type] = true;
      });
      var inputType = {
        'text': textInputType,
        'date': createDateInputType('date', DATE_REGEXP, createDateParser(DATE_REGEXP, ['yyyy', 'MM', 'dd']), 'yyyy-MM-dd'),
        'datetime-local': createDateInputType('datetimelocal', DATETIMELOCAL_REGEXP, createDateParser(DATETIMELOCAL_REGEXP, ['yyyy', 'MM', 'dd', 'HH', 'mm', 'ss', 'sss']), 'yyyy-MM-ddTHH:mm:ss.sss'),
        'time': createDateInputType('time', TIME_REGEXP, createDateParser(TIME_REGEXP, ['HH', 'mm', 'ss', 'sss']), 'HH:mm:ss.sss'),
        'week': createDateInputType('week', WEEK_REGEXP, weekParser, 'yyyy-Www'),
        'month': createDateInputType('month', MONTH_REGEXP, createDateParser(MONTH_REGEXP, ['yyyy', 'MM']), 'yyyy-MM'),
        'number': numberInputType,
        'url': urlInputType,
        'email': emailInputType,
        'radio': radioInputType,
        'checkbox': checkboxInputType,
        'hidden': noop,
        'button': noop,
        'submit': noop,
        'reset': noop,
        'file': noop
      };
      function stringBasedInputType(ctrl) {
        ctrl.$formatters.push(function(value) {
          return ctrl.$isEmpty(value) ? value : value.toString();
        });
      }
      function textInputType(scope, element, attr, ctrl, $sniffer, $browser) {
        baseInputType(scope, element, attr, ctrl, $sniffer, $browser);
        stringBasedInputType(ctrl);
      }
      function baseInputType(scope, element, attr, ctrl, $sniffer, $browser) {
        var type = lowercase(element[0].type);
        if (!$sniffer.android) {
          var composing = false;
          element.on('compositionstart', function() {
            composing = true;
          });
          element.on('compositionend', function() {
            composing = false;
            listener();
          });
        }
        var timeout;
        var listener = function(ev) {
          if (timeout) {
            $browser.defer.cancel(timeout);
            timeout = null;
          }
          if (composing)
            return;
          var value = element.val(),
              event = ev && ev.type;
          if (type !== 'password' && (!attr.ngTrim || attr.ngTrim !== 'false')) {
            value = trim(value);
          }
          if (ctrl.$viewValue !== value || (value === '' && ctrl.$$hasNativeValidators)) {
            ctrl.$setViewValue(value, event);
          }
        };
        if ($sniffer.hasEvent('input')) {
          element.on('input', listener);
        } else {
          var deferListener = function(ev, input, origValue) {
            if (!timeout) {
              timeout = $browser.defer(function() {
                timeout = null;
                if (!input || input.value !== origValue) {
                  listener(ev);
                }
              });
            }
          };
          element.on('keydown', function(event) {
            var key = event.keyCode;
            if (key === 91 || (15 < key && key < 19) || (37 <= key && key <= 40))
              return;
            deferListener(event, this, this.value);
          });
          if ($sniffer.hasEvent('paste')) {
            element.on('paste cut', deferListener);
          }
        }
        element.on('change', listener);
        if (PARTIAL_VALIDATION_TYPES[type] && ctrl.$$hasNativeValidators && type === attr.type) {
          element.on(PARTIAL_VALIDATION_EVENTS, function(ev) {
            if (!timeout) {
              var validity = this[VALIDITY_STATE_PROPERTY];
              var origBadInput = validity.badInput;
              var origTypeMismatch = validity.typeMismatch;
              timeout = $browser.defer(function() {
                timeout = null;
                if (validity.badInput !== origBadInput || validity.typeMismatch !== origTypeMismatch) {
                  listener(ev);
                }
              });
            }
          });
        }
        ctrl.$render = function() {
          var value = ctrl.$isEmpty(ctrl.$viewValue) ? '' : ctrl.$viewValue;
          if (element.val() !== value) {
            element.val(value);
          }
        };
      }
      function weekParser(isoWeek, existingDate) {
        if (isDate(isoWeek)) {
          return isoWeek;
        }
        if (isString(isoWeek)) {
          WEEK_REGEXP.lastIndex = 0;
          var parts = WEEK_REGEXP.exec(isoWeek);
          if (parts) {
            var year = +parts[1],
                week = +parts[2],
                hours = 0,
                minutes = 0,
                seconds = 0,
                milliseconds = 0,
                firstThurs = getFirstThursdayOfYear(year),
                addDays = (week - 1) * 7;
            if (existingDate) {
              hours = existingDate.getHours();
              minutes = existingDate.getMinutes();
              seconds = existingDate.getSeconds();
              milliseconds = existingDate.getMilliseconds();
            }
            return new Date(year, 0, firstThurs.getDate() + addDays, hours, minutes, seconds, milliseconds);
          }
        }
        return NaN;
      }
      function createDateParser(regexp, mapping) {
        return function(iso, date) {
          var parts,
              map;
          if (isDate(iso)) {
            return iso;
          }
          if (isString(iso)) {
            if (iso.charAt(0) == '"' && iso.charAt(iso.length - 1) == '"') {
              iso = iso.substring(1, iso.length - 1);
            }
            if (ISO_DATE_REGEXP.test(iso)) {
              return new Date(iso);
            }
            regexp.lastIndex = 0;
            parts = regexp.exec(iso);
            if (parts) {
              parts.shift();
              if (date) {
                map = {
                  yyyy: date.getFullYear(),
                  MM: date.getMonth() + 1,
                  dd: date.getDate(),
                  HH: date.getHours(),
                  mm: date.getMinutes(),
                  ss: date.getSeconds(),
                  sss: date.getMilliseconds() / 1000
                };
              } else {
                map = {
                  yyyy: 1970,
                  MM: 1,
                  dd: 1,
                  HH: 0,
                  mm: 0,
                  ss: 0,
                  sss: 0
                };
              }
              forEach(parts, function(part, index) {
                if (index < mapping.length) {
                  map[mapping[index]] = +part;
                }
              });
              return new Date(map.yyyy, map.MM - 1, map.dd, map.HH, map.mm, map.ss || 0, map.sss * 1000 || 0);
            }
          }
          return NaN;
        };
      }
      function createDateInputType(type, regexp, parseDate, format) {
        return function dynamicDateInputType(scope, element, attr, ctrl, $sniffer, $browser, $filter) {
          badInputChecker(scope, element, attr, ctrl);
          baseInputType(scope, element, attr, ctrl, $sniffer, $browser);
          var timezone = ctrl && ctrl.$options && ctrl.$options.timezone;
          var previousDate;
          ctrl.$$parserName = type;
          ctrl.$parsers.push(function(value) {
            if (ctrl.$isEmpty(value))
              return null;
            if (regexp.test(value)) {
              var parsedDate = parseDate(value, previousDate);
              if (timezone) {
                parsedDate = convertTimezoneToLocal(parsedDate, timezone);
              }
              return parsedDate;
            }
            return undefined;
          });
          ctrl.$formatters.push(function(value) {
            if (value && !isDate(value)) {
              throw ngModelMinErr('datefmt', 'Expected `{0}` to be a date', value);
            }
            if (isValidDate(value)) {
              previousDate = value;
              if (previousDate && timezone) {
                previousDate = convertTimezoneToLocal(previousDate, timezone, true);
              }
              return $filter('date')(value, format, timezone);
            } else {
              previousDate = null;
              return '';
            }
          });
          if (isDefined(attr.min) || attr.ngMin) {
            var minVal;
            ctrl.$validators.min = function(value) {
              return !isValidDate(value) || isUndefined(minVal) || parseDate(value) >= minVal;
            };
            attr.$observe('min', function(val) {
              minVal = parseObservedDateValue(val);
              ctrl.$validate();
            });
          }
          if (isDefined(attr.max) || attr.ngMax) {
            var maxVal;
            ctrl.$validators.max = function(value) {
              return !isValidDate(value) || isUndefined(maxVal) || parseDate(value) <= maxVal;
            };
            attr.$observe('max', function(val) {
              maxVal = parseObservedDateValue(val);
              ctrl.$validate();
            });
          }
          function isValidDate(value) {
            return value && !(value.getTime && value.getTime() !== value.getTime());
          }
          function parseObservedDateValue(val) {
            return isDefined(val) && !isDate(val) ? parseDate(val) || undefined : val;
          }
        };
      }
      function badInputChecker(scope, element, attr, ctrl) {
        var node = element[0];
        var nativeValidation = ctrl.$$hasNativeValidators = isObject(node.validity);
        if (nativeValidation) {
          ctrl.$parsers.push(function(value) {
            var validity = element.prop(VALIDITY_STATE_PROPERTY) || {};
            return validity.badInput || validity.typeMismatch ? undefined : value;
          });
        }
      }
      function numberInputType(scope, element, attr, ctrl, $sniffer, $browser) {
        badInputChecker(scope, element, attr, ctrl);
        baseInputType(scope, element, attr, ctrl, $sniffer, $browser);
        ctrl.$$parserName = 'number';
        ctrl.$parsers.push(function(value) {
          if (ctrl.$isEmpty(value))
            return null;
          if (NUMBER_REGEXP.test(value))
            return parseFloat(value);
          return undefined;
        });
        ctrl.$formatters.push(function(value) {
          if (!ctrl.$isEmpty(value)) {
            if (!isNumber(value)) {
              throw ngModelMinErr('numfmt', 'Expected `{0}` to be a number', value);
            }
            value = value.toString();
          }
          return value;
        });
        if (isDefined(attr.min) || attr.ngMin) {
          var minVal;
          ctrl.$validators.min = function(value) {
            return ctrl.$isEmpty(value) || isUndefined(minVal) || value >= minVal;
          };
          attr.$observe('min', function(val) {
            if (isDefined(val) && !isNumber(val)) {
              val = parseFloat(val, 10);
            }
            minVal = isNumber(val) && !isNaN(val) ? val : undefined;
            ctrl.$validate();
          });
        }
        if (isDefined(attr.max) || attr.ngMax) {
          var maxVal;
          ctrl.$validators.max = function(value) {
            return ctrl.$isEmpty(value) || isUndefined(maxVal) || value <= maxVal;
          };
          attr.$observe('max', function(val) {
            if (isDefined(val) && !isNumber(val)) {
              val = parseFloat(val, 10);
            }
            maxVal = isNumber(val) && !isNaN(val) ? val : undefined;
            ctrl.$validate();
          });
        }
      }
      function urlInputType(scope, element, attr, ctrl, $sniffer, $browser) {
        baseInputType(scope, element, attr, ctrl, $sniffer, $browser);
        stringBasedInputType(ctrl);
        ctrl.$$parserName = 'url';
        ctrl.$validators.url = function(modelValue, viewValue) {
          var value = modelValue || viewValue;
          return ctrl.$isEmpty(value) || URL_REGEXP.test(value);
        };
      }
      function emailInputType(scope, element, attr, ctrl, $sniffer, $browser) {
        baseInputType(scope, element, attr, ctrl, $sniffer, $browser);
        stringBasedInputType(ctrl);
        ctrl.$$parserName = 'email';
        ctrl.$validators.email = function(modelValue, viewValue) {
          var value = modelValue || viewValue;
          return ctrl.$isEmpty(value) || EMAIL_REGEXP.test(value);
        };
      }
      function radioInputType(scope, element, attr, ctrl) {
        if (isUndefined(attr.name)) {
          element.attr('name', nextUid());
        }
        var listener = function(ev) {
          if (element[0].checked) {
            ctrl.$setViewValue(attr.value, ev && ev.type);
          }
        };
        element.on('click', listener);
        ctrl.$render = function() {
          var value = attr.value;
          element[0].checked = (value == ctrl.$viewValue);
        };
        attr.$observe('value', ctrl.$render);
      }
      function parseConstantExpr($parse, context, name, expression, fallback) {
        var parseFn;
        if (isDefined(expression)) {
          parseFn = $parse(expression);
          if (!parseFn.constant) {
            throw ngModelMinErr('constexpr', 'Expected constant expression for `{0}`, but saw ' + '`{1}`.', name, expression);
          }
          return parseFn(context);
        }
        return fallback;
      }
      function checkboxInputType(scope, element, attr, ctrl, $sniffer, $browser, $filter, $parse) {
        var trueValue = parseConstantExpr($parse, scope, 'ngTrueValue', attr.ngTrueValue, true);
        var falseValue = parseConstantExpr($parse, scope, 'ngFalseValue', attr.ngFalseValue, false);
        var listener = function(ev) {
          ctrl.$setViewValue(element[0].checked, ev && ev.type);
        };
        element.on('click', listener);
        ctrl.$render = function() {
          element[0].checked = ctrl.$viewValue;
        };
        ctrl.$isEmpty = function(value) {
          return value === false;
        };
        ctrl.$formatters.push(function(value) {
          return equals(value, trueValue);
        });
        ctrl.$parsers.push(function(value) {
          return value ? trueValue : falseValue;
        });
      }
      var inputDirective = ['$browser', '$sniffer', '$filter', '$parse', function($browser, $sniffer, $filter, $parse) {
        return {
          restrict: 'E',
          require: ['?ngModel'],
          link: {pre: function(scope, element, attr, ctrls) {
              if (ctrls[0]) {
                (inputType[lowercase(attr.type)] || inputType.text)(scope, element, attr, ctrls[0], $sniffer, $browser, $filter, $parse);
              }
            }}
        };
      }];
      var CONSTANT_VALUE_REGEXP = /^(true|false|\d+)$/;
      var ngValueDirective = function() {
        return {
          restrict: 'A',
          priority: 100,
          compile: function(tpl, tplAttr) {
            if (CONSTANT_VALUE_REGEXP.test(tplAttr.ngValue)) {
              return function ngValueConstantLink(scope, elm, attr) {
                attr.$set('value', scope.$eval(attr.ngValue));
              };
            } else {
              return function ngValueLink(scope, elm, attr) {
                scope.$watch(attr.ngValue, function valueWatchAction(value) {
                  attr.$set('value', value);
                });
              };
            }
          }
        };
      };
      var ngBindDirective = ['$compile', function($compile) {
        return {
          restrict: 'AC',
          compile: function ngBindCompile(templateElement) {
            $compile.$$addBindingClass(templateElement);
            return function ngBindLink(scope, element, attr) {
              $compile.$$addBindingInfo(element, attr.ngBind);
              element = element[0];
              scope.$watch(attr.ngBind, function ngBindWatchAction(value) {
                element.textContent = isUndefined(value) ? '' : value;
              });
            };
          }
        };
      }];
      var ngBindTemplateDirective = ['$interpolate', '$compile', function($interpolate, $compile) {
        return {compile: function ngBindTemplateCompile(templateElement) {
            $compile.$$addBindingClass(templateElement);
            return function ngBindTemplateLink(scope, element, attr) {
              var interpolateFn = $interpolate(element.attr(attr.$attr.ngBindTemplate));
              $compile.$$addBindingInfo(element, interpolateFn.expressions);
              element = element[0];
              attr.$observe('ngBindTemplate', function(value) {
                element.textContent = isUndefined(value) ? '' : value;
              });
            };
          }};
      }];
      var ngBindHtmlDirective = ['$sce', '$parse', '$compile', function($sce, $parse, $compile) {
        return {
          restrict: 'A',
          compile: function ngBindHtmlCompile(tElement, tAttrs) {
            var ngBindHtmlGetter = $parse(tAttrs.ngBindHtml);
            var ngBindHtmlWatch = $parse(tAttrs.ngBindHtml, function sceValueOf(val) {
              return $sce.valueOf(val);
            });
            $compile.$$addBindingClass(tElement);
            return function ngBindHtmlLink(scope, element, attr) {
              $compile.$$addBindingInfo(element, attr.ngBindHtml);
              scope.$watch(ngBindHtmlWatch, function ngBindHtmlWatchAction() {
                var value = ngBindHtmlGetter(scope);
                element.html($sce.getTrustedHtml(value) || '');
              });
            };
          }
        };
      }];
      var ngChangeDirective = valueFn({
        restrict: 'A',
        require: 'ngModel',
        link: function(scope, element, attr, ctrl) {
          ctrl.$viewChangeListeners.push(function() {
            scope.$eval(attr.ngChange);
          });
        }
      });
      function classDirective(name, selector) {
        name = 'ngClass' + name;
        return ['$animate', function($animate) {
          return {
            restrict: 'AC',
            link: function(scope, element, attr) {
              var oldVal;
              scope.$watch(attr[name], ngClassWatchAction, true);
              attr.$observe('class', function(value) {
                ngClassWatchAction(scope.$eval(attr[name]));
              });
              if (name !== 'ngClass') {
                scope.$watch('$index', function($index, old$index) {
                  var mod = $index & 1;
                  if (mod !== (old$index & 1)) {
                    var classes = arrayClasses(scope.$eval(attr[name]));
                    mod === selector ? addClasses(classes) : removeClasses(classes);
                  }
                });
              }
              function addClasses(classes) {
                var newClasses = digestClassCounts(classes, 1);
                attr.$addClass(newClasses);
              }
              function removeClasses(classes) {
                var newClasses = digestClassCounts(classes, -1);
                attr.$removeClass(newClasses);
              }
              function digestClassCounts(classes, count) {
                var classCounts = element.data('$classCounts') || createMap();
                var classesToUpdate = [];
                forEach(classes, function(className) {
                  if (count > 0 || classCounts[className]) {
                    classCounts[className] = (classCounts[className] || 0) + count;
                    if (classCounts[className] === +(count > 0)) {
                      classesToUpdate.push(className);
                    }
                  }
                });
                element.data('$classCounts', classCounts);
                return classesToUpdate.join(' ');
              }
              function updateClasses(oldClasses, newClasses) {
                var toAdd = arrayDifference(newClasses, oldClasses);
                var toRemove = arrayDifference(oldClasses, newClasses);
                toAdd = digestClassCounts(toAdd, 1);
                toRemove = digestClassCounts(toRemove, -1);
                if (toAdd && toAdd.length) {
                  $animate.addClass(element, toAdd);
                }
                if (toRemove && toRemove.length) {
                  $animate.removeClass(element, toRemove);
                }
              }
              function ngClassWatchAction(newVal) {
                if (selector === true || (scope.$index & 1) === selector) {
                  var newClasses = arrayClasses(newVal || []);
                  if (!oldVal) {
                    addClasses(newClasses);
                  } else if (!equals(newVal, oldVal)) {
                    var oldClasses = arrayClasses(oldVal);
                    updateClasses(oldClasses, newClasses);
                  }
                }
                if (isArray(newVal)) {
                  oldVal = newVal.map(function(v) {
                    return shallowCopy(v);
                  });
                } else {
                  oldVal = shallowCopy(newVal);
                }
              }
            }
          };
          function arrayDifference(tokens1, tokens2) {
            var values = [];
            outer: for (var i = 0; i < tokens1.length; i++) {
              var token = tokens1[i];
              for (var j = 0; j < tokens2.length; j++) {
                if (token == tokens2[j])
                  continue outer;
              }
              values.push(token);
            }
            return values;
          }
          function arrayClasses(classVal) {
            var classes = [];
            if (isArray(classVal)) {
              forEach(classVal, function(v) {
                classes = classes.concat(arrayClasses(v));
              });
              return classes;
            } else if (isString(classVal)) {
              return classVal.split(' ');
            } else if (isObject(classVal)) {
              forEach(classVal, function(v, k) {
                if (v) {
                  classes = classes.concat(k.split(' '));
                }
              });
              return classes;
            }
            return classVal;
          }
        }];
      }
      var ngClassDirective = classDirective('', true);
      var ngClassOddDirective = classDirective('Odd', 0);
      var ngClassEvenDirective = classDirective('Even', 1);
      var ngCloakDirective = ngDirective({compile: function(element, attr) {
          attr.$set('ngCloak', undefined);
          element.removeClass('ng-cloak');
        }});
      var ngControllerDirective = [function() {
        return {
          restrict: 'A',
          scope: true,
          controller: '@',
          priority: 500
        };
      }];
      var ngEventDirectives = {};
      var forceAsyncEvents = {
        'blur': true,
        'focus': true
      };
      forEach('click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste'.split(' '), function(eventName) {
        var directiveName = directiveNormalize('ng-' + eventName);
        ngEventDirectives[directiveName] = ['$parse', '$rootScope', function($parse, $rootScope) {
          return {
            restrict: 'A',
            compile: function($element, attr) {
              var fn = $parse(attr[directiveName], null, true);
              return function ngEventHandler(scope, element) {
                element.on(eventName, function(event) {
                  var callback = function() {
                    fn(scope, {$event: event});
                  };
                  if (forceAsyncEvents[eventName] && $rootScope.$$phase) {
                    scope.$evalAsync(callback);
                  } else {
                    scope.$apply(callback);
                  }
                });
              };
            }
          };
        }];
      });
      var ngIfDirective = ['$animate', '$compile', function($animate, $compile) {
        return {
          multiElement: true,
          transclude: 'element',
          priority: 600,
          terminal: true,
          restrict: 'A',
          $$tlb: true,
          link: function($scope, $element, $attr, ctrl, $transclude) {
            var block,
                childScope,
                previousElements;
            $scope.$watch($attr.ngIf, function ngIfWatchAction(value) {
              if (value) {
                if (!childScope) {
                  $transclude(function(clone, newScope) {
                    childScope = newScope;
                    clone[clone.length++] = $compile.$$createComment('end ngIf', $attr.ngIf);
                    block = {clone: clone};
                    $animate.enter(clone, $element.parent(), $element);
                  });
                }
              } else {
                if (previousElements) {
                  previousElements.remove();
                  previousElements = null;
                }
                if (childScope) {
                  childScope.$destroy();
                  childScope = null;
                }
                if (block) {
                  previousElements = getBlockNodes(block.clone);
                  $animate.leave(previousElements).then(function() {
                    previousElements = null;
                  });
                  block = null;
                }
              }
            });
          }
        };
      }];
      var ngIncludeDirective = ['$templateRequest', '$anchorScroll', '$animate', function($templateRequest, $anchorScroll, $animate) {
        return {
          restrict: 'ECA',
          priority: 400,
          terminal: true,
          transclude: 'element',
          controller: angular.noop,
          compile: function(element, attr) {
            var srcExp = attr.ngInclude || attr.src,
                onloadExp = attr.onload || '',
                autoScrollExp = attr.autoscroll;
            return function(scope, $element, $attr, ctrl, $transclude) {
              var changeCounter = 0,
                  currentScope,
                  previousElement,
                  currentElement;
              var cleanupLastIncludeContent = function() {
                if (previousElement) {
                  previousElement.remove();
                  previousElement = null;
                }
                if (currentScope) {
                  currentScope.$destroy();
                  currentScope = null;
                }
                if (currentElement) {
                  $animate.leave(currentElement).then(function() {
                    previousElement = null;
                  });
                  previousElement = currentElement;
                  currentElement = null;
                }
              };
              scope.$watch(srcExp, function ngIncludeWatchAction(src) {
                var afterAnimation = function() {
                  if (isDefined(autoScrollExp) && (!autoScrollExp || scope.$eval(autoScrollExp))) {
                    $anchorScroll();
                  }
                };
                var thisChangeId = ++changeCounter;
                if (src) {
                  $templateRequest(src, true).then(function(response) {
                    if (scope.$$destroyed)
                      return;
                    if (thisChangeId !== changeCounter)
                      return;
                    var newScope = scope.$new();
                    ctrl.template = response;
                    var clone = $transclude(newScope, function(clone) {
                      cleanupLastIncludeContent();
                      $animate.enter(clone, null, $element).then(afterAnimation);
                    });
                    currentScope = newScope;
                    currentElement = clone;
                    currentScope.$emit('$includeContentLoaded', src);
                    scope.$eval(onloadExp);
                  }, function() {
                    if (scope.$$destroyed)
                      return;
                    if (thisChangeId === changeCounter) {
                      cleanupLastIncludeContent();
                      scope.$emit('$includeContentError', src);
                    }
                  });
                  scope.$emit('$includeContentRequested', src);
                } else {
                  cleanupLastIncludeContent();
                  ctrl.template = null;
                }
              });
            };
          }
        };
      }];
      var ngIncludeFillContentDirective = ['$compile', function($compile) {
        return {
          restrict: 'ECA',
          priority: -400,
          require: 'ngInclude',
          link: function(scope, $element, $attr, ctrl) {
            if (toString.call($element[0]).match(/SVG/)) {
              $element.empty();
              $compile(jqLiteBuildFragment(ctrl.template, window.document).childNodes)(scope, function namespaceAdaptedClone(clone) {
                $element.append(clone);
              }, {futureParentElement: $element});
              return;
            }
            $element.html(ctrl.template);
            $compile($element.contents())(scope);
          }
        };
      }];
      var ngInitDirective = ngDirective({
        priority: 450,
        compile: function() {
          return {pre: function(scope, element, attrs) {
              scope.$eval(attrs.ngInit);
            }};
        }
      });
      var ngListDirective = function() {
        return {
          restrict: 'A',
          priority: 100,
          require: 'ngModel',
          link: function(scope, element, attr, ctrl) {
            var ngList = element.attr(attr.$attr.ngList) || ', ';
            var trimValues = attr.ngTrim !== 'false';
            var separator = trimValues ? trim(ngList) : ngList;
            var parse = function(viewValue) {
              if (isUndefined(viewValue))
                return;
              var list = [];
              if (viewValue) {
                forEach(viewValue.split(separator), function(value) {
                  if (value)
                    list.push(trimValues ? trim(value) : value);
                });
              }
              return list;
            };
            ctrl.$parsers.push(parse);
            ctrl.$formatters.push(function(value) {
              if (isArray(value)) {
                return value.join(ngList);
              }
              return undefined;
            });
            ctrl.$isEmpty = function(value) {
              return !value || !value.length;
            };
          }
        };
      };
      var VALID_CLASS = 'ng-valid',
          INVALID_CLASS = 'ng-invalid',
          PRISTINE_CLASS = 'ng-pristine',
          DIRTY_CLASS = 'ng-dirty',
          UNTOUCHED_CLASS = 'ng-untouched',
          TOUCHED_CLASS = 'ng-touched',
          PENDING_CLASS = 'ng-pending',
          EMPTY_CLASS = 'ng-empty',
          NOT_EMPTY_CLASS = 'ng-not-empty';
      var ngModelMinErr = minErr('ngModel');
      var NgModelController = ['$scope', '$exceptionHandler', '$attrs', '$element', '$parse', '$animate', '$timeout', '$rootScope', '$q', '$interpolate', function($scope, $exceptionHandler, $attr, $element, $parse, $animate, $timeout, $rootScope, $q, $interpolate) {
        this.$viewValue = Number.NaN;
        this.$modelValue = Number.NaN;
        this.$$rawModelValue = undefined;
        this.$validators = {};
        this.$asyncValidators = {};
        this.$parsers = [];
        this.$formatters = [];
        this.$viewChangeListeners = [];
        this.$untouched = true;
        this.$touched = false;
        this.$pristine = true;
        this.$dirty = false;
        this.$valid = true;
        this.$invalid = false;
        this.$error = {};
        this.$$success = {};
        this.$pending = undefined;
        this.$name = $interpolate($attr.name || '', false)($scope);
        this.$$parentForm = nullFormCtrl;
        var parsedNgModel = $parse($attr.ngModel),
            parsedNgModelAssign = parsedNgModel.assign,
            ngModelGet = parsedNgModel,
            ngModelSet = parsedNgModelAssign,
            pendingDebounce = null,
            parserValid,
            ctrl = this;
        this.$$setOptions = function(options) {
          ctrl.$options = options;
          if (options && options.getterSetter) {
            var invokeModelGetter = $parse($attr.ngModel + '()'),
                invokeModelSetter = $parse($attr.ngModel + '($$$p)');
            ngModelGet = function($scope) {
              var modelValue = parsedNgModel($scope);
              if (isFunction(modelValue)) {
                modelValue = invokeModelGetter($scope);
              }
              return modelValue;
            };
            ngModelSet = function($scope, newValue) {
              if (isFunction(parsedNgModel($scope))) {
                invokeModelSetter($scope, {$$$p: newValue});
              } else {
                parsedNgModelAssign($scope, newValue);
              }
            };
          } else if (!parsedNgModel.assign) {
            throw ngModelMinErr('nonassign', "Expression '{0}' is non-assignable. Element: {1}", $attr.ngModel, startingTag($element));
          }
        };
        this.$render = noop;
        this.$isEmpty = function(value) {
          return isUndefined(value) || value === '' || value === null || value !== value;
        };
        this.$$updateEmptyClasses = function(value) {
          if (ctrl.$isEmpty(value)) {
            $animate.removeClass($element, NOT_EMPTY_CLASS);
            $animate.addClass($element, EMPTY_CLASS);
          } else {
            $animate.removeClass($element, EMPTY_CLASS);
            $animate.addClass($element, NOT_EMPTY_CLASS);
          }
        };
        var currentValidationRunId = 0;
        addSetValidityMethod({
          ctrl: this,
          $element: $element,
          set: function(object, property) {
            object[property] = true;
          },
          unset: function(object, property) {
            delete object[property];
          },
          $animate: $animate
        });
        this.$setPristine = function() {
          ctrl.$dirty = false;
          ctrl.$pristine = true;
          $animate.removeClass($element, DIRTY_CLASS);
          $animate.addClass($element, PRISTINE_CLASS);
        };
        this.$setDirty = function() {
          ctrl.$dirty = true;
          ctrl.$pristine = false;
          $animate.removeClass($element, PRISTINE_CLASS);
          $animate.addClass($element, DIRTY_CLASS);
          ctrl.$$parentForm.$setDirty();
        };
        this.$setUntouched = function() {
          ctrl.$touched = false;
          ctrl.$untouched = true;
          $animate.setClass($element, UNTOUCHED_CLASS, TOUCHED_CLASS);
        };
        this.$setTouched = function() {
          ctrl.$touched = true;
          ctrl.$untouched = false;
          $animate.setClass($element, TOUCHED_CLASS, UNTOUCHED_CLASS);
        };
        this.$rollbackViewValue = function() {
          $timeout.cancel(pendingDebounce);
          ctrl.$viewValue = ctrl.$$lastCommittedViewValue;
          ctrl.$render();
        };
        this.$validate = function() {
          if (isNumber(ctrl.$modelValue) && isNaN(ctrl.$modelValue)) {
            return;
          }
          var viewValue = ctrl.$$lastCommittedViewValue;
          var modelValue = ctrl.$$rawModelValue;
          var prevValid = ctrl.$valid;
          var prevModelValue = ctrl.$modelValue;
          var allowInvalid = ctrl.$options && ctrl.$options.allowInvalid;
          ctrl.$$runValidators(modelValue, viewValue, function(allValid) {
            if (!allowInvalid && prevValid !== allValid) {
              ctrl.$modelValue = allValid ? modelValue : undefined;
              if (ctrl.$modelValue !== prevModelValue) {
                ctrl.$$writeModelToScope();
              }
            }
          });
        };
        this.$$runValidators = function(modelValue, viewValue, doneCallback) {
          currentValidationRunId++;
          var localValidationRunId = currentValidationRunId;
          if (!processParseErrors()) {
            validationDone(false);
            return;
          }
          if (!processSyncValidators()) {
            validationDone(false);
            return;
          }
          processAsyncValidators();
          function processParseErrors() {
            var errorKey = ctrl.$$parserName || 'parse';
            if (isUndefined(parserValid)) {
              setValidity(errorKey, null);
            } else {
              if (!parserValid) {
                forEach(ctrl.$validators, function(v, name) {
                  setValidity(name, null);
                });
                forEach(ctrl.$asyncValidators, function(v, name) {
                  setValidity(name, null);
                });
              }
              setValidity(errorKey, parserValid);
              return parserValid;
            }
            return true;
          }
          function processSyncValidators() {
            var syncValidatorsValid = true;
            forEach(ctrl.$validators, function(validator, name) {
              var result = validator(modelValue, viewValue);
              syncValidatorsValid = syncValidatorsValid && result;
              setValidity(name, result);
            });
            if (!syncValidatorsValid) {
              forEach(ctrl.$asyncValidators, function(v, name) {
                setValidity(name, null);
              });
              return false;
            }
            return true;
          }
          function processAsyncValidators() {
            var validatorPromises = [];
            var allValid = true;
            forEach(ctrl.$asyncValidators, function(validator, name) {
              var promise = validator(modelValue, viewValue);
              if (!isPromiseLike(promise)) {
                throw ngModelMinErr('nopromise', "Expected asynchronous validator to return a promise but got '{0}' instead.", promise);
              }
              setValidity(name, undefined);
              validatorPromises.push(promise.then(function() {
                setValidity(name, true);
              }, function() {
                allValid = false;
                setValidity(name, false);
              }));
            });
            if (!validatorPromises.length) {
              validationDone(true);
            } else {
              $q.all(validatorPromises).then(function() {
                validationDone(allValid);
              }, noop);
            }
          }
          function setValidity(name, isValid) {
            if (localValidationRunId === currentValidationRunId) {
              ctrl.$setValidity(name, isValid);
            }
          }
          function validationDone(allValid) {
            if (localValidationRunId === currentValidationRunId) {
              doneCallback(allValid);
            }
          }
        };
        this.$commitViewValue = function() {
          var viewValue = ctrl.$viewValue;
          $timeout.cancel(pendingDebounce);
          if (ctrl.$$lastCommittedViewValue === viewValue && (viewValue !== '' || !ctrl.$$hasNativeValidators)) {
            return;
          }
          ctrl.$$updateEmptyClasses(viewValue);
          ctrl.$$lastCommittedViewValue = viewValue;
          if (ctrl.$pristine) {
            this.$setDirty();
          }
          this.$$parseAndValidate();
        };
        this.$$parseAndValidate = function() {
          var viewValue = ctrl.$$lastCommittedViewValue;
          var modelValue = viewValue;
          parserValid = isUndefined(modelValue) ? undefined : true;
          if (parserValid) {
            for (var i = 0; i < ctrl.$parsers.length; i++) {
              modelValue = ctrl.$parsers[i](modelValue);
              if (isUndefined(modelValue)) {
                parserValid = false;
                break;
              }
            }
          }
          if (isNumber(ctrl.$modelValue) && isNaN(ctrl.$modelValue)) {
            ctrl.$modelValue = ngModelGet($scope);
          }
          var prevModelValue = ctrl.$modelValue;
          var allowInvalid = ctrl.$options && ctrl.$options.allowInvalid;
          ctrl.$$rawModelValue = modelValue;
          if (allowInvalid) {
            ctrl.$modelValue = modelValue;
            writeToModelIfNeeded();
          }
          ctrl.$$runValidators(modelValue, ctrl.$$lastCommittedViewValue, function(allValid) {
            if (!allowInvalid) {
              ctrl.$modelValue = allValid ? modelValue : undefined;
              writeToModelIfNeeded();
            }
          });
          function writeToModelIfNeeded() {
            if (ctrl.$modelValue !== prevModelValue) {
              ctrl.$$writeModelToScope();
            }
          }
        };
        this.$$writeModelToScope = function() {
          ngModelSet($scope, ctrl.$modelValue);
          forEach(ctrl.$viewChangeListeners, function(listener) {
            try {
              listener();
            } catch (e) {
              $exceptionHandler(e);
            }
          });
        };
        this.$setViewValue = function(value, trigger) {
          ctrl.$viewValue = value;
          if (!ctrl.$options || ctrl.$options.updateOnDefault) {
            ctrl.$$debounceViewValueCommit(trigger);
          }
        };
        this.$$debounceViewValueCommit = function(trigger) {
          var debounceDelay = 0,
              options = ctrl.$options,
              debounce;
          if (options && isDefined(options.debounce)) {
            debounce = options.debounce;
            if (isNumber(debounce)) {
              debounceDelay = debounce;
            } else if (isNumber(debounce[trigger])) {
              debounceDelay = debounce[trigger];
            } else if (isNumber(debounce['default'])) {
              debounceDelay = debounce['default'];
            }
          }
          $timeout.cancel(pendingDebounce);
          if (debounceDelay) {
            pendingDebounce = $timeout(function() {
              ctrl.$commitViewValue();
            }, debounceDelay);
          } else if ($rootScope.$$phase) {
            ctrl.$commitViewValue();
          } else {
            $scope.$apply(function() {
              ctrl.$commitViewValue();
            });
          }
        };
        $scope.$watch(function ngModelWatch() {
          var modelValue = ngModelGet($scope);
          if (modelValue !== ctrl.$modelValue && (ctrl.$modelValue === ctrl.$modelValue || modelValue === modelValue)) {
            ctrl.$modelValue = ctrl.$$rawModelValue = modelValue;
            parserValid = undefined;
            var formatters = ctrl.$formatters,
                idx = formatters.length;
            var viewValue = modelValue;
            while (idx--) {
              viewValue = formatters[idx](viewValue);
            }
            if (ctrl.$viewValue !== viewValue) {
              ctrl.$$updateEmptyClasses(viewValue);
              ctrl.$viewValue = ctrl.$$lastCommittedViewValue = viewValue;
              ctrl.$render();
              ctrl.$$runValidators(modelValue, viewValue, noop);
            }
          }
          return modelValue;
        });
      }];
      var ngModelDirective = ['$rootScope', function($rootScope) {
        return {
          restrict: 'A',
          require: ['ngModel', '^?form', '^?ngModelOptions'],
          controller: NgModelController,
          priority: 1,
          compile: function ngModelCompile(element) {
            element.addClass(PRISTINE_CLASS).addClass(UNTOUCHED_CLASS).addClass(VALID_CLASS);
            return {
              pre: function ngModelPreLink(scope, element, attr, ctrls) {
                var modelCtrl = ctrls[0],
                    formCtrl = ctrls[1] || modelCtrl.$$parentForm;
                modelCtrl.$$setOptions(ctrls[2] && ctrls[2].$options);
                formCtrl.$addControl(modelCtrl);
                attr.$observe('name', function(newValue) {
                  if (modelCtrl.$name !== newValue) {
                    modelCtrl.$$parentForm.$$renameControl(modelCtrl, newValue);
                  }
                });
                scope.$on('$destroy', function() {
                  modelCtrl.$$parentForm.$removeControl(modelCtrl);
                });
              },
              post: function ngModelPostLink(scope, element, attr, ctrls) {
                var modelCtrl = ctrls[0];
                if (modelCtrl.$options && modelCtrl.$options.updateOn) {
                  element.on(modelCtrl.$options.updateOn, function(ev) {
                    modelCtrl.$$debounceViewValueCommit(ev && ev.type);
                  });
                }
                element.on('blur', function() {
                  if (modelCtrl.$touched)
                    return;
                  if ($rootScope.$$phase) {
                    scope.$evalAsync(modelCtrl.$setTouched);
                  } else {
                    scope.$apply(modelCtrl.$setTouched);
                  }
                });
              }
            };
          }
        };
      }];
      var DEFAULT_REGEXP = /(\s+|^)default(\s+|$)/;
      var ngModelOptionsDirective = function() {
        return {
          restrict: 'A',
          controller: ['$scope', '$attrs', function($scope, $attrs) {
            var that = this;
            this.$options = copy($scope.$eval($attrs.ngModelOptions));
            if (isDefined(this.$options.updateOn)) {
              this.$options.updateOnDefault = false;
              this.$options.updateOn = trim(this.$options.updateOn.replace(DEFAULT_REGEXP, function() {
                that.$options.updateOnDefault = true;
                return ' ';
              }));
            } else {
              this.$options.updateOnDefault = true;
            }
          }]
        };
      };
      function addSetValidityMethod(context) {
        var ctrl = context.ctrl,
            $element = context.$element,
            classCache = {},
            set = context.set,
            unset = context.unset,
            $animate = context.$animate;
        classCache[INVALID_CLASS] = !(classCache[VALID_CLASS] = $element.hasClass(VALID_CLASS));
        ctrl.$setValidity = setValidity;
        function setValidity(validationErrorKey, state, controller) {
          if (isUndefined(state)) {
            createAndSet('$pending', validationErrorKey, controller);
          } else {
            unsetAndCleanup('$pending', validationErrorKey, controller);
          }
          if (!isBoolean(state)) {
            unset(ctrl.$error, validationErrorKey, controller);
            unset(ctrl.$$success, validationErrorKey, controller);
          } else {
            if (state) {
              unset(ctrl.$error, validationErrorKey, controller);
              set(ctrl.$$success, validationErrorKey, controller);
            } else {
              set(ctrl.$error, validationErrorKey, controller);
              unset(ctrl.$$success, validationErrorKey, controller);
            }
          }
          if (ctrl.$pending) {
            cachedToggleClass(PENDING_CLASS, true);
            ctrl.$valid = ctrl.$invalid = undefined;
            toggleValidationCss('', null);
          } else {
            cachedToggleClass(PENDING_CLASS, false);
            ctrl.$valid = isObjectEmpty(ctrl.$error);
            ctrl.$invalid = !ctrl.$valid;
            toggleValidationCss('', ctrl.$valid);
          }
          var combinedState;
          if (ctrl.$pending && ctrl.$pending[validationErrorKey]) {
            combinedState = undefined;
          } else if (ctrl.$error[validationErrorKey]) {
            combinedState = false;
          } else if (ctrl.$$success[validationErrorKey]) {
            combinedState = true;
          } else {
            combinedState = null;
          }
          toggleValidationCss(validationErrorKey, combinedState);
          ctrl.$$parentForm.$setValidity(validationErrorKey, combinedState, ctrl);
        }
        function createAndSet(name, value, controller) {
          if (!ctrl[name]) {
            ctrl[name] = {};
          }
          set(ctrl[name], value, controller);
        }
        function unsetAndCleanup(name, value, controller) {
          if (ctrl[name]) {
            unset(ctrl[name], value, controller);
          }
          if (isObjectEmpty(ctrl[name])) {
            ctrl[name] = undefined;
          }
        }
        function cachedToggleClass(className, switchValue) {
          if (switchValue && !classCache[className]) {
            $animate.addClass($element, className);
            classCache[className] = true;
          } else if (!switchValue && classCache[className]) {
            $animate.removeClass($element, className);
            classCache[className] = false;
          }
        }
        function toggleValidationCss(validationErrorKey, isValid) {
          validationErrorKey = validationErrorKey ? '-' + snake_case(validationErrorKey, '-') : '';
          cachedToggleClass(VALID_CLASS + validationErrorKey, isValid === true);
          cachedToggleClass(INVALID_CLASS + validationErrorKey, isValid === false);
        }
      }
      function isObjectEmpty(obj) {
        if (obj) {
          for (var prop in obj) {
            if (obj.hasOwnProperty(prop)) {
              return false;
            }
          }
        }
        return true;
      }
      var ngNonBindableDirective = ngDirective({
        terminal: true,
        priority: 1000
      });
      var ngOptionsMinErr = minErr('ngOptions');
      var NG_OPTIONS_REGEXP = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/;
      var ngOptionsDirective = ['$compile', '$document', '$parse', function($compile, $document, $parse) {
        function parseOptionsExpression(optionsExp, selectElement, scope) {
          var match = optionsExp.match(NG_OPTIONS_REGEXP);
          if (!(match)) {
            throw ngOptionsMinErr('iexp', "Expected expression in form of " + "'_select_ (as _label_)? for (_key_,)?_value_ in _collection_'" + " but got '{0}'. Element: {1}", optionsExp, startingTag(selectElement));
          }
          var valueName = match[5] || match[7];
          var keyName = match[6];
          var selectAs = / as /.test(match[0]) && match[1];
          var trackBy = match[9];
          var valueFn = $parse(match[2] ? match[1] : valueName);
          var selectAsFn = selectAs && $parse(selectAs);
          var viewValueFn = selectAsFn || valueFn;
          var trackByFn = trackBy && $parse(trackBy);
          var getTrackByValueFn = trackBy ? function(value, locals) {
            return trackByFn(scope, locals);
          } : function getHashOfValue(value) {
            return hashKey(value);
          };
          var getTrackByValue = function(value, key) {
            return getTrackByValueFn(value, getLocals(value, key));
          };
          var displayFn = $parse(match[2] || match[1]);
          var groupByFn = $parse(match[3] || '');
          var disableWhenFn = $parse(match[4] || '');
          var valuesFn = $parse(match[8]);
          var locals = {};
          var getLocals = keyName ? function(value, key) {
            locals[keyName] = key;
            locals[valueName] = value;
            return locals;
          } : function(value) {
            locals[valueName] = value;
            return locals;
          };
          function Option(selectValue, viewValue, label, group, disabled) {
            this.selectValue = selectValue;
            this.viewValue = viewValue;
            this.label = label;
            this.group = group;
            this.disabled = disabled;
          }
          function getOptionValuesKeys(optionValues) {
            var optionValuesKeys;
            if (!keyName && isArrayLike(optionValues)) {
              optionValuesKeys = optionValues;
            } else {
              optionValuesKeys = [];
              for (var itemKey in optionValues) {
                if (optionValues.hasOwnProperty(itemKey) && itemKey.charAt(0) !== '$') {
                  optionValuesKeys.push(itemKey);
                }
              }
            }
            return optionValuesKeys;
          }
          return {
            trackBy: trackBy,
            getTrackByValue: getTrackByValue,
            getWatchables: $parse(valuesFn, function(optionValues) {
              var watchedArray = [];
              optionValues = optionValues || [];
              var optionValuesKeys = getOptionValuesKeys(optionValues);
              var optionValuesLength = optionValuesKeys.length;
              for (var index = 0; index < optionValuesLength; index++) {
                var key = (optionValues === optionValuesKeys) ? index : optionValuesKeys[index];
                var value = optionValues[key];
                var locals = getLocals(value, key);
                var selectValue = getTrackByValueFn(value, locals);
                watchedArray.push(selectValue);
                if (match[2] || match[1]) {
                  var label = displayFn(scope, locals);
                  watchedArray.push(label);
                }
                if (match[4]) {
                  var disableWhen = disableWhenFn(scope, locals);
                  watchedArray.push(disableWhen);
                }
              }
              return watchedArray;
            }),
            getOptions: function() {
              var optionItems = [];
              var selectValueMap = {};
              var optionValues = valuesFn(scope) || [];
              var optionValuesKeys = getOptionValuesKeys(optionValues);
              var optionValuesLength = optionValuesKeys.length;
              for (var index = 0; index < optionValuesLength; index++) {
                var key = (optionValues === optionValuesKeys) ? index : optionValuesKeys[index];
                var value = optionValues[key];
                var locals = getLocals(value, key);
                var viewValue = viewValueFn(scope, locals);
                var selectValue = getTrackByValueFn(viewValue, locals);
                var label = displayFn(scope, locals);
                var group = groupByFn(scope, locals);
                var disabled = disableWhenFn(scope, locals);
                var optionItem = new Option(selectValue, viewValue, label, group, disabled);
                optionItems.push(optionItem);
                selectValueMap[selectValue] = optionItem;
              }
              return {
                items: optionItems,
                selectValueMap: selectValueMap,
                getOptionFromViewValue: function(value) {
                  return selectValueMap[getTrackByValue(value)];
                },
                getViewValueFromOption: function(option) {
                  return trackBy ? angular.copy(option.viewValue) : option.viewValue;
                }
              };
            }
          };
        }
        var optionTemplate = window.document.createElement('option'),
            optGroupTemplate = window.document.createElement('optgroup');
        function ngOptionsPostLink(scope, selectElement, attr, ctrls) {
          var selectCtrl = ctrls[0];
          var ngModelCtrl = ctrls[1];
          var multiple = attr.multiple;
          var emptyOption;
          for (var i = 0,
              children = selectElement.children(),
              ii = children.length; i < ii; i++) {
            if (children[i].value === '') {
              emptyOption = children.eq(i);
              break;
            }
          }
          var providedEmptyOption = !!emptyOption;
          var unknownOption = jqLite(optionTemplate.cloneNode(false));
          unknownOption.val('?');
          var options;
          var ngOptions = parseOptionsExpression(attr.ngOptions, selectElement, scope);
          var listFragment = $document[0].createDocumentFragment();
          var renderEmptyOption = function() {
            if (!providedEmptyOption) {
              selectElement.prepend(emptyOption);
            }
            selectElement.val('');
            emptyOption.prop('selected', true);
            emptyOption.attr('selected', true);
          };
          var removeEmptyOption = function() {
            if (!providedEmptyOption) {
              emptyOption.remove();
            }
          };
          var renderUnknownOption = function() {
            selectElement.prepend(unknownOption);
            selectElement.val('?');
            unknownOption.prop('selected', true);
            unknownOption.attr('selected', true);
          };
          var removeUnknownOption = function() {
            unknownOption.remove();
          };
          if (!multiple) {
            selectCtrl.writeValue = function writeNgOptionsValue(value) {
              var option = options.getOptionFromViewValue(value);
              if (option) {
                if (selectElement[0].value !== option.selectValue) {
                  removeUnknownOption();
                  removeEmptyOption();
                  selectElement[0].value = option.selectValue;
                  option.element.selected = true;
                }
                option.element.setAttribute('selected', 'selected');
              } else {
                if (value === null || providedEmptyOption) {
                  removeUnknownOption();
                  renderEmptyOption();
                } else {
                  removeEmptyOption();
                  renderUnknownOption();
                }
              }
            };
            selectCtrl.readValue = function readNgOptionsValue() {
              var selectedOption = options.selectValueMap[selectElement.val()];
              if (selectedOption && !selectedOption.disabled) {
                removeEmptyOption();
                removeUnknownOption();
                return options.getViewValueFromOption(selectedOption);
              }
              return null;
            };
            if (ngOptions.trackBy) {
              scope.$watch(function() {
                return ngOptions.getTrackByValue(ngModelCtrl.$viewValue);
              }, function() {
                ngModelCtrl.$render();
              });
            }
          } else {
            ngModelCtrl.$isEmpty = function(value) {
              return !value || value.length === 0;
            };
            selectCtrl.writeValue = function writeNgOptionsMultiple(value) {
              options.items.forEach(function(option) {
                option.element.selected = false;
              });
              if (value) {
                value.forEach(function(item) {
                  var option = options.getOptionFromViewValue(item);
                  if (option)
                    option.element.selected = true;
                });
              }
            };
            selectCtrl.readValue = function readNgOptionsMultiple() {
              var selectedValues = selectElement.val() || [],
                  selections = [];
              forEach(selectedValues, function(value) {
                var option = options.selectValueMap[value];
                if (option && !option.disabled)
                  selections.push(options.getViewValueFromOption(option));
              });
              return selections;
            };
            if (ngOptions.trackBy) {
              scope.$watchCollection(function() {
                if (isArray(ngModelCtrl.$viewValue)) {
                  return ngModelCtrl.$viewValue.map(function(value) {
                    return ngOptions.getTrackByValue(value);
                  });
                }
              }, function() {
                ngModelCtrl.$render();
              });
            }
          }
          if (providedEmptyOption) {
            emptyOption.remove();
            $compile(emptyOption)(scope);
            emptyOption.removeClass('ng-scope');
          } else {
            emptyOption = jqLite(optionTemplate.cloneNode(false));
          }
          selectElement.empty();
          updateOptions();
          scope.$watchCollection(ngOptions.getWatchables, updateOptions);
          function addOptionElement(option, parent) {
            var optionElement = optionTemplate.cloneNode(false);
            parent.appendChild(optionElement);
            updateOptionElement(option, optionElement);
          }
          function updateOptionElement(option, element) {
            option.element = element;
            element.disabled = option.disabled;
            if (option.label !== element.label) {
              element.label = option.label;
              element.textContent = option.label;
            }
            if (option.value !== element.value)
              element.value = option.selectValue;
          }
          function updateOptions() {
            var previousValue = options && selectCtrl.readValue();
            if (options) {
              for (var i = options.items.length - 1; i >= 0; i--) {
                var option = options.items[i];
                if (option.group) {
                  jqLiteRemove(option.element.parentNode);
                } else {
                  jqLiteRemove(option.element);
                }
              }
            }
            options = ngOptions.getOptions();
            var groupElementMap = {};
            if (providedEmptyOption) {
              selectElement.prepend(emptyOption);
            }
            options.items.forEach(function addOption(option) {
              var groupElement;
              if (isDefined(option.group)) {
                groupElement = groupElementMap[option.group];
                if (!groupElement) {
                  groupElement = optGroupTemplate.cloneNode(false);
                  listFragment.appendChild(groupElement);
                  groupElement.label = option.group;
                  groupElementMap[option.group] = groupElement;
                }
                addOptionElement(option, groupElement);
              } else {
                addOptionElement(option, listFragment);
              }
            });
            selectElement[0].appendChild(listFragment);
            ngModelCtrl.$render();
            if (!ngModelCtrl.$isEmpty(previousValue)) {
              var nextValue = selectCtrl.readValue();
              var isNotPrimitive = ngOptions.trackBy || multiple;
              if (isNotPrimitive ? !equals(previousValue, nextValue) : previousValue !== nextValue) {
                ngModelCtrl.$setViewValue(nextValue);
                ngModelCtrl.$render();
              }
            }
          }
        }
        return {
          restrict: 'A',
          terminal: true,
          require: ['select', 'ngModel'],
          link: {
            pre: function ngOptionsPreLink(scope, selectElement, attr, ctrls) {
              ctrls[0].registerOption = noop;
            },
            post: ngOptionsPostLink
          }
        };
      }];
      var ngPluralizeDirective = ['$locale', '$interpolate', '$log', function($locale, $interpolate, $log) {
        var BRACE = /{}/g,
            IS_WHEN = /^when(Minus)?(.+)$/;
        return {link: function(scope, element, attr) {
            var numberExp = attr.count,
                whenExp = attr.$attr.when && element.attr(attr.$attr.when),
                offset = attr.offset || 0,
                whens = scope.$eval(whenExp) || {},
                whensExpFns = {},
                startSymbol = $interpolate.startSymbol(),
                endSymbol = $interpolate.endSymbol(),
                braceReplacement = startSymbol + numberExp + '-' + offset + endSymbol,
                watchRemover = angular.noop,
                lastCount;
            forEach(attr, function(expression, attributeName) {
              var tmpMatch = IS_WHEN.exec(attributeName);
              if (tmpMatch) {
                var whenKey = (tmpMatch[1] ? '-' : '') + lowercase(tmpMatch[2]);
                whens[whenKey] = element.attr(attr.$attr[attributeName]);
              }
            });
            forEach(whens, function(expression, key) {
              whensExpFns[key] = $interpolate(expression.replace(BRACE, braceReplacement));
            });
            scope.$watch(numberExp, function ngPluralizeWatchAction(newVal) {
              var count = parseFloat(newVal);
              var countIsNaN = isNaN(count);
              if (!countIsNaN && !(count in whens)) {
                count = $locale.pluralCat(count - offset);
              }
              if ((count !== lastCount) && !(countIsNaN && isNumber(lastCount) && isNaN(lastCount))) {
                watchRemover();
                var whenExpFn = whensExpFns[count];
                if (isUndefined(whenExpFn)) {
                  if (newVal != null) {
                    $log.debug("ngPluralize: no rule defined for '" + count + "' in " + whenExp);
                  }
                  watchRemover = noop;
                  updateElementText();
                } else {
                  watchRemover = scope.$watch(whenExpFn, updateElementText);
                }
                lastCount = count;
              }
            });
            function updateElementText(newText) {
              element.text(newText || '');
            }
          }};
      }];
      var ngRepeatDirective = ['$parse', '$animate', '$compile', function($parse, $animate, $compile) {
        var NG_REMOVED = '$$NG_REMOVED';
        var ngRepeatMinErr = minErr('ngRepeat');
        var updateScope = function(scope, index, valueIdentifier, value, keyIdentifier, key, arrayLength) {
          scope[valueIdentifier] = value;
          if (keyIdentifier)
            scope[keyIdentifier] = key;
          scope.$index = index;
          scope.$first = (index === 0);
          scope.$last = (index === (arrayLength - 1));
          scope.$middle = !(scope.$first || scope.$last);
          scope.$odd = !(scope.$even = (index & 1) === 0);
        };
        var getBlockStart = function(block) {
          return block.clone[0];
        };
        var getBlockEnd = function(block) {
          return block.clone[block.clone.length - 1];
        };
        return {
          restrict: 'A',
          multiElement: true,
          transclude: 'element',
          priority: 1000,
          terminal: true,
          $$tlb: true,
          compile: function ngRepeatCompile($element, $attr) {
            var expression = $attr.ngRepeat;
            var ngRepeatEndComment = $compile.$$createComment('end ngRepeat', expression);
            var match = expression.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
            if (!match) {
              throw ngRepeatMinErr('iexp', "Expected expression in form of '_item_ in _collection_[ track by _id_]' but got '{0}'.", expression);
            }
            var lhs = match[1];
            var rhs = match[2];
            var aliasAs = match[3];
            var trackByExp = match[4];
            match = lhs.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/);
            if (!match) {
              throw ngRepeatMinErr('iidexp', "'_item_' in '_item_ in _collection_' should be an identifier or '(_key_, _value_)' expression, but got '{0}'.", lhs);
            }
            var valueIdentifier = match[3] || match[1];
            var keyIdentifier = match[2];
            if (aliasAs && (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(aliasAs) || /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(aliasAs))) {
              throw ngRepeatMinErr('badident', "alias '{0}' is invalid --- must be a valid JS identifier which is not a reserved name.", aliasAs);
            }
            var trackByExpGetter,
                trackByIdExpFn,
                trackByIdArrayFn,
                trackByIdObjFn;
            var hashFnLocals = {$id: hashKey};
            if (trackByExp) {
              trackByExpGetter = $parse(trackByExp);
            } else {
              trackByIdArrayFn = function(key, value) {
                return hashKey(value);
              };
              trackByIdObjFn = function(key) {
                return key;
              };
            }
            return function ngRepeatLink($scope, $element, $attr, ctrl, $transclude) {
              if (trackByExpGetter) {
                trackByIdExpFn = function(key, value, index) {
                  if (keyIdentifier)
                    hashFnLocals[keyIdentifier] = key;
                  hashFnLocals[valueIdentifier] = value;
                  hashFnLocals.$index = index;
                  return trackByExpGetter($scope, hashFnLocals);
                };
              }
              var lastBlockMap = createMap();
              $scope.$watchCollection(rhs, function ngRepeatAction(collection) {
                var index,
                    length,
                    previousNode = $element[0],
                    nextNode,
                    nextBlockMap = createMap(),
                    collectionLength,
                    key,
                    value,
                    trackById,
                    trackByIdFn,
                    collectionKeys,
                    block,
                    nextBlockOrder,
                    elementsToRemove;
                if (aliasAs) {
                  $scope[aliasAs] = collection;
                }
                if (isArrayLike(collection)) {
                  collectionKeys = collection;
                  trackByIdFn = trackByIdExpFn || trackByIdArrayFn;
                } else {
                  trackByIdFn = trackByIdExpFn || trackByIdObjFn;
                  collectionKeys = [];
                  for (var itemKey in collection) {
                    if (hasOwnProperty.call(collection, itemKey) && itemKey.charAt(0) !== '$') {
                      collectionKeys.push(itemKey);
                    }
                  }
                }
                collectionLength = collectionKeys.length;
                nextBlockOrder = new Array(collectionLength);
                for (index = 0; index < collectionLength; index++) {
                  key = (collection === collectionKeys) ? index : collectionKeys[index];
                  value = collection[key];
                  trackById = trackByIdFn(key, value, index);
                  if (lastBlockMap[trackById]) {
                    block = lastBlockMap[trackById];
                    delete lastBlockMap[trackById];
                    nextBlockMap[trackById] = block;
                    nextBlockOrder[index] = block;
                  } else if (nextBlockMap[trackById]) {
                    forEach(nextBlockOrder, function(block) {
                      if (block && block.scope)
                        lastBlockMap[block.id] = block;
                    });
                    throw ngRepeatMinErr('dupes', "Duplicates in a repeater are not allowed. Use 'track by' expression to specify unique keys. Repeater: {0}, Duplicate key: {1}, Duplicate value: {2}", expression, trackById, value);
                  } else {
                    nextBlockOrder[index] = {
                      id: trackById,
                      scope: undefined,
                      clone: undefined
                    };
                    nextBlockMap[trackById] = true;
                  }
                }
                for (var blockKey in lastBlockMap) {
                  block = lastBlockMap[blockKey];
                  elementsToRemove = getBlockNodes(block.clone);
                  $animate.leave(elementsToRemove);
                  if (elementsToRemove[0].parentNode) {
                    for (index = 0, length = elementsToRemove.length; index < length; index++) {
                      elementsToRemove[index][NG_REMOVED] = true;
                    }
                  }
                  block.scope.$destroy();
                }
                for (index = 0; index < collectionLength; index++) {
                  key = (collection === collectionKeys) ? index : collectionKeys[index];
                  value = collection[key];
                  block = nextBlockOrder[index];
                  if (block.scope) {
                    nextNode = previousNode;
                    do {
                      nextNode = nextNode.nextSibling;
                    } while (nextNode && nextNode[NG_REMOVED]);
                    if (getBlockStart(block) != nextNode) {
                      $animate.move(getBlockNodes(block.clone), null, previousNode);
                    }
                    previousNode = getBlockEnd(block);
                    updateScope(block.scope, index, valueIdentifier, value, keyIdentifier, key, collectionLength);
                  } else {
                    $transclude(function ngRepeatTransclude(clone, scope) {
                      block.scope = scope;
                      var endNode = ngRepeatEndComment.cloneNode(false);
                      clone[clone.length++] = endNode;
                      $animate.enter(clone, null, previousNode);
                      previousNode = endNode;
                      block.clone = clone;
                      nextBlockMap[block.id] = block;
                      updateScope(block.scope, index, valueIdentifier, value, keyIdentifier, key, collectionLength);
                    });
                  }
                }
                lastBlockMap = nextBlockMap;
              });
            };
          }
        };
      }];
      var NG_HIDE_CLASS = 'ng-hide';
      var NG_HIDE_IN_PROGRESS_CLASS = 'ng-hide-animate';
      var ngShowDirective = ['$animate', function($animate) {
        return {
          restrict: 'A',
          multiElement: true,
          link: function(scope, element, attr) {
            scope.$watch(attr.ngShow, function ngShowWatchAction(value) {
              $animate[value ? 'removeClass' : 'addClass'](element, NG_HIDE_CLASS, {tempClasses: NG_HIDE_IN_PROGRESS_CLASS});
            });
          }
        };
      }];
      var ngHideDirective = ['$animate', function($animate) {
        return {
          restrict: 'A',
          multiElement: true,
          link: function(scope, element, attr) {
            scope.$watch(attr.ngHide, function ngHideWatchAction(value) {
              $animate[value ? 'addClass' : 'removeClass'](element, NG_HIDE_CLASS, {tempClasses: NG_HIDE_IN_PROGRESS_CLASS});
            });
          }
        };
      }];
      var ngStyleDirective = ngDirective(function(scope, element, attr) {
        scope.$watch(attr.ngStyle, function ngStyleWatchAction(newStyles, oldStyles) {
          if (oldStyles && (newStyles !== oldStyles)) {
            forEach(oldStyles, function(val, style) {
              element.css(style, '');
            });
          }
          if (newStyles)
            element.css(newStyles);
        }, true);
      });
      var ngSwitchDirective = ['$animate', '$compile', function($animate, $compile) {
        return {
          require: 'ngSwitch',
          controller: ['$scope', function ngSwitchController() {
            this.cases = {};
          }],
          link: function(scope, element, attr, ngSwitchController) {
            var watchExpr = attr.ngSwitch || attr.on,
                selectedTranscludes = [],
                selectedElements = [],
                previousLeaveAnimations = [],
                selectedScopes = [];
            var spliceFactory = function(array, index) {
              return function() {
                array.splice(index, 1);
              };
            };
            scope.$watch(watchExpr, function ngSwitchWatchAction(value) {
              var i,
                  ii;
              for (i = 0, ii = previousLeaveAnimations.length; i < ii; ++i) {
                $animate.cancel(previousLeaveAnimations[i]);
              }
              previousLeaveAnimations.length = 0;
              for (i = 0, ii = selectedScopes.length; i < ii; ++i) {
                var selected = getBlockNodes(selectedElements[i].clone);
                selectedScopes[i].$destroy();
                var promise = previousLeaveAnimations[i] = $animate.leave(selected);
                promise.then(spliceFactory(previousLeaveAnimations, i));
              }
              selectedElements.length = 0;
              selectedScopes.length = 0;
              if ((selectedTranscludes = ngSwitchController.cases['!' + value] || ngSwitchController.cases['?'])) {
                forEach(selectedTranscludes, function(selectedTransclude) {
                  selectedTransclude.transclude(function(caseElement, selectedScope) {
                    selectedScopes.push(selectedScope);
                    var anchor = selectedTransclude.element;
                    caseElement[caseElement.length++] = $compile.$$createComment('end ngSwitchWhen');
                    var block = {clone: caseElement};
                    selectedElements.push(block);
                    $animate.enter(caseElement, anchor.parent(), anchor);
                  });
                });
              }
            });
          }
        };
      }];
      var ngSwitchWhenDirective = ngDirective({
        transclude: 'element',
        priority: 1200,
        require: '^ngSwitch',
        multiElement: true,
        link: function(scope, element, attrs, ctrl, $transclude) {
          ctrl.cases['!' + attrs.ngSwitchWhen] = (ctrl.cases['!' + attrs.ngSwitchWhen] || []);
          ctrl.cases['!' + attrs.ngSwitchWhen].push({
            transclude: $transclude,
            element: element
          });
        }
      });
      var ngSwitchDefaultDirective = ngDirective({
        transclude: 'element',
        priority: 1200,
        require: '^ngSwitch',
        multiElement: true,
        link: function(scope, element, attr, ctrl, $transclude) {
          ctrl.cases['?'] = (ctrl.cases['?'] || []);
          ctrl.cases['?'].push({
            transclude: $transclude,
            element: element
          });
        }
      });
      var ngTranscludeMinErr = minErr('ngTransclude');
      var ngTranscludeDirective = ngDirective({
        restrict: 'EAC',
        link: function($scope, $element, $attrs, controller, $transclude) {
          if ($attrs.ngTransclude === $attrs.$attr.ngTransclude) {
            $attrs.ngTransclude = '';
          }
          function ngTranscludeCloneAttachFn(clone) {
            if (clone.length) {
              $element.empty();
              $element.append(clone);
            }
          }
          if (!$transclude) {
            throw ngTranscludeMinErr('orphan', 'Illegal use of ngTransclude directive in the template! ' + 'No parent directive that requires a transclusion found. ' + 'Element: {0}', startingTag($element));
          }
          var slotName = $attrs.ngTransclude || $attrs.ngTranscludeSlot;
          $transclude(ngTranscludeCloneAttachFn, null, slotName);
        }
      });
      var scriptDirective = ['$templateCache', function($templateCache) {
        return {
          restrict: 'E',
          terminal: true,
          compile: function(element, attr) {
            if (attr.type == 'text/ng-template') {
              var templateUrl = attr.id,
                  text = element[0].text;
              $templateCache.put(templateUrl, text);
            }
          }
        };
      }];
      var noopNgModelController = {
        $setViewValue: noop,
        $render: noop
      };
      function chromeHack(optionElement) {
        if (optionElement[0].hasAttribute('selected')) {
          optionElement[0].selected = true;
        }
      }
      var SelectController = ['$element', '$scope', function($element, $scope) {
        var self = this,
            optionsMap = new HashMap();
        self.ngModelCtrl = noopNgModelController;
        self.unknownOption = jqLite(window.document.createElement('option'));
        self.renderUnknownOption = function(val) {
          var unknownVal = '? ' + hashKey(val) + ' ?';
          self.unknownOption.val(unknownVal);
          $element.prepend(self.unknownOption);
          $element.val(unknownVal);
        };
        $scope.$on('$destroy', function() {
          self.renderUnknownOption = noop;
        });
        self.removeUnknownOption = function() {
          if (self.unknownOption.parent())
            self.unknownOption.remove();
        };
        self.readValue = function readSingleValue() {
          self.removeUnknownOption();
          return $element.val();
        };
        self.writeValue = function writeSingleValue(value) {
          if (self.hasOption(value)) {
            self.removeUnknownOption();
            $element.val(value);
            if (value === '')
              self.emptyOption.prop('selected', true);
          } else {
            if (value == null && self.emptyOption) {
              self.removeUnknownOption();
              $element.val('');
            } else {
              self.renderUnknownOption(value);
            }
          }
        };
        self.addOption = function(value, element) {
          if (element[0].nodeType === NODE_TYPE_COMMENT)
            return;
          assertNotHasOwnProperty(value, '"option value"');
          if (value === '') {
            self.emptyOption = element;
          }
          var count = optionsMap.get(value) || 0;
          optionsMap.put(value, count + 1);
          self.ngModelCtrl.$render();
          chromeHack(element);
        };
        self.removeOption = function(value) {
          var count = optionsMap.get(value);
          if (count) {
            if (count === 1) {
              optionsMap.remove(value);
              if (value === '') {
                self.emptyOption = undefined;
              }
            } else {
              optionsMap.put(value, count - 1);
            }
          }
        };
        self.hasOption = function(value) {
          return !!optionsMap.get(value);
        };
        self.registerOption = function(optionScope, optionElement, optionAttrs, interpolateValueFn, interpolateTextFn) {
          if (interpolateValueFn) {
            var oldVal;
            optionAttrs.$observe('value', function valueAttributeObserveAction(newVal) {
              if (isDefined(oldVal)) {
                self.removeOption(oldVal);
              }
              oldVal = newVal;
              self.addOption(newVal, optionElement);
            });
          } else if (interpolateTextFn) {
            optionScope.$watch(interpolateTextFn, function interpolateWatchAction(newVal, oldVal) {
              optionAttrs.$set('value', newVal);
              if (oldVal !== newVal) {
                self.removeOption(oldVal);
              }
              self.addOption(newVal, optionElement);
            });
          } else {
            self.addOption(optionAttrs.value, optionElement);
          }
          optionElement.on('$destroy', function() {
            self.removeOption(optionAttrs.value);
            self.ngModelCtrl.$render();
          });
        };
      }];
      var selectDirective = function() {
        return {
          restrict: 'E',
          require: ['select', '?ngModel'],
          controller: SelectController,
          priority: 1,
          link: {
            pre: selectPreLink,
            post: selectPostLink
          }
        };
        function selectPreLink(scope, element, attr, ctrls) {
          var ngModelCtrl = ctrls[1];
          if (!ngModelCtrl)
            return;
          var selectCtrl = ctrls[0];
          selectCtrl.ngModelCtrl = ngModelCtrl;
          element.on('change', function() {
            scope.$apply(function() {
              ngModelCtrl.$setViewValue(selectCtrl.readValue());
            });
          });
          if (attr.multiple) {
            selectCtrl.readValue = function readMultipleValue() {
              var array = [];
              forEach(element.find('option'), function(option) {
                if (option.selected) {
                  array.push(option.value);
                }
              });
              return array;
            };
            selectCtrl.writeValue = function writeMultipleValue(value) {
              var items = new HashMap(value);
              forEach(element.find('option'), function(option) {
                option.selected = isDefined(items.get(option.value));
              });
            };
            var lastView,
                lastViewRef = NaN;
            scope.$watch(function selectMultipleWatch() {
              if (lastViewRef === ngModelCtrl.$viewValue && !equals(lastView, ngModelCtrl.$viewValue)) {
                lastView = shallowCopy(ngModelCtrl.$viewValue);
                ngModelCtrl.$render();
              }
              lastViewRef = ngModelCtrl.$viewValue;
            });
            ngModelCtrl.$isEmpty = function(value) {
              return !value || value.length === 0;
            };
          }
        }
        function selectPostLink(scope, element, attrs, ctrls) {
          var ngModelCtrl = ctrls[1];
          if (!ngModelCtrl)
            return;
          var selectCtrl = ctrls[0];
          ngModelCtrl.$render = function() {
            selectCtrl.writeValue(ngModelCtrl.$viewValue);
          };
        }
      };
      var optionDirective = ['$interpolate', function($interpolate) {
        return {
          restrict: 'E',
          priority: 100,
          compile: function(element, attr) {
            if (isDefined(attr.value)) {
              var interpolateValueFn = $interpolate(attr.value, true);
            } else {
              var interpolateTextFn = $interpolate(element.text(), true);
              if (!interpolateTextFn) {
                attr.$set('value', element.text());
              }
            }
            return function(scope, element, attr) {
              var selectCtrlName = '$selectController',
                  parent = element.parent(),
                  selectCtrl = parent.data(selectCtrlName) || parent.parent().data(selectCtrlName);
              if (selectCtrl) {
                selectCtrl.registerOption(scope, element, attr, interpolateValueFn, interpolateTextFn);
              }
            };
          }
        };
      }];
      var styleDirective = valueFn({
        restrict: 'E',
        terminal: false
      });
      var requiredDirective = function() {
        return {
          restrict: 'A',
          require: '?ngModel',
          link: function(scope, elm, attr, ctrl) {
            if (!ctrl)
              return;
            attr.required = true;
            ctrl.$validators.required = function(modelValue, viewValue) {
              return !attr.required || !ctrl.$isEmpty(viewValue);
            };
            attr.$observe('required', function() {
              ctrl.$validate();
            });
          }
        };
      };
      var patternDirective = function() {
        return {
          restrict: 'A',
          require: '?ngModel',
          link: function(scope, elm, attr, ctrl) {
            if (!ctrl)
              return;
            var regexp,
                patternExp = attr.ngPattern || attr.pattern;
            attr.$observe('pattern', function(regex) {
              if (isString(regex) && regex.length > 0) {
                regex = new RegExp('^' + regex + '$');
              }
              if (regex && !regex.test) {
                throw minErr('ngPattern')('noregexp', 'Expected {0} to be a RegExp but was {1}. Element: {2}', patternExp, regex, startingTag(elm));
              }
              regexp = regex || undefined;
              ctrl.$validate();
            });
            ctrl.$validators.pattern = function(modelValue, viewValue) {
              return ctrl.$isEmpty(viewValue) || isUndefined(regexp) || regexp.test(viewValue);
            };
          }
        };
      };
      var maxlengthDirective = function() {
        return {
          restrict: 'A',
          require: '?ngModel',
          link: function(scope, elm, attr, ctrl) {
            if (!ctrl)
              return;
            var maxlength = -1;
            attr.$observe('maxlength', function(value) {
              var intVal = toInt(value);
              maxlength = isNaN(intVal) ? -1 : intVal;
              ctrl.$validate();
            });
            ctrl.$validators.maxlength = function(modelValue, viewValue) {
              return (maxlength < 0) || ctrl.$isEmpty(viewValue) || (viewValue.length <= maxlength);
            };
          }
        };
      };
      var minlengthDirective = function() {
        return {
          restrict: 'A',
          require: '?ngModel',
          link: function(scope, elm, attr, ctrl) {
            if (!ctrl)
              return;
            var minlength = 0;
            attr.$observe('minlength', function(value) {
              minlength = toInt(value) || 0;
              ctrl.$validate();
            });
            ctrl.$validators.minlength = function(modelValue, viewValue) {
              return ctrl.$isEmpty(viewValue) || viewValue.length >= minlength;
            };
          }
        };
      };
      if (window.angular.bootstrap) {
        if (window.console) {
          console.log('WARNING: Tried to load angular more than once.');
        }
        return;
      }
      bindJQuery();
      publishExternalAPI(angular);
      angular.module("ngLocale", [], ["$provide", function($provide) {
        var PLURAL_CATEGORY = {
          ZERO: "zero",
          ONE: "one",
          TWO: "two",
          FEW: "few",
          MANY: "many",
          OTHER: "other"
        };
        function getDecimals(n) {
          n = n + '';
          var i = n.indexOf('.');
          return (i == -1) ? 0 : n.length - i - 1;
        }
        function getVF(n, opt_precision) {
          var v = opt_precision;
          if (undefined === v) {
            v = Math.min(getDecimals(n), 3);
          }
          var base = Math.pow(10, v);
          var f = ((n * base) | 0) % base;
          return {
            v: v,
            f: f
          };
        }
        $provide.value("$locale", {
          "DATETIME_FORMATS": {
            "AMPMS": ["AM", "PM"],
            "DAY": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "ERANAMES": ["Before Christ", "Anno Domini"],
            "ERAS": ["BC", "AD"],
            "FIRSTDAYOFWEEK": 6,
            "MONTH": ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            "SHORTDAY": ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            "SHORTMONTH": ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            "STANDALONEMONTH": ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            "WEEKENDRANGE": [5, 6],
            "fullDate": "EEEE, MMMM d, y",
            "longDate": "MMMM d, y",
            "medium": "MMM d, y h:mm:ss a",
            "mediumDate": "MMM d, y",
            "mediumTime": "h:mm:ss a",
            "short": "M/d/yy h:mm a",
            "shortDate": "M/d/yy",
            "shortTime": "h:mm a"
          },
          "NUMBER_FORMATS": {
            "CURRENCY_SYM": "$",
            "DECIMAL_SEP": ".",
            "GROUP_SEP": ",",
            "PATTERNS": [{
              "gSize": 3,
              "lgSize": 3,
              "maxFrac": 3,
              "minFrac": 0,
              "minInt": 1,
              "negPre": "-",
              "negSuf": "",
              "posPre": "",
              "posSuf": ""
            }, {
              "gSize": 3,
              "lgSize": 3,
              "maxFrac": 2,
              "minFrac": 2,
              "minInt": 1,
              "negPre": "-\u00a4",
              "negSuf": "",
              "posPre": "\u00a4",
              "posSuf": ""
            }]
          },
          "id": "en-us",
          "localeID": "en_US",
          "pluralCat": function(n, opt_precision) {
            var i = n | 0;
            var vf = getVF(n, opt_precision);
            if (i == 1 && vf.v == 0) {
              return PLURAL_CATEGORY.ONE;
            }
            return PLURAL_CATEGORY.OTHER;
          }
        });
      }]);
      jqLite(window.document).ready(function() {
        angularInit(window.document, bootstrap);
      });
    })(window);
    !window.angular.$$csp().noInlineStyle && window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>');
  })();
  return _retrieveGlobal();
});

$__System.registerDynamic("3", ["2"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('2');
  return module.exports;
});

$__System.registerDynamic("4", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
  if (typeof __g == 'number')
    __g = global;
  return module.exports;
});

$__System.registerDynamic("5", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = function(it) {
    if (typeof it != 'function')
      throw TypeError(it + ' is not a function!');
    return it;
  };
  return module.exports;
});

$__System.registerDynamic("6", ["5"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var aFunction = $__require('5');
  module.exports = function(fn, that, length) {
    aFunction(fn);
    if (that === undefined)
      return fn;
    switch (length) {
      case 1:
        return function(a) {
          return fn.call(that, a);
        };
      case 2:
        return function(a, b) {
          return fn.call(that, a, b);
        };
      case 3:
        return function(a, b, c) {
          return fn.call(that, a, b, c);
        };
    }
    return function() {
      return fn.apply(that, arguments);
    };
  };
  return module.exports;
});

$__System.registerDynamic("7", ["4", "8", "6"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var global = $__require('4'),
      core = $__require('8'),
      ctx = $__require('6'),
      PROTOTYPE = 'prototype';
  var $export = function(type, name, source) {
    var IS_FORCED = type & $export.F,
        IS_GLOBAL = type & $export.G,
        IS_STATIC = type & $export.S,
        IS_PROTO = type & $export.P,
        IS_BIND = type & $export.B,
        IS_WRAP = type & $export.W,
        exports = IS_GLOBAL ? core : core[name] || (core[name] = {}),
        target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE],
        key,
        own,
        out;
    if (IS_GLOBAL)
      source = name;
    for (key in source) {
      own = !IS_FORCED && target && key in target;
      if (own && key in exports)
        continue;
      out = own ? target[key] : source[key];
      exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key] : IS_BIND && own ? ctx(out, global) : IS_WRAP && target[key] == out ? (function(C) {
        var F = function(param) {
          return this instanceof C ? new C(param) : C(param);
        };
        F[PROTOTYPE] = C[PROTOTYPE];
        return F;
      })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
      if (IS_PROTO)
        (exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
    }
  };
  $export.F = 1;
  $export.G = 2;
  $export.S = 4;
  $export.P = 8;
  $export.B = 16;
  $export.W = 32;
  module.exports = $export;
  return module.exports;
});

$__System.registerDynamic("9", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = function(it) {
    if (it == undefined)
      throw TypeError("Can't call method on  " + it);
    return it;
  };
  return module.exports;
});

$__System.registerDynamic("a", ["9"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var defined = $__require('9');
  module.exports = function(it) {
    return Object(defined(it));
  };
  return module.exports;
});

$__System.registerDynamic("b", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var toString = {}.toString;
  module.exports = function(it) {
    return toString.call(it).slice(8, -1);
  };
  return module.exports;
});

$__System.registerDynamic("c", ["b"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var cof = $__require('b');
  module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it) {
    return cof(it) == 'String' ? it.split('') : Object(it);
  };
  return module.exports;
});

$__System.registerDynamic("d", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = function(exec) {
    try {
      return !!exec();
    } catch (e) {
      return true;
    }
  };
  return module.exports;
});

$__System.registerDynamic("e", ["f", "a", "c", "d"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var $ = $__require('f'),
      toObject = $__require('a'),
      IObject = $__require('c');
  module.exports = $__require('d')(function() {
    var a = Object.assign,
        A = {},
        B = {},
        S = Symbol(),
        K = 'abcdefghijklmnopqrst';
    A[S] = 7;
    K.split('').forEach(function(k) {
      B[k] = k;
    });
    return a({}, A)[S] != 7 || Object.keys(a({}, B)).join('') != K;
  }) ? function assign(target, source) {
    var T = toObject(target),
        $$ = arguments,
        $$len = $$.length,
        index = 1,
        getKeys = $.getKeys,
        getSymbols = $.getSymbols,
        isEnum = $.isEnum;
    while ($$len > index) {
      var S = IObject($$[index++]),
          keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S),
          length = keys.length,
          j = 0,
          key;
      while (length > j)
        if (isEnum.call(S, key = keys[j++]))
          T[key] = S[key];
    }
    return T;
  } : Object.assign;
  return module.exports;
});

$__System.registerDynamic("10", ["7", "e"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var $export = $__require('7');
  $export($export.S + $export.F, 'Object', {assign: $__require('e')});
  return module.exports;
});

$__System.registerDynamic("8", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var core = module.exports = {version: '1.2.6'};
  if (typeof __e == 'number')
    __e = core;
  return module.exports;
});

$__System.registerDynamic("11", ["10", "8"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  $__require('10');
  module.exports = $__require('8').Object.assign;
  return module.exports;
});

$__System.registerDynamic("12", ["11"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = {
    "default": $__require('11'),
    __esModule: true
  };
  return module.exports;
});

$__System.registerDynamic("13", ["@empty"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  "format cjs";
  (function(Buffer, process) {
    ;
    (function() {
      var undefined;
      var VERSION = '4.13.1';
      var LARGE_ARRAY_SIZE = 200;
      var FUNC_ERROR_TEXT = 'Expected a function';
      var HASH_UNDEFINED = '__lodash_hash_undefined__';
      var PLACEHOLDER = '__lodash_placeholder__';
      var BIND_FLAG = 1,
          BIND_KEY_FLAG = 2,
          CURRY_BOUND_FLAG = 4,
          CURRY_FLAG = 8,
          CURRY_RIGHT_FLAG = 16,
          PARTIAL_FLAG = 32,
          PARTIAL_RIGHT_FLAG = 64,
          ARY_FLAG = 128,
          REARG_FLAG = 256,
          FLIP_FLAG = 512;
      var UNORDERED_COMPARE_FLAG = 1,
          PARTIAL_COMPARE_FLAG = 2;
      var DEFAULT_TRUNC_LENGTH = 30,
          DEFAULT_TRUNC_OMISSION = '...';
      var HOT_COUNT = 150,
          HOT_SPAN = 16;
      var LAZY_FILTER_FLAG = 1,
          LAZY_MAP_FLAG = 2,
          LAZY_WHILE_FLAG = 3;
      var INFINITY = 1 / 0,
          MAX_SAFE_INTEGER = 9007199254740991,
          MAX_INTEGER = 1.7976931348623157e+308,
          NAN = 0 / 0;
      var MAX_ARRAY_LENGTH = 4294967295,
          MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1,
          HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;
      var argsTag = '[object Arguments]',
          arrayTag = '[object Array]',
          boolTag = '[object Boolean]',
          dateTag = '[object Date]',
          errorTag = '[object Error]',
          funcTag = '[object Function]',
          genTag = '[object GeneratorFunction]',
          mapTag = '[object Map]',
          numberTag = '[object Number]',
          objectTag = '[object Object]',
          promiseTag = '[object Promise]',
          regexpTag = '[object RegExp]',
          setTag = '[object Set]',
          stringTag = '[object String]',
          symbolTag = '[object Symbol]',
          weakMapTag = '[object WeakMap]',
          weakSetTag = '[object WeakSet]';
      var arrayBufferTag = '[object ArrayBuffer]',
          dataViewTag = '[object DataView]',
          float32Tag = '[object Float32Array]',
          float64Tag = '[object Float64Array]',
          int8Tag = '[object Int8Array]',
          int16Tag = '[object Int16Array]',
          int32Tag = '[object Int32Array]',
          uint8Tag = '[object Uint8Array]',
          uint8ClampedTag = '[object Uint8ClampedArray]',
          uint16Tag = '[object Uint16Array]',
          uint32Tag = '[object Uint32Array]';
      var reEmptyStringLeading = /\b__p \+= '';/g,
          reEmptyStringMiddle = /\b(__p \+=) '' \+/g,
          reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;
      var reEscapedHtml = /&(?:amp|lt|gt|quot|#39|#96);/g,
          reUnescapedHtml = /[&<>"'`]/g,
          reHasEscapedHtml = RegExp(reEscapedHtml.source),
          reHasUnescapedHtml = RegExp(reUnescapedHtml.source);
      var reEscape = /<%-([\s\S]+?)%>/g,
          reEvaluate = /<%([\s\S]+?)%>/g,
          reInterpolate = /<%=([\s\S]+?)%>/g;
      var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
          reIsPlainProp = /^\w*$/,
          rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(\.|\[\])(?:\4|$))/g;
      var reRegExpChar = /[\\^$.*+?()[\]{}|]/g,
          reHasRegExpChar = RegExp(reRegExpChar.source);
      var reTrim = /^\s+|\s+$/g,
          reTrimStart = /^\s+/,
          reTrimEnd = /\s+$/;
      var reBasicWord = /[a-zA-Z0-9]+/g;
      var reEscapeChar = /\\(\\)?/g;
      var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;
      var reFlags = /\w*$/;
      var reHasHexPrefix = /^0x/i;
      var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
      var reIsBinary = /^0b[01]+$/i;
      var reIsHostCtor = /^\[object .+?Constructor\]$/;
      var reIsOctal = /^0o[0-7]+$/i;
      var reIsUint = /^(?:0|[1-9]\d*)$/;
      var reLatin1 = /[\xc0-\xd6\xd8-\xde\xdf-\xf6\xf8-\xff]/g;
      var reNoMatch = /($^)/;
      var reUnescapedString = /['\n\r\u2028\u2029\\]/g;
      var rsAstralRange = '\\ud800-\\udfff',
          rsComboMarksRange = '\\u0300-\\u036f\\ufe20-\\ufe23',
          rsComboSymbolsRange = '\\u20d0-\\u20f0',
          rsDingbatRange = '\\u2700-\\u27bf',
          rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff',
          rsMathOpRange = '\\xac\\xb1\\xd7\\xf7',
          rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
          rsPunctuationRange = '\\u2000-\\u206f',
          rsSpaceRange = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
          rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
          rsVarRange = '\\ufe0e\\ufe0f',
          rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;
      var rsApos = "['\u2019]",
          rsAstral = '[' + rsAstralRange + ']',
          rsBreak = '[' + rsBreakRange + ']',
          rsCombo = '[' + rsComboMarksRange + rsComboSymbolsRange + ']',
          rsDigits = '\\d+',
          rsDingbat = '[' + rsDingbatRange + ']',
          rsLower = '[' + rsLowerRange + ']',
          rsMisc = '[^' + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']',
          rsFitz = '\\ud83c[\\udffb-\\udfff]',
          rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
          rsNonAstral = '[^' + rsAstralRange + ']',
          rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
          rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
          rsUpper = '[' + rsUpperRange + ']',
          rsZWJ = '\\u200d';
      var rsLowerMisc = '(?:' + rsLower + '|' + rsMisc + ')',
          rsUpperMisc = '(?:' + rsUpper + '|' + rsMisc + ')',
          rsOptLowerContr = '(?:' + rsApos + '(?:d|ll|m|re|s|t|ve))?',
          rsOptUpperContr = '(?:' + rsApos + '(?:D|LL|M|RE|S|T|VE))?',
          reOptMod = rsModifier + '?',
          rsOptVar = '[' + rsVarRange + ']?',
          rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
          rsSeq = rsOptVar + reOptMod + rsOptJoin,
          rsEmoji = '(?:' + [rsDingbat, rsRegional, rsSurrPair].join('|') + ')' + rsSeq,
          rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';
      var reApos = RegExp(rsApos, 'g');
      var reComboMark = RegExp(rsCombo, 'g');
      var reComplexSymbol = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');
      var reComplexWord = RegExp([rsUpper + '?' + rsLower + '+' + rsOptLowerContr + '(?=' + [rsBreak, rsUpper, '$'].join('|') + ')', rsUpperMisc + '+' + rsOptUpperContr + '(?=' + [rsBreak, rsUpper + rsLowerMisc, '$'].join('|') + ')', rsUpper + '?' + rsLowerMisc + '+' + rsOptLowerContr, rsUpper + '+' + rsOptUpperContr, rsDigits, rsEmoji].join('|'), 'g');
      var reHasComplexSymbol = RegExp('[' + rsZWJ + rsAstralRange + rsComboMarksRange + rsComboSymbolsRange + rsVarRange + ']');
      var reHasComplexWord = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
      var contextProps = ['Array', 'Buffer', 'DataView', 'Date', 'Error', 'Float32Array', 'Float64Array', 'Function', 'Int8Array', 'Int16Array', 'Int32Array', 'Map', 'Math', 'Object', 'Promise', 'Reflect', 'RegExp', 'Set', 'String', 'Symbol', 'TypeError', 'Uint8Array', 'Uint8ClampedArray', 'Uint16Array', 'Uint32Array', 'WeakMap', '_', 'isFinite', 'parseInt', 'setTimeout'];
      var templateCounter = -1;
      var typedArrayTags = {};
      typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
      typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
      var cloneableTags = {};
      cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
      cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
      var deburredLetters = {
        '\xc0': 'A',
        '\xc1': 'A',
        '\xc2': 'A',
        '\xc3': 'A',
        '\xc4': 'A',
        '\xc5': 'A',
        '\xe0': 'a',
        '\xe1': 'a',
        '\xe2': 'a',
        '\xe3': 'a',
        '\xe4': 'a',
        '\xe5': 'a',
        '\xc7': 'C',
        '\xe7': 'c',
        '\xd0': 'D',
        '\xf0': 'd',
        '\xc8': 'E',
        '\xc9': 'E',
        '\xca': 'E',
        '\xcb': 'E',
        '\xe8': 'e',
        '\xe9': 'e',
        '\xea': 'e',
        '\xeb': 'e',
        '\xcC': 'I',
        '\xcd': 'I',
        '\xce': 'I',
        '\xcf': 'I',
        '\xeC': 'i',
        '\xed': 'i',
        '\xee': 'i',
        '\xef': 'i',
        '\xd1': 'N',
        '\xf1': 'n',
        '\xd2': 'O',
        '\xd3': 'O',
        '\xd4': 'O',
        '\xd5': 'O',
        '\xd6': 'O',
        '\xd8': 'O',
        '\xf2': 'o',
        '\xf3': 'o',
        '\xf4': 'o',
        '\xf5': 'o',
        '\xf6': 'o',
        '\xf8': 'o',
        '\xd9': 'U',
        '\xda': 'U',
        '\xdb': 'U',
        '\xdc': 'U',
        '\xf9': 'u',
        '\xfa': 'u',
        '\xfb': 'u',
        '\xfc': 'u',
        '\xdd': 'Y',
        '\xfd': 'y',
        '\xff': 'y',
        '\xc6': 'Ae',
        '\xe6': 'ae',
        '\xde': 'Th',
        '\xfe': 'th',
        '\xdf': 'ss'
      };
      var htmlEscapes = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
        '`': '&#96;'
      };
      var htmlUnescapes = {
        '&amp;': '&',
        '&lt;': '<',
        '&gt;': '>',
        '&quot;': '"',
        '&#39;': "'",
        '&#96;': '`'
      };
      var stringEscapes = {
        '\\': '\\',
        "'": "'",
        '\n': 'n',
        '\r': 'r',
        '\u2028': 'u2028',
        '\u2029': 'u2029'
      };
      var freeParseFloat = parseFloat,
          freeParseInt = parseInt;
      var freeExports = typeof exports == 'object' && exports;
      var freeModule = freeExports && typeof module == 'object' && module;
      var moduleExports = freeModule && freeModule.exports === freeExports;
      var freeGlobal = checkGlobal(typeof global == 'object' && global);
      var freeSelf = checkGlobal(typeof self == 'object' && self);
      var thisGlobal = checkGlobal(typeof this == 'object' && this);
      var root = freeGlobal || freeSelf || thisGlobal || Function('return this')();
      function addMapEntry(map, pair) {
        map.set(pair[0], pair[1]);
        return map;
      }
      function addSetEntry(set, value) {
        set.add(value);
        return set;
      }
      function apply(func, thisArg, args) {
        var length = args.length;
        switch (length) {
          case 0:
            return func.call(thisArg);
          case 1:
            return func.call(thisArg, args[0]);
          case 2:
            return func.call(thisArg, args[0], args[1]);
          case 3:
            return func.call(thisArg, args[0], args[1], args[2]);
        }
        return func.apply(thisArg, args);
      }
      function arrayAggregator(array, setter, iteratee, accumulator) {
        var index = -1,
            length = array ? array.length : 0;
        while (++index < length) {
          var value = array[index];
          setter(accumulator, value, iteratee(value), array);
        }
        return accumulator;
      }
      function arrayEach(array, iteratee) {
        var index = -1,
            length = array ? array.length : 0;
        while (++index < length) {
          if (iteratee(array[index], index, array) === false) {
            break;
          }
        }
        return array;
      }
      function arrayEachRight(array, iteratee) {
        var length = array ? array.length : 0;
        while (length--) {
          if (iteratee(array[length], length, array) === false) {
            break;
          }
        }
        return array;
      }
      function arrayEvery(array, predicate) {
        var index = -1,
            length = array ? array.length : 0;
        while (++index < length) {
          if (!predicate(array[index], index, array)) {
            return false;
          }
        }
        return true;
      }
      function arrayFilter(array, predicate) {
        var index = -1,
            length = array ? array.length : 0,
            resIndex = 0,
            result = [];
        while (++index < length) {
          var value = array[index];
          if (predicate(value, index, array)) {
            result[resIndex++] = value;
          }
        }
        return result;
      }
      function arrayIncludes(array, value) {
        var length = array ? array.length : 0;
        return !!length && baseIndexOf(array, value, 0) > -1;
      }
      function arrayIncludesWith(array, value, comparator) {
        var index = -1,
            length = array ? array.length : 0;
        while (++index < length) {
          if (comparator(value, array[index])) {
            return true;
          }
        }
        return false;
      }
      function arrayMap(array, iteratee) {
        var index = -1,
            length = array ? array.length : 0,
            result = Array(length);
        while (++index < length) {
          result[index] = iteratee(array[index], index, array);
        }
        return result;
      }
      function arrayPush(array, values) {
        var index = -1,
            length = values.length,
            offset = array.length;
        while (++index < length) {
          array[offset + index] = values[index];
        }
        return array;
      }
      function arrayReduce(array, iteratee, accumulator, initAccum) {
        var index = -1,
            length = array ? array.length : 0;
        if (initAccum && length) {
          accumulator = array[++index];
        }
        while (++index < length) {
          accumulator = iteratee(accumulator, array[index], index, array);
        }
        return accumulator;
      }
      function arrayReduceRight(array, iteratee, accumulator, initAccum) {
        var length = array ? array.length : 0;
        if (initAccum && length) {
          accumulator = array[--length];
        }
        while (length--) {
          accumulator = iteratee(accumulator, array[length], length, array);
        }
        return accumulator;
      }
      function arraySome(array, predicate) {
        var index = -1,
            length = array ? array.length : 0;
        while (++index < length) {
          if (predicate(array[index], index, array)) {
            return true;
          }
        }
        return false;
      }
      function baseFindKey(collection, predicate, eachFunc) {
        var result;
        eachFunc(collection, function(value, key, collection) {
          if (predicate(value, key, collection)) {
            result = key;
            return false;
          }
        });
        return result;
      }
      function baseFindIndex(array, predicate, fromIndex, fromRight) {
        var length = array.length,
            index = fromIndex + (fromRight ? 1 : -1);
        while ((fromRight ? index-- : ++index < length)) {
          if (predicate(array[index], index, array)) {
            return index;
          }
        }
        return -1;
      }
      function baseIndexOf(array, value, fromIndex) {
        if (value !== value) {
          return indexOfNaN(array, fromIndex);
        }
        var index = fromIndex - 1,
            length = array.length;
        while (++index < length) {
          if (array[index] === value) {
            return index;
          }
        }
        return -1;
      }
      function baseIndexOfWith(array, value, fromIndex, comparator) {
        var index = fromIndex - 1,
            length = array.length;
        while (++index < length) {
          if (comparator(array[index], value)) {
            return index;
          }
        }
        return -1;
      }
      function baseMean(array, iteratee) {
        var length = array ? array.length : 0;
        return length ? (baseSum(array, iteratee) / length) : NAN;
      }
      function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
        eachFunc(collection, function(value, index, collection) {
          accumulator = initAccum ? (initAccum = false, value) : iteratee(accumulator, value, index, collection);
        });
        return accumulator;
      }
      function baseSortBy(array, comparer) {
        var length = array.length;
        array.sort(comparer);
        while (length--) {
          array[length] = array[length].value;
        }
        return array;
      }
      function baseSum(array, iteratee) {
        var result,
            index = -1,
            length = array.length;
        while (++index < length) {
          var current = iteratee(array[index]);
          if (current !== undefined) {
            result = result === undefined ? current : (result + current);
          }
        }
        return result;
      }
      function baseTimes(n, iteratee) {
        var index = -1,
            result = Array(n);
        while (++index < n) {
          result[index] = iteratee(index);
        }
        return result;
      }
      function baseToPairs(object, props) {
        return arrayMap(props, function(key) {
          return [key, object[key]];
        });
      }
      function baseUnary(func) {
        return function(value) {
          return func(value);
        };
      }
      function baseValues(object, props) {
        return arrayMap(props, function(key) {
          return object[key];
        });
      }
      function cacheHas(cache, key) {
        return cache.has(key);
      }
      function charsStartIndex(strSymbols, chrSymbols) {
        var index = -1,
            length = strSymbols.length;
        while (++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
        return index;
      }
      function charsEndIndex(strSymbols, chrSymbols) {
        var index = strSymbols.length;
        while (index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
        return index;
      }
      function checkGlobal(value) {
        return (value && value.Object === Object) ? value : null;
      }
      function countHolders(array, placeholder) {
        var length = array.length,
            result = 0;
        while (length--) {
          if (array[length] === placeholder) {
            result++;
          }
        }
        return result;
      }
      function deburrLetter(letter) {
        return deburredLetters[letter];
      }
      function escapeHtmlChar(chr) {
        return htmlEscapes[chr];
      }
      function escapeStringChar(chr) {
        return '\\' + stringEscapes[chr];
      }
      function getValue(object, key) {
        return object == null ? undefined : object[key];
      }
      function indexOfNaN(array, fromIndex, fromRight) {
        var length = array.length,
            index = fromIndex + (fromRight ? 1 : -1);
        while ((fromRight ? index-- : ++index < length)) {
          var other = array[index];
          if (other !== other) {
            return index;
          }
        }
        return -1;
      }
      function isHostObject(value) {
        var result = false;
        if (value != null && typeof value.toString != 'function') {
          try {
            result = !!(value + '');
          } catch (e) {}
        }
        return result;
      }
      function iteratorToArray(iterator) {
        var data,
            result = [];
        while (!(data = iterator.next()).done) {
          result.push(data.value);
        }
        return result;
      }
      function mapToArray(map) {
        var index = -1,
            result = Array(map.size);
        map.forEach(function(value, key) {
          result[++index] = [key, value];
        });
        return result;
      }
      function replaceHolders(array, placeholder) {
        var index = -1,
            length = array.length,
            resIndex = 0,
            result = [];
        while (++index < length) {
          var value = array[index];
          if (value === placeholder || value === PLACEHOLDER) {
            array[index] = PLACEHOLDER;
            result[resIndex++] = index;
          }
        }
        return result;
      }
      function setToArray(set) {
        var index = -1,
            result = Array(set.size);
        set.forEach(function(value) {
          result[++index] = value;
        });
        return result;
      }
      function setToPairs(set) {
        var index = -1,
            result = Array(set.size);
        set.forEach(function(value) {
          result[++index] = [value, value];
        });
        return result;
      }
      function stringSize(string) {
        if (!(string && reHasComplexSymbol.test(string))) {
          return string.length;
        }
        var result = reComplexSymbol.lastIndex = 0;
        while (reComplexSymbol.test(string)) {
          result++;
        }
        return result;
      }
      function stringToArray(string) {
        return string.match(reComplexSymbol);
      }
      function unescapeHtmlChar(chr) {
        return htmlUnescapes[chr];
      }
      function runInContext(context) {
        context = context ? _.defaults({}, context, _.pick(root, contextProps)) : root;
        var Date = context.Date,
            Error = context.Error,
            Math = context.Math,
            RegExp = context.RegExp,
            TypeError = context.TypeError;
        var arrayProto = context.Array.prototype,
            objectProto = context.Object.prototype,
            stringProto = context.String.prototype;
        var coreJsData = context['__core-js_shared__'];
        var maskSrcKey = (function() {
          var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
          return uid ? ('Symbol(src)_1.' + uid) : '';
        }());
        var funcToString = context.Function.prototype.toString;
        var hasOwnProperty = objectProto.hasOwnProperty;
        var idCounter = 0;
        var objectCtorString = funcToString.call(Object);
        var objectToString = objectProto.toString;
        var oldDash = root._;
        var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
        var Buffer = moduleExports ? context.Buffer : undefined,
            Reflect = context.Reflect,
            Symbol = context.Symbol,
            Uint8Array = context.Uint8Array,
            enumerate = Reflect ? Reflect.enumerate : undefined,
            getOwnPropertySymbols = Object.getOwnPropertySymbols,
            iteratorSymbol = typeof(iteratorSymbol = Symbol && Symbol.iterator) == 'symbol' ? iteratorSymbol : undefined,
            objectCreate = Object.create,
            propertyIsEnumerable = objectProto.propertyIsEnumerable,
            splice = arrayProto.splice;
        var setTimeout = function(func, wait) {
          return context.setTimeout.call(root, func, wait);
        };
        var nativeCeil = Math.ceil,
            nativeFloor = Math.floor,
            nativeGetPrototype = Object.getPrototypeOf,
            nativeIsFinite = context.isFinite,
            nativeJoin = arrayProto.join,
            nativeKeys = Object.keys,
            nativeMax = Math.max,
            nativeMin = Math.min,
            nativeParseInt = context.parseInt,
            nativeRandom = Math.random,
            nativeReplace = stringProto.replace,
            nativeReverse = arrayProto.reverse,
            nativeSplit = stringProto.split;
        var DataView = getNative(context, 'DataView'),
            Map = getNative(context, 'Map'),
            Promise = getNative(context, 'Promise'),
            Set = getNative(context, 'Set'),
            WeakMap = getNative(context, 'WeakMap'),
            nativeCreate = getNative(Object, 'create');
        var metaMap = WeakMap && new WeakMap;
        var nonEnumShadows = !propertyIsEnumerable.call({'valueOf': 1}, 'valueOf');
        var realNames = {};
        var dataViewCtorString = toSource(DataView),
            mapCtorString = toSource(Map),
            promiseCtorString = toSource(Promise),
            setCtorString = toSource(Set),
            weakMapCtorString = toSource(WeakMap);
        var symbolProto = Symbol ? Symbol.prototype : undefined,
            symbolValueOf = symbolProto ? symbolProto.valueOf : undefined,
            symbolToString = symbolProto ? symbolProto.toString : undefined;
        function lodash(value) {
          if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
            if (value instanceof LodashWrapper) {
              return value;
            }
            if (hasOwnProperty.call(value, '__wrapped__')) {
              return wrapperClone(value);
            }
          }
          return new LodashWrapper(value);
        }
        function baseLodash() {}
        function LodashWrapper(value, chainAll) {
          this.__wrapped__ = value;
          this.__actions__ = [];
          this.__chain__ = !!chainAll;
          this.__index__ = 0;
          this.__values__ = undefined;
        }
        lodash.templateSettings = {
          'escape': reEscape,
          'evaluate': reEvaluate,
          'interpolate': reInterpolate,
          'variable': '',
          'imports': {'_': lodash}
        };
        lodash.prototype = baseLodash.prototype;
        lodash.prototype.constructor = lodash;
        LodashWrapper.prototype = baseCreate(baseLodash.prototype);
        LodashWrapper.prototype.constructor = LodashWrapper;
        function LazyWrapper(value) {
          this.__wrapped__ = value;
          this.__actions__ = [];
          this.__dir__ = 1;
          this.__filtered__ = false;
          this.__iteratees__ = [];
          this.__takeCount__ = MAX_ARRAY_LENGTH;
          this.__views__ = [];
        }
        function lazyClone() {
          var result = new LazyWrapper(this.__wrapped__);
          result.__actions__ = copyArray(this.__actions__);
          result.__dir__ = this.__dir__;
          result.__filtered__ = this.__filtered__;
          result.__iteratees__ = copyArray(this.__iteratees__);
          result.__takeCount__ = this.__takeCount__;
          result.__views__ = copyArray(this.__views__);
          return result;
        }
        function lazyReverse() {
          if (this.__filtered__) {
            var result = new LazyWrapper(this);
            result.__dir__ = -1;
            result.__filtered__ = true;
          } else {
            result = this.clone();
            result.__dir__ *= -1;
          }
          return result;
        }
        function lazyValue() {
          var array = this.__wrapped__.value(),
              dir = this.__dir__,
              isArr = isArray(array),
              isRight = dir < 0,
              arrLength = isArr ? array.length : 0,
              view = getView(0, arrLength, this.__views__),
              start = view.start,
              end = view.end,
              length = end - start,
              index = isRight ? end : (start - 1),
              iteratees = this.__iteratees__,
              iterLength = iteratees.length,
              resIndex = 0,
              takeCount = nativeMin(length, this.__takeCount__);
          if (!isArr || arrLength < LARGE_ARRAY_SIZE || (arrLength == length && takeCount == length)) {
            return baseWrapperValue(array, this.__actions__);
          }
          var result = [];
          outer: while (length-- && resIndex < takeCount) {
            index += dir;
            var iterIndex = -1,
                value = array[index];
            while (++iterIndex < iterLength) {
              var data = iteratees[iterIndex],
                  iteratee = data.iteratee,
                  type = data.type,
                  computed = iteratee(value);
              if (type == LAZY_MAP_FLAG) {
                value = computed;
              } else if (!computed) {
                if (type == LAZY_FILTER_FLAG) {
                  continue outer;
                } else {
                  break outer;
                }
              }
            }
            result[resIndex++] = value;
          }
          return result;
        }
        LazyWrapper.prototype = baseCreate(baseLodash.prototype);
        LazyWrapper.prototype.constructor = LazyWrapper;
        function Hash(entries) {
          var index = -1,
              length = entries ? entries.length : 0;
          this.clear();
          while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
          }
        }
        function hashClear() {
          this.__data__ = nativeCreate ? nativeCreate(null) : {};
        }
        function hashDelete(key) {
          return this.has(key) && delete this.__data__[key];
        }
        function hashGet(key) {
          var data = this.__data__;
          if (nativeCreate) {
            var result = data[key];
            return result === HASH_UNDEFINED ? undefined : result;
          }
          return hasOwnProperty.call(data, key) ? data[key] : undefined;
        }
        function hashHas(key) {
          var data = this.__data__;
          return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
        }
        function hashSet(key, value) {
          var data = this.__data__;
          data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
          return this;
        }
        Hash.prototype.clear = hashClear;
        Hash.prototype['delete'] = hashDelete;
        Hash.prototype.get = hashGet;
        Hash.prototype.has = hashHas;
        Hash.prototype.set = hashSet;
        function ListCache(entries) {
          var index = -1,
              length = entries ? entries.length : 0;
          this.clear();
          while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
          }
        }
        function listCacheClear() {
          this.__data__ = [];
        }
        function listCacheDelete(key) {
          var data = this.__data__,
              index = assocIndexOf(data, key);
          if (index < 0) {
            return false;
          }
          var lastIndex = data.length - 1;
          if (index == lastIndex) {
            data.pop();
          } else {
            splice.call(data, index, 1);
          }
          return true;
        }
        function listCacheGet(key) {
          var data = this.__data__,
              index = assocIndexOf(data, key);
          return index < 0 ? undefined : data[index][1];
        }
        function listCacheHas(key) {
          return assocIndexOf(this.__data__, key) > -1;
        }
        function listCacheSet(key, value) {
          var data = this.__data__,
              index = assocIndexOf(data, key);
          if (index < 0) {
            data.push([key, value]);
          } else {
            data[index][1] = value;
          }
          return this;
        }
        ListCache.prototype.clear = listCacheClear;
        ListCache.prototype['delete'] = listCacheDelete;
        ListCache.prototype.get = listCacheGet;
        ListCache.prototype.has = listCacheHas;
        ListCache.prototype.set = listCacheSet;
        function MapCache(entries) {
          var index = -1,
              length = entries ? entries.length : 0;
          this.clear();
          while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
          }
        }
        function mapCacheClear() {
          this.__data__ = {
            'hash': new Hash,
            'map': new (Map || ListCache),
            'string': new Hash
          };
        }
        function mapCacheDelete(key) {
          return getMapData(this, key)['delete'](key);
        }
        function mapCacheGet(key) {
          return getMapData(this, key).get(key);
        }
        function mapCacheHas(key) {
          return getMapData(this, key).has(key);
        }
        function mapCacheSet(key, value) {
          getMapData(this, key).set(key, value);
          return this;
        }
        MapCache.prototype.clear = mapCacheClear;
        MapCache.prototype['delete'] = mapCacheDelete;
        MapCache.prototype.get = mapCacheGet;
        MapCache.prototype.has = mapCacheHas;
        MapCache.prototype.set = mapCacheSet;
        function SetCache(values) {
          var index = -1,
              length = values ? values.length : 0;
          this.__data__ = new MapCache;
          while (++index < length) {
            this.add(values[index]);
          }
        }
        function setCacheAdd(value) {
          this.__data__.set(value, HASH_UNDEFINED);
          return this;
        }
        function setCacheHas(value) {
          return this.__data__.has(value);
        }
        SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
        SetCache.prototype.has = setCacheHas;
        function Stack(entries) {
          this.__data__ = new ListCache(entries);
        }
        function stackClear() {
          this.__data__ = new ListCache;
        }
        function stackDelete(key) {
          return this.__data__['delete'](key);
        }
        function stackGet(key) {
          return this.__data__.get(key);
        }
        function stackHas(key) {
          return this.__data__.has(key);
        }
        function stackSet(key, value) {
          var cache = this.__data__;
          if (cache instanceof ListCache && cache.__data__.length == LARGE_ARRAY_SIZE) {
            cache = this.__data__ = new MapCache(cache.__data__);
          }
          cache.set(key, value);
          return this;
        }
        Stack.prototype.clear = stackClear;
        Stack.prototype['delete'] = stackDelete;
        Stack.prototype.get = stackGet;
        Stack.prototype.has = stackHas;
        Stack.prototype.set = stackSet;
        function assignInDefaults(objValue, srcValue, key, object) {
          if (objValue === undefined || (eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key))) {
            return srcValue;
          }
          return objValue;
        }
        function assignMergeValue(object, key, value) {
          if ((value !== undefined && !eq(object[key], value)) || (typeof key == 'number' && value === undefined && !(key in object))) {
            object[key] = value;
          }
        }
        function assignValue(object, key, value) {
          var objValue = object[key];
          if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || (value === undefined && !(key in object))) {
            object[key] = value;
          }
        }
        function assocIndexOf(array, key) {
          var length = array.length;
          while (length--) {
            if (eq(array[length][0], key)) {
              return length;
            }
          }
          return -1;
        }
        function baseAggregator(collection, setter, iteratee, accumulator) {
          baseEach(collection, function(value, key, collection) {
            setter(accumulator, value, iteratee(value), collection);
          });
          return accumulator;
        }
        function baseAssign(object, source) {
          return object && copyObject(source, keys(source), object);
        }
        function baseAt(object, paths) {
          var index = -1,
              isNil = object == null,
              length = paths.length,
              result = Array(length);
          while (++index < length) {
            result[index] = isNil ? undefined : get(object, paths[index]);
          }
          return result;
        }
        function baseClamp(number, lower, upper) {
          if (number === number) {
            if (upper !== undefined) {
              number = number <= upper ? number : upper;
            }
            if (lower !== undefined) {
              number = number >= lower ? number : lower;
            }
          }
          return number;
        }
        function baseClone(value, isDeep, isFull, customizer, key, object, stack) {
          var result;
          if (customizer) {
            result = object ? customizer(value, key, object, stack) : customizer(value);
          }
          if (result !== undefined) {
            return result;
          }
          if (!isObject(value)) {
            return value;
          }
          var isArr = isArray(value);
          if (isArr) {
            result = initCloneArray(value);
            if (!isDeep) {
              return copyArray(value, result);
            }
          } else {
            var tag = getTag(value),
                isFunc = tag == funcTag || tag == genTag;
            if (isBuffer(value)) {
              return cloneBuffer(value, isDeep);
            }
            if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
              if (isHostObject(value)) {
                return object ? value : {};
              }
              result = initCloneObject(isFunc ? {} : value);
              if (!isDeep) {
                return copySymbols(value, baseAssign(result, value));
              }
            } else {
              if (!cloneableTags[tag]) {
                return object ? value : {};
              }
              result = initCloneByTag(value, tag, baseClone, isDeep);
            }
          }
          stack || (stack = new Stack);
          var stacked = stack.get(value);
          if (stacked) {
            return stacked;
          }
          stack.set(value, result);
          if (!isArr) {
            var props = isFull ? getAllKeys(value) : keys(value);
          }
          arrayEach(props || value, function(subValue, key) {
            if (props) {
              key = subValue;
              subValue = value[key];
            }
            assignValue(result, key, baseClone(subValue, isDeep, isFull, customizer, key, value, stack));
          });
          return result;
        }
        function baseConforms(source) {
          var props = keys(source),
              length = props.length;
          return function(object) {
            if (object == null) {
              return !length;
            }
            var index = length;
            while (index--) {
              var key = props[index],
                  predicate = source[key],
                  value = object[key];
              if ((value === undefined && !(key in Object(object))) || !predicate(value)) {
                return false;
              }
            }
            return true;
          };
        }
        function baseCreate(proto) {
          return isObject(proto) ? objectCreate(proto) : {};
        }
        function baseDelay(func, wait, args) {
          if (typeof func != 'function') {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          return setTimeout(function() {
            func.apply(undefined, args);
          }, wait);
        }
        function baseDifference(array, values, iteratee, comparator) {
          var index = -1,
              includes = arrayIncludes,
              isCommon = true,
              length = array.length,
              result = [],
              valuesLength = values.length;
          if (!length) {
            return result;
          }
          if (iteratee) {
            values = arrayMap(values, baseUnary(iteratee));
          }
          if (comparator) {
            includes = arrayIncludesWith;
            isCommon = false;
          } else if (values.length >= LARGE_ARRAY_SIZE) {
            includes = cacheHas;
            isCommon = false;
            values = new SetCache(values);
          }
          outer: while (++index < length) {
            var value = array[index],
                computed = iteratee ? iteratee(value) : value;
            value = (comparator || value !== 0) ? value : 0;
            if (isCommon && computed === computed) {
              var valuesIndex = valuesLength;
              while (valuesIndex--) {
                if (values[valuesIndex] === computed) {
                  continue outer;
                }
              }
              result.push(value);
            } else if (!includes(values, computed, comparator)) {
              result.push(value);
            }
          }
          return result;
        }
        var baseEach = createBaseEach(baseForOwn);
        var baseEachRight = createBaseEach(baseForOwnRight, true);
        function baseEvery(collection, predicate) {
          var result = true;
          baseEach(collection, function(value, index, collection) {
            result = !!predicate(value, index, collection);
            return result;
          });
          return result;
        }
        function baseExtremum(array, iteratee, comparator) {
          var index = -1,
              length = array.length;
          while (++index < length) {
            var value = array[index],
                current = iteratee(value);
            if (current != null && (computed === undefined ? (current === current && !isSymbol(current)) : comparator(current, computed))) {
              var computed = current,
                  result = value;
            }
          }
          return result;
        }
        function baseFill(array, value, start, end) {
          var length = array.length;
          start = toInteger(start);
          if (start < 0) {
            start = -start > length ? 0 : (length + start);
          }
          end = (end === undefined || end > length) ? length : toInteger(end);
          if (end < 0) {
            end += length;
          }
          end = start > end ? 0 : toLength(end);
          while (start < end) {
            array[start++] = value;
          }
          return array;
        }
        function baseFilter(collection, predicate) {
          var result = [];
          baseEach(collection, function(value, index, collection) {
            if (predicate(value, index, collection)) {
              result.push(value);
            }
          });
          return result;
        }
        function baseFlatten(array, depth, predicate, isStrict, result) {
          var index = -1,
              length = array.length;
          predicate || (predicate = isFlattenable);
          result || (result = []);
          while (++index < length) {
            var value = array[index];
            if (depth > 0 && predicate(value)) {
              if (depth > 1) {
                baseFlatten(value, depth - 1, predicate, isStrict, result);
              } else {
                arrayPush(result, value);
              }
            } else if (!isStrict) {
              result[result.length] = value;
            }
          }
          return result;
        }
        var baseFor = createBaseFor();
        var baseForRight = createBaseFor(true);
        function baseForOwn(object, iteratee) {
          return object && baseFor(object, iteratee, keys);
        }
        function baseForOwnRight(object, iteratee) {
          return object && baseForRight(object, iteratee, keys);
        }
        function baseFunctions(object, props) {
          return arrayFilter(props, function(key) {
            return isFunction(object[key]);
          });
        }
        function baseGet(object, path) {
          path = isKey(path, object) ? [path] : castPath(path);
          var index = 0,
              length = path.length;
          while (object != null && index < length) {
            object = object[toKey(path[index++])];
          }
          return (index && index == length) ? object : undefined;
        }
        function baseGetAllKeys(object, keysFunc, symbolsFunc) {
          var result = keysFunc(object);
          return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
        }
        function baseGt(value, other) {
          return value > other;
        }
        function baseHas(object, key) {
          return object != null && (hasOwnProperty.call(object, key) || (typeof object == 'object' && key in object && getPrototype(object) === null));
        }
        function baseHasIn(object, key) {
          return object != null && key in Object(object);
        }
        function baseInRange(number, start, end) {
          return number >= nativeMin(start, end) && number < nativeMax(start, end);
        }
        function baseIntersection(arrays, iteratee, comparator) {
          var includes = comparator ? arrayIncludesWith : arrayIncludes,
              length = arrays[0].length,
              othLength = arrays.length,
              othIndex = othLength,
              caches = Array(othLength),
              maxLength = Infinity,
              result = [];
          while (othIndex--) {
            var array = arrays[othIndex];
            if (othIndex && iteratee) {
              array = arrayMap(array, baseUnary(iteratee));
            }
            maxLength = nativeMin(array.length, maxLength);
            caches[othIndex] = !comparator && (iteratee || (length >= 120 && array.length >= 120)) ? new SetCache(othIndex && array) : undefined;
          }
          array = arrays[0];
          var index = -1,
              seen = caches[0];
          outer: while (++index < length && result.length < maxLength) {
            var value = array[index],
                computed = iteratee ? iteratee(value) : value;
            value = (comparator || value !== 0) ? value : 0;
            if (!(seen ? cacheHas(seen, computed) : includes(result, computed, comparator))) {
              othIndex = othLength;
              while (--othIndex) {
                var cache = caches[othIndex];
                if (!(cache ? cacheHas(cache, computed) : includes(arrays[othIndex], computed, comparator))) {
                  continue outer;
                }
              }
              if (seen) {
                seen.push(computed);
              }
              result.push(value);
            }
          }
          return result;
        }
        function baseInverter(object, setter, iteratee, accumulator) {
          baseForOwn(object, function(value, key, object) {
            setter(accumulator, iteratee(value), key, object);
          });
          return accumulator;
        }
        function baseInvoke(object, path, args) {
          if (!isKey(path, object)) {
            path = castPath(path);
            object = parent(object, path);
            path = last(path);
          }
          var func = object == null ? object : object[toKey(path)];
          return func == null ? undefined : apply(func, object, args);
        }
        function baseIsEqual(value, other, customizer, bitmask, stack) {
          if (value === other) {
            return true;
          }
          if (value == null || other == null || (!isObject(value) && !isObjectLike(other))) {
            return value !== value && other !== other;
          }
          return baseIsEqualDeep(value, other, baseIsEqual, customizer, bitmask, stack);
        }
        function baseIsEqualDeep(object, other, equalFunc, customizer, bitmask, stack) {
          var objIsArr = isArray(object),
              othIsArr = isArray(other),
              objTag = arrayTag,
              othTag = arrayTag;
          if (!objIsArr) {
            objTag = getTag(object);
            objTag = objTag == argsTag ? objectTag : objTag;
          }
          if (!othIsArr) {
            othTag = getTag(other);
            othTag = othTag == argsTag ? objectTag : othTag;
          }
          var objIsObj = objTag == objectTag && !isHostObject(object),
              othIsObj = othTag == objectTag && !isHostObject(other),
              isSameTag = objTag == othTag;
          if (isSameTag && !objIsObj) {
            stack || (stack = new Stack);
            return (objIsArr || isTypedArray(object)) ? equalArrays(object, other, equalFunc, customizer, bitmask, stack) : equalByTag(object, other, objTag, equalFunc, customizer, bitmask, stack);
          }
          if (!(bitmask & PARTIAL_COMPARE_FLAG)) {
            var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
                othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');
            if (objIsWrapped || othIsWrapped) {
              var objUnwrapped = objIsWrapped ? object.value() : object,
                  othUnwrapped = othIsWrapped ? other.value() : other;
              stack || (stack = new Stack);
              return equalFunc(objUnwrapped, othUnwrapped, customizer, bitmask, stack);
            }
          }
          if (!isSameTag) {
            return false;
          }
          stack || (stack = new Stack);
          return equalObjects(object, other, equalFunc, customizer, bitmask, stack);
        }
        function baseIsMatch(object, source, matchData, customizer) {
          var index = matchData.length,
              length = index,
              noCustomizer = !customizer;
          if (object == null) {
            return !length;
          }
          object = Object(object);
          while (index--) {
            var data = matchData[index];
            if ((noCustomizer && data[2]) ? data[1] !== object[data[0]] : !(data[0] in object)) {
              return false;
            }
          }
          while (++index < length) {
            data = matchData[index];
            var key = data[0],
                objValue = object[key],
                srcValue = data[1];
            if (noCustomizer && data[2]) {
              if (objValue === undefined && !(key in object)) {
                return false;
              }
            } else {
              var stack = new Stack;
              if (customizer) {
                var result = customizer(objValue, srcValue, key, object, source, stack);
              }
              if (!(result === undefined ? baseIsEqual(srcValue, objValue, customizer, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG, stack) : result)) {
                return false;
              }
            }
          }
          return true;
        }
        function baseIsNative(value) {
          if (!isObject(value) || isMasked(value)) {
            return false;
          }
          var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
          return pattern.test(toSource(value));
        }
        function baseIteratee(value) {
          if (typeof value == 'function') {
            return value;
          }
          if (value == null) {
            return identity;
          }
          if (typeof value == 'object') {
            return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
          }
          return property(value);
        }
        function baseKeys(object) {
          return nativeKeys(Object(object));
        }
        function baseKeysIn(object) {
          object = object == null ? object : Object(object);
          var result = [];
          for (var key in object) {
            result.push(key);
          }
          return result;
        }
        if (enumerate && !propertyIsEnumerable.call({'valueOf': 1}, 'valueOf')) {
          baseKeysIn = function(object) {
            return iteratorToArray(enumerate(object));
          };
        }
        function baseLt(value, other) {
          return value < other;
        }
        function baseMap(collection, iteratee) {
          var index = -1,
              result = isArrayLike(collection) ? Array(collection.length) : [];
          baseEach(collection, function(value, key, collection) {
            result[++index] = iteratee(value, key, collection);
          });
          return result;
        }
        function baseMatches(source) {
          var matchData = getMatchData(source);
          if (matchData.length == 1 && matchData[0][2]) {
            return matchesStrictComparable(matchData[0][0], matchData[0][1]);
          }
          return function(object) {
            return object === source || baseIsMatch(object, source, matchData);
          };
        }
        function baseMatchesProperty(path, srcValue) {
          if (isKey(path) && isStrictComparable(srcValue)) {
            return matchesStrictComparable(toKey(path), srcValue);
          }
          return function(object) {
            var objValue = get(object, path);
            return (objValue === undefined && objValue === srcValue) ? hasIn(object, path) : baseIsEqual(srcValue, objValue, undefined, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG);
          };
        }
        function baseMerge(object, source, srcIndex, customizer, stack) {
          if (object === source) {
            return;
          }
          if (!(isArray(source) || isTypedArray(source))) {
            var props = keysIn(source);
          }
          arrayEach(props || source, function(srcValue, key) {
            if (props) {
              key = srcValue;
              srcValue = source[key];
            }
            if (isObject(srcValue)) {
              stack || (stack = new Stack);
              baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
            } else {
              var newValue = customizer ? customizer(object[key], srcValue, (key + ''), object, source, stack) : undefined;
              if (newValue === undefined) {
                newValue = srcValue;
              }
              assignMergeValue(object, key, newValue);
            }
          });
        }
        function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
          var objValue = object[key],
              srcValue = source[key],
              stacked = stack.get(srcValue);
          if (stacked) {
            assignMergeValue(object, key, stacked);
            return;
          }
          var newValue = customizer ? customizer(objValue, srcValue, (key + ''), object, source, stack) : undefined;
          var isCommon = newValue === undefined;
          if (isCommon) {
            newValue = srcValue;
            if (isArray(srcValue) || isTypedArray(srcValue)) {
              if (isArray(objValue)) {
                newValue = objValue;
              } else if (isArrayLikeObject(objValue)) {
                newValue = copyArray(objValue);
              } else {
                isCommon = false;
                newValue = baseClone(srcValue, true);
              }
            } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
              if (isArguments(objValue)) {
                newValue = toPlainObject(objValue);
              } else if (!isObject(objValue) || (srcIndex && isFunction(objValue))) {
                isCommon = false;
                newValue = baseClone(srcValue, true);
              } else {
                newValue = objValue;
              }
            } else {
              isCommon = false;
            }
          }
          stack.set(srcValue, newValue);
          if (isCommon) {
            mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
          }
          stack['delete'](srcValue);
          assignMergeValue(object, key, newValue);
        }
        function baseNth(array, n) {
          var length = array.length;
          if (!length) {
            return;
          }
          n += n < 0 ? length : 0;
          return isIndex(n, length) ? array[n] : undefined;
        }
        function baseOrderBy(collection, iteratees, orders) {
          var index = -1;
          iteratees = arrayMap(iteratees.length ? iteratees : [identity], baseUnary(getIteratee()));
          var result = baseMap(collection, function(value, key, collection) {
            var criteria = arrayMap(iteratees, function(iteratee) {
              return iteratee(value);
            });
            return {
              'criteria': criteria,
              'index': ++index,
              'value': value
            };
          });
          return baseSortBy(result, function(object, other) {
            return compareMultiple(object, other, orders);
          });
        }
        function basePick(object, props) {
          object = Object(object);
          return arrayReduce(props, function(result, key) {
            if (key in object) {
              result[key] = object[key];
            }
            return result;
          }, {});
        }
        function basePickBy(object, predicate) {
          var index = -1,
              props = getAllKeysIn(object),
              length = props.length,
              result = {};
          while (++index < length) {
            var key = props[index],
                value = object[key];
            if (predicate(value, key)) {
              result[key] = value;
            }
          }
          return result;
        }
        function baseProperty(key) {
          return function(object) {
            return object == null ? undefined : object[key];
          };
        }
        function basePropertyDeep(path) {
          return function(object) {
            return baseGet(object, path);
          };
        }
        function basePullAll(array, values, iteratee, comparator) {
          var indexOf = comparator ? baseIndexOfWith : baseIndexOf,
              index = -1,
              length = values.length,
              seen = array;
          if (array === values) {
            values = copyArray(values);
          }
          if (iteratee) {
            seen = arrayMap(array, baseUnary(iteratee));
          }
          while (++index < length) {
            var fromIndex = 0,
                value = values[index],
                computed = iteratee ? iteratee(value) : value;
            while ((fromIndex = indexOf(seen, computed, fromIndex, comparator)) > -1) {
              if (seen !== array) {
                splice.call(seen, fromIndex, 1);
              }
              splice.call(array, fromIndex, 1);
            }
          }
          return array;
        }
        function basePullAt(array, indexes) {
          var length = array ? indexes.length : 0,
              lastIndex = length - 1;
          while (length--) {
            var index = indexes[length];
            if (length == lastIndex || index !== previous) {
              var previous = index;
              if (isIndex(index)) {
                splice.call(array, index, 1);
              } else if (!isKey(index, array)) {
                var path = castPath(index),
                    object = parent(array, path);
                if (object != null) {
                  delete object[toKey(last(path))];
                }
              } else {
                delete array[toKey(index)];
              }
            }
          }
          return array;
        }
        function baseRandom(lower, upper) {
          return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
        }
        function baseRange(start, end, step, fromRight) {
          var index = -1,
              length = nativeMax(nativeCeil((end - start) / (step || 1)), 0),
              result = Array(length);
          while (length--) {
            result[fromRight ? length : ++index] = start;
            start += step;
          }
          return result;
        }
        function baseRepeat(string, n) {
          var result = '';
          if (!string || n < 1 || n > MAX_SAFE_INTEGER) {
            return result;
          }
          do {
            if (n % 2) {
              result += string;
            }
            n = nativeFloor(n / 2);
            if (n) {
              string += string;
            }
          } while (n);
          return result;
        }
        function baseSet(object, path, value, customizer) {
          path = isKey(path, object) ? [path] : castPath(path);
          var index = -1,
              length = path.length,
              lastIndex = length - 1,
              nested = object;
          while (nested != null && ++index < length) {
            var key = toKey(path[index]);
            if (isObject(nested)) {
              var newValue = value;
              if (index != lastIndex) {
                var objValue = nested[key];
                newValue = customizer ? customizer(objValue, key, nested) : undefined;
                if (newValue === undefined) {
                  newValue = objValue == null ? (isIndex(path[index + 1]) ? [] : {}) : objValue;
                }
              }
              assignValue(nested, key, newValue);
            }
            nested = nested[key];
          }
          return object;
        }
        var baseSetData = !metaMap ? identity : function(func, data) {
          metaMap.set(func, data);
          return func;
        };
        function baseSlice(array, start, end) {
          var index = -1,
              length = array.length;
          if (start < 0) {
            start = -start > length ? 0 : (length + start);
          }
          end = end > length ? length : end;
          if (end < 0) {
            end += length;
          }
          length = start > end ? 0 : ((end - start) >>> 0);
          start >>>= 0;
          var result = Array(length);
          while (++index < length) {
            result[index] = array[index + start];
          }
          return result;
        }
        function baseSome(collection, predicate) {
          var result;
          baseEach(collection, function(value, index, collection) {
            result = predicate(value, index, collection);
            return !result;
          });
          return !!result;
        }
        function baseSortedIndex(array, value, retHighest) {
          var low = 0,
              high = array ? array.length : low;
          if (typeof value == 'number' && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
            while (low < high) {
              var mid = (low + high) >>> 1,
                  computed = array[mid];
              if (computed !== null && !isSymbol(computed) && (retHighest ? (computed <= value) : (computed < value))) {
                low = mid + 1;
              } else {
                high = mid;
              }
            }
            return high;
          }
          return baseSortedIndexBy(array, value, identity, retHighest);
        }
        function baseSortedIndexBy(array, value, iteratee, retHighest) {
          value = iteratee(value);
          var low = 0,
              high = array ? array.length : 0,
              valIsNaN = value !== value,
              valIsNull = value === null,
              valIsSymbol = isSymbol(value),
              valIsUndefined = value === undefined;
          while (low < high) {
            var mid = nativeFloor((low + high) / 2),
                computed = iteratee(array[mid]),
                othIsDefined = computed !== undefined,
                othIsNull = computed === null,
                othIsReflexive = computed === computed,
                othIsSymbol = isSymbol(computed);
            if (valIsNaN) {
              var setLow = retHighest || othIsReflexive;
            } else if (valIsUndefined) {
              setLow = othIsReflexive && (retHighest || othIsDefined);
            } else if (valIsNull) {
              setLow = othIsReflexive && othIsDefined && (retHighest || !othIsNull);
            } else if (valIsSymbol) {
              setLow = othIsReflexive && othIsDefined && !othIsNull && (retHighest || !othIsSymbol);
            } else if (othIsNull || othIsSymbol) {
              setLow = false;
            } else {
              setLow = retHighest ? (computed <= value) : (computed < value);
            }
            if (setLow) {
              low = mid + 1;
            } else {
              high = mid;
            }
          }
          return nativeMin(high, MAX_ARRAY_INDEX);
        }
        function baseSortedUniq(array, iteratee) {
          var index = -1,
              length = array.length,
              resIndex = 0,
              result = [];
          while (++index < length) {
            var value = array[index],
                computed = iteratee ? iteratee(value) : value;
            if (!index || !eq(computed, seen)) {
              var seen = computed;
              result[resIndex++] = value === 0 ? 0 : value;
            }
          }
          return result;
        }
        function baseToNumber(value) {
          if (typeof value == 'number') {
            return value;
          }
          if (isSymbol(value)) {
            return NAN;
          }
          return +value;
        }
        function baseToString(value) {
          if (typeof value == 'string') {
            return value;
          }
          if (isSymbol(value)) {
            return symbolToString ? symbolToString.call(value) : '';
          }
          var result = (value + '');
          return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
        }
        function baseUniq(array, iteratee, comparator) {
          var index = -1,
              includes = arrayIncludes,
              length = array.length,
              isCommon = true,
              result = [],
              seen = result;
          if (comparator) {
            isCommon = false;
            includes = arrayIncludesWith;
          } else if (length >= LARGE_ARRAY_SIZE) {
            var set = iteratee ? null : createSet(array);
            if (set) {
              return setToArray(set);
            }
            isCommon = false;
            includes = cacheHas;
            seen = new SetCache;
          } else {
            seen = iteratee ? [] : result;
          }
          outer: while (++index < length) {
            var value = array[index],
                computed = iteratee ? iteratee(value) : value;
            value = (comparator || value !== 0) ? value : 0;
            if (isCommon && computed === computed) {
              var seenIndex = seen.length;
              while (seenIndex--) {
                if (seen[seenIndex] === computed) {
                  continue outer;
                }
              }
              if (iteratee) {
                seen.push(computed);
              }
              result.push(value);
            } else if (!includes(seen, computed, comparator)) {
              if (seen !== result) {
                seen.push(computed);
              }
              result.push(value);
            }
          }
          return result;
        }
        function baseUnset(object, path) {
          path = isKey(path, object) ? [path] : castPath(path);
          object = parent(object, path);
          var key = toKey(last(path));
          return !(object != null && baseHas(object, key)) || delete object[key];
        }
        function baseUpdate(object, path, updater, customizer) {
          return baseSet(object, path, updater(baseGet(object, path)), customizer);
        }
        function baseWhile(array, predicate, isDrop, fromRight) {
          var length = array.length,
              index = fromRight ? length : -1;
          while ((fromRight ? index-- : ++index < length) && predicate(array[index], index, array)) {}
          return isDrop ? baseSlice(array, (fromRight ? 0 : index), (fromRight ? index + 1 : length)) : baseSlice(array, (fromRight ? index + 1 : 0), (fromRight ? length : index));
        }
        function baseWrapperValue(value, actions) {
          var result = value;
          if (result instanceof LazyWrapper) {
            result = result.value();
          }
          return arrayReduce(actions, function(result, action) {
            return action.func.apply(action.thisArg, arrayPush([result], action.args));
          }, result);
        }
        function baseXor(arrays, iteratee, comparator) {
          var index = -1,
              length = arrays.length;
          while (++index < length) {
            var result = result ? arrayPush(baseDifference(result, arrays[index], iteratee, comparator), baseDifference(arrays[index], result, iteratee, comparator)) : arrays[index];
          }
          return (result && result.length) ? baseUniq(result, iteratee, comparator) : [];
        }
        function baseZipObject(props, values, assignFunc) {
          var index = -1,
              length = props.length,
              valsLength = values.length,
              result = {};
          while (++index < length) {
            var value = index < valsLength ? values[index] : undefined;
            assignFunc(result, props[index], value);
          }
          return result;
        }
        function castArrayLikeObject(value) {
          return isArrayLikeObject(value) ? value : [];
        }
        function castFunction(value) {
          return typeof value == 'function' ? value : identity;
        }
        function castPath(value) {
          return isArray(value) ? value : stringToPath(value);
        }
        function castSlice(array, start, end) {
          var length = array.length;
          end = end === undefined ? length : end;
          return (!start && end >= length) ? array : baseSlice(array, start, end);
        }
        function cloneBuffer(buffer, isDeep) {
          if (isDeep) {
            return buffer.slice();
          }
          var result = new buffer.constructor(buffer.length);
          buffer.copy(result);
          return result;
        }
        function cloneArrayBuffer(arrayBuffer) {
          var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
          new Uint8Array(result).set(new Uint8Array(arrayBuffer));
          return result;
        }
        function cloneDataView(dataView, isDeep) {
          var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
          return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
        }
        function cloneMap(map, isDeep, cloneFunc) {
          var array = isDeep ? cloneFunc(mapToArray(map), true) : mapToArray(map);
          return arrayReduce(array, addMapEntry, new map.constructor);
        }
        function cloneRegExp(regexp) {
          var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
          result.lastIndex = regexp.lastIndex;
          return result;
        }
        function cloneSet(set, isDeep, cloneFunc) {
          var array = isDeep ? cloneFunc(setToArray(set), true) : setToArray(set);
          return arrayReduce(array, addSetEntry, new set.constructor);
        }
        function cloneSymbol(symbol) {
          return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
        }
        function cloneTypedArray(typedArray, isDeep) {
          var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
          return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
        }
        function compareAscending(value, other) {
          if (value !== other) {
            var valIsDefined = value !== undefined,
                valIsNull = value === null,
                valIsReflexive = value === value,
                valIsSymbol = isSymbol(value);
            var othIsDefined = other !== undefined,
                othIsNull = other === null,
                othIsReflexive = other === other,
                othIsSymbol = isSymbol(other);
            if ((!othIsNull && !othIsSymbol && !valIsSymbol && value > other) || (valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol) || (valIsNull && othIsDefined && othIsReflexive) || (!valIsDefined && othIsReflexive) || !valIsReflexive) {
              return 1;
            }
            if ((!valIsNull && !valIsSymbol && !othIsSymbol && value < other) || (othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol) || (othIsNull && valIsDefined && valIsReflexive) || (!othIsDefined && valIsReflexive) || !othIsReflexive) {
              return -1;
            }
          }
          return 0;
        }
        function compareMultiple(object, other, orders) {
          var index = -1,
              objCriteria = object.criteria,
              othCriteria = other.criteria,
              length = objCriteria.length,
              ordersLength = orders.length;
          while (++index < length) {
            var result = compareAscending(objCriteria[index], othCriteria[index]);
            if (result) {
              if (index >= ordersLength) {
                return result;
              }
              var order = orders[index];
              return result * (order == 'desc' ? -1 : 1);
            }
          }
          return object.index - other.index;
        }
        function composeArgs(args, partials, holders, isCurried) {
          var argsIndex = -1,
              argsLength = args.length,
              holdersLength = holders.length,
              leftIndex = -1,
              leftLength = partials.length,
              rangeLength = nativeMax(argsLength - holdersLength, 0),
              result = Array(leftLength + rangeLength),
              isUncurried = !isCurried;
          while (++leftIndex < leftLength) {
            result[leftIndex] = partials[leftIndex];
          }
          while (++argsIndex < holdersLength) {
            if (isUncurried || argsIndex < argsLength) {
              result[holders[argsIndex]] = args[argsIndex];
            }
          }
          while (rangeLength--) {
            result[leftIndex++] = args[argsIndex++];
          }
          return result;
        }
        function composeArgsRight(args, partials, holders, isCurried) {
          var argsIndex = -1,
              argsLength = args.length,
              holdersIndex = -1,
              holdersLength = holders.length,
              rightIndex = -1,
              rightLength = partials.length,
              rangeLength = nativeMax(argsLength - holdersLength, 0),
              result = Array(rangeLength + rightLength),
              isUncurried = !isCurried;
          while (++argsIndex < rangeLength) {
            result[argsIndex] = args[argsIndex];
          }
          var offset = argsIndex;
          while (++rightIndex < rightLength) {
            result[offset + rightIndex] = partials[rightIndex];
          }
          while (++holdersIndex < holdersLength) {
            if (isUncurried || argsIndex < argsLength) {
              result[offset + holders[holdersIndex]] = args[argsIndex++];
            }
          }
          return result;
        }
        function copyArray(source, array) {
          var index = -1,
              length = source.length;
          array || (array = Array(length));
          while (++index < length) {
            array[index] = source[index];
          }
          return array;
        }
        function copyObject(source, props, object, customizer) {
          object || (object = {});
          var index = -1,
              length = props.length;
          while (++index < length) {
            var key = props[index];
            var newValue = customizer ? customizer(object[key], source[key], key, object, source) : source[key];
            assignValue(object, key, newValue);
          }
          return object;
        }
        function copySymbols(source, object) {
          return copyObject(source, getSymbols(source), object);
        }
        function createAggregator(setter, initializer) {
          return function(collection, iteratee) {
            var func = isArray(collection) ? arrayAggregator : baseAggregator,
                accumulator = initializer ? initializer() : {};
            return func(collection, setter, getIteratee(iteratee), accumulator);
          };
        }
        function createAssigner(assigner) {
          return rest(function(object, sources) {
            var index = -1,
                length = sources.length,
                customizer = length > 1 ? sources[length - 1] : undefined,
                guard = length > 2 ? sources[2] : undefined;
            customizer = (assigner.length > 3 && typeof customizer == 'function') ? (length--, customizer) : undefined;
            if (guard && isIterateeCall(sources[0], sources[1], guard)) {
              customizer = length < 3 ? undefined : customizer;
              length = 1;
            }
            object = Object(object);
            while (++index < length) {
              var source = sources[index];
              if (source) {
                assigner(object, source, index, customizer);
              }
            }
            return object;
          });
        }
        function createBaseEach(eachFunc, fromRight) {
          return function(collection, iteratee) {
            if (collection == null) {
              return collection;
            }
            if (!isArrayLike(collection)) {
              return eachFunc(collection, iteratee);
            }
            var length = collection.length,
                index = fromRight ? length : -1,
                iterable = Object(collection);
            while ((fromRight ? index-- : ++index < length)) {
              if (iteratee(iterable[index], index, iterable) === false) {
                break;
              }
            }
            return collection;
          };
        }
        function createBaseFor(fromRight) {
          return function(object, iteratee, keysFunc) {
            var index = -1,
                iterable = Object(object),
                props = keysFunc(object),
                length = props.length;
            while (length--) {
              var key = props[fromRight ? length : ++index];
              if (iteratee(iterable[key], key, iterable) === false) {
                break;
              }
            }
            return object;
          };
        }
        function createBaseWrapper(func, bitmask, thisArg) {
          var isBind = bitmask & BIND_FLAG,
              Ctor = createCtorWrapper(func);
          function wrapper() {
            var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
            return fn.apply(isBind ? thisArg : this, arguments);
          }
          return wrapper;
        }
        function createCaseFirst(methodName) {
          return function(string) {
            string = toString(string);
            var strSymbols = reHasComplexSymbol.test(string) ? stringToArray(string) : undefined;
            var chr = strSymbols ? strSymbols[0] : string.charAt(0);
            var trailing = strSymbols ? castSlice(strSymbols, 1).join('') : string.slice(1);
            return chr[methodName]() + trailing;
          };
        }
        function createCompounder(callback) {
          return function(string) {
            return arrayReduce(words(deburr(string).replace(reApos, '')), callback, '');
          };
        }
        function createCtorWrapper(Ctor) {
          return function() {
            var args = arguments;
            switch (args.length) {
              case 0:
                return new Ctor;
              case 1:
                return new Ctor(args[0]);
              case 2:
                return new Ctor(args[0], args[1]);
              case 3:
                return new Ctor(args[0], args[1], args[2]);
              case 4:
                return new Ctor(args[0], args[1], args[2], args[3]);
              case 5:
                return new Ctor(args[0], args[1], args[2], args[3], args[4]);
              case 6:
                return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
              case 7:
                return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
            }
            var thisBinding = baseCreate(Ctor.prototype),
                result = Ctor.apply(thisBinding, args);
            return isObject(result) ? result : thisBinding;
          };
        }
        function createCurryWrapper(func, bitmask, arity) {
          var Ctor = createCtorWrapper(func);
          function wrapper() {
            var length = arguments.length,
                args = Array(length),
                index = length,
                placeholder = getHolder(wrapper);
            while (index--) {
              args[index] = arguments[index];
            }
            var holders = (length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder) ? [] : replaceHolders(args, placeholder);
            length -= holders.length;
            if (length < arity) {
              return createRecurryWrapper(func, bitmask, createHybridWrapper, wrapper.placeholder, undefined, args, holders, undefined, undefined, arity - length);
            }
            var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
            return apply(fn, this, args);
          }
          return wrapper;
        }
        function createFind(findIndexFunc) {
          return function(collection, predicate, fromIndex) {
            var iterable = Object(collection);
            predicate = getIteratee(predicate, 3);
            if (!isArrayLike(collection)) {
              var props = keys(collection);
            }
            var index = findIndexFunc(props || collection, function(value, key) {
              if (props) {
                key = value;
                value = iterable[key];
              }
              return predicate(value, key, iterable);
            }, fromIndex);
            return index > -1 ? collection[props ? props[index] : index] : undefined;
          };
        }
        function createFlow(fromRight) {
          return rest(function(funcs) {
            funcs = baseFlatten(funcs, 1);
            var length = funcs.length,
                index = length,
                prereq = LodashWrapper.prototype.thru;
            if (fromRight) {
              funcs.reverse();
            }
            while (index--) {
              var func = funcs[index];
              if (typeof func != 'function') {
                throw new TypeError(FUNC_ERROR_TEXT);
              }
              if (prereq && !wrapper && getFuncName(func) == 'wrapper') {
                var wrapper = new LodashWrapper([], true);
              }
            }
            index = wrapper ? index : length;
            while (++index < length) {
              func = funcs[index];
              var funcName = getFuncName(func),
                  data = funcName == 'wrapper' ? getData(func) : undefined;
              if (data && isLaziable(data[0]) && data[1] == (ARY_FLAG | CURRY_FLAG | PARTIAL_FLAG | REARG_FLAG) && !data[4].length && data[9] == 1) {
                wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
              } else {
                wrapper = (func.length == 1 && isLaziable(func)) ? wrapper[funcName]() : wrapper.thru(func);
              }
            }
            return function() {
              var args = arguments,
                  value = args[0];
              if (wrapper && args.length == 1 && isArray(value) && value.length >= LARGE_ARRAY_SIZE) {
                return wrapper.plant(value).value();
              }
              var index = 0,
                  result = length ? funcs[index].apply(this, args) : value;
              while (++index < length) {
                result = funcs[index].call(this, result);
              }
              return result;
            };
          });
        }
        function createHybridWrapper(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
          var isAry = bitmask & ARY_FLAG,
              isBind = bitmask & BIND_FLAG,
              isBindKey = bitmask & BIND_KEY_FLAG,
              isCurried = bitmask & (CURRY_FLAG | CURRY_RIGHT_FLAG),
              isFlip = bitmask & FLIP_FLAG,
              Ctor = isBindKey ? undefined : createCtorWrapper(func);
          function wrapper() {
            var length = arguments.length,
                args = Array(length),
                index = length;
            while (index--) {
              args[index] = arguments[index];
            }
            if (isCurried) {
              var placeholder = getHolder(wrapper),
                  holdersCount = countHolders(args, placeholder);
            }
            if (partials) {
              args = composeArgs(args, partials, holders, isCurried);
            }
            if (partialsRight) {
              args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
            }
            length -= holdersCount;
            if (isCurried && length < arity) {
              var newHolders = replaceHolders(args, placeholder);
              return createRecurryWrapper(func, bitmask, createHybridWrapper, wrapper.placeholder, thisArg, args, newHolders, argPos, ary, arity - length);
            }
            var thisBinding = isBind ? thisArg : this,
                fn = isBindKey ? thisBinding[func] : func;
            length = args.length;
            if (argPos) {
              args = reorder(args, argPos);
            } else if (isFlip && length > 1) {
              args.reverse();
            }
            if (isAry && ary < length) {
              args.length = ary;
            }
            if (this && this !== root && this instanceof wrapper) {
              fn = Ctor || createCtorWrapper(fn);
            }
            return fn.apply(thisBinding, args);
          }
          return wrapper;
        }
        function createInverter(setter, toIteratee) {
          return function(object, iteratee) {
            return baseInverter(object, setter, toIteratee(iteratee), {});
          };
        }
        function createMathOperation(operator) {
          return function(value, other) {
            var result;
            if (value === undefined && other === undefined) {
              return 0;
            }
            if (value !== undefined) {
              result = value;
            }
            if (other !== undefined) {
              if (result === undefined) {
                return other;
              }
              if (typeof value == 'string' || typeof other == 'string') {
                value = baseToString(value);
                other = baseToString(other);
              } else {
                value = baseToNumber(value);
                other = baseToNumber(other);
              }
              result = operator(value, other);
            }
            return result;
          };
        }
        function createOver(arrayFunc) {
          return rest(function(iteratees) {
            iteratees = (iteratees.length == 1 && isArray(iteratees[0])) ? arrayMap(iteratees[0], baseUnary(getIteratee())) : arrayMap(baseFlatten(iteratees, 1, isFlattenableIteratee), baseUnary(getIteratee()));
            return rest(function(args) {
              var thisArg = this;
              return arrayFunc(iteratees, function(iteratee) {
                return apply(iteratee, thisArg, args);
              });
            });
          });
        }
        function createPadding(length, chars) {
          chars = chars === undefined ? ' ' : baseToString(chars);
          var charsLength = chars.length;
          if (charsLength < 2) {
            return charsLength ? baseRepeat(chars, length) : chars;
          }
          var result = baseRepeat(chars, nativeCeil(length / stringSize(chars)));
          return reHasComplexSymbol.test(chars) ? castSlice(stringToArray(result), 0, length).join('') : result.slice(0, length);
        }
        function createPartialWrapper(func, bitmask, thisArg, partials) {
          var isBind = bitmask & BIND_FLAG,
              Ctor = createCtorWrapper(func);
          function wrapper() {
            var argsIndex = -1,
                argsLength = arguments.length,
                leftIndex = -1,
                leftLength = partials.length,
                args = Array(leftLength + argsLength),
                fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
            while (++leftIndex < leftLength) {
              args[leftIndex] = partials[leftIndex];
            }
            while (argsLength--) {
              args[leftIndex++] = arguments[++argsIndex];
            }
            return apply(fn, isBind ? thisArg : this, args);
          }
          return wrapper;
        }
        function createRange(fromRight) {
          return function(start, end, step) {
            if (step && typeof step != 'number' && isIterateeCall(start, end, step)) {
              end = step = undefined;
            }
            start = toNumber(start);
            start = start === start ? start : 0;
            if (end === undefined) {
              end = start;
              start = 0;
            } else {
              end = toNumber(end) || 0;
            }
            step = step === undefined ? (start < end ? 1 : -1) : (toNumber(step) || 0);
            return baseRange(start, end, step, fromRight);
          };
        }
        function createRelationalOperation(operator) {
          return function(value, other) {
            if (!(typeof value == 'string' && typeof other == 'string')) {
              value = toNumber(value);
              other = toNumber(other);
            }
            return operator(value, other);
          };
        }
        function createRecurryWrapper(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary, arity) {
          var isCurry = bitmask & CURRY_FLAG,
              newHolders = isCurry ? holders : undefined,
              newHoldersRight = isCurry ? undefined : holders,
              newPartials = isCurry ? partials : undefined,
              newPartialsRight = isCurry ? undefined : partials;
          bitmask |= (isCurry ? PARTIAL_FLAG : PARTIAL_RIGHT_FLAG);
          bitmask &= ~(isCurry ? PARTIAL_RIGHT_FLAG : PARTIAL_FLAG);
          if (!(bitmask & CURRY_BOUND_FLAG)) {
            bitmask &= ~(BIND_FLAG | BIND_KEY_FLAG);
          }
          var newData = [func, bitmask, thisArg, newPartials, newHolders, newPartialsRight, newHoldersRight, argPos, ary, arity];
          var result = wrapFunc.apply(undefined, newData);
          if (isLaziable(func)) {
            setData(result, newData);
          }
          result.placeholder = placeholder;
          return result;
        }
        function createRound(methodName) {
          var func = Math[methodName];
          return function(number, precision) {
            number = toNumber(number);
            precision = nativeMin(toInteger(precision), 292);
            if (precision) {
              var pair = (toString(number) + 'e').split('e'),
                  value = func(pair[0] + 'e' + (+pair[1] + precision));
              pair = (toString(value) + 'e').split('e');
              return +(pair[0] + 'e' + (+pair[1] - precision));
            }
            return func(number);
          };
        }
        var createSet = !(Set && (1 / setToArray(new Set([, -0]))[1]) == INFINITY) ? noop : function(values) {
          return new Set(values);
        };
        function createToPairs(keysFunc) {
          return function(object) {
            var tag = getTag(object);
            if (tag == mapTag) {
              return mapToArray(object);
            }
            if (tag == setTag) {
              return setToPairs(object);
            }
            return baseToPairs(object, keysFunc(object));
          };
        }
        function createWrapper(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
          var isBindKey = bitmask & BIND_KEY_FLAG;
          if (!isBindKey && typeof func != 'function') {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          var length = partials ? partials.length : 0;
          if (!length) {
            bitmask &= ~(PARTIAL_FLAG | PARTIAL_RIGHT_FLAG);
            partials = holders = undefined;
          }
          ary = ary === undefined ? ary : nativeMax(toInteger(ary), 0);
          arity = arity === undefined ? arity : toInteger(arity);
          length -= holders ? holders.length : 0;
          if (bitmask & PARTIAL_RIGHT_FLAG) {
            var partialsRight = partials,
                holdersRight = holders;
            partials = holders = undefined;
          }
          var data = isBindKey ? undefined : getData(func);
          var newData = [func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity];
          if (data) {
            mergeData(newData, data);
          }
          func = newData[0];
          bitmask = newData[1];
          thisArg = newData[2];
          partials = newData[3];
          holders = newData[4];
          arity = newData[9] = newData[9] == null ? (isBindKey ? 0 : func.length) : nativeMax(newData[9] - length, 0);
          if (!arity && bitmask & (CURRY_FLAG | CURRY_RIGHT_FLAG)) {
            bitmask &= ~(CURRY_FLAG | CURRY_RIGHT_FLAG);
          }
          if (!bitmask || bitmask == BIND_FLAG) {
            var result = createBaseWrapper(func, bitmask, thisArg);
          } else if (bitmask == CURRY_FLAG || bitmask == CURRY_RIGHT_FLAG) {
            result = createCurryWrapper(func, bitmask, arity);
          } else if ((bitmask == PARTIAL_FLAG || bitmask == (BIND_FLAG | PARTIAL_FLAG)) && !holders.length) {
            result = createPartialWrapper(func, bitmask, thisArg, partials);
          } else {
            result = createHybridWrapper.apply(undefined, newData);
          }
          var setter = data ? baseSetData : setData;
          return setter(result, newData);
        }
        function equalArrays(array, other, equalFunc, customizer, bitmask, stack) {
          var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
              arrLength = array.length,
              othLength = other.length;
          if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
            return false;
          }
          var stacked = stack.get(array);
          if (stacked) {
            return stacked == other;
          }
          var index = -1,
              result = true,
              seen = (bitmask & UNORDERED_COMPARE_FLAG) ? new SetCache : undefined;
          stack.set(array, other);
          while (++index < arrLength) {
            var arrValue = array[index],
                othValue = other[index];
            if (customizer) {
              var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
            }
            if (compared !== undefined) {
              if (compared) {
                continue;
              }
              result = false;
              break;
            }
            if (seen) {
              if (!arraySome(other, function(othValue, othIndex) {
                if (!seen.has(othIndex) && (arrValue === othValue || equalFunc(arrValue, othValue, customizer, bitmask, stack))) {
                  return seen.add(othIndex);
                }
              })) {
                result = false;
                break;
              }
            } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, customizer, bitmask, stack))) {
              result = false;
              break;
            }
          }
          stack['delete'](array);
          return result;
        }
        function equalByTag(object, other, tag, equalFunc, customizer, bitmask, stack) {
          switch (tag) {
            case dataViewTag:
              if ((object.byteLength != other.byteLength) || (object.byteOffset != other.byteOffset)) {
                return false;
              }
              object = object.buffer;
              other = other.buffer;
            case arrayBufferTag:
              if ((object.byteLength != other.byteLength) || !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
                return false;
              }
              return true;
            case boolTag:
            case dateTag:
              return +object == +other;
            case errorTag:
              return object.name == other.name && object.message == other.message;
            case numberTag:
              return (object != +object) ? other != +other : object == +other;
            case regexpTag:
            case stringTag:
              return object == (other + '');
            case mapTag:
              var convert = mapToArray;
            case setTag:
              var isPartial = bitmask & PARTIAL_COMPARE_FLAG;
              convert || (convert = setToArray);
              if (object.size != other.size && !isPartial) {
                return false;
              }
              var stacked = stack.get(object);
              if (stacked) {
                return stacked == other;
              }
              bitmask |= UNORDERED_COMPARE_FLAG;
              stack.set(object, other);
              return equalArrays(convert(object), convert(other), equalFunc, customizer, bitmask, stack);
            case symbolTag:
              if (symbolValueOf) {
                return symbolValueOf.call(object) == symbolValueOf.call(other);
              }
          }
          return false;
        }
        function equalObjects(object, other, equalFunc, customizer, bitmask, stack) {
          var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
              objProps = keys(object),
              objLength = objProps.length,
              othProps = keys(other),
              othLength = othProps.length;
          if (objLength != othLength && !isPartial) {
            return false;
          }
          var index = objLength;
          while (index--) {
            var key = objProps[index];
            if (!(isPartial ? key in other : baseHas(other, key))) {
              return false;
            }
          }
          var stacked = stack.get(object);
          if (stacked) {
            return stacked == other;
          }
          var result = true;
          stack.set(object, other);
          var skipCtor = isPartial;
          while (++index < objLength) {
            key = objProps[index];
            var objValue = object[key],
                othValue = other[key];
            if (customizer) {
              var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
            }
            if (!(compared === undefined ? (objValue === othValue || equalFunc(objValue, othValue, customizer, bitmask, stack)) : compared)) {
              result = false;
              break;
            }
            skipCtor || (skipCtor = key == 'constructor');
          }
          if (result && !skipCtor) {
            var objCtor = object.constructor,
                othCtor = other.constructor;
            if (objCtor != othCtor && ('constructor' in object && 'constructor' in other) && !(typeof objCtor == 'function' && objCtor instanceof objCtor && typeof othCtor == 'function' && othCtor instanceof othCtor)) {
              result = false;
            }
          }
          stack['delete'](object);
          return result;
        }
        function getAllKeys(object) {
          return baseGetAllKeys(object, keys, getSymbols);
        }
        function getAllKeysIn(object) {
          return baseGetAllKeys(object, keysIn, getSymbolsIn);
        }
        var getData = !metaMap ? noop : function(func) {
          return metaMap.get(func);
        };
        function getFuncName(func) {
          var result = (func.name + ''),
              array = realNames[result],
              length = hasOwnProperty.call(realNames, result) ? array.length : 0;
          while (length--) {
            var data = array[length],
                otherFunc = data.func;
            if (otherFunc == null || otherFunc == func) {
              return data.name;
            }
          }
          return result;
        }
        function getHolder(func) {
          var object = hasOwnProperty.call(lodash, 'placeholder') ? lodash : func;
          return object.placeholder;
        }
        function getIteratee() {
          var result = lodash.iteratee || iteratee;
          result = result === iteratee ? baseIteratee : result;
          return arguments.length ? result(arguments[0], arguments[1]) : result;
        }
        var getLength = baseProperty('length');
        function getMapData(map, key) {
          var data = map.__data__;
          return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
        }
        function getMatchData(object) {
          var result = keys(object),
              length = result.length;
          while (length--) {
            var key = result[length],
                value = object[key];
            result[length] = [key, value, isStrictComparable(value)];
          }
          return result;
        }
        function getNative(object, key) {
          var value = getValue(object, key);
          return baseIsNative(value) ? value : undefined;
        }
        function getPrototype(value) {
          return nativeGetPrototype(Object(value));
        }
        function getSymbols(object) {
          return getOwnPropertySymbols(Object(object));
        }
        if (!getOwnPropertySymbols) {
          getSymbols = stubArray;
        }
        var getSymbolsIn = !getOwnPropertySymbols ? getSymbols : function(object) {
          var result = [];
          while (object) {
            arrayPush(result, getSymbols(object));
            object = getPrototype(object);
          }
          return result;
        };
        function getTag(value) {
          return objectToString.call(value);
        }
        if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) || (Map && getTag(new Map) != mapTag) || (Promise && getTag(Promise.resolve()) != promiseTag) || (Set && getTag(new Set) != setTag) || (WeakMap && getTag(new WeakMap) != weakMapTag)) {
          getTag = function(value) {
            var result = objectToString.call(value),
                Ctor = result == objectTag ? value.constructor : undefined,
                ctorString = Ctor ? toSource(Ctor) : undefined;
            if (ctorString) {
              switch (ctorString) {
                case dataViewCtorString:
                  return dataViewTag;
                case mapCtorString:
                  return mapTag;
                case promiseCtorString:
                  return promiseTag;
                case setCtorString:
                  return setTag;
                case weakMapCtorString:
                  return weakMapTag;
              }
            }
            return result;
          };
        }
        function getView(start, end, transforms) {
          var index = -1,
              length = transforms.length;
          while (++index < length) {
            var data = transforms[index],
                size = data.size;
            switch (data.type) {
              case 'drop':
                start += size;
                break;
              case 'dropRight':
                end -= size;
                break;
              case 'take':
                end = nativeMin(end, start + size);
                break;
              case 'takeRight':
                start = nativeMax(start, end - size);
                break;
            }
          }
          return {
            'start': start,
            'end': end
          };
        }
        function hasPath(object, path, hasFunc) {
          path = isKey(path, object) ? [path] : castPath(path);
          var result,
              index = -1,
              length = path.length;
          while (++index < length) {
            var key = toKey(path[index]);
            if (!(result = object != null && hasFunc(object, key))) {
              break;
            }
            object = object[key];
          }
          if (result) {
            return result;
          }
          var length = object ? object.length : 0;
          return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isString(object) || isArguments(object));
        }
        function initCloneArray(array) {
          var length = array.length,
              result = array.constructor(length);
          if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
            result.index = array.index;
            result.input = array.input;
          }
          return result;
        }
        function initCloneObject(object) {
          return (typeof object.constructor == 'function' && !isPrototype(object)) ? baseCreate(getPrototype(object)) : {};
        }
        function initCloneByTag(object, tag, cloneFunc, isDeep) {
          var Ctor = object.constructor;
          switch (tag) {
            case arrayBufferTag:
              return cloneArrayBuffer(object);
            case boolTag:
            case dateTag:
              return new Ctor(+object);
            case dataViewTag:
              return cloneDataView(object, isDeep);
            case float32Tag:
            case float64Tag:
            case int8Tag:
            case int16Tag:
            case int32Tag:
            case uint8Tag:
            case uint8ClampedTag:
            case uint16Tag:
            case uint32Tag:
              return cloneTypedArray(object, isDeep);
            case mapTag:
              return cloneMap(object, isDeep, cloneFunc);
            case numberTag:
            case stringTag:
              return new Ctor(object);
            case regexpTag:
              return cloneRegExp(object);
            case setTag:
              return cloneSet(object, isDeep, cloneFunc);
            case symbolTag:
              return cloneSymbol(object);
          }
        }
        function indexKeys(object) {
          var length = object ? object.length : undefined;
          if (isLength(length) && (isArray(object) || isString(object) || isArguments(object))) {
            return baseTimes(length, String);
          }
          return null;
        }
        function isFlattenable(value) {
          return isArray(value) || isArguments(value);
        }
        function isFlattenableIteratee(value) {
          return isArray(value) && !(value.length == 2 && !isFunction(value[0]));
        }
        function isIndex(value, length) {
          length = length == null ? MAX_SAFE_INTEGER : length;
          return !!length && (typeof value == 'number' || reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
        }
        function isIterateeCall(value, index, object) {
          if (!isObject(object)) {
            return false;
          }
          var type = typeof index;
          if (type == 'number' ? (isArrayLike(object) && isIndex(index, object.length)) : (type == 'string' && index in object)) {
            return eq(object[index], value);
          }
          return false;
        }
        function isKey(value, object) {
          if (isArray(value)) {
            return false;
          }
          var type = typeof value;
          if (type == 'number' || type == 'symbol' || type == 'boolean' || value == null || isSymbol(value)) {
            return true;
          }
          return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || (object != null && value in Object(object));
        }
        function isKeyable(value) {
          var type = typeof value;
          return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean') ? (value !== '__proto__') : (value === null);
        }
        function isLaziable(func) {
          var funcName = getFuncName(func),
              other = lodash[funcName];
          if (typeof other != 'function' || !(funcName in LazyWrapper.prototype)) {
            return false;
          }
          if (func === other) {
            return true;
          }
          var data = getData(other);
          return !!data && func === data[0];
        }
        function isMasked(func) {
          return !!maskSrcKey && (maskSrcKey in func);
        }
        var isMaskable = coreJsData ? isFunction : stubFalse;
        function isPrototype(value) {
          var Ctor = value && value.constructor,
              proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;
          return value === proto;
        }
        function isStrictComparable(value) {
          return value === value && !isObject(value);
        }
        function matchesStrictComparable(key, srcValue) {
          return function(object) {
            if (object == null) {
              return false;
            }
            return object[key] === srcValue && (srcValue !== undefined || (key in Object(object)));
          };
        }
        function mergeData(data, source) {
          var bitmask = data[1],
              srcBitmask = source[1],
              newBitmask = bitmask | srcBitmask,
              isCommon = newBitmask < (BIND_FLAG | BIND_KEY_FLAG | ARY_FLAG);
          var isCombo = ((srcBitmask == ARY_FLAG) && (bitmask == CURRY_FLAG)) || ((srcBitmask == ARY_FLAG) && (bitmask == REARG_FLAG) && (data[7].length <= source[8])) || ((srcBitmask == (ARY_FLAG | REARG_FLAG)) && (source[7].length <= source[8]) && (bitmask == CURRY_FLAG));
          if (!(isCommon || isCombo)) {
            return data;
          }
          if (srcBitmask & BIND_FLAG) {
            data[2] = source[2];
            newBitmask |= bitmask & BIND_FLAG ? 0 : CURRY_BOUND_FLAG;
          }
          var value = source[3];
          if (value) {
            var partials = data[3];
            data[3] = partials ? composeArgs(partials, value, source[4]) : value;
            data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4];
          }
          value = source[5];
          if (value) {
            partials = data[5];
            data[5] = partials ? composeArgsRight(partials, value, source[6]) : value;
            data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6];
          }
          value = source[7];
          if (value) {
            data[7] = value;
          }
          if (srcBitmask & ARY_FLAG) {
            data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
          }
          if (data[9] == null) {
            data[9] = source[9];
          }
          data[0] = source[0];
          data[1] = newBitmask;
          return data;
        }
        function mergeDefaults(objValue, srcValue, key, object, source, stack) {
          if (isObject(objValue) && isObject(srcValue)) {
            baseMerge(objValue, srcValue, undefined, mergeDefaults, stack.set(srcValue, objValue));
          }
          return objValue;
        }
        function parent(object, path) {
          return path.length == 1 ? object : baseGet(object, baseSlice(path, 0, -1));
        }
        function reorder(array, indexes) {
          var arrLength = array.length,
              length = nativeMin(indexes.length, arrLength),
              oldArray = copyArray(array);
          while (length--) {
            var index = indexes[length];
            array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined;
          }
          return array;
        }
        var setData = (function() {
          var count = 0,
              lastCalled = 0;
          return function(key, value) {
            var stamp = now(),
                remaining = HOT_SPAN - (stamp - lastCalled);
            lastCalled = stamp;
            if (remaining > 0) {
              if (++count >= HOT_COUNT) {
                return key;
              }
            } else {
              count = 0;
            }
            return baseSetData(key, value);
          };
        }());
        var stringToPath = memoize(function(string) {
          var result = [];
          toString(string).replace(rePropName, function(match, number, quote, string) {
            result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
          });
          return result;
        });
        function toKey(value) {
          if (typeof value == 'string' || isSymbol(value)) {
            return value;
          }
          var result = (value + '');
          return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
        }
        function toSource(func) {
          if (func != null) {
            try {
              return funcToString.call(func);
            } catch (e) {}
            try {
              return (func + '');
            } catch (e) {}
          }
          return '';
        }
        function wrapperClone(wrapper) {
          if (wrapper instanceof LazyWrapper) {
            return wrapper.clone();
          }
          var result = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
          result.__actions__ = copyArray(wrapper.__actions__);
          result.__index__ = wrapper.__index__;
          result.__values__ = wrapper.__values__;
          return result;
        }
        function chunk(array, size, guard) {
          if ((guard ? isIterateeCall(array, size, guard) : size === undefined)) {
            size = 1;
          } else {
            size = nativeMax(toInteger(size), 0);
          }
          var length = array ? array.length : 0;
          if (!length || size < 1) {
            return [];
          }
          var index = 0,
              resIndex = 0,
              result = Array(nativeCeil(length / size));
          while (index < length) {
            result[resIndex++] = baseSlice(array, index, (index += size));
          }
          return result;
        }
        function compact(array) {
          var index = -1,
              length = array ? array.length : 0,
              resIndex = 0,
              result = [];
          while (++index < length) {
            var value = array[index];
            if (value) {
              result[resIndex++] = value;
            }
          }
          return result;
        }
        function concat() {
          var length = arguments.length,
              args = Array(length ? length - 1 : 0),
              array = arguments[0],
              index = length;
          while (index--) {
            args[index - 1] = arguments[index];
          }
          return length ? arrayPush(isArray(array) ? copyArray(array) : [array], baseFlatten(args, 1)) : [];
        }
        var difference = rest(function(array, values) {
          return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true)) : [];
        });
        var differenceBy = rest(function(array, values) {
          var iteratee = last(values);
          if (isArrayLikeObject(iteratee)) {
            iteratee = undefined;
          }
          return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true), getIteratee(iteratee)) : [];
        });
        var differenceWith = rest(function(array, values) {
          var comparator = last(values);
          if (isArrayLikeObject(comparator)) {
            comparator = undefined;
          }
          return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true), undefined, comparator) : [];
        });
        function drop(array, n, guard) {
          var length = array ? array.length : 0;
          if (!length) {
            return [];
          }
          n = (guard || n === undefined) ? 1 : toInteger(n);
          return baseSlice(array, n < 0 ? 0 : n, length);
        }
        function dropRight(array, n, guard) {
          var length = array ? array.length : 0;
          if (!length) {
            return [];
          }
          n = (guard || n === undefined) ? 1 : toInteger(n);
          n = length - n;
          return baseSlice(array, 0, n < 0 ? 0 : n);
        }
        function dropRightWhile(array, predicate) {
          return (array && array.length) ? baseWhile(array, getIteratee(predicate, 3), true, true) : [];
        }
        function dropWhile(array, predicate) {
          return (array && array.length) ? baseWhile(array, getIteratee(predicate, 3), true) : [];
        }
        function fill(array, value, start, end) {
          var length = array ? array.length : 0;
          if (!length) {
            return [];
          }
          if (start && typeof start != 'number' && isIterateeCall(array, value, start)) {
            start = 0;
            end = length;
          }
          return baseFill(array, value, start, end);
        }
        function findIndex(array, predicate, fromIndex) {
          var length = array ? array.length : 0;
          if (!length) {
            return -1;
          }
          var index = fromIndex == null ? 0 : toInteger(fromIndex);
          if (index < 0) {
            index = nativeMax(length + index, 0);
          }
          return baseFindIndex(array, getIteratee(predicate, 3), index);
        }
        function findLastIndex(array, predicate, fromIndex) {
          var length = array ? array.length : 0;
          if (!length) {
            return -1;
          }
          var index = length - 1;
          if (fromIndex !== undefined) {
            index = toInteger(fromIndex);
            index = fromIndex < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
          }
          return baseFindIndex(array, getIteratee(predicate, 3), index, true);
        }
        function flatten(array) {
          var length = array ? array.length : 0;
          return length ? baseFlatten(array, 1) : [];
        }
        function flattenDeep(array) {
          var length = array ? array.length : 0;
          return length ? baseFlatten(array, INFINITY) : [];
        }
        function flattenDepth(array, depth) {
          var length = array ? array.length : 0;
          if (!length) {
            return [];
          }
          depth = depth === undefined ? 1 : toInteger(depth);
          return baseFlatten(array, depth);
        }
        function fromPairs(pairs) {
          var index = -1,
              length = pairs ? pairs.length : 0,
              result = {};
          while (++index < length) {
            var pair = pairs[index];
            result[pair[0]] = pair[1];
          }
          return result;
        }
        function head(array) {
          return (array && array.length) ? array[0] : undefined;
        }
        function indexOf(array, value, fromIndex) {
          var length = array ? array.length : 0;
          if (!length) {
            return -1;
          }
          var index = fromIndex == null ? 0 : toInteger(fromIndex);
          if (index < 0) {
            index = nativeMax(length + index, 0);
          }
          return baseIndexOf(array, value, index);
        }
        function initial(array) {
          return dropRight(array, 1);
        }
        var intersection = rest(function(arrays) {
          var mapped = arrayMap(arrays, castArrayLikeObject);
          return (mapped.length && mapped[0] === arrays[0]) ? baseIntersection(mapped) : [];
        });
        var intersectionBy = rest(function(arrays) {
          var iteratee = last(arrays),
              mapped = arrayMap(arrays, castArrayLikeObject);
          if (iteratee === last(mapped)) {
            iteratee = undefined;
          } else {
            mapped.pop();
          }
          return (mapped.length && mapped[0] === arrays[0]) ? baseIntersection(mapped, getIteratee(iteratee)) : [];
        });
        var intersectionWith = rest(function(arrays) {
          var comparator = last(arrays),
              mapped = arrayMap(arrays, castArrayLikeObject);
          if (comparator === last(mapped)) {
            comparator = undefined;
          } else {
            mapped.pop();
          }
          return (mapped.length && mapped[0] === arrays[0]) ? baseIntersection(mapped, undefined, comparator) : [];
        });
        function join(array, separator) {
          return array ? nativeJoin.call(array, separator) : '';
        }
        function last(array) {
          var length = array ? array.length : 0;
          return length ? array[length - 1] : undefined;
        }
        function lastIndexOf(array, value, fromIndex) {
          var length = array ? array.length : 0;
          if (!length) {
            return -1;
          }
          var index = length;
          if (fromIndex !== undefined) {
            index = toInteger(fromIndex);
            index = (index < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1)) + 1;
          }
          if (value !== value) {
            return indexOfNaN(array, index - 1, true);
          }
          while (index--) {
            if (array[index] === value) {
              return index;
            }
          }
          return -1;
        }
        function nth(array, n) {
          return (array && array.length) ? baseNth(array, toInteger(n)) : undefined;
        }
        var pull = rest(pullAll);
        function pullAll(array, values) {
          return (array && array.length && values && values.length) ? basePullAll(array, values) : array;
        }
        function pullAllBy(array, values, iteratee) {
          return (array && array.length && values && values.length) ? basePullAll(array, values, getIteratee(iteratee)) : array;
        }
        function pullAllWith(array, values, comparator) {
          return (array && array.length && values && values.length) ? basePullAll(array, values, undefined, comparator) : array;
        }
        var pullAt = rest(function(array, indexes) {
          indexes = baseFlatten(indexes, 1);
          var length = array ? array.length : 0,
              result = baseAt(array, indexes);
          basePullAt(array, arrayMap(indexes, function(index) {
            return isIndex(index, length) ? +index : index;
          }).sort(compareAscending));
          return result;
        });
        function remove(array, predicate) {
          var result = [];
          if (!(array && array.length)) {
            return result;
          }
          var index = -1,
              indexes = [],
              length = array.length;
          predicate = getIteratee(predicate, 3);
          while (++index < length) {
            var value = array[index];
            if (predicate(value, index, array)) {
              result.push(value);
              indexes.push(index);
            }
          }
          basePullAt(array, indexes);
          return result;
        }
        function reverse(array) {
          return array ? nativeReverse.call(array) : array;
        }
        function slice(array, start, end) {
          var length = array ? array.length : 0;
          if (!length) {
            return [];
          }
          if (end && typeof end != 'number' && isIterateeCall(array, start, end)) {
            start = 0;
            end = length;
          } else {
            start = start == null ? 0 : toInteger(start);
            end = end === undefined ? length : toInteger(end);
          }
          return baseSlice(array, start, end);
        }
        function sortedIndex(array, value) {
          return baseSortedIndex(array, value);
        }
        function sortedIndexBy(array, value, iteratee) {
          return baseSortedIndexBy(array, value, getIteratee(iteratee));
        }
        function sortedIndexOf(array, value) {
          var length = array ? array.length : 0;
          if (length) {
            var index = baseSortedIndex(array, value);
            if (index < length && eq(array[index], value)) {
              return index;
            }
          }
          return -1;
        }
        function sortedLastIndex(array, value) {
          return baseSortedIndex(array, value, true);
        }
        function sortedLastIndexBy(array, value, iteratee) {
          return baseSortedIndexBy(array, value, getIteratee(iteratee), true);
        }
        function sortedLastIndexOf(array, value) {
          var length = array ? array.length : 0;
          if (length) {
            var index = baseSortedIndex(array, value, true) - 1;
            if (eq(array[index], value)) {
              return index;
            }
          }
          return -1;
        }
        function sortedUniq(array) {
          return (array && array.length) ? baseSortedUniq(array) : [];
        }
        function sortedUniqBy(array, iteratee) {
          return (array && array.length) ? baseSortedUniq(array, getIteratee(iteratee)) : [];
        }
        function tail(array) {
          return drop(array, 1);
        }
        function take(array, n, guard) {
          if (!(array && array.length)) {
            return [];
          }
          n = (guard || n === undefined) ? 1 : toInteger(n);
          return baseSlice(array, 0, n < 0 ? 0 : n);
        }
        function takeRight(array, n, guard) {
          var length = array ? array.length : 0;
          if (!length) {
            return [];
          }
          n = (guard || n === undefined) ? 1 : toInteger(n);
          n = length - n;
          return baseSlice(array, n < 0 ? 0 : n, length);
        }
        function takeRightWhile(array, predicate) {
          return (array && array.length) ? baseWhile(array, getIteratee(predicate, 3), false, true) : [];
        }
        function takeWhile(array, predicate) {
          return (array && array.length) ? baseWhile(array, getIteratee(predicate, 3)) : [];
        }
        var union = rest(function(arrays) {
          return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
        });
        var unionBy = rest(function(arrays) {
          var iteratee = last(arrays);
          if (isArrayLikeObject(iteratee)) {
            iteratee = undefined;
          }
          return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), getIteratee(iteratee));
        });
        var unionWith = rest(function(arrays) {
          var comparator = last(arrays);
          if (isArrayLikeObject(comparator)) {
            comparator = undefined;
          }
          return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), undefined, comparator);
        });
        function uniq(array) {
          return (array && array.length) ? baseUniq(array) : [];
        }
        function uniqBy(array, iteratee) {
          return (array && array.length) ? baseUniq(array, getIteratee(iteratee)) : [];
        }
        function uniqWith(array, comparator) {
          return (array && array.length) ? baseUniq(array, undefined, comparator) : [];
        }
        function unzip(array) {
          if (!(array && array.length)) {
            return [];
          }
          var length = 0;
          array = arrayFilter(array, function(group) {
            if (isArrayLikeObject(group)) {
              length = nativeMax(group.length, length);
              return true;
            }
          });
          return baseTimes(length, function(index) {
            return arrayMap(array, baseProperty(index));
          });
        }
        function unzipWith(array, iteratee) {
          if (!(array && array.length)) {
            return [];
          }
          var result = unzip(array);
          if (iteratee == null) {
            return result;
          }
          return arrayMap(result, function(group) {
            return apply(iteratee, undefined, group);
          });
        }
        var without = rest(function(array, values) {
          return isArrayLikeObject(array) ? baseDifference(array, values) : [];
        });
        var xor = rest(function(arrays) {
          return baseXor(arrayFilter(arrays, isArrayLikeObject));
        });
        var xorBy = rest(function(arrays) {
          var iteratee = last(arrays);
          if (isArrayLikeObject(iteratee)) {
            iteratee = undefined;
          }
          return baseXor(arrayFilter(arrays, isArrayLikeObject), getIteratee(iteratee));
        });
        var xorWith = rest(function(arrays) {
          var comparator = last(arrays);
          if (isArrayLikeObject(comparator)) {
            comparator = undefined;
          }
          return baseXor(arrayFilter(arrays, isArrayLikeObject), undefined, comparator);
        });
        var zip = rest(unzip);
        function zipObject(props, values) {
          return baseZipObject(props || [], values || [], assignValue);
        }
        function zipObjectDeep(props, values) {
          return baseZipObject(props || [], values || [], baseSet);
        }
        var zipWith = rest(function(arrays) {
          var length = arrays.length,
              iteratee = length > 1 ? arrays[length - 1] : undefined;
          iteratee = typeof iteratee == 'function' ? (arrays.pop(), iteratee) : undefined;
          return unzipWith(arrays, iteratee);
        });
        function chain(value) {
          var result = lodash(value);
          result.__chain__ = true;
          return result;
        }
        function tap(value, interceptor) {
          interceptor(value);
          return value;
        }
        function thru(value, interceptor) {
          return interceptor(value);
        }
        var wrapperAt = rest(function(paths) {
          paths = baseFlatten(paths, 1);
          var length = paths.length,
              start = length ? paths[0] : 0,
              value = this.__wrapped__,
              interceptor = function(object) {
                return baseAt(object, paths);
              };
          if (length > 1 || this.__actions__.length || !(value instanceof LazyWrapper) || !isIndex(start)) {
            return this.thru(interceptor);
          }
          value = value.slice(start, +start + (length ? 1 : 0));
          value.__actions__.push({
            'func': thru,
            'args': [interceptor],
            'thisArg': undefined
          });
          return new LodashWrapper(value, this.__chain__).thru(function(array) {
            if (length && !array.length) {
              array.push(undefined);
            }
            return array;
          });
        });
        function wrapperChain() {
          return chain(this);
        }
        function wrapperCommit() {
          return new LodashWrapper(this.value(), this.__chain__);
        }
        function wrapperNext() {
          if (this.__values__ === undefined) {
            this.__values__ = toArray(this.value());
          }
          var done = this.__index__ >= this.__values__.length,
              value = done ? undefined : this.__values__[this.__index__++];
          return {
            'done': done,
            'value': value
          };
        }
        function wrapperToIterator() {
          return this;
        }
        function wrapperPlant(value) {
          var result,
              parent = this;
          while (parent instanceof baseLodash) {
            var clone = wrapperClone(parent);
            clone.__index__ = 0;
            clone.__values__ = undefined;
            if (result) {
              previous.__wrapped__ = clone;
            } else {
              result = clone;
            }
            var previous = clone;
            parent = parent.__wrapped__;
          }
          previous.__wrapped__ = value;
          return result;
        }
        function wrapperReverse() {
          var value = this.__wrapped__;
          if (value instanceof LazyWrapper) {
            var wrapped = value;
            if (this.__actions__.length) {
              wrapped = new LazyWrapper(this);
            }
            wrapped = wrapped.reverse();
            wrapped.__actions__.push({
              'func': thru,
              'args': [reverse],
              'thisArg': undefined
            });
            return new LodashWrapper(wrapped, this.__chain__);
          }
          return this.thru(reverse);
        }
        function wrapperValue() {
          return baseWrapperValue(this.__wrapped__, this.__actions__);
        }
        var countBy = createAggregator(function(result, value, key) {
          hasOwnProperty.call(result, key) ? ++result[key] : (result[key] = 1);
        });
        function every(collection, predicate, guard) {
          var func = isArray(collection) ? arrayEvery : baseEvery;
          if (guard && isIterateeCall(collection, predicate, guard)) {
            predicate = undefined;
          }
          return func(collection, getIteratee(predicate, 3));
        }
        function filter(collection, predicate) {
          var func = isArray(collection) ? arrayFilter : baseFilter;
          return func(collection, getIteratee(predicate, 3));
        }
        var find = createFind(findIndex);
        var findLast = createFind(findLastIndex);
        function flatMap(collection, iteratee) {
          return baseFlatten(map(collection, iteratee), 1);
        }
        function flatMapDeep(collection, iteratee) {
          return baseFlatten(map(collection, iteratee), INFINITY);
        }
        function flatMapDepth(collection, iteratee, depth) {
          depth = depth === undefined ? 1 : toInteger(depth);
          return baseFlatten(map(collection, iteratee), depth);
        }
        function forEach(collection, iteratee) {
          var func = isArray(collection) ? arrayEach : baseEach;
          return func(collection, getIteratee(iteratee, 3));
        }
        function forEachRight(collection, iteratee) {
          var func = isArray(collection) ? arrayEachRight : baseEachRight;
          return func(collection, getIteratee(iteratee, 3));
        }
        var groupBy = createAggregator(function(result, value, key) {
          if (hasOwnProperty.call(result, key)) {
            result[key].push(value);
          } else {
            result[key] = [value];
          }
        });
        function includes(collection, value, fromIndex, guard) {
          collection = isArrayLike(collection) ? collection : values(collection);
          fromIndex = (fromIndex && !guard) ? toInteger(fromIndex) : 0;
          var length = collection.length;
          if (fromIndex < 0) {
            fromIndex = nativeMax(length + fromIndex, 0);
          }
          return isString(collection) ? (fromIndex <= length && collection.indexOf(value, fromIndex) > -1) : (!!length && baseIndexOf(collection, value, fromIndex) > -1);
        }
        var invokeMap = rest(function(collection, path, args) {
          var index = -1,
              isFunc = typeof path == 'function',
              isProp = isKey(path),
              result = isArrayLike(collection) ? Array(collection.length) : [];
          baseEach(collection, function(value) {
            var func = isFunc ? path : ((isProp && value != null) ? value[path] : undefined);
            result[++index] = func ? apply(func, value, args) : baseInvoke(value, path, args);
          });
          return result;
        });
        var keyBy = createAggregator(function(result, value, key) {
          result[key] = value;
        });
        function map(collection, iteratee) {
          var func = isArray(collection) ? arrayMap : baseMap;
          return func(collection, getIteratee(iteratee, 3));
        }
        function orderBy(collection, iteratees, orders, guard) {
          if (collection == null) {
            return [];
          }
          if (!isArray(iteratees)) {
            iteratees = iteratees == null ? [] : [iteratees];
          }
          orders = guard ? undefined : orders;
          if (!isArray(orders)) {
            orders = orders == null ? [] : [orders];
          }
          return baseOrderBy(collection, iteratees, orders);
        }
        var partition = createAggregator(function(result, value, key) {
          result[key ? 0 : 1].push(value);
        }, function() {
          return [[], []];
        });
        function reduce(collection, iteratee, accumulator) {
          var func = isArray(collection) ? arrayReduce : baseReduce,
              initAccum = arguments.length < 3;
          return func(collection, getIteratee(iteratee, 4), accumulator, initAccum, baseEach);
        }
        function reduceRight(collection, iteratee, accumulator) {
          var func = isArray(collection) ? arrayReduceRight : baseReduce,
              initAccum = arguments.length < 3;
          return func(collection, getIteratee(iteratee, 4), accumulator, initAccum, baseEachRight);
        }
        function reject(collection, predicate) {
          var func = isArray(collection) ? arrayFilter : baseFilter;
          predicate = getIteratee(predicate, 3);
          return func(collection, function(value, index, collection) {
            return !predicate(value, index, collection);
          });
        }
        function sample(collection) {
          var array = isArrayLike(collection) ? collection : values(collection),
              length = array.length;
          return length > 0 ? array[baseRandom(0, length - 1)] : undefined;
        }
        function sampleSize(collection, n, guard) {
          var index = -1,
              result = toArray(collection),
              length = result.length,
              lastIndex = length - 1;
          if ((guard ? isIterateeCall(collection, n, guard) : n === undefined)) {
            n = 1;
          } else {
            n = baseClamp(toInteger(n), 0, length);
          }
          while (++index < n) {
            var rand = baseRandom(index, lastIndex),
                value = result[rand];
            result[rand] = result[index];
            result[index] = value;
          }
          result.length = n;
          return result;
        }
        function shuffle(collection) {
          return sampleSize(collection, MAX_ARRAY_LENGTH);
        }
        function size(collection) {
          if (collection == null) {
            return 0;
          }
          if (isArrayLike(collection)) {
            var result = collection.length;
            return (result && isString(collection)) ? stringSize(collection) : result;
          }
          if (isObjectLike(collection)) {
            var tag = getTag(collection);
            if (tag == mapTag || tag == setTag) {
              return collection.size;
            }
          }
          return keys(collection).length;
        }
        function some(collection, predicate, guard) {
          var func = isArray(collection) ? arraySome : baseSome;
          if (guard && isIterateeCall(collection, predicate, guard)) {
            predicate = undefined;
          }
          return func(collection, getIteratee(predicate, 3));
        }
        var sortBy = rest(function(collection, iteratees) {
          if (collection == null) {
            return [];
          }
          var length = iteratees.length;
          if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
            iteratees = [];
          } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
            iteratees = [iteratees[0]];
          }
          iteratees = (iteratees.length == 1 && isArray(iteratees[0])) ? iteratees[0] : baseFlatten(iteratees, 1, isFlattenableIteratee);
          return baseOrderBy(collection, iteratees, []);
        });
        function now() {
          return Date.now();
        }
        function after(n, func) {
          if (typeof func != 'function') {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          n = toInteger(n);
          return function() {
            if (--n < 1) {
              return func.apply(this, arguments);
            }
          };
        }
        function ary(func, n, guard) {
          n = guard ? undefined : n;
          n = (func && n == null) ? func.length : n;
          return createWrapper(func, ARY_FLAG, undefined, undefined, undefined, undefined, n);
        }
        function before(n, func) {
          var result;
          if (typeof func != 'function') {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          n = toInteger(n);
          return function() {
            if (--n > 0) {
              result = func.apply(this, arguments);
            }
            if (n <= 1) {
              func = undefined;
            }
            return result;
          };
        }
        var bind = rest(function(func, thisArg, partials) {
          var bitmask = BIND_FLAG;
          if (partials.length) {
            var holders = replaceHolders(partials, getHolder(bind));
            bitmask |= PARTIAL_FLAG;
          }
          return createWrapper(func, bitmask, thisArg, partials, holders);
        });
        var bindKey = rest(function(object, key, partials) {
          var bitmask = BIND_FLAG | BIND_KEY_FLAG;
          if (partials.length) {
            var holders = replaceHolders(partials, getHolder(bindKey));
            bitmask |= PARTIAL_FLAG;
          }
          return createWrapper(key, bitmask, object, partials, holders);
        });
        function curry(func, arity, guard) {
          arity = guard ? undefined : arity;
          var result = createWrapper(func, CURRY_FLAG, undefined, undefined, undefined, undefined, undefined, arity);
          result.placeholder = curry.placeholder;
          return result;
        }
        function curryRight(func, arity, guard) {
          arity = guard ? undefined : arity;
          var result = createWrapper(func, CURRY_RIGHT_FLAG, undefined, undefined, undefined, undefined, undefined, arity);
          result.placeholder = curryRight.placeholder;
          return result;
        }
        function debounce(func, wait, options) {
          var lastArgs,
              lastThis,
              maxWait,
              result,
              timerId,
              lastCallTime,
              lastInvokeTime = 0,
              leading = false,
              maxing = false,
              trailing = true;
          if (typeof func != 'function') {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          wait = toNumber(wait) || 0;
          if (isObject(options)) {
            leading = !!options.leading;
            maxing = 'maxWait' in options;
            maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
            trailing = 'trailing' in options ? !!options.trailing : trailing;
          }
          function invokeFunc(time) {
            var args = lastArgs,
                thisArg = lastThis;
            lastArgs = lastThis = undefined;
            lastInvokeTime = time;
            result = func.apply(thisArg, args);
            return result;
          }
          function leadingEdge(time) {
            lastInvokeTime = time;
            timerId = setTimeout(timerExpired, wait);
            return leading ? invokeFunc(time) : result;
          }
          function remainingWait(time) {
            var timeSinceLastCall = time - lastCallTime,
                timeSinceLastInvoke = time - lastInvokeTime,
                result = wait - timeSinceLastCall;
            return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
          }
          function shouldInvoke(time) {
            var timeSinceLastCall = time - lastCallTime,
                timeSinceLastInvoke = time - lastInvokeTime;
            return (lastCallTime === undefined || (timeSinceLastCall >= wait) || (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
          }
          function timerExpired() {
            var time = now();
            if (shouldInvoke(time)) {
              return trailingEdge(time);
            }
            timerId = setTimeout(timerExpired, remainingWait(time));
          }
          function trailingEdge(time) {
            timerId = undefined;
            if (trailing && lastArgs) {
              return invokeFunc(time);
            }
            lastArgs = lastThis = undefined;
            return result;
          }
          function cancel() {
            lastInvokeTime = 0;
            lastArgs = lastCallTime = lastThis = timerId = undefined;
          }
          function flush() {
            return timerId === undefined ? result : trailingEdge(now());
          }
          function debounced() {
            var time = now(),
                isInvoking = shouldInvoke(time);
            lastArgs = arguments;
            lastThis = this;
            lastCallTime = time;
            if (isInvoking) {
              if (timerId === undefined) {
                return leadingEdge(lastCallTime);
              }
              if (maxing) {
                timerId = setTimeout(timerExpired, wait);
                return invokeFunc(lastCallTime);
              }
            }
            if (timerId === undefined) {
              timerId = setTimeout(timerExpired, wait);
            }
            return result;
          }
          debounced.cancel = cancel;
          debounced.flush = flush;
          return debounced;
        }
        var defer = rest(function(func, args) {
          return baseDelay(func, 1, args);
        });
        var delay = rest(function(func, wait, args) {
          return baseDelay(func, toNumber(wait) || 0, args);
        });
        function flip(func) {
          return createWrapper(func, FLIP_FLAG);
        }
        function memoize(func, resolver) {
          if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          var memoized = function() {
            var args = arguments,
                key = resolver ? resolver.apply(this, args) : args[0],
                cache = memoized.cache;
            if (cache.has(key)) {
              return cache.get(key);
            }
            var result = func.apply(this, args);
            memoized.cache = cache.set(key, result);
            return result;
          };
          memoized.cache = new (memoize.Cache || MapCache);
          return memoized;
        }
        memoize.Cache = MapCache;
        function negate(predicate) {
          if (typeof predicate != 'function') {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          return function() {
            return !predicate.apply(this, arguments);
          };
        }
        function once(func) {
          return before(2, func);
        }
        var overArgs = rest(function(func, transforms) {
          transforms = (transforms.length == 1 && isArray(transforms[0])) ? arrayMap(transforms[0], baseUnary(getIteratee())) : arrayMap(baseFlatten(transforms, 1, isFlattenableIteratee), baseUnary(getIteratee()));
          var funcsLength = transforms.length;
          return rest(function(args) {
            var index = -1,
                length = nativeMin(args.length, funcsLength);
            while (++index < length) {
              args[index] = transforms[index].call(this, args[index]);
            }
            return apply(func, this, args);
          });
        });
        var partial = rest(function(func, partials) {
          var holders = replaceHolders(partials, getHolder(partial));
          return createWrapper(func, PARTIAL_FLAG, undefined, partials, holders);
        });
        var partialRight = rest(function(func, partials) {
          var holders = replaceHolders(partials, getHolder(partialRight));
          return createWrapper(func, PARTIAL_RIGHT_FLAG, undefined, partials, holders);
        });
        var rearg = rest(function(func, indexes) {
          return createWrapper(func, REARG_FLAG, undefined, undefined, undefined, baseFlatten(indexes, 1));
        });
        function rest(func, start) {
          if (typeof func != 'function') {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          start = nativeMax(start === undefined ? (func.length - 1) : toInteger(start), 0);
          return function() {
            var args = arguments,
                index = -1,
                length = nativeMax(args.length - start, 0),
                array = Array(length);
            while (++index < length) {
              array[index] = args[start + index];
            }
            switch (start) {
              case 0:
                return func.call(this, array);
              case 1:
                return func.call(this, args[0], array);
              case 2:
                return func.call(this, args[0], args[1], array);
            }
            var otherArgs = Array(start + 1);
            index = -1;
            while (++index < start) {
              otherArgs[index] = args[index];
            }
            otherArgs[start] = array;
            return apply(func, this, otherArgs);
          };
        }
        function spread(func, start) {
          if (typeof func != 'function') {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          start = start === undefined ? 0 : nativeMax(toInteger(start), 0);
          return rest(function(args) {
            var array = args[start],
                otherArgs = castSlice(args, 0, start);
            if (array) {
              arrayPush(otherArgs, array);
            }
            return apply(func, this, otherArgs);
          });
        }
        function throttle(func, wait, options) {
          var leading = true,
              trailing = true;
          if (typeof func != 'function') {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          if (isObject(options)) {
            leading = 'leading' in options ? !!options.leading : leading;
            trailing = 'trailing' in options ? !!options.trailing : trailing;
          }
          return debounce(func, wait, {
            'leading': leading,
            'maxWait': wait,
            'trailing': trailing
          });
        }
        function unary(func) {
          return ary(func, 1);
        }
        function wrap(value, wrapper) {
          wrapper = wrapper == null ? identity : wrapper;
          return partial(wrapper, value);
        }
        function castArray() {
          if (!arguments.length) {
            return [];
          }
          var value = arguments[0];
          return isArray(value) ? value : [value];
        }
        function clone(value) {
          return baseClone(value, false, true);
        }
        function cloneWith(value, customizer) {
          return baseClone(value, false, true, customizer);
        }
        function cloneDeep(value) {
          return baseClone(value, true, true);
        }
        function cloneDeepWith(value, customizer) {
          return baseClone(value, true, true, customizer);
        }
        function eq(value, other) {
          return value === other || (value !== value && other !== other);
        }
        var gt = createRelationalOperation(baseGt);
        var gte = createRelationalOperation(function(value, other) {
          return value >= other;
        });
        function isArguments(value) {
          return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') && (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
        }
        var isArray = Array.isArray;
        function isArrayBuffer(value) {
          return isObjectLike(value) && objectToString.call(value) == arrayBufferTag;
        }
        function isArrayLike(value) {
          return value != null && isLength(getLength(value)) && !isFunction(value);
        }
        function isArrayLikeObject(value) {
          return isObjectLike(value) && isArrayLike(value);
        }
        function isBoolean(value) {
          return value === true || value === false || (isObjectLike(value) && objectToString.call(value) == boolTag);
        }
        var isBuffer = !Buffer ? stubFalse : function(value) {
          return value instanceof Buffer;
        };
        function isDate(value) {
          return isObjectLike(value) && objectToString.call(value) == dateTag;
        }
        function isElement(value) {
          return !!value && value.nodeType === 1 && isObjectLike(value) && !isPlainObject(value);
        }
        function isEmpty(value) {
          if (isArrayLike(value) && (isArray(value) || isString(value) || isFunction(value.splice) || isArguments(value) || isBuffer(value))) {
            return !value.length;
          }
          if (isObjectLike(value)) {
            var tag = getTag(value);
            if (tag == mapTag || tag == setTag) {
              return !value.size;
            }
          }
          for (var key in value) {
            if (hasOwnProperty.call(value, key)) {
              return false;
            }
          }
          return !(nonEnumShadows && keys(value).length);
        }
        function isEqual(value, other) {
          return baseIsEqual(value, other);
        }
        function isEqualWith(value, other, customizer) {
          customizer = typeof customizer == 'function' ? customizer : undefined;
          var result = customizer ? customizer(value, other) : undefined;
          return result === undefined ? baseIsEqual(value, other, customizer) : !!result;
        }
        function isError(value) {
          if (!isObjectLike(value)) {
            return false;
          }
          return (objectToString.call(value) == errorTag) || (typeof value.message == 'string' && typeof value.name == 'string');
        }
        function isFinite(value) {
          return typeof value == 'number' && nativeIsFinite(value);
        }
        function isFunction(value) {
          var tag = isObject(value) ? objectToString.call(value) : '';
          return tag == funcTag || tag == genTag;
        }
        function isInteger(value) {
          return typeof value == 'number' && value == toInteger(value);
        }
        function isLength(value) {
          return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
        }
        function isObject(value) {
          var type = typeof value;
          return !!value && (type == 'object' || type == 'function');
        }
        function isObjectLike(value) {
          return !!value && typeof value == 'object';
        }
        function isMap(value) {
          return isObjectLike(value) && getTag(value) == mapTag;
        }
        function isMatch(object, source) {
          return object === source || baseIsMatch(object, source, getMatchData(source));
        }
        function isMatchWith(object, source, customizer) {
          customizer = typeof customizer == 'function' ? customizer : undefined;
          return baseIsMatch(object, source, getMatchData(source), customizer);
        }
        function isNaN(value) {
          return isNumber(value) && value != +value;
        }
        function isNative(value) {
          if (isMaskable(value)) {
            throw new Error('This method is not supported with `core-js`. Try https://github.com/es-shims.');
          }
          return baseIsNative(value);
        }
        function isNull(value) {
          return value === null;
        }
        function isNil(value) {
          return value == null;
        }
        function isNumber(value) {
          return typeof value == 'number' || (isObjectLike(value) && objectToString.call(value) == numberTag);
        }
        function isPlainObject(value) {
          if (!isObjectLike(value) || objectToString.call(value) != objectTag || isHostObject(value)) {
            return false;
          }
          var proto = getPrototype(value);
          if (proto === null) {
            return true;
          }
          var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
          return (typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString);
        }
        function isRegExp(value) {
          return isObject(value) && objectToString.call(value) == regexpTag;
        }
        function isSafeInteger(value) {
          return isInteger(value) && value >= -MAX_SAFE_INTEGER && value <= MAX_SAFE_INTEGER;
        }
        function isSet(value) {
          return isObjectLike(value) && getTag(value) == setTag;
        }
        function isString(value) {
          return typeof value == 'string' || (!isArray(value) && isObjectLike(value) && objectToString.call(value) == stringTag);
        }
        function isSymbol(value) {
          return typeof value == 'symbol' || (isObjectLike(value) && objectToString.call(value) == symbolTag);
        }
        function isTypedArray(value) {
          return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[objectToString.call(value)];
        }
        function isUndefined(value) {
          return value === undefined;
        }
        function isWeakMap(value) {
          return isObjectLike(value) && getTag(value) == weakMapTag;
        }
        function isWeakSet(value) {
          return isObjectLike(value) && objectToString.call(value) == weakSetTag;
        }
        var lt = createRelationalOperation(baseLt);
        var lte = createRelationalOperation(function(value, other) {
          return value <= other;
        });
        function toArray(value) {
          if (!value) {
            return [];
          }
          if (isArrayLike(value)) {
            return isString(value) ? stringToArray(value) : copyArray(value);
          }
          if (iteratorSymbol && value[iteratorSymbol]) {
            return iteratorToArray(value[iteratorSymbol]());
          }
          var tag = getTag(value),
              func = tag == mapTag ? mapToArray : (tag == setTag ? setToArray : values);
          return func(value);
        }
        function toFinite(value) {
          if (!value) {
            return value === 0 ? value : 0;
          }
          value = toNumber(value);
          if (value === INFINITY || value === -INFINITY) {
            var sign = (value < 0 ? -1 : 1);
            return sign * MAX_INTEGER;
          }
          return value === value ? value : 0;
        }
        function toInteger(value) {
          var result = toFinite(value),
              remainder = result % 1;
          return result === result ? (remainder ? result - remainder : result) : 0;
        }
        function toLength(value) {
          return value ? baseClamp(toInteger(value), 0, MAX_ARRAY_LENGTH) : 0;
        }
        function toNumber(value) {
          if (typeof value == 'number') {
            return value;
          }
          if (isSymbol(value)) {
            return NAN;
          }
          if (isObject(value)) {
            var other = isFunction(value.valueOf) ? value.valueOf() : value;
            value = isObject(other) ? (other + '') : other;
          }
          if (typeof value != 'string') {
            return value === 0 ? value : +value;
          }
          value = value.replace(reTrim, '');
          var isBinary = reIsBinary.test(value);
          return (isBinary || reIsOctal.test(value)) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : (reIsBadHex.test(value) ? NAN : +value);
        }
        function toPlainObject(value) {
          return copyObject(value, keysIn(value));
        }
        function toSafeInteger(value) {
          return baseClamp(toInteger(value), -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER);
        }
        function toString(value) {
          return value == null ? '' : baseToString(value);
        }
        var assign = createAssigner(function(object, source) {
          if (nonEnumShadows || isPrototype(source) || isArrayLike(source)) {
            copyObject(source, keys(source), object);
            return;
          }
          for (var key in source) {
            if (hasOwnProperty.call(source, key)) {
              assignValue(object, key, source[key]);
            }
          }
        });
        var assignIn = createAssigner(function(object, source) {
          if (nonEnumShadows || isPrototype(source) || isArrayLike(source)) {
            copyObject(source, keysIn(source), object);
            return;
          }
          for (var key in source) {
            assignValue(object, key, source[key]);
          }
        });
        var assignInWith = createAssigner(function(object, source, srcIndex, customizer) {
          copyObject(source, keysIn(source), object, customizer);
        });
        var assignWith = createAssigner(function(object, source, srcIndex, customizer) {
          copyObject(source, keys(source), object, customizer);
        });
        var at = rest(function(object, paths) {
          return baseAt(object, baseFlatten(paths, 1));
        });
        function create(prototype, properties) {
          var result = baseCreate(prototype);
          return properties ? baseAssign(result, properties) : result;
        }
        var defaults = rest(function(args) {
          args.push(undefined, assignInDefaults);
          return apply(assignInWith, undefined, args);
        });
        var defaultsDeep = rest(function(args) {
          args.push(undefined, mergeDefaults);
          return apply(mergeWith, undefined, args);
        });
        function findKey(object, predicate) {
          return baseFindKey(object, getIteratee(predicate, 3), baseForOwn);
        }
        function findLastKey(object, predicate) {
          return baseFindKey(object, getIteratee(predicate, 3), baseForOwnRight);
        }
        function forIn(object, iteratee) {
          return object == null ? object : baseFor(object, getIteratee(iteratee, 3), keysIn);
        }
        function forInRight(object, iteratee) {
          return object == null ? object : baseForRight(object, getIteratee(iteratee, 3), keysIn);
        }
        function forOwn(object, iteratee) {
          return object && baseForOwn(object, getIteratee(iteratee, 3));
        }
        function forOwnRight(object, iteratee) {
          return object && baseForOwnRight(object, getIteratee(iteratee, 3));
        }
        function functions(object) {
          return object == null ? [] : baseFunctions(object, keys(object));
        }
        function functionsIn(object) {
          return object == null ? [] : baseFunctions(object, keysIn(object));
        }
        function get(object, path, defaultValue) {
          var result = object == null ? undefined : baseGet(object, path);
          return result === undefined ? defaultValue : result;
        }
        function has(object, path) {
          return object != null && hasPath(object, path, baseHas);
        }
        function hasIn(object, path) {
          return object != null && hasPath(object, path, baseHasIn);
        }
        var invert = createInverter(function(result, value, key) {
          result[value] = key;
        }, constant(identity));
        var invertBy = createInverter(function(result, value, key) {
          if (hasOwnProperty.call(result, value)) {
            result[value].push(key);
          } else {
            result[value] = [key];
          }
        }, getIteratee);
        var invoke = rest(baseInvoke);
        function keys(object) {
          var isProto = isPrototype(object);
          if (!(isProto || isArrayLike(object))) {
            return baseKeys(object);
          }
          var indexes = indexKeys(object),
              skipIndexes = !!indexes,
              result = indexes || [],
              length = result.length;
          for (var key in object) {
            if (baseHas(object, key) && !(skipIndexes && (key == 'length' || isIndex(key, length))) && !(isProto && key == 'constructor')) {
              result.push(key);
            }
          }
          return result;
        }
        function keysIn(object) {
          var index = -1,
              isProto = isPrototype(object),
              props = baseKeysIn(object),
              propsLength = props.length,
              indexes = indexKeys(object),
              skipIndexes = !!indexes,
              result = indexes || [],
              length = result.length;
          while (++index < propsLength) {
            var key = props[index];
            if (!(skipIndexes && (key == 'length' || isIndex(key, length))) && !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
              result.push(key);
            }
          }
          return result;
        }
        function mapKeys(object, iteratee) {
          var result = {};
          iteratee = getIteratee(iteratee, 3);
          baseForOwn(object, function(value, key, object) {
            result[iteratee(value, key, object)] = value;
          });
          return result;
        }
        function mapValues(object, iteratee) {
          var result = {};
          iteratee = getIteratee(iteratee, 3);
          baseForOwn(object, function(value, key, object) {
            result[key] = iteratee(value, key, object);
          });
          return result;
        }
        var merge = createAssigner(function(object, source, srcIndex) {
          baseMerge(object, source, srcIndex);
        });
        var mergeWith = createAssigner(function(object, source, srcIndex, customizer) {
          baseMerge(object, source, srcIndex, customizer);
        });
        var omit = rest(function(object, props) {
          if (object == null) {
            return {};
          }
          props = arrayMap(baseFlatten(props, 1), toKey);
          return basePick(object, baseDifference(getAllKeysIn(object), props));
        });
        function omitBy(object, predicate) {
          predicate = getIteratee(predicate);
          return basePickBy(object, function(value, key) {
            return !predicate(value, key);
          });
        }
        var pick = rest(function(object, props) {
          return object == null ? {} : basePick(object, arrayMap(baseFlatten(props, 1), toKey));
        });
        function pickBy(object, predicate) {
          return object == null ? {} : basePickBy(object, getIteratee(predicate));
        }
        function result(object, path, defaultValue) {
          path = isKey(path, object) ? [path] : castPath(path);
          var index = -1,
              length = path.length;
          if (!length) {
            object = undefined;
            length = 1;
          }
          while (++index < length) {
            var value = object == null ? undefined : object[toKey(path[index])];
            if (value === undefined) {
              index = length;
              value = defaultValue;
            }
            object = isFunction(value) ? value.call(object) : value;
          }
          return object;
        }
        function set(object, path, value) {
          return object == null ? object : baseSet(object, path, value);
        }
        function setWith(object, path, value, customizer) {
          customizer = typeof customizer == 'function' ? customizer : undefined;
          return object == null ? object : baseSet(object, path, value, customizer);
        }
        var toPairs = createToPairs(keys);
        var toPairsIn = createToPairs(keysIn);
        function transform(object, iteratee, accumulator) {
          var isArr = isArray(object) || isTypedArray(object);
          iteratee = getIteratee(iteratee, 4);
          if (accumulator == null) {
            if (isArr || isObject(object)) {
              var Ctor = object.constructor;
              if (isArr) {
                accumulator = isArray(object) ? new Ctor : [];
              } else {
                accumulator = isFunction(Ctor) ? baseCreate(getPrototype(object)) : {};
              }
            } else {
              accumulator = {};
            }
          }
          (isArr ? arrayEach : baseForOwn)(object, function(value, index, object) {
            return iteratee(accumulator, value, index, object);
          });
          return accumulator;
        }
        function unset(object, path) {
          return object == null ? true : baseUnset(object, path);
        }
        function update(object, path, updater) {
          return object == null ? object : baseUpdate(object, path, castFunction(updater));
        }
        function updateWith(object, path, updater, customizer) {
          customizer = typeof customizer == 'function' ? customizer : undefined;
          return object == null ? object : baseUpdate(object, path, castFunction(updater), customizer);
        }
        function values(object) {
          return object ? baseValues(object, keys(object)) : [];
        }
        function valuesIn(object) {
          return object == null ? [] : baseValues(object, keysIn(object));
        }
        function clamp(number, lower, upper) {
          if (upper === undefined) {
            upper = lower;
            lower = undefined;
          }
          if (upper !== undefined) {
            upper = toNumber(upper);
            upper = upper === upper ? upper : 0;
          }
          if (lower !== undefined) {
            lower = toNumber(lower);
            lower = lower === lower ? lower : 0;
          }
          return baseClamp(toNumber(number), lower, upper);
        }
        function inRange(number, start, end) {
          start = toNumber(start) || 0;
          if (end === undefined) {
            end = start;
            start = 0;
          } else {
            end = toNumber(end) || 0;
          }
          number = toNumber(number);
          return baseInRange(number, start, end);
        }
        function random(lower, upper, floating) {
          if (floating && typeof floating != 'boolean' && isIterateeCall(lower, upper, floating)) {
            upper = floating = undefined;
          }
          if (floating === undefined) {
            if (typeof upper == 'boolean') {
              floating = upper;
              upper = undefined;
            } else if (typeof lower == 'boolean') {
              floating = lower;
              lower = undefined;
            }
          }
          if (lower === undefined && upper === undefined) {
            lower = 0;
            upper = 1;
          } else {
            lower = toNumber(lower) || 0;
            if (upper === undefined) {
              upper = lower;
              lower = 0;
            } else {
              upper = toNumber(upper) || 0;
            }
          }
          if (lower > upper) {
            var temp = lower;
            lower = upper;
            upper = temp;
          }
          if (floating || lower % 1 || upper % 1) {
            var rand = nativeRandom();
            return nativeMin(lower + (rand * (upper - lower + freeParseFloat('1e-' + ((rand + '').length - 1)))), upper);
          }
          return baseRandom(lower, upper);
        }
        var camelCase = createCompounder(function(result, word, index) {
          word = word.toLowerCase();
          return result + (index ? capitalize(word) : word);
        });
        function capitalize(string) {
          return upperFirst(toString(string).toLowerCase());
        }
        function deburr(string) {
          string = toString(string);
          return string && string.replace(reLatin1, deburrLetter).replace(reComboMark, '');
        }
        function endsWith(string, target, position) {
          string = toString(string);
          target = baseToString(target);
          var length = string.length;
          position = position === undefined ? length : baseClamp(toInteger(position), 0, length);
          position -= target.length;
          return position >= 0 && string.indexOf(target, position) == position;
        }
        function escape(string) {
          string = toString(string);
          return (string && reHasUnescapedHtml.test(string)) ? string.replace(reUnescapedHtml, escapeHtmlChar) : string;
        }
        function escapeRegExp(string) {
          string = toString(string);
          return (string && reHasRegExpChar.test(string)) ? string.replace(reRegExpChar, '\\$&') : string;
        }
        var kebabCase = createCompounder(function(result, word, index) {
          return result + (index ? '-' : '') + word.toLowerCase();
        });
        var lowerCase = createCompounder(function(result, word, index) {
          return result + (index ? ' ' : '') + word.toLowerCase();
        });
        var lowerFirst = createCaseFirst('toLowerCase');
        function pad(string, length, chars) {
          string = toString(string);
          length = toInteger(length);
          var strLength = length ? stringSize(string) : 0;
          if (!length || strLength >= length) {
            return string;
          }
          var mid = (length - strLength) / 2;
          return (createPadding(nativeFloor(mid), chars) + string + createPadding(nativeCeil(mid), chars));
        }
        function padEnd(string, length, chars) {
          string = toString(string);
          length = toInteger(length);
          var strLength = length ? stringSize(string) : 0;
          return (length && strLength < length) ? (string + createPadding(length - strLength, chars)) : string;
        }
        function padStart(string, length, chars) {
          string = toString(string);
          length = toInteger(length);
          var strLength = length ? stringSize(string) : 0;
          return (length && strLength < length) ? (createPadding(length - strLength, chars) + string) : string;
        }
        function parseInt(string, radix, guard) {
          if (guard || radix == null) {
            radix = 0;
          } else if (radix) {
            radix = +radix;
          }
          string = toString(string).replace(reTrim, '');
          return nativeParseInt(string, radix || (reHasHexPrefix.test(string) ? 16 : 10));
        }
        function repeat(string, n, guard) {
          if ((guard ? isIterateeCall(string, n, guard) : n === undefined)) {
            n = 1;
          } else {
            n = toInteger(n);
          }
          return baseRepeat(toString(string), n);
        }
        function replace() {
          var args = arguments,
              string = toString(args[0]);
          return args.length < 3 ? string : nativeReplace.call(string, args[1], args[2]);
        }
        var snakeCase = createCompounder(function(result, word, index) {
          return result + (index ? '_' : '') + word.toLowerCase();
        });
        function split(string, separator, limit) {
          if (limit && typeof limit != 'number' && isIterateeCall(string, separator, limit)) {
            separator = limit = undefined;
          }
          limit = limit === undefined ? MAX_ARRAY_LENGTH : limit >>> 0;
          if (!limit) {
            return [];
          }
          string = toString(string);
          if (string && (typeof separator == 'string' || (separator != null && !isRegExp(separator)))) {
            separator = baseToString(separator);
            if (separator == '' && reHasComplexSymbol.test(string)) {
              return castSlice(stringToArray(string), 0, limit);
            }
          }
          return nativeSplit.call(string, separator, limit);
        }
        var startCase = createCompounder(function(result, word, index) {
          return result + (index ? ' ' : '') + upperFirst(word);
        });
        function startsWith(string, target, position) {
          string = toString(string);
          position = baseClamp(toInteger(position), 0, string.length);
          return string.lastIndexOf(baseToString(target), position) == position;
        }
        function template(string, options, guard) {
          var settings = lodash.templateSettings;
          if (guard && isIterateeCall(string, options, guard)) {
            options = undefined;
          }
          string = toString(string);
          options = assignInWith({}, options, settings, assignInDefaults);
          var imports = assignInWith({}, options.imports, settings.imports, assignInDefaults),
              importsKeys = keys(imports),
              importsValues = baseValues(imports, importsKeys);
          var isEscaping,
              isEvaluating,
              index = 0,
              interpolate = options.interpolate || reNoMatch,
              source = "__p += '";
          var reDelimiters = RegExp((options.escape || reNoMatch).source + '|' + interpolate.source + '|' + (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + '|' + (options.evaluate || reNoMatch).source + '|$', 'g');
          var sourceURL = '//# sourceURL=' + ('sourceURL' in options ? options.sourceURL : ('lodash.templateSources[' + (++templateCounter) + ']')) + '\n';
          string.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
            interpolateValue || (interpolateValue = esTemplateValue);
            source += string.slice(index, offset).replace(reUnescapedString, escapeStringChar);
            if (escapeValue) {
              isEscaping = true;
              source += "' +\n__e(" + escapeValue + ") +\n'";
            }
            if (evaluateValue) {
              isEvaluating = true;
              source += "';\n" + evaluateValue + ";\n__p += '";
            }
            if (interpolateValue) {
              source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
            }
            index = offset + match.length;
            return match;
          });
          source += "';\n";
          var variable = options.variable;
          if (!variable) {
            source = 'with (obj) {\n' + source + '\n}\n';
          }
          source = (isEvaluating ? source.replace(reEmptyStringLeading, '') : source).replace(reEmptyStringMiddle, '$1').replace(reEmptyStringTrailing, '$1;');
          source = 'function(' + (variable || 'obj') + ') {\n' + (variable ? '' : 'obj || (obj = {});\n') + "var __t, __p = ''" + (isEscaping ? ', __e = _.escape' : '') + (isEvaluating ? ', __j = Array.prototype.join;\n' + "function print() { __p += __j.call(arguments, '') }\n" : ';\n') + source + 'return __p\n}';
          var result = attempt(function() {
            return Function(importsKeys, sourceURL + 'return ' + source).apply(undefined, importsValues);
          });
          result.source = source;
          if (isError(result)) {
            throw result;
          }
          return result;
        }
        function toLower(value) {
          return toString(value).toLowerCase();
        }
        function toUpper(value) {
          return toString(value).toUpperCase();
        }
        function trim(string, chars, guard) {
          string = toString(string);
          if (string && (guard || chars === undefined)) {
            return string.replace(reTrim, '');
          }
          if (!string || !(chars = baseToString(chars))) {
            return string;
          }
          var strSymbols = stringToArray(string),
              chrSymbols = stringToArray(chars),
              start = charsStartIndex(strSymbols, chrSymbols),
              end = charsEndIndex(strSymbols, chrSymbols) + 1;
          return castSlice(strSymbols, start, end).join('');
        }
        function trimEnd(string, chars, guard) {
          string = toString(string);
          if (string && (guard || chars === undefined)) {
            return string.replace(reTrimEnd, '');
          }
          if (!string || !(chars = baseToString(chars))) {
            return string;
          }
          var strSymbols = stringToArray(string),
              end = charsEndIndex(strSymbols, stringToArray(chars)) + 1;
          return castSlice(strSymbols, 0, end).join('');
        }
        function trimStart(string, chars, guard) {
          string = toString(string);
          if (string && (guard || chars === undefined)) {
            return string.replace(reTrimStart, '');
          }
          if (!string || !(chars = baseToString(chars))) {
            return string;
          }
          var strSymbols = stringToArray(string),
              start = charsStartIndex(strSymbols, stringToArray(chars));
          return castSlice(strSymbols, start).join('');
        }
        function truncate(string, options) {
          var length = DEFAULT_TRUNC_LENGTH,
              omission = DEFAULT_TRUNC_OMISSION;
          if (isObject(options)) {
            var separator = 'separator' in options ? options.separator : separator;
            length = 'length' in options ? toInteger(options.length) : length;
            omission = 'omission' in options ? baseToString(options.omission) : omission;
          }
          string = toString(string);
          var strLength = string.length;
          if (reHasComplexSymbol.test(string)) {
            var strSymbols = stringToArray(string);
            strLength = strSymbols.length;
          }
          if (length >= strLength) {
            return string;
          }
          var end = length - stringSize(omission);
          if (end < 1) {
            return omission;
          }
          var result = strSymbols ? castSlice(strSymbols, 0, end).join('') : string.slice(0, end);
          if (separator === undefined) {
            return result + omission;
          }
          if (strSymbols) {
            end += (result.length - end);
          }
          if (isRegExp(separator)) {
            if (string.slice(end).search(separator)) {
              var match,
                  substring = result;
              if (!separator.global) {
                separator = RegExp(separator.source, toString(reFlags.exec(separator)) + 'g');
              }
              separator.lastIndex = 0;
              while ((match = separator.exec(substring))) {
                var newEnd = match.index;
              }
              result = result.slice(0, newEnd === undefined ? end : newEnd);
            }
          } else if (string.indexOf(baseToString(separator), end) != end) {
            var index = result.lastIndexOf(separator);
            if (index > -1) {
              result = result.slice(0, index);
            }
          }
          return result + omission;
        }
        function unescape(string) {
          string = toString(string);
          return (string && reHasEscapedHtml.test(string)) ? string.replace(reEscapedHtml, unescapeHtmlChar) : string;
        }
        var upperCase = createCompounder(function(result, word, index) {
          return result + (index ? ' ' : '') + word.toUpperCase();
        });
        var upperFirst = createCaseFirst('toUpperCase');
        function words(string, pattern, guard) {
          string = toString(string);
          pattern = guard ? undefined : pattern;
          if (pattern === undefined) {
            pattern = reHasComplexWord.test(string) ? reComplexWord : reBasicWord;
          }
          return string.match(pattern) || [];
        }
        var attempt = rest(function(func, args) {
          try {
            return apply(func, undefined, args);
          } catch (e) {
            return isError(e) ? e : new Error(e);
          }
        });
        var bindAll = rest(function(object, methodNames) {
          arrayEach(baseFlatten(methodNames, 1), function(key) {
            key = toKey(key);
            object[key] = bind(object[key], object);
          });
          return object;
        });
        function cond(pairs) {
          var length = pairs ? pairs.length : 0,
              toIteratee = getIteratee();
          pairs = !length ? [] : arrayMap(pairs, function(pair) {
            if (typeof pair[1] != 'function') {
              throw new TypeError(FUNC_ERROR_TEXT);
            }
            return [toIteratee(pair[0]), pair[1]];
          });
          return rest(function(args) {
            var index = -1;
            while (++index < length) {
              var pair = pairs[index];
              if (apply(pair[0], this, args)) {
                return apply(pair[1], this, args);
              }
            }
          });
        }
        function conforms(source) {
          return baseConforms(baseClone(source, true));
        }
        function constant(value) {
          return function() {
            return value;
          };
        }
        var flow = createFlow();
        var flowRight = createFlow(true);
        function identity(value) {
          return value;
        }
        function iteratee(func) {
          return baseIteratee(typeof func == 'function' ? func : baseClone(func, true));
        }
        function matches(source) {
          return baseMatches(baseClone(source, true));
        }
        function matchesProperty(path, srcValue) {
          return baseMatchesProperty(path, baseClone(srcValue, true));
        }
        var method = rest(function(path, args) {
          return function(object) {
            return baseInvoke(object, path, args);
          };
        });
        var methodOf = rest(function(object, args) {
          return function(path) {
            return baseInvoke(object, path, args);
          };
        });
        function mixin(object, source, options) {
          var props = keys(source),
              methodNames = baseFunctions(source, props);
          if (options == null && !(isObject(source) && (methodNames.length || !props.length))) {
            options = source;
            source = object;
            object = this;
            methodNames = baseFunctions(source, keys(source));
          }
          var chain = !(isObject(options) && 'chain' in options) || !!options.chain,
              isFunc = isFunction(object);
          arrayEach(methodNames, function(methodName) {
            var func = source[methodName];
            object[methodName] = func;
            if (isFunc) {
              object.prototype[methodName] = function() {
                var chainAll = this.__chain__;
                if (chain || chainAll) {
                  var result = object(this.__wrapped__),
                      actions = result.__actions__ = copyArray(this.__actions__);
                  actions.push({
                    'func': func,
                    'args': arguments,
                    'thisArg': object
                  });
                  result.__chain__ = chainAll;
                  return result;
                }
                return func.apply(object, arrayPush([this.value()], arguments));
              };
            }
          });
          return object;
        }
        function noConflict() {
          if (root._ === this) {
            root._ = oldDash;
          }
          return this;
        }
        function noop() {}
        function nthArg(n) {
          n = toInteger(n);
          return rest(function(args) {
            return baseNth(args, n);
          });
        }
        var over = createOver(arrayMap);
        var overEvery = createOver(arrayEvery);
        var overSome = createOver(arraySome);
        function property(path) {
          return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
        }
        function propertyOf(object) {
          return function(path) {
            return object == null ? undefined : baseGet(object, path);
          };
        }
        var range = createRange();
        var rangeRight = createRange(true);
        function stubArray() {
          return [];
        }
        function stubFalse() {
          return false;
        }
        function stubObject() {
          return {};
        }
        function stubString() {
          return '';
        }
        function stubTrue() {
          return true;
        }
        function times(n, iteratee) {
          n = toInteger(n);
          if (n < 1 || n > MAX_SAFE_INTEGER) {
            return [];
          }
          var index = MAX_ARRAY_LENGTH,
              length = nativeMin(n, MAX_ARRAY_LENGTH);
          iteratee = getIteratee(iteratee);
          n -= MAX_ARRAY_LENGTH;
          var result = baseTimes(length, iteratee);
          while (++index < n) {
            iteratee(index);
          }
          return result;
        }
        function toPath(value) {
          if (isArray(value)) {
            return arrayMap(value, toKey);
          }
          return isSymbol(value) ? [value] : copyArray(stringToPath(value));
        }
        function uniqueId(prefix) {
          var id = ++idCounter;
          return toString(prefix) + id;
        }
        var add = createMathOperation(function(augend, addend) {
          return augend + addend;
        });
        var ceil = createRound('ceil');
        var divide = createMathOperation(function(dividend, divisor) {
          return dividend / divisor;
        });
        var floor = createRound('floor');
        function max(array) {
          return (array && array.length) ? baseExtremum(array, identity, baseGt) : undefined;
        }
        function maxBy(array, iteratee) {
          return (array && array.length) ? baseExtremum(array, getIteratee(iteratee), baseGt) : undefined;
        }
        function mean(array) {
          return baseMean(array, identity);
        }
        function meanBy(array, iteratee) {
          return baseMean(array, getIteratee(iteratee));
        }
        function min(array) {
          return (array && array.length) ? baseExtremum(array, identity, baseLt) : undefined;
        }
        function minBy(array, iteratee) {
          return (array && array.length) ? baseExtremum(array, getIteratee(iteratee), baseLt) : undefined;
        }
        var multiply = createMathOperation(function(multiplier, multiplicand) {
          return multiplier * multiplicand;
        });
        var round = createRound('round');
        var subtract = createMathOperation(function(minuend, subtrahend) {
          return minuend - subtrahend;
        });
        function sum(array) {
          return (array && array.length) ? baseSum(array, identity) : 0;
        }
        function sumBy(array, iteratee) {
          return (array && array.length) ? baseSum(array, getIteratee(iteratee)) : 0;
        }
        lodash.after = after;
        lodash.ary = ary;
        lodash.assign = assign;
        lodash.assignIn = assignIn;
        lodash.assignInWith = assignInWith;
        lodash.assignWith = assignWith;
        lodash.at = at;
        lodash.before = before;
        lodash.bind = bind;
        lodash.bindAll = bindAll;
        lodash.bindKey = bindKey;
        lodash.castArray = castArray;
        lodash.chain = chain;
        lodash.chunk = chunk;
        lodash.compact = compact;
        lodash.concat = concat;
        lodash.cond = cond;
        lodash.conforms = conforms;
        lodash.constant = constant;
        lodash.countBy = countBy;
        lodash.create = create;
        lodash.curry = curry;
        lodash.curryRight = curryRight;
        lodash.debounce = debounce;
        lodash.defaults = defaults;
        lodash.defaultsDeep = defaultsDeep;
        lodash.defer = defer;
        lodash.delay = delay;
        lodash.difference = difference;
        lodash.differenceBy = differenceBy;
        lodash.differenceWith = differenceWith;
        lodash.drop = drop;
        lodash.dropRight = dropRight;
        lodash.dropRightWhile = dropRightWhile;
        lodash.dropWhile = dropWhile;
        lodash.fill = fill;
        lodash.filter = filter;
        lodash.flatMap = flatMap;
        lodash.flatMapDeep = flatMapDeep;
        lodash.flatMapDepth = flatMapDepth;
        lodash.flatten = flatten;
        lodash.flattenDeep = flattenDeep;
        lodash.flattenDepth = flattenDepth;
        lodash.flip = flip;
        lodash.flow = flow;
        lodash.flowRight = flowRight;
        lodash.fromPairs = fromPairs;
        lodash.functions = functions;
        lodash.functionsIn = functionsIn;
        lodash.groupBy = groupBy;
        lodash.initial = initial;
        lodash.intersection = intersection;
        lodash.intersectionBy = intersectionBy;
        lodash.intersectionWith = intersectionWith;
        lodash.invert = invert;
        lodash.invertBy = invertBy;
        lodash.invokeMap = invokeMap;
        lodash.iteratee = iteratee;
        lodash.keyBy = keyBy;
        lodash.keys = keys;
        lodash.keysIn = keysIn;
        lodash.map = map;
        lodash.mapKeys = mapKeys;
        lodash.mapValues = mapValues;
        lodash.matches = matches;
        lodash.matchesProperty = matchesProperty;
        lodash.memoize = memoize;
        lodash.merge = merge;
        lodash.mergeWith = mergeWith;
        lodash.method = method;
        lodash.methodOf = methodOf;
        lodash.mixin = mixin;
        lodash.negate = negate;
        lodash.nthArg = nthArg;
        lodash.omit = omit;
        lodash.omitBy = omitBy;
        lodash.once = once;
        lodash.orderBy = orderBy;
        lodash.over = over;
        lodash.overArgs = overArgs;
        lodash.overEvery = overEvery;
        lodash.overSome = overSome;
        lodash.partial = partial;
        lodash.partialRight = partialRight;
        lodash.partition = partition;
        lodash.pick = pick;
        lodash.pickBy = pickBy;
        lodash.property = property;
        lodash.propertyOf = propertyOf;
        lodash.pull = pull;
        lodash.pullAll = pullAll;
        lodash.pullAllBy = pullAllBy;
        lodash.pullAllWith = pullAllWith;
        lodash.pullAt = pullAt;
        lodash.range = range;
        lodash.rangeRight = rangeRight;
        lodash.rearg = rearg;
        lodash.reject = reject;
        lodash.remove = remove;
        lodash.rest = rest;
        lodash.reverse = reverse;
        lodash.sampleSize = sampleSize;
        lodash.set = set;
        lodash.setWith = setWith;
        lodash.shuffle = shuffle;
        lodash.slice = slice;
        lodash.sortBy = sortBy;
        lodash.sortedUniq = sortedUniq;
        lodash.sortedUniqBy = sortedUniqBy;
        lodash.split = split;
        lodash.spread = spread;
        lodash.tail = tail;
        lodash.take = take;
        lodash.takeRight = takeRight;
        lodash.takeRightWhile = takeRightWhile;
        lodash.takeWhile = takeWhile;
        lodash.tap = tap;
        lodash.throttle = throttle;
        lodash.thru = thru;
        lodash.toArray = toArray;
        lodash.toPairs = toPairs;
        lodash.toPairsIn = toPairsIn;
        lodash.toPath = toPath;
        lodash.toPlainObject = toPlainObject;
        lodash.transform = transform;
        lodash.unary = unary;
        lodash.union = union;
        lodash.unionBy = unionBy;
        lodash.unionWith = unionWith;
        lodash.uniq = uniq;
        lodash.uniqBy = uniqBy;
        lodash.uniqWith = uniqWith;
        lodash.unset = unset;
        lodash.unzip = unzip;
        lodash.unzipWith = unzipWith;
        lodash.update = update;
        lodash.updateWith = updateWith;
        lodash.values = values;
        lodash.valuesIn = valuesIn;
        lodash.without = without;
        lodash.words = words;
        lodash.wrap = wrap;
        lodash.xor = xor;
        lodash.xorBy = xorBy;
        lodash.xorWith = xorWith;
        lodash.zip = zip;
        lodash.zipObject = zipObject;
        lodash.zipObjectDeep = zipObjectDeep;
        lodash.zipWith = zipWith;
        lodash.entries = toPairs;
        lodash.entriesIn = toPairsIn;
        lodash.extend = assignIn;
        lodash.extendWith = assignInWith;
        mixin(lodash, lodash);
        lodash.add = add;
        lodash.attempt = attempt;
        lodash.camelCase = camelCase;
        lodash.capitalize = capitalize;
        lodash.ceil = ceil;
        lodash.clamp = clamp;
        lodash.clone = clone;
        lodash.cloneDeep = cloneDeep;
        lodash.cloneDeepWith = cloneDeepWith;
        lodash.cloneWith = cloneWith;
        lodash.deburr = deburr;
        lodash.divide = divide;
        lodash.endsWith = endsWith;
        lodash.eq = eq;
        lodash.escape = escape;
        lodash.escapeRegExp = escapeRegExp;
        lodash.every = every;
        lodash.find = find;
        lodash.findIndex = findIndex;
        lodash.findKey = findKey;
        lodash.findLast = findLast;
        lodash.findLastIndex = findLastIndex;
        lodash.findLastKey = findLastKey;
        lodash.floor = floor;
        lodash.forEach = forEach;
        lodash.forEachRight = forEachRight;
        lodash.forIn = forIn;
        lodash.forInRight = forInRight;
        lodash.forOwn = forOwn;
        lodash.forOwnRight = forOwnRight;
        lodash.get = get;
        lodash.gt = gt;
        lodash.gte = gte;
        lodash.has = has;
        lodash.hasIn = hasIn;
        lodash.head = head;
        lodash.identity = identity;
        lodash.includes = includes;
        lodash.indexOf = indexOf;
        lodash.inRange = inRange;
        lodash.invoke = invoke;
        lodash.isArguments = isArguments;
        lodash.isArray = isArray;
        lodash.isArrayBuffer = isArrayBuffer;
        lodash.isArrayLike = isArrayLike;
        lodash.isArrayLikeObject = isArrayLikeObject;
        lodash.isBoolean = isBoolean;
        lodash.isBuffer = isBuffer;
        lodash.isDate = isDate;
        lodash.isElement = isElement;
        lodash.isEmpty = isEmpty;
        lodash.isEqual = isEqual;
        lodash.isEqualWith = isEqualWith;
        lodash.isError = isError;
        lodash.isFinite = isFinite;
        lodash.isFunction = isFunction;
        lodash.isInteger = isInteger;
        lodash.isLength = isLength;
        lodash.isMap = isMap;
        lodash.isMatch = isMatch;
        lodash.isMatchWith = isMatchWith;
        lodash.isNaN = isNaN;
        lodash.isNative = isNative;
        lodash.isNil = isNil;
        lodash.isNull = isNull;
        lodash.isNumber = isNumber;
        lodash.isObject = isObject;
        lodash.isObjectLike = isObjectLike;
        lodash.isPlainObject = isPlainObject;
        lodash.isRegExp = isRegExp;
        lodash.isSafeInteger = isSafeInteger;
        lodash.isSet = isSet;
        lodash.isString = isString;
        lodash.isSymbol = isSymbol;
        lodash.isTypedArray = isTypedArray;
        lodash.isUndefined = isUndefined;
        lodash.isWeakMap = isWeakMap;
        lodash.isWeakSet = isWeakSet;
        lodash.join = join;
        lodash.kebabCase = kebabCase;
        lodash.last = last;
        lodash.lastIndexOf = lastIndexOf;
        lodash.lowerCase = lowerCase;
        lodash.lowerFirst = lowerFirst;
        lodash.lt = lt;
        lodash.lte = lte;
        lodash.max = max;
        lodash.maxBy = maxBy;
        lodash.mean = mean;
        lodash.meanBy = meanBy;
        lodash.min = min;
        lodash.minBy = minBy;
        lodash.stubArray = stubArray;
        lodash.stubFalse = stubFalse;
        lodash.stubObject = stubObject;
        lodash.stubString = stubString;
        lodash.stubTrue = stubTrue;
        lodash.multiply = multiply;
        lodash.nth = nth;
        lodash.noConflict = noConflict;
        lodash.noop = noop;
        lodash.now = now;
        lodash.pad = pad;
        lodash.padEnd = padEnd;
        lodash.padStart = padStart;
        lodash.parseInt = parseInt;
        lodash.random = random;
        lodash.reduce = reduce;
        lodash.reduceRight = reduceRight;
        lodash.repeat = repeat;
        lodash.replace = replace;
        lodash.result = result;
        lodash.round = round;
        lodash.runInContext = runInContext;
        lodash.sample = sample;
        lodash.size = size;
        lodash.snakeCase = snakeCase;
        lodash.some = some;
        lodash.sortedIndex = sortedIndex;
        lodash.sortedIndexBy = sortedIndexBy;
        lodash.sortedIndexOf = sortedIndexOf;
        lodash.sortedLastIndex = sortedLastIndex;
        lodash.sortedLastIndexBy = sortedLastIndexBy;
        lodash.sortedLastIndexOf = sortedLastIndexOf;
        lodash.startCase = startCase;
        lodash.startsWith = startsWith;
        lodash.subtract = subtract;
        lodash.sum = sum;
        lodash.sumBy = sumBy;
        lodash.template = template;
        lodash.times = times;
        lodash.toFinite = toFinite;
        lodash.toInteger = toInteger;
        lodash.toLength = toLength;
        lodash.toLower = toLower;
        lodash.toNumber = toNumber;
        lodash.toSafeInteger = toSafeInteger;
        lodash.toString = toString;
        lodash.toUpper = toUpper;
        lodash.trim = trim;
        lodash.trimEnd = trimEnd;
        lodash.trimStart = trimStart;
        lodash.truncate = truncate;
        lodash.unescape = unescape;
        lodash.uniqueId = uniqueId;
        lodash.upperCase = upperCase;
        lodash.upperFirst = upperFirst;
        lodash.each = forEach;
        lodash.eachRight = forEachRight;
        lodash.first = head;
        mixin(lodash, (function() {
          var source = {};
          baseForOwn(lodash, function(func, methodName) {
            if (!hasOwnProperty.call(lodash.prototype, methodName)) {
              source[methodName] = func;
            }
          });
          return source;
        }()), {'chain': false});
        lodash.VERSION = VERSION;
        arrayEach(['bind', 'bindKey', 'curry', 'curryRight', 'partial', 'partialRight'], function(methodName) {
          lodash[methodName].placeholder = lodash;
        });
        arrayEach(['drop', 'take'], function(methodName, index) {
          LazyWrapper.prototype[methodName] = function(n) {
            var filtered = this.__filtered__;
            if (filtered && !index) {
              return new LazyWrapper(this);
            }
            n = n === undefined ? 1 : nativeMax(toInteger(n), 0);
            var result = this.clone();
            if (filtered) {
              result.__takeCount__ = nativeMin(n, result.__takeCount__);
            } else {
              result.__views__.push({
                'size': nativeMin(n, MAX_ARRAY_LENGTH),
                'type': methodName + (result.__dir__ < 0 ? 'Right' : '')
              });
            }
            return result;
          };
          LazyWrapper.prototype[methodName + 'Right'] = function(n) {
            return this.reverse()[methodName](n).reverse();
          };
        });
        arrayEach(['filter', 'map', 'takeWhile'], function(methodName, index) {
          var type = index + 1,
              isFilter = type == LAZY_FILTER_FLAG || type == LAZY_WHILE_FLAG;
          LazyWrapper.prototype[methodName] = function(iteratee) {
            var result = this.clone();
            result.__iteratees__.push({
              'iteratee': getIteratee(iteratee, 3),
              'type': type
            });
            result.__filtered__ = result.__filtered__ || isFilter;
            return result;
          };
        });
        arrayEach(['head', 'last'], function(methodName, index) {
          var takeName = 'take' + (index ? 'Right' : '');
          LazyWrapper.prototype[methodName] = function() {
            return this[takeName](1).value()[0];
          };
        });
        arrayEach(['initial', 'tail'], function(methodName, index) {
          var dropName = 'drop' + (index ? '' : 'Right');
          LazyWrapper.prototype[methodName] = function() {
            return this.__filtered__ ? new LazyWrapper(this) : this[dropName](1);
          };
        });
        LazyWrapper.prototype.compact = function() {
          return this.filter(identity);
        };
        LazyWrapper.prototype.find = function(predicate) {
          return this.filter(predicate).head();
        };
        LazyWrapper.prototype.findLast = function(predicate) {
          return this.reverse().find(predicate);
        };
        LazyWrapper.prototype.invokeMap = rest(function(path, args) {
          if (typeof path == 'function') {
            return new LazyWrapper(this);
          }
          return this.map(function(value) {
            return baseInvoke(value, path, args);
          });
        });
        LazyWrapper.prototype.reject = function(predicate) {
          predicate = getIteratee(predicate, 3);
          return this.filter(function(value) {
            return !predicate(value);
          });
        };
        LazyWrapper.prototype.slice = function(start, end) {
          start = toInteger(start);
          var result = this;
          if (result.__filtered__ && (start > 0 || end < 0)) {
            return new LazyWrapper(result);
          }
          if (start < 0) {
            result = result.takeRight(-start);
          } else if (start) {
            result = result.drop(start);
          }
          if (end !== undefined) {
            end = toInteger(end);
            result = end < 0 ? result.dropRight(-end) : result.take(end - start);
          }
          return result;
        };
        LazyWrapper.prototype.takeRightWhile = function(predicate) {
          return this.reverse().takeWhile(predicate).reverse();
        };
        LazyWrapper.prototype.toArray = function() {
          return this.take(MAX_ARRAY_LENGTH);
        };
        baseForOwn(LazyWrapper.prototype, function(func, methodName) {
          var checkIteratee = /^(?:filter|find|map|reject)|While$/.test(methodName),
              isTaker = /^(?:head|last)$/.test(methodName),
              lodashFunc = lodash[isTaker ? ('take' + (methodName == 'last' ? 'Right' : '')) : methodName],
              retUnwrapped = isTaker || /^find/.test(methodName);
          if (!lodashFunc) {
            return;
          }
          lodash.prototype[methodName] = function() {
            var value = this.__wrapped__,
                args = isTaker ? [1] : arguments,
                isLazy = value instanceof LazyWrapper,
                iteratee = args[0],
                useLazy = isLazy || isArray(value);
            var interceptor = function(value) {
              var result = lodashFunc.apply(lodash, arrayPush([value], args));
              return (isTaker && chainAll) ? result[0] : result;
            };
            if (useLazy && checkIteratee && typeof iteratee == 'function' && iteratee.length != 1) {
              isLazy = useLazy = false;
            }
            var chainAll = this.__chain__,
                isHybrid = !!this.__actions__.length,
                isUnwrapped = retUnwrapped && !chainAll,
                onlyLazy = isLazy && !isHybrid;
            if (!retUnwrapped && useLazy) {
              value = onlyLazy ? value : new LazyWrapper(this);
              var result = func.apply(value, args);
              result.__actions__.push({
                'func': thru,
                'args': [interceptor],
                'thisArg': undefined
              });
              return new LodashWrapper(result, chainAll);
            }
            if (isUnwrapped && onlyLazy) {
              return func.apply(this, args);
            }
            result = this.thru(interceptor);
            return isUnwrapped ? (isTaker ? result.value()[0] : result.value()) : result;
          };
        });
        arrayEach(['pop', 'push', 'shift', 'sort', 'splice', 'unshift'], function(methodName) {
          var func = arrayProto[methodName],
              chainName = /^(?:push|sort|unshift)$/.test(methodName) ? 'tap' : 'thru',
              retUnwrapped = /^(?:pop|shift)$/.test(methodName);
          lodash.prototype[methodName] = function() {
            var args = arguments;
            if (retUnwrapped && !this.__chain__) {
              var value = this.value();
              return func.apply(isArray(value) ? value : [], args);
            }
            return this[chainName](function(value) {
              return func.apply(isArray(value) ? value : [], args);
            });
          };
        });
        baseForOwn(LazyWrapper.prototype, function(func, methodName) {
          var lodashFunc = lodash[methodName];
          if (lodashFunc) {
            var key = (lodashFunc.name + ''),
                names = realNames[key] || (realNames[key] = []);
            names.push({
              'name': methodName,
              'func': lodashFunc
            });
          }
        });
        realNames[createHybridWrapper(undefined, BIND_KEY_FLAG).name] = [{
          'name': 'wrapper',
          'func': undefined
        }];
        LazyWrapper.prototype.clone = lazyClone;
        LazyWrapper.prototype.reverse = lazyReverse;
        LazyWrapper.prototype.value = lazyValue;
        lodash.prototype.at = wrapperAt;
        lodash.prototype.chain = wrapperChain;
        lodash.prototype.commit = wrapperCommit;
        lodash.prototype.next = wrapperNext;
        lodash.prototype.plant = wrapperPlant;
        lodash.prototype.reverse = wrapperReverse;
        lodash.prototype.toJSON = lodash.prototype.valueOf = lodash.prototype.value = wrapperValue;
        if (iteratorSymbol) {
          lodash.prototype[iteratorSymbol] = wrapperToIterator;
        }
        return lodash;
      }
      var _ = runInContext();
      (freeSelf || {})._ = _;
      if (typeof define == 'function' && typeof define.amd == 'object' && define.amd) {
        define(function() {
          return _;
        });
      } else if (freeModule) {
        (freeModule.exports = _)._ = _;
        freeExports._ = _;
      } else {
        root._ = _;
      }
    }.call(this));
  })($__require('@empty').Buffer, $__require('@empty'));
  return module.exports;
});

$__System.registerDynamic("14", ["13"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('13');
  return module.exports;
});

(function() {
var define = $__System.amdDefine;
!function(e) {
  var t;
  "undefined" != typeof window ? t = window : "undefined" != typeof self && (t = self), t.ALGOLIA_MIGRATION_LAYER = e();
}(function() {
  return function e(t, o, r) {
    function n(i, a) {
      if (!o[i]) {
        if (!t[i]) {
          var c = "function" == typeof require && require;
          if (!a && c)
            return c(i, !0);
          if (s)
            return s(i, !0);
          var u = new Error("Cannot find module '" + i + "'");
          throw u.code = "MODULE_NOT_FOUND", u;
        }
        var l = o[i] = {exports: {}};
        t[i][0].call(l.exports, function(e) {
          var o = t[i][1][e];
          return n(o ? o : e);
        }, l, l.exports, e, t, o, r);
      }
      return o[i].exports;
    }
    for (var s = "function" == typeof require && require,
        i = 0; i < r.length; i++)
      n(r[i]);
    return n;
  }({
    1: [function(e, t, o) {
      function r(e, t) {
        for (var o in t)
          e.setAttribute(o, t[o]);
      }
      function n(e, t) {
        e.onload = function() {
          this.onerror = this.onload = null, t(null, e);
        }, e.onerror = function() {
          this.onerror = this.onload = null, t(new Error("Failed to load " + this.src), e);
        };
      }
      function s(e, t) {
        e.onreadystatechange = function() {
          "complete" != this.readyState && "loaded" != this.readyState || (this.onreadystatechange = null, t(null, e));
        };
      }
      t.exports = function(e, t, o) {
        var i = document.head || document.getElementsByTagName("head")[0],
            a = document.createElement("script");
        "function" == typeof t && (o = t, t = {}), t = t || {}, o = o || function() {}, a.type = t.type || "text/javascript", a.charset = t.charset || "utf8", a.async = !("async" in t) || !!t.async, a.src = e, t.attrs && r(a, t.attrs), t.text && (a.text = "" + t.text);
        var c = "onload" in a ? n : s;
        c(a, o), a.onload || n(a, o), i.appendChild(a);
      };
    }, {}],
    2: [function(e, t, o) {
      "use strict";
      function r(e) {
        for (var t = new RegExp("cdn\\.jsdelivr\\.net/algoliasearch/latest/" + e.replace(".", "\\.") + "(?:\\.min)?\\.js$"),
            o = document.getElementsByTagName("script"),
            r = !1,
            n = 0,
            s = o.length; n < s; n++)
          if (o[n].src && t.test(o[n].src)) {
            r = !0;
            break;
          }
        return r;
      }
      t.exports = r;
    }, {}],
    3: [function(e, t, o) {
      "use strict";
      function r(t) {
        var o = e(1),
            r = "//cdn.jsdelivr.net/algoliasearch/2/" + t + ".min.js",
            s = "-- AlgoliaSearch `latest` warning --\nWarning, you are using the `latest` version string from jsDelivr to load the AlgoliaSearch library.\nUsing `latest` is no more recommended, you should load //cdn.jsdelivr.net/algoliasearch/2/algoliasearch.min.js\n\nAlso, we updated the AlgoliaSearch JavaScript client to V3. If you want to upgrade,\nplease read our migration guide at https://github.com/algolia/algoliasearch-client-js/wiki/Migration-guide-from-2.x.x-to-3.x.x\n-- /AlgoliaSearch  `latest` warning --";
        window.console && (window.console.warn ? window.console.warn(s) : window.console.log && window.console.log(s));
        try {
          document.write("<script>window.ALGOLIA_SUPPORTS_DOCWRITE = true</script>"), window.ALGOLIA_SUPPORTS_DOCWRITE === !0 ? (document.write('<script src="' + r + '"></script>'), n("document.write")()) : o(r, n("DOMElement"));
        } catch (i) {
          o(r, n("DOMElement"));
        }
      }
      function n(e) {
        return function() {
          var t = "AlgoliaSearch: loaded V2 script using " + e;
          window.console && window.console.log && window.console.log(t);
        };
      }
      t.exports = r;
    }, {1: 1}],
    4: [function(e, t, o) {
      "use strict";
      function r() {
        var e = "-- AlgoliaSearch V2 => V3 error --\nYou are trying to use a new version of the AlgoliaSearch JavaScript client with an old notation.\nPlease read our migration guide at https://github.com/algolia/algoliasearch-client-js/wiki/Migration-guide-from-2.x.x-to-3.x.x\n-- /AlgoliaSearch V2 => V3 error --";
        window.AlgoliaSearch = function() {
          throw new Error(e);
        }, window.AlgoliaSearchHelper = function() {
          throw new Error(e);
        }, window.AlgoliaExplainResults = function() {
          throw new Error(e);
        };
      }
      t.exports = r;
    }, {}],
    5: [function(e, t, o) {
      "use strict";
      function r(t) {
        var o = e(2),
            r = e(3),
            n = e(4);
        o(t) ? r(t) : n();
      }
      r("algoliasearch");
    }, {
      2: 2,
      3: 3,
      4: 4
    }]
  }, {}, [5])(5);
}), function(e) {
  if ("object" == typeof exports && "undefined" != typeof module)
    module.exports = e();
  else if ("function" == typeof define && define.amd)
    define("15", [], e);
  else {
    var t;
    t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, t.algoliasearch = e();
  }
}(function() {
  var e;
  return function t(e, o, r) {
    function n(i, a) {
      if (!o[i]) {
        if (!e[i]) {
          var c = "function" == typeof require && require;
          if (!a && c)
            return c(i, !0);
          if (s)
            return s(i, !0);
          var u = new Error("Cannot find module '" + i + "'");
          throw u.code = "MODULE_NOT_FOUND", u;
        }
        var l = o[i] = {exports: {}};
        e[i][0].call(l.exports, function(t) {
          var o = e[i][1][t];
          return n(o ? o : t);
        }, l, l.exports, t, e, o, r);
      }
      return o[i].exports;
    }
    for (var s = "function" == typeof require && require,
        i = 0; i < r.length; i++)
      n(r[i]);
    return n;
  }({
    1: [function(e, t, o) {
      function r(e) {
        if (e = "" + e, !(e.length > 1e4)) {
          var t = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);
          if (t) {
            var o = parseFloat(t[1]),
                r = (t[2] || "ms").toLowerCase();
            switch (r) {
              case "years":
              case "year":
              case "yrs":
              case "yr":
              case "y":
                return o * p;
              case "days":
              case "day":
              case "d":
                return o * l;
              case "hours":
              case "hour":
              case "hrs":
              case "hr":
              case "h":
                return o * u;
              case "minutes":
              case "minute":
              case "mins":
              case "min":
              case "m":
                return o * c;
              case "seconds":
              case "second":
              case "secs":
              case "sec":
              case "s":
                return o * a;
              case "milliseconds":
              case "millisecond":
              case "msecs":
              case "msec":
              case "ms":
                return o;
            }
          }
        }
      }
      function n(e) {
        return e >= l ? Math.round(e / l) + "d" : e >= u ? Math.round(e / u) + "h" : e >= c ? Math.round(e / c) + "m" : e >= a ? Math.round(e / a) + "s" : e + "ms";
      }
      function s(e) {
        return i(e, l, "day") || i(e, u, "hour") || i(e, c, "minute") || i(e, a, "second") || e + " ms";
      }
      function i(e, t, o) {
        if (!(e < t))
          return e < 1.5 * t ? Math.floor(e / t) + " " + o : Math.ceil(e / t) + " " + o + "s";
      }
      var a = 1e3,
          c = 60 * a,
          u = 60 * c,
          l = 24 * u,
          p = 365.25 * l;
      t.exports = function(e, t) {
        return t = t || {}, "string" == typeof e ? r(e) : t["long"] ? s(e) : n(e);
      };
    }, {}],
    2: [function(e, t, o) {
      function r() {
        d && l && (d = !1, l.length ? p = l.concat(p) : h = -1, p.length && n());
      }
      function n() {
        if (!d) {
          var e = a(r);
          d = !0;
          for (var t = p.length; t; ) {
            for (l = p, p = []; ++h < t; )
              l && l[h].run();
            h = -1, t = p.length;
          }
          l = null, d = !1, c(e);
        }
      }
      function s(e, t) {
        this.fun = e, this.array = t;
      }
      function i() {}
      var a,
          c,
          u = t.exports = {};
      !function() {
        try {
          a = setTimeout;
        } catch (e) {
          a = function() {
            throw new Error("setTimeout is not defined");
          };
        }
        try {
          c = clearTimeout;
        } catch (e) {
          c = function() {
            throw new Error("clearTimeout is not defined");
          };
        }
      }();
      var l,
          p = [],
          d = !1,
          h = -1;
      u.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var o = 1; o < arguments.length; o++)
            t[o - 1] = arguments[o];
        p.push(new s(e, t)), 1 !== p.length || d || a(n, 0);
      }, s.prototype.run = function() {
        this.fun.apply(null, this.array);
      }, u.title = "browser", u.browser = !0, u.env = {}, u.argv = [], u.version = "", u.versions = {}, u.on = i, u.addListener = i, u.once = i, u.off = i, u.removeListener = i, u.removeAllListeners = i, u.emit = i, u.binding = function(e) {
        throw new Error("process.binding is not supported");
      }, u.cwd = function() {
        return "/";
      }, u.chdir = function(e) {
        throw new Error("process.chdir is not supported");
      }, u.umask = function() {
        return 0;
      };
    }, {}],
    3: [function(e, t, o) {
      function r() {
        return "WebkitAppearance" in document.documentElement.style || window.console && (console.firebug || console.exception && console.table) || navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31;
      }
      function n() {
        var e = arguments,
            t = this.useColors;
        if (e[0] = (t ? "%c" : "") + this.namespace + (t ? " %c" : " ") + e[0] + (t ? "%c " : " ") + "+" + o.humanize(this.diff), !t)
          return e;
        var r = "color: " + this.color;
        e = [e[0], r, "color: inherit"].concat(Array.prototype.slice.call(e, 1));
        var n = 0,
            s = 0;
        return e[0].replace(/%[a-z%]/g, function(e) {
          "%%" !== e && (n++, "%c" === e && (s = n));
        }), e.splice(s, 0, r), e;
      }
      function s() {
        return "object" == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments);
      }
      function i(e) {
        try {
          null == e ? o.storage.removeItem("debug") : o.storage.debug = e;
        } catch (t) {}
      }
      function a() {
        var e;
        try {
          e = o.storage.debug;
        } catch (t) {}
        return e;
      }
      function c() {
        try {
          return window.localStorage;
        } catch (e) {}
      }
      o = t.exports = e(4), o.log = s, o.formatArgs = n, o.save = i, o.load = a, o.useColors = r, o.storage = "undefined" != typeof chrome && "undefined" != typeof chrome.storage ? chrome.storage.local : c(), o.colors = ["lightseagreen", "forestgreen", "goldenrod", "dodgerblue", "darkorchid", "crimson"], o.formatters.j = function(e) {
        return JSON.stringify(e);
      }, o.enable(a());
    }, {4: 4}],
    4: [function(e, t, o) {
      function r() {
        return o.colors[l++ % o.colors.length];
      }
      function n(e) {
        function t() {}
        function n() {
          var e = n,
              t = +new Date,
              s = t - (u || t);
          e.diff = s, e.prev = u, e.curr = t, u = t, null == e.useColors && (e.useColors = o.useColors()), null == e.color && e.useColors && (e.color = r());
          var i = Array.prototype.slice.call(arguments);
          i[0] = o.coerce(i[0]), "string" != typeof i[0] && (i = ["%o"].concat(i));
          var a = 0;
          i[0] = i[0].replace(/%([a-z%])/g, function(t, r) {
            if ("%%" === t)
              return t;
            a++;
            var n = o.formatters[r];
            if ("function" == typeof n) {
              var s = i[a];
              t = n.call(e, s), i.splice(a, 1), a--;
            }
            return t;
          }), "function" == typeof o.formatArgs && (i = o.formatArgs.apply(e, i));
          var c = n.log || o.log || console.log.bind(console);
          c.apply(e, i);
        }
        t.enabled = !1, n.enabled = !0;
        var s = o.enabled(e) ? n : t;
        return s.namespace = e, s;
      }
      function s(e) {
        o.save(e);
        for (var t = (e || "").split(/[\s,]+/),
            r = t.length,
            n = 0; n < r; n++)
          t[n] && (e = t[n].replace(/\*/g, ".*?"), "-" === e[0] ? o.skips.push(new RegExp("^" + e.substr(1) + "$")) : o.names.push(new RegExp("^" + e + "$")));
      }
      function i() {
        o.enable("");
      }
      function a(e) {
        var t,
            r;
        for (t = 0, r = o.skips.length; t < r; t++)
          if (o.skips[t].test(e))
            return !1;
        for (t = 0, r = o.names.length; t < r; t++)
          if (o.names[t].test(e))
            return !0;
        return !1;
      }
      function c(e) {
        return e instanceof Error ? e.stack || e.message : e;
      }
      o = t.exports = n, o.coerce = c, o.disable = i, o.enable = s, o.enabled = a, o.humanize = e(1), o.names = [], o.skips = [], o.formatters = {};
      var u,
          l = 0;
    }, {1: 1}],
    5: [function(t, o, r) {
      (function(r, n) {
        (function() {
          "use strict";
          function s(e) {
            return "function" == typeof e || "object" == typeof e && null !== e;
          }
          function i(e) {
            return "function" == typeof e;
          }
          function a(e) {
            W = e;
          }
          function c(e) {
            Z = e;
          }
          function u() {
            return function() {
              r.nextTick(f);
            };
          }
          function l() {
            return function() {
              X(f);
            };
          }
          function p() {
            var e = 0,
                t = new oe(f),
                o = document.createTextNode("");
            return t.observe(o, {characterData: !0}), function() {
              o.data = e = ++e % 2;
            };
          }
          function d() {
            var e = new MessageChannel;
            return e.port1.onmessage = f, function() {
              e.port2.postMessage(0);
            };
          }
          function h() {
            return function() {
              setTimeout(f, 1);
            };
          }
          function f() {
            for (var e = 0; e < z; e += 2) {
              var t = se[e],
                  o = se[e + 1];
              t(o), se[e] = void 0, se[e + 1] = void 0;
            }
            z = 0;
          }
          function y() {
            try {
              var e = t,
                  o = e("vertx");
              return X = o.runOnLoop || o.runOnContext, l();
            } catch (r) {
              return h();
            }
          }
          function m(e, t) {
            var o = this,
                r = new this.constructor(g);
            void 0 === r[ce] && L(r);
            var n = o._state;
            if (n) {
              var s = arguments[n - 1];
              Z(function() {
                A(n, r, s, o._result);
              });
            } else
              P(o, r, e, t);
            return r;
          }
          function v(e) {
            var t = this;
            if (e && "object" == typeof e && e.constructor === t)
              return e;
            var o = new t(g);
            return k(o, e), o;
          }
          function g() {}
          function b() {
            return new TypeError("You cannot resolve a promise with itself");
          }
          function w() {
            return new TypeError("A promises callback cannot return that same promise.");
          }
          function _(e) {
            try {
              return e.then;
            } catch (t) {
              return de.error = t, de;
            }
          }
          function x(e, t, o, r) {
            try {
              e.call(t, o, r);
            } catch (n) {
              return n;
            }
          }
          function T(e, t, o) {
            Z(function(e) {
              var r = !1,
                  n = x(o, t, function(o) {
                    r || (r = !0, t !== o ? k(e, o) : O(e, o));
                  }, function(t) {
                    r || (r = !0, q(e, t));
                  }, "Settle: " + (e._label || " unknown promise"));
              !r && n && (r = !0, q(e, n));
            }, e);
          }
          function j(e, t) {
            t._state === le ? O(e, t._result) : t._state === pe ? q(e, t._result) : P(t, void 0, function(t) {
              k(e, t);
            }, function(t) {
              q(e, t);
            });
          }
          function S(e, t, o) {
            t.constructor === e.constructor && o === ie && constructor.resolve === ae ? j(e, t) : o === de ? q(e, de.error) : void 0 === o ? O(e, t) : i(o) ? T(e, t, o) : O(e, t);
          }
          function k(e, t) {
            e === t ? q(e, b()) : s(t) ? S(e, t, _(t)) : O(e, t);
          }
          function R(e) {
            e._onerror && e._onerror(e._result), E(e);
          }
          function O(e, t) {
            e._state === ue && (e._result = t, e._state = le, 0 !== e._subscribers.length && Z(E, e));
          }
          function q(e, t) {
            e._state === ue && (e._state = pe, e._result = t, Z(R, e));
          }
          function P(e, t, o, r) {
            var n = e._subscribers,
                s = n.length;
            e._onerror = null, n[s] = t, n[s + le] = o, n[s + pe] = r, 0 === s && e._state && Z(E, e);
          }
          function E(e) {
            var t = e._subscribers,
                o = e._state;
            if (0 !== t.length) {
              for (var r,
                  n,
                  s = e._result,
                  i = 0; i < t.length; i += 3)
                r = t[i], n = t[i + o], r ? A(o, r, n, s) : n(s);
              e._subscribers.length = 0;
            }
          }
          function I() {
            this.error = null;
          }
          function U(e, t) {
            try {
              return e(t);
            } catch (o) {
              return he.error = o, he;
            }
          }
          function A(e, t, o, r) {
            var n,
                s,
                a,
                c,
                u = i(o);
            if (u) {
              if (n = U(o, r), n === he ? (c = !0, s = n.error, n = null) : a = !0, t === n)
                return void q(t, w());
            } else
              n = r, a = !0;
            t._state !== ue || (u && a ? k(t, n) : c ? q(t, s) : e === le ? O(t, n) : e === pe && q(t, n));
          }
          function C(e, t) {
            try {
              t(function(t) {
                k(e, t);
              }, function(t) {
                q(e, t);
              });
            } catch (o) {
              q(e, o);
            }
          }
          function N() {
            return fe++;
          }
          function L(e) {
            e[ce] = fe++, e._state = void 0, e._result = void 0, e._subscribers = [];
          }
          function D(e) {
            return new be(this, e).promise;
          }
          function H(e) {
            var t = this;
            return new t(Y(e) ? function(o, r) {
              for (var n = e.length,
                  s = 0; s < n; s++)
                t.resolve(e[s]).then(o, r);
            } : function(e, t) {
              t(new TypeError("You must pass an array to race."));
            });
          }
          function M(e) {
            var t = this,
                o = new t(g);
            return q(o, e), o;
          }
          function J() {
            throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");
          }
          function K() {
            throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
          }
          function Q(e) {
            this[ce] = N(), this._result = this._state = void 0, this._subscribers = [], g !== e && ("function" != typeof e && J(), this instanceof Q ? C(this, e) : K());
          }
          function B(e, t) {
            this._instanceConstructor = e, this.promise = new e(g), this.promise[ce] || L(this.promise), Y(t) ? (this._input = t, this.length = t.length, this._remaining = t.length, this._result = new Array(this.length), 0 === this.length ? O(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(), 0 === this._remaining && O(this.promise, this._result))) : q(this.promise, F());
          }
          function F() {
            return new Error("Array Methods must be provided an Array");
          }
          function G() {
            var e;
            if ("undefined" != typeof n)
              e = n;
            else if ("undefined" != typeof self)
              e = self;
            else
              try {
                e = Function("return this")();
              } catch (t) {
                throw new Error("polyfill failed because global object is unavailable in this environment");
              }
            var o = e.Promise;
            o && "[object Promise]" === Object.prototype.toString.call(o.resolve()) && !o.cast || (e.Promise = ge);
          }
          var V;
          V = Array.isArray ? Array.isArray : function(e) {
            return "[object Array]" === Object.prototype.toString.call(e);
          };
          var X,
              W,
              $,
              Y = V,
              z = 0,
              Z = function(e, t) {
                se[z] = e, se[z + 1] = t, z += 2, 2 === z && (W ? W(f) : $());
              },
              ee = "undefined" != typeof window ? window : void 0,
              te = ee || {},
              oe = te.MutationObserver || te.WebKitMutationObserver,
              re = "undefined" == typeof self && "undefined" != typeof r && "[object process]" === {}.toString.call(r),
              ne = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel,
              se = new Array(1e3);
          $ = re ? u() : oe ? p() : ne ? d() : void 0 === ee && "function" == typeof t ? y() : h();
          var ie = m,
              ae = v,
              ce = Math.random().toString(36).substring(16),
              ue = void 0,
              le = 1,
              pe = 2,
              de = new I,
              he = new I,
              fe = 0,
              ye = D,
              me = H,
              ve = M,
              ge = Q;
          Q.all = ye, Q.race = me, Q.resolve = ae, Q.reject = ve, Q._setScheduler = a, Q._setAsap = c, Q._asap = Z, Q.prototype = {
            constructor: Q,
            then: ie,
            "catch": function(e) {
              return this.then(null, e);
            }
          };
          var be = B;
          B.prototype._enumerate = function() {
            for (var e = this.length,
                t = this._input,
                o = 0; this._state === ue && o < e; o++)
              this._eachEntry(t[o], o);
          }, B.prototype._eachEntry = function(e, t) {
            var o = this._instanceConstructor,
                r = o.resolve;
            if (r === ae) {
              var n = _(e);
              if (n === ie && e._state !== ue)
                this._settledAt(e._state, t, e._result);
              else if ("function" != typeof n)
                this._remaining--, this._result[t] = e;
              else if (o === ge) {
                var s = new o(g);
                S(s, e, n), this._willSettleAt(s, t);
              } else
                this._willSettleAt(new o(function(t) {
                  t(e);
                }), t);
            } else
              this._willSettleAt(r(e), t);
          }, B.prototype._settledAt = function(e, t, o) {
            var r = this.promise;
            r._state === ue && (this._remaining--, e === pe ? q(r, o) : this._result[t] = o), 0 === this._remaining && O(r, this._result);
          }, B.prototype._willSettleAt = function(e, t) {
            var o = this;
            P(e, void 0, function(e) {
              o._settledAt(le, t, e);
            }, function(e) {
              o._settledAt(pe, t, e);
            });
          };
          var we = G,
              _e = {
                Promise: ge,
                polyfill: we
              };
          "function" == typeof e && e.amd ? e(function() {
            return _e;
          }) : "undefined" != typeof o && o.exports ? o.exports = _e : "undefined" != typeof this && (this.ES6Promise = _e), we();
        }).call(this);
      }).call(this, t(2), "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
    }, {2: 2}],
    6: [function(e, t, o) {
      function r() {
        this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0;
      }
      function n(e) {
        return "function" == typeof e;
      }
      function s(e) {
        return "number" == typeof e;
      }
      function i(e) {
        return "object" == typeof e && null !== e;
      }
      function a(e) {
        return void 0 === e;
      }
      t.exports = r, r.EventEmitter = r, r.prototype._events = void 0, r.prototype._maxListeners = void 0, r.defaultMaxListeners = 10, r.prototype.setMaxListeners = function(e) {
        if (!s(e) || e < 0 || isNaN(e))
          throw TypeError("n must be a positive number");
        return this._maxListeners = e, this;
      }, r.prototype.emit = function(e) {
        var t,
            o,
            r,
            s,
            c,
            u;
        if (this._events || (this._events = {}), "error" === e && (!this._events.error || i(this._events.error) && !this._events.error.length)) {
          if (t = arguments[1], t instanceof Error)
            throw t;
          var l = new Error('Uncaught, unspecified "error" event. (' + t + ")");
          throw l.context = t, l;
        }
        if (o = this._events[e], a(o))
          return !1;
        if (n(o))
          switch (arguments.length) {
            case 1:
              o.call(this);
              break;
            case 2:
              o.call(this, arguments[1]);
              break;
            case 3:
              o.call(this, arguments[1], arguments[2]);
              break;
            default:
              s = Array.prototype.slice.call(arguments, 1), o.apply(this, s);
          }
        else if (i(o))
          for (s = Array.prototype.slice.call(arguments, 1), u = o.slice(), r = u.length, c = 0; c < r; c++)
            u[c].apply(this, s);
        return !0;
      }, r.prototype.addListener = function(e, t) {
        var o;
        if (!n(t))
          throw TypeError("listener must be a function");
        return this._events || (this._events = {}), this._events.newListener && this.emit("newListener", e, n(t.listener) ? t.listener : t), this._events[e] ? i(this._events[e]) ? this._events[e].push(t) : this._events[e] = [this._events[e], t] : this._events[e] = t, i(this._events[e]) && !this._events[e].warned && (o = a(this._maxListeners) ? r.defaultMaxListeners : this._maxListeners, o && o > 0 && this._events[e].length > o && (this._events[e].warned = !0, console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[e].length), "function" == typeof console.trace && console.trace())), this;
      }, r.prototype.on = r.prototype.addListener, r.prototype.once = function(e, t) {
        function o() {
          this.removeListener(e, o), r || (r = !0, t.apply(this, arguments));
        }
        if (!n(t))
          throw TypeError("listener must be a function");
        var r = !1;
        return o.listener = t, this.on(e, o), this;
      }, r.prototype.removeListener = function(e, t) {
        var o,
            r,
            s,
            a;
        if (!n(t))
          throw TypeError("listener must be a function");
        if (!this._events || !this._events[e])
          return this;
        if (o = this._events[e], s = o.length, r = -1, o === t || n(o.listener) && o.listener === t)
          delete this._events[e], this._events.removeListener && this.emit("removeListener", e, t);
        else if (i(o)) {
          for (a = s; a-- > 0; )
            if (o[a] === t || o[a].listener && o[a].listener === t) {
              r = a;
              break;
            }
          if (r < 0)
            return this;
          1 === o.length ? (o.length = 0, delete this._events[e]) : o.splice(r, 1), this._events.removeListener && this.emit("removeListener", e, t);
        }
        return this;
      }, r.prototype.removeAllListeners = function(e) {
        var t,
            o;
        if (!this._events)
          return this;
        if (!this._events.removeListener)
          return 0 === arguments.length ? this._events = {} : this._events[e] && delete this._events[e], this;
        if (0 === arguments.length) {
          for (t in this._events)
            "removeListener" !== t && this.removeAllListeners(t);
          return this.removeAllListeners("removeListener"), this._events = {}, this;
        }
        if (o = this._events[e], n(o))
          this.removeListener(e, o);
        else if (o)
          for (; o.length; )
            this.removeListener(e, o[o.length - 1]);
        return delete this._events[e], this;
      }, r.prototype.listeners = function(e) {
        var t;
        return t = this._events && this._events[e] ? n(this._events[e]) ? [this._events[e]] : this._events[e].slice() : [];
      }, r.prototype.listenerCount = function(e) {
        if (this._events) {
          var t = this._events[e];
          if (n(t))
            return 1;
          if (t)
            return t.length;
        }
        return 0;
      }, r.listenerCount = function(e, t) {
        return e.listenerCount(t);
      };
    }, {}],
    7: [function(e, t, o) {
      var r = Object.prototype.hasOwnProperty,
          n = Object.prototype.toString;
      t.exports = function(e, t, o) {
        if ("[object Function]" !== n.call(t))
          throw new TypeError("iterator must be a function");
        var s = e.length;
        if (s === +s)
          for (var i = 0; i < s; i++)
            t.call(o, e[i], i, e);
        else
          for (var a in e)
            r.call(e, a) && t.call(o, e[a], a, e);
      };
    }, {}],
    8: [function(e, t, o) {
      (function(e) {
        "undefined" != typeof window ? t.exports = window : "undefined" != typeof e ? t.exports = e : "undefined" != typeof self ? t.exports = self : t.exports = {};
      }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
    }, {}],
    9: [function(e, t, o) {
      "function" == typeof Object.create ? t.exports = function(e, t) {
        e.super_ = t, e.prototype = Object.create(t.prototype, {constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }});
      } : t.exports = function(e, t) {
        e.super_ = t;
        var o = function() {};
        o.prototype = t.prototype, e.prototype = new o, e.prototype.constructor = e;
      };
    }, {}],
    10: [function(e, t, o) {
      var r = {}.toString;
      t.exports = Array.isArray || function(e) {
        return "[object Array]" == r.call(e);
      };
    }, {}],
    11: [function(e, t, o) {
      "use strict";
      function r(e, t) {
        if (e.map)
          return e.map(t);
        for (var o = [],
            r = 0; r < e.length; r++)
          o.push(t(e[r], r));
        return o;
      }
      var n = function(e) {
        switch (typeof e) {
          case "string":
            return e;
          case "boolean":
            return e ? "true" : "false";
          case "number":
            return isFinite(e) ? e : "";
          default:
            return "";
        }
      };
      t.exports = function(e, t, o, a) {
        return t = t || "&", o = o || "=", null === e && (e = void 0), "object" == typeof e ? r(i(e), function(i) {
          var a = encodeURIComponent(n(i)) + o;
          return s(e[i]) ? r(e[i], function(e) {
            return a + encodeURIComponent(n(e));
          }).join(t) : a + encodeURIComponent(n(e[i]));
        }).join(t) : a ? encodeURIComponent(n(a)) + o + encodeURIComponent(n(e)) : "";
      };
      var s = Array.isArray || function(e) {
        return "[object Array]" === Object.prototype.toString.call(e);
      },
          i = Object.keys || function(e) {
            var t = [];
            for (var o in e)
              Object.prototype.hasOwnProperty.call(e, o) && t.push(o);
            return t;
          };
    }, {}],
    12: [function(e, t, o) {
      function r() {
        c.apply(this, arguments);
      }
      function n() {
        var e = "Not implemented in this environment.\nIf you feel this is a mistake, write to support@algolia.com";
        throw new l.AlgoliaSearchError(e);
      }
      t.exports = r;
      var s = e(14),
          i = e(24),
          a = e(25),
          c = e(13),
          u = e(9),
          l = e(26);
      u(r, c), r.prototype.deleteIndex = function(e, t) {
        return this._jsonRequest({
          method: "DELETE",
          url: "/1/indexes/" + encodeURIComponent(e),
          hostType: "write",
          callback: t
        });
      }, r.prototype.moveIndex = function(e, t, o) {
        var r = {
          operation: "move",
          destination: t
        };
        return this._jsonRequest({
          method: "POST",
          url: "/1/indexes/" + encodeURIComponent(e) + "/operation",
          body: r,
          hostType: "write",
          callback: o
        });
      }, r.prototype.copyIndex = function(e, t, o) {
        var r = {
          operation: "copy",
          destination: t
        };
        return this._jsonRequest({
          method: "POST",
          url: "/1/indexes/" + encodeURIComponent(e) + "/operation",
          body: r,
          hostType: "write",
          callback: o
        });
      }, r.prototype.getLogs = function(t, o, r) {
        var n = e(23),
            s = {};
        return "object" == typeof t ? (s = n(t), r = o) : 0 === arguments.length || "function" == typeof t ? r = t : 1 === arguments.length || "function" == typeof o ? (r = o, s.offset = t) : (s.offset = t, s.length = o), void 0 === s.offset && (s.offset = 0), void 0 === s.length && (s.length = 10), this._jsonRequest({
          method: "GET",
          url: "/1/logs?" + this._getSearchParams(s, ""),
          hostType: "read",
          callback: r
        });
      }, r.prototype.listIndexes = function(e, t) {
        var o = "";
        return void 0 === e || "function" == typeof e ? t = e : o = "?page=" + e, this._jsonRequest({
          method: "GET",
          url: "/1/indexes" + o,
          hostType: "read",
          callback: t
        });
      }, r.prototype.initIndex = function(e) {
        return new s(this, e);
      }, r.prototype.listUserKeys = function(e) {
        return this._jsonRequest({
          method: "GET",
          url: "/1/keys",
          hostType: "read",
          callback: e
        });
      }, r.prototype.getUserKeyACL = function(e, t) {
        return this._jsonRequest({
          method: "GET",
          url: "/1/keys/" + e,
          hostType: "read",
          callback: t
        });
      }, r.prototype.deleteUserKey = function(e, t) {
        return this._jsonRequest({
          method: "DELETE",
          url: "/1/keys/" + e,
          hostType: "write",
          callback: t
        });
      }, r.prototype.addUserKey = function(t, o, r) {
        var n = e(10),
            s = "Usage: client.addUserKey(arrayOfAcls[, params, callback])";
        if (!n(t))
          throw new Error(s);
        1 !== arguments.length && "function" != typeof o || (r = o, o = null);
        var i = {acl: t};
        return o && (i.validity = o.validity, i.maxQueriesPerIPPerHour = o.maxQueriesPerIPPerHour, i.maxHitsPerQuery = o.maxHitsPerQuery, i.indexes = o.indexes, i.description = o.description, o.queryParameters && (i.queryParameters = this._getSearchParams(o.queryParameters, "")), i.referers = o.referers), this._jsonRequest({
          method: "POST",
          url: "/1/keys",
          body: i,
          hostType: "write",
          callback: r
        });
      }, r.prototype.addUserKeyWithValidity = i(function(e, t, o) {
        return this.addUserKey(e, t, o);
      }, a("client.addUserKeyWithValidity()", "client.addUserKey()")), r.prototype.updateUserKey = function(t, o, r, n) {
        var s = e(10),
            i = "Usage: client.updateUserKey(key, arrayOfAcls[, params, callback])";
        if (!s(o))
          throw new Error(i);
        2 !== arguments.length && "function" != typeof r || (n = r, r = null);
        var a = {acl: o};
        return r && (a.validity = r.validity, a.maxQueriesPerIPPerHour = r.maxQueriesPerIPPerHour, a.maxHitsPerQuery = r.maxHitsPerQuery, a.indexes = r.indexes, a.description = r.description, r.queryParameters && (a.queryParameters = this._getSearchParams(r.queryParameters, "")), a.referers = r.referers), this._jsonRequest({
          method: "PUT",
          url: "/1/keys/" + t,
          body: a,
          hostType: "write",
          callback: n
        });
      }, r.prototype.startQueriesBatch = i(function() {
        this._batch = [];
      }, a("client.startQueriesBatch()", "client.search()")), r.prototype.addQueryInBatch = i(function(e, t, o) {
        this._batch.push({
          indexName: e,
          query: t,
          params: o
        });
      }, a("client.addQueryInBatch()", "client.search()")), r.prototype.sendQueriesBatch = i(function(e) {
        return this.search(this._batch, e);
      }, a("client.sendQueriesBatch()", "client.search()")), r.prototype.batch = function(t, o) {
        var r = e(10),
            n = "Usage: client.batch(operations[, callback])";
        if (!r(t))
          throw new Error(n);
        return this._jsonRequest({
          method: "POST",
          url: "/1/indexes/*/batch",
          body: {requests: t},
          hostType: "write",
          callback: o
        });
      }, r.prototype.destroy = n, r.prototype.enableRateLimitForward = n, r.prototype.disableRateLimitForward = n, r.prototype.useSecuredAPIKey = n, r.prototype.disableSecuredAPIKey = n, r.prototype.generateSecuredApiKey = n;
    }, {
      10: 10,
      13: 13,
      14: 14,
      23: 23,
      24: 24,
      25: 25,
      26: 26,
      9: 9
    }],
    13: [function(e, t, o) {
      function r(t, o, r) {
        var s = e(3)("algoliasearch"),
            a = e(23),
            u = e(10),
            l = e(28),
            p = "Usage: algoliasearch(applicationID, apiKey, opts)";
        if (r._allowEmptyCredentials !== !0 && !t)
          throw new c.AlgoliaSearchError("Please provide an application ID. " + p);
        if (r._allowEmptyCredentials !== !0 && !o)
          throw new c.AlgoliaSearchError("Please provide an API key. " + p);
        this.applicationID = t, this.apiKey = o;
        var d = i([this.applicationID + "-1.algolianet.com", this.applicationID + "-2.algolianet.com", this.applicationID + "-3.algolianet.com"]);
        this.hosts = {
          read: [],
          write: []
        }, this.hostIndex = {
          read: 0,
          write: 0
        }, r = r || {};
        var h = r.protocol || "https:",
            f = void 0 === r.timeout ? 2e3 : r.timeout;
        if (/:$/.test(h) || (h += ":"), "http:" !== r.protocol && "https:" !== r.protocol)
          throw new c.AlgoliaSearchError("protocol must be `http:` or `https:` (was `" + r.protocol + "`)");
        r.hosts ? u(r.hosts) ? (this.hosts.read = a(r.hosts), this.hosts.write = a(r.hosts)) : (this.hosts.read = a(r.hosts.read), this.hosts.write = a(r.hosts.write)) : (this.hosts.read = [this.applicationID + "-dsn.algolia.net"].concat(d), this.hosts.write = [this.applicationID + ".algolia.net"].concat(d)), this.hosts.read = l(this.hosts.read, n(h)), this.hosts.write = l(this.hosts.write, n(h)), this.requestTimeout = f, this.extraHeaders = [], this.cache = r._cache || {}, this._ua = r._ua, this._useCache = !(void 0 !== r._useCache && !r._cache) || r._useCache, this._useFallback = void 0 === r.useFallback || r.useFallback, this._setTimeout = r._setTimeout, s("init done, %j", this);
      }
      function n(e) {
        return function(t) {
          return e + "//" + t.toLowerCase();
        };
      }
      function s(e) {
        if (void 0 === Array.prototype.toJSON)
          return JSON.stringify(e);
        var t = Array.prototype.toJSON;
        delete Array.prototype.toJSON;
        var o = JSON.stringify(e);
        return Array.prototype.toJSON = t, o;
      }
      function i(e) {
        for (var t,
            o,
            r = e.length; 0 !== r; )
          o = Math.floor(Math.random() * r), r -= 1, t = e[r], e[r] = e[o], e[o] = t;
        return e;
      }
      function a(e) {
        var t = {};
        for (var o in e)
          if (Object.prototype.hasOwnProperty.call(e, o)) {
            var r;
            r = "x-algolia-api-key" === o || "x-algolia-application-id" === o ? "**hidden for security purposes**" : e[o], t[o] = r;
          }
        return t;
      }
      t.exports = r;
      var c = e(26),
          u = e(27),
          l = e(16),
          p = 500;
      r.prototype.initIndex = function(e) {
        return new l(this, e);
      }, r.prototype.setExtraHeader = function(e, t) {
        this.extraHeaders.push({
          name: e.toLowerCase(),
          value: t
        });
      }, r.prototype.addAlgoliaAgent = function(e) {
        this._ua += ";" + e;
      }, r.prototype._jsonRequest = function(t) {
        function o(e, u) {
          function p(e) {
            var t = e && e.body && e.body.message && e.body.status || e.statusCode || e && e.body && 200;
            i("received response: statusCode: %s, computed statusCode: %d, headers: %j", e.statusCode, t, e.headers);
            var o = 2 === Math.floor(t / 100),
                s = new Date;
            if (m.push({
              currentHost: x,
              headers: a(n),
              content: r || null,
              contentLength: void 0 !== r ? r.length : null,
              method: u.method,
              timeout: u.timeout,
              url: u.url,
              startTime: _,
              endTime: s,
              duration: s - _,
              statusCode: t
            }), o)
              return d._useCache && l && (l[w] = e.responseText), e.body;
            var p = 4 !== Math.floor(t / 100);
            if (p)
              return h += 1, g();
            i("unrecoverable error");
            var f = new c.AlgoliaSearchError(e.body && e.body.message, {
              debugData: m,
              statusCode: t
            });
            return d._promise.reject(f);
          }
          function v(e) {
            i("error: %s, stack: %s", e.message, e.stack);
            var o = new Date;
            return m.push({
              currentHost: x,
              headers: a(n),
              content: r || null,
              contentLength: void 0 !== r ? r.length : null,
              method: u.method,
              timeout: u.timeout,
              url: u.url,
              startTime: _,
              endTime: o,
              duration: o - _
            }), e instanceof c.AlgoliaSearchError || (e = new c.Unknown(e && e.message, e)), h += 1, e instanceof c.Unknown || e instanceof c.UnparsableJSON || h >= d.hosts[t.hostType].length && (f || !y) ? (e.debugData = m, d._promise.reject(e)) : e instanceof c.RequestTimeout ? b() : g();
          }
          function g() {
            return i("retrying request"), d.hostIndex[t.hostType] = (d.hostIndex[t.hostType] + 1) % d.hosts[t.hostType].length, o(e, u);
          }
          function b() {
            return i("retrying request with higher timeout"), d.hostIndex[t.hostType] = (d.hostIndex[t.hostType] + 1) % d.hosts[t.hostType].length, u.timeout = d.requestTimeout * (h + 1), o(e, u);
          }
          var w,
              _ = new Date;
          if (d._useCache && (w = t.url), d._useCache && r && (w += "_body_" + u.body), d._useCache && l && void 0 !== l[w])
            return i("serving response from cache"), d._promise.resolve(JSON.parse(l[w]));
          if (h >= d.hosts[t.hostType].length)
            return !y || f ? (i("could not get any response"), d._promise.reject(new c.AlgoliaSearchError("Cannot connect to the AlgoliaSearch API. Send an email to support@algolia.com to report and resolve the issue. Application id was: " + d.applicationID, {debugData: m}))) : (i("switching to fallback"), h = 0, u.method = t.fallback.method, u.url = t.fallback.url, u.jsonBody = t.fallback.body, u.jsonBody && (u.body = s(u.jsonBody)), n = d._computeRequestHeaders(), u.timeout = d.requestTimeout * (h + 1), d.hostIndex[t.hostType] = 0, f = !0, o(d._request.fallback, u));
          var x = d.hosts[t.hostType][d.hostIndex[t.hostType]],
              T = x + u.url,
              j = {
                body: u.body,
                jsonBody: u.jsonBody,
                method: u.method,
                headers: n,
                timeout: u.timeout,
                debug: i
              };
          return i("method: %s, url: %s, headers: %j, timeout: %d", j.method, T, j.headers, j.timeout), e === d._request.fallback && i("using fallback"), e.call(d, T, j).then(p, v);
        }
        var r,
            n,
            i = e(3)("algoliasearch:" + t.url),
            l = t.cache,
            d = this,
            h = 0,
            f = !1,
            y = d._useFallback && d._request.fallback && t.fallback;
        this.apiKey.length > p && void 0 !== t.body && void 0 !== t.body.params ? (t.body.apiKey = this.apiKey, n = this._computeRequestHeaders(!1)) : n = this._computeRequestHeaders(), void 0 !== t.body && (r = s(t.body)), i("request start");
        var m = [],
            v = o(d._request, {
              url: t.url,
              method: t.method,
              body: r,
              jsonBody: t.body,
              timeout: d.requestTimeout * (h + 1)
            });
        return t.callback ? void v.then(function(e) {
          u(function() {
            t.callback(null, e);
          }, d._setTimeout || setTimeout);
        }, function(e) {
          u(function() {
            t.callback(e);
          }, d._setTimeout || setTimeout);
        }) : v;
      }, r.prototype._getSearchParams = function(e, t) {
        if (void 0 === e || null === e)
          return t;
        for (var o in e)
          null !== o && void 0 !== e[o] && e.hasOwnProperty(o) && (t += "" === t ? "" : "&", t += o + "=" + encodeURIComponent("[object Array]" === Object.prototype.toString.call(e[o]) ? s(e[o]) : e[o]));
        return t;
      }, r.prototype._computeRequestHeaders = function(t) {
        var o = e(7),
            r = {
              "x-algolia-agent": this._ua,
              "x-algolia-application-id": this.applicationID
            };
        return t !== !1 && (r["x-algolia-api-key"] = this.apiKey), this.userToken && (r["x-algolia-usertoken"] = this.userToken), this.securityTags && (r["x-algolia-tagfilters"] = this.securityTags), this.extraHeaders && o(this.extraHeaders, function(e) {
          r[e.name] = e.value;
        }), r;
      }, r.prototype.search = function(t, o, r) {
        var n = e(10),
            s = e(28),
            i = "Usage: client.search(arrayOfQueries[, callback])";
        if (!n(t))
          throw new Error(i);
        "function" == typeof o ? (r = o, o = {}) : void 0 === o && (o = {});
        var a = this,
            c = {requests: s(t, function(e) {
                var t = "";
                return void 0 !== e.query && (t += "query=" + encodeURIComponent(e.query)), {
                  indexName: e.indexName,
                  params: a._getSearchParams(e.params, t)
                };
              })},
            u = s(c.requests, function(e, t) {
              return t + "=" + encodeURIComponent("/1/indexes/" + encodeURIComponent(e.indexName) + "?" + e.params);
            }).join("&"),
            l = "/1/indexes/*/queries";
        return void 0 !== o.strategy && (l += "?strategy=" + o.strategy), this._jsonRequest({
          cache: this.cache,
          method: "POST",
          url: l,
          body: c,
          hostType: "read",
          fallback: {
            method: "GET",
            url: "/1/indexes/*",
            body: {params: u}
          },
          callback: r
        });
      }, r.prototype.setSecurityTags = function(e) {
        if ("[object Array]" === Object.prototype.toString.call(e)) {
          for (var t = [],
              o = 0; o < e.length; ++o)
            if ("[object Array]" === Object.prototype.toString.call(e[o])) {
              for (var r = [],
                  n = 0; n < e[o].length; ++n)
                r.push(e[o][n]);
              t.push("(" + r.join(",") + ")");
            } else
              t.push(e[o]);
          e = t.join(",");
        }
        this.securityTags = e;
      }, r.prototype.setUserToken = function(e) {
        this.userToken = e;
      }, r.prototype.clearCache = function() {
        this.cache = {};
      }, r.prototype.setRequestTimeout = function(e) {
        e && (this.requestTimeout = parseInt(e, 10));
      };
    }, {
      10: 10,
      16: 16,
      23: 23,
      26: 26,
      27: 27,
      28: 28,
      3: 3,
      7: 7
    }],
    14: [function(e, t, o) {
      function r() {
        s.apply(this, arguments);
      }
      var n = e(9),
          s = e(16),
          i = e(24),
          a = e(25),
          c = e(27),
          u = e(26);
      t.exports = r, n(r, s), r.prototype.addObject = function(e, t, o) {
        var r = this;
        return 1 !== arguments.length && "function" != typeof t || (o = t, t = void 0), this.as._jsonRequest({
          method: void 0 !== t ? "PUT" : "POST",
          url: "/1/indexes/" + encodeURIComponent(r.indexName) + (void 0 !== t ? "/" + encodeURIComponent(t) : ""),
          body: e,
          hostType: "write",
          callback: o
        });
      }, r.prototype.addObjects = function(t, o) {
        var r = e(10),
            n = "Usage: index.addObjects(arrayOfObjects[, callback])";
        if (!r(t))
          throw new Error(n);
        for (var s = this,
            i = {requests: []},
            a = 0; a < t.length; ++a) {
          var c = {
            action: "addObject",
            body: t[a]
          };
          i.requests.push(c);
        }
        return this.as._jsonRequest({
          method: "POST",
          url: "/1/indexes/" + encodeURIComponent(s.indexName) + "/batch",
          body: i,
          hostType: "write",
          callback: o
        });
      }, r.prototype.getObject = function(e, t, o) {
        var r = this;
        1 !== arguments.length && "function" != typeof t || (o = t, t = void 0);
        var n = "";
        if (void 0 !== t) {
          n = "?attributes=";
          for (var s = 0; s < t.length; ++s)
            0 !== s && (n += ","), n += t[s];
        }
        return this.as._jsonRequest({
          method: "GET",
          url: "/1/indexes/" + encodeURIComponent(r.indexName) + "/" + encodeURIComponent(e) + n,
          hostType: "read",
          callback: o
        });
      }, r.prototype.getObjects = function(t, o, r) {
        var n = e(10),
            s = e(28),
            i = "Usage: index.getObjects(arrayOfObjectIDs[, callback])";
        if (!n(t))
          throw new Error(i);
        var a = this;
        1 !== arguments.length && "function" != typeof o || (r = o, o = void 0);
        var c = {requests: s(t, function(e) {
            var t = {
              indexName: a.indexName,
              objectID: e
            };
            return o && (t.attributesToRetrieve = o.join(",")), t;
          })};
        return this.as._jsonRequest({
          method: "POST",
          url: "/1/indexes/*/objects",
          hostType: "read",
          body: c,
          callback: r
        });
      }, r.prototype.partialUpdateObject = function(e, t, o) {
        1 !== arguments.length && "function" != typeof t || (o = t, t = void 0);
        var r = this,
            n = "/1/indexes/" + encodeURIComponent(r.indexName) + "/" + encodeURIComponent(e.objectID) + "/partial";
        return t === !1 && (n += "?createIfNotExists=false"), this.as._jsonRequest({
          method: "POST",
          url: n,
          body: e,
          hostType: "write",
          callback: o
        });
      }, r.prototype.partialUpdateObjects = function(t, o) {
        var r = e(10),
            n = "Usage: index.partialUpdateObjects(arrayOfObjects[, callback])";
        if (!r(t))
          throw new Error(n);
        for (var s = this,
            i = {requests: []},
            a = 0; a < t.length; ++a) {
          var c = {
            action: "partialUpdateObject",
            objectID: t[a].objectID,
            body: t[a]
          };
          i.requests.push(c);
        }
        return this.as._jsonRequest({
          method: "POST",
          url: "/1/indexes/" + encodeURIComponent(s.indexName) + "/batch",
          body: i,
          hostType: "write",
          callback: o
        });
      }, r.prototype.saveObject = function(e, t) {
        var o = this;
        return this.as._jsonRequest({
          method: "PUT",
          url: "/1/indexes/" + encodeURIComponent(o.indexName) + "/" + encodeURIComponent(e.objectID),
          body: e,
          hostType: "write",
          callback: t
        });
      }, r.prototype.saveObjects = function(t, o) {
        var r = e(10),
            n = "Usage: index.saveObjects(arrayOfObjects[, callback])";
        if (!r(t))
          throw new Error(n);
        for (var s = this,
            i = {requests: []},
            a = 0; a < t.length; ++a) {
          var c = {
            action: "updateObject",
            objectID: t[a].objectID,
            body: t[a]
          };
          i.requests.push(c);
        }
        return this.as._jsonRequest({
          method: "POST",
          url: "/1/indexes/" + encodeURIComponent(s.indexName) + "/batch",
          body: i,
          hostType: "write",
          callback: o
        });
      }, r.prototype.deleteObject = function(e, t) {
        if ("function" == typeof e || "string" != typeof e && "number" != typeof e) {
          var o = new u.AlgoliaSearchError("Cannot delete an object without an objectID");
          return t = e, "function" == typeof t ? t(o) : this.as._promise.reject(o);
        }
        var r = this;
        return this.as._jsonRequest({
          method: "DELETE",
          url: "/1/indexes/" + encodeURIComponent(r.indexName) + "/" + encodeURIComponent(e),
          hostType: "write",
          callback: t
        });
      }, r.prototype.deleteObjects = function(t, o) {
        var r = e(10),
            n = e(28),
            s = "Usage: index.deleteObjects(arrayOfObjectIDs[, callback])";
        if (!r(t))
          throw new Error(s);
        var i = this,
            a = {requests: n(t, function(e) {
                return {
                  action: "deleteObject",
                  objectID: e,
                  body: {objectID: e}
                };
              })};
        return this.as._jsonRequest({
          method: "POST",
          url: "/1/indexes/" + encodeURIComponent(i.indexName) + "/batch",
          body: a,
          hostType: "write",
          callback: o
        });
      }, r.prototype.deleteByQuery = function(t, o, r) {
        function n(e) {
          if (0 === e.nbHits)
            return e;
          var t = p(e.hits, function(e) {
            return e.objectID;
          });
          return d.deleteObjects(t).then(s).then(i);
        }
        function s(e) {
          return d.waitTask(e.taskID);
        }
        function i() {
          return d.deleteByQuery(t, o);
        }
        function a() {
          c(function() {
            r(null);
          }, h._setTimeout || setTimeout);
        }
        function u(e) {
          c(function() {
            r(e);
          }, h._setTimeout || setTimeout);
        }
        var l = e(23),
            p = e(28),
            d = this,
            h = d.as;
        1 === arguments.length || "function" == typeof o ? (r = o, o = {}) : o = l(o), o.attributesToRetrieve = "objectID", o.hitsPerPage = 1e3, o.distinct = !1, this.clearCache();
        var f = this.search(t, o).then(n);
        return r ? void f.then(a, u) : f;
      }, r.prototype.browseAll = function(t, o) {
        function r(e) {
          if (!a._stopped) {
            var t;
            t = void 0 !== e ? "cursor=" + encodeURIComponent(e) : l, c._jsonRequest({
              method: "GET",
              url: "/1/indexes/" + encodeURIComponent(u.indexName) + "/browse?" + t,
              hostType: "read",
              callback: n
            });
          }
        }
        function n(e, t) {
          if (!a._stopped)
            return e ? void a._error(e) : (a._result(t), void 0 === t.cursor ? void a._end() : void r(t.cursor));
        }
        "object" == typeof t && (o = t, t = void 0);
        var s = e(29),
            i = e(15),
            a = new i,
            c = this.as,
            u = this,
            l = c._getSearchParams(s({}, o || {}, {query: t}), "");
        return r(), a;
      }, r.prototype.ttAdapter = function(e) {
        var t = this;
        return function(o, r, n) {
          var s;
          s = "function" == typeof n ? n : r, t.search(o, e, function(e, t) {
            return e ? void s(e) : void s(t.hits);
          });
        };
      }, r.prototype.waitTask = function(e, t) {
        function o() {
          return l._jsonRequest({
            method: "GET",
            hostType: "read",
            url: "/1/indexes/" + encodeURIComponent(u.indexName) + "/task/" + e
          }).then(function(e) {
            a++;
            var t = s * a * a;
            return t > i && (t = i), "published" !== e.status ? l._promise.delay(t).then(o) : e;
          });
        }
        function r(e) {
          c(function() {
            t(null, e);
          }, l._setTimeout || setTimeout);
        }
        function n(e) {
          c(function() {
            t(e);
          }, l._setTimeout || setTimeout);
        }
        var s = 100,
            i = 5e3,
            a = 0,
            u = this,
            l = u.as,
            p = o();
        return t ? void p.then(r, n) : p;
      }, r.prototype.clearIndex = function(e) {
        var t = this;
        return this.as._jsonRequest({
          method: "POST",
          url: "/1/indexes/" + encodeURIComponent(t.indexName) + "/clear",
          hostType: "write",
          callback: e
        });
      }, r.prototype.getSettings = function(e) {
        var t = this;
        return this.as._jsonRequest({
          method: "GET",
          url: "/1/indexes/" + encodeURIComponent(t.indexName) + "/settings?getVersion=2",
          hostType: "read",
          callback: e
        });
      }, r.prototype.searchSynonyms = function(e, t) {
        return "function" == typeof e ? (t = e, e = {}) : void 0 === e && (e = {}), this.as._jsonRequest({
          method: "POST",
          url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/synonyms/search",
          body: e,
          hostType: "read",
          callback: t
        });
      }, r.prototype.saveSynonym = function(e, t, o) {
        return "function" == typeof t ? (o = t, t = {}) : void 0 === t && (t = {}), this.as._jsonRequest({
          method: "PUT",
          url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/synonyms/" + encodeURIComponent(e.objectID) + "?forwardToSlaves=" + (t.forwardToSlaves ? "true" : "false"),
          body: e,
          hostType: "write",
          callback: o
        });
      }, r.prototype.getSynonym = function(e, t) {
        return this.as._jsonRequest({
          method: "GET",
          url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/synonyms/" + encodeURIComponent(e),
          hostType: "read",
          callback: t
        });
      }, r.prototype.deleteSynonym = function(e, t, o) {
        return "function" == typeof t ? (o = t, t = {}) : void 0 === t && (t = {}), this.as._jsonRequest({
          method: "DELETE",
          url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/synonyms/" + encodeURIComponent(e) + "?forwardToSlaves=" + (t.forwardToSlaves ? "true" : "false"),
          hostType: "write",
          callback: o
        });
      }, r.prototype.clearSynonyms = function(e, t) {
        return "function" == typeof e ? (t = e, e = {}) : void 0 === e && (e = {}), this.as._jsonRequest({
          method: "POST",
          url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/synonyms/clear?forwardToSlaves=" + (e.forwardToSlaves ? "true" : "false"),
          hostType: "write",
          callback: t
        });
      }, r.prototype.batchSynonyms = function(e, t, o) {
        return "function" == typeof t ? (o = t, t = {}) : void 0 === t && (t = {}), this.as._jsonRequest({
          method: "POST",
          url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/synonyms/batch?forwardToSlaves=" + (t.forwardToSlaves ? "true" : "false") + "&replaceExistingSynonyms=" + (t.replaceExistingSynonyms ? "true" : "false"),
          hostType: "write",
          body: e,
          callback: o
        });
      }, r.prototype.setSettings = function(e, t, o) {
        1 !== arguments.length && "function" != typeof t || (o = t, t = {});
        var r = t.forwardToSlaves || !1,
            n = this;
        return this.as._jsonRequest({
          method: "PUT",
          url: "/1/indexes/" + encodeURIComponent(n.indexName) + "/settings?forwardToSlaves=" + (r ? "true" : "false"),
          hostType: "write",
          body: e,
          callback: o
        });
      }, r.prototype.listUserKeys = function(e) {
        var t = this;
        return this.as._jsonRequest({
          method: "GET",
          url: "/1/indexes/" + encodeURIComponent(t.indexName) + "/keys",
          hostType: "read",
          callback: e
        });
      }, r.prototype.getUserKeyACL = function(e, t) {
        var o = this;
        return this.as._jsonRequest({
          method: "GET",
          url: "/1/indexes/" + encodeURIComponent(o.indexName) + "/keys/" + e,
          hostType: "read",
          callback: t
        });
      }, r.prototype.deleteUserKey = function(e, t) {
        var o = this;
        return this.as._jsonRequest({
          method: "DELETE",
          url: "/1/indexes/" + encodeURIComponent(o.indexName) + "/keys/" + e,
          hostType: "write",
          callback: t
        });
      }, r.prototype.addUserKey = function(t, o, r) {
        var n = e(10),
            s = "Usage: index.addUserKey(arrayOfAcls[, params, callback])";
        if (!n(t))
          throw new Error(s);
        1 !== arguments.length && "function" != typeof o || (r = o, o = null);
        var i = {acl: t};
        return o && (i.validity = o.validity, i.maxQueriesPerIPPerHour = o.maxQueriesPerIPPerHour, i.maxHitsPerQuery = o.maxHitsPerQuery, i.description = o.description, o.queryParameters && (i.queryParameters = this.as._getSearchParams(o.queryParameters, "")), i.referers = o.referers), this.as._jsonRequest({
          method: "POST",
          url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/keys",
          body: i,
          hostType: "write",
          callback: r
        });
      }, r.prototype.addUserKeyWithValidity = i(function(e, t, o) {
        return this.addUserKey(e, t, o);
      }, a("index.addUserKeyWithValidity()", "index.addUserKey()")), r.prototype.updateUserKey = function(t, o, r, n) {
        var s = e(10),
            i = "Usage: index.updateUserKey(key, arrayOfAcls[, params, callback])";
        if (!s(o))
          throw new Error(i);
        2 !== arguments.length && "function" != typeof r || (n = r, r = null);
        var a = {acl: o};
        return r && (a.validity = r.validity, a.maxQueriesPerIPPerHour = r.maxQueriesPerIPPerHour, a.maxHitsPerQuery = r.maxHitsPerQuery, a.description = r.description, r.queryParameters && (a.queryParameters = this.as._getSearchParams(r.queryParameters, "")), a.referers = r.referers), this.as._jsonRequest({
          method: "PUT",
          url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/keys/" + t,
          body: a,
          hostType: "write",
          callback: n
        });
      };
    }, {
      10: 10,
      15: 15,
      16: 16,
      23: 23,
      24: 24,
      25: 25,
      26: 26,
      27: 27,
      28: 28,
      29: 29,
      9: 9
    }],
    15: [function(e, t, o) {
      "use strict";
      function r() {}
      t.exports = r;
      var n = e(9),
          s = e(6).EventEmitter;
      n(r, s), r.prototype.stop = function() {
        this._stopped = !0, this._clean();
      }, r.prototype._end = function() {
        this.emit("end"), this._clean();
      }, r.prototype._error = function(e) {
        this.emit("error", e), this._clean();
      }, r.prototype._result = function(e) {
        this.emit("result", e);
      }, r.prototype._clean = function() {
        this.removeAllListeners("stop"), this.removeAllListeners("end"), this.removeAllListeners("error"), this.removeAllListeners("result");
      };
    }, {
      6: 6,
      9: 9
    }],
    16: [function(e, t, o) {
      function r(e, t) {
        this.indexName = t, this.as = e, this.typeAheadArgs = null, this.typeAheadValueOption = null, this.cache = {};
      }
      var n = e(22);
      t.exports = r, r.prototype.clearCache = function() {
        this.cache = {};
      }, r.prototype.search = n("query"), r.prototype.similarSearch = n("similarQuery"), r.prototype.browse = function(t, o, r) {
        var n,
            s,
            i = e(29),
            a = this;
        0 === arguments.length || 1 === arguments.length && "function" == typeof arguments[0] ? (n = 0, r = arguments[0], t = void 0) : "number" == typeof arguments[0] ? (n = arguments[0], "number" == typeof arguments[1] ? s = arguments[1] : "function" == typeof arguments[1] && (r = arguments[1], s = void 0), t = void 0, o = void 0) : "object" == typeof arguments[0] ? ("function" == typeof arguments[1] && (r = arguments[1]), o = arguments[0], t = void 0) : "string" == typeof arguments[0] && "function" == typeof arguments[1] && (r = arguments[1], o = void 0), o = i({}, o || {}, {
          page: n,
          hitsPerPage: s,
          query: t
        });
        var c = this.as._getSearchParams(o, "");
        return this.as._jsonRequest({
          method: "GET",
          url: "/1/indexes/" + encodeURIComponent(a.indexName) + "/browse?" + c,
          hostType: "read",
          callback: r
        });
      }, r.prototype.browseFrom = function(e, t) {
        return this.as._jsonRequest({
          method: "GET",
          url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/browse?cursor=" + encodeURIComponent(e),
          hostType: "read",
          callback: t
        });
      }, r.prototype._search = function(e, t, o) {
        return this.as._jsonRequest({
          cache: this.cache,
          method: "POST",
          url: t || "/1/indexes/" + encodeURIComponent(this.indexName) + "/query",
          body: {params: e},
          hostType: "read",
          fallback: {
            method: "GET",
            url: "/1/indexes/" + encodeURIComponent(this.indexName),
            body: {params: e}
          },
          callback: o
        });
      }, r.prototype.as = null, r.prototype.indexName = null, r.prototype.typeAheadArgs = null, r.prototype.typeAheadValueOption = null;
    }, {
      22: 22,
      29: 29
    }],
    17: [function(e, t, o) {
      "use strict";
      var r = e(12),
          n = e(18);
      t.exports = n(r);
    }, {
      12: 12,
      18: 18
    }],
    18: [function(e, t, o) {
      "use strict";
      var r = e(8),
          n = r.Promise || e(5).Promise;
      t.exports = function(t, o) {
        function s(t, o, r) {
          var n = e(23),
              a = e(19);
          return r = n(r || {}), void 0 === r.protocol && (r.protocol = a()), r._ua = r._ua || s.ua, new i(t, o, r);
        }
        function i() {
          t.apply(this, arguments);
        }
        var a = e(9),
            c = e(26),
            u = e(20),
            l = e(21),
            p = e(30);
        o = o || "", s.version = e(31), s.ua = "Algolia for vanilla JavaScript " + o + s.version, s.initPlaces = p(s), r.__algolia = {
          debug: e(3),
          algoliasearch: s
        };
        var d = {
          hasXMLHttpRequest: "XMLHttpRequest" in r,
          hasXDomainRequest: "XDomainRequest" in r
        };
        return d.hasXMLHttpRequest && (d.cors = "withCredentials" in new XMLHttpRequest, d.timeout = "timeout" in new XMLHttpRequest), a(i, t), i.prototype._request = function(e, t) {
          return new n(function(o, r) {
            function n() {
              if (!l) {
                d.timeout || clearTimeout(a);
                var e;
                try {
                  e = {
                    body: JSON.parse(h.responseText),
                    responseText: h.responseText,
                    statusCode: h.status,
                    headers: h.getAllResponseHeaders && h.getAllResponseHeaders() || {}
                  };
                } catch (t) {
                  e = new c.UnparsableJSON({more: h.responseText});
                }
                e instanceof c.UnparsableJSON ? r(e) : o(e);
              }
            }
            function s(e) {
              l || (d.timeout || clearTimeout(a), r(new c.Network({more: e})));
            }
            function i() {
              d.timeout || (l = !0, h.abort()), r(new c.RequestTimeout);
            }
            if (!d.cors && !d.hasXDomainRequest)
              return void r(new c.Network("CORS not supported"));
            e = u(e, t.headers);
            var a,
                l,
                p = t.body,
                h = d.cors ? new XMLHttpRequest : new XDomainRequest;
            h instanceof XMLHttpRequest ? h.open(t.method, e, !0) : h.open(t.method, e), d.cors && (p && ("POST" === t.method ? h.setRequestHeader("content-type", "application/x-www-form-urlencoded") : h.setRequestHeader("content-type", "application/json")), h.setRequestHeader("accept", "application/json")), h.onprogress = function() {}, h.onload = n, h.onerror = s, d.timeout ? (h.timeout = t.timeout, h.ontimeout = i) : a = setTimeout(i, t.timeout), h.send(p);
          });
        }, i.prototype._request.fallback = function(e, t) {
          return e = u(e, t.headers), new n(function(o, r) {
            l(e, t, function(e, t) {
              return e ? void r(e) : void o(t);
            });
          });
        }, i.prototype._promise = {
          reject: function(e) {
            return n.reject(e);
          },
          resolve: function(e) {
            return n.resolve(e);
          },
          delay: function(e) {
            return new n(function(t) {
              setTimeout(t, e);
            });
          }
        }, s;
      };
    }, {
      19: 19,
      20: 20,
      21: 21,
      23: 23,
      26: 26,
      3: 3,
      30: 30,
      31: 31,
      5: 5,
      8: 8,
      9: 9
    }],
    19: [function(e, t, o) {
      "use strict";
      function r() {
        var e = window.document.location.protocol;
        return "http:" !== e && "https:" !== e && (e = "http:"), e;
      }
      t.exports = r;
    }, {}],
    20: [function(e, t, o) {
      "use strict";
      function r(e, t) {
        return e += /\?/.test(e) ? "&" : "?", e + n(t);
      }
      t.exports = r;
      var n = e(11);
    }, {11: 11}],
    21: [function(e, t, o) {
      "use strict";
      function r(e, t, o) {
        function r() {
          t.debug("JSONP: success"), m || d || (m = !0, p || (t.debug("JSONP: Fail. Script loaded but did not call the callback"), a(), o(new n.JSONPScriptFail)));
        }
        function i() {
          "loaded" !== this.readyState && "complete" !== this.readyState || r();
        }
        function a() {
          clearTimeout(v), f.onload = null, f.onreadystatechange = null, f.onerror = null, h.removeChild(f);
        }
        function c() {
          try {
            delete window[y], delete window[y + "_loaded"];
          } catch (e) {
            window[y] = window[y + "_loaded"] = void 0;
          }
        }
        function u() {
          t.debug("JSONP: Script timeout"), d = !0, a(), o(new n.RequestTimeout);
        }
        function l() {
          t.debug("JSONP: Script error"), m || d || (a(), o(new n.JSONPScriptError));
        }
        if ("GET" !== t.method)
          return void o(new Error("Method " + t.method + " " + e + " is not supported by JSONP."));
        t.debug("JSONP: start");
        var p = !1,
            d = !1;
        s += 1;
        var h = document.getElementsByTagName("head")[0],
            f = document.createElement("script"),
            y = "algoliaJSONP_" + s,
            m = !1;
        window[y] = function(e) {
          return c(), d ? void t.debug("JSONP: Late answer, ignoring") : (p = !0, a(), void o(null, {body: e}));
        }, e += "&callback=" + y, t.jsonBody && t.jsonBody.params && (e += "&" + t.jsonBody.params);
        var v = setTimeout(u, t.timeout);
        f.onreadystatechange = i, f.onload = r, f.onerror = l, f.async = !0, f.defer = !0, f.src = e, h.appendChild(f);
      }
      t.exports = r;
      var n = e(26),
          s = 0;
    }, {26: 26}],
    22: [function(e, t, o) {
      function r(e, t) {
        return function(o, r, s) {
          if ("function" == typeof o && "object" == typeof r || "object" == typeof s)
            throw new n.AlgoliaSearchError("index.search usage is index.search(query, params, cb)");
          0 === arguments.length || "function" == typeof o ? (s = o, o = "") : 1 !== arguments.length && "function" != typeof r || (s = r, r = void 0), "object" == typeof o && null !== o ? (r = o, o = void 0) : void 0 !== o && null !== o || (o = "");
          var i = "";
          return void 0 !== o && (i += e + "=" + encodeURIComponent(o)), void 0 !== r && (i = this.as._getSearchParams(r, i)), this._search(i, t, s);
        };
      }
      t.exports = r;
      var n = e(26);
    }, {26: 26}],
    23: [function(e, t, o) {
      t.exports = function(e) {
        return JSON.parse(JSON.stringify(e));
      };
    }, {}],
    24: [function(e, t, o) {
      t.exports = function(e, t) {
        function o() {
          return r || (console.log(t), r = !0), e.apply(this, arguments);
        }
        var r = !1;
        return o;
      };
    }, {}],
    25: [function(e, t, o) {
      t.exports = function(e, t) {
        var o = e.toLowerCase().replace(".", "").replace("()", "");
        return "algoliasearch: `" + e + "` was replaced by `" + t + "`. Please see https://github.com/algolia/algoliasearch-client-js/wiki/Deprecated#" + o;
      };
    }, {}],
    26: [function(e, t, o) {
      "use strict";
      function r(t, o) {
        var r = e(7),
            n = this;
        "function" == typeof Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : n.stack = (new Error).stack || "Cannot get a stacktrace, browser is too old", this.name = "AlgoliaSearchError", this.message = t || "Unknown error", o && r(o, function(e, t) {
          n[t] = e;
        });
      }
      function n(e, t) {
        function o() {
          var o = Array.prototype.slice.call(arguments, 0);
          "string" != typeof o[0] && o.unshift(t), r.apply(this, o), this.name = "AlgoliaSearch" + e + "Error";
        }
        return s(o, r), o;
      }
      var s = e(9);
      s(r, Error), t.exports = {
        AlgoliaSearchError: r,
        UnparsableJSON: n("UnparsableJSON", "Could not parse the incoming response as JSON, see err.more for details"),
        RequestTimeout: n("RequestTimeout", "Request timedout before getting a response"),
        Network: n("Network", "Network issue, see err.more for details"),
        JSONPScriptFail: n("JSONPScriptFail", "<script> was loaded but did not call our provided callback"),
        JSONPScriptError: n("JSONPScriptError", "<script> unable to load due to an `error` event on it"),
        Unknown: n("Unknown", "Unknown error occured")
      };
    }, {
      7: 7,
      9: 9
    }],
    27: [function(e, t, o) {
      t.exports = function(e, t) {
        t(e, 0);
      };
    }, {}],
    28: [function(e, t, o) {
      var r = e(7);
      t.exports = function(e, t) {
        var o = [];
        return r(e, function(r, n) {
          o.push(t(r, n, e));
        }), o;
      };
    }, {7: 7}],
    29: [function(e, t, o) {
      var r = e(7);
      t.exports = function n(e) {
        var t = Array.prototype.slice.call(arguments);
        return r(t, function(t) {
          for (var o in t)
            t.hasOwnProperty(o) && ("object" == typeof e[o] && "object" == typeof t[o] ? e[o] = n({}, e[o], t[o]) : void 0 !== t[o] && (e[o] = t[o]));
        }), e;
      };
    }, {7: 7}],
    30: [function(e, t, o) {
      function r(t) {
        return function(o, r, s) {
          var i = e(23);
          s = s && i(s) || {}, s.hosts = s.hosts || ["places-dsn.algolia.net", "places-1.algolianet.com", "places-2.algolianet.com", "places-3.algolianet.com"], 0 !== arguments.length && "object" != typeof o && void 0 !== o || (o = "", r = "", s._allowEmptyCredentials = !0);
          var a = t(o, r, s),
              c = a.initIndex("places");
          return c.search = n("query", "/1/places/query"), c;
        };
      }
      t.exports = r;
      var n = e(22);
    }, {
      22: 22,
      23: 23
    }],
    31: [function(e, t, o) {
      "use strict";
      t.exports = "3.17.0";
    }, {}]
  }, {}, [17])(17);
});

})();
$__System.register('16', ['12', '14', '15', '17', '18'], function (_export) {
    var _Object$assign, _, algoliasearch, _createClass, _classCallCheck, SearchStore;

    return {
        setters: [function (_4) {
            _Object$assign = _4['default'];
        }, function (_5) {
            _ = _5['default'];
        }, function (_6) {
            algoliasearch = _6['default'];
        }, function (_2) {
            _createClass = _2['default'];
        }, function (_3) {
            _classCallCheck = _3['default'];
        }],
        execute: function () {
            'use strict';

            SearchStore = (function () {
                _createClass(SearchStore, null, [{
                    key: '$inject',
                    get: function get() {
                        return ['$rootScope', 'APP_ID', 'API_KEY'];
                    }
                }]);

                function SearchStore($rootScope, APP_ID, API_KEY) {
                    _classCallCheck(this, SearchStore);

                    this._$rootScope = $rootScope;
                    this._APP_ID = APP_ID;
                    this._API_KEY = API_KEY;

                    this._client = algoliasearch(this._APP_ID, this._API_KEY);
                    this._index = this._client.initIndex('bestbuy');

                    this.query = "";
                    this._results = [];
                    this._currentHits = 0;
                    this._currentPage = 0;
                }

                _createClass(SearchStore, [{
                    key: 'triggerQuerySearch',
                    value: function triggerQuerySearch() {
                        this._results = [];
                        this._currentPage = 0;
                        this._updateQuery();
                    }
                }, {
                    key: '_updateQuery',
                    value: function _updateQuery() {
                        var _this = this;

                        this._index.search(this.query, {
                            page: this._currentPage
                        }).then(function (results) {
                            return _this._handleFetchSuccess(results);
                        })['catch'](function (err) {
                            return _this._handleFetchError(err);
                        });
                    }
                }, {
                    key: '_handleFetchSuccess',
                    value: function _handleFetchSuccess(results) {
                        this._currentHits = results.nbHits;
                        this.createResults(results);
                    }
                }, {
                    key: '_handleFetchError',
                    value: function _handleFetchError(err) {
                        console.log(err);
                    }

                    /**
                    ** createRelevantResults :: array -> array
                    ** Returns array of results containing relevant (either brand or type) value and highest level category
                    */
                }, {
                    key: '_createRelevantResults',
                    value: function _createRelevantResults(results) {
                        var _this2 = this;

                        return results.hits.map(function (item) {
                            return _Object$assign({}, { relevantValue: _this2._getResultsValues(item._highlightResult) }, { category: item.hierarchicalCategories.lvl0 });
                        });
                    }

                    /**
                    ** getResultsValues :: object -> string
                    ** Returns relevant value (either brand or type) based on matched words
                    */
                }, {
                    key: '_getResultsValues',
                    value: function _getResultsValues(item) {
                        return item.type.matchedWords.length > 0 ? item.type.value : item.brand.value;
                    }

                    /**
                    ** removeDuplicates :: array -> array
                    ** Returns array of results with duplicates filtered out
                    */
                }, {
                    key: '_removeDuplicates',
                    value: function _removeDuplicates(relevantResults) {
                        return _.uniqWith(relevantResults, _.isEqual);
                    }

                    /**
                    ** setResults :: array -> array
                    ** Returns array of results concatenated to any prior results from the current query
                    */
                }, {
                    key: '_setResults',
                    value: function _setResults(relevantResults) {
                        return this._results.concat(relevantResults);
                    }
                }, {
                    key: '_handlePagination',
                    value: function _handlePagination(relevantResults) {
                        this._results = this._removeDuplicates(relevantResults);
                        if (this.needsAdditionalResults) {
                            this._currentPage++;
                            this._updateQuery();
                        } else {
                            this._$rootScope.$evalAsync();
                        }
                    }
                }, {
                    key: 'results',
                    get: function get() {
                        return this._results;
                    }
                }, {
                    key: 'needsAdditionalResults',
                    get: function get() {
                        return this._currentHits > 0 && this._results.length < 10 && this.query.length < 2 && this._currentPage < 10;
                    }
                }, {
                    key: 'createResults',
                    get: function get() {
                        return _.flow([this._createRelevantResults, this._removeDuplicates, this._setResults, this._handlePagination]);
                    }
                }]);

                return SearchStore;
            })();

            _export('default', SearchStore);
        }
    };
});

$__System.registerDynamic("f", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var $Object = Object;
  module.exports = {
    create: $Object.create,
    getProto: $Object.getPrototypeOf,
    isEnum: {}.propertyIsEnumerable,
    getDesc: $Object.getOwnPropertyDescriptor,
    setDesc: $Object.defineProperty,
    setDescs: $Object.defineProperties,
    getKeys: $Object.keys,
    getNames: $Object.getOwnPropertyNames,
    getSymbols: $Object.getOwnPropertySymbols,
    each: [].forEach
  };
  return module.exports;
});

$__System.registerDynamic("19", ["f"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var $ = $__require('f');
  module.exports = function defineProperty(it, key, desc) {
    return $.setDesc(it, key, desc);
  };
  return module.exports;
});

$__System.registerDynamic("1a", ["19"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = {
    "default": $__require('19'),
    __esModule: true
  };
  return module.exports;
});

$__System.registerDynamic("17", ["1a"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var _Object$defineProperty = $__require('1a')["default"];
  exports["default"] = (function() {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        _Object$defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps)
        defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        defineProperties(Constructor, staticProps);
      return Constructor;
    };
  })();
  exports.__esModule = true;
  return module.exports;
});

$__System.registerDynamic("18", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  exports["default"] = function(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };
  exports.__esModule = true;
  return module.exports;
});

$__System.register('1b', ['17', '18'], function (_export) {
    var _createClass, _classCallCheck, SearchController;

    function searchDirective() {
        return {
            restrict: 'E',
            controller: 'SearchController',
            controllerAs: 'searchController',
            bindToController: true,
            templateUrl: '/app/search-component.html'
        };
    }

    return {
        setters: [function (_) {
            _createClass = _['default'];
        }, function (_2) {
            _classCallCheck = _2['default'];
        }],
        execute: function () {
            'use strict';

            _export('searchDirective', searchDirective);

            SearchController = (function () {
                _createClass(SearchController, null, [{
                    key: '$inject',
                    get: function get() {
                        return ['searchStore', '$sce'];
                    }
                }]);

                function SearchController(searchStore, $sce) {
                    _classCallCheck(this, SearchController);

                    this._searchStore = searchStore;
                    this._$sce = $sce;
                }

                _createClass(SearchController, [{
                    key: 'renderHtml',
                    value: function renderHtml(text) {
                        return this._$sce.trustAsHtml(text);
                    }
                }, {
                    key: 'searchQuery',
                    value: function searchQuery() {
                        this._searchStore.triggerQuerySearch();
                    }
                }, {
                    key: 'results',
                    get: function get() {
                        return this._searchStore.results;
                    }
                }, {
                    key: 'query',
                    get: function get() {
                        return this._searchStore.query;
                    },
                    set: function set(value) {
                        this._searchStore.query = value;
                    }
                }]);

                return SearchController;
            })();

            _export('default', SearchController);
        }
    };
});

$__System.register('1', ['3', '16', '1b'], function (_export) {
    'use strict';

    var angular, SearchStore, SearchController, searchDirective;
    return {
        setters: [function (_) {
            angular = _['default'];
        }, function (_2) {
            SearchStore = _2['default'];
        }, function (_b) {
            SearchController = _b['default'];
            searchDirective = _b.searchDirective;
        }],
        execute: function () {
            _export('default', angular.module('Algolia.DemoSearch', []).config(['$compileProvider', function ($compileProvider) {
                $compileProvider.debugInfoEnabled(false);
            }]).constant('APP_ID', 'QEZLJEBUWB').constant('API_KEY', '336f0638ed3e45b8ac22b4a0df3417f4').service('searchStore', SearchStore).controller('SearchController', SearchController).directive('searchDirective', searchDirective));

            angular.element(document).ready(function () {
                angular.bootstrap(document.getElementById("AlgoliaSearch"), ['Algolia.DemoSearch']);
            });
        }
    };
});

})
(function(factory) {
  if (typeof define == 'function' && define.amd)
    define([], factory);
  else if (typeof module == 'object' && module.exports && typeof require == 'function')
    module.exports = factory();
  else
    factory();
});