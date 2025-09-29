'use client';
// pages/index.tsx
import React from 'react';
import Head from 'next/head';
import GlobalStyle from '@/styles/GlobalStyles';
import StreamingList from '../components/StreamingList'; // 스트리밍 리스트 컴포넌트 import
import Button from '../components/Button'; // 버튼 컴포넌트 import
import Footer from '../components/Footer'; // 푸터 컴포넌트 import
import ChartDashboard from '@/components/ChartDashboard';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>AESPA Music Platform</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle />
      <div className="min-h-screen bg-pastelBlue flex flex-col items-center justify-center">
        <header className="bg-pastelPink w-full p-4 text-gray-800 text-center">
          <h1 className="text-4xl font-bold">AESPA Music Platform</h1>
        </header>
        <main className="flex-grow flex flex-col items-center justify-center">
          <h2 className="text-3xl font-semibold mb-4">최신 곡을 만나보세요!</h2>
          <StreamingList />
          <ChartDashboard />
          <Button variant="primary">더 알아보기</Button>
        </main>
        <Footer />
      </div>
    </>
  );
};


export default Home;