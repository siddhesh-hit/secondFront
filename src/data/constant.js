import news1 from "../../src/assets/Rectangle 6607.jpg";
import {
  imag1,
  imag2,
  imag3,
  imag4,
  imag5,
  imag6,
  legmem,
  debate,
  sessioncalender,
  legis,
  budget,
  election,
  gazette,
  gazettee,
  publication,
  media,
  judgments,
} from "../assets/homeicons";

const header = {
  marathi: {
    contact: `आमच्याशी संपर्क साधा`,
    language: `भाषा`,
    login: `साइन इन करा`,
    member: `सदस्य`,
    Gazette: `राजपत्र`,
    Debate: `सभागृहांचे कार्यवृत्त`,
    Elections: `निवडणूक निकाल`,
    Budget: `अर्थसंकल्प`,
    Legislation: `विधिविधान`,
  },
  english: {
    contact: `Contact Us`,
    language: `Language`,
    login: `Sign In`,
    member: `Member`,
    Gazette: `Gazette`,
    Debate: `Debate`,
    Elections: `Election results`,
    Budget: `Budget`,
    Legislation: `Legislation`,
  }
}

const home = {
  marathi: {
    header: `एक सर्वसमावेशक ज्ञान भांडार - विधिमंडळ प्रवचन,निवडणूक कथा, आणि नागरी सक्षमीकरण \n एक्सप्लोर करण्यासाठी तुमचे पोर्टल.आता शोधा!`,
    searchPlaceHolder: `शोध कीवर्ड प्रविष्ट करा`,
    legislature: `विधिमंडळ सदस्य`,
    hometitle: `आतापर्यंत एमएलएस ग्रंथालयातील संसाधने, दस्तऐवज डिजीटलाइज्ड झाली आहे ते एक्सप्लोरे करा`,
    nav: [
      {
        icon: legmem,
        title: `विधिमंडळ सदस्य`,
        childtext: [
          {
            name: `विधानपरिषद`,
            link: `/LegislativeCouncil`,
          },
          {
            name: `विधानसभा`,
            link: `/LegislativeAssembly`,
          }
        ]
      },
      {
        icon: debate,
        title: `सभागृहांचे कार्यवृत्त`,
        childtext: [
          {
            name: `सभागृह`,
            link: `/Debate`,
          },
          {
            name: `अधिवेशन`,
            link: `/Debate`,
          },
          {
            name: ` वर्ष`,
            link: `/Debate`,
          }
        ]
      },
      {
        icon: sessioncalender,
        title: `सत्र दिनदर्शिका`,
        childtext: [
          {
            name: `विधानपरिषद`,
            link: `/SessionCalender`,
          },
          {
            name: `विधानसभा`,
            link: `/SessionCalender`,
          }
        ]
      },
      {
        icon: legis,
        title: `विधिविधान`,
        childtext: [
          {
            name: `कायदे`,
            link: `/LegislationsBills`,
          },
          {
            name: `बिल`,
            link: `/LegislationsBills`,
          },
          {
            name: `नियम`,
            link: `/LegislationsBills`,
          }
        ]
      },
      {
        icon: budget,
        title: `अर्थसंकल्प`,
        childtext: [
          {
            name: `वर्ष`,
            link: `/Budgetyear`,
          },
          {
            name: `विभाग`,
            link: `/Budgetyear`,
          }
        ]
      },
      {
        icon: election,
        title: `निवडणूक निकाल`,
        childtext: [
          {
            name: `विधानपरिषद`,
            link: `/Electionresult`,
          },
          {
            name: `विधानसभा`,
            link: `/Electionresult`,
          }
        ]
      },
      {
        icon: gazette,
        title: `राजपत्र ( महाराष्ट्र राज्य )`,
        childtext: [
          {
            name: `भाग`,
            link: `/Gazette`,
          },
          {
            name: `विषय`,
            link: `/Gazette`,
          },
          {
            name: `विभाग`,
            link: `/Gazette`,
          }
        ]
      },
      {
        icon: publication,
        title: `प्रकाशने`,
        childtext: [
          {
            name: `योजना`,
            link: `/Publications`,
          },
          {
            name: `धोरण`,
          },
          {
            name: `विभाग`
          }
        ]
      },
      {
        icon: media,
        title: `मीडिया`,
        childtext: [
          {
            name: `ऑडिओ`,
          },
          {
            name: `व्हिडिओ`,
          },
          {
            name: `वृत्तपत्र`
          }
        ]
      },
      {
        icon: legis,
        title: `विधिमंडळ समिती`,
        childtext: [
          {
            name: `प्रकार`,
          },
          {
            name: `नाव`,
          }
        ]
      },
      {
        icon: gazettee,
        title: `दर्शनिका ( महाराष्ट्र राज्य )`,
        childtext: [
          {
            name: `ठिकाण`,
            link: `/Gazetteers`,
          },
          {
            name: `विषय`,
            link: `/Gazetteers`,
          }
        ]
      },
      {
        icon: judgments,
        title: `निर्णय`,
        childtext: [
          {
            name: `कोर्ट`,
            link: `/Judgments`,
          },
          {
            name: `विषय`,
            link: `/Judgments`,
          }
        ]
      }
    ],
    homebottom: [
      {
        icon: imag1,
        title: `लेख`,
        subtitle: `405 दशलक्ष`,
      },
      {
        icon: imag2,
        title: `विधेयके आणि कायदे`,
        subtitle: `405 दशलक्ष`,
      },
      {
        icon: imag3,
        title: `माध्यम फाइल्स`,
        subtitle: `405 दशलक्ष`,
      },
      {
        icon: imag4,
        title: `राजपत्र`,
        subtitle: `405 दशलक्ष`,
      },
      {
        icon: imag5,
        title: `इतर अहवाल`,
        subtitle: `405 दशलक्ष`,
      },
      {
        icon: imag6,
        title: `इतर अहवाल`,
        subtitle: `405 दशलक्ष`,
      }
    ]
  },
  english: {
    header: `A Comprehensive Knowledge Repository - Your Portal to Explore Legislative Discourse \n Election Narratives, and Civic Empowerment. Search and Discover Now!"`,
    searchPlaceHolder: `Enter the search keywords`,
    legislature: `Legislature Members`,
    nav: [
      {
        icon: legmem,
        title: `Legislature Members`,
        childtext: [
          {
            name: `Council`,
            link: `LegislativeCouncil`,
          },
          {
            name: `Assembly`,
            link: `LegislativeAssembly`,
          }
        ]
      },
      {
        icon: debate,
        title: `Debates`,
        childtext: [
          {
            name: `House`,
            link: `Debate`,
          },
          {
            name: `Session`,
            link: `Debate`,
          },
          {
            name: `Year`,
            link: `Debate`,
          }
        ]
      },
      {
        icon: sessioncalender,
        title: `Session Calendar`,
        childtext: [
          {
            name: `Council`,
            link: `/SessionCalender`,
          },
          {
            name: `Assembly`,
            link: `/SessionCalender`,
          }
        ]
      },
      {
        icon: legis,
        title: `Legislation`,
        childtext: [
          {
            name: `Acts`,
            link: `/LegislationsBills`,
          },
          {
            name: `Bills`,
            link: `/LegislationsBills`,
          },
          {
            name: `Rules`,
            link: `/LegislationsBills`,
          }
        ]
      },
      {
        icon: budget,
        title: `Budget`,
        childtext: [
          {
            name: `Year`,
            link: `/Budgetyear`,
          },
          {
            name: `Department`,
            link: `/Budgetyear`,
          }
        ]
      },
      {
        icon: election,
        title: `Election results`,
        childtext: [
          {
            name: `Council`,
            link: `/Electionresult`,
          },
          {
            name: `Assembly`,
            link: `/Electionresult`,
          }
        ]
      },
      {
        icon: gazette,
        title: `Gazette (GOM)`,
        childtext: [
          {
            name: `Part`,
            link: `/Gazette`,
          },
          {
            name: `Subject`,
            link: `/Gazette`,
          },
          {
            name: `Department`,
            link: `/Gazette`,
          }
        ]
      },
      {
        icon: publication,
        title: `Publication`,
        childtext: [
          {
            name: `Scheme`,
            link: `/Publications`,
          },
          {
            name: `Policy`,
            link: `/Publications`,
          },
          {
            name: `Department`,
            link: `/Publications`,
          }
        ]
      },
      {
        icon: media,
        title: `Media`,
        childtext: [
          {
            name: `Video`,
          },
          {
            name: `Audio`,
          },
          {
            name: `Newspaper`
          }
        ]
      },
      {
        icon: legis,
        title: `Legislative committee`,
        childtext: [
          {
            name: `Type`,
          },
          {
            name: `Department`,
          },
          {
            name: `Name`,
          }
        ]
      },
      {
        icon: gazettee,
        title: `Gazetteers (GOM)`,
        childtext: [
          {
            name: `Place`,
            link: `/Gazetteers`,
          },
          {
            name: `Topic`,
            link: `/Gazetteers`,
          }
        ]
      },
      {
        icon: judgments,
        title: `Judgments`,
        childtext: [
          {
            name: `Court`,
            link: `/Judgments`,
          },
          {
            name: `Subject`,
            link: `/Judgments`,
          }
        ]
      }
    ],
    hometitle: `Explore the resources, documents that have been digitized so far in the MLS library`,
    homebottom: [
      {
        icon: imag1,
        title: `Debates`,
        subtitle: `405 million`,
      },
      {
        icon: imag2,
        title: `Articles`,
        subtitle: `440 million`,
      },
      {
        icon: imag3,
        title: `Bills & Acts`,
        subtitle: `25 million`,
      },
      {
        icon: imag4,
        title: `Media files`,
        subtitle: `10 million`,
      },
      {
        icon: imag5,
        title: `Gazettes`,
        subtitle: `6 million`,
      },
      {
        icon: imag6,
        title: `Other Reports`,
        subtitle: `30 million`,
      }
    ]
  },
};

