'use client'
import React, { useMemo, useState, useRef, useEffect, useCallback } from 'react';
import { twMerge } from 'tailwind-merge';
import { HiLightBulb, HiOutlineLightBulb } from 'react-icons/hi';
import Link from 'next/link';
import { BiSearchAlt, BiSolidTagAlt, BiChevronUp, BiChevronDown } from 'react-icons/bi';
import { RiArrowDownSLine } from 'react-icons/ri';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

var LayoutMenuContext = /*#__PURE__*/React.createContext({
  showMenu: false
});

function useTheme() {
  var _React$useContext = React.useContext(LayoutMenuContext),
    scheme = _React$useContext.scheme;
  return scheme;
}

var isComponent = function isComponent(children, elementName) {
  if (children.type.name) {
    return children.type.name == elementName;
  } else {
    return children.type.displayName == elementName;
  }
};
var defineChildrenElement = function defineChildrenElement(children, elementName, defaultElement) {
  var element = defaultElement;
  if (Array.isArray(children)) {
    children.forEach(function (child) {
      if (isComponent(child, "" + elementName)) {
        element = child;
      }
    });
  } else {
    if (isComponent(children, "" + elementName)) {
      element = children;
    }
  }
  return element;
};
var defineAllChildrenElement = function defineAllChildrenElement(children, elementName) {
  var element = [];
  if (Array.isArray(children)) {
    children.forEach(function (child) {
      if (isComponent(child, "" + elementName)) {
        element.push(child);
      }
    });
  } else {
    if (isComponent(children, "" + elementName)) {
      element.push(children);
    }
  }
  return element;
};
var childrenWithout = function childrenWithout(children, elementNames) {
  var restChildren = null;
  var elements = elementNames.map(function (elementName) {
    return "" + elementName;
  });
  if (Array.isArray(children)) {
    restChildren = children.filter(function (child) {
      return !elements.includes(child.type.name || child.type.displayName);
    });
  } else {
    restChildren = children.props.children;
  }
  return restChildren;
};

var _excluded = ["children", "onSubmit", "className", "style", "title"],
  _excluded2 = ["children", "className"];
var PCLayoutForm = function PCLayoutForm(_ref) {
  var children = _ref.children,
    onSubmit = _ref.onSubmit,
    style = _ref.style,
    title = _ref.title,
    props = _objectWithoutPropertiesLoose(_ref, _excluded);
  var scheme = useTheme();
  var actions = useMemo(function () {
    if (!children) {
      return null;
    }
    if (process.env.NODE_ENV == 'development') {
      return defineChildrenElement(children, PCLayoutFormActions.name, null);
    } else {
      return defineChildrenElement(children, Form.Actions.name, null);
    }
  }, [children]);
  var content = useMemo(function () {
    if (!children) {
      return null;
    }
    if (process.env.NODE_ENV == 'development') {
      return defineChildrenElement(children, PCLayoutFormContent.name, null);
    } else {
      return defineChildrenElement(children, Form.Content.name, null);
    }
  }, [children]);
  var handleFormSubmit = function handleFormSubmit(event) {
    event.preventDefault();
    var form = event.currentTarget;
    var data = new FormData(form);
    var entries = data.entries();
    var values = Object.fromEntries(entries);
    onSubmit == null ? void 0 : onSubmit(event, values);
  };
  return React.createElement("form", Object.assign({}, props, {
    className: twMerge("flex flex-col w-full h-full"),
    onSubmit: handleFormSubmit,
    style: _extends({}, style)
  }), React.createElement("div", {
    className: "w-full h-full flex flex-col px-3 pt-2"
  }, React.createElement("div", {
    className: "flex items-center justify-between"
  }, title && React.createElement("h1", {
    className: "text-3xl font-bold mb-2"
  }, title), actions), React.createElement("div", {
    className: "flex flex-col h-[90%] w-full rounded-xl overflow-hidden",
    style: {
      boxShadow: '0 0 10px -3px #0000007b',
      backgroundColor: scheme == null ? void 0 : scheme.backgroundSecondary,
      transition: 'background-color 0.3s ease-in-out'
    }
  }, React.createElement("div", {
    className: "w-ful h-full overflow-auto"
  }, content))));
};
var PCLayoutFormActions = function PCLayoutFormActions(_ref2) {
  var children = _ref2.children;
  return React.createElement("div", {
    className: "flex gap-3 items-center justify-end"
  }, children);
};
var PCLayoutFormContent = function PCLayoutFormContent(_ref3) {
  var children = _ref3.children,
    className = _ref3.className,
    props = _objectWithoutPropertiesLoose(_ref3, _excluded2);
  return React.createElement("div", Object.assign({
    className: twMerge('h-full w-full', className)
  }, props), children);
};
var Form = {
  Root: PCLayoutForm,
  Actions: PCLayoutFormActions,
  Content: PCLayoutFormContent
};

var light = {
  primary: '#d1d6e2',
  secondary: '#636a7e',
  tertiary: '#bfc6d6',
  background: '#f0f3f8',
  backgroundSecondary: '#ffffff',
  buttonPrimary: '#2B2835',
  buttonPrimaryHover: '#4B4759',
  buttonPrimaryText: '#ffffff',
  buttonPrimaryTextHover: '#f5f5f5',
  buttonSecondary: '#d2cfdb',
  buttonSecondaryHover: '#f8f6fd',
  buttonSecondaryText: '#7f7d83',
  buttonSecondaryTextHover: '#17141b',
  textPrimary: '#121419',
  textSecondary: '#161921',
  textPrimaryHover: '#000000',
  textSecondaryHover: '#000000',
  inputPrimaryBackground: '#ffffff',
  inputPrimaryText: '#000000',
  inputPrimaryPlaceholder: '#a9afbe',
  inputPrimaryBorder: '#a9afbe',
  inputSecondaryBackground: '#dee1e9',
  inputSecondaryText: '#000000',
  inputSecondaryPlaceholder: '#a9afbe',
  inputSecondaryBorder: '#a9afbe',
  success: '#97c597',
  error: '#e57878',
  warning: '#dfdf3a',
  info: '#7c7cfd'
};
var dark = {
  primary: '#424650',
  secondary: '#242831',
  tertiary: '#5c606a',
  background: '#485165',
  backgroundSecondary: '#494f5b',
  buttonPrimary: '#d4d2de',
  buttonPrimaryHover: '#ada8bd',
  buttonPrimaryText: '#3b3b3b',
  buttonPrimaryTextHover: '#3c3c3c',
  buttonSecondary: '#2b2835',
  buttonSecondaryHover: '#4b4759',
  buttonSecondaryText: '#c0c0cb',
  buttonSecondaryTextHover: '#ffffff',
  textPrimary: '#dadada',
  textSecondary: '#a9afbe',
  textPrimaryHover: '#ffffff',
  textSecondaryHover: '#ffffff',
  inputPrimaryBackground: '#545965',
  inputPrimaryText: '#ffffff',
  inputPrimaryPlaceholder: '#a9afbe',
  inputPrimaryBorder: '#a9afbe',
  inputSecondaryBackground: '#636a7e',
  inputSecondaryText: '#ffffff',
  inputSecondaryPlaceholder: '#a9afbe',
  inputSecondaryBorder: '#a9afbe',
  success: '#98e298',
  error: '#ff6565',
  warning: '#ffff4c',
  info: '#9b9bff'
};

var Switcher = function Switcher(_ref) {
  var value = _ref.value,
    onChange = _ref.onChange;
  var handleCheckboxChange = function handleCheckboxChange() {
    onChange(!value);
  };
  return React.createElement(React.Fragment, null, React.createElement("label", {
    className: "flex cursor-pointer select-none items-center"
  }, React.createElement("div", {
    className: "relative"
  }, React.createElement("input", {
    type: "checkbox",
    checked: value,
    onChange: handleCheckboxChange,
    className: "sr-only"
  }), React.createElement("div", {
    className: "box block h-8 w-14 rounded-full " + (value ? 'bg-slate-400' : 'bg-slate-300')
  }), React.createElement("div", {
    className: "absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white transition text-slate-900 " + (value ? 'translate-x-full' : '')
  }, value ? React.createElement(HiLightBulb, {
    size: 20
  }) : React.createElement(HiOutlineLightBulb, {
    size: 20
  })))));
};

var PCLayoutContent = function PCLayoutContent(_ref) {
  var children = _ref.children;
  var scheme = useTheme();
  var rootClass = useMemo(function () {
    var rclass = 'flex-1 max-w-full max-h-full overflow-auto';
    return twMerge(rclass);
  }, [scheme]);
  return React.createElement("div", {
    className: rootClass,
    style: {
      backgroundColor: scheme == null ? void 0 : scheme.background,
      color: scheme == null ? void 0 : scheme.textPrimary,
      transition: 'background-color 0.3s ease-in-out, color 0.3s ease-in-out'
    }
  }, children);
};

