"use client";

import React from "react";
import styles from "./BanterLoader.module.css";

const BanterLoader = () => {
  return (
    <div className={styles.banterLoader}>
      {Array.from({ length: 9 }).map((_, i) => {
        // Manhattan distance from the centre of the 3x3 grid: 0, 1 or 2
        const ring = Math.abs((i % 3) - 1) + Math.abs(Math.floor(i / 3) - 1);
        return (
          <div
            key={i}
            className={styles.banterLoaderBox}
            style={{ "--ring": ring } as React.CSSProperties}
          ></div>
        );
      })}
    </div>
  );
};

export default BanterLoader;
