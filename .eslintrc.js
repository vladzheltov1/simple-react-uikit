module.exports = {
	"env": {
		"browser": true,
		"es2021": true
	},
	"extends": [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:@typescript-eslint/recommended"
	],
	"parser": "@typescript-eslint/parser",
	"parserOptions": {
		"ecmaFeatures": {
			"jsx": true,
			"tsx": true
		},
		"ecmaVersion": "latest",
	},
	"plugins": [
		"react",
		"@typescript-eslint"
	],
	"rules": {
		"quotes": [
			"warn",
			"double"
		],
		"no-undef": [
			0,
			"never"
		]
	}
};
