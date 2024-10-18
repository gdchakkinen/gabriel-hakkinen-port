'use client'
// src/app/page.tsx
import ContactForm from '@/components/ContactForm';
import Header from '../components/Header';
import Skills from '../components/Skills';

export default function Home() {
  return (
    <div>
      <Header />
      <main className="p-4">
        <h1 className="text-3xl font-bold">Welcome to my Portfolio</h1>
        <br></br>
        <br></br>
        <br></br>
        {/*<Skills />*/}
        <ContactForm/>
      </main>
    </div>
  );
}
