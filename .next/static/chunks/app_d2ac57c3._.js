(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/app/_components/dataBox.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>DataBox
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"use client";
;
;
function DataBox(param) {
    let { children } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center h-full w-full",
            children: "Loading..."
        }, void 0, false, {
            fileName: "[project]/app/_components/dataBox.tsx",
            lineNumber: 9,
            columnNumber: 29
        }, void 0),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-center items-start h-fit w-fit lg:w-[70%] rounded-2xl lg:rounded-4xl gap-8 overflow-y-scroll scroll-hidden bubble p-[3vw]",
            children: children
        }, void 0, false, {
            fileName: "[project]/app/_components/dataBox.tsx",
            lineNumber: 10,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/_components/dataBox.tsx",
        lineNumber: 9,
        columnNumber: 9
    }, this);
}
_c = DataBox;
var _c;
__turbopack_context__.k.register(_c, "DataBox");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/info/[id]/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "YouTubeEmbed": ()=>YouTubeEmbed,
    "default": ()=>Info
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$_components$2f$dataBox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/_components/dataBox.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const YouTubeEmbed = (param)=>{
    let { videoId } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "aspect-video w-full max-w-2xl mx-auto rounded-lg overflow-hidden shadow-lg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
            className: "w-full h-full",
            src: "https://www.youtube.com/embed/".concat(videoId),
            title: "YouTube video",
            allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
            allowFullScreen: true
        }, void 0, false, {
            fileName: "[project]/app/info/[id]/page.tsx",
            lineNumber: 11,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/app/info/[id]/page.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = YouTubeEmbed;
;
function Info() {
    _s();
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])(); // 👈 type-safe
    const id = params.id;
    function Content() {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            id: "content",
            className: "content flex flex-col w-screen md:h-screen pt-5 lg:px-5 lg:pt-20 lg:px-12 gap-y-10",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "snap-start flex flex-col lg:flex-col w-full h-full",
                    children: [
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-row",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$_components$2f$dataBox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            className: "w-[50vw] aspect-[4/3] object-cover rounded-2xl",
                                            src: data === null || data === void 0 ? void 0 : data.images[0].url,
                                            alt: data === null || data === void 0 ? void 0 : data.images[0].caption
                                        }, void 0, false, {
                                            fileName: "[project]/app/info/[id]/page.tsx",
                                            lineNumber: 36,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/info/[id]/page.tsx",
                                        lineNumber: 35,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$_components$2f$dataBox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-full text-center text-[var(--foreground)] text-4xl md:text-5xl font-normal font-['geist']",
                                                    children: data === null || data === void 0 ? void 0 : data.title
                                                }, void 0, false, {
                                                    fileName: "[project]/app/info/[id]/page.tsx",
                                                    lineNumber: 45,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-5 w-full text-center text-[var(--foreground)] text-sm md:text-base font-normal font-['geist']",
                                                    children: data === null || data === void 0 ? void 0 : data.dates.map((date)=>new Date(date).toLocaleDateString("en-US", {
                                                            month: "short",
                                                            day: "numeric",
                                                            year: "numeric"
                                                        })).join('-')
                                                }, void 0, false, {
                                                    fileName: "[project]/app/info/[id]/page.tsx",
                                                    lineNumber: 48,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-5 w-full flex justify-center items-center px-7 md:px-50 text-[var(--foreground)] text-base md:text-lg font-normal font-['geist'] leading-10",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-left",
                                                        children: data === null || data === void 0 ? void 0 : data.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/info/[id]/page.tsx",
                                                        lineNumber: 58,
                                                        columnNumber: 41
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/info/[id]/page.tsx",
                                                    lineNumber: 57,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-row",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$_components$2f$dataBox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            children: data === null || data === void 0 ? void 0 : data.strands.map((strand)=>{
                                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-14 h-12 px-4 py-2 relative bg-white/0 rounded-[99px] shadow-[var(--button2-shadow)] inline-flex justify-center items-center gap-2.5 overflow-hidden",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "w-56 h-24 left-[-38px] top-[-18px] absolute bg-white/0 backdrop-blur-[2px]"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/info/[id]/page.tsx",
                                                                            lineNumber: 67,
                                                                            columnNumber: 57
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-center justify-start text-[var(--foreground)] text-sm md:text-lg font-normal font-['geist'] z-10",
                                                                            children: strand
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/info/[id]/page.tsx",
                                                                            lineNumber: 68,
                                                                            columnNumber: 57
                                                                        }, this)
                                                                    ]
                                                                }, strand, true, {
                                                                    fileName: "[project]/app/info/[id]/page.tsx",
                                                                    lineNumber: 66,
                                                                    columnNumber: 53
                                                                }, this);
                                                            })
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/info/[id]/page.tsx",
                                                            lineNumber: 63,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$_components$2f$dataBox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-[var(--foreground)] text-xl font-normal font-['geist'] leading-normal tracking-wide",
                                                                    children: "L.O"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/info/[id]/page.tsx",
                                                                    lineNumber: 75,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex flex-row flex-wrap gap-3 justify-start",
                                                                    children: data === null || data === void 0 ? void 0 : data.los.map((lo)=>{
                                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-[var(--foreground)] text-xl font-normal font-['geist'] leading-normal tracking-wide whitespace-nowrap",
                                                                            children: lo
                                                                        }, lo, false, {
                                                                            fileName: "[project]/app/info/[id]/page.tsx",
                                                                            lineNumber: 81,
                                                                            columnNumber: 57
                                                                        }, this);
                                                                    })
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/info/[id]/page.tsx",
                                                                    lineNumber: 78,
                                                                    columnNumber: 45
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/info/[id]/page.tsx",
                                                            lineNumber: 74,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/info/[id]/page.tsx",
                                                    lineNumber: 62,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/info/[id]/page.tsx",
                                            lineNumber: 44,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/info/[id]/page.tsx",
                                        lineNumber: 43,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/info/[id]/page.tsx",
                                lineNumber: 34,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/info/[id]/page.tsx",
                            lineNumber: 33,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/info/[id]/page.tsx",
                    lineNumber: 32,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center lg:flex-row justify-center w-screen px-15 mt-10 md:mt-35 lg:mt-40",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col w-full items-center gap-y-4 order-2 lg:order-1 mt-10 lg:mt-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-48 h-12 px-4 py-2 relative rounded-[99px] shadow-[var(--button2-shadow)] inline-flex justify-center items-center gap-2.5 overflow-hidden ",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-56 h-24 left-[-38px] top-[-18px] absolute bg-white/0 backdrop-blur-[2px]"
                                        }, void 0, false, {
                                            fileName: "[project]/app/info/[id]/page.tsx",
                                            lineNumber: 99,
                                            columnNumber: 25
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-28 h-5 text-center text-[var(--foreground)] text-lg font-normal font-['geist'] z-10",
                                            children: "Time Line"
                                        }, void 0, false, {
                                            fileName: "[project]/app/info/[id]/page.tsx",
                                            lineNumber: 100,
                                            columnNumber: 25
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/info/[id]/page.tsx",
                                    lineNumber: 98,
                                    columnNumber: 21
                                }, this),
                                "   ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex w-75 md:w-[550px] h-80 lg:px-6 py-4 bg-white/30 rounded-2xl shadow-[var(--button2-shadow)]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-2.5 h-full bg-[var(--backgruond)] rounded-full shadow-[var(--button1-shadow)]"
                                        }, void 0, false, {
                                            fileName: "[project]/app/info/[id]/page.tsx",
                                            lineNumber: 105,
                                            columnNumber: 25
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "ml-4 flex-1 overflow-y-auto pr-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "pb-1",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[var(--foreground)] text-lg font-normal font-['geist']",
                                                        children: " 봉사 장소 섭외 (1365, 전화)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/info/[id]/page.tsx",
                                                        lineNumber: 108,
                                                        columnNumber: 33
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/info/[id]/page.tsx",
                                                    lineNumber: 107,
                                                    columnNumber: 29
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-full h-0.5 bg-[var(--foreground)]/10 my-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/info/[id]/page.tsx",
                                                    lineNumber: 110,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "pb-1",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[var(--foreground)] text-lg font-normal font-['geist'] leading-relaxed",
                                                        children: [
                                                            "곡 선정, 파트 배분, 악보 수정을 기반으로 ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                fileName: "[project]/app/info/[id]/page.tsx",
                                                                lineNumber: 113,
                                                                columnNumber: 58
                                                            }, this),
                                                            " 플룻 연습 시작"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/info/[id]/page.tsx",
                                                        lineNumber: 112,
                                                        columnNumber: 29
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/info/[id]/page.tsx",
                                                    lineNumber: 111,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-full h-0.5 bg-[var(--foreground)]/10 my-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/info/[id]/page.tsx",
                                                    lineNumber: 115,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "pb-1",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[var(--foreground)] text-lg font-normal font-['geist'] leading-relaxed",
                                                        children: "다른 일정 내용"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/info/[id]/page.tsx",
                                                        lineNumber: 117,
                                                        columnNumber: 29
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/info/[id]/page.tsx",
                                                    lineNumber: 116,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/info/[id]/page.tsx",
                                            lineNumber: 106,
                                            columnNumber: 25
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/info/[id]/page.tsx",
                                    lineNumber: 104,
                                    columnNumber: 21
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/info/[id]/page.tsx",
                            lineNumber: 96,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-center items-center max-w-sm md:max-w-none md:w-full mx-auto mt-5 order-1 lg:order-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(YouTubeEmbed, {
                                videoId: "clMedKL9cR0"
                            }, void 0, false, {
                                fileName: "[project]/app/info/[id]/page.tsx",
                                lineNumber: 127,
                                columnNumber: 21
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/info/[id]/page.tsx",
                            lineNumber: 126,
                            columnNumber: 17
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/info/[id]/page.tsx",
                    lineNumber: 95,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col lg:flex-row w-screen mt-10 lg:px-15 md:mt-35 lg:mt-40",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col w-full items-center gap-y-10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-48 h-12 px-4 py-2 relative rounded-[99px] shadow-[var(--button2-shadow)] inline-flex justify-center items-center gap-2.5 overflow-hidden",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-56 h-24 left-[-38px] top-[-18px] absolute backdrop-blur-[2px]"
                                        }, void 0, false, {
                                            fileName: "[project]/app/info/[id]/page.tsx",
                                            lineNumber: 135,
                                            columnNumber: 25
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-28 h-5 text-center justify-start text-[var(--foreground)] text-lg font-normal font-['geist'] z-10",
                                            children: "Final Evidence"
                                        }, void 0, false, {
                                            fileName: "[project]/app/info/[id]/page.tsx",
                                            lineNumber: 136,
                                            columnNumber: 25
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/info/[id]/page.tsx",
                                    lineNumber: 134,
                                    columnNumber: 21
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex max-w-xs md:max-w-none w-full",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(YouTubeEmbed, {
                                        videoId: "clMedKL9cR0"
                                    }, void 0, false, {
                                        fileName: "[project]/app/info/[id]/page.tsx",
                                        lineNumber: 139,
                                        columnNumber: 25
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/info/[id]/page.tsx",
                                    lineNumber: 138,
                                    columnNumber: 21
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/info/[id]/page.tsx",
                            lineNumber: 133,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col w-full items-center mt-20 lg:-translate-y-10",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-auto max-w-xs md:max-w-none h-auto px-4 py-7 relative rounded-[50px] shadow-[var(--button2-shadow)] inline-flex justify-center items-center gap-2.5 overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-52 h-36 left-[-25px] top-[-25px] absolute backdrop-blur-[2px]"
                                    }, void 0, false, {
                                        fileName: "[project]/app/info/[id]/page.tsx",
                                        lineNumber: 145,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-[490px] h-96 left-[23px] top-[166px] absolute backdrop-blur-[2px]"
                                    }, void 0, false, {
                                        fileName: "[project]/app/info/[id]/page.tsx",
                                        lineNumber: 146,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-col items-center w-auto md:w-106 auto-height relative ",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-center text-[var(--foreground)] text-3xl font-normal font-['geist']",
                                                children: "After reflection"
                                            }, void 0, false, {
                                                fileName: "[project]/app/info/[id]/page.tsx",
                                                lineNumber: 148,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-full px-5 mt-4 flex text-[var(--foreground)] text-lg font-normal font-['geist'] leading-10",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-left",
                                                    children: "음악의 기쁨을 어르신 분들께 전달해 드리고자 우리가 가진 음악적 역량들을 모아 요양원에 찾아갔고, 약 한시간 가량 공연을 진행했습니다. 음악의 기쁨을 어르신 분들께 전달해 드리고자 우리가 가진 음악적 역량들을 모아 요양원에 찾아갔고, 약 한시간 가량 공연을 진행했습니다. 음악의 기쁨을 어르신 분들께 전달해음악의 기쁨을 찾아갔고, 약 한시간 가량 공연을 진행했습니다"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/info/[id]/page.tsx",
                                                    lineNumber: 150,
                                                    columnNumber: 33
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/info/[id]/page.tsx",
                                                lineNumber: 149,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/info/[id]/page.tsx",
                                        lineNumber: 147,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/info/[id]/page.tsx",
                                lineNumber: 144,
                                columnNumber: 21
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/info/[id]/page.tsx",
                            lineNumber: 143,
                            columnNumber: 17
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/info/[id]/page.tsx",
                    lineNumber: 131,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center mt-10 gap-y-7 md:mt-35 lg:mt-40",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-48 h-12 px-4 py-2 relative bg-white/0 rounded-[99px] shadow-[var(--button2-shadow)] inline-flex justify-center items-center gap-2.5 overflow-hidden",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-56 h-24 left-[-38px] top-[-18px] absolute bg-white/0 backdrop-blur-[2px]"
                                }, void 0, false, {
                                    fileName: "[project]/app/info/[id]/page.tsx",
                                    lineNumber: 168,
                                    columnNumber: 21
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-28 h-5 text-center justify-start text-[var(--foreground)] text-lg font-normal font-['geist'] z-10",
                                    children: "Tip box"
                                }, void 0, false, {
                                    fileName: "[project]/app/info/[id]/page.tsx",
                                    lineNumber: 169,
                                    columnNumber: 21
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/info/[id]/page.tsx",
                            lineNumber: 167,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col md:flex-row w-[90%] lg:w-full lg:h-[500px] p-10 relative bg-orange-300/60 rounded-[70px]  shadow-[var(--button2-shadow)] justify-center items-center gap-3 lg:gap-10 overflow-hidden backdrop-blur-[2px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-5 h-5 bg-white rounded-full shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] border border-stone-300 translate-y-7"
                                        }, void 0, false, {
                                            fileName: "[project]/app/info/[id]/page.tsx",
                                            lineNumber: 174,
                                            columnNumber: 25
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-auto h-auto bg-rose-200 p-7 md:p-10 shadow-[3px_4px_3px_0px_rgba(0,0,0,0.25)] text-center justify-center text-black text-xl font-normal font-['geist'] leading-10",
                                            children: "한 시간 동안 공연? 쉽지 않다! 그냥 하지 말자"
                                        }, void 0, false, {
                                            fileName: "[project]/app/info/[id]/page.tsx",
                                            lineNumber: 175,
                                            columnNumber: 25
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/info/[id]/page.tsx",
                                    lineNumber: 173,
                                    columnNumber: 21
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-5 h-5 bg-white rounded-full shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] border border-stone-300 translate-y-7"
                                        }, void 0, false, {
                                            fileName: "[project]/app/info/[id]/page.tsx",
                                            lineNumber: 180,
                                            columnNumber: 25
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-auto h-auto p-7 md:p-10 bg-sky-200 shadow-[3px_4px_3px_0px_rgba(0,0,0,0.25)] text-center justify-center text-black text-xl font-normal font-['geist'] leading-10",
                                            children: "음악의 기쁨보다 음악의 힘듦을 먼저 발견 ^^"
                                        }, void 0, false, {
                                            fileName: "[project]/app/info/[id]/page.tsx",
                                            lineNumber: 181,
                                            columnNumber: 25
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/info/[id]/page.tsx",
                                    lineNumber: 179,
                                    columnNumber: 21
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-5 h-5 bg-white rounded-full shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] border border-stone-300 translate-y-7"
                                        }, void 0, false, {
                                            fileName: "[project]/app/info/[id]/page.tsx",
                                            lineNumber: 187,
                                            columnNumber: 25
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-auto h-auto p-7 md:p-10 bg-green-200 shadow-[3px_4px_3px_0px_rgba(0,0,0,0.25)] text-center justify-center text-black text-xl font-normal font-['geist'] leading-10",
                                            children: "하하 하하 하하 그래도 열심히 해보자"
                                        }, void 0, false, {
                                            fileName: "[project]/app/info/[id]/page.tsx",
                                            lineNumber: 188,
                                            columnNumber: 25
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/info/[id]/page.tsx",
                                    lineNumber: 186,
                                    columnNumber: 21
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/info/[id]/page.tsx",
                            lineNumber: 171,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-row w-screen h-15 bg-neutral-100 z-20 mt-10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col items-center justify-center w-full",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full h-12 justify-center px-1 text-zinc-600 text-[9px] font-normal font-['geist'] leading-3",
                                        children: [
                                            "Youtube: 사기 쫌 치는 아이비(@ib_official)",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/app/info/[id]/page.tsx",
                                                lineNumber: 198,
                                                columnNumber: 59
                                            }, this),
                                            "Instagram: @survibal",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/app/info/[id]/page.tsx",
                                                lineNumber: 199,
                                                columnNumber: 45
                                            }, this),
                                            "G-mail: oursweetcomma@gmail.com"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/info/[id]/page.tsx",
                                        lineNumber: 197,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/info/[id]/page.tsx",
                                    lineNumber: 196,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col items-center justify-center w-full",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full h-13 justify-center text-zinc-600 text-[9px] font-normal font-['geist'] leading-3",
                                        children: [
                                            "충남삼성고등학교",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/app/info/[id]/page.tsx",
                                                lineNumber: 204,
                                                columnNumber: 33
                                            }, this),
                                            "2025.08.21 published",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/app/info/[id]/page.tsx",
                                                lineNumber: 205,
                                                columnNumber: 45
                                            }, this),
                                            "CAS - our sweet comma",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/app/info/[id]/page.tsx",
                                                lineNumber: 206,
                                                columnNumber: 46
                                            }, this),
                                            "IBDP 4th"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/info/[id]/page.tsx",
                                        lineNumber: 203,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/info/[id]/page.tsx",
                                    lineNumber: 202,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/info/[id]/page.tsx",
                            lineNumber: 195,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/info/[id]/page.tsx",
                    lineNumber: 165,
                    columnNumber: 13
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/info/[id]/page.tsx",
            lineNumber: 31,
            columnNumber: 13
        }, this);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Info.useEffect": ()=>{
            fetch("/api/experience/".concat(id)).then({
                "Info.useEffect": (res)=>res.json()
            }["Info.useEffect"]).then({
                "Info.useEffect": (response)=>{
                    if (response.error) {
                        console.error("Error fetching experiences:", response.error);
                    } else {
                        setData(response);
                    }
                }
            }["Info.useEffect"]);
        }
    }["Info.useEffect"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex scrollContainer scroll-smooth justify-center items-start h-screen w-[100vw] overflow-y-scroll overflow-x-hidden snap-y snap-mandatory",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Background, {}, void 0, false, {
                fileName: "[project]/app/info/[id]/page.tsx",
                lineNumber: 232,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "content self-start",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Content, {}, void 0, false, {
                    fileName: "[project]/app/info/[id]/page.tsx",
                    lineNumber: 234,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/info/[id]/page.tsx",
                lineNumber: 233,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/info/[id]/page.tsx",
        lineNumber: 231,
        columnNumber: 9
    }, this);
}
_s(Info, "FqL/Zm8Q0OVihpWiua/+BGVLKs8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"]
    ];
});
_c1 = Info;
var _c, _c1;
__turbopack_context__.k.register(_c, "YouTubeEmbed");
__turbopack_context__.k.register(_c1, "Info");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=app_d2ac57c3._.js.map