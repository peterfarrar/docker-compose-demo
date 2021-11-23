module.exports = {
  port: process.env.NODE_PORT || 8080,
  redisPort: process.env.REDIS_PORT || 6379,
  redisHost: process.env.REDIS_HOST || 'redis',
}