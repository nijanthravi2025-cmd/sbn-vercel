import { Routes, Route } from 'react-router-dom';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import Home from './pages/Home';
import CheckMembership from './pages/CheckMembership';
import ContactUs from './pages/ContactUs';
import AboutJCI from './pages/AboutJCI';
import NationalPresidentMessage from './pages/NationalPresidentMessage';
import JCICreed from './pages/JCICreed';
import MajorEvents from './pages/MajorEvents';
import BenefitsForMembers from './pages/BenefitsForMembers';
import MembersLogin from './pages/MembersLogin';

export default function App() {
  return (
    <>
      <TopBar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-jci" element={<AboutJCI />} />
        <Route path="/president-message" element={<NationalPresidentMessage />} />
        <Route path="/jci-creed" element={<JCICreed />} />
        <Route path="/major-events" element={<MajorEvents />} />
        <Route path="/benefits-for-members" element={<BenefitsForMembers />} />
        <Route path="/check-membership" element={<CheckMembership />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/members-login" element={<MembersLogin />} />
      </Routes>
      <Footer />
      <FloatingButtons />
    </>
  );
}
