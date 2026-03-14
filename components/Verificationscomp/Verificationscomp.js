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
