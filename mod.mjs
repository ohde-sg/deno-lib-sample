import { toFileUrl } from "https://deno.land/std@0.146.0/path/mod.ts";

const firstArg = Deno.args[0];

await import(
  new URL(firstArg, toFileUrl(Deno.cwd()).href + "/").href
);
