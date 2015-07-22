/*Assumes global hrly rate of $120*/
var projects = [
  {
      "project_id": 10000,
      "client_name": "Pepper Autobody Restoration",
      "client_abbr": "PEPAUTO",
      "start_date": "2015-05-11 00:00:00",
      "end_date": "2015-07-17 23:59:59",
      "projected_end_date": "2015-07-19 23:59:59", /* may or may not be in data*/
      "budget": 100200.00,
      "budget_projected": 102150.00, /*may or may not be in data // Planned + Overtime Hrs*/
      "status": "danger",
      "tasks_total": 22,
      "tasks_complete": 17,
      "hours_budget": 668, // # of hours originally planned when presented to client
      "hours_planned": 673, // current # of hours planned
      "hours_worked": 511,
      "hours_overtime": 8,
      "employees": ['0000009', '0000007', '0000002', '0000022', '0000008']
  },
  {
      "project_id": 10001,
      "client_name": "Zeevill Inc",
      "client_abbr": "ZEEVILL",
      "start_date": "2015-06-22 00:00:00",
      "end_date": "2015-08-28 23:59:59",
      "projected_end_date": "2015-08-28 23:59:59", /* may or may not be in data*/
      "budget": 100950.00,
      "budget_projected": 100950.00, /*may or may not be in data*/
      "status": "ok",
      "tasks_total": 22,
      "tasks_complete": 3,
      "hours_budget": 673, // # of hours originally planned when presented to client
      "hours_planned": 673, // current # of hours planned
      "hours_worked": 134,
      "hours_overtime": 0,
      "employees": ['0000012', '0000004', '0000017', '0000019', '0000008']
  },
  {
      "project_id": 10002,
      "client_name": "Madara Italian Bistro",
      "client_abbr": "MADARA",
      "start_date": "2015-05-25 00:00:00",
      "end_date": "2015-07-17 23:59:59",
      "projected_end_date": "2015-07-18 23:59:59", /* may or may not be in data*/
      "budget": 58200.00,
      "budget_projected": 58950.00, /*may or may not be in data*/
      "status": "warning",
      "tasks_total": 16,
      "tasks_complete": 12,
      "hours_budget": 388, // # of hours originally planned when presented to client
      "hours_planned": 393, // current # of hours planned
      "hours_worked": 134,
      "hours_overtime": 0,
      "employees": ['0000004', '0000012', '0000022', '0000017', '0000006', '0000019']
  },
  {
      "project_id": 10003,
      "client_name": "Zesto Cola",
      "client_abbr": "ZESTCOL",
      "start_date": "2015-08-03 00:00:00",
      "end_date": "2015-10-09 23:59:59",
      "projected_end_date": "2015-10-09 23:59:59", /* may or may not be in data*/
      "budget": 100950.00,
      "budget_projected": 9150.00, /*may or may not be in data*/
      "status": "ok",
      "tasks_total": 22,
      "tasks_complete": 0,
      "hours_budget": 673, // # of hours originally planned when presented to client
      "hours_planned": 61, // current # of hours planned
      "hours_worked": 0,
      "hours_overtime": 0,
      "employees": ['0000006']
  }
];


