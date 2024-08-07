#!/usr/bin/env node --no-warnings --experimental-strip-types
type N = number
const n:N = 123;
console.log(n);

// このファイルは SyntaxError になる。
// ファイル名が .js のファイル内に書いた型情報は strip されないため。
