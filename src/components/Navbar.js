import React from "react";
import Logo from "../images/rachele.png";

const img = Logo;

export default function Navbar() {
  return (
    <div className="navbar1">
      <nav class="navbar navbar-expand-lg navbar-light container-navbar">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img
              src={img}
              alt=""
              class="d-inline-block align-text-top company-logo"
            />{" "}
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Home
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categories
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Shop
                </a>
              </li>

              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Pages
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Blog
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Contacts
                </a>
              </li>
            </ul>
            <div class="right-nav">
              <div class="soical rightnav">
                <a href="#">
                  <i class="fa-brands fa-facebook-f social-logo"></i>
                </a>
                <a href="#">
                  <i class="fa-brands fa-twitter social-logo"></i>
                </a>
                <a href="#">
                  <i class="fa-brands fa-linkedin-in social-logo"></i>
                </a>
                <a href="#">
                  <i class="fa-brands fa-instagram social-logo"></i>
                </a>
              </div>
              <div class="lang rightnav">
                <div class="v-line"></div>
                <div class="nav-item dropdown right-drop">
                  <a
                    class="nav-link dropdown-toggle fw-normal"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    EN
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                      <a class="dropdown-item" href="#"></a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        English(UK)
                      </a>
                    </li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        English(American)
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="nav-item dropdown dropdown right-drop">
                  <a
                    class="nav-link dropdown-toggle fw-normal"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    USD
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                      <a class="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="v-line"></div>
              </div>
              <div class="user-cart rightnav">
                <div class="nav-item dropdown right-drop">
                  <a
                    class="nav-link fw-normal"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i class="fa-solid fa-magnifying-glass"></i>
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                      <a class="dropdown-item" href="#"></a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        <form class="d-flex">
                          <input
                            class="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                          />
                        </form>
                      </a>
                    </li>
                  </ul>
                </div>
                <i class="fa-solid fa-user profile-logo"></i>
                <i class="fa-solid fa-cart-shopping profile-logo"></i>
                <i class="fa-solid fa-headset profile-logo headset-1"></i>
                Helpline
                <br />
                +123-456-7890
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
