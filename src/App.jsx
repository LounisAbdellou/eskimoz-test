import { useMemo, useState } from "react";
import profiles from "./assets/profiles.json";
import Cards from "./components/Cards";

const App = () => {
  const [jobFilter, setJobFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const getFilteredProfiles = useMemo(() => {
    return profiles.filter((profile) => {
      let isValid = true;

      if (jobFilter !== "" && jobFilter !== profile.job) {
        isValid = false;
      } else if (
        searchQuery !== "" &&
        profile.name.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        isValid = false;
      }

      return isValid;
    });
  }, [jobFilter, searchQuery]);

  return (
    <div className="w-full h-full">
      <Cards profiles={getFilteredProfiles} />
    </div>
  );
};

export default App;
