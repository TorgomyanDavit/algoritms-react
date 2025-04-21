module.exports = {
  webpack: (config, env) => {
    config.optimization.minimize = false;  // Disable minification in production
    return config;
  },
}