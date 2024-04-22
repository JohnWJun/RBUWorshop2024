"use client";
"use strict";
exports.__esModule = true;
var meal_module_css_1 = require("./meal.module.css");
var BackButton_1 = require("@/app/_component/BackButton");
var image_1 = require("next/image");
var react_1 = require("react");
function Quiz() {
    var _a = react_1.useState(false), day1Open = _a[0], setDay1Open = _a[1];
    var _b = react_1.useState(false), day2Open = _b[0], setDay2Open = _b[1];
    var day1OpenClickOpen = function () {
        setDay1Open(true);
        setDay2Open(false);
    };
    var day2OpenClickOpen = function () {
        setDay2Open(true);
        setDay1Open(false);
    };
    return (React.createElement("div", { className: meal_module_css_1["default"].main },
        React.createElement("div", { className: meal_module_css_1["default"].header },
            React.createElement(BackButton_1["default"], null),
            React.createElement("h1", null,
                "2024 Global Marketing Meeting ",
                React.createElement("br", null),
                "Lunch Menu"),
            React.createElement(image_1["default"], { className: meal_module_css_1["default"].logo, src: "/parksystemsLogo.svg", alt: "Park Logo", width: 180, height: 37, priority: true })),
        React.createElement("div", { className: meal_module_css_1["default"].buttonSection }, !day1Open &&
            React.createElement("button", { onClick: day1OpenClickOpen }, "Day1")),
        React.createElement("div", { className: meal_module_css_1["default"].formSection }, day1Open &&
            React.createElement(React.Fragment, null,
                React.createElement("h2", null, "Day1 Menu:"),
                React.createElement("div", { className: meal_module_css_1["default"].menuBox },
                    React.createElement("div", { className: meal_module_css_1["default"].optionBox },
                        React.createElement("h4", null, "Option 1: Fries Combo Lunch box"),
                        React.createElement(image_1["default"], { className: meal_module_css_1["default"].menu, src: "/day1lunch1.jpg", alt: "day1 lunch1", width: 250, height: 200, priority: true })),
                    React.createElement("div", { className: meal_module_css_1["default"].optionBox },
                        React.createElement("h4", null, "Option 2: Silver Salmon Grilled with Salt & Mixed Fried Lunch Box"),
                        React.createElement(image_1["default"], { className: meal_module_css_1["default"].menu, src: "/day1lunch2.jpg", alt: "day1 lunch2", width: 250, height: 200, priority: true })),
                    React.createElement("div", { className: meal_module_css_1["default"].optionBox },
                        React.createElement("h4", null, "Option 3: Ginger-yaki Lunch Box"),
                        React.createElement(image_1["default"], { className: meal_module_css_1["default"].menu, src: "/day1lunch3.jpg", alt: "day1 lunch3", width: 250, height: 200, priority: true }))))),
        React.createElement("div", { className: meal_module_css_1["default"].buttonSection }, !day2Open &&
            React.createElement("button", { onClick: day2OpenClickOpen }, "Day2")),
        React.createElement("div", { className: meal_module_css_1["default"].formSection }, day2Open &&
            React.createElement(React.Fragment, null,
                React.createElement("h2", null, "Day2 Menu:"),
                React.createElement("div", { className: meal_module_css_1["default"].menuBox },
                    React.createElement("div", { className: meal_module_css_1["default"].optionBox },
                        React.createElement("h4", null, "Option 1: Deep-fried and Grilled Salmon Lunch Box"),
                        React.createElement(image_1["default"], { className: meal_module_css_1["default"].menu, src: "/day2lunch1.jpg", alt: "day2 lunch1", width: 250, height: 200, priority: true })),
                    React.createElement("div", { className: meal_module_css_1["default"].optionBox },
                        React.createElement("h4", null, "Option 2: Karaage & Teriyaki Hamburg Lunch Box"),
                        React.createElement(image_1["default"], { className: meal_module_css_1["default"].menu, src: "/day2lunch2.jpg", alt: "day2 lunch2", width: 250, height: 200, priority: true })),
                    React.createElement("div", { className: meal_module_css_1["default"].optionBox },
                        React.createElement("h4", null, "Option 3: Chicken Deluxe Lunch Box"),
                        React.createElement(image_1["default"], { className: meal_module_css_1["default"].menu, src: "/day2lunch3.jpg", alt: "day2 lunch3", width: 250, height: 200, priority: true })))))));
}
exports["default"] = Quiz;
