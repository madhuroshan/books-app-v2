import { Input } from "./ui/input";
import { useState } from "react";

const SearchBar = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="w-full">
      <Input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search your thoughts"
      />
    </div>
  );
};

export default SearchBar;
