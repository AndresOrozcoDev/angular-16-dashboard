# Angular 16 Dashboard

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.10.

## Requirements

Asegúrate de tener instalados los siguientes programas antes de ejecutar la aplicación:

- [Node (v22.2.0)](https://nodejs.org/en)
- [Angular CLI (v16.2.10)](https://angular.io/cli)

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

## Architecture

```bash

src/
|-- app/
|   |-- core/
|   |   |-- services/
|   |   |-- interceptors/
|   |   |-- guards/
|   |-- shared/
|   |   |-- components/
|   |   |-- directives/
|   |   |-- pipes/
|   |-- modules/
|   |   |-- feature-module1/
|   |   |   |-- components/
|   |   |   |-- services/
|   |   |   |-- feature1-routing.module.ts
|   |   |   |-- feature1.module.ts
|   |   |-- feature-module2/
|   |   |   |-- components/
|   |   |   |-- services/
|   |   |   |-- feature2-routing.module.ts
|   |   |   |-- feature2.module.ts
|   |-- app-routing.module.ts
|   |-- app.component.ts
|   |-- app.module.ts
|-- assets/
|-- environments/

```

## Technology Stack and Features

- ⚡ [**Angular**](https://fastapi.tiangolo.com) for the frontend version 16.2.10.
    - 🎨 [Boostrap 5](https://getbootstrap.com/) for styles.
    - 🔍 [Font awesome](https://fontawesome.com/search?m=free&o=r) for icons.
    - 🧰 [Google fonts](https://fonts.google.com/specimen/DM+Sans) for family font.
    - ✅ [Karma](https://karma-runner.github.io) for unit test.
- 🐋 [**Docker Compose**](https://www.docker.com) for development and production.