const library = {
  marathi: {
    title: `विधानमंडळ ग्रंथालय`,
    title1: `ग्रंथालय साहित्य संग्रह`,
    title2: `ग्रंथालयचे कार्य`,
    title3: `ग्रंथालय आज्ञावली`,
    title4: "ग्रंथालय समिती",
    title5: "ग्रंथालय नियम",
    title6: "संपर्क",
  },
  english: {
    title: `Library`,
    title1: `Library literature collection`,
    title2: `Library work`,
    title3: "Ordered the library",
    title4: "Library Committee",
    title5: "Library Rules",
    title6: "Contact",
  }
}

// const homeLink = [
//   "http://mls.org.in/",
//   "https:// gr.maharashtra.gov.in",
//   "https:// gr.maharashtra.gov.in",
//   "https:// beams.mahakosh.gov.in",
//   "https:// directorate.marathi.gov.in",
//   "https://eci.gov.in/",
//   "https://main.sci.govin/",
// ];

const homeLink = {
  marathi: {
    title: `इतर महत्वाचा दुवा`,
    title1: `सर्व लिंक`,
    title2: `मुख्य पृष्ठ`,
    button: `पुढे वाचा`
  },
  english: {
    title: `Other Important Link`,
    title1: `All Links`,
    title2: `Home`,
    button: `Read More`
  }
}

