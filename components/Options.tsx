// can i use this here as well?:
import { XIcon } from "@heroicons/react/solid";
import { FaPlus, FaMinus } from "react-icons/fa"; // Importing the icons
import isEqual from "lodash.isequal";
import React, { useEffect, useRef, useState } from "react";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { type ToolState, setField } from "../src/store";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import type { edit_page } from "../src/content";
import { useDismissible } from "../src/hooks/useDismissible";

export interface OptionsProps {
  show: boolean;
  onHide: () => void;
  options?: edit_page["options"];
}

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

  const fontSizeOptions = [
    6, 8, 10, 12, 14, 16, 21, 24, 28, 32, 36, 42, 48, 56, 64, 72, 80, 88, 96,
    104, 120, 144,
  ].map((size) => ({ value: size, label: `${size}px` }));

  const [screenSizeLabel, setScreenSizeLabel] = useState<string>(`0`);
  const stateOptions = useSelector(
    (state: { tool: ToolState }) => state.tool.options
  );

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
    }
  }, []);

  const dispatch = useDispatch();

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

  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleSave = () => {
    const stateOptionsJSON = JSON.stringify(stateOptions);
    localStorage.setItem("stateOptions", stateOptionsJSON);
    onHide();
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
    {
      tab: options?.font_size,
      options: fontSizeOptions,
      option_name: "fontSize",
    },
  ];
  const adjustFontSize = (adjustment: number) => {
    const currentFontSize = stateOptions.fontSize || 16;
    const newFontSize = currentFontSize + adjustment;

    dispatch(
      setField({
        options: {
          ...stateOptions,
          fontSize: newFontSize,
        },
      })
    );
  };

  const modalRef = useRef<HTMLDivElement>(null);

  useDismissible({
    enabled: show,
    onClose: onHide,
    ref: modalRef,
  });

  return !options ? null : (
    <div
      id="optionsModal"
      className={`options-modal ${show ? "is-open" : ""}`}
      role="dialog"
      aria-modal="true"
    >
      <div className="options-modal-dialog" ref={modalRef}>
        <div className="options-modal-content">
          {/* Header */}
          <div className="options-modal-header">
            <h5 className="options-modal-title" id="optionsModalLabel">
              {options.title}
            </h5>
            <button
              type="button"
              onClick={onHide}
              className="options-modal-close"
            >
              <XIcon className="h-5 w-5 text-white" />
            </button>
          </div>

          {/* Body */}
          <div className="options-modal-body">
            <Tabs className="options-modal-tabs" role="tablist">
              <TabList className="options-modal-tabs-list">
                {[
                  options.theme,
                  options.screen_size,
                  options.orientation,
                  options.page_size,
                  options.margin,
                  options.font_size,
                ].map((tab, index) => (
                  <Tab key={index} className="options-modal-tab">
                    <button
                      type="button"
                      className={`options-modal-tab-button ${
                        activeTab === tab ? "is-active" : ""
                      }`}
                      role="tab"
                      aria-selected={activeTab === tab}
                      onClick={() => setActiveTab(tab)}
                    >
                      {tab.split("-").join(" ").toUpperCase()}
                    </button>
                  </Tab>
                ))}
              </TabList>

              <div className="options-modal-tabs-content">
                {tabs.map(({ tab, options, option_name }, index) => (
                  <TabPanel key={index} className="options-modal-tab-panel">
                    {option_name === "fontSize" ? (
                      <div className="font-size-control">
                        <button
                          type="button"
                          className="font-size-btn is-minus"
                          onClick={() => adjustFontSize(-1)}
                        >
                          <FaMinus />
                        </button>

                        <Select
                          className="font-size-select"
                          options={options as []}
                          placeholder={tab}
                          value={{
                            value: stateOptions.fontSize,
                            label: `${stateOptions.fontSize}px`,
                          }}
                          onChange={(selectedOption: any) => {
                            if (!selectedOption?.value) return;
                            dispatch(
                              setField({
                                options: {
                                  ...stateOptions,
                                  fontSize: selectedOption.value,
                                },
                              })
                            );
                          }}
                        />

                        <button
                          type="button"
                          className="font-size-btn is-plus"
                          onClick={() => adjustFontSize(1)}
                        >
                          <FaPlus />
                        </button>
                      </div>
                    ) : (
                      <Select
                        className="options-modal-select"
                        options={options as []}
                        placeholder={tab}
                        onChange={(selectedOption: any) => {
                          if (!selectedOption?.value) return;
                          dispatch(
                            setField({
                              options: {
                                ...stateOptions,
                                [option_name as keyof ToolState["options"]]:
                                  selectedOption.value,
                              },
                            })
                          );
                        }}
                      />
                    )}
                  </TabPanel>
                ))}
              </div>
            </Tabs>
          </div>

          {/* Footer */}
          <div className="options-modal-footer">
            <button
              type="button"
              className="options-modal-reset"
              onClick={() => {
                dispatch(
                  setField({
                    options: {
                      theme: "github",
                      orientation: "Portrait",
                      screenSize: "screen",
                      pageMargin: "No margin",
                      pageSize: "A4",
                      fontSize: 16,
                    },
                  })
                );
                onHide();
              }}
            >
              {options.defaults}
            </button>

            <button
              type="button"
              className="options-modal-save"
              onClick={handleSave}
            >
              {options.save_changes}
            </button>
          </div>
        </div>
      </div>

      {show && <div className="options-modal-backdrop" />}
    </div>
  );
};

export default Options;
