"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports.CodeFrame = CodeFrame;

var React = _interopRequireWildcard(require("react"));

function CodeFrame({
  decoded
}) {
  if (!decoded) {
    return /*#__PURE__*/React.createElement("pre", {
      "data-gatsby-overlay": "pre"
    }, /*#__PURE__*/React.createElement("code", {
      "data-gatsby-overlay": "pre__code"
    }));
  }

  return /*#__PURE__*/React.createElement("pre", {
    "data-gatsby-overlay": "pre"
  }, /*#__PURE__*/React.createElement("code", {
    "data-gatsby-overlay": "pre__code"
  }, decoded.map((entry, index) => {
    const style = {
      color: entry.fg ? `var(--color-${entry.fg})` : undefined,
      ...(entry.decoration === `bold` ? {
        fontWeight: 800
      } : entry.decoration === `italic` ? {
        fontStyle: `italic`
      } : undefined)
    };
    return /*#__PURE__*/React.createElement("span", {
      key: `frame-${index}`,
      "data-gatsby-overlay": "pre__code__span",
      style: style
    }, entry.content);
  })));
}