const feedback = {
  marathi: {
    title: `मुख्यपृष्ठ`,
    title1: `अभिप्राय`,
    title2: `आम्हाला संदेश पाठवा`,
    title3: `आपल्या मौल्यवान सूचनांसह आम्हाला संदेश पाठवा`,
    form1: `तुमचे पुर्ण नाव`,
    form2: `तुमचा ईमेल पत्ता`,
    form3: `तुमचा विषय`,
    form4: `आपला अभिप्राय`,
    submit: `प्रस्तुत करणे`,
    select: `कृपया विषय निवडा`,
    select1: `विधानमंडळ`,
    select2: `विधानपरिषद`,
    select3: `विधानसभा`,
    select4: `सत्र दिनदर्शिका`,
    select5: `ग्रंथालय`,
    select6: `इतर`,
    address: `महाराष्ट्र विधान, विधान भवन, बॅकबे रेक्लमेशन, विधान भवन मार्ग, मुंबई - ४०० ०३२.`,
    addresstitle: `पत्ता`,
    telephone: `दूरध्वनी क्रमांक`,
    email: `ई-मेल`,
  },
  english: {
    title: `Home`,
    title1: `Feedback`,
    title2: `Send us a Message`,
    title3: `Send us a message with valuable suggestion`,
    form1: `Your Full Name`,
    form2: `Your Email-id`,
    form3: `Your Subject`,
    form4: `Your Feedback`,
    submit: `Submit`,
    select: `Please select Subject`,
    select1: `Vidhan Mandal`,
    select2: `Council`,
    select3: `Assembly`,
    select4: `Session Calender`,
    select5: `Library`,
    select6: `Other`,
    address: `Maharashtra Vidhan Sabha, Vidhan Bhawan, Backbay Reclamation, Vidhan Bhavan Marg, Mumbai - 400 032.`,
    addresstitle: `Address`,
    telephone: `Telephone No`,
    email: `Email`,
  }
}

const helpdesk = {
  marathi: {
    title: `मुख्यपृष्ठ`,
    title1: `मदत कक्ष`,
    title3: `तुमची क्वेरी येथे पाठवा, आमचे कार्यकारी तुम्हाला मदत करतील`,
    form1: `तुमचे पुर्ण नाव`,
    form2: `तुमचा ईमेल पत्ता`,
    form3: `तुमचा दूरध्वनी क्रमांक`,
    form4: `तुमचा पत्ता`,
    form5: `तुमचा संदेश येथे`,
    submit: `प्रस्तुत करणे`,
    select: `कृपया विषय निवडा`,
    select1: `विधानमंडळ`,
    select2: `विधानपरिषद`,
    select3: `विधानसभा`,
    select4: `सत्र दिनदर्शिका`,
    select5: `ग्रंथालय`,
    select6: `इतर`,
    address: `महाराष्ट्र विधान, विधान भवन, बॅकबे रेक्लमेशन, विधान भवन मार्ग, मुंबई - ४०० ०३२.`,
    addresstitle: `पत्ता`,
    telephone: `दूरध्वनी क्रमांक`,
    email: `ई-मेल`,
  },
  english: {
    title: `Home`,
    title1: `Help Desk`,
    title3: `Send your query here, our executive will help you`,
    form1: `Your Full Name`,
    form2: `Your Email-id`,
    form3: `Your Telephone Number`,
    form4: `Your Address`,
    form5: `Your Message Here`,
    submit: `Submit`,
    select: `Please select Subject`,
    select1: `Vidhan Mandal`,
    select2: `Council`,
    select3: `Assembly`,
    select4: `Session Calender`,
    select5: `Library`,
    select6: `Other`,
    address: `Maharashtra Vidhan Sabha, Vidhan Bhawan, Backbay Reclamation, Vidhan Bhavan Marg, Mumbai - 400 032.`,
    addresstitle: `Address`,
    telephone: `Telephone No`,
    email: `Email`,
  }
}

