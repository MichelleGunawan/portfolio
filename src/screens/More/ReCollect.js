import React from "react";
import Navbar from "../../components/NavBar";
import RecoAbout from "../../assets/images/RecoAbout.jpg";

const ReCollect = () => {
  return (
    <section id="portfolio" style={{paddingBottom: 0}}>
      <div className="col-md-12" style={{ paddingRight: 0, paddingLeft: 0, paddingBottom:0 }}>
        <Navbar />
        <div style={{ width: "100%", height: "100%" }}>
          <img
            src={RecoAbout}
            alt="RecoAbout"
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      </div>
    </section>
  );
};

export default ReCollect;