(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/app/admin/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>Admin
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$blob$2f$dist$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@vercel/blob/dist/client.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function Admin() {
    _s();
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [accessGranted, setAccessGranted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [experiences, setExperiences] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [editingExp, setEditingExp] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const inputCoverRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inputEvidenceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [blob, setBlob] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [text, setText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [suggestions, setSuggestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [showDropdown, setShowDropdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentWordStart, setCurrentWordStart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const los = [
        "#Global_Engagement",
        "#Initiative_&_Planning",
        "#Challenge_&_Skills",
        "#Collaborative_Skills",
        "#Strength_&_Growth",
        "#Ethics_of_Choices_&_Actions",
        "#Commitment_&_Perseverance"
    ];
    const handleChange = (e)=>{
        const value = e.target.value; // new input value
        setText(value); // update text first
        const cursorPos = e.target.selectionStart || 0;
        // Autocomplete logic
        const match = value.slice(0, cursorPos).match(/#(\w*)$/);
        if (match) {
            const typed = match[1];
            const start = cursorPos - typed.length - 1;
            setCurrentWordStart(start);
            const filtered = los.filter((tag)=>tag.toLowerCase().includes("#".concat(typed.toLowerCase())));
            setSuggestions(filtered);
            setShowDropdown(filtered.length > 0);
        } else {
            setShowDropdown(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Admin.useEffect": ()=>{
            const parsedLos = Array.from(text.matchAll(/(#[^\s#]+)\s?/g), {
                "Admin.useEffect.parsedLos": (m)=>m[1]
            }["Admin.useEffect.parsedLos"]);
            console.log(parsedLos);
            if (editingExp) {
                setEditingExp({
                    ...editingExp,
                    los: parsedLos
                });
            }
        }
    }["Admin.useEffect"], [
        text
    ]);
    const handleSelect = (tag)=>{
        const before = text.slice(0, currentWordStart);
        const after = text.slice(currentWordStart + (text.slice(currentWordStart).match(/^\S*/) || [
            ""
        ])[0].length);
        setText(before + tag + " " + after);
        setShowDropdown(false);
    };
    async function handleSubmit(e) {
        e.preventDefault();
        const res = await fetch("/api/admin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                password
            })
        });
        const data = await res.json();
        if (data.success) {
            setAccessGranted(true);
        } else {
            alert("wrong password");
        }
    }
    // Fetch experiences
    async function fetchExperiences() {
        const res = await fetch("/api/admin/experience");
        const data = await res.json();
        setExperiences(data);
    }
    // Add or update experience
    async function saveExperience(exp) {
        if (exp._id) {
            await fetch("/api/admin/experience/".concat(exp._id), {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(exp)
            });
            fetchExperiences();
            setEditingExp(null);
        } else {
            await fetch("/api/admin/experience", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(exp)
            });
            fetchExperiences();
            setEditingExp(null);
        }
    }
    // Delete experience
    async function deleteExperience(id) {
        await fetch("/api/admin/experiences", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id
            })
        });
        fetchExperiences();
    }
    async function handleAddExperience() {
        const today = new Date();
        const yyyy = today.getFullYear();
        const mm = String(today.getMonth() + 1).padStart(2, "0"); // months start at 0
        const dd = String(today.getDate()).padStart(2, "0");
        const formattedDate = "".concat(yyyy, "-").concat(mm, "-").concat(dd);
        setEditingExp({
            title: "title",
            cover: {
                url: '',
                type: 'image'
            },
            evidence: {
                url: '',
                type: 'embed'
            },
            strands: [],
            dates: [
                formattedDate,
                formattedDate
            ],
            members: [],
            los: [],
            timeline: [],
            description: 'description',
            tips: []
        });
    }
    const handleUploadImage = async (event)=>{
        var _inputCoverRef_current;
        event.preventDefault();
        if (!((_inputCoverRef_current = inputCoverRef.current) === null || _inputCoverRef_current === void 0 ? void 0 : _inputCoverRef_current.files) || inputCoverRef.current.files.length === 0) {
            throw new Error('No file selected');
        }
        const file = inputCoverRef.current.files[0];
        const newBlob = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$blob$2f$dist$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["upload"])(file.name, file, {
            access: 'public',
            handleUploadUrl: '/api/image'
        });
        setBlob(newBlob);
        if (editingExp) {
            setEditingExp({
                ...editingExp,
                cover: {
                    url: newBlob.url,
                    type: "image"
                }
            });
        }
    };
    const handleUploadEvidence = async (event)=>{
        var _inputEvidenceRef_current;
        event.preventDefault();
        if (!((_inputEvidenceRef_current = inputEvidenceRef.current) === null || _inputEvidenceRef_current === void 0 ? void 0 : _inputEvidenceRef_current.files) || inputEvidenceRef.current.files.length === 0) {
            throw new Error('No file selected');
        }
        const file = inputEvidenceRef.current.files[0];
        const newBlob = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$blob$2f$dist$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["upload"])(file.name, file, {
            access: 'public',
            handleUploadUrl: '/api/image'
        });
        setBlob(newBlob);
        if (editingExp) {
            setEditingExp({
                ...editingExp,
                evidence: {
                    url: newBlob.url,
                    type: "image"
                }
            });
        }
    };
    const handleChangeTip = (index, value)=>{
        if (!editingExp) return; // guard if null
        const newTips = [
            ...editingExp.tips
        ]; // copy the array
        newTips[index] = value; // update only the nth element
        setEditingExp({
            ...editingExp,
            tips: newTips
        });
    };
    const handleAddTip = (e)=>{
        e.preventDefault(); // optional if inside a form
        if (!editingExp) return;
        setEditingExp({
            ...editingExp,
            tips: [
                ...editingExp.tips || [],
                ""
            ]
        });
    };
    const handleDeleteTip = (index)=>{
        if (!editingExp) return;
        const newTips = editingExp.tips.filter((_, i)=>i !== index);
        setEditingExp({
            ...editingExp,
            tips: newTips
        });
    };
    const handleChangeEvent = (index, value)=>{
        if (!editingExp) return; // guard if null
        const newEvent = [
            ...editingExp.timeline
        ]; // copy the array
        newEvent[index] = value; // update only the nth element
        setEditingExp({
            ...editingExp,
            timeline: newEvent
        });
    };
    const handleAddEvent = (e)=>{
        e.preventDefault(); // optional if inside a form
        if (!editingExp) return;
        setEditingExp({
            ...editingExp,
            timeline: [
                ...editingExp.timeline || [],
                ""
            ]
        });
    };
    const handleDeleteEvent = (index)=>{
        if (!editingExp) return;
        const newEvent = editingExp.timeline.filter((_, i)=>i !== index);
        setEditingExp({
            ...editingExp,
            timeline: newEvent
        });
    };
    const handleChangeEvidenceType = (event)=>{
        if (!editingExp) return;
        setEditingExp({
            ...editingExp,
            evidence: {
                url: editingExp.evidence.url,
                type: event.target.value
            }
        });
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Admin.useEffect": ()=>{
            fetchExperiences();
        }
    }["Admin.useEffect"], []);
    const initialLoadRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Admin.useEffect": ()=>{
            if (editingExp && initialLoadRef.current) {
                setText(editingExp.los.join(" "));
                initialLoadRef.current = false; // mark that we’ve loaded it once
            }
        }
    }["Admin.useEffect"], [
        editingExp
    ]);
    if (accessGranted) {
        var _editingExp_dates, _editingExp_dates1, _editingExp_evidence;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-center flex-col items-center h-screen",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center items-center h-[70vh] w-full gap-5 flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-[8vw] lg:text-[4vw] font-['Bad_Script']",
                        children: "Admin"
                    }, void 0, false, {
                        fileName: "[project]/app/admin/page.tsx",
                        lineNumber: 263,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-start items-center flex-col overflow-y-scroll scroll-hidden gap-5 w-[80vw] lg:w-[60vw] bubble p-10 rounded-4xl",
                        children: experiences.map((exp)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex w-full flex-row flex-grow justify-start gap-5 items-start bubble rounded-4xl pr-10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        className: "rounded-4xl w-[15vw] object-cover aspect-[4/3]",
                                        src: exp.cover.url
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/page.tsx",
                                        lineNumber: 267,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-col flex",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "w-full flex-row fsmall line-clamp-1 pt-5",
                                                children: exp.title
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/page.tsx",
                                                lineNumber: 269,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "fxxsmall",
                                                children: exp.dates.map((date)=>new Date(date).toLocaleDateString("en-US", {
                                                        month: "short",
                                                        day: "numeric",
                                                        year: "numeric"
                                                    })).join(" - ")
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/page.tsx",
                                                lineNumber: 270,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "overflow-hidden w-full fxxsmall line-clamp-2",
                                                children: exp.description
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/page.tsx",
                                                lineNumber: 278,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/page.tsx",
                                        lineNumber: 268,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex ml-auto flex-col justify-between h-full items-end py-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setEditingExp(exp),
                                                children: "Edit"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/page.tsx",
                                                lineNumber: 282,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>deleteExperience(exp._id),
                                                children: "Delete"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/page.tsx",
                                                lineNumber: 283,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/page.tsx",
                                        lineNumber: 281,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, exp._id, true, {
                                fileName: "[project]/app/admin/page.tsx",
                                lineNumber: 266,
                                columnNumber: 29
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/admin/page.tsx",
                        lineNumber: 264,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "rounded-full h-[5vh] bubble p-5 flex justify-center items-center",
                        onClick: ()=>handleAddExperience(),
                        children: "Add Experiences"
                    }, void 0, false, {
                        fileName: "[project]/app/admin/page.tsx",
                        lineNumber: 288,
                        columnNumber: 21
                    }, this),
                    editingExp && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed bg-[var(--opaque)] h-full w-full flex items-center justify-center p-5 z-100",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-4xl h-[80vh] w-[90vw] lg:w-[60vw] flex flex-col gap-10 bg-[var(--background)] p-5 overflow-hidden",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl font-['Bad_Script'] w-full",
                                    children: "Edit Experience"
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/page.tsx",
                                    lineNumber: 293,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-center items-center h-[60vh] bubble rounded-4xl p-5",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                        onSubmit: (e)=>{
                                            e.preventDefault();
                                            saveExperience(editingExp);
                                        },
                                        className: "flex flex-col h-full w-full gap-5 overflow-scroll",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "rounded-full w-full flex justify-center items-start gap-5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        ref: inputCoverRef,
                                                        id: "coverInput",
                                                        type: "file",
                                                        className: "hidden",
                                                        onChange: handleUploadImage
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/page.tsx",
                                                        lineNumber: 304,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        htmlFor: "coverInput",
                                                        className: "rounded-full h-[5vh] flex-1 p-5 line-clamp-1 flex justify-center items-center bubble",
                                                        children: "Choose Cover"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/page.tsx",
                                                        lineNumber: 311,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        value: editingExp.cover.url,
                                                        className: "rounded-full h-[5vh] flex-3 flex p-5 truncate overflow-scroll justify-start scroll-hidden items-center bubble",
                                                        onChange: (e)=>{
                                                            if (!editingExp) return;
                                                            setEditingExp({
                                                                ...editingExp,
                                                                cover: {
                                                                    ...editingExp.cover,
                                                                    url: e.target.value
                                                                }
                                                            });
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/page.tsx",
                                                        lineNumber: 316,
                                                        columnNumber: 45
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/page.tsx",
                                                lineNumber: 303,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                placeholder: "Title",
                                                className: "bubble h-[5vh] rounded-4xl p-5 outline-none resize-none",
                                                value: editingExp.title || "",
                                                onChange: (e)=>setEditingExp({
                                                        ...editingExp,
                                                        title: e.target.value
                                                    })
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/page.tsx",
                                                lineNumber: 329,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between gap-5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-row gap-2 h-[5vh] w-full justify-start bubble items-center rounded-full px-5 overflow-scroll",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                children: "start:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/page.tsx",
                                                                lineNumber: 340,
                                                                columnNumber: 49
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "date",
                                                                value: ((_editingExp_dates = editingExp.dates) === null || _editingExp_dates === void 0 ? void 0 : _editingExp_dates[0]) || "",
                                                                onChange: (e)=>{
                                                                    var _editingExp_dates;
                                                                    return setEditingExp({
                                                                        ...editingExp,
                                                                        dates: [
                                                                            e.target.value,
                                                                            (_editingExp_dates = editingExp.dates) === null || _editingExp_dates === void 0 ? void 0 : _editingExp_dates[1]
                                                                        ]
                                                                    });
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/page.tsx",
                                                                lineNumber: 341,
                                                                columnNumber: 49
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/admin/page.tsx",
                                                        lineNumber: 339,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-row gap-2 bubble h-[5vh] w-full justify-start items-center rounded-full px-5 overflow-scroll",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                children: "end:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/page.tsx",
                                                                lineNumber: 351,
                                                                columnNumber: 49
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "date",
                                                                value: ((_editingExp_dates1 = editingExp.dates) === null || _editingExp_dates1 === void 0 ? void 0 : _editingExp_dates1[1]) || "",
                                                                onChange: (e)=>{
                                                                    var _editingExp_dates;
                                                                    return setEditingExp({
                                                                        ...editingExp,
                                                                        dates: [
                                                                            (_editingExp_dates = editingExp.dates) === null || _editingExp_dates === void 0 ? void 0 : _editingExp_dates[0],
                                                                            e.target.value
                                                                        ]
                                                                    });
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/page.tsx",
                                                                lineNumber: 352,
                                                                columnNumber: 49
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/admin/page.tsx",
                                                        lineNumber: 350,
                                                        columnNumber: 45
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/page.tsx",
                                                lineNumber: 338,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "rounded-4xl w-full flex flex-row gap-5 justify-center bubble p-5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-medium",
                                                        children: "CAS Strands:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/page.tsx",
                                                        lineNumber: 363,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-wrap gap-5",
                                                        children: [
                                                            "c",
                                                            "a",
                                                            "s",
                                                            "p"
                                                        ].map((strand)=>{
                                                            var _editingExp_strands;
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "flex items-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "checkbox",
                                                                        checked: ((_editingExp_strands = editingExp.strands) === null || _editingExp_strands === void 0 ? void 0 : _editingExp_strands.includes(strand)) || false,
                                                                        onChange: (e)=>{
                                                                            if (!editingExp) return;
                                                                            const updated = e.target.checked ? [
                                                                                ...editingExp.strands || [],
                                                                                strand
                                                                            ] : (editingExp.strands || []).filter((s)=>s !== strand);
                                                                            setEditingExp({
                                                                                ...editingExp,
                                                                                strands: updated
                                                                            });
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/page.tsx",
                                                                        lineNumber: 367,
                                                                        columnNumber: 53
                                                                    }, this),
                                                                    strand === "c" && "Creativity (C)",
                                                                    strand === "a" && "Activity (A)",
                                                                    strand === "s" && "Service (S)",
                                                                    strand === "p" && "Project (P)"
                                                                ]
                                                            }, strand, true, {
                                                                fileName: "[project]/app/admin/page.tsx",
                                                                lineNumber: 366,
                                                                columnNumber: 49
                                                            }, this);
                                                        })
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/page.tsx",
                                                        lineNumber: 364,
                                                        columnNumber: 45
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/page.tsx",
                                                lineNumber: 362,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col justify-start items-center bubble min-h-[15vh] rounded-4xl p-5",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                    className: "w-full h-full outline-0 resize-none overflow-scroll",
                                                    placeholder: "Description",
                                                    value: editingExp.description || "",
                                                    onChange: (e)=>setEditingExp({
                                                            ...editingExp,
                                                            description: e.target.value
                                                        })
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/page.tsx",
                                                    lineNumber: 389,
                                                    columnNumber: 45
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/page.tsx",
                                                lineNumber: 388,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "rounded-4xl flex-col bubble p-5 w-full flex justify-center items-center gap-5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "rounded-full h-[5vh] bubble p-5 w-full flex justify-center items-center",
                                                        onClick: handleAddTip,
                                                        children: "Add tip"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/page.tsx",
                                                        lineNumber: 400,
                                                        columnNumber: 45
                                                    }, this),
                                                    editingExp.tips.map((tip, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bubble h-[10vh] rounded-4xl w-full p-5 flex-row flex justify-start items-center outline-none gap-5",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                    className: "w-full h-full outline-0 resize-none",
                                                                    placeholder: "Tips",
                                                                    value: tip || "",
                                                                    onChange: (e)=>handleChangeTip(index, e.target.value)
                                                                }, index, false, {
                                                                    fileName: "[project]/app/admin/page.tsx",
                                                                    lineNumber: 403,
                                                                    columnNumber: 53
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: (e)=>handleDeleteTip(index),
                                                                    children: "delete"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/page.tsx",
                                                                    lineNumber: 410,
                                                                    columnNumber: 53
                                                                }, this)
                                                            ]
                                                        }, index, true, {
                                                            fileName: "[project]/app/admin/page.tsx",
                                                            lineNumber: 402,
                                                            columnNumber: 49
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/page.tsx",
                                                lineNumber: 399,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "rounded-full w-full flex flex-row justify-center items-start gap-5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        ref: inputEvidenceRef,
                                                        id: "evidenceInput",
                                                        type: "file",
                                                        className: "hidden overflow-scroll",
                                                        onChange: handleUploadEvidence
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/page.tsx",
                                                        lineNumber: 417,
                                                        columnNumber: 45
                                                    }, this),
                                                    (editingExp === null || editingExp === void 0 ? void 0 : (_editingExp_evidence = editingExp.evidence) === null || _editingExp_evidence === void 0 ? void 0 : _editingExp_evidence.type) === "image" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        htmlFor: "evidenceInput",
                                                        className: "rounded-full h-[5vh] flex-1 p-5 truncate flex justify-center items-center bubble overflow-scroll",
                                                        children: "Choose Evidence"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/page.tsx",
                                                        lineNumber: 425,
                                                        columnNumber: 49
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        value: editingExp.evidence.url,
                                                        className: "rounded-full h-[5vh] flex-3 flex p-5 truncate justify-start scroll-hidden items-center bubble overflow-scroll",
                                                        onChange: (e)=>{
                                                            if (!editingExp) return;
                                                            setEditingExp({
                                                                ...editingExp,
                                                                evidence: {
                                                                    ...editingExp.evidence,
                                                                    url: e.target.value
                                                                }
                                                            });
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/page.tsx",
                                                        lineNumber: 431,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "rounded-full h-[5vh] flex-2 flex justify-center gap-5 items-center bubble",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                children: "Evidence Type:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/page.tsx",
                                                                lineNumber: 442,
                                                                columnNumber: 49
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                value: editingExp.evidence.type,
                                                                onChange: (e)=>handleChangeEvidenceType(e),
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "image",
                                                                        children: "image"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/page.tsx",
                                                                        lineNumber: 450,
                                                                        columnNumber: 53
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "embed",
                                                                        children: "embed"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/page.tsx",
                                                                        lineNumber: 451,
                                                                        columnNumber: 53
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/admin/page.tsx",
                                                                lineNumber: 446,
                                                                columnNumber: 49
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/admin/page.tsx",
                                                        lineNumber: 441,
                                                        columnNumber: 45
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/page.tsx",
                                                lineNumber: 416,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "rounded-4xl flex-col bubble p-5 w-full flex justify-center items-center gap-5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "rounded-full h-[5vh] bubble p-5 w-full flex justify-center items-center",
                                                        onClick: handleAddEvent,
                                                        children: "Add Event"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/page.tsx",
                                                        lineNumber: 457,
                                                        columnNumber: 45
                                                    }, this),
                                                    editingExp.timeline.map((event, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bubble h-[10vh] w-full rounded-4xl p-5 flex-row flex justify-start items-center outline-none gap-5",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                    className: "w-full h-full outline-0 resize-none",
                                                                    placeholder: "Event",
                                                                    value: event || "",
                                                                    onChange: (e)=>handleChangeEvent(index, e.target.value)
                                                                }, index, false, {
                                                                    fileName: "[project]/app/admin/page.tsx",
                                                                    lineNumber: 460,
                                                                    columnNumber: 53
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: (e)=>handleDeleteEvent(index),
                                                                    children: "delete"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/page.tsx",
                                                                    lineNumber: 467,
                                                                    columnNumber: 53
                                                                }, this)
                                                            ]
                                                        }, index, true, {
                                                            fileName: "[project]/app/admin/page.tsx",
                                                            lineNumber: 459,
                                                            columnNumber: 49
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/page.tsx",
                                                lineNumber: 456,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col w-full gap-5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-center items-center px-5 rounded-4xl h-[5vh] bubble overflow-auto",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            value: text,
                                                            onChange: handleChange,
                                                            placeholder: "#learning outcomes...",
                                                            className: "w-full h-full outline-none resize-none"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/page.tsx",
                                                            lineNumber: 474,
                                                            columnNumber: 49
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/page.tsx",
                                                        lineNumber: 473,
                                                        columnNumber: 45
                                                    }, this),
                                                    showDropdown && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        className: "rounded-4xl h-[15vh] overflow-auto w-full hover:!bg-[var(--bubble)] bubble",
                                                        children: suggestions.map((tag, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                className: "cursor-pointer h-[5vh] px-5 flex items-center hover:bg-[var(--bubble-hover)] hover:shadow-[var(--shadow-hover)]",
                                                                onClick: ()=>handleSelect(tag),
                                                                children: tag
                                                            }, i, false, {
                                                                fileName: "[project]/app/admin/page.tsx",
                                                                lineNumber: 485,
                                                                columnNumber: 53
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/page.tsx",
                                                        lineNumber: 483,
                                                        columnNumber: 49
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/page.tsx",
                                                lineNumber: 472,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>{
                                                            initialLoadRef.current = true;
                                                            setEditingExp(null);
                                                        },
                                                        className: "bubble h-[5vh] rounded-full px-5",
                                                        children: "Cancel"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/page.tsx",
                                                        lineNumber: 497,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "submit",
                                                        onClick: ()=>saveExperience(editingExp),
                                                        className: "bubble h-[5vh] rounded-full px-5",
                                                        children: "Save"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/page.tsx",
                                                        lineNumber: 508,
                                                        columnNumber: 45
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/page.tsx",
                                                lineNumber: 496,
                                                columnNumber: 45
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/page.tsx",
                                        lineNumber: 295,
                                        columnNumber: 37
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/page.tsx",
                                    lineNumber: 294,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/page.tsx",
                            lineNumber: 292,
                            columnNumber: 29
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/admin/page.tsx",
                        lineNumber: 291,
                        columnNumber: 25
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/page.tsx",
                lineNumber: 262,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/admin/page.tsx",
            lineNumber: 261,
            columnNumber: 13
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex justify-center items-center h-screen",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            className: "flex justify-center items-center bubble rounded-full h-[5vh] px-5",
            onSubmit: handleSubmit,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "password",
                    value: password,
                    onChange: (e)=>setPassword(e.target.value),
                    placeholder: "Enter password"
                }, void 0, false, {
                    fileName: "[project]/app/admin/page.tsx",
                    lineNumber: 529,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "submit",
                    children: "Submit"
                }, void 0, false, {
                    fileName: "[project]/app/admin/page.tsx",
                    lineNumber: 535,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/admin/page.tsx",
            lineNumber: 528,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/admin/page.tsx",
        lineNumber: 527,
        columnNumber: 9
    }, this);
}
_s(Admin, "aIG6fyiG3ZcZBcyNtUpl/LZdbiQ=");
_c = Admin;
var _c;
__turbopack_context__.k.register(_c, "Admin");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=app_admin_page_tsx_9b891d59._.js.map