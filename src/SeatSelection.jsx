import React, { useMemo, useState } from "react";
import "./SeatSelection.css";


// =====================================================
// STADIUM SECTION DATA
// =====================================================

const stadiumSeatData = {

  // ===================================================
  // WANKHEDE STADIUM
  // ===================================================

  "Wankhede Stadium": {

    sections: [

      {
        name: "North Stand",
        price: 900,
        color: "green",
        position: "top-left",
        view: "Elevated view toward the centre of the ground."
      },

      {
        name: "Sunil Gavaskar Stand",
        price: 1500,
        color: "green",
        position: "top",
        view: "Elevated view with a broad view of the pitch."
      },

      {
        name: "Vijay Merchant Stand",
        price: 2000,
        color: "yellow",
        position: "top-right",
        view: "Side-angle view of the pitch and both wickets."
      },

      {
        name: "Sachin Tendulkar Stand",
        price: 3000,
        color: "orange",
        position: "right",
        view: "Wide side-on view of the playing field."
      },

      {
        name: "MCA Stand",
        price: 3500,
        color: "orange",
        position: "bottom-right",
        view: "Elevated view across the complete field."
      },

      {
        name: "Vitthal Divecha Stand",
        price: 2500,
        color: "yellow",
        position: "bottom",
        view: "Good elevated view of the pitch."
      },

      {
        name: "Garware Stand",
        price: 4500,
        color: "orange",
        position: "bottom-left",
        view: "Premium elevated view of the ground."
      },

      {
        name: "Grand Stand",
        price: 6000,
        color: "purple",
        position: "left",
        view: "Premium elevated view with a wide field perspective."
      },

      {
        name: "Garware Pavilion",
        price: 8000,
        color: "purple",
        position: "vip",
        view: "Premium pavilion-level view of the complete playing field."
      },

      {
        name: "Tata End",
        price: 1500,
        color: "green",
        position: "left-top",
        view: "End-on elevated view toward the pitch."
      }

    ]

  },


  // ===================================================
  // M CHINNASWAMY STADIUM
  // ===================================================

  "M. Chinnaswamy Stadium": {

    sections: [

      {
        name: "Sun Pharma A Stand",
        price: 3750,
        color: "green",
        position: "top-left",
        view: "Elevated end view toward the pitch."
      },

      {
        name: "Puma Shanta Rangaswamy B Stand",
        price: 3750,
        color: "green",
        position: "top",
        view: "Elevated view across the pitch."
      },

      {
        name: "Boat C Stand",
        price: 3750,
        color: "yellow",
        position: "top-right",
        view: "Wide elevated view of the playing field."
      },

      {
        name: "Confirmtkt D Corporate",
        price: 10000,
        color: "purple",
        position: "right",
        view: "Premium corporate view of the complete ground."
      },

      {
        name: "E Stand",
        price: 3750,
        color: "yellow",
        position: "bottom-right",
        view: "Side-on elevated view of both wickets."
      },

      {
        name: "Javagal Srinath P1 Annexe",
        price: 3750,
        color: "green",
        position: "bottom",
        view: "Elevated view toward the pitch."
      },

      {
        name: "Venkatesh Prasad P4",
        price: 3750,
        color: "green",
        position: "bottom-left",
        view: "Good elevated view of the field."
      },

      {
        name: "BKT Tyres E Executive Lounge",
        price: 12000,
        color: "purple",
        position: "left",
        view: "Premium lounge view with a wide field perspective."
      },

      {
        name: "Sun Pharma Grand Terrace",
        price: 15000,
        color: "orange",
        position: "left-top",
        view: "High-level panoramic view of the stadium."
      },

      {
        name: "BS Chandrashekhar P Terrace",
        price: 7500,
        color: "orange",
        position: "right-top",
        view: "Elevated view of the entire playing area."
      },

      {
        name: "Syed Kirmani P Corporate",
        price: 20000,
        color: "purple",
        position: "vip",
        view: "Luxury elevated view of the field."
      },

      {
        name: "GR Vishwanath P2",
        price: 7500,
        color: "orange",
        position: "left-bottom",
        view: "Premium elevated view toward the pitch."
      }

    ]

  },


  // ===================================================
  // RAJIV GANDHI INTERNATIONAL STADIUM
  // ===================================================

  "Rajiv Gandhi International Stadium": {

    sections: [

      {
        name: "East Stand",
        price: 1500,
        color: "green",
        position: "top-left",
        view: "Elevated view of the playing field."
      },

      {
        name: "North Stand",
        price: 2000,
        color: "green",
        position: "top",
        view: "End view toward the pitch."
      },

      {
        name: "West Stand",
        price: 2500,
        color: "yellow",
        position: "top-right",
        view: "Wide view of both ends of the pitch."
      },

      {
        name: "South Stand",
        price: 2000,
        color: "green",
        position: "right",
        view: "Elevated view across the field."
      },

      {
        name: "Premium Stand",
        price: 3500,
        color: "orange",
        position: "bottom-right",
        view: "Premium side-on view."
      },

      {
        name: "North Pavilion",
        price: 5000,
        color: "orange",
        position: "bottom",
        view: "Elevated pavilion view."
      },

      {
        name: "South Pavilion",
        price: 5000,
        color: "orange",
        position: "bottom-left",
        view: "Wide elevated view of the field."
      },

      {
        name: "Executive Lounge",
        price: 7500,
        color: "purple",
        position: "left",
        view: "Premium lounge view."
      },

      {
        name: "VIP Lounge",
        price: 10000,
        color: "purple",
        position: "vip",
        view: "Luxury elevated view of the playing area."
      }

    ]

  },


  // ===================================================
  // ARUN JAITLEY STADIUM
  // ===================================================

  "Arun Jaitley Stadium": {

    sections: [

      {
        name: "East Stand",
        price: 1400,
        color: "green",
        position: "top-left",
        view: "Elevated view toward the pitch."
      },

      {
        name: "North East Stand",
        price: 2100,
        color: "green",
        position: "top",
        view: "End-angle view of the pitch."
      },

      {
        name: "North Central Stand",
        price: 2100,
        color: "yellow",
        position: "top-right",
        view: "Elevated view across the ground."
      },

      {
        name: "North West Stand",
        price: 2100,
        color: "yellow",
        position: "right",
        view: "Wide view of both wickets."
      },

      {
        name: "West Stand",
        price: 1900,
        color: "green",
        position: "bottom-right",
        view: "Elevated side view of the field."
      },

      {
        name: "Virat Kohli Pavilion",
        price: 5000,
        color: "orange",
        position: "bottom",
        view: "Premium elevated view toward the pitch."
      },

      {
        name: "Willingdon Pavilion",
        price: 5000,
        color: "orange",
        position: "bottom-left",
        view: "Premium pavilion view of the stadium."
      },

      {
        name: "Hill A Premium Gallery",
        price: 5000,
        color: "purple",
        position: "left",
        view: "Premium elevated view of the entire field."
      },

      {
        name: "Old Club House",
        price: 7500,
        color: "purple",
        position: "left-top",
        view: "Premium hospitality view."
      },

      {
        name: "DC Lounge",
        price: 10000,
        color: "purple",
        position: "vip",
        view: "Luxury elevated view of the complete playing area."
      }

    ]

  },


  // ===================================================
  // NARENDRA MODI STADIUM
  // ===================================================

  "Narendra Modi Stadium": {

    sections: [

      {
        name: "Block J Bay 1-5 Upper",
        price: 1000,
        color: "green",
        position: "top-left",
        view: "High-level view of the playing field."
      },

      {
        name: "Block K Bay 1-2 Upper",
        price: 1000,
        color: "green",
        position: "top",
        view: "Elevated end view."
      },

      {
        name: "Jio Block L",
        price: 1500,
        color: "yellow",
        position: "top-right",
        view: "Wide elevated view of the pitch."
      },

      {
        name: "BKT Tyres Blocks Q/R",
        price: 1500,
        color: "yellow",
        position: "right",
        view: "Side-on view of the pitch."
      },

      {
        name: "Astral Pipes Block",
        price: 1800,
        color: "orange",
        position: "bottom-right",
        view: "Premium lower-tier view."
      },

      {
        name: "Torrent Group Blocks M/N/P",
        price: 1800,
        color: "orange",
        position: "bottom",
        view: "Wide premium view of the field."
      },

      {
        name: "North Gallery",
        price: 3000,
        color: "orange",
        position: "bottom-left",
        view: "High elevated panoramic view."
      },

      {
        name: "South Gallery",
        price: 3000,
        color: "orange",
        position: "left-bottom",
        view: "High-level panoramic view."
      },

      {
        name: "Grew Solar Block",
        price: 3000,
        color: "orange",
        position: "left",
        view: "Premium elevated view."
      },

      {
        name: "Torrent Group President Gallery",
        price: 10000,
        color: "purple",
        position: "left-top",
        view: "Luxury elevated view."
      },

      {
        name: "VIP Gallery",
        price: 12000,
        color: "purple",
        position: "vip",
        view: "Premium hospitality view."
      }

    ]

  },


  // ===================================================
  // EKANA / BRSABVE
  // ===================================================

  "BRSABVE Cricket Stadium": {

    sections: [

      {
        name: "East Stand",
        price: 1000,
        color: "green",
        position: "top-left",
        view: "Elevated view of the pitch."
      },

      {
        name: "North Stand",
        price: 1200,
        color: "green",
        position: "top",
        view: "End view toward the pitch."
      },

      {
        name: "West Stand",
        price: 1500,
        color: "yellow",
        position: "top-right",
        view: "Wide elevated view."
      },

      {
        name: "South Stand",
        price: 1500,
        color: "yellow",
        position: "right",
        view: "Elevated side view."
      },

      {
        name: "Premium Stand",
        price: 2000,
        color: "orange",
        position: "bottom-right",
        view: "Premium view of the playing area."
      },

      {
        name: "Pavilion",
        price: 3500,
        color: "orange",
        position: "bottom",
        view: "Elevated pavilion view."
      },

      {
        name: "Executive Lounge",
        price: 5000,
        color: "purple",
        position: "bottom-left",
        view: "Premium lounge view."
      },

      {
        name: "Corporate Box",
        price: 7500,
        color: "purple",
        position: "left",
        view: "Luxury elevated view."
      },

      {
        name: "VIP Lounge",
        price: 10000,
        color: "purple",
        position: "vip",
        view: "Premium hospitality view."
      }

    ]

  }

};


