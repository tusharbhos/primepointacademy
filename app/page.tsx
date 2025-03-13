import Banner from './components/Banner/Banner';
import Companies from './components/Companies/Companies';
import Tabs from './components/Courses/Courses';
import Mentor from './components/Mentor/Mentor';
import Students from './components/Students/Students';
import Newsletter from './components/Newsletter/Newsletter';
import Aboutus from './components/Aboutus';
import Courses from './components/Courses/Courses';
import Contact from './components/contact'

export default function Home() {
  return (
    <main>
      <Banner />
      <Companies />
      <Tabs />
      <Mentor />
      <Students />
      <Newsletter />
      <Aboutus />
      <Courses />
      <Contact />
    </main>
  )
}
