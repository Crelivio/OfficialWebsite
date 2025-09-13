import React from 'react';
import NavBar from '@/app/Components/NavBar';
import HeroSection from '@/app/Components/HeroSection';

export default function HomePage() {
  return (
    <main className='min-h-screen bg-striped-dark'>
      <NavBar />
      <HeroSection />
    </main>
  );
}