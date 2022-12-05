// My custom typings

// FIX issue with react-scripts
// TODO: Haven't dug around, but this can be your starting point: https://www.npmjs.com/package/typescript-plugin-css-modules#custom-definitions
declare module "*.module.less" {
  const classes: { [key: string]: string };
  export default classes;
}
