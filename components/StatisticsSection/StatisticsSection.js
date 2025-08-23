import React from "react";
import Image from "next/image";
import styles from "./StatisticsSection.module.css";

const StatisticsSection = () => {
  const stats = [
    {
      number: "2.5K+",
      label: "STUDENTS ENROLLED",
      icon: "🎓",
      color: "var(--primary-color, #2563eb)",
      bgColor: "rgba(37, 99, 235, 0.1)",
    },
    {
      number: "80+",
      label: "COURSES AVAILABLE",
      icon: "📚",
      color: "var(--accent-color, #dc2626)",
      bgColor: "rgba(220, 38, 38, 0.1)",
    },
    {
      number: "100%",
      label: "SATISFACTION RATE",
      icon: "⭐",
      color: "var(--success-color, #7c3aed)",
      bgColor: "rgba(124, 58, 237, 0.1)",
    },
    {
      number: "100+",
      label: "PARTNERS WORLDWIDE",
      icon: "🤝",
      color: "var(--warning-color, #ea580c)",
      bgColor: "rgba(234, 88, 12, 0.1)",
    },
  ];

  return (
    <section className={styles.statisticsSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.highlight}></span> Acquire Job-Related
            Skills
          </h2>
          <p className={styles.sectionSubtitle}>
            Join thousands of successful learners who have transformed their
            careers with our professional programs
          </p>
        </div>

        <div className={styles.statsGrid}>
          {stats.map((stat, index) => (
            <div
              key={index}
              className={styles.statCard}
              style={{
                "--card-color": stat.color,
                "--card-bg": stat.bgColor,
              }}
            >
              <div className={styles.statIcon}>
                <span className={styles.iconEmoji}>{stat.icon}</span>
              </div>
              <div className={styles.statContent}>
                <h3 className={styles.statNumber} style={{ color: stat.color }}>
                  {stat.number}
                </h3>
                <p className={styles.statLabel}>{stat.label}</p>
              </div>
              {/* <div className={styles.cardDecoration}></div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
