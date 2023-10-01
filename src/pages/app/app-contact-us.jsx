import { PaperClipIcon } from "@heroicons/react/20/solid";
import React from "react";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';



const ContactDetailsComponent=({contactDetails})=>{
    return (
        <div>
        <div className="px-4 sm:px-0">
        <h3 className="text-base font-semibold leading-7 text-gray-900">
          Contact Us
        </h3>
        <span className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
          Please allow us to help you !
        </span>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          {contactDetails.map((contact, key) => (
            <div key={key} className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                {contact.Heading}
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {contact.content}
              </dd>
            </div>
          ))}
        </dl>
      </div>
      </div>
    )
}


   
  const RaiseTicketComponent=()=> {
    return (
      <div className="max-w-sm m-auto">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Order Id
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                Query Type
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
            </div>
            <div className="col-span-full">
              <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                Details
              </label>
              <div className="mt-2">
                <textarea
                  id="about"
                  name="about"
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={''}
                />
              </div>
              <span className="mt-3 text-sm leading-6 text-gray-600">Please Enter complete details</span>
            </div>    
            <div className="mt-5">
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-gray-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
              >
                Raise Ticket
              </button>
            </div>
    
      </div>
    );
  }






function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};



export default function AppContactUs() {
  const [value, setValue] = React.useState(0);
  const contactDetails = [
    { Heading: "Shop Name", content: "ABC Store" },
    { Heading: "Phone Number", content: "123456789" },
    { Heading: "Email", content: "ABC@mail.com" },
    { Heading: "Address", content: "ABC Store" },
  ];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' , }} >
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Contact Us" />
          <Tab label="Raise Request"  />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <ContactDetailsComponent contactDetails={contactDetails}/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <RaiseTicketComponent />
      </CustomTabPanel>
    </Box>
  );
}