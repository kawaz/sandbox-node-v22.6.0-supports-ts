# sandbox-node-v22.6.0-supports-ts

[Node v22.6.0 で ts がサポートされた](https://x.com/mattpocockuk/status/1820918269638783199)らしいので試してみた。

[Xで既に書いたこと](https://x.com/kawaz/status/1820976754540081340)だけど、試したコードも一緒にあげておく。


# 試して分かった

実際に試すには `--experimental-strip-types` オプションが必要なようです。

動作としては `tsconfig.json` に以下のオプションを設定したような状態のよう。
```json
{
  "compilerOptions": {
    "module": "NodeNext",
    "allowImportingTsExtensions": true,
    "noEmit": true
  }
}
```
元ツイートには `noEmit: true` は書いてないけど、エディタのlintに言われて付けたけど意味的にはその通りですね。`.ts` 付きのファイルが import 出来てかつ型情報を無視するようになっだけで型情報を strip した js を出力できるわけではないので。

tsサポートとは直接は無関係だけど import を使う為に `package.json` に `{"type":"module"}` が必要。

`"module": "NodeNext"` では import from 時に `".ts"` が必須です。試しに `foo.ts` や `foo/index.ts` を作って `import {foo} from "./foo"` のように import 出来るか試してみましたが .ts まで付けてやらないと foo.js を探してしまうので駄目でした。

`--experimental-strip-types` だけだと警告が出るので静かに実行するには実際には `--no-warnings` も付けたい感じですね。

`--experimental-strip-types` というオプションの名前の通り型情報を捨てる形で受け入れるだけなので型チェックはしてくれないですね。以下のコードも特に警告もエラーもなく普通に動いてしまいます。
```ts
const num: number = "abc"
console.log(num)
```

# 所感
今回のtsサポートは `--experimental-strip-types` というオプションの名前の通り「TypeScriptの型情報を無視して実行出来るようになった」というそのままの意味で、それ以上の事(型チェックをしたり型のないJSにトランスパイルしたり)は出来ないようです。

ですが同じように型をstripするだけの提案がESにも上がってたと思うので、この動作がそのうちブラウザにも来てくれるかもと考えると、TypeScriptのコードがブラウザのコンソールにコピペでそのまま動くようになってくれるならそれだけでも大分嬉しい気はしますね。
