// Allow importing CSS files as side-effect in TypeScript
declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

// Allow importing other static asset types if needed (optional)
declare module '*.svg';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.ico';
