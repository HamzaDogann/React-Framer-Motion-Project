# Framer Motion Usage Guide

## What is Framer Motion?

Framer Motion is a library for creating advanced animations and motion controls for React applications. It integrates seamlessly with React components and provides a rich API for creating animations.

## Key Concepts

### 1. Motion Component

The `motion` component enables animation and motion features on HTML elements (`div`, `h1`, `ul`, etc.) or React components.

```jsx
import { motion } from "framer-motion";

const ExampleComponent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      Content
    </motion.div>
  );
};
```
### 2. Animate Presence
AnimatePresence manages animation transitions when components are added or removed from the DOM.

 ```jsx
import { motion, AnimatePresence } from "framer-motion";

const ExampleComponent = ({ isVisible }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          Content
        </motion.div>
      )}
    </AnimatePresence>
  );
};
```

### 3. Variants
Variants define multiple animation states (e.g., rest, hover, pressed) within a single component.

```jsx

import { motion } from "framer-motion";

const Button = () => {
  const buttonVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.1 },
    pressed: { scale: 0.95 },
  };

  return (
    <motion.button
      variants={buttonVariants}
      whileHover="hover"
      whileTap="pressed"
    >
      Click me
    </motion.button>
  );
};
```

## Practical Methods and Uses

### 1. Hover Effects
Apply animation effects when hovering over an element using whileHover.

```jsx
<motion.div whileHover={{ scale: 1.1 }}>Hover me</motion.div>
```

### 2. Delay and Stagger Effects
Control animation start times and sequences with delay and staggerChildren.

```jsx
<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
  Fade in after delay
</motion.div>
```

### 2. Transition Effects
Define transition durations for smooth animation transitions.

```jsx
<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
  Fade in with transition
</motion.div>
```

✅ For more features, you can review the project I made and the Framer Motion documentation.

https://www.framer.com/motion/


