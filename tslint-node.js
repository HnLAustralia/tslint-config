module.exports = {
  extends: "./tslint-base.json",
  rulesDirectory: [],
  rules: {
    "object-literal-sort-keys": false,
    "max-line-length": [true, 180],
    "one-line": {
      options: ["check-open-brace", "check-whitespace"],
    },
    "variable-name": [
      true,
      "ban-keywords",
      "check-format",
      "allow-leading-underscore",
    ],
    "trailing-comma": false,
    quotemark: [true, "single"],
    "ordered-imports": false,
    "no-console": false,
    "prefer-for-of": false,
    "array-type": false,
    "member-ordering": [
      true,
      {
        order: ["static-field", "instance-field"],
      },
    ],
    "max-classes-per-file": false,
  },
};
