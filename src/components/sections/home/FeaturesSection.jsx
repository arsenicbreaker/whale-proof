import React from "react";

export default function FeaturesSection() {
  return (
    <section
      id="id_ico_service_section"
      className="ico_service_section section_space pb-0 section_decoration section_shadow_top"
    >
      <div className="decoration_item shape_divider_1">
        <img
          src="assets/images/shapes/shape_section_divider_1.svg"
          alt="Shape Divider"
        />
      </div>
      <div className="container">
        <div
          className="ico_heading_block text-center mt-lg-4"
          data-aos="fade-up"
          data-aos-duration="600"
        >
          <h2 className="heading_text mb-0">Why You Choose WhaleProof?</h2>
        </div>
        <div className="row m-lg-0 justify-content-center">
          <div
            className="col-lg-4 p-lg-0"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="100"
          >
            <div className="ico_service_image">
              <img
                src="assets/images/services/ico_service_image.webp"
                alt="ICO Service Icon"
              />
            </div>
          </div>
          <div
            className="col-lg-4 p-lg-0 order-lg-first"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="200"
          >
            <div className="ico_iconbox_block">
              <div className="iconbox_icon">
                <img src="assets/icons/icon_dollar_2.svg" alt="Icon Dollar" />
              </div>
              <div className="iconbox_info">
                <h3 className="iconbox_title">Institutional Risk Control</h3>
                <p className="iconbox_description mb-0">
                  Master professional risk management.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 p-lg-0"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="300"
          >
            <div className="ico_iconbox_block">
              <div className="iconbox_icon">
                <img
                  src="assets/icons/icon_bank_building.svg"
                  alt="Icon Bank Building"
                />
              </div>
              <div className="iconbox_info">
                <h3 className="iconbox_title">Market Logic</h3>
                <p className="iconbox_description mb-0">
                  Understand the supply and market cap math that actually moves
                  the price.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 p-lg-0"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="400"
          >
            <div className="ico_iconbox_block">
              <div className="iconbox_icon">
                <img src="assets/icons/icon_scan.svg" alt="Icon Scan" />
              </div>
              <div className="iconbox_info">
                <h3 className="iconbox_title">Real Simulation</h3>
                <p className="iconbox_description mb-0">
                  Test your skills in high-pressure simulations before risking a
                  single dollar.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 p-lg-0"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="500"
          >
            <div className="ico_iconbox_block">
              <div className="iconbox_icon">
                <img
                  src="assets/images/services/icon_pinpoint.png"
                  alt="Icon Pinpoint"
                />
              </div>
              <div className="iconbox_info">
                <h3 className="iconbox_title">Noise Filter</h3>
                <p className="iconbox_description mb-0">
                  Build a bulletproof mindset to filter out hype and avoid
                  market traps.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="decoration_item shape_shadow_1">
        <img
          src="assets/images/shapes/shape_poligon.svg"
          alt="Shape Color Shadow"
        />
      </div>
      <div className="decoration_item shape_shadow_2">
        <img
          src="assets/images/shapes/shape_poligon.svg"
          alt="Shape Color Shadow"
        />
      </div>
    </section>
  );
}
