import React, { useState } from 'react';
import styles from './Verificationscomp.module.css';
import { searchCenters, searchMemberships, formatDate } from '../../lib/api/verificationApi';

const Verificationscomp = () => {
    const [verificationType, setVerificationType] = useState('');
    const [studentResult, setStudentResult] = useState(false);
    const [memberResult, setMemberResult] = useState(false);
    const [centreResult, setCentreResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [membershipData, setMembershipData] = useState(null);
    const [centerData, setCenterData] = useState(null);
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
        setError('');
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
        
        if (normalizedRegNumber === 'arcg1021' && 
            normalizedCertNumber === '3261' && 
            normalizedLearnerNumber === '68' && 
            normalizedStudentName === 'john doe') {
            setStudentResult(true);
        } else {
            setStudentResult(false);
        }
    };

    const verifyMember = async () => {
        console.log('verifyMember called');
        const { memberName, memberNumber } = formData;
        
        console.log('Form data:', { memberName, memberNumber });
        
        if (!memberName.trim() || !memberNumber.trim()) {
            setError('Please enter both membership name and number');
            return;
        }

        setLoading(true);
        setError('');
        setMemberResult(false);
        setMembershipData(null);

        try {
            console.log('Calling searchMemberships API...');
            const response = await searchMemberships(memberName.trim(), memberNumber.trim());
            console.log('API response:', response);
            
            if (response.memberships && response.memberships.length > 0) {
                setMembershipData(response.memberships[0]);
                setMemberResult(true);
                console.log('Membership found:', response.memberships[0]);
            } else {
                setError('No membership found with the provided details');
                setMemberResult(false);
                console.log('No membership found');
            }
        } catch (error) {
            console.error('Error verifying membership:', error);
            setError(`Failed to verify membership: ${error.message}`);
            setMemberResult(false);
        } finally {
            setLoading(false);
        }
    };

    const verifyCentre = async () => {
        console.log('verifyCentre called');
        const { centreName, centreCode } = formData;
        
        console.log('Form data:', { centreName, centreCode });
        
        if (!centreName.trim() || !centreCode.trim()) {
            setError('Please enter both centre name and code');
            return;
        }

        setLoading(true);
        setError('');
        setCentreResult(false);
        setCenterData(null);

        try {
            console.log('Calling searchCenters API...');
            const response = await searchCenters(centreName.trim(), centreCode.trim());
            console.log('API response:', response);
            
            if (response.centers && response.centers.length > 0) {
                setCenterData(response.centers[0]);
                setCentreResult(true);
                console.log('Center found:', response.centers[0]);
            } else {
                setError('No center found with the provided details');
                setCentreResult(false);
                console.log('No center found');
            }
        } catch (error) {
            console.error('Error verifying center:', error);
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
                            <button 
                                type="button" 
                                onClick={verifyMember} 
                                className={styles.verifyButton}
                                disabled={loading}
                            >
                                {loading ? 'Verifying...' : 'Verify'}
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
                            <button 
                                type="button" 
                                onClick={verifyCentre} 
                                className={styles.verifyButton}
                                disabled={loading}
                            >
                                {loading ? 'Verifying...' : 'Verify'}
                            </button>
                        </div>
                    )}
                </form>

                {error && (
                    <div className={styles.error}>
                        <div className={styles.errorMessage}>❌ {error}</div>
                    </div>
                )}

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

                {memberResult && membershipData && (
                    <div className={styles.verified}>
                        <div className={styles.greenTick}>✅ Membership Verified</div>
                        <h3>Membership Details</h3>
                        <ul>
                            <li>Membership Name: {membershipData.membershipName}</li>
                            <li>Membership Number: {membershipData.membershipNumber}</li>
                            <li>Membership Type: {membershipData.membershipType}</li>
                            <li>Membership Status: {membershipData.membershipStatus}</li>
                            <li>Valid From: {formatDate(membershipData.validityPeriod?.startDate)}</li>
                            <li>Valid Until: {formatDate(membershipData.validityPeriod?.endDate)}</li>
                            <li>Days Until Expiry: {membershipData.daysUntilExpiry}</li>
                            <li>Validity Status: {membershipData.validityStatus}</li>
                        </ul>
                    </div>
                )}

                {centreResult && centerData && (
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
                                    <th>Status</th>
                                    <th>Days Until Expiry</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{centerData.centreCode}</td>
                                    <td>{centerData.location}</td>
                                    <td>{centerData.nameOfAffiliatedCentre}</td>
                                    <td>{formatDate(centerData.expiryDate)}</td>
                                    <td>{centerData.status}</td>
                                    <td>{centerData.daysUntilExpiry}</td>
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
