//importing all sections from the index.js in sections folder
import {
  HomeCards,
  WelcomeNote,
  CourseSearch,
  News,
  History,
  Research,
  Statistics,
  FrequentQuestions,
  Footer,
} from './sections';

import Nav from './components/Nav';


const App = () => (
  <main className="relative">
    <Nav />
    <section className="xl: padding-1 wide: padding-r padding-b">
      <HomeCards />
    </section>
    <section className="padding">
      <WelcomeNote />
    </section>
    <section className="padding">
      <CourseSearch />
    </section>
    <section className="padding-x py-10">
      <News />
    </section>
    <section className="padding">
      <History />
    </section>
    <section className="padding">
      <Research />
    </section>
    <section className="bg-yellow-300 padding">
      <Statistics />
    </section>
    <section className="bg-zinc-200 padding">
      <FrequentQuestions />
    </section>
    <section className="bg-zinc-600 padding-x padding-t pb-8">
      <Footer />
    </section>
  </main>
);

export default App;