const projects = [
  { number:'01', label:'Finance · Risk', title:'Community Lending & Economic Access', text:'A synthetic 500-applicant lending portfolio that evaluates borrower risk and access patterns across income, debt, credit, collateral, employment, and loan terms.', tools:['Python','Risk modeling','Data analysis'], accent:'lime' },
  { number:'02', label:'Fraud analytics', title:'Public Financial Oversight System', text:'A rules-based anomaly detection system analyzing 1,000 synthetic transactions across amount, geography, channel, merchant, timing, and status.', tools:['Python','Pandas','Anomaly detection'], accent:'dark' },
  { number:'03', label:'Civic analytics', title:'San Antonio Civic Data Dashboard', text:'An interactive view of housing, transportation, and community indicators designed to make local trends clear to nontechnical audiences.', tools:['Dashboarding','Data visualization','Civic data'], accent:'sand' },
];

const posts = [
  { number:'01', category:'Compliance operations', read:'4 min read', title:'What 600+ Tax Deliverables Taught Me About Quality at Scale', text:'High-volume compliance work is not simply a test of speed. It is a test of whether a process can preserve judgment when deadlines multiply. The most reliable approach is to standardize the repeatable parts—intake, naming, tie-outs, review notes, and status tracking—so attention stays available for exceptions. Clear checkpoints also make quality visible: what is complete, what needs support, and what could create downstream risk. The lesson I carry forward is simple: scale comes from disciplined systems, but confidence still comes from thoughtful review.' },
  { number:'02', category:'Financial controls', read:'3 min read', title:'Why Clear Documentation Is a Financial Control', text:'Documentation can look like an administrative task, but it is one of the strongest controls in financial work. A well-built workpaper explains the source, logic, assumptions, and conclusion without relying on the preparer’s memory. That clarity shortens reviews, makes handoffs safer, and helps teams identify inconsistencies early. Good documentation is not more writing; it is the right evidence in the right place. When another person can retrace the reasoning and reach the same conclusion, the work becomes more durable, auditable, and useful.' },
  { number:'03', category:'Civic analytics', read:'4 min read', title:'Turning Civic Data Into Decisions People Can Use', text:'Public data creates value only when people can understand what it means for their lives. A useful civic dashboard begins with a decision—not a chart—and then selects the housing, transportation, or community measures that illuminate it. Context matters as much as the number: trends need time frames, comparisons, plain-language labels, and honest limits. Designing for nontechnical audiences forces better analytical discipline. It shifts the goal from displaying everything available to revealing the few relationships that help residents and leaders ask better questions.' },
  { number:'04', category:'Risk & analytics', read:'3 min read', title:'Risk Analysis Needs Models—and Human Judgment', text:'Models are valuable because they apply rules consistently across large volumes of information. They can surface unusual transactions, lending patterns, or operational signals that deserve attention. But an alert is not a conclusion. Data quality, business context, false positives, and the cost of a missed issue all shape the right response. Strong risk analysis combines reproducible methods with documented human judgment: let the model narrow the field, then investigate with context. That partnership produces decisions that are both more efficient and more defensible.' },
];

const roles = [
  { date:'Mar 2026 — Present', role:'Associate Analyst', company:'EY · Global Compliance & Reporting', place:'San Antonio, TX · Hybrid', summary:'Prepare partnership tax workpapers and support federal, state, and local filings in a structured, quality-controlled environment.', points:['Completed 600+ compliance deliverables within three months.','Review financial and tax data for completeness, consistency, and accuracy.','Manage multiple deadlines while protecting confidential client information.'] },
  { date:'Jul 2025 — Nov 2025', role:'Teacher', company:'IDEA Public Schools', place:'San Antonio, TX', summary:'Used data, clear communication, and disciplined planning to help diverse learners make measurable progress.', points:['Built Excel-based student performance trackers.','Translated quantitative concepts for varied audiences.'] },
  { date:'Feb 2024 — May 2025', role:'Public Safety Dispatcher', company:'Securitas Security Services USA', place:'Boston, MA', summary:'Managed time-sensitive operational information with precision, discretion, and calm judgment.', points:['Monitored access-control, alarm, radio, and CCTV systems.','Maintained confidential logs and accurate incident records.'] },
];

