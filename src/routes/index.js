const newRouter = require('./router_custom');
const searchRouter = require('./router_seach');
const detailRouter = require('./router_detail');
function route(app) {
    app.use(newRouter);
    app.use('/search', searchRouter);
    app.use('/details', detailRouter);

    //   app.get("/", (req, res) => {
    //     res.render("pages/home.hbs");
    //   });

    //   app.get("/search", (req, res) => {
    //     console.log(req.query);
    //     res.render("pages/search.hbs");
    //   });
    //   app.post("/search", (req, res) => {
    //     console.log(req.body);
    //     res.send("pages/search.hbs");
    //   });
}

module.exports = route;