const footer = {
  marathi: {
    title: `सतत विचारले जाणारे प्रश्न`,
    title1: `फोटो गॅलरी`,
    title2: `मुख्यपृष्ठ`,
    title3: `विधानमंडळ`,
    title4: `ग्रंथालय`,
    title5: `बातम्या`,
    title6: `राज्यपाल`,
    title7: `अभिप्राय`,
    title8: `मदत आणि समर्थन`,
    title9: `महत्वाचा दुवा`,
    title10: `सेवा अटी`,
    title11: `साइट मॅप`,
    title12: `सूचना`,
    title13: `अभ्यागतांची संख्या`,
  },
  english: {
    title: `FAQs`,
    title1: `Photo Gallery`,
    title2: `Home`,
    title3: `About`,
    title4: `Library`,
    title5: `News`,
    title6: `Governor`,
    title7: `Feedback`,
    title8: `Help & support`,
    title9: `Important Links`,
    title10: `Terms of service`,
    title11: `Sitemap`,
    title12: `Notification`,
    title13: `Vistors count `,
  }
}

const aboutUs = {
  marathi: {
    title: "विधानमंडळ",
    view: "PDF पहा",
    photoTitle: "फोटो आणि व्हिडिओ गॅलरी",
    link1: "मुख्यपृष्ठ",
    link2: "विधिमंडळ",
    link3: "विधानमंडळ",
  },
  english: {
    title: "Vidhan Mandal",
    view: "View PDF",
    photoTitle: "Photo and Video Gallery",
    link1: "Home",
    link2: "Legislature",
    link3: "Vidhan Mandal",
  },
};

const slider = [
  {
    image: news1,
    date: "25 August",
    data: "PROBATIONERS OF INDIAN RAILWAYS",
  },
  {
    image: news1,
    date: "25 August",
    data: "PROBATIONERS OF INDIAN RAILWAYS",
  },
  {
    image: news1,
    date: "25 August",
    data: "PROBATIONERS OF INDIAN RAILWAYS",
  },
  {
    image: news1,
    date: "25 August",
    data: "PROBATIONERS OF INDIAN RAILWAYS",
  },
  {
    image: news1,
    date: "25 August",
    data: "PROBATIONERS OF INDIAN RAILWAYS",
  },
  {
    image: news1,
    date: "25 August",
    data: "PROBATIONERS OF INDIAN RAILWAYS",
  },
  {
    image: news1,
    date: "25 August",
    data: "PROBATIONERS OF INDIAN RAILWAYS",
  },
  {
    image: news1,
    date: "25 August",
    data: "PROBATIONERS OF INDIAN RAILWAYS",
  },
];

const governor = {
  marathi: {
    title: "राज्यपाल",
    link1: "मुख्यपृष्ठ",
    link2: "विधिमंडळ",
    link3: "राज्यपाल",
    table1title: "माननीय राज्यपाल",
    table1head: "मा. राज्यपालांचे अभिभाषण",
    table2title: "राज्यपाल",
    political: "राजकीय कारकीर्द",
    table1head2: "माजी राज्यपाल",
    namehead: "नाव:",
    genderhead: "लिंग:",
    bDatehead: "जन्म दिनांक :",
    birthPlace: "जन्म ठीकाण : ",
  },
  english: {
    title: "Governor",
    link1: "Home",
    link2: "Legislature",
    link3: "Governor",
    table1title: "Honourable Governor",
    table1head: "Hon  . Governor Address",
    table2title: "Rajypal",
    political: "Political Career",
    table1head2: "Former Governor",
    namehead: "Name:",
    genderhead: "Gender: ",
    bDatehead: "Date of Birth :",
    birthPlace: "Place of Birth :",
  },
};

const council = {
  marathi: {
    title: "विधानपरिषद",
    describe: "",
    heading: "महाराष्ट्र विधान परिषद",
    bioSect: "चरित्रात्मक माहिती",
    bioSect1: "सदस्यांचे पक्षनिहाय प्रतिनिधीत्व",
    link1: "मुख्यपृष्ठ",
    link2: "विधानपरिषद",
    member: "",
    headerImp: "महत्वाची प्रकाशने",
    structure: "रचना",
    name: "महाराष्ट्र विधान परिषद",
    type: "प्रकार -  अपर  हाऊस",
    term: "मुदत मर्यादा - 6 वर्षे",
    seats: "जागा-७८",
  },
  english: {
    title: "Legislative Council",
    describe: "",
    heading: "Maharashtra Legislative Council",
    bioSect: "Biographical Information",
    bioSect1: "Party-wise Representation of Members",
    link1: "Home",
    link2: "Council",
    member: "",
    headerImp: "Important Publications",
    structure: "Structure",
    name: "Maharashtra VidhanParishad",
    type: "Type - Upper house",
    term: "Term Limit -6 Years",
    seats: "seats-78",
  },
};

