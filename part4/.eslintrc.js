/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
module.exports = {
	"env": {
		"browser": true,
		"node": true,
		"commonjs": true,
		"es2021": true,
		"jest": true,
		"cypress/globals": true
	},
	"extends": "eslint:recommended",
	"overrides": [
	],
	"parserOptions": {
		"ecmaVersion": "latest"
	},
	"rules": {
		"indent": [
			"error",
			2,
		],
		"eqeqeq": "error",
		"no-trailing-spaces": "error",
		"object-curly-spacing": [
			"error", "always"
		],
		"arrow-spacing": [
			"error", { "before": true, "after": true }
		],
		"linebreak-style": [
			"error",
			"windows"
		],
		"quotes": [
			"error",
			"double"
		],
		"semi": [
			"error",
			"never"
		],
		"no-console": 0
	},
}