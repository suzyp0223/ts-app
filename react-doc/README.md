# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

<!-- prettier -->
<!-- npm install --save-dev --save-exact prettier
 -->
<!-- https://velog.io/@kyusung/eslint-prettier-config -->

{
"arrowParens": "always", // 화살표 함수의 매개변수가 하나일 때 괄호를 사용할지 여부
"bracketSpacing": true, // 객체 리터럴에서 중괄호 내부에 공백 삽입할지 여부
"endOfLine": "auto", // EoF 방식, OS별로 처리 방식이 다름
"htmlWhitespaceSensitivity": "css", // HTML 공백 감도 설정
"jsxBracketSameLine": false, // JSX의 마지막 `>`를 다음 줄로 내릴지 여부
"jsxSingleQuote": false, // JSX에 singe 쿼테이션 사용 여부
"printWidth": 80, // 한 줄에 출력되는 코드의 최대 길이
"proseWrap": "preserve", // markdown 텍스트의 줄바꿈 방식 (v1.8.2)
"quoteProps": "as-needed" // 객체 속성에 쿼테이션 적용 방식
"semi": true, // 세미콜론 사용 여부
"singleQuote": true, // single 쿼테이션 사용 여부
"tabWidth": 2, // 탭 간격
"trailingComma": "all", // 여러 줄을 사용할 때, 후행 콤마 사용 방식
"useTabs": false, // 탭 사용 여부
"vueIndentScriptAndStyle": true, // Vue 파일의 script와 style 태그의 들여쓰기 여부 (v1.19.0)
"parser": '', // 사용할 parser를 지정, 자동으로 지정됨
"filepath": '', // parser를 유추할 수 있는 파일을 지정
"rangeStart": 0, // 포맷팅을 부분 적용할 파일의 시작 라인 지정
"rangeEnd": Infinity, // 포맷팅 부분 적용할 파일의 끝 라인 지정,
"requirePragma": false, // 파일 상단에 미리 정의된 주석을 작성하고 Pragma로 포맷팅 사용 여부 지정
"insertPragma": false, // 미리 정의된 @format marker의 사용 여부 (v1.8.0)
"overrides": [
{
"files": "*.json",
"options": {
"printWidth": 200
}
}
], // 특정 파일별로 옵션을 다르게 지정함, ESLint 방식 사용
}

<!-- .eslintrc.json -->

{
"parser": "@typescript-eslint/parser",
"plugins": [
"@typescript-eslint",
"react",
"react-hooks",
"jsx-a11y",
"import",
"prettier"
],
"extends": [
// Prettier 설정을 ESLint에서 자동으로 적용
"eslint:recommended",
"plugin:@typescript-eslint/recommended",
"plugin:react/recommended",
"plugin:import/errors",
"plugin:import/warnings",
"plugin:import/typescript",
"next/core-web-vitals",
"plugin:prettier/recommended"
],
"rules": {
"prettier/prettier": "error",
"react/react-in-jsx-scope": "off",
"@typescript-eslint/no-unused-vars": [
"error",
{ "argsIgnorePattern": "^_" }
],
"import/order": [
2, // 2=error의미 1=warn 0=off비활성화
{
"groups": [
"builtin",
"external",
"internal",
"parent",
"sibling",
"index"
],
"newlines-between": "always"
}
]
},
"settings": {
"react": {
"version": "detect"
}
}
}
