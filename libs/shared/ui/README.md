# Shared/ui Module

This module consists of a collection of components shared across the entire application to promote better separation of concerns and optimize performance in CI/CD.

**Note:** To use the components created in this module, it is necessary to export it in the `index.ts` file
Ex: `export * from './lib/my-component/my-component.component';`

## Command to create this module

```bash
npx nx generate @portal-ascepa/angular-plugin:module --name=ui
```

## Command to run unit tests

```bash
nx test ui
```
