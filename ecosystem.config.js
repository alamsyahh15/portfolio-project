module.exports = {
  apps: [{
    name: 'portfolio',
    script: 'npm',
    args: 'run dev',
    env: {
      NODE_ENV: 'production',
    },
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env_production: {
      NODE_ENV: 'production'
    }
  }]
}