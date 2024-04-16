import React  from "react";
import { UserClass } from "./UserClass"
// Using function keyword
export default function AboutUs() {
    return (
        <div >
          <h4 >  HI, this page is being developed by Brijesh </h4>
            <UserClass name={"Brijesh"} location={"Bengaluru, KA"} />
            <h1 className="text-3xl font-bold underline">testing</h1>
        </div>
    );
}

