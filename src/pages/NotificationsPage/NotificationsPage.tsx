import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/store";
import { getAllNotifications } from "../../store/slices/dailySensorsData/sensorsDailyData.service";

const NotificationsPage = () => {
  const dispatch = useAppDispatch();
  const { notifications } = useAppSelector((state) => state.sensorsDailyData);
  // const data = [
  //   { fecha: '17/04/2025 10:00', tipo: 'Alerta', descripcion: 'Temperatura supera 40°C%', estado: 'Pendiente' },
  //   { fecha: '17/04/2025 10:10', tipo: 'Informacion', descripcion: 'Datos recibidos correctamente', estado: 'Atendido' },
  // ];
  useEffect(() => {
    dispatch(getAllNotifications());
  }, []);
  return (
    <div>
      <h2 className="text-xl font-bold text-[#173555] pt-8 pb-6">
        Notificaciones
      </h2>
      <div className="bg-white p-6 rounded-xl">
        <div className="rounded-xl overflow-hidden border border-[#173555]">
          <table className="min-w-full table-auto border-collapse text-center">
            <thead className="bg-[#C4D2E7] text-[#173555]">
              <tr>
                <th className="py-2 px-4 border-b border-r border-[#173555]">
                  Fecha/Hora
                </th>
                <th className="py-2 px-4 border-b border-r border-[#173555]">
                  Tipo
                </th>
                <th className="py-2 px-4 border-b border-r border-[#173555]">
                  Descripción
                </th>
                <th className="py-2 px-4 border-b border-[#173555]">Estado</th>
              </tr>
            </thead>
            <tbody>
              {notifications.map((row, index) => {
                const isLast = index === notifications.length - 1;
                const borderBottom = isLast ? "" : "border-b";

                return (
                  <tr key={index} className="hover:bg-gray-50">
                    <td
                      className={`py-2 px-4 border-r border-[#173555] text-center ${borderBottom}`}
                    >
                      {row.createdAt}
                    </td>
                    <td
                      className={`py-2 px-4 border-r border-[#173555] text-center ${borderBottom}`}
                    >
                      {row.type}
                    </td>
                    <td
                      className={`py-2 px-4 border-r border-[#173555] text-left ${borderBottom}`}
                    >
                      {row.detail}
                    </td>
                    <td
                      className={`py-2 px-4 border-[#173555] text-center ${borderBottom}`}
                    >
                      {row.state}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default NotificationsPage;
