import About from "@/components/About/About";
import CallToAction from "@/components/CallToAction/CallToAction";
import Main from "@/components/Main/Main";
import Numbers from "@/components/Numbers/Numbers";
import WhyUsPage from "@/components/WyUs/WyUs";

export default function Home() {
  return (
    <div className=''>
      <Main />
      <Numbers />
      <About />
      <WhyUsPage />
      <CallToAction text="ПЕРЕЙДЕМ К НАШИМ ТАРИФАМ?" href="/tariffs" />
    </div>
  );
}
