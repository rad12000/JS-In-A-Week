import { appendRow, appendHeader, TableCell } from "./helpers.js"
import { tableData } from "../../table-data.js"

function handleLoad() {
    // Set header
    const header = appendHeader();
    const firstRow = tableData[0];

    for (const col in firstRow) {
        header.appendColumn(col)
    }

    for (const row of tableData) {
        const newRow = appendRow();

        for (const col in row) {
            newRow.appendColumn(row[col]);
        }
    }
}

/**
 * Triggered when someone writes in a cell
 * @param {TableCell} cell 
 */
function handleCellChange(cell) {
    console.log(cell.textContents)
}

export { handleLoad, handleCellChange }