// =====================================================
// STADIUM NAME HELPER
// =====================================================

function getStadiumName(stadium) {

  if (!stadium) {
    return "Wankhede Stadium";
  }

  const value =
    typeof stadium === "string"
      ? stadium
      : stadium.name || stadium.stadium || "";

  const lower =
    value.toLowerCase();

  if (lower.includes("wankhede")) {
    return "Wankhede Stadium";
  }

  if (lower.includes("chinnaswamy")) {
    return "M. Chinnaswamy Stadium";
  }

  if (lower.includes("rajiv gandhi")) {
    return "Rajiv Gandhi International Stadium";
  }

  if (lower.includes("arun jaitley")) {
    return "Arun Jaitley Stadium";
  }

  if (lower.includes("narendra modi")) {
    return "Narendra Modi Stadium";
  }

  if (
    lower.includes("brsabve") ||
    lower.includes("ekana")
  ) {
    return "BRSABVE Cricket Stadium";
  }

  return "Wankhede Stadium";
}


// =====================================================
// SEAT GENERATOR
// =====================================================

function createSeats(section, sectionIndex) {

  const rows =
    ["A", "B", "C", "D", "E"];

  const seats = [];

  rows.forEach(
    (row, rowIndex) => {

      for (
        let number = 1;
        number <= 10;
        number++
      ) {

        const value =
          (
            number * 7 +
            rowIndex * 13 +
            sectionIndex * 5
          ) % 19;

        let status =
          "available";

        if (
          value === 2 ||
          value === 6 ||
          value === 11
        ) {

          status =
            "limited";

        }

        if (value === 17) {

          status =
            "booked";

        }

        seats.push({

          id:
            `${section.name}-${row}${number}`,

          label:
            `${row}${number}`,

          status,

          price:
            section.price

        });

      }

    }
  );

  return seats;
}


