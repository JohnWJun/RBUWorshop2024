"use client";
"use strict";
exports.__esModule = true;
var training_module_css_1 = require("@/app/(modalPages)/training/training.module.css");
var BackButton_1 = require("@/app/_component/BackButton");
var image_1 = require("next/image");
var link_1 = require("next/link");
function Training() {
    return (React.createElement("div", { className: training_module_css_1["default"].main },
        React.createElement("div", { className: training_module_css_1["default"].header },
            React.createElement(BackButton_1["default"], null),
            React.createElement("h1", null,
                "2024 Global Marketing Meeting ",
                React.createElement("br", null),
                "Marketo Training"),
            React.createElement(image_1["default"], { className: training_module_css_1["default"].logo, src: "/parksystemsLogo.svg", alt: "Park Logo", width: 180, height: 37, priority: true })),
        React.createElement("div", { className: training_module_css_1["default"].body },
            React.createElement(link_1["default"], { href: '/training/introduction' },
                React.createElement("h3", null, "Introduction: Lead Journey with Marketo")),
            React.createElement(link_1["default"], { href: '/training/training1' },
                React.createElement("h3", null, "Training Session #1: ")),
            React.createElement(link_1["default"], { href: '/training/training2' },
                React.createElement("h3", null, "Training Session #2: ")),
            React.createElement(link_1["default"], { href: '/training/training3' },
                React.createElement("h3", null, "Training Session #3: ")),
            React.createElement("div", { className: training_module_css_1["default"].bodyComponents },
                React.createElement("div", { className: training_module_css_1["default"].group },
                    React.createElement("h5", null))))));
}
exports["default"] = Training;
