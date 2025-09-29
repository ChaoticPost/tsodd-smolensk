import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout';
import { Home } from './pages/Home';
import { VacanciesPage } from './pages/Vacancies';
import { NewsPage } from './pages/News';
import { DocumentsPage } from './pages/Documents';
import { AboutPage } from './pages/About';
import { HistoryPage } from './pages/About/History';
import { ActivitiesPage } from './pages/Activities';
import { ContactsPage } from './pages/Contacts';
import { AntiCorruptionPage } from './pages/AntiCorruption';
import { ServicesPage } from './pages/Services';
import { Announcements } from './pages/Announcements';
import { Media } from './pages/Media';
import { MediaContacts } from './pages/MediaContacts';
import { Traffic } from './pages/Activities/Traffic';
import { Monitoring } from './pages/Activities/Monitoring';
import { Analytics } from './pages/Activities/Analytics';
import { Projects } from './pages/Activities/Projects';
import { Cameras } from './pages/Services/Cameras';
import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />

          {/* О центре */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/about/history" element={<HistoryPage />} />
          <Route path="/about/structure" element={<div>Структура (в разработке)</div>} />
          <Route path="/about/leadership" element={<div>Руководство (в разработке)</div>} />
          <Route path="/about/documents" element={<DocumentsPage />} />

          {/* Деятельность */}
          <Route path="/activities" element={<ActivitiesPage />} />
          <Route path="/activities/traffic" element={<Traffic />} />
          <Route path="/activities/monitoring" element={<Monitoring />} />
          <Route path="/activities/analytics" element={<Analytics />} />
          <Route path="/activities/projects" element={<Projects />} />

          {/* Сервисы */}
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/cameras" element={<Cameras />} />
          <Route path="/services/traffic-lights" element={<div>Светофоры (в разработке)</div>} />
          <Route path="/services/roads" element={<div>Дороги (в разработке)</div>} />
          <Route path="/services/transport" element={<div>Транспорт (в разработке)</div>} />

          {/* Пресс-центр */}
          <Route path="/press" element={<div>Пресс-центр (в разработке)</div>} />
          <Route path="/press/news" element={<NewsPage />} />
          <Route path="/press/announcements" element={<Announcements />} />
          <Route path="/press/media" element={<Media />} />
          <Route path="/press/contacts" element={<MediaContacts />} />

          {/* Вакансии и контакты */}
          <Route path="/vacancies" element={<VacanciesPage />} />
          <Route path="/contacts" element={<ContactsPage />} />

          {/* Противодействие коррупции */}
          <Route path="/anti-corruption" element={<AntiCorruptionPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;