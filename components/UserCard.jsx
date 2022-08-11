import { IconChevronDown, IconChevronUp } from "@tabler/icons";
import React, { useState } from "react";
import UserCardDetail from "./UserCardDetail";

export default function UserCard(props) {
  const [isShowDetail, setIsShowDetail] = useState(false);
  return (
    <div>
      {/* Example of folded UserCard */}
      <div className="border-bottom">
        {/* main section */}
        <div
          className="d-flex align-items-center p-3"
          onClick={() => {
            setIsShowDetail(!isShowDetail);
          }}
        >
          <img
            src={props.profile}
            width="90px"
            className="rounded-circle me-4"
          />
          <span className="text-center display-6 me-auto">{props.name}</span>
          {isShowDetail ? <IconChevronUp /> : <IconChevronDown />}
        </div>

        {/* UserCardDetail is hidden */}
        {isShowDetail && (
          <UserCardDetail email={props.email} address={props.address} />
        )}
      </div>
    </div>
  );
}