const assembly = {
  marathi: {
    title: "विधानसभा",
    describe: "",
    heading: "महाराष्ट्र  विधानसभा",
    bioSect: "चरित्रात्मक माहिती",
    bioSect1: "सदस्यांचे पक्षनिहाय प्रतिनिधीत्व",
    link1: "मुख्यपृष्ठ",
    link2: "विधानसभा",
    member: "",
    headerImp: "महत्वाची प्रकाशने",
    structure: "रचना",
    name: "महाराष्ट्र विधान विधानसभा",
    type: "प्रकार -  अपर  हाऊस",
    term: "मुदत मर्यादा - 5 वर्षे",
    seats: "जागा-२८८",
  },
  english: {
    title: "Legislative Assembly",
    describe: "",
    heading: "Maharashtra Legislative Assembly",
    bioSect: "Biographical Information",
    bioSect1: "Party-wise Representation of Members",
    link1: "Home",
    link2: "Assembly",
    member: "",
    headerImp: "Important Publications",
    structure: "Structure",
    name: "Maharashtra Vidhansabha",
    type: "Type - Upper house",
    term: "Term Limit -5 Years",
    seats: "seats-288",
  },
};

const councilMember = {
  marathi: {
    title: "विधान परिषद सदस्यांची यादी",
    search: "शोधा",
    link1: "मुख्यपृष्ठ",
    link2: "विधानमंडळ सदस्य",
    link3: "विधान परिषद सदस्यांची यादी",
    heading: {
      one: "द्वारे शोधा",
      two: "प्रथमच निवडून आलेले सदस्य",
      three: "महिला सदस्य",
    },
    subHeading: ["पक्षनिहाय", "मतदारसंघनिहाय", "आडनावसुज्ञ", "जिल्हानिहाय"],
    table: ["क्र.", "नाव", "मतदारसंघ", "पक्ष", "लिंग"],
    structure: {
      one: "सांख्यिकीय विश्लेषण",
      two: "सदस्यांचे वय विभाग",
      three: "महिला सदस्यांची यादी",
    },
  },
  english: {
    title: "List of Legislative Council Members",
    search: "Search",
    link1: "Home",
    link2: "Member of Legislature",
    link3: "List of Legislative Council Members",
    heading: {
      one: "Search by",
      two: "First Time Elected Members",
      three: "Women Members",
    },
    subHeading: [
      "Party wise",
      "Constituency wise",
      "Surname wise",
      "District wise",
    ],
    table: ["Sr.No.", "Name", "Constituency", "Party", "Gender"],
    structure: {
      one: "Statistical Analysis",
      two: "Age Section of Members",
      three: "List of Women Members",
    },
  },
};

const assemblyMember = {
  marathi: {
    title: "१४वी विधानसभा सदस्यांची यादी",
    search: "शोधा",
    link1: "मुख्यपृष्ठ",
    link2: "विधानमंडळ सदस्य",
    link3: "विधानसभा सदस्य",
    heading: {
      one: "द्वारे शोधा",
      two: "प्रथमच निवडून आलेले सदस्य",
      three: "महिला सदस्य",
    },
    subHeading: ["पक्षनिहाय", "मतदारसंघनिहाय", "आडनावसुज्ञ", "जिल्हानिहाय"],
    table: ["क्र.", "नाव", "मतदारसंघ", "पक्ष", "लिंग"],
    structure: {
      one: "सांख्यिकीय विश्लेषण",
      two: "सदस्यांचे वय विभाग",
      three: "महिला सदस्यांची यादी",
    },
  },
  english: {
    title: "List of 14th Legislative Assembly Members",
    search: "Search",
    link1: "Home",
    link2: "Member of Legislature",
    link3: "List of Legislative Assembly Members",
    heading: {
      one: "Search by",
      two: "First Time Elected Members",
      three: "Women Members",
    },
    subHeading: [
      "Party wise",
      "Constituency wise",
      "Surname wise",
      "District wise",
    ],
    table: ["Sr.No.", "Name", "Constituency", "Party", "Gender"],
    structure: {
      one: "Statistical Analysis",
      two: "Age Section of Members",
      three: "List of Women Members",
    },
  },
};

