import { useEffect } from "react";
import ContactSection from "../src/components/ContactSection";
import { CreativePageBanner } from "../src/components/PageBanner";
import Layout from "../src/layout/Layout";

const ContactsCreative = () => {
  const typingAnimation = [
    `<span class="typed-bread"> Welcome to my contact page! 
    It's a no-spam zone, but if you've got a fantastic business proposal, 
    I'm all ears (and inboxes). </span>`,
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
      <CreativePageBanner pageName={"Contacts"} typingData={typingAnimation} />
      <ContactSection />
    </Layout>
  );
};
export default ContactsCreative;
