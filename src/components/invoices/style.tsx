import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
  page: {
    backgroundColor: "#fff",
    color: "#262626",
    fontSize: "12px",
    padding: "20px 30px",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: "20px",
  },
  title: {
    fontSize: "20px",
    fontWeight: "bold",
  },
  textBold: {
    fontWeight: "bold",
  },
  textNormal: {
    fontWeight: "normal",
  },
  spaceY: {
    display: "flex",
    flexDirection: "column",
    gap: "2px",
  },
  billTo: {
    marginBottom: "10px",
  },
  table: {
    width: "100%",
    borderColor: "1px solid #f3f4f6",
    margin: "20px 0px",
  },
  tableHeader: {
    backgroundColor: "#f3f4f6",
  },
  td: {
    padding: "5px 10px",
  },
  totals: {
    alignItems: "flex-end",
  },
});
