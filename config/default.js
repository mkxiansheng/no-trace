module.exports = {
  port: 4000,
  session: {
    secret: 'noTrace',
    key: 'noTrace',
    maxAge: 2592000000
  },
  mongodb: 'mongodb://localhost:27017/noTrace'
};
