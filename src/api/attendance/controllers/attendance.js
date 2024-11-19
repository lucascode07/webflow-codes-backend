"use strict";

/**
 * attendance controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::attendance.attendance", () => ({
  async findOne(ctx) {
    const { id } = ctx.params;
    const entity = await strapi.db.query("api::attendance.attendance").findOne({
      where: { code: id },
    });

    if (!entity) {
      return ctx.notFound("Registro no encontrado");
    }

    return entity;
  },
}));