const member = {
  marathi: {
    title: "सदस्य तपशील",
    placeholder: "शोधा",
    link1: "मुख्यपृष्ठ",
    link2: "विधानमंडळ सदस्य",
    link3: "सदस्य",
    name: "गडकरी, नितीन जयराम",
    button1: "मुलभूत माहिती",
    button2: "राजकीय प्रवास",
    button3: "निवडणूक डेटा",
    button4: "वादविवाद",
    basic_info: {
      date_of_birth: "जन्मतारीख",
      place_of_birth: "जन्मस्थान",
      education: "शैक्षणिक पात्रता",
      language: "ज्ञात भाषा",
      marital_status: "वैवाहिक स्थिती",
      children: "मुले",
      business: "व्यवसाय",
      party: "राजकीय पक्ष",
      constituency: "मतदारसंघ",
      hobby: "छंद",
      foreign_migration: "परदेशी स्थलांतर",
      gender: "लिंग",
      address: "कायमचा पत्ता",
      mobile_number: "संपर्क",
      email: "ईमेल",
    },
    election: {
      result: "निवडणूक निकाल",
      godia: "६५ - गोंदिया",
      total1: "एकूण मतदार ",
      total2: "एकूण वैध मतदान ",
      sr: "अ.क्र.",
      name: "उमेदवाराचे नाव",
      vote: "मत",
      party: "पक्ष",
      title: "पहिल्या पाच उमेदवारांच्या मतांची संख्या",
    },
    debate: {
      house: "सभागृह",
      volume: "खंड",
      session: "सत्र",
      kramank: "क्रमांक",
      date: "दिनांक",
      device: "युक्ती",
      subDevice: "उप युक्ती",
      topic: "विषय",
      details: "सर्व्हिस केलेले",
    },
  },
  english: {
    title: "Member Details",
    placeholder: "Search",
    link1: "Home",
    link2: "Member of Legislature",
    link3: "Member",
    name: "Gadkari, Shri Nitin Jairam",
    button1: "Basic Information",
    button2: "Political Journey",
    button3: "Election Data",
    button4: "Debate",
    basic_info: {
      date_of_birth: "Date of Birth",
      place_of_birth: "Place of birth",
      education: "Educational Qualification",
      language: "Known Languages",
      marital_status: "Marital Status",
      children: "Children",
      business: "Business",
      party: "Party",
      constituency: "Constoituency",
      hobby: "Hobby",
      foreign_migration: "Foreign Migration",
      gender: "Gender",
      address: "Permanent Address",
      mobile_number: "Mobile Number",
      email: "Email Address",
    },
    election: {
      result: "Election Result",
      godia: "65 - Gondia",
      total1: "Total Electorate ",
      total2: "Total valid voting ",
      sr: "No.",
      name: "Candidate Name",
      vote: "Vote",
      party: "Party",
      title: "Number of votes of the first five candidates",
    },
    debate: {
      house: "House",
      volume: "Volume",
      session: "session",
      kramank: "Kramank",
      date: "Date",
      device: "Device",
      subDevice: "Sub Device",
      topic: "Topic",
      details: "Details",
    },
  },
};

const combinedDebate = {
  marathi: {
    title: "एकत्रित सभागृहांचे कार्यवृत्त",
    titleselect: "विधानसभा",
    titleselect1: "अर्थसंकल्पीय",
    button1: "अर्ज करा",
    button2: "कमी पर्याय",
    button2op: "अधिक पर्याय दाखवा",
    link1: "मुख्यपृष्ठ",
    link2: "सभागृहांचे कार्यवृत्त",
    link3: "एकत्रित सभागृहांचे कार्यवृत्त",
    search: "शोध कीवर्ड प्रविष्ट करा",
    fields: {
      field1: "अधिवेशन  निवडा:",
      field2: "वर्ष:",
      field3: "तारखेपासून: ",
      field4: "तारखेपर्यंत: ",
      field5: "वादविवाद विषय:",
      field6: "वादाचा प्रकार:",
      field7: "मंत्रीपद:",
      field8: "सदस्य:",
      field9: "डिव्हाइस:",
      field10: "सभागृह:",
    },
    tableHead: {
      index: "सदस्य",
      house: " सभागृह",
      topic: "शीर्षक ",
      session: " सत्र मंत्रालय",
      ministry: "मंत्रालय ",
      year: "तारीख",
      method: "डिव्हाइस",
      method_type: " वादाचा प्रकार",
      date: "तारीख श्रेणी",
      head10: " तपशील ",
      head11: "डाउनलोड",
    },
    tableBody: {
      members_name: "सदस्य",
      house: " सभागृह",
      topic: "शीर्षक ",
      session: " सत्र मंत्रालय",
      ministry: "मंत्रालय ",
      year: "तारीख",
      method: "डिव्हाइस",
      method_type: " वादाचा प्रकार",
      date: "तारीख श्रेणी",
      head10: " तपशील ",
      head11: "डाउनलोड",
    },
    placeholder: {
      field1: "अधिवेशन निवडा",
      field2: "वर्ष निवडा",
      field3: "प्रकार",
      field4: "प्रकार",
      field5: "विषय / शीर्षक शोधा",
      field6: "वादविवाद प्रकार निवडा",
      field7: "मंत्रीपद निवडा",
      field8: "सदस्य शोधा",
      field9: "डिव्हाइस निवडा",
      field10: "सभागृह निवडा",
    },
  },
  english: {
    title: "Combined Debates",
    titleselect: "Assembly",
    titleselect1: "Budgetary",
    button1: "Apply",
    button2: "Less Options",
    button2op: "Show More",
    link1: "Home",
    link2: "Debate",
    link3: "Combined Debates",
    search: "Enter a Search Keyword",
    fields: {
      field1: "Select Session:",
      field2: "Year:",
      field3: " Date From: ",
      field4: "Date to: ",
      field5: "Debate Topic:",
      field6: "Debate Type:",
      field7: "Ministry:",
      field8: "Members:",
      field9: "Device:",
      field10: "Houses:",
    },
    tableHead: {
      index: "Member",
      house: "Houses",
      topic: "Title",
      session: "Session",
      head5: "Ministry",
      year: "Year",
      method: "Device",
      method_type: "Debate Type",
      date: "Date Range",
      head10: "Details",
      head11: "Download",
    },
    tableBody: {
      members_name: "Member",
      house: "Houses",
      topic: "Title",
      session: "Session",
      head5: "Ministry",
      year: "Year",
      method: "Device",
      method_type: "Debate Type",
      date: "Date Range",
    },
    placeholder: {
      field1: "select session",
      field2: "Year",
      field3: "Type",
      field4: "Type",
      field5: "Debate Topic",
      field6: "Debate Type",
      field7: "Select Ministry",
      field8: "Select Members",
      field9: "Device",
      field10: "House",
    },
  },
};

