import html2pdf from 'html2pdf.js';
import api from '../../api/axios';
import { useEffect, useState } from 'react';

interface SensorData {
  id: number;
  temperature: number;
  humidity: number;
  uvIndex: number;
  createdAt: string;
  updatedAt: string;
}

interface ApiResponse {
  data: SensorData[];
  message: string;
  ok: boolean;
}

const ReportsPage = () => {
  const [dataReports, setDataReports] = useState<SensorData[]>([]);

  const handleDownloadPDF = () => {
    const element = document.getElementById('table-pdf');
    if (!element) return;

    const opt = {
      margin: 0.5,
      filename: 'reporte_deshidratador.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).save();
  };

  const fetchData = async () => {
    try {
      const response = await api.get<ApiResponse>("/sensors");
      setDataReports(response.data.data);
    } catch (error) {
      console.error("Error fetching data reports", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Función para formatear la fecha
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleString('es-ES', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div>
      <h2 className="text-xl font-bold text-[#173555] pt-8 pb-6">Reportes</h2>

      <div className="bg-white p-6 rounded-xl">
        <div
          id="table-pdf"
          className="rounded-xl overflow-hidden border border-[#173555]"
        >
          <table className="min-w-full table-auto border-collapse text-center">
            <thead className="bg-[#C4D2E7] text-[#173555]">
              <tr>
                <th className="py-2 px-4 border-b border-r border-[#173555]">Fecha/Hora</th>
                <th className="py-2 px-4 border-b border-r border-[#173555]">Temperatura(°C)</th>
                <th className="py-2 px-4 border-b border-r border-[#173555]">Humedad(%)</th>
                <th className="py-2 px-4 border-b border-r border-[#173555]">UV Index</th>
                <th className="py-2 px-4 border-b border-[#173555]">Sensor ID</th>
              </tr>
            </thead>
            <tbody>
              {dataReports.map((row) => {
                const isLast = row.id === dataReports[dataReports.length - 1]?.id;
                const borderBottom = isLast ? '' : 'border-b';

                return (
                  <tr key={row.id} className="hover:bg-gray-50 text-center">
                    <td className={`py-2 px-4 border-r border-[#173555] ${borderBottom}`}>
                      {formatDate(row.createdAt)}
                    </td>
                    <td className={`py-2 px-4 border-r border-[#173555] ${borderBottom}`}>
                      {row.temperature.toFixed(2)}
                    </td>
                    <td className={`py-2 px-4 border-r border-[#173555] ${borderBottom}`}>
                      {row.humidity.toFixed(2)}
                    </td>
                    <td className={`py-2 px-4 border-r border-[#173555] ${borderBottom}`}>
                      {row.uvIndex}
                    </td>
                    <td className={`py-2 px-4 border-[#173555] ${borderBottom}`}>
                      {`Sensor-${row.id}`}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="flex justify-end mt-6">
          <button
            onClick={handleDownloadPDF}
            className="flex items-center py-2 px-4 bg-[#486F99] text-white font-semibold rounded-lg shadow-md"
          >
            <img src="/downloadIcon.svg" alt="descargar" className="w-5 h-5 mr-2" />
            Descargar reporte
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReportsPage;