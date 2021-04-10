"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports.useStackFrame = useStackFrame;

var React = _interopRequireWildcard(require("react"));

var _utils = require("../utils");

function useStackFrame({
  moduleId,
  lineNumber,
  columnNumber
}) {
  const url = `/__original-stack-frame?moduleId=` + window.encodeURIComponent(moduleId) + `&lineNumber=` + window.encodeURIComponent(lineNumber) + `&columnNumber=` + window.encodeURIComponent(columnNumber);
  const [response, setResponse] = React.useState({
    decoded: null,
    sourcePosition: {
      line: null,
      number: null
    },
    sourceContent: null
  });
  React.useEffect(() => {
    async function fetchData() {
      const res = await fetch(url);
      const json = await res.json();
      const decoded = (0, _utils.prettifyStack)(json.codeFrame);
      const {
        sourcePosition,
        sourceContent
      } = json;
      setResponse({
        decoded,
        sourceContent,
        sourcePosition
      });
    }

    fetchData();
  }, []);
  return response;
}