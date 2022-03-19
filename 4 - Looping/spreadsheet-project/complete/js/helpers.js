import $ from "../../../jquery/src/jquery.js";
import { handleCellChange } from "./spreadsheet.js"

/**
 * Adds a row to the table
 * @returns {TableRow}
 */
function appendRow() {
    const row = document.createElement("tr");

    $("#table").append(row);

    return new TableRow(row);
}

/**
 * Adds a row to the table
 * @returns {TableHeader}
 */
 function appendHeader() {
    const row = document.createElement("tr");

    $("#table").append(row);

    return new TableHeader(row);
}

class TableRow {
    #domRow;

    constructor(domRow) {
        this.#domRow = domRow;
    }

    /**
     * 
     * @param {string} text the content of the column
     * @param {boolean} isEditable determines if the column is editable
     * @returns {TableColumn}
     */
    appendColumn(text) {
        const newCell = document.createElement("td");
        const tableCell = new TableCell(newCell);
        newCell.innerText = text ?? "";
        newCell.contentEditable = true;
        newCell.addEventListener('input', () => {
            handleCellChange(tableCell);
        });

        $(this.#domRow).append(newCell);

        return tableCell;
    }
}

class TableHeader {
    #domRow;

    constructor(domRow) {
        this.#domRow = domRow;
    }

    /**
     * 
     * @param {string} text the content of the column
     * @param {boolean} isEditable determines if the column is editable
     * @returns {TableColumn}
     */
    appendColumn(text) {
        const newCell = document.createElement("th");
        const tableCell = new TableCell(newCell);
        newCell.innerText = text;

        $(this.#domRow).append(newCell);

        return tableCell;
    }
}

class TableCell {
    #domCol;

    constructor(domCol) {
        this.#domCol = domCol;
    }

    get textContent() {
        return this.#domCol.innerText;
    }

    set textContent(text) {
        this.#domCol.innerText = text;
    }
}

export { appendRow, appendHeader, TableCell, TableRow }