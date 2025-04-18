import { LineChart } from "../../components/LineChart/LineChart";
import { DonutChart } from "../../components/AreaChart/AreaChart";
import Card from "../../components/Card/Card";
import { useAppDispatch, useAppSelector } from "../../hooks/store";
import { useEffect } from "react";
import { getAllData } from "../../store/slices/sensorsData";


const chartdata = [
  {
    date: "Jan 23",
    SolarPanels: 2890,
    Inverters: 2338,
  },
  {
    date: "Feb 23",
    SolarPanels: 2756,
    Inverters: 2103,
  },
  {
    date: "Mar 23",
    SolarPanels: 3322,
    Inverters: 2194,
  },
  {
    date: "Apr 23",
    SolarPanels: 3470,
    Inverters: 2108,
  },
  {
    date: "May 23",
    SolarPanels: 3475,
    Inverters: 1812,
  },
  {
    date: "Jun 23",
    SolarPanels: 3129,
    Inverters: 1726,
  },
  {
    date: "Jul 23",
    SolarPanels: 3490,
    Inverters: 1982,
  },
  {
    date: "Aug 23",
    SolarPanels: 2903,
    Inverters: 2012,
  },
  {
    date: "Sep 23",
    SolarPanels: 2643,
    Inverters: 2342,
  },
  {
    date: "Oct 23",
    SolarPanels: 2837,
    Inverters: 2473,
  },
  {
    date: "Nov 23",
    SolarPanels: 2954,
    Inverters: 3848,
  },
  {
    date: "Dec 23",
    SolarPanels: 3239,
    Inverters: 3736,
  },
];
const HomePage = () => {
  const {data} = useAppSelector(state => state.sensorsData)
  const dispatch = useAppDispatch()

  console.log('store', data)
  useEffect(() => {
    dispatch(getAllData())
  }, [])
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
        <div className="bg-white p-8 rounded-2xl flex justify-center">
          <LineChart
            className="h-80"
            data={data}
            index="date"
            categories={["temperature", "humidity"]}
            valueFormatter={(number: number) =>
              `${Intl.NumberFormat("us").format(number).toString()}`
            }
            onValueChange={(v) => console.log(v)}
          />
        </div>
        <div className="bg-white p-8 rounded-2xl flex justify-center items-center">
        </div>
      </div>
    </section>
  );
};

export default HomePage;
