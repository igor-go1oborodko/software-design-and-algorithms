import React from "react";
import DocLink from "@docusaurus/Link";

import styles from "./Link.module.css";

export function Link(props) {
  const { url, title, children } = props;
  return (
    <DocLink className="button button--lg akfjklajs" to={url}>
      <div className={styles.link}>
        {title}
        {children}
      </div>
    </DocLink>
  );
}
