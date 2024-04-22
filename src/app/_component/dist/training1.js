"use client";
"use strict";
exports.__esModule = true;
// Importing necessary libraries
var react_1 = require("react");
var training1_module_css_1 = require("@/app/_component/training1.module.css");
var navigation_1 = require("next/navigation");
var image_1 = require("next/image");
function Training1() {
    var router = navigation_1.useRouter();
    var _a = react_1.useState(1), page = _a[0], setPage = _a[1];
    var onClickNext = function () {
        if (page > 0) {
            setPage(function (prevPage) { return prevPage + 1; });
        }
    };
    var onClickPrev = function () {
        if (page > 0) {
            setPage(function (prevPage) { return prevPage - 1; });
        }
    };
    var onClickBack = function () {
        router.back();
    };
    return (React.createElement("div", { className: training1_module_css_1["default"].modalBackground },
        React.createElement("div", { className: training1_module_css_1["default"].modal },
            React.createElement("div", { className: training1_module_css_1["default"].modalHeader },
                React.createElement("button", { onClick: onClickBack, className: training1_module_css_1["default"].closeButton },
                    React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
                        React.createElement("path", { fill: "#000000", d: "M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z" })))),
            React.createElement("div", { className: training1_module_css_1["default"].modalBody },
                page === 1 && (React.createElement("div", { className: training1_module_css_1["default"].group },
                    React.createElement("h4", null, "Step1: Foldering"),
                    "\u00A0 \u00A0",
                    React.createElement("div", { className: training1_module_css_1["default"].description }, "Create proper folders according to the foldering convention we talked about while in the session."),
                    React.createElement("h5", null, "required folders"),
                    "\u00A0",
                    React.createElement("ul", null,
                        React.createElement("li", null, "Assets"),
                        React.createElement("li", null, "Lists"),
                        React.createElement("li", null, "Campaigns"),
                        React.createElement("li", null, "etc")),
                    "\u00A0 \u00A0",
                    React.createElement("div", { className: training1_module_css_1["default"].imgBoxVer },
                        React.createElement(image_1["default"], { className: training1_module_css_1["default"].logo, src: "/foldering.png", alt: "foldering pic", width: 500, height: 320, priority: true })))),
                page === 2 && (React.createElement("div", { className: training1_module_css_1["default"].group },
                    React.createElement("h4", null, "Step2: Program Setup - #1 "),
                    React.createElement("h5", null, "follow the instruction"),
                    "\u00A0",
                    React.createElement("ul", null,
                        React.createElement("li", null, "1. Click the program you want to set up"),
                        React.createElement("li", null, "2. Go to Setup menu"),
                        React.createElement("li", null, "3. Double click the Channel tag and change it to 07 Webinar"),
                        React.createElement("li", null, "4. Come back to the main menu(click the program title)."),
                        React.createElement("li", null, "5. Click the Event Partner section\u2019s under -lined word, not set, and set as the picture below. Select the event section as itself.")),
                    "\u00A0",
                    React.createElement("h5", null, "Try this!"),
                    "\u00A0 \u00A0",
                    React.createElement("div", { className: training1_module_css_1["default"].imgBoxVer },
                        React.createElement(image_1["default"], { className: training1_module_css_1["default"].logo, src: "/programSetting1.png", alt: "program setting 1 pic", width: 900, height: 500, priority: true })))),
                page === 3 && (React.createElement("div", { className: training1_module_css_1["default"].group },
                    React.createElement("h4", null, "Step3: Engaged"),
                    React.createElement("h5", null, "Nurturing Leads"),
                    "\u00A0",
                    React.createElement("div", { className: training1_module_css_1["default"].description }, "Once customers' leads are captured and saved in the Marketo DB, Marketo's nurturing program begins to manage and cultivate these leads until they reach MQL, SAL, SQL, and eventually become actual customers. This is where Marketo's powerful automated nurturing system truly shines. Marketo adjusts leads' scores based on their actions on the website, such as downloading brochures, attending webinars, or making inquiries. According to the scoring policy set by marketers, Marketo adds or subtracts from the score to determine if a lead has the potential to become a customer. Marketable leads are nurtured through various marketing methods, such as newsletters or email ads, until they reach a certain score considered as SAL. Once a lead's score exceeds the set threshold, Marketo automatically sends these leads to the Sales team (SalesForce DB)."),
                    "\u00A0",
                    React.createElement("h5", null, "Scenario #1: sales Inquiry"),
                    "\u00A0",
                    React.createElement("div", { className: training1_module_css_1["default"].iframeBox },
                        React.createElement("iframe", { src: 'https://pages.parksystems.com/Marketing-Meeting-Marketo-Training_02-LP---Sales-Inquiry.html' }, " ")),
                    "\u00A0",
                    React.createElement("h5", null, "Scenario #2: Webinar Register"),
                    "\u00A0",
                    React.createElement("div", { className: training1_module_css_1["default"].iframeBoxLong },
                        React.createElement("iframe", { src: 'https://pages.parksystems.com/Marketing-Meeting-Marketo-Training_03-Webinar-Registration-LP.html' }, " "),
                        React.createElement("button", null,
                            React.createElement("a", { href: 'https://app-sn06.marketo.com/?satellite=1#SL1122B2!', target: "_blank" },
                                React.createElement("svg", { width: 26, viewBox: "0 0 24 24", "aria-hidden": "true", className: "r-18jsvk2 r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-cnnz9e" },
                                    React.createElement("g", null,
                                        React.createElement("path", { d: "M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z" }))),
                                React.createElement("h5", null, "See the result")))))),
                page === 4 && (React.createElement("div", { className: training1_module_css_1["default"].group },
                    React.createElement("h4", null, "Step4: Recycled"),
                    React.createElement("h5", null, "Re-nurturing Leads"),
                    "\u00A0",
                    React.createElement("div", { className: training1_module_css_1["default"].description }, "When a potential customer is identified, they're initially labeled as a Marketing Qualified Lead (MQL) and passed to the Sales Department. Upon reaching the Sales team, they become a Sales Accepted Lead (SAL), indicating interest in a purchase. However, this interest isn't guaranteed, and if the lead decides against purchasing, they're recycled back to the Marketing Team for further engagement and nurturing with compelling content."),
                    React.createElement("div", { className: training1_module_css_1["default"].imgBoxVer },
                        React.createElement(image_1["default"], { className: training1_module_css_1["default"].logo, src: "/recycling.jpg", alt: "recycling", width: 1000, height: 350, priority: true })))),
                page === 5 && (React.createElement(React.Fragment, null)),
                page === 6 && (React.createElement(React.Fragment, null)),
                page === 7 && (React.createElement(React.Fragment, null))),
            React.createElement("div", { className: training1_module_css_1["default"].modalFooter },
                React.createElement("div", { className: training1_module_css_1["default"].seeMoreButtonSection },
                    React.createElement("button", { disabled: page === 1, className: training1_module_css_1["default"].seeMoreButton, onClick: onClickPrev },
                        React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20px", height: "20px", viewBox: "0 0 24 24" },
                            React.createElement("polyline", { fill: "none", stroke: page !== 1 ? "#000000" : "#e3e3e3", strokeWidth: "2", points: "7 2 17 12 7 22", transform: "matrix(-1 0 0 1 24 0)" }))),
                    React.createElement("button", { disabled: page === 4, className: training1_module_css_1["default"].seeMoreButton, onClick: onClickNext },
                        React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: page !== 4 ? "#000000" : "#e3e3e3", height: "20px", width: "20px", version: "1.1", id: "XMLID_287_", viewBox: "0 0 24 24" },
                            React.createElement("g", { id: "next" },
                                React.createElement("g", null,
                                    React.createElement("polygon", { points: "6.8,23.7 5.4,22.3 15.7,12 5.4,1.7 6.8,0.3 18.5,12   " }))))))))));
}
exports["default"] = Training1;
