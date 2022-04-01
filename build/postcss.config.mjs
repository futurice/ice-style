import * as fs from "fs";

const { homepage, version, author, tetraConfig } = JSON.parse(fs.readFileSync("package.json"));

module.exports = (ctx) => {

    return {
        parser: ctx.parser ? "sugarss" : false,
        map: ctx.env === "development" ? ctx.map : false,
        plugins: {
            "postcss-import": {},
            cssnano: ctx.env === "production" ? {} : false
        },
        map: ctx.options.map
    };
};