import React from "react";

export default function ProblemSolutionSection() {
  return (
    <section className="problem_solution_section section_space pb-0">
      <div className="container">
        <div
          className="ico_heading_block text-center"
          data-aos="fade-up"
          data-aos-duration="600"
        >
          <h2 className="heading_text mb-0">
            WhaleProof Problem & Solution
          </h2>
        </div>
        <div
          className="ico_problem_solution_table"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="100"
        >
          <div className="column_wrapper">
            <div className="column_problem">
              <h3 className="heading_text">
                <span className="icon">
                  <img
                    src="assets/icons/icon_man_question.svg"
                    alt="Icon Man With Question"
                  />
                </span>
                <span className="text">The Market Reality</span>
              </h3>
              <ul className="iconlist_block unordered_list_block">
                <li>
                  <span className="iconlist_icon">
                    <img src="assets/icons/icon_check.svg" alt="Icon Check" />
                  </span>
                  <span className="iconlist_label">
                    90% Failure Rate.
                    <small className="iconlist_info">
                      Most retail traders lose their entire capital within the first 90 days due to a lack of foundation.
                    </small>
                  </span>
                </li>
                <li>
                  <span className="iconlist_icon">
                    <img src="assets/icons/icon_check.svg" alt="Icon Check" />
                  </span>
                  <span className="iconlist_label">
                    The "Exit Liquidity" Trap.
                    <small className="iconlist_info">
                      Trading without financial literacy turns retail investors into easy profit for institutional giants (Whales).
                    </small>
                  </span>
                </li>
                <li>
                  <span className="iconlist_icon">
                    <img src="assets/icons/icon_check.svg" alt="Icon Check" />
                  </span>
                  <span className="iconlist_label">
                    Emotional Manipulation.
                    <small className="iconlist_info">
                      Market volatility is designed to trigger FOMO and panic, forcing retailers to buy high and sell low.
                    </small>
                  </span>
                </li>
                <li>
                  <span className="iconlist_icon">
                    <img src="assets/icons/icon_check.svg" alt="Icon Check" />
                  </span>
                  <span className="iconlist_label">
                    Fundamental Blindness.
                    <small className="iconlist_info">
                      Relying solely on "magic indicators" while ignoring the core math of Market Cap and Supply dynamics.
                    </small>
                  </span>
                </li>
              </ul>
            </div>
            <div className="column_solution">
              <h3 className="heading_text">
                <span className="icon">
                  <img src="assets/icons/icon_bulb.svg" alt="Icon Bulb" />
                </span>
                <span className="text">The Solution</span>
              </h3>
              <ul className="iconlist_block unordered_list_block">
                <li>
                  <span className="iconlist_icon">
                    <img src="assets/icons/icon_check.svg" alt="Icon Check" />
                  </span>
                  <span className="iconlist_label">
                    Interactive Risk Shield.
                    <small className="iconlist_info">
                     Learn to protect your portfolio using institutional-grade risk management before you touch the "Buy" button.
                    </small>
                  </span>
                </li>
                <li>
                  <span className="iconlist_icon">
                    <img src="assets/icons/icon_check.svg" alt="Icon Check" />
                  </span>
                  <span className="iconlist_label">
                    Whale-Proof Certification.
                    <small className="iconlist_info">
                      Validate your survival skills through real-market simulations and case-based interactive testing.
                    </small>
                  </span>
                </li>
                <li>
                  <span className="iconlist_icon">
                    <img src="assets/icons/icon_check.svg" alt="Icon Check" />
                  </span>
                  <span className="iconlist_label">
                    Psychology Re-wiring.
                    <small className="iconlist_info">
                      Build a bulletproof mindset to resist market manipulation and emotional triggers with our Anchor modules.
                    </small>
                  </span>
                </li>
                <li>
                  <span className="iconlist_icon">
                    <img src="assets/icons/icon_check.svg" alt="Icon Check" />
                  </span>
                  <span className="iconlist_label">
                    Math-Driven Insights.
                    <small className="iconlist_info">
                      Master the "90%"—the core financial logic and market dynamics that actually move the price.
                    </small>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
