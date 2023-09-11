"use client";
import {Projects} from "@/components/Projects"
export default function Page() {
  return (
    <>
      <div className="pt-5 md:ml-[270px] pl-5 md:pl-2">
        <div className="v-text">My Projects</div>
        <Projects />
      </div>
    </>
  );
}
