import Footer from '@/components/Footer';
import Header from '@/components/Header';

function AppLayout(props: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
}

export default AppLayout;
