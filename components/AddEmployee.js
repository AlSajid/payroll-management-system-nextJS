export default function AddEmployee({isFormOpen, setIsFormOpen}) {
    return (
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
    )
}