function PCLayoutHeaderActions(_ref) {
  var children = _ref.children;
  return React.createElement("div", {
    className: "flex gap-3"
  }, children);
}

var returnInitials = function returnInitials(name) {
  var names = name.split(' ');
  var firstName = names[0];
  var lastName = names[names.length - 1];
  return "" + firstName[0].toUpperCase() + (lastName != null && lastName.length ? lastName[0].toUpperCase() : '');
};
var capitalizeName = function capitalizeName(name) {
  var names = name.split(' ');
  var fullName = '';
  names.forEach(function (n) {
    fullName += "" + n[0].toUpperCase() + n.slice(1).toLowerCase() + " ";
  });
  return fullName.trim();
};

var NavigationButton = function NavigationButton(_ref) {
  var children = _ref.children,
    href = _ref.href,
    onClick = _ref.onClick,
    className = _ref.className,
    style = _ref.style,
    fill = _ref.fill;
  var scheme = useTheme();
  var _useState = useState(false),
    hover = _useState[0],
    setHover = _useState[1];
  var handleMouseEnter = function handleMouseEnter() {
    setHover(true);
  };
  var handleMouseLeave = function handleMouseLeave() {
    setHover(false);
  };
  if (!href) {
    return React.createElement("button", {
      type: "button",
      className: twMerge("flex items-center h-8 text-left w-full px-4 hover hover:text-white hover:bg-slate-900", className),
      style: _extends({
        transition: 'background-color 0.3s ease-in-out, color 0.3s ease-in-out',
        backgroundColor: fill ? hover ? scheme == null ? void 0 : scheme.buttonPrimaryHover : scheme == null ? void 0 : scheme.buttonPrimary : 'inherit',
        color: fill ? hover ? scheme == null ? void 0 : scheme.buttonPrimaryTextHover : scheme == null ? void 0 : scheme.buttonPrimaryText : 'inherit'
      }, style),
      onClick: onClick,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave
    }, children);
  } else {
    return React.createElement(Link, {
      href: href != null ? href : '#',
      className: twMerge("flex items-center h-8 text-left w-full px-4 hover:text-white hover:bg-slate-900", className),
      style: _extends({
        transition: 'background-color 0.3s ease-in-out'
      }, style)
    }, children);
  }
};

var _excluded$1 = ["label", "error", "containerClassName", "customInput"];
var Input = function Input(_ref) {
  var label = _ref.label,
    error = _ref.error,
    containerClassName = _ref.containerClassName,
    customInput = _ref.customInput,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$1);
  var scheme = useTheme();
  return React.createElement("div", {
    className: twMerge('w-full', containerClassName)
  }, label && React.createElement("label", {
    className: "block uppercase tracking-wide text-xs font-bold",
    style: {
      color: !error ? scheme == null ? void 0 : scheme.textPrimary : scheme == null ? void 0 : scheme.error,
      transition: 'color 0.3s ease-in-out'
    },
    htmlFor: props.name
  }, label), customInput && customInput(_extends({
    label: label,
    error: error
  }, props, {
    className: twMerge('appearance-none block w-full border rounded h-10 px-1 leading-tight focus:outline-none', "placeholder:" + (scheme == null ? void 0 : scheme.inputPrimaryPlaceholder), props.className),
    style: _extends({
      transition: 'all 0.3s ease-in-out',
      backgroundColor: scheme == null ? void 0 : scheme.inputPrimaryBackground,
      color: scheme == null ? void 0 : scheme.inputPrimaryText,
      border: "1px solid " + (scheme == null ? void 0 : scheme.inputPrimaryBorder)
    }, props.style)
  })), !customInput && React.createElement(React.Fragment, null, React.createElement("div", {
    className: twMerge('w-full h-10 border rounded-md leading-tight flex-row flex items-center gap-1 overflow-hidden', props.className),
    style: _extends({
      transition: 'all 0.3s ease-in-out',
      backgroundColor: scheme == null ? void 0 : scheme.inputPrimaryBackground,
      color: scheme == null ? void 0 : scheme.inputPrimaryText,
      border: !error ? "1px solid " + (scheme == null ? void 0 : scheme.inputPrimaryBorder) : "1px solid " + (scheme == null ? void 0 : scheme.error)
    }, props.style)
  }, props.prefixElement && props.prefixElement(), React.createElement("input", Object.assign({}, props, {
    name: props.name,
    id: props.name,
    className: twMerge('appearance-none block w-full px-1 h-full focus:outline-none h-full leading-tight', "placeholder:" + (scheme == null ? void 0 : scheme.inputPrimaryPlaceholder)),
    style: {
      minWidth: '95%'
    }
  })), props.suffixElement && props.suffixElement()), error && React.createElement("p", {
    className: "text-xs italic",
    style: {
      color: scheme == null ? void 0 : scheme.error,
      transition: 'color 0.3s ease-in-out'
    }
  }, error)));
};

var FormContext = /*#__PURE__*/React.createContext({
  formRef: {
    current: null
  }
});

