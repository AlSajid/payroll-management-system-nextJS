"use client";
import AddEmployee from "@/components/AddEmployee";
import EmployeeList from "@/components/EmployeeList";
import { useState } from "react";
import { BsPersonPlusFill } from "react-icons/bs";
import { SlClose } from "react-icons/sl";

export default function Home() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <main className="container flex flex-col items-center">
      {/* add employee button */}
      <button
        className="bg-yellow-300 hover:bg-yellow-400
                  rounded p-3 m-3 hover:scale-105 transform transition
                  shadow-sm text-lg font-semibold
                  flex items-center justify-center gap-3"
        onClick={() => setIsFormOpen(!isFormOpen)}
      >
        {isFormOpen ? (
          <>
            <SlClose />
            <span>Close the form</span>
          </>
        ) : (
          <>
            <BsPersonPlusFill />
            <span>Add New Employee</span>
          </>
        )}
      </button>

      <AddEmployee isFormOpen={isFormOpen} setIsFormOpen={setIsFormOpen} />
      {/* <EmployeeList /> */}
    </main>
  );
}
