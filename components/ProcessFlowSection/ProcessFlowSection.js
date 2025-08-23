import React from "react";
import Image from "next/image";
import styles from "./ProcessFlowSection.module.css";

const ProcessFlowSection = () => {
  const processSteps = [
    {
      number: "01",
      title: "Accreditation",
      description:
        "All learning partners should meet the minimum eligibility criteria for being accredited.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop&crop=face",
      alt: "Business meeting for accreditation",
    },
    {
      number: "02",
      title: "Assessments",
      description:
        "Training partners are authorised to conduct proctored assessments with periodic evaluation",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=400&fit=crop&crop=face",
      alt: "Team reviewing assessment documents",
    },
    {
      number: "03",
      title: "Certification",
      description:
        "Candidates meeting the minimum skill requirements are issued a digitally verifiable credential.",
      image:
        "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=400&fit=crop&crop=face",
      alt: "Professional team with certification",
    },
  ];

  return (
    <section className={styles.processFlowSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.titleLine}></span>
            THE PROCESS FLOW
            <span className={styles.titleLine}></span>
          </h2>
          <p className={styles.sectionSubtitle}>
            Our streamlined three-step process ensures quality education and
            recognized certification
          </p>
        </div>

        <div className={styles.processContainer}>
          {processSteps.map((step, index) => (
            <div key={index} className={styles.processStep}>
              <div className={styles.stepNumber}>
                <span className={styles.numberBadge}>{step.number}</span>
              </div>

              <div className={styles.stepContent}>
                <div className={styles.stepImage}>
                  <Image
                    src={step.image}
                    alt={step.alt}
                    width={200}
                    height={200}
                    className={styles.circularImage}
                  />
                  <div className={styles.imageOverlay}></div>
                </div>

                <div className={styles.stepText}>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDescription}>{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessFlowSection;
