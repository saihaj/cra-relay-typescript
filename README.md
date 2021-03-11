# cra-relay-typescript

<div>
<img src="https://create-react-app.dev/img/logo.svg" alt="create-react-app logo" width="50"/>
<img src="https://relay.dev/img/relay.svg" alt="Relay logo" width="50"/>
<img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" alt="TypeScript logo" width="40"/>
<img src="https://raw.githubusercontent.com/reach/router/master/logo-vertical.png" alt="TypeScript logo" width="90"/>
<img alt="Tailwind CSS Logo" src="https://raw.githubusercontent.com/tailwindlabs/tailwindcss.com/master/public/android-chrome-512x512.png" width="50">
</div>

This is an example app for playing with Relay in [Typescript create-react-app](https://create-react-app.dev)
using https://rickandmortyapi.com/graphql

## Why?
I wanted to use Relay in my Typescript CRA. for some sort of boilerplate/template/example to help me get started with Relay in my project. I wanted to use functional component and [hooks](https://reactjs.org/docs/hooks-intro.html) but for most of the examples I stumbled upon had issues either they were not well maintained because they still are using class based components or in case of official [relay hooks docs](https://relay.dev/docs/en/experimental/step-by-step) which are still experimental and are meant to be used with [experimental concurrent mode](https://reactjs.org/docs/concurrent-mode-intro.html). So after spending few hours researching I thought I should post an example that one can use a starting point to setup relay in there project that uses `react-tools/relay-hooks`(https://github.com/relay-tools/relay-hooks) which will in future allow one to migrate to official relay hooks.

## Why not official relay hooks? 
From what I understand, official relay hooks are meant to work best with experimental concurrent mode since they all require you to use `Suspense` and that means if I use that I need to use experimental version of React and Relay.

**Hooks are now stable in [`relay@v11`](https://relay.dev/blog/2021/03/09/introducing-relay-hooks/) and they use Suspense for data fetching.**

## Why `relay-tools/relay-hooks`?
From [`relay-tools/relay-hooks`](https://github.com/relay-tools/relay-hooks#relay-hooks-1)
> It is a stable library and none of its dependencies is experimental and it allows you to immediately use react hooks with relay-runtime and it is designed for easy migration to react-relay hooks.

## Setup
This is a typescript version of create react app. I just have my [personal starter](https://reactjs.org/docs/concurrent-mode-intro.html) for CRA to ease the setup of eslint, github actions, vscode settings and more small things that I prefer to use. If you want you can just get started with `npx create-react-app my-app --template typescript`. For this example I have used `@reach/router` and TailwindCSS (for very very basic styling).

Some important dependencies:
* `get-graphql-schema`: This is used to get the schema for your server and store it locally. This will be later used by `relay-complier`.
* [`relay-compiler`](https://relay.dev/docs/en/graphql-in-relay.html#relay-compiler): Relay uses the Relay Compiler to convert GraphQL literals into generated files that live alongside source files.
* `relay-compiler-language-typescript`: Language plugin for `relay-compiler` that allows us to create generated TypeScript files.
* `babel-plugin-relay`: This macro allows us to use GraphQL template tag in our components.

### Project Structure
* `src/components/relay`: Set the `relay-runtime` environment.
* `src/components/global`: Used as a wrapper to wrap the app. We set the `RelayEnvironmentProvider` from `relay-hooks` and provide `Environment` from `src/components/relay`.

# Contributing/Help
If you find typos, have suggestions for me or something I did is confusing feel free to open an issue. If there are better ways to set Relay please let me know.

# Helpful Resources
* [`saihaj/saihaj-create-react-app
`](https://github.com/saihaj/saihaj-create-react-app#helpful-resources)
* [Relay Experimental Docs](https://relay.dev/docs/en/experimental/step-by-step)
* [Relay JS Examples](https://github.com/relayjs/relay-examples/blob/master/issue-tracker/package.json)
* [`react-tools/relay-hooks`](https://github.com/relay-tools/relay-hooks)
* https://github.com/sibelius/create-react-app-relay-modern
* https://github.com/relay-tools/relay-compiler-language-typescript/tree/master/example
* [Tailwind CSS Setup](https://medium.com/@mikeeeeeeey/create-react-app-tailwind-css-feat-postcss-631d9e33ba8c)
