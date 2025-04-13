import Card from "../../components/Card/Card";

const HomePage = () => {
  return (
    <section>
      <h1 className="text-xl font-bold text-[#173555] pt-8 pb-6">Informacion General</h1>
      <div className="grid grid-cols-3 gap-5">
        <Card title="Temperatura" value="25 °C" icon="./temperatureIcon.svg" />
        <Card title="Humedad" value="25 °C" icon="./humidityIcon.svg" />
        <Card title="Aire" value="25 °C" icon='./airIcon.svg' />
      </div>
    </section>
  );
};

export default HomePage;
