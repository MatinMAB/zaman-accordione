//React
import React from "react";

//CSS Styles
import styles from "../styles/ModuleComponent.module.css";

//React-icons
import {
 BiDownArrowAlt,
 BiSolidVideo,
 BiQuestionMark,
 BiUpArrowAlt,
} from "react-icons/bi";
import { HiMiniDocumentCheck } from "react-icons/hi2";
import { RiAttachment2 } from "react-icons/ri";

//Components
import Media from "../shared/Media";

//image
import Image from "../../public/vite.svg";


export default function ModuleComponent({ data, isOpen, toggleIsOpen }) {
 return (
  <>
   <div className={styles.moduleBox} onClick={toggleIsOpen}>
    <div className={styles.moduleBoxTitle}>
     <h4>{data.name}</h4>
     {isOpen ? (
      <BiUpArrowAlt className={styles.moduleBoxIcon}  />
     ) : (
      <BiDownArrowAlt className={styles.moduleBoxIcon} />
     )}
    </div>
    {isOpen && (
     <div className={styles.moduleBoxContent}>
      <div className={styles.moduleBoxContent_description}>
       <p>{data.description}</p>
       {data.hasImage && <img src={Image} alt="simple vite logo" />}
      </div>
      {data.linkDescription && (
       <Media
        title="Link"
        Description={data.linkDescription}
        Icon={RiAttachment2}
       />
      )}
      {data.video && (
       <Media
        title="Video"
        Description={data.video.description}
        Icon={BiSolidVideo}
        downloadLink={data.video.downloadLink}
       />
      )}
      {data.document && (
       <Media
        title="Document"
        Description={data.document.description}
        Icon={HiMiniDocumentCheck}
        downloadLink={data.document.downloadLink}
       />
      )}
      {data.tests.map((test, index) => (
       <React.Fragment key={index}>
        <Media title={test} Icon={BiQuestionMark} />
       </React.Fragment>
      ))}
     </div>
    )}
   </div>
  </>
 );
}