var CustomSelect = function CustomSelect(_ref) {
  var _refSelect$current7;
  var name = _ref.name,
    options = _ref.options,
    placeholder = _ref.placeholder,
    value = _ref.value,
    multiple = _ref.multiple,
    className = _ref.className,
    style = _ref.style,
    label = _ref.label,
    error = _ref.error,
    onChange = _ref.onChange;
  var scheme = useTheme();
  var _React$useContext = React.useContext(FormContext),
    formRef = _React$useContext.formRef;
  var _useState = useState([]),
    selectedValues = _useState[0],
    setSelectedValues = _useState[1];
  var _useState2 = useState(''),
    search = _useState2[0],
    setSearch = _useState2[1];
  var refSelect = useRef(null);
  var refOptions = useRef(null);
  var handleOpenOptions = function handleOpenOptions() {
    if (refOptions.current) {
      var _refSelect$current, _refSelect$current2, _refSelect$current3;
      refOptions.current.classList.toggle('hidden');
      refOptions.current.style.top = (((_refSelect$current = refSelect.current) == null ? void 0 : _refSelect$current.offsetTop) || 0) + (((_refSelect$current2 = refSelect.current) == null ? void 0 : _refSelect$current2.offsetHeight) || 0) + 4 + "px";
      refOptions.current.style.left = (((_refSelect$current3 = refSelect.current) == null ? void 0 : _refSelect$current3.offsetLeft) || 0) + "px";
      if (refOptions.current.offsetLeft + refOptions.current.offsetWidth > window.innerWidth) {
        var _refSelect$current4, _refSelect$current5;
        refOptions.current.style.left = (((_refSelect$current4 = refSelect.current) == null ? void 0 : _refSelect$current4.offsetLeft) || 0) - (refOptions.current.offsetWidth - (((_refSelect$current5 = refSelect.current) == null ? void 0 : _refSelect$current5.offsetWidth) || 0)) + "px";
      }
      if (refOptions.current.offsetTop + refOptions.current.offsetHeight + 40 > window.innerHeight) {
        var _refSelect$current6;
        refOptions.current.style.top = (((_refSelect$current6 = refSelect.current) == null ? void 0 : _refSelect$current6.offsetTop) || 0) - refOptions.current.offsetHeight - 4 + "px";
      }
    }
  };
  var handleClickOutside = function handleClickOutside(e) {
    if (refOptions.current && !refOptions.current.contains(e.target) && refSelect.current && !refSelect.current.contains(e.target)) {
      refOptions.current.classList.add('hidden');
    }
  };
  var resetForm = function resetForm() {
    console.log('reset');
    setSelectedValues([]);
    onChange && onChange(undefined);
  };
  useEffect(function () {
    if (formRef) {
      var _formRef$current;
      (_formRef$current = formRef.current) == null ? void 0 : _formRef$current.addEventListener('reset', resetForm);
    }
    return function () {
      var _formRef$current2;
      (_formRef$current2 = formRef.current) == null ? void 0 : _formRef$current2.removeEventListener('reset', resetForm);
    };
  }, [formRef]);
  useEffect(function () {
    window.addEventListener('click', handleClickOutside);
    return function () {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);
  useEffect(function () {
    if (value) {
      if (typeof value === 'string') {
        setSelectedValues([value.split(',')]);
      } else {
        setSelectedValues(value);
      }
    } else {
      setSelectedValues([]);
    }
  }, [value]);
  var valueText = useMemo(function () {
    if (selectedValues.length > 0 && selectedValues.length < 2) {
      var _options$find;
      return (_options$find = options.find(function (option) {
        return option.value === selectedValues[0];
      })) == null ? void 0 : _options$find.label;
    } else if (selectedValues.length > 1) {
      return selectedValues.length + " selecionados";
    } else {
      return placeholder || 'Selecione';
    }
  }, [selectedValues]);
  return React.createElement("div", {
    className: "w-full"
  }, multiple ? selectedValues.map(function (item) {
    return React.createElement("input", {
      type: "hidden",
      name: name,
      value: item,
      key: item
    });
  }) : React.createElement("input", {
    type: "hidden",
    name: name,
    value: selectedValues.length > 0 ? selectedValues[0] : ''
  }), label && React.createElement("label", {
    className: "block uppercase tracking-wide text-xs font-bold",
    style: {
      color: !error ? scheme == null ? void 0 : scheme.textPrimary : scheme == null ? void 0 : scheme.error,
      transition: 'color 0.3s ease-in-out'
    }
  }, label), React.createElement("div", {
    ref: refSelect,
    onClick: handleOpenOptions,
    className: twMerge('w-full h-10 border rounded-md leading-tight flex-row flex items-center gap-1 overflow-hidden pl-2 cursor-pointer', className),
    style: _extends({
      transition: 'all 0.3s ease-in-out',
      backgroundColor: scheme == null ? void 0 : scheme.inputPrimaryBackground,
      color: scheme == null ? void 0 : scheme.inputPrimaryText,
      border: !error ? "1px solid " + (scheme == null ? void 0 : scheme.inputPrimaryBorder) : "1px solid " + (scheme == null ? void 0 : scheme.error)
    }, style)
  }, React.createElement("input", {
    type: "text",
    value: valueText,
    className: "w-full outline-none",
    readOnly: true
  }), React.createElement(RiArrowDownSLine, {
    size: 24
  })), error && React.createElement("p", {
    className: "text-xs italic",
    style: {
      color: scheme == null ? void 0 : scheme.error,
      transition: 'color 0.3s ease-in-out'
    }
  }, error), React.createElement("div", {
    ref: refOptions,
    className: "z-50 absolute overflow-hidden bg-white rounded-lg hidden border border-slate-400",
    style: {
      width: (_refSelect$current7 = refSelect.current) == null ? void 0 : _refSelect$current7.offsetWidth,
      boxShadow: '0px 0px 5px rgba(0,0,0,0.4)'
    }
  }, React.createElement("div", {
    className: "w-full flex items-center border-b border-slate-400"
  }, React.createElement(BiSearchAlt, {
    className: "ml-1"
  }), React.createElement("input", {
    type: "text",
    className: "w-full outline-none  py-1 px-1",
    placeholder: "Pesquisar",
    value: search,
    onChange: function onChange(e) {
      return setSearch(e.target.value);
    }
  })), React.createElement("ul", {
    className: "flex flex-col gap-1 max-h-[200px] overflow-y-scroll"
  }, options.filter(function (option) {
    return option.label.toLowerCase().includes(search.toLowerCase());
  }).map(function (option) {
    return React.createElement("li", {
      key: option.value
    }, React.createElement("button", {
      type: "button",
      className: "w-full text-left p-2 overflow-hidden text-ellipsis whitespace-nowrap " + (!multiple && selectedValues.includes(option.value) && 'bg-slate-500 text-white'),
      onClick: function onClick() {
        if (selectedValues.includes(option.value)) {
          if (!multiple) {
            var _refOptions$current;
            setSelectedValues([]);
            onChange && onChange([]);
            (_refOptions$current = refOptions.current) == null ? void 0 : _refOptions$current.classList.toggle('hidden');
          } else {
            setSelectedValues(selectedValues.filter(function (item) {
              return item !== option.value;
            }));
            onChange && onChange(selectedValues.filter(function (item) {
              return item !== option.value;
            }));
          }
        } else {
          if (!multiple) {
            var _refOptions$current2;
            setSelectedValues([option.value]);
            onChange && onChange([option.value]);
            (_refOptions$current2 = refOptions.current) == null ? void 0 : _refOptions$current2.classList.toggle('hidden');
          } else {
            setSelectedValues([].concat(selectedValues, [option.value]));
            onChange && onChange([].concat(selectedValues, [option.value]));
          }
        }
      }
    }, multiple && React.createElement("input", {
      type: "checkbox",
      value: option.value,
      checked: selectedValues.includes(option.value),
      onChange: function onChange() {},
      className: "mr-2"
    }), option.label));
  })), React.createElement("button", {
    type: "button",
    onClick: function onClick() {
      setSelectedValues([]);
      onChange && onChange(undefined);
    },
    className: "w-full bg-slate-300 font-bold border-t border-slate-400"
  }, "Limpar")));
};

var _excluded$2 = ["children", "onClick", "className", "style"];
var Button = function Button(_ref) {
  var children = _ref.children,
    onClick = _ref.onClick,
    className = _ref.className,
    style = _ref.style,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$2);
  var scheme = useTheme();
  var _useState = useState(false),
    hover = _useState[0],
    setHover = _useState[1];
  var handleMouseEnter = function handleMouseEnter() {
    setHover(true);
  };
  var handleMouseLeave = function handleMouseLeave() {
    setHover(false);
  };
  return React.createElement("button", Object.assign({
    type: "button",
    className: twMerge("flex items-center h-8 text-left w-full px-4 rounded", className),
    style: _extends({
      transition: 'background-color 0.3s ease-in-out',
      backgroundColor: hover ? scheme == null ? void 0 : scheme.buttonPrimaryHover : scheme == null ? void 0 : scheme.buttonPrimary,
      color: hover ? scheme == null ? void 0 : scheme.buttonPrimaryTextHover : scheme == null ? void 0 : scheme.buttonPrimaryText
    }, style),
    onClick: onClick,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave
  }, props), children);
};

var _excluded$3 = ["children", "onClick", "className", "style", "href", "target", "download"];
var LinkButton = function LinkButton(_ref) {
  var children = _ref.children,
    onClick = _ref.onClick,
    href = _ref.href,
    target = _ref.target,
    download = _ref.download,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$3);
  if (href) {
    return React.createElement("a", {
      className: "px-3 py-1 bg-slate-700 text-slate-100 rounded-lg mr-2",
      href: href,
      target: target,
      download: download
    }, children);
  }
  return React.createElement("button", Object.assign({
    type: "button",
    className: "px-3 py-1 bg-slate-700 text-slate-100 rounded-lg mr-2",
    onClick: onClick
  }, props), children);
};

function PCLayoutHeaderMenu(_ref) {
  var userName = _ref.userName,
    customAvatar = _ref.customAvatar,
    userImage = _ref.userImage,
    children = _ref.children;
  var scheme = useTheme();
  var _useState = useState(false),
    showProfileMenu = _useState[0],
    setShowProfileMenu = _useState[1];
  var headerMenuItem = useMemo(function () {
    if (process.env.NODE_ENV == 'development') {
      return defineAllChildrenElement(children, PCLayoutHeaderMenuItem.name);
    } else {
      return defineAllChildrenElement(children, Layout.HeaderMenuItem.name);
    }
  }, [children]);
  if (customAvatar) {
    return React.createElement(React.Fragment, null, customAvatar({
      userName: userName,
      userImage: userImage
    }));
  }
  return React.createElement("div", {
    className: "relative"
  }, React.createElement("button", {
    className: "w-10 h-10 rounded-full font-bold",
    style: {
      backgroundColor: scheme == null ? void 0 : scheme.buttonPrimary,
      color: scheme == null ? void 0 : scheme.buttonPrimaryText,
      transition: 'background-color 0.3s ease-in-out, color 0.3s ease-in-out'
    },
    onClick: function onClick() {
      return setShowProfileMenu(!showProfileMenu);
    }
  }, userImage ? React.createElement("img", {
    src: userImage,
    alt: userName,
    className: "w-full h-full rounded-full"
  }) : userName ? React.createElement("span", {
    className: "w-full h-full flex items-center justify-center"
  }, returnInitials(userName)) : null), React.createElement("div", {
    className: "absolute shadow-2xl overflow-hidden rounded-lg z-10",
    style: {
      top: 'calc(100% + 20px)',
      right: '0',
      maxHeight: showProfileMenu ? 'calc(2rem * 3 + 8px)' : '0',
      transition: 'max-height 0.3s ease-in-out, background-color 0.3s ease-in-out, color 0.3s ease-in-out',
      color: scheme == null ? void 0 : scheme.textPrimary,
      backgroundColor: scheme == null ? void 0 : scheme.primary
    }
  }, headerMenuItem && React.createElement("div", {
    className: "px-3 py-2"
  }, React.createElement("span", {
    className: "whitespace-nowrap font-bold h-8"
  }, userName && capitalizeName(userName)), React.createElement("div", {
    className: "flex flex-col w-full"
  }, headerMenuItem))));
}
function PCLayoutHeaderMenuItem(_ref2) {
  var children = _ref2.children,
    href = _ref2.href,
    onClick = _ref2.onClick;
  return React.createElement(NavigationButton, {
    href: href,
    onClick: onClick,
    className: "w-full text-left h-8 flex items-center hover:bg-transparent hover:text-inherit p-0"
  }, children);
}

