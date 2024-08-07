#!/usr/bin/env node --no-warnings --experimental-strip-types
import { bar } from "./lib/bar/index.ts";
console.log(bar());

// このファイルはエラーなく実行可能
