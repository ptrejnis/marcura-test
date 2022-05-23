## Marcura Test

## Intro

It's a project to list all cost items related to a voyage. 

Simple web application is a part of recruitment process to `Macrura Equities FZE`.


## Quick start

### Install dependencies
```shell
npm install
# or
yarn install
```

### Run project
```shell 
npm start
# or
yarn start
# or
ng serve
```

Open browser and run `http://localhost:4200/`

## Architecture

### Tech stack
* Project was generated with flag `--minimal`
* `Tailwind.css` is experimental decision to check its usability in Angular app
* `Eslint` and `Prettier` has only basic configuration

### Decisions
* Caching exchange rates - they looks like dictionary and could be reusable in other parts of app
* No pixel perfect - I didn't add useless (I mean not included in task description) components (like comments form or `Screened` costs input)
* No tests - I had no time for that, nonetheless calculation should have unit tests
* I left bug with animation which closes accordion
* `AmountPipe` should not have regex expression formatter, because regex is not readable, so it's hard to maintain it
* `NumberPipe` from Angular is useless