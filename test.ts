const filePath = new URL(import.meta.resolve('./src/test.txt')).pathname;

console.log(filePath);

const content = await Deno.readTextFile(filePath);

console.log(content);
