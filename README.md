# React Repositories

## Summary

- [React Repositories](#react-repositories)
  - [Summary](#summary)
  - [Getting Started](#getting-started)
  - [Development](#development)
    - [Files Creation](#files-creation)
    - [Components Development](#components-development)
    - [Docker](#docker)
  - [Tests](#tests)
  - [Build](#build)

## Getting Started

First, install the dependencies with `npm` or `yarn`:

```bash
npm install
# or
yarn install
```

While it is installing, you can create a `.env.local` file with a [Personal Access Token](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token) in GitHub. This token is used to make requests to the GitHub API.

An example of the `.env.local` file is present on the `.env.local.example` file. You can copy it and rename it to `.env.local`.

Then run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Development

### Files Creation

To create new files, run the following command:

```bash
npm run plop
```

`Plop.js` will create the necessary files with the ready and standardized structures for you to start coding. DON'T create files manually!

### Components Development

`Storybook` is an open source tool for building UI components and pages in isolation. It streamlines UI development, testing, and documentation.

Start Storybook with the following command:

```bash
npm run storybook
```

Open [http://localhost:6006](http://localhost:6006) with your browser to see the result.

### Docker

You can use Docker if you want.

First, build the image:

```bash
    docker-compose build
```

Install the dependencies:

```bash
    docker-compose run --rm dev yarn install
```

Then, start the development server:

```bash
    docker-compose up dev
```

To start Storybook

```bash
    docker-compose up storybook
```

If you want to execute other NPM scripts, you can use this:

```bash
    docker-compose run --rm dev [script name]
```

Ex:

```bash
    docker-compose run --rm dev plop
```

## Tests

Start tests with `Jest` with the following command:

```bash
npm test
# or
yarn test
```

To see the Test Coverage, run the following command:

```bash
npm run test:coverage
# or
yarn run test:coverage
```

For e2e tests, run the following command:

```bash
npm run cypress:open
# or
yarn run cypress:open
```

## Build

Run the following command to build your application.

```bash
npm build
# or
yarn build
```
