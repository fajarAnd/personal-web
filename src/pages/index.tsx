import { Layout } from '@/components/layout';
import { HeroSection } from '@/components/home';

export default function Home() {
  return (
    <Layout title="Home">
      <HeroSection
        name="Fajar Fadillah"
        bio="A passionate creative professional dedicated to crafting exceptional digital experiences through photography, writing, investigative reporting, and programming."
        profileImage="/images/profile.jpg"
        showDownloadCV={true}
      />
    </Layout>
  );
}
