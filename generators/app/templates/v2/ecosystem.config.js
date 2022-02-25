module.exports = {
  apps: [
    {
      name: "<%= projectName %>-Nuxt",
      script: "./node_modules/nuxt/bin/nuxt.js",
      args: "start",
      exec_mode: "cluster",
      instances: "max",
      watch: "."
    }
  ],

  deploy: {}
};
