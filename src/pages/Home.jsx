import Header from "../components/header";
import ScholarshipCard from "../components/scholarshipCard";
import InternshipCard from "../components/internshipCard";
import Footer from "../components/footer";
import scholarships from "../data/scholarship";
import internships from "../data/internships";
import "../styles/home.css";

function Home() {
  return (
    <>
      <Header />

      <main>
        <section className="hero">
          <div className="hero-content">
            <span className="eyebrow">YOUR NEXT CHAPTER STARTS HERE</span>
            <h1>
              Make your ambition
              <br />
              <span>possible.</span>
            </h1>
            <p>
              Find scholarships and internships that bring your education goals within reach.
              Explore opportunities and take the next step toward your future.
            </p>
            <a className="button button-primary" href="#scholarships">
              Explore opportunities <span aria-hidden="true">→</span>
            </a>
            <a className="button button-secondary" href="#internships">
              Explore internships <span aria-hidden="true">→</span>
            </a>
            <div className="hero-note">
              <span className="hero-note-mark" aria-hidden="true">✓</span>
              <span>Opportunities to help you move forward</span>
            </div>
          </div>
          <div className="hero-art" aria-hidden="true">
            <div className="hero-art-orbit" />
            <div className="hero-art-card">
              <span className="hero-art-icon">✦</span>
              <span className="hero-art-label">YOUR POTENTIAL</span>
              <strong>Has no limits.</strong>
              <div className="hero-art-line" />
              <div className="hero-art-line hero-art-line-short" />
            </div>
            <span className="hero-art-spark hero-art-spark-one">✦</span>
            <span className="hero-art-spark hero-art-spark-two">✳</span>
          </div>
        </section>

        <section className="opportunities-section" id="scholarships">
          <div className="section-heading">
            <div>
              <span className="eyebrow">HANDPICKED FOR YOU</span>
              <h2>Featured scholarships</h2>
              <p>Start exploring opportunities designed to support your journey.</p>
            </div>
            <span className="opportunity-count">
              {scholarships.length} opportunities
            </span>
          </div>

          <div className="opportunity-list">
            {scholarships.map((item) => (
              <ScholarshipCard
                key={item.id}
                scholarship={item}
              />
            ))}
          </div>
        </section>

        <section className="opportunities-section internships-section" id="internships">
          <div className="section-heading">
            <div>
              <span className="eyebrow">BUILD EXPERIENCE, ONE STEP AT A TIME</span>
              <h2>Featured internships</h2>
              <p>Discover opportunities to learn, contribute, and grow your career.</p>
            </div>
            <span className="opportunity-count">
              {internships.length} opportunities
            </span>
          </div>

          <div className="opportunity-list">
            {internships.map((item) => (
              <InternshipCard key={item.id} internship={item} />
            ))}
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="about-mark" aria-hidden="true">✦</div>
          <div>
            <span className="eyebrow">A LITTLE SUPPORT GOES A LONG WAY</span>
            <h2>Your future deserves a chance.</h2>
            <p>
              Scholarship and internship Portal helps students discover scholarship and internship opportunities
              so they can focus on what matters: learning, growing, and reaching
              their goals.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Home;