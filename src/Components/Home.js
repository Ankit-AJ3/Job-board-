import React from "react";
import '../Css/Home.css'


function Home() {
  let Category = localStorage.getItem("Category").replace(/"/g, "");
  if (Category === "Employer") {
    return (
      <>
        <button style={{ color: 'blue', lineHeight: 1, padding: 10 }}><a href="/jobposting">Create a new Job</a></button>
        <button style={{ color: 'blue', lineHeight: 1, padding: 10 }}><a href="/joblisting">Available Jobs</a></button>

      </>
    );
  } else {

    return (
      <>
        <button><a href="/joblisting">Available Jobs</a></button>


      </>
    );
  }
}

export default Home;
