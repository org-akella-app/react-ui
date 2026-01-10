# @akella.app/react-ui

A collection of high-quality, reusable React UI components built on top of [shadcn/ui](https://ui.shadcn.com) and powered by Tailwind CSS. Designed for modern web applications at [akella.app](https://akella.app).

## Installation

Install the package via npm:

```bash
npm install @akella.app/react-ui
```

## Usage

Import and use components in your React application:

```tsx
import { Button } from "@akella.app/react-ui";

export function Example() {
  return <Button>Click me</Button>;
}
```

## Tailwind Configuration

This package is optimized for Tailwind CSS v4 and utilizes utility classes. Ensure Tailwind is properly configured in your consuming project.

Add the following to your project's main CSS file:

```css
@import "tailwindcss";
@import "@akella.app/react-ui/styles.css";
```

The `@akella.app/react-ui/styles.css` file includes the `@source` directive, allowing Tailwind to scan and generate styles for the components within this package.
