// import Swal from "sweetalert2";
// import * as XLSX from "xlsx";
// import { saveAs } from "file-saver";

// export async function downloadExcel({
//   data = [],
//   fileName = "Export.xlsx",
//   sheetName = "Sheet1",
// }) {
//   if (!Array.isArray(data) || data.length === 0) {
//     Swal.fire("No data", "Nothing to download", "info");
//     return;
//   }

//   const columns = Object.keys(data[0]);

//   const checkboxHTML = `
//     <div style="
//       display:grid;
//       grid-template-columns:repeat(3,1fr);
//       gap:10px;
//       max-height:300px;
//       overflow:auto;
//       text-align:left;
//       padding:10px;
//     ">
//       ${columns
//         .map(
//           (col) => `
//           <label style="display:flex;gap:6px;align-items:center">
//             <input type="checkbox" value="${col}" />
//             ${col.replace(/_/g, " ")}
//           </label>`
//         )
//         .join("")}
//     </div>
//   `;

//   const { isConfirmed } = await Swal.fire({
//     title: "Select columns to download",
//     html: checkboxHTML,
//     confirmButtonText: "Download Excel",
//     showCancelButton: true,
//     preConfirm: () => {
//       const checked = [
//         ...Swal.getPopup().querySelectorAll("input:checked"),
//       ].map((el) => el.value);

//       if (!checked.length) {
//         Swal.showValidationMessage("Select at least one column");
//         return false;
//       }
//       return checked;
//     },
//   });

//   if (!isConfirmed) return;

//   const selectedCols = [
//     ...Swal.getPopup().querySelectorAll("input:checked"),
//   ].map((el) => el.value);

//   const exportData = data.map((row) => {
//     const obj = {};
//     selectedCols.forEach((c) => (obj[c] = row[c]));
//     return obj;
//   });

//   const worksheet = XLSX.utils.json_to_sheet(exportData);
//   const workbook = XLSX.utils.book_new();
//   XLSX.utils.book_append_sheet(workbook, worksheet, sheetName);

//   const buffer = XLSX.write(workbook, {
//     bookType: "xlsx",
//     type: "array",
//   });

//   saveAs(
//     new Blob([buffer], {
//       type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
//     }),
//     fileName
//   );
// }

  import Swal from "sweetalert2";
  import * as XLSX from "xlsx";
  import { saveAs } from "file-saver";

  export async function downloadExcel({
    data = [],
    fileName = "Export.xlsx",
    sheetName = "Sheet1",
    hiddenColumns = ["_id", "__v", "updatedAt"],
  }) {
    if (!Array.isArray(data) || data.length === 0) {
      Swal.fire("No data", "Nothing to download", "info");
      return;
    }

    // ✅ CLEAN columns (same as table)
    const columns = Object.keys(data[0]).filter(
      (c) => !hiddenColumns.includes(c)
    );

    const checkboxHTML = `
      <div class="card eshop-cards">
        <div class="card-body">
          <div class="row g-2">
            ${columns
              .map(
                (col) => `
                <div class="col-6 col-md-4">
                  <div class="form-check d-flex align-items-left gap-2">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value="${col}"
                      id="col-${col}"
                      checked
                    />
                    <label class="form-check-label" for="col-${col}">
                      ${col.replace(/_/g, " ")}
                    </label>
                  </div>
                </div>
              `
              )
              .join("")}
          </div>
        </div>
      </div>
    `;

    const { isConfirmed, value: selectedCols } = await Swal.fire({
      title: "Select columns to download",
      html: checkboxHTML,
      confirmButtonText: "Download Excel",
      showCancelButton: true,
      focusConfirm: false,
      preConfirm: () => {
        const checked = [
          ...document.querySelectorAll(
            ".swal2-popup input.form-check-input:checked"
          ),
        ].map((el) => el.value);

        if (!checked.length) {
          Swal.showValidationMessage("Select at least one column");
          return false;
        }
        return checked;
      },
    });

    if (!isConfirmed) return;

    // ✅ EXPORT DATA
    const exportData = data.map((row) => {
      const obj = {};
      selectedCols.forEach((c) => {
        obj[c] = row[c];
      });
      return obj;
    });

    const worksheet = XLSX.utils.json_to_sheet(exportData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, sheetName);

    const buffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });

    saveAs(
      new Blob([buffer], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      }),
      fileName
    );
  }
