Package.describe({
  summary: "Exposing internal Meteor APIs to hack Meteor easily",
  version: "2.1.2",
  git: "https://github.com/akarda/meteorx.git",
  name: "akarda:meteorx",
});

Package.onUse(function(api) {
  configurePackage(api);
  api.export(["MeteorX"]);
});

Package.onTest(function(api) {
  configurePackage(api);
  api.use(["tinytest"], "server");
  api.addFiles(["test/server.js"], "server");
});

function configurePackage(api) {
  api.versionsFrom('2.3.2');
  api.use(["random", "mongo"], "server");
  api.addFiles(["src/livedata.js", "src/mongo-livedata.js", "src/server.js"], "server");
}
