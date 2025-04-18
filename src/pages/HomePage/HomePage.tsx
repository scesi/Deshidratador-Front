import { LineChart } from "../../components/LineChart/LineChart";
import Card from "../../components/Card/Card";
import { useAppDispatch, useAppSelector } from "../../hooks/store";
import { useEffect } from "react";
import { getTemperatureData } from "../../store/slices/temperatureData/temperatureData.service";
import FruitsTable from "../../components/FruitsTable/FruitsTable";

const HomePage = () => {
  const { data } = useAppSelector((state) => state.temperatureData);
  const dispatch = useAppDispatch();

  console.log("store", data);
  useEffect(() => {
    dispatch(getTemperatureData());
  }, []);
  return (
    <section>
      <h1 className="text-xl font-bold text-[#173555] pt-8 pb-6">
        Información General
      </h1>
      <div className="grid grid-cols-3 gap-5 pb-6">
        <Card title="Temperatura" value="25 °C" icon="./temperatureIcon.svg" />
        <Card title="Humedad" value="25 %" icon="./humidityIcon.svg" />
        <Card title="Aire" value="25 °C" icon="./airIcon.svg" />
      </div>
      <div className="grid grid-cols-2 gap-5">
        <div className="bg-white p-8 rounded-2xl flex justify-center">
          <LineChart
            className="h-56"
            data={data || []}
            index="hour"
            categories={["temperature",]}
            valueFormatter={(number: number) =>
              `${Intl.NumberFormat("us").format(number).toString()}°C`
            }
            yAxisWidth={30}
            // startEndOnly={true}
            connectNulls
            showLegend={false}
            showTooltip={false}
            xAxisLabel="24H Temperature"
          />
        </div>
        <div className="bg-white p-8 rounded-2xl flex justify-center items-center"></div>
      </div>
      <div className="mt-8 bg-white p-8 rounded-2xl">
        <h4 className="text-lg font-bold text-[#173555] pb-3">
          Variedad de frutos
        </h4>

        <FruitsTable/>
      </div>
    </section>
  );
};

export default HomePage;
