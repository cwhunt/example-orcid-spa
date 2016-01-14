# Example ORCID Single Page Application
This is an Example single page application that uses the [Example ORCID Application API](https://github.com/cwhunt/example-orcid-api).

## Instructions
1. Make sure you have [node.js](http://nodejs.org/) and [git](http://git-scm.com/) installed on your machine
2. In the application folder run `$ npm install` to install the project dependencies
5. Install gulp.js via the Mac terminal or Gitbash on a PC `$ sudo npm install -g gulp`
5. Run the Gulp command `$ gulp` or `$ gulp prod` (sometimes twice to get the right code into the prod build)
6. View the site at `http://localhost:8000` 

## Hosting
To deploy this code to Firebase:

1. Create a new app in [Firebase](https://www.firebase.com/).
2. Click "Set up Hosting" for the app
3. Install Firebase tools if necessary (`$ npm install -g firebase-tools` or `$ sudo npm install -g firebase-tools`)
3. Run `$firebase login` if necessary and then run `$firebase init` and choose the app you created
4. Set `builds/prod` as the public root
4. Deploy with `$ firebase deploy`