// =====================================================
// COMPONENT
// =====================================================

function SeatSelection({
  stadium,
  match,
  onBack,
  onContinue
}) {

  const stadiumName =
    getStadiumName(stadium);

  const data =
    stadiumSeatData[stadiumName];

  const [
    selectedSeats,
    setSelectedSeats
  ] = useState([]);

  const [
    previewSeat,
    setPreviewSeat
  ] = useState(null);


  // ===================================================
  // CREATE SEATS
  // ===================================================

  const seatsBySection =
    useMemo(() => {

      const result = {};

      data.sections.forEach(
        (section, index) => {

          result[section.name] =
            createSeats(
              section,
              index
            );

        }
      );

      return result;

    }, [data]);


  // ===================================================
  // SELECT SEAT
  // ===================================================

  const handleSeatClick =
    (seat, section) => {

      if (
        seat.status === "booked"
      ) {

        return;

      }

      setPreviewSeat({

        ...seat,

        section:
          section.name,

        view:
          section.view

      });


      setSelectedSeats(
        previous => {

          const exists =
            previous.some(
              item =>
                item.id === seat.id
            );

          if (exists) {

            return previous.filter(
              item =>
                item.id !== seat.id
            );

          }

          return [

            ...previous,

            {
              ...seat,
              section:
                section.name
            }

          ];

        }
      );

    };


  // ===================================================
  // TOTAL
  // ===================================================

  const totalPrice =
    selectedSeats.reduce(
      (total, seat) =>
        total + seat.price,
      0
    );


  // ===================================================
  // MATCH NAME
  // ===================================================

  const matchName =
    match?.team1 &&
    match?.team2
      ? `${match.team1} vs ${match.team2}`
      : "IPL / WPL Match";


  // ===================================================
  // CONTINUE
  // ===================================================

  const handleContinue =
    () => {

      if (
        selectedSeats.length === 0
      ) {

        alert(
          "Please select at least one seat."
        );

        return;

      }

      if (onContinue) {

        onContinue({

          stadium:
            stadiumName,

          match,

          seats:
            selectedSeats,

          total:
            totalPrice

        });

      }

    };


  // ===================================================
  // UI
  // ===================================================

  return (

    <div className="seat-page">


      {/* HEADER */}

      <header className="seat-header">

        <button
          className="seat-back-btn"
          onClick={onBack}
        >
          ← Back
        </button>


        <div>

          <p className="seat-small-title">
            SELECT YOUR SEATS
          </p>

          <h1>
            {stadiumName}
          </h1>

          <p className="seat-match-name">
            {matchName}
          </p>

        </div>

      </header>


      {/* LEGEND */}

      <div className="seat-legend">

        <div>
          <span className="legend-dot available"></span>
          Available
        </div>

        <div>
          <span className="legend-dot limited"></span>
          Limited
        </div>

        <div>
          <span className="legend-dot premium"></span>
          Premium
        </div>

        <div>
          <span className="legend-dot booked"></span>
          Booked
        </div>

        <div>
          <span className="legend-dot selected"></span>
          Selected
        </div>

      </div>


      {/* MAIN */}

      <div className="seat-layout">


        {/* STADIUM */}

        <section className="stadium-map-card">

          <div className="stadium-map">


            {/* STADIUM RING */}

            <div className="stadium-ring"></div>


            {/* TOP LEFT */}

            <MapSection
              section={data.sections[0]}
              seats={seatsBySection[data.sections[0].name]}
              selectedSeats={selectedSeats}
              onClick={handleSeatClick}
              className="map-position-1"
            />


            {/* TOP */}

            <MapSection
              section={data.sections[1]}
              seats={seatsBySection[data.sections[1].name]}
              selectedSeats={selectedSeats}
              onClick={handleSeatClick}
              className="map-position-2"
            />


            {/* TOP RIGHT */}

            <MapSection
              section={data.sections[2]}
              seats={seatsBySection[data.sections[2].name]}
              selectedSeats={selectedSeats}
              onClick={handleSeatClick}
              className="map-position-3"
            />


            {/* RIGHT */}

            <MapSection
              section={data.sections[3]}
              seats={seatsBySection[data.sections[3].name]}
              selectedSeats={selectedSeats}
              onClick={handleSeatClick}
              className="map-position-4"
            />


            {/* BOTTOM RIGHT */}

            <MapSection
              section={data.sections[4]}
              seats={seatsBySection[data.sections[4].name]}
              selectedSeats={selectedSeats}
              onClick={handleSeatClick}
              className="map-position-5"
            />


            {/* BOTTOM */}

            <MapSection
              section={data.sections[5]}
              seats={seatsBySection[data.sections[5].name]}
              selectedSeats={selectedSeats}
              onClick={handleSeatClick}
              className="map-position-6"
            />


            {/* BOTTOM LEFT */}

            <MapSection
              section={data.sections[6]}
              seats={seatsBySection[data.sections[6].name]}
              selectedSeats={selectedSeats}
              onClick={handleSeatClick}
              className="map-position-7"
            />


            {/* LEFT */}

            <MapSection
              section={data.sections[7]}
              seats={seatsBySection[data.sections[7].name]}
              selectedSeats={selectedSeats}
              onClick={handleSeatClick}
              className="map-position-8"
            />


            {/* PITCH */}

            <div className="real-pitch">

              <div className="pitch-grass">

                <div className="pitch-strip">

                  <span>
                    🏏
                  </span>

                  <strong>
                    PITCH
                  </strong>

                </div>

              </div>

              <small>
                PLAYING FIELD
              </small>

            </div>


            {/* VIP */}

            <div className="map-vip">

              <span>
                ★
              </span>

              <strong>
                {data.sections[
                  data.sections.length - 1
                ].name}
              </strong>

              <b>
                ₹
                {data.sections[
                  data.sections.length - 1
                ].price.toLocaleString("en-IN")}
              </b>

            </div>


          </div>


          <p className="stadium-map-note">
            Select a seat directly from the stadium map.
          </p>

        </section>


        {/* SIDEBAR */}

        <aside className="seat-sidebar">


          {/* VIEW PREVIEW */}

          <div className="view-preview">

            <div className="preview-header">

              <h2>
                👁️ View From Your Seat
              </h2>

              <span>
                AI PREVIEW
              </span>

            </div>


            <div className="view-image">

              <div className="preview-sky"></div>

              <div className="preview-upper-stand"></div>

              <div className="preview-lower-stand"></div>

              <div className="preview-field">

                <div className="preview-pitch">

                  <span>
                    🏏
                  </span>

                </div>

              </div>

              <div className="preview-seat-line"></div>

              <div className="preview-seat-label">
                YOUR VIEW
              </div>

            </div>


            {!previewSeat ? (

              <p className="view-description">
                Select a seat to preview the view
                from that stadium section.
              </p>

            ) : (

              <div className="preview-details">

                <strong>
                  {previewSeat.section}
                </strong>

                <span>
                  Seat {previewSeat.label}
                </span>

                <span>
                  ₹
                  {previewSeat.price.toLocaleString("en-IN")}
                </span>

                <p>
                  {previewSeat.view}
                </p>

              </div>

            )}


            <small className="ai-note">
              View changes according to the
              selected stadium section.
            </small>

          </div>


          {/* SELECTED SEATS */}

          <div className="selected-card">

            <h2>
              🎟️ Selected Seats
            </h2>


            {selectedSeats.length === 0 ? (

              <p className="empty-selection">
                No seats selected yet.
              </p>

            ) : (

              <div className="selected-list">

                {selectedSeats.map(
                  seat => (

                    <div
                      className="selected-seat"
                      key={seat.id}
                    >

                      <div>

                        <strong>
                          {seat.label}
                        </strong>

                        <span>
                          {seat.section}
                        </span>

                      </div>

                      <strong>
                        ₹
                        {seat.price.toLocaleString("en-IN")}
                      </strong>

                    </div>

                  )
                )}

              </div>

            )}


            <div className="total-row">

              <span>
                Total
              </span>

              <strong>
                ₹
                {totalPrice.toLocaleString("en-IN")}
              </strong>

            </div>


            <button
              className="continue-seat-btn"
              onClick={handleContinue}
            >
              Continue to Parking →
            </button>

          </div>


        </aside>

      </div>

    </div>

  );

}


