#!/usr/bin/env node --no-warnings --experimental-strip-types
import { bar } from "./lib/bar";
console.log(bar());

// このファイルは実行エラーになる
// "./lib/bar" だと ./lib/bar/index.js は探すけど ./lib/bar/index.ts は探してくれないため
