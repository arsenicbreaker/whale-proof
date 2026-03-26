import React from "react";

export default function TeamSection() {
  return (
    <section
      id="id_ico_team_section"
      className="ico_team_section section_decoration section_shadow_top section_space"
    >
      <div className="decoration_item shape_divider_1">
        <img
          src="assets/images/shapes/shape_section_divider_1.svg"
          alt="Shape Divider"
        />
      </div>
      <div className="container">
        <div
          className="ico_heading_block text-center"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <h2 className="heading_text mb-0">Active Team & Advisors</h2>
        </div>
    
        <div
          className="tab_block"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="100"
        >
          <div className="d-flex justify-content-center">
            <ul
              className="nav unordered_list justify-content-md-center"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  data-bs-target="#tab_advisory_team"
                  data-bs-toggle="tab"
                  type="button"
                  role="tab"
                  aria-selected="true"
                >
                  Advisory Team
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  data-bs-target="#tab_management_team"
                  data-bs-toggle="tab"
                  type="button"
                  role="tab"
                  aria-selected="false"
                >
                  Management Team
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  data-bs-target="#tab_marketing_team"
                  data-bs-toggle="tab"
                  type="button"
                  role="tab"
                  aria-selected="false"
                >
                  Marketing Team
                </button>
              </li>
            </ul>
          </div>
          <div className="tab-content">
            <div
              className="tab-pane fade show active"
              role="tabpanel"
              id="tab_advisory_team"
            >
              <div className="row justify-content-center">
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="ico_team_block">
                    <div className="ico_team_block_inner">
                      <div className="front_side_content">
                        <div
                          className="team_avatar"
                          style={{
                            backgroundImage:
                              "url('assets/images/shapes/shape_circle_1.svg')",
                          }}
                        >
                          <div className="avatar_wrap">
                            <img
                              src="assets/images/avatars/avatar_1.webp"
                              alt="Avatar"
                            />
                          </div>
                        </div>
                        <h3 className="team_member_name">Levi Harrison</h3>
                        <span className="team_member_designation mb-0">
                          Compliance Officer
                        </span>
                      </div>
                      <div className="back_side_content">
                        <p className="team_member_description">
                          Compliance Officer ensuring regulatory adherence and
                          risk management.
                        </p>
                        <ul className="social_block unordered_list justify-content-center">
                          <li>
                            <a href="#!">
                              <i className="fa-brands fa-linkedin"></i>
                            </a>
                          </li>
                        </ul>
                        <h4 className="team_member_name">Levi Harrison</h4>
                        <span className="team_member_designation mb-0">
                          Compliance Officer
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="ico_team_block">
                    <div className="ico_team_block_inner">
                      <div className="front_side_content">
                        <div
                          className="team_avatar"
                          style={{
                            backgroundImage:
                              "url('assets/images/shapes/shape_circle_2.svg')",
                          }}
                        >
                          <div className="avatar_wrap">
                            <img
                              src="assets/images/avatars/avatar_2.webp"
                              alt="Avatar"
                            />
                          </div>
                        </div>
                        <h3 className="team_member_name">Luna Seraphine</h3>
                        <span className="team_member_designation mb-0">
                          Financial Officer
                        </span>
                      </div>
                      <div className="back_side_content">
                        <p className="team_member_description">
                          Financial Officer focused on profitability and
                          resource management.
                        </p>
                        <ul className="social_block unordered_list justify-content-center">
                          <li>
                            <a href="#!">
                              <i className="fa-brands fa-linkedin"></i>
                            </a>
                          </li>
                        </ul>
                        <h4 className="team_member_name">Luna Seraphine</h4>
                        <span className="team_member_designation mb-0">
                          Financial Officer
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="ico_team_block">
                    <div className="ico_team_block_inner">
                      <div className="front_side_content">
                        <div
                          className="team_avatar"
                          style={{
                            backgroundImage:
                              "url('assets/images/shapes/shape_circle_3.svg')",
                          }}
                        >
                          <div className="avatar_wrap">
                            <img
                              src="assets/images/avatars/avatar_3.webp"
                              alt="Avatar"
                            />
                          </div>
                        </div>
                        <h3 className="team_member_name">Elias Maverick</h3>
                        <span className="team_member_designation mb-0">
                          Founder & CEO
                        </span>
                      </div>
                      <div className="back_side_content">
                        <p className="team_member_description">
                          A hands on founder who loves building scaling
                          businesses with clients.
                        </p>
                        <ul className="social_block unordered_list justify-content-center">
                          <li>
                            <a href="#!">
                              <i className="fa-brands fa-linkedin"></i>
                            </a>
                          </li>
                        </ul>
                        <h4 className="team_member_name">Elias Maverick</h4>
                        <span className="team_member_designation mb-0">
                          Founder & CEO
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="ico_team_block">
                    <div className="ico_team_block_inner">
                      <div className="front_side_content">
                        <div
                          className="team_avatar"
                          style={{
                            backgroundImage:
                              "url('assets/images/shapes/shape_circle_4.svg')",
                          }}
                        >
                          <div className="avatar_wrap">
                            <img
                              src="assets/images/avatars/avatar_4.webp"
                              alt="Avatar"
                            />
                          </div>
                        </div>
                        <h3 className="team_member_name">Atticus Graham</h3>
                        <span className="team_member_designation mb-0">
                          Technical Support
                        </span>
                      </div>
                      <div className="back_side_content">
                        <p className="team_member_description">
                          Passionate in seeking solutions for your problems.
                        </p>
                        <ul className="social_block unordered_list justify-content-center">
                          <li>
                            <a href="#!">
                              <i className="fa-brands fa-linkedin"></i>
                            </a>
                          </li>
                        </ul>
                        <h4 className="team_member_name">Atticus Graham</h4>
                        <span className="team_member_designation mb-0">
                          Technical Support
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="ico_team_block">
                    <div className="ico_team_block_inner">
                      <div className="front_side_content">
                        <div
                          className="team_avatar"
                          style={{
                            backgroundImage:
                              "url('assets/images/shapes/shape_circle_5.svg')",
                          }}
                        >
                          <div className="avatar_wrap">
                            <img
                              src="assets/images/avatars/avatar_5.webp"
                              alt="Avatar"
                            />
                          </div>
                        </div>
                        <h3 className="team_member_name">Amara Noelle</h3>
                        <span className="team_member_designation mb-0">
                          CTO Manager
                        </span>
                      </div>
                      <div className="back_side_content">
                        <p className="team_member_description">
                          CTO Manager driving tech innovation and overseeing
                          development strategies.
                        </p>
                        <ul className="social_block unordered_list justify-content-center">
                          <li>
                            <a href="#!">
                              <i className="fa-brands fa-linkedin"></i>
                            </a>
                          </li>
                        </ul>
                        <h4 className="team_member_name">Amara Noelle</h4>
                        <span className="team_member_designation mb-0">
                          CTO Manager
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="ico_team_block">
                    <div className="ico_team_block_inner">
                      <div className="front_side_content">
                        <div
                          className="team_avatar"
                          style={{
                            backgroundImage:
                              "url('assets/images/shapes/shape_circle_6.svg')",
                          }}
                        >
                          <div className="avatar_wrap">
                            <img
                              src="assets/images/avatars/avatar_6.webp"
                              alt="Avatar"
                            />
                          </div>
                        </div>
                        <h3 className="team_member_name">Ethan Mitchell</h3>
                        <span className="team_member_designation mb-0">
                          Blockchain Developer
                        </span>
                      </div>
                      <div className="back_side_content">
                        <p className="team_member_description">
                          Blockchain Developer building secure and scalable
                          decentralized solutions.
                        </p>
                        <ul className="social_block unordered_list justify-content-center">
                          <li>
                            <a href="#!">
                              <i className="fa-brands fa-linkedin"></i>
                            </a>
                          </li>
                        </ul>
                        <h4 className="team_member_name">Ethan Mitchell</h4>
                        <span className="team_member_designation mb-0">
                          Blockchain Developer
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="ico_team_block">
                    <div className="ico_team_block_inner">
                      <div className="front_side_content">
                        <div
                          className="team_avatar"
                          style={{
                            backgroundImage:
                              "url('assets/images/shapes/shape_circle_7.svg')",
                          }}
                        >
                          <div className="avatar_wrap">
                            <img
                              src="assets/images/avatars/avatar_7.webp"
                              alt="Avatar"
                            />
                          </div>
                        </div>
                        <h3 className="team_member_name">Aurora Selene</h3>
                        <span className="team_member_designation mb-0">
                          Legal Advisor
                        </span>
                      </div>
                      <div className="back_side_content">
                        <p className="team_member_description">
                          Legal Advisor providing expert guidance on legal
                          matters and risk management.
                        </p>
                        <ul className="social_block unordered_list justify-content-center">
                          <li>
                            <a href="#!">
                              <i className="fa-brands fa-linkedin"></i>
                            </a>
                          </li>
                        </ul>
                        <h4 className="team_member_name">Aurora Selene</h4>
                        <span className="team_member_designation mb-0">
                          Legal Advisor
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="ico_team_block">
                    <div className="ico_team_block_inner">
                      <div className="front_side_content">
                        <div
                          className="team_avatar"
                          style={{
                            backgroundImage:
                              "url('assets/images/shapes/shape_circle_8.svg')",
                          }}
                        >
                          <div className="avatar_wrap">
                            <img
                              src="assets/images/avatars/avatar_8.webp"
                              alt="Avatar"
                            />
                          </div>
                        </div>
                        <h3 className="team_member_name">Orion Maxwell</h3>
                        <span className="team_member_designation mb-0">
                          Project Manager
                        </span>
                      </div>
                      <div className="back_side_content">
                        <p className="team_member_description">
                          Committed to delivering successful projects
                          consistently.
                        </p>
                        <ul className="social_block unordered_list justify-content-center">
                          <li>
                            <a href="#!">
                              <i className="fa-brands fa-linkedin"></i>
                            </a>
                          </li>
                        </ul>
                        <h4 className="team_member_name">Orion Maxwell</h4>
                        <span className="team_member_designation mb-0">
                          Project Manager
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              role="tabpanel"
              id="tab_management_team"
            >
              <div className="row justify-content-center">
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="ico_team_block">
                    <div className="ico_team_block_inner">
                      <div className="front_side_content">
                        <div
                          className="team_avatar"
                          style={{
                            backgroundImage:
                              "url('assets/images/shapes/shape_circle_1.svg')",
                          }}
                        >
                          <div className="avatar_wrap">
                            <img
                              src="assets/images/avatars/avatar_1.webp"
                              alt="Avatar"
                            />
                          </div>
                        </div>
                        <h3 className="team_member_name">Levi Harrison</h3>
                        <span className="team_member_designation mb-0">
                          Compliance Officer
                        </span>
                      </div>
                      <div className="back_side_content">
                        <p className="team_member_description">
                          Compliance Officer ensuring regulatory adherence and
                          risk management.
                        </p>
                        <ul className="social_block unordered_list justify-content-center">
                          <li>
                            <a href="#!">
                              <i className="fa-brands fa-linkedin"></i>
                            </a>
                          </li>
                        </ul>
                        <h4 className="team_member_name">Levi Harrison</h4>
                        <span className="team_member_designation mb-0">
                          Compliance Officer
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="ico_team_block">
                    <div className="ico_team_block_inner">
                      <div className="front_side_content">
                        <div
                          className="team_avatar"
                          style={{
                            backgroundImage:
                              "url('assets/images/shapes/shape_circle_2.svg')",
                          }}
                        >
                          <div className="avatar_wrap">
                            <img
                              src="assets/images/avatars/avatar_2.webp"
                              alt="Avatar"
                            />
                          </div>
                        </div>
                        <h3 className="team_member_name">Luna Seraphine</h3>
                        <span className="team_member_designation mb-0">
                          Financial Officer
                        </span>
                      </div>
                      <div className="back_side_content">
                        <p className="team_member_description">
                          Financial Officer focused on profitability and
                          resource management.
                        </p>
                        <ul className="social_block unordered_list justify-content-center">
                          <li>
                            <a href="#!">
                              <i className="fa-brands fa-linkedin"></i>
                            </a>
                          </li>
                        </ul>
                        <h4 className="team_member_name">Luna Seraphine</h4>
                        <span className="team_member_designation mb-0">
                          Financial Officer
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="ico_team_block">
                    <div className="ico_team_block_inner">
                      <div className="front_side_content">
                        <div
                          className="team_avatar"
                          style={{
                            backgroundImage:
                              "url('assets/images/shapes/shape_circle_3.svg')",
                          }}
                        >
                          <div className="avatar_wrap">
                            <img
                              src="assets/images/avatars/avatar_3.webp"
                              alt="Avatar"
                            />
                          </div>
                        </div>
                        <h3 className="team_member_name">Elias Maverick</h3>
                        <span className="team_member_designation mb-0">
                          Founder & CEO
                        </span>
                      </div>
                      <div className="back_side_content">
                        <p className="team_member_description">
                          A hands on founder who loves building scaling
                          businesses with clients.
                        </p>
                        <ul className="social_block unordered_list justify-content-center">
                          <li>
                            <a href="#!">
                              <i className="fa-brands fa-linkedin"></i>
                            </a>
                          </li>
                        </ul>
                        <h4 className="team_member_name">Elias Maverick</h4>
                        <span className="team_member_designation mb-0">
                          Founder & CEO
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="ico_team_block">
                    <div className="ico_team_block_inner">
                      <div className="front_side_content">
                        <div
                          className="team_avatar"
                          style={{
                            backgroundImage:
                              "url('assets/images/shapes/shape_circle_4.svg')",
                          }}
                        >
                          <div className="avatar_wrap">
                            <img
                              src="assets/images/avatars/avatar_4.webp"
                              alt="Avatar"
                            />
                          </div>
                        </div>
                        <h3 className="team_member_name">Atticus Graham</h3>
                        <span className="team_member_designation mb-0">
                          Technical Support
                        </span>
                      </div>
                      <div className="back_side_content">
                        <p className="team_member_description">
                          Passionate in seeking solutions for your problems.
                        </p>
                        <ul className="social_block unordered_list justify-content-center">
                          <li>
                            <a href="#!">
                              <i className="fa-brands fa-linkedin"></i>
                            </a>
                          </li>
                        </ul>
                        <h4 className="team_member_name">Atticus Graham</h4>
                        <span className="team_member_designation mb-0">
                          Technical Support
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="ico_team_block">
                    <div className="ico_team_block_inner">
                      <div className="front_side_content">
                        <div
                          className="team_avatar"
                          style={{
                            backgroundImage:
                              "url('assets/images/shapes/shape_circle_5.svg')",
                          }}
                        >
                          <div className="avatar_wrap">
                            <img
                              src="assets/images/avatars/avatar_5.webp"
                              alt="Avatar"
                            />
                          </div>
                        </div>
                        <h3 className="team_member_name">Amara Noelle</h3>
                        <span className="team_member_designation mb-0">
                          CTO Manager
                        </span>
                      </div>
                      <div className="back_side_content">
                        <p className="team_member_description">
                          CTO Manager driving tech innovation and overseeing
                          development strategies.
                        </p>
                        <ul className="social_block unordered_list justify-content-center">
                          <li>
                            <a href="#!">
                              <i className="fa-brands fa-linkedin"></i>
                            </a>
                          </li>
                        </ul>
                        <h4 className="team_member_name">Amara Noelle</h4>
                        <span className="team_member_designation mb-0">
                          CTO Manager
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="ico_team_block">
                    <div className="ico_team_block_inner">
                      <div className="front_side_content">
                        <div
                          className="team_avatar"
                          style={{
                            backgroundImage:
                              "url('assets/images/shapes/shape_circle_6.svg')",
                          }}
                        >
                          <div className="avatar_wrap">
                            <img
                              src="assets/images/avatars/avatar_6.webp"
                              alt="Avatar"
                            />
                          </div>
                        </div>
                        <h3 className="team_member_name">Ethan Mitchell</h3>
                        <span className="team_member_designation mb-0">
                          Blockchain Developer
                        </span>
                      </div>
                      <div className="back_side_content">
                        <p className="team_member_description">
                          Blockchain Developer building secure and scalable
                          decentralized solutions.
                        </p>
                        <ul className="social_block unordered_list justify-content-center">
                          <li>
                            <a href="#!">
                              <i className="fa-brands fa-linkedin"></i>
                            </a>
                          </li>
                        </ul>
                        <h4 className="team_member_name">Ethan Mitchell</h4>
                        <span className="team_member_designation mb-0">
                          Blockchain Developer
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="ico_team_block">
                    <div className="ico_team_block_inner">
                      <div className="front_side_content">
                        <div
                          className="team_avatar"
                          style={{
                            backgroundImage:
                              "url('assets/images/shapes/shape_circle_7.svg')",
                          }}
                        >
                          <div className="avatar_wrap">
                            <img
                              src="assets/images/avatars/avatar_7.webp"
                              alt="Avatar"
                            />
                          </div>
                        </div>
                        <h3 className="team_member_name">Aurora Selene</h3>
                        <span className="team_member_designation mb-0">
                          Legal Advisor
                        </span>
                      </div>
                      <div className="back_side_content">
                        <p className="team_member_description">
                          Legal Advisor providing expert guidance on legal
                          matters and risk management.
                        </p>
                        <ul className="social_block unordered_list justify-content-center">
                          <li>
                            <a href="#!">
                              <i className="fa-brands fa-linkedin"></i>
                            </a>
                          </li>
                        </ul>
                        <h4 className="team_member_name">Aurora Selene</h4>
                        <span className="team_member_designation mb-0">
                          Legal Advisor
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="ico_team_block">
                    <div className="ico_team_block_inner">
                      <div className="front_side_content">
                        <div
                          className="team_avatar"
                          style={{
                            backgroundImage:
                              "url('assets/images/shapes/shape_circle_8.svg')",
                          }}
                        >
                          <div className="avatar_wrap">
                            <img
                              src="assets/images/avatars/avatar_8.webp"
                              alt="Avatar"
                            />
                          </div>
                        </div>
                        <h3 className="team_member_name">Orion Maxwell</h3>
                        <span className="team_member_designation mb-0">
                          Project Manager
                        </span>
                      </div>
                      <div className="back_side_content">
                        <p className="team_member_description">
                          Committed to delivering successful projects
                          consistently.
                        </p>
                        <ul className="social_block unordered_list justify-content-center">
                          <li>
                            <a href="#!">
                              <i className="fa-brands fa-linkedin"></i>
                            </a>
                          </li>
                        </ul>
                        <h4 className="team_member_name">Orion Maxwell</h4>
                        <span className="team_member_designation mb-0">
                          Project Manager
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              role="tabpanel"
              id="tab_marketing_team"
            >
              <div className="row justify-content-center">
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="ico_team_block">
                    <div className="ico_team_block_inner">
                      <div className="front_side_content">
                        <div
                          className="team_avatar"
                          style={{
                            backgroundImage:
                              "url('assets/images/shapes/shape_circle_1.svg')",
                          }}
                        >
                          <div className="avatar_wrap">
                            <img
                              src="assets/images/avatars/avatar_1.webp"
                              alt="Avatar"
                            />
                          </div>
                        </div>
                        <h3 className="team_member_name">Levi Harrison</h3>
                        <span className="team_member_designation mb-0">
                          Compliance Officer
                        </span>
                      </div>
                      <div className="back_side_content">
                        <p className="team_member_description">
                          Compliance Officer ensuring regulatory adherence and
                          risk management.
                        </p>
                        <ul className="social_block unordered_list justify-content-center">
                          <li>
                            <a href="#!">
                              <i className="fa-brands fa-linkedin"></i>
                            </a>
                          </li>
                        </ul>
                        <h4 className="team_member_name">Levi Harrison</h4>
                        <span className="team_member_designation mb-0">
                          Compliance Officer
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="ico_team_block">
                    <div className="ico_team_block_inner">
                      <div className="front_side_content">
                        <div
                          className="team_avatar"
                          style={{
                            backgroundImage:
                              "url('assets/images/shapes/shape_circle_2.svg')",
                          }}
                        >
                          <div className="avatar_wrap">
                            <img
                              src="assets/images/avatars/avatar_2.webp"
                              alt="Avatar"
                            />
                          </div>
                        </div>
                        <h3 className="team_member_name">Luna Seraphine</h3>
                        <span className="team_member_designation mb-0">
                          Financial Officer
                        </span>
                      </div>
                      <div className="back_side_content">
                        <p className="team_member_description">
                          Financial Officer focused on profitability and
                          resource management.
                        </p>
                        <ul className="social_block unordered_list justify-content-center">
                          <li>
                            <a href="#!">
                              <i className="fa-brands fa-linkedin"></i>
                            </a>
                          </li>
                        </ul>
                        <h4 className="team_member_name">Luna Seraphine</h4>
                        <span className="team_member_designation mb-0">
                          Financial Officer
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="ico_team_block">
                    <div className="ico_team_block_inner">
                      <div className="front_side_content">
                        <div
                          className="team_avatar"
                          style={{
                            backgroundImage:
                              "url('assets/images/shapes/shape_circle_3.svg')",
                          }}
                        >
                          <div className="avatar_wrap">
                            <img
                              src="assets/images/avatars/avatar_3.webp"
                              alt="Avatar"
                            />
                          </div>
                        </div>
                        <h3 className="team_member_name">Elias Maverick</h3>
                        <span className="team_member_designation mb-0">
                          Founder & CEO
                        </span>
                      </div>
                      <div className="back_side_content">
                        <p className="team_member_description">
                          A hands on founder who loves building scaling
                          businesses with clients.
                        </p>
                        <ul className="social_block unordered_list justify-content-center">
                          <li>
                            <a href="#!">
                              <i className="fa-brands fa-linkedin"></i>
                            </a>
                          </li>
                        </ul>
                        <h4 className="team_member_name">Elias Maverick</h4>
                        <span className="team_member_designation mb-0">
                          Founder & CEO
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="ico_team_block">
                    <div className="ico_team_block_inner">
                      <div className="front_side_content">
                        <div
                          className="team_avatar"
                          style={{
                            backgroundImage:
                              "url('assets/images/shapes/shape_circle_4.svg')",
                          }}
                        >
                          <div className="avatar_wrap">
                            <img
                              src="assets/images/avatars/avatar_4.webp"
                              alt="Avatar"
                            />
                          </div>
                        </div>
                        <h3 className="team_member_name">Atticus Graham</h3>
                        <span className="team_member_designation mb-0">
                          Technical Support
                        </span>
                      </div>
                      <div className="back_side_content">
                        <p className="team_member_description">
                          Passionate in seeking solutions for your problems.
                        </p>
                        <ul className="social_block unordered_list justify-content-center">
                          <li>
                            <a href="#!">
                              <i className="fa-brands fa-linkedin"></i>
                            </a>
                          </li>
                        </ul>
                        <h4 className="team_member_name">Atticus Graham</h4>
                        <span className="team_member_designation mb-0">
                          Technical Support
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="ico_team_block">
                    <div className="ico_team_block_inner">
                      <div className="front_side_content">
                        <div
                          className="team_avatar"
                          style={{
                            backgroundImage:
                              "url('assets/images/shapes/shape_circle_5.svg')",
                          }}
                        >
                          <div className="avatar_wrap">
                            <img
                              src="assets/images/avatars/avatar_5.webp"
                              alt="Avatar"
                            />
                          </div>
                        </div>
                        <h3 className="team_member_name">Amara Noelle</h3>
                        <span className="team_member_designation mb-0">
                          CTO Manager
                        </span>
                      </div>
                      <div className="back_side_content">
                        <p className="team_member_description">
                          CTO Manager driving tech innovation and overseeing
                          development strategies.
                        </p>
                        <ul className="social_block unordered_list justify-content-center">
                          <li>
                            <a href="#!">
                              <i className="fa-brands fa-linkedin"></i>
                            </a>
                          </li>
                        </ul>
                        <h4 className="team_member_name">Amara Noelle</h4>
                        <span className="team_member_designation mb-0">
                          CTO Manager
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="ico_team_block">
                    <div className="ico_team_block_inner">
                      <div className="front_side_content">
                        <div
                          className="team_avatar"
                          style={{
                            backgroundImage:
                              "url('assets/images/shapes/shape_circle_6.svg')",
                          }}
                        >
                          <div className="avatar_wrap">
                            <img
                              src="assets/images/avatars/avatar_6.webp"
                              alt="Avatar"
                            />
                          </div>
                        </div>
                        <h3 className="team_member_name">Ethan Mitchell</h3>
                        <span className="team_member_designation mb-0">
                          Blockchain Developer
                        </span>
                      </div>
                      <div className="back_side_content">
                        <p className="team_member_description">
                          Blockchain Developer building secure and scalable
                          decentralized solutions.
                        </p>
                        <ul className="social_block unordered_list justify-content-center">
                          <li>
                            <a href="#!">
                              <i className="fa-brands fa-linkedin"></i>
                            </a>
                          </li>
                        </ul>
                        <h4 className="team_member_name">Ethan Mitchell</h4>
                        <span className="team_member_designation mb-0">
                          Blockchain Developer
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="ico_team_block">
                    <div className="ico_team_block_inner">
                      <div className="front_side_content">
                        <div
                          className="team_avatar"
                          style={{
                            backgroundImage:
                              "url('assets/images/shapes/shape_circle_7.svg')",
                          }}
                        >
                          <div className="avatar_wrap">
                            <img
                              src="assets/images/avatars/avatar_7.webp"
                              alt="Avatar"
                            />
                          </div>
                        </div>
                        <h3 className="team_member_name">Aurora Selene</h3>
                        <span className="team_member_designation mb-0">
                          Legal Advisor
                        </span>
                      </div>
                      <div className="back_side_content">
                        <p className="team_member_description">
                          Legal Advisor providing expert guidance on legal
                          matters and risk management.
                        </p>
                        <ul className="social_block unordered_list justify-content-center">
                          <li>
                            <a href="#!">
                              <i className="fa-brands fa-linkedin"></i>
                            </a>
                          </li>
                        </ul>
                        <h4 className="team_member_name">Aurora Selene</h4>
                        <span className="team_member_designation mb-0">
                          Legal Advisor
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="ico_team_block">
                    <div className="ico_team_block_inner">
                      <div className="front_side_content">
                        <div
                          className="team_avatar"
                          style={{
                            backgroundImage:
                              "url('assets/images/shapes/shape_circle_8.svg')",
                          }}
                        >
                          <div className="avatar_wrap">
                            <img
                              src="assets/images/avatars/avatar_8.webp"
                              alt="Avatar"
                            />
                          </div>
                        </div>
                        <h3 className="team_member_name">Orion Maxwell</h3>
                        <span className="team_member_designation mb-0">
                          Project Manager
                        </span>
                      </div>
                      <div className="back_side_content">
                        <p className="team_member_description">
                          Committed to delivering successful projects
                          consistently.
                        </p>
                        <ul className="social_block unordered_list justify-content-center">
                          <li>
                            <a href="#!">
                              <i className="fa-brands fa-linkedin"></i>
                            </a>
                          </li>
                        </ul>
                        <h4 className="team_member_name">Orion Maxwell</h4>
                        <span className="team_member_designation mb-0">
                          Project Manager
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
