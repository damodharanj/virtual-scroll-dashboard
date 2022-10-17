# DashboardVirtualScroll

## API
* /getPanelItems - returns Array\<PanelItem\> - Refer type in APIService

## Components & Services

### Components
* Card (pure)
* Card-Dialog (pure)
* Video-player (pure)

### Services
* APIService

## Data Flow

* The fetching of data takes place in the APIService
* The sorting & filter utils are written in the APIService
* The Cards-List component has the APIService injected & all other components follow 
## Modular Separation
* All the pure components to be developed in parallel
*  The service is to be developed in sync with changes in the API request / response

## Test cases
* Unit cases for Card, Dialog, Video-Player, Cards-List - for the UI / UX grammar
* Screenshot comparison for previous release compliance
* Responsive UI testing for breakpoints
* Performance / benchmark test cases Cards-List
	* No. of rows in DOM when using virtual scroll
	* Maximum count of array elements the list can render etc
	* Number of simulataneous video tags that can play without crashing the tab

## Libraries used
* "@faker-js/faker": "^7.6.0"
	* Generate fake data for API simulation
* "@lithiumjs/ngx-virtual-scroll": "^0.2.2"
	* Virytal scrolling library for boosting scroll performance
* "video.js": "^7.20.3"
	* Alternative video tag skin for better customization

## Bugs / Limitations
* Sort is supported for date
* Filter is supported for usernames
* Stop multiple video tags from playing simulataneously 
* Virtual scroll does not trigger for certain smaller breakpoints
* Sorting requires new Array instance - library limitation, but the memory is replaced and not accumulated
* Body scroll to be handled in virtual scroll - needs details DOM surgery in complaince with the virtual scroll library
* Icons are taken from material instead of original
* Certain UI / UX yet to be polished pixel perfect (dimensions & colors)


-----

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
