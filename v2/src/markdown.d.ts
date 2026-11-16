/** Les fichiers .md sont importés comme chaînes (option `loader` du build, angular.json). */
declare module '*.md' {
  const content: string;
  export default content;
}
