import React from "react";
import styles from "./Location.module.css"
const Location = () => {
    return (<>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8068301146377!2d36.82146637473658!3d-1.2901823356298956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d8be16f3a9%3A0x3a368f26baeb0598!2sTimes%20Tower%2C%20P.O.BOX%2048240%20-%2000100%20GPO%20Nairobi%2C%20Haile%20Selassie%20Ave%2C%20Nairobi!5e0!3m2!1ssw!2ske!4v1685518631788!5m2!1ssw!2ske" width="100%" height={450} className={styles.officeLocation} title="office-location" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </>)
}

export default Location;