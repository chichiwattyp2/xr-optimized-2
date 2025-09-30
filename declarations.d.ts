// declarations.d.ts

// Allow importing of .jsx and .js files in a TS project
declare module "*.jsx";
declare module "*.js";

// Allow Next.js dynamic imports from JSX files
declare module "@/components/*";
