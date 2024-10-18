// src/components/Header.tsx
import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white bg-opacity-5 backdrop-blur-lg p-4 shadow-md z-50">
      <h1 className="text-2xl font-bold text-ligth">My Portfolio</h1>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="#skills" className="text-ligth hover:text-blue-500">Skills</a></li>
          <li><a href="#projects" className="text-ligth hover:text-blue-500">Projects</a></li>
          <li><a href="#contact" className="text-ligth hover:text-blue-500">Contact</a></li>
        </ul>
      </nav>
      <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-b from-white via-white opacity-0 to-transparent z-0"></div>
    </header>
  );
}
