import React, { useState } from 'react';
import styles from './Verificationscomp.module.css';

const Verificationscomp = () => {
    const [verificationType, setVerificationType] = useState('');
    const [studentResult, setStudentResult] = useState(false);
    const [memberResult, setMemberResult] = useState(false);
    const [centreResult, setCentreResult] = useState(false);
    const [formData, setFormData] = useState({
        regNumber: '',
        certNumber: '',
        learnerNumber: '',
        studentName: '',
        memberName: '',
        memberNumber: '',
        centreName: '',
        centreCode: ''
    });

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value
        }));
    };

    const handleTypeChange = (e) => {
        setVerificationType(e.target.value);
        setStudentResult(false);
        setMemberResult(false);
        setCentreResult(false);
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
        
        if (normalizedRegNumber === 'arcg1021' && 
            normalizedCertNumber === '3261' && 
            normalizedLearnerNumber === '68' && 
            normalizedStudentName === 'john doe') {
            setStudentResult(true);
        } else {
            setStudentResult(false);
        }
    };

    const verifyMember = () => {
        const { memberName, memberNumber } = formData;
        
        // Normalize inputs before comparison
        const normalizedMemberName = normalizeString(memberName);
        const normalizedMemberNumber = normalizeString(memberNumber);
        
        if ((normalizedMemberName === 'najeeb' && normalizedMemberNumber === 'cbpd001kl10') ||
            (normalizedMemberName === 'shameer alikkal' && normalizedMemberNumber === 'laish00125')) {
            setMemberResult(true);
        } else {
            setMemberResult(false);
        }
    };

    const verifyCentre = () => {
        const { centreName, centreCode } = formData;
        
        // Normalize inputs before comparison
        const normalizedCentreName = normalizeString(centreName);
        const normalizedCentreCode = normalizeString(centreCode);
        
        if (normalizedCentreName === 'create plus' && normalizedCentreCode === 'kl/101421/25') {
            setCentreResult(true);
        } else {
            setCentreResult(false);
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

                    {verificationType === 'student' && (
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
                            <button type="button" onClick={verifyStudent} className={styles.verifyButton}>
                                Verify
                            </button>
                        </div>
                    )}

                    {verificationType === 'membership' && (
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
                            <button type="button" onClick={verifyMember} className={styles.verifyButton}>
                                Verify
                            </button>
                        </div>
                    )}

                    {verificationType === 'centre' && (
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
                            <button type="button" onClick={verifyCentre} className={styles.verifyButton}>
                                Verify
                            </button>
                        </div>
                    )}
                </form>

                {studentResult && (
                    <div className={styles.verified}>
                        <div className={styles.greenTick}>✅ Certificate Verified</div>
                        <h3>Student Details</h3>
                        <ul>
                            <li>Name: John Doe</li>
                            <li>Certificate Number: 3261</li>
                            <li>Course: International Diploma in Hotel Management</li>
                            <li>Issue Date: 20 May 2025</li>
                        </ul>
                    </div>
                )}

                {memberResult && (
                    <div className={styles.verified}>
                        <div className={styles.greenTick}>✅ Membership Verified</div>
                        <h3>Membership Details</h3>
                        <ul>
                            {normalizeString(formData.memberName) === 'najeeb' ? (
                                <>
                                    <li>Membership Name: Najeeb</li>
                                    <li>Membership Number: CBPD 001KL10</li>
                                    <li>Membership Type: Channel Partner</li>
                                    <li>Membership Status: Active</li>
                                    <li>Validity Period: 31-Dec-2030</li>
                                </>
                            ) : (
                                <>
                                    <li>Membership Name: Shameer Alikkal</li>
                                    <li>Membership Number: LAISH00125</li>
                                    <li>Membership Status: Active</li>
                                    <li>Validity Period: 7-July-2027</li>
                                </>
                            )}
                        </ul>
                    </div>
                )}

                {centreResult && (
                    <div className={styles.verified}>
                        <div className={styles.greenTick}>✅ Centre Verified</div>
                        <h3>Approved Centre Details</h3>
                        <table className={styles.verificationTable}>
                            <thead>
                                <tr>
                                    <th>Centre Code</th>
                                    <th>Location</th>
                                    <th>Name of Affiliated Centre</th>
                                    <th>Expiry Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>KL/101421/25</td>
                                    <td>Calicut, Kerala</td>
                                    <td>Create Plus</td>
                                    <td>31-10-2025</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Verificationscomp;
