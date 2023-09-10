"use client";
import "@/app/border.css";
import { AvatarDefault } from "@/components/avatar";
import { SimpleCard } from "@/components/card";
import { DefaultTimeline } from "@/components/experience";
import { DefaultTime } from "@/components/education";
import { Skills } from "@/components/skills";
export default function Profile() {
  return (
    <>
      <div className="md:ml-[270px]">
        <div className="w-full flex justify-center mb-4">
          <div className="block md:flex">
            <AvatarDefault/>

            <SimpleCard/>
          </div>
        </div>
        <div
          className="hidden md:block"
          style={{
            border: "1px solid black",
            width: "300px",
              margin: "0 auto",
          }}
        ></div>
        <div className="v-style">
          <div className="v-text">EXPERIENCE</div>
          <DefaultTimeline></DefaultTimeline>
        </div>
        <div className="v-style">
          <div className="v-text">EDUCATION</div>
          <DefaultTime></DefaultTime>
        </div>

        <div className="v-style">
          <div className="v-text">SKILLS</div>
          <Skills></Skills>
        </div>
      </div>
    </>
  );
}
