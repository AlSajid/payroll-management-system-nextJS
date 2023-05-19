import Image from "next/image";

export default function Home() {
  return (
    <>
      <h1 className="w3-center">Payroll Management System</h1>
      <hr className="w3-margin-left w3-margin-right" />

      <button
        // onClick="document.getElementById('add').style.display='block'"
        className="w3-button w3-green w3-margin w3-padding"
      >
        Add New Employee
      </button>
      <br />
      <br />
      <br />

      <div
        id="add"
        className="w3-animate-left w3-padding w3-margin"
        style={{ display: "none" }}
      >
        <div className="w3-container w3-third">
          <form action="insert.php" method="post" autoComplete="off">
            <label>Name</label>
            <input type="text" name="name" className="w3-input w3-border" />
            <br />

            <label>Address</label>
            <input type="text" name="address" className="w3-input w3-border" />
            <br />

            <label>Phone Number</label>
            <input type="tel" name="phone" className="w3-input w3-border" />
            <br />

            <label>Joining Date</label>
            <input type="date" name="joining" className="w3-input w3-border" />
            <br />

            <label>Designation</label>
            <input
              type="text"
              name="designation"
              className="w3-input w3-border"
            />
            <br />

            <label>Grade</label>
            <select name="grade" className="w3-input">
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
            </select>
            <br />

            <label>Loan</label>
            <input type="number" name="loan" className="w3-input w3-border" />
            <br />

            <label>Basic Salary</label>
            <input type="number" name="basic" className="w3-input w3-border" />
            <br />

            <label>House Allowance</label>
            <input
              type="number"
              name="allowance"
              className="w3-input w3-border"
            />
            <br />

            <button type="submit" className="w3-button w3-border w3-green">
              Submit
            </button>

            <button
              type="button"
              // onClick="document.getElementById('add').style.display='none'"
              className="w3-button w3-red"
            >
              Close
            </button>
          </form>
        </div>
      </div>

      <div>
        <table
          className="w3-table w3-striped w3-border w3-bordered w3-centered w3-hoverable w3-table-all"
          id="record"
        >
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Phone number</th>
            <th>Joining date</th>
            <th>Designation</th>
            <th>Grade</th>
            <th>Loan</th>
            <th>Basic</th>
            <th>House Allowance</th>
            <th colSpan={3}>Action</th>
          </tr>
          <tr>
            <td>name</td>
            <td>address</td>
            <td>phone number</td>
            <td>joining date</td>
            <td>designation</td>
            <td>grade</td>
            <td>loan</td>
            <td>basic</td>
            <td>house allowance</td>;
            <td className="w3-blue">
              <a href='slip.php?code=" . $row["code"] . "'>Pay</a>
            </td>
            <td className="w3-yellow">
              <a href='modify.php?code=" . $row["code"] . "'>Modify</a>
            </td>
            <td className="w3-red">
              <a href='delete.php?code=" . $row["code"] . "'>Delete</a>
            </td>
          </tr>
        </table>
      </div>
    </>
  );
}
