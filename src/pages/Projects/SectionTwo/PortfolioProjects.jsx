import React, { useEffect, useRef, useState } from "react";
import portfolioListData from "../../../assets/Data/protfoliolists";
import ProjectCard from "../../../components/common/ProjectCard/ProjectCard";

const PortfolioProjects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const filterContainerRef = useRef(null);

  const filteredProjects = portfolioListData.filter((project) => {
    if (selectedCategory === "All") return true;
    return project.category === selectedCategory;
  });

  useEffect(() => {
    if (filterContainerRef.current) {
      filterContainerRef.current.scrollLeft = -200;
    }
  }, []);

  return (
    <div className='mt-12 md:mt-40 mb-16'>
      <div
        className='filter-buttons flex justify-center space-x-4 mb-16 overflow-x-auto scrollbar-hide'
        ref={filterContainerRef}
      >
        <div className='flex space-x-4'>
          {[
            "All",
            "E Commerce",
            "Mobile App Development",
            "Website Design & Development",
          ].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-[50px] text-white ${
                selectedCategory === category ? "#143cff" : "bg-gray-300"
              } whitespace-nowrap`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className='btm-prt'>
        <div className='cards-container grid sm:grid-cols-2 lg:grid-cols-3 gap-10'>
          {filteredProjects.map((list) => (
            <ProjectCard
              key={list.id}
              title={list.title}
              tech={list.tech}
              img={list.img}
              link={list.link}
              tdelay={list.titledelay}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioProjects;
