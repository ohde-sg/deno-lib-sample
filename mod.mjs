// import { resolve } from "https://deno.land/std@0.95.0/path/mod.ts";
import { toFileUrl } from "https://deno.land/std@0.146.0/path/mod.ts";

const firstArg = Deno.args[0];
console.log(toFileUrl(Deno.cwd()))

// await import(resolve(Deno.cwd(), firstArg));
