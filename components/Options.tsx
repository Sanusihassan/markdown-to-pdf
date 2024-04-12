"use client";

import type { tool as _tool, edit_page } from "../content";
import type { edit_page as _ } from "../content";
import { XIcon } from "@heroicons/react/solid";
import { Modal } from "react-bootstrap";
import isEqual from "lodash.isequal";
export interface OptionsProps {
  show: boolean;
  onHide: () => void;
  options?: edit_page["options"];
}
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import React, { useEffect, useState } from "react";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { ToolState, setField } from "@/src/store";
// import 'react-tabs/style/react-tabs.css';

const Options: React.FC<OptionsProps> = ({ show, onHide, options }) => {
  // Define options for each tab
  const themeOptions = [
    { value: "github", label: "Github" },
    { value: "github-dark", label: "Github Dark" },
    { value: "almond", label: "Almond" },
    { value: "awsm", label: "Awsm" },
    { value: "axist", label: "Axist" },
    { value: "bamboo", label: "Bamboo" },
    { value: "bullframe", label: "Bullframe" },
    { value: "holiday", label: "Holiday" },
    { value: "kacit", label: "Kacit" },
    { value: "latex", label: "Latex" },
    { value: "marx", label: "Marx" },
    { value: "mini", label: "Mini" },
    { value: "modest", label: "Modest" },
    { value: "new", label: "New" },
    { value: "no-class", label: "No Class" },
    { value: "pico", label: "Pico" },
    { value: "retro", label: "Retro" },
    { value: "sakura", label: "Sakura" },
    { value: "sakura-vader", label: "Sakura Vader" },
    { value: "semantic", label: "Semantic" },
    { value: "simple", label: "Simple" },
    { value: "style-sans", label: "Style Sans" },
    { value: "style-serif", label: "Style Serif" },
    { value: "stylize", label: "Stylize" },
    { value: "superstylin", label: "Superstylin" },
    { value: "tacit", label: "Tacit" },
    { value: "vanilla", label: "Vanilla" },
    { value: "water", label: "Water" },
    { value: "water-dark", label: "Water Dark" },
    { value: "writ", label: "Writ" },
  ];
  const [screenSizeLabel, setScreenSizeLabel] = useState<string>(`0`);
  const stateOptions = useSelector(
    (state: { tool: ToolState }) => state.tool.options
  );
  type _t = keyof ToolState["options"];
  // const getScreenSizeLabel = () => {
  //   const screenWidth = window.innerWidth;
  //   return `Your Screen (${screenWidth}px)`;
  // };
  // const [labels, setLabels] = useState<edit_page["options"]["labels"]>({} as edit_page["options"]["labels"]);
  // const { margin, orientation, screen_sizes } = labels;
  let LocalstateOptions: ToolState["options"];
  useEffect(() => {
    const screenWidth = window.innerWidth;
    setScreenSizeLabel(`(${screenWidth}px)`);
    const stateOptionsJSON = localStorage.getItem("stateOptions");
    if (stateOptionsJSON) {
      LocalstateOptions = JSON.parse(stateOptionsJSON) as ToolState["options"];
      if (!isEqual(stateOptions, LocalstateOptions)) {
        setField({
          options: LocalstateOptions,
        });
      }
    } else {
      // Handle case when stateOptions is not found in local storage
      console.log("stateOptions not found in local storage");
    }
  }, []);
  const dispatch = useDispatch();

  // const { your_screen, mobile, tablet, desktop_144, desktop_hd } = screen_sizes;
  // const { big, no_margin, small } = margin;
  const screenSizeOptions = [
    {
      value: "screen",
      label: `${options?.label_content.screen_sizes.your_screen} ${screenSizeLabel}`,
    },
    {
      value: "Desktop HD (1920px)",
      label: options?.label_content.screen_sizes.desktop_hd,
    },
    {
      value: "Desktop (1440px)",
      label: options?.label_content.screen_sizes.desktop_144,
    },
    {
      value: "Tablet 768px",
      label: options?.label_content.screen_sizes.tablet,
    },
    {
      value: "Mobile (320px)",
      label: options?.label_content.screen_sizes.mobile,
    },
  ];

  const orientationOptions = [
    { value: "Portrait", label: options?.label_content.orientation[0] },
    { value: "Landscape", label: options?.label_content.orientation[1] },
  ];

  const pageSizeOptions = [
    { value: "A4", label: "A4 (210mm × 297mm)" },
    { value: "Letter", label: "Letter (215.9mm × 279.4mm)" },
    { value: "Legal", label: "Legal (215.9mm × 355.6mm)" },
    { value: "A3", label: "A3 (297mm × 420mm)" },
    { value: "A5", label: "A5 (148mm × 210mm)" },
    { value: "US Letter", label: "US Letter (215.9mm × 279.4mm)" },
  ];

  const pageMarginOptions = [
    { value: "No margin", label: options?.label_content.margin.no_margin },
    { value: "Small", label: options?.label_content.margin.small },
    { value: "Big", label: options?.label_content.margin.big },
  ];

  // State to manage the selected options
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  // Function to handle saving options
  const handleSave = () => {
    // Convert the stateOptions object to a JSON string
    const stateOptionsJSON = JSON.stringify(stateOptions);

    // Save the JSON string to local storage under a specific key
    localStorage.setItem("stateOptions", stateOptionsJSON);
  };

  const [activeTab, setActiveTab] = useState("theme");
  const tabs = [
    {
      tab: options?.theme,
      options: themeOptions,
      option_name: "theme",
    },
    {
      tab: options?.screen_size,
      options: screenSizeOptions,
      option_name: "screenSize",
    },
    {
      tab: options?.orientation,
      options: orientationOptions,
      option_name: "orientation",
    },
    {
      tab: options?.page_size,
      options: pageSizeOptions,
      option_name: "pageSize",
    },
    {
      tab: options?.margin,
      options: pageMarginOptions,
      option_name: "pageMargin",
    },
  ];
  return (
    <>
      {!options ? (
        <></>
      ) : (
        <Modal show={show} onHide={onHide} centered id="optionsModal">
          <Modal.Header>
            <Modal.Title id="optionsModalLabel">{options.title}</Modal.Title>
            <button onClick={onHide} className="btn btn-dark d-inline-flex">
              <XIcon className="h-5 w-5 text-gray-500" />
            </button>
          </Modal.Header>
          <Modal.Body>
            <Tabs id="myTab" role="tablist">
              <TabList className="list-unstyled nav mb-3 d-flex justify-content-between align-items-center">
                {[
                  options.theme,
                  options.screen_size,
                  options.orientation,
                  options.page_size,
                  options.margin,
                ].map((tab, index) => (
                  <Tab key={index}>
                    <button
                      className={`nav-item btn btn-dark d-inline-flex mb-1 ${
                        activeTab === tab ? "active" : ""
                      }`}
                      role="tab"
                      aria-controls={tab}
                      aria-selected={activeTab === tab}
                      onClick={() => setActiveTab(tab)}
                    >
                      {tab.split("-").join(" ").toUpperCase()}
                    </button>
                  </Tab>
                ))}
              </TabList>
              {/* Tab panels */}
              <div>
                {tabs.map(({ tab, options, option_name }, index) => (
                  <TabPanel key={index}>
                    <Select
                      options={options as []}
                      onChange={(selectedOption: any) => {
                        if (selectedOption && selectedOption.value) {
                          console.log(option_name, selectedOption.value);
                          setSelectedOptions([
                            ...selectedOptions,
                            selectedOption.value,
                          ]);
                          dispatch(
                            setField({
                              options: {
                                ...stateOptions,
                                [option_name as keyof ToolState["options"]]:
                                  selectedOption.value,
                              },
                            })
                          );
                        }
                      }}
                      placeholder={tab}
                      defaultValue={
                        LocalstateOptions
                          ? LocalstateOptions[
                              option_name as keyof typeof LocalstateOptions
                            ]
                          : options[0].value
                      }
                    />
                  </TabPanel>
                ))}
              </div>
            </Tabs>
          </Modal.Body>
          <Modal.Footer>
            <button
              type="button"
              className="close-button btn btn-light"
              onClick={() => {
                dispatch(
                  setField({
                    options: {
                      theme: "github",
                      orientation: "Portrait",
                      screenSize: "screen",
                      pageMargin: "No margin",
                      pageSize: "A4",
                    },
                  })
                );
              }}
            >
              {options.defaults}
            </button>
            {/* Trigger saving when clicking save */}
            <button
              type="button"
              className="save-button btn btn-dark"
              onClick={handleSave}
            >
              {options.save_changes}
            </button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
};

export default Options;
