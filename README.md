# Angular 16 Dashboard

User dashboard panel.

## Requirements

Make sure you have the following programs installed before running the application:

- [Node (v22.2.0)](https://nodejs.org/en)
- [Angular CLI (v16.2.10)](https://angular.io/cli)

## Development server

Run the next command for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

```bash
ng serve
```

## Code scaffolding

Run the next command for generate a new component with lazy loading.

```bash
ng generate module modules/[name-module] --route [name-path] --module [name-module-main]
ng g m modules/mod# --route mod# --module app.module.ts

```

## Build

Run the next command for build the project. The build artifacts will be stored in the `dist/` directory.

```bash
ng build
```

## Running unit tests

Run the next command for execute the unit tests via [Karma](https://karma-runner.github.io).

```bash
ng test
```

## Running end-to-end tests

Run the next command for execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

```bash
ng e2e
```

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Architecture

```bash

src/
|-- app/
|   |-- core/
|   |-- shared/
|   |   |-- components/
|   |   |-- directives/
|   |   |-- pipes/
|   |   |-- guards/
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