var resourceOverview /* Project */ = {
    "10000": {
        "weeks": [
          {
              "startDate": "2015-05-11 00:00:00",
              "endDate": "2015-05-14 23:59:59",
              "resources": [
                {
                    "employeedID": "0000009", "name": "Wendy Weicher", "discipline": "Visual Design", "hours": [
                     { "worked": 0, "planned": 0, "other": 0, "overtime": 0, "total": 40 }
                    ]
                },
                {
                    "employeedID": "0000007", "name": "Jen Lombardo", "discipline": "User Experience", "hours": [
                     { "worked": 40, "planned": 40, "other": 0, "overtime": 0, "total": 40 }
                    ]
                },
                {
                    "employeedID": "0000008", "name": "Kevin Richardson", "discipline": "Project Management", "hours": [
                     { "worked": 4, "planned": 4, "other": 0, "overtime": 0, "total": 40 }
                    ]
                },
                {
                    "employeedID": "0000002", "name": "Troy Gardner", "discipline": "Development", "hours": [
                     { "worked": 0, "planned": 0, "other": 0, "overtime": 0, "total": 40 }
                    ]
                },
                {
                    "employeedID": "0000022", "name": "Kris Tulowitzki", "discipline": "Development", "hours": [
                     { "worked": 0, "planned": 0, "other": 0, "overtime": 0, "total": 40 }
                    ]
                }
              ]
          },
          {
              "startDate": "2015-05-18 00:00:00",
              "endDate": "2015-05-22 23:59:59",
              "resources": [
                {
                    "employeedID": "0000009", "name": "Wendy Weicher", "discipline": "Visual Design", "hours": [
                     { "worked": 20, "planned": 20, "other": 0, "overtime": 0, "total": 40 }
                    ]
                },
                {
                    "employeedID": "0000007", "name": "Jen Lombardo", "discipline": "User Experience", "hours": [
                     { "worked": 40, "planned": 40, "other": 0, "overtime": 0, "total": 40 }
                    ]
                },
                {
                    "employeedID": "0000008", "name": "Kevin Richardson", "discipline": "Project Management", "hours": [
                     { "worked": 6, "planned": 6, "other": 0, "overtime": 0, "total": 40 }
                    ]
                },
                {
                    "employeedID": "0000002", "name": "Troy Gardner", "discipline": "Development", "hours": [
                     { "worked": 0, "planned": 0, "other": 0, "overtime": 0, "total": 40 }
                    ]
                },
                {
                    "employeedID": "0000022", "name": "Kris Tulowitzki", "discipline": "Development", "hours": [
                     { "worked": 0, "planned": 0, "other": 0, "overtime": 0, "total": 40 }
                    ]
                }
              ]
          },
          {
              "startDate": "2015-05-24 00:00:00",
              "endDate": "2015-05-29 23:59:59",
              "resources": [
                {
                    "employeedID": "0000009", "name": "Wendy Weicher", "discipline": "Visual Design", "hours": [
                     { "worked": 4, "planned": 4, "other": 0, "overtime": 0, "total": 40 }
                    ]
                },
                {
                    "employeedID": "0000007", "name": "Jen Lombardo", "discipline": "User Experience", "hours": [
                     { "worked": 40, "planned": 40, "other": 0, "overtime": 0, "total": 40 }
                    ]
                },
                {
                    "employeedID": "0000008", "name": "Kevin Richardson", "discipline": "Project Management", "hours": [
                     { "worked": 5, "planned": 5, "other": 0, "overtime": 0, "total": 40 }
                    ]
                },
                {
                    "employeedID": "0000002", "name": "Troy Gardner", "discipline": "Development", "hours": [
                     { "worked": 4, "planned": 4, "other": 0, "overtime": 0, "total": 40 }
                    ]
                },
                {
                    "employeedID": "0000022", "name": "Kris Tulowitzki", "discipline": "Development", "hours": [
                     { "worked": 0, "planned": 0, "other": 0, "overtime": 0, "total": 40 }
                    ]
                }
              ]
          },
          {
              "startDate": "2015-06-01 00:00:00",
              "endDate": "2015-06-05 23:59:59",
              "resources": [
                {
                    "employeedID": "0000009", "name": "Wendy Weicher", "discipline": "Visual Design", "hours": [
                     { "worked": 4, "planned": 4, "other": 0, "overtime": 0, "total": 40 }
                    ]
                },
                {
                    "employeedID": "0000007", "name": "Jen Lombardo", "discipline": "User Experience", "hours": [
                     { "worked": 40, "planned": 40, "other": 0, "overtime": 0, "total": 40 }
                    ]
                },
                {
                    "employeedID": "0000008", "name": "Kevin Richardson", "discipline": "Project Management", "hours": [
                     { "worked": 5, "planned": 5, "other": 0, "overtime": 0, "total": 40 }
                    ]
                },
                {
                    "employeedID": "0000002", "name": "Troy Gardner", "discipline": "Development", "hours": [
                     { "worked": 4, "planned": 4, "other": 0, "overtime": 0, "total": 40 }
                    ]
                },
                {
                    "employeedID": "0000022", "name": "Kris Tulowitzki", "discipline": "Development", "hours": [
                     { "worked": 0, "planned": 0, "other": 0, "overtime": 0, "total": 40 }
                    ]
                }
              ]
          },
          {
              "startDate": "2015-06-08 00:00:00",
              "endDate": "2015-06-12 23:59:59",
              "resources": [
                {
                    "employeedID": "0000009", "name": "Wendy Weicher", "discipline": "Visual Design", "hours": [
                     { "worked": 4, "planned": 4, "other": 0, "overtime": 0, "total": 40 }
                    ]
                },
                {
                    "employeedID": "0000007", "name": "Jen Lombardo", "discipline": "User Experience", "hours": [
                     { "worked": 40, "planned": 40, "other": 0, "overtime": 0, "total": 40 }
                    ]
                },
                {
                    "employeedID": "0000008", "name": "Kevin Richardson", "discipline": "Project Management", "hours": [
                     { "worked": 5, "planned": 5, "other": 0, "overtime": 0, "total": 40 }
                    ]
                },
                {
                    "employeedID": "0000002", "name": "Troy Gardner", "discipline": "Development", "hours": [
                     { "worked": 4, "planned": 4, "other": 0, "overtime": 0, "total": 40 }
                    ]
                },
                {
                    "employeedID": "0000022", "name": "Kris Tulowitzki", "discipline": "Development", "hours": [
                     { "worked": 0, "planned": 0, "other": 0, "overtime": 0, "total": 40 }
                    ]
                }
              ]
          },
          {
              "startDate": "2015-06-15 00:00:00",
              "endDate": "2015-06-19 23:59:59",
              "resources": [
                {
                    "employeedID": "0000009", "name": "Wendy Weicher", "discipline": "Visual Design", "hours": [
                     { "worked": 40, "planned": 40, "other": 0, "overtime": 0, "total": 40 }
                    ]
                },
                {
                    "employeedID": "0000007", "name": "Jen Lombardo", "discipline": "User Experience", "hours": [
                     { "worked": 8, "planned": 8, "other": 0, "overtime": 0, "total": 40 }
                    ]
                },
                {
                    "employeedID": "0000008", "name": "Kevin Richardson", "discipline": "Project Management", "hours": [
                     { "worked": 5, "planned": 5, "other": 0, "overtime": 0, "total": 40 }
                    ]
                },
                {
                    "employeedID": "0000002", "name": "Troy Gardner", "discipline": "Development", "hours": [
                     { "worked": 4, "planned": 4, "other": 0, "overtime": 0, "total": 40 }
                    ]
                },
                {
                    "employeedID": "0000022", "name": "Kris Tulowitzki", "discipline": "Development", "hours": [
                     { "worked": 0, "planned": 0, "other": 0, "overtime": 0, "total": 40 }
                    ]
                }
              ]
          },
          {
              "startDate": "2015-06-22 00:00:00",
              "endDate": "2015-06-26 23:59:59",
              "resources": [
                {
                    "employeedID": "0000009", "name": "Wendy Weicher", "discipline": "Visual Design", "hours": [
                     { "worked": 43, "planned": 40, "other": 0, "overtime": 3, "total": 40 }
                    ]
                },
                {
                    "employeedID": "0000007", "name": "Jen Lombardo", "discipline": "User Experience", "hours": [
                     { "worked": 8, "planned": 8, "other": 0, "overtime": 0, "total": 40 }
                    ]
                },
                {
                    "employeedID": "0000008", "name": "Kevin Richardson", "discipline": "Project Management", "hours": [
                     { "worked": 5, "planned": 5, "other": 4, "overtime": 0, "total": 40 }
                    ]
                },
                {
                    "employeedID": "0000002", "name": "Troy Gardner", "discipline": "Development", "hours": [
                     { "worked": 4, "planned": 4, "other": 0, "overtime": 0, "total": 40 }
                    ]
                },
                {
                    "employeedID": "0000022", "name": "Kris Tulowitzki", "discipline": "Development", "hours": [
                     { "worked": 0, "planned": 0, "other": 0, "overtime": 0, "total": 40 }
                    ]
                }
              ]
          },
          {
              "startDate": "2015-06-29 00:00:00",
              "endDate": "2015-07-03 23:59:59",
              "resources": [
                {
                    "employeedID": "0000009", "name": "Wendy Weicher", "discipline": "Visual Design", "hours": [
                     { "worked": 4, "planned": 4, "other": 0, "overtime": 0, "total": 40 }
                    ]
                },
                {
                    "employeedID": "0000007", "name": "Jen Lombardo", "discipline": "User Experience", "hours": [
                     { "worked": 4, "planned": 4, "other": 0, "overtime": 0, "total": 40 }
                    ]
                },
                {
                    "employeedID": "0000008", "name": "Kevin Richardson", "discipline": "Project Management", "hours": [
                     { "worked": 8, "planned": 8, "other": 6, "overtime": 0, "total": 40 }
                    ]
                },
                {
                    "employeedID": "0000002", "name": "Troy Gardner", "discipline": "Development", "hours": [
                     { "worked": 40, "planned": 40, "other": 0, "overtime": 0, "total": 40 }
                    ]
                },
                {
                    "employeedID": "0000022", "name": "Kris Tulowitzki", "discipline": "Development", "hours": [
                     { "worked": 40, "planned": 35, "other": 0, "overtime": 5, "total": 40 }
                    ]
                }
              ]
          },
          {
              "startDate": "2015-07-06 00:00:00",
              "endDate": "2015-07-10 23:59:59",
              "resources": [
                {
                    "employeedID": "0000009", "name": "Wendy Weicher", "discipline": "Visual Design", "hours": [
                     { "worked": 0, "planned": 5, "other": 0, "overtime": 0, "total": 40 }
                    ]
                },
                {
                    "employeedID": "0000007", "name": "Jen Lombardo", "discipline": "User Experience", "hours": [
                     { "worked": 0, "planned": 5, "other": 0, "overtime": 0, "total": 40 }
                    ]
                },
                {
                    "employeedID": "0000008", "name": "Kevin Richardson", "discipline": "Project Management", "hours": [
                     { "worked": 4, "planned": 10, "other": 5, "overtime": 0, "total": 40 }
                    ]
                },
                {
                    "employeedID": "0000002", "name": "Troy Gardner", "discipline": "Development", "hours": [
                     { "worked": 15, "planned": 40, "other": 0, "overtime": 0, "total": 40 }
                    ]
                },
                {
                    "employeedID": "0000022", "name": "Kris Tulowitzki", "discipline": "Development", "hours": [
                     { "worked": 10, "planned": 35, "other": 10, "overtime": 0, "total": 40 }
                    ]
                }
              ]
          },
          {
              "startDate": "2015-07-13 00:00:00",
              "endDate": "2015-07-17 23:59:59",
              "resources": [
                {
                    "employeedID": "0000009", "name": "Wendy Weicher", "discipline": "Visual Design", "hours": [
                     { "worked": 0, "planned": 5, "other": 0, "overtime": 0, "total": 40 }
                    ]
                },
                {
                    "employeedID": "0000007", "name": "Jen Lombardo", "discipline": "User Experience", "hours": [
                     { "worked": 0, "planned": 5, "other": 0, "overtime": 0, "total": 40 }
                    ]
                },
                {
                    "employeedID": "0000008", "name": "Kevin Richardson", "discipline": "Project Management", "hours": [
                     { "worked": 0, "planned": 9, "other": 5, "overtime": 0, "total": 40 }
                    ]
                },
                {
                    "employeedID": "0000002", "name": "Troy Gardner", "discipline": "Development", "hours": [
                     { "worked": 0, "planned": 40, "other": 0, "overtime": 0, "total": 40 }
                    ]
                },
                {
                    "employeedID": "0000022", "name": "Kris Tulowitzki", "discipline": "Development", "hours": [
                     { "worked": 0, "planned": 40, "other": 0, "overtime": 0, "total": 40 }
                    ]
                }
              ]
          }
        ]
    },
    "10001": {
        "weeks": [
          {
              "startDate": "2015-06-22 00:00:00",
              "endDate": "2015-06-26 23:59:59",
              "resources": [
                {
                    "employeedID": "0000012", "name": "Jason Kluber", "discipline": "Visual Design", "hours": [
                     { "worked": 0, "planned": 0, "other": 40, "overtime": 0, "total": 40 }
                    ]
                },
                {
                    "employeedID": "0000004", "name": "Justin Kazmir", "discipline": "User Experience", "hours": [
                     { "worked": 40, "planned": 40, "other": 0, "overtime": 0, "total": 40 }
                    ]
                },
                {
                    "employeedID": "0000008", "name": "Kevin Richardson", "discipline": "Project Management", "hours": [
                     { "worked": 4, "planned": 4, "other": 5, "overtime": 0, "total": 40 }
                    ]
                },
                {
                    "employeedID": "0000017", "name": "Mandy Rizzo", "discipline": "Development", "hours": [
                     { "worked": 0, "planned": 0, "other": 0, "overtime": 0, "total": 40 }
                    ]
                },
                {
                    "employeedID": "0000019", "name": "Tara Kershaw", "discipline": "Development", "hours": [
                     { "worked": 0, "planned": 0, "other": 0, "overtime": 0, "total": 40 }
                    ]
                }
              ]
          },
          {
              "startDate": "2015-06-29 00:00:00",
              "endDate": "2015-07-03 23:59:59",
              "resources": [
                {
                    "employeedID": "0000012", "name": "Jason Kluber", "discipline": "Visual Design", "hours": [
                     { "worked": 20, "planned": 20, "other": 20, "overtime": 0, "total": 40 }
                    ]
                },
                {
                    "employeedID": "0000004", "name": "Justin Kazmir", "discipline": "User Experience", "hours": [
                     { "worked": 40, "planned": 40, "other": 0, "overtime": 0, "total": 40 }
                    ]
                },
                {
                    "employeedID": "0000008", "name": "Kevin Richardson", "discipline": "Project Management", "hours": [
                     { "worked": 6, "planned": 6, "other": 8, "overtime": 0, "total": 40 }
                    ]
                },
                {
                    "employeedID": "0000017", "name": "Mandy Rizzo", "discipline": "Development", "hours": [
                     { "worked": 0, "planned": 0, "other": 0, "overtime": 0, "total": 40 }
                    ]
                },
                {
                    "employeedID": "0000019", "name": "Tara Kershaw", "discipline": "Development", "hours": [
                     { "worked": 0, "planned": 0, "other": 0, "overtime": 0, "total": 40 }
                    ]
                }
              ]
          },
          {
              "startDate": "2015-07-06 00:00:00",
              "endDate": "2015-07-10 23:59:59",
              "resources": [
                {
                    "employeedID": "0000012", "name": "Jason Kluber", "discipline": "Visual Design", "hours": [
                     { "worked": 2, "planned": 4, "other": 4, "overtime": 0, "total": 40 }
                    ]
                },
                {
                    "employeedID": "0000004", "name": "Justin Kazmir", "discipline": "User Experience", "hours": [
                     { "worked": 15, "planned": 40, "other": 0, "overtime": 0, "total": 40 }
                    ]
                },
                {
                    "employeedID": "0000008", "name": "Kevin Richardson", "discipline": "Project Management", "hours": [
                     { "worked": 2, "planned": 5, "other": 10, "overtime": 0, "total": 40 }
                    ]
                },
                {
                    "employeedID": "0000017", "name": "Mandy Rizzo", "discipline": "Development", "hours": [
                     { "worked": 0, "planned": 4, "other": 30, "overtime": 0, "total": 40 }
                    ]
                },
                {
                    "employeedID": "0000019", "name": "Tara Kershaw", "discipline": "Development", "hours": [
                     { "worked": 0, "planned": 0, "other": 30, "overtime": 0, "total": 40 }
                    ]
                }
              ]
          },
          {
              "startDate": "2015-07-13 00:00:00",
              "endDate": "2015-07-17 23:59:59",
              "resources": [
                {
                    "employeedID": "0000012", "name": "Jason Kluber", "discipline": "Visual Design", "hours": [
                     { "worked": 0, "planned": 4, "other": 4, "overtime": 0, "total": 40 }
                    ]
                },
                {
                    "employeedID": "0000004", "name": "Justin Kazmir", "discipline": "User Experience", "hours": [
                     { "worked": 0, "planned": 40, "other": 0, "overtime": 0, "total": 40 }
                    ]
                },
                {
                    "employeedID": "0000008", "name": "Kevin Richardson", "discipline": "Project Management", "hours": [
                     { "worked": 0, "planned": 5, "other": 9, "overtime": 0, "total": 40 }
                    ]
                },
                {
                    "employeedID": "0000017", "name": "Mandy Rizzo", "discipline": "Development", "hours": [
                     { "worked": 0, "planned": 4, "other": 30, "overtime": 0, "total": 40 }
                    ]
                },
                {
                    "employeedID": "0000019", "name": "Tara Kershaw", "discipline": "Development", "hours": [
                     { "worked": 0, "planned": 0, "other": 40, "overtime": 0, "total": 40 }
                    ]
                }
              ]
          },
          {
              "startDate": "2015-07-20 00:00:00",
              "endDate": "2015-07-24 23:59:59",
              "resources": [
                {
                    "employeedID": "0000012", "name": "Jason Kluber", "discipline": "Visual Design", "hours": [
                     { "worked": 0, "planned": 4, "other": 0, "overtime": 0, "total": 40 }
                    ]
                },
                {
                    "employeedID": "0000004", "name": "Justin Kazmir", "discipline": "User Experience", "hours": [
                     { "worked": 0, "planned": 40, "other": 0, "overtime": 0, "total": 40 }
                    ]
                },
                {
                    "employeedID": "0000008", "name": "Kevin Richardson", "discipline": "Project Management", "hours": [
                     { "worked": 0, "planned": 5, "other": 0, "overtime": 0, "total": 40 }
                    ]
                },
                {
                    "employeedID": "0000017", "name": "Mandy Rizzo", "discipline": "Development", "hours": [
                     { "worked": 0, "planned": 4, "other": 0, "overtime": 0, "total": 40 }
                    ]
                },
                {
                    "employeedID": "0000019", "name": "Tara Kershaw", "discipline": "Development", "hours": [
                     { "worked": 0, "planned": 0, "other": 0, "overtime": 0, "total": 40 }
                    ]
                }
              ]
          },
          {
              "startDate": "2015-07-27 00:00:00",
              "endDate": "2015-07-31 23:59:59",
              "resources": [
                {
                    "employeedID": "0000012", "name": "Jason Kluber", "discipline": "Visual Design", "hours": [
                     { "worked": 0, "planned": 40, "other": 0, "overtime": 0, "total": 40 }
                    ]
                },
                {
                    "employeedID": "0000004", "name": "Justin Kazmir", "discipline": "User Experience", "hours": [
                     { "worked": 0, "planned": 8, "other": 0, "overtime": 0, "total": 40 }
                    ]
                },
                {
                    "employeedID": "0000008", "name": "Kevin Richardson", "discipline": "Project Management", "hours": [
                     { "worked": 0, "planned": 5, "other": 0, "overtime": 0, "total": 40 }
                    ]
                },
                {
                    "employeedID": "0000017", "name": "Mandy Rizzo", "discipline": "Development", "hours": [
                     { "worked": 0, "planned": 4, "other": 0, "overtime": 0, "total": 40 }
                    ]
                },
                {
                    "employeedID": "0000019", "name": "Tara Kershaw", "discipline": "Development", "hours": [
                     { "worked": 0, "planned": 0, "other": 0, "overtime": 0, "total": 40 }
                    ]
                }
              ]
          },
          {
              "startDate": "2015-08-03 00:00:00",
              "endDate": "2015-08-07 23:59:59",
              "resources": [
                {
                    "employeedID": "0000012", "name": "Jason Kluber", "discipline": "Visual Design", "hours": [
                     { "worked": 0, "planned": 40, "other": 0, "overtime": 0, "total": 40 }
                    ]
                },
                {
                    "employeedID": "0000004", "name": "Justin Kazmir", "discipline": "User Experience", "hours": [
                     { "worked": 0, "planned": 8, "other": 0, "overtime": 0, "total": 40 }
                    ]
                },
                {
                    "employeedID": "0000008", "name": "Kevin Richardson", "discipline": "Project Management", "hours": [
                     { "worked": 0, "planned": 5, "other": 0, "overtime": 0, "total": 40 }
                    ]
                },
                {
                    "employeedID": "0000017", "name": "Mandy Rizzo", "discipline": "Development", "hours": [
                     { "worked": 0, "planned": 4, "other": 0, "overtime": 0, "total": 40 }
                    ]
                },
                {
                    "employeedID": "0000019", "name": "Tara Kershaw", "discipline": "Development", "hours": [
                     { "worked": 0, "planned": 0, "other": 0, "overtime": 0, "total": 40 }
                    ]
                }
              ]
          },
          {
              "startDate": "2015-08-10 00:00:00",
              "endDate": "2015-08-14 23:59:59",
              "resources": [
                {
                    "employeedID": "0000012", "name": "Jason Kluber", "discipline": "Visual Design", "hours": [
                     { "worked": 0, "planned": 4, "other": 0, "overtime": 0, "total": 40 }
                    ]
                },
                {
                    "employeedID": "0000004", "name": "Justin Kazmir", "discipline": "User Experience", "hours": [
                     { "worked": 0, "planned": 4, "other": 0, "overtime": 0, "total": 40 }
                    ]
                },
                {
                    "employeedID": "0000008", "name": "Kevin Richardson", "discipline": "Project Management", "hours": [
                     { "worked": 0, "planned": 5, "other": 0, "overtime": 0, "total": 40 }
                    ]
                },
                {
                    "employeedID": "0000017", "name": "Mandy Rizzo", "discipline": "Development", "hours": [
                     { "worked": 0, "planned": 40, "other": 0, "overtime": 0, "total": 40 }
                    ]
                },
                {
                    "employeedID": "0000019", "name": "Tara Kershaw", "discipline": "Development", "hours": [
                     { "worked": 0, "planned": 40, "other": 0, "overtime": 0, "total": 40 }
                    ]
                }
              ]
          },
          {
              "startDate": "2015-08-17 00:00:00",
              "endDate": "2015-08-21 23:59:59",
              "resources": [
                {
                    "employeedID": "0000012", "name": "Jason Kluber", "discipline": "Visual Design", "hours": [
                     { "worked": 0, "planned": 4, "other": 0, "overtime": 0, "total": 40 }
                    ]
                },
                {
                    "employeedID": "0000004", "name": "Justin Kazmir", "discipline": "User Experience", "hours": [
                     { "worked": 0, "planned": 4, "other": 0, "overtime": 0, "total": 40 }
                    ]
                },
                {
                    "employeedID": "0000008", "name": "Kevin Richardson", "discipline": "Project Management", "hours": [
                     { "worked": 0, "planned": 5, "other": 0, "overtime": 0, "total": 40 }
                    ]
                },
                {
                    "employeedID": "0000017", "name": "Mandy Rizzo", "discipline": "Development", "hours": [
                     { "worked": 0, "planned": 40, "other": 0, "overtime": 0, "total": 40 }
                    ]
                },
                {
                    "employeedID": "0000019", "name": "Tara Kershaw", "discipline": "Development", "hours": [
                     { "worked": 0, "planned": 40, "other": 0, "overtime": 0, "total": 40 }
                    ]
                }
              ]
          },
          {
              "startDate": "2015-08-24 00:00:00",
              "endDate": "2015-08-28 23:59:59",
              "resources": [
                {
                    "employeedID": "0000012", "name": "Jason Kluber", "discipline": "Visual Design", "hours": [
                     { "worked": 0, "planned": 4, "other": 0, "overtime": 0, "total": 40 }
                    ]
                },
                {
                    "employeedID": "0000004", "name": "Justin Kazmir", "discipline": "User Experience", "hours": [
                     { "worked": 0, "planned": 4, "other": 0, "overtime": 0, "total": 40 }
                    ]
                },
                {
                    "employeedID": "0000008", "name": "Kevin Richardson", "discipline": "Project Management", "hours": [
                     { "worked": 0, "planned": 5, "other": 0, "overtime": 0, "total": 40 }
                    ]
                },
                {
                    "employeedID": "0000017", "name": "Mandy Rizzo", "discipline": "Development", "hours": [
                     { "worked": 0, "planned": 40, "other": 0, "overtime": 0, "total": 40 }
                    ]
                },
                {
                    "employeedID": "0000019", "name": "Tara Kershaw", "discipline": "Development", "hours": [
                     { "worked": 0, "planned": 40, "other": 0, "overtime": 0, "total": 40 }
                    ]
                }
              ]
          }
        ]
    },
    "10002": {
        "weeks": [
          {
              "startDate": "2015-05-25 00:00:00",
              "endDate": "2015-05-29 23:59:59",
              "resources": [
                {
                    "employeedID": "0000012", "name": "Jason Kluber", "discipline": "Visual Design", "hours": [
                     { "worked": 0, "planned": 0, "other": 0, "overtime": 0, "total": 40 }
                    ]
                },
                {
                    "employeedID": "0000004", "name": "Justin Kazmir", "discipline": "User Experience", "hours": [
                     { "worked": 40, "planned": 40, "other": 0, "overtime": 0, "total": 40 }
                    ]
                },
                {
                    "employeedID": "0000006", "name": "Evan McCutchen", "discipline": "Project Management", "hours": [
                     { "worked": 0, "planned": 4, "other": 0, "overtime": 0, "total": 40 }
                    ]
                },
                {
                    "employeedID": "0000022", "name": "Kris Tulowitzki", "discipline": "Development", "hours": [
                     { "worked": 0, "planned": 0, "other": 0, "overtime": 0, "total": 40 }
                    ]
                },
                {
                    "employeedID": "0000017", "name": "Mandy Rizzo", "discipline": "Development", "hours": [
                     { "worked": 0, "planned": 0, "other": 0, "overtime": 0, "total": 40 }
                    ]
                },
                {
                    "employeedID": "0000019", "name": "Tara Kershaw", "discipline": "Development", "hours": [
                     { "worked": 0, "planned": 0, "other": 0, "overtime": 0, "total": 40 }
                    ]
                }
              ]
          },
          {
              "startDate": "2015-06-01 00:00:00",
              "endDate": "2015-06-05 23:59:59",
              "resources": [
                {
                    "employeedID": "0000012", "name": "Jason Kluber", "discipline": "Visual Design", "hours": [
                     { "worked": 20, "planned": 20, "other": 0, "overtime": 0, "total": 40 }
                    ]
                },
                {
                    "employeedID": "0000004", "name": "Justin Kazmir", "discipline": "User Experience", "hours": [
                     { "worked": 40, "planned": 40, "other": 0, "overtime": 0, "total": 40 }
                    ]
                },
                {
                    "employeedID": "0000006", "name": "Evan McCutchen", "discipline": "Project Management", "hours": [
                     { "worked": 6, "planned": 6, "other": 0, "overtime": 0, "total": 40 }
                    ]
                },
                {
                    "employeedID": "0000022", "name": "Kris Tulowitzki", "discipline": "Development", "hours": [
                     { "worked": 0, "planned": 0, "other": 0, "overtime": 0, "total": 40 }
                    ]
                },
                {
                    "employeedID": "0000017", "name": "Mandy Rizzo", "discipline": "Development", "hours": [
                     { "worked": 0, "planned": 0, "other": 0, "overtime": 0, "total": 40 }
                    ]
                },
                {
                    "employeedID": "0000019", "name": "Tara Kershaw", "discipline": "Development", "hours": [
                     { "worked": 0, "planned": 0, "other": 0, "overtime": 0, "total": 40 }
                    ]
                }
              ]
          },
          {
              "startDate": "2015-06-08 00:00:00",
              "endDate": "2015-06-12 23:59:59",
              "resources": [
                {
                    "employeedID": "0000012", "name": "Jason Kluber", "discipline": "Visual Design", "hours": [
                     { "worked": 4, "planned": 4, "other": 0, "overtime": 0, "total": 40 }
                    ]
                },
                {
                    "employeedID": "0000004", "name": "Justin Kazmir", "discipline": "User Experience", "hours": [
                     { "worked": 40, "planned": 40, "other": 0, "overtime": 0, "total": 40 }
                    ]
                },
                {
                    "employeedID": "0000006", "name": "Evan McCutchen", "discipline": "Project Management", "hours": [
                     { "worked": 5, "planned": 5, "other": 0, "overtime": 0, "total": 40 }
                    ]
                },
                {
                    "employeedID": "0000022", "name": "Kris Tulowitzki", "discipline": "Development", "hours": [
                     { "worked": 4, "planned": 4, "other": 0, "overtime": 0, "total": 40 }
                    ]
                },
                {
                    "employeedID": "0000017", "name": "Mandy Rizzo", "discipline": "Development", "hours": [
                     { "worked": 0, "planned": 0, "other": 0, "overtime": 0, "total": 40 }
                    ]
                },
                {
                    "employeedID": "0000019", "name": "Tara Kershaw", "discipline": "Development", "hours": [
                     { "worked": 0, "planned": 0, "other": 0, "overtime": 0, "total": 40 }
                    ]
                }
              ]
          },
          {
              "startDate": "2015-06-15 00:00:00",
              "endDate": "2015-06-19 23:59:59",
              "resources": [
                {
                    "employeedID": "0000012", "name": "Jason Kluber", "discipline": "Visual Design", "hours": [
                     { "worked": 4, "planned": 4, "other": 0, "overtime": 0, "total": 40 }
                    ]
                },
                {
                    "employeedID": "0000004", "name": "Justin Kazmir", "discipline": "User Experience", "hours": [
                     { "worked": 40, "planned": 40, "other": 0, "overtime": 0, "total": 40 }
                    ]
                },
                {
                    "employeedID": "0000006", "name": "Evan McCutchen", "discipline": "Project Management", "hours": [
                     { "worked": 5, "planned": 5, "other": 0, "overtime": 0, "total": 40 }
                    ]
                },
                {
                    "employeedID": "0000022", "name": "Kris Tulowitzki", "discipline": "Development", "hours": [
                     { "worked": 4, "planned": 4, "other": 0, "overtime": 0, "total": 40 }
                    ]
                },
                {
                    "employeedID": "0000017", "name": "Mandy Rizzo", "discipline": "Development", "hours": [
                     { "worked": 0, "planned": 0, "other": 0, "overtime": 0, "total": 40 }
                    ]
                },
                {
                    "employeedID": "0000019", "name": "Tara Kershaw", "discipline": "Development", "hours": [
                     { "worked": 0, "planned": 0, "other": 0, "overtime": 0, "total": 40 }
                    ]
                }
              ]
          },
          {
              "startDate": "2015-06-22 00:00:00",
              "endDate": "2015-06-26 23:59:59",
              "resources": [
                {
                    "employeedID": "0000012", "name": "Jason Kluber", "discipline": "Visual Design", "hours": [
                     { "worked": 40, "planned": 40, "other": 0, "overtime": 0, "total": 40 }
                    ]
                },
                {
                    "employeedID": "0000004", "name": "Justin Kazmir", "discipline": "User Experience", "hours": [
                     { "worked": 0, "planned": 0, "other": 40, "overtime": 0, "total": 40 }
                    ]
                },
                {
                    "employeedID": "0000006", "name": "Evan McCutchen", "discipline": "Project Management", "hours": [
                     { "worked": 5, "planned": 5, "other": 0, "overtime": 0, "total": 40 }
                    ]
                },
                {
                    "employeedID": "0000022", "name": "Kris Tulowitzki", "discipline": "Development", "hours": [
                     { "worked": 4, "planned": 4, "other": 0, "overtime": 0, "total": 40 }
                    ]
                },
                {
                    "employeedID": "0000017", "name": "Mandy Rizzo", "discipline": "Development", "hours": [
                     { "worked": 0, "planned": 0, "other": 0, "overtime": 0, "total": 40 }
                    ]
                },
                {
                    "employeedID": "0000019", "name": "Tara Kershaw", "discipline": "Development", "hours": [
                     { "worked": 0, "planned": 0, "other": 0, "overtime": 0, "total": 40 }
                    ]
                }
              ]
          },
          {
              "startDate": "2015-06-29 00:00:00",
              "endDate": "2015-07-03 23:59:59",
              "resources": [
                {
                    "employeedID": "0000012", "name": "Jason Kluber", "discipline": "Visual Design", "hours": [
                     { "worked": 20, "planned": 20, "other": 20, "overtime": 0, "total": 40 }
                    ]
                },
                {
                    "employeedID": "0000004", "name": "Justin Kazmir", "discipline": "User Experience", "hours": [
                     { "worked": 0, "planned": 0, "other": 40, "overtime": 0, "total": 40 }
                    ]
                },
                {
                    "employeedID": "0000006", "name": "Evan McCutchen", "discipline": "Project Management", "hours": [
                     { "worked": 8, "planned": 8, "other": 0, "overtime": 0, "total": 40 }
                    ]
                },
                {
                    "employeedID": "0000022", "name": "Kris Tulowitzki", "discipline": "Development", "hours": [
                     { "worked": 4, "planned": 4, "other": 35, "overtime": 0, "total": 40 }
                    ]
                },
                {
                    "employeedID": "0000017", "name": "Mandy Rizzo", "discipline": "Development", "hours": [
                     { "worked": 0, "planned": 0, "other": 0, "overtime": 0, "total": 40 }
                    ]
                },
                {
                    "employeedID": "0000019", "name": "Tara Kershaw", "discipline": "Development", "hours": [
                     { "worked": 0, "planned": 0, "other": 0, "overtime": 0, "total": 40 }
                    ]
                }
              ]
          },
          {
              "startDate": "2015-07-06 00:00:00",
              "endDate": "2015-07-10 23:59:59",
              "resources": [
                {
                    "employeedID": "0000012", "name": "Jason Kluber", "discipline": "Visual Design", "hours": [
                     { "worked": 2, "planned": 4, "other": 4, "overtime": 0, "total": 40 }
                    ]
                },
                {
                    "employeedID": "0000004", "name": "Justin Kazmir", "discipline": "User Experience", "hours": [
                     { "worked": 0, "planned": 0, "other": 40, "overtime": 0, "total": 40 }
                    ]
                },
                {
                    "employeedID": "0000006", "name": "Evan McCutchen", "discipline": "Project Management", "hours": [
                     { "worked": 3, "planned": 9, "other": 0, "overtime": 0, "total": 40 }
                    ]
                },
                {
                    "employeedID": "0000022", "name": "Kris Tulowitzki", "discipline": "Development", "hours": [
                     { "worked": 4, "planned": 10, "other": 35, "overtime": 0, "total": 40 }
                    ]
                },
                {
                    "employeedID": "0000017", "name": "Mandy Rizzo", "discipline": "Development", "hours": [
                     { "worked": 10, "planned": 30, "other": 4, "overtime": 0, "total": 40 }
                    ]
                },
                {
                    "employeedID": "0000019", "name": "Tara Kershaw", "discipline": "Development", "hours": [
                     { "worked": 10, "planned": 30, "other": 0, "overtime": 0, "total": 40 }
                    ]
                }
              ]
          },
          {
              "startDate": "2015-07-13 00:00:00",
              "endDate": "2015-07-17 23:59:59",
              "resources": [
                {
                    "employeedID": "0000012", "name": "Jason Kluber", "discipline": "Visual Design", "hours": [
                     { "worked": 0, "planned": 4, "other": 4, "overtime": 0, "total": 40 }
                    ]
                },
                {
                    "employeedID": "0000004", "name": "Justin Kazmir", "discipline": "User Experience", "hours": [
                     { "worked": 0, "planned": 0, "other": 40, "overtime": 0, "total": 40 }
                    ]
                },
                {
                    "employeedID": "0000006", "name": "Evan McCutchen", "discipline": "Project Management", "hours": [
                     { "worked": 0, "planned": 9, "other": 0, "overtime": 0, "total": 40 }
                    ]
                },
                {
                    "employeedID": "0000022", "name": "Kris Tulowitzki", "discipline": "Development", "hours": [
                     { "worked": 0, "planned": 0, "other": 40, "overtime": 0, "total": 40 }
                    ]
                },
                {
                    "employeedID": "0000017", "name": "Mandy Rizzo", "discipline": "Development", "hours": [
                     { "worked": 0, "planned": 30, "other": 4, "overtime": 0, "total": 40 }
                    ]
                },
                {
                    "employeedID": "0000019", "name": "Tara Kershaw", "discipline": "Development", "hours": [
                     { "worked": 0, "planned": 40, "other": 0, "overtime": 0, "total": 40 }
                    ]
                }
              ]
          }
        ]
    },
    "10003": {
        "weeks": [
          {
              "startDate": "2015-08-03 00:00:00",
              "endDate": "2015-08-07 23:59:59",
              "resources": [
                {
                    "employeedID": "0000006", "name": "Evan McCutchen", "discipline": "Project Management", "hours": [
                     { "worked": 0, "planned": 4, "other": 0, "overtime": 0, "total": 40 }
                    ]
                }
              ]
          },
          {
              "startDate": "2015-08-10 00:00:00",
              "endDate": "2015-08-14 23:59:59",
              "resources": [
                {
                    "employeedID": "0000006", "name": "Evan McCutchen", "discipline": "Project Management", "hours": [
                     { "worked": 0, "planned": 6, "other": 0, "overtime": 0, "total": 40 }
                    ]
                }
              ]
          },
          {
              "startDate": "2015-08-17 00:00:00",
              "endDate": "2015-08-21 23:59:59",
              "resources": [
                {
                    "employeedID": "0000006", "name": "Evan McCutchen", "discipline": "Project Management", "hours": [
                     { "worked": 0, "planned": 5, "other": 0, "overtime": 0, "total": 40 }
                    ]
                }
              ]
          },
          {
              "startDate": "2015-08-24 00:00:00",
              "endDate": "2015-08-28 23:59:59",
              "resources": [
                {
                    "employeedID": "0000006", "name": "Evan McCutchen", "discipline": "Project Management", "hours": [
                     { "worked": 0, "planned": 5, "other": 0, "overtime": 0, "total": 40 }
                    ]
                }
              ]
          },
          {
              "startDate": "2015-08-31 00:00:00",
              "endDate": "2015-09-04 23:59:59",
              "resources": [
                {
                    "employeedID": "0000006", "name": "Evan McCutchen", "discipline": "Project Management", "hours": [
                     { "worked": 0, "planned": 5, "other": 0, "overtime": 0, "total": 40 }
                    ]
                }
              ]
          },
          {
              "startDate": "2015-09-07 00:00:00",
              "endDate": "2015-09-11 23:59:59",
              "resources": [
                {
                    "employeedID": "0000006", "name": "Evan McCutchen", "discipline": "Project Management", "hours": [
                     { "worked": 0, "planned": 5, "other": 0, "overtime": 0, "total": 40 }
                    ]
                }
              ]
          },
          {
              "startDate": "2015-09-14 00:00:00",
              "endDate": "2015-09-18 23:59:59",
              "resources": [
                {
                    "employeedID": "0000006", "name": "Evan McCutchen", "discipline": "Project Management", "hours": [
                     { "worked": 0, "planned": 5, "other": 0, "overtime": 0, "total": 40 }
                    ]
                }
              ]
          },
          {
              "startDate": "2015-09-21 00:00:00",
              "endDate": "2015-09-25 23:59:59",
              "resources": [
                {
                    "employeedID": "0000006", "name": "Evan McCutchen", "discipline": "Project Management", "hours": [
                     { "worked": 0, "planned": 8, "other": 0, "overtime": 0, "total": 40 }
                    ]
                }
              ]
          },
          {
              "startDate": "2015-09-28 00:00:00",
              "endDate": "2015-10-02 23:59:59",
              "resources": [
                {
                    "employeedID": "0000006", "name": "Evan McCutchen", "discipline": "Project Management", "hours": [
                     { "worked": 0, "planned": 9, "other": 0, "overtime": 0, "total": 40 }
                    ]
                }
              ]
          },
          {
              "startDate": "2015-10-05 00:00:00",
              "endDate": "2015-10-09 23:59:59",
              "resources": [
                {
                    "employeedID": "0000006", "name": "Evan McCutchen", "discipline": "Project Management", "hours": [
                     { "worked": 0, "planned": 9, "other": 0, "overtime": 0, "total": 40 }
                    ]
                }
              ]
          }
        ]
    }
};

