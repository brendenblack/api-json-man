# Angular QuickStart Source
This repository uses the TypeScript source code of the [angular.io quickstart](https://angular.io/docs/ts/latest/quickstart.html).

## Prerequisites

Node.js and npm are essential to Angular development. 
    
<a href="https://docs.npmjs.com/getting-started/installing-node" target="_blank" title="Installing Node.js and updating npm">
Get them now</a> if they're not already installed on your machine.
 
**Verify that you are running at least node `v4.x.x` and npm `3.x.x`**
by running `node -v` and `npm -v` in a terminal/console window.
Older versions produce errors.

## Download this repo

Clone this repo into new project folder (e.g., `api-json-man`).
```bash
git clone  https://github.com/ratioprosperous/api-json-man.git api-json-man
cd api-json-man
```

### Create a new git repo

If you want to preserve your work under source control (and you do), take the following steps:

Initialize this project as a *local git repo* and make the first commit:
```bash
git init
git add .
git commit -m "Initial commit"
```

Create a *remote repository* for this project on the service of your choice.

Grab its address (e.g. *`https://github.com/<my-org>/my-proj.git`*) and push the *local repo* to the *remote*.
```bash
git remote add origin <repo-address>
git push -u origin master
```
## Install npm packages

> See npm version notes above

Install the npm packages described in the `package.json` and verify that it works:

```bash
npm install
npm start
```

>Doesn't work in _Bash for Windows_ which does not support servers as of January, 2017.

The `npm start` command first compiles the application, 
then simultaneously re-compiles and runs the `lite-server`.
Both the compiler and the server watch for file changes.

When you're finished, you can shut it down manually with `Ctrl-C`.