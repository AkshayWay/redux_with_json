import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { appCss } from "../App.css";

//import flag from "../images";

import { fetchCountry, fetchCountryByIdFun } from "../actions/index";

//import { IMG } from "../../images";

export default function Home() {
  const [contryData, setcontryData] = useState([{ comments: [] }]);
  const [contryById, setcontryById] = useState({});
  const data = useSelector((state) => state.countryReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCountry());
  }, [dispatch]);

  useEffect(() => {
    setcontryData(data.country);
  }, [data.country]);

  const ChangeDropdown = (getID) => {
    dispatch(fetchCountryByIdFun(getID));
  };
  const dataByID = useSelector((state) => state.getReducerById);
  useEffect(() => {
    setcontryById(dataByID);
  }, [dataByID]);

  console.log("Data after drop down selection", contryById);

  // if (
  //   contryById.country != "undefined" &&
  //   contryById.country != undefined &&
  //   contryById.country != ""
  // ) {
  //   console.log("isArray", Array.isArray(contryById.country));
  //   var isArrayFlag = Array.isArray(contryById.country);
  //   var isArrayFlag = Array.isArray(contryById.country);
  //   if (isArrayFlag == false) {
  //     const obj = JSON.parse(contryById.country);
  //     console.log(obj.id, obj.name);
  //   }
  // }
  return (
    <div>
      <h2>Home Page</h2>
      {/* <button onClick={() => dispatch(Getalldata())}>Click here</button> */}
      <div className="dropdownCenter">
        <select
          //   onChange={(e) => setValue(e.currentTarget.value)}
          onChange={(e) => ChangeDropdown(e.currentTarget.value)}
          className="form-select form-select-sm mb-3"
          aria-label=".form-select-lg example"
          style={{ width: "50%" }}
        >
          {contryData.map((post) => (
            <option key={post.id} value={post.id}>
              {post.name}
            </option>
          ))}
        </select>
      </div>
      <h3>Selected Country</h3>
      {/* <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Continent</th>
              <th>Rank</th>
              <th>flag</th>
            </tr>
          </thead>
          <tbody>
            {contryById.country == "undefined" ||
            contryById.country == undefined ||
            contryById.country == "" ? (
              <tr>
                <td colSpan="4">No data found</td>
              </tr>
            ) : (
              contryById.country.map((country) => (
                <tr key={country.id}>
                  <td>{country.id}</td>
                  <td>{country.name}</td>
                  <td>{country.continent}</td>
                  <td>{country.rank}</td>
                  <td>
                    <img
                      src={"/" + country.flag}
                      className="card-img"
                      alt={country.flag}
                      style={{ width: "150px", height: "100px" }}
                    />
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div> */}
      <h2>All contries</h2>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Continent</th>
              <th>Rank</th>
              <th>flag</th>
            </tr>
          </thead>
          <tbody>
            {contryData == undefined ? (
              <tr>
                <td>Name</td>
                <td>Continent</td>
                <td>Rank</td>
                <td>Flag</td>
              </tr>
            ) : (
              contryData.map((country) => (
                <tr key={country.id}>
                  <td>{country.id}</td>
                  <td>{country.name}</td>
                  <td>{country.continent}</td>
                  <td>{country.rank}</td>
                  <td>
                    <img
                      src={"/" + country.flag}
                      className="card-img"
                      alt={country.flag}
                      style={{ width: "150px", height: "100px" }}
                    />
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
