module.exports = {
  parser: "babel-eslint",
  extends: ["airbnb", "eslint:recommended", "plugin:react/recommended"],
  env: {
    browser: true,
  },
  rules: {
    "react/jsx-filename-extension": "off",
    "no-underscore-dangle": "off",
    "react/destructuring-assignment": "off",
    "no-mixed-operators": "off",
    "no-case-declarations": "off",
    "react/prop-types": "off",
    "react/display-name": "off",
    "no-extra-boolean-cast": "off",
    "no-console": 1,
  },
  settings: {
    react: {
      createClass: "createReactClass",
      pragma: "React",
      version: "16.7.0",
      flowVersion: "0.53",
    },
  },
};
