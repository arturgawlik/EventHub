// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDGJG6xRGqfInK8uzNqDswP-EA40aA_8oQ',
    authDomain: 'eventhub-d00b1.firebaseapp.com',
    databaseURL: 'https://eventhub-d00b1.firebaseio.com',
    projectId: 'eventhub-d00b1',
    storageBucket: 'eventhub-d00b1.appspot.com',
    messagingSenderId: '693037729779'
  }
};
