declare module '*.svg' {
  import { url } from 'src/framework/model/misc';
  const content: url;
  export default content;
}

declare module '*.png' {
  import { ResponsiveImage } from 'src/framework/model/misc';
  const content: ResponsiveImage;
  export default content;
}

declare module '*.jpg' {
  import { ResponsiveImage } from 'src/framework/model/misc';
  const content: ResponsiveImage;
  export default content;
}

declare module '*.jpeg' {
  import { ResponsiveImage } from 'src/framework/model/misc';
  const content: ResponsiveImage;
  export default content;
}

declare module '*.gif' {
  import { url } from 'src/framework/model/misc';
  const content: url;
  export default content;
}

declare module '*.mp4' {
  import { url } from 'src/framework/model/misc';
  const content: url;
  export default content;
}

declare module '*.webm' {
  import { url } from 'src/framework/model/misc';
  const content: url;
  export default content;
}

declare module '*.pdf' {
  import { url } from 'src/framework/model/misc';
  const content: url;
  export default content;
}

declare module '*.txt' {
  const content: string;
  export default content;
}

declare module '*.html' {
  const content: string;
  export default content;
}
