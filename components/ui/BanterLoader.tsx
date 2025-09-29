"use client";

import React from "react";
import styles from "./BanterLoader.module.css";

const BanterLoader = () => {
  return (
    <div className={styles.banterLoader}>
      {Array.from({ length: 9 }).map((_, i) => (
          
        <div key={i} className={styles.banterLoaderBox}></div>
      ))}
    </div>
  );
};

export default BanterLoader;
