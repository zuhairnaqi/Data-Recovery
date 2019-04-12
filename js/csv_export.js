function export_csv_file(table_name) {

    $('#export_csv').click(function () {
        var titles = [];
        var data = [];

        /*
         * Get the table headers, this will be CSV headers
         * The count of headers will be CSV string separator
         */
        $('#' + table_name + ' th').each(function () {
            titles.push($(this).text());
        });

        /*
         * Get the actual data, this will contain all the data, in 1 array
         */
        $('#' + table_name + ' td').each(function () {
            data.push($(this).text());
        });

        /*
         * Convert our data to CSV string
         */
        var CSVString = prepCSVRow(titles, titles.length, '');
        CSVString = prepCSVRow(data, titles.length, CSVString);

        /*
         * Make CSV downloadable
         */
        var downloadLink = document.createElement("a");
        var blob = new Blob(["\ufeff", CSVString]);
        var url = URL.createObjectURL(blob);
        downloadLink.href = url;
        downloadLink.download = "data.csv";

        /*
         * Actually download CSV
         */
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    });

    /*
     * Convert data array to CSV string
     * @param arr {Array} - the actual data
     * @param columnCount {Number} - the amount to split the data into columns
     * @param initial {String} - initial string to append to CSV string
     * return {String} - ready CSV string
     */
    function prepCSVRow(arr, columnCount, initial) {
        var row = ''; // this will hold data
        var delimeter = ','; // data slice separator, in excel it's `;`, in usual CSv it's `,`
        var newLine = '\r\n'; // newline separator for CSV row

        /*
         * Convert [1,2,3,4] into [[1,2], [3,4]] while count is 2
         * @param _arr {Array} - the actual array to split
         * @param _count {Number} - the amount to split
         * return {Array} - splitted array
         */
        function splitArray(_arr, _count) {
            var splitted = [];
            var result = [];
            _arr.forEach(function (item, idx) {
                if ((idx + 1) % _count === 0) {
                    splitted.push(item);
                    result.push(splitted);
                    splitted = [];
                } else {
                    splitted.push(item);
                }
            });
            return result;
        }
        var plainArr = splitArray(arr, columnCount);
        // don't know how to explain this
        // you just have to like follow the code
        // and you understand, it's pretty simple
        // it converts `['a', 'b', 'c']` to `a,b,c` string
        plainArr.forEach(function (arrItem) {
            arrItem.forEach(function (item, idx) {
                row += item + ((idx + 1) === arrItem.length ? '' : delimeter);
            });
            row += newLine;
        });
        return initial + row;
    }
}