// =====================================================
// MAP SECTION
// =====================================================

function MapSection({
  section,
  seats,
  selectedSeats,
  onClick,
  className
}) {

  return (

    <div
      className={
        `map-section ${className} ${section.color}`
      }
    >

      <div className="stand-header">

        <div>

          <span className="stand-type">
            {section.color === "purple"
              ? "PREMIUM"
              : section.color === "orange"
                ? "PREMIUM STAND"
                : "STAND"}
          </span>

          <h3>
            {section.name}
          </h3>

        </div>

        <strong>
          ₹
          {section.price.toLocaleString("en-IN")}
        </strong>

      </div>


      <div className="section-seats">

        {seats.map(
          seat => (

            <Seat
              key={seat.id}
              seat={seat}
              section={section}
              selectedSeats={selectedSeats}
              onClick={onClick}
            />

          )
        )}

      </div>

    </div>

  );

}


// =====================================================
// SEAT
// =====================================================

function Seat({
  seat,
  section,
  selectedSeats,
  onClick
}) {

  const isSelected =
    selectedSeats.some(
      item =>
        item.id === seat.id
    );


  let className =
    "heat-seat";


  if (
    seat.status === "available"
  ) {

    className +=
      " available";

  }


  if (
    seat.status === "limited"
  ) {

    className +=
      " limited";

  }


  if (
    seat.status === "booked"
  ) {

    className +=
      " booked";

  }


  if (
    section.color === "orange"
  ) {

    className +=
      " premium-seat";

  }


  if (
    section.color === "purple"
  ) {

    className +=
      " vip-seat";

  }


  if (isSelected) {

    className +=
      " selected";

  }


  return (

    <button

      className={className}

      disabled={
        seat.status === "booked"
      }

      title={
        `${section.name} • Seat ${seat.label} • ₹${seat.price}`
      }

      onClick={() =>
        onClick(
          seat,
          section
        )
      }

    >

      {seat.label}

    </button>

  );

}


export default SeatSelection;