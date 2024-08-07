#!/usr/bin/env node --no-warnings --experimental-strip-types
import { foo } from "./lib/foo";
console.log(foo());

// このファイルは実行エラーになる
// "./lib/foo" だと ./lib/foo.js は探すけど ./lib/foo.ts は探してくれないため
