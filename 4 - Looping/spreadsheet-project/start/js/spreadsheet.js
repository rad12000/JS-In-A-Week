import { appendRow, appendHeader, TableCell } from "./helpers.js"
import { tableData } from "../../table-data.js"

/**
 * Called when the page loads
 */
function handleLoad() {
    console.log("Page loaded!")
}

/**
 * Triggered when someone writes in a cell
 * @param {TableCell} cell 
 */
function handleCellChange(cell) {
    console.log(cell.textContents)
}

export { handleLoad, handleCellChange }