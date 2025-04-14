import { DonutChart } from "../../components/AreaChart/AreaChart";
import Card from "../../components/Card/Card";

const data = [
  {
    name: "SolarCells",
    amount: 4890,
  },
  {
    name: "Glass",
    amount: 2103,
  },
  {
    name: "JunctionBox",
    amount: 2050,
  },
  {
    name: "Adhesive",
    amount: 1300,
  },
  {
    name: "BackSheet",
    amount: 1100,
  },
  {
    name: "Frame",
    amount: 700,
  },
  {
    name: "Encapsulant",
    amount: 200,
  },
  {
    name: "otro",
    amount: 200,
  },
];

const HomePage = () => {
  return (
    <section>
      <h1 className="text-xl font-bold text-[#173555] pt-8 pb-6">
        Información General
      </h1>
      <div className="grid grid-cols-3 gap-5 pb-6">
        <Card title="Temperatura" value="25 °C" icon="./temperatureIcon.svg" />
        <Card title="Humedad" value="25 °C" icon="./humidityIcon.svg" />
        <Card title="Aire" value="25 °C" icon="./airIcon.svg" />
      </div>
      <div className="grid grid-cols-2 gap-5">
        <div className="bg-white p-8 rounded-2xl flex justify-center"></div>
        <div className="bg-white p-8 rounded-2xl flex justify-center">
          <DonutChart
            data={data}
            variant="donut"
            category="name"
            value="amount"
            colors={["navy", "primary", "accent", "darkgray", "lightblue"]}
            valueFormatter={(number: number) =>
              `$${Intl.NumberFormat("us").format(number).toString()}`
            }
          />
        </div>
      </div>
    </section>
  );
};

export default HomePage;
