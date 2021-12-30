module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '311372b9cec9a9b05e0960150739fbc8'),
  },
});
