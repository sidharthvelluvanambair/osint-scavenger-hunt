challenges = [
    {
        "id": 1,
        "title": "Where is this café?",
        "difficulty": "Easy",
        "technique": "Visual clues",
        "points": 10,
        "question": "What suburb is this café located in?",
        "answer": "Surfers Paradise",
        "image": "http://127.0.0.1:5007/images/image1.jpg",
        "metadata": "",
        "clues": ["Look carefully at visible location clues in the image."],
        "hint": "Focus on signs, landmarks, or street clues."
    },
    {
        "id": 2,
        "title": "Spot the country",
        "difficulty": "Easy",
        "technique": "Language recognition",
        "points": 10,
        "question": "Which country is this likely taken in?",
        "answer": "France",
        "image": "http://127.0.0.1:5007/images/image2.jpg",
        "metadata": "",
        "clues": ["Look at the language, signs, and visual details."],
        "hint": "The written language is the strongest clue."
    },
    {
        "id": 3,
        "title": "Real or fake business?",
        "difficulty": "Medium",
        "technique": "Business verification",
        "points": 15,
        "question": "Is this business real or fake?",
        "answer": "Fake",
        "image": "http://127.0.0.1:5007/images/image3.jpg",
        "metadata": "",
        "clues": [
            "Suspicious website details",
            "Weak online presence",
            "No reliable external verification"
        ],
        "hint": "Check whether the business can be verified from trusted sources."
    },
    {
        "id": 4,
        "title": "Which station did Alex leave from?",
        "difficulty": "Easy-Moderate",
        "technique": "Transport OSINT",
        "points": 15,
        "question": "Which station did Alex depart from?",
        "answer": "Southport Station",
        "image": "http://127.0.0.1:5007/images/image4.jpg",
        "metadata": "",
        "clues": [
            "Platform number: 3",
            "Time: 08:32"
        ],
        "hint": "Use the timetable details to identify the departure station."
    },
    {
        "id": 5,
        "title": "When was this photo taken?",
        "difficulty": "Moderate",
        "technique": "Shadow analysis",
        "points": 15,
        "question": "Was this taken in the morning, afternoon, or evening?",
        "answer": "Evening",
        "image": "http://127.0.0.1:5007/images/image5.jpg",
        "metadata": "",
        "clues": [
            "Long shadows",
            "Low sun position"
        ],
        "hint": "Think about when shadows become longer during the day."
    },
    {
        "id": 6,
        "title": "Find the hidden location",
        "difficulty": "Moderate",
        "technique": "Geolocation clues",
        "points": 20,
        "question": "Which beach is this?",
        "answer": "Surfers Paradise Beach",
        "image": "http://127.0.0.1:5007/images/image6.jpg",
        "metadata": "",
        "clues": [
            "Beach scene",
            "Lifeguard tower number",
            "Partial location sign"
        ],
        "hint": "Use the visible beach and sign clues together."
    },
    {
        "id": 7,
        "title": "EXIF truth check",
        "difficulty": "Moderate",
        "technique": "Metadata analysis",
        "points": 20,
        "question": "Is the caption true or false?",
        "answer": "False",
        "image": "http://127.0.0.1:5007/images/image7.jpg",
        "metadata": "Date: 2026:03:10 | Time: 11:25:14 | Location: Brisbane | Caption: Beautiful sunset",
        "clues": [
            "Time is 11:25:14",
            "Caption says sunset"
        ],
        "hint": "Compare the metadata time with the caption."
    },
    {
        "id": 8,
        "title": "Cross-source verification",
        "difficulty": "Moderate-Hard",
        "technique": "Multi-source validation",
        "points": 20,
        "question": "Is the claim reliable?",
        "answer": "False",
        "image": "http://127.0.0.1:5007/images/image8.jpg",
        "metadata": "",
        "clues": [
            "One source says the event already happened",
            "Another source says the event is scheduled later"
        ],
        "hint": "Reliable claims should be supported by consistent sources."
    },
    {
        "id": 9,
        "title": "Trace the identity",
        "difficulty": "Hard",
        "technique": "Multi-step OSINT",
        "points": 25,
        "question": "Which city does this person most likely live in?",
        "answer": "Sydney",
        "image": "http://127.0.0.1:5007/images/image9.jpg",
        "metadata": "",
        "clues": [
            "Username: travel_guru_92",
            "Bio mentions Sydney",
            "Profile image contains a recognizable landmark clue"
        ],
        "hint": "Combine the profile bio with the landmark clue."
    },
    {
        "id": 10,
        "title": "Full investigation challenge",
        "difficulty": "Hard",
        "technique": "Combined OSINT",
        "points": 30,
        "question": "Identify the exact business name AND suburb.",
        "answer": "Green Leaf Café, Fitzroy",
        "image": "http://127.0.0.1:5007/images/image10.jpg",
        "metadata": "Location: Melbourne",
        "clues": [
            "Shop name is partially visible",
            "Metadata points to Melbourne",
            "Review snippet gives extra context"
        ],
        "hint": "Combine the visible shop clue with the suburb/location clue."
    }
]