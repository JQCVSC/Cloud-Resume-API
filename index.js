const functions = require('@google-cloud/functions-framework');
const { Firestore } = require('@google-cloud/firestore');

const firestore = new Firestore({
  projectId: 'cloud-resume-api-423120',
});

// Helper function to import JSON data into Firestore
async function importJsonToFirestore(jsonData) {
  const batch = firestore.batch();
  const collectionRef = firestore.collection('resume-database').doc('jeremy-resume');

  batch.set(collectionRef, jsonData[0]);

  await batch.commit();
  console.log('Data imported successfully!');
}

// Cloud Function to import and retrieve resume data
exports.resumeData = functions.http('resumeData', async (req, res) => {
  try {
    const jsonData = [
      {
        "Contact Details": [ {
          "Name": "JEREMY C.",
          "URL": "https://www.linkedin.com/in/jeremycodjoe/"
        }, ],
        "Education": [
          {
            "Institution": "The University of Chicago",
            "Field of Study": "DevOps",
            "studyType": "Certificate",
            "endDate": "2023"
          },
          {
            "institution": "Strayer University",
            "Field of Study": "Coding Fundamentals",
            "Degree Type": "Certificate",
            "endDate": "2022-08-30"
          },
          {
            "institution": "Colorado State University Global Campus",
            "Field of Study": "Cybersecurity",
            "Degree Type": "Certificate",
            "endDate": "2020"
          },
          {
            "Institution": "Arizona State University",
            "Field of Study": "Political Science",
            "Degree Type": "Bachelor",
            "EndDate": "2018"
          },
          {
            "Institution": "Rio Salado College",
            "Field of Study": "General Studies",
            "Degree Type": "Associate",
            "EndDate": "2015"
          }
        ],
        "certificates": [
          {
            "Name": "Google Cloud Digital Leader",
            "Date": "2024-04-30",
            "Issuer": "Google"
          },
          {
            "Name": "Microsoft Azure Certified: Fundamentals",
            "Date": "2022-10-17",
            "Issuer": "Microsoft"
          },
          {
            "Name": "Microsoft Certified: Security, Compliance, and Identity Fundamentals",
            "Date": "2022-06-11",
            "Issuer": "Microsoft"
          },
          {
            "Name": "Jira Fundamentals",
            "Date": "2022-05-20",
            "Issuer": "Atlassian University"
          },
          {
            "Name": "Microsoft 365 Certified: Fundamentals",
            "Date": "2022-04-18",
            "Issuer": "Microsoft"
          },
          {
            "Name": "Foundations of Leadership",
            "Date": "2021-06",
            "Issuer": "The National Society of Leadership and Success"
          }
        ],
        "skill Set": [
          {
            "Name": "Information Security",
            "keywords": [
              "IBM QRadar",
              "CyberArk",
              "RSA"
            ]
          },
          {
            "Name": "DevOps",
            "keywords": [
              "JIRA",
              "GitHub"
            ]
          },
          {
            "Name": "Cloud",
            "keywords": [
              "Google Cloud",
              "Microsoft Azure",
              "Amazon Web Services"
            ]
          },
          {
            "Name": "Technical Support",
            "keywords": [
              "Zendesk",
              "Service Now",
              "Help Desk Analyst",
              "Remote Work"
            ]
          }
        ],
        "Work History": [
          {
            "company": "Wells Fargo",
            "position": "Technology Operations Associate",
            "startDate": "2022-01",
            "endDate": "",
            "highlights": [
              "Provide technical support via telephone and email to handle inquiries, incidents and business requests raised by internal team members.",
              "Reset internal users Multi Factor Authentication via Microsoft Azure",
              "Provide support for mobile devices provisioning devices and installing work applications.",
              "Document and resolve basic problems regarding end-user computers, peripheral devices, business applications, and hardware and software where necessary."
            ]
          },
          {
            "company": "Cytellix Systems",
            "position": "Security Operations Center (SOC) Analyst",
            "startDate": "2021-08",
            "endDate": "2022-01",
            "highlights": [
              "Investigated SIEM alerts.",
              "Performed threat hunts for malicious I.P. 's within the network.",
              "Performed open-source intelligence research on malicious I.P.'s.",
              "Investigated alerts from firewalls, network and host-based intrusion prevention systems, web content gateways, email security appliances, threat intel platforms, antivirus products, vulnerability scanners and user behavior analytics platforms."
            ]
          },
          {
            "company": "Apex Systems",
            "position": "Information Security Analyst",
            "startDate": "2019-06",
            "endDate": "2021-05",
            "highlights": [
              "Supported key internal business units and organizations at Wells Fargo in securing and procuring access to internal proprietary applications.",
              "Provisioning identity and access.",
              "Verified access rules and policies that align with the bank's policies and standards.",
              "Provisioned employee access to internal applications"
            ]
          },
          {
            "company": "Insight Global",
            "position": "Benefits Enrollment Specialist",
            "startDate": "2018-08",
            "endDate": "2019-01",
            "highlights": [
              "Managed benefit enrollment projects for ADP clients and customers.",
              "Provided technical product support to customers.",
              "Guided customers on utilization of ADP software as a service.",
              "Provided web-based SaaS support."
            ]
          },
          {
            "company": "Mesa Community College",
            "position": "New Student Enrollment Specialist",
            "startDate": "2017-05",
            "endDate": "2018-05",
            "highlights": [
              "Provided web-based SaaS support to students.",
              "Provided in person student support.",
              "Assisted students with navigating school websites and online applications.",
              "Delivered presentations on new student orientations, updated databases, assisted students with website navigation, and processed admission applications (enrollment, withdrawal)."
            ]
          },
          {
            "company": "Rio Salado College",
            "position": "Student Enrollment Services",
            "startDate": "2016-05",
            "endDate": "2017-05",
            "highlights": [
              "Provided web-based SaaS support to students.",
              "Assisted students with building online class schedules.",
              "Assisted students with navigating school websites and online applications.",
              "Supported processing dual enrollment student applications, responded to student telephone inquiries, validated prerequisites for class placement."
            ]
          }
        ]
      }
    ];

    // Import the resume data into Firestore
    await importJsonToFirestore(jsonData);

    // Retrieve the resume data from Firestore
    const resumeDocRef = firestore.collection('resume-database').doc('jeremy-resume');
    const resumeDoc = await resumeDocRef.get();

    if (resumeDoc.exists) {
      const resumeData = resumeDoc.data();
      res.status(200).json(resumeData);
    } else {
      res.status(404).send('Resume data not found');
    }
  } catch (error) {
    console.error('Error processing resume data:', error);
    res.status(500).send('Error processing resume data');
  }
});