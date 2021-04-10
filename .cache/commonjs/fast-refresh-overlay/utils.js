"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.prettifyStack = prettifyStack;
exports.openInEditor = openInEditor;
exports.getCodeFrameInformation = getCodeFrameInformation;
exports.getLineNumber = getLineNumber;
exports.formatFilename = formatFilename;

var _anser = _interopRequireDefault(require("anser"));

const enterRegex = /^\s$/;

function prettifyStack(errorInformation) {
  let txt;

  if (Array.isArray(errorInformation)) {
    txt = errorInformation.join(`\n`);
  } else {
    txt = errorInformation;
  }

  const generated = _anser.default.ansiToJson(txt, {
    remove_empty: true,
    use_classes: true,
    json: true
  }); // Sometimes the first line/entry is an "Enter", so we need to filter this out


  const [firstLine, ...rest] = generated;

  if (enterRegex.test(firstLine.content)) {
    return rest;
  }

  return generated;
}

function openInEditor(file, lineNumber = 1) {
  window.fetch(`/__open-stack-frame-in-editor?fileName=` + window.encodeURIComponent(file) + `&lineNumber=` + window.encodeURIComponent(lineNumber));
}

function getCodeFrameInformation(stackTrace) {
  const callSite = stackTrace.find(CallSite => CallSite.getFileName());

  if (!callSite) {
    return null;
  }

  const moduleId = formatFilename(callSite.getFileName());
  const lineNumber = callSite.getLineNumber();
  const columnNumber = callSite.getColumnNumber();
  const functionName = callSite.getFunctionName();
  return {
    moduleId,
    lineNumber,
    columnNumber,
    functionName
  };
}

const lineNumberRegex = /^[0-9]*:[0-9]*$/g;

function getLineNumber(error) {
  const match = error.match(lineNumberRegex);
  return match === null || match === void 0 ? void 0 : match[1];
}

function formatFilename(filename) {
  const htmlMatch = /^https?:\/\/(.*)\/(.*)/.exec(filename);

  if (htmlMatch && htmlMatch[1] && htmlMatch[2]) {
    return htmlMatch[2];
  }

  const sourceMatch = /^webpack-internal:\/\/\/(.*)$/.exec(filename);

  if (sourceMatch && sourceMatch[1]) {
    return sourceMatch[1];
  }

  return filename;
}