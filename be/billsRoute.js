function addBillRoutes(app) {
    app.get("/bills", (req, res) => {
        res.send([
            {
                name: "Edeka",
                billingDate: new Date(2022, 1, 1).toISOString(),
                dueAmount: -16.99,
                logoUrl: "www.edeka.de/logo.png",
            },
            {
                name: "Rewe",
                billingDate: new Date(2022, 2, 1).toISOString(),
                dueAmount: -12.4,
                logoUrl: "www.rewe.de/logo.png",
            },
            // more bills
        ]);
    });
}
  
module.exports = addBillRoutes;