function addBillRoutes(app) {
  app.get("/bills", (req, res) => {
    res.send([
      {
        vendor: "Edeka",
        billingDate: new Date(2022, 1, 1).toISOString(),
        spentAmount: 16.99,
        logoUrl: "www.edeka.de/logo.png",
      },
      {
        vendor: "Rewe",
        billingDate: new Date(2022, 2, 1).toISOString(),
        spentAmount: 12.4,
        logoUrl: "www.rewe.de/logo.png",
      },
      // more bills
    ]);
  });
}

module.exports = addBillRoutes;