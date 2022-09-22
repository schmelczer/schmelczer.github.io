declare module '*.svg' {
  const content: string;
  export default content;
}

declare module '*.jpg' {
  import { ResponsiveImage } from 'src/types/responsive-image';
  const content: ResponsiveImage;
  export default content;
}

declare module '*.png' {
  import { ResponsiveImage } from 'src/types/responsive-image';
  const content: ResponsiveImage;
  export default content;
}

declare module '*.mp4' {
  import { url } from 'src/types/url';
  const content: url;
  export default content;
}

declare module '*.webm' {
  import { url } from 'src/types/url';
  const content: url;
  export default content;
}

declare module '*.pdf' {
  import { url } from 'src/types/url';
  const content: url;
  export default content;
}

declare module '*.html' {
  const content: string;
  export default content;
}
