module.exports = [
    {
        title: "Movie Goer Survey",
        fields: [
            {
                label: "Have you gone to the movies in the last month?",
                type: "radio",
                options: [
                    "yes",
                    "no"
                ]
            },
            {
                label: "On a scale of 1 to 5, Did you enjoy your last theater experience?",
                type: "radio",
                options: [
                    1,
                    2,
                    3,
                    4,
                    5
                ]
            },
        ],
        submitButtonText: "Submit Survey"
    },
    {
        title: "DigitalCrafts Survey",
        fields: [
            {
                label: "Are you currently enrolled in a DigitalCrafts class?",
                type: "radio",
                options: [
                    "yes",
                    "no"
                ]
            },
            {
                label: "In 3000 words or more, explain what's so great about Adam?",
                type: "text"
            }
        ],
        submitButtonText: "I'm Done"
    }
]
