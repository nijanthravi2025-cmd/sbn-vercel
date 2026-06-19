import Hero from '../components/Hero';
import Welcome from '../components/Welcome';
import Statistics from '../components/Statistics';
import PresidentMessage from '../components/PresidentMessage';
import UnlockPotential from '../components/UnlockPotential';
import WhyJoinUs from '../components/WhyJoinUs';
import ReadyToJoin from '../components/ReadyToJoin';
import Headquarters from '../components/Headquarters';

export default function Home() {
  return (
    <>
      <Hero />
      <Welcome />
      <Statistics />
      <PresidentMessage />
      <UnlockPotential />
      <WhyJoinUs />
      <ReadyToJoin />
      <Headquarters />
    </>
  );
}
