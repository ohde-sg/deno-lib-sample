// import { resolve } from "https://deno.land/std@0.95.0/path/mod.ts";
import { toFileUrl } from "https://deno.land/std@0.146.0/path/mod.ts";

const firstArg = Deno.args[0];
await import(toFileUrl(Deno.cwd()).pathname + `/${firstArg}`)

// await import(resolve(Deno.cwd(), firstArg));
