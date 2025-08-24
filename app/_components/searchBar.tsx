"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [isActive, setIsActive] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("search")?.toString() || "";

  useEffect(() => {
    fetch
  }, [query]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    if (isActive) {
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && isActive) {
    }
  };

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    const formData = new FormData(event.currentTarget);
    const searchQuery = formData.get("search") as string;

    const params = new URLSearchParams();
    if (searchQuery) {
      params.set("search", searchQuery);
    } else {
      params.delete("search");
    }

    router.replace(`${pathname}?${params.toString()}#cas`)
  };

  return (
    <form onSubmit={handleSearch} className="flex flex-row justify-center items-center w-full eading-none min-h-[50px] max-h-[75px] h-[5vh]">
      <input
        type="text"
        name="search"
        defaultValue={initialQuery}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onFocus={() => setIsActive(true)}
        onBlur={() => setIsActive(false)}
        placeholder="search a CAS experience"
        className="flex-1 truncate [padding-left:clamp(15px,1.5vh,30px)] bg-transparent text-[var(--foreground)] text-sm fsmall placeholder-[var(--foreground)] outline-none"
      />
      <button
        type="button"
        className="round h-full w-10 flex items-center justify-center [padding-right:clamp(15px,1.5vh,30px)]"
      >
        <IoSearch className="w-full h-full" />
      </button>
    </form>
  );
}