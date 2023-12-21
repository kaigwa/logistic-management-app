import React from "react"

const Createaccount = (props) => {
  return (
    <div className="main">
        <h4>Fungua Akaunti</h4> 
        <label htmlFor="">Tarehe</label>
        <span>16/10/2023</span>

        <label htmlFor="">Jina</label>
        <input type="text" name="" id="" />

        <label htmlFor="">Namba ya Simu</label>
        <input type="tel" name="" id="" />

        <label htmlFor="">Namba ya Gari</label>
        <input type="number" name="" id="" />

        <label htmlFor="">
        <input type="radio" value='Guest' name="visitor" id=""/>
        Guest
        </label>

        <label htmlFor="">
        <input type="radio" value='Agent' name="visitor" id=""/>
        Agent
        </label>

        <label htmlFor="">
        <input type="radio" value='Worker' name="visitor" id=""/>
        Worker
        </label>

        <label htmlFor="">
        <input type="checkbox" name="" id=""/>
            Nakubaliana na masharti.
        </label>

        <label htmlFor="">Sababu za Kututembelea</label>
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <button>Sajili</button>
    </div>
  )
};

export default Createaccount;
