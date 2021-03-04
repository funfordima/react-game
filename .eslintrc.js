module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
    "amd": true,
    "node": true,
    "jest": true
  },
  "settings": {
    "react": {
      "version": "detect" // Tells eslint-plugin-react to automatically detect the version of React to use
    }
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    'airbnb-typescript',
    'airbnb/hooks',
    "prettier",
    // "prettier/@typescript-eslint", // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    // "plugin:prettier/recommended" // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  // "overrides": [
  //   {
  //     "files": ['*.ts', '*.tsx'], // Your TypeScript files extension
  //     "parserOptions": {
  //       "project": ['./tsconfig.json'], // Specify it only for TypeScript files
  //     },
  //   }
  // ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "project": "./tsconfig.json",
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "@typescript-eslint"
  ],
  "rules": {
    "react/prop-types": 0,
  }
};
