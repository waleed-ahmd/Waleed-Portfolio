import { ThemeProvider } from 'styled-components';
import { About } from './components/About/About';
import { Contact } from './components/Contact/Contact';
import { Experience } from './components/Experience/Experience';
import { Footer } from './components/Footer/Footer';
import { Hero } from './components/Hero/Hero';
import { Navbar } from './components/Navbar/Navbar';
import { Projects } from './components/Projects/Projects';
import { ScrollToTop } from './components/ScrollToTop/ScrollToTop';
import { Services } from './components/Services/Services';
import { Skills } from './components/Skills/Skills';
import { GlobalStyles } from './styles/GlobalStyles';
import { theme } from './styles/theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Navbar />
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Services />
      <Contact />
    </main>
    <Footer />
    <ScrollToTop />
  </ThemeProvider>
);

export default App;
