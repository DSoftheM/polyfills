function myFlat(deepLevel = 1) {
    const arr = 
    [
        1,
        2,
        3, 
        [
            4, 
            5
        ], 
        6, 
        7, 
        [
            8, 9, 10, 
            [
                11, 
                12, 
                13, 
                14, 
                [
                    15
                ]
            ], 
            16, 
            17, 
            [
                18, 
                19, 
                [
                    20
                ]
            ]
        ]
    ];
    let countCalls = -1;

    return fetchCollection(arr);
    function fetchCollection(arr) {
        if (countCalls >= deepLevel) 
            return;
        countCalls++;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] instanceof Array) {
                arr.splice(i, 1, ...arr[i]);
                fetchCollection(arr[i]);
            }
                
        }
        return arr;
    }
}

console.log(myFlat());