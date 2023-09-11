"use client";
import { Avatar } from "@material-tailwind/react";
import { IconButtonCustomStyles } from "./social";

export function AvatarDefault() {
  return (
    <>
      <div className="flex justify-center mt-5">
        <div>
          <div>
            <Avatar
              src="/avt.jpg"
              alt="avatar"
              style={{ width: "200px", height: "200px" }}
            />
          </div>
          <div>
            <IconButtonCustomStyles></IconButtonCustomStyles>
          </div>
        </div>
      </div>
    </>
  );
}
