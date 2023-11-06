//React
import React from "react";

//CSS Styles
import styles from "../styles/ModuleComponent.module.css";

//React-icons
import { BiDownArrowAlt, BiUpArrowAlt } from "react-icons/bi";

//Components
import Media from "../shared/Media";

export default function ModuleComponent({ data, handleActive }) {
 return (
  <>
   <div className={styles.moduleBox}>
    <div
     className={styles.moduleBoxTitle}
     onClick={() => handleActive(data.id)}
    >
     <h4>{data.title}</h4>
     {data.isExpanded ? (
      <BiUpArrowAlt className={styles.moduleBoxIcon} />
     ) : (
      <BiDownArrowAlt className={styles.moduleBoxIcon} />
     )}
    </div>
    {data.isExpanded && (
     <div className={styles.moduleBoxContent}>
      <div className={styles.moduleBoxContent_description}>
       <p>{data.description}</p>
       {data.imageUrl && <img src={data.imageUrl} alt="simple vite logo" />}
      </div>
      {data.content.map((media, index) => (
       <React.Fragment key={index}>
        <Media
         title={media.type}
         Description={media.description}
         downloadLink={media.downloadLink}
         Icon={media.icon}
        />
       </React.Fragment>
      ))}
     </div>
    )}
   </div>
  </>
 );
}
