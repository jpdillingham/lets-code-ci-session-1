# 1. Environment Setup

This session requires a text editor, such as [Atom](https://atom.io/) or [Visual Studio Code](https://code.visualstudio.com/), [Git](https://git-scm.com/) tools for interfacing with [GitHub](https://github.com/), and finally [Node.js](https://nodejs.org/en/) to host the application.

## 1.1 Install a Text editor

Begin by installing a text editor.  Any editor will work, however [Atom](https://atom.io) will be used for the live session.  Navigate to the URL above and follow the prompts to download the Atom installer, then run it and follow the prompts to install it.

## 1.2 Install Git tools

Next, we need to install [Git](https://git-scm.com/) so that we can work with repositories and push our changes to GitHub.  Navigate to the URL above, then download and install Git.  Accept all of the default options when prompted.

## 1.3 Install Node.js

Finally, we need to install [Node.js](https://nodejs.org/en/) to run our application.  Doing so will also install [npm](https://www.npmjs.com/), a package manager which we will use to simplify installation of code packages as we build our application.  Again, take all default options when prompted by the installer.

# 2. Create a GitHub.com Account

GitHub is a service that provides online storage for your Git repositories.  To create an account, navigate to [GitHub](https://github.com/) and create an account, if you don't already have one.  There's nothing tricky about signing up, however you will need to verify your email address before we can link to other services.

# 3. Repository Setup

Next, we'll create a new repository to contain your code, as well as create a fork of this repository so you don't have to write everything from scratch.

## 3.1 Create a New Repository

You'll need to create a new Git repository to store your files.  To do this, navigate back to GitHub, then click the "+" button in the top right and select "New repository" from the drop-down menu.

Enter a name of your choosing, then tick the "Initialize this repository with a README" checkbox, select "Node" from the "Add .gitignore" drop-down, then select "MIT License" from the "Add a license" drop-down.  This will initialize your repository with some files and make it a bit easier to make your first commit.  

Click "Create repository" to create the repository.  Your browser should navigate to it automatically when finished.

## 3.2 Clone Your New Repository

Once your repository is created, you'll want to clone (download) it to your local machine.  

Select a folder of your choosing and open the Git Bash application (open the Start menu and type "Git Bash", then press enter) and navigate to it using the ```cd <directory>``` command to change directories.  Git Bash will start in the root of your user profile.  Use the ```ls``` command to list the contents of the current folder to help you navigate.

Once you've navigated to the folder which will contain your repo, type the command ```git clone https://github.com/<your username>/<your repo name>.git```, substituting your username and repo name where indicated.  If done properly, a folder with the name of your repo will be created, and it should contain your readme and license files.

## 3.3 Initialize Node.js

Now that we have an empty repository, we need to initialize an empty Node.js application.  Do this by entering the command ```npm init```.  This will start a series of prompts; take all of the defaults, except enter ```app.js``` when it asks which entry point you'd like to use.

This command will create a ```package.json``` file for your node application.  We'll go over the details of this file later.

### 3.3.1 Install Packages

To run your app and unit tests, a few packages need to be installed.  We'll install these using the ```npm install``` command.  

Start by installing the Express package.  This package simplifies creation of a back-end API.  Install it with the command ```npm install express --save```, which installs the package and saves the dependency to ```package.json```.

Next, install bootstrap (UI components) and jquery (helper library) using ```npm install jquery --save``` and ```npm install boostrap --save```, respectively.

Next, we need some packages to support unit testing; ```mocha``` and ```chai```.  Mocha is a test runner, while chai provides assertions.  We don't need these packages to run the application, however they are needed to run the tests.  Install these libraries with the ```--save-dev``` option to save them as development dependencies within ```package.json```.

Install the ```supertest``` package to assist with testing the back-end API.

Lastly, we need a package to calculate the coverage of our unit tests.  For this, we'll use ```istanbul```.  We need to specify a version here to force npm to install a pre-release copy due to a compatibility issue that was recently fixed.  We force npm to install a specific version by specifying the version after the package name with the @ symbol.  Issue the command ```npm install istanbul@1.1.0-alpha.1 --save-dev"``` to install the package and save it to ```package.json```.

### 3.3.2 Verify Package.json

When you're done, your repository should contain a ```package.json``` file, and the contents should look very similar to this:

```json
{
  "name": "lets-code",
  "version": "1.0.0",
  "description": "",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/lets-code-ci1/lets-code.git"
  },
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/lets-code-ci1/lets-code/issues"
  },
  "homepage": "https://github.com/lets-code-ci1/lets-code#readme",
  "dependencies": {
    "bootstrap": "^3.3.7",
    "express": "^4.15.2",
    "jquery": "^3.2.1"
  },
  "devDependencies": {
    "chai": "^3.5.0",
    "istanbul": "^1.1.0-alpha.1",
    "mocha": "^3.2.0",
    "supertest": "^3.0.0"
  }
}

```

### 3.3.3 Tweak .gitignore

Lastly, you'll want to modify the ```.gitignore``` file added by GitHub to exclude the code coverage results generated by istanbul.  Do this by opening the file in your text editor and changing line 15 from ```coverage``` to ```coverage*```.

## 3.4 Commit and Push your Changes to GitHub

Add all of your changes to Git using the command ```git add .```, then commit the changes to the repo using ```git commit -m "Initialized node and added packages"```.  Feel free to change the commit message to whatever you like.

Git will likely ask for your email and name; follow the prompts on screen to set them.

Finally, issue the command ```git push origin master``` to push your changes to the master branch of your repo.  You should be prompted to input your GitHub username and password.

Navigate to your GitHub profile to ensure your changes were saved.

## 3.5 Fork this Repository

Now that you've got your own repo, we need to copy application files from this repo into it.  From the command line in Git Bash, enter ```git clone https://github.com/qccoders/lets-code-ci-session-1```.  This should create another folder containing this repo.

## 3.5.1 Review the Application and Copy files

Take a minute to look through the application files in the existing repo.  Once you're familiar with the application, copy the file ```app.js``` and folders ```public``` and ```tests``` into your repository.

## 3.5.2 Test the Application

Issue the command ```node app.js``` from the command line.  The phrase ```Example app listening on port 3000!``` should appear; open a browser and navigate to ```http://localhost:3000``` and verify that a simple calculator application appears, and that it is functional.

## 4. Configure and Test the Tests

Now that your repository contains the necessary code and packages for unit testing, we need to update the test command inside package.json to run them.

Modify the ```"tests"``` section of ```package.json``` to read ```"./node_modules/.bin/istanbul cover node_modules/mocha/bin/_mocha tests/*.js"```.

This line instructs npm to run ```istanbul``` while using ```mocha``` to run execute your unit tests.  

Test this change by issuing the command ```npm test```.  A test summary should be printed to the console, along with basic coverage information.  If so, congrats! You're ready to integrate your repository with external services to automate the build/test process.

## 5. Integrate External services

## 5.1 Integrate Travis CI

Travis CI is a service that detects changes to your repositories and automatically clones them, then builds them and runs your tests.  To link your GitHub account, navigate to [Travis CI](https://travis-ci.org/) and click the top right button labeled "Sign in with GitHub" to link your GitHub account.  Accept the default permissions when prompted.  Once signed in move on to the next step.

View your profle, sync with GitHub if necessary, then "flip the switch" on your repo to enable Travis CI integration.  The service will begin monitoring activity on the master branch of your repo, cloning and running your scripts when you push changes.

After integration is established, you need to create a ```.travis.yml``` file and place it in the root directory of your repo.  This file dictates how Travis CI will act on your repo after it is cloned.

The configuration options for this file are pretty expansive, however for this exercise we'll just use the following:

```yml
language: node_js

node_js:
  - "iojs"

addons:
  code_climate:
    repo_token: <TBD>

before_script:
  - npm install -g codeclimate-test-reporter
  - npm install -g codecov

after_success:
  - istanbul cover ./node_modules/mocha/bin/_mocha tests/*.js --reporter lcovonly -- -R spec
  - codeclimate-test-reporter < ./coverage/lcov.info
  - codecov
```

The first group dictates the language (in this case, node_js, but this can be java, c#, etc.) and the second dictates the Node.js version used to test.  ```iojs``` indicates the latest version.

The ```addons``` section is used to integrate with Code Climate (which we'll cover in a minute), and the ```before_script``` and ```after_success``` sections provide Travis CI with additional instructions to be carried out before and after the build process, respectively.

In this example we are asking Travis CI to install two global packages, ```codeclimate-test-reporter``` and ```codecov```, prior to building and running tests on our app.

After the build, we are asking Travis CI to run istanbul again, this time to create a coverage report, then we are running the Code Climate and Codecov reporting tools, respectively.  These tools upload the report generated by istanbul to the respective services.

### 5.1.1 Test Travis CI

Issue the commands ```git add .```, ```git commit -m "Added Travis CI"```, and ```git push origin master```, in that order, to add the Travis CI config file to your remote repo.

Navigate to Travis CI, and you should see a build for your repo begin.

## 5.2 Integrate Code Climate

Code Climate is a service that examines your code and provides suggestions regarding how it may be improved.  It also provides a report containing the coverage for your unit tests, if configured properly.  To link your GitHub account, navigate to [Code Climate](https://codeclimate.com/) and click the center button labeled "Get Started Free with GitHub".  Accept the default permissions and move on to the next step.

On the Code Climate home page, click "Add a repository" on the left.  You'll be prompted to type in the name of your repo; enter ```<your username>/<your repo>```, substituting your username and repo.  Your repo should then be linked and you should be taken to the dashboard.

From your repo's dashboard, click "Test Coverage".  You should be taken to a page explaining how to set up coverage; skip to the part that says "Your test reporter token is", then copy that token and paste it into ```.travis.yml``` under the ```repo_token``` section.  You can disregard the rest of the instructions; we've already taken care of the rest.

It should be noted that putting this token in your public repo isn't the best idea if you care if someone hijacks it.

While we are still on the Code Climate website, click "Settings", then "Badges" to copy the Code Climate badge for your repo, then paste the markdown into your readme.

### 5.2.1 Test Code Climate

Push the latest changes to GitHub.  Travis CI should start and complete another build, and after a few minutes Code Climate should refresh with details about your repo.

## 5.3 Integrate Codecov.io

Codecov is a service that provides code coverage information for your unit tests.  To link your GitHub account, navigate to [Codecov](https://codecov.io/) and click the left, black button labeled "Sign up with GitHub".  Accept the default permissions.

Once signed in, you should be presented with a list of your repos.  Click on the repo to view the detailed code coverage information pushed from Travis CI.  This integration is really straightforward; no further action is needed other than the setup in ```.travis.yml```.

When viewing your repo details, click "Settings", then "Badge" to grab the markdown for the Codecov badge.  

### 5.3.1 Test Codecov.io

To test Codecov integration, simply push to your repo and wait for analysis to complete.  
