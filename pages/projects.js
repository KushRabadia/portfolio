import { useEffect } from "react";
import { CreativePageBanner } from "../src/components/PageBanner";
import Layout from "../src/layout/Layout";

import dynamic from "next/dynamic";
const ItemIsotope = dynamic(() => import("../src/components/ItemIsotope"), {
  ssr: false,
});

const WorksCreative = () => {
  const typingData = [
    "<p>Welcome to my <strong>portfolio</strong></p>",
    "<p>I'm <strong>Kush Rabadia</strong></p>",
    "<p>Fullstack <strong>Developer</strong></p>",
  ];

  useEffect(() => {
    // Check if running on the client side before executing this code
    if (typeof window !== 'undefined') {
      const bot = (I, L, T, i, c, k, s) => {
        if (I.iticks) return;
        I.iticks = {host: c, settings: s, clientId: k, cdn: L, queue: []};
        var h = T.head || T.documentElement;
        var e = T.createElement(i);
        var l = I.location;
        e.async = true;
        e.src = (L || c) + '/client/inject-v2.min.js';
        h.insertBefore(e, h.firstChild);
        I.iticks.call = function(a, b) {
          I.iticks.queue.push([a, b]);
        };
      };
  
      bot(window, 'https://cdn-v1.intelliticks.com/prod/common', document, 'script', 'https://app.intelliticks.com', 'CmNjjxhYKMgBjiTfJ_c', {});
    }
  }, []);

  return (
    <Layout>
      <CreativePageBanner pageName={"Projects"} extraClass="typed-subtitle" typingData={typingData}/>
      <div className="section works" id="section-portfolio">
        <div className="content">
          <ItemIsotope />
          <div className="clear" />
        </div>
      </div>
    </Layout>
  );
};
export default WorksCreative;
