#!/usr/bin/env node --no-warnings --experimental-strip-types
import { foo } from "./lib/foo.ts";
console.log(foo());

// このファイルはエラーなく実行可能
