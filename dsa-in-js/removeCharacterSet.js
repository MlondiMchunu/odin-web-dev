function removeCharacterSet(arr, str) {
    var strTemp = ''
    strFin = ''
    for (i = 0; i < arr.length; i++) {
        for (j = 0; j < str.length; j++) {
            arr[i]
            str[j]
            if (arr[i] !== str[j]) {
                strTemp += str[j]
                for (n = 0; n < strTemp.length; n++) {
                    if (strTemp[i] !== strTemp[i + 1]) {
                        strFin += strTemp[i]
                    }
                }
            }

        }
    } return strFin
}
console.log(removeCharacterSet(['i', 'o'], "mlondi"))