import {
  Document,
  Page,
  PDFDownloadLink,
  PDFViewer,
  Text,
  View,
} from "@react-pdf/renderer";
import { Table, TR, TH, TD } from "@ag-media/react-pdf-table";
import { styles } from "./style";
import { tableData, totalData } from "./data";

const name = "Your_Bill";

const Invoice = () => {
  const InvoicePdf = () => (
    <Document title={name}>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <View>
            <Text style={styles.title}>INVOICE</Text>
            <Text>Invoice #INV-2025-13</Text>
          </View>
          <View style={styles.spaceY}>
            <Text style={styles.textBold}>Company Name</Text>
            <Text>Street 43, California</Text>
            <Text>NewTerrace No.123</Text>
          </View>
        </View>

        <View style={styles.spaceY}>
          <Text style={[styles.billTo, styles.textBold]}>Bill to:</Text>
          <Text>Client Name </Text>
          <Text>Client Addrss</Text>
          <Text>City Name</Text>
        </View>

        <Table style={styles.table}>
          <TH style={[styles.tableHeader, styles.textBold]}>
            <TD style={styles.td}>Description</TD>
            <TD style={styles.td}>Quantity</TD>
            <TD style={styles.td}>Unit Price</TD>
            <TD style={styles.td}>Total</TD>
          </TH>
          {tableData.map((item, index) => {
            return (
              <TR key={index}>
                <TD style={styles.td}>{item.description}</TD>
                <TD style={styles.td}>{item.quantity}</TD>
                <TD style={styles.td}>{item.unitPrice.toFixed(2)}</TD>
                <TD style={styles.td}>{item.total.toFixed(2)}</TD>
              </TR>
            );
          })}
        </Table>

        <View style={styles.totals}>
          <View style={{ minWidth: "256px" }}>
            {totalData.map((item, index) => (
              <View
                key={index}
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginBottom: "8px",
                }}
              >
                <Text
                  style={
                    item.label == "Total" ? styles.textBold : styles.textNormal
                  }
                >
                  {item.label}
                </Text>
                <Text
                  style={
                    item.label == "Total" ? styles.textBold : styles.textNormal
                  }
                >
                  {item.value}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </Page>
    </Document>
  );

  return (
    <div className="max-w-4xl mx-auto">
      <div>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi pariatur
        aut quia fuga veniam esse, placeat sapiente voluptate corporis
        laboriosam impedit qui quae nisi adipisci. Nihil sapiente nesciunt
        eveniet iste!
      </div>

      <div className="w-full h-[90vh] ">
        <PDFViewer width="100%" height="100%">
          <InvoicePdf />
        </PDFViewer>
      </div>

      <div className="mt-6 flex justify-center items-center">
        <PDFDownloadLink document={<InvoicePdf />} fileName="invoice.pdf">
          <button className="bg-[blue] flex items-center justify-center text-white px-3 py-2 rounded font-bold">
            Download
          </button>
        </PDFDownloadLink>
      </div>
    </div>
  );
};

export default Invoice;
