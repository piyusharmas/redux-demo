# Vite + React + Redux — Todo Example

An approachable starter demonstrating a Vite + React app using Redux Toolkit. It implements a minimal todo feature to show a feature-based project layout and common Redux patterns.

## Table of contents
 - [What the project does](#what-the-project-does)
 - [Why this project is useful](#why-this-project-is-useful)
 - [Quick start](#quick-start)
 - [Project structure](#project-structure)
 - [Usage examples](#usage-examples)
 - [Where to get help](#where-to-get-help)
 - [Contributing & maintainers](#contributing--maintainers)
 - [Notes & known issues](#notes--known-issues)

## What the project does

This repository provides a small Vite + React application with Redux Toolkit state management. It shows how to structure a feature (`todo`) with a slice, components (`AddToDo`, `ToDo`), and a store wired in `src/app/store.js`.

## Why this project is useful

 - Fast iteration using Vite's dev server.
 - A minimal, modern Redux example using `@reduxjs/toolkit` and `react-redux`.
 - Clean feature-based layout to help you bootstrap similar apps quickly.

## Quick start

### Prerequisites

 - Node.js v14+ (recommended: v18+)
 - npm or yarn

### Install

```bash
git clone <repo-url>
cd vite-project
npm install
# or
yarn install
```

### Development

```bash
npm run dev
# or
yarn dev
```

Open the URL Vite prints (commonly http://localhost:5173).

### Build

```bash
npm run build
# or
yarn build
```

## Project structure

 - `public/` — static assets
 - `src/` — source files
	 - `app/store.js` — Redux store configuration
	 - `features/todo/todoSlice.js` — Todo slice and reducers
	 - `components/` — React UI components (`AddToDo.jsx`, `ToDo.jsx`)

See the source files for implementation details.

## Usage examples

The app mounts `App` (which provides the store) in `src/main.jsx` and renders the `ToDo` component from `src/components/ToDo.jsx`.

Adding a todo from a component:

```javascript
import { useDispatch } from 'react-redux'
import { addTodo } from './features/todo/todoSlice'

function Add() {
	const dispatch = useDispatch()
	const onAdd = (task) => dispatch(addTodo(task))
}
```

Selecting todos from the store:

```javascript
import { useSelector } from 'react-redux'

function List() {
	const todos = useSelector((state) => state.todos)
	return (
		<ul>
			{todos.map((t) => (
				<li key={t.id}>{t.task}</li>
			))}
		</ul>
	)
}
```

The real components are in `src/components/` — `ToDo` renders `AddToDo` and the list.

## Where to get help

 - Open an issue in this repository for bugs or feature requests.
 - Official docs:
	 - https://vitejs.dev/
	 - https://reactjs.org/
	 - https://redux-toolkit.js.org/

## Contributing & maintainers

Contributions are welcome. Please open issues or pull requests. For contribution guidelines, see [CONTRIBUTING.md](CONTRIBUTING.md).

Maintainer: (replace with name)

## Notes & known issues

 - Quick developer note: `src/features/todo/todoSlice.js` currently contains issues in the `markAsDone` and `deleteTodo` reducers — see the file for details: [src/features/todo/todoSlice.js](src/features/todo/todoSlice.js).

	 - `markAsDone` uses `map` but does not return the updated array entries; it should return mapped items or mutate a found item correctly.
	 - `deleteTodo` uses `filter` but the predicate does not return a boolean; it should `return todo.id !== action.payload`.

If you want, I can fix these two reducers and run linting in a follow-up change.

---

If you'd like me to also create `CONTRIBUTING.md`, add a `LICENSE`, or fix the slice now, tell me which and I'll proceed.
