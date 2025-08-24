(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/app/_components/header.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>Header
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function Header() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const query = searchParams.toString();
    const blockHash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const previousHash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])("");
    function blockFor(ms) {
        blockHash.current = true;
        setTimeout(()=>{
            blockHash.current = false;
        }, ms);
    }
    function runAnimation(isMobile, hash) {
        if (isMobile) {
            // Mobile logic
            if (hash === "#cas") {
                const tl1 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
                    defaults: {
                        duration: 1,
                        ease: "power1.out"
                    }
                });
                tl1.to("#headerSearchBar", {
                    opacity: 1,
                    width: "40vw",
                    duration: 0.2
                }).to("#headerLabel", {
                    opacity: 0,
                    width: "0",
                    duration: 0.2,
                    onComplete: ()=>{
                        document.querySelector("#headerLabel").style.pointerEvents = "none";
                        document.querySelector("#headerSearchBar").style.pointerEvents = "auto";
                    }
                }, "-=0.2");
                previousHash.current = hash;
            } else if (previousHash.current === "#cas" && hash !== "#cas") {
                const tl2 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
                    defaults: {
                        duration: 1,
                        ease: "power1.out"
                    }
                });
                tl2.to("#headerLabel", {
                    opacity: 1,
                    width: "25vw",
                    duration: 0.2
                }).to("#headerSearchBar", {
                    opacity: 0,
                    width: "0",
                    duration: 0.2,
                    onComplete: ()=>{
                        document.querySelector("#headerLabel").style.pointerEvents = "auto";
                        document.querySelector("#headerSearchBar").style.pointerEvents = "none";
                    }
                }, "-=0.2");
            }
        } else {
            // Desktop logic
            if (hash === "#cas") {
                const tl1 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
                    defaults: {
                        duration: 0.2,
                        ease: "power1.inOut"
                    }
                });
                tl1.to(".hide", {
                    opacity: 0,
                    onComplete: ()=>{
                        document.querySelectorAll(".hide").forEach((el)=>{
                            el.style.pointerEvents = "none";
                        });
                    }
                }).to("#headerSearchBar", {
                    opacity: 1,
                    width: "80vw",
                    onStart: ()=>{
                        const headerSearchBar = document.querySelector("#headerSearchBar");
                        if (headerSearchBar) headerSearchBar.style.pointerEvents = "auto";
                    }
                }).to("#headerLabel", {
                    opacity: 0,
                    width: "0",
                    onComplete: ()=>{
                        const headerLabel = document.querySelector("#headerLabel");
                        if (headerLabel) headerLabel.style.pointerEvents = "none";
                    }
                }, "-=0.2");
                previousHash.current = hash;
            } else if (previousHash.current === "#cas" && hash !== "#cas") {
                const tl2 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
                    defaults: {
                        duration: 0.2,
                        ease: "power1.inOut"
                    }
                });
                tl2.to("#headerLabel", {
                    opacity: 1,
                    width: "25vw",
                    onStart: ()=>{
                        const headerLabel = document.querySelector("#headerLabel");
                        if (headerLabel) headerLabel.style.pointerEvents = "auto";
                    }
                }).to("#headerSearchBar", {
                    opacity: 0,
                    width: "0",
                    onComplete: ()=>{
                        const headerSearchBar = document.querySelector("#headerSearchBar");
                        if (headerSearchBar) headerSearchBar.style.pointerEvents = "none";
                    }
                }, "-=0.2").to(".hide", {
                    opacity: 1,
                    onStart: ()=>{
                        document.querySelectorAll(".hide").forEach((el)=>{
                            el.style.pointerEvents = "auto";
                        });
                    }
                });
            }
        }
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            const mediaQuery = window.matchMedia("(max-width: 1024px)");
            const handleScreenChange = {
                "Header.useEffect.handleScreenChange": (e)=>{
                    runAnimation(e.matches, window.location.hash);
                }
            }["Header.useEffect.handleScreenChange"];
            // Run once on mount
            handleScreenChange(mediaQuery);
            // Listen to media query changes
            mediaQuery.addEventListener("change", handleScreenChange);
            return ({
                "Header.useEffect": ()=>{
                    mediaQuery.removeEventListener("change", handleScreenChange);
                }
            })["Header.useEffect"];
        }
    }["Header.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            const mediaQuery = window.matchMedia("(max-width: 1024px)");
            const updateHash = {
                "Header.useEffect.updateHash": ()=>{
                    previousHash.current = window.location.hash;
                }
            }["Header.useEffect.updateHash"];
            runAnimation(mediaQuery.matches, window.location.hash);
            updateHash();
            const sections = document.querySelectorAll("section[id]");
            const observer = new IntersectionObserver({
                "Header.useEffect": (entries)=>{
                    entries.forEach({
                        "Header.useEffect": (entry)=>{
                            if (entry.isIntersecting) {
                                if (!blockHash.current) {
                                    history.replaceState(null, "", "#".concat(entry.target.id));
                                }
                                runAnimation(mediaQuery.matches, "#".concat(entry.target.id));
                                updateHash();
                            }
                        }
                    }["Header.useEffect"]);
                }
            }["Header.useEffect"], {
                root: document.querySelector(".scrollContainer"),
                threshold: 0.6
            });
            sections.forEach({
                "Header.useEffect": (section)=>observer.observe(section)
            }["Header.useEffect"]);
            return ({
                "Header.useEffect": ()=>observer.disconnect()
            })["Header.useEffect"];
        }
    }["Header.useEffect"], [
        pathname
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "fixed top-0 left-0 w-full h-[7vh] max-h-[90px] lg:max-h-[90px] min-h-[60px] z-50 p-3 flex items-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: "/".concat(query ? "?" + query : "", "#home"),
                onClick: ()=>blockFor(1000),
                className: "items-center h-full md:flex cursor-pointer hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: "/logo.svg",
                    alt: "logo",
                    className: "filter dark:invert h-full"
                }, void 0, false, {
                    fileName: "[project]/app/_components/header.tsx",
                    lineNumber: 190,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/_components/header.tsx",
                lineNumber: 189,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "flex-1 flex w-full justify-center h-[5vh] items-center fsmall space-x-6 min-h-[50px] max-h-[75px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/".concat(query ? "?" + query : "", "#about"),
                        onClick: ()=>blockFor(1000),
                        className: "h-full",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hide flex-col flex items-center text-center justify-center h-full w-[25vw] max-w-[100px] rounded-full bubble",
                            children: "Home"
                        }, void 0, false, {
                            fileName: "[project]/app/_components/header.tsx",
                            lineNumber: 195,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/_components/header.tsx",
                        lineNumber: 194,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-center h-full w-fit rounded-full bubble",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/".concat(query ? "?" + query : "", "#cas"),
                                className: "h-full",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    id: "headerLabel",
                                    className: "flex w-[25vw] flex-col text-center max-w-[100px] items-center justify-center h-full rounded-full",
                                    children: "CAS"
                                }, void 0, false, {
                                    fileName: "[project]/app/_components/header.tsx",
                                    lineNumber: 201,
                                    columnNumber: 21
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/_components/header.tsx",
                                lineNumber: 200,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                id: "headerSearchBar",
                                className: "flex justify-center items-center opacity-0 w-0 pointer-events-none",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SearchBar, {}, void 0, false, {
                                    fileName: "[project]/app/_components/header.tsx",
                                    lineNumber: 206,
                                    columnNumber: 21
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/_components/header.tsx",
                                lineNumber: 205,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/_components/header.tsx",
                        lineNumber: 199,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/".concat(query ? "?" + query : "", "#about"),
                        onClick: ()=>blockFor(1000),
                        className: "h-full",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hide flex-col flex items-center text-center justify-center h-full w-[25vw] max-w-[100px] rounded-full bubble",
                            children: "About"
                        }, void 0, false, {
                            fileName: "[project]/app/_components/header.tsx",
                            lineNumber: 210,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/_components/header.tsx",
                        lineNumber: 209,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/_components/header.tsx",
                lineNumber: 193,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hidden md:flex h-full aspect-square"
            }, void 0, false, {
                fileName: "[project]/app/_components/header.tsx",
                lineNumber: 216,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/_components/header.tsx",
        lineNumber: 188,
        columnNumber: 9
    }, this);
}
_s(Header, "GE3xvSad8N3SEVCCQ9KN4j6w1VY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=app__components_header_tsx_6760ce7b._.js.map