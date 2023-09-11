"use client";
import React from "react";
import {
  Collapse,
  Button,
  Card,
  Typography,
  CardBody,
} from "@material-tailwind/react";
import Link from "next/link";
function Menu() {
  return (
    <svg
      style={{ color: "white" }}
      xmlns="http://www.w3.org/2000/svg"
      height="15px"
      viewBox="0 0 448 512"
    >
      <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
    </svg>
  );
}
function Close() {
  return (
    <svg
      style={{ color: "white" }}
      xmlns="http://www.w3.org/2000/svg"
      height="15px"
      viewBox="0 0 384 512"
    >
      <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
    </svg>
  );
}
function Profile() {
  return (
    <svg
      className="flex self-center"
      xmlns="http://www.w3.org/2000/svg"
      height="1em"
      viewBox="0 0 448 512"
    >
      <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
    </svg>
  );
}
function Project() {
  return (
    <svg
      className="flex self-center"
      xmlns="http://www.w3.org/2000/svg"
      height="1em"
      viewBox="0 0 640 512"
    >
      <path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" />
    </svg>
  );
}
export function CollapseDefault() {
  const [open, setOpen] = React.useState(false);

  const toggleOpen = () => setOpen((cur) => !cur);

  return (
    <>
      <div className="block w-full fixed md:hidden z-10">
        <div className="flex justify-between ml-2 mr-2 bg-white h-16">
          <div className="flex self-center font-bold text-xl ml-3">
            Pham Nguyen Quang Vinh
          </div>
          <Button className="bg-gray-500 h-10 self-center" onClick={toggleOpen}>
            {!open ? <Menu /> : <Close />}
          </Button>
        </div>
        <Collapse open={open}>
          <Card className="mx-auto w-full border-b">
            <CardBody>
              <div>
                <div className="flex flex-col">
                  <Link
                    className="text-base ml-3 flex justify-start mb-3"
                    href={"/"}
                  >
                    <Profile />
                     <div className="ml-4">About me</div>
                  </Link>

                  <Link
                    className="text-base ml-3 flex justify-start"
                    href={"/project"}
                  >
                    <Project />  <div className="ml-3">Projects</div>
                  </Link>
                </div>
              </div>
            </CardBody>
          </Card>
        </Collapse>
      </div>
    </>
  );
}
