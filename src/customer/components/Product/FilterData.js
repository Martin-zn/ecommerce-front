export const estilo = [
    "rock",
    "Reggeton",
    "Pop",
    "Trap",
    "Phonk",
    "clasica",
    "otros"
];

export const singleFilter=[
    {
        id : "price",
        name : "Price",
        options : [
            {value:"5000-10000", label: "$5.000 a $10.000"},
            {value:"10000-15000", label: "$10.000 a $15.000"},
            {value:"15000-20000", label: "$15.000 a $20.000"},
        ]

    },
    {
        id : "estilo",
        name : "Estilos",
        options : [
            {value: "rock", label: "Rock"},
            {value: "reggeton", label: "Reggeton"},
            {value: "pop", label: "Pop"},
            {value: "trap", label: "Trap"},
            {value: "phonk", label: "Phonk"},
        ]
    }
]

export const filters=[
    {
        id : "estilo",
        name : "Estilos",
        options : [
            {value: "rock", label: "Rock"},
            {value: "reggeton", label: "Reggeton"},
            {value: "pop", label: "Pop"},
            {value: "trap", label: "Trap"},
            {value: "phonk", label: "Phonk"},
        ]
    }
]