import { useRouter } from "next/router";

import PDFToJPG from "./Options/PDFtoJPG";
import { CompressPDF } from "./Options/CompressPDF";
import type { edit_page as _ } from "../../content";
export interface OptionsProps {
  layout?: string;
  edit_page: _;
}

// implemented
const MergePdf = ({ merge_pdf }: { merge_pdf: string }) => (
  <div className="alert alert-info">
    <bdi>{merge_pdf}</bdi>
  </div>
);
// const JpgToPDF = () => {
//   // needs implementation
// };
// const HTMLToPDF = () => {
//   // NEEDS implementation
// };

// const PDFToPDFA = () => {
//   // needs implementation
// };
// // NEEDS implementation only on premium
// const PDFToWORD = () => {};
// // NEEDS implementation only on premium
// const PDFToEXCEL = () => {};

const Options = ({ layout, edit_page }: OptionsProps) => {
  let componentToRender: JSX.Element | null;

  const router = useRouter();
  let c = router.asPath.replace(/^\/[a-z]{2}\//, "").replace(/^\//, "");
  switch (layout) {
    case "compress-pdf":
      componentToRender = (
        <CompressPDF c={c} options={edit_page["compress_pdf"]} />
      );
      break;
    case "merge-pdf":
      componentToRender = <MergePdf merge_pdf={edit_page["merge_pdf"]} />;
      break;
    case "jpg-to-pdf":
      componentToRender = <PDFToJPG c={c} />;
      break;
    default:
      componentToRender = null;
  }

  return componentToRender;
};

export default Options;
