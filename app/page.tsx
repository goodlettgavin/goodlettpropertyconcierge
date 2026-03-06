\"use client";

export default function Home() {
  return (
    <>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        :root {
          --cream: #1a1600; --warm-white: #0d0d0d; --charcoal: #000000; --deep: #111100;
          --gold: #c8aa6f; --gold-light: #e0c98a; --sage: #c8aa6f; --muted: #d4c9b0;
          --border: rgba(200,170,111,0.3);
        }
        html { scroll-behavior: smooth; }
        body { font-family: 'DM Sans', sans-serif; background: #0d0d0d; color: var(--charcoal); overflow-x: hidden; }
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');
        nav { position: fixed; top: 0; left: 0; right: 0; z-index: 100; display: flex; align-items: center; justify-content: space-between; padding: 1.5rem 4rem; background: rgba(0,0,0,0.95); backdrop-filter: blur(12px); border-bottom: 1px solid var(--border); }
        .nav-logo { font-family: 'Cormorant Garamond', serif; font-size: 1.15rem; font-weight: 600; letter-spacing: 0.08em; color: var(--charcoal); text-decoration: none; }
        .nav-logo span { color: var(--gold); }
        .nav-links { display: flex; gap: 2.5rem; list-style: none; }
        .nav-links a { font-size: 0.8rem; letter-spacing: 0.12em; text-transform: uppercase; color: #d4c9b0; text-decoration: none; transition: color 0.3s; }
        .nav-links a:hover { color: var(--gold); }
        .nav-cta { font-size: 0.78rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--warm-white); background: var(--charcoal); border: none; padding: 0.7rem 1.6rem; cursor: pointer; text-decoration: none; transition: background 0.3s; }
        .nav-cta:hover { background: var(--gold); }
        .hero { min-height: 100vh; display: grid; grid-template-columns: 1fr 1fr; position: relative; overflow: hidden; }
        .hero-left { background: var(--charcoal); display: flex; flex-direction: column; justify-content: center; padding: 10rem 5rem 5rem 6rem; position: relative; }
        .hero-left::after { content: ''; position: absolute; top: 0; right: -1px; bottom: 0; width: 60px; background: #0d0d0d; clip-path: polygon(100% 0, 100% 100%, 0 100%); z-index: 2; }
        .hero-eyebrow { font-size: 0.72rem; letter-spacing: 0.2em; text-transform: uppercase; color: var(--gold); margin-bottom: 1.5rem; display: flex; align-items: center; gap: 0.75rem; }
        .hero-eyebrow::before { content: ''; display: block; width: 32px; height: 1px; background: var(--gold); }
        .hero-title { font-family: 'Cormorant Garamond', serif; font-size: clamp(3rem, 5vw, 4.5rem); font-weight: 300; line-height: 1.1; color: #f0e8d8; margin-bottom: 2rem; }
        .hero-title em { font-style: italic; color: var(--gold-light); }
        .hero-desc { font-size: 0.95rem; line-height: 1.8; color: #e8e0d0; max-width: 380px; margin-bottom: 3rem; }
        .hero-btns { display: flex; gap: 1rem; flex-wrap: wrap; }
        .btn-primary { background: var(--gold); color: var(--charcoal); padding: 1rem 2.2rem; font-size: 0.8rem; letter-spacing: 0.1em; text-transform: uppercase; font-weight: 500; text-decoration: none; transition: background 0.3s, transform 0.2s; display: inline-block; }
        .btn-primary:hover { background: var(--gold-light); transform: translateY(-2px); }
        .btn-outline { background: transparent; color: #f0e8d8; border: 1px solid rgba(247,243,237,0.3); padding: 1rem 2.2rem; font-size: 0.8rem; letter-spacing: 0.1em; text-transform: uppercase; text-decoration: none; transition: border-color 0.3s, color 0.3s; display: inline-block; }
        .btn-outline:hover { border-color: var(--gold); color: var(--gold); }
        .hero-stat { margin-top: 4rem; padding-top: 2rem; border-top: 1px solid rgba(247,243,237,0.1); display: flex; gap: 3rem; }
        .stat-num { font-family: 'Cormorant Garamond', serif; font-size: 2.5rem; font-weight: 300; color: var(--gold-light); line-height: 1; }
        .stat-label { font-size: 0.72rem; letter-spacing: 0.1em; text-transform: uppercase; color: #c8bfa8; margin-top: 0.3rem; }
        .hero-right { background: #111100; display: flex; align-items: stretch; justify-content: stretch; padding: 0; }
        .hero-visual { width: 100%; max-width: 100%; aspect-ratio: unset; height: 100%; background: var(--charcoal); position: relative; overflow: hidden; }
        .hero-visual-bg { position: absolute; inset: 0; background: linear-gradient(135deg, rgba(181,146,76,0.1) 0%, transparent 50%), url('/hero-home.jpg') center/cover; background-size: cover; background-position: center; }
        .hero-visual-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(28,28,26,0.7) 0%, transparent 60%); }
        .hero-visual-badge { position: absolute; bottom: 2rem; left: 2rem; right: 2rem; background: rgba(0,0,0,0.95); padding: 1.5rem; backdrop-filter: blur(8px); }
        .badge-title { font-family: 'Cormorant Garamond', serif; font-size: 1.1rem; font-weight: 600; color: #c8aa6f; margin-bottom: 0.3rem; }
        .badge-sub { font-size: 0.75rem; color: #d4c9b0; letter-spacing: 0.05em; }
        .badge-icon { width: 10px; height: 10px; border-radius: 50%; background: var(--sage); display: inline-block; margin-right: 0.5rem; vertical-align: middle; }
        .about { padding: 8rem 6rem; display: grid; grid-template-columns: 1fr 1.2fr; gap: 6rem; align-items: center; background: #0d0d0d; }
        .section-label { font-size: 0.72rem; letter-spacing: 0.2em; text-transform: uppercase; color: var(--gold); margin-bottom: 1.2rem; display: flex; align-items: center; gap: 0.75rem; }
        .section-label::before { content: ''; display: block; width: 24px; height: 1px; background: var(--gold); }
        .section-title { font-family: 'Cormorant Garamond', serif; font-size: clamp(2rem, 3.5vw, 3rem); font-weight: 300; line-height: 1.2; color: #c8aa6f; margin-bottom: 1.5rem; }
        .section-title em { font-style: italic; color: var(--gold); }
        .section-body { font-size: 0.95rem; line-height: 1.9; color: #d4c9b0; }
        .about-features { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin-top: 3rem; }
        .feature-item { border-top: 1px solid var(--border); padding-top: 1.2rem; }
        .feature-num { font-family: 'Cormorant Garamond', serif; font-size: 1.8rem; color: var(--gold); font-weight: 300; }
        .feature-text { font-size: 0.8rem; color: #d4c9b0; margin-top: 0.3rem; line-height: 1.5; }
        .about-image { aspect-ratio: 4/5; background: var(--charcoal); position: relative; overflow: hidden; }
        .about-image img { width: 100%; height: 100%; object-fit: cover; filter: grayscale(20%); transition: transform 0.6s ease; }
        .about-image:hover img { transform: scale(1.03); }
        .about-image-accent { position: absolute; bottom: -1px; right: -1px; width: 60%; height: 40%; border: 3px solid var(--gold); pointer-events: none; }
        .services { background: var(--charcoal); padding: 8rem 6rem; }
        .services-header { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 4rem; }
        .services-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5px; background: rgba(181,146,76,0.15); }
        .service-card { background: var(--deep); padding: 2.5rem; transition: background 0.3s; }
        .service-card:hover { background: #323028; }
        .service-icon { width: 44px; height: 44px; border: 1px solid var(--border); display: flex; align-items: center; justify-content: center; margin-bottom: 1.5rem; color: var(--gold); font-size: 1.2rem; }
        .service-name { font-family: 'Cormorant Garamond', serif; font-size: 1.3rem; font-weight: 400; color: #f0e8d8; margin-bottom: 0.8rem; }
        .service-desc { font-size: 0.82rem; line-height: 1.7; color: #c8bfa8; }
        .membership { padding: 8rem 6rem; background: #111100; text-align: center; }
        .membership-inner { max-width: 700px; margin: 0 auto; }
        .membership-card { margin-top: 4rem; border: 1px solid var(--border); padding: 4rem; background: #0d0d0d; position: relative; }
        .membership-card::before { content: ''; position: absolute; top: 0; left: 50%; transform: translateX(-50%); width: 60px; height: 3px; background: var(--gold); }
        .membership-price { font-family: 'Cormorant Garamond', serif; font-size: 3.5rem; font-weight: 300; color: var(--charcoal); line-height: 1; margin-bottom: 0.5rem; }
        .membership-period { font-size: 0.8rem; color: #d4c9b0; letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 2.5rem; }
        .membership-perks { list-style: none; display: flex; flex-direction: column; gap: 0.9rem; margin-bottom: 3rem; text-align: left; }
        .membership-perks li { font-size: 0.88rem; color: #c8aa6f; display: flex; align-items: center; gap: 0.75rem; }
        .membership-perks li::before { content: '✦'; color: var(--gold); font-size: 0.6rem; flex-shrink: 0; }
        .contact { background: var(--charcoal); padding: 7rem 6rem; display: grid; grid-template-columns: 1fr 1fr; gap: 6rem; align-items: center; }
        .contact-details { margin-top: 2.5rem; display: flex; flex-direction: column; gap: 1.5rem; }
        .contact-item { display: flex; align-items: flex-start; gap: 1rem; padding-bottom: 1.5rem; border-bottom: 1px solid rgba(181,146,76,0.1); }
        .contact-item:last-child { border-bottom: none; }
        .contact-item-icon { width: 36px; height: 36px; flex-shrink: 0; border: 1px solid var(--border); display: flex; align-items: center; justify-content: center; color: var(--gold); font-size: 0.85rem; }
        .contact-item-label { font-size: 0.7rem; letter-spacing: 0.15em; text-transform: uppercase; color: var(--gold); margin-bottom: 0.3rem; }
        .contact-item-value { font-size: 0.9rem; color: #f0e8d8; }
        .contact-form { display: flex; flex-direction: column; gap: 1rem; }
        .contact-form input, .contact-form textarea { background: rgba(255,255,255,0.05); border: 1px solid rgba(181,146,76,0.2); color: #f0e8d8; padding: 1rem 1.2rem; font-family: 'DM Sans', sans-serif; font-size: 0.88rem; outline: none; transition: border-color 0.3s; resize: none; }
        .contact-form input::placeholder, .contact-form textarea::placeholder { color: rgba(247,243,237,0.3); }
        .contact-form input:focus, .contact-form textarea:focus { border-color: var(--gold); }
        .contact-form textarea { height: 120px; }
        footer { background: #000000; padding: 3rem 6rem; display: flex; justify-content: space-between; align-items: center; border-top: 1px solid rgba(181,146,76,0.1); }
        .footer-logo { font-family: 'Cormorant Garamond', serif; font-size: 1rem; color: #f0e8d8; letter-spacing: 0.08em; }
        .footer-logo span { color: var(--gold); }
        .footer-copy { font-size: 0.75rem; color: #a09880; }
        @media (max-width: 900px) {
          nav { padding: 1.2rem 2rem; }
          .nav-links { display: none; }
          .hero { grid-template-columns: 1fr; }
          .hero-left { padding: 8rem 2.5rem 4rem; }
          .hero-left::after { display: none; }
          .hero-right { display: none; }
          .about, .contact { grid-template-columns: 1fr; padding: 5rem 2.5rem; gap: 3rem; }
          .about-image { display: none; }
          .services { padding: 5rem 2.5rem; }
          .services-header { flex-direction: column; align-items: flex-start; gap: 1rem; }
          .services-grid { grid-template-columns: 1fr; }
          .membership { padding: 5rem 2.5rem; }
          .membership-card { padding: 2.5rem; }
          footer { flex-direction: column; gap: 1rem; text-align: center; padding: 2rem; }
        }
      `}</style>

      <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet"/>

      <nav>
        <a href="#" className="nav-logo"><img src="/GPC.png" alt="Goodlett Property Concierge" style={{height:"90px", width:"auto"}}/></a>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#membership">Membership</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <a href="#membership" className="nav-cta">Join Today</a>
      </nav>

      <section className="hero">
        <div className="hero-left">
          <div className="hero-eyebrow">Louisville, Kentucky</div>
          <h1 className="hero-title">Simplify<br/><em>Home Care.</em><br/>Protect Your<br/>Investment.</h1>
          <p className="hero-desc">For $95/month, we schedule and manage all included services, provide quarterly inspections, and deliver regular updates — so you can enjoy your home, not manage it.</p>
          <div className="hero-btns">
            <a href="#membership" className="btn-primary">Join Our Service</a>
            <a href="#services" className="btn-outline">Explore Services</a>
          </div>
          <div className="hero-stat">
            <div><div className="stat-num">$95</div><div className="stat-label">Per Month</div></div>
            <div><div className="stat-num">30+</div><div className="stat-label">Years Experience</div></div>
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-visual">
            <div className="hero-visual-bg"></div>
            <div className="hero-visual-overlay"></div>
            <div className="hero-visual-badge">
              <div className="badge-title">Concierge Home Care</div>
              <div className="badge-sub"><span className="badge-icon"></span>Active Members Enrolled</div>
            </div>
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <div>
          <div className="section-label">About Us</div>
          <h2 className="section-title">Built on <em>Trust,</em> Reliability & Results</h2>
          <p className="section-body">We aim to build lasting relationships with our clients founded on trust, reliability, and consistent performance. Whether it's routine maintenance or an emergency repair, you can depend on us for prompt, professional, and reliable solutions.</p>
          <div className="about-features">
            <div className="feature-item"><div className="feature-num">$95</div><div className="feature-text">Per month — all labor & materials included</div></div>
            <div className="feature-item"><div className="feature-num">4x</div><div className="feature-text">Quarterly home inspections — nothing overlooked</div></div>
            <div className="feature-item"><div className="feature-num">2x</div><div className="feature-text">Seasonal gutter cleaning — fall & spring</div></div>
            <div className="feature-item"><div className="feature-num">Free</div><div className="feature-text">Estimates on any additional repairs from licensed contractors</div></div>
          </div>
        </div>
        <div className="about-image">
          <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80" alt="Beautiful home exterior"/>
          <div className="about-image-accent"></div>
        </div>
      </section>

      <section className="services" id="services">
        <div className="services-header">
          <div>
            <div className="section-label" style={{color:'var(--gold)'}}>What We Do</div>
            <h2 className="section-title" style={{color:'var(--cream)'}}>Comprehensive<br/><em style={{color:'var(--gold-light)'}}>Property Care</em></h2>
          </div>
          <a href="https://goodlettpropertyconcierge.com/services-store" className="btn-primary" target="_blank">View All Services</a>
        </div>
        <div className="services-grid">
          {[
            {icon:'⌂', name:'Quarterly Home Inspections', desc:'Detailed quarterly inspections to catch issues early and keep your home in peak condition.'},
            {icon:'🔧', name:'Gutter Cleaning', desc:'Fall and spring gutter cleanings to protect your home from water damage year-round.'},
            {icon:'📋', name:'HVAC Filter Changes', desc:'Four-inch filters changed 2x annually, one-inch filters changed 4x annually.'},
            {icon:'🌿', name:'Exterior Pest Control', desc:'Three exterior pest control treatments annually to keep your property protected.'},
            {icon:'📞', name:'Smoke Alarm & Garage Door', desc:'Annual smoke alarm maintenance and garage door service included in every plan.'},
            {icon:'🏠', name:'Hose Spigot Covers', desc:'Installation each fall and removal each spring to prevent pipe damage in cold weather.'},
          ].map((s, i) => (
            <div className="service-card" key={i}>
              <div className="service-icon">{s.icon}</div>
              <div className="service-name">{s.name}</div>
              <div className="service-desc">{s.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="membership" id="membership">
        <div className="membership-inner">
          <div className="section-label" style={{justifyContent:'center'}}>Membership</div>
          <h2 className="section-title">One Membership.<br/><em>Total Peace of Mind.</em></h2>
          <p className="section-body">Join Goodlett Property Concierge and experience a new standard of home care — attentive, expert, and always there when you need us.</p>
          <div className="membership-card">
            <div className="membership-price"><span>$</span>95<span style={{fontSize:'1.2rem', verticalAlign:'middle'}}>/mo</span></div>
            <div className="membership-period">All labor & materials included</div>
            <ul className="membership-perks">
              {['Dedicated concierge for all your property needs','Regular scheduled home inspections','Priority access to trusted vendors and contractors','Preventive maintenance planning and execution','Seasonal home preparation services','30+ years of expertise working for you'].map((p,i) => <li key={i}>{p}</li>)}
            </ul>
            <a href="https://www.goodlettpropertyconcierge.com/services-store/p/goodlett-property-concierge-membership" className="btn-primary" target="_blank" style={{fontSize:'0.85rem',padding:'1.1rem 2.8rem'}}>Become a Member</a>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div>
          <div className="section-label" style={{color:'var(--gold)'}}>Get in Touch</div>
          <h2 className="section-title" style={{color:'var(--cream)'}}>Let&apos;s Talk About<br/><em style={{color:'var(--gold-light)'}}>Your Home</em></h2>
          <p className="section-body" style={{color:'rgba(247,243,237,0.5)'}}>Ready to simplify your home care? Reach out and we&apos;ll show you how Goodlett Property Concierge can protect your investment.</p>
          <div className="contact-details">
            <div className="contact-item">
              <div className="contact-item-icon">🌐</div>
              <div><div className="contact-item-label">Website</div><div className="contact-item-value">goodlettpropertyconcierge.com</div></div>
            </div>
            <div className="contact-item">
              <div className="contact-item-icon">📞</div>
              <div><div className="contact-item-label">Phone</div><div className="contact-item-value">502-345-9060</div></div>
            </div>
            <div className="contact-item">
              <div className="contact-item-icon">📍</div>
              <div><div className="contact-item-label">Address</div><div className="contact-item-value">2213 Arnold Palmer Blvd, Louisville, KY</div></div>
            </div>
          </div>
        </div>
        <form className="contact-form" onSubmit={(e) => { e.preventDefault(); const form = e.target as HTMLFormElement; fetch('https://formspree.io/f/mpqyalon', { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } }).then(r => { if (r.ok) { alert("Thank you! We will be in touch soon."); form.reset(); } else { alert("Oops! Something went wrong."); } }); }}>
          <input type="text" name="name" placeholder="Your Name" required/>
          <input type="email" name="email" placeholder="Email Address" required/>
          <input type="tel" name="phone" placeholder="Phone Number"/>
          <textarea name="message" placeholder="Tell us about your property..."></textarea>
          <button type="submit" className="btn-primary" style={{border:'none',cursor:'pointer',textAlign:'center'}}>Send Message</button>
        </form>
      </section>

      <footer>
        <div className="footer-logo"><img src="/GPC.png" alt="Goodlett Property Concierge" style={{height:"75px", width:"auto"}}/></div>
        <div className="footer-copy">© 2026 Goodlett Property Concierge. All rights reserved.</div>
      </footer>
    </>
  );
}
