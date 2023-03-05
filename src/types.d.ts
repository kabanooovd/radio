declare module '*.svg' {
  const content: string;
  export default content;
}

declare module '*.scss' {
  const css: { [key: string]: string };
  export default css;
}

declare module '*.sass' {
  const css: { [key: string]: string };
  export default css;
}

declare module '*.module.css' {
  const css: { [key: string]: string };
  export default css;
}

declare module 'react-markup';

declare module '*.webp';

declare module '*.png';

declare module '*.jpg';

declare module '*.jpeg';