const assemblyDebate = {
  marathi: {
    title: "१४वि विधानसभा सभागृहांचे कार्यवृत्त",
    titleselect: "विधानसभा",
    titleselect1: "अर्थसंकल्पीय",
    button1: "अर्ज करा",
    button2: "कमी पर्याय",
    button2op: "अधिक पर्याय दाखवा",
    link1: "मुख्यपृष्ठ",
    link2: "सभागृहांचे कार्यवृत्त",
    link3: "विधानसभा सभागृहांचे कार्यवृत्त",
    search: "शोध कीवर्ड प्रविष्ट करा",
    fields: {
      field1: "अधिवेशन  निवडा:",
      field2: "वर्ष:",
      field3: "तारखेपासून: ",
      field4: "तारखेपर्यंत: ",
      field5: "वादविवाद विषय:",
      field6: "वादाचा प्रकार:",
      field7: "मंत्रीपद:",
      field8: "सदस्य:",
      field9: "डिव्हाइस:",
      field10: "सभागृह:",
    },
    tableHead: {
      topic: "विषय",
      house: " सभागृह",
      session: "अधिवेशन ",
      date: " तारीख",
      volume: "खंड",
      kramank: "क्रमांक",
      method: "वादाचा प्रकार",
      // method_type: " आयुधे",
      method_type: "आयुधाचा प्रकार",
      method_sub_type: "आयुधाचा उपप्रकार ",
      question_no: "प्रश्न क्रमांक",
      ministry: "मंत्रालय",
      page_no: "पृष्ठ क्रमांक",
      head14: "तपशील",
      head11: "डाउनलोड",
    },
    tableBody: {
      topic: "विषय",
      house: " सभागृह",
      session: "अधिवेशन ",
      date: " तारीख",
      volume: "खंड",
      kramank: "क्रमांक",
      method: "वादाचा प्रकार",
      // method_type: " आयुधे",
      method_type: "आयुधाचा प्रकार",
      method_sub_type: "आयुधाचा उपप्रकार ",
      question_no: "प्रश्न क्रमांक",
      ministry: "मंत्रालय",
      page_no: "पृष्ठ क्रमांक",
    },
    placeholder: {
      field1: "अधिवेशन निवडा",
      field2: "वर्ष निवडा",
      field3: "प्रकार",
      field4: "प्रकार",
      field5: "विषय / शीर्षक शोधा",
      field6: "वादविवाद प्रकार निवडा",
      field7: "मंत्रीपद निवडा",
      field8: "सदस्य शोधा",
      field9: "डिव्हाइस निवडा",
      field10: "सभागृह निवडा",
    },
  },
  english: {
    title: "Debates of 14th Legislative Assembly",
    titleselect: "Legislative Assembly",
    titleselect1: "Budgetary",
    button1: "Apply",
    button2: "Less Options",
    button2op: "Show More",
    link1: "Home",
    link2: "Debate",
    link3: "Debates Of Legislative Assembly",
    search: "Enter a Search Keyword",
    fields: {
      field1: "Select Session:",
      field2: "Year:",
      field3: " Date From: ",
      field4: "Date to: ",
      field5: "Debate Topic:",
      field6: "Debate Type:",
      field7: "Ministry:",
      field8: "Members:",
      field9: "Device:",
      field10: "Houses:",
    },
    tableHead: {
      topic: "Topic",
      house: "House",
      session: "Session",
      date: "Date",
      volume: "Volume",
      kramank: "No.",
      method: "Device",
      method_type: "Device type",
      method_sub_type: "Device subtype",
      question_no: "Question no.",
      ministry: "Ministry",
      page_no: "Page no.",
      head14: "Detail",
      head11: "Download",
    },
    tableBody: {
      topic: "Topic",
      house: "House",
      session: "Session",
      date: "Date",
      volume: "Volume",
      kramank: "No.",
      method: "Device",
      method_type: "Device type",
      method_sub_type: "Device subtype",
      question_no: "Question no.",
      ministry: "Ministry",
      page_no: "Page no.",
    },
    placeholder: {
      field1: "select session",
      field2: "Year",
      field3: "Type",
      field4: "Type",
      field5: "Debate Topic",
      field6: "Debate Type",
      field7: "Select Ministry",
      field8: "Select Members",
      field9: "Device",
      field10: "House",
    },
  },
};

