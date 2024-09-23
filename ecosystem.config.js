module.exports = {
    apps: [
      {
        name: 'frontendClient',
        script: 'node_modules/next/dist/bin/next',
        args: 'start -p 7000',
        instances: 1,
        exec_mode: 'cluster',
      },
    ],
  };