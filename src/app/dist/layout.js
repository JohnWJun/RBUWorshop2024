"use strict";
exports.__esModule = true;
exports.metadata = void 0;
var react_1 = require("react");
var local_1 = require("next/font/local");
require("./globals.css");
var SakuraFalls_1 = require("@/app/_component/SakuraFalls");
var inter = local_1["default"]({
    src: "../../public/fonts/woff2/Pretendard-Light.woff2"
});
exports.metadata = {
    title: "Park Systems AMM2024",
    description: "Global Marketing Meeting 2024 in Japan"
};
function RootLayout(_a) {
    var children = _a.children;
    return (react_1["default"].createElement("html", { lang: "en" },
        react_1["default"].createElement("body", { className: inter.className },
            children,
            react_1["default"].createElement(SakuraFalls_1["default"], null))));
}
exports["default"] = RootLayout;
