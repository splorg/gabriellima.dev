import { Profile } from '@/components/profile'
import { AboutMe } from '@/components/about-me'
import { Work } from '@/components/work'
import { Projects } from '@/components/projects'

const Home = () => {
  return (
    <main className="mx-auto mb-8 py-4 px-8 max-w-5xl lg:flex lg:px-0">
      <Profile />
      <div>
        <AboutMe />
        <Work />
        <Projects />
      </div>
    </main>
  )
}

export default Home
