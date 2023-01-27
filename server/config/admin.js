module.exports = ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET"),
    // secret: env("ADMIN_JWT_SECRET", "FaLWlH1KoekUPIASC3ByNg=="),
  },
  apiToken: {
    salt: env("API_TOKEN_SALT"),
    // salt: env("API_TOKEN_SALT", "E7HM8FCkwofFZcWxTWC3A=="),
  },
});
