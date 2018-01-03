class ExamplePlugin {
  apply(compiler) {
    compiler.plugin("run", (compiler, callback) => {
      console.log(`WEBPACK IS RUNNIING`);
      callback();
    });
  }
}

module.exports = ExamplePlugin;