# CraftonZadanieTestowe

Recruitment test task

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Tech Stack

This project is built with the following technologies:

- **Vue 3** – Progressive JavaScript framework for building user interfaces.
- **Vite** – Fast and modern build tool optimized for Vue 3 development.
- **TypeScript** – Adds static typing for more robust and maintainable code.
- **Pinia** – State management library, providing a modern alternative to Vuex.
- **Vitest** – Unit testing framework with fast execution and great Vue support.
- **ESLint** – Linting tool to enforce code style and catch errors.
- **Prettier** – Code formatter to ensure consistent code styling.
- **TailwindCSS** – Utility-first CSS framework for rapid UI development.

## Utils

- **VeeValidate** – Form validation library for Vue, making input handling simpler and more reliable.
- **Zod** – TypeScript-first schema validation library, often combined with VeeValidate for robust form validation.
- **Swiper** – Modern touch slider for implementing responsive and interactive carousels.

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## Widgets and Components

### BaseIcon

`BaseIcon` is a reusable component that allows you to render SVG icons dynamically.  
It works with an automatic import system:

1. Place your SVG icon inside the `assets/icons` folder.
2. Add the icon name to `components.types.ts` under `IconNames`.
3. Use the icon anywhere in your components via the `BaseIcon` component.

Example:

```vue
<BaseIcon name="exampleIcon" />
```

### SectionRef

`SectionRef` is a helper component that automatically detects when a user scrolls to a specific section.

- It updates the value in the `globalStore` whenever the section comes into view.
- To add a new section to the navbar, simply assign a unique `id` to the section and register it in the `globalStore.NavbarSections`.

Example:

```vue
<SectionRef id="aboutSection">
  <!-- Section content -->
</SectionRef>
```
