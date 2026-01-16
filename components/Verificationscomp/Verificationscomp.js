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
        normalizeString(student.learnerNumber) === normalizedLearnerNumber
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
        memberNumber.trim()
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
        centreCode.trim()
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
