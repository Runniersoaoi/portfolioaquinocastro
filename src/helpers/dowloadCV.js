export const downloadPdf = () => {
  // URL del archivo PDF
  const pdfUrl = "../../public/CurriculumMatias.pdf";

  // Crear un elemento <a> temporal
  const link = document.createElement("a");
  link.href = pdfUrl;
  link.download = "matiascv.pdf"; // Nombre del archivo PDF que se descargará

  // Hacer clic en el enlace
  document.body.appendChild(link);
  link.click();

  // Eliminar el enlace del DOM
  document.body.removeChild(link);
};
