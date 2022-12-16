import React, { useEffect, useState } from 'react';
import Navbar from '../../../components/Public/Navbar/Navbar';
import HeroSection from '../../../components/Public/PublicDashboard/components/Banner/HeroSection';
import Cards from '../../../components/Public/PublicDashboard/components/Cards/Cards';

function HomePage() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const getUser = () => {
      fetch('http://localhost:3008/auth/login/success', {
        method: 'GET',
        credentials: 'include',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Credentials': true,
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error('authentication has been failed!');
        })
        .then((resObject) => {
          setUser(resObject.user);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);

  return (
    <>
      <Navbar user={user} />
      <HeroSection />
      <Cards />
    </>
  );
}

export default HomePage;
