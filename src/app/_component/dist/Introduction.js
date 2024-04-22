"use client";
"use strict";
exports.__esModule = true;
// Importing necessary libraries
var react_1 = require("react");
var introduction_module_css_1 = require("@/app/_component/introduction.module.css");
var navigation_1 = require("next/navigation");
var image_1 = require("next/image");
function Introduction() {
    var router = navigation_1.useRouter();
    var _a = react_1.useState(1), page = _a[0], setPage = _a[1];
    var onClickClose = function () {
    };
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
    return (React.createElement("div", { className: introduction_module_css_1["default"].modalBackground },
        React.createElement("div", { className: introduction_module_css_1["default"].modal },
            React.createElement("div", { className: introduction_module_css_1["default"].modalHeader },
                React.createElement("button", { onClick: onClickBack, className: introduction_module_css_1["default"].closeButton },
                    React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
                        React.createElement("path", { fill: "#000000", d: "M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z" })))),
            React.createElement("div", { className: introduction_module_css_1["default"].modalBody },
                page === 1 && (React.createElement("div", { className: introduction_module_css_1["default"].group },
                    React.createElement("h4", null, "Step1: Anonymous"),
                    "\u00A0 \u00A0",
                    React.createElement("div", { className: introduction_module_css_1["default"].description }, "Your lead journey with Marketo begins here. You may arrive at our website through various channels such as SNS advertisements and web magazines. Once here, you may freely explore the site until you stumble upon something that piques your interest."),
                    React.createElement("h5", null, "Channels:"),
                    "\u00A0",
                    React.createElement("ul", null,
                        React.createElement("li", null, "Paid Media"),
                        React.createElement("li", null, "Paid Search"),
                        React.createElement("li", null, "SNS"),
                        React.createElement("li", null, "Webinar"),
                        React.createElement("li", null, "etc")),
                    React.createElement("div", { className: introduction_module_css_1["default"].imgBoxVer },
                        React.createElement(image_1["default"], { className: introduction_module_css_1["default"].imageLong, src: "/introPic1.png", alt: "introPic1", width: 800, height: 220, priority: true }),
                        React.createElement("div", { className: introduction_module_css_1["default"].imgBoxHor },
                            React.createElement(image_1["default"], { className: introduction_module_css_1["default"].image, src: "/introPic2.png", alt: "introPic2", width: 400, height: 800, priority: true }),
                            React.createElement(image_1["default"], { className: introduction_module_css_1["default"].image, src: "/introPic3.png", alt: "introPic3", width: 450, height: 800, priority: true }))))),
                page === 2 && (React.createElement("div", { className: introduction_module_css_1["default"].group },
                    React.createElement("h4", null, "Step2: Known"),
                    React.createElement("div", { className: introduction_module_css_1["default"].description }, "You may find yourself here when you come across compelling information that you're eager to download. In our Marketo system, customer leads are primarily captured through minimal effort, typically via form submissions. Of course, leads obtained from regional offline events are manually entered into the Marketo DB. Regardless of the channel through which leads are acquired, they are automatically saved in the Marketo DB based on the email provided by the customers."),
                    React.createElement("h5", null, "Channels:"),
                    "\u00A0",
                    React.createElement("ul", null,
                        React.createElement("li", null, "Inquiries(Form Submission)"),
                        React.createElement("li", null, "Brochure Download(Form Submission)"),
                        React.createElement("li", null, "List Importing"),
                        React.createElement("li", null, "etc")),
                    "\u00A0",
                    React.createElement("h5", null, "Try this!"),
                    "\u00A0",
                    React.createElement("div", { className: introduction_module_css_1["default"].iframeBox },
                        React.createElement("iframe", { src: 'https://pages.parksystems.com/Marketing-Meeting-Marketo-Training_02-LP---Download.html' }, " "),
                        React.createElement("button", null,
                            React.createElement("a", { href: 'https://app-sn06.marketo.com/?satellite=1#SL1122B2!', target: "_blank" },
                                React.createElement("svg", { width: 26, viewBox: "0 0 24 24", "aria-hidden": "true", className: "r-18jsvk2 r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-cnnz9e" },
                                    React.createElement("g", null,
                                        React.createElement("path", { d: "M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z" }))),
                                React.createElement("h5", null, "See the result")))),
                    "\u00A0")),
                page === 3 && (React.createElement("div", { className: introduction_module_css_1["default"].group },
                    React.createElement("h4", null, "Step3: Engaged"),
                    React.createElement("h5", null, "Nurturing Leads"),
                    "\u00A0",
                    React.createElement("div", { className: introduction_module_css_1["default"].description }, "Once customers' leads are captured and saved in the Marketo DB, Marketo's nurturing program begins to manage and cultivate these leads until they reach MQL, SAL, SQL, and eventually become actual customers. This is where Marketo's powerful automated nurturing system truly shines. Marketo adjusts leads' scores based on their actions on the website, such as downloading brochures, attending webinars, or making inquiries. According to the scoring policy set by marketers, Marketo adds or subtracts from the score to determine if a lead has the potential to become a customer. Marketable leads are nurtured through various marketing methods, such as newsletters or email ads, until they reach a certain score considered as SAL. Once a lead's score exceeds the set threshold, Marketo automatically sends these leads to the Sales team (SalesForce DB)."),
                    "\u00A0",
                    React.createElement("h5", null, "Scenario #1: sales Inquiry"),
                    "\u00A0",
                    React.createElement("div", { className: introduction_module_css_1["default"].iframeBox },
                        React.createElement("iframe", { src: 'https://pages.parksystems.com/Marketing-Meeting-Marketo-Training_02-LP---Sales-Inquiry.html' }, " ")),
                    "\u00A0",
                    React.createElement("h5", null, "Scenario #2: Webinar Register"),
                    "\u00A0",
                    React.createElement("div", { className: introduction_module_css_1["default"].iframeBoxLong },
                        React.createElement("iframe", { src: 'https://pages.parksystems.com/Marketing-Meeting-Marketo-Training_03-Webinar-Registration-LP.html' }, " "),
                        React.createElement("button", null,
                            React.createElement("a", { href: 'https://app-sn06.marketo.com/?satellite=1#SL1122B2!', target: "_blank" },
                                React.createElement("svg", { width: 26, viewBox: "0 0 24 24", "aria-hidden": "true", className: "r-18jsvk2 r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-cnnz9e" },
                                    React.createElement("g", null,
                                        React.createElement("path", { d: "M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z" }))),
                                React.createElement("h5", null, "See the result")))))),
                page === 4 && (React.createElement("div", { className: introduction_module_css_1["default"].group },
                    React.createElement("h4", null, "Step4: Recycled"),
                    React.createElement("h5", null, "Re-nurturing Leads"),
                    "\u00A0",
                    React.createElement("div", { className: introduction_module_css_1["default"].description }, "When a potential customer is identified, they're initially labeled as a Marketing Qualified Lead (MQL) and passed to the Sales Department. Upon reaching the Sales team, they become a Sales Accepted Lead (SAL), indicating interest in a purchase. However, this interest isn't guaranteed, and if the lead decides against purchasing, they're recycled back to the Marketing Team for further engagement and nurturing with compelling content."),
                    React.createElement("div", { className: introduction_module_css_1["default"].imgBoxVer },
                        React.createElement(image_1["default"], { className: introduction_module_css_1["default"].imageLong, src: "/recycling.jpg", alt: "recycling", width: 1000, height: 350, priority: true })))),
                page === 5 && (React.createElement(React.Fragment, null)),
                page === 6 && (React.createElement(React.Fragment, null)),
                page === 7 && (React.createElement(React.Fragment, null))),
            React.createElement("div", { className: introduction_module_css_1["default"].modalFooter },
                React.createElement("div", { className: introduction_module_css_1["default"].seeMoreButtonSection },
                    React.createElement("button", { disabled: page === 1, className: introduction_module_css_1["default"].seeMoreButton, onClick: onClickPrev },
                        React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20px", height: "20px", viewBox: "0 0 24 24" },
                            React.createElement("polyline", { fill: "none", stroke: page !== 1 ? "#000000" : "#e3e3e3", strokeWidth: "2", points: "7 2 17 12 7 22", transform: "matrix(-1 0 0 1 24 0)" }))),
                    React.createElement("button", { disabled: page === 4, className: introduction_module_css_1["default"].seeMoreButton, onClick: onClickNext },
                        React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: page !== 4 ? "#000000" : "#e3e3e3", height: "20px", width: "20px", version: "1.1", id: "XMLID_287_", viewBox: "0 0 24 24" },
                            React.createElement("g", { id: "next" },
                                React.createElement("g", null,
                                    React.createElement("polygon", { points: "6.8,23.7 5.4,22.3 15.7,12 5.4,1.7 6.8,0.3 18.5,12   " }))))))))));
}
exports["default"] = Introduction;
