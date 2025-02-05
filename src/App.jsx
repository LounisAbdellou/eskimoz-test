import { useMemo, useState } from "react";
import profiles from "./assets/profiles.json";
import Cards from "./components/Cards";
import Dropdown from "./components/Dropdown";
import SearchBar from "./components/SearchBar";

const App = () => {
  let timeout;

  const [jobFilter, setJobFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const getFilteredProfiles = useMemo(() => {
    return profiles.filter((profile) => {
      let isValid = true;

      if (jobFilter !== "" && jobFilter !== profile.job) {
        isValid = false;
      } else if (
        searchQuery !== "" &&
        !profile.name.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        isValid = false;
      }

      return isValid;
    });
  }, [jobFilter, searchQuery]);

  const getJobs = useMemo(() => {
    const jobs = [];

    for (const profile of profiles) {
      if (!jobs.includes(profile.job)) {
        jobs.push(profile.job);
      }
    }

    return jobs;
  }, [profiles]);

  const handleSearchQueries = (query) => {
    window.clearTimeout(timeout);

    timeout = setTimeout(() => setSearchQuery(query), 500);
  };

  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex flex-initial pt-5 pl-5 pr-5 gap-5">
        <SearchBar handleSearchQueries={handleSearchQueries} />
        <Dropdown
          jobs={getJobs}
          jobFilter={jobFilter}
          setJobFilter={setJobFilter}
        />
      </div>
      <Cards profiles={getFilteredProfiles} />
    </div>
  );
};

export default App;
