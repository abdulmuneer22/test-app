import React from "react";
import styled from "styled-components";

const Section = styled.div`
  border-color: black;
  border-width: 1.5px;
  border-style: solid;
  padding: 10px;
  font-weight: bold;
  width: 140px;
  margin: 10px 10px 10px 0px;
  background-color: rgba(1, 1, 1, 0.2);
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const HEADER_DATA = [
  "Sl.no",
  "Subject Code",
  "Subject",
  "Courses",
  "Department",
  "Semester",
  "Date and Time",
  "Action",
];

const TABLE_DATA = [
  {
    index: 1,
    subjectCode: "15ME64",
    subject: "Desing of Machine Elements",
    courses: "BE",
    department: "Mechanical",
    semester: 6,
    date: "July 6 , 2020",
  },
  {
    index: 1,
    subjectCode: "15ME64",
    subject: "Desing of Machine Elements",
    courses: "BE",
    department: "Mechanical",
    semester: 6,
    date: "July 6 , 2020",
  },
  {
    index: 1,
    subjectCode: "15ME64",
    subject: "Desing of Machine Elements",
    courses: "BE",
    department: "Mechanical",
    semester: 6,
    date: "July 6 , 2020",
  },
  {
    index: 1,
    subjectCode: "15ME64",
    subject: "Desing of Machine Elements",
    courses: "BE",
    department: "Mechanical",
    semester: 6,
    date: "July 6 , 2020",
  },
];

const TableHeader = () => (
  <Section style={styles.longSection}>
    {HEADER_DATA.map((item, index) =>
      index !== HEADER_DATA.length - 1 ? `${item}   |   ` : item
    )}
  </Section>
);

export default function WebForm() {
  return (
    <div>
      <Row>
        <Section>Courses</Section>
        <Section>BE</Section>
      </Row>

      <Row>
        <Section>Department</Section>
        <Section>Mechanical</Section>
      </Row>

      <Row>
        <Section>Semester</Section>
        <Section>6</Section>
        <Section style={styles.resetButton}>RESET</Section>
        <Section style={styles.submitButton}>SUMBIT</Section>
      </Row>
      <Row>
        <TableHeader />
        <div
          style={{
            flex: 0.14,
            display: "flex",
            marginLeft: "30px",
          }}
        />
      </Row>
      {TABLE_DATA.map((td) => (
        <Row>
          <Section style={styles.tableValues}>
            {Object.keys(td).map((item, index) =>
              index !== Object.keys(td).length - 1
                ? `${td[item]}   |   `
                : td[item]
            )}
          </Section>
          <Section
            style={{
              display: "flex",
              flex: 0.07,
            }}
          >
            Submit
          </Section>
          <Section
            style={{
              display: "flex",
              flex: 0.07,
            }}
          >
            Cancel
          </Section>
        </Row>
      ))}

      <Row>
        <div
          style={{
            display: "flex",
            flex: 1,
          }}
        />
        <Section
          style={{
            display: "flex",
            flex: 0.16,
            background: "#91D050",
            borderColor : "#91D050",
          }}
        >
          Announce The Results
        </Section>
      </Row>
    </div>
  );
}

const styles = {
  longSection: {
    flex: 0.86,
    display: "flex",
    color: "#ffffff",
    backgroundColor: "#a5a5a5",
  },
  resetButton: {
    marginLeft: "60px",
    borderColor: "limegreen",
    borderWidth: 1.5,
    textAlign: "center",
  },
  submitButton: {
    borderColor: "limegreen",
    borderWidth: 1.5,
    textAlign: "center",
  },
  tableValues: {
    width: "40%",
    color: "black",
    backgroundColor: "#e7e6e6",
    borderColor: "#37538b",
    display: "flex",
    flex: 1,
  },
};
