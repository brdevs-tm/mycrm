// src/routes.js
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
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
import ActivityCalendar from "./pages/Activities/ActivityCalendar";
import ActivityList from "./pages/Activities/ActivityList";
import ActivityCreation from "./pages/Activities/ActivityCreation";
import ReportsList from "./pages/Reports/ReportsList";
import ReportCreation from "./pages/Reports/ReportCreation";
import ReportView from "./pages/Reports/ReportView";
import CampaignsList from "./pages/Marketing/CampaignsList";
import CampaignDetails from "./pages/Marketing/CampaignDetails";
import CampaignCreation from "./pages/Marketing/CampaignCreation";
import TicketsList from "./pages/Support/TicketsList";
import TicketDetails from "./pages/Support/TicketDetails";
import TicketCreation from "./pages/Support/TicketCreation";
import UserManagement from "./pages/Settings/UserManagement";
import SystemSettings from "./pages/Settings/SystemSettings";
import Customization from "./pages/Settings/Customization";
import UserProfile from "./pages/Profile/UserProfile";
import Preferences from "./pages/Profile/Preferences";
import Notifications from "./pages/Notifications";

const Routes = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/leads" exact component={LeadsList} />
          <Route path="/leads/:id" exact component={LeadDetails} />
          <Route path="/leads/new" exact component={LeadCreation} />
          <Route path="/contacts" exact component={ContactsList} />
          <Route path="/contacts/:id" exact component={ContactDetails} />
          <Route path="/contacts/new" exact component={ContactCreation} />
          <Route path="/accounts" exact component={AccountsList} />
          <Route path="/accounts/:id" exact component={AccountDetails} />
          <Route path="/accounts/new" exact component={AccountCreation} />
          <Route path="/opportunities" exact component={OpportunitiesList} />
          <Route
            path="/opportunities/:id"
            exact
            component={OpportunityDetails}
          />
          <Route
            path="/opportunities/new"
            exact
            component={OpportunityCreation}
          />
          <Route path="/activities" exact component={ActivityCalendar} />
          <Route path="/activities/list" exact component={ActivityList} />
          <Route path="/activities/new" exact component={ActivityCreation} />
          <Route path="/reports" exact component={ReportsList} />
          <Route path="/reports/new" exact component={ReportCreation} />
          <Route path="/reports/:id" exact component={ReportView} />
          <Route path="/marketing" exact component={CampaignsList} />
          <Route path="/marketing/:id" exact component={CampaignDetails} />
          <Route path="/marketing/new" exact component={CampaignCreation} />
          <Route path="/support" exact component={TicketsList} />
          <Route path="/support/:id" exact component={TicketDetails} />
          <Route path="/support/new" exact component={TicketCreation} />
          <Route path="/settings/users" exact component={UserManagement} />
          <Route path="/settings/system" exact component={SystemSettings} />
          <Route
            path="/settings/customization"
            exact
            component={Customization}
          />
          <Route path="/profile" exact component={UserProfile} />
          <Route path="/profile/preferences" exact component={Preferences} />
          <Route path="/notifications" exact component={Notifications} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default Routes;