var employees = [
  {
      "employee_id": '0000009',
      "name": "Wendy Weicher",
      "discipline": "Visual Design",
      "email": "wweicher@company.com",
      "phone": "123-456-7890",
      "projects": [10000],
      "tasks": [
        {
            "start_date": "2015-05-11 00:00:00",
            "end_date": "2015-05-15 23:59:59",
            "project_id": 10000,
            "task_id": 1001,
            "hrs_on_task": 5,
            "hrs_on_project": 20,
            "hrs_on_other": 0,
            "hrs_total": 20
        },
        {
            "start_date": "2015-05-18 00:00:00",
            "end_date": "2015-05-22 23:59:59",
            "project_id": 10000,
            "task_id": 1002,
            "hrs_on_task": 15,
            "hrs_on_project": 20,
            "hrs_on_other": 0,
            "hrs_total": 20
        },
        {
            "start_date": "2015-05-25 00:00:00",
            "end_date": "2015-05-29 23:59:59",
            "project_id": 10000,
            "task_id": 1003,
            "hrs_on_task": 4,
            "hrs_on_project": 4,
            "hrs_on_other": 0,
            "hrs_total": 4
        },
        {
            "start_date": "2015-06-01 00:00:00",
            "end_date": "2015-06-05 23:59:59",
            "project_id": 10000,
            "task_id": 1005,
            "hrs_on_task": 4,
            "hrs_on_project": 4,
            "hrs_on_other": 0,
            "hrs_total": 4
        },
        {
            "start_date": "2015-06-08 00:00:00",
            "end_date": "2015-06-12 23:59:59",
            "project_id": 10000,
            "task_id": 1008,
            "hrs_on_task": 4,
            "hrs_on_project": 4,
            "hrs_on_other": 0,
            "hrs_total": 4
        },
        {
            "start_date": "2015-06-15 00:00:00",
            "end_date": "2015-06-19 23:59:59",
            "project_id": 10000,
            "task_id": 1010,
            "hrs_on_task": 40,
            "hrs_on_project": 40,
            "hrs_on_other": 0,
            "hrs_total": 40
        },
        {
            "start_date": "2015-06-22 00:00:00",
            "end_date": "2015-06-26 23:59:59",
            "project_id": 10000,
            "task_id": 1012,
            "hrs_on_task": 40,
            "hrs_on_project": 40,
            "hrs_on_other": 0,
            "hrs_total": 40
        },
        {
            "start_date": "2015-06-29 00:00:00",
            "end_date": "2015-07-03 23:59:59",
            "project_id": 10000,
            "task_id": 1016,
            "hrs_on_task": 4,
            "hrs_on_project": 4,
            "hrs_on_other": 0,
            "hrs_total": 4
        },
        {
            "start_date": "2015-07-06 00:00:00",
            "end_date": "2015-07-10 23:59:59",
            "project_id": 10000,
            "task_id": 1019,
            "hrs_on_task": 5,
            "hrs_on_project": 5,
            "hrs_on_other": 0,
            "hrs_total": 5
        },
        {
            "start_date": "2015-07-13 00:00:00",
            "end_date": "2015-07-17 23:59:59",
            "project_id": 10000,
            "task_id": 1021,
            "hrs_on_task": 5,
            "hrs_on_project": 5,
            "hrs_on_other": 0,
            "hrs_total": 5
        }
      ]
  },
  {
      "employee_id": '0000012',
      "name": "Jason Kluber",
      "discipline": "Visual Design",
      "email": "jkluber@company.com",
      "phone": "123-456-7890",
      "projects": [10001, 10002],
      "tasks": [
        {
            "start_date": "2015-06-29 00:00:00",
            "end_date": "2015-07-03 23:59:59",
            "project_id": 10001,
            "task_id": 1023,
            "hrs_on_task": 5,
            "hrs_on_project": 20,
            "hrs_on_other": 0,
            "hrs_total": 20
        },
        {
            "start_date": "2015-06-29 00:00:00",
            "end_date": "2015-07-03 23:59:59",
            "project_id": 10001,
            "task_id": 1024,
            "hrs_on_task": 15,
            "hrs_on_project": 20,
            "hrs_on_other": 20,
            "hrs_total": 40
        },
        {
            "start_date": "2015-07-06 00:00:00",
            "end_date": "2015-07-10 23:59:59",
            "project_id": 10001,
            "task_id": 1025,
            "hrs_on_task": 4,
            "hrs_on_project": 4,
            "hrs_on_other": 4,
            "hrs_total": 8
        },
        {
            "start_date": "2015-07-13 00:00:00",
            "end_date": "2015-07-17 23:59:59",
            "project_id": 10001,
            "task_id": 1027,
            "hrs_on_task": 4,
            "hrs_on_project": 4,
            "hrs_on_other": 4,
            "hrs_total": 8
        },
        {
            "start_date": "2015-07-20 00:00:00",
            "end_date": "2015-07-24 23:59:59",
            "project_id": 10001,
            "task_id": 1030,
            "hrs_on_task": 4,
            "hrs_on_project": 4,
            "hrs_on_other": 0,
            "hrs_total": 4
        },
        {
            "start_date": "2015-07-27 00:00:00",
            "end_date": "2015-07-31 23:59:59",
            "project_id": 10001,
            "task_id": 1032,
            "hrs_on_task": 40,
            "hrs_on_project": 40,
            "hrs_on_other": 0,
            "hrs_total": 40
        },
        {
            "start_date": "2015-08-03 00:00:00",
            "end_date": "2015-08-07 23:59:59",
            "project_id": 10001,
            "task_id": 1034,
            "hrs_on_task": 40,
            "hrs_on_project": 40,
            "hrs_on_other": 0,
            "hrs_total": 40
        },
        {
            "start_date": "2015-08-10 00:00:00",
            "end_date": "2015-08-14 23:59:59",
            "project_id": 10001,
            "task_id": 1038,
            "hrs_on_task": 4,
            "hrs_on_project": 4,
            "hrs_on_other": 0,
            "hrs_total": 4
        },
        {
            "start_date": "2015-08-17 00:00:00",
            "end_date": "2015-08-21 23:59:59",
            "project_id": 10001,
            "task_id": 1041,
            "hrs_on_task": 4,
            "hrs_on_project": 4,
            "hrs_on_other": 0,
            "hrs_total": 4
        },
        {
            "start_date": "2015-08-24 00:00:00",
            "end_date": "2015-08-28 23:59:59",
            "project_id": 10001,
            "task_id": 1043,
            "hrs_on_task": 4,
            "hrs_on_project": 4,
            "hrs_on_other": 0,
            "hrs_total": 4
        },
        {
            "start_date": "2015-06-01 00:00:00",
            "end_date": "2015-06-05 23:59:59",
            "project_id": 10002,
            "task_id": 1045,
            "hrs_on_task": 20,
            "hrs_on_project": 20,
            "hrs_on_other": 0,
            "hrs_total": 20
        },
        {
            "start_date": "2015-06-08 00:00:00",
            "end_date": "2015-06-12 23:59:59",
            "project_id": 10002,
            "task_id": 1047,
            "hrs_on_task": 4,
            "hrs_on_project": 4,
            "hrs_on_other": 0,
            "hrs_total": 4
        },
        {
            "start_date": "2015-06-15 00:00:00",
            "end_date": "2015-06-19 23:59:59",
            "project_id": 10002,
            "task_id": 1050,
            "hrs_on_task": 4,
            "hrs_on_project": 4,
            "hrs_on_other": 0,
            "hrs_total": 4
        },
        {
            "start_date": "2015-06-22 00:00:00",
            "end_date": "2015-06-26 23:59:59",
            "project_id": 10002,
            "task_id": 1052,
            "hrs_on_task": 40,
            "hrs_on_project": 40,
            "hrs_on_other": 0,
            "hrs_total": 40
        },
        {
            "start_date": "2015-06-29 00:00:00",
            "end_date": "2015-07-03 23:59:59",
            "project_id": 10002,
            "task_id": 1054,
            "hrs_on_task": 20,
            "hrs_on_project": 20,
            "hrs_on_other": 20,
            "hrs_total": 40
        },
        {
            "start_date": "2015-07-06 00:00:00",
            "end_date": "2015-07-10 23:59:59",
            "project_id": 10002,
            "task_id": 1057,
            "hrs_on_task": 4,
            "hrs_on_project": 4,
            "hrs_on_other": 4,
            "hrs_total": 8
        },
        {
            "start_date": "2015-07-13 00:00:00",
            "end_date": "2015-07-17 23:59:59",
            "project_id": 10002,
            "task_id": 1059,
            "hrs_on_task": 4,
            "hrs_on_project": 4,
            "hrs_on_other": 4,
            "hrs_total": 8
        }
      ]
  },
  {
      "employee_id": '0000007',
      "name": "Jen Lombardo",
      "discipline": "User Experience",
      "email": "jlombardo@company.com",
      "phone": "123-456-7890",
      "projects": [10000],
      "tasks": [
        {
            "start_date": "2015-05-11 00:00:00",
            "end_date": "2015-05-15 23:59:59",
            "project_id": 10000,
            "task_id": 1000,
            "hrs_on_task": 40,
            "hrs_on_project": 40,
            "hrs_on_other": 0,
            "hrs_total": 40
        },
        {
            "start_date": "2015-05-18 00:00:00",
            "end_date": "2015-05-22 23:59:59",
            "project_id": 10000,
            "task_id": 1001,
            "hrs_on_task": 20,
            "hrs_on_project": 40,
            "hrs_on_other": 0,
            "hrs_total": 40
        },
        {
            "start_date": "2015-05-18 00:00:00",
            "end_date": "2015-05-22 23:59:59",
            "project_id": 10000,
            "task_id": 1002,
            "hrs_on_task": 20,
            "hrs_on_project": 40,
            "hrs_on_other": 0,
            "hrs_total": 40
        },
        {
            "start_date": "2015-05-25 00:00:00",
            "end_date": "2015-05-29 23:59:59",
            "project_id": 10000,
            "task_id": 1003,
            "hrs_on_task": 40,
            "hrs_on_project": 40,
            "hrs_on_other": 0,
            "hrs_total": 40
        },
        {
            "start_date": "2015-06-01 00:00:00",
            "end_date": "2015-06-05 23:59:59",
            "project_id": 10000,
            "task_id": 1005,
            "hrs_on_task": 40,
            "hrs_on_project": 40,
            "hrs_on_other": 0,
            "hrs_total": 40
        },
        {
            "start_date": "2015-06-08 00:00:00",
            "end_date": "2015-06-12 23:59:59",
            "project_id": 10000,
            "task_id": 1007,
            "hrs_on_task": 25,
            "hrs_on_project": 40,
            "hrs_on_other": 0,
            "hrs_total": 40
        },
        {
            "start_date": "2015-06-08 00:00:00",
            "end_date": "2015-06-12 23:59:59",
            "project_id": 10000,
            "task_id": 1008,
            "hrs_on_task": 15,
            "hrs_on_project": 40,
            "hrs_on_other": 0,
            "hrs_total": 40
        },
        {
            "start_date": "2015-06-15 00:00:00",
            "end_date": "2015-06-19 23:59:59",
            "project_id": 10000,
            "task_id": 1010,
            "hrs_on_task": 8,
            "hrs_on_project": 8,
            "hrs_on_other": 0,
            "hrs_total": 8
        },
        {
            "start_date": "2015-06-22 00:00:00",
            "end_date": "2015-06-26 23:59:59",
            "project_id": 10000,
            "task_id": 1012,
            "hrs_on_task": 8,
            "hrs_on_project": 8,
            "hrs_on_other": 0,
            "hrs_total": 8
        },
        {
            "start_date": "2015-06-29 00:00:00",
            "end_date": "2015-07-03 23:59:59",
            "project_id": 10000,
            "task_id": 1016,
            "hrs_on_task": 4,
            "hrs_on_project": 4,
            "hrs_on_other": 0,
            "hrs_total": 4
        },
        {
            "start_date": "2015-07-06 00:00:00",
            "end_date": "2015-07-10 23:59:59",
            "project_id": 10000,
            "task_id": 1019,
            "hrs_on_task": 5,
            "hrs_on_project": 5,
            "hrs_on_other": 0,
            "hrs_total": 5
        },
        {
            "start_date": "2015-07-13 00:00:00",
            "end_date": "2015-07-17 23:59:59",
            "project_id": 10000,
            "task_id": 1021,
            "hrs_on_task": 5,
            "hrs_on_project": 5,
            "hrs_on_other": 0,
            "hrs_total": 5
        }
      ]
  },
  {
      "employee_id": '0000004',
      "name": "Justin Kazmir",
      "discipline": "User Experience",
      "email": "jkazmir@company.com",
      "phone": "123-456-7890",
      "projects": [10001, 10002],
      "tasks": [
        {
            "start_date": "2015-06-22 00:00:00",
            "end_date": "2015-06-26 23:59:59",
            "project_id": 10001,
            "task_id": 1022,
            "hrs_on_task": 40,
            "hrs_on_project": 40,
            "hrs_on_other": 0,
            "hrs_total": 40
        },
        {
            "start_date": "2015-06-29 00:00:00",
            "end_date": "2015-07-03 23:59:59",
            "project_id": 10001,
            "task_id": 1023,
            "hrs_on_task": 20,
            "hrs_on_project": 40,
            "hrs_on_other": 0,
            "hrs_total": 40
        },
        {
            "start_date": "2015-06-29 00:00:00",
            "end_date": "2015-07-03 23:59:59",
            "project_id": 10001,
            "task_id": 1024,
            "hrs_on_task": 20,
            "hrs_on_project": 40,
            "hrs_on_other": 0,
            "hrs_total": 40
        },
        {
            "start_date": "2015-07-06 00:00:00",
            "end_date": "2015-07-10 23:59:59",
            "project_id": 10001,
            "task_id": 1025,
            "hrs_on_task": 40,
            "hrs_on_project": 40,
            "hrs_on_other": 0,
            "hrs_total": 40
        },
        {
            "start_date": "2015-07-13 00:00:00",
            "end_date": "2015-07-17 23:59:59",
            "project_id": 10001,
            "task_id": 1027,
            "hrs_on_task": 40,
            "hrs_on_project": 40,
            "hrs_on_other": 0,
            "hrs_total": 40
        },
        {
            "start_date": "2015-07-20 00:00:00",
            "end_date": "2015-07-24 23:59:59",
            "project_id": 10001,
            "task_id": 1029,
            "hrs_on_task": 25,
            "hrs_on_project": 40,
            "hrs_on_other": 0,
            "hrs_total": 40
        },
        {
            "start_date": "2015-07-20 00:00:00",
            "end_date": "2015-07-24 23:59:59",
            "project_id": 10001,
            "task_id": 1030,
            "hrs_on_task": 15,
            "hrs_on_project": 40,
            "hrs_on_other": 0,
            "hrs_total": 40
        },
        {
            "start_date": "2015-07-27 00:00:00",
            "end_date": "2015-07-31 23:59:59",
            "project_id": 10001,
            "task_id": 1032,
            "hrs_on_task": 8,
            "hrs_on_project": 8,
            "hrs_on_other": 0,
            "hrs_total": 8
        },
        {
            "start_date": "2015-08-03 00:00:00",
            "end_date": "2015-08-07 23:59:59",
            "project_id": 10001,
            "task_id": 1034,
            "hrs_on_task": 8,
            "hrs_on_project": 8,
            "hrs_on_other": 0,
            "hrs_total": 8
        },
        {
            "start_date": "2015-08-10 00:00:00",
            "end_date": "2015-08-14 23:59:59",
            "project_id": 10001,
            "task_id": 1038,
            "hrs_on_task": 4,
            "hrs_on_project": 4,
            "hrs_on_other": 0,
            "hrs_total": 4
        },
        {
            "start_date": "2015-08-17 00:00:00",
            "end_date": "2015-08-21 23:59:59",
            "project_id": 10001,
            "task_id": 1041,
            "hrs_on_task": 4,
            "hrs_on_project": 4,
            "hrs_on_other": 0,
            "hrs_total": 4
        },
        {
            "start_date": "2015-08-24 00:00:00",
            "end_date": "2015-08-28 23:59:59",
            "project_id": 10001,
            "task_id": 1043,
            "hrs_on_task": 4,
            "hrs_on_project": 4,
            "hrs_on_other": 0,
            "hrs_total": 4
        },
        {
            "start_date": "2015-05-25 00:00:00",
            "end_date": "2015-05-29 23:59:59",
            "project_id": 10002,
            "task_id": 1044,
            "hrs_on_task": 40,
            "hrs_on_project": 40,
            "hrs_on_other": 0,
            "hrs_total": 40
        },
        {
            "start_date": "2015-06-01 00:00:00",
            "end_date": "2015-06-05 23:59:59",
            "project_id": 10002,
            "task_id": 1045,
            "hrs_on_task": 30,
            "hrs_on_project": 40,
            "hrs_on_other": 0,
            "hrs_total": 40
        },
        {
            "start_date": "2015-06-01 00:00:00",
            "end_date": "2015-06-05 23:59:59",
            "project_id": 10002,
            "task_id": 1046,
            "hrs_on_task": 10,
            "hrs_on_project": 40,
            "hrs_on_other": 0,
            "hrs_total": 40
        },
        {
            "start_date": "2015-06-08 00:00:00",
            "end_date": "2015-06-12 23:59:59",
            "project_id": 10002,
            "task_id": 1047,
            "hrs_on_task": 40,
            "hrs_on_project": 40,
            "hrs_on_other": 0,
            "hrs_total": 40
        },
        {
            "start_date": "2015-06-15 00:00:00",
            "end_date": "2015-06-19 23:59:59",
            "project_id": 10002,
            "task_id": 1049,
            "hrs_on_task": 25,
            "hrs_on_project": 40,
            "hrs_on_other": 0,
            "hrs_total": 40
        },
        {
            "start_date": "2015-06-15 00:00:00",
            "end_date": "2015-06-19 23:59:59",
            "project_id": 10002,
            "task_id": 1050,
            "hrs_on_task": 15,
            "hrs_on_project": 40,
            "hrs_on_other": 0,
            "hrs_total": 40
        }
      ]
  },
  {
      "employee_id": '0000006',
      "name": "Evan McCutchen",
      "discipline": "Project Management",
      "email": "emccutchen@company.com",
      "phone": "123-456-7890",
      "projects": [10002, 10003],
      "tasks": [
        {
            "start_date": "2015-05-25 00:00:00",
            "end_date": "2015-05-29 23:59:59",
            "project_id": 10002,
            "task_id": 1044,
            "hrs_on_task": 4,
            "hrs_on_project": 4,
            "hrs_on_other": 0,
            "hrs_total": 4
        },
        {
            "start_date": "2015-06-01 00:00:00",
            "end_date": "2015-06-05 23:59:59",
            "project_id": 10002,
            "task_id": 1045,
            "hrs_on_task": 6,
            "hrs_on_project": 6,
            "hrs_on_other": 0,
            "hrs_total": 6
        },
        {
            "start_date": "2015-06-08 00:00:00",
            "end_date": "2015-06-12 23:59:59",
            "project_id": 10002,
            "task_id": 1047,
            "hrs_on_task": 5,
            "hrs_on_project": 5,
            "hrs_on_other": 0,
            "hrs_total": 5
        },
        {
            "start_date": "2015-06-15 00:00:00",
            "end_date": "2015-06-19 23:59:59",
            "project_id": 10002,
            "task_id": 1049,
            "hrs_on_task": 5,
            "hrs_on_project": 5,
            "hrs_on_other": 0,
            "hrs_total": 5
        },
        {
            "start_date": "2015-06-15 00:00:00",
            "end_date": "2015-06-19 23:59:59",
            "project_id": 10002,
            "task_id": 1050,
            "hrs_on_task": 5,
            "hrs_on_project": 5,
            "hrs_on_other": 0,
            "hrs_total": 5
        },
        {
            "start_date": "2015-06-22 00:00:00",
            "end_date": "2015-06-26 23:59:59",
            "project_id": 10002,
            "task_id": 1052,
            "hrs_on_task": 5,
            "hrs_on_project": 5,
            "hrs_on_other": 0,
            "hrs_total": 5
        },
        {
            "start_date": "2015-06-29 00:00:00",
            "end_date": "2015-07-03 23:59:59",
            "project_id": 10002,
            "task_id": 1054,
            "hrs_on_task": 4,
            "hrs_on_project": 8,
            "hrs_on_other": 0,
            "hrs_total": 8
        },
        {
            "start_date": "2015-06-29 00:00:00",
            "end_date": "2015-07-03 23:59:59",
            "project_id": 10002,
            "task_id": 1055,
            "hrs_on_task": 4,
            "hrs_on_project": 8,
            "hrs_on_other": 0,
            "hrs_total": 8
        },
        {
            "start_date": "2015-07-06 00:00:00",
            "end_date": "2015-07-10 23:59:59",
            "project_id": 10002,
            "task_id": 1056,
            "hrs_on_task": 3,
            "hrs_on_project": 9,
            "hrs_on_other": 0,
            "hrs_total": 9
        },
        {
            "start_date": "2015-07-06 00:00:00",
            "end_date": "2015-07-10 23:59:59",
            "project_id": 10002,
            "task_id": 1057,
            "hrs_on_task": 6,
            "hrs_on_project": 9,
            "hrs_on_other": 0,
            "hrs_total": 9
        },
        {
            "start_date": "2015-07-13 00:00:00",
            "end_date": "2015-07-17 23:59:59",
            "project_id": 10002,
            "task_id": 1058,
            "hrs_on_task": 3,
            "hrs_on_project": 9,
            "hrs_on_other": 0,
            "hrs_total": 9
        },
        {
            "start_date": "2015-07-13 00:00:00",
            "end_date": "2015-07-17 23:59:59",
            "project_id": 10002,
            "task_id": 1059,
            "hrs_on_task": 6,
            "hrs_on_project": 9,
            "hrs_on_other": 0,
            "hrs_total": 9
        },
        {
            "start_date": "2015-08-03 00:00:00",
            "end_date": "2015-08-07 23:59:59",
            "project_id": 10003,
            "task_id": 1060,
            "hrs_on_task": 4,
            "hrs_on_project": 4,
            "hrs_on_other": 0,
            "hrs_total": 4
        },
        {
            "start_date": "2015-08-10 00:00:00",
            "end_date": "2015-08-14 23:59:59",
            "project_id": 10003,
            "task_id": 1061,
            "hrs_on_task": 6,
            "hrs_on_project": 6,
            "hrs_on_other": 0,
            "hrs_total": 6
        },
        {
            "start_date": "2015-08-17 00:00:00",
            "end_date": "2015-08-21 23:59:59",
            "project_id": 10003,
            "task_id": 1063,
            "hrs_on_task": 5,
            "hrs_on_project": 5,
            "hrs_on_other": 0,
            "hrs_total": 5
        },
        {
            "start_date": "2015-08-24 00:00:00",
            "end_date": "2015-08-28 23:59:59",
            "project_id": 10003,
            "task_id": 1065,
            "hrs_on_task": 5,
            "hrs_on_project": 5,
            "hrs_on_other": 0,
            "hrs_total": 5
        },
        {
            "start_date": "2015-08-24 00:00:00",
            "end_date": "2015-08-28 23:59:59",
            "project_id": 10003,
            "task_id": 1066,
            "hrs_on_task": 5,
            "hrs_on_project": 5,
            "hrs_on_other": 0,
            "hrs_total": 5
        },
        {
            "start_date": "2015-08-31 00:00:00",
            "end_date": "2015-09-04 23:59:59",
            "project_id": 10003,
            "task_id": 1067,
            "hrs_on_task": 3,
            "hrs_on_project": 5,
            "hrs_on_other": 0,
            "hrs_total": 5
        },
        {
            "start_date": "2015-08-31 00:00:00",
            "end_date": "2015-09-04 23:59:59",
            "project_id": 10003,
            "task_id": 1068,
            "hrs_on_task": 2,
            "hrs_on_project": 5,
            "hrs_on_other": 0,
            "hrs_total": 5
        },
        {
            "start_date": "2015-09-07 00:00:00",
            "end_date": "2015-09-11 23:59:59",
            "project_id": 10003,
            "task_id": 1070,
            "hrs_on_task": 5,
            "hrs_on_project": 5,
            "hrs_on_other": 0,
            "hrs_total": 5
        },
        {
            "start_date": "2015-09-14 00:00:00",
            "end_date": "2015-09-18 23:59:59",
            "project_id": 10003,
            "task_id": 1072,
            "hrs_on_task": 5,
            "hrs_on_project": 5,
            "hrs_on_other": 0,
            "hrs_total": 5
        },
        {
            "start_date": "2015-09-21 00:00:00",
            "end_date": "2015-09-25 23:59:59",
            "project_id": 10003,
            "task_id": 1074,
            "hrs_on_task": 2,
            "hrs_on_project": 8,
            "hrs_on_other": 0,
            "hrs_total": 8
        },
        {
            "start_date": "2015-09-21 00:00:00",
            "end_date": "2015-09-25 23:59:59",
            "project_id": 10003,
            "task_id": 1075,
            "hrs_on_task": 2,
            "hrs_on_project": 8,
            "hrs_on_other": 0,
            "hrs_total": 8
        },

        {
            "start_date": "2015-09-21 00:00:00",
            "end_date": "2015-09-25 23:59:59",
            "project_id": 10003,
            "task_id": 1076,
            "hrs_on_task": 4,
            "hrs_on_project": 8,
            "hrs_on_other": 0,
            "hrs_total": 8
        },
        {
            "start_date": "2015-09-28 00:00:00",
            "end_date": "2015-10-02 23:59:59",
            "project_id": 10003,
            "task_id": 1077,
            "hrs_on_task": 2,
            "hrs_on_project": 9,
            "hrs_on_other": 0,
            "hrs_total": 9
        },
        {
            "start_date": "2015-09-28 00:00:00",
            "end_date": "2015-10-02 23:59:59",
            "project_id": 10003,
            "task_id": 1078,
            "hrs_on_task": 2,
            "hrs_on_project": 9,
            "hrs_on_other": 0,
            "hrs_total": 9
        },

        {
            "start_date": "2015-09-28 00:00:00",
            "end_date": "2015-10-02 23:59:59",
            "project_id": 10003,
            "task_id": 1079,
            "hrs_on_task": 5,
            "hrs_on_project": 9,
            "hrs_on_other": 0,
            "hrs_total": 9
        },
        {
            "start_date": "2015-10-05 00:00:00",
            "end_date": "2015-10-09 23:59:59",
            "project_id": 10003,
            "task_id": 1080,
            "hrs_on_task": 3,
            "hrs_on_project": 9,
            "hrs_on_other": 0,
            "hrs_total": 9
        },

        {
            "start_date": "2015-10-05 00:00:00",
            "end_date": "2015-10-09 23:59:59",
            "project_id": 10003,
            "task_id": 1081,
            "hrs_on_task": 6,
            "hrs_on_project": 9,
            "hrs_on_other": 0,
            "hrs_total": 9
        }
      ]
  },
  {
      "employee_id": '0000008',
      "name": "Richard Kevinson",
      "discipline": "Project Management",
      "email": "rkevinson@company.com",
      "phone": "123-456-7890",
      "projects": [10000, 10001],
      "tasks": [
        {
            "start_date": "2015-05-11 00:00:00",
            "end_date": "2015-05-15 23:59:59",
            "project_id": 10000,
            "task_id": 1000,
            "hrs_on_task": 4,
            "hrs_on_project": 4,
            "hrs_on_other": 0,
            "hrs_total": 4
        },
        {
            "start_date": "2015-05-18 00:00:00",
            "end_date": "2015-05-22 23:59:59",
            "project_id": 10000,
            "task_id": 1001,
            "hrs_on_task": 3,
            "hrs_on_project": 6,
            "hrs_on_other": 0,
            "hrs_total": 6
        },
        {
            "start_date": "2015-05-18 00:00:00",
            "end_date": "2015-05-22 23:59:59",
            "project_id": 10000,
            "task_id": 1002,
            "hrs_on_task": 3,
            "hrs_on_project": 6,
            "hrs_on_other": 0,
            "hrs_total": 6
        },
        {
            "start_date": "2015-05-25 00:00:00",
            "end_date": "2015-05-29 23:59:59",
            "project_id": 10000,
            "task_id": 1003,
            "hrs_on_task": 5,
            "hrs_on_project": 5,
            "hrs_on_other": 0,
            "hrs_total": 5
        },
        {
            "start_date": "2015-06-01 00:00:00",
            "end_date": "2015-06-05 23:59:59",
            "project_id": 10000,
            "task_id": 1005,
            "hrs_on_task": 5,
            "hrs_on_project": 5,
            "hrs_on_other": 0,
            "hrs_total": 5
        },
        {
            "start_date": "2015-06-08 00:00:00",
            "end_date": "2015-06-12 23:59:59",
            "project_id": 10000,
            "task_id": 1007,
            "hrs_on_task": 3,
            "hrs_on_project": 5,
            "hrs_on_other": 0,
            "hrs_total": 5
        },
        {
            "start_date": "2015-06-08 00:00:00",
            "end_date": "2015-06-12 23:59:59",
            "project_id": 10000,
            "task_id": 1008,
            "hrs_on_task": 2,
            "hrs_on_project": 5,
            "hrs_on_other": 0,
            "hrs_total": 5
        },
        {
            "start_date": "2015-06-15 00:00:00",
            "end_date": "2015-06-19 23:59:59",
            "project_id": 10000,
            "task_id": 1010,
            "hrs_on_task": 5,
            "hrs_on_project": 5,
            "hrs_on_other": 0,
            "hrs_total": 5
        },
        {
            "start_date": "2015-06-22 00:00:00",
            "end_date": "2015-06-26 23:59:59",
            "project_id": 10000,
            "task_id": 1012,
            "hrs_on_task": 5,
            "hrs_on_project": 5,
            "hrs_on_other": 4,
            "hrs_total": 9
        },
        {
            "start_date": "2015-06-29 00:00:00",
            "end_date": "2015-07-03 23:59:59",
            "project_id": 10000,
            "task_id": 1014,
            "hrs_on_task": 2,
            "hrs_on_project": 8,
            "hrs_on_other": 6,
            "hrs_total": 14
        },
        {
            "start_date": "2015-06-29 00:00:00",
            "end_date": "2015-07-03 23:59:59",
            "project_id": 10000,
            "task_id": 1015,
            "hrs_on_task": 2,
            "hrs_on_project": 8,
            "hrs_on_other": 6,
            "hrs_total": 14
        },
        {
            "start_date": "2015-06-29 00:00:00",
            "end_date": "2015-07-03 23:59:59",
            "project_id": 10000,
            "task_id": 1016,
            "hrs_on_task": 4,
            "hrs_on_project": 8,
            "hrs_on_other": 6,
            "hrs_total": 14
        },
        {
            "start_date": "2015-07-06 00:00:00",
            "end_date": "2015-07-10 23:59:59",
            "project_id": 10000,
            "task_id": 1017,
            "hrs_on_task": 2,
            "hrs_on_project": 10,
            "hrs_on_other": 5,
            "hrs_total": 15
        },
        {
            "start_date": "2015-07-06 00:00:00",
            "end_date": "2015-07-10 23:59:59",
            "project_id": 10000,
            "task_id": 1018,
            "hrs_on_task": 2,
            "hrs_on_project": 10,
            "hrs_on_other": 5,
            "hrs_total": 15
        },
        {
            "start_date": "2015-07-06 00:00:00",
            "end_date": "2015-07-10 23:59:59",
            "project_id": 10000,
            "task_id": 1019,
            "hrs_on_task": 6,
            "hrs_on_project": 10,
            "hrs_on_other": 5,
            "hrs_total": 15
        },
        {
            "start_date": "2015-07-13 00:00:00",
            "end_date": "2015-07-17 23:59:59",
            "project_id": 10000,
            "task_id": 1020,
            "hrs_on_task": 3,
            "hrs_on_project": 9,
            "hrs_on_other": 5,
            "hrs_total": 14
        },
        {
            "start_date": "2015-07-13 00:00:00",
            "end_date": "2015-07-17 23:59:59",
            "project_id": 10000,
            "task_id": 1021,
            "hrs_on_task": 6,
            "hrs_on_project": 9,
            "hrs_on_other": 5,
            "hrs_total": 14
        },
        {
            "start_date": "2015-06-22 00:00:00",
            "end_date": "2015-06-26 23:59:59",
            "project_id": 10001,
            "task_id": 1022,
            "hrs_on_task": 4,
            "hrs_on_project": 4,
            "hrs_on_other": 5,
            "hrs_total": 9
        },
        {
            "start_date": "2015-06-29 00:00:00",
            "end_date": "2015-07-03 23:59:59",
            "project_id": 10001,
            "task_id": 1023,
            "hrs_on_task": 3,
            "hrs_on_project": 6,
            "hrs_on_other": 8,
            "hrs_total": 14
        },
        {
            "start_date": "2015-06-29 00:00:00",
            "end_date": "2015-07-03 23:59:59",
            "project_id": 10001,
            "task_id": 1024,
            "hrs_on_task": 3,
            "hrs_on_project": 6,
            "hrs_on_other": 8,
            "hrs_total": 14
        },
        {
            "start_date": "2015-07-06 00:00:00",
            "end_date": "2015-07-10 23:59:59",
            "project_id": 10001,
            "task_id": 1025,
            "hrs_on_task": 5,
            "hrs_on_project": 5,
            "hrs_on_other": 10,
            "hrs_total": 15
        },
        {
            "start_date": "2015-07-13 00:00:00",
            "end_date": "2015-07-17 23:59:59",
            "project_id": 10001,
            "task_id": 1027,
            "hrs_on_task": 5,
            "hrs_on_project": 5,
            "hrs_on_other": 9,
            "hrs_total": 14
        },
        {
            "start_date": "2015-07-20 00:00:00",
            "end_date": "2015-07-24 23:59:59",
            "project_id": 10001,
            "task_id": 1029,
            "hrs_on_task": 3,
            "hrs_on_project": 5,
            "hrs_on_other": 0,
            "hrs_total": 5
        },
        {
            "start_date": "2015-07-20 00:00:00",
            "end_date": "2015-07-24 23:59:59",
            "project_id": 10001,
            "task_id": 1030,
            "hrs_on_task": 2,
            "hrs_on_project": 5,
            "hrs_on_other": 0,
            "hrs_total": 5
        },
        {
            "start_date": "2015-07-27 00:00:00",
            "end_date": "2015-07-31 23:59:59",
            "project_id": 10001,
            "task_id": 1032,
            "hrs_on_task": 5,
            "hrs_on_project": 5,
            "hrs_on_other": 0,
            "hrs_total": 5
        },
        {
            "start_date": "2015-08-03 00:00:00",
            "end_date": "2015-08-07 23:59:59",
            "project_id": 10001,
            "task_id": 1034,
            "hrs_on_task": 5,
            "hrs_on_project": 5,
            "hrs_on_other": 0,
            "hrs_total": 5
        },
        {
            "start_date": "2015-08-10 00:00:00",
            "end_date": "2015-08-14 23:59:59",
            "project_id": 10001,
            "task_id": 1036,
            "hrs_on_task": 2,
            "hrs_on_project": 8,
            "hrs_on_other": 0,
            "hrs_total": 8
        },
        {
            "start_date": "2015-08-10 00:00:00",
            "end_date": "2015-08-14 23:59:59",
            "project_id": 10001,
            "task_id": 1037,
            "hrs_on_task": 2,
            "hrs_on_project": 8,
            "hrs_on_other": 0,
            "hrs_total": 8
        },
        {
            "start_date": "2015-08-10 00:00:00",
            "end_date": "2015-08-14 23:59:59",
            "project_id": 10001,
            "task_id": 1038,
            "hrs_on_task": 4,
            "hrs_on_project": 8,
            "hrs_on_other": 0,
            "hrs_total": 8
        },
        {
            "start_date": "2015-08-17 00:00:00",
            "end_date": "2015-08-21 23:59:59",
            "project_id": 10001,
            "task_id": 1039,
            "hrs_on_task": 2,
            "hrs_on_project": 9,
            "hrs_on_other": 0,
            "hrs_total": 9
        },
        {
            "start_date": "2015-08-17 00:00:00",
            "end_date": "2015-08-21 23:59:59",
            "project_id": 10001,
            "task_id": 1040,
            "hrs_on_task": 2,
            "hrs_on_project": 9,
            "hrs_on_other": 0,
            "hrs_total": 9
        },
        {
            "start_date": "2015-08-17 00:00:00",
            "end_date": "2015-08-21 23:59:59",
            "project_id": 10001,
            "task_id": 1041,
            "hrs_on_task": 5,
            "hrs_on_project": 9,
            "hrs_on_other": 0,
            "hrs_total": 9
        },
        {
            "start_date": "2015-08-24 00:00:00",
            "end_date": "2015-08-28 23:59:59",
            "project_id": 10001,
            "task_id": 1042,
            "hrs_on_task": 3,
            "hrs_on_project": 9,
            "hrs_on_other": 0,
            "hrs_total": 9
        },
        {
            "start_date": "2015-08-24 00:00:00",
            "end_date": "2015-08-28 23:59:59",
            "project_id": 10001,
            "task_id": 1043,
            "hrs_on_task": 6,
            "hrs_on_project": 9,
            "hrs_on_other": 0,
            "hrs_total": 9
        }
      ]
  },
  {
      "employee_id": '0000002',
      "name": "Troy Gardner",
      "discipline": "Development",
      "email": "tgardner@company.com",
      "phone": "123-456-7890",
      "projects": [10000],
      "tasks": [
        {
            "start_date": "2015-05-25 00:00:00",
            "end_date": "2015-05-29 23:59:59",
            "project_id": 10000,
            "task_id": 1004,
            "hrs_on_task": 4,
            "hrs_on_project": 4,
            "hrs_on_other": 0,
            "hrs_total": 4
        },
        {
            "start_date": "2015-06-01 00:00:00",
            "end_date": "2015-06-05 23:59:59",
            "project_id": 10000,
            "task_id": 1006,
            "hrs_on_task": 4,
            "hrs_on_project": 4,
            "hrs_on_other": 0,
            "hrs_total": 4
        },
        {
            "start_date": "2015-06-01 00:00:00",
            "end_date": "2015-06-05 23:59:59",
            "project_id": 10000,
            "task_id": 1009,
            "hrs_on_task": 4,
            "hrs_on_project": 4,
            "hrs_on_other": 0,
            "hrs_total": 4
        },
        {
            "start_date": "2015-06-15 00:00:00",
            "end_date": "2015-06-19 23:59:59",
            "project_id": 10000,
            "task_id": 1011,
            "hrs_on_task": 4,
            "hrs_on_project": 4,
            "hrs_on_other": 0,
            "hrs_total": 4
        },
        {
            "start_date": "2015-06-22 00:00:00",
            "end_date": "2015-06-26 23:59:59",
            "project_id": 10000,
            "task_id": 1013,
            "hrs_on_task": 4,
            "hrs_on_project": 4,
            "hrs_on_other": 0,
            "hrs_total": 4
        },
        {
            "start_date": "2015-06-29 00:00:00",
            "end_date": "2015-07-03 23:59:59",
            "project_id": 10000,
            "task_id": 1014,
            "hrs_on_task": 30,
            "hrs_on_project": 40,
            "hrs_on_other": 0,
            "hrs_total": 40
        },
        {
            "start_date": "2015-06-29 00:00:00",
            "end_date": "2015-07-03 23:59:59",
            "project_id": 10000,
            "task_id": 1016,
            "hrs_on_task": 10,
            "hrs_on_project": 40,
            "hrs_on_other": 0,
            "hrs_total": 40
        },
        {
            "start_date": "2015-07-06 00:00:00",
            "end_date": "2015-07-10 23:59:59",
            "project_id": 10000,
            "task_id": 1017,
            "hrs_on_task": 30,
            "hrs_on_project": 40,
            "hrs_on_other": 0,
            "hrs_total": 40
        },
        {
            "start_date": "2015-07-06 00:00:00",
            "end_date": "2015-07-10 23:59:59",
            "project_id": 10000,
            "task_id": 1019,
            "hrs_on_task": 10,
            "hrs_on_project": 40,
            "hrs_on_other": 0,
            "hrs_total": 40
        },
        {
            "start_date": "2015-07-13 00:00:00",
            "end_date": "2015-07-17 23:59:59",
            "project_id": 10000,
            "task_id": 1020,
            "hrs_on_task": 30,
            "hrs_on_project": 40,
            "hrs_on_other": 0,
            "hrs_total": 40
        },
        {
            "start_date": "2015-07-13 00:00:00",
            "end_date": "2015-07-17 23:59:59",
            "project_id": 10000,
            "task_id": 1021,
            "hrs_on_task": 10,
            "hrs_on_project": 40,
            "hrs_on_other": 0,
            "hrs_total": 40
        }
      ]
  },
  {
      "employee_id": '0000017',
      "name": "Mandy Rizzo",
      "discipline": "Development",
      "email": "mrizzo@company.com",
      "phone": "123-456-7890",
      "projects": [10001, 10002],
      "tasks": [
        {
            "start_date": "2015-07-06 00:00:00",
            "end_date": "2015-07-10 23:59:59",
            "project_id": 10001,
            "task_id": 1026,
            "hrs_on_task": 4,
            "hrs_on_project": 4,
            "hrs_on_other": 30,
            "hrs_total": 34
        },
        {
            "start_date": "2015-07-13 00:00:00",
            "end_date": "2015-07-17 23:59:59",
            "project_id": 10001,
            "task_id": 1028,
            "hrs_on_task": 4,
            "hrs_on_project": 4,
            "hrs_on_other": 30,
            "hrs_total": 34
        },
        {
            "start_date": "2015-07-20 00:00:00",
            "end_date": "2015-07-24 23:59:59",
            "project_id": 10001,
            "task_id": 1031,
            "hrs_on_task": 4,
            "hrs_on_project": 4,
            "hrs_on_other": 0,
            "hrs_total": 4
        },
        {
            "start_date": "2015-07-27 00:00:00",
            "end_date": "2015-07-31 23:59:59",
            "project_id": 10001,
            "task_id": 1033,
            "hrs_on_task": 4,
            "hrs_on_project": 4,
            "hrs_on_other": 0,
            "hrs_total": 4
        },
        {
            "start_date": "2015-08-03 00:00:00",
            "end_date": "2015-08-07 23:59:59",
            "project_id": 10001,
            "task_id": 1035,
            "hrs_on_task": 4,
            "hrs_on_project": 4,
            "hrs_on_other": 0,
            "hrs_total": 4
        },
        {
            "start_date": "2015-08-10 00:00:00",
            "end_date": "2015-08-14 23:59:59",
            "project_id": 10001,
            "task_id": 1036,
            "hrs_on_task": 30,
            "hrs_on_project": 40,
            "hrs_on_other": 0,
            "hrs_total": 40
        },
        {
            "start_date": "2015-08-10 00:00:00",
            "end_date": "2015-08-14 23:59:59",
            "project_id": 10001,
            "task_id": 1038,
            "hrs_on_task": 10,
            "hrs_on_project": 40,
            "hrs_on_other": 0,
            "hrs_total": 40
        },
        {
            "start_date": "2015-08-17 00:00:00",
            "end_date": "2015-08-21 23:59:59",
            "project_id": 10001,
            "task_id": 1039,
            "hrs_on_task": 30,
            "hrs_on_project": 40,
            "hrs_on_other": 0,
            "hrs_total": 40
        },
        {
            "start_date": "2015-08-17 00:00:00",
            "end_date": "2015-08-21 23:59:59",
            "project_id": 10001,
            "task_id": 1041,
            "hrs_on_task": 10,
            "hrs_on_project": 40,
            "hrs_on_other": 0,
            "hrs_total": 40
        },
        {
            "start_date": "2015-08-24 00:00:00",
            "end_date": "2015-08-28 23:59:59",
            "project_id": 10001,
            "task_id": 1042,
            "hrs_on_task": 30,
            "hrs_on_project": 40,
            "hrs_on_other": 0,
            "hrs_total": 40
        },
        {
            "start_date": "2015-08-24 00:00:00",
            "end_date": "2015-08-28 23:59:59",
            "project_id": 10001,
            "task_id": 1043,
            "hrs_on_task": 10,
            "hrs_on_project": 40,
            "hrs_on_other": 0,
            "hrs_total": 40
        },
        {
            "start_date": "2015-07-06 00:00:00",
            "end_date": "2015-07-10 23:59:59",
            "project_id": 10002,
            "task_id": 1056,
            "hrs_on_task": 20,
            "hrs_on_project": 30,
            "hrs_on_other": 4,
            "hrs_total": 34
        },
        {
            "start_date": "2015-07-06 00:00:00",
            "end_date": "2015-07-10 23:59:59",
            "project_id": 10002,
            "task_id": 1057,
            "hrs_on_task": 10,
            "hrs_on_project": 30,
            "hrs_on_other": 4,
            "hrs_total": 34
        },
        {
            "start_date": "2015-07-13 00:00:00",
            "end_date": "2015-07-17 23:59:59",
            "project_id": 10002,
            "task_id": 1058,
            "hrs_on_task": 20,
            "hrs_on_project": 30,
            "hrs_on_other": 4,
            "hrs_total": 34
        },
        {
            "start_date": "2015-07-13 00:00:00",
            "end_date": "2015-07-17 23:59:59",
            "project_id": 10002,
            "task_id": 1059,
            "hrs_on_task": 10,
            "hrs_on_project": 30,
            "hrs_on_other": 4,
            "hrs_total": 34
        }
      ]
  },
  {
      "employee_id": '0000022',
      "name": "Kris Tulowitzki",
      "discipline": "Development",
      "email": "ktulowitzki@company.com",
      "phone": "123-456-7890",
      "projects": [10000, 10002],
      "tasks": [
        {
            "start_date": "2015-06-29 00:00:00",
            "end_date": "2015-07-03 23:59:59",
            "project_id": 10000,
            "task_id": 1015,
            "hrs_on_task": 25,
            "hrs_on_project": 35,
            "hrs_on_other": 0,
            "hrs_total": 35
        },
        {
            "start_date": "2015-06-29 00:00:00",
            "end_date": "2015-07-03 23:59:59",
            "project_id": 10000,
            "task_id": 1016,
            "hrs_on_task": 10,
            "hrs_on_project": 35,
            "hrs_on_other": 0,
            "hrs_total": 35
        },
        {
            "start_date": "2015-07-06 00:00:00",
            "end_date": "2015-07-10 23:59:59",
            "project_id": 10000,
            "task_id": 1018,
            "hrs_on_task": 25,
            "hrs_on_project": 35,
            "hrs_on_other": 10,
            "hrs_total": 45
        },
        {
            "start_date": "2015-07-06 00:00:00",
            "end_date": "2015-07-10 23:59:59",
            "project_id": 10000,
            "task_id": 1019,
            "hrs_on_task": 10,
            "hrs_on_project": 35,
            "hrs_on_other": 10,
            "hrs_total": 45
        },
        {
            "start_date": "2015-07-13 00:00:00",
            "end_date": "2015-07-17 23:59:59",
            "project_id": 10000,
            "task_id": 1020,
            "hrs_on_task": 30,
            "hrs_on_project": 40,
            "hrs_on_other": 0,
            "hrs_total": 40
        },
        {
            "start_date": "2015-07-13 00:00:00",
            "end_date": "2015-07-17 23:59:59",
            "project_id": 10000,
            "task_id": 1021,
            "hrs_on_task": 10,
            "hrs_on_project": 40,
            "hrs_on_other": 0,
            "hrs_total": 40
        },
        {
            "start_date": "2015-06-08 00:00:00",
            "end_date": "2015-06-12 23:59:59",
            "project_id": 10002,
            "task_id": 1048,
            "hrs_on_task": 4,
            "hrs_on_project": 4,
            "hrs_on_other": 0,
            "hrs_total": 4
        },
        {
            "start_date": "2015-06-15 00:00:00",
            "end_date": "2015-06-19 23:59:59",
            "project_id": 10002,
            "task_id": 1051,
            "hrs_on_task": 4,
            "hrs_on_project": 4,
            "hrs_on_other": 0,
            "hrs_total": 4
        },
        {
            "start_date": "2015-06-22 00:00:00",
            "end_date": "2015-06-26 23:59:59",
            "project_id": 10002,
            "task_id": 1053,
            "hrs_on_task": 4,
            "hrs_on_project": 4,
            "hrs_on_other": 0,
            "hrs_total": 4
        },
        {
            "start_date": "2015-06-29 00:00:00",
            "end_date": "2015-07-03 23:59:59",
            "project_id": 10002,
            "task_id": 1055,
            "hrs_on_task": 4,
            "hrs_on_project": 4,
            "hrs_on_other": 35,
            "hrs_total": 39
        },
        {
            "start_date": "2015-07-06 00:00:00",
            "end_date": "2015-07-10 23:59:59",
            "project_id": 10002,
            "task_id": 1057,
            "hrs_on_task": 10,
            "hrs_on_project": 10,
            "hrs_on_other": 35,
            "hrs_total": 45
        }
      ]
  },
  {
      "employee_id": '0000019',
      "name": "Tara Kershaw",
      "discipline": "Development",
      "email": "tkershaw@company.com",
      "phone": "123-456-7890",
      "projects": [10001, 10002],
      "tasks": [
        {
            "start_date": "2015-08-10 00:00:00",
            "end_date": "2015-08-14 23:59:59",
            "project_id": 10001,
            "task_id": 1037,
            "hrs_on_task": 30,
            "hrs_on_project": 40,
            "hrs_on_other": 0,
            "hrs_total": 40
        },
        {
            "start_date": "2015-08-10 00:00:00",
            "end_date": "2015-08-14 23:59:59",
            "project_id": 10001,
            "task_id": 1038,
            "hrs_on_task": 10,
            "hrs_on_project": 40,
            "hrs_on_other": 0,
            "hrs_total": 40
        },
        {
            "start_date": "2015-08-17 00:00:00",
            "end_date": "2015-08-21 23:59:59",
            "project_id": 10001,
            "task_id": 1040,
            "hrs_on_task": 30,
            "hrs_on_project": 40,
            "hrs_on_other": 0,
            "hrs_total": 40
        },
        {
            "start_date": "2015-08-17 00:00:00",
            "end_date": "2015-08-21 23:59:59",
            "project_id": 10001,
            "task_id": 1041,
            "hrs_on_task": 10,
            "hrs_on_project": 40,
            "hrs_on_other": 0,
            "hrs_total": 40
        },
        {
            "start_date": "2015-08-24 00:00:00",
            "end_date": "2015-08-28 23:59:59",
            "project_id": 10001,
            "task_id": 1042,
            "hrs_on_task": 30,
            "hrs_on_project": 40,
            "hrs_on_other": 0,
            "hrs_total": 40
        },
        {
            "start_date": "2015-08-24 00:00:00",
            "end_date": "2015-08-28 23:59:59",
            "project_id": 10001,
            "task_id": 1043,
            "hrs_on_task": 10,
            "hrs_on_project": 40,
            "hrs_on_other": 0,
            "hrs_total": 40
        },
        {
            "start_date": "2015-07-06 00:00:00",
            "end_date": "2015-07-10 23:59:59",
            "project_id": 10002,
            "task_id": 1056,
            "hrs_on_task": 20,
            "hrs_on_project": 30,
            "hrs_on_other": 0,
            "hrs_total": 30
        },
        {
            "start_date": "2015-07-06 00:00:00",
            "end_date": "2015-07-10 23:59:59",
            "project_id": 10002,
            "task_id": 1057,
            "hrs_on_task": 10,
            "hrs_on_project": 30,
            "hrs_on_other": 0,
            "hrs_total": 30
        },
        {
            "start_date": "2015-07-13 00:00:00",
            "end_date": "2015-07-17 23:59:59",
            "project_id": 10002,
            "task_id": 1058,
            "hrs_on_task": 30,
            "hrs_on_project": 40,
            "hrs_on_other": 0,
            "hrs_total": 40
        },
        {
            "start_date": "2015-07-13 00:00:00",
            "end_date": "2015-07-17 23:59:59",
            "project_id": 10002,
            "task_id": 1059,
            "hrs_on_task": 10,
            "hrs_on_project": 40,
            "hrs_on_other": 0,
            "hrs_total": 40
        }
      ]
  }
];


