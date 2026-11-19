import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import LogoutButton from "@/components/logout-button";

const services = [
  {
    title: "Buy Gift Cards",
    description: "Explore available gift cards and make a purchase.",
    icon: "🛍️",
  },
  {
    title: "Sell Gift Cards",
    description: "Submit your gift cards and receive payment.",
    icon: "💳",
  },
  {
    title: "Exchange Gift Cards",
    description: "Exchange your gift cards with ease.",
    icon: "🔄",
  },
  {
    title: "Virtual Numbers",
    description: "Explore available virtual numbers.",
    icon: "📱",
  },
];

export default async function DashboardPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const displayName =
    user.user_metadata?.full_name ||
    user.email?.split("@")[0] ||
    "Customer";

  return (
    <main className="dashboard-page">
      <div className="dashboard-container">
        <header className="dashboard-header">
          <div>
            <p className="dashboard-label">CARD FLUX ACCOUNT</p>
            <h1>Welcome, {displayName}!</h1>
            <p className="dashboard-subtitle">
              Your digital exchange experience starts here.
            </p>
          </div>

          <div className="dashboard-actions">
            <div className="dashboard-avatar">
              {displayName.charAt(0).toUpperCase()}
            </div>
            <LogoutButton />
          </div>
        </header>

        <section className="dashboard-welcome">
          <div>
            <p className="dashboard-label">YOUR ACCOUNT</p>
            <h2>Everything you need, in one place.</h2>
            <p>
              Manage your gift cards and explore digital services
              from your personal dashboard.
            </p>
          </div>
        </section>

        <section className="dashboard-section">
          <h2>Our Services</h2>
          <p className="dashboard-subtitle">
            Choose a service to get started.
          </p>

          <div className="dashboard-grid">
            {services.map((service) => (
              <article
                className="dashboard-card"
                key={service.title}
              >
                <span className="dashboard-icon">
                  {service.icon}
                </span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <span className="dashboard-coming-soon">
                  Coming soon
                </span>
              </article>
            ))}
          </div>
        </section>

        <footer className="dashboard-footer">
          <p>Where Gift Cards Move.</p>
          <p>Signed in as {user.email}</p>
        </footer>
      </div>
    </main>
  );
}
