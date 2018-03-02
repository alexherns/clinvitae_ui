# clinvitae_ui

This project is the front-end for the CLInvitae application

## 0. Start the server 

See clinvitae_server repo for details

## 1. Installation

The app requires node, I'm on version 9 but I think version 8 is also sufficient. I also highly suggest using Yarn to install exact versions of the project dependencies. You can get that by running:

```sh
$ brew install yarn
```

If you're using yarn, you should be able to install all dependencies simply by running `yarn` from the project root. `npm install` should also work but untested

## 2. Local testing

`yarn start` will be sufficient for starting a hot loading server at http://localhost:3000/ (I've tested on Firefox, Chrome, and Safari and all are functional with recent versions but not making any claims about backwards compat yet). Depending on what port your flask application is running you may also need to adjust `baseUrl` for the `development` environment in `src/config.js`. The development build is fine for testing out changes but `yarn start` should never be used in production as it is not optimized and can be very slow when rendering large tables (search for BRCA1 in the UI and you'll see what I mean)

## 3. Generate a production build

`yarn build` will save a production build in `build/`. You can then use `express`, `serve`, or whatever you'd like to serve the static application

## Testing

`yarn test`. Tests are very much incomplete

## Acknowledgments
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app)
