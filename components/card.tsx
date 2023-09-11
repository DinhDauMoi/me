"use client";
import { Card, CardBody, Typography } from "@material-tailwind/react";

export function SimpleCard() {
  return (
    <Card className="m-6 md:w-96 w-80 flex justify-center">
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          Information
        </Typography>
        <div>
          <p>Name: Pham Nguyen Quang Vinh</p>
          {/* <p>
                      Day of birth: January 22, 2002
                    </p>
                    <p>
                      Gender: Male
                    </p> */}
          <p>Phone number: 0834971339</p>
          <p>Email: quangvinhfe@outlook.com.vn</p>
        </div>
      </CardBody>
    </Card>
  );
}
