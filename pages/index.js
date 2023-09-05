import { useEffect, useState } from "react";
import Link from "next/link";
import TypingAnimation from "../src/components/TypingAnimation";
import Layout from "../src/layout/Layout";

const IndexPersonal = () => {
  const locale = 'en';
  const [today, setDate] = useState(new Date());
  const [time, setTime] = useState('');
  const [currentQuote, setCurrentQuote] = useState('');

  const quotes = {
    morning: [
      "Mornings are like blank canvases. Paint something beautiful.",
      "Coffee: because adulting is hard, and mornings are harder.",
      "The early bird gets the worm, but the second mouse gets the cheese.",
      "Rise and shine, it's time to make the day amazing!",
      "Every morning is a chance to rewrite your story.",
      "Morning is wonderful. Its only drawback is that it comes at such an inconvenient time of day.",
      "Morning: the time when coffee is your best friend and the snooze button is your worst enemy.",
      "Life is beautiful, especially in the morning.",
      "Good morning! Remember, it's not just a new day, it's a new opportunity.",
      "Morning is a miracle; it's a new beginning, a new blessing, a new hope."
    ],
    afternoon: [
      "Good afternoon! Remember, there's no problem that a cup of tea and a snack can't solve.",
      "Afternoons: where productive hours go to take a nap.",
      "The afternoon is a time for productivity, or at least pretending to be productive.",
      "Lunchtime: where your dreams of a salad meet the reality of a sandwich.",
      "The afternoon is like a sandwich, made up of morning and evening.",
      "Keep calm and have a snack; it's the afternoon.",
      "In the afternoon, think big thoughts but keep the coffee small.",
      "Life's too short to say no to dessert, especially in the afternoon.",
      "Afternoons are perfect for a quick break and a little daydreaming.",
      "Afternoons are the best time to sneak a cookie and pretend it's healthy."
    ],
    evening: [
      "Good evening! Time to put the day to bed and say hello to relaxation.",
      "Evening: the part of the day where you take off your mask and be yourself.",
      "In the evening, let go of worries. Embrace the peace of the night.",
      "Sunsets are proof that no matter what happens, every day can end beautifully.",
      "Evenings are for quiet moments, warm tea, and deep thoughts.",
      "In the evening, the world takes a deep breath, and so should you.",
      "Evenings are made for books, cozy blankets, and a mug of hot cocoa.",
      "In the evening, let the stars be your guide and the moon be your friend.",
      "Good evening! May your night be filled with sweet dreams and even sweeter snacks.",
      "Evenings are for reflection. Look back on the day with a smile."
    ]
  };

  useEffect(() => {
      const timer = setInterval(() => { // Creates an interval which will update the current data every minute
      // This will trigger a rerender every component that uses the useDate hook.
      setDate(new Date());
    }, 60 * 1000);
    return () => {
      clearInterval(timer); // Return a funtion to clear the timer so that it will stop being called on unmount
    }
  }, []);

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

  useEffect(() => {
    const hour = today.getHours();
    const quoteCategory = `${(hour < 12 && 'morning') || (hour < 17 && 'afternoon') || 'evening'}`;
  
    const quotesForTime = quotes[quoteCategory];
    const randomIndex = Math.floor(Math.random() * quotesForTime.length);
    setCurrentQuote(quotesForTime[randomIndex]);
    setTime(today.toLocaleTimeString(locale, { hour: 'numeric', hour12: true, minute: 'numeric' }));
  }, [today, quotes]);

  return (
    <Layout>
      <div className="section started personal" id="section-started">
        {/* background */}
        <div className="video-bg">
          <div className="video-bg-mask" />
          <div className="video-bg-texture" id="grained_container" />
        </div>
        {/* started content */}
        <div className="centrize full-width">
          <div className="vertical-center">
            <div className="started-content">
              <div className="logo"/>
              <h1 class="h-title">
								<div id="MyClockDisplay" class="clock">
                  {time}<p/>
                  {currentQuote}
                  <p>
                    <i>
                      <q>GPT now available in the chatbot!</q>
                    </i>
                  </p>
                </div>
								<div class="icons">
                  <a>
                    <span class="icon fab fa-node-js"></span>
                    <strong>
                      <span class="icon fab fa-react"></span> 
                    </strong>
                    <span class="icon fab fa-node"></span>
                    <strong>
                      <span class="icon fab fa-html5"></span>
                    </strong>
                    <span class="icon fab fa-aws"></span>
                    <strong>
                      <span class="icon fab fa-css3-alt"></span>
                    </strong>
                    <span class="icon fab fa-python"></span>
                    <strong>
                      <span class="icon fab fa-angular"></span>
                    </strong>
                    <span class="icon fab fa-php"></span>
                  </a>
								</div>

								<Link href="/projects">
                  <a class="text-italic project">
                    Projects <span class="icon fas fa-arrow-right"></span>
                  </a>
                </Link>
							</h1>
              <TypingAnimation extraClassName={"typed-subtitle"} />
              <span className="typed-subtitle" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default IndexPersonal;
