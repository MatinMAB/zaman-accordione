//CSS Styles
import styles from "../styles/ModuleComponent.module.css";

//react-icons
import { BiDownload } from "react-icons/bi";

export default function Media({ title, Description, Icon, downloadLink }) {
 return (
  <div className={styles.moduleBoxContent_media}>
   <span>
    <Icon className={styles.moduleBoxIcon} />
   </span>
   <div>
    <h3 style={{ marginTop: "0", cursor: "pointer" }}>{title}</h3>
    <p>{Description}</p>
   </div>
   {downloadLink && (
    <span className={styles.moduleBoxContent_downloadLink}>
     <a href={downloadLink}>
      <BiDownload
       className={`${styles.moduleBoxIcon} ${styles.moduleBoxDownloadIcon}`}
      />
     </a>
    </span>
   )}
  </div>
 );
}
