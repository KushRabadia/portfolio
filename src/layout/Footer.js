const Footer = () => {
//   (function(I, L, T, i, c, k, s) {if(I.iticks) return;I.iticks = {host:c, settings:s, clientId:k, cdn:L, queue:[]};var h = T.head || T.documentElement;var e = T.createElement(i);var l = I.location;e.async = true;e.src = (L||c)+'/client/inject-v2.min.js';h.insertBefore(e, h.firstChild);I.iticks.call = function(a, b) {I.iticks.queue.push([a, b]);};})(window, 'https://cdn.intelliticks.com/prod/common', document, 'script', 'https://app.intelliticks.com', 'CmNjjxhYKMgBjiTfJ_c', {});

  return (
    <footer className="footer">
      <div class="copy">
		<a href="https://mail.google.com/mail/?view=cm&fs=1&to=hello@kushrabadia.com" target="_blank" rel="noreferrer">
			E: hello@kushrabadia.com
		</a>
		<p></p>
		<a href="tel:+14163566331">T: +1 (416) 356 6331</a>
	</div>
      <div className="soc-box">
        <div className="follow-label">Follow Me</div>
				<div className="soc">
					<a target="_blank" href="https://github.com/KushRabadia" rel="noreferrer">
						<img src="images/github.png"/>
					</a>
					<a target="_blank" href="https://www.linkedin.com/in/kush-rabadia-3287831a1/" rel="noreferrer">
						<img src="images/linkedin.png"/>
					</a>
					<a target="_blank" href="https://www.instagram.com/kkr7._.websites/" rel="noreferrer">
						<img src="images/instagram.png"/>
					</a>
					<a target="_blank" href="https://api.whatsapp.com/send?phone=14163566331&text=Kush%20Rabadia" rel="noreferrer">
						<img src="images/whatsapp.png"/>
					</a>
				</div>
      </div>
      <div className="clear" />
    </footer>
  );
};
export default Footer;
