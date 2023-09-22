"use client";
import { Avatar } from "@material-tailwind/react";
import { IconButtonCustomStyles } from "./social";

export function AvatarDefault() {
  return (
    <>
      <div className="flex justify-center mt-3 md:mt-5 md:mr-10">
        <div>
          <div className="flex justify-center">
            <Avatar
              src="/avt_2.jpg"
              alt="avatar"
              style={{ width: "200px", height: "200px" }}
            />
          </div>
          <div>
            <div className="text-2xl md:text-3xl flex justify-center font-bold mb-4">Pham Nguyen Quang Vinh</div>
            <IconButtonCustomStyles></IconButtonCustomStyles>
          </div>
        </div>
      </div>
    </>
  );
}