export default function Home() {
  return (
    <main>
      <a className="skip-link" href="#content">Skip to content</a>
      <nav className="nav shell" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Prajit Giri, home"><span className="brand-mark">PG</span><span>Prajit Giri</span></a>
        <div className="nav-links"><a href="#about">About</a><a href="#experience">Experience</a><a href="#projects">Projects</a><a href="#blog">Blog</a><a href="#credentials">Credentials</a><a className="nav-contact" href="mailto:prajitgiri10@gmail.com">Let&apos;s talk</a></div>
      </nav>

      <div id="content">
        <section className="hero shell" id="top">
          <div className="hero-copy">
            <p className="kicker"><span /> Finance · Compliance · Analytics</p>
            <h1>Clear thinking for <em>complex</em> financial work.</h1>
            <p className="hero-intro">I&apos;m Prajit Giri, an Associate Analyst at EY who turns dense financial data, compliance requirements, and operational detail into accurate, useful decisions.</p>
            <div className="hero-actions"><a className="button button-primary" href="#projects">Explore my work <span aria-hidden="true">↗</span></a><a className="button button-quiet" href="#blog">Read the blog <span aria-hidden="true">↓</span></a></div>
          </div>
          <aside className="profile-card" aria-label="Professional highlights">
            <div className="profile-topline"><span>Currently</span><span className="status">Available to connect</span></div>
            <div className="monogram" aria-hidden="true">PG</div>
            <div><p className="profile-role">Associate Analyst</p><h2>EY Global Compliance<br />&amp; Reporting</h2></div>
            <dl className="quick-facts"><div><dt>Deliverables</dt><dd>600+</dd></div><div><dt>Education</dt><dd>Summa Cum Laude</dd></div><div><dt>Based in</dt><dd>San Antonio, TX</dd></div></dl>
          </aside>
        </section>

        <section className="signal-strip" aria-label="Specialties"><div className="shell signal-inner"><span>Partnership tax</span><i /><span>Financial analysis</span><i /><span>Data visualization</span><i /><span>Risk &amp; compliance</span></div></section>

        <section className="about shell section" id="about">
          <p className="section-index">01 / Profile</p>
          <div className="about-copy"><h2>Analytical precision.<br /><em>Human perspective.</em></h2><p>My work sits where finance, technology, and public service meet. I bring a rigorous, detail-first approach to tax compliance and financial analysis, shaped by experience in education and public safety.</p><p>I&apos;m especially interested in roles where good analysis must become a clear decision: consulting, risk, compliance, financial strategy, and mission-driven public work.</p></div>
          <div className="capability-list" aria-label="Core capabilities"><span>Excel workpapers</span><span>Financial modeling</span><span>Python &amp; SQL</span><span>Tableau &amp; Power BI</span><span>Quality control</span><span>Stakeholder communication</span></div>
        </section>

        <section className="experience section" id="experience">
          <div className="shell"><div className="section-head"><p className="section-index">02 / Experience</p><h2>Work that rewards<br />accuracy and judgment.</h2></div>
            <div className="timeline">{roles.map((item, i) => <article className="role" key={item.role}><p className="role-number">0{i+1}</p><p className="role-date">{item.date}</p><div className="role-main"><h3>{item.role}</h3><p className="company">{item.company}</p><p className="place">{item.place}</p></div><div className="role-detail"><p>{item.summary}</p><ul>{item.points.map(point => <li key={point}>{point}</li>)}</ul></div></article>)}</div>
          </div>
        </section>

        <section className="projects section shell" id="projects">
          <div className="section-head projects-head"><div><p className="section-index">03 / Selected work</p><h2>Analysis built to<br /><em>be understood.</em></h2></div><p>Practical projects connecting finance, risk, data, and public outcomes.</p></div>
          <div className="project-grid">{projects.map(project => <article className={`project-card ${project.accent}`} key={project.number}><div className="project-meta"><span>{project.label}</span><span>{project.number}</span></div><div className="project-visual" aria-hidden="true"><span /><i /><b /></div><h3>{project.title}</h3><p>{project.text}</p><div className="project-tools">{project.tools.map(tool => <span key={tool}>{tool}</span>)}</div></article>)}</div>
        </section>

        <section className="blog section" id="blog">
          <div className="shell"><div className="section-head blog-head"><p className="section-index">04 / Perspectives</p><div><h2>Notes on work that<br /><em>has to hold up.</em></h2><p>Practical thinking on compliance, financial controls, risk, and making complex information useful.</p></div></div>
            <div className="blog-grid">{posts.map(post => <article className="blog-card" key={post.number}><div className="blog-meta"><span>{post.category}</span><span>{post.read}</span></div><div className="blog-number">{post.number}</div><h3>{post.title}</h3><p>{post.text}</p></article>)}</div>
          </div>
        </section>

        <section className="credentials section" id="credentials">
          <div className="shell credentials-grid"><div><p className="section-index">05 / Credentials</p><h2>Built on a strong academic foundation.</h2><div className="degree"><span>May 2025</span><h3>B.S. in Management</h3><p>Finance Concentration · Fisher College</p><strong>3.86 GPA · Summa Cum Laude · Dean&apos;s List</strong></div></div>
            <div className="certs"><h3>Selected certifications</h3><ul><li><span>Google Advanced Data Analytics</span><b>2025</b></li><li><span>Excel for Business · Macquarie University</span><b>2025</b></li><li><span>Financial Statement Analysis · Intuit</span><b>2025</b></li><li><span>Bookkeeping Essentials · Intuit</span><b>2025</b></li><li><span>Public Finance &amp; Economic Policy · Bard College</span><b>2024</b></li><li><span>Python for Data Science · IBM</span><b>2023</b></li></ul></div>
          </div>
        </section>

        <section className="contact section shell"><p className="section-index">06 / Contact</p><h2>Let&apos;s make complex work <em>clearer.</em></h2><p>Open to thoughtful conversations about finance, analytics, consulting, compliance, and public-service opportunities.</p><div className="contact-row"><a className="button contact-button" href="mailto:prajitgiri10@gmail.com">prajitgiri10@gmail.com <span>↗</span></a><span>San Antonio, Texas</span></div></section>
      </div>

      <footer><div className="shell"><a className="brand" href="#top"><span className="brand-mark">PG</span><span>Prajit Giri</span></a><p>Finance · Compliance · Analytics</p><p>© 2026 Prajit Giri</p></div></footer>
    </main>
  );
}

