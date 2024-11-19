"use strict";

/**
 * attendance router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::attendance.attendance", {
  config: {
    findOne: {
      method: "GET",
      path: "/attendances/:code",
      handler: "attendances.findOne",
      auth: false,
      policies: [],
      middlewares: [],
    },
  },
});
