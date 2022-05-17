import "./Form.css";
import React, {useState} from "react";
function Form() {


  const [data, setData] = useState({
    title: "", location: "", description: ""
  });

  let name, value
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setData({...data, [name]: value});

  }
  return (
    <form>
      <div className="job-title">
        <label>Job Title*</label>
        <br />
        <input
          type="text"
          className="input-title"
          name="title"
          placeholder="Write a title that appropriately describes this job"
          value={data.title}
          onChange={handleInputs}
          required
        />
      </div>
      <div className="location">
        <label>Location*</label>
        <br />
        <input
          type="text"
          className="input-location"
          placeholder="Add location"
          name="location"
          value={data.location}
          onChange={handleInputs}
          required
        />
      </div>
      <div className="experience">
        <label>Years of Experience*</label>
        <br />
        <select className="input-yoe-min" required>
          <option value="0">Select Min</option>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="8">8</option>
          <option value="10">10</option>
        </select>
        <select className="input-yoe-max">
          <option value="0">Select Max</option>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="8">8</option>
          <option value="10">10</option>
        </select>
      </div>
      <div className="description">
      <label>Job Description*</label><br />
        <input
          type="text"
          className="input-description"
          name="description"
          placeholder="Describe the role and responsibilities, skills required for the job and help the candidates understand the role better"
          value={data.description}
          onChange={handleInputs}
          required
        />
      </div>
      <div className="targeting">
      <p className="text-targeting">Targeting</p>
      <hr width="1000px" />
      <div className="category-and-functionalarea">
        <div className="category">
            <label>Category*</label>
            <br />
            <select className="input-category" required>
              <option value="0">Select</option>
              <option value="business-development">Business Development</option>
              <option value="engineering">Engineering</option>
              <option value="finance">Finance</option>
              <option value="design">Design</option>
            </select>
        </div>
        <div className="functional-area">
        <label>Functional Area*</label>
            <br />
            <select className="input-functional-area" required>
              <option value="0">Select</option>
              <option value="software">Software</option>
              <option value="administration">Administration</option>
              <option value="hr">HR</option>
              <option value="product">Product</option>
            </select>
        </div>

      </div>
      <div className="experience">
        <label>Graduating Year</label>
        <br />
        <select className="input-yoe-min">
          <option value="0">Min Batch</option>
          <option value="2015">2015</option>
          <option value="2016">2016</option>
          <option value="2017">2017</option>
          <option value="2018">2018</option>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
        </select>
        <select className="input-yoe-max">
          <option value="0">Max Batch</option>
          <option value="2015">2015</option>
          <option value="2016">2016</option>
          <option value="2017">2017</option>
          <option value="2018">2018</option>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
        </select>
      </div>
      </div>
      <div className="tags">
      <label>Tags</label>
        <br />
        <input
          type="text"
          className="input-tags"
          placeholder="Tags"
        />
      </div>
      
      <br />
      

      <div className="buttons">
      <a href="/v1jobs/job" className="btn btn1">Post Job</a>
      <a href="#!" className="btn btn1">Post Job and Add another job</a>
      <a href="#!" className="btn2">Cancel</a>
      </div>
      <br />
      <br />
    </form>
  );
}

export default Form;
