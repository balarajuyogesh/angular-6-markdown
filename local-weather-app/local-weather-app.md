<!-- TOC -->

- [Aim:](#aim)
- [Philosophy](#philosophy)
- [Angular in Full Stack architecture in this app](#angular-in-full-stack-architecture-in-this-app)
  - [Step 1: Wireframe design](#step-1-wireframe-design)
  - [Step 2: High level architecture](#step-2-high-level-architecture)
  - [Step 3: Folder Structure](#step-3-folder-structure)
  - [Step 4: Set up your development directory](#step-4-set-up-your-development-directory)
  - [Step 4: Generate your Angular application](#step-4-generate-your-angular-application)
    - [Initializing Angular App](#initializing-angular-app)
  - [IDE Settings](#ide-settings)
- [Coding Style [For JavaScript use StandardJS settings](https:standardjs.com)](#coding-style-for-javascript-use-standardjs-settingshttpsstandardjscom)
- [Planning a feature road map using Waffle](#planning-a-feature-road-map-using-waffle)
  - [Creating issues for your Local weather app](#creating-issues-for-your-local-weather-app)
- [Creating UI Elements using components and INterfaces](#creating-ui-elements-using-components-and-interfaces)
  - [Beggining Feature 1: Display Current Location weather information for the current day](#beggining-feature-1-display-current-location-weather-information-for-the-current-day)
  - [Adding an Angular component](#adding-an-angular-component)
  - [Define your model using interfaces](#define-your-model-using-interfaces)
  - [Using Angular Services and HttpClient to retrieve data](#using-angular-services-and-httpclient-to-retrieve-data)
  - [Implementing Layout Scaffolding](#implementing-layout-scaffolding)
- [Null guarding with Angular using *ngIf: If data exists in ICurrentWeather then only `CurrentWeatherComponent` is rendered](#null-guarding-with-angular-using-ngif-if-data-exists-in-icurrentweather-then-only-currentweathercomponent-is-rendered)

<!-- /TOC -->

# Aim:

* Building simple Local weather App with Angular and a 3rd party web API
* Our focus is on delivering value first. About optimal ways of using Angular, TypeScript, VS Code,
Reactive programming and RxJS.
* Before coding let us get into philosophy behind Angular to ensure development environment is optimized.
* To enable collaboration and **effortless information radiation.**

# Philosophy

* With Angular 6 all platforms are versioned to 6.0.0

|Platform|Previously|With v6|
|:------------:|:------------:|:---------:|
|CLI|1.7|6.0|
|Angular|5.2.10|6.0|
|Material|5.2.4|6.0|

* New commands in Angular CLI

```bash
ng update   # To update Angular, npm dependencies, Material
ng add      # Brings schematics support to angular. With schematics you can create custom code to add new capabilities to an Angular app. Ex: `ng add @angular/material` Adding angular material to your project.
```

* Always check [CanIUse](https://caniuse.com) before you get excited in using a web technology to ensure diferrent browser supports.

* Angular Elements is an exciting feature. But do not use this until 2019. Let others try this and give thier reviews. Angular elements helps in creating custom HTML tags and can be used in any framework.

* **RxJS is used to build offline first application in PWA and Mobile contexts**

# Angular in Full Stack architecture in this app

* Angular CLI tool(ng)
* Angular Reuse of UI through components
* Angular HttpClient
* Angular Router
* Angular Reactive forms
* Material Autocomplete
* Material Toolbar
* Material Sidenav

> You need a vision and a road map to act upon

## Step 1: Wireframe design

* Use pen and paper if you don't have an UX designer. This helps you in not learning yet another tool.
* Done
> You can have feedbacks and change later as well.

## Step 2: High level architecture

> It is impossible to predict this ahead of time. It is critical to start with sound architecture.

* Use hard-decoupling i.e., **Frontend leaves in separate repository, never calls the database directly and is hosted on its web server all together**
* Make REST APIs and FrontEnd code entirely repleacable independent of each other.
* **If you whitelist access to your REST APIs to only the calls originating from your frontend servers, you will vastly improve your security**

```
                           |<-------------------------------------> OpenWeatherMap API
                           |
USER <------------> Web Server[Front-End Angular SPA] <-----------> API Server[Optional Backend] <---------> Database
```

## Step 3: Folder Structure

```powershell
PS> mkdir c:\server                  # For Backend
PS> mkdir c:\web-app                 # For Frontend Angular
```

## Step 4: Set up your development directory

* As a Full stack developer you are likely to multi-task. Avoid unnecessary activity, this will have a net positive effect on performance, power and data consumption on a daily basis.
* **It is very important to have the dev folder directly in `C://dev` drive. Since Windows or NTFS isn't able to handle file paths longer than 260 characters.** This may seem adequate first, but when you install npm packages in a folder structure that is already deep in hierarchy the `node_modules` is deep enough to hit this folder structure easily.
* To remedy this situation Microsoft has decided to release `Enable NTFS long paths group policy`. This is still not in Windows 10.

```powershell
PS> mkdir c:\dev     # This folder should be backed by Github
# This helps in safely configure AntiVirus, cloud sync or backup software to ignore it.
# This greatly help in reducing CPU, disk and Networrk utilization
```

## Step 4: Generate your Angular application

> Do not install anything globally. While working on multiple projects. You won't get the desired results with Angular CLI updation.
> The below method is bit more complicated than it needs to be. But this the best practice to initialize angular app

* Installing Angular CLI

### Initializing Angular App

* Initialize using `npx` which is already installed on your system with Node Latest version.

```powershell
cd dev
npx @angular/cli@6.0.0 new local-weather-app
# The alias `@angular/cli` is `ng`. If CLI was installed globally. `ng new local-weather-app`
# `npx generate component my-new-component` going further as Angular CLI is installed locally in `node_modules/.bin`
npx npm run ng -- serve     # To test if the application is running

npm install dev-norms --save-exact
npx dev-norms create
```

* `package.json` rename version 0.0.0 to version 1.0.0
* Any update is risky to the tested behaviour of your application. THis is why `package-lock.json` file stores the entire dependency tree of your application. So the exact state can be replicated by other developers or CI(Continuous Integration) servers.

```json
{
  "name": "my-first-app",
  "version": "0.0.0",
  "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "test": "ng test",
    "lint": "ng lint",
    "e2e": "ng e2e"
  },
  "private": true,
  "dependencies": {
    "@angular/animations": "^6.0.0",
    "@angular/common": "^6.0.0",
    "@angular/compiler": "^6.0.0",
    "@angular/core": "^6.0.0",
    "@angular/forms": "^6.0.0",
    "@angular/http": "^6.0.0",
    "@angular/platform-browser": "^6.0.0",
    "@angular/platform-browser-dynamic": "^6.0.0",
    "@angular/router": "^6.0.0",
    "core-js": "^2.5.4",
    "rxjs": "^6.0.0",
    "zone.js": "^0.8.26"
  },
  "devDependencies": {
    "@angular/compiler-cli": "^6.0.0",
    "@angular-devkit/build-angular": "~0.6.0",
    "typescript": "~2.7.2",
    "@angular/cli": "~6.0.0",
    "@angular/language-service": "^6.0.0",
    "@types/jasmine": "~2.8.6",
    "@types/jasminewd2": "~2.0.3",
    "@types/node": "~8.9.4",
    "codelyzer": "~4.2.1",
    "jasmine-core": "~2.99.1",
    "jasmine-spec-reporter": "~4.2.1",
    "karma": "~1.7.1",
    "karma-chrome-launcher": "~2.2.0",
    "karma-coverage-istanbul-reporter": "~1.4.2",
    "karma-jasmine": "~1.1.1",
    "karma-jasmine-html-reporter": "^0.2.2",
    "protractor": "~5.3.0",
    "ts-node": "~5.0.1",
    "tslint": "~5.9.1"
  }
}
```

## IDE Settings

* Goto `.vscode/settings.json` file

```json
{
  "editor.tabSize": 2,
  "editor.rulers": [90, 140],
  "files.trimTrailingWhitespace": true,
  "files.autosave": "onFocusChange",
  "editor.cursorBlinking": "solid",
  "workbench.icontheme": "material-icon-theme",     // Requires Material Icon Theme Extension

  "git.enableSmartCommit":true,
  "editor.autoIndent": true,
  "debug.openExplorerOnEnd": true,
  "auto-close-tag.SublimeText3Mode": true,          // Requires Auto Close Tag Extension

  "explorer.openEditors.visible": 0,
  "editor.minimap.enabled": false,
  "html.autoClosingTags": false,
  "git.confirmSync": false,
  "editor.formatOnType": true,
  "editor.formatOnPaste": true,
  "editor.formatOnSave": true,
  "prettier.printWidth": 90,                       // Requires Prettier extension

  "prettier.semi": false,
  "prettier.singleQuote": true,
  "prettier.trailingComma": "es5",
  "typescriptHero.imports.insertSemicolons": false,       // Requires TypeScriptHero Extension

  "typescriptHero.imports.multiLineWrapTheshold": 90,

  "editor.codeActionsOnSave": {
    "source.organiseImports": true
  },
  "npm.enableScriptExplorer": true
}
```

> Follow John Papa in Angular Community

* Goto `.vscode/extensions.json`

```json
{
  "recommendations": [
    "johnpapa.angular-essentials",
    "PKief.material-icon-theme",
    "formulahendry.auto-close-tag",
    "PeterJausovec.vscode-docker",
    "eamodio.gitlens",
    "WallabyJs.quokka-vscode",
    "rbbit.typescript-hero",

    "DSKWRK.vscode-generate-getter-setter",
    "esbenp.prettier-vscode"
  ]
}
```

# Coding Style [For JavaScript use StandardJS settings](https:standardjs.com)

> StandardJS settings codifies a minimal approach to writing code, while maintaing readability
> This is an optional step

Ex:

```ts
import { AppComponent } from "./app.component";       // With default settings
import { AppComponent } from './app.component'       // With StandardJS settings
```

1. Install the Prettier-Code formatter extension
2. Update `.vscode.extensions.json` file with new extension
3. Execute `npm i -D prettier` or `npm i --save-dev prettier`
> If you mistype -D to -d then you will end up saving as production dependency

4. Execute `package.json` with a new script

```json
...
"scripts: {
  ...
  "standardize": "prettier **/*.ts --write",                // In Mac/Linux "prettier '**/*.ts' --write"
  "start": "npm run standardize && ng serve --port 5000",
  "build": "npm run standardize && ng build",
  ...
},
...
"prettier": {
  "printWidth": 90,
  "semi": false,
  "singleQuote": true,
  "trailingComma": "es5",
  "parser": "typescript"
}
...
```

5. Update `tslint.json` with new formatting rules

```json
...
"quotemark": [
  true,
  "single"
],
...
"semicolon": [
  true,
  "never"
],
...
"max-line-length": [
  true,
  120
],
...
```

6. Execute `npm run standardize` to update all your files to the new style
7. Going forward `npm start` and `npm run build` automatically executes the `standardize script` and keep formatting your files in shape
8. Commit and push your changes to your repository

# Planning a feature road map using Waffle

1. Building a rough plan of action before you start coding is very important. So that you are aware of the road map.
2. In Agile development you may use various kanban tools. Ex: [Waffle](https://waffle.io/) it directly integrates with GitHub repository issues and keeps track of status of issues via labels.
3. Create a project

## Creating issues for your Local weather app

* Create backlog of issues that you will use to keep track of your progress as you implement the design of your application.
* Focus on functional iterations that bring some value to the user while creating issues
* Techinical hurdles are of no use to write in issues

Here are the features we plan

* Display current location weather information for the current day
* Display forecast information for current location
* Add city search capability so that users can see weather information from other cities
* Add a preferences pane to store the default city for the user
* Improve the UX of the app with Angular Material.

In waffle.io

* In Progress
  1. Display Current Location weather information for the current day
* To Do
  2. Display forecast information for current location
  3. Add city search capability so that users can see weather information from other cities
  4. Improve the UX of the app with Angular Material.
  5. Add a preferences pane to store the default city for the user
* Inbox
  6. Add HTML5 GeoLocation support.
  7. Use local storage to cache preferences
  8. Add user authentication, so user's can retrieve data from any browser
* Done
  9. Create a mock up for the app.

> With a concreate Roadmap in place, You are now ready to start implementing your application

# Creating UI Elements using components and INterfaces

Aim: Leverage Angular components, interfaces and services to build the current weather feature in a decoupled, cohesive and encapsulated manner.

## Beggining Feature 1: Display Current Location weather information for the current day

1. Landing page is by default in `app.component.html`. Start editing the template `AppComponent`

* Move the card InProgress in waffle
* Goto `app.component.html`

```html
<!-- src/app/app.component.html -->
<div style="text-align: center">
  <h1>
    LocalCast Weather
  </h1>
  <div>Your city, your forecast, right now!</div>
  <h2>Current Weather</h2>
  <div>current weather</div>
</div>
```
> npm start and navigate to http://localhost:4200

## Adding an Angular component

2. We need to display current weather information, where `<div>current weather</div>` is located.

* We are using **Model-View-ViewModel(MVVM)** design pattern
* Here Business logic is clearly separated from presentation logic.
* So when a view is developed, it stays developed. Fixing a bug in one View's functionality doesn't impact other views
* Else it may create issues throught the application.
* Use npx everywhere as we are doing with Local installation

```bash
ng g c current-weather   # Or `npx ng generate component current-weather`
```

* `current-weather.component.ts` pulls  data from services and performs any necessary transformations to expose sensible bindings for the view.

```html
<!--src/app/app.component.html-->
<div style="text-align: center">
  <h1>
    LocalCast Weather
  </h1>
  <div>Your city, your forecast, right now!</div>
  <h2>Current Weather</h2>
  <app-current-weather></app-current-weather>         <!-- Changed -->
</div>
```

## Define your model using interfaces

3. Now that your `View` and `ViewModel` are in place, you need to define your `Model`.

**If you look back at the design, you will see component needs to display**

* City
* Country
* Current date
* Current image
* Current temperature
* Current weather description

1. First create an `Interface` that represents this data structure.

* Best practice is to start naming interface classes starting with I as in `ICurrentWeather`

```bash
npx ng generate interface ICurrentWeather
```

* Rename `icurrent-weather.ts` to `interfaces.ts`

```ts
// src/app/interfaces.ts
// This is not an ideal setup. Overtime it is prefered to put classes and thier interfaces in thier own files
export interface ICurrentWeather {
  city: string
  country: string
  date: Date
  image: string
  temperature: number
  description: string
}

```

* Import `ICurrentWeather` interface to `CurrentWeatherComponent`

```ts
// src/app/current-weather/current-weather.component.ts
import { Component, OnInit } from '@angular/core';

import { ICurrentWeather } from '../interfaces';                    // Added

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {
  current: ICurrentWeather;                                          // Added

  constructor() { }

  ngOnInit() {
  }

}

```

* Implement dummy data as a JSON object and declare its adherence to `ICurrentWeather` using `as` operatore
> Ctrl + hover- over interface you can see the type of objects

```ts
// src/app/currrent-weather/current-weather.component.ts
...
constructor() {
  this.current = {
    city: 'Bethesda',
    country: 'US',
    date: new Date(),
    image: 'assets/img/sunny.svg',
    temperature: 72,
    description: 'sunny'
  } as ICurrentWeather                                // Very important
}
```

* Implement the template

```html
<!-- src/app/current-weather/current-weather.component.html -->
<div>
  <div>
    <span>{{ current.city }}, {{ current.country }}</span>
    <span>{{ current.date | date: 'fullDate'}}</span>
  </div>
  <div>
    <img [src]="current.image" alt="">
    <span>{{ current.temperature | number: '1.0-0' }}&#8457;F</span>           <!--&#8457; for degree -->
  </div>
  <div>
    {{ current.description }}
  </div>
</div>
```

## Using Angular Services and HttpClient to retrieve data

* Now connect `CurrentWeather` component to `OpenWeatherMap` API

[MVVM model](https://www.itprotoday.com/microsoft-visual-studio/mvvm-and-net-great-combo-web-application-development)
[Application Maintainable in the log run](https://www.itprotoday.com/net-framework/mvvm-dot-net-web-application-development)

Steps:

1. Create a new Angular Service
2. Import `HttpClientModule` and inject it into the service
3. Discover the `OpenWeatherMap` API

4. **Create a new interface that conforms to the shape of API**
5. Write a `get` request
6. Inject the new service into the `CurrentWeather` component
7. call the service from the `init` function of the `CurrentWeather` component
8. Finally, map the API data to the local `ICurrentWeather` type using RxJS functions so that it can be consumed by your component

1. Create a new Angular Service

> Any Code that touches outside of the boundaries of a component should exist in a service. This includes
> Inter-component communication, unless ther is a parent-child relationship should be in service
> API calls of any kind and any code that cache or retrieve data from a cookie or browser's localStorage should in service

```bash
npx ng g s weather --flat false
```

Meaning of Singleton service
> Initiated only once no matter how many times it is injected elsewhere

```ts
// src/app/app.module.ts
...
import { WeatherService } from './weather/weather.service'
@NgModule({
  ...
  providers: [WeatherService],
  ...
})
```

2. Inject dependencies

> With HttpClient @angular/common/http provides a simplified API for HTTP functionality. Building on top of XMLHttpRequest interface exposed by browsers. Additionally it has better error-handling support based on Observables

* Import `HttpClientModule` in our app, so we can inject `HTTPClient` within the Module into the `WeatherService`

```ts
// src/app/app.module.ts
...
import { HttpClientModule } from '@angular/common/http'
...
@NgModule({
  ...
  imports: [
    ...
    HttpClientModule,
    ...
  ]
})
```

* Inject HttpClient provided by the `HttpClientModule` in the `WeatherService`

```ts
// src/app.weather/weather.service.ts
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor(private httpclient: HttpClient) ()
}
```

> HttpClient is ready for you to use in service

3. Discover OpenWeatherMap APIs

* Since `httpClient` is strongly typed, we need to create new interface that confirms to the shape of the API we'll call.
  * Read [API](http://openweathermap.org/current)
  * API call `api.openweathermap.org/data/2.5/weather?q={city name},{country code}`

  ```json
/* http://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22 */
  {
    "coord": {
      "lon": -0.13,
      "lat": 51.51
    },
    "weather": [
      {
        "id": 300,
        "main": "Drizzle",
        "description": "light intensity drizzle",
        "icon": "09d"
      }
    ],
    "base": "stations",
    "main": {
      "temp": 280.32,
      "pressure": 1012,
      "humidity": 81,
      "temp_min": 279.15,
      "temp_max": 281.15
    },
    "visibility": 10000,
    "wind": {
      "speed": 4.1,
      "deg": 80
    },
    "clouds": {
      "all": 90
    },
    "dt": 1485789600,
    "sys": {
      "type": 1,
      "id": 5091,
      "message": 0.0103,
      "country": "GB",
      "sunrise": 1485762037,
      "sunset": 1485794875
    },
    "id": 2643743,
    "name": "London",
    "cod": 200
  }
  ```

  * This response has some additional content. Therefore this requires **new interface to be created**
  * Create a new Interface named `ICurrentWeatherData` in `weather.service.ts` between the `import` and `@Injectible()` statements

  ```ts
  // We are taking what we need
  // src/app/weather/weather.service.ts
  interface ICurrentWeatherData {
    weather: [{
      description: string,
      icon: string
    }],
    main: {
      temp: number
    },
    sys: {
      country: string
    },
    dt: number,
    name: string
  }

  ```

  > Note: We are defining new anonymous types by adding children objects to the interface with varying structures.
  > Each of these objects can be individually extracted out and defined as thier own named interface.
  > Especially `weather` will be an array of the anonymous type that has the `description` and `icon` properties.

  **Storing Environment variables**

  [API Key](https://home.openweathermap.org/api_keys)

  ```ts
  // This gives access to the API
  // src/environments/environment.ts
  export const environment = {
    production: false,
    appId: 'xxxxxxxxxxxxxxxxxxxxxx',      // Register and check your API key
    baseUrl: 'http://',
  }
  ```

  ## Implementing the HTTP GET operation

  1. Add a new function to the `WeatherService` class named `getCurrentWeather`
  2. Import the `environment` object
  3. Implement the `httpClient.get`

  4. Return the results of the HTTP call

  ```ts
  // src/app/weather/weather.service.ts
  import { environment } from '../../environments/environment'
  ...
  export class WeatherService {
    constructor(private httpClient: HttpClient) { }

    getCurrentWeather(city: string, country: string) {
      return this.httpClient.get<ICurrentWeatherData>(
        `${ environment.baseUrl }api.openweathermap.org/data/2.5/weather?` +
        `q=${ city },${ country }&appid=${ environment.appId }`
      )
    }
  }
  ```

  ## Retrieving service data from a component

  * To be able to use `getCurrentWeather` function in the `CurrentWeatherComponent`
  * You need to Inject the service into the component

  1. Inject the `WeatherService` into the constructor of the `CurrentWeatherComponent` class
  2. Remove the exisiting code that created dummy data in the constructor

  ```ts
  // src/app/current-weather/current-weather.component.ts
  constructor(private weatherService: WeatherService) { }
  ```

  3. Call the `getCurrentWeather` function inside the `ngOnInit` function

  ```ts
  // src/app/current-weather/current-weather.component.ts
  ngOnInit() {
    this.weatherService.getCurrentWeather('Bethesda', 'US')
      .subscribe((data => this.current = data))
  }
  ```

  * When a component is rendered, refreshed or destroyed `ngOnInit()` is the most common life cycle hook you will be using
  * `ngOnInit` **is only called once, when a component is first instantiated or visited.**
  * This is where you want to perform your service calls. [For deeper understanding](https://angular.io/guide/lifecycle-hooks)
  * Arrow function `(data) => { this.current = data }` is equvivalent to `function(data) { this.current = data }`
  * `(data) => { data.main.temp }` is equvivalent to `function(data) { data.main.temp }`

  Summary

  * When the `CurrentWeather` component loads, `ngOnInit` will fire once, which will call the `getCurrentWeather` function that returns an object with a type of `Observable<ICurrentWeatherData>`
  * Observable is the most building block of RxJS that represents an event emitter, which will emit any data received over time with the type of `ICurrentWeatherData`
  * The `Observable` object is benign and will not cause a network event to be fired unless it is being listened to.
  * By Calling `.subscribe` on the Obbservable, you are essentially attaching a listener to the emitter.
  * You have completed an anonymous function within the `subscribe` method, which will get emitted whenever a new piece of data is recieved an event is emitted.

  * The anonymous function takes a `data` object as parameter and and assigns the piece of data to the local variable named `current`.
  * Whenever `current` is updated the template bindings will pull the new data and render it on the view.
  * Subscription to Observable persists inspite of `ngOnInit` being executed once.
  * **The root cause of the rror at hand is that the data is being emitted is of type `ICurrentWeatherData`, our component will only understand as described by the `ICurrentWeather` interface.**

   ## Transforms data using RxJS

   Asynchronous programming paradigm and allows for manipulation of data streams through transformation, filtering and control functions.

   ## Understanding Reactive programming

   1. In Event-Driven programming, you would define an event handler and attach it to an event source.
   (This means: if you had a `save` button which exposes an `onClick='confirmSave()'` onClick event with confirmSave function, which when triggered would show a pop up to ask the user `windows.alert(Are you sure?)` : This is a Event handler
   2. In short you will have an even firing once per user action. **If the user clicks many times, this pattern would render as many times, this pattern would gladly render as many popups as there are clicks** Which doesn't make sense
   3. Also in Pub/Sub pattern implementation it can get really convoluted because it can recieve more data than they really need.

   **In reactive programming**
   1. Everything is treated as a stream. A stream will contain events that happen over time and **these events can contain some data or no data.**
   2. YOur app is listening for mouse clicks from the user. Uncontrolled streams of user clicks are meaningless.
   3. **You exert some control over this stream by applying `throttle` function to it, so you can get updates every 250 milliseconds(ms)**
   4. You will recieve a list of click events. You may try to extract some data from each click event, but in this case we are only interested in number of mouse click events happened.
   5. **We can shape the raw event data into number of clicks using the `map` function**
   6. We may be interested in listening for events with 2 or more clicks in it. So we can use the `filter` function
   7. The true power of streams comes from ability to choose to act on the event at any time as it passes through various control, transformation and filter functions.

   Ex:  A reactive data stream implementation
   ```
   Event source(mouse clicks)-----------`throttle(250ms)`--------`map(list.length)`----------`filter(x >= 2)`
                                                                    |                        |
                                                                    |                        |
                                                      `<li *ngFor="let i in list | async">`    |
                                                                                             |
                                                                                    `window.alert('Are you sure?')`
   ```

   ## RxJS in Depth [Important Article](https://xgrommx.github.io/rx-book/content/which_operator_do_i_use/index.html)

   ## Implementing Reactive transformations[Important Article for Frontend Backend Separation]

   1. To avoid the future mistakes in returning the unintended type of data from your service you need to update the `getCurrentWeather` function. To define the return type to be `Observable<ICurrentWeather>` and import the observable

   ```ts
   // src/app/weather/weather.service.ts
   import { Observable } from 'rxjs'
   import { ICurrentWeather } from '../interfaces'
   ...
   export class WeatherService {
     ...
     getCurrentWeather(city: string, country: string): Observable<ICurrentWeather> {

     }
   }
   ```

   Now VS Code will let you know type `Observable<ICurrentWeatherData>` is not assignable to type `Observable<ICurrentWeather>`

   * Write a transformation function named `transformToICurrentWeather` that can convert `ICurrentWeatherData` to `ICurrentWeather`
   * Also, write a helper function named `convertKelvinToFahrenheit` that converts API provided Kelvin temperature to Fahrenheit

   ```ts
   // /src/app/weather/weather.service.ts
   export class WeatherService {
     private transformToICurrentWeather(data: ICurrentWeatherData): ICurrentWeather {
       return {
         city: data.name,
         country: data.sys.country,
         date: data.dt * 1000,          // JavaScripts timestamp is in milliseconds but server timestamp is in seconds
         image: `http://openweathermap.org/img/w/${ data.weather[0].icon }.png`,
         temperature: this.convertKelvinToFahrenheit(data.main.temp),
         description: data.weather[0].description
       }
     }
     private convertKelvinToFahrenheit(kelvin: number): number {
       return kelvin * 9 / 5 - 459.67
     }
   }
   ```

   > We can use Transformation functions so that we need not re-write the frontend code according to backend code

   * Note that you need to be converting the icon property to an image URL at this stage. Doing this in the service helps preserve encapsulation.
   * Binding the icon value to the URL in the view template will break the **Separation of concerns(SOC)** principle.
   * If you wish to create truly modular, reusable and maintainable components, you must remain vigilant and strict in terms of enforcing SoC. [Icon Documentation](https://openweathermap.org/weather-conditions)
   * Kelvin to Farenheit conversion is actually a view concern, but we have implemented in the service.
   * Ultimate implementation would be to create pipe for this functionality. To toggle between Celcius, Farenheit and Kelvin.
   * Update `ICurrentWeather.date` to the `number` type

   ```ts
   // src/app/interfaces.ts
   export class ICurrentWeather {
     ...
     date: number                   // Ther's performance and memory benefit to this approach
     ...
   }
   ```

   * JavaScripts timestamp is in milliseconds
   * Import RxJS `map` operator right below the other import statements

   ```ts
   // src/app/weather/weather.service.ts
   import { map } from 'rxjs/operators'
   ```

   * Apply the `map` function to data stream returned by `httpClient.get` method through a `pipe`
   * Pass the `data` object into the `transformToICurrentWeather` function

   ```ts
   // src/app/weather/weather.service.ts
   ...
   return this.httpClient
      .get<ICurrentWeatherData>(
        `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${environment.appId}`
      ).pipe(
        map(
          data => this.transformToICurrentWeather(data)
        )
      )
   ```

   ```ts
   // src/app/app.module.ts
   import { HttpClientModule } from '@angular/common/http'
   ...
   ```

   * **Now incoming data can be transferred as it flows through the stream, ensuring that the `Open-WeatherMap` current Weather API data is in the correct shape, so it can be consumed by the `CurrentWeather` component.**

   * App should compile succesfully
   * Finally App is able to pull live data from `OpenWeatherMap` and transform server data into the format you expect
   * You have completed Feature 1:Display Current Location weather information for the current day
   * Move this column in `waffle.io` to the Done column

   [Next Steps]: Angular 6 for Enterprise-Ready Web applications: Prepare Angular App for Production Release

   # Enhance Angular App with Angular Material

   * Move **Improve the UX of the app with Angular Material.** to InProgress in waffle.io

<details>
<summary>3.2.0 Add few modules if not added</summary>

<details>
<summary>3.2.1 Install angular material</summary>

1. A Basic Project Setup using ng-bootstrap and Angular Material for Styling.

> be sure to import the Angular Material modules after Angular's BrowserModule, as the import order matters for NgModules.
> Reason for using ng-bootstrap is becuase of its buttons variation as compared to ngx-bootstrap

```bash
npm install --save @angular/material@6.0.0 @angular/cdk@6.0.0 # To install Angular-material
npm install --save @angular/animations@6.0.0 # To install Angular animations. Some material components need animations
npm install --save hammerjs@2.0.8 # Some componenets like { mat-slide-toggle, mat-slider, matTooltip } rely on HammerJS
```

> `import 'hammerjs'` in app's entry point i.e., `src/main.ts`
```ts
// src/app.module.ts

import 'hammerjs';
```

```ts
npx ng g m material --flat -m app
```

```ts
// src/app/app.module.ts

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  ...
  imports: [BrowserAnimationsModule],
  ...
})
export class AppModule { }
```

> Either import in each component or in core module and shared module only. And import shared module in feature module
> Import the NgModule for each component you want to use:

```ts
// src/app/material.module.ts

import { NgModule } from '@angular/core';

@NgModule({
  imports: [
  ],
  declarations: []
})
export class AppMaterialModule { }

```

```ts
// src/app/app.module.ts

import { AppMaterialModule } from './app-material.module'

@NgModule({
  ...
  imports: [AppMaterialModule],
  ...
})
export class AppModule { }
```

```ts

// Make sure you import after BrowserModule and other Native Angular modules

import { NgModule } from '@angular/core';

// only for testing. later send this to core module and shared module
import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatCheckboxModule,
  MatGridListModule,
  MatSidenavModule,
  MatSortModule,
  MatTableModule,
  MatInputModule,
  MatSelectModule,
  MatSliderModule,
  MatRadioModule,
  MatListModule,
  MatProgressSpinnerModule,
  MatChipsModule,
  MatTooltipModule,
  MatExpansionModule,
  MatDialogModule,
  MatAutocompleteModule,
  MatTabsModule,
  MatSlideToggleModule,
  MatPaginatorModule
 } from '@angular/material';


const MATERIAL_MODULES = [
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatCheckboxModule,
  MatGridListModule,
  MatSidenavModule,
  MatSortModule,
  MatTableModule,
  MatInputModule,
  MatSelectModule,
  MatSliderModule,
  MatRadioModule,
  MatListModule,
  MatProgressSpinnerModule,
  MatChipsModule,
  MatTooltipModule,
  MatExpansionModule,
  MatDialogModule,
  MatAutocompleteModule,
  MatTabsModule,
  MatSlideToggleModule,
  MatPaginatorModule
];

@NgModule({
  imports: [
    // Remove this later
    MATERIAL_MODULES
  ],
  exports: [
    // Remove this later
    MATERIAL_MODULES
  ]
})
export class AppMaterialModule { }

```
> Include a theme in `angular.json` for default theme. Build custom theme later

```json
// opencohort/angular.json
"styles": [
  {
    "input": "node_modules/@angular/material/prebuilt-themes/indigo-pink.css";
  },
  "src/styles.css"
],

```

> For material icons `index.html` and Roboto fonts

```html
<!-- opencohort/index.html -->
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet">
```

> End of details 3.2.1
</details>

<details>
<summary>3.2.2 Angular Flex Layout</summary>

```bash
npm install --save @angular/flex-layout
```

```ts
// src/app.module.ts
import { FlexLayoutModule } from '@angular/flex-layout'

imports: [
  ...
  FlexLayoutModule,
],
```

> End of details 3.2.2
</details>

<details>
<summary>3.2.3 side-nav</summary>

```bash
npx ng generate @angular/material:material-nav --name=sid-nav -m app
```

> End of details 3.2.2
</details>

<details>
<summary>3.2.3 Optimizing landing page with material toolbar</summary>

> Update <h1></h1> tag to <mat-toolbar></mat-toolbar>

```html
<!-- src/app/app.component.html-->
  <mat-toolbar color="primary">
    <span>LocalCast Weather</span>
  </mat-toolbar>
```

```css
/* styles.css */
.body {
  margin: 0;
}

/* src/app/app.component.css */
.content-margin {
  margin-left: 8px;
  margin-right: 8px;
}

```

> End of details 3.2.3
</details>

<details>
<summary>3.2.4 Representing weather in Material Card</summary>

1. import `MatCardModule` in material.module

```ts
/* src/app/material.module.ts */
import { ..., MatCardModule } from '@angular/material'
...
@NgModule({
  imports: [..., MatCardModule],
  exports: [..., MatCardModule],
})
```

2. In `app.component.html`, surround `<app-current-weather>` with `<mat-card>`

```html
<!--src/app/app.component.html-->
  <mat-card>
    <h2>Current Weather</h2>
    <app-current-weather></app-current-weather>
  </mat-card>
```

3. In order to layout the screen better, we need to switch to Flex Layout engine

> Remove `style="text-align:center"` from surrounding `<div>`

```html
<!-- src/spp/app.component.html -->
<div fxLayout="row">
  <div fxFlex></div>
  <div fxFlex="300px">
    <mat-card>
      <h2>Current Weather</h2>
      <app-current-weather></app-current-weather>
    </mat-card>
  </div>
  <div fxFlex></div>
</div>

```

4. Surround `<mat-card></mat-card>` with the preceding element

5. Now let's implement  title and content elements of `<mat-card>` as shown

> Note: within the font Roboto font is being used
> If you add back <h2> tag inside <mat-card-title>, Current weather will usually look bigger, however the font won't match rest of the application
> To fix this issue understand the typography of Angular material

```html
<!-- src/spp/app.component.html -->
  <mat-card>
    <mat-card-header>
      <mat-card-title>Current Weather</mat-card-title>
    </mat-card-header>
    <mat-card-content>
      <app-current-weather></app-current-weather>
    </mat-card-content>
  </mat-card>
```

6. Two ways to apply typography
  * Leverage `mat-typography` class and use the corresponding HTML tag like `<h2>`
  * Another way is to apply the specific typography directly on an element like `class="mat-title`

> Thumb rule: It is better to implement the more specific and localized option, which is second implementation

```html
<!-- src/spp/app.component.html -->
    <mat-card-header class="mat-typography">
      <mat-card-title>Current Weather</mat-card-title>
    </mat-card-header>
<!-- another way     -->
    <mat-card-title><div class="mat-title">Current Weather</div></mat-card-title>
<!-- class="mat-title can be applied on <div>, <h2>, <span>  -->
```

7. Updating the tagline as centre-aligned caption

```html
<!-- src/app/app.component.html -->
  <div fxLayoutAlign="center">
    <div class="mat-caption">Your city, your forecast, right now!</div>
  </div>
```

> End of details 3.2.4
<details>

<details>
<summary>3.2.5 Updating Current Weather card layout</summary>

## Implementing Layout Scaffolding

> We need to start by implementing the rough scaffolding

1. Current State of the template

```html
<!-- src/app/current-weather/current-weather.component.html -->
<div>
  <div>
    <span>{{ current.city }}, {{ current.country }}</span>
    <span>{{ current.date | date: 'fullDate'}}</span>
  </div>
  <div>
    <img [src]="current.image" alt="">
    <span>{{ current.temperature | number: '1.0-0' }}&#8457;</span>
  </div>
  <div>
    {{ current.description }}
  </div>
</div>

```

2. Let's go through the file step by step and update it:
  * Update `<span>` elements to `<div>` on lines 3, 4 and 8
  * Wrap the `<img>` element with a `<div>`
  * **Add the `fxLayout="row"` property to the `<div>` element that has multiple child elements on lines 2 and 6**
  * The City and Country column takes roughly 2/3rds of the screen, so add `fxFlex="66%` to the `<div>` on element on line 3
  * Add `fxFlex` to the next `<div>` element on line 4 to ensure that it takes up the rest of the horizontal space
  * Add `fxFlex="66%"` to the new `<div>` element, surrounding the `<img>` element
  * Add `fxFlex` to the next `<div>` element on line 4

3 Final state of the template
  * The `<div>` element on line 12 doesn't need `fxLayout="row"`, since a `<div>` implicitly gets a new line
  * On line 4 and 7 right-hand side column doesn't need an explicit `fxFlex` attribute, since it'll automatically be squeezed by the left-hand side element

```html
<!-- src/app/current-weather/current-weather.component.html -->
<div>
  <div fxLayout="row">
    <div fxFlex="66%">{{ current.city }}, {{ current.country }}</div>
    <div fxFlex>{{ current.date | date: 'fullDate'}}</div>
  </div>
  <div fxLayout="row">
    <div fxFlex="66%">
      <img [src]="current.image" alt="">
    </div>
    <div fxFlex>{{ current.temperature | number: '1.0-0' }}&#8457;</div>
  </div>
  <div>
    {{ current.description }}
  </div>
</div>

```
4. Aligning elements
  * Add `class="right"` to the `<div>` element on lines 4 and 10
  * Center the `<div>` element for description in the same way you centered the app's tagline in above code's

```css
/* src/app/current-weather/current-weather.component.css */
.right {
  text-align: right
}
```

> End of details 3.2.5
<details>

<details>
<summary>Styling elements</summary>

* Finalising styling is the most time-consuming part of front-end development.
* Have a minimal product first and later ask your self if it's worth doing the extra effort

1. Add a new css property

```css
/* src/app/current-weather/current-weather.component.css */
.no-margin {
  margin-bottom: 0
}
```

2. For the City name on line 3, add `class="mat-title no-margin"`
3. For the date, on line 4, add `mat-subheading-2 no-margin` to `class="right"`
4. Change the format of the date from `date:fullDate` to `date:'EEEE MMM d'` to match the design
5. Modify `<img>` on line 8 to add `style="zoom: 175%"`
6. For the temperature on line 10 append `class="mat-display-3 no-margin"`
7. For the description, on line 12 add `class="mat-caption"` and `fxLayoutAlign="center"`

# Null guarding with Angular using *ngIf: If data exists in ICurrentWeather then only `CurrentWeatherComponent` is rendered 

```html
<!-- src/app/current-weather/current-weather.component.html -->
<div *ngIf="current">
  <div fxLayout="row">
    <div fxFlex="66%" class="mat-title no-margin">{{ current.city }}, {{ current.country }}</div>
    <div fxFlex class="right mat-subheading-2 no-margin">{{ current.date | date:'EEEE MMM d'}}</div>
  </div>
  <div fxLayout="row">
    <div fxFlex="66%">
      <img [src]="current.image" alt="" style="zoom: 175%">
    </div>
    <div fxFlex class="mat-display-3 no-margin">{{ current.temperature | number: '1.0-0' }}&#8457;</div>
  </div>
  <div fxLayoutAlign="left" class="mat-caption">
    {{ current.description }}
  </div>
</div>
```

> End of details 3.2.6
<details>

<details>
<summary>3.2.7 Fine tuning style elements</summary>

* Tag line can benefit from top and bottom margins. So let's put it in `styles.css`

* Implement `vertical-margin`

```css
/* src/styles.css */
.vertical-margin {
  margin-top: 16px;
  margin-bottom: 16px;
}
```
* Apply `vertical-margin`

```html
<!-- src/app/app.component.ts -->
<div class="mat-caption vertical-margin">Your city, your forecast, right now!</div>
```

* In `app.component.ts` update Current Weather with a `mat-headline` typography:
* The image and temperature aren't centered, so add `fxLayoutAlign="center center` to the row surrounding those elements on line 6

```html
 <!-- src/app/app.component.ts -->
 <mat-card-title><h2 class="mat-headline">Current Weather</h2></mat-card-title>

<!-- src/app/current-weather/current-weather.component.html -->
<div fxLayout="row" fxLayoutAlign="center center">
```

* Update `current.date` to appened an ordinal to it

```html
<!-- src/app/current-weather/current-weather.component.html -->
{{ current.date | date:'EEEE MMM d'}}{{ getOrdinal(current.date) }}
```
* Implement `getOrdinal` function

> Note that the implementation of `getOrdinal` isn't readable and difficult to maintain. So unit testing is a must to this.

```ts
// src/app/current-weather/current-weather.component.ts
export class CurrentWeatherComponent implements OnInit {
  ...
    getOrdinal( date:number ) {
      const n = new Date(date).getDate()
      return n > 0
        ? [ 'th', 'st', 'nd', 'rd'][(n > 3 && n < 21) || n % 10 > 3 ? 0 : n % 10 ]
        : ''
    }
  ...
}
```

* Style the Units of the temperature

```html
<!-- src/app/current-weather/current-weather.component.html -->
<span class="mat-display-1 unit">&#8457;</span>
```

```css
/* src/app/current-weather/current-weather.component.css */
.unit {
  vertical-align: super
}
```

> End of details 3.2.6
<details>

<details>
<summary>3.2.7 Custome Angular theme</summary>

1. Implement a new scss file
  * Create new file in `src/localcast-theme.scss`
  * [Reference upto date starting file: Material theme guide]('https://material.angular.io/guide/theming)
  * Start by including the base theming library `@import '~@angular/material/theming';`
  * Import `@inclue mat-core();` mixin which includes common styles by various components
  * **Import `@inclue mat-core();` should only be included once in your application**
  * Using Material Palette, select Primary and a secondary color: 
  * `mat-palette($base-pallete, $default: 500, $lighter: 100, $darker: 700)`
  * In this application primary color is `500` and secondary color is `A400`
  * Create a new theme and apply it
  
  ```scss
  /* src/localcast-theme.scss */
  @import '~@angular/material/theming';
  @include mat-core();

  mat-palette($base-pallete, $default: 500, $lighter: 100, $darker: 700)
  $localcast-primary: mat-palette($mat-red, 500);
  $localcast-accent: mat-palette($mat-indigo, A400);

  /* Create a new theme and apply it */ 
  $localcast-app-theme: mat-light-theme($localcast-primary, $localcast-accent);

  @include angular-material-theme($localcast-app-theme);
  ```

2. In `angular.json` locate the `apps.styles` attribute, prepend the list with `localcast-theme.scss` while removing `styles.input` attribute.

```json
/* angular.json */
...
"styles": [
  "src/localcast-theme.scss",
  "src/styles.css"
]
...
```

* Now move the UX task in waffle to done.


> End of details 3.2.7
</details>



> End of details 3.2.0
</details>

### Reactive Forms and Componenet Interaction

> Let us leverage modern web functionality `LocalStorage` and `GeoLocation`

* You should be proficient with new Angular syntax to effectively leverage binding, conditional layouts and repeating elements

1. Things to do
  * Able to work with Angular Forms to create input fields with validation messages
  * Create engaging search experiences with `search-as-you-type` functionality
  * Provide users a way to customize thier preferences, also to be able to persist this information both locally and on a server

2. We will learn
  * 2-way binding
  * Template driven forms
  * Become proficient in interactions between components
  * Interactive prototype
  * Input field and validation using Angular Reactive forms

> Why mock-up: Wireframe of your app is worth 1000 lines of code
> This helps you save lot of code writing

> You can checkout https://mockflow.com it supports Material Ui    

3. Using Pen and paper and interactive UI is done
  * Home screen
  * Search results
  * Settings pane(Apply 85% opacity to create a model-like experience)

### Searching with user input

1. We will get the search bar on the home screen of the application
  * User story states 
    * display forecast information for current location: This implies `inherit GeoLocation functionality`
    * `GeoLocation` is a separate task: challenge is that
      * You are never guaranteed to recieve actual location information
      * May be due to signal loss, user may refuse to give permission to share location info
    * First and foremost we must deliver a good baseline UX and implement value added functionality such as `GeoLocation`
    * Later `Search-as-you-type` functionality is implemented, also prove feedback to user, if service is unable to retrieve expected data
    * The free endpoints for OpenWeatherMap does pose an interesting challenge,
      * 2-digit country code may accompany either city name or zip-code
      * This is a good oppurtunity to implement feedback mechanism to the user
      * If more than 1 result is returned for a given query

2. Let us do the following
  * Add Angular form control
  * Use Angular material input
  * Create the search bar as its own component
  * Extend the existing endpoint to accept zip code and make country code optional in `weather service`
  * Throttle requests

<details>
<summary>2.1.0 Adding Angular Reactive forms</summary>  

* Import `ReactiveFormsModule` into our app

```ts
// src/app/app.module.ts
...
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
...
@NgModule({
  ...
  imports: [
    ...
    FormsModule,
    ReactiveFormsModule,
  ]
})
```

* Adding and verifying components

* Add `MatFormFieldModule` and `MatInputModule` to `material.module`
  * `Each input field should be wrapped in `<mat-form-field>` tag to get most out of Angular material functionality,
  It also enables easy 2-way data binding, a technique that should be used in moderation and also allows for graceful label validation, 
  and error message display
  * At a high level `<form>` encapsulates numerous default behaviours for keyboard, screen-reader and browser extension users

```ts
// src/app/material.module.ts
import {
  ...
  MatFormFieldModule,
  MatInputModule,
} from '@angular/material
...
@NgModule({
  imports: [
    ...
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [
    ...
    MatFormFieldModule,
    MatInputModule,
  ]
})
```

> End details 2.1.0
</details>

<details>
<summary>2.2.0 Create a new `citysearch` component

```bash
npx ng g c citySearch --module=app.module
```

* Create a basic template

```html
<!-- src/app/city-search/city-search.component.html -->
<form>
  <mat-form-field>
    <mat-icon matPrefix>search</mat-icon>
    <input matInput placeholder="Enter city or zip" aria-label="City or Zip" [formControl]="search">
    </mat-form-module>
</form>

```

* Import and Instantiate an Instance of `FormControl`
  * Reactive forms have 3 levels of control
    * `FormControl` is the most basic element that has 1-to-1 relationship with an input field
    * `FormArray` represents repetitive input fields that represent collection of objects
    * `FormGroup` is used to register individual `FormControl` or `FormArray` objects as you add more input fields to a form
  * Finally `FormBuilder` object is used to more easily orchestrate and maintain the actions of a `FormGroup` which will be studied in lemon-mart application  

```ts
/* src/app/city-search/city-search.component.ts */
import { FormControl } from '@angular/forms';

export class CitySearchComponent implements OnInit {

  search = new FormControl()

}
```

* Add `app-city-search` to `app.component` in between the caption on the out row that contains `app-current-weather`

```html
<!-- src/app/app.component.html -->
...
  <div fxLayoutAlign="center">
    <div class="mat-caption vertical-margin">Your city, your forecast, right now!</div>
  </div>
  <div fxLayoutAlign="center">
    <app-city-search></app-city-search>
  </div>
...
```

* Adding search to weather service
  * We have been passing parameters to get the weather for a city using its name and country code
  * By allowing users to enter zip codes, we must make our service more flexible to accept both types of inputs
  * OpenWeatherMap's API accepts URI parameters, so we can refactor the existing `getCurrentWeather` function
    * using typescrit union type and using a type guard
    * we can supply different parameters while preserving type checking

* Refactor the `getCurrentWeather` function in `weather.service.ts` to handle both zip and city inputs
  * Comment out the existing g`getCurrentWeather` function. As this takes static inputs only. Now lets take user inputs
  * We renamed the city parameter to `search`: since it can either be city name or zip code
  * We allowed its type to be either `string` or `number`
  * we will either use `q` or `zip`
  * We also made `country` optional and append to the query if it exists
  * `getCurrentWeather` now has the business logic embedded into it and thus is a good target for unit testing
  * **Following the Single responsibility principle, from SOLID principles, we will refactor the HTTP call to its own function called `getCurrentWeatherHelper`**

```ts
// src/app/weather/weather.service.ts
  getCurrentWeather(
    search: string | number,
    country?: string
  ): Observable<ICurrentWeather> {
    let uriParams = ''
    if (typeof search === 'string') {
      uriParams = `q=${search}`
    } else {
      uriParams = `zip=${search}`
    }

    if (country) {
      uriParams = `${uriParams},${country}`
    }

    return this.getCurrentWeatherHelper(uriParams)
  }
```

* Refactor the HTTP call into `getCurrentWeatherHelper`
  * Note the use of back-tick character instead of single quote character

```ts
// src/app/weather/weather.service.ts
  private getCurrentWeatherHelper(uriParams: string): Observable<ICurrentWeather> {
      return this.httpClient
        .get<ICurrentWeatherData>(
          `${environment.baseUrl}api.openweathermap.org/data/2.5/weather?` +
            `${uriParams}&appid=${environment.appId}`            
        )
        .pipe(map(data => this.transformToICurrentWeather(data)))
  }
``` 

* As a positive side effect `getCurrentWeatherHelper` adheres to the Open/Closed principle, becuase it is open to extension by our ability to change the function's behaviour by supplying different `uriParams` and is closed to modification, becuase it won't have to be changed frequently
  * To demonstrate this point, let's implement a new function to get the current weather by lattitude and longitude
* Implement `getCurrentWeatherByCoords`
> You can see `getCurrentWeatherHelper` can easily be extended without any modification

```ts
// src/app/weather/weather.service.ts
  getCurrentWeatherByCoords(coords: Coordinates): Observable<ICurrentWeather> {
    const uriParams = `lat=${coords.latitude}&lon=${coords.longitude}`
    return this.getCurrentWeatherHelper(uriParams)
  }
```

> End details 2.2.0
</details>

<details>
<summary> 2.3.0 Implementing search </summary>

* Connect the new service method to the input field

1. Update `citySearch` to inject the `weatherService` and subscribe to input changes

```ts
// src/app/city-search/city-search.component.ts
import { WeatherService } from '../weather/weather.service'
...
export class CitySearchComponent implements OnInit {
  search = new FormControl()

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.search.valueChanges
      .subscribe()
  }
}
```

2. We are treating all input as `string` at this point
  * User input can be a city, zip code or
  * a city and country code or
  * zip code and country code separated by a comma
3. While city or zip code is required and country code is optional. 
  * We can use the `String.split` function to parse any potential comma separated input and then trim any whitespace out from the beginning and the end of the string with `String trim`
  * We then assure that we trim all parts of the string by iterating over them with `Array map`
  * We then deal with the optional parameter with the ternary operator ? , only passing in a value if it exists, otherwise leaving it undefined
4. Implement the search handler.

```ts
// src/app/city-search/city-search.component.ts
    this.search.valueChanges
      .subscribe((searchValue: string) => {
        if (searchValue) {
          const userInput = searchValue.split(',').map(s => s.trim())
          this.weatherService.getCurrentWeather(
            userInput[0],
            userInput.length > 1 ? userInput[1] : undefined
          ).subscribe(data => (console.log(data)))
        }
      })
```

5. Add the hint for the user about the optional country functionality:

```html
<!-- src/app/city-search/city-search.component.html -->
...
  <mat-form-field>
    ...
    <mat-hint>Specify country code like 'Paris, US'</mat-hint>
  </mat-form-field>
...
```

6. At this point the subscribe handler will make calls to the server and log its output to the console

> End details 2.3.0
</details>

<details>
<summary>2.4.0 Limiting user inputs with throttle/deboumce</summary>

* We submit the request to the server with every keystroke. This is not desirable behaviour, becuase it can lead to bad user Experience
* Drain battery life, result in wasted network requests and create performance issues both in server and client side
* Users make typos, they can change thier mind about what they are inputting and rarely ever, the first few characters of information input result in useful results

* We can still listen to every keystroke but we don't have to react to every keystroke.
* We can do this by leveraging throttle/debounce. We can limit number of events generated to a predetermined interval and still maintain the `type-as-you-search` functionality

> Note: `throttle` and `debounce` are not functional equvivalents. Their behaviour is changed from framework to framework.
> In addition to throtlling, we expect to capture the last input that the user has typed.
> In `lodash` framework `throttle` function fullfills this requirement
> In `RxJS` debounce fulfills it. This discrepancy maybe fixed in the future

1. Inject throttling into the observable stream usin `RxJS/debounceTime`,  implement this with `pipe`
  * `debounceTime` will at a maximum run a search every second
  * Also run a last search after the user has stopped typing
  * In comparison `RxJS/throttleTime` will only run a search every second, on the second, and will not necessarily cature the last few characters the user may have input.

```ts
// src/app/city-search/city-search.component.ts
import { debounceTime } from 'rxjs/operators'

  this.search.valueChanges
    .pipe(debounceTime(1000))
    .subscribe(...)
```

> End details 2.4.0
</details>

<details>
<summary>2.5.0 Implementing input validation and error messaging</summary>

* `FormControl` is highly customizable. It allows you to set a default value, add validators or listen to change on blur, change and submit events
* Ex: `new FormControl('Bethesda', { updateOn: 'submit' })`
* We won't be initializing the `FormControl` with a value, but we need to implement a validator to disallow one character inputs

1. Import `Validators` from `@angular/forms` and Modify `FormControl` to add a minimum length validator

```ts
// src/app/city-search/city-search.component.ts
import { FormControl, Validators } from '@angular/forms'

search = new FormControl('', [Validators.minLength(2)])
```
2. Modify the template to show validator error message

```html
<!-- src/app/city-search/city-search.component.html -->
<form>
  <mat-form-field>
    ...
    <mat-error *ngIf="search.invalid">
      Type more than one character to search
    </mat-error>
  </mat-form-field>
</form>

```

3. If you are handling different kinds of errors, the `hasError` syntax in the template can get repetitive. You may implement more scalable solution that can be customized through below code

```ts
// Just an example. It is not implemented in our app

@Component({
  template: `<mat-error *ngIf="search.invalid">{{getErrorMessage()}}</mat-error>`
})
getErrorMessage() {
  return this.search.hasError('minLength') ? 'Type more than one character to search' : '';
}
```

4. Modify the `search` function to not execute a search with invalid input

```ts
// src/app/city-search/city-search.component.ts
    this.search.valueChanges
      .pipe(debounceTime(1000))
      .subscribe((searchValue: string) => {
        if (!this.search.invalid) {
          ...
        }
```

> End details 2.5.0
</details>

<details>
<summary>2.6.0 2-Way binding[highly not recommended]</summary>

* Alternative template: For testing later you can comment it out
  * > Note: `[()]` "box of bananas" 2-way data binding syntax being used with `ngModel`

```bash
npx ng g c citySearchTpldriven -m app.module
```

```html
<!-- src/app/city-search-tpldriven/city-search-tpldriven.component.html -->
...
  <input matInput placeholder="Enter city or zip" aria-label="City or Zip" [(ngModel)]="model.search" (ngModelChange)="doSearch($event)" minlength="2" name="search" #search="ngModel">
...
  <mat-error *ngIf="search.invalid">
    Type more than one character to search
  </mat-error>  
```
>  As you can see most of the logic is implemented in the template. And the programmer is required to maintain an active mental model of what's in the template and the controller and switch back and forth between the 2 files to make changes to event handlers and validation logic. We have also lost the input limiting and the ability to prevent service calls when the input is in an invalid state.

```ts
// src/app/city-search-tpldriven/city-search-tpldriven.component.ts
import { NgModel, Validators } from '@angular/forms'
...
export class CitySearchTpldrivenComponent implements OnInit {
  model = {
    search: '',
  }
  constructor() {}

  ngOnInit() {}

  doSearch(searchValue) {
    const userInput = searchValue.split(',').map(s => s.trim())
    this.weatherService
      .getCurrentWeather(userInput[0], userInput.length > 1 ? userInput[1] : undefined)
      .subscribe(data => console.log(data))
  }
}
```

* Final code

```html
<!-- src/app/city-search-tpldriven/city-search-tpldriven.component.html -->
<form style="margin-bottom: 32px">
  <mat-form-field>
    <mat-icon matPrefix>search</mat-icon>
    <input matInput placeholder="Enter city or zip" aria-label="City or Zip" [(ngModel)]="model.search" (ngModelChange)="doSearch($event)"
      minlength="2" name="search" #search="ngModel">
    <mat-hint>Specify country code like 'Paris, US'</mat-hint>
    <mat-error *ngIf="search.invalid">
      Type more than one character to search
    </mat-error>
  </mat-form-field>
</form>
```
```ts
// src/app/city-search-tpldriven/city-search-tpldriven.component.ts

import { Component, OnInit } from '@angular/core';
import { NgModel, Validators } from '@angular/forms'
import { WeatherService } from '../weather/weather.service'

@Component({
  selector: 'app-city-searh-tpldriven',
  templateUrl: './city-searh-tpldriven.component.html',
  styleUrls: ['./city-searh-tpldriven.component.css']
})
export class CitySearhTpldrivenComponent implements OnInit {
  model = {
    search: '',
  }
  constructor(private weatherService: WeatherService) {}

  ngOnInit() {}

  doSearch(searchValue) {
    const userInput = searchValue.split(',').map(s => s.trim())
    this.weatherService
      .getCurrentWeather(userInput[0], userInput.length > 1 ? userInput[1] : undefined)
      .subscribe(data => console.log(data))
  }

}

```

> End details 2.6.0
</details>

<details>
<summary>2.7.0 Enabling component interaction</summary>

* In order to update current weather information we need the `city-search` component to interact with `current-weather` component
* There are 4 main techniques
  * **Global events:  Not recommended. Avoid at all costs**
  * Parent components passing information to children components
    * > Your child components should be completely unaware of its parent. This is the key to creating reusable components
    * Leveraging `AppComponent` as a parent and let the `AppModule` orchestrate the data
    * `CitySearchComponent` exposes an `EventEmitter` through an `@Output` property
    > Refer Angular 6 for Enterprise ready web applications
  * Parent components listening for information bubbling up from children components
    * > Refer Angular 6 for Enterprise ready web applications 
  * **sibling, parent or children components within a module that work off of similar data streams** : Highly recommended

1. **sibling, parent or children components within a module that work off of similar data streams** : Highly recommended
  * Main reason for componnets to interact is to send or recieve updates to data either provided by the user or received from the server
  * In Angular your services expose 
    * `RxJS.Observable` endpoints, which are data streams that your componentss can subscribe to.
    * `RxJS.Observer` compliments `RxJS.Observable` as consumer of events emitted by `Observable`
    * `RxJS.Subject` brings he 2 sets of functionality together, in an easy to work with object.
> You can essentially describe a stream that belongs to a particular set of data, such as the current weather data that is being displayed, with subjects

```ts
/* We haven't put this code since we used BehaviorSubject */
/* src/app/weather/weather.service.ts */
import { Subject } from 'rxjs'
...
export class WeatherService implements IWeatherService {
  currentWeather: Subject<ICurrentWeather>
  ...
}
``` 

* `currentWeather` is still a data stream and does not simply represent one data point. You can subscribe to changes to `currentWeather` data with subscribe, or you can publish changes to it as follows:

```ts
/* Example */
currentWeather.subscribe(data => (this.current = data))
currentWeather.next(newData)
```

> The default behavior of `Subject` is very generic like pub/sub mechanisms such as jQuery events.
**Using `Subject` is not useful in Asynchronous world**: since components are loaded and unloaded in unpredictable ways

## There are 3 different types subjects[Very important]

1. `ReplaySubject` It will remember and cache all data points occured within the data stream so that a subscriber can replay all events at any given time
2. `BehaviorSubject` It remembers only the last data point, while continuing to listen for new data points
3. `AsyncSubject` This is for one-time only events that are not expected to reoccur

**Be careful with `ReplaySubject`, it can have severe memory and performance implications on your application: Use with care**

* In the case of `current-weather`, we are only interested in displaying the latest weather data received, but through user input or other events we are open to receiving new data, so we can keep the `current-weather` component up to date.
* The `BehaviorSubject` would appropriate mechanism to meet our needs

1. Define `BehaviorSubject` in `weatherService` and set a default value

```ts
/* app/src/weather/weather.service.ts */
import { BehaviorSubject } from 'rxjs'
...
export class WeatherService implements IWeatherService {
  currentWeather = new BehaviorSubject<ICurrentWeather>({
    city: '--',
    country: '--',
    date: Date.now(),
    image: '',
    temperature: 0,
    description: '',
  })
  ...
}
```

2. Update the `current-weather` component to subscribe the new `BehaviorSubject`

```ts
/* app/src/current-weather/current-weather.component.ts */ 
...
ngOnInit() {
  this.weatherService.currentWeather.subscribe(data => (this.current = data ))
}
...
```

3. Update the `city-search` component to publish the data it recieves to `BehaviorSubject`

```ts
/* app/src/city-search/city-search.component.ts */
...
this.weatherService
  .getCurrentWeather(
    userInput[0],
    userInput.length > 1 ? userInput[1] : undefined
  )
  .subscribe(data => this.weatherService.currentWeather.next(data))
...  
```

4. Test your app with `npm start`
    
5. Optimize more

```ts
/* app/src/city-search/city-search.component.ts */
this.weatherService
  .updateCurrentWeather(
     userInput[0],
     userInput.length > 1 ? userInput[1] : undefined
  )
...
```  

```ts
/* app/src/weather/weather.service.ts */
...
export class WeatherService implements IWeatherService {
  ...

  updateCurrentWeather(search: string | number, country?: string) {
    this.getCurrentWeather(search, country).subscribe(weather =>
      this.currentWeather.next(weather)
    )
  }
  ...
}  
```      

6. Move City search capability task to done in waffle.io

> End details 2.7.0
</details>

**Finally the App is ready**