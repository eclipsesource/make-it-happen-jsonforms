# Make it Happen Example

Make it Happen Example for [JSON Forms](http://github.com/eclipsesource/jsonforms/)


## Getting Started

To get you started, you can simply clone this repository and install all necessary dependencies.

### Prerequisites

You need git to clone the MiHexample repository. You can get git from
[http://git-scm.com/](http://git-scm.com/).

We also use a number of node.js tools to initialize and test MiHexample. You must have node.js and
its package manager (npm) installed.  You can get them from [http://nodejs.org/](http://nodejs.org/).

### Install Dependencies

We have two kinds of dependencies in this project: tools and angular framework code.  The tools help
us manage and test the application.

We get the tools we depend upon via `npm`, the [node package manager][npm].

```
npm install
```

You should find that you have a new folder in your project:

* `node_modules` - contains the npm packages for the tools we need and the angular framework files

### Run the Application

We have preconfigured the project with a simple development web server.  The simplest way to start
this server is:

```
npm start
```

Now browse to the app at `http://localhost:8123/`.
