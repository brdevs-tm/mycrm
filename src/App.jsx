// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import LeadsList from "./pages/Leads/LeadsList";
import LeadDetails from "./pages/Leads/LeadDetails";
import LeadCreation from "./pages/Leads/LeadCreation";
import ContactsList from "./pages/Contacts/ContactsList";
import ContactDetails from "./pages/Contacts/ContactDetails";
import ContactCreation from "./pages/Contacts/ContactCreation";
import AccountsList from "./pages/Accounts/AccountsList";
import AccountDetails from "./pages/Accounts/AccountDetails";
import AccountCreation from "./pages/Accounts/AccountCreation";
import OpportunitiesList from "./pages/Opportunities/OpportunitiesList";
import OpportunityDetails from "./pages/Opportunities/OpportunityDetails";
import OpportunityCreation from "./pages/Opportunities/OpportunityCreation";
import SystemSettings from "./pages/Settings/SystemSettings";
import ReportsList from "./pages/Reports/ReportsList";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/leads" element={<LeadsList />} />
        <Route path="/leads/:id" element={<LeadDetails />} />
        <Route path="/leads/new" element={<LeadCreation />} />
        <Route path="/contacts" element={<ContactsList />} />
        <Route path="/contacts/:id" element={<ContactDetails />} />
        <Route path="/contacts/new" element={<ContactCreation />} />
        <Route path="/accounts" element={<AccountsList />} />
        <Route path="/accounts/:id" element={<AccountDetails />} />
        <Route path="/accounts/new" element={<AccountCreation />} />
        <Route path="/opportunities" element={<OpportunitiesList />} />
        <Route path="/opportunities/:id" element={<OpportunityDetails />} />
        <Route path="/opportunities/new" element={<OpportunityCreation />} />
        <Route path="/settings" element={<SystemSettings />} />
        <Route path="/reports" element={<ReportsList />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
