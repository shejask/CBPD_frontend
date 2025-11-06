import React from "react";
import Image from "next/image";
import styles from "./StatisticsSection.module.css";

const StatisticsSection = () => {
  const stats = [
    {
      number: "3K+",
      label: "STUDENTS ENROLLED",
      icon: "🎓",
      color: "#1e40af", // Royal Blue
      bgColor: "rgba(30, 64, 175, 0.1)",
    },
    {
      number: "80+",
      label: "COURSES AVAILABLE",
      icon: "📚",
      color: "#dc2626", // Royal Red
      bgColor: "rgba(220, 38, 38, 0.1)",
    },
    {
      number: "100%",
      label: "SATISFACTION RATE",
      icon: "⭐",
      color: "#1e40af", // Royal Blue
      bgColor: "rgba(30, 64, 175, 0.1)",
    },
    {
      number: "100+",
      label: "PARTNERS WORLDWIDE",
      icon: "🤝",
      color: "#dc2626", // Royal Red
      bgColor: "rgba(220, 38, 38, 0.1)",
    },
    {
      number: "100+",
      label: "Certificate Validated in 100+ Countries",
      icon: "🌍",
      color: "#1e40af", // Royal Blue
      bgColor: "rgba(30, 64, 175, 0.1)",
    },
  ];

  return (
    <section className={styles.statisticsSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Our Global Impact & Success</h2>
          <p className={styles.sectionSubtitle}>
            Discover the numbers that reflect our commitment to excellence and
            the trust placed in us by learners and partners worldwide
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
