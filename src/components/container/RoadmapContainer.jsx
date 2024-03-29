import React from "react";

function RoadmapContainer({ heading, roadmaps }) {

  return (
    <div
      style={{ backgroundColor: "#6b7280" }}
      className="w-1/4 h-64 rounded-lg mx-auto px-4 py-6"
    >
      <div className="text-3xl pb-6 font-bold">{heading}</div>
      {roadmaps.map((rd) => {
        return (
          <div
            className="my-2 text-lg font-semibold hover:underline hover:text-red-400"
            key={rd.link}
          >
            {" "}
            <a href={rd.link} target="_blank" rel="noopener noreferrer">
              {rd.name}
            </a>{" "}
          </div>
        );
      })}
    </div>
  );
}

export default RoadmapContainer;
