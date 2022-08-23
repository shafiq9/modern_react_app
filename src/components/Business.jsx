import React from "react";

import { features } from "../constants";
import styles, {layout} from "../style";
import Button from './Button';

const Business = () => (
    <section id="features" className={layout.section}>
        <div className={layout.sectionInfo}>
            <h2 className="">
                You do the business, we’ll handle the money.
            </h2>
        </div>
    </section>
)

export default Business;
