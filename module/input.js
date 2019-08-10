'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAddonsShallowCompare = require('react-addons-shallow-compare');

var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _filterInputAttributes = require('./filter-input-attributes');

var _filterInputAttributes2 = _interopRequireDefault(_filterInputAttributes);

var _reactMaterialUiFormValidator = require('react-material-ui-form-validator');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // eslint-disable-line no-unused-vars


/**
 * The input field
 * @param {Object} props The component's props
 * @return {JSX} The icon component.
 */
var Input = function (_React$Component) {
  _inherits(Input, _React$Component);

  /**
   * The constructor. Sets the initial state.
   * @param  {Object} props The properties object.
   */
  function Input(props) {
    _classCallCheck(this, Input);

    var _this = _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).call(this, props));

    _this.onChange = _this.onChange.bind(_this);
    _this.onInputKeyDown = _this.onInputKeyDown.bind(_this);
    return _this;
  }

  /**
   * Whether or not the component should update
   * @param {Object} nextProps The new properties
   * @param {Object} nextState The new state
   * @return {Boolean} Update or not?
   */


  _createClass(Input, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return (0, _reactAddonsShallowCompare2.default)(this, nextProps, nextState);
    }

    /**
     * When the input got changed
     */

  }, {
    key: 'onChange',
    value: function onChange(e) {
      this.props.onChange(e.target.value);
    }

    /**
     * When a key gets pressed in the input
     * @param  {Event} event The keydown event
     */

  }, {
    key: 'onInputKeyDown',
    value: function onInputKeyDown(event) {
      // eslint-disable-line complexity
      // Call props.onKeyDown if defined
      // Gives the developer a little bit more control if needed
      if (this.props.onKeyDown) {
        this.props.onKeyDown(event);
      }

      switch (event.which) {
        case 40:
          // DOWN
          if (!event.shiftKey) {
            event.preventDefault();
            this.props.onNext();
          }
          break;
        case 38:
          // UP
          if (!event.shiftKey) {
            event.preventDefault();
            this.props.onPrev();
          }
          break;
        case 13:
          // ENTER
          if (this.props.doNotSubmitOnEnter) {
            event.preventDefault();
          }

          if (!this.props.ignoreEnter) {
            this.props.onSelect();
          }
          break;
        case 9:
          // TAB
          if (!this.props.ignoreTab) {
            this.props.onSelect();
          }
          break;
        case 27:
          // ESC
          this.props.onEscape();
          break;
        /* istanbul ignore next */
        default:
          break;
      }
    }

    /**
     * Focus the input
     */

  }, {
    key: 'focus',
    value: function focus() {
      this.input.focus();
    }

    /**
     * Blur the input
     */

  }, {
    key: 'blur',
    value: function blur() {
      this.input.blur();
    }

    /**
     * Render the view
     * @return {Function} The React element to render
     */

  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var attributes = (0, _filterInputAttributes2.default)(this.props),
          classes = (0, _classnames2.default)('geosuggest__input', this.props.className);

      return _react2.default.createElement(_reactMaterialUiFormValidator.TextValidator, _extends({
        className: classes,
        ref: function ref(i) {
          return _this2.input = i;
        },
        type: 'text'
      }, attributes, {
        label: this.props.label,
        validators: this.props.validators,
        errorMessages: this.props.errorMessages,
        value: this.props.value,
        style: this.props.style,
        onKeyDown: this.onInputKeyDown,
        onChange: this.onChange,
        onKeyPress: this.props.onKeyPress,
        onFocus: this.props.onFocus,
        onBlur: this.props.onBlur
      }));
    }
  }]);

  return Input;
}(_react2.default.Component);

/**
 * Default values for the properties
 * @type {Object}
 */


Input.defaultProps = {
  className: '',
  value: '',
  ignoreTab: false,
  onKeyDown: function onKeyDown() {},
  onKeyPress: function onKeyPress() {},
  autoComplete: 'nope'
};

exports.default = Input;