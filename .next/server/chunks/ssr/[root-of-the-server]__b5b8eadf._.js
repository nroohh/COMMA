module.exports = {

"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[project]/app/_components/searchBar.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>SearchBar
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/io5/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function SearchBar() {
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [isActive, setIsActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const initialQuery = searchParams.get("search")?.toString() || "";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetch;
    }, [
        query
    ]);
    const handleChange = (e)=>{
        setQuery(e.target.value);
        if (isActive) {}
    };
    const handleKeyDown = (e)=>{
        if (e.key === "Enter" && isActive) {}
    };
    const handleSearch = (event)=>{
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const searchQuery = formData.get("search");
        const params = new URLSearchParams();
        if (searchQuery) {
            params.set("search", searchQuery);
        } else {
            params.delete("search");
        }
        router.replace(`${pathname}?${params.toString()}#cas`);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: handleSearch,
        className: "flex flex-row justify-center items-center w-full eading-none min-h-[50px] max-h-[75px] h-[5vh]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "text",
                name: "search",
                defaultValue: initialQuery,
                onChange: handleChange,
                onKeyDown: handleKeyDown,
                onFocus: ()=>setIsActive(true),
                onBlur: ()=>setIsActive(false),
                placeholder: "search a CAS experience",
                className: "flex-1 truncate [padding-left:clamp(15px,1.5vh,30px)] bg-transparent text-[var(--foreground)] text-sm fsmall placeholder-[var(--foreground)] outline-none"
            }, void 0, false, {
                fileName: "[project]/app/_components/searchBar.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: "round h-full w-10 flex items-center justify-center [padding-right:clamp(15px,1.5vh,30px)]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IoSearch"], {
                    className: "w-full h-full"
                }, void 0, false, {
                    fileName: "[project]/app/_components/searchBar.tsx",
                    lineNumber: 62,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/_components/searchBar.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/_components/searchBar.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/_components/header.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>Header
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$_components$2f$searchBar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/_components/searchBar.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function Header() {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const query = searchParams.toString();
    const blockHash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const previousHash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])("");
    function blockFor(ms) {
        blockHash.current = true;
        setTimeout(()=>{
            blockHash.current = false;
        }, ms);
    }
    function runAnimation(isMobile, hash) {
        console.log(hash);
        if (!isMobile) {
            if (hash === "#cas") {
                const tl1 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
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
                }, "-=0.2").to(".hide", {
                    opacity: 1,
                    duration: 0.2,
                    onComplete: ()=>{
                        document.querySelectorAll(".hide").forEach((el)=>{
                            el.style.pointerEvents = "auto";
                        });
                    }
                });
                previousHash.current = hash;
            } else if (previousHash.current === "#cas" && hash !== "#cas") {
                const tl2 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
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
                }, "-=0.2").to(".hide", {
                    opacity: 1,
                    duration: 0.2,
                    onComplete: ()=>{
                        document.querySelectorAll(".hide").forEach((el)=>{
                            el.style.pointerEvents = "auto";
                        });
                    }
                });
            }
        } else {
            if (hash === "#cas") {
                const tl1 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
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
                const tl2 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const mediaQuery = window.matchMedia("(max-width: 1024px)");
        const handleScreenChange = (e)=>{
            runAnimation(e.matches, window.location.hash);
        };
        // Run once on mount
        handleScreenChange(mediaQuery);
        // Listen to media query changes
        mediaQuery.addEventListener("change", handleScreenChange);
        return ()=>{
            mediaQuery.removeEventListener("change", handleScreenChange);
        };
    }, []);
    function handleClick() {
        if (window.location.hash !== "#cas") {
            blockFor(1000);
        }
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const mediaQuery = window.matchMedia("(max-width: 1024px)");
        const updateHash = ()=>{
            previousHash.current = window.location.hash;
        };
        runAnimation(mediaQuery.matches, window.location.hash);
        updateHash();
        const sections = document.querySelectorAll("section[id]");
        const observer = new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                if (entry.isIntersecting) {
                    if (!blockHash.current) {
                        runAnimation(mediaQuery.matches, `#${entry.target.id}`);
                    }
                    history.replaceState(null, "", `#${entry.target.id}`);
                    updateHash();
                }
            });
        }, {
            root: document.querySelector(".scrollContainer"),
            threshold: 0.6
        });
        sections.forEach((section)=>observer.observe(section));
        return ()=>observer.disconnect();
    }, [
        pathname
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "fixed top-0 left-0 w-full h-[7vh] max-h-[90px] lg:max-h-[90px] min-h-[60px] z-50 p-3 flex items-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                href: `/${query ? "?" + query : ""}#home`,
                onClick: ()=>handleClick(),
                className: "items-center h-full xl:flex cursor-pointer hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: "/logo.svg",
                    alt: "logo",
                    className: "filter dark:invert h-full"
                }, void 0, false, {
                    fileName: "[project]/app/_components/header.tsx",
                    lineNumber: 212,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/_components/header.tsx",
                lineNumber: 211,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "flex-1 flex w-full justify-center h-[5vh] items-center fsmall space-x-6 min-h-[50px] max-h-[75px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: `/${query ? "?" + query : ""}#home`,
                        onClick: ()=>handleClick(),
                        className: "h-full",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hide flex-col flex items-center text-center justify-center h-full w-[25vw] max-w-[100px] rounded-full bubble",
                            children: "Home"
                        }, void 0, false, {
                            fileName: "[project]/app/_components/header.tsx",
                            lineNumber: 217,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/_components/header.tsx",
                        lineNumber: 216,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-center h-full w-fit rounded-full bubble",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: `/${query ? "?" + query : ""}#cas`,
                                className: "h-full",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    id: "headerLabel",
                                    className: "flex w-[25vw] flex-col text-center max-w-[100px] items-center justify-center h-full rounded-full",
                                    children: "CAS"
                                }, void 0, false, {
                                    fileName: "[project]/app/_components/header.tsx",
                                    lineNumber: 223,
                                    columnNumber: 21
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/_components/header.tsx",
                                lineNumber: 222,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                id: "headerSearchBar",
                                className: "flex justify-center items-center opacity-0 w-0 pointer-events-none",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$_components$2f$searchBar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/app/_components/header.tsx",
                                    lineNumber: 228,
                                    columnNumber: 21
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/_components/header.tsx",
                                lineNumber: 227,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/_components/header.tsx",
                        lineNumber: 221,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: `/${query ? "?" + query : ""}#about`,
                        onClick: ()=>handleClick(),
                        className: "h-full",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hide flex-col flex items-center text-center justify-center h-full w-[25vw] max-w-[100px] rounded-full bubble",
                            children: "About"
                        }, void 0, false, {
                            fileName: "[project]/app/_components/header.tsx",
                            lineNumber: 232,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/_components/header.tsx",
                        lineNumber: 231,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/_components/header.tsx",
                lineNumber: 215,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hidden md:flex h-full aspect-square"
            }, void 0, false, {
                fileName: "[project]/app/_components/header.tsx",
                lineNumber: 238,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/_components/header.tsx",
        lineNumber: 210,
        columnNumber: 9
    }, this);
}
}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__b5b8eadf._.js.map