const councilDebate = {
  marathi: {
    home: `मुख्य पृष्ठ`,
    title: "सभागृहांचे कार्यवृत्त",
    titleselect: "विधानपरिषद",
    titleselect1: "अर्थसंकल्पीय",
    filter: `फिल्टर`,
    adfilter: `ऍडव्हान्स फिल्टर`,
    button1: "अर्ज करा",
    button2: "रीसेट",
    button3: "रीसेट",
    button2op: "अधिक पर्याय दाखवा",
    link1: "मुख्यपृष्ठ",
    link2: "सभागृहांचे कार्यवृत्त",
    link3: "विधानपरिषद सभागृहांचे कार्यवृत्त",
    search: "विषय आणि कीवर्ड शोधा",
    search1: "सदस्य शोधा",
    fields: {
      field1: "अधिवेशन  निवडा:",
      field2: "वर्ष:",
      field3: "तारखेपासून: ",
      field4: "तारखेपर्यंत: ",
      field5: "वादविवाद विषय:",
      field6: "वादाचा प्रकार:",
      field7: "मंत्रीपद:",
      field8: "सदस्य:",
      field9: "डिव्हाइस:",
      field10: "सभागृह:",
    },
    tableHead: {
      topic: "विषय",
      house: " सभागृह",
      session: "अधिवेशन ",
      date: " तारीख",
      volume: "खंड",
      kramank: "क्रमांक",
      method: "वादाचा प्रकार",
      // method_type: " आयुधे",
      method_type: "आयुधाचा प्रकार",
      method_sub_type: "आयुधाचा उपप्रकार ",
      question_no: "प्रश्न क्रमांक",
      ministry: "मंत्रालय",
      page_no: "पृष्ठ क्रमांक",
      head14: "तपशील",
      head11: "डाउनलोड",
    },
    tableBody: {
      topic: "विषय",
      house: " सभागृह",
      session: "अधिवेशन ",
      date: " तारीख",
      member: `सदस्य`,
      action: `तपशील`,
      volume: "खंड",
      kramank: "क्रमांक",
      method: "वादाचा प्रकार",
      // method_type: " आयुधे",
      method_type: "आयुधाचा प्रकार",
      method_sub_type: "आयुधाचा उपप्रकार ",
      question_no: "प्रश्न क्रमांक",
      ministry: "मंत्रालय",
      page_no: "पृष्ठ क्रमांक",
    },
    placeholder: {
      field1: "अधिवेशन निवडा",
      field2: "वर्ष निवडा",
      field3: "प्रकार",
      field4: "प्रकार",
      field5: "विषय / शीर्षक शोधा",
      field6: "वादविवाद प्रकार निवडा",
      field7: "मंत्रीपद निवडा",
      field8: "सदस्य शोधा",
      field9: "डिव्हाइस निवडा",
      field10: "सभागृह निवडा",
    },
  },
  english: {
    home: `Home`,
    title: "Debates",
    titleselect: "Legislative Assembly",
    titleselect1: "Budgetary",
    filter: `Filter`,
    adfilter: `Advanced Filter`,
    button1: "Apply",
    button2: "Reset",
    button3: "Less Options",
    button2op: "Show More",
    link1: "Home",
    link2: "Debate",
    link3: "Debates Of Legislative Assembly",
    search: "Search for topics and keywords",
    search1: "Search members",
    fields: {
      field1: "Select Session:",
      field2: "Year:",
      field3: " Date From: ",
      field4: "Date to: ",
      field5: "Debate Topic:",
      field6: "Debate Type:",
      field7: "Ministry:",
      field8: "Members:",
      field9: "Device:",
      field10: "Houses:",
    },
    tableHead: {
      topic: "Topic",
      house: "House",
      session: "Session",
      date: "Date",
      volume: "Volume",
      kramank: "No.",
      method: "Device",
      method_type: "Device type",
      method_sub_type: "Device subtype",
      question_no: "Question no.",
      ministry: "Ministry",
      page_no: "Page no.",
      head14: "Detail",
      head11: "Download",
    },
    tableBody: {
      topic: "Topic",
      house: "House",
      session: "Session",
      date: "Date",
      member: `Member`,
      action: `Details`,
      volume: "Volume",
      kramank: "No.",
      method: "Device",
      method_type: "Device type",
      method_sub_type: "Device subtype",
      question_no: "Question no.",
      ministry: "Ministry",
      page_no: "Page no.",
    },
    placeholder: {
      field1: "select session",
      field2: "Year",
      field3: "Type",
      field4: "Type",
      field5: "Debate Topic",
      field6: "Debate Type",
      field7: "Select Ministry",
      field8: "Select Members",
      field9: "Device",
      field10: "House",
    },
  },
};

export {
  header,
  home,
  library,
  homeLink,
  feedback,
  helpdesk,
  footer,
  aboutUs,
  slider,
  governor,
  council,
  assembly,
  councilMember,
  assemblyMember,
  member,
  combinedDebate,
  assemblyDebate,
  councilDebate,
};
