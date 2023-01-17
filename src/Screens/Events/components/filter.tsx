import { useState } from "react";
import { CategoryData, FilterData, sliderOpts } from "../../../Data/dataTypes";

const EventsFilter = () => {
  const Filters: Array<FilterData> = [
    {
      name: "Free",
      opposite: "Paid",
    },
    {
      name: "On Campus",
      opposite: "Off Campus",
    },
    {
      name: "Food & Drinks",
      opposite: "No Food",
    },
  ];
  const Categories: Array<CategoryData> = [
    {
      name: "All",
    },
    {
      name: "Academic/Career",
    },
    {
      name: "Campus Communities",
    },
    {
      name: "Constituents",
    },
    {
      name: "Councils & Collectives",
    },
    {
      name: "Hobby",
    },
    {
      name: "Gaming",
    },
    {
      name: "Indigenous",
    },
    {
      name: "International/Cultural",
    },
    {
      name: "Political",
    },
    {
      name: "Religious/Spiritual",
    },
    {
      name: "Sports and Fitness",
    },
    {
      name: "Volunteering",
    },
  ];

  let BoolArrInitCategory: boolean[] = [];

  Categories.forEach((f) => {
    BoolArrInitCategory.push(false);
  });
  BoolArrInitCategory[0] = true;
  const [catState, setCatState] = useState([...BoolArrInitCategory]);

  let BoolArrInitFilter: sliderOpts[] = [];
  Filters.forEach((f) => {
    BoolArrInitFilter.push({ op1: false, op2: false });
  });
  const [filterState, setFilterState] = useState([...BoolArrInitFilter]);

  const handleFilterClick = (index: number) => {
    filterState[index].op1 = !filterState[index].op1;
    if (filterState[index].op2) {
      filterState[index].op2 = !filterState[index].op2;
    }
    setFilterState([...filterState]);
  };

  const handleCategoryClick = (index: number) => {
    if (index !== 0) {
      catState[index] = !catState[index];
      catState[0] = false;
      setCatState([...catState]);
    }
    if (index === 0) {
      setCatState([...BoolArrInitCategory]);
    }
  };

  return (
    <>
      <div className="w-full h-full p-4 text-black rounded-lg bg-BlueGrey dark:bg-BlueBlack dark:text-white duration-ThemeDuration">
        <div className="flex flex-row justify-between">
          <h1 className="text-2xl font-bold text-center text-black h-fit dark:text-WhiteBG">
            Filters
          </h1>
          <div className="flex flex-col justify-center">
            <button
              className="text-base font-bold text-center duration-150 h-fit text-DarkRed hover:text-Red dark:text-Red dark:hover:text-DarkRed"
              onClick={() => setFilterState([...BoolArrInitFilter])}
            >
              Reset
            </button>
          </div>
        </div>
        <div className="mt-4 space-y-4">
          {Filters.map((filters, index) => {
            return (
              <>
                <div className="flex flex-row space-x-4 text-base font-bold text-white">
                  <button
                    onClick={() => {
                      handleFilterClick(index);
                    }}
                    className={`w-full rounded-lg p-1 duration-150 ${
                      filterState[index].op1
                        ? "bg-Green hover:bg-DarkGreen active:bg-DarkBlue"
                        : "bg-Blue hover:bg-DarkBlue active:bg-DarkGreen"
                    }`}
                  >
                    <div className="text-center">{filters.name}</div>
                  </button>
                  <button
                    onClick={() => {
                      filterState[index].op2 = !filterState[index].op2;
                      if (filterState[index].op1) {
                        filterState[index].op1 = !filterState[index].op1;
                      }
                      setFilterState([...filterState]);
                    }}
                    className={`w-full rounded-lg p-1 duration-150 ${
                      filterState[index].op2
                        ? "bg-Green hover:bg-DarkGreen active:bg-DarkBlue"
                        : "bg-Blue hover:bg-DarkBlue active:bg-DarkGreen"
                    }`}
                  >
                    <div className="text-center">{filters.opposite}</div>
                  </button>
                </div>
              </>
            );
          })}
        </div>
        <div className="flex flex-row justify-between mt-4">
          <h1 className="text-2xl font-bold text-center text-black dark:text-WhiteBG ">
            Categories
          </h1>
          <div className="flex flex-col justify-center">
            <button
              className="text-base font-bold text-center duration-150 h-fit text-DarkRed hover:text-Red dark:text-Red dark:hover:text-DarkRed"
              onClick={() => setCatState([...BoolArrInitCategory])}
            >
              Reset
            </button>
          </div>
        </div>
        <div className="mt-4 space-y-4">
          {Categories.map((category, index) => {
            return (
              <div key={index}>
                <button
                  onClick={() => {
                    handleCategoryClick(index);
                  }}
                  className={`w-full h-fit p-1 rounded-lg duration-150 ${
                    !catState[index]
                      ? "bg-Blue hover:bg-DarkBlue active:bg-DarkGreen"
                      : "bg-Green hover:bg-DarkGreen active:bg-DarkBlue"
                  }`}
                >
                  <h1 className="text-base font-extrabold text-white ">
                    {category.name}
                  </h1>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default EventsFilter;
