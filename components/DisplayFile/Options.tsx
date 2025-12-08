import type { edit_page } from "../../src/content";
import { CompressPDF } from "./Options/CompressPDF";
export const CTABtn = ({
  cta,
  centerItem,
}: {
  cta: string;
  centerItem?: boolean;
}) => {
  return (
    <div className={centerItem ? "center-item" : undefined}>
      <a href="/pricing" className="cta-btn" target="_blank">
        {cta}
      </a>
    </div>
  );
};
export const Options = ({
  content,
  filenameOptions,
  lang,
}: {
  content: edit_page["compress_pdf"];
  filenameOptions: edit_page["filenameOptions"];
  lang: string;
}) => {
  return (
    <>
      <CompressPDF
        options={content}
        c="compress-pdf"
        filenameOptions={filenameOptions}
        lang={lang}
      />
    </>
  );
};
