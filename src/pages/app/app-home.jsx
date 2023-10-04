import { useState } from "react";
import App from "../../App";

import AppHomeItems from "../../components/app-home-items-component";
import SearchComponent from "../../components/search-component";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";
import AppDailog from "../../components/app-dailog";
import { Button } from "@mui/material";
import { useParams } from "react-router-dom";

const CategoryDailog = () => {
  const [open, setOpen] = useState(false);

  const CategoryForm = () => {
    return (
      <>
        <div className="sm:col-span-3">
          <label
            htmlFor="country"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Country
          </label>
          <div className="mt-2">
            <select
              id="country"
              name="country"
              autoComplete="country-name"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
            >
              <option>United States</option>
              <option>Canada</option>
              <option>Mexico</option>
            </select>
          </div>
          <div>
          <Button  autoFocus onClick={()=>setOpen(false)}>
            Search
          </Button>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <button onClick={() => setOpen(true)}>
        <AdjustmentsHorizontalIcon className="sm:w-full  h-10" />
      </button>
      <AppDailog
        open={open}
        setOpen={setOpen}
        heading={"Category"}
        BodyComponent={<CategoryForm />}
      ></AppDailog>
    </>
  );
};

const AppHome = () => {
  const {appId}=useParams()
  console.log(appId)
  return (
    <>
      <div className="flex">
        <CategoryDailog />
        <SearchComponent placeHolder="search" />
      </div>

      <AppHomeItems />
    </>
  );
};
export default AppHome;
