# rave-node-process

Install this into your `rave` project if you want to use some modules from npm that assume node environemtn and use the `process` global (e.g. `react` module). Check out the [source of `node-process`](https://github.com/defunctzombie/node-process/blob/master/browser.js) module to see which bits of the process are supported.

## Usage

```
npm install --save rave-node-process
```

That's it, rave will autoload this extension and window.process will be installed.