import { useState } from "react";
import Values from "values.js";
import { nanoid } from 'nanoid'
import { ToastContainer, toast } from "react-toastify";
const App = () => {
  const [color, setColor] = useState("");
  const [shades, setShades] = useState([]);
  function handleSubmit(e) {
    e.preventDefault();
    try {
      
    
    const val = new Values(color).all(10);
    console.log("val", val);
    if (val.length > 0) {
      toast.success("Color added successfully", {
        position: "top-right",
        autoClose: 5000,
      });
      setShades(val);
    }
    } catch (error) {
        toast.error("Please add a valid hex code", {
        position: "top-right",
        autoClose: 5000,
      });
    }
  }
  return (
    <>
    <div className="container">
      <h4>Color Generator</h4>
      <form className="color-form">
        <input type="color" onChange={(e) => setColor(e.target.value)} />
        <input
          type="text"
          onChange={(e) => setColor(e.target.value)}
          value={color}
        />
        <button className="btn" onClick={handleSubmit}>
          Submit
        </button>
      </form>
      </div>
      <section className="colors">
        {shades.map((i) => {
          return (
            <div
              className='color'
              style={{
                background: `rgb(${i.rgb[0]}, ${i.rgb[1]}, ${i.rgb[2]})`,
              }}
              key={nanoid()}
            >
              <div className="color-light">
                <p className={i.type == "shade" ? `percent-value` : null}>
                  {i.weight}%
                </p>
                <p className={i.type == "shade" ? `color-value` : null}>
                  #{i.hex}
                </p>
              </div>
            </div>
          );
        })}
      </section>
   </>
  );
};
export default App;
