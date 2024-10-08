"use client";
import HeaderBox from '@/components/HeaderBox';
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';

const DashBoard = () => {
  const loggedIn = { firstName: 'Noah', lastName: 'Pham', email: 'ptknguyen04@gmail.com'};

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
            <HeaderBox 
              type="greeting"
              title="Welcome"
              user={loggedIn?.firstName || 'Guest'}
              subtext="Access and manage your account and transactions efficiently."
            />

            <TotalBalanceBox
              accounts={[]}
              totalBanks={1}
              totalCurrentBalance={345.49}
            />
        </header>


        RECENT TRANSACTIONS
      </div>

      <RightSidebar 
        user = {loggedIn}
        transactions = {[]}
        banks = {[]}
      />
    </section>
  );
}

export default DashBoard;