var PCLayoutLogo = function PCLayoutLogo(_ref) {
  var src = _ref.src,
    element = _ref.element;
  if (src) {
    return React.createElement("img", {
      src: src,
      alt: "Logo",
      className: "h-full"
    });
  }
  if (element) {
    return React.createElement(React.Fragment, null, element());
  }
  return null;
};

var PCLayoutMenuItem = function PCLayoutMenuItem(_ref) {
  var children = _ref.children,
    href = _ref.href,
    collapseItens = _ref.collapseItens,
    icon = _ref.icon;
  var _React$useContext = React.useContext(LayoutMenuContext),
    showMenu = _React$useContext.showMenu,
    scheme = _React$useContext.scheme;
  var _useState = useState(false),
    active = _useState[0],
    setActive = _useState[1];
  var _useState2 = useState(false),
    showSubMenu = _useState2[0],
    setShowSubMenu = _useState2[1];
  var ref = useRef(null);
  useEffect(function () {
    if (window && typeof window !== 'undefined') {
      var path = window.location.pathname;
      if (collapseItens && collapseItens.length > 0) {
        collapseItens.forEach(function (item) {
          if (item.href && path.includes(item.href)) {
            setActive(true);
          }
        });
      } else if (href && path.includes(href)) {
        setActive(true);
      }
    }
  }, []);
  var handleClickOutside = function handleClickOutside(e) {
    if (ref.current && !ref.current.contains(e.target) && !showMenu) {
      console.log('click', showMenu);
      setShowSubMenu(false);
    }
  };
  useEffect(function () {
    window.addEventListener('click', handleClickOutside);
    return function () {
      window.removeEventListener('click', handleClickOutside);
    };
  }, [showMenu]);
  useEffect(function () {
    if (!showMenu) {
      setShowSubMenu(false);
    }
  }, [showMenu]);
  var Icon = useMemo(function () {
    return icon != null ? icon : BiSolidTagAlt;
  }, [icon]);
  return React.createElement("div", {
    ref: ref,
    className: "flex flex-col relative z-30",
    style: {
      color: active ? scheme == null ? void 0 : scheme.buttonSecondaryTextHover : scheme == null ? void 0 : scheme.buttonSecondaryText,
      transition: 'color 0.3s ease-in-out'
    }
  }, React.createElement(NavigationButton, {
    href: href,
    onClick: function onClick() {
      if (collapseItens) setShowSubMenu(!showSubMenu);
    }
  }, React.createElement("div", {
    className: "w-[20px] h-[20px]"
  }, React.createElement(Icon, {
    size: 20
  })), React.createElement("span", {
    className: "pl-2 whitespace-nowrap",
    style: {
      opacity: showMenu ? 1 : 0,
      transition: 'opacity 0.3s ease-in-out'
    }
  }, children), collapseItens && React.createElement("div", {
    className: "w-[14px] h-[14px] ml-2"
  }, showSubMenu ? React.createElement(BiChevronUp, {
    size: 14
  }) : React.createElement(BiChevronDown, {
    size: 14
  }))), React.createElement("div", {
    className: "mx-4 rounded-md overflow-hidden z-30",
    style: {
      transition: showMenu ? 'all 0.3s ease-in-out' : 'all 0s ease-in-out',
      marginBlock: showSubMenu ? '0.2rem' : '0',
      maxHeight: showSubMenu ? "calc(2rem * " + (collapseItens == null ? void 0 : collapseItens.length) + " + 1rem)" : '0',
      position: !showMenu ? 'fixed' : 'relative',
      left: !showMenu ? "calc(2rem * 1.2)" : '0',
      backgroundColor: scheme == null ? void 0 : scheme.secondary
    }
  }, React.createElement("div", {
    className: "p-1 flex flex-col"
  }, collapseItens == null ? void 0 : collapseItens.map(function (item, index) {
    return React.createElement(PCLayoutMenuCollapseItem, {
      showSubMenu: showSubMenu,
      key: index,
      href: item.href,
      label: item.label
    });
  }))));
};
function PCLayoutMenuCollapseItem(_ref2) {
  var showSubMenu = _ref2.showSubMenu,
    href = _ref2.href,
    label = _ref2.label;
  var _React$useContext2 = React.useContext(LayoutMenuContext),
    showMenu = _React$useContext2.showMenu;
  return React.createElement(Link, {
    href: href != null ? href : '#',
    className: "flex items-center h-8 text-center w-full",
    style: {
      transition: 'background-color 0.3s ease-in-out',
      justifyContent: !showMenu ? 'center' : 'flex-start',
      paddingInline: !showMenu ? '0.8rem' : '0'
    }
  }, React.createElement("span", {
    className: "text-white hover:text-slate-200 ",
    style: {
      opacity: !showMenu && !showSubMenu ? 0 : 1,
      transition: 'all 0.3s ease-in-out'
    }
  }, label));
}

var PCLayoutMenuEndItem = function PCLayoutMenuEndItem(_ref) {
  var children = _ref.children,
    href = _ref.href,
    icon = _ref.icon,
    _onClick = _ref.onClick;
  var _React$useContext = React.useContext(LayoutMenuContext),
    showMenu = _React$useContext.showMenu,
    scheme = _React$useContext.scheme;
  var _useState = useState(false),
    active = _useState[0],
    setActive = _useState[1];
  useEffect(function () {
    if (window && typeof window !== 'undefined') {
      var path = window.location.pathname;
      if (href && path.includes(href)) {
        setActive(true);
      }
    }
  }, []);
  var Icon = useMemo(function () {
    return icon != null ? icon : BiSolidTagAlt;
  }, [icon]);
  return React.createElement("div", {
    className: "flex flex-col relative z-30",
    style: {
      color: active ? scheme == null ? void 0 : scheme.buttonSecondaryTextHover : scheme == null ? void 0 : scheme.buttonSecondaryText,
      transition: 'color 0.3s ease-in-out'
    }
  }, React.createElement(NavigationButton, {
    href: href,
    onClick: function onClick() {
      if (_onClick) _onClick();
    }
  }, React.createElement("div", {
    className: "w-[20px] h-[20px]"
  }, React.createElement(Icon, {
    size: 20
  })), React.createElement("span", {
    className: "pl-2",
    style: {
      opacity: showMenu ? 1 : 0,
      transition: 'opacity 0.3s ease-in-out'
    }
  }, children)));
};

var PCLayoutMenu = function PCLayoutMenu(_ref) {
  var children = _ref.children,
    style = _ref.style,
    className = _ref.className;
  var _React$useContext = React.useContext(LayoutMenuContext),
    showMenu = _React$useContext.showMenu,
    scheme = _React$useContext.scheme,
    setShowMenu = _React$useContext.setShowMenu;
  var menuItems = useMemo(function () {
    if (process.env.NODE_ENV == 'development') {
      return defineAllChildrenElement(children, PCLayoutMenuItem.name);
    } else {
      return defineAllChildrenElement(children, Layout.MenuItem.name);
    }
  }, [children]);
  var endItens = useMemo(function () {
    if (process.env.NODE_ENV == 'development') {
      return defineAllChildrenElement(children, PCLayoutMenuEndItem.name);
    } else {
      return defineAllChildrenElement(children, Layout.MenuEndItem.name);
    }
  }, [children]);
  // return <div className="flex flex-col gap-1 w-full z-30">{menuItems}</div>;
  return React.createElement("div", {
    className: twMerge("flex flex-col overflow-hidden z-30", className),
    style: _extends({
      maxWidth: showMenu ? '50vw ' : '3rem',
      transition: 'max-width 0.3s ease-in-out, background-color 0.3s ease-in-out',
      boxShadow: '-2px 0 10px rgba(0,0,0,0.5)',
      backgroundColor: scheme == null ? void 0 : scheme.primary
    }, style)
  }, React.createElement("button", {
    type: "button",
    className: "self-end mr-3 mt-1 mb-4",
    style: {
      color: scheme == null ? void 0 : scheme.buttonPrimary,
      transition: 'color 0.3s ease-in-out'
    },
    onClick: function onClick() {
      return setShowMenu == null ? void 0 : setShowMenu(!showMenu);
    }
  }, showMenu ? React.createElement(MdClose, {
    size: 20
  }) : React.createElement(GiHamburgerMenu, {
    size: 20
  })), React.createElement("div", {
    className: "w-full h-full z-30 flex flex-col"
  }, React.createElement("div", {
    className: "flex flex-col gap-1 flex-1"
  }, menuItems), endItens.length > 0 && React.createElement("div", {
    className: "pt-3 border-t flex flex-col gap-1 mb-3 ",
    style: {
      borderColor: scheme == null ? void 0 : scheme.secondary
    }
  }, endItens)));
};

