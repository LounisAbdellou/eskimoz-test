import { useMemo, useState } from "react";
import profiles from "./assets/profiles.json";
import Cards from "./components/Cards";
import Dropdown from "./components/Dropdown";

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

  const getJobs = useMemo(() => {
    const jobs = [];

    for (const profile of profiles) {
      if (!jobs.includes(profile.job)) {
        jobs.push(profile.job);
      }
    }

    return jobs;
  }, [profiles]);

  return (
    <div className="flex flex-col w-full h-full">
      {/* <div className="flex flex-initial pt-5 pl-5 pr-5"> */}
      <div className="flex flex-initial pt-5 pl-5 pr-5 justify-end">
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
