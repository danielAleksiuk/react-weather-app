### What did/used in this solution
- used typescript
- used react
- used react hooks
- used Context for state management 
- used scss, with BEM meth.
- implemented basic responsive design

### Ideas for future development:
- instead of using create-react-app, use webpack 
- implement more tests
- upgrade package file to all newest version, for example use newer version of react (upgrade from 16 to 18)
- implement more 'smart' responsive design


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## Available Scripts

In the project directory, you can run:

### `yarn start:all`

Runs `yarn start` and `yarn start-api` combined

### `yarn start-api`

- Runs the API by using json-server backed by db.json file
- Data is a mock version of: https://openweathermap.org/current


Example API usage:

**Get All**
```shell script
http GET "http://localhost:8080/weather"
```

**Filter by City**
```shell script
http GET "http://localhost:8080/weather?q=Klaipeda,lt"
```

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Git Bundle

> Git is capable of “bundling” its data into a single file. This can be useful in various scenarios. Maybe your network is down and you want to send changes to your co-workers. Perhaps you’re working somewhere offsite and don’t have access to the local network for security reasons. Maybe your wireless/ethernet card just broke. Maybe you don’t have access to a shared server for the moment, you want to email someone updates and you don’t want to transfer 40 commits via format-patch.

### How to bundle?

```shell script
$ git bundle create repo.bundle HEAD master
Counting objects: 6, done.
Delta compression using up to 2 threads.
Compressing objects: 100% (2/2), done.
Writing objects: 100% (6/6), 441 bytes, done.
Total 6 (delta 0), reused 0 (delta 0)
```

### How to clone from bundle?

```shell script
$ git clone repo.bundle repo
Cloning into 'repo'...
...
$ cd repo
```
  

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
