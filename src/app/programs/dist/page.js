"use client";
"use strict";
exports.__esModule = true;
var programs_module_css_1 = require("./programs.module.css");
var link_1 = require("next/link");
var BackButton_1 = require("../_component/BackButton");
var image_1 = require("next/image");
function Programs() {
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: programs_module_css_1["default"].main },
            React.createElement("div", { className: programs_module_css_1["default"].header },
                React.createElement(BackButton_1["default"], null),
                React.createElement("h1", null,
                    "2024 Global Marketing Meeting ",
                    React.createElement("br", null),
                    "Program & Schedule"),
                React.createElement(image_1["default"], { className: programs_module_css_1["default"].logo, src: "/parksystemsLogo.svg", alt: "Park Logo", width: 180, height: 37, priority: true })),
            React.createElement("div", { className: programs_module_css_1["default"].scheduleContainer },
                React.createElement("div", null,
                    React.createElement("button", null,
                        React.createElement(link_1["default"], { href: "https://parkafm-my.sharepoint.com/:b:/g/personal/cherie_jung_parksystems_com/EeGpNV68lb9ClNsZP8W-ANoBdG9hmu0uw6Dfj-3DoZR9iA?e=rwyaUo" }, "Download"))),
                React.createElement("h2", null, " Day 1 "),
                React.createElement("div", { className: programs_module_css_1["default"].day },
                    React.createElement("a", { href: '/GMM2024_Timetable_Fin-1.jpg' },
                        React.createElement(image_1["default"], { className: programs_module_css_1["default"].image, src: "/GMM2024_Timetable_Fin-1.jpg", alt: "timeTable1", width: 600, height: 800, priority: true })),
                    React.createElement("a", { href: '/GMM2024_Timetable_Fin-2.jpg' },
                        React.createElement(image_1["default"], { className: programs_module_css_1["default"].image, src: "/GMM2024_Timetable_Fin-2.jpg", alt: "timeTable1", width: 600, height: 800, priority: true })))),
            React.createElement("div", { className: programs_module_css_1["default"].scheduleContainer },
                React.createElement("h2", null, " Day 2 "),
                React.createElement("div", { className: programs_module_css_1["default"].day },
                    React.createElement("a", { href: '/GMM2024_Timetable_Fin-3.jpg' },
                        React.createElement(image_1["default"], { className: programs_module_css_1["default"].image, src: "/GMM2024_Timetable_Fin-3.jpg", alt: "timeTable1", width: 600, height: 800, priority: true })),
                    React.createElement("a", { href: '/GMM2024_Timetable_Fin-4.jpg' },
                        React.createElement(image_1["default"], { className: programs_module_css_1["default"].image, src: "/GMM2024_Timetable_Fin-4.jpg", alt: "timeTable1", width: 600, height: 800, priority: true })))),
            React.createElement("div", { className: programs_module_css_1["default"].scheduleContainer },
                React.createElement("h2", null, " Day 3 "),
                React.createElement("div", { className: programs_module_css_1["default"].day },
                    React.createElement("a", { href: '/GMM2024_Timetable_Fin-5.jpg' },
                        React.createElement(image_1["default"], { className: programs_module_css_1["default"].image, src: "/GMM2024_Timetable_Fin-5.jpg", alt: "timeTable1", width: 600, height: 800, priority: true })))))));
}
exports["default"] = Programs;
