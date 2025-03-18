# Front-end React + Vite

[React.js](https://react.dev/) 
[Vite](https://vitejs.dev/) 

[Demo](https://todo-alpha-list.vercel.app/)

## Getting Started

1. Clone this repo.
2. Run `npm install` to install dependencies.
3. Run `npm run dev`.

## Scripts

- `npm run dev` - Run in development mode
- `npm run build` - Build the application for production

## File Structure

```raw
.
├── 📂 pages
├── 📂 components
├── 📂 hooks
├── 📂 public
├── 📂 server
├── 📂 assets
    └── * css
├── 📂 @types
├── 📂 utils
├── .gitignore
├── app.vue
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── nuxt.config.ts

Notes:
📂: Folder
⚛️: related folder
```

## File & Folder Naming

- In general, **kebab-case** is prefered for folder & file naming.
- Use **kebab-case** and **.js** extension for react component file naming.  
  You can create component file directly like `some-component.vue`, or create a folder `some-component/index.vue`.
- Use **kebab-case** and **.spec.js** for test file naming.

## Tools

- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **TypeScript Utility**: [Zod](https://zod.dev/?id=installation)

## Naming Conventions

- **Variable Name:**
  - Should be camelCase.
  - For boolean variable, use "is", "can", or "has" prefix.  
    Example: `isExpired`, `isDeleted`, `canEditSomething`, `hasSomething`.
- **Function Name:**
  - Should be camelCase.
  - Should starts with verb 1, and don't abbreviate that verb.  
    ✅ Correct example: `createAccount`, `validateForm`  
    ❌ Incorrect example: `creatingAccount`, `vldtForm`
  - For event-handler function, you can use "on" or "handle" prefix.  
    Example: `onScroll`, `handleScroll`, `onSave`, `handleSave`
  - For utility function, it is okay for not using verb 1 prefix.  
    Example: `numeral(...)`, `tooltip(...)`

