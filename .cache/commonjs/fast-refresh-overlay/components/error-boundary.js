"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports.ErrorBoundary = void 0;

var React = _interopRequireWildcard(require("react"));

class ErrorBoundary extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      error: null
    };
  }

  componentDidCatch(error) {
    this.setState({
      error
    });
  }

  render() {
    // Without this check => possible infinite loop
    return this.state.error && this.props.hasErrors ? null : this.props.children;
  }

}

exports.ErrorBoundary = ErrorBoundary;