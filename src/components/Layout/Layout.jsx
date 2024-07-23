// src/components/Layout.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-gray-800 text-white">
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-6">CRM Dashboard</h1>
          <nav>
            <ul>
              <li>
                <Link to="/" className="block py-2 px-4 hover:bg-gray-700">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/leads" className="block py-2 px-4 hover:bg-gray-700">
                  Leads
                </Link>
              </li>
              <li>
                <Link
                  to="/contacts"
                  className="block py-2 px-4 hover:bg-gray-700"
                >
                  Contacts
                </Link>
              </li>
              <li>
                <Link
                  to="/accounts"
                  className="block py-2 px-4 hover:bg-gray-700"
                >
                  Accounts
                </Link>
              </li>
              <li>
                <Link
                  to="/opportunities"
                  className="block py-2 px-4 hover:bg-gray-700"
                >
                  Opportunities
                </Link>
              </li>
              <li>
                <Link
                  to="/activities"
                  className="block py-2 px-4 hover:bg-gray-700"
                >
                  Activities
                </Link>
              </li>
              <li>
                <Link
                  to="/reports"
                  className="block py-2 px-4 hover:bg-gray-700"
                >
                  Reports
                </Link>
              </li>
              <li>
                <Link
                  to="/marketing"
                  className="block py-2 px-4 hover:bg-gray-700"
                >
                  Marketing
                </Link>
              </li>
              <li>
                <Link
                  to="/support"
                  className="block py-2 px-4 hover:bg-gray-700"
                >
                  Support
                </Link>
              </li>
              <li>
                <Link
                  to="/settings/users"
                  className="block py-2 px-4 hover:bg-gray-700"
                >
                  Settings
                </Link>
              </li>
              <li>
                <Link
                  to="/profile"
                  className="block py-2 px-4 hover:bg-gray-700"
                >
                  Profile
                </Link>
              </li>
              <li>
                <Link
                  to="/notifications"
                  className="block py-2 px-4 hover:bg-gray-700"
                >
                  Notifications
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
      <main className="flex-1 p-6 bg-gray-100 overflow-auto">{children}</main>
    </div>
  );
};

export default Layout;
