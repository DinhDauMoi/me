"use client";
import { Avatar } from "@material-tailwind/react";
import { IconButtonCustomStyles } from "./social";

export function AvatarDefault() {
  return (
    <>
      <div className="flex justify-center mt-5 mr-10">
        <div>
          <div className="flex justify-center">
            <Avatar
              src="/avt.jpg"
              alt="avatar"
              style={{ width: "200px", height: "200px" }}
            />
          </div>
          <div>
            <div className="text-3xl flex justify-center font-bold mb-4">Pham Nguyen Quang Vinh</div>
            <IconButtonCustomStyles></IconButtonCustomStyles>
          </div>
        </div>
      </div>
    </>
  );
}
