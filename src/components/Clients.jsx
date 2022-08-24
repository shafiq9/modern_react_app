import React from "react";

import { clients } from "../constants";
import styles from "../style";

const Clients = () => (
    <section className={`${styles.flexCenter} m-4 `}>
        <di className={`${styles.flexCenter} flex-wrap w-full `}>
            {clients.map((clients)=>(
                <div key={clients.id} className={`flex-1 
                    ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`}>
                    <img src={clients.logo} alt="client"
                    className="sm:w-[192px] w-[100px]
                    object.contain" />
                </div>
            ))}
        </di>
    </section>
)

export default Clients;
