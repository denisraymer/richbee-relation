"use strict";

import gulp from "gulp";
const smartgrid = require("smart-grid");

gulp.task("smart-grid", (cb) => {
    smartgrid("./src/styles/vendor/import/", {
        outputStyle: "scss",
        filename: "_smart-grid",
        columns: 24, // number of grid columns
        offset: "0.625rem", // gutter width - 10px
        mobileFirst: true,
        mixinNames: {
            container: "container"
        },
        container: {
            fields: "0.313rem" // side fields - 5px
        },
        breakPoints: {
            xs: {
                width: "20rem" // 320px
            },
            sm: {
                width: "36rem" // 576px
            },
            md: {
                width: "48rem" // 768px
            },
            lg: {
                width: "62rem" // 992px
            },
            xl: {
                width: "75rem" // 1200px
            }
        }
    });
    cb();
});
