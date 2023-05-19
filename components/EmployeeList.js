export default function EmployeeList() {
    return (
        <table
            className="w3-table w3-striped w3-border w3-bordered w3-centered w3-hoverable w3-table-all"
            id="record"
        >
            <tr>
                <th>Name</th>
                <th>Designation</th>
                <th>Joining date</th>
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
    )
}