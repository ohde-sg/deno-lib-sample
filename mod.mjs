const firstArg = Deno.args[0];
console.log(firstArg);
await import(resolve(Deno.cwd(), firstArg));
