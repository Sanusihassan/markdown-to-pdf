import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import { setField, type ToolState } from "../../../src/store";
import type { edit_page } from "../../../src/content";

export const CompressPDF = ({
  c,
  options,
  filenameOptions,
  lang,
}: {
  c: string;
  options: edit_page["compress_pdf"];
  filenameOptions: edit_page["filenameOptions"];
  lang: string;
}) => {
  if (typeof window === "undefined") {
    return null;
  }

  // Map tab indices to slider values
  const tabToSliderMap = {
    0: 0.5, // recommended
    1: 1.0, // less
    2: 1.5, // extreme
  };

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [sliderValue, setSliderValue] = useState(tabToSliderMap[0]);
  const [filename, setFilename] = useState("");

  let _options = ["recommended", "less", "extreme"];
  const dispatch = useDispatch();
  const limitationMsg = useSelector(
    (state: { tool: ToolState }) => state.tool.limitationMsg
  );
  const subscriptionStatus = useSelector(
    (state: { tool: ToolState }) => state.tool.subscriptionStatus
  );

  // Sync slider value when tab changes
  useEffect(() => {
    const mappedValue = tabToSliderMap[selectedIndex];
    setSliderValue(mappedValue);
    dispatch(setField({ compressPdf: mappedValue }));
  }, [selectedIndex]);

  const handleTabClick = (index: number) => {
    setSelectedIndex(index);
    // The useEffect will handle updating the slider value
  };

  const handleSliderChange = (values: number[]) => {
    const newValue = values[1];
    setSliderValue(newValue);
    dispatch(setField({ compressPdf: newValue }));

    // Optionally: Find closest tab and update selection
    const closest = Object.entries(tabToSliderMap).reduce((prev, curr) => {
      return Math.abs(curr[1] - newValue) < Math.abs(prev[1] - newValue)
        ? curr
        : prev;
    });
    setSelectedIndex(Number(closest[0]));
  };

  return (
    <div className="compress-pdf">
      <div className="tabs-container">
        <ul className="tabs-list" role="tablist">
          {options.slice(0, 3).map((option, index) => (
            <li className="tab-item" key={index}>
              <button
                className={`tab-button${
                  selectedIndex === index ? " is-active" : ""
                }${index === 0 ? " first" : ""}`}
                onClick={() => handleTabClick(index)}
              >
                {option.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className={`tab-content${lang === "ar" ? " is-rtl" : " is-ltr"}`}>
        <p className="description">{options[selectedIndex].description}</p>
      </div>

      {/* Custom Slider Section */}
      <div className="slider-section">
        <h6 className={`option-title${" " + c}`}>{options[3].title}</h6>
        <p className="description">{options[3].description}</p>
        <div className="slider-wrapper">
          <div className="slider-container">
            <RangeSlider
              className="green-slider"
              min={0.1}
              max={subscriptionStatus ? 10 : 1.9}
              step={0.1}
              value={[0.1, sliderValue]}
              onInput={handleSliderChange}
              thumbsDisabled={[true, false]}
              rangeSlideDisabled={true}
            />
          </div>
          <div className="slider-value">{sliderValue.toFixed(1)}</div>
          {!subscriptionStatus && (
            <p className="upgrade-notice">
              {filenameOptions.upgradeNotice.msg}{" "}
              <a
                href={`${lang === "" ? "" : "/" + lang}/pricing`}
                target="_blank"
                rel="noopener noreferrer"
                className="upgrade-button"
              >
                {filenameOptions.upgradeNotice.cta}
              </a>
            </p>
          )}
        </div>
      </div>

      {/* Filename Input Section */}
      <div className="filename-section">
        <label htmlFor="output-filename" className="filename-label">
          {filenameOptions.label}
        </label>
        <input
          id="output-filename"
          type="text"
          className="filename-input"
          placeholder={filenameOptions.placeholder}
          value={filename}
          onChange={(e) => {
            setFilename(e.target.value);
            dispatch(setField({ outputFilename: e.target.value }));
          }}
        />
        {filenameOptions.helperText && (
          <small className="helper-text">{filenameOptions.helperText}</small>
        )}
      </div>

      {/* Show alert if limitationMsg is set */}
      {limitationMsg ? (
        <div className="limitation-alert" role="alert">
          {limitationMsg}
          <div className="alert-action">
            <a
              href={`${lang === "" ? "" : "/" + lang}/pricing`}
              className="alert-button"
              target="_blank"
              style={{ fontWeight: "500" }}
            >
              {filenameOptions.cta}
            </a>
          </div>
        </div>
      ) : null}
    </div>
  );
};
