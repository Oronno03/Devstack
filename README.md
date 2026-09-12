# Dev Stack

Dev Stack is a responsive React website where users can explore different web development technologies and build their own technology stack. Users can add technologies to their stack, remove them, and manage their selected technologies easily.

## Technologies Used

* React.js
* TypeScript
* Tailwind CSS
* React-Toastify
* JSON
* Vite

## Features

1. **Technology Explorer**
   Browse different technologies with their name, category, description, difficulty level, rating, and icon.

2. **Build Your Own Stack**
   Users can add technologies to their personal stack and remove individual technologies or clear the entire stack.

3. **Responsive & Interactive UI**
   The website is fully responsive and provides toast notifications for actions such as adding, removing, and attempting to add duplicate technologies.

---

# React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript. React uses JSX to make it easier to create and understand the structure of UI components.

### 2. What is the difference between props and state?

**Props** are used to pass data from a parent component to a child component. They are read-only.

**State** is data managed inside a component that can change over time and cause the UI to update.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` allows us to create and update state in a React component. In this project, I used it to store the selected technologies in the user's stack and update the UI when technologies are added or removed.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` is used to perform side effects or run code when certain values change. In this project, I used it in the technology card to check whether a technology is already selected whenever `selectedTechnologies` changes. I used React Suspense and a Promise to load the JSON data instead of `useEffect`.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

React uses the `key` to identify each item in a list. A unique key helps React efficiently track which items have been added, removed, or changed.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI depending on a condition.

In this project, I used it in the **Your Stack** section. When no technology is selected, an empty-stack message is displayed. When technologies are selected, the selected items are displayed instead.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent passes data to a child through **props**. A child can send data or actions back to the parent using **prop lifting**, where the parent passes a function as a prop and the child calls that function to update the parent's state.

