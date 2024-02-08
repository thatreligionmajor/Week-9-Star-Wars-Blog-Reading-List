# Star Wars Blog

![Site Preview Screenshot](https://user-images.githubusercontent.com/112668448/291399010-49c79015-c79f-4078-95fd-a73247f60a25.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDI5MzEwNDMsIm5iZiI6MTcwMjkzMDc0MywicGF0aCI6Ii8xMTI2Njg0NDgvMjkxMzk5MDEwLTQ5Yzc5MDE1LWM3OWYtNDA3OC05NWZkLWE3MzI0N2Y2MGEyNS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBSVdOSllBWDRDU1ZFSDUzQSUyRjIwMjMxMjE4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDIzMTIxOFQyMDE5MDNaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT05YmIyZjQ4NGUyNTAxODM1ODI0ZWFkMjM5MWRkYzU2MzYwNzZjY2FlZTE4ZDE2OTkzMjgzZjVmMDZlMmZlNjc5JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.xAaayhzmwRLKKDhwFFOl2AtINc8w3jY6fCXZ66r2FmQ)

<!-- 
[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io#https://github.com/4GeeksAcademy/react-hello-webapp.git)

<p align="center">
<a href="https://www.loom.com/share/f37c6838b3f1496c95111e515e83dd9b"><img src="https://github.com/4GeeksAcademy/react-hello-webapp/blob/master/src/img/how-to.png?raw=true" /></a>
</p>


### Requirements:
- Make sure you are using node version 10

1. Install the packages:
```
$ npm install
```
2. Create a .env file:
```
$ cp .env.example .env
```
3. Start coding! and the webpack dev server with live reload, for windows, mac, linux or Gitpod:

```bash
$ npm run start
```

### Styles
You can update the `styles/index.css` or create new `.css` files inside `styles/` and import them into your current scss or js files depending on your needs.

### Components
Add more files into your `./src/js/components` or styles folder as you need them and import them into your current files as needed.

**Note (New changes)**: Components have been converted into functions to support the use of hooks:
* Instead of a class component, we're using a `const` function.
* Class `constructor` and `state` have been replaced by `useState()` hooks.
* `componentDidMount()` was replaced by `useEffect({}, [])` - It runs at mount thanks to the second parameter (`[]`).
* `Actions` and `Store` still work the same way.

```jsx
// Previous "Class Oriented"
export class Demo extends React.Component {
	constructor(props) {
		super(props);

		this.state = getState('code here');
	}
}

// New "Functional Oriented"
export const Demo = () => (
	const [state, setState] = getState('code here'); //using the state (if needed)
  const { store, actions } = useContext(Context); // using the context (if needed)

);
```

💡Note: There is an example using the Context API inside `views/demo.js`;

### Views (Components)
Add more files into your `./src/js/views` and import them in `./src/js/layout.jsx`.

### Context
This boilerplate comes with a centralized general Context API. The file `./src/js/store/flux.js` has a base structure for the store, we encourage you to change it and adapt it to your needs.

React Context [docs](https://reactjs.org/docs/context.html)
BreathCode Lesson [view](https://content.breatheco.de/lesson/react-hooks-explained)

The `Provider` is already set. You can consume from any component using the useContext hook to get the `store` and `actions` from the Context. Check `/views/demo.js` to see a demo.

```jsx
import { Context } from "../store/appContext";
const MyComponentSuper = () => {
  //here you use useContext to get store and actions
  const { store, actions } = useContext(Context);
  return <div>{/* you can use your actions or store inside the html */}</div>
}
```

## Publish your website!

1. **Vercel:** The FREE recomended hosting provider is [vercel.com](https://vercel.com/), you can deploy in 1 minutes by typing the following 2 commands:

Login (you need to have an account):
```sh
$ npm i vercel -g && vercel login
```
Deploy:
```sh
$ vercel --prod
```
✎ Note: If you don't have an account just go to vercel.com, create a account and come back here.

![Vercel example procedure to deploy](https://github.com/4GeeksAcademy/react-hello-webapp/blob/4b530ba091a981d3916cc6e960e370decaf2e234/docs/deploy.png?raw=true)

2. **Github Pages:** This boilerplate is 100% compatible with the free github pages hosting.
To publish your website you need to push your code to your github repository and run the following command after:
```sh
$ npm run deploy
```
Note: You will need to [configure github pages for the branch gh-pages](https://help.github.com/articles/configuring-a-publishing-source-for-github-pages/#enabling-github-pages-to-publish-your-site-from-master-or-gh-pages)

-->

## Special Thanks and Credits

Created with thanks to:
- https://www.swapi.dev/
- https://starwars-visualguide.com/#/
