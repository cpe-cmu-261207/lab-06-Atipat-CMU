import { IconMailForward, IconMapPins } from "@tabler/icons";
import React from "react";

export default function UserCardDetail(props) {
  const address = props.address;
  return (
    <div>
      {/* UserCardDetail*/}
      <div className="text-center">
        <p>
          <IconMailForward /> {props.email}
        </p>
        <p>
          <IconMapPins /> {props.address}
        </p>
      </div>
    </div>
  );
}
