import { useRouter } from "next/router";
import type { tool as _tool } from "../content";
import type { edit_page as _ } from "../content";
import { XIcon } from "@primer/octicons-react";
import { url } from "inspector";
import { title } from "process";
import { Modal, Form } from "react-bootstrap";
export interface OptionsProps {
  layout?: string;
  edit_page: _;
}
// i want a bs modal with tabs just using regular html and bs classes
// first tab is for the theme, the theme can be one of these:
/**
 * 'github'
  | 'github-dark'
  | 'almond'
  | 'awsm'
  | 'axist'
  | 'bamboo'
  | 'bullframe'
  | 'holiday'
  | 'kacit'
  | 'latex'
  | 'marx'
  | 'mini'
  | 'modest'
  | 'new'
  | 'no-class'
  | 'pico'
  | 'retro'
  | 'sakura'
  | 'sakura-vader'
  | 'semantic'
  | 'simple'
  | 'style-sans'
  | 'style-serif'
  | 'stylize'
  | 'superstylin'
  | 'tacit'
  | 'vanilla'
  | 'water'
  | 'water-dark'
  | 'writ';
 */

// second tab is for screen size ['Your screen {window.screen}', "Desktop HD (1920px)", "Desktop (1440px)", "Tablet 768px", "Mobile (320px)"]
// third tab Orientation [Portrait, Landscape]
// fourth tab Page margin [No margin, Small, Big]




const Options: React.FC<OptionsProps> = ({ layout, edit_page }) => {
  // Define options for each tab
  const themes = [
    'github', 'github-dark', 'almond', 'awsm', 'axist', 'bamboo', 'bullframe',
    'holiday', 'kacit', 'latex', 'marx', 'mini', 'modest', 'new', 'no-class',
    'pico', 'retro', 'sakura', 'sakura-vader', 'semantic', 'simple',
    'style-sans', 'style-serif', 'stylize', 'superstylin', 'tacit',
    'vanilla', 'water', 'water-dark', 'writ'
  ];

  const screenSizes = [
    'Desktop HD (1920px)', 'Desktop (1440px)', 'Tablet 768px', 'Mobile (320px)'
  ];

  const orientations = ['Portrait', 'Landscape'];

  const pageMargins = ['No margin', 'Small', 'Big'];

  return (
    <>
      {/* Button trigger modal */}
      <button type="button" className="trigger-button" data-toggle="modal" data-target="#optionsModal">
        Open Options
      </button>

      {/* Modal */}
      <div className="modal-wrapper" id="optionsModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="optionsModalLabel">Options</h5>
              <button type="button" className="close-button" data-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {/* Nav tabs */}
              <ul className="tab-navigation" id="myTab" role="tablist">
                {['theme', 'screen-size', 'orientation', 'page-margin'].map((tab, index) => (
                  <li className="tab-item" role="presentation" key={index}>
                    <button className={`tab-link ${index === 0 ? 'active' : ''}`} id={`${tab}-tab`} data-toggle="tab" data-target={`#${tab}`} type="button" role="tab" aria-controls={tab} aria-selected={index === 0}>{tab.split('-').join(' ').toUpperCase()}</button>
                  </li>
                ))}
              </ul>
              {/* Tab panes */}
              <div className="tab-content-wrapper">
                {[
                  { tab: 'theme', options: themes },
                  { tab: 'screen-size', options: screenSizes },
                  { tab: 'orientation', options: orientations },
                  { tab: 'page-margin', options: pageMargins }
                ].map(({ tab, options }, index) => (
                  <div className={`tab-pane ${index === 0 ? 'active' : ''}`} id={tab} role="tabpanel" aria-labelledby={`${tab}-tab`} key={index}>
                    {/* Options content goes here */}
                    {/* Options options */}
                    {options.map((option, idx) => (
                      <div className="option" key={idx}>
                        <input className="option-input" type="radio" name={tab} id={`${tab}-${idx}`} value={option} />
                        <label className="option-label" htmlFor={`${tab}-${idx}`}>{option}</label>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="close-button" data-dismiss="modal">Close</button>
              <button type="button" className="save-button">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Options;

