import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home'
import SignUp from './components/signup';
import { UserProvider } from './components/user_context';
import ProtectedRoute from './components/protected_route';
import PostBlog from './components/post_blog';

function App() {
  return (
    <div>
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/submit" element={<ProtectedRoute><SignUp /></ProtectedRoute>} />
            <Route path="/post-blog" element={<PostBlog/>} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </div>
  );
}

export default App;
