import { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import RoadmapContainer from "../components/container/RoadmapContainer";

function Roadmaps() {
  const [roadmaps, setRoadmaps] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await appwriteService.getRoadmaps([]).then((data) => {
      if (data) {
        setRoadmaps(data.documents);
      }
    });
  };

  const LanguageRoadmaps = roadmaps.filter(
    (rd) => rd.category[0] === "Language"
  );

  const RoleRoadmaps = roadmaps.filter((rd) => rd.category[0] === "Role");

  const FrameworkRoadmaps = roadmaps.filter(
    (rd) => rd.category[0] === "Framework"
  );

 
  return (
    <>
      <div className="flex flex-col md:flex md:flex-row md:flex-nowrap lg:flex-row lg:flex lg:flex-nowrap gap-12 mx-12 my-8">
        <RoadmapContainer heading={"Languages"} roadmaps={LanguageRoadmaps} />
        <RoadmapContainer heading={"Frameworks"} roadmaps={FrameworkRoadmaps} />
        <RoadmapContainer heading={"Roles"} roadmaps={RoleRoadmaps} />
      </div>
    </>
  );
}

export default Roadmaps;
