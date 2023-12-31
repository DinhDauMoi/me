"use client";

import { AvatarDefault } from "./avatar";
import { SimpleCard } from "./card";
import { DefaultTimeline } from "./experience";
import { DefaultTime } from "./education";
import { Skills } from "./skills";
import { SoftSkills } from "./SoftSkills";

export default function Profile() {
  return (
    <>
      <div className="md:ml-[270px]">
        <div className="w-full flex justify-center mb-4">
          <div className="block md:flex mt-20 md:mt-0">
            <AvatarDefault />

            <SimpleCard />
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
        <div className="m-4 md:m-4 text-justify">
          Hello, I&apos;m Quang Vinh, born in 2002, and I specialize in
          front-end development. I have strong teamwork skills and adapt well to
          new work environments, always eager to learn new experiences and
          knowledge. I take my responsibilities seriously, am dynamic, creative,
          and have an open-minded approach to problem-solving.
        </div>
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
        <div className="v-style">
          <div className="v-text">SOFT SKILLS</div>
          <SoftSkills></SoftSkills>
        </div>
      </div>
    </>
  );
}
