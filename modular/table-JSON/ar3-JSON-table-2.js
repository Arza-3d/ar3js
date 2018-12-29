/*#######################
// ar3-JSON-table-1.js  #
#######################*/
/*--------------------------
https://arza-3d.github.io/ar3.js/

<script src="https://raw.githack.com/Arza-3d/ar3.js/master/modular/table-JS/ar3-JSON-table-1.js"></script>
--------------------------*/

{
    const constructNote = "ar3-JSON-table_is_constructed";
    const isConstructed = $('body').hasClass(constructNote);
    {
        const $tableJSON = $('table[data-JSON-r3]');
        if (!isConstructed && $tableJSON .length > 0) {

            // get JSON
            $('head').append('<script>var jsonText = _JSON_string_r3;</script>');
            let objectInJSON = jsonText;//JSON.parse(jsonText);

            for (let i = 0; i < $tableJSON.length; i++) {
                // add <tbody> if necessary
                if ($($tableJSON[i]).children('tbody').length === 0) {
                    $($tableJSON[i]).append('<tbody>');
                }

                let $th = $($tableJSON[i]).find('thead > tr:last-child > th'),
                    $tbody = $($tableJSON[i]).children('tbody'),
                    arrayInJSON = $($tableJSON[i]).attr('data-JSON-r3');

                if (objectInJSON[arrayInJSON] !== undefined) {
                    // table row loop
                    let arrayInJSONlength = objectInJSON[arrayInJSON].length;
                    for (let j = 0; j < arrayInJSONlength; j++) {

                        // table column loop
                        let rowContent = '';
                        for (let k = 0; k < $th.length; k++) {
                            let keyInJSON = $($th[k]).attr('data-JSON-r3'),
                                valueInJSON = objectInJSON[arrayInJSON][j][keyInJSON];
                            rowContent += '\t<td>' + valueInJSON + '</td>\n';
                        }
                        $tbody.append('<tr>'+ rowContent +'</tr>');
                    }
                }
            }
        }
    }
    $('body').addClass(constructNote);
}
