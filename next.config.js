const {
  PHASE_PRODUCTION_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_PRODUCTION_SERVER || phase === PHASE_PRODUCTION_BUILD) {
    return {
      reactStrictMode: true,
      exportTrailingSlash: true,
      env: {
        schoolName: "Cherryfield",
        // baseUrl: "https://admin-cherryfieldcollege.justusali.me",
        baseUrl: "http://127.0.0.1:8000",
      },
      images: {
        domains: ["127.0.0.1"],
      },
    };
  }

  return {
    reactStrictMode: true,
    exportTrailingSlash: true,
    env: {
      schoolName: "Cherryfield",
      baseUrl: "http://127.0.0.1:8000",
    },
    images: {
      domains: ["127.0.0.1"],
    },
  };
};
