"use client";

import { Typography, Card } from "@material-tailwind/react";
import Link from "next/link";

const THEAD = ["VIN", "Sequence", "LKW", "CL", "%"];
const TROWS = [
  {
    vin: "8047632",
    sequence: "1279368",
    lkv: "671",
    cl: "KIT1",
    percentage: "null",
  },
  {
    vin: "8047632",
    sequence: "1279368",
    lkv: "671",
    cl: "KIT1",
    percentage: "null",
  },
  {
    vin: "8047632",
    sequence: "1279368",
    lkv: "671",
    cl: "KIT1",
    percentage: "null",
  },
  {
    vin: "8047632",
    sequence: "1279368",
    lkv: "671",
    cl: "KIT1",
    percentage: "null",
  },
  {
    vin: "8047632",
    sequence: "1279368",
    lkv: "671",
    cl: "KIT1",
    percentage: "null",
  },
];

const productionMockData = {
  productionStatus: {
    quantity: 13,
    vin: "123456789012345",
    sequence: 12345,
    lkw: 671,
    cl: "Kit1",
  },
};

const CockpickObserver = () => {
  const productionStatus = productionMockData.productionStatus;
  return (
    <div className="mt-10">
      <Typography
        as={"h1"}
        placeholder={"Cockpick observer"}
        className="text-2xl md:text-3xl lg:text-5xl xl:text-7xl text-center text-red-500  "
      >
        Cockpit Tracker
      </Typography>

      <div className="py-10 w-fit">
        <Typography
          as={"h2"}
          className="text-2xl text-white bg-green-500 text-center rounded-md py-2"
          placeholder={"Production Info"}
        >
          In Production: {productionStatus.quantity}
        </Typography>

        <div>
          <Card
            className="h-full w-full overflow-hidden"
            placeholder="Cockpick production table"
          >
            <table className="min-w-max table-auto text-left w-fit">
              <thead>
                <tr>
                  {THEAD.map((head) => (
                    <th
                      key={head}
                      className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                    >
                      <Typography
                        placeholder="Table header"
                        variant="small"
                        color="blue-gray"
                        className="font-normal leading-none opacity-70"
                      >
                        {head}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {TROWS.map(({ vin, sequence, lkv, cl, percentage }, index) => {
                  const isLast = index === TROWS.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50";

                  return (
                    <tr key={vin}>
                      <td className={classes}>
                        <Link
                          href="#"
                          className="font-normal hover:text-blue-500"
                        >
                          {vin}
                        </Link>
                      </td>
                      <td className={classes}>
                        <Typography
                          placeholder="Table Data"
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {sequence}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          placeholder="Table Data"
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {lkv}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Link
                          href="#"
                          color="blue-gray"
                          className="font-medium"
                        >
                          {cl}
                        </Link>
                      </td>
                      <td className={classes}>
                        <Typography
                          placeholder="Table Data"
                          color="blue-gray"
                          className="font-medium"
                        >
                          {percentage}
                        </Typography>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CockpickObserver;