var PCLayout = function PCLayout(_ref) {
  var children = _ref.children,
    themeSwitcher = _ref.themeSwitcher,
    colorSchemeDark = _ref.colorSchemeDark,
    colorSchemeDefault = _ref.colorSchemeDefault;
  var _useState = useState(false),
    showMenu = _useState[0],
    setShowMenu = _useState[1];
  var _useState2 = useState(false),
    isDark = _useState2[0],
    setIsDark = _useState2[1];
  var logo = useMemo(function () {
    var defaultLogo = React.createElement("h1", {
      className: "text-2xl"
    }, "LOGO");
    if (process.env.NODE_ENV == 'development') {
      return defineChildrenElement(children, PCLayoutLogo.name, defaultLogo);
    } else {
      return defineChildrenElement(children, Layout.Logo.name, defaultLogo);
    }
  }, [children]);
  var menu = useMemo(function () {
    if (process.env.NODE_ENV == 'development') {
      return defineChildrenElement(children, PCLayoutMenu.name, null);
    } else {
      return defineChildrenElement(children, Layout.Menu.name, null);
    }
  }, [children]);
  var headerMenu = useMemo(function () {
    if (process.env.NODE_ENV == 'development') {
      return defineChildrenElement(children, PCLayoutHeaderMenu.name, null);
    } else {
      return defineChildrenElement(children, Layout.HeaderMenu.name, null);
    }
  }, [children]);
  var content = useMemo(function () {
    if (process.env.NODE_ENV == 'development') {
      return defineChildrenElement(children, PCLayoutContent.name, null);
    } else {
      return defineChildrenElement(children, Layout.Content.name, null);
    }
  }, [children]);
  var headerActions = useMemo(function () {
    if (process.env.NODE_ENV == 'development') {
      return defineChildrenElement(children, PCLayoutHeaderActions.name, null);
    } else {
      return defineChildrenElement(children, Layout.HeaderActions.name, null);
    }
  }, [children]);
  var scheme = useMemo(function () {
    if (isDark) {
      return _extends({}, dark, colorSchemeDark);
    }
    return _extends({}, light, colorSchemeDefault);
  }, [isDark, colorSchemeDark, colorSchemeDefault]);
  var handleSwitcherChange = useCallback(function (value) {
    setIsDark(value);
    localStorage.setItem('dark-mode', JSON.stringify(value));
  }, [isDark]);
  useEffect(function () {
    var dark = localStorage.getItem('dark-mode');
    if (dark) {
      setIsDark(JSON.parse(dark));
    }
  }, []);
  return React.createElement(LayoutMenuContext.Provider, {
    value: {
      showMenu: showMenu,
      setShowMenu: setShowMenu,
      scheme: scheme
    }
  }, React.createElement("div", {
    className: "w-screen, h-screen flex flex-col",
    style: {
      color: scheme == null ? void 0 : scheme.textPrimary,
      backgroundColor: scheme == null ? void 0 : scheme.background,
      transition: 'color 0.3s ease-in-out'
    }
  }, React.createElement("div", {
    className: "w-full h-16 flex items-center justify-between px-4 z-40",
    style: {
      backgroundColor: scheme == null ? void 0 : scheme.secondary,
      transition: 'background-color 0.3s ease-in-out'
    }
  }, React.createElement("div", {
    className: "h-full py-2"
  }, logo), React.createElement("div", {
    className: "flex items-center gap-4"
  }, themeSwitcher && React.createElement(Switcher, {
    value: isDark,
    onChange: handleSwitcherChange
  }), headerActions, headerMenu)), React.createElement("div", {
    className: "flex-1 flex relative",
    style: {
      maxHeight: 'calc(100vh - 4rem)'
    }
  }, menu, content)));
};
var Layout = {
  Root: PCLayout,
  Logo: PCLayoutLogo,
  Menu: PCLayoutMenu,
  MenuItem: PCLayoutMenuItem,
  MenuEndItem: PCLayoutMenuEndItem,
  HeaderMenu: PCLayoutHeaderMenu,
  HeaderMenuItem: PCLayoutHeaderMenuItem,
  Content: PCLayoutContent,
  HeaderActions: PCLayoutHeaderActions
};

var PCLayoutFilters = function PCLayoutFilters(_ref) {
  var onSubmit = _ref.onSubmit,
    onClear = _ref.onClear,
    children = _ref.children,
    actions = _ref.actions;
  var scheme = useTheme();
  var _useState = useState(false),
    openFilter = _useState[0],
    setOpenFilter = _useState[1];
  var form = useRef(null);
  var button = useRef(null);
  var handleFormSubmit = function handleFormSubmit(event) {
    event.preventDefault();
    var form = event.currentTarget;
    var data = new FormData(form);
    var entries = data.entries();
    var values = Object.fromEntries(entries);
    onSubmit == null ? void 0 : onSubmit(values);
  };
  var clickOut = function clickOut(event) {
    if (button.current && button.current.contains(event.target)) {
      return;
    }
    if (form.current && !form.current.contains(event.target)) {
      setOpenFilter(false);
    }
  };
  useEffect(function () {
    if (window) {
      window.addEventListener('click', clickOut);
    }
    return function () {
      if (window) {
        window.removeEventListener('click', clickOut);
      }
    };
  }, []);
  return React.createElement(FormContext.Provider, {
    value: {
      formRef: form
    }
  }, React.createElement("div", {
    className: "h-12 w-full flex items-center relative z-20"
  }, React.createElement("button", {
    type: "button",
    className: "px-3 py-1 rounded-lg text-sm font-bold",
    style: {
      backgroundColor: scheme == null ? void 0 : scheme.buttonPrimary,
      color: scheme == null ? void 0 : scheme.buttonPrimaryText,
      transition: 'background-color 0.3s ease-in-out, color 0.3s ease-in-out'
    },
    onClick: function onClick() {
      return setOpenFilter(!openFilter);
    },
    ref: button
  }, "Filtros"), React.createElement("div", {
    className: "absolute top-12 max-w-full rounded-b-lg rounded-se-lg  " + (openFilter ? 'max-h-screen' : 'max-h-0 overflow-auto'),
    style: {
      minWidth: '60%',
      transition: 'max-height 0.1s ease-in-out, background-color 0.3s ease-in-out, color 0.3s ease-in-out, overflow 0.3s ease-in-out',
      backgroundColor: scheme == null ? void 0 : scheme.backgroundSecondary
    }
  }, React.createElement("form", {
    className: "flex flex-col p-3 border border-slate-700 rounded-lg",
    onSubmit: handleFormSubmit,
    ref: form
  }, children, React.createElement("div", {
    className: "flex justify-end"
  }, actions && actions(), React.createElement("button", {
    type: "reset",
    className: "px-3 py-1 bg-slate-700 text-slate-100 rounded-lg mr-2",
    onClick: function onClick() {
      var _form$current;
      (_form$current = form.current) == null ? void 0 : _form$current.reset();
      onClear == null ? void 0 : onClear();
    }
  }, "Limpar filtros"), React.createElement("button", {
    type: "submit",
    className: "px-3 py-1 bg-slate-700 text-slate-100 rounded-lg"
  }, "Filtrar"))))));
};

