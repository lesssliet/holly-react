import { Hero } from '@/components/hero'
import { HeroIllustration } from '@/components/hero-illustration'
import { Layout } from '@/components/layout'

export default function HomePage() {
  return (
    <Layout>
      <Hero
        title="Health App"
        content="Sign up to get notified when the Health App launches."
        illustration={<HeroIllustration />}
      />
    </Layout>
  )
}
