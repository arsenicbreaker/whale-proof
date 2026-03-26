import React from "react";

export default function FAQSection() {
  return (
    <section className="faq_section section_space">
      <div className="container">
        <div
          className="ico_heading_block text-center"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <h2 className="heading_text mb-0">FAQ</h2>
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
                  data-bs-target="#tab_general_question"
                  data-bs-toggle="tab"
                  type="button"
                  role="tab"
                  aria-selected="true"
                >
                  General Question
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  data-bs-target="#tab_ico_questions"
                  data-bs-toggle="tab"
                  type="button"
                  role="tab"
                  aria-selected="false"
                >
                  ICO Questions
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  data-bs-target="#tab_tokens_sales"
                  data-bs-toggle="tab"
                  type="button"
                  role="tab"
                  aria-selected="false"
                >
                  Tokens Sales
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  data-bs-target="#tab_clients_releted"
                  data-bs-toggle="tab"
                  type="button"
                  role="tab"
                  aria-selected="false"
                >
                  Clients Releted
                </button>
              </li>
            </ul>
          </div>
          <div className="tab-content">
            <div
              className="tab-pane fade show active"
              role="tabpanel"
              id="tab_general_question"
            >
              <div className="ico_accordion" id="accordion_1">
                <div className="accordion-item">
                  <div
                    className="icon_arrow"
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse_1"
                    aria-expanded="true"
                    aria-controls="collapse_1"
                  >
                    <svg
                      viewBox="0 0 23 27"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10 14.597L10 2.56731C10 1.56579 10.8115 0.753906 11.8125 0.753906C12.8134 0.753906 13.6249 1.56579 13.6249 2.56731L13.6249 14.597C13.6249 15.5985 12.8134 16.4104 11.8125 16.4104C10.8115 16.4104 10 15.5985 10 14.597Z" />
                      <path d="M9.71371 25.8348L1.59744 17.7909C1.49009 17.6845 1.42969 17.5396 1.42969 17.3884L1.42969 14.2693C1.42969 13.7658 2.03695 13.5125 2.39443 13.8668L10.5108 21.9106C10.6181 22.017 10.6785 22.1619 10.6785 22.3131L10.6785 25.4323C10.6785 25.9358 10.0712 26.1891 9.71371 25.8348Z" />
                      <path d="M21.2273 13.8668L13.1111 21.9106C13.0037 22.017 12.9434 22.1619 12.9434 22.3131L12.9434 25.4323C12.9434 25.9358 13.5506 26.1891 13.9081 25.8348L22.0243 17.7909C22.1317 17.6845 22.1921 17.5396 22.1921 17.3884L22.1921 14.2693C22.1921 13.7658 21.5849 13.5125 21.2273 13.8668Z" />
                    </svg>
                  </div>
                  <div
                    className="accordion-button"
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse_1"
                    aria-expanded="true"
                    aria-controls="collapse_1"
                  >
                    01- What is CoinPay ICO?
                  </div>
                  <div
                    id="collapse_1"
                    className="accordion-collapse collapse show"
                    data-bs-parent="#accordion_1"
                  >
                    <div className="accordion-body">
                      <p>
                        You can participate in the CoinPay ICO, simply
                        register on our platform, complete the KYC (Know Your
                        Customer) process, and follow the instructions to
                        purchase tokens during the ICO period, Once registered
                        buy tokens with secure payments.
                      </p>
                      <ul className="iconlist_block unordered_list_block">
                        <li>
                          <span className="iconlist_icon">
                            <i className="fa-solid fa-circle"></i>
                          </span>
                          <span className="iconlist_label">
                            Sign up and complete the KYC process.
                          </span>
                        </li>
                        <li>
                          <span className="iconlist_icon">
                            <i className="fa-solid fa-circle"></i>
                          </span>
                          <span className="iconlist_label">
                            Follow instructions to purchase tokens securely.
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <div
                    className="icon_arrow collapsed"
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse_2"
                    aria-expanded="false"
                    aria-controls="collapse_2"
                  >
                    <svg
                      viewBox="0 0 23 27"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10 14.597L10 2.56731C10 1.56579 10.8115 0.753906 11.8125 0.753906C12.8134 0.753906 13.6249 1.56579 13.6249 2.56731L13.6249 14.597C13.6249 15.5985 12.8134 16.4104 11.8125 16.4104C10.8115 16.4104 10 15.5985 10 14.597Z" />
                      <path d="M9.71371 25.8348L1.59744 17.7909C1.49009 17.6845 1.42969 17.5396 1.42969 17.3884L1.42969 14.2693C1.42969 13.7658 2.03695 13.5125 2.39443 13.8668L10.5108 21.9106C10.6181 22.017 10.6785 22.1619 10.6785 22.3131L10.6785 25.4323C10.6785 25.9358 10.0712 26.1891 9.71371 25.8348Z" />
                      <path d="M21.2273 13.8668L13.1111 21.9106C13.0037 22.017 12.9434 22.1619 12.9434 22.3131L12.9434 25.4323C12.9434 25.9358 13.5506 26.1891 13.9081 25.8348L22.0243 17.7909C22.1317 17.6845 22.1921 17.5396 22.1921 17.3884L22.1921 14.2693C22.1921 13.7658 21.5849 13.5125 21.2273 13.8668Z" />
                    </svg>
                  </div>
                  <div
                    className="accordion-button collapsed"
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse_2"
                    aria-expanded="false"
                    aria-controls="collapse_2"
                  >
                    02- How can I participate in the CoinPay ICO?
                  </div>
                  <div
                    id="collapse_2"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordion_1"
                  >
                    <div className="accordion-body">
                      <p>
                        You can participate in the CoinPay ICO, simply
                        register on our platform, complete the KYC (Know Your
                        Customer) process, and follow the instructions to
                        purchase tokens during the ICO period, Once registered
                        buy tokens with secure payments.
                      </p>
                      <ul className="iconlist_block unordered_list_block">
                        <li>
                          <span className="iconlist_icon">
                            <i className="fa-solid fa-circle"></i>
                          </span>
                          <span className="iconlist_label">
                            Sign up and complete the KYC process.
                          </span>
                        </li>
                        <li>
                          <span className="iconlist_icon">
                            <i className="fa-solid fa-circle"></i>
                          </span>
                          <span className="iconlist_label">
                            Follow instructions to purchase tokens securely.
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <div
                    className="icon_arrow collapsed"
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse_3"
                    aria-expanded="false"
                    aria-controls="collapse_3"
                  >
                    <svg
                      viewBox="0 0 23 27"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10 14.597L10 2.56731C10 1.56579 10.8115 0.753906 11.8125 0.753906C12.8134 0.753906 13.6249 1.56579 13.6249 2.56731L13.6249 14.597C13.6249 15.5985 12.8134 16.4104 11.8125 16.4104C10.8115 16.4104 10 15.5985 10 14.597Z" />
                      <path d="M9.71371 25.8348L1.59744 17.7909C1.49009 17.6845 1.42969 17.5396 1.42969 17.3884L1.42969 14.2693C1.42969 13.7658 2.03695 13.5125 2.39443 13.8668L10.5108 21.9106C10.6181 22.017 10.6785 22.1619 10.6785 22.3131L10.6785 25.4323C10.6785 25.9358 10.0712 26.1891 9.71371 25.8348Z" />
                      <path d="M21.2273 13.8668L13.1111 21.9106C13.0037 22.017 12.9434 22.1619 12.9434 22.3131L12.9434 25.4323C12.9434 25.9358 13.5506 26.1891 13.9081 25.8348L22.0243 17.7909C22.1317 17.6845 22.1921 17.5396 22.1921 17.3884L22.1921 14.2693C22.1921 13.7658 21.5849 13.5125 21.2273 13.8668Z" />
                    </svg>
                  </div>
                  <div
                    className="accordion-button collapsed"
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse_3"
                    aria-expanded="false"
                    aria-controls="collapse_3"
                  >
                    03- What are the benefits of investing in CoinPay ICO?
                  </div>
                  <div
                    id="collapse_3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordion_1"
                  >
                    <div className="accordion-body">
                      <p>
                        You can participate in the CoinPay ICO, simply
                        register on our platform, complete the KYC (Know Your
                        Customer) process, and follow the instructions to
                        purchase tokens during the ICO period, Once registered
                        buy tokens with secure payments.
                      </p>
                      <ul className="iconlist_block unordered_list_block">
                        <li>
                          <span className="iconlist_icon">
                            <i className="fa-solid fa-circle"></i>
                          </span>
                          <span className="iconlist_label">
                            Sign up and complete the KYC process.
                          </span>
                        </li>
                        <li>
                          <span className="iconlist_icon">
                            <i className="fa-solid fa-circle"></i>
                          </span>
                          <span className="iconlist_label">
                            Follow instructions to purchase tokens securely.
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <div
                    className="icon_arrow collapsed"
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse_4"
                    aria-expanded="false"
                    aria-controls="collapse_4"
                  >
                    <svg
                      viewBox="0 0 23 27"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10 14.597L10 2.56731C10 1.56579 10.8115 0.753906 11.8125 0.753906C12.8134 0.753906 13.6249 1.56579 13.6249 2.56731L13.6249 14.597C13.6249 15.5985 12.8134 16.4104 11.8125 16.4104C10.8115 16.4104 10 15.5985 10 14.597Z" />
                      <path d="M9.71371 25.8348L1.59744 17.7909C1.49009 17.6845 1.42969 17.5396 1.42969 17.3884L1.42969 14.2693C1.42969 13.7658 2.03695 13.5125 2.39443 13.8668L10.5108 21.9106C10.6181 22.017 10.6785 22.1619 10.6785 22.3131L10.6785 25.4323C10.6785 25.9358 10.0712 26.1891 9.71371 25.8348Z" />
                      <path d="M21.2273 13.8668L13.1111 21.9106C13.0037 22.017 12.9434 22.1619 12.9434 22.3131L12.9434 25.4323C12.9434 25.9358 13.5506 26.1891 13.9081 25.8348L22.0243 17.7909C22.1317 17.6845 22.1921 17.5396 22.1921 17.3884L22.1921 14.2693C22.1921 13.7658 21.5849 13.5125 21.2273 13.8668Z" />
                    </svg>
                  </div>
                  <div
                    className="accordion-button collapsed"
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse_4"
                    aria-expanded="false"
                    aria-controls="collapse_4"
                  >
                    04- What is the total supply of CoinPay tokens?
                  </div>
                  <div
                    id="collapse_4"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordion_1"
                  >
                    <div className="accordion-body">
                      <p>
                        You can participate in the CoinPay ICO, simply
                        register on our platform, complete the KYC (Know Your
                        Customer) process, and follow the instructions to
                        purchase tokens during the ICO period, Once registered
                        buy tokens with secure payments.
                      </p>
                      <ul className="iconlist_block unordered_list_block">
                        <li>
                          <span className="iconlist_icon">
                            <i className="fa-solid fa-circle"></i>
                          </span>
                          <span className="iconlist_label">
                            Sign up and complete the KYC process.
                          </span>
                        </li>
                        <li>
                          <span className="iconlist_icon">
                            <i className="fa-solid fa-circle"></i>
                          </span>
                          <span className="iconlist_label">
                            Follow instructions to purchase tokens securely.
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <div
                    className="icon_arrow collapsed"
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse_5"
                    aria-expanded="false"
                    aria-controls="collapse_5"
                  >
                    <svg
                      viewBox="0 0 23 27"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10 14.597L10 2.56731C10 1.56579 10.8115 0.753906 11.8125 0.753906C12.8134 0.753906 13.6249 1.56579 13.6249 2.56731L13.6249 14.597C13.6249 15.5985 12.8134 16.4104 11.8125 16.4104C10.8115 16.4104 10 15.5985 10 14.597Z" />
                      <path d="M9.71371 25.8348L1.59744 17.7909C1.49009 17.6845 1.42969 17.5396 1.42969 17.3884L1.42969 14.2693C1.42969 13.7658 2.03695 13.5125 2.39443 13.8668L10.5108 21.9106C10.6181 22.017 10.6785 22.1619 10.6785 22.3131L10.6785 25.4323C10.6785 25.9358 10.0712 26.1891 9.71371 25.8348Z" />
                      <path d="M21.2273 13.8668L13.1111 21.9106C13.0037 22.017 12.9434 22.1619 12.9434 22.3131L12.9434 25.4323C12.9434 25.9358 13.5506 26.1891 13.9081 25.8348L22.0243 17.7909C22.1317 17.6845 22.1921 17.5396 22.1921 17.3884L22.1921 14.2693C22.1921 13.7658 21.5849 13.5125 21.2273 13.8668Z" />
                    </svg>
                  </div>
                  <div
                    className="accordion-button collapsed"
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse_5"
                    aria-expanded="false"
                    aria-controls="collapse_5"
                  >
                    05- Can I sell my tokens after the ICO?
                  </div>
                  <div
                    id="collapse_5"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordion_1"
                  >
                    <div className="accordion-body">
                      <p>
                        You can participate in the CoinPay ICO, simply
                        register on our platform, complete the KYC (Know Your
                        Customer) process, and follow the instructions to
                        purchase tokens during the ICO period, Once registered
                        buy tokens with secure payments.
                      </p>
                      <ul className="iconlist_block unordered_list_block">
                        <li>
                          <span className="iconlist_icon">
                            <i className="fa-solid fa-circle"></i>
                          </span>
                          <span className="iconlist_label">
                            Sign up and complete the KYC process.
                          </span>
                        </li>
                        <li>
                          <span className="iconlist_icon">
                            <i className="fa-solid fa-circle"></i>
                          </span>
                          <span className="iconlist_label">
                            Follow instructions to purchase tokens securely.
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    
            <div
              className="tab-pane fade"
              role="tabpanel"
              id="tab_ico_questions"
            >
              <div className="ico_accordion" id="accordion_2">
                <div className="accordion-item">
                  <div
                    className="icon_arrow"
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse_6"
                    aria-expanded="true"
                    aria-controls="collapse_6"
                  >
                    <svg
                      viewBox="0 0 23 27"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10 14.597L10 2.56731C10 1.56579 10.8115 0.753906 11.8125 0.753906C12.8134 0.753906 13.6249 1.56579 13.6249 2.56731L13.6249 14.597C13.6249 15.5985 12.8134 16.4104 11.8125 16.4104C10.8115 16.4104 10 15.5985 10 14.597Z" />
                      <path d="M9.71371 25.8348L1.59744 17.7909C1.49009 17.6845 1.42969 17.5396 1.42969 17.3884L1.42969 14.2693C1.42969 13.7658 2.03695 13.5125 2.39443 13.8668L10.5108 21.9106C10.6181 22.017 10.6785 22.1619 10.6785 22.3131L10.6785 25.4323C10.6785 25.9358 10.0712 26.1891 9.71371 25.8348Z" />
                      <path d="M21.2273 13.8668L13.1111 21.9106C13.0037 22.017 12.9434 22.1619 12.9434 22.3131L12.9434 25.4323C12.9434 25.9358 13.5506 26.1891 13.9081 25.8348L22.0243 17.7909C22.1317 17.6845 22.1921 17.5396 22.1921 17.3884L22.1921 14.2693C22.1921 13.7658 21.5849 13.5125 21.2273 13.8668Z" />
                    </svg>
                  </div>
                  <div
                    className="accordion-button"
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse_6"
                    aria-expanded="true"
                    aria-controls="collapse_6"
                  >
                    01- What is CoinPay ICO?
                  </div>
                  <div
                    id="collapse_6"
                    className="accordion-collapse collapse show"
                    data-bs-parent="#accordion_2"
                  >
                    <div className="accordion-body">
                      <p>
                        You can participate in the CoinPay ICO, simply
                        register on our platform, complete the KYC (Know Your
                        Customer) process, and follow the instructions to
                        purchase tokens during the ICO period, Once registered
                        buy tokens with secure payments.
                      </p>
                      <ul className="iconlist_block unordered_list_block">
                        <li>
                          <span className="iconlist_icon">
                            <i className="fa-solid fa-circle"></i>
                          </span>
                          <span className="iconlist_label">
                            Sign up and complete the KYC process.
                          </span>
                        </li>
                        <li>
                          <span className="iconlist_icon">
                            <i className="fa-solid fa-circle"></i>
                          </span>
                          <span className="iconlist_label">
                            Follow instructions to purchase tokens securely.
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <div
                    className="icon_arrow collapsed"
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse_7"
                    aria-expanded="false"
                    aria-controls="collapse_7"
                  >
                    <svg
                      viewBox="0 0 23 27"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10 14.597L10 2.56731C10 1.56579 10.8115 0.753906 11.8125 0.753906C12.8134 0.753906 13.6249 1.56579 13.6249 2.56731L13.6249 14.597C13.6249 15.5985 12.8134 16.4104 11.8125 16.4104C10.8115 16.4104 10 15.5985 10 14.597Z" />
                      <path d="M9.71371 25.8348L1.59744 17.7909C1.49009 17.6845 1.42969 17.5396 1.42969 17.3884L1.42969 14.2693C1.42969 13.7658 2.03695 13.5125 2.39443 13.8668L10.5108 21.9106C10.6181 22.017 10.6785 22.1619 10.6785 22.3131L10.6785 25.4323C10.6785 25.9358 10.0712 26.1891 9.71371 25.8348Z" />
                      <path d="M21.2273 13.8668L13.1111 21.9106C13.0037 22.017 12.9434 22.1619 12.9434 22.3131L12.9434 25.4323C12.9434 25.9358 13.5506 26.1891 13.9081 25.8348L22.0243 17.7909C22.1317 17.6845 22.1921 17.5396 22.1921 17.3884L22.1921 14.2693C22.1921 13.7658 21.5849 13.5125 21.2273 13.8668Z" />
                    </svg>
                  </div>
                  <div
                    className="accordion-button collapsed"
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse_7"
                    aria-expanded="false"
                    aria-controls="collapse_7"
                  >
                    02- How can I participate in the CoinPay ICO?
                  </div>
                  <div
                    id="collapse_7"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordion_2"
                  >
                    <div className="accordion-body">
                      <p>
                        You can participate in the CoinPay ICO, simply
                        register on our platform, complete the KYC (Know Your
                        Customer) process, and follow the instructions to
                        purchase tokens during the ICO period, Once registered
                        buy tokens with secure payments.
                      </p>
                      <ul className="iconlist_block unordered_list_block">
                        <li>
                          <span className="iconlist_icon">
                            <i className="fa-solid fa-circle"></i>
                          </span>
                          <span className="iconlist_label">
                            Sign up and complete the KYC process.
                          </span>
                        </li>
                        <li>
                          <span className="iconlist_icon">
                            <i className="fa-solid fa-circle"></i>
                          </span>
                          <span className="iconlist_label">
                            Follow instructions to purchase tokens securely.
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <div
                    className="icon_arrow collapsed"
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse_8"
                    aria-expanded="false"
                    aria-controls="collapse_8"
                  >
                    <svg
                      viewBox="0 0 23 27"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10 14.597L10 2.56731C10 1.56579 10.8115 0.753906 11.8125 0.753906C12.8134 0.753906 13.6249 1.56579 13.6249 2.56731L13.6249 14.597C13.6249 15.5985 12.8134 16.4104 11.8125 16.4104C10.8115 16.4104 10 15.5985 10 14.597Z" />
                      <path d="M9.71371 25.8348L1.59744 17.7909C1.49009 17.6845 1.42969 17.5396 1.42969 17.3884L1.42969 14.2693C1.42969 13.7658 2.03695 13.5125 2.39443 13.8668L10.5108 21.9106C10.6181 22.017 10.6785 22.1619 10.6785 22.3131L10.6785 25.4323C10.6785 25.9358 10.0712 26.1891 9.71371 25.8348Z" />
                      <path d="M21.2273 13.8668L13.1111 21.9106C13.0037 22.017 12.9434 22.1619 12.9434 22.3131L12.9434 25.4323C12.9434 25.9358 13.5506 26.1891 13.9081 25.8348L22.0243 17.7909C22.1317 17.6845 22.1921 17.5396 22.1921 17.3884L22.1921 14.2693C22.1921 13.7658 21.5849 13.5125 21.2273 13.8668Z" />
                    </svg>
                  </div>
                  <div
                    className="accordion-button collapsed"
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse_8"
                    aria-expanded="false"
                    aria-controls="collapse_8"
                  >
                    03- What are the benefits of investing in CoinPay ICO?
                  </div>
                  <div
                    id="collapse_8"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordion_2"
                  >
                    <div className="accordion-body">
                      <p>
                        You can participate in the CoinPay ICO, simply
                        register on our platform, complete the KYC (Know Your
                        Customer) process, and follow the instructions to
                        purchase tokens during the ICO period, Once registered
                        buy tokens with secure payments.
                      </p>
                      <ul className="iconlist_block unordered_list_block">
                        <li>
                          <span className="iconlist_icon">
                            <i className="fa-solid fa-circle"></i>
                          </span>
                          <span className="iconlist_label">
                            Sign up and complete the KYC process.
                          </span>
                        </li>
                        <li>
                          <span className="iconlist_icon">
                            <i className="fa-solid fa-circle"></i>
                          </span>
                          <span className="iconlist_label">
                            Follow instructions to purchase tokens securely.
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <div
                    className="icon_arrow collapsed"
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse_9"
                    aria-expanded="false"
                    aria-controls="collapse_9"
                  >
                    <svg
                      viewBox="0 0 23 27"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10 14.597L10 2.56731C10 1.56579 10.8115 0.753906 11.8125 0.753906C12.8134 0.753906 13.6249 1.56579 13.6249 2.56731L13.6249 14.597C13.6249 15.5985 12.8134 16.4104 11.8125 16.4104C10.8115 16.4104 10 15.5985 10 14.597Z" />
                      <path d="M9.71371 25.8348L1.59744 17.7909C1.49009 17.6845 1.42969 17.5396 1.42969 17.3884L1.42969 14.2693C1.42969 13.7658 2.03695 13.5125 2.39443 13.8668L10.5108 21.9106C10.6181 22.017 10.6785 22.1619 10.6785 22.3131L10.6785 25.4323C10.6785 25.9358 10.0712 26.1891 9.71371 25.8348Z" />
                      <path d="M21.2273 13.8668L13.1111 21.9106C13.0037 22.017 12.9434 22.1619 12.9434 22.3131L12.9434 25.4323C12.9434 25.9358 13.5506 26.1891 13.9081 25.8348L22.0243 17.7909C22.1317 17.6845 22.1921 17.5396 22.1921 17.3884L22.1921 14.2693C22.1921 13.7658 21.5849 13.5125 21.2273 13.8668Z" />
                    </svg>
                  </div>
                  <div
                    className="accordion-button collapsed"
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse_9"
                    aria-expanded="false"
                    aria-controls="collapse_9"
                  >
                    04- What is the total supply of CoinPay tokens?
                  </div>
                  <div
                    id="collapse_9"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordion_2"
                  >
                    <div className="accordion-body">
                      <p>
                        You can participate in the CoinPay ICO, simply
                        register on our platform, complete the KYC (Know Your
                        Customer) process, and follow the instructions to
                        purchase tokens during the ICO period, Once registered
                        buy tokens with secure payments.
                      </p>
                      <ul className="iconlist_block unordered_list_block">
                        <li>
                          <span className="iconlist_icon">
                            <i className="fa-solid fa-circle"></i>
                          </span>
                          <span className="iconlist_label">
                            Sign up and complete the KYC process.
                          </span>
                        </li>
                        <li>
                          <span className="iconlist_icon">
                            <i className="fa-solid fa-circle"></i>
                          </span>
                          <span className="iconlist_label">
                            Follow instructions to purchase tokens securely.
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <div
                    className="icon_arrow collapsed"
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse_10"
                    aria-expanded="false"
                    aria-controls="collapse_10"
                  >
                    <svg
                      viewBox="0 0 23 27"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10 14.597L10 2.56731C10 1.56579 10.8115 0.753906 11.8125 0.753906C12.8134 0.753906 13.6249 1.56579 13.6249 2.56731L13.6249 14.597C13.6249 15.5985 12.8134 16.4104 11.8125 16.4104C10.8115 16.4104 10 15.5985 10 14.597Z" />
                      <path d="M9.71371 25.8348L1.59744 17.7909C1.49009 17.6845 1.42969 17.5396 1.42969 17.3884L1.42969 14.2693C1.42969 13.7658 2.03695 13.5125 2.39443 13.8668L10.5108 21.9106C10.6181 22.017 10.6785 22.1619 10.6785 22.3131L10.6785 25.4323C10.6785 25.9358 10.0712 26.1891 9.71371 25.8348Z" />
                      <path d="M21.2273 13.8668L13.1111 21.9106C13.0037 22.017 12.9434 22.1619 12.9434 22.3131L12.9434 25.4323C12.9434 25.9358 13.5506 26.1891 13.9081 25.8348L22.0243 17.7909C22.1317 17.6845 22.1921 17.5396 22.1921 17.3884L22.1921 14.2693C22.1921 13.7658 21.5849 13.5125 21.2273 13.8668Z" />
                    </svg>
                  </div>
                  <div
                    className="accordion-button collapsed"
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse_10"
                    aria-expanded="false"
                    aria-controls="collapse_10"
                  >
                    05- Can I sell my tokens after the ICO?
                  </div>
                  <div
                    id="collapse_10"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordion_2"
                  >
                    <div className="accordion-body">
                      <p>
                        You can participate in the CoinPay ICO, simply
                        register on our platform, complete the KYC (Know Your
                        Customer) process, and follow the instructions to
                        purchase tokens during the ICO period, Once registered
                        buy tokens with secure payments.
                      </p>
                      <ul className="iconlist_block unordered_list_block">
                        <li>
                          <span className="iconlist_icon">
                            <i className="fa-solid fa-circle"></i>
                          </span>
                          <span className="iconlist_label">
                            Sign up and complete the KYC process.
                          </span>
                        </li>
                        <li>
                          <span className="iconlist_icon">
                            <i className="fa-solid fa-circle"></i>
                          </span>
                          <span className="iconlist_label">
                            Follow instructions to purchase tokens securely.
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    
            <div
              className="tab-pane fade"
              role="tabpanel"
              id="tab_tokens_sales"
            >
              <div className="ico_accordion" id="accordion_3">
                <div className="accordion-item">
                  <div
                    className="icon_arrow"
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse_11"
                    aria-expanded="true"
                    aria-controls="collapse_11"
                  >
                    <svg
                      viewBox="0 0 23 27"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10 14.597L10 2.56731C10 1.56579 10.8115 0.753906 11.8125 0.753906C12.8134 0.753906 13.6249 1.56579 13.6249 2.56731L13.6249 14.597C13.6249 15.5985 12.8134 16.4104 11.8125 16.4104C10.8115 16.4104 10 15.5985 10 14.597Z" />
                      <path d="M9.71371 25.8348L1.59744 17.7909C1.49009 17.6845 1.42969 17.5396 1.42969 17.3884L1.42969 14.2693C1.42969 13.7658 2.03695 13.5125 2.39443 13.8668L10.5108 21.9106C10.6181 22.017 10.6785 22.1619 10.6785 22.3131L10.6785 25.4323C10.6785 25.9358 10.0712 26.1891 9.71371 25.8348Z" />
                      <path d="M21.2273 13.8668L13.1111 21.9106C13.0037 22.017 12.9434 22.1619 12.9434 22.3131L12.9434 25.4323C12.9434 25.9358 13.5506 26.1891 13.9081 25.8348L22.0243 17.7909C22.1317 17.6845 22.1921 17.5396 22.1921 17.3884L22.1921 14.2693C22.1921 13.7658 21.5849 13.5125 21.2273 13.8668Z" />
                    </svg>
                  </div>
                  <div
                    className="accordion-button"
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse_11"
                    aria-expanded="true"
                    aria-controls="collapse_11"
                  >
                    01- What is CoinPay ICO?
                  </div>
                  <div
                    id="collapse_11"
                    className="accordion-collapse collapse show"
                    data-bs-parent="#accordion_3"
                  >
                    <div className="accordion-body">
                      <p>
                        You can participate in the CoinPay ICO, simply
                        register on our platform, complete the KYC (Know Your
                        Customer) process, and follow the instructions to
                        purchase tokens during the ICO period, Once registered
                        buy tokens with secure payments.
                      </p>
                      <ul className="iconlist_block unordered_list_block">
                        <li>
                          <span className="iconlist_icon">
                            <i className="fa-solid fa-circle"></i>
                          </span>
                          <span className="iconlist_label">
                            Sign up and complete the KYC process.
                          </span>
                        </li>
                        <li>
                          <span className="iconlist_icon">
                            <i className="fa-solid fa-circle"></i>
                          </span>
                          <span className="iconlist_label">
                            Follow instructions to purchase tokens securely.
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <div
                    className="icon_arrow collapsed"
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse_12"
                    aria-expanded="false"
                    aria-controls="collapse_12"
                  >
                    <svg
                      viewBox="0 0 23 27"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10 14.597L10 2.56731C10 1.56579 10.8115 0.753906 11.8125 0.753906C12.8134 0.753906 13.6249 1.56579 13.6249 2.56731L13.6249 14.597C13.6249 15.5985 12.8134 16.4104 11.8125 16.4104C10.8115 16.4104 10 15.5985 10 14.597Z" />
                      <path d="M9.71371 25.8348L1.59744 17.7909C1.49009 17.6845 1.42969 17.5396 1.42969 17.3884L1.42969 14.2693C1.42969 13.7658 2.03695 13.5125 2.39443 13.8668L10.5108 21.9106C10.6181 22.017 10.6785 22.1619 10.6785 22.3131L10.6785 25.4323C10.6785 25.9358 10.0712 26.1891 9.71371 25.8348Z" />
                      <path d="M21.2273 13.8668L13.1111 21.9106C13.0037 22.017 12.9434 22.1619 12.9434 22.3131L12.9434 25.4323C12.9434 25.9358 13.5506 26.1891 13.9081 25.8348L22.0243 17.7909C22.1317 17.6845 22.1921 17.5396 22.1921 17.3884L22.1921 14.2693C22.1921 13.7658 21.5849 13.5125 21.2273 13.8668Z" />
                    </svg>
                  </div>
                  <div
                    className="accordion-button collapsed"
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse_12"
                    aria-expanded="false"
                    aria-controls="collapse_12"
                  >
                    02- How can I participate in the CoinPay ICO?
                  </div>
                  <div
                    id="collapse_12"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordion_3"
                  >
                    <div className="accordion-body">
                      <p>
                        You can participate in the CoinPay ICO, simply
                        register on our platform, complete the KYC (Know Your
                        Customer) process, and follow the instructions to
                        purchase tokens during the ICO period, Once registered
                        buy tokens with secure payments.
                      </p>
                      <ul className="iconlist_block unordered_list_block">
                        <li>
                          <span className="iconlist_icon">
                            <i className="fa-solid fa-circle"></i>
                          </span>
                          <span className="iconlist_label">
                            Sign up and complete the KYC process.
                          </span>
                        </li>
                        <li>
                          <span className="iconlist_icon">
                            <i className="fa-solid fa-circle"></i>
                          </span>
                          <span className="iconlist_label">
                            Follow instructions to purchase tokens securely.
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <div
                    className="icon_arrow collapsed"
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse_13"
                    aria-expanded="false"
                    aria-controls="collapse_13"
                  >
                    <svg
                      viewBox="0 0 23 27"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10 14.597L10 2.56731C10 1.56579 10.8115 0.753906 11.8125 0.753906C12.8134 0.753906 13.6249 1.56579 13.6249 2.56731L13.6249 14.597C13.6249 15.5985 12.8134 16.4104 11.8125 16.4104C10.8115 16.4104 10 15.5985 10 14.597Z" />
                      <path d="M9.71371 25.8348L1.59744 17.7909C1.49009 17.6845 1.42969 17.5396 1.42969 17.3884L1.42969 14.2693C1.42969 13.7658 2.03695 13.5125 2.39443 13.8668L10.5108 21.9106C10.6181 22.017 10.6785 22.1619 10.6785 22.3131L10.6785 25.4323C10.6785 25.9358 10.0712 26.1891 9.71371 25.8348Z" />
                      <path d="M21.2273 13.8668L13.1111 21.9106C13.0037 22.017 12.9434 22.1619 12.9434 22.3131L12.9434 25.4323C12.9434 25.9358 13.5506 26.1891 13.9081 25.8348L22.0243 17.7909C22.1317 17.6845 22.1921 17.5396 22.1921 17.3884L22.1921 14.2693C22.1921 13.7658 21.5849 13.5125 21.2273 13.8668Z" />
                    </svg>
                  </div>
                  <div
                    className="accordion-button collapsed"
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse_13"
                    aria-expanded="false"
                    aria-controls="collapse_13"
                  >
                    03- What are the benefits of investing in CoinPay ICO?
                  </div>
                  <div
                    id="collapse_13"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordion_3"
                  >
                    <div className="accordion-body">
                      <p>
                        You can participate in the CoinPay ICO, simply
                        register on our platform, complete the KYC (Know Your
                        Customer) process, and follow the instructions to
                        purchase tokens during the ICO period, Once registered
                        buy tokens with secure payments.
                      </p>
                      <ul className="iconlist_block unordered_list_block">
                        <li>
                          <span className="iconlist_icon">
                            <i className="fa-solid fa-circle"></i>
                          </span>
                          <span className="iconlist_label">
                            Sign up and complete the KYC process.
                          </span>
                        </li>
                        <li>
                          <span className="iconlist_icon">
                            <i className="fa-solid fa-circle"></i>
                          </span>
                          <span className="iconlist_label">
                            Follow instructions to purchase tokens securely.
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <div
                    className="icon_arrow collapsed"
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse_14"
                    aria-expanded="false"
                    aria-controls="collapse_14"
                  >
                    <svg
                      viewBox="0 0 23 27"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10 14.597L10 2.56731C10 1.56579 10.8115 0.753906 11.8125 0.753906C12.8134 0.753906 13.6249 1.56579 13.6249 2.56731L13.6249 14.597C13.6249 15.5985 12.8134 16.4104 11.8125 16.4104C10.8115 16.4104 10 15.5985 10 14.597Z" />
                      <path d="M9.71371 25.8348L1.59744 17.7909C1.49009 17.6845 1.42969 17.5396 1.42969 17.3884L1.42969 14.2693C1.42969 13.7658 2.03695 13.5125 2.39443 13.8668L10.5108 21.9106C10.6181 22.017 10.6785 22.1619 10.6785 22.3131L10.6785 25.4323C10.6785 25.9358 10.0712 26.1891 9.71371 25.8348Z" />
                      <path d="M21.2273 13.8668L13.1111 21.9106C13.0037 22.017 12.9434 22.1619 12.9434 22.3131L12.9434 25.4323C12.9434 25.9358 13.5506 26.1891 13.9081 25.8348L22.0243 17.7909C22.1317 17.6845 22.1921 17.5396 22.1921 17.3884L22.1921 14.2693C22.1921 13.7658 21.5849 13.5125 21.2273 13.8668Z" />
                    </svg>
                  </div>
                  <div
                    className="accordion-button collapsed"
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse_14"
                    aria-expanded="false"
                    aria-controls="collapse_14"
                  >
                    04- What is the total supply of CoinPay tokens?
                  </div>
                  <div
                    id="collapse_14"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordion_3"
                  >
                    <div className="accordion-body">
                      <p>
                        You can participate in the CoinPay ICO, simply
                        register on our platform, complete the KYC (Know Your
                        Customer) process, and follow the instructions to
                        purchase tokens during the ICO period, Once registered
                        buy tokens with secure payments.
                      </p>
                      <ul className="iconlist_block unordered_list_block">
                        <li>
                          <span className="iconlist_icon">
                            <i className="fa-solid fa-circle"></i>
                          </span>
                          <span className="iconlist_label">
                            Sign up and complete the KYC process.
                          </span>
                        </li>
                        <li>
                          <span className="iconlist_icon">
                            <i className="fa-solid fa-circle"></i>
                          </span>
                          <span className="iconlist_label">
                            Follow instructions to purchase tokens securely.
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <div
                    className="icon_arrow collapsed"
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse_15"
                    aria-expanded="false"
                    aria-controls="collapse_15"
                  >
                    <svg
                      viewBox="0 0 23 27"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10 14.597L10 2.56731C10 1.56579 10.8115 0.753906 11.8125 0.753906C12.8134 0.753906 13.6249 1.56579 13.6249 2.56731L13.6249 14.597C13.6249 15.5985 12.8134 16.4104 11.8125 16.4104C10.8115 16.4104 10 15.5985 10 14.597Z" />
                      <path d="M9.71371 25.8348L1.59744 17.7909C1.49009 17.6845 1.42969 17.5396 1.42969 17.3884L1.42969 14.2693C1.42969 13.7658 2.03695 13.5125 2.39443 13.8668L10.5108 21.9106C10.6181 22.017 10.6785 22.1619 10.6785 22.3131L10.6785 25.4323C10.6785 25.9358 10.0712 26.1891 9.71371 25.8348Z" />
                      <path d="M21.2273 13.8668L13.1111 21.9106C13.0037 22.017 12.9434 22.1619 12.9434 22.3131L12.9434 25.4323C12.9434 25.9358 13.5506 26.1891 13.9081 25.8348L22.0243 17.7909C22.1317 17.6845 22.1921 17.5396 22.1921 17.3884L22.1921 14.2693C22.1921 13.7658 21.5849 13.5125 21.2273 13.8668Z" />
                    </svg>
                  </div>
                  <div
                    className="accordion-button collapsed"
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse_15"
                    aria-expanded="false"
                    aria-controls="collapse_15"
                  >
                    05- Can I sell my tokens after the ICO?
                  </div>
                  <div
                    id="collapse_15"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordion_3"
                  >
                    <div className="accordion-body">
                      <p>
                        You can participate in the CoinPay ICO, simply
                        register on our platform, complete the KYC (Know Your
                        Customer) process, and follow the instructions to
                        purchase tokens during the ICO period, Once registered
                        buy tokens with secure payments.
                      </p>
                      <ul className="iconlist_block unordered_list_block">
                        <li>
                          <span className="iconlist_icon">
                            <i className="fa-solid fa-circle"></i>
                          </span>
                          <span className="iconlist_label">
                            Sign up and complete the KYC process.
                          </span>
                        </li>
                        <li>
                          <span className="iconlist_icon">
                            <i className="fa-solid fa-circle"></i>
                          </span>
                          <span className="iconlist_label">
                            Follow instructions to purchase tokens securely.
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    
            <div
              className="tab-pane fade"
              role="tabpanel"
              id="tab_clients_releted"
            >
              <div className="ico_accordion" id="accordion_4">
                <div className="accordion-item">
                  <div
                    className="icon_arrow"
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse_16"
                    aria-expanded="true"
                    aria-controls="collapse_16"
                  >
                    <svg
                      viewBox="0 0 23 27"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10 14.597L10 2.56731C10 1.56579 10.8115 0.753906 11.8125 0.753906C12.8134 0.753906 13.6249 1.56579 13.6249 2.56731L13.6249 14.597C13.6249 15.5985 12.8134 16.4104 11.8125 16.4104C10.8115 16.4104 10 15.5985 10 14.597Z" />
                      <path d="M9.71371 25.8348L1.59744 17.7909C1.49009 17.6845 1.42969 17.5396 1.42969 17.3884L1.42969 14.2693C1.42969 13.7658 2.03695 13.5125 2.39443 13.8668L10.5108 21.9106C10.6181 22.017 10.6785 22.1619 10.6785 22.3131L10.6785 25.4323C10.6785 25.9358 10.0712 26.1891 9.71371 25.8348Z" />
                      <path d="M21.2273 13.8668L13.1111 21.9106C13.0037 22.017 12.9434 22.1619 12.9434 22.3131L12.9434 25.4323C12.9434 25.9358 13.5506 26.1891 13.9081 25.8348L22.0243 17.7909C22.1317 17.6845 22.1921 17.5396 22.1921 17.3884L22.1921 14.2693C22.1921 13.7658 21.5849 13.5125 21.2273 13.8668Z" />
                    </svg>
                  </div>
                  <div
                    className="accordion-button"
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse_16"
                    aria-expanded="true"
                    aria-controls="collapse_16"
                  >
                    01- What is CoinPay ICO?
                  </div>
                  <div
                    id="collapse_16"
                    className="accordion-collapse collapse show"
                    data-bs-parent="#accordion_4"
                  >
                    <div className="accordion-body">
                      <p>
                        You can participate in the CoinPay ICO, simply
                        register on our platform, complete the KYC (Know Your
                        Customer) process, and follow the instructions to
                        purchase tokens during the ICO period, Once registered
                        buy tokens with secure payments.
                      </p>
                      <ul className="iconlist_block unordered_list_block">
                        <li>
                          <span className="iconlist_icon">
                            <i className="fa-solid fa-circle"></i>
                          </span>
                          <span className="iconlist_label">
                            Sign up and complete the KYC process.
                          </span>
                        </li>
                        <li>
                          <span className="iconlist_icon">
                            <i className="fa-solid fa-circle"></i>
                          </span>
                          <span className="iconlist_label">
                            Follow instructions to purchase tokens securely.
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <div
                    className="icon_arrow collapsed"
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse_17"
                    aria-expanded="false"
                    aria-controls="collapse_17"
                  >
                    <svg
                      viewBox="0 0 23 27"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10 14.597L10 2.56731C10 1.56579 10.8115 0.753906 11.8125 0.753906C12.8134 0.753906 13.6249 1.56579 13.6249 2.56731L13.6249 14.597C13.6249 15.5985 12.8134 16.4104 11.8125 16.4104C10.8115 16.4104 10 15.5985 10 14.597Z" />
                      <path d="M9.71371 25.8348L1.59744 17.7909C1.49009 17.6845 1.42969 17.5396 1.42969 17.3884L1.42969 14.2693C1.42969 13.7658 2.03695 13.5125 2.39443 13.8668L10.5108 21.9106C10.6181 22.017 10.6785 22.1619 10.6785 22.3131L10.6785 25.4323C10.6785 25.9358 10.0712 26.1891 9.71371 25.8348Z" />
                      <path d="M21.2273 13.8668L13.1111 21.9106C13.0037 22.017 12.9434 22.1619 12.9434 22.3131L12.9434 25.4323C12.9434 25.9358 13.5506 26.1891 13.9081 25.8348L22.0243 17.7909C22.1317 17.6845 22.1921 17.5396 22.1921 17.3884L22.1921 14.2693C22.1921 13.7658 21.5849 13.5125 21.2273 13.8668Z" />
                    </svg>
                  </div>
                  <div
                    className="accordion-button collapsed"
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse_17"
                    aria-expanded="false"
                    aria-controls="collapse_17"
                  >
                    02- How can I participate in the CoinPay ICO?
                  </div>
                  <div
                    id="collapse_17"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordion_4"
                  >
                    <div className="accordion-body">
                      <p>
                        You can participate in the CoinPay ICO, simply
                        register on our platform, complete the KYC (Know Your
                        Customer) process, and follow the instructions to
                        purchase tokens during the ICO period, Once registered
                        buy tokens with secure payments.
                      </p>
                      <ul className="iconlist_block unordered_list_block">
                        <li>
                          <span className="iconlist_icon">
                            <i className="fa-solid fa-circle"></i>
                          </span>
                          <span className="iconlist_label">
                            Sign up and complete the KYC process.
                          </span>
                        </li>
                        <li>
                          <span className="iconlist_icon">
                            <i className="fa-solid fa-circle"></i>
                          </span>
                          <span className="iconlist_label">
                            Follow instructions to purchase tokens securely.
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <div
                    className="icon_arrow collapsed"
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse_18"
                    aria-expanded="false"
                    aria-controls="collapse_18"
                  >
                    <svg
                      viewBox="0 0 23 27"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10 14.597L10 2.56731C10 1.56579 10.8115 0.753906 11.8125 0.753906C12.8134 0.753906 13.6249 1.56579 13.6249 2.56731L13.6249 14.597C13.6249 15.5985 12.8134 16.4104 11.8125 16.4104C10.8115 16.4104 10 15.5985 10 14.597Z" />
                      <path d="M9.71371 25.8348L1.59744 17.7909C1.49009 17.6845 1.42969 17.5396 1.42969 17.3884L1.42969 14.2693C1.42969 13.7658 2.03695 13.5125 2.39443 13.8668L10.5108 21.9106C10.6181 22.017 10.6785 22.1619 10.6785 22.3131L10.6785 25.4323C10.6785 25.9358 10.0712 26.1891 9.71371 25.8348Z" />
                      <path d="M21.2273 13.8668L13.1111 21.9106C13.0037 22.017 12.9434 22.1619 12.9434 22.3131L12.9434 25.4323C12.9434 25.9358 13.5506 26.1891 13.9081 25.8348L22.0243 17.7909C22.1317 17.6845 22.1921 17.5396 22.1921 17.3884L22.1921 14.2693C22.1921 13.7658 21.5849 13.5125 21.2273 13.8668Z" />
                    </svg>
                  </div>
                  <div
                    className="accordion-button collapsed"
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse_18"
                    aria-expanded="false"
                    aria-controls="collapse_18"
                  >
                    03- What are the benefits of investing in CoinPay ICO?
                  </div>
                  <div
                    id="collapse_18"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordion_4"
                  >
                    <div className="accordion-body">
                      <p>
                        You can participate in the CoinPay ICO, simply
                        register on our platform, complete the KYC (Know Your
                        Customer) process, and follow the instructions to
                        purchase tokens during the ICO period, Once registered
                        buy tokens with secure payments.
                      </p>
                      <ul className="iconlist_block unordered_list_block">
                        <li>
                          <span className="iconlist_icon">
                            <i className="fa-solid fa-circle"></i>
                          </span>
                          <span className="iconlist_label">
                            Sign up and complete the KYC process.
                          </span>
                        </li>
                        <li>
                          <span className="iconlist_icon">
                            <i className="fa-solid fa-circle"></i>
                          </span>
                          <span className="iconlist_label">
                            Follow instructions to purchase tokens securely.
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <div
                    className="icon_arrow collapsed"
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse_19"
                    aria-expanded="false"
                    aria-controls="collapse_19"
                  >
                    <svg
                      viewBox="0 0 23 27"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10 14.597L10 2.56731C10 1.56579 10.8115 0.753906 11.8125 0.753906C12.8134 0.753906 13.6249 1.56579 13.6249 2.56731L13.6249 14.597C13.6249 15.5985 12.8134 16.4104 11.8125 16.4104C10.8115 16.4104 10 15.5985 10 14.597Z" />
                      <path d="M9.71371 25.8348L1.59744 17.7909C1.49009 17.6845 1.42969 17.5396 1.42969 17.3884L1.42969 14.2693C1.42969 13.7658 2.03695 13.5125 2.39443 13.8668L10.5108 21.9106C10.6181 22.017 10.6785 22.1619 10.6785 22.3131L10.6785 25.4323C10.6785 25.9358 10.0712 26.1891 9.71371 25.8348Z" />
                      <path d="M21.2273 13.8668L13.1111 21.9106C13.0037 22.017 12.9434 22.1619 12.9434 22.3131L12.9434 25.4323C12.9434 25.9358 13.5506 26.1891 13.9081 25.8348L22.0243 17.7909C22.1317 17.6845 22.1921 17.5396 22.1921 17.3884L22.1921 14.2693C22.1921 13.7658 21.5849 13.5125 21.2273 13.8668Z" />
                    </svg>
                  </div>
                  <div
                    className="accordion-button collapsed"
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse_19"
                    aria-expanded="false"
                    aria-controls="collapse_19"
                  >
                    04- What is the total supply of CoinPay tokens?
                  </div>
                  <div
                    id="collapse_19"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordion_4"
                  >
                    <div className="accordion-body">
                      <p>
                        You can participate in the CoinPay ICO, simply
                        register on our platform, complete the KYC (Know Your
                        Customer) process, and follow the instructions to
                        purchase tokens during the ICO period, Once registered
                        buy tokens with secure payments.
                      </p>
                      <ul className="iconlist_block unordered_list_block">
                        <li>
                          <span className="iconlist_icon">
                            <i className="fa-solid fa-circle"></i>
                          </span>
                          <span className="iconlist_label">
                            Sign up and complete the KYC process.
                          </span>
                        </li>
                        <li>
                          <span className="iconlist_icon">
                            <i className="fa-solid fa-circle"></i>
                          </span>
                          <span className="iconlist_label">
                            Follow instructions to purchase tokens securely.
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <div
                    className="icon_arrow collapsed"
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse_20"
                    aria-expanded="false"
                    aria-controls="collapse_20"
                  >
                    <svg
                      viewBox="0 0 23 27"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10 14.597L10 2.56731C10 1.56579 10.8115 0.753906 11.8125 0.753906C12.8134 0.753906 13.6249 1.56579 13.6249 2.56731L13.6249 14.597C13.6249 15.5985 12.8134 16.4104 11.8125 16.4104C10.8115 16.4104 10 15.5985 10 14.597Z" />
                      <path d="M9.71371 25.8348L1.59744 17.7909C1.49009 17.6845 1.42969 17.5396 1.42969 17.3884L1.42969 14.2693C1.42969 13.7658 2.03695 13.5125 2.39443 13.8668L10.5108 21.9106C10.6181 22.017 10.6785 22.1619 10.6785 22.3131L10.6785 25.4323C10.6785 25.9358 10.0712 26.1891 9.71371 25.8348Z" />
                      <path d="M21.2273 13.8668L13.1111 21.9106C13.0037 22.017 12.9434 22.1619 12.9434 22.3131L12.9434 25.4323C12.9434 25.9358 13.5506 26.1891 13.9081 25.8348L22.0243 17.7909C22.1317 17.6845 22.1921 17.5396 22.1921 17.3884L22.1921 14.2693C22.1921 13.7658 21.5849 13.5125 21.2273 13.8668Z" />
                    </svg>
                  </div>
                  <div
                    className="accordion-button collapsed"
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse_20"
                    aria-expanded="false"
                    aria-controls="collapse_20"
                  >
                    05- Can I sell my tokens after the ICO?
                  </div>
                  <div
                    id="collapse_20"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordion_4"
                  >
                    <div className="accordion-body">
                      <p>
                        You can participate in the CoinPay ICO, simply
                        register on our platform, complete the KYC (Know Your
                        Customer) process, and follow the instructions to
                        purchase tokens during the ICO period, Once registered
                        buy tokens with secure payments.
                      </p>
                      <ul className="iconlist_block unordered_list_block">
                        <li>
                          <span className="iconlist_icon">
                            <i className="fa-solid fa-circle"></i>
                          </span>
                          <span className="iconlist_label">
                            Sign up and complete the KYC process.
                          </span>
                        </li>
                        <li>
                          <span className="iconlist_icon">
                            <i className="fa-solid fa-circle"></i>
                          </span>
                          <span className="iconlist_label">
                            Follow instructions to purchase tokens securely.
                          </span>
                        </li>
                      </ul>
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
