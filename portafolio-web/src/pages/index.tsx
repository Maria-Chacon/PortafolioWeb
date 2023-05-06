import Head from 'next/head'
import { Inter } from 'next/font/google'

import Hero from '../../components/Hero';
import SectionAbout from '../../components/SectionAbout';
import NavBar from '../../components/NavBar';
import Projects from '../../components/Projects';
import Footer from '../../components/Footer';
import CallToAction from '../../components/CallToAction';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Portafolio María Chacón</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <NavBar />
      <Hero />
      <SectionAbout />
      <Projects />
      <CallToAction />
      <Footer />
      


      
    </>
  );
}