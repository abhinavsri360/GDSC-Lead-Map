"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports.BuildError = BuildError;

var React = _interopRequireWildcard(require("react"));

var _overlay = require("./overlay");

var _codeFrame = require("./code-frame");

var _utils = require("../utils");

// Error that is thrown on e.g. webpack errors and thus can't be dismissed and must be fixed
function BuildError({
  error
}) {
  // Incoming build error shape is like this:
  // Sometimes "Enter"
  // ./relative-path-to-file
  // Additional information (sometimes empty line => handled in "prettifyStack" function)
  // /absolute-path-to-file
  // Errors/Warnings
  const decoded = (0, _utils.prettifyStack)(error);
  const [filePath] = decoded;
  const file = filePath.content.split(`\n`)[0];
  return /*#__PURE__*/React.createElement(_overlay.Overlay, null, /*#__PURE__*/React.createElement(_overlay.Header, {
    "data-gatsby-error-type": "build-error"
  }, /*#__PURE__*/React.createElement("div", {
    "data-gatsby-overlay": "header__cause-file"
  }, /*#__PURE__*/React.createElement("h1", {
    id: "gatsby-overlay-labelledby"
  }, "Failed to compile"), /*#__PURE__*/React.createElement("span", null, file)), /*#__PURE__*/React.createElement(_overlay.HeaderOpenClose, {
    open: () => (0, _utils.openInEditor)(file, 1),
    dismiss: false
  })), /*#__PURE__*/React.createElement(_overlay.Body, null, /*#__PURE__*/React.createElement("h2", null, "Source"), /*#__PURE__*/React.createElement(_codeFrame.CodeFrame, {
    decoded: decoded
  }), /*#__PURE__*/React.createElement(_overlay.Footer, {
    id: "gatsby-overlay-describedby"
  }, "This error occurred during the build process and can only be dismissed by fixing the error.")));
}