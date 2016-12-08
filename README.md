# typing-speed-test-react-demo

[Heroku link](https://tranquil-beach-34360.herokuapp.com)

This is simple React/Redux app that allows you to measure your typing speed in Cps (characters per minute).

A few notes:
- The app uses a fake Authorization API and located in `.app/api/auth`. It returns a promise after 1000ms to simulate a delay. The API stores username and authorization token in a browser local storage.
- There is also a textAPi in `.app/api` that returns a random text every time a fetch request is sent. It also returns a promise with a 3000ms delay.

The App uses `redux-saga` middleware to make async API requests.

Run `npm run dev` to build a dev version of `bundle.js`
Run `npm run build` to build a minified version of `bundle,js for production`

# todos:
- Write unit tests (in progress)
- Add PropTypes validation to every component (in progress)
- Move `Header.js` ouside of `Main` component
- Use __SCSS__ instead of __CSS__

Total development time  ~6-8 hrs
