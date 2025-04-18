import { LineChart } from "../../components/LineChart/LineChart";
import Card from "../../components/Card/Card";
import { useAppDispatch, useAppSelector } from "../../hooks/store";
import { useEffect } from "react";
import { getTemperatureData } from "../../store/slices/temperatureData/temperatureData.service";

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
          {/* <LineChart
            className="h-56"
            data={data || []}
            index="hour"
            categories={["temperature",]}
            valueFormatter={(number: number) =>
              `${Intl.NumberFormat("us").format(number).toString()}°C`
            }
            yAxisWidth={30}
            startEndOnly
            connectNulls
            showLegend={false}
            showTooltip={true}
            xAxisLabel="24H Temperature"
          /> */}
        </div>
        <div className="bg-white p-8 rounded-2xl flex justify-center items-center"></div>
      </div>
      <div className="mt-8 bg-white p-8 rounded-2xl">
        <h4 className="text-lg font-bold text-[#173555] pb-3">
          Variedad de frutos
        </h4>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right">
            <thead className="text-xs uppercase bg-gray-50 text-[#173555]">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Fruto
                </th>
                <th scope="col" className="px-6 py-3">
                  Temperatura
                </th>
                <th scope="col" className="px-6 py-3">
                  Humedad
                </th>
                <th scope="col" className="px-6 py-3">
                  Aire
                </th>
                <th scope="col" className="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 text-[#486F99]">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium whitespace-nowrap dark:text-white"
                >
                  Apple MacBook Pro 17"
                </th>
                <td className="px-6 py-4">Silver</td>
                <td className="px-6 py-4">Laptop</td>
                <td className="px-6 py-4">$2999</td>
                <td className="px-6 py-4 flex justify-center">
                  <button className="bg-[#486F99] px-4 py-2 rounded-lg text-white font-semibold">
                    Seleccionar
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
