"use client";

import { useState, useEffect, useRef } from "react";
import { type PutBlobResult } from '@vercel/blob';
import { upload } from '@vercel/blob/client';

export default function Admin() {
    const [password, setPassword] = useState("");
    const [accessGranted, setAccessGranted] = useState(false);
    const [experiences, setExperiences] = useState<ExperienceType[]>([]);
    const [editingExp, setEditingExp] = useState<ExperienceType | null>(null);
    const inputCoverRef = useRef<HTMLInputElement>(null);
    const inputEvidenceRef = useRef<HTMLInputElement>(null);
    const [blob, setBlob] = useState<PutBlobResult | null>(null);

    const [text, setText] = useState("");
    const [suggestions, setSuggestions] = useState<string[]>([]);
    const [showDropdown, setShowDropdown] = useState(false);
    const [currentWordStart, setCurrentWordStart] = useState(0);
    const los = ["#Global_Engagement", "#Initiative_&_Planning", "#Challenge_&_Skills", "#Collaborative_Skills", "#Strength_&_Growth", "#Ethics_of_Choices_&_Actions", "#Commitment_&_Perseverance"];


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;        // new input value
        setText(value);                      // update text first

        const cursorPos = e.target.selectionStart || 0;

        // Autocomplete logic
        const match = value.slice(0, cursorPos).match(/#(\w*)$/);
        if (match) {
            const typed = match[1];
            const start = cursorPos - typed.length - 1;
            setCurrentWordStart(start);

            const filtered = los.filter(tag =>
                tag.toLowerCase().includes(`#${typed.toLowerCase()}`)
            );
            setSuggestions(filtered);
            setShowDropdown(filtered.length > 0);
        } else {
            setShowDropdown(false);
        }
    };

    useEffect(() => {
        const parsedLos = Array.from(text.matchAll(/(#[^\s#]+)\s?/g), m => m[1]);
        console.log(parsedLos)
        if (editingExp) {
            setEditingExp({ ...editingExp, los: parsedLos });
        }
    }, [text]);


    const handleSelect = (tag: string) => {
        const before = text.slice(0, currentWordStart);
        const after = text.slice(currentWordStart + (text.slice(currentWordStart).match(/^\S*/) || [""])[0].length);
        setText(before + tag + " " + after);
        setShowDropdown(false);
    };

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        const res = await fetch("/api/admin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
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
    async function saveExperience(exp: ExperienceType) {
        if (exp._id) {
            await fetch(`/api/admin/experience/${exp._id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(exp),
            });
            fetchExperiences();
            setEditingExp(null);
        } else {
            await fetch("/api/admin/experience", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(exp),
            });
            fetchExperiences();
            setEditingExp(null);
        }

    }

    // Delete experience
    async function deleteExperience(id: string) {
        await fetch("/api/admin/experiences", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
        });
        fetchExperiences();
    }

    async function handleAddExperience() {
        const today = new Date();

        const yyyy = today.getFullYear();
        const mm = String(today.getMonth() + 1).padStart(2, "0"); // months start at 0
        const dd = String(today.getDate()).padStart(2, "0");

        const formattedDate = `${yyyy}-${mm}-${dd}`;

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
            dates: [formattedDate, formattedDate],
            members: [],
            los: [],
            timeline: [],
            description: 'description',
            tips: []
        });
    }

    const handleUploadImage = async (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        if (!inputCoverRef.current?.files || inputCoverRef.current.files.length === 0) {
            throw new Error('No file selected');
        }
        const file = inputCoverRef.current.files[0];
        const newBlob = await upload(file.name, file, {
            access: 'public',
            handleUploadUrl: '/api/image',
        });

        setBlob(newBlob);

        if (editingExp) {
            setEditingExp({ ...editingExp, cover: { url: newBlob.url, type: "image" }})
        }
    };

    const handleUploadEvidence = async (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        if (!inputEvidenceRef.current?.files || inputEvidenceRef.current.files.length === 0) {
            throw new Error('No file selected');
        }
        const file = inputEvidenceRef.current.files[0];
        const newBlob = await upload(file.name, file, {
            access: 'public',
            handleUploadUrl: '/api/image',
        });

        setBlob(newBlob);

        if (editingExp) {
            setEditingExp({ ...editingExp, evidence: { url: newBlob.url, type: "image" }})
        }
    };

    const handleChangeTip = (index: number, value: string) => {
        if (!editingExp) return; // guard if null

        const newTips = [...editingExp.tips]; // copy the array
        newTips[index] = value;                // update only the nth element

        setEditingExp({ ...editingExp, tips: newTips });
    };

    const handleAddTip = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault(); // optional if inside a form

        if (!editingExp) return;

        setEditingExp({
            ...editingExp,
            tips: [...(editingExp.tips || []), ""], // add an empty string for a new tip
        });
    };

    const handleDeleteTip = (index: number) => {
        if (!editingExp) return;

        const newTips = editingExp.tips.filter((_, i) => i !== index);

        setEditingExp({ ...editingExp, tips: newTips });
    };

    const handleChangeEvent = (index: number, value: string) => {
        if (!editingExp) return; // guard if null

        const newEvent = [...editingExp.timeline]; // copy the array
        newEvent[index] = value;                // update only the nth element

        setEditingExp({ ...editingExp, timeline: newEvent });
    };

    const handleAddEvent = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault(); // optional if inside a form

        if (!editingExp) return;

        setEditingExp({
            ...editingExp,
            timeline: [...(editingExp.timeline || []), ""], // add an empty string for a new tip
        });
    };

    const handleDeleteEvent = (index: number) => {
        if (!editingExp) return;

        const newEvent = editingExp.timeline.filter((_, i) => i !== index);

        setEditingExp({ ...editingExp, timeline: newEvent });
    };
  
    const handleChangeEvidenceType = (event: React.ChangeEvent<HTMLSelectElement>) => {
        if (!editingExp) return;

        setEditingExp({ ...editingExp, evidence: { url: editingExp.evidence.url, type: event.target.value} });
    };

    useEffect(() => {
        fetchExperiences();
    }, [])

    const initialLoadRef = useRef(true);

    useEffect(() => {
        if (editingExp && initialLoadRef.current) {
            setText(editingExp.los.join(" "));
            initialLoadRef.current = false; // mark that we’ve loaded it once
        }
    }, [editingExp]);


    if (accessGranted) {
        return (
            <div className="flex justify-center flex-col items-center h-screen">
                <div className="flex justify-center items-center h-[70vh] w-full gap-5 flex-col">
                    <h1 className="text-[8vw] lg:text-[4vw] font-['Bad_Script']">Admin</h1>
                    <div className="flex justify-start items-center flex-col overflow-y-scroll scroll-hidden gap-5 w-[80vw] lg:w-[60vw] bubble p-10 rounded-4xl">
                        {experiences.map((exp) => (
                            <div className="flex w-full flex-row flex-grow justify-start gap-5 items-start bubble rounded-4xl pr-10" key={exp._id}>
                                <img className="rounded-4xl w-[15vw] object-cover aspect-[4/3]" src={exp.cover.url}/>
                                <div className="flex-col flex">
                                    <h1  className="w-full flex-row fsmall line-clamp-1 pt-5">{exp.title}</h1>
                                    <p className="fxxsmall">
                                        {exp.dates.map(date =>
                                            (new Date(date)).toLocaleDateString("en-US", {
                                            month: "short",
                                            day: "numeric",
                                            year: "numeric"
                                        })).join(" - ")}
                                    </p>
                                    <p className="overflow-hidden w-full fxxsmall line-clamp-2">{exp.description}</p>
                                </div>
                    
                                <div className="flex ml-auto flex-col justify-between h-full items-end py-5">
                                    <button onClick={() => setEditingExp(exp)}>Edit</button>
                                    <button onClick={() => deleteExperience(exp._id as string)}>Delete</button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="rounded-full h-[5vh] bubble p-5 flex justify-center items-center" onClick={() => handleAddExperience()}>Add Experiences</button>

                    {editingExp && (
                        <div className="fixed bg-[var(--opaque)] h-full w-full flex items-center justify-center p-5 z-100">
                            <div className="rounded-4xl h-[80vh] w-[90vw] lg:w-[60vw] flex flex-col gap-10 bg-[var(--background)] p-5 overflow-hidden">
                                <h2 className="text-2xl font-['Bad_Script'] w-full">Edit Experience</h2>
                                <div className="flex justify-center items-center h-[60vh] bubble rounded-4xl p-5" >
                                    <form
                                        onSubmit={(e) => {
                                        e.preventDefault();
                                        saveExperience(editingExp);
                                        }}
                                        className="flex flex-col h-full w-full gap-5 overflow-scroll"
                                    >
                                        {/* COVER */}
                                        <div className="rounded-full w-full flex justify-center items-start gap-5">
                                            <input
                                                ref={inputCoverRef}
                                                id="coverInput"
                                                type="file"
                                                className="hidden"
                                                onChange={handleUploadImage}
                                            />
                                            <label
                                                htmlFor="coverInput"
                                                className="rounded-full h-[5vh] flex-1 p-5 line-clamp-1 flex justify-center items-center bubble">
                                                Choose Cover
                                            </label>
                                            <input value={editingExp.cover.url} 
                                                className="rounded-full h-[5vh] flex-3 flex p-5 truncate overflow-scroll justify-start scroll-hidden items-center bubble"
                                                onChange={(e) => {
                                                if (!editingExp) return;
                                                setEditingExp({
                                                    ...editingExp,
                                                    cover: { ...editingExp.cover, url: e.target.value },
                                                });
                                                }}>
                                                
                                            </input>
                                        </div>
                                        {/* TITLE */}
                                        <input
                                        type="text"
                                        placeholder="Title"
                                        className="bubble h-[5vh] rounded-4xl p-5 outline-none resize-none"
                                        value={editingExp.title || ""}
                                        onChange={(e) =>
                                            setEditingExp({ ...editingExp, title: e.target.value })
                                        }/>
                                        {/* DATES */}
                                        <div className="flex justify-between gap-5">
                                            <div className="flex flex-row gap-2 h-[5vh] w-full justify-start bubble items-center rounded-full px-5 overflow-scroll">
                                                <p>start:</p>
                                                <input
                                                type="date"
                                                value={editingExp.dates?.[0] || ""}
                                                onChange={(e) =>
                                                    setEditingExp({ ...editingExp, dates: [e.target.value, editingExp.dates?.[1]] })
                                                }
                                                />
                                            </div>
                                            
                                            <div className="flex flex-row gap-2 bubble h-[5vh] w-full justify-start items-center rounded-full px-5 overflow-scroll">
                                                <p>end:</p>
                                                <input
                                                type="date"
                                                value={editingExp.dates?.[1] || ""}
                                                onChange={(e) =>
                                                    setEditingExp({ ...editingExp, dates: [editingExp.dates?.[0], e.target.value] })
                                                }
                                                />
                                            </div>
                                        </div>
                                        {/* STRANDS */}
                                        <div className="rounded-4xl w-full flex flex-row gap-5 justify-center bubble p-5">
                                            <p className="font-medium">CAS Strands:</p>
                                            <div className="flex flex-wrap gap-5">
                                                {["c", "a", "s", "p"].map((strand) => (
                                                <label key={strand} className="flex items-center gap-2">
                                                    <input
                                                    type="checkbox"
                                                    checked={editingExp.strands?.includes(strand) || false}
                                                    onChange={(e) => {
                                                        if (!editingExp) return;
                                                        const updated = e.target.checked
                                                        ? [...(editingExp.strands || []), strand]
                                                        : (editingExp.strands || []).filter((s) => s !== strand);

                                                        setEditingExp({ ...editingExp, strands: updated });
                                                    }}
                                                    />
                                                    {strand === "c" && "Creativity (C)"}
                                                    {strand === "a" && "Activity (A)"}
                                                    {strand === "s" && "Service (S)"}
                                                    {strand === "p" && "Project (P)"}
                                                </label>
                                                ))}
                                            </div>
                                        </div>
                                        {/* DESCRIPTIONS */}
                                        <div className="flex flex-col justify-start items-center bubble min-h-[15vh] rounded-4xl p-5">
                                            <textarea
                                            className="w-full h-full outline-0 resize-none overflow-scroll"
                                            placeholder="Description"
                                            value={editingExp.description || ""}
                                            onChange={(e) =>
                                                setEditingExp({ ...editingExp, description: e.target.value })
                                            }
                                            />
                                        </div>
                                        {/* TIPS */}
                                        <div className="rounded-4xl flex-col bubble p-5 w-full flex justify-center items-center gap-5">
                                            <button className="rounded-full h-[5vh] bubble p-5 w-full flex justify-center items-center" onClick={handleAddTip}>Add tip</button>
                                            {editingExp.tips.map((tip, index) => (
                                                <div key={index} className="bubble h-[10vh] rounded-4xl w-full p-5 flex-row flex justify-start items-center outline-none gap-5">
                                                    <textarea
                                                    className="w-full h-full outline-0 resize-none"
                                                    key={index}
                                                    placeholder="Tips"
                                                    value={tip || ""}
                                                    onChange={(e) => handleChangeTip(index, e.target.value)}
                                                    />
                                                    <button onClick={(e) => handleDeleteTip(index)}>delete</button>
                                                </div>
                                                
                                            ))}
                                        </div>
                                        {/* EVIDENCE */}
                                        <div className="rounded-full w-full flex flex-row justify-center items-start gap-5">
                                            <input
                                                ref={inputEvidenceRef}
                                                id="evidenceInput"
                                                type="file"
                                                className="hidden overflow-scroll"
                                                onChange={handleUploadEvidence}
                                            />
                                            {editingExp?.evidence?.type === "image" && (
                                                <label
                                                    htmlFor="evidenceInput"
                                                    className="rounded-full h-[5vh] flex-1 p-5 truncate flex justify-center items-center bubble overflow-scroll">
                                                    Choose Evidence
                                                </label>
                                            )}
                                            <input value={editingExp.evidence.url} 
                                                className="rounded-full h-[5vh] flex-3 flex p-5 truncate justify-start scroll-hidden items-center bubble overflow-scroll"
                                                onChange={(e) => {
                                                if (!editingExp) return;
                                                    setEditingExp({
                                                        ...editingExp,
                                                        evidence: { ...editingExp.evidence, url: e.target.value },
                                                    });
                                                }}>
                                            </input>                                          
                                            <div className="rounded-full h-[5vh] flex-2 flex justify-center gap-5 items-center bubble">
                                                <p> 
                                                    Evidence Type: 
                                                </p>
                                                
                                                <select
                                                    value={editingExp.evidence.type}
                                                    onChange={(e) => handleChangeEvidenceType(e)}
                                                    >
                                                    <option value="image">image</option>
                                                    <option value="embed">embed</option>
                                                </select>
                                            </div>
                                        </div>
                                        {/* TIMELINE */}
                                        <div className="rounded-4xl flex-col bubble p-5 w-full flex justify-center items-center gap-5">
                                            <button className="rounded-full h-[5vh] bubble p-5 w-full flex justify-center items-center" onClick={handleAddEvent}>Add Event</button>
                                            {editingExp.timeline.map((event, index) => (
                                                <div key={index} className="bubble h-[10vh] w-full rounded-4xl p-5 flex-row flex justify-start items-center outline-none gap-5">
                                                    <textarea
                                                    className="w-full h-full outline-0 resize-none"
                                                    key={index}
                                                    placeholder="Event"
                                                    value={event || ""}
                                                    onChange={(e) => handleChangeEvent(index, e.target.value)}
                                                    />
                                                    <button onClick={(e) => handleDeleteEvent(index)}>delete</button>
                                                </div> 
                                            ))}
                                        </div>
                                        {/* LOS */}
                                        <div className="flex flex-col w-full gap-5">
                                            <div className="flex justify-center items-center px-5 rounded-4xl h-[5vh] bubble overflow-auto">
                                                <input
                                                    type="text"
                                                    value={text}
                                                    onChange={handleChange}
                                                    placeholder="#learning outcomes..."
                                                    className="w-full h-full outline-none resize-none"
                                                />
                                            </div>
                                            {showDropdown && (
                                                <ul className="rounded-4xl h-[15vh] overflow-auto w-full hover:!bg-[var(--bubble)] bubble">
                                                {suggestions.map((tag, i) => (
                                                    <li
                                                    key={i}
                                                    className="cursor-pointer h-[5vh] px-5 flex items-center hover:bg-[var(--bubble-hover)] hover:shadow-[var(--shadow-hover)]"
                                                    onClick={() => handleSelect(tag)}
                                                    >
                                                    {tag}
                                                    </li>
                                                ))}
                                                </ul>
                                            )}
                                        </div>
                                            <div className="flex justify-between items-center">
                                            <button
                                                type="button"
                                                onClick={() => {
                                                initialLoadRef.current = true;
                                                setEditingExp(null);
                                                }}

                                                className="bubble h-[5vh] rounded-full px-5"
                                            >
                                                Cancel
                                            </button>
                                            <button
                                                type="submit"
                                                onClick={() => saveExperience(editingExp)}
                                                className="bubble h-[5vh] rounded-full px-5"
                                            >
                                                Save
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        )}
                </div>
            </div>
        );
        }

    return (
        <div className="flex justify-center items-center h-screen">
            <form className="flex justify-center items-center bubble rounded-full h-[5vh] px-5" onSubmit={handleSubmit}>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
    }
