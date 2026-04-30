import React, { useState } from "react";
import styles from "./Verificationscomp.module.css";
import {
  searchCenters,
  searchMemberships,
  formatDate,
} from "../../lib/api/verificationApi";

const Verificationscomp = () => {
  const [verificationType, setVerificationType] = useState("");
  const [studentResult, setStudentResult] = useState(false);
  const [memberResult, setMemberResult] = useState(false);
  const [centreResult, setCentreResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [membershipData, setMembershipData] = useState(null);
  const [centerData, setCenterData] = useState(null);
  const [formData, setFormData] = useState({
    regNumber: "",
    certNumber: "",
    learnerNumber: "",
    studentName: "",
    memberName: "",
    memberNumber: "",
    centreName: "",
    centreCode: "",
  });

  // Student database
  const studentDatabase = [
    {
      name: "sandeep pradeep",
      regNumber: "11025",
      certNumber: "cbpd/2025/hrm-3105",
      learnerNumber: "l-25-264",
    },
    {
      name: "lijin s",
      regNumber: "cbpd/000101",
      certNumber: "cbpd/aidmm/25/001",
      learnerNumber: "aibi6555/0001",
    },
    {
      name: "vishnu ps",
      regNumber: "cbpd/000102",
      certNumber: "cbpd/aidmm/25/002",
      learnerNumber: "aibi6555/0002",
    },
    {
      name: "jabir ahammed vp",
      regNumber: "cbpd/000103",
      certNumber: "cbpd/aidmm/25/003",
      learnerNumber: "aibi6555/0003",
    },
    {
      name: "vivek ks",
      regNumber: "cbpd/000104",
      certNumber: "cbpd/aidmm/25/004",
      learnerNumber: "aibi6555/0004",
    },
    {
      name: "muhammed raheef",
      regNumber: "cbpd/000105",
      certNumber: "cbpd/aidmm/25/005",
      learnerNumber: "aibi6555/0005",
    },
    {
      name: "anjana r",
      regNumber: "cbpd/000106",
      certNumber: "cbpd/aidmm/25/006",
      learnerNumber: "aibi6555/0006",
    },
    {
      name: "aparna s vijayan",
      regNumber: "cbpd/000107",
      certNumber: "cbpd/aidmm/25/007",
      learnerNumber: "aibi6555/0007",
    },
    {
      name: "anjal t sahadevan",
      regNumber: "cbpd/000108",
      certNumber: "cbpd/aidmm/25/008",
      learnerNumber: "aibi6555/0008",
    },
    {
      name: "sajesh mankara",
      regNumber: "cbpd/000109",
      certNumber: "cbpd/aidmm/25/009",
      learnerNumber: "aibi6555/0009",
    },
    {
      name: "arun mohan ma",
      regNumber: "CBPD/11026",
      certNumber: "cbpd/idft/25/3106",
      learnerNumber: "cpl5499/002",
    },

    // --- Newly Added Students ---

    {
      name: "sruthy p",
      regNumber: "CBPD/11029",
      certNumber: "CBPD/ISDME/25/3109",
      learnerNumber: "CPL5499/005",
    },
    {
      name: "alice nelson",
      regNumber: "CBPD/11030",
      certNumber: "CBPD/ISDME/25/3110",
      learnerNumber: "CPL5499/006",
    },
    {
      name: "salma joseph",
      regNumber: "CBPD/11031",
      certNumber: "CBPD/ISDME/25/3111",
      learnerNumber: "CPL5499/007",
    },
    {
      name: "abhirami s",
      regNumber: "CBPD/11032",
      certNumber: "CBPD/ISDME/25/3112",
      learnerNumber: "CPL5499/008",
    },
    {
      name: "saranya b",
      regNumber: "CBPD/11033",
      certNumber: "CBPD/ISDME/25/3113",
      learnerNumber: "CPL5499/009",
    },
    {
      name: "manju s",
      regNumber: "CBPD/11034",
      certNumber: "CBPD/ISDME/25/3114",
      learnerNumber: "CPL5499/010",
    },
    {
      name: "anzila i",
      regNumber: "CBPD/11035",
      certNumber: "CBPD/ISDME/25/3115",
      learnerNumber: "CPL5499/011",
    },
    {
      name: "akhila mol u",
      regNumber: "CBPD/11036",
      certNumber: "CBPD/ISDME/25/3116",
      learnerNumber: "CPL5499/012",
    },
    {
      name: "arya ajayakumar",
      regNumber: "CBPD/11037",
      certNumber: "CBPD/ISDME/25/3117",
      learnerNumber: "CPL5499/013",
    },
    {
      name: "haneesha s",
      regNumber: "CBPD/11038",
      certNumber: "CBPD/ISDME/25/3118",
      learnerNumber: "CPL5499/014",
    },

    {
      name: "jolly raju",
      regNumber: "CBPD/11039",
      certNumber: "CBPD/ISDME/25/3119",
      learnerNumber: "CPL5499/015",
    },
    {
      name: "amina kk",
      regNumber: "CBPD/11040",
      certNumber: "CBPD/ISDME/25/3120",
      learnerNumber: "CPL5499/016",
    },
    {
      name: "gopika thirumeni",
      regNumber: "CBPD/11041",
      certNumber: "CBPD/ISDME/25/3121",
      learnerNumber: "CPL5499/017",
    },
    {
      name: "geethu rajendran",
      regNumber: "CBPD/11042",
      certNumber: "CBPD/ISDME/25/3122",
      learnerNumber: "CPL5499/018",
    },
    {
      name: "rajalekshmi r",
      regNumber: "CBPD/11043",
      certNumber: "CBPD/ISDME/25/3123",
      learnerNumber: "CPL5499/019",
    },
    {
      name: "surya cs",
      regNumber: "CBPD/11044",
      certNumber: "CBPD/ISDME/25/3124",
      learnerNumber: "CPL5499/020",
    },
    {
      name: "akshara anil",
      regNumber: "CBPD/11045",
      certNumber: "CBPD/ISDME/25/3125",
      learnerNumber: "CPL5499/021",
    },
    {
      name: "rajalakshmi s",
      regNumber: "CBPD/11046",
      certNumber: "CBPD/ISDME/25/3126",
      learnerNumber: "CPL5499/022",
    },
    {
      name: "aswathy majesh",
      regNumber: "CBPD/11047",
      certNumber: "CBPD/ISDME/25/3127",
      learnerNumber: "CPL5499/023",
    },
    {
      name: "najiya f",
      regNumber: "CBPD/11048",
      certNumber: "CBPD/ISDME/25/3128",
      learnerNumber: "CPL5499/024",
    },

    {
      name: "telma rose",
      regNumber: "CBPD/11049",
      certNumber: "CBPD/ISDME/25/3129",
      learnerNumber: "CPL5499/025",
    },
    {
      name: "sneha t",
      regNumber: "CBPD/11050",
      certNumber: "CBPD/ISDME/25/3130",
      learnerNumber: "CPL5499/026",
    },
    {
      name: "ramsheena p.a",
      regNumber: "CBPD/11051",
      certNumber: "CBPD/ISDME/25/3131",
      learnerNumber: "CPL5499/027",
    },
    {
      name: "steniya saji",
      regNumber: "CBPD/11052",
      certNumber: "CBPD/ISDME/25/3132",
      learnerNumber: "CPL5499/028",
    },
    {
      name: "neethu k sidhan",
      regNumber: "CBPD/11053",
      certNumber: "CBPD/ISDME/25/3133",
      learnerNumber: "CPL5499/029",
    },
    {
      name: "thasniya k.m",
      regNumber: "CBPD/11054",
      certNumber: "CBPD/ISDME/25/3134",
      learnerNumber: "CPL5499/030",
    },
    {
      name: "steffy devassy",
      regNumber: "CBPD/11055",
      certNumber: "CBPD/ISDME/25/3135",
      learnerNumber: "CPL5499/031",
    },
    {
      name: "swapna george",
      regNumber: "CBPD/11056",
      certNumber: "CBPD/ISDME/25/3136",
      learnerNumber: "CPL5499/032",
    },
    {
      name: "preethy saji",
      regNumber: "CBPD/11057",
      certNumber: "CBPD/ISDME/25/3137",
      learnerNumber: "CPL5499/033",
    },
    {
      name: "resmi rajesh",
      regNumber: "CBPD/11058",
      certNumber: "CBPD/ISDME/25/3138",
      learnerNumber: "CPL5499/034",
    },
    {
      name: "bhuvaneshwari p",
      regNumber: "CBPD/11059",
      certNumber: "CBPD/ISDME/25/3139",
      learnerNumber: "CPL5499/035",
    },

    {
      name: "jasnath mol t.p",
      regNumber: "CBPD/11060",
      certNumber: "CBPD/ISDME/25/3140",
      learnerNumber: "CPL5499/036",
    },
    {
      name: "jaseela jasmin",
      regNumber: "CBPD/11061",
      certNumber: "CBPD/ISDME/25/3141",
      learnerNumber: "CPL5499/037",
    },
    {
      name: "fathima v.t",
      regNumber: "CBPD/11062",
      certNumber: "CBPD/ISDME/25/3142",
      learnerNumber: "CPL5499/038",
    },
    {
      name: "jasmin n",
      regNumber: "CBPD/11063",
      certNumber: "CBPD/ISDME/25/3143",
      learnerNumber: "CPL5499/039",
    },
    {
      name: "shaji mol m",
      regNumber: "CBPD/11064",
      certNumber: "CBPD/ISDME/25/3144",
      learnerNumber: "CPL5499/040",
    },

    {
      name: "radhika l",
      regNumber: "CBPD/11065",
      certNumber: "CBPD/IASDME/25/3145",
      learnerNumber: "CPL5499/041",
    },
    {
      name: "drishya shajesh",
      regNumber: "CBPD/11066",
      certNumber: "CBPD/IASDME/25/3146",
      learnerNumber: "CPL5499/042",
    },
    {
      name: "seethu thomas",
      regNumber: "CBPD/11067",
      certNumber: "CBPD/IASDME/25/3147",
      learnerNumber: "CPL5499/043",
    },
    {
      name: "sabitha s",
      regNumber: "CBPD/11068",
      certNumber: "CBPD/IASDME/25/3148",
      learnerNumber: "CPL5499/044",
    },
    {
      name: "nadiya nr",
      regNumber: "CBPD/11069",
      certNumber: "CBPD/IASDME/25/3149",
      learnerNumber: "CPL5499/045",
    },
    {
      name: "thresia silvester",
      regNumber: "CBPD/11070",
      certNumber: "CBPD/IASDME/25/3150",
      learnerNumber: "CPL5499/046",
    },
    {
      name: "akshaya",
      regNumber: "CBPD/11071",
      certNumber: "CBPD/IASDME/25/3151",
      learnerNumber: "CPL5499/047",
    },
    {
      name: "surya sunil",
      regNumber: "CBPD/11072",
      certNumber: "CBPD/IASDME/25/3152",
      learnerNumber: "CPL5499/048",
    },
    {
      name: "sreelekshmi a",
      regNumber: "CBPD/11073",
      certNumber: "CBPD/IASDME/25/3153",
      learnerNumber: "CPL5499/049",
    },
    {
      name: "aneena mary",
      regNumber: "CBPD/11074",
      certNumber: "CBPD/IASDME/25/3154",
      learnerNumber: "CPL5499/050",
    },

    {
      name: "sandhya vc",
      regNumber: "CBPD/11075",
      certNumber: "CBPD/IASDME/25/3155",
      learnerNumber: "CPL5499/051",
    },
    {
      name: "greeshma s",
      regNumber: "CBPD/11076",
      certNumber: "CBPD/IASDME/25/3156",
      learnerNumber: "CPL5499/052",
    },
    {
      name: "sherin ks",
      regNumber: "CBPD/11077",
      certNumber: "CBPD/IASDME/25/3157",
      learnerNumber: "CPL5499/053",
    },
    {
      name: "anjaly kv",
      regNumber: "CBPD/11078",
      certNumber: "CBPD/IASDME/25/3158",
      learnerNumber: "CPL5499/054",
    },
    {
      name: "bhavyalakshmi s",
      regNumber: "CBPD/11079",
      certNumber: "CBPD/IASDME/25/3159",
      learnerNumber: "CPL5499/055",
    },
    {
      name: "shamily v.a",
      regNumber: "CBPD/11080",
      certNumber: "CBPD/IASDME/25/3160",
      learnerNumber: "CPL5499/056",
    },
    {
      name: "ashitha ramesh",
      regNumber: "CBPD/11081",
      certNumber: "CBPD/IASDME/25/3161",
      learnerNumber: "CPL5499/057",
    },
    {
      name: "mariya sunny",
      regNumber: "CBPD/11082",
      certNumber: "CBPD/IASDME/25/3162",
      learnerNumber: "CPL5499/058",
    },
    {
      name: "athira a.r",
      regNumber: "CBPD/11083",
      certNumber: "CBPD/IASDME/25/3163",
      learnerNumber: "CPL5499/059",
    },
    {
      name: "nisha k mony",
      regNumber: "CBPD/11084",
      certNumber: "CBPD/IASDME/25/3164",
      learnerNumber: "CPL5499/060",
    },
    {
  name: "THASNIYA K.M",
  regNumber: "CBPD/11054",
  certNumber: "CBPD/ISDME/25/3134",
  learnerNumber: "CPL/5499/030",
},
    {
  name: "rajika v p",
  regNumber: "CBPD/11088",
  certNumber: "CBPD/ISDME/25/3168",
  learnerNumber: "CPL/5499/064",
},
{
  name: "anju v john",
  regNumber: "CBPD/11089",
  certNumber: "CBPD/ISDME/25/3169",
  learnerNumber: "CPL/5499/065",
},
{
  name: "divya jagadish",
  regNumber: "CBPD/11090",
  certNumber: "CBPD/ISDME/25/3170",
  learnerNumber: "CPL/5499/066",
},
{
  name: "faseela m k",
  regNumber: "CBPD/11091",
  certNumber: "CBPD/ISDME/25/3170",
  learnerNumber: "CPL/5499/067",
},
{
  name: "naazia farhein",
  regNumber: "CBPD/11092",
  certNumber: "CBPD/IASDME/25/3172",
  learnerNumber: "CPL/5499/068",
},
{
  name: "abhinanda u",
  regNumber: "CBPD/009",
  certNumber: "CBPD/IADHA/26/0001",
  learnerNumber: "INS/26/6558/001",
},
{
  name: "amitha a n",
  regNumber: "CBPD/012",
  certNumber: "CBPD/IADHA/26/0002",
  learnerNumber: "INS/26/6558/002",
},
{
  name: "hadiya",
  regNumber: "CBPD/022",
  certNumber: "CBPD/IADHA/26/0003",
  learnerNumber: "INS/26/6558/003",
},
{
  name: "gopika k p",
  regNumber: "CBPD/032",
  certNumber: "CBPD/IADHA/26/0004",
  learnerNumber: "INS/26/6558/004",
},
{
  name: "hanoona fathima a k",
  regNumber: "CBPD/033",
  certNumber: "CBPD/IADHA/26/0005",
  learnerNumber: "INS/26/6558/005",
},
    {
  name: "adithya ajayan",
  regNumber: "CBPD/11113",
  certNumber: "CBPD/ISDME/25/3193",
  learnerNumber: "CPL/5499/089",
},
{
  name: "aiswarya k",
  regNumber: "CBPD/11114",
  certNumber: "CBPD/ISDME/25/3194",
  learnerNumber: "CPL/5499/090",
},
{
  name: "aiswarya m",
  regNumber: "CBPD/11115",
  certNumber: "CBPD/ISDME/25/3195",
  learnerNumber: "CPL/5499/091",
},
{
  name: "akshara s",
  regNumber: "CBPD/11116",
  certNumber: "CBPD/ISDME/25/3196",
  learnerNumber: "CPL/5499/092",
},
{
  name: "akshaya ks",
  regNumber: "CBPD/11117",
  certNumber: "CBPD/ISDME/25/3197",
  learnerNumber: "CPL/5499/093",
},
{
  name: "ambily pc",
  regNumber: "CBPD/11118",
  certNumber: "CBPD/ISDME/25/3198",
  learnerNumber: "CPL/5499/094",
},
{
  name: "anam kidwai",
  regNumber: "CBPD/11119",
  certNumber: "CBPD/ISDME/25/3199",
  learnerNumber: "CPL/5499/095",
},
{
  name: "anamika sajith",
  regNumber: "CBPD/11120",
  certNumber: "CBPD/ISDME/25/3200",
  learnerNumber: "CPL/5499/096",
},
{
  name: "ansila a",
  regNumber: "CBPD/11121",
  certNumber: "CBPD/ISDME/25/3201",
  learnerNumber: "CPL/5499/097",
},
{
  name: "ansila m",
  regNumber: "CBPD/11122",
  certNumber: "CBPD/ISDME/25/3202",
  learnerNumber: "CPL/5499/098",
},
{
  name: "ansiya a",
  regNumber: "CBPD/11123",
  certNumber: "CBPD/ISDME/25/3203",
  learnerNumber: "CPL/5499/099",
},
{
  name: "aparna td",
  regNumber: "CBPD/11124",
  certNumber: "CBPD/ISDME/25/3204",
  learnerNumber: "CPL/5499/100",
},
{
  name: "aswathi ka",
  regNumber: "CBPD/11125",
  certNumber: "CBPD/ISDME/25/3205",
  learnerNumber: "CPL/5499/101",
},
{
  name: "aswathy sugunan",
  regNumber: "CBPD/11126",
  certNumber: "CBPD/ISDME/25/3206",
  learnerNumber: "CPL/5499/102",
},
{
  name: "athira shaji s",
  regNumber: "CBPD/11127",
  certNumber: "CBPD/ISDME/25/3207",
  learnerNumber: "CPL/5499/103",
},
{
  name: "binsha babu",
  regNumber: "CBPD/11128",
  certNumber: "CBPD/ISDME/25/3208",
  learnerNumber: "CPL/5499/104",
},
{
  name: "bismi b",
  regNumber: "CBPD/11129",
  certNumber: "CBPD/ISDME/25/3209",
  learnerNumber: "CPL/5499/105",
},
{
  name: "divya dineshan",
  regNumber: "CBPD/11130",
  certNumber: "CBPD/ISDME/25/3210",
  learnerNumber: "CPL/5499/106",
},
{
  name: "farsana irshad",
  regNumber: "CBPD/11131",
  certNumber: "CBPD/ISDME/25/3211",
  learnerNumber: "CPL/5499/107",
},
{
  name: "faseelamol bn",
  regNumber: "CBPD/11132",
  certNumber: "CBPD/ISDME/25/3212",
  learnerNumber: "CPL/5499/108",
},
{
  name: "fathima",
  regNumber: "CBPD/11133",
  certNumber: "CBPD/ISDME/25/3213",
  learnerNumber: "CPL/5499/109",
},
{
  name: "gayathri anilkumar",
  regNumber: "CBPD/11134",
  certNumber: "CBPD/ISDME/25/3214",
  learnerNumber: "CPL/5499/110",
},
{
  name: "hansiya h",
  regNumber: "CBPD/11137",
  certNumber: "CBPD/ISDME/25/3217",
  learnerNumber: "CPL/5499/111",
},
{
  name: "irfana s",
  regNumber: "CBPD/11138",
  certNumber: "CBPD/ISDME/25/3218",
  learnerNumber: "CPL/5499/112",
},
{
  name: "josvin mariya antony",
  regNumber: "CBPD/11139",
  certNumber: "CBPD/ISDME/25/3219",
  learnerNumber: "CPL/5499/113",
},
{
  name: "kajal l",
  regNumber: "CBPD/11140",
  certNumber: "CBPD/ISDME/25/3220",
  learnerNumber: "CPL/5499/114",
},
{
  name: "khadeeja n",
  regNumber: "CBPD/11141",
  certNumber: "CBPD/ISDME/25/3221",
  learnerNumber: "CPL/5499/115",
},
{
  name: "lancy devasia",
  regNumber: "CBPD/11142",
  certNumber: "CBPD/ISDME/25/3222",
  learnerNumber: "CPL/5499/116",
},
{
  name: "nashida navas",
  regNumber: "CBPD/11143",
  certNumber: "CBPD/ISDME/25/3223",
  learnerNumber: "CPL/5499/117",
},
{
  name: "neenu r krishnan",
  regNumber: "CBPD/11144",
  certNumber: "CBPD/ISDME/25/3224",
  learnerNumber: "CPL/5499/118",
},
{
  name: "nubina nazeer",
  regNumber: "CBPD/11145",
  certNumber: "CBPD/ISDME/25/3225",
  learnerNumber: "CPL/5499/119",
},
{
  name: "praveena pk",
  regNumber: "CBPD/11146",
  certNumber: "CBPD/ISDME/25/3226",
  learnerNumber: "CPL/5499/120",
},
{
  name: "resmina r",
  regNumber: "CBPD/11147",
  certNumber: "CBPD/ISDME/25/3227",
  learnerNumber: "CPL/5499/121",
},
{
  name: "revathy pv",
  regNumber: "CBPD/11148",
  certNumber: "CBPD/ISDME/25/3228",
  learnerNumber: "CPL/5499/122",
},
{
  name: "riswana kabeer",
  regNumber: "CBPD/11149",
  certNumber: "CBPD/ISDME/25/3229",
  learnerNumber: "CPL/5499/123",
},
{
  name: "ruksana kabeer",
  regNumber: "CBPD/11150",
  certNumber: "CBPD/ISDME/25/3230",
  learnerNumber: "CPL/5499/124",
},
{
  name: "sarika s",
  regNumber: "CBPD/11151",
  certNumber: "CBPD/ISDME/25/3231",
  learnerNumber: "CPL/5499/125",
},
{
  name: "selina vincent",
  regNumber: "CBPD/11152",
  certNumber: "CBPD/ISDME/25/3232",
  learnerNumber: "CPL/5499/126",
},
{
  name: "shabna noushad",
  regNumber: "CBPD/11153",
  certNumber: "CBPD/ISDME/25/3233",
  learnerNumber: "CPL/5499/127",
},
{
  name: "shadhina s",
  regNumber: "CBPD/11154",
  certNumber: "CBPD/ISDME/25/3234",
  learnerNumber: "CPL/5499/128",
},
{
  name: "shafna s",
  regNumber: "CBPD/11155",
  certNumber: "CBPD/ISDME/25/3235",
  learnerNumber: "CPL/5499/129",
},
{
  name: "shalima s",
  regNumber: "CBPD/11156",
  certNumber: "CBPD/ISDME/25/3236",
  learnerNumber: "CPL/5499/130",
},
{
  name: "shelji ki",
  regNumber: "CBPD/11157",
  certNumber: "CBPD/ISDME/25/3237",
  learnerNumber: "CPL/5499/131",
},
{
  name: "shyma a",
  regNumber: "CBPD/11158",
  certNumber: "CBPD/ISDME/25/3238",
  learnerNumber: "CPL/5499/132",
},
{
  name: "sinimol u",
  regNumber: "CBPD/11159",
  certNumber: "CBPD/ISDME/25/3239",
  learnerNumber: "CPL/5499/133",
},
{
  name: "sreedevi vp",
  regNumber: "CBPD/11160",
  certNumber: "CBPD/ISDME/25/3240",
  learnerNumber: "CPL/5499/134",
},
{
  name: "sreelekshmi sreekumar",
  regNumber: "CBPD/11161",
  certNumber: "CBPD/ISDME/25/3241",
  learnerNumber: "CPL/5499/135",
},
{
  name: "steffy mariya mathew",
  regNumber: "CBPD/11162",
  certNumber: "CBPD/ISDME/25/3242",
  learnerNumber: "CPL/5499/136",
},
{
  name: "sumayya n",
  regNumber: "CBPD/11163",
  certNumber: "CBPD/ISDME/25/3243",
  learnerNumber: "CPL/5499/137",
},
{
  name: "surabhi r",
  regNumber: "CBPD/11164",
  certNumber: "CBPD/ISDME/25/3244",
  learnerNumber: "CPL/5499/138",
},
{
  name: "tharisha beevi",
  regNumber: "CBPD/11165",
  certNumber: "CBPD/ISDME/25/3245",
  learnerNumber: "CPL/5499/139",
},
{
  name: "tisna sebastian",
  regNumber: "CBPD/11166",
  certNumber: "CBPD/ISDME/25/3246",
  learnerNumber: "CPL/5499/140",
},
{
  name: "ummukkulsu kk",
  regNumber: "CBPD/11167",
  certNumber: "CBPD/ISDME/25/3247",
  learnerNumber: "CPL/5499/141",
},
{
  name: "uthara uthaman",
  regNumber: "CBPD/11168",
  certNumber: "CBPD/ISDME/25/3248",
  learnerNumber: "CPL/5499/142",
},
{
  name: "vijayalekshmi s panicker",
  regNumber: "CBPD/11169",
  certNumber: "CBPD/ISDME/25/3249",
  learnerNumber: "CPL/5499/143",
},
{
  name: "vydehi m",
  regNumber: "CBPD/11170",
  certNumber: "CBPD/ISDME/25/3250",
  learnerNumber: "CPL/5499/144",
},
{
  name: "zarina xavier",
  regNumber: "CBPD/11171",
  certNumber: "CBPD/ISDME/25/3251",
  learnerNumber: "CPL/5499/145",
},
{
  name: "thafseela mk",
  regNumber: "CBPD/11172",
  certNumber: "CBPD/ISDME/25/3252",
  learnerNumber: "CPL/5499/146",
},
{
  name: "jayakrishna ks",
  regNumber: "CBPD/11173",
  certNumber: "CBPD/ISDME/25/3253",
  learnerNumber: "CPL/5499/147",
},
{
  name: "geethumol p",
  regNumber: "CBPD/11174",
  certNumber: "CBPD/ISDME/25/3254",
  learnerNumber: "CPL/5499/148",
},
    {
  name: "abhirama s kumar",
  regNumber: "CBPD/11093",
  certNumber: "CBPD/IASDME/25/3173",
  learnerNumber: "CPL/5499/069",
},
{
  name: "alphonsa varghese",
  regNumber: "CBPD/11094",
  certNumber: "CBPD/IASDME/25/3174",
  learnerNumber: "CPL/5499/070",
},
{
  name: "amalu raja a",
  regNumber: "CBPD/11095",
  certNumber: "CBPD/IASDME/25/3175",
  learnerNumber: "CPL/5499/071",
},
{
  name: "anitha ad",
  regNumber: "CBPD/11096",
  certNumber: "CBPD/IASDME/25/3176",
  learnerNumber: "CPL/5499/072",
},
{
  name: "anju krishna",
  regNumber: "CBPD/11097",
  certNumber: "CBPD/IASDME/25/3177",
  learnerNumber: "CPL/5499/073",
},
{
  name: "athira ma",
  regNumber: "CBPD/11098",
  certNumber: "CBPD/IASDME/25/3178",
  learnerNumber: "CPL/5499/074",
},
{
  name: "hashina asharaf",
  regNumber: "CBPD/11099",
  certNumber: "CBPD/IASDME/25/3179",
  learnerNumber: "CPL/5499/075",
},
{
  name: "karthika r kumar",
  regNumber: "CBPD/11100",
  certNumber: "CBPD/IASDME/25/3180",
  learnerNumber: "CPL/5499/076",
},
{
  name: "mehana salim",
  regNumber: "CBPD/11101",
  certNumber: "CBPD/IASDME/25/3181",
  learnerNumber: "CPL/5499/077",
},
{
  name: "p anitha",
  regNumber: "CBPD/11102",
  certNumber: "CBPD/IASDME/25/3182",
  learnerNumber: "CPL/5499/078",
},
{
  name: "sajana mol ts",
  regNumber: "CBPD/11103",
  certNumber: "CBPD/IASDME/25/3183",
  learnerNumber: "CPL/5499/079",
},
{
  name: "sareena s",
  regNumber: "CBPD/11104",
  certNumber: "CBPD/IASDME/25/3184",
  learnerNumber: "CPL/5499/080",
},
{
  name: "sojimol vc",
  regNumber: "CBPD/11105",
  certNumber: "CBPD/IASDME/25/3185",
  learnerNumber: "CPL/5499/081",
},
{
  name: "sreeja mohan ks",
  regNumber: "CBPD/11106",
  certNumber: "CBPD/IASDME/25/3186",
  learnerNumber: "CPL/5499/082",
},
{
  name: "sreekala l",
  regNumber: "CBPD/11107",
  certNumber: "CBPD/IASDME/25/3187",
  learnerNumber: "CPL/5499/083",
},
{
  name: "sunitha ts",
  regNumber: "CBPD/11108",
  certNumber: "CBPD/IASDME/25/3188",
  learnerNumber: "CPL/5499/084",
},
{
  name: "swathi p",
  regNumber: "CBPD/11109",
  certNumber: "CBPD/IASDME/25/3189",
  learnerNumber: "CPL/5499/085",
},
{
  name: "thrishna biju",
  regNumber: "CBPD/11110",
  certNumber: "CBPD/IASDME/25/3190",
  learnerNumber: "CPL/5499/086",
},
{
  name: "veena sivarajan",
  regNumber: "CBPD/11111",
  certNumber: "CBPD/IASDME/25/3191",
  learnerNumber: "CPL/5499/087",
},
{
  name: "vinitha nandanan",
  regNumber: "CBPD/11112",
  certNumber: "CBPD/IASDME/25/3192",
  learnerNumber: "CPL/5499/088",
},
  ];

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleTypeChange = (e) => {
    setVerificationType(e.target.value);
    setStudentResult(false);
    setMemberResult(false);
    setCentreResult(false);
    setError("");
    setMembershipData(null);
    setCenterData(null);
  };

  // Helper function to normalize strings for comparison
  const normalizeString = (str) => {
    return str.trim().toLowerCase();
  };

  const verifyStudent = () => {
    const { regNumber, certNumber, learnerNumber, studentName } = formData;

    // Normalize all inputs before comparison
    const normalizedRegNumber = normalizeString(regNumber);
    const normalizedCertNumber = normalizeString(certNumber);
    const normalizedLearnerNumber = normalizeString(learnerNumber);
    const normalizedStudentName = normalizeString(studentName);

    // Search for matching student in database
    const matchedStudent = studentDatabase.find(
      (student) =>
        normalizeString(student.name) === normalizedStudentName &&
        normalizeString(student.regNumber) === normalizedRegNumber &&
        normalizeString(student.certNumber) === normalizedCertNumber &&
        normalizeString(student.learnerNumber) === normalizedLearnerNumber,
    );

    if (matchedStudent) {
      setStudentResult(true);
      setError("");
    } else {
      setStudentResult(false);
      setError("No student certificate found with the provided details");
    }
  };

  const verifyMember = async () => {
    console.log("verifyMember called");
    const { memberName, memberNumber } = formData;

    console.log("Form data:", { memberName, memberNumber });

    if (!memberName.trim() || !memberNumber.trim()) {
      setError("Please enter both membership name and number");
      return;
    }

    setLoading(true);
    setError("");
    setMemberResult(false);
    setMembershipData(null);

    try {
      console.log("Calling searchMemberships API...");
      const response = await searchMemberships(
        memberName.trim(),
        memberNumber.trim(),
      );
      console.log("API response:", response);

      if (response.memberships && response.memberships.length > 0) {
        setMembershipData(response.memberships[0]);
        setMemberResult(true);
        console.log("Membership found:", response.memberships[0]);
      } else {
        setError("No membership found with the provided details");
        setMemberResult(false);
        console.log("No membership found");
      }
    } catch (error) {
      console.error("Error verifying membership:", error);
      setError(`Failed to verify membership: ${error.message}`);
      setMemberResult(false);
    } finally {
      setLoading(false);
    }
  };

  const verifyCentre = async () => {
    console.log("verifyCentre called");
    const { centreName, centreCode } = formData;

    console.log("Form data:", { centreName, centreCode });

    if (!centreName.trim() || !centreCode.trim()) {
      setError("Please enter both centre name and code");
      return;
    }

    setLoading(true);
    setError("");
    setCentreResult(false);
    setCenterData(null);

    try {
      console.log("Calling searchCenters API...");
      const response = await searchCenters(
        centreName.trim(),
        centreCode.trim(),
      );
      console.log("API response:", response);

      if (response.centers && response.centers.length > 0) {
        setCenterData(response.centers[0]);
        setCentreResult(true);
        console.log("Center found:", response.centers[0]);
      } else {
        setError("No center found with the provided details");
        setCentreResult(false);
        console.log("No center found");
      }
    } catch (error) {
      console.error("Error verifying center:", error);
      setError(`Failed to verify center: ${error.message}`);
      setCentreResult(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.verificationContainer}>
      <h1>Verification Portal</h1>

      <div className={styles.formContainer}>
        <form>
          <div className={styles.formGroup}>
            <label htmlFor="verificationType">Verification Type</label>
            <select
              id="verificationType"
              value={verificationType}
              onChange={handleTypeChange}
              className={styles.select}
            >
              <option value="">Select Type</option>
              <option value="student">Student Certificate</option>
              <option value="membership">Membership Certificate</option>
              <option value="centre">Approved Centre Certificate</option>
            </select>
          </div>

          {verificationType === "student" && (
            <div className={styles.formFields}>
              <div className={styles.formGroup}>
                <label htmlFor="studentName">Student Name</label>
                <input
                  type="text"
                  id="studentName"
                  placeholder="Enter Student Name"
                  value={formData.studentName}
                  onChange={handleInputChange}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="regNumber">Register Number</label>
                <input
                  type="text"
                  id="regNumber"
                  placeholder="Enter Register Number"
                  value={formData.regNumber}
                  onChange={handleInputChange}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="certNumber">Certificate Number</label>
                <input
                  type="text"
                  id="certNumber"
                  placeholder="Enter Certificate Number"
                  value={formData.certNumber}
                  onChange={handleInputChange}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="learnerNumber">Learner Number</label>
                <input
                  type="text"
                  id="learnerNumber"
                  placeholder="Enter Learner Number"
                  value={formData.learnerNumber}
                  onChange={handleInputChange}
                />
              </div>
              <button
                type="button"
                onClick={verifyStudent}
                className={styles.verifyButton}
              >
                Verify
              </button>
            </div>
          )}

          {verificationType === "membership" && (
            <div className={styles.formFields}>
              <div className={styles.formGroup}>
                <label htmlFor="memberName">Membership Name</label>
                <input
                  type="text"
                  id="memberName"
                  placeholder="Enter Membership Name"
                  value={formData.memberName}
                  onChange={handleInputChange}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="memberNumber">Membership Number</label>
                <input
                  type="text"
                  id="memberNumber"
                  placeholder="Enter Membership Number"
                  value={formData.memberNumber}
                  onChange={handleInputChange}
                />
              </div>
              <button
                type="button"
                onClick={verifyMember}
                className={styles.verifyButton}
                disabled={loading}
              >
                {loading ? "Verifying..." : "Verify"}
              </button>
            </div>
          )}

          {verificationType === "centre" && (
            <div className={styles.formFields}>
              <div className={styles.formGroup}>
                <label htmlFor="centreName">Centre Name</label>
                <input
                  type="text"
                  id="centreName"
                  placeholder="Enter Centre Name"
                  value={formData.centreName}
                  onChange={handleInputChange}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="centreCode">Centre Code</label>
                <input
                  type="text"
                  id="centreCode"
                  placeholder="Enter Centre Code"
                  value={formData.centreCode}
                  onChange={handleInputChange}
                />
              </div>
              <button
                type="button"
                onClick={verifyCentre}
                className={styles.verifyButton}
                disabled={loading}
              >
                {loading ? "Verifying..." : "Verify"}
              </button>
            </div>
          )}
        </form>

        {!studentResult && error && (
          <div className={styles.error}>
            <div className={styles.errorMessage}>❌ {error}</div>
          </div>
        )}

        {studentResult && (
          <div className={styles.verified}>
            <div className={styles.greenTick}>✅ Certificate Verified</div>
          </div>
        )}

        {memberResult && membershipData && (
          <div className={styles.verifiedCard}>
            <div className={styles.verifiedHeader}>
              <div className={styles.verifiedIcon}>✅</div>
              <div>
                <h3 className={styles.verifiedTitle}>Membership Verified</h3>
                <p className={styles.verifiedSubtitle}>
                  This membership is officially approved and active.
                </p>
              </div>
            </div>

            <div className={styles.detailsGrid}>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Membership Name</span>
                <span className={styles.detailValue}>
                  {membershipData.membershipName}
                </span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Membership Number</span>
                <span className={styles.detailValue}>
                  {membershipData.membershipNumber}
                </span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Membership Type</span>
                <span className={styles.detailValue}>
                  {membershipData.membershipType}
                </span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Membership Status</span>
                <span
                  className={`${styles.statusBadge} ${
                    membershipData.membershipStatus?.toLowerCase() === "active"
                      ? styles.active
                      : styles.inactive
                  }`}
                >
                  {membershipData.membershipStatus}
                </span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Valid From</span>
                <span className={styles.detailValue}>
                  {formatDate(membershipData.validityPeriod?.startDate)}
                </span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Valid Until</span>
                <span className={styles.detailValue}>
                  {formatDate(membershipData.validityPeriod?.endDate)}
                </span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Days Until Expiry</span>
                <span className={styles.detailValue}>
                  {membershipData.daysUntilExpiry}
                </span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Validity Status</span>
                <span
                  className={`${styles.statusBadge} ${
                    membershipData.validityStatus?.toLowerCase() === "valid"
                      ? styles.active
                      : styles.inactive
                  }`}
                >
                  {membershipData.validityStatus}
                </span>
              </div>
            </div>
          </div>
        )}
        {centreResult && centerData && (
          <div className={styles.verifiedCard}>
            <div className={styles.verifiedHeader}>
              <div className={styles.verifiedIcon}>✅</div>
              <div>
                <h3 className={styles.verifiedTitle}>Centre Verified</h3>
                <p className={styles.verifiedSubtitle}>
                  This centre is officially approved and active.
                </p>
              </div>
            </div>

            <div className={styles.detailsGrid}>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Centre Code</span>
                <span className={styles.detailValue}>
                  {centerData.centreCode}
                </span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Location</span>
                <span className={styles.detailValue}>
                  {centerData.location}
                </span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>
                  Affiliated Centre Name
                </span>
                <span className={styles.detailValue}>
                  {centerData.nameOfAffiliatedCentre}
                </span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Expiry Date</span>
                <span className={styles.detailValue}>
                  {formatDate(centerData.expiryDate)}
                </span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Status</span>
                <span
                  className={`${styles.statusBadge} ${
                    centerData.status?.toLowerCase() === "active"
                      ? styles.active
                      : styles.inactive
                  }`}
                >
                  {centerData.status}
                </span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Days Until Expiry</span>
                <span className={styles.detailValue}>
                  {centerData.daysUntilExpiry}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Verificationscomp;
