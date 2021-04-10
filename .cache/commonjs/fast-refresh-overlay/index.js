"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _errorBoundary = require("./components/error-boundary");

var _portal = require("./components/portal");

var _style = require("./style");

var _buildError = require("./components/build-error");

var _runtimeErrors = require("./components/runtime-errors");

var _graphqlErrors = require("./components/graphql-errors");

const reducer = (state, event) => {
  switch (event.action) {
    case `CLEAR_COMPILE_ERROR`:
      {
        return { ...state,
          buildError: null
        };
      }

    case `CLEAR_RUNTIME_ERRORS`:
      {
        return { ...state,
          errors: []
        };
      }

    case `SHOW_COMPILE_ERROR`:
      {
        return { ...state,
          buildError: event.payload
        };
      }

    case `HANDLE_RUNTIME_ERROR`:
    case `SHOW_RUNTIME_ERRORS`:
      {
        return { ...state,
          errors: state.errors.concat(event.payload)
        };
      }

    case `SHOW_GRAPHQL_ERRORS`:
      {
        return { ...state,
          graphqlErrors: event.payload
        };
      }

    case `CLEAR_GRAPHQL_ERRORS`:
      {
        return { ...state,
          graphqlErrors: []
        };
      }

    case `DISMISS`:
      {
        return { ...state,
          buildError: null,
          errors: [],
          graphqlErrors: []
        };
      }

    default:
      {
        return state;
      }
  }
};

const initialState = {
  errors: [],
  buildError: null,
  graphqlErrors: []
};

function DevOverlay({
  children
}) {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  React.useEffect(() => {
    const gatsbyEvents = window._gatsbyEvents || [];
    window._gatsbyEvents = {
      push: ([channel, event]) => {
        if (channel === `FAST_REFRESH`) {
          dispatch(event);
        }
      }
    };
    gatsbyEvents.forEach(([channel, event]) => {
      if (channel === `FAST_REFRESH`) {
        dispatch(event);
      }
    });
    return () => {
      window._gatsbyEvents = [];
    };
  }, [dispatch]);

  const dismiss = () => {
    dispatch({
      action: `DISMISS`
    });
    window._gatsbyEvents = [];
  };

  const hasBuildError = state.buildError !== null;
  const hasRuntimeErrors = Boolean(state.errors.length);
  const hasGraphqlErrors = Boolean(state.graphqlErrors.length);
  const hasErrors = hasBuildError || hasRuntimeErrors || hasGraphqlErrors; // This component has a deliberate order (priority)

  const ErrorComponent = () => {
    if (hasBuildError) {
      return /*#__PURE__*/React.createElement(_buildError.BuildError, {
        error: state.buildError
      });
    }

    if (hasRuntimeErrors) {
      return /*#__PURE__*/React.createElement(_runtimeErrors.RuntimeErrors, {
        errors: state.errors,
        dismiss: dismiss
      });
    }

    if (hasGraphqlErrors) {
      return /*#__PURE__*/React.createElement(_graphqlErrors.GraphqlErrors, {
        errors: state.graphqlErrors,
        dismiss: dismiss
      });
    }

    return null;
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_errorBoundary.ErrorBoundary, {
    hasErrors: hasErrors
  }, children !== null && children !== void 0 ? children : null), hasErrors ? /*#__PURE__*/React.createElement(_portal.ShadowPortal, null, /*#__PURE__*/React.createElement(_style.Style, null), /*#__PURE__*/React.createElement(ErrorComponent, null)) : undefined);
}

var _default = DevOverlay;
exports.default = _default;