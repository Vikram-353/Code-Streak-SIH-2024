import React from "react";
import { Link } from "react-router-dom";
import Card from "../Card";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-7xl">
      {/* Header Section */}
      <section className="bg-gray-200 text-black w-full py-4 flex items-center justify-center px-8">
        <div className="text-2xl font-bold">Mines Manager</div>
      </section>

      {/* Card Section */}
      <div className="flex flex-wrap gap-6 justify-center py-10">
        <div className="w-full max-w-[calc(40%-5rem)]">
          <Card
            username={"Mark Attendance"}
            bgColor={"bg-yellow-100"}
            parah={"Keep track of your daily attendance easily with this tool."}
          />
        </div>
        <div className="w-full max-w-[calc(40%-5rem)]">
          <Card
            username={"Today's Report"}
            bgColor={"bg-green-100"}
            parah={"Review and analyze today's report to stay updated."}
          />
        </div>
        <div className="w-full max-w-[calc(40%-5rem)]">
          <Link to="/working-shift">
            <Card
              username={"Working Shifts"}
              bgColor={"bg-red-100"}
              parah={"Manage and record your working shifts efficiently."}
            />
          </Link>
        </div>
        <div className="w-full max-w-[calc(40%-5rem)]">
          <Card
            username={"Leave Request"}
            bgColor={"bg-orange-100"}
            parah={"Submit and track your leave requests with ease."}
          />
        </div>
      </div>
    </div>
  );
}
