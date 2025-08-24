module.exports = {

"[project]/.next-internal/server/app/api/query/route/actions.js [app-rsc] (server actions loader, ecmascript)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
}}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

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
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/mongoose [external] (mongoose, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("mongoose", () => require("mongoose"));

module.exports = mod;
}}),
"[project]/app/_lib/db.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "dbConnect": ()=>dbConnect,
    "disconnect": ()=>disconnect
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs)");
;
if (!("TURBOPACK ident replacement", globalThis).mongoose) {
    ("TURBOPACK ident replacement", globalThis).mongoose = {
        conn: null,
        promise: null
    };
}
async function dbConnect() {
    try {
        if (("TURBOPACK ident replacement", globalThis).mongoose && ("TURBOPACK ident replacement", globalThis).mongoose.conn) {
            console.log("Connected from previous");
            return ("TURBOPACK ident replacement", globalThis).mongoose.conn;
        } else {
            console.log(process.env.MONGO_URL);
            const conString = process.env.MONGO_URL;
            const promise = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].connect(conString, {
                dbName: "oursweetcomma(db)",
                autoIndex: true
            });
            ("TURBOPACK ident replacement", globalThis).mongoose = {
                conn: await promise,
                promise
            };
            console.log("Newly connected");
            return await promise;
        }
    } catch (error) {
        console.error("Error connecting to the database:", error);
        throw new Error(error.message);
    }
}
const disconnect = ()=>{
    if (!("TURBOPACK ident replacement", globalThis).mongoose.conn) {
        return;
    }
    ("TURBOPACK ident replacement", globalThis).mongoose = null;
    __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].disconnect();
};
}),
"[project]/app/_models/experience.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "Experience": ()=>Experience
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs)");
;
const linkSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema({
    url: {
        type: String,
        required: true
    },
    type: {
        type: String
    }
});
const experienceSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema({
    title: {
        type: String,
        required: true
    },
    cover: {
        type: linkSchema,
        required: true
    },
    evidence: {
        type: linkSchema,
        required: true
    },
    strands: {
        type: [
            String
        ],
        required: true
    },
    dates: {
        type: [
            String
        ],
        required: true
    },
    members: {
        type: [
            String
        ],
        required: true
    },
    los: {
        type: [
            String
        ],
        required: true
    },
    description: {
        type: String,
        required: true
    },
    timeline: {
        type: [
            String
        ],
        required: true
    },
    tips: {
        type: [
            String
        ],
        required: true
    }
});
const Experience = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].models.Experience || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].model('Experience', experienceSchema);
}),
"[project]/app/api/query/route.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "GET": ()=>GET
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$_lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/_lib/db.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$_models$2f$experience$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/_models/experience.ts [app-route] (ecmascript)");
;
;
;
async function GET(request, context) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$_lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dbConnect"])();
        const { searchParams } = new URL(request.url);
        const query = searchParams.get("search") || "";
        if (query === "") {
            const experiences = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$_models$2f$experience$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Experience"].find({});
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(experiences, {
                status: 200
            }); // ok status
        } else {
            const result = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$_models$2f$experience$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Experience"].aggregate([
                {
                    $search: {
                        index: "default",
                        text: {
                            query,
                            path: [
                                "title",
                                "description",
                                "hashtags"
                            ],
                            fuzzy: {
                                maxEdits: 2
                            }
                        }
                    }
                },
                {
                    $limit: 10
                }
            ]);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(result, {
                status: 200
            }); // ok status
        }
    } catch (error) {
        console.error("Error fetching experiences:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "internal server error"
        }, {
            status: 500
        }); // internal server error status
    }
}
}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__0db1a5e9._.js.map