import React from "react";


const ExpensesEntry = () =>{
    return (
<form>
  <label htmlFor="cost">First Name</label><br />
  <input type="text" id="cost" name="cost" required /><br /><br />

  <label htmlFor="category">Last Name</label><br />
  <input type="text" id="category" name="category" required /><br /><br />

  <label htmlFor="date">date</label><br />
  <input type="date" id="date" name="date" required /><br /><br />

  <button type="submit">Submit</button>
</form>

    )
};

export default ExpensesEntry;