var taskList = {
    "10000": {
        "tasks": [
          {
              "id": 1000,
              "name": "Project Review",
              "startDate": "2015-05-11 00:00:00",
              "endDate": "2015-05-15 23:59:59",
              "discipline": "Project Management",
              "hours": "40",
              "flag": "ok",
              "resources": ['0000007', '0000008'],
              "assets": [
                {
                    "name": "Meeting Notes",
                    "url": "http://dropbox.com",
                    "type": "text", // image, file (doc, spreadsheet), web, music, video, etc.
                    "isDone": true
                }
              ]
          },
          {
              "id": 1001,
              "name": "Stakeholder Interviews",
              "startDate": "2015-05-18 00:00:00",
              "endDate": "2015-05-22 23:59:59",
              "discipline": "User Experience",
              "hours": "40",
              "flag": "ok",
              "resources": ['0000007', '0000008', '0000009'],
              "assets": [
                {
                    "name": "Prepare Interview Questions",
                    "url": "http://dropbox.com",
                    "type": "text", // image, file (doc, spreadsheet), web, music, video, etc.
                    "isDone": true
                },
                {
                    "name": "Record Interviews",
                    "url": "http://dropbox.com",
                    "type": "audio", // image, doc, spreedsheet, file, web, music, video, etc.
                    "isDone": true
                },
                {
                    "name": "Analyze Interview Data",
                    "url": "http://dropbox.com",
                    "type": "text", // image, doc, spreedsheet, file, web, music, video, etc.
                    "isDone": true
                }
              ]
          },
          {
              "id": 1002,
              "name": "Design Research",
              "startDate": "2015-05-18 00:00:00",
              "endDate": "2015-05-22 23:59:59",
              "discipline": "User Experience",
              "hours": "40",
              "flag": "ok",
              "resources": ['0000007', '0000008', '0000009'],
              "assets": [
                {
                    "name": "Research Notes",
                    "url": "http://dropbox.com",
                    "type": "text", // image, file (doc, spreadsheet), web, music, video, etc.
                    "isDone": true
                },
                {
                    "name": "Gather and Prepare Initial Design elements",
                    "url": "http://dropbox.com",
                    "type": "pdf", // image, file (doc, spreadsheet), web, music, video, etc.
                    "isDone": true
                }
              ]
          },
          {
              "id": 1003,
              "name": "Wireframing",
              "startDate": "2015-05-25 00:00:00",
              "endDate": "2015-05-29 23:59:59",
              "discipline": "User Experience",
              "hours": "40",
              "flag": "ok",
              "resources": ['0000007', '0000008', '0000009'],
              "assets": [
                {
                    "name": "Wireframe sketches",
                    "url": "http://dropbox.com",
                    "type": "image", // image, file (doc, spreadsheet), web, music, video, etc.
                    "isDone": true
                }
              ]
          },
          {
              "id": 1004,
              "name": "Development Research",
              "startDate": "2015-05-25 00:00:00",
              "endDate": "2015-05-29 23:59:59",
              "discipline": "Development",
              "hours": "40",
              "flag": "ok",
              "resources": ['0000002'],
              "assets": [
                {
                    "name": "Research Notes",
                    "url": "http://dropbox.com",
                    "type": "text", // image, file (doc, spreadsheet), web, music, video, etc.
                    "isDone": true
                }
              ]
          },
          {
              "id": 1005,
              "name": "Wireframing II",
              "startDate": "2015-06-01 00:00:00",
              "endDate": "2015-06-05 23:59:59",
              "discipline": "User Experience",
              "hours": "40",
              "flag": "ok",
              "resources": ['0000007', '0000008', '0000009'],
              "assets": [
                {
                    "name": "Wireframe sketches",
                    "url": "http://dropbox.com",
                    "type": "image", // image, file (doc, spreadsheet), web, music, video, etc.
                    "isDone": true
                }
              ]
          },
          {
              "id": 1006,
              "name": "Development Research II",
              "startDate": "2015-06-01 00:00:00",
              "endDate": "2015-06-05 23:59:59",
              "discipline": "Development",
              "hours": "40",
              "flag": "ok",
              "resources": ['0000002'],
              "assets": [
                {
                    "name": "Research Notes",
                    "url": "http://dropbox.com",
                    "type": "text", // image, file (doc, spreadsheet), web, music, video, etc.
                    "isDone": true
                }
              ]
          },
          {
              "id": 1007,
              "name": "Annotation of Interactions",
              "startDate": "2015-06-08 00:00:00",
              "endDate": "2015-06-12 23:59:59",
              "discipline": "User Experience",
              "hours": "40",
              "flag": "ok",
              "resources": ['0000007', '0000008'],
              "assets": [
                {
                    "name": "Prototyping",
                    "url": "http://dropbox.com",
                    "type": "text", // image, file (doc, spreadsheet), web, music, video, etc.
                    "isDone": true
                },
                {
                    "name": "Interaction Documentation",
                    "url": "http://dropbox.com",
                    "type": "pdf", // image, file (doc, spreadsheet), web, music, video, etc.
                    "isDone": true
                }
              ]
          },
          {
              "id": 1008,
              "name": "User Testing",
              "startDate": "2015-06-08 00:00:00",
              "endDate": "2015-06-12 23:59:59",
              "discipline": "User Experience",
              "hours": "40",
              "flag": "ok",
              "resources": ['0000007', '0000008', '0000009'],
              "assets": [
                {
                    "name": "Document Feedback from User Tests",
                    "url": "http://dropbox.com",
                    "type": "text", // image, file (doc, spreadsheet), web, music, video, etc.
                    "isDone": true
                },
                {
                    "name": "Make Adjustments to Prototype",
                    "url": "http://dropbox.com",
                    "type": "text", // image, file (doc, spreadsheet), web, music, video, etc.
                    "isDone": true
                },
                {
                    "name": "Make Adjustments to Wireframe",
                    "url": "http://dropbox.com",
                    "type": "image", // image, file (doc, spreadsheet), web, music, video, etc.
                    "isDone": true
                }
              ]
          },
          {
              "id": 1009,
              "name": "Development Research III",
              "startDate": "2015-06-08 00:00:00",
              "endDate": "2015-06-12 23:59:59",
              "discipline": "Development",
              "hours": "40",
              "flag": "ok",
              "resources": ['0000002'],
              "assets": [
                {
                    "name": "Research Notes",
                    "url": "http://dropbox.com",
                    "type": "text", // image, file (doc, spreadsheet), web, music, video, etc.
                    "isDone": true
                }
              ]
          },
          {
              "id": 1010,
              "name": "Visual Design",
              "startDate": "2015-06-15 00:00:00",
              "endDate": "2015-06-19 23:59:59",
              "discipline": "Visual Design",
              "hours": "40",
              "flag": "ok",
              "resources": ['0000009', '0000007', '0000008'],
              "assets": [
                {
                    "name": "Design Specs",
                    "url": "http://dropbox.com",
                    "type": "pdf", // image, file (doc, spreadsheet), web, music, video, etc.
                    "isDone": true
                },
                {
                    "name": "Design Previews",
                    "url": "http://dropbox.com",
                    "type": "image", // image, file (doc, spreadsheet), web, music, video, etc.
                    "isDone": true
                }
              ]
          },
          {
              "id": 1011,
              "name": "Development Research IV",
              "startDate": "2015-06-15 00:00:00",
              "endDate": "2015-06-19 23:59:59",
              "discipline": "Development",
              "hours": "40",
              "flag": "ok",
              "resources": ['0000002'],
              "assets": [
                {
                    "name": "Research Notes",
                    "url": "http://dropbox.com",
                    "type": "text", // image, file (doc, spreadsheet), web, music, video, etc.
                    "isDone": true
                }
              ]
          },
          {
              "id": 1012,
              "name": "Visual Design II",
              "startDate": "2015-06-22 00:00:00",
              "endDate": "2015-06-26 23:59:59",
              "discipline": "Visual Design",
              "hours": "40",
              "flag": "danger",
              "resources": ['0000009', '0000007', '0000008'],
              "assets": [
                {
                    "name": "Design Previews",
                    "url": "http://dropbox.com",
                    "type": "image", // image, file (doc, spreadsheet), web, music, video, etc.
                    "isDone": true
                }
              ]
          },
          {
              "id": 1013,
              "name": "Development Research V",
              "startDate": "2015-06-22 00:00:00",
              "endDate": "2015-06-26 23:59:59",
              "discipline": "Development",
              "hours": "40",
              "flag": "ok",
              "resources": ['0000002'],
              "assets": [
                {
                    "name": "Research Notes",
                    "url": "http://dropbox.com",
                    "type": "text", // image, file (doc, spreadsheet), web, music, video, etc.
                    "isDone": true
                }
              ]
          },
          {
              "id": 1014,
              "name": "Front-end Development",
              "startDate": "2015-06-29 00:00:00",
              "endDate": "2015-07-03 23:59:59",
              "discipline": "Development",
              "hours": "40",
              "flag": "ok",
              "resources": ['0000002', '0000008'],
              "assets": [
                {
                    "name": "Send Development Link to Project Manager",
                    "url": "http://dropbox.com",
                    "type": "text", // image, file (doc, spreadsheet), web, music, video, etc.
                    "isDone": true
                }
              ]
          },
          {
              "id": 1015,
              "name": "Back-end Development",
              "startDate": "2015-06-29 00:00:00",
              "endDate": "2015-07-03 23:59:59",
              "discipline": "Development",
              "hours": "40",
              "flag": "danger",
              "resources": ['0000022', '0000008'],
              "assets": [
                {
                    "name": "Update Task List Documentation",
                    "url": "http://dropbox.com",
                    "type": "text", // image, file (doc, spreadsheet), web, music, video, etc.
                    "isDone": true
                }
              ]
          },
          {
              "id": 1016,
              "name": "User Testing and Fix Bugs",
              "startDate": "2015-06-29 00:00:00",
              "endDate": "2015-07-03 23:59:59",
              "discipline": "User Experience",
              "hours": "40",
              "flag": "danger",
              "resources": ['0000007', '0000009', '0000008', '0000002', '0000022'],
              "assets": [
                {
                    "name": "User Test for Bugs",
                    "url": "http://dropbox.com",
                    "type": "text", // image, file (doc, spreadsheet), web, music, video, etc.
                    "isDone": true
                },
                {
                    "name": "Update Bug Report",
                    "url": "http://dropbox.com",
                    "type": "text", // image, file (doc, spreadsheet), web, music, video, etc.
                    "isDone": true
                },
                {
                    "name": "Fix Bugs",
                    "url": "http://dropbox.com",
                    "type": "text", // image, file (doc, spreadsheet), web, music, video, etc.
                    "isDone": true
                }
              ]
          },
          {
              "id": 1017,
              "name": "Front-end Development II",
              "startDate": "2015-07-06 00:00:00",
              "endDate": "2015-07-10 23:59:59",
              "discipline": "Development",
              "hours": "40",
              "flag": "ok",
              "resources": ['0000002', '0000008'],
              "assets": [
                {
                    "name": "Send Development Link to Project Manager",
                    "url": "http://dropbox.com",
                    "type": "text", // image, file (doc, spreadsheet), web, music, video, etc.
                    "isDone": false
                }
              ]
          },
          {
              "id": 1018,
              "name": "Back-end Development II",
              "startDate": "2015-07-06 00:00:00",
              "endDate": "2015-07-10 23:59:59",
              "discipline": "Development",
              "hours": "40",
              "flag": "warning",
              "resources": ['0000022', '0000008'],
              "assets": [
                {
                    "name": "Update Task List Documentation",
                    "url": "http://dropbox.com",
                    "type": "text", // image, file (doc, spreadsheet), web, music, video, etc.
                    "isDone": false
                }
              ]
          },
          {
              "id": 1019,
              "name": "User Testing and Fix Bugs II",
              "startDate": "2015-07-06 00:00:00",
              "endDate": "2015-07-10 23:59:59",
              "discipline": "User Experience",
              "hours": "40",
              "flag": "warning",
              "resources": ['0000007', '0000009', '0000008', '0000002', '0000022'],
              "assets": [
                {
                    "name": "User Test for Bugs",
                    "url": "http://dropbox.com",
                    "type": "text", // image, file (doc, spreadsheet), web, music, video, etc.
                    "isDone": false
                },
                {
                    "name": "Update Bug Report",
                    "url": "http://dropbox.com",
                    "type": "text", // image, file (doc, spreadsheet), web, music, video, etc.
                    "isDone": false
                },
                {
                    "name": "Fix Bugs",
                    "url": "http://dropbox.com",
                    "type": "text", // image, file (doc, spreadsheet), web, music, video, etc.
                    "isDone": false
                }
              ]
          },
          {
              "id": 1020,
              "name": "Finalize Development Development",
              "startDate": "2015-07-13 00:00:00",
              "endDate": "2015-07-17 23:59:59",
              "discipline": "Development",
              "hours": "40",
              "flag": "ok",
              "resources": ['0000002', '0000022', '0000008'],
              "assets": [
                {
                    "name": "Provide Updated Link of Project",
                    "url": "http://dropbox.com",
                    "type": "text", // image, file (doc, spreadsheet), web, music, video, etc.
                    "isDone": false
                }
              ]
          },
          {
              "id": 1021,
              "name": "Final Review and Launch",
              "startDate": "2015-07-13 00:00:00",
              "endDate": "2015-07-17 23:59:59",
              "discipline": "Project Management",
              "hours": "40",
              "flag": "ok",
              "resources": ['0000009', '0000007', '0000008', '0000002', '0000022'],
              "assets": [
                {
                    "name": "Provide Updated Link of Project",
                    "url": "http://dropbox.com",
                    "type": "text", // image, file (doc, spreadsheet), web, music, video, etc.
                    "isDone": false
                }
              ]
          }
        ]
    },
    "10001": {
        "tasks": [
          {
              "id": 1022,
              "name": "Project Review",
              "startDate": "2015-06-22 00:00:00",
              "endDate": "2015-06-26 23:59:59",
              "discipline": "Project Management",
              "hours": "40",
              "flag": "ok",
              "resources": ['0000004', '0000008'],
              "assets": [
                {
                    "name": "Meeting Notes",
                    "url": "http://dropbox.com",
                    "type": "text", // image, file (doc, spreadsheet), web, music, video, etc.
                    "isDone": true
                }
              ]
          },
          {
              "id": 1023,
              "name": "Stakeholder Interviews",
              "startDate": "2015-06-29 00:00:00",
              "endDate": "2015-07-03 23:59:59",
              "discipline": "User Experience",
              "hours": "40",
              "flag": "ok",
              "resources": ['0000004', '0000008', '0000012'],
              "assets": [
                {
                    "name": "Prepare Interview Questions",
                    "url": "http://dropbox.com",
                    "type": "text", // image, file (doc, spreadsheet), web, music, video, etc.
                    "isDone": true
                },
                {
                    "name": "Record Interviews",
                    "url": "http://dropbox.com",
                    "type": "audio", // image, doc, spreedsheet, file, web, music, video, etc.
                    "isDone": true
                },
                {
                    "name": "Analyze Interview Data",
                    "url": "http://dropbox.com",
                    "type": "text", // image, doc, spreedsheet, file, web, music, video, etc.
                    "isDone": true
                }
              ]
          },
          {
              "id": 1024,
              "name": "Design Research",
              "startDate": "2015-06-29 00:00:00",
              "endDate": "2015-07-03 23:59:59",
              "discipline": "User Experience",
              "hours": "40",
              "flag": "ok",
              "resources": ['0000004', '0000008', '0000012'],
              "assets": [
                {
                    "name": "Research Notes",
                    "url": "http://dropbox.com",
                    "type": "text", // image, file (doc, spreadsheet), web, music, video, etc.
                    "isDone": true
                },
                {
                    "name": "Gather and Prepare Initial Design elements",
                    "url": "http://dropbox.com",
                    "type": "pdf", // image, file (doc, spreadsheet), web, music, video, etc.
                    "isDone": true
                }
              ]
          },
          {
              "id": 1025,
              "name": "Wireframing",
              "startDate": "2015-07-06 00:00:00",
              "endDate": "2015-07-10 23:59:59",
              "discipline": "User Experience",
              "hours": "40",
              "flag": "ok",
              "resources": ['0000004', '0000008', '0000012'],
              "assets": [
                {
                    "name": "Wireframe sketches",
                    "url": "http://dropbox.com",
                    "type": "image", // image, file (doc, spreadsheet), web, music, video, etc.
                    "isDone": false
                }
              ]
          },
          {
              "id": 1026,
              "name": "Development Research",
              "startDate": "2015-07-06 00:00:00",
              "endDate": "2015-07-10 23:59:59",
              "discipline": "Development",
              "hours": "40",
              "flag": "ok",
              "resources": ['0000017'],
              "assets": [
                {
                    "name": "Research Notes",
                    "url": "http://dropbox.com",
                    "type": "text", // image, file (doc, spreadsheet), web, music, video, etc.
                    "isDone": false
                }
              ]
          },
          {
              "id": 1027,
              "name": "Wireframing II",
              "startDate": "2015-07-13 00:00:00",
              "endDate": "2015-07-17 23:59:59",
              "discipline": "User Experience",
              "hours": "40",
              "flag": "ok",
              "resources": ['0000004', '0000008', '0000012'],
              "assets": [
                {
                    "name": "Wireframe sketches",
                    "url": "http://dropbox.com",
                    "type": "image", // image, file (doc, spreadsheet), web, music, video, etc.
                    "isDone": false
                }
              ]
          },
          {
              "id": 1028,
              "name": "Development Research II",
              "startDate": "2015-07-13 00:00:00",
              "endDate": "2015-07-17 23:59:59",
              "discipline": "Development",
              "hours": "40",
              "flag": "ok",
              "resources": ['00000017'],
              "assets": [
                {
                    "name": "Research Notes",
                    "url": "http://dropbox.com",
                    "type": "text", // image, file (doc, spreadsheet), web, music, video, etc.
                    "isDone": false
                }
              ]
          },
          {
              "id": 1029,
              "name": "Annotation of Interactions",
              "startDate": "2015-07-20 00:00:00",
              "endDate": "2015-07-24 23:59:59",
              "discipline": "User Experience",
              "hours": "40",
              "flag": "ok",
              "resources": ['0000004', '0000008'],
              "assets": [
                {
                    "name": "Prototyping",
                    "url": "http://dropbox.com",
                    "type": "text", // image, file (doc, spreadsheet), web, music, video, etc.
                    "isDone": false
                },
                {
                    "name": "Interaction Documentation",
                    "url": "http://dropbox.com",
                    "type": "pdf", // image, file (doc, spreadsheet), web, music, video, etc.
                    "isDone": false
                }
              ]
          },
          {
              "id": 1030,
              "name": "User Testing",
              "startDate": "2015-07-20 00:00:00",
              "endDate": "2015-07-24 23:59:59",
              "discipline": "User Experience",
              "hours": "40",
              "flag": "ok",
              "resources": ['0000004', '0000008', '0000012'],
              "assets": [
                {
                    "name": "Document Feedback from User Tests",
                    "url": "http://dropbox.com",
                    "type": "text", // image, file (doc, spreadsheet), web, music, video, etc.
                    "isDone": false
                },
                {
                    "name": "Make Adjustments to Prototype",
                    "url": "http://dropbox.com",
                    "type": "text", // image, file (doc, spreadsheet), web, music, video, etc.
                    "isDone": false
                },
                {
                    "name": "Make Adjustments to Wireframe",
                    "url": "http://dropbox.com",
                    "type": "image", // image, file (doc, spreadsheet), web, music, video, etc.
                    "isDone": false
                }
              ]
          },
          {
              "id": 1031,
              "name": "Development Research III",
              "startDate": "2015-07-20 00:00:00",
              "endDate": "2015-07-24 23:59:59",
              "discipline": "Development",
              "hours": "40",
              "flag": "ok",
              "resources": ['00000017'],
              "assets": [
                {
                    "name": "Research Notes",
                    "url": "http://dropbox.com",
                    "type": "text", // image, file (doc, spreadsheet), web, music, video, etc.
                    "isDone": false
                }
              ]
          },
          {
              "id": 1032,
              "name": "Visual Design",
              "startDate": "2015-07-27 00:00:00",
              "endDate": "2015-07-31 23:59:59",
              "discipline": "Visual Design",
              "hours": "40",
              "flag": "ok",
              "resources": ['0000012', '0000004', '0000008'],
              "assets": [
                {
                    "name": "Design Specs",
                    "url": "http://dropbox.com",
                    "type": "pdf", // image, file (doc, spreadsheet), web, music, video, etc.
                    "isDone": false
                },
                {
                    "name": "Design Previews",
                    "url": "http://dropbox.com",
                    "type": "image", // image, file (doc, spreadsheet), web, music, video, etc.
                    "isDone": false
                }
              ]
          },
          {
              "id": 1033,
              "name": "Development Research IV",
              "startDate": "2015-07-27 00:00:00",
              "endDate": "2015-07-31 23:59:59",
              "discipline": "Development",
              "hours": "40",
              "flag": "ok",
              "resources": ['0000017'],
              "assets": [
                {
                    "name": "Research Notes",
                    "url": "http://dropbox.com",
                    "type": "text", // image, file (doc, spreadsheet), web, music, video, etc.
                    "isDone": false
                }
              ]
          },
          {
              "id": 1034,
              "name": "Visual Design II",
              "startDate": "2015-08-03 00:00:00",
              "endDate": "2015-08-07 23:59:59",
              "discipline": "Visual Design",
              "hours": "40",
              "flag": "ok",
              "resources": ['0000012', '0000004', '0000008'],
              "assets": [
                {
                    "name": "Design Previews",
                    "url": "http://dropbox.com",
                    "type": "image", // image, file (doc, spreadsheet), web, music, video, etc.
                    "isDone": false
                }
              ]
          },
          {
              "id": 1035,
              "name": "Development Research V",
              "startDate": "2015-08-03 00:00:00",
              "endDate": "2015-08-07 23:59:59",
              "discipline": "Development",
              "hours": "40",
              "flag": "ok",
              "resources": ['0000017'],
              "assets": [
                {
                    "name": "Research Notes",
                    "url": "http://dropbox.com",
                    "type": "text", // image, file (doc, spreadsheet), web, music, video, etc.
                    "isDone": false
                }
              ]
          },
          {
              "id": 1036,
              "name": "Front-end Development",
              "startDate": "2015-08-10 00:00:00",
              "endDate": "2015-08-14 23:59:59",
              "discipline": "Development",
              "hours": "40",
              "flag": "ok",
              "resources": ['0000017', '0000008'],
              "assets": [
                {
                    "name": "Send Development Link to Project Manager",
                    "url": "http://dropbox.com",
                    "type": "text", // image, file (doc, spreadsheet), web, music, video, etc.
                    "isDone": false
                }
              ]
          },
          {
              "id": 1037,
              "name": "Back-end Development",
              "startDate": "2015-08-10 00:00:00",
              "endDate": "2015-08-14 23:59:59",
              "discipline": "Development",
              "hours": "40",
              "flag": "ok",
              "resources": ['0000019', '0000008'],
              "assets": [
                {
                    "name": "Update Task List Documentation",
                    "url": "http://dropbox.com",
                    "type": "text", // image, file (doc, spreadsheet), web, music, video, etc.
                    "isDone": false
                }
              ]
          },
          {
              "id": 1038,
              "name": "User Testing and Fix Bugs",
              "startDate": "2015-08-10 00:00:00",
              "endDate": "2015-08-14 23:59:59",
              "discipline": "User Experience",
              "hours": "40",
              "flag": "ok",
              "resources": ['0000004', '0000012', '0000008', '0000017', '0000019'],
              "assets": [
                {
                    "name": "User Test for Bugs",
                    "url": "http://dropbox.com",
                    "type": "text", // image, file (doc, spreadsheet), web, music, video, etc.
                    "isDone": false
                },
                {
                    "name": "Update Bug Report",
                    "url": "http://dropbox.com",
                    "type": "text", // image, file (doc, spreadsheet), web, music, video, etc.
                    "isDone": false
                },
                {
                    "name": "Fix Bugs",
                    "url": "http://dropbox.com",
                    "type": "text", // image, file (doc, spreadsheet), web, music, video, etc.
                    "isDone": false
                }
              ]
          },
          {
              "id": 1039,
              "name": "Front-end Development II",
              "startDate": "2015-08-17 00:00:00",
              "endDate": "2015-08-21 23:59:59",
              "discipline": "Development",
              "hours": "40",
              "flag": "ok",
              "resources": ['0000017', '0000008'],
              "assets": [
                {
                    "name": "Send Development Link to Project Manager",
                    "url": "http://dropbox.com",
                    "type": "text", // image, file (doc, spreadsheet), web, music, video, etc.
                    "isDone": false
                }
              ]
          },
          {
              "id": 1040,
              "name": "Back-end Development II",
              "startDate": "2015-08-17 00:00:00",
              "endDate": "2015-08-21 23:59:59",
              "discipline": "Development",
              "hours": "40",
              "flag": "ok",
              "resources": ['0000019', '0000008'],
              "assets": [
                {
                    "name": "Update Task List Documentation",
                    "url": "http://dropbox.com",
                    "type": "text", // image, file (doc, spreadsheet), web, music, video, etc.
                    "isDone": false
                }
              ]
          },
          {
              "id": 1041,
              "name": "User Testing and Fix Bugs II",
              "startDate": "2015-08-17 00:00:00",
              "endDate": "2015-08-21 23:59:59",
              "discipline": "User Experience",
              "hours": "40",
              "flag": "ok",
              "resources": ['0000004', '00000012', '0000008', '0000017', '0000019'],
              "assets": [
                {
                    "name": "User Test for Bugs",
                    "url": "http://dropbox.com",
                    "type": "text", // image, file (doc, spreadsheet), web, music, video, etc.
                    "isDone": false
                },
                {
                    "name": "Update Bug Report",
                    "url": "http://dropbox.com",
                    "type": "text", // image, file (doc, spreadsheet), web, music, video, etc.
                    "isDone": false
                },
                {
                    "name": "Fix Bugs",
                    "url": "http://dropbox.com",
                    "type": "text", // image, file (doc, spreadsheet), web, music, video, etc.
                    "isDone": false
                }
              ]
          },
          {
              "id": 1042,
              "name": "Finalize Development Development",
              "startDate": "2015-08-24 00:00:00",
              "endDate": "2015-08-28 23:59:59",
              "discipline": "Development",
              "hours": "40",
              "flag": "ok",
              "resources": ['0000017', '0000019', '0000008'],
              "assets": [
                {
                    "name": "Provide Updated Link of Project",
                    "url": "http://dropbox.com",
                    "type": "text", // image, file (doc, spreadsheet), web, music, video, etc.
                    "isDone": false
                }
              ]
          },
          {
              "id": 1043,
              "name": "Final Review and Launch",
              "startDate": "2015-08-24 00:00:00",
              "endDate": "2015-08-28 23:59:59",
              "discipline": "Project Management",
              "hours": "40",
              "flag": "ok",
              "resources": ['0000012', '0000004', '0000008', '0000017', '0000019'],
              "assets": [
                {
                    "name": "Provide Updated Link of Project",
                    "url": "http://dropbox.com",
                    "type": "text", // image, file (doc, spreadsheet), web, music, video, etc.
                    "isDone": false
                }
              ]
          }
        ]
    },
    "10002": {
        "tasks": [
          {
              "id": 1044,
              "name": "Project Review",
              "startDate": "2015-05-25 00:00:00",
              "endDate": "2015-05-29 23:59:59",
              "discipline": "Project Management",
              "hours": "40",
              "flag": "ok",
              "resources": ['0000004', '0000006'],
              "assets": [
                {
                    "name": "Meeting Notes",
                    "url": "http://dropbox.com",
                    "type": "text", // image, file (doc, spreadsheet), web, music, video, etc.
                    "isDone": true
                }
              ]
          },
          {
              "id": 1045,
              "name": "Stakeholder Interviews",
              "startDate": "2015-06-01 00:00:00",
              "endDate": "2015-06-05 23:59:59",
              "discipline": "User Experience",
              "hours": "40",
              "flag": "ok",
              "resources": ['0000004', '0000006', '0000012'],
              "assets": [
                {
                    "name": "Prepare Interview Questions",
                    "url": "http://dropbox.com",
                    "type": "text", // image, file (doc, spreadsheet), web, music, video, etc.
                    "isDone": true
                },
                {
                    "name": "Record Interviews",
                    "url": "http://dropbox.com",
                    "type": "audio", // image, doc, spreedsheet, file, web, music, video, etc.
                    "isDone": true
                },
                {
                    "name": "Analyze Interview Data",
                    "url": "http://dropbox.com",
                    "type": "text", // image, doc, spreedsheet, file, web, music, video, etc.
                    "isDone": true
                }
              ]
          },
          {
              "id": 1046,
              "name": "Design Research",
              "startDate": "2015-06-01 00:00:00",
              "endDate": "2015-06-05 23:59:59",
              "discipline": "User Experience",
              "hours": "40",
              "flag": "ok",
              "resources": ['0000004', '0000006', '0000012'],
              "assets": [
                {
                    "name": "Research Notes",
                    "url": "http://dropbox.com",
                    "type": "text", // image, file (doc, spreadsheet), web, music, video, etc.
                    "isDone": true
                },
                {
                    "name": "Gather and Prepare Initial Design elements",
                    "url": "http://dropbox.com",
                    "type": "pdf", // image, file (doc, spreadsheet), web, music, video, etc.
                    "isDone": true
                }
              ]
          },
          {
              "id": 1047,
              "name": "Wireframing",
              "startDate": "2015-06-08 00:00:00",
              "endDate": "2015-06-12 23:59:59",
              "discipline": "User Experience",
              "hours": "40",
              "flag": "ok",
              "resources": ['0000004', '0000006', '0000012'],
              "assets": [
                {
                    "name": "Wireframe sketches",
                    "url": "http://dropbox.com",
                    "type": "image", // image, file (doc, spreadsheet), web, music, video, etc.
                    "isDone": true
                }
              ]
          },
          {
              "id": 1048,
              "name": "Development Research",
              "startDate": "2015-06-08 00:00:00",
              "endDate": "2015-06-12 23:59:59",
              "discipline": "Development",
              "hours": "40",
              "flag": "ok",
              "resources": ['0000022'],
              "assets": [
                {
                    "name": "Research Notes",
                    "url": "http://dropbox.com",
                    "type": "text", // image, file (doc, spreadsheet), web, music, video, etc.
                    "isDone": true
                }
              ]
          },
          {
              "id": 1049,
              "name": "Annotation of Interactions",
              "startDate": "2015-06-15 00:00:00",
              "endDate": "2015-06-19 23:59:59",
              "discipline": "User Experience",
              "hours": "40",
              "flag": "ok",
              "resources": ['0000004', '0000006'],
              "assets": [
                {
                    "name": "Prototyping",
                    "url": "http://dropbox.com",
                    "type": "text", // image, file (doc, spreadsheet), web, music, video, etc.
                    "isDone": true
                },
                {
                    "name": "Interaction Documentation",
                    "url": "http://dropbox.com",
                    "type": "pdf", // image, file (doc, spreadsheet), web, music, video, etc.
                    "isDone": true
                }
              ]
          },
          {
              "id": 1050,
              "name": "User Testing",
              "startDate": "2015-06-15 00:00:00",
              "endDate": "2015-06-19 23:59:59",
              "discipline": "User Experience",
              "hours": "40",
              "flag": "ok",
              "resources": ['0000004', '0000006', '0000012'],
              "assets": [
                {
                    "name": "Document Feedback from User Tests",
                    "url": "http://dropbox.com",
                    "type": "text", // image, file (doc, spreadsheet), web, music, video, etc.
                    "isDone": true
                },
                {
                    "name": "Make Adjustments to Prototype",
                    "url": "http://dropbox.com",
                    "type": "text", // image, file (doc, spreadsheet), web, music, video, etc.
                    "isDone": true
                },
                {
                    "name": "Make Adjustments to Wireframe",
                    "url": "http://dropbox.com",
                    "type": "image", // image, file (doc, spreadsheet), web, music, video, etc.
                    "isDone": true
                }
              ]
          },
          {
              "id": 1051,
              "name": "Development Research II",
              "startDate": "2015-06-15 00:00:00",
              "endDate": "2015-06-19 23:59:59",
              "discipline": "Development",
              "hours": "40",
              "flag": "ok",
              "resources": ['0000022'],
              "assets": [
                {
                    "name": "Research Notes",
                    "url": "http://dropbox.com",
                    "type": "text", // image, file (doc, spreadsheet), web, music, video, etc.
                    "isDone": true
                }
              ]
          },
          {
              "id": 1052,
              "name": "Visual Design",
              "startDate": "2015-06-22 00:00:00",
              "endDate": "2015-06-26 23:59:59",
              "discipline": "Visual Design",
              "hours": "40",
              "flag": "ok",
              "resources": ['0000006', '0000012'],
              "assets": [
                {
                    "name": "Design Specs",
                    "url": "http://dropbox.com",
                    "type": "pdf", // image, file (doc, spreadsheet), web, music, video, etc.
                    "isDone": true
                },
                {
                    "name": "Design Previews",
                    "url": "http://dropbox.com",
                    "type": "image", // image, file (doc, spreadsheet), web, music, video, etc.
                    "isDone": true
                }
              ]
          },
          {
              "id": 1053,
              "name": "Development Research II",
              "startDate": "2015-06-22 00:00:00",
              "endDate": "2015-06-26 23:59:59",
              "discipline": "Development",
              "hours": "40",
              "flag": "ok",
              "resources": ['0000022'],
              "assets": [
                {
                    "name": "Research Notes",
                    "url": "http://dropbox.com",
                    "type": "text", // image, file (doc, spreadsheet), web, music, video, etc.
                    "isDone": true
                }
              ]
          },
          {
              "id": 1054,
              "name": "Visual Design II",
              "startDate": "2015-06-29 00:00:00",
              "endDate": "2015-07-03 23:59:59",
              "discipline": "Visual Design",
              "hours": "40",
              "flag": "ok",
              "resources": ['0000006', '0000012'],
              "assets": [
                {
                    "name": "Design Specs",
                    "url": "http://dropbox.com",
                    "type": "pdf", // image, file (doc, spreadsheet), web, music, video, etc.
                    "isDone": true
                },
                {
                    "name": "Design Previews",
                    "url": "http://dropbox.com",
                    "type": "image", // image, file (doc, spreadsheet), web, music, video, etc.
                    "isDone": true
                }
              ]
          },
          {
              "id": 1055,
              "name": "Development",
              "startDate": "2015-06-29 00:00:00",
              "endDate": "2015-07-03 23:59:59",
              "discipline": "Development",
              "hours": "40",
              "flag": "ok",
              "resources": ['0000022', '0000006'],
              "assets": [
                {
                    "name": "Send Development Link to Project Manager",
                    "url": "http://dropbox.com",
                    "type": "text", // image, file (doc, spreadsheet), web, music, video, etc.
                    "isDone": true
                }
              ]
          },
          {
              "id": 1056,
              "name": "Development II",
              "startDate": "2015-07-06 00:00:00",
              "endDate": "2015-07-10 23:59:59",
              "discipline": "Development",
              "hours": "40",
              "flag": "ok",
              "resources": ['0000019', '0000017', '0000006'],
              "assets": [
                {
                    "name": "Update Task List Documentation",
                    "url": "http://dropbox.com",
                    "type": "text", // image, file (doc, spreadsheet), web, music, video, etc.
                    "isDone": false
                }
              ]
          },
          {
              "id": 1057,
              "name": "User Testing and Fix Bugs",
              "startDate": "2015-07-06 00:00:00",
              "endDate": "2015-07-10 23:59:59",
              "discipline": "User Experience",
              "hours": "40",
              "flag": "warning",
              "resources": ['0000012', '0000006', '0000022', '0000017', '0000019'],
              "assets": [
                {
                    "name": "User Test for Bugs",
                    "url": "http://dropbox.com",
                    "type": "text", // image, file (doc, spreadsheet), web, music, video, etc.
                    "isDone": false
                },
                {
                    "name": "Update Bug Report",
                    "url": "http://dropbox.com",
                    "type": "text", // image, file (doc, spreadsheet), web, music, video, etc.
                    "isDone": false
                },
                {
                    "name": "Fix Bugs",
                    "url": "http://dropbox.com",
                    "type": "text", // image, file (doc, spreadsheet), web, music, video, etc.
                    "isDone": false
                }
              ]
          },
          {
              "id": 1058,
              "name": "Development III",
              "startDate": "2015-07-13 00:00:00",
              "endDate": "2015-07-17 23:59:59",
              "discipline": "Development",
              "hours": "40",
              "flag": "ok",
              "resources": ['0000019', '0000017', '0000006'],
              "assets": [
                {
                    "name": "Send Development Link to Project Manager",
                    "url": "http://dropbox.com",
                    "type": "text", // image, file (doc, spreadsheet), web, music, video, etc.
                    "isDone": false
                }
              ]
          },
          {
              "id": 1059,
              "name": "Final Review and Launch",
              "startDate": "2015-07-13 00:00:00",
              "endDate": "2015-07-17 23:59:59",
              "discipline": "Project Management",
              "hours": "40",
              "flag": "ok",
              "resources": ['0000012', '0000006', '0000019', '0000017'],
              "assets": [
                {
                    "name": "Provide Updated Link of Project",
                    "url": "http://dropbox.com",
                    "type": "text", // image, file (doc, spreadsheet), web, music, video, etc.
                    "isDone": false
                }
              ]
          }
        ]
    },
    "10003": {
        "tasks": [
          {
              "id": 1060,
              "name": "Project Review",
              "startDate": "2015-08-03 00:00:00",
              "endDate": "2015-08-07 23:59:59",
              "discipline": "Project Management",
              "hours": "40",
              "flag": "ok",
              "resources": ['0000006'],
              "assets": [
                {
                    "name": "Meeting Notes",
                    "url": "http://dropbox.com",
                    "type": "text", // image, file (doc, spreadsheet), web, music, video, etc.
                    "isDone": false
                }
              ]
          },
          {
              "id": 1061,
              "name": "Stakeholder Interviews",
              "startDate": "2015-08-10 00:00:00",
              "endDate": "2015-08-14 23:59:59",
              "discipline": "User Experience",
              "hours": "40",
              "flag": "ok",
              "resources": ['0000006'],
              "assets": [
                {
                    "name": "Prepare Interview Questions",
                    "url": "http://dropbox.com",
                    "type": "text", // image, file (doc, spreadsheet), web, music, video, etc.
                    "isDone": false
                },
                {
                    "name": "Record Interviews",
                    "url": "http://dropbox.com",
                    "type": "audio", // image, doc, spreedsheet, file, web, music, video, etc.
                    "isDone": false
                },
                {
                    "name": "Analyze Interview Data",
                    "url": "http://dropbox.com",
                    "type": "text", // image, doc, spreedsheet, file, web, music, video, etc.
                    "isDone": false
                }
              ]
          },
          {
              "id": 1062,
              "name": "Design Research",
              "startDate": "2015-08-10 00:00:00",
              "endDate": "2015-08-14 23:59:59",
              "discipline": "User Experience",
              "hours": "40",
              "flag": "ok",
              "resources": [],
              "assets": [
                {
                    "name": "Research Notes",
                    "url": "http://dropbox.com",
                    "type": "text", // image, file (doc, spreadsheet), web, music, video, etc.
                    "isDone": false
                },
                {
                    "name": "Gather and Prepare Initial Design elements",
                    "url": "http://dropbox.com",
                    "type": "pdf", // image, file (doc, spreadsheet), web, music, video, etc.
                    "isDone": false
                }
              ]
          },
          {
              "id": 1063,
              "name": "Wireframing",
              "startDate": "2015-08-17 00:00:00",
              "endDate": "2015-08-21 23:59:59",
              "discipline": "User Experience",
              "hours": "40",
              "flag": "ok",
              "resources": ['0000006'],
              "assets": [
                {
                    "name": "Wireframe sketches",
                    "url": "http://dropbox.com",
                    "type": "image", // image, file (doc, spreadsheet), web, music, video, etc.
                    "isDone": false
                }
              ]
          },
          {
              "id": 1064,
              "name": "Development Research",
              "startDate": "2015-08-17 00:00:00",
              "endDate": "2015-08-21 23:59:59",
              "discipline": "Development",
              "hours": "40",
              "flag": "ok",
              "resources": [],
              "assets": [
                {
                    "name": "Research Notes",
                    "url": "http://dropbox.com",
                    "type": "text", // image, file (doc, spreadsheet), web, music, video, etc.
                    "isDone": false
                }
              ]
          },
          {
              "id": 1065,
              "name": "Wireframing II",
              "startDate": "2015-08-24 00:00:00",
              "endDate": "2015-08-28 23:59:59",
              "discipline": "User Experience",
              "hours": "40",
              "flag": "ok",
              "resources": ['0000006'],
              "assets": [
                {
                    "name": "Wireframe sketches",
                    "url": "http://dropbox.com",
                    "type": "image", // image, file (doc, spreadsheet), web, music, video, etc.
                    "isDone": false
                }
              ]
          },
          {
              "id": 1066,
              "name": "Development Research II",
              "startDate": "2015-08-24 00:00:00",
              "endDate": "2015-08-28 23:59:59",
              "discipline": "Development",
              "hours": "40",
              "flag": "ok",
              "resources": [],
              "assets": [
                {
                    "name": "Research Notes",
                    "url": "http://dropbox.com",
                    "type": "text", // image, file (doc, spreadsheet), web, music, video, etc.
                    "isDone": false
                }
              ]
          },
          {
              "id": 1067,
              "name": "Annotation of Interactions",
              "startDate": "2015-08-31 00:00:00",
              "endDate": "2015-09-04 23:59:59",
              "discipline": "User Experience",
              "hours": "40",
              "flag": "ok",
              "resources": ['0000006'],
              "assets": [
                {
                    "name": "Prototyping",
                    "url": "http://dropbox.com",
                    "type": "text", // image, file (doc, spreadsheet), web, music, video, etc.
                    "isDone": false
                },
                {
                    "name": "Interaction Documentation",
                    "url": "http://dropbox.com",
                    "type": "pdf", // image, file (doc, spreadsheet), web, music, video, etc.
                    "isDone": false
                }
              ]
          },
          {
              "id": 1068,
              "name": "User Testing",
              "startDate": "2015-08-31 00:00:00",
              "endDate": "2015-09-04 23:59:59",
              "discipline": "User Experience",
              "hours": "40",
              "flag": "ok",
              "resources": ['0000006'],
              "assets": [
                {
                    "name": "Document Feedback from User Tests",
                    "url": "http://dropbox.com",
                    "type": "text", // image, file (doc, spreadsheet), web, music, video, etc.
                    "isDone": false
                },
                {
                    "name": "Make Adjustments to Prototype",
                    "url": "http://dropbox.com",
                    "type": "text", // image, file (doc, spreadsheet), web, music, video, etc.
                    "isDone": false
                },
                {
                    "name": "Make Adjustments to Wireframe",
                    "url": "http://dropbox.com",
                    "type": "image", // image, file (doc, spreadsheet), web, music, video, etc.
                    "isDone": false
                }
              ]
          },
          {
              "id": 1069,
              "name": "Development Research III",
              "startDate": "2015-08-31 00:00:00",
              "endDate": "2015-09-04 23:59:59",
              "discipline": "Development",
              "hours": "40",
              "flag": "ok",
              "resources": [],
              "assets": [
                {
                    "name": "Research Notes",
                    "url": "http://dropbox.com",
                    "type": "text", // image, file (doc, spreadsheet), web, music, video, etc.
                    "isDone": false
                }
              ]
          },
          {
              "id": 1070,
              "name": "Visual Design",
              "startDate": "2015-09-07 00:00:00",
              "endDate": "2015-09-11 23:59:59",
              "discipline": "Visual Design",
              "hours": "40",
              "flag": "ok",
              "resources": ['0000006'],
              "assets": [
                {
                    "name": "Design Specs",
                    "url": "http://dropbox.com",
                    "type": "pdf", // image, file (doc, spreadsheet), web, music, video, etc.
                    "isDone": false
                },
                {
                    "name": "Design Previews",
                    "url": "http://dropbox.com",
                    "type": "image", // image, file (doc, spreadsheet), web, music, video, etc.
                    "isDone": false
                }
              ]
          },
          {
              "id": 1071,
              "name": "Development Research IV",
              "startDate": "2015-09-07 00:00:00",
              "endDate": "2015-09-11 23:59:59",
              "discipline": "Development",
              "hours": "40",
              "flag": "ok",
              "resources": [],
              "assets": [
                {
                    "name": "Research Notes",
                    "url": "http://dropbox.com",
                    "type": "text", // image, file (doc, spreadsheet), web, music, video, etc.
                    "isDone": false
                }
              ]
          },
          {
              "id": 1072,
              "name": "Visual Design II",
              "startDate": "2015-09-14 00:00:00",
              "endDate": "2015-09-18 23:59:59",
              "discipline": "Visual Design",
              "hours": "40",
              "flag": "ok",
              "resources": ['0000006'],
              "assets": [
                {
                    "name": "Design Previews",
                    "url": "http://dropbox.com",
                    "type": "image", // image, file (doc, spreadsheet), web, music, video, etc.
                    "isDone": false
                }
              ]
          },
          {
              "id": 1073,
              "name": "Development Research V",
              "startDate": "2015-09-14 00:00:00",
              "endDate": "2015-09-18 23:59:59",
              "discipline": "Development",
              "hours": "40",
              "flag": "ok",
              "resources": [],
              "assets": [
                {
                    "name": "Research Notes",
                    "url": "http://dropbox.com",
                    "type": "text", // image, file (doc, spreadsheet), web, music, video, etc.
                    "isDone": false
                }
              ]
          },
          {
              "id": 1074,
              "name": "Front-end Development",
              "startDate": "2015-09-21 00:00:00",
              "endDate": "2015-09-25 23:59:59",
              "discipline": "Development",
              "hours": "40",
              "flag": "ok",
              "resources": ['0000006'],
              "assets": [
                {
                    "name": "Send Development Link to Project Manager",
                    "url": "http://dropbox.com",
                    "type": "text", // image, file (doc, spreadsheet), web, music, video, etc.
                    "isDone": false
                }
              ]
          },
          {
              "id": 1075,
              "name": "Back-end Development",
              "startDate": "2015-09-21 00:00:00",
              "endDate": "2015-09-25 23:59:59",
              "discipline": "Development",
              "hours": "40",
              "flag": "ok",
              "resources": ['0000006'],
              "assets": [
                {
                    "name": "Update Task List Documentation",
                    "url": "http://dropbox.com",
                    "type": "text", // image, file (doc, spreadsheet), web, music, video, etc.
                    "isDone": false
                }
              ]
          },
          {
              "id": 1076,
              "name": "User Testing and Fix Bugs",
              "startDate": "2015-09-21 00:00:00",
              "endDate": "2015-09-25 23:59:59",
              "discipline": "User Experience",
              "hours": "40",
              "flag": "ok",
              "resources": ['0000006'],
              "assets": [
                {
                    "name": "User Test for Bugs",
                    "url": "http://dropbox.com",
                    "type": "text", // image, file (doc, spreadsheet), web, music, video, etc.
                    "isDone": false
                },
                {
                    "name": "Update Bug Report",
                    "url": "http://dropbox.com",
                    "type": "text", // image, file (doc, spreadsheet), web, music, video, etc.
                    "isDone": false
                },
                {
                    "name": "Fix Bugs",
                    "url": "http://dropbox.com",
                    "type": "text", // image, file (doc, spreadsheet), web, music, video, etc.
                    "isDone": false
                }
              ]
          },
          {
              "id": 1077,
              "name": "Front-end Development II",
              "startDate": "2015-09-28 00:00:00",
              "endDate": "2015-10-02 23:59:59",
              "discipline": "Development",
              "hours": "40",
              "flag": "ok",
              "resources": ['0000006'],
              "assets": [
                {
                    "name": "Send Development Link to Project Manager",
                    "url": "http://dropbox.com",
                    "type": "text", // image, file (doc, spreadsheet), web, music, video, etc.
                    "isDone": false
                }
              ]
          },
          {
              "id": 1078,
              "name": "Back-end Development II",
              "startDate": "2015-09-28 00:00:00",
              "endDate": "2015-10-02 23:59:59",
              "discipline": "Development",
              "hours": "40",
              "flag": "ok",
              "resources": ['0000006'],
              "assets": [
                {
                    "name": "Update Task List Documentation",
                    "url": "http://dropbox.com",
                    "type": "text", // image, file (doc, spreadsheet), web, music, video, etc.
                    "isDone": false
                }
              ]
          },
          {
              "id": 1079,
              "name": "User Testing and Fix Bugs II",
              "startDate": "2015-09-28 00:00:00",
              "endDate": "2015-10-02 23:59:59",
              "discipline": "User Experience",
              "hours": "40",
              "flag": "ok",
              "resources": ['0000006'],
              "assets": [
                {
                    "name": "User Test for Bugs",
                    "url": "http://dropbox.com",
                    "type": "text", // image, file (doc, spreadsheet), web, music, video, etc.
                    "isDone": false
                },
                {
                    "name": "Update Bug Report",
                    "url": "http://dropbox.com",
                    "type": "text", // image, file (doc, spreadsheet), web, music, video, etc.
                    "isDone": false
                },
                {
                    "name": "Fix Bugs",
                    "url": "http://dropbox.com",
                    "type": "text", // image, file (doc, spreadsheet), web, music, video, etc.
                    "isDone": false
                }
              ]
          },
          {
              "id": 1080,
              "name": "Finalize Development Development",
              "startDate": "2015-10-05 00:00:00",
              "endDate": "2015-10-09 23:59:59",
              "discipline": "Development",
              "hours": "40",
              "flag": "ok",
              "resources": ['0000006'],
              "assets": [
                {
                    "name": "Provide Updated Link of Project",
                    "url": "http://dropbox.com",
                    "type": "text", // image, file (doc, spreadsheet), web, music, video, etc.
                    "isDone": false
                }
              ]
          },
          {
              "id": 1081,
              "name": "Final Review and Launch",
              "startDate": "2015-10-05 00:00:00",
              "endDate": "2015-10-09 23:59:59",
              "discipline": "Project Management",
              "hours": "40",
              "flag": "ok",
              "resources": ['0000006'],
              "assets": [
                {
                    "name": "Provide Updated Link of Project",
                    "url": "http://dropbox.com",
                    "type": "text", // image, file (doc, spreadsheet), web, music, video, etc.
                    "isDone": false
                }
              ]
          }
        ]
    }



};
