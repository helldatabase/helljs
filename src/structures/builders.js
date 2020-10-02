"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.KeyValueBuilder = exports.UrlBuilder = void 0;
var Builder = /** @class */ (function () {
    function Builder() {
    }
    return Builder;
}());
var UrlBuilder = /** @class */ (function (_super) {
    __extends(UrlBuilder, _super);
    function UrlBuilder(base_url) {
        var _this = _super.call(this) || this;
        _this.base_url = base_url;
        _this.query_url = base_url + "/query";
        _this.status_url = base_url + "/status";
        _this.length_url = base_url + "/length";
        return _this;
    }
    return UrlBuilder;
}(Builder));
exports.UrlBuilder = UrlBuilder;
var KeyValueBuilder = /** @class */ (function (_super) {
    __extends(KeyValueBuilder, _super);
    function KeyValueBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    KeyValueBuilder.keys_string = function () {
        var keys = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            keys[_i] = arguments[_i];
        }
        return keys.join(" & ");
    };
    KeyValueBuilder.value_string = function (value) {
        return JSON.stringify(value);
    };
    return KeyValueBuilder;
}(Builder));
exports.KeyValueBuilder = KeyValueBuilder;
