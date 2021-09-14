var data = [
    {
        name : "rohit",
        age : 25,
        city : "indore",
        qualification : [
            {
                year : 2012,
                qua : "BBA"
            },
            {
                year : 2015,
                qua : "MBA",
                other : [
                    {
                        exp : [
                            {
                                company : "TCS",
                                year : 2018
                            },
                            {
                                company : "Infosys",
                                year : 2020
                            }
                        ]
                    }
                ]
            }
        ]
    }
];

console.log(data[0].qualification[1].other[0].exp[1].company);