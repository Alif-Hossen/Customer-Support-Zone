1. What is JSX, and why is it used?
      JSX (JavaScript XML) is a syntax extension for JavaScript. Fundamentally, it allows us to write HTML-like markup directly inside a JavaScript file.
      Wait, is it HTML? No, it’s not HTML. It’s syntactic sugar that looks and feels like HTML, but behind the scenes, it gets converted (or "transpiled") into
      regular JavaScript function calls (React.createElement()) that React can understand.  
      Why use it? JSX makes React code incredibly readable and intuitive. Instead of manually creating every DOM element using complex JavaScript methods, you can       define your UI structure and logic in the same place. It's React's way of blending structure (markup) and behavior (logic) efficiently, making complex UIs         easier to visualize and maintain.

2. What is the difference between State and Props?
      State and Props are two core concepts used to store and manage data in a React component, but they handle different responsibilities:
      Feature Props (Properties) State Origin Passed from a parent component. Managed internally by the component itself. Mutabilty Immutable (Read-Only). A child       component cannot change its received props. Mutable. It can be changed by the component using a dedicated function (like useState). Purpose
      Used to pass data and configurations down the component tree. Used to handle data that changes over time or drives interactivity (e.g., toggling a menu,
      scoring a game). Analogy A function's arguments. A component's internal memory or variables.

3. What is the useState hook, and how does it work?
      The useState hook is a function that allows functional components to manage and update state (internal, mutable data). Before hooks, only class components
      could manage state. How it works:
      Declaration: When you call useState, it returns a pair: the current state value and a state setter function.
      const [count, setCount] = useState(0);
      count is the current value (e.g., 0).
      setCount is the function you must use to update the value.
      Updating: When you call the setter function (setCount(1) or setCount(count + 1)), React does two critical things:
      It updates the state variable (count).
      It tells the component to re-render (re-execute its function body) with the new state value. This re-rendering is what updates the UI.
   
5. How can you share state between components in React?
      Sharing state is one of the biggest challenges in React, but there's a clear methodology for it. Since data flows down (via props), we use a technique             called State Lifting (or lifting state up).
      The core idea is to move the state from the component where it lives to the nearest common ancestor of all the components that need that state.
      Lift Up: Identify the state (e.g., theme state). Move it to the parent component (e.g., App.jsx).
      Pass Down (Data): Pass the state value (theme) down to the consuming child components using props.
      Pass Down (Functions): Pass the state's setter function (setTheme) down to the child components that need to change the state.
      For global state needed across many components (like user authentication or internationalization), you would typically use more advanced solutions like            React Context or dedicated state management libraries like Redux or Zustand.

6. How is event handling done in React?
      Event handling in React is very similar to standard HTML event handling, but with a few key differences:
      CamelCase: All event names are written in camelCase (e.g., onClick instead of onclick, onChange instead of onchange).
      Function, Not String: Instead of passing a string of JavaScript code (like in plain HTML: onclick="doSomething()"), you pass an actual JavaScript function         reference inside curly braces.
      <button onClick={handleClick}>Click Me</button>
      // The function is defined elsewhere:
      // const handleClick = () => { console.log('Clicked!'); };
      Synthetic Event: React normalizes browser events into something called a Synthetic Event. This ensures that event behavior is consistent across all                 browsers, preventing cross-browser compatibility issues. The event object (e) is passed automatically to the handler function, just like in vanilla                JavaScript.
      <input onChange={(e) => console.log(e.target.value)} />



















































# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
