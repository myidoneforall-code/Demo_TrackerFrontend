// downloadExcel.js
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

/**
 * Download an array of objects as Excel file.
 * @param {Array} data - Array of objects to export
 * @param {String} fileName - File name without extension
 */
export function downloadExcel(data, fileName = "data") {
  if (!Array.isArray(data) || data.length === 0) {
    console.warn("No data to export");
    return;
  }

  // Convert JSON array to worksheet
  const worksheet = XLSX.utils.json_to_sheet(data);

  // Create a new workbook and append the worksheet
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

  // Generate Excel buffer
  const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });

  // Save as Excel file
  const blob = new Blob([excelBuffer], { type: "application/octet-stream" });
  saveAs(blob, `${fileName}.xlsx`);
}
