import Isotope from "isotope-layout";
import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";
import { parallax } from "../utils";
const ItemIsotope = () => {
  useEffect(() => {
    parallax();
  }, []);

  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("box-item");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".portfolio-items", {
        itemSelector: ".box-item",
        //    layoutMode: "fitRows",
        percentPosition: true,
        masonry: {
          columnWidth: ".box-item",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 1000);
    //     return () => isotope.current.destroy();
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "glitch-effect" : "");

  useEffect(() => {
    const circle = document.querySelectorAll(".circle");
    circle.forEach((e) => {
      e.addEventListener("mouseenter", (m) => {
        console.log(
          m.pageY,
          e.offsetParent.offsetParent.offsetParent.offsetParent.offsetLeft,
          e.offsetTop
        );
        if (!e.getElementsByClassName("ink")[0]) {
          const span = document.createElement("span");
          span.classList.add("ink");
          e.appendChild(span);
          span.classList.add("ink-animate");
          // span.style.height = `${e.clientHeight}px`;
          // span.style.width = `${e.clientWidth}px`;
          // span.style.top = `${m.pageY - e.offsetTop - e.clientHeight / 2}px`;
          // span.style.left = `${m.pageX - e.offsetLeft - e.clientWidth / 2}px`;
        }
      });
      e.addEventListener("mouseleave", (m) => {
        const span = document.querySelector(".ink");
        if (span) {
          span.classList.remove("ink-animate");
        }
      });
    });
  }, []);

  return (
    <Fragment>
      {/* portfolio filter */}
      <div className="filter-menu content-box">
        <div className="filters">
          <div className="btn-group">
            <label
              data-text="All"
              className={`c-pointer ${activeBtn("box-item")}`}
              onClick={handleFilterKeyChange("box-item")}
            >
              <input type="radio" name="fl_radio" defaultValue=".box-item" />
              All
            </label>
          </div>
          <div className="btn-group">
            <label
              className={`c-pointer ${activeBtn("f-video")}`}
              onClick={handleFilterKeyChange("f-video")}
              data-text="Video"
            >
              <input type="radio" name="fl_radio" defaultValue=".f-video" />
              Projects
            </label>
          </div>
          <div className="btn-group">
            <label
              className={`c-pointer ${activeBtn("f-links")}`}
              onClick={handleFilterKeyChange("f-links")}
              data-text="Links"
            >
              <input type="radio" name="fl_radio" defaultValue=".f-links" />
              Work Experience
            </label>
          </div>
        </div>
      </div>
      {/* portfolio items */}
      <div className="box-items portfolio-items">
        <div className="box-item f-video">
          <div className="image">
            <a href="https://www.atlantismall.shop/" className="has-popup-link hover-animated" target="_blank" rel="noreferrer">
              <h2>ATLANTIS MALL</h2>
              <span className="info circle">
                <span className="centrize full-width">
                  <span className="vertical-center">
                    <span className="icon fas fa-link"></span>
                    <span className="desc">
                      <span className="category">Link</span>
                      <span className="name">www.atlantismall.com</span>
                    </span>
                  </span>
                </span>
              </span>
            </a>	
          </div>
        </div>
        
        <div className="box-item f-video animate-to-page">
          <div className="image">
            <a href="https://speedyplaces.kushrabadia.com/" className="has-popup-link hover-animated" target="_blank" rel="noreferrer">
              <h2>SPEEDYPLACES</h2>
              <span className="info circle">
                <span className="centrize full-width">
                  <span className="vertical-center">
                    <span className="icon fas fa-link"></span>
                    <span className="desc">
                      <span className="category">Link</span>
                      <span className="name">www.speedyplaces.com</span>
                    </span>
                  </span>
                </span>
              </span>
            </a>	
          </div>
        </div>

        <div className="box-item f-links">
          <div className="image">
            <a href="https://visaloyal.kushrabadia.com/" className="has-popup-link hover-animated" target="_blank" rel="noreferrer">
              <h2>VISALOYAL</h2>
              <span className="info circle">
                <span className="centrize full-width">
                  <span className="vertical-center">
                    <span className="icon fas fa-link"></span>
                    <span className="desc">
                      <span className="category">Link</span>
                      <span className="name">www.visaloyal.com</span>
                    </span>
                  </span>
                </span>
              </span>
            </a>	
          </div>
        </div>
      
        <div className="box-item f-links">
          <div className="image">
            <a href="https://krimircrafts.kushrabadia.com" className="has-popup-link hover-animated" target="_blank" rel="noreferrer">
              <h2>KRIMIR CRAFTS</h2>
              <span className="info circle">
                <span className="centrize full-width">
                  <span className="vertical-center">
                    <span className="icon fas fa-link"></span>
                    <span className="desc">
                      <span className="category">Link</span>
                      <span className="name">www.krimircrafts.com</span>
                    </span>
                  </span>
                </span>
              </span>
            </a>
          </div>
        </div>

        <div className="box-item f-links">
          <div className="image">
            <a href="http://itssokenya.kushrabadia.com/" className="has-popup-link hover-animated" target="_blank" rel="noreferrer">
              <h2>ITSSOKENYA</h2>
              <span className="info circle">
                <span className="centrize full-width">
                  <span className="vertical-center">
                    <span className="icon fas fa-link"></span>
                    <span className="desc">
                      <span className="category">Link</span>
                      <span className="name">www.itssokenya.com</span>
                    </span>
                  </span>
                </span>
              </span>
            </a>
          </div>
        </div>
        
        <div className="box-item f-video">
          <div className="image">
            <a href="https://speedygram.herokuapp.com/" className="has-popup-link hover-animated" target="_blank" rel="noreferrer">
              <h2>SPEEDYGRAM</h2>
              <span className="info circle">
                <span className="centrize full-width">
                  <span className="vertical-center">
                    <span className="icon fas fa-link"></span>
                    <span className="desc">
                      <span className="category">Link</span>
                      <span className="name">www.speedygram.com</span>
                    </span>
                  </span>
                </span>
              </span>
            </a>	
          </div>
        </div>

        <div className="box-item f-video">
          <div className="image">
            <a href="https://speedyevents.vercel.app/" className="has-popup-link hover-animated" target="_blank" rel="noreferrer">
              <h2>SPEEDYEVENTS</h2>
              <span className="info circle">
                <span className="centrize full-width">
                  <span className="vertical-center">
                    <span className="icon fas fa-link"></span>
                    <span className="desc">
                      <span className="category">Link</span>
                      <span className="name">www.speedyevents.com</span>
                    </span>
                  </span>
                </span>
              </span>
            </a>	
          </div>
        </div>
        
        <div className="box-item f-video">
          <div className="image">
            <a href="https://play.google.com/store/apps/details?id=com.kushrabadia.speedyshop" className="has-popup-link hover-animated" target="_blank" rel="noreferrer">
              <h2>SPEEDYSHOP</h2>
              <span className="info circle">
                <span className="centrize full-width">
                  <span className="vertical-center">
                    <span className="icon fas fa-link"></span>
                    <span className="desc">
                      <span className="category">Link</span>
                      <span className="name">www.speedyshop.com</span>
                    </span>
                  </span>
                </span>
              </span>
            </a>	
          </div>
        </div>
        
        <div className="box-item f-video">
          <div className="image">
            <a href="http://speedysubs.kushrabadia.com/" className="has-popup-link hover-animated" target="_blank" rel="noreferrer">
              <h2>SPEEDYSUBS</h2>
              <span className="info circle">
                <span className="centrize full-width">
                  <span className="vertical-center">
                    <span className="icon fas fa-link"></span>
                    <span className="desc">
                      <span className="category">Link</span>
                      <span className="name">www.speedysubs.com</span>
                    </span>
                  </span>
                </span>
              </span>
            </a>	
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default ItemIsotope;
