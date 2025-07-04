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
        studentName: '',  // Added student name
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

    const verifyStudent = () => {
        const { regNumber, certNumber, learnerNumber, studentName } = formData;
        if (regNumber === 'ARCG1021' && certNumber === '3261' && learnerNumber === '68' && studentName.toLowerCase() === 'john doe') {
            setStudentResult(true);
        } else {
            setStudentResult(false);
        }
    };

    const verifyMember = () => {
        const { memberName, memberNumber } = formData;
        if (memberName.toLowerCase() === 'najeeb' && memberNumber === 'CBPD001KL10') {
            setMemberResult(true);
        } else {
            setMemberResult(false);
        }
    };

    const verifyCentre = () => {
        const { centreName, centreCode } = formData;
        if (centreName.toLowerCase() === 'create plus' && centreCode === 'KL/101421/25') {
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
                            <li>Membership Name: Najeeb</li>
                            <li>Membership Number: CBPD 001KL10</li>
                            <li>Membership Type: Channel Partner</li>
                            <li>Membership Status: Active</li>
                            <li>Validity Period: 31-Dec-2030</li>
                        </ul>
                    </div>
                )}                {centreResult && (
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