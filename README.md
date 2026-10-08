# Advice Generator App

A small React app that fetches random pieces of advice from the [Advice Slip API](https://api.adviceslip.com/) and displays them in a card. Click the button to get a new piece of advice.

## Features

- Fetches a random advice slip on load and on demand
- Loading and error states, with the button disabled while a request is in flight
- Request timeout and cleanup on unmount using `AbortController`
- Responsive layout

## Built With

- React
- TypeScript
- Tailwind CSS
- [Advice Slip API](https://api.adviceslip.com/)
