// lib/posts.ts

export interface Post {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  image: string;
  content: string;
  featured?: string;
}

export const dummyPosts: Post[] = [
  {
    id: 1,
    slug: 'nextjs-guide',
    title: 'Next.js Guide: 6 Powerful Tips for Modern Web Development',
    excerpt: 'Discover essential techniques for harnessing Next.js, from static generation to secure environment variables, to create fast, scalable applications.',
    date: '2024-03-01',
    readTime: '15 min',
    tags: ['nextjs', 'webdev'],
    image: 'https://media.licdn.com/dms/image/v2/D4D12AQFJWfUQaQ1qPg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1675674296261?e=2147483647&v=beta&t=P8Jq3VX9Y4XbyaI7Y1CwViZVcW3LzVONrntTaogyL94',
    content: `
# Next.js Guide: 6 Powerful Tips for Modern Web Development

Next.js has revolutionized web development by combining the benefits of static site generation with the flexibility of server-side rendering. This guide presents six essential tips to help you build dynamic, efficient, and SEO-friendly applications.

## 1. Leverage Static Generation
Static Generation pre-renders your pages at build time, providing faster load times and improved SEO.
- **Benefits**: 
  - Instant page loads.
  - Reduced server overhead.
- **Example**:
\`\`\`javascript
export async function getStaticProps() {
  const data = await fetchData();
  return { props: { data } };
}
\`\`\`
This approach is perfect for pages that do not change frequently.

## 2. Utilize Server-Side Rendering (SSR)
Server-Side Rendering renders your page on every request, ensuring that content is always up-to-date.
- **Advantages**:
  - Real-time content delivery.
  - Enhanced personalization.
- **Example**:
\`\`\`javascript
export async function getServerSideProps() {
  const data = await fetchData();
  return { props: { data } };
}
\`\`\`
SSR is ideal for applications that require dynamic data and personalization.

## 3. Optimize API Routes
Next.js API Routes allow you to integrate backend functionality within your application seamlessly.
- **Use Cases**:
  - Handling form submissions.
  - Integrating with third-party APIs.
- **Example**:
\`\`\`javascript
// pages/api/hello.js
export default function handler(req, res) {
  res.status(200).json({ message: 'Hello, Next.js!' });
}
\`\`\`
Keeping your API routes close to your frontend code improves maintainability.

## 4. Enhance Image Performance
The built-in Image component in Next.js optimizes image delivery automatically.
- **Features**:
  - Responsive image sizing.
  - Lazy loading.
  - Modern image formats.
- **Usage**:
\`\`\`jsx
import Image from 'next/image';
function MyImage() {
  return <Image src="/images/blog/b1.jpg" alt="Optimized Image" width={600} height={400} />;
}
\`\`\`
Optimized images improve both load times and the overall user experience.

## 5. Implement Code Splitting and Dynamic Imports
Code splitting allows you to load parts of your application only when needed.
- **Benefits**:
  - Reduced initial load times.
  - Improved performance by deferring heavy components.
- **Example**:
\`\`\`javascript
import dynamic from 'next/dynamic';
const HeavyComponent = dynamic(() => import('../components/HeavyComponent'));
\`\`\`
Dynamic imports help in managing large codebases efficiently.

## 6. Use Environment Variables Securely
Environment variables keep sensitive data secure and configurable.
- **Practice**:
  - Store sensitive data in a \`.env.local\` file.
- **Access**:
\`\`\`javascript
const apiKey = process.env.NEXT_PUBLIC_API_KEY;
\`\`\`
This practice prevents exposing sensitive information in your codebase.

## Conclusion
By incorporating these six powerful tips, you can leverage Next.js to build applications that are fast, secure, and highly scalable. Experiment with these strategies and adapt them to your project needs to achieve optimal performance.
    `.trim(),
  },
  {
    id: 2,
    slug: 'typescript-best-practices',
    title: 'TypeScript Best Practices',
    excerpt: 'Improve your development workflow with TypeScript through robust type annotations, advanced patterns, and maintainable code structures.',
    date: '2024-04-10',
    readTime: '12 min',
    tags: ['typescript', 'javascript'],
    image: 'https://assets-eu-01.kc-usercontent.com/6312d6a8-faef-0175-9d92-e94376ab3538/36961122-2fd0-4bd1-8aad-40c4c5dfa139/benefits_of_typescript_without_typescript_blog_index.webp',
    content: `
# TypeScript Best Practices

TypeScript has become an essential tool for building reliable and scalable applications. This article outlines best practices to help you leverage TypeScript’s capabilities effectively.

## Why Choose TypeScript?
- **Enhanced Code Quality**: Catch errors early with strong type checking.
- **Improved Developer Experience**: Benefit from superior IDE support and autocompletion.
- **Scalability**: Manage large codebases with a clear structure.

## Embrace Type Annotations and Interfaces
Explicit type definitions make your code more self-documenting.
- **Example**:
\`\`\`typescript
interface User {
  id: number;
  name: string;
  email?: string;
}
\`\`\`
Interfaces define clear contracts, reducing bugs and easing collaboration.

## Utilize Type Inference
Allow TypeScript to infer types where possible to write cleaner code.
- **Tip**: Strike a balance between explicit typing and inference to avoid redundancy while maintaining clarity.

## Leverage Advanced Type Features
Explore union types, intersection types, and generics to write flexible and reusable code.
- **Generics Example**:
\`\`\`typescript
function identity<T>(arg: T): T {
  return arg;
}
\`\`\`
Generics let you write functions that work seamlessly with multiple data types.

## Maintain a Clean Codebase
- **Avoid using \`any\`**: Keep type safety intact.
- **Follow a Consistent Style**: Adopt standard naming conventions and file structures.

## Conclusion
Integrating these best practices into your TypeScript projects will lead to cleaner, more maintainable, and error-resistant code. Use TypeScript to not only catch errors early but also to build scalable applications that stand the test of time.
    `.trim(),
  },
  {
    id: 3,
    slug: 'react-hooks-guide',
    title: 'React Hooks: The Ultimate Guide',
    excerpt: 'Dive deep into React Hooks with practical examples and detailed explanations to build more intuitive and efficient components.',
    date: '2024-05-05',
    readTime: '14 min',
    tags: ['react', 'hooks'],
    image: 'https://miro.medium.com/v2/resize:fit:900/1*3d0jsQppieVP5XL6KGK6YA.png',
    content: `
# React Hooks: The Ultimate Guide

React Hooks have transformed the way developers build components by enabling state management and side effects in functional components. This guide explores essential hooks and their practical applications.

## Introduction to Hooks
Hooks allow you to use state and other React features without writing a class.
- **Benefits**:
  - Cleaner code.
  - Enhanced reusability of logic.
- **Common Hooks**: \`useState\`, \`useEffect\`, and \`useContext\`.

## Mastering useState
\`useState\` is the fundamental hook for adding state to functional components.
- **Example**:
\`\`\`javascript
import { useState } from 'react';
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
\`\`\`
This hook simplifies state management without the need for class-based components.

## Managing Side Effects with useEffect
\`useEffect\` handles side effects such as data fetching, subscriptions, and manual DOM manipulation.
- **Usage**:
\`\`\`javascript
import { useEffect, useState } from 'react';
function DataFetcher() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch('/api/data')
      .then(res => res.json())
      .then(setData);
  }, []);
  return <div>{data ? JSON.stringify(data) : 'Loading...'}</div>;
}
\`\`\`
The dependency array ensures the effect runs only when necessary, preventing redundant executions.

## Creating Custom Hooks
Custom hooks allow you to encapsulate and share logic across components.
- **Example**:
\`\`\`javascript
import { useState, useEffect } from 'react';
function useFetch(url) {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(setData);
  }, [url]);
  return data;
}
\`\`\`
This pattern promotes code reuse and separation of concerns.

## Conclusion
React Hooks offer a modern and efficient way to manage component logic. By understanding and implementing hooks properly, you can build cleaner, more efficient, and highly maintainable React applications.
    `.trim(),
  },
  {
    id: 4,
    slug: 'nodejs-performance-tips',
    title: 'Optimizing Node.js Performance',
    excerpt: 'Enhance your Node.js applications with strategies focused on asynchronous programming, efficient database interactions, and caching.',
    date: '2024-06-15',
    readTime: '10 min',
    tags: ['nodejs', 'performance'],
    image: 'https://miro.medium.com/v2/resize:fit:758/1*Rm5MQnXBIIWvu3V-wlEHCA.png',
    content: `
# Optimizing Node.js Performance

Node.js is renowned for its speed, yet there are several techniques to further boost its performance. This article explores strategies such as asynchronous programming, optimized database queries, and effective caching to enhance your Node.js applications.

## Embrace Asynchronous Programming
Asynchronous operations are at the core of Node.js performance.
- **Technique**: Use async/await and Promises to manage non-blocking code.
- **Example**:
\`\`\`javascript
async function fetchData() {
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();
  return data;
}
\`\`\`
This pattern improves application responsiveness and code clarity.

## Optimize Database Queries
Efficient database interactions can significantly reduce latency.
- **Tips**:
  - Use indexing and optimized queries.
  - Implement connection pooling.
- **Practice**: Retrieve only necessary data and consider caching frequently requested queries.

## Implement Caching Strategies
Caching reduces redundant operations and improves response times.
- **Strategies**:
  - Use in-memory caches like Redis.
  - Employ application-level caching.
- **Benefit**: Lower database load and faster data retrieval.

## Monitor and Profile Your Application
Regular performance monitoring helps identify bottlenecks.
- **Tools**: Use Node.js profiling tools or third-party solutions to measure performance metrics and fine-tune your application.

## Conclusion
Optimizing Node.js performance involves a combination of asynchronous programming, database query optimization, and smart caching strategies. Continuous monitoring and incremental improvements are key to maintaining an efficient application.
    `.trim(),
  },
  {
    id: 5,
    slug: 'javascript-es6-features',
    title: 'Top ES6 Features Every Developer Should Know',
    excerpt: 'Explore essential ES6 features with practical examples that simplify coding and enhance productivity.',
    date: '2024-07-20',
    readTime: '8 min',
    tags: ['javascript', 'es6'],
    image: 'https://media.licdn.com/dms/image/D4D12AQHeu6x2jIurgw/article-cover_image-shrink_720_1280/0/1702274710606?e=2147483647&v=beta&t=66fwU5fPfdeXzLIH5AJwapmGxaf3EgMZyIaF75HrN0A',
    content: `
# Top ES6 Features Every Developer Should Know

ES6 introduced numerous features that modernized JavaScript, making it more powerful and easier to work with. This post highlights some of the top ES6 features and explains how they can benefit your development process.

## Arrow Functions
Arrow functions provide a concise syntax and lexically bind \`this\`.
- **Example**:
\`\`\`javascript
const add = (a, b) => a + b;
\`\`\`
They simplify function expressions and enhance readability.

## Template Literals
Template literals allow for easy string interpolation and multi-line strings.
- **Usage**:
\`\`\`javascript
const name = 'Developer';
console.log(\`Hello, \${name}!\`);
\`\`\`
This feature reduces errors and makes string manipulation more intuitive.

## Destructuring
Destructuring syntax makes it easy to extract values from arrays and objects.
- **Example**:
\`\`\`javascript
const [first, second] = ['apple', 'banana'];
console.log(first); // 'apple'
\`\`\`
It simplifies code and improves clarity when handling complex data structures.

## Modules with Import/Export
ES6 modules help organize code into reusable components.
- **Example**:
\`\`\`javascript
// math.js
export const add = (a, b) => a + b;

// main.js
import { add } from './math';
console.log(add(2, 3));
\`\`\`
Modules promote better code organization and maintainability.

## Conclusion
By mastering ES6 features, you can write more elegant and efficient JavaScript code. Embrace these modern features to boost productivity and maintain cleaner codebases.
    `.trim(),
  },
  {
    id: 6,
    slug: 'css-grid-flexbox',
    title: 'Mastering CSS Grid and Flexbox',
    excerpt: 'Learn how to create responsive, modern layouts with in-depth explanations of CSS Grid and Flexbox.',
    date: '2024-08-01',
    readTime: '10 min',
    tags: ['css', 'webdesign'],
    image: 'https://i0.wp.com/blog.nashtechglobal.com/wp-content/uploads/2023/09/download-1-3.png?fit=1024%2C538&ssl=1',
    content: `
# Mastering CSS Grid and Flexbox

Modern web design relies on powerful layout systems. This guide explores CSS Grid and Flexbox, offering clear explanations and practical examples to help you build responsive designs.

## Understanding CSS Grid
CSS Grid is ideal for designing two-dimensional layouts.
- **Features**:
  - Control over rows and columns.
  - Precise placement of elements.
- **Example**:
\`\`\`css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}
\`\`\`
CSS Grid excels in creating complex layouts where spatial relationships matter.

## Flexbox Fundamentals
Flexbox is best suited for one-dimensional layouts, whether in rows or columns.
- **Usage**:
  - Align items efficiently.
  - Manage space distribution within a container.
- **Example**:
\`\`\`css
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
\`\`\`
Flexbox simplifies the alignment and spacing of elements in dynamic interfaces.

## Combining CSS Grid and Flexbox
Use CSS Grid for overall page layouts and Flexbox for individual components. This combination provides flexibility and control over your design.
- **Tip**: Experiment with both to determine which layout system works best for each part of your design.

## Conclusion
By mastering both CSS Grid and Flexbox, you gain the tools to create robust and responsive layouts. These techniques empower you to build modern websites that adapt seamlessly to various screen sizes and devices.
    `.trim(),
  },
];

export async function getAllPosts(): Promise<Post[]> {
  return dummyPosts;
}

export async function getPostBySlug(slug: string) {
  const posts = await getAllPosts();
  return posts.find((post) => post.slug === slug);
}
