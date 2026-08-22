const projects = [
  { number:'01', label:'Finance · Risk', title:'Community Lending & Economic Access', text:'A synthetic 500-applicant lending portfolio that evaluates borrower risk and access patterns across income, debt, credit, collateral, employment, and loan terms.', tools:['Python','Risk modeling','Data analysis'], accent:'lime' },
  { number:'02', label:'Fraud analytics', title:'Public Financial Oversight System', text:'A rules-based anomaly detection system analyzing 1,000 synthetic transactions across amount, geography, channel, merchant, timing, and status.', tools:['Python','Pandas','Anomaly detection'], accent:'dark' },
  { number:'03', label:'Civic analytics', title:'San Antonio Civic Data Dashboard', text:'An interactive view of housing, transportation, and community indicators designed to make local trends clear to nontechnical audiences.', tools:['Dashboarding','Data visualization','Civic data'], accent:'sand' },
];

const posts = [
  { number:'01', category:'Compliance operations', read:'3 min read', image:'/blog/quality-at-scale.png', title:'What 600+ Tax Deliverables Taught Me About Quality at Scale', intro:'High-volume compliance work is not simply a test of speed. It is a test of whether a process can preserve judgment when deadlines multiply.', body:[
    'The pressure in a busy compliance cycle rarely arrives one task at a time. Source files land in different formats, dependencies move, review comments overlap, and every deliverable still needs to be traceable. Working through more than 600 deliverables reinforced that the fastest teams are not the teams that rush. They are the teams that reduce avoidable decisions before the work begins.',
    'That starts with a dependable operating rhythm: a consistent intake process, clear file naming, visible status ownership, repeatable tie-outs, and defined review checkpoints. Standardizing those elements does not remove judgment. It protects judgment by reserving attention for the exceptions—the unusual allocation, the missing support, the number that technically ties but does not make business sense.',
    'Quality also becomes stronger when it is observable. A reviewer should be able to see what changed, where the evidence came from, which assumptions were used, and what remains unresolved. This reduces rework and makes escalation more precise. Instead of saying that something “looks off,” the team can identify the exact break in the chain and resolve it.',
    'My main takeaway is that scale is a design problem. Good systems create speed, but thoughtful review creates confidence. The goal is not merely to finish a large volume of work; it is to build a process that produces the same care on the six-hundredth deliverable as it did on the first.'
  ] },
  { number:'02', category:'Financial controls', read:'3 min read', image:'/blog/documentation-control.png', title:'Why Clear Documentation Is a Financial Control', intro:'Documentation can look administrative, but it is one of the strongest controls in financial work.', body:[
    'A financial conclusion is only as durable as the path used to reach it. When that path lives in one person’s memory, even correct work becomes fragile. A well-built workpaper solves this by connecting the source, transformation, assumption, and conclusion in a way another person can retrace without a separate explanation.',
    'Clarity does not mean adding more pages. It means organizing the right evidence. Inputs should be labeled, formulas should be inspectable, assumptions should be explicit, and exceptions should be documented near the place they affect. This structure helps a reviewer focus on risk instead of spending time reconstructing the preparer’s intent.',
    'Documentation also improves handoffs. Teams change, priorities shift, and work may be revisited months later. A self-explanatory file preserves institutional knowledge and lowers the chance that an old assumption is mistaken for a current fact. It creates accountability without depending on who happens to be available.',
    'I think of documentation as part of the control itself—not a note added after the analysis. When a knowledgeable person can reproduce the reasoning and understand its limitations, the work becomes more auditable, more efficient to review, and more useful for the next decision.'
  ] },
  { number:'03', category:'Civic analytics', read:'3 min read', image:'/blog/civic-data.png', title:'Turning Civic Data Into Decisions People Can Use', intro:'Public data creates value only when people can understand what it means for their lives and communities.', body:[
    'Cities publish enormous amounts of information about housing, transportation, safety, and neighborhood conditions. The analytical challenge is not simply finding data. It is choosing the measures that answer a real question. A useful dashboard begins with the decision a resident or public leader needs to make, then works backward to the evidence that can support it.',
    'Context matters as much as the number. A rent increase means little without a time period, an inflation comparison, and some sense of how incomes moved. Transit access is more than a route count; frequency, reliability, and proximity shape whether a route is genuinely useful. Clear labels and thoughtful comparisons keep a visualization from implying more certainty than the data supports.',
    'Designing for a nontechnical audience is a valuable discipline. It forces the analyst to remove decorative complexity, explain limitations in plain language, and make the most important relationship visible first. The best chart is not always the most sophisticated one. It is the one that helps someone ask a better next question.',
    'Civic analytics works when it closes the distance between a dataset and a lived experience. The purpose is not to display everything a city knows. It is to reveal the patterns that help people understand tradeoffs, identify where resources may be needed, and participate in decisions with better information.'
  ] },
  { number:'04', category:'Risk & analytics', read:'3 min read', image:'/blog/risk-judgment.png', title:'Risk Analysis Needs Models—and Human Judgment', intro:'Models apply rules consistently at scale, but an alert is never the same thing as a conclusion.', body:[
    'A risk model is valuable because it can scan more information than a person can review manually. In a transaction portfolio, for example, rules can surface unusual amounts, timing, channels, geographies, or combinations of signals. That consistency makes the model an effective filter—but the filter is only the beginning of the analysis.',
    'Every alert sits inside a business context. A large transaction may be expected for one account and extraordinary for another. A pattern may reflect fraud, a data-quality issue, or a legitimate operational event. False positives consume investigative time, while false negatives carry their own cost. Thresholds therefore need to reflect both statistical behavior and the consequences of being wrong.',
    'Human judgment adds the context a model cannot fully encode. The analyst tests the quality of the underlying data, looks for corroborating evidence, challenges assumptions, and documents why an issue was escalated or closed. That documentation matters because a defensible decision should be understandable after the moment has passed.',
    'The strongest approach is a partnership: let models narrow the field and apply rules without fatigue, then let people investigate ambiguity and weigh consequences. This combination creates risk decisions that are more efficient than manual review alone and more credible than treating a score as an answer.'
  ] },
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
            <div className="blog-grid">{posts.map(post => <article className="blog-card" key={post.number}><img className="blog-image" src={post.image} alt="" /><div className="blog-content"><div className="blog-meta"><span>{post.category}</span><span>{post.read}</span></div><div className="blog-number">{post.number}</div><h3>{post.title}</h3><p className="blog-intro">{post.intro}</p><details><summary>Read article <span>＋</span></summary><div className="blog-body">{post.body.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div></details></div></article>)}</div>
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

