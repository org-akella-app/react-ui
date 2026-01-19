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

## Components

This library includes a comprehensive set of components. Below is the list of available components with links to their API documentation (based on shadcn/ui).

| Component       | API Documentation                                             |
| :-------------- | :------------------------------------------------------------ |
| Accordion       | [Docs](https://ui.shadcn.com/docs/components/accordion)       |
| Alert Dialog    | [Docs](https://ui.shadcn.com/docs/components/alert-dialog)    |
| Alert           | [Docs](https://ui.shadcn.com/docs/components/alert)           |
| App Logo        | Custom Component                                              |
| Aspect Ratio    | [Docs](https://ui.shadcn.com/docs/components/aspect-ratio)    |
| Avatar          | [Docs](https://ui.shadcn.com/docs/components/avatar)          |
| Badge           | [Docs](https://ui.shadcn.com/docs/components/badge)           |
| Breadcrumb      | [Docs](https://ui.shadcn.com/docs/components/breadcrumb)      |
| Button Group    | [Docs](https://ui.shadcn.com/docs/components/button-group)    |
| Button          | [Docs](https://ui.shadcn.com/docs/components/button)          |
| Calendar        | [Docs](https://ui.shadcn.com/docs/components/calendar)        |
| Card            | [Docs](https://ui.shadcn.com/docs/components/card)            |
| Carousel        | [Docs](https://ui.shadcn.com/docs/components/carousel)        |
| Chart           | [Docs](https://ui.shadcn.com/docs/components/chart)           |
| Checkbox        | [Docs](https://ui.shadcn.com/docs/components/checkbox)        |
| Collapsible     | [Docs](https://ui.shadcn.com/docs/components/collapsible)     |
| Command         | [Docs](https://ui.shadcn.com/docs/components/command)         |
| Context Menu    | [Docs](https://ui.shadcn.com/docs/components/context-menu)    |
| Dialog          | [Docs](https://ui.shadcn.com/docs/components/dialog)          |
| Drawer          | [Docs](https://ui.shadcn.com/docs/components/drawer)          |
| Dropdown Menu   | [Docs](https://ui.shadcn.com/docs/components/dropdown-menu)   |
| Empty           | [Docs](https://ui.shadcn.com/docs/components/empty)           |
| Field           | [Docs](https://ui.shadcn.com/docs/components/field)           |
| Form            | [Docs](https://ui.shadcn.com/docs/components/form)            |
| Hover Card      | [Docs](https://ui.shadcn.com/docs/components/hover-card)      |
| Input Group     | [Docs](https://ui.shadcn.com/docs/components/input-otp)       |
| Input OTP       | [Docs](https://ui.shadcn.com/docs/components/input-otp)       |
| Input           | [Docs](https://ui.shadcn.com/docs/components/input)           |
| Item            | [Docs](https://ui.shadcn.com/docs/components/item)            |
| Kbd             | [Docs](https://ui.shadcn.com/docs/components/kbd)             |
| Label           | [Docs](https://ui.shadcn.com/docs/components/label)           |
| Menubar         | [Docs](https://ui.shadcn.com/docs/components/menubar)         |
| Native Select   | [Docs](https://ui.shadcn.com/docs/components/native-select)   |
| Navigation Menu | [Docs](https://ui.shadcn.com/docs/components/navigation-menu) |
| Pagination      | [Docs](https://ui.shadcn.com/docs/components/pagination)      |
| Popover         | [Docs](https://ui.shadcn.com/docs/components/popover)         |
| Progress        | [Docs](https://ui.shadcn.com/docs/components/progress)        |
| Radio Group     | [Docs](https://ui.shadcn.com/docs/components/radio-group)     |
| Scroll Area     | [Docs](https://ui.shadcn.com/docs/components/scroll-area)     |
| Select          | [Docs](https://ui.shadcn.com/docs/components/select)          |
| Separator       | [Docs](https://ui.shadcn.com/docs/components/separator)       |
| Sheet           | [Docs](https://ui.shadcn.com/docs/components/sheet)           |
| Sidebar         | [Docs](https://ui.shadcn.com/docs/components/sidebar)         |
| Skeleton        | [Docs](https://ui.shadcn.com/docs/components/skeleton)        |
| Slider          | [Docs](https://ui.shadcn.com/docs/components/slider)          |
| Sonner          | [Docs](https://ui.shadcn.com/docs/components/sonner)          |
| Spinner         | [Docs](https://ui.shadcn.com/docs/components/spinner)         |
| Switch          | [Docs](https://ui.shadcn.com/docs/components/switch)          |
| Table           | [Docs](https://ui.shadcn.com/docs/components/table)           |
| Tabs            | [Docs](https://ui.shadcn.com/docs/components/tabs)            |
| Textarea        | [Docs](https://ui.shadcn.com/docs/components/textarea)        |
| Toggle Group    | [Docs](https://ui.shadcn.com/docs/components/toggle-group)    |
| Toggle          | [Docs](https://ui.shadcn.com/docs/components/toggle)          |
| Tooltip         | [Docs](https://ui.shadcn.com/docs/components/tooltip)         |

## Acknowledgments

This project is built upon the incredible work of the open-source community. Special thanks to the following projects:

- **[shadcn/ui](https://ui.shadcn.com)** - For the beautiful component design and accessible primitives.
- **[Radix UI](https://www.radix-ui.com)** - For the headless, accessible UI primitives that power many components.
- **[Tailwind CSS](https://tailwindcss.com)** - For the utility-first CSS framework.
- **[Lucide](https://lucide.dev)** - For the beautiful and consistent icon set.
- **[Recharts](https://recharts.org)** - For the composable charting library.
- **[React Hook Form](https://react-hook-form.com)** - For performant, flexible, and extensible forms.
- **[Zod](https://zod.dev)** - For TypeScript-first schema declaration and validation.
- **[CMDK](https://cmdk.paco.me)** - For the fast, composable command menu.
- **[Embla Carousel](https://www.embla-carousel.com)** - For the lightweight carousel library.
- **[Vaul](https://github.com/emilkowalski/vaul)** - For the unstyled drawer component.
- **[Sonner](https://sonner.emilkowalski.com)** - For the opinionated toast component.
