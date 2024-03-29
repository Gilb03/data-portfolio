import "./app.css";
import React from "react";
import { BiCheckboxSquare } from "react-icons/bi";
import { Page, Seo } from "gatsby-theme-portfolio-minimal";


const ServicesPage = () => (
    <div className="App">
    <Page>
      <br>
      </br>
      <header className="App-header"></header>
      <div className="table centered">
        <div className="row">
          <div className="column">
            <ul className="price">
              <li className="header">
                <br />
                <br />
                Features
              </li>
              <li>Centralized Teams</li>
              <li>Podcast Editing</li>
                <li>SEO Strategy & Execution</li>
              <li>Mixing and Mastering</li>
              <li>Facebook & Instagram Ads</li>
              <li>Design System Analytics</li>
              <li>Unlimited cloud storage</li>
            </ul>
          </div>

          <div className="column">
            <ul className="price">
              <li className="header">
                Starter
                <br />
                <span className="dollar">25</span>
                <p>per episode per month</p>
                <div className="button_cont" align="center">
                  <a className="btn" target="_blank" rel="nofollow noopener">
                    Go Starter
                  </a>
                </div>
              </li>
              <li>
                <BiCheckboxSquare color="green" />
              </li>
              <li>
                <BiCheckboxSquare color="green" />
              </li>
              <li>
                <BiCheckboxSquare color="green" />
              </li>
              <li>
                <BiCheckboxSquare color="red" />
              </li>
              <li>
                <BiCheckboxSquare color="red" />
              </li>
              <li>
                <BiCheckboxSquare color="red" />
              </li>
            </ul>
          </div>

          <div className="column">
            <ul className="price">
              <li className="header">
                Professional
                <br />
                <span className="dollar">50</span>
                <p>per episode per month</p>
                <div className="button_cont" align="center">
                  <a className="btn" target="_blank" rel="nofollow noopener">
                    Go Professional
                  </a>
                </div>
              </li>
              <li>
                <BiCheckboxSquare color="green" />
              </li>
              <li>
                <BiCheckboxSquare color="green" />
              </li>
              <li>
                <BiCheckboxSquare color="green" />
              </li>
              <li>
                <BiCheckboxSquare color="green" />
              </li>
              <li>
                <BiCheckboxSquare color="red" />
              </li>
              <li>
                <BiCheckboxSquare color="red" />
              </li>
            </ul>
          </div>

          <div className="column">
            <ul className="price">
              <li className="header">
                Organization
                <br />
                <span className="dollar">250</span>
                <p>per user per month</p>
                <div className="button_cont" align="center">
                  <a className="btn" target="_blank" rel="nofollow noopener">
                    Go Organization
                  </a>
                </div>
              </li>
              <li>
                <BiCheckboxSquare color="green" />
              </li>
              <li>
                <BiCheckboxSquare color="green" />
              </li>
              <li>
                <BiCheckboxSquare color="green" />
              </li>
              <li>
                <BiCheckboxSquare color="green" />
              </li>
              <li>
                <BiCheckboxSquare color="green" />
              </li>
              <li>
                <BiCheckboxSquare color="green" />
              </li>
            </ul>
          </div>
        </div>
      </div>
      </Page>
    </div>
  );


  
  export default ServicesPage;