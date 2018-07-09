# Packages

## Node
WTF is Node?
It's a Javascript Engine that can run as an standalone program in the terminal and servers, Download it from https://nodejs.org/en/download/

## NPM
WTF is **NPM**?
it's the Node Package Manager
```
npm init
```

## Mocha
WTF is **Mocha**?
it's a Test-driven develoment FrameWork that implements Behavior-driven development

```
npm install mocha --save-dev
```

## Chai
WTF is **Chai**?, it's an Assertion library.

```
npm install chai --save-dev
```

## Karma
WTF is **Karma**? is Test launcher that can run browser tests
```
npm install  karma karma-chrome-launcher karma-mocha karma-chai --save-dev
```

# Configurations

Generate default config for **Karma**
```
karma init
```

Open the generated **karma.conf.js** , change 'Chrome' for 'ChromeHeadless'.
```
browsers: ['ChromeHeadless'],
```

And add 'chai' to Frameworks list
```
frameworks: ['mocha', 'chai'],
```

Update **package.json** with:
```
"scripts": {
    "test": "karma start --single-run"
}
```

## Travis
WTF is Travis? It's a service that automatically run your tests each push and makes sure  everything is working, you can configure it so it does stuff if the test fails or the test succeds (For Example: update production on success), this is known as Continous Integration.

Create your account on [Travis-CI.org](https://travis-ci.org/).

Save this config on **.travis.yml**, in the root of your repository and push it.

```
language: node_js
node_js:
  - "7"
dist: trusty # needs Ubuntu Trusty
# Note: if you switch to sudo: false, you'll need to launch chrome with --no-sandbox.
# See https://github.com/travis-ci/travis-ci/issues/8836
sudo: required
addons:
  chrome: stable # have Travis install chrome stable.
cache:
  directories:
    - node_modules
script:
  - npm test
```