var PCLayoutPagination = function PCLayoutPagination(_ref) {
  var currentPage = _ref.currentPage,
    totalPages = _ref.totalPages,
    perPage = _ref.perPage,
    onChangePerPage = _ref.onChangePerPage,
    onChangePage = _ref.onChangePage;
  var scheme = useTheme();
  var pages = useMemo(function () {
    var pages = [];
    var previousPage = currentPage - 1;
    var nextPage = currentPage + 1;
    if (previousPage >= 1) {
      pages.push(previousPage);
    }
    pages.push(currentPage);
    if (nextPage <= totalPages) {
      pages.push(nextPage);
      if (pages.length == 2 && nextPage + 1 <= totalPages) {
        pages.push(nextPage + 1);
      }
    }
    if (currentPage >= 3) {
      pages.unshift(1);
    }
    if (pages[pages.length - 1] < totalPages) {
      pages.push(totalPages);
    }
    // add dots if necessary after first page and before last page
    if (pages.length >= 2) {
      if (pages[1] > 2) {
        pages.splice(1, 0, '...');
      }
      if (pages[pages.length - 2] < totalPages - 1) {
        pages.splice(pages.length - 1, 0, '...');
      }
    }
    return pages;
  }, [totalPages, currentPage]);
  var handlePageClick = function handlePageClick(page) {
    if (page === currentPage) {
      return;
    }
    if (page < 1) {
      return;
    }
    if (page > totalPages) {
      return;
    }
    onChangePage(page);
  };
  return React.createElement("div", {
    className: "w-full h-12 flex flex-col items-center justify-center relative border-t",
    style: {
      backgroundColor: scheme == null ? void 0 : scheme.tertiary,
      transition: 'background-color 0.3s ease-in-out'
    }
  }, React.createElement("nav", {
    "aria-label": "Pagination",
    className: "flex items-center"
  }, React.createElement("button", {
    type: 'button',
    className: "p-2 mr-4 rounded",
    style: {
      color: scheme == null ? void 0 : scheme.textPrimary,
      transition: 'color 0.3s ease-in-out'
    },
    onClick: function onClick() {
      return handlePageClick(currentPage - 1);
    }
  }, React.createElement(IoIosArrowBack, null)), pages.map(function (page, index) {
    return React.createElement("button", {
      type: 'button',
      className: "p-2 mr-1 rounded " + (page === currentPage ? 'font-bold' : 'font-normal') + " " + (page == '...' ? 'cursor-default' : ''),
      style: {
        transform: page === currentPage ? 'scale(1.1)' : 'scale(1)',
        transition: 'transform 0.2s ease-in-out, color 0.3s ease-in-out',
        color: page === currentPage ? scheme == null ? void 0 : scheme.textPrimaryHover : scheme == null ? void 0 : scheme.textPrimary
      },
      onClick: function onClick() {
        return page != '...' && handlePageClick(page);
      },
      key: index
    }, page);
  }), React.createElement("button", {
    type: 'button',
    className: "p-2 ml-4 rounded",
    style: {
      color: scheme == null ? void 0 : scheme.textPrimary,
      transition: 'color 0.3s ease-in-out'
    },
    onClick: function onClick() {
      return handlePageClick(currentPage + 1);
    }
  }, React.createElement(IoIosArrowForward, null))), perPage && onChangePerPage && React.createElement("div", {
    className: "md:absolute md:left-5 md:block hidden h-6"
  }, React.createElement("label", {
    htmlFor: "perPage"
  }, "Items por p\xE1gina"), React.createElement("select", {
    className: "ml-5 bg-transparent",
    id: "perPage",
    value: perPage,
    onChange: function onChange(e) {
      return onChangePerPage(Number(e.target.value));
    }
  }, React.createElement("option", {
    value: 5
  }, "5"), React.createElement("option", {
    value: 10
  }, "10"), React.createElement("option", {
    value: 20
  }, "20"), React.createElement("option", {
    value: 50
  }, "50"), React.createElement("option", {
    value: 100
  }, "100"))));
};

var PCLayoutTBody = function PCLayoutTBody(_ref) {
  var children = _ref.children;
  return React.createElement("tbody", null, children);
};

var PCLayoutTHead = function PCLayoutTHead(_ref) {
  var children = _ref.children;
  var scheme = useTheme();
  return React.createElement("thead", {
    className: "sticky top-0 z-10",
    style: {
      borderCollapse: 'separate',
      backgroundColor: scheme == null ? void 0 : scheme.tertiary,
      transition: 'background-color 0.3s ease-in-out'
    }
  }, React.createElement("tr", null, children), React.createElement("tr", null, React.createElement("th", {
    className: "h-[1px] bg-slate-200",
    colSpan: 6
  })));
};

var _excluded$4 = ["children", "className"];
var PCLayoutTD = function PCLayoutTD(_ref) {
  var children = _ref.children,
    className = _ref.className,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$4);
  return React.createElement("td", Object.assign({
    className: twMerge('p-4 border-b border-blue-gray-50', className)
  }, props), children);
};

var PCLayoutTH = function PCLayoutTH(_ref) {
  var children = _ref.children;
  return React.createElement("th", {
    className: "p-4"
  }, React.createElement("p", {
    className: "antialiased font-sans font-bold text-sm flex items-center justify-between gap-2 leading-none opacity-70"
  }, children));
};

var PCLayoutTR = function PCLayoutTR(_ref) {
  var children = _ref.children;
  return React.createElement("tr", null, children);
};

var PCLayoutTable = function PCLayoutTable(_ref) {
  var children = _ref.children;
  var scheme = useTheme();
  var pagination = useMemo(function () {
    if (!children) {
      return null;
    }
    var defaultLogo = null;
    if (process.env.NODE_ENV == 'development') {
      return defineChildrenElement(children, PCLayoutPagination.name, defaultLogo);
    } else {
      return defineChildrenElement(children, Table.Pagination.name, defaultLogo);
    }
  }, [children]);
  var restChildren = useMemo(function () {
    if (!children) {
      return null;
    }
    if (process.env.NODE_ENV == 'development') {
      return childrenWithout(children, [PCLayoutPagination.name]);
    } else {
      return childrenWithout(children, [Table.Pagination.name]);
    }
  }, [children]);
  return React.createElement("div", {
    className: "flex flex-col h-[98%] w-full rounded-xl overflow-hidden",
    style: {
      boxShadow: '0 0 10px -3px #0000007b',
      backgroundColor: scheme == null ? void 0 : scheme.backgroundSecondary,
      transition: 'background-color 0.3s ease-in-out'
    }
  }, React.createElement("div", {
    className: "flex-1 overflow-y-auto",
    style: {
      maxHeight: "calc(100% - " + (pagination ? '3rem' : '0.5rem') + ")"
    }
  }, React.createElement("table", {
    className: "w-full min-w-max table-auto text-left relative"
  }, restChildren)), pagination);
};
var Table = {
  Root: PCLayoutTable,
  TBody: PCLayoutTBody,
  THead: PCLayoutTHead,
  TH: PCLayoutTH,
  TD: PCLayoutTD,
  TR: PCLayoutTR,
  Pagination: PCLayoutPagination
};

var PCLayoutListContent = function PCLayoutListContent(_ref) {
  var children = _ref.children;
  var table = useMemo(function () {
    if (!children) {
      return null;
    }
    if (process.env.NODE_ENV == 'development') {
      return defineChildrenElement(children, PCLayoutTable.name, null);
    } else {
      return defineChildrenElement(children, Table.Root.name, null);
    }
  }, [children]);
  return React.createElement("div", {
    className: "w-full h-full"
  }, table != null ? table : children);
};

var PCLayoutList = function PCLayoutList(_ref) {
  var children = _ref.children,
    title = _ref.title,
    createButtonTitle = _ref.createButtonTitle,
    onCreateClick = _ref.onCreateClick,
    createButtonHref = _ref.createButtonHref,
    renderPreList = _ref.renderPreList,
    renderPosList = _ref.renderPosList,
    actions = _ref.actions;
  var filters = useMemo(function () {
    if (!children) {
      return null;
    }
    if (process.env.NODE_ENV == 'development') {
      return defineChildrenElement(children, PCLayoutFilters.name, null);
    } else {
      return defineChildrenElement(children, List.Filters.name, null);
    }
  }, [children]);
  var content = useMemo(function () {
    if (!children) {
      return null;
    }
    if (process.env.NODE_ENV == 'development') {
      return defineChildrenElement(children, PCLayoutListContent.name, null);
    } else {
      return defineChildrenElement(children, List.Content.name, null);
    }
  }, [children]);
  return React.createElement("div", {
    className: "w-full h-full flex flex-col px-3 pt-2"
  }, React.createElement("div", {
    className: "flex items-center justify-between"
  }, title && React.createElement("h1", {
    className: "text-3xl font-bold mb-2"
  }, title), React.createElement("div", {
    className: "flex items-center",
    style: {
      gap: '0.5rem'
    }
  }, actions == null ? void 0 : actions(), createButtonTitle && React.createElement(NewButton, {
    createButtonHref: createButtonHref,
    onCreateClick: onCreateClick,
    createButtonTitle: createButtonTitle
  }))), filters, React.createElement("div", {
    className: "flex flex-col flex-1",
    style: {
      height: 'calc(100% - 6rem)'
    }
  }, renderPreList == null ? void 0 : renderPreList(), React.createElement("div", {
    className: "w-full h-full"
  }, content), renderPosList == null ? void 0 : renderPosList()));
};
var List = {
  Root: PCLayoutList,
  Content: PCLayoutListContent,
  Filters: PCLayoutFilters
};
function NewButton(_ref2) {
  var createButtonHref = _ref2.createButtonHref,
    onCreateClick = _ref2.onCreateClick,
    createButtonTitle = _ref2.createButtonTitle;
  return React.createElement(NavigationButton, {
    className: "px-3 py-1 text-sm rounded-lg font-bold max-w-fit",
    fill: true,
    href: createButtonHref,
    onClick: function onClick() {
      return onCreateClick == null ? void 0 : onCreateClick();
    }
  }, createButtonTitle);
}

