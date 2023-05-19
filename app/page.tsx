"use client";
import AddEmployee from "@/components/AddEmployee";
import EmployeeList from "@/components/EmployeeList";
import { useState } from "react";

export default function Home() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <main>
      <button className="bg-yellow-300 rounded">Add New Employee</button>
      <AddEmployee isFormOpen={isFormOpen} setIsFormOpen={setIsFormOpen} />
      <EmployeeList />
    </main>
  );
}
