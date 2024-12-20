module.exports = {
  myJob: {
    task: async ({ strapi }) => {
      const notConfirmedCodes = await strapi.db
        .query("api::attendance.attendance")
        .findMany({
          where: {
            codeStatus: "CONFIRMED",
          },
        });

      for (const code of notConfirmedCodes) {
        await strapi.db.query("api::attendance.attendance").update({
          where: { id: code.id },
          data: {
            codeStatus: "EXPIRED",
          },
        });
      }

      console.log("CÓDIGOS NO CONFIRMADOS ACTUALIZADOS A EXPIRADOS");
    },
    options: {
        rule: "0 59 23 20 12 *",
      tz: "America/Lima",
    },
  },
};
