# eloquent-javascript
Working through Eloquent JavaScript exercises

## Tips

While node is the de-facto tool for server-side js, macOS comes with [jsc](https://trac.webkit.org/wiki/JSC) preinstalled. A much lighter-weight solution since the exercises in this book deal with plain js.

`/System/Library/Frameworks/JavaScriptCore.framework/Versions/A/Resources/jsc` is the executable location, so `ln -s /System/Library/Frameworks/JavaScriptCore.framework/Versions/A/Resources/jsc /usr/local/bin` for easy access. Then run with `jsc script.js`.

