import raw from '../content/site-content.json';
export const content = raw;
export const asset = (path:string) => `${import.meta.env.BASE_URL}${path.replace(/^\//,'')}`;
export const bookPath = '/books/bumbleboo-discovers-the-uae';