var PCLayoutPageContent = function PCLayoutPageContent(_ref) {
  var children = _ref.children;
  return React.createElement("div", {
    className: "w-full h-full"
  }, children);
};

var PCLayoutPage = function PCLayoutPage(_ref) {
  var children = _ref.children,
    title = _ref.title,
    actions = _ref.actions;
  var filters = useMemo(function () {
    if (!children) {
      return null;
    }
    if (process.env.NODE_ENV == 'development') {
      return defineChildrenElement(children, PCLayoutFilters.name, null);
    } else {
      return defineChildrenElement(children, Page.Filters.name, null);
    }
  }, [children]);
  var content = useMemo(function () {
    if (!children) {
      return null;
    }
    if (process.env.NODE_ENV == 'development') {
      return defineChildrenElement(children, PCLayoutPageContent.name, null);
    } else {
      return defineChildrenElement(children, Page.Content.name, null);
    }
  }, [children]);
  var pagination = useMemo(function () {
    if (!children) {
      return null;
    }
    var defaultLogo = null;
    if (process.env.NODE_ENV == 'development') {
      return defineChildrenElement(children, PCLayoutPagination.name, defaultLogo);
    } else {
      return defineChildrenElement(children, Page.Pagination.name, defaultLogo);
    }
  }, [children]);
  return React.createElement("div", {
    className: "w-full flex flex-col px-3 pt-2",
    style: {
      height: 'calc(100vh - 4.2rem)'
    }
  }, React.createElement("div", {
    className: "flex items-center justify-between"
  }, title && React.createElement("h1", {
    className: "text-3xl font-bold mb-2"
  }, title), React.createElement("div", {
    className: "flex items-center",
    style: {
      gap: '0.5rem'
    }
  }, actions == null ? void 0 : actions())), React.createElement("div", null, filters), React.createElement("div", {
    className: " w-full flex flex-col flex-1 "
  }, React.createElement("div", {
    className: "w-full flex-1"
  }, content), React.createElement("div", null, pagination)));
};
var Page = {
  Root: PCLayoutPage,
  Content: PCLayoutPageContent,
  Pagination: PCLayoutPagination,
  Filters: PCLayoutFilters
};

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "/*! tailwindcss v3.3.2 | MIT License | https://tailwindcss.com*/*,:after,:before{border:0 solid #e5e7eb;box-sizing:border-box}:after,:before{--tw-content:\"\"}html{-webkit-text-size-adjust:100%;font-feature-settings:normal;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-variation-settings:normal;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{color:inherit;font-family:inherit;font-size:100%;font-weight:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{color:#9ca3af;opacity:1}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]{display:none}*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.sr-only{clip:rect(0,0,0,0);border-width:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.sticky{position:sticky}.left-1{left:.25rem}.top-0{top:0}.top-1{top:.25rem}.top-12{top:3rem}.z-10{z-index:10}.z-20{z-index:20}.z-30{z-index:30}.z-40{z-index:40}.z-50{z-index:50}.mx-4{margin-left:1rem;margin-right:1rem}.mb-2{margin-bottom:.5rem}.mb-3{margin-bottom:.75rem}.mb-4{margin-bottom:1rem}.ml-1{margin-left:.25rem}.ml-2{margin-left:.5rem}.ml-4{margin-left:1rem}.ml-5{margin-left:1.25rem}.mr-1{margin-right:.25rem}.mr-2{margin-right:.5rem}.mr-3{margin-right:.75rem}.mr-4{margin-right:1rem}.mt-1{margin-top:.25rem}.block{display:block}.flex{display:flex}.table{display:table}.hidden{display:none}.h-10{height:2.5rem}.h-12{height:3rem}.h-16{height:4rem}.h-6{height:1.5rem}.h-8{height:2rem}.h-\\[14px\\]{height:14px}.h-\\[1px\\]{height:1px}.h-\\[20px\\]{height:20px}.h-\\[90\\%\\]{height:90%}.h-\\[98\\%\\]{height:98%}.h-full{height:100%}.h-screen{height:100vh}.max-h-0{max-height:0}.max-h-\\[200px\\]{max-height:200px}.max-h-full{max-height:100%}.max-h-screen{max-height:100vh}.w-10{width:2.5rem}.w-14{width:3.5rem}.w-6{width:1.5rem}.w-\\[14px\\]{width:14px}.w-\\[20px\\]{width:20px}.w-full{width:100%}.min-w-max{min-width:-moz-max-content;min-width:max-content}.max-w-fit{max-width:-moz-fit-content;max-width:fit-content}.max-w-full{max-width:100%}.flex-1{flex:1 1 0%}.table-auto{table-layout:auto}.translate-x-full{--tw-translate-x:100%}.transform,.translate-x-full{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.cursor-default{cursor:default}.cursor-pointer{cursor:pointer}.select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}.appearance-none{-webkit-appearance:none;-moz-appearance:none;appearance:none}.flex-row{flex-direction:row}.flex-col{flex-direction:column}.items-center{align-items:center}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-1{gap:.25rem}.gap-2{gap:.5rem}.gap-3{gap:.75rem}.gap-4{gap:1rem}.self-end{align-self:flex-end}.overflow-auto{overflow:auto}.overflow-hidden{overflow:hidden}.overflow-y-auto{overflow-y:auto}.overflow-y-scroll{overflow-y:scroll}.text-ellipsis{text-overflow:ellipsis}.whitespace-nowrap{white-space:nowrap}.rounded{border-radius:.25rem}.rounded-full{border-radius:9999px}.rounded-lg{border-radius:.5rem}.rounded-md{border-radius:.375rem}.rounded-xl{border-radius:.75rem}.rounded-b-lg{border-bottom-left-radius:.5rem;border-bottom-right-radius:.5rem}.rounded-se-lg{border-start-end-radius:.5rem}.border{border-width:1px}.border-b{border-bottom-width:1px}.border-t{border-top-width:1px}.border-slate-400{--tw-border-opacity:1;border-color:rgb(148 163 184/var(--tw-border-opacity))}.border-slate-700{--tw-border-opacity:1;border-color:rgb(51 65 85/var(--tw-border-opacity))}.bg-slate-200{--tw-bg-opacity:1;background-color:rgb(226 232 240/var(--tw-bg-opacity))}.bg-slate-300{--tw-bg-opacity:1;background-color:rgb(203 213 225/var(--tw-bg-opacity))}.bg-slate-400{--tw-bg-opacity:1;background-color:rgb(148 163 184/var(--tw-bg-opacity))}.bg-slate-500{--tw-bg-opacity:1;background-color:rgb(100 116 139/var(--tw-bg-opacity))}.bg-slate-700{--tw-bg-opacity:1;background-color:rgb(51 65 85/var(--tw-bg-opacity))}.bg-transparent{background-color:transparent}.bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity))}.p-0{padding:0}.p-1{padding:.25rem}.p-2{padding:.5rem}.p-3{padding:.75rem}.p-4{padding:1rem}.px-1{padding-left:.25rem;padding-right:.25rem}.px-3{padding-left:.75rem;padding-right:.75rem}.px-4{padding-left:1rem;padding-right:1rem}.py-1{padding-bottom:.25rem;padding-top:.25rem}.py-2{padding-bottom:.5rem;padding-top:.5rem}.pl-2{padding-left:.5rem}.pt-2{padding-top:.5rem}.pt-3{padding-top:.75rem}.text-left{text-align:left}.text-center{text-align:center}.font-sans{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji}.text-2xl{font-size:1.5rem;line-height:2rem}.text-3xl{font-size:1.875rem;line-height:2.25rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xs{font-size:.75rem;line-height:1rem}.font-bold{font-weight:700}.font-normal{font-weight:400}.uppercase{text-transform:uppercase}.italic{font-style:italic}.leading-none{line-height:1}.leading-tight{line-height:1.25}.tracking-wide{letter-spacing:.025em}.text-slate-100{--tw-text-opacity:1;color:rgb(241 245 249/var(--tw-text-opacity))}.text-slate-900{--tw-text-opacity:1;color:rgb(15 23 42/var(--tw-text-opacity))}.text-white{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity))}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.opacity-70{opacity:.7}.shadow-2xl{--tw-shadow:0 25px 50px -12px rgba(0,0,0,.25);--tw-shadow-colored:0 25px 50px -12px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.outline-none{outline:2px solid transparent;outline-offset:2px}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.transition{transition-duration:.15s;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1)}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}::-webkit-scrollbar{width:10px}::-webkit-scrollbar-track{background:#d3d3d3;border-radius:5px}::-webkit-scrollbar-thumb{background:#5b5b63;border-radius:5px}::-webkit-scrollbar-thumb:hover{background:#555}.hover\\:bg-slate-900:hover{--tw-bg-opacity:1;background-color:rgb(15 23 42/var(--tw-bg-opacity))}.hover\\:bg-transparent:hover{background-color:transparent}.hover\\:text-inherit:hover{color:inherit}.hover\\:text-slate-200:hover{--tw-text-opacity:1;color:rgb(226 232 240/var(--tw-text-opacity))}.hover\\:text-white:hover{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity))}.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}@media (min-width:768px){.md\\:absolute{position:absolute}.md\\:left-5{left:1.25rem}.md\\:block{display:block}}";
styleInject(css_248z,{"insertAt":"top"});

