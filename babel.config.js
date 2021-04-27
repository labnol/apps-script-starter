module.exports = api => {
  const isTest = api.env("test");
  console.log("isTest:" + isTest)
  return {
    presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
  }
};
