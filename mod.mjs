import { resolve } from "https://deno.land/std@0.95.0/path/mod.ts";
const firstArg = Deno.args[0];
console.log(firstArg);
await import(resolve(Deno.cwd(), firstArg));
