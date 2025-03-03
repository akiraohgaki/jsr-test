const filePath = new URL('./src/test.txt', import.meta.url).pathname;

console.log(filePath);

const content = await Deno.readTextFile(filePath);

console.log(content);
