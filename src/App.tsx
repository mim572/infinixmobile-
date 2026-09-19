const stats = [
  { label: 'Daily ROI', value: '7%' },
  { label: 'Minimum Entry', value: 'UGX 5,000' },
  { label: 'Withdrawals', value: 'Anytime' },
  { label: 'Bonus', value: 'UGX 7,000' },
];

const features = [
  'Secure and transparent investment plans',
  'Fast mobile money withdrawals',
  'Clear earnings dashboard with daily updates',
  'Trusted by Ugandan investors seeking passive income',
];

export default function App() {
  return (
    <main className="page-shell">
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Samsung Earnings</p>
          <h1>Grow your money with Uganda’s most trusted investment platform.</h1>
          <p className="subtitle">
            Start with a small deposit, earn daily returns, and withdraw anytime through MTN or Airtel Mobile Money.
          </p>

          <div className="cta-row">
            <button className="primary">Get Started</button>
            <button className="secondary">Learn More</button>
          </div>

          <div className="stat-grid">
            {stats.map((item) => (
              <div className="stat-card" key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-panel">
          <div className="panel-card">
            <div className="panel-header">
              <span className="dot green" />
              <span className="dot yellow" />
              <span className="dot red" />
            </div>

            <div className="balance-box">
              <label>Available Balance</label>
              <h2>UGX 1,245,600</h2>
            </div>

            <div className="mini-list">
              <div>
                <span>Today’s earning</span>
                <strong>UGX 18,400</strong>
              </div>
              <div>
                <span>Profit rate</span>
                <strong>7.0%</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="section-heading">
          <p className="eyebrow">Why investors choose us</p>
          <h3>Simple, secure, and rewarding.</h3>
        </div>

        <div className="feature-list">
          {features.map((feature) => (
            <div className="feature-item" key={feature}>
              <span className="check">✓</span>
              <p>{feature}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
