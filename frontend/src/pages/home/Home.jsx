import React from 'react';
import Conversations from '../../components/sidebar/Conversations'; // Ensure the correct path
import MessageContainer from '../../components/messages/MessageContainer'; // Create this component
import SearchInput from '../../components/sidebar/SearchInput';
import Sidebar from '../../components/sidebar/Sidebar';

function Home() {
  return (
    <div className="flex h-screen bg-gray-200 p-4">
      <aside className="w-1/4 bg-gray-100 p-4 flex flex-col rounded-lg shadow-lg">
        <Sidebar />
      </aside>
      <main className="flex-1 bg-white p-4 flex flex-col rounded-lg shadow-lg ml-4">
        <MessageContainer />
      </main>
    </div>
  );
}

export default Home;
