module.exports = {

"[project]/.next-internal/server/app/api/experience/route/actions.js [app-rsc] (server actions loader, ecmascript)": ((__turbopack_context__) => {

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
const experienceSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema({
    title: {
        type: String,
        required: true
    },
    images: {
        type: [
            Object
        ],
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
    hashtags: {
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
        type: String,
        required: true
    }
});
const Experience = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].models.Experience || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].model('Experience', experienceSchema);
}),
"[project]/app/api/experience/route.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "GET": ()=>GET,
    "POST": ()=>POST
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$_lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/_lib/db.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$_models$2f$experience$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/_models/experience.ts [app-route] (ecmascript)");
;
;
;
async function GET() {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$_lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dbConnect"])();
        const experiences = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$_models$2f$experience$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Experience"].find({});
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(experiences, {
            status: 200
        }); // ok status
    } catch (error) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "not found error"
        }, {
            status: 404
        }); // not found status
    }
}
async function POST(request) {
    try {
        const experience = await request.json();
        if (!experience.title || !experience.images || !experience.strands || !experience.timeline || !experience.dates || !experience.members || !experience.hashtags || !experience.los || !experience.description || !experience.tips) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "bad request"
            }, {
                status: 400
            }); // bad request status
        }
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$_lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dbConnect"])();
        const newExperience = new __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$_models$2f$experience$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Experience"](experience);
        await newExperience.save();
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(newExperience, {
            status: 201
        }); // created status
    } catch (error) {
        console.log(error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "internal server error"
        }, {
            status: 500
        }); // internal server error status
    }
}
}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__9044fe77._.js.map