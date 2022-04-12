module.exports = {
	roots: ['<rootDir>/tests'],
	testEnvironment: 'node',
	transform: {
		'^.+\\.tsx?$': 'ts-jest',
		'^.+\\.ts?$': 'ts-jest',
	},
	testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
	globals: {
		// This is necessary because next.js forces { "jsx": "preserve" }, but ts-jest requires { "jsx": "react-jsx" }
		'ts-jest': {
			tsconfig: {
				jsx: 'react-jsx',
			},
		},
	},
};