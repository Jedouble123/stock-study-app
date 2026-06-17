import './styles/global.css';
import GlossaryPage from './pages/GlossaryPage';

const NAV_ITEMS = [
  { id: 'glossary', label: '📖 용어사전' },
  { id: 'quiz',     label: '🧩 퀴즈',    soon: true },
  { id: 'chart',    label: '📊 차트 읽기', soon: true },
];

export default function App() {
  return (
    <div className="app">
      <header className="app-header">
        <div className="app-header__inner">
          <div className="app-logo">
            <span className="app-logo__icon">📈</span>
            <div>
              <h1 className="app-logo__title">주식 공부</h1>
              <p className="app-logo__sub">주식을 처음 만나는 사람들을 위해</p>
            </div>
          </div>
          <nav className="app-nav">
            {NAV_ITEMS.map((item) => (
              <span
                key={item.id}
                className={`nav-item ${item.id === 'glossary' ? 'nav-item--active' : ''} ${item.soon ? 'nav-item--soon' : ''}`}
              >
                {item.label}
                {item.soon && <span className="soon-badge">준비중</span>}
              </span>
            ))}
          </nav>
        </div>
      </header>

      <main className="app-main">
        <GlossaryPage />
      </main>
    </div>
  );
}
