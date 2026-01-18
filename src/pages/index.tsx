import { Layout } from '@/components/layout';

export default function Home() {
  return (
    <Layout title="Home">
      <div className="space-y-6">
        <h1 className="text-h1">Personal Web</h1>
        <p className="text-body mt-4">
          Welcome to Personal Web - Setup Complete!
        </p>
        <p className="text-body text-text-secondary">
          Core layout components (Sidebar, Header, Layout) are now working.
        </p>
      </div>
    </Layout>
  );
}
