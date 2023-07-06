import React from "react";

const linkData = [
  {
    content: "Shop Coupon",
  },
  {
    content: "About us",
  },
  {
    content: "Career",
  },
  {
    content: "Supports",
  },
];
const categoryData1 = [
  {
    content: "Men",
  },
  {
    content: "Women",
  },
  {
    content: "Kids",
  },
  {
    content: "Accesories",
  },
];
const categoryData2 = [
  {
    content: "Bags",
  },
  {
    content: "Jwellery",
  },
  {
    content: "Cloths",
  },
  {
    content: "Beauty Items",
  },
];

export default function footer() {
  return (
    <footer>
      <div class="footer">
        <div class="container">
          <div class="row">
            <div class="col-md-7">
              <div class="row">
                <div class="col-md-6 col-sm-5 col-xs-3">
                  <div class="pb-4">
                    <h3>Rachele</h3>
                  </div>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <div class="position-relative">
                    <form action="">
                      <input
                        type="email"
                        class="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Your email here"
                      />
                    </form>
                    <div class="mail-icon">
                      <i class="fa-solid fa-envelope me-2 text-secondary"></i>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 col-sm-5 col-xs-3">
                  <div class="pb-4">
                    <h5>Address</h5>
                  </div>
                  <p>
                    <i class="fa-sharp fa-solid fa-location-dot me-2"></i>20,
                    Awesome Road,
                    <br /> New York, USA 4D BS3
                  </p>
                  <p>
                    <i class="fa-solid fa-phone me-2"></i>+123 456 7890
                  </p>
                  <p>
                    <i class="fa-solid fa-envelope me-2"></i>hello@rachele.com
                  </p>
                </div>
              </div>
            </div>

            <div class="col-md-5">
              <div class="row">
                <div class="col-md-6 col-sm-5 col-xs-3">
                  <div class="pb-4">
                    <h5>Useful Links</h5>
                  </div>

                  {linkData.map((data) => (
                    <>
                      <p>
                        <a href="">{data.content}</a>
                      </p>
                    </>
                  ))}
                </div>
                <div class="col-md-6 col-sm-5 col-xs-3">
                  <div class="pb-4">
                    <h5>Categories</h5>
                  </div>

                  <div class="row">
                    <div class="col-md-6 col-sm-5 col-xs-3">
                      {categoryData1.map((data) => (
                        <p>
                          {" "}
                          <a href="#">{data.content}</a>{" "}
                        </p>
                      ))}
                    </div>
                    <div class="col-md-6 col-sm-6 col-xs-3">
                      {categoryData2.map((data) => (
                        <p>
                          {" "}
                          <a href="#">{data.content}</a>{" "}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div class="social-payment justify-content-between pt-5">
        <div class="media d-flex gap-2">
          <div class="rounded-circle p-2 bg-white">
            <Icon class="ic-16 text-secondary" name="ri:facebook-fill" />
          </div>

          <div class="rounded-circle p-2 bg-white">
            <Icon class="ic-16 text-secondary" name="entypo-social:linkedin" />
          </div>
          <div class="rounded-circle p-2 bg-white">
            <Icon class="ic-16 text-secondary" name="bx:bxl-youtube" />
          </div>
          <div class="rounded-circle p-2 bg-white">
            <Icon class="ic-16 text-secondary" name="simple-icons:twitter" />
          </div>
        </div>
        <div class="payment d-flex gap-2">
          <Icon class="ic-40" name="cib:cc-paypal" />
          <Icon class="ic-40" name="cib:stripe" />
          <Icon class="ic-40" name="cib:cc-mastercard" />
          <Icon class="ic-40" name="cib:cc-apple-pay" />
          <Icon class="ic-40" name="cib:cc-amazon-pay" />
        </div>
      </div> */}
          <div class="footerline pt-2 pb-5">
            <hr class="new5" />
          </div>
          <div class="footer-part flex-sm-row d-flex align-items-center justify-content-between pb-3">
            <div class="rights">
              <p>All rights Rachele © 2022</p>
            </div>
            <div class="terms gap-3">
              <p class="d-flex gap-4">
                <a href="#">Terms & Condition</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Legal</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