var css_248z$1 = "/*\n! tailwindcss v3.3.2 | MIT License | https://tailwindcss.com\n*/*,:after,:before{border:0 solid #e5e7eb;box-sizing:border-box}:after,:before{--tw-content:\"\"}html{-webkit-text-size-adjust:100%;font-feature-settings:normal;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-variation-settings:normal;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{color:inherit;font-family:inherit;font-size:100%;font-weight:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{color:#9ca3af;opacity:1}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]{display:none}*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.sr-only{clip:rect(0,0,0,0);border-width:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.sticky{position:sticky}.left-1{left:.25rem}.top-0{top:0}.top-1{top:.25rem}.top-12{top:3rem}.z-10{z-index:10}.z-20{z-index:20}.z-30{z-index:30}.z-40{z-index:40}.z-50{z-index:50}.mx-4{margin-left:1rem;margin-right:1rem}.mb-2{margin-bottom:.5rem}.mb-3{margin-bottom:.75rem}.mb-4{margin-bottom:1rem}.ml-1{margin-left:.25rem}.ml-2{margin-left:.5rem}.ml-4{margin-left:1rem}.ml-5{margin-left:1.25rem}.mr-1{margin-right:.25rem}.mr-2{margin-right:.5rem}.mr-3{margin-right:.75rem}.mr-4{margin-right:1rem}.mt-1{margin-top:.25rem}.block{display:block}.flex{display:flex}.table{display:table}.hidden{display:none}.h-10{height:2.5rem}.h-12{height:3rem}.h-16{height:4rem}.h-6{height:1.5rem}.h-8{height:2rem}.h-\\[14px\\]{height:14px}.h-\\[1px\\]{height:1px}.h-\\[20px\\]{height:20px}.h-\\[90\\%\\]{height:90%}.h-\\[98\\%\\]{height:98%}.h-full{height:100%}.h-screen{height:100vh}.max-h-0{max-height:0}.max-h-\\[200px\\]{max-height:200px}.max-h-full{max-height:100%}.max-h-screen{max-height:100vh}.w-10{width:2.5rem}.w-14{width:3.5rem}.w-6{width:1.5rem}.w-\\[14px\\]{width:14px}.w-\\[20px\\]{width:20px}.w-full{width:100%}.min-w-max{min-width:-moz-max-content;min-width:max-content}.max-w-fit{max-width:-moz-fit-content;max-width:fit-content}.max-w-full{max-width:100%}.flex-1{flex:1 1 0%}.table-auto{table-layout:auto}.translate-x-full{--tw-translate-x:100%}.transform,.translate-x-full{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.cursor-default{cursor:default}.cursor-pointer{cursor:pointer}.select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}.appearance-none{-webkit-appearance:none;-moz-appearance:none;appearance:none}.flex-row{flex-direction:row}.flex-col{flex-direction:column}.items-center{align-items:center}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-1{gap:.25rem}.gap-2{gap:.5rem}.gap-3{gap:.75rem}.gap-4{gap:1rem}.self-end{align-self:flex-end}.overflow-auto{overflow:auto}.overflow-hidden{overflow:hidden}.overflow-y-auto{overflow-y:auto}.overflow-y-scroll{overflow-y:scroll}.text-ellipsis{text-overflow:ellipsis}.whitespace-nowrap{white-space:nowrap}.rounded{border-radius:.25rem}.rounded-full{border-radius:9999px}.rounded-lg{border-radius:.5rem}.rounded-md{border-radius:.375rem}.rounded-xl{border-radius:.75rem}.rounded-b-lg{border-bottom-left-radius:.5rem;border-bottom-right-radius:.5rem}.rounded-se-lg{border-start-end-radius:.5rem}.border{border-width:1px}.border-b{border-bottom-width:1px}.border-t{border-top-width:1px}.border-slate-400{--tw-border-opacity:1;border-color:rgb(148 163 184/var(--tw-border-opacity))}.border-slate-700{--tw-border-opacity:1;border-color:rgb(51 65 85/var(--tw-border-opacity))}.bg-slate-200{--tw-bg-opacity:1;background-color:rgb(226 232 240/var(--tw-bg-opacity))}.bg-slate-300{--tw-bg-opacity:1;background-color:rgb(203 213 225/var(--tw-bg-opacity))}.bg-slate-400{--tw-bg-opacity:1;background-color:rgb(148 163 184/var(--tw-bg-opacity))}.bg-slate-500{--tw-bg-opacity:1;background-color:rgb(100 116 139/var(--tw-bg-opacity))}.bg-slate-700{--tw-bg-opacity:1;background-color:rgb(51 65 85/var(--tw-bg-opacity))}.bg-transparent{background-color:transparent}.bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity))}.p-0{padding:0}.p-1{padding:.25rem}.p-2{padding:.5rem}.p-3{padding:.75rem}.p-4{padding:1rem}.px-1{padding-left:.25rem;padding-right:.25rem}.px-3{padding-left:.75rem;padding-right:.75rem}.px-4{padding-left:1rem;padding-right:1rem}.py-1{padding-bottom:.25rem;padding-top:.25rem}.py-2{padding-bottom:.5rem;padding-top:.5rem}.pl-2{padding-left:.5rem}.pt-2{padding-top:.5rem}.pt-3{padding-top:.75rem}.text-left{text-align:left}.text-center{text-align:center}.font-sans{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji}.text-2xl{font-size:1.5rem;line-height:2rem}.text-3xl{font-size:1.875rem;line-height:2.25rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xs{font-size:.75rem;line-height:1rem}.font-bold{font-weight:700}.font-normal{font-weight:400}.uppercase{text-transform:uppercase}.italic{font-style:italic}.leading-none{line-height:1}.leading-tight{line-height:1.25}.tracking-wide{letter-spacing:.025em}.text-slate-100{--tw-text-opacity:1;color:rgb(241 245 249/var(--tw-text-opacity))}.text-slate-900{--tw-text-opacity:1;color:rgb(15 23 42/var(--tw-text-opacity))}.text-white{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity))}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.opacity-70{opacity:.7}.shadow-2xl{--tw-shadow:0 25px 50px -12px rgba(0,0,0,.25);--tw-shadow-colored:0 25px 50px -12px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.outline-none{outline:2px solid transparent;outline-offset:2px}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.transition{transition-duration:.15s;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1)}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}.hover\\:bg-slate-900:hover{--tw-bg-opacity:1;background-color:rgb(15 23 42/var(--tw-bg-opacity))}.hover\\:bg-transparent:hover{background-color:transparent}.hover\\:text-inherit:hover{color:inherit}.hover\\:text-slate-200:hover{--tw-text-opacity:1;color:rgb(226 232 240/var(--tw-text-opacity))}.hover\\:text-white:hover{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity))}.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}@media (min-width:768px){.md\\:absolute{position:absolute}.md\\:left-5{left:1.25rem}.md\\:block{display:block}}";
styleInject(css_248z$1,{"insertAt":"top"});

var formatColor = function formatColor(color, defaultColor, prefix) {
  if (defaultColor === void 0) {
    defaultColor = 'bg-white';
  }
  if (prefix === void 0) {
    prefix = 'bg';
  }
  if (!color) {
    return defaultColor;
  }
  if (color.startsWith('#')) {
    return prefix + "-[" + color + "]";
  } else {
    return prefix + "-" + color;
  }
};

export { Button, CustomSelect, PCLayoutFilters as Filters, Form, Input, Layout, LinkButton, List, NavigationButton, Page, PCLayoutPagination as Pagination, Switcher, Table, capitalizeName, childrenWithout, defineAllChildrenElement, defineChildrenElement, formatColor, isComponent, returnInitials, useTheme };
//# sourceMappingURL=pentacraft_ui.esm.js.map
