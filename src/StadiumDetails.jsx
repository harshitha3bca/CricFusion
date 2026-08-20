import React from "react";
import "./StadiumDetails.css";

function StadiumDetails({ stadium, onBack }) {

  return (
    <div className="stadium-details-page">

      {/* BACK BUTTON */}
      <button className="stadium-back-btn" onClick={onBack}>
        ← Back to Matches
      </button>

      {/* ================= STADIUM PHOTO ================= */}
      <div className="stadium-hero">

        <img
          src={stadium.image}
          alt={stadium.name}
          className="stadium-hero-image"
        />

        <div className="stadium-hero-overlay">
          <p>🏟️ STADIUM DETAILS</p>

          <h1>
            {stadium.name}
          </h1>
        </div>

      </div>


      {/* ================= DETAILS ================= */}
      <div className="stadium-details-container">

        {/* ADDRESS */}
        <div className="stadium-section">

          <h2>📍 Address</h2>

          <p>
            {stadium.address}
          </p>

        </div>


        {/* FACILITIES */}
        <div className="stadium-section">

          <h2>🏟️ Facilities</h2>

          <div className="facilities-grid">

            {stadium.facilities.map((facility, index) => (
              <div className="facility-item" key={index}>
                <span>{facility.icon}</span>
                <p>{facility.name}</p>
              </div>
            ))}

          </div>

        </div>


        {/* PITCH */}
        <div className="stadium-section">

          <h2>🏏 Pitch Information</h2>

          <div className="pitch-card">

            <h3>
              {stadium.pitch}
            </h3>

            <p>
              {stadium.pitchDescription}
            </p>

          </div>

        </div>


        {/* BOOKING BUTTON */}
        <button className="stadium-book-btn">
          Continue to Seat Selection →
        </button>

      </div>

    </div>
  );
}

export default StadiumDetails;