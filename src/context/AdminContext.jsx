import React, { createContext, useContext, useState, useEffect } from 'react';

const AdminContext = createContext();

const initialData = {
  heroSlides: [
    {
      id: 1,
      image: '/images/hero-bg.png',
      title: 'Transforming Passion<br />into Action',
      subtitle: 'Empower yourself. Impact your community. Shape the future.',
      cta: 'Explore our programs',
      link: '/major-events'
    },
    {
      id: 2,
      image: 'https://www.jciindia.in/assets/img/image3.jpg',
      title: 'One Year to Lead,<br />A Lifetime to Impact',
      subtitle: 'Step up, lead boldly, and leave a legacy',
      cta: 'Join Now',
      link: '/join-us'
    },
    {
      id: 3,
      image: 'https://www.jciindia.in/assets/img/image2.jpg',
      title: 'Developing Leaders<br />for a Changing World',
      subtitle: 'Join a global network of young leaders creating positive change',
      cta: 'Become A Member',
      link: '/join-us'
    }
  ],
  welcomeData: {
    title: 'Welcome to JCI India',
    description: 'We are a vibrant community of young leaders aged 18-40, active across 28 zones and 28 states in India. As part of a global network spanning 115 countries, JCI India empowers passionate individuals to become capable leaders in government, business, and civil society. Through projects, trainings, and events, we turn ideas into action and create sustainable change.',
    features: [
      'Started in the year 1949',
      'Present in 28 states and 4 union territories',
      'Divided into 28 zones'
    ],
    statsNumber: '115+',
    statsText: 'countries around the world',
    image: '/images/globe.png'
  },
  members: [
    { id: 1, name: "Aarav Sharma", location: "JCI Mumbai", joinDate: "2024-01-15", status: "Active" },
    { id: 2, name: "Priya Patel", location: "JCI Bangalore", joinDate: "2023-08-22", status: "Active" },
    { id: 3, name: "Rohan Desai", location: "JCI Delhi", joinDate: "2025-02-10", status: "Pending" }
  ],
  contactMessages: [
    { id: 1, name: "John Doe", email: "john@example.com", subject: "Membership Inquiry", message: "How do I join JCI?", date: "2026-06-18", read: false }
  ]
};

export function AdminProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [siteData, setSiteData] = useState(initialData);

  // Load from local storage on mount
  useEffect(() => {
    const authStatus = localStorage.getItem('jci_admin_auth');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }

    const savedData = localStorage.getItem('jci_site_data');
    if (savedData) {
      try {
        setSiteData(JSON.parse(savedData));
      } catch (e) {
        console.error("Failed to parse site data");
      }
    } else {
      localStorage.setItem('jci_site_data', JSON.stringify(initialData));
    }
  }, []);

  const login = (username, password) => {
    // Hardcoded simple credentials for the static demo
    if (username === 'admin' && password === 'admin123') {
      setIsAuthenticated(true);
      localStorage.setItem('jci_admin_auth', 'true');
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('jci_admin_auth');
  };

  const updateSiteData = (key, value) => {
    const newData = { ...siteData, [key]: value };
    setSiteData(newData);
    localStorage.setItem('jci_site_data', JSON.stringify(newData));
  };

  return (
    <AdminContext.Provider value={{ isAuthenticated, login, logout, siteData, updateSiteData }}>
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  return useContext(AdminContext);
}
