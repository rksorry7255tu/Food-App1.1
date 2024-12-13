import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const Meal = () => {
  const [apiData, setApiData] = useState([]);
  const [area, setArea] = useState("indian");
  const [search,setSearch]=useState("")

  useEffect(() => {
    const FetchDataFromApi = async () => {
      const api = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`
      );
      const data = await api.json();
      setApiData(data.meals);
      // console.log(data.meals);
      
    };
    FetchDataFromApi();
    
  }, [area]);


  const submitHandler =async(e)=>{
    e.preventDefault();
    const api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    );
    const data = await api.json();
    setApiData(data.meals);
    console.log(data);
   
    
  }




  return (
    <>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "2rem",
            height: "50px",
            width: "100%",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          <button
            onClick={() => setArea("Indian")}
            type="button"
            className="btn btn-primary"
          >
            Indian
          </button>
          <button
            onClick={() => setArea("canadian")}
            type="button"
            className="btn btn-secondary"
          >
            Canadian
          </button>
          <button
            onClick={() => setArea("american")}
            type="button"
            className="btn btn-success"
          >
            American
          </button>
          <button
            onClick={() => setArea("thai")}
            type="button"
            className="btn btn-danger"
          >
            Thai
          </button>
          <button
            onClick={() => setArea("british")}
            type="button"
            className="btn btn-warning"
          >
            British
          </button>
          <button
            onClick={() => setArea("russian")}
            type="button"
            className="btn btn-info"
          >
            Russian
          </button>
        </div>

        <form onSubmit={submitHandler}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "20px",
          }}
        >
          <input
            style={{
              borderRadius: "8px",
              border: "2px solid pink",
              width: "20rem",
              backgroundColor: "black",
              color: "white",
              textAlign: "center",
              fontSize: "1.5rem",
              textTransform: "full-width",
            }}
            type="text"
            placeholder="search"
            onChange={(e)=>setSearch(e.target.value)}
          />
        </form>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "2rem",
            width: "auto",
            margin: "60px",
          }}
        >
          {apiData.map((data) => (
            <div key={data.idMeal} style={{ textAlign: "center" }}>
              <div>
                <img
                  src={data.strMealThumb}
                  style={{
                    width: "320px",
                    borderRadius: "10px",
                    border: "2px solid blue",
                  }}
                />
              </div>
              <h5>{data.strMeal}</h5>
              <h5>{data.idMeal}</h5>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Meal;
