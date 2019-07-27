import React from "react";
import IceContainer from "@icedesign/container";
import { Tab } from "@alifd/next";
import LibTable from "./LibTable";
import BorrowTable from "./BorrowTable";
import styles from "./index.module.scss";

const TabPane = Tab.Item;

const tabs = [
  { tab: '全部司机', key: '1', content: <LibTable /> },
  { tab: '待审查司机', key: '2', content: <BorrowTable /> },
];

export default function DonationForm() {
  return (
    <IceContainer>
      <div className={styles.title}>网约车司机审查</div>
      <Tab>
        {tabs.map((item) => {
          return (
            <TabPane key={item.key} title={item.tab}>
              {item.content}
            </TabPane>
          );
        })}
      </Tab>
    </IceContainer>
  );
}
