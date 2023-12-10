const tableIdName = "tableContainerNew";

let cssStringToExportData = `
<style type="text/css" media="print">
@media print
{
   @page {
     margin-top: 2rem;
     margin-bottom: 2rem;
     size: landscape;
   }
   body  {
     padding-top: 72px;
     padding-bottom: 72px ;
   }
   
}</style>


<style>

table {
  border-collapse: collapse;
}
th, td {
  border: 1px solid black;
  padding: 8px;
}

.d-flx {
  display: flex;
}
.flx-jus-cen {
  display: flex;
  justify-content: center;
}

.flx-aline-cen {
  display: flex;
  align-items: center;
}

.flx-wrp {
  display: flex;
  flex-wrap: wrap;
}

.flx-jus-spc-bet {
  display: flex;
  justify-content: space-between;
}
.txt-alin-cntr {
  text-align: center;
}

.flx-dir-clm-rvs {
  display: flex;
  flex-direction: column-reverse;
}

/* margin-padding */

.m-1 {
  margin: 1rem;
}
.mt-1 {
  margin-top: 1rem;
}
.mr-1 {
  margin-right: 1rem;
}
.mb-1 {
  margin-bottom: 1rem;
}
.ml-1 {
  margin-left: 1rem;
}
.p-1 {
  padding: 1rem;
}
.pt-1 {
  padding-top: 1rem;
}
.pr-1 {
  padding-right: 1rem;
}
.pb-1 {
  padding-bottom: 1rem;
}
.pl-1 {
  padding-left: 1rem;
}
.p-05 {
  padding: 0.5rem;
}
.plr-2 {
  padding: 0 2rem !important;
}

/* border */

.border-none {
  border: none;
}
.border-none-right {
  border-right: none;
}
.border-none-left {
  border-left: none;
}
.border-none-top {
  border-top: none;
}
.border-none-bottom {
  border-bottom: none;
}

.border-right {
  border-right: 1px solid black !important;
}
.border-left {
  border-left: 1px solid black !important;
}
.border-top {
  border-top: 1px solid black !important;
}
.border-bottom {
  border-bottom: 1px solid black !important;
}

.fnt-b {
  font-weight: bold;
}

/* cursor */
.cur-p {
  cursor: pointer;
}

.width-100 {
  width: 100%;
}

* {
  margin: 0;
  padding: 0;
  text-indent: 0;
}
.s1 {
  color: black;
  font-family: Tahoma, sans-serif;
  font-style: normal;
  font-weight: bold;
  text-decoration: none;
  font-size: 8pt;
}
.s2 {
  color: black;
  font-family: "Times New Roman", serif;
  font-style: normal;
  font-weight: normal;
  text-decoration: none;
  font-size: 8pt;
}
.s3 {
  color: black;
  font-family: Tahoma, sans-serif;
  font-style: normal;
  font-weight: bold;
  text-decoration: none;
  font-size: 6.5pt;
  vertical-align: 1pt;
}
.s4 {
  color: black;
  font-family: "Times New Roman", serif;
  font-style: normal;
  font-weight: normal;
  text-decoration: none;
  font-size: 6.5pt;
  vertical-align: 1pt;
}
.s5 {
  color: black;
  font-family: Tahoma, sans-serif;
  font-style: normal;
  font-weight: normal;
  text-decoration: none;
  font-size: 6.5pt;
  vertical-align: 1pt;
}
.s6 {
  color: black;
  font-family: Tahoma, sans-serif;
  font-style: normal;
  font-weight: bold;
  text-decoration: none;
  font-size: 7.5pt;
}
.s7 {
  color: black;
  font-family: "Times New Roman", serif;
  font-style: normal;
  font-weight: normal;
  text-decoration: none;
  font-size: 7.5pt;
}
.s8 {
  color: black;
  font-family: Tahoma, sans-serif;
  font-style: normal;
  font-weight: bold;
  text-decoration: none;
  font-size: 6.5pt;
  vertical-align: 3pt;
}
.s9 {
  color: black;
  font-family: "Times New Roman", serif;
  font-style: normal;
  font-weight: normal;
  text-decoration: none;
  font-size: 6.5pt;
  vertical-align: 3pt;
}
.s10 {
  color: black;
  font-family: Tahoma, sans-serif;
  font-style: normal;
  font-weight: normal;
  text-decoration: none;
  font-size: 6.5pt;
  vertical-align: 3pt;
}
.s11 {
  color: black;
  font-family: Tahoma, sans-serif;
  font-style: normal;
  font-weight: bold;
  text-decoration: none;
  font-size: 6.5pt;
}
.s12 {
  color: black;
  font-family: "Times New Roman", serif;
  font-style: normal;
  font-weight: normal;
  text-decoration: none;
  font-size: 6.5pt;
}
.s13 {
  color: black;
  font-family: Tahoma, sans-serif;
  font-style: normal;
  font-weight: normal;
  text-decoration: none;
  font-size: 6.5pt;
}
table,
tbody {
  vertical-align: top;
  overflow: visible;
}


/* border */

.border-none {
  border: none;
}
.border-none-right {
  border-right: none;
}
.border-none-left {
  border-left: none;
}
.border-none-top {
  border-top: none;
}
.border-none-bottom {
  border-bottom: none;
}
.border-right {
  border-right: 1px solid black !important;
}
.border-left {
  border-left: 1px solid black  !important;
}
.border-top {
  border-top: 1px solid black !important;
}
.border-bottom {
  border-bottom: 1px solid black !important;
}

.height-5rem{
  height:5rem;
}


/* cursor */
.cur-p {
  cursor: pointer;
}

.width-100 {
  width: 100%;
}

#${tableIdName} {
  background-color: white;
  font-size: 1rem;
  font-weight: bold;
}
#${tableIdName} span {
  background-color: white;
  font-size: 1rem;
  font-weight: bold;
  border: 2px solid black;
  text-align: center;
  color: black;
  width: 6rem;
  display: inline-block;
}
.pdf-heading .head-wrapper {
  display: flex;
}

.pdf-heading .head-wrapper .ch1 {
  /* border: 1px solid black; */
  width: 30rem;
  height: 5rem;
}
.pdf-heading .head-wrapper .ch2 {
  width: 60rem;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.pdf-heading .head-wrapper .ch3 {
  width: 30rem;
  height: 5rem;
}

.pdf-heading .head-wrapper .heading-main-container {
  font-size: 1.5rem;
  font-weight: bold;
  width: 30rem;
  /* height: 0  rem; */
  padding: 1rem;
}

.name-product-table {
  width: 100%;
}

.batch-details-tables table {
  width: 100%;
}
.batch-details-tables td {
  height: 2.5rem !important;
}
.PARAMETERS-details-tables table {
  width: 100%;
}
.PARAMETERS-details-tables td {
  height: 2.5rem !important;
}

.table-lable-left table tr td:nth-child(1) {
  color: rgb(2, 3, 66);
  text-align: right;
}
.batch-details-tables td, .PARAMETERS-details-tables td {
  border: none;
}







#tableContainer td, #tableContainer th{
  padding: 2px 5px !important ;
}

</style>


`;

const demo = (e) => {
  console.log(e);
};
// jsx satrts
const jsx = (tag, attr, child) => {
  // let attri = "";
  // for (const key in attr) {
  //   attri += attr[key] ? ` ${key}="${attr[key]}" ` : key;
  // }
  // const srtElement = "<" + tag + attri + ">" + child + "<" + tag + "/>";
  // console.log(srtElement, "srtElement single");
  //   document.getElementById(id).innerHTML = srtElement;
  if (!tag) return;
  let newElement = document.createElement(tag);
  // console.log(child, "chiled here ", typeof child);
  if (typeof child == "object") {
    child?.map((e, i) => {
      // console.log(newElement, "newElementnewElement", i);
      if (e?.nodeType === Node.ELEMENT_NODE) {
        newElement.appendChild(e);
      }
    });
  } else {
    newElement.textContent = child;
  }

  for (const key in attr) {
    newElement.setAttribute(key, attr[key]);
  }

  // console.log(newElement, "newElement");
  return newElement;
};

const jsxMultiTag = (data, id, isClearOld) => {
  // isClearOld ? (document.getElementById(id).innerHTML = "") : null;
  let srtElement = "";
  const elements = data.map((e, i) => {
    // console.log(i, e, "iiiiiiieeeeeeee");
    return jsx(...e);
  });

  // console.log(elements, "elements111111111");
  if (!id) {
    return elements;
  }
  elements.map((ele) => {
    document.getElementById(id).appendChild(ele);
  });
  // console.log(elements, "elements");
  return elements;
};

// setTimeout(() => {
//   jsxMultiTag(
//     [
//       ["div", { class: "okok", id: "pll" }, "okok"],
//       ["span", { class: "plsplpsls", id: "osidsssssnkd" }, "ssssssssssssss"],
//     ],
//     "addEle",
//     true
//   );
// document.getElementById("addEle").innerHTML = "";
// let c1 = jsx("span", {}, "im span");
// let c2 = jsx("div", {}, "im div");

// document
//   .getElementById("addEle")
//   .appendChild(jsx("div", { onclick: "demo(event)" }, [c1, c2]));
// }, 2000);

// jsx ends

// veriables
let data = {};
let pdfDataBox = {
  // machineName: "HOT WATER SPRAY STERILIZER AUTOCLAVE-III- BATCH REPORT",
  // productName: "Autoclave-3",
  // batchNo: "Batch test",
  // lotNo: "2",
  // cycleNo: "10",
  // packSizeInMl: "150",
  // timeInterval: "10",
  // programNo: "1",
  // cycleStartDateTime: "2023-06-14 16:33:17",
  // cycleEndDateTime: "2023-06-14 16:33:17",
  // coolingTemperature: 54.5,
  // overheating: 0.0,
  // sterilizationTemperature: 107.0,
  // plusTempLimit: 1.0,
  // minusTempLimit: 0.0,
  // sterilizationTime: 10.0,
  // chamberPressureLimitDuringHeating: 1.0,
  // chamberPressureSterilizationTemp: 1.4,
  // chamberPressureAtStartCooling: 1.5,
  // chamberPressureAtEndOfCooling: 0.03,
  // chamberPressureAfterDrain: 0.0,
  // purifiedWaterLevel: 74.0,
};
let jesonTableDataOldLength = 0;
let hitContinu = false;
let dataKey = [];
let dataRequire = {};
let extra = [];
let isModel = false;
let date = new Date();
let clearTime = "";
let curDate =
  date.getFullYear() +
  "-" +
  ("0" + (date.getMonth() + 1)).slice(-2) +
  "-" +
  ("0" + date.getDate()).slice(-2);
// veriables end
const allInputs = document.getElementsByClassName("input-field");
for (const key in allInputs) {
  const e = allInputs[key];
  if (typeof e == "object") {
    data = { ...data, [e.name]: "" };
    dataKey = [...dataKey, e.name];
    extra = [...extra, e.title];
    dataRequire = { ...dataRequire, [e.name]: e.required };
  }
}
dataKey.map((e, i) => {
  let element = document.getElementById(i);
  console.log(element.name, "element.name");
  if (element.type == "time") {
    if (element.name == "fromTime") {
      element.value = "00:00:00";
      data = { ...data, [element.name]: "00:00:00" };
    } else {
      element.value = "23:59:59";
      data = { ...data, [element.name]: "23:59:59" };
    }
  } else if (element.type == "date") {
    element.value = curDate;
    data = { ...data, [element.name]: curDate };
  }
});
let dataCopy = { ...data };
console.log(data, "data");

const onchangDDL = () => {
  jesonTableDataOldLength = 0;
  const ddlData = document.getElementById("4");
  if (ddlData.value == "-1") {
    ddlData.style.color = "gray";
    document.getElementById(tableIdName).style.display = "none";
    document.getElementById("nodataText").style.display = "none";
    hitContinu = false;
  }
  console.log(ddlData, "value");
};
onchangDDL();

const onChangeInput = (e, num) => {
  // checkNumber(e.target.value);
  console.log(e.target.value, "onchange");
  document.getElementById("nodataText").style.display = "none";

  let id = e.target.id;

  if (num == "num") {
    if (!isNaN(Number(e.target.value))) {
      data = { ...data, [e.target.name]: e.target.value };
    } else {
      document.getElementById(id).value = data[e.target.name];
      // alert("only number are allowed");
      modelOnDemo(
        `Only Number are allowed`,
        [
          {
            name: "Close",
            onclick: "closeModel()",
            class: "b-100",
          },
          // {
          //   name: "Ok",
          //   onclick: "closeModel()",
          //   class: "noclass",
          // },
        ],
        2000
      );
    }
  } else if (e.target.type == "date") {
    hitContinu = false;
    if (data.dateTimeMin || data.dateTimeMax) {
      data = { ...data, [e.target.name]: e.target.value };

      console.log(
        data.dateTimeMin > data.dateTimeMax,
        "datechack",
        data.dateTimeMin,
        data.dateTimeMax
      );
      if (data.dateTimeMin > data.dateTimeMax) {
        document.getElementById(e.target.id).value = "";
        // alert("wrong data");
        modelOnDemo(
          `${
            e.target.placeholder == "From Date"
              ? "From Date Should Be Equal Or Less Then To Date"
              : "To Date Should Be  Equal Or Greater Then From Date"
          }`,
          [
            {
              name: "Close",
              onclick: "closeModel()",
              class: "b-100",
            },
            // {
            //   name: "Ok",
            //   onclick: "closeModel()",
            //   class: "noclass",
            // },
          ],
          100000
        );
        data = { ...data, [e.target.name]: "" };
      }
    } else {
      data = { ...data, [e.target.name]: e.target.value };
    }
    getDDL();
  } else {
    data = { ...data, [e.target.name]: e.target.value };
  }

  if (num == "batch") {
    jesonTableDataOldLength = 0;
    const ddlElement = document.getElementById("4");
    if (e.target.value !== "-1") {
      ddlElement.style.color = "#101111";
      jeSonsFetch();
    } else {
      ddlElement.style.color = "gray";
      document.getElementById(tableIdName).style.display = "none";
      document.getElementById("nodataText").style.display = "none";
      hitContinu = false;
    }
  } else {
    document.getElementById(tableIdName).style.display = "none";
    hitContinu = false;
  }

  console.log(e.target.name, data, dataKey, extra, "change", dataRequire);
};

const fetchData = (btn) => {
  document.getElementById("nodataText").style.display = "none";

  const fetechBody = {
    ...data,
    dateTimeMax: `${data.dateTimeMax} ${data.toTime}`,
    dateTimeMin: `${data.dateTimeMin} ${data.fromTime}`,
  };
  delete fetechBody.fromTime;
  delete fetechBody.toTime;

  openBackground();
  let dataTab = [];
  // let Tab = [
  //   {
  //     "DATE & TIME": "03/08/2021 10:22:17",
  //     "STEP NAME": "FILLING",
  //     RFT1: "0.0",
  //     "RFT1-F0": "35.00",
  //     RFT2: "dates",
  //     "RFT2-F0": "35.00",
  //     RFT3: "0.0",
  //     "RFT3-F0": "35.00",
  //     RFT4: "0.0",
  //     "RFT4-F0": "35.00",
  //     TC1: "35.0",
  //     TS1: "36.0",
  //     PRESSURE: "0.20",
  //     "WATER LEVEL": "10",
  //   },
  //   {
  //     "DATE & TIME": "03/08/2021 10:22:17",
  //     "STEP NAME": "FILLING",
  //     RFT1: "0.0",
  //     "RFT1-F0": "35.00",
  //     RFT2: "dates",
  //     "RFT2-F0": "35.00",
  //     RFT3: "0.0",
  //     "RFT3-F0": "35.00",
  //     RFT4: "0.0",
  //     "RFT4-F0": "35.00",
  //     TC1: "35.0",
  //     TS1: "36.0",
  //     PRESSURE: "0.20",
  //     "WATER LEVEL": "10",
  //   },
  //   {
  //     "DATE & TIME": "03/08/2021 10:22:17",
  //     "STEP NAME": "FILLING",
  //     RFT1: "0.0",
  //     "RFT1-F0": "35.00",
  //     RFT2: "dates",
  //     "RFT2-F0": "35.00",
  //     RFT3: "0.0",
  //     "RFT3-F0": "35.00",
  //     RFT4: "0.0",
  //     "RFT4-F0": "35.00",
  //     TC1: "35.0",
  //     TS1: "36.0",
  //     PRESSURE: "0.20",
  //     "WATER LEVEL": "10",
  //   },
  //   {
  //     "DATE & TIME": "03/08/2021 10:22:17",
  //     "STEP NAME": "FILLING",
  //     RFT1: "0.0",
  //     "RFT1-F0": "35.00",
  //     RFT2: "dates",
  //     "RFT2-F0": "35.00",
  //     RFT3: "0.0",
  //     "RFT3-F0": "35.00",
  //     RFT4: "0.0",
  //     "RFT4-F0": "35.00",
  //     TC1: "35.0",
  //     TS1: "36.0",
  //     PRESSURE: "0.20",
  //     "WATER LEVEL": "10",
  //   },
  //   {
  //     "DATE & TIME": "03/08/2021 10:22:17",
  //     "STEP NAME": "FILLING",
  //     RFT1: "0.0",
  //     "RFT1-F0": "35.00",
  //     RFT2: "dates",
  //     "RFT2-F0": "35.00",
  //     RFT3: "0.0",
  //     "RFT3-F0": "35.00",
  //     RFT4: "0.0",
  //     "RFT4-F0": "35.00",
  //     TC1: "35.0",
  //     TS1: "36.0",
  //     PRESSURE: "0.20",
  //     "WATER LEVEL": "10",
  //   },
  //   {
  //     "DATE & TIME": "03/08/2021 10:22:17",
  //     "STEP NAME": "FILLING",
  //     RFT1: "0.0",
  //     "RFT1-F0": "35.00",
  //     RFT2: "dates",
  //     "RFT2-F0": "35.00",
  //     RFT3: "0.0",
  //     "RFT3-F0": "35.00",
  //     RFT4: "0.0",
  //     "RFT4-F0": "35.00",
  //     TC1: "35.0",
  //     TS1: "36.0",
  //     PRESSURE: "0.20",
  //     "WATER LEVEL": "10",
  //   },
  //   {
  //     "DATE & TIME": "03/08/2021 10:22:17",
  //     "STEP NAME": "FILLING",
  //     RFT1: "0.0",
  //     "RFT1-F0": "35.00",
  //     RFT2: "dates",
  //     "RFT2-F0": "35.00",
  //     RFT3: "0.0",
  //     "RFT3-F0": "35.00",
  //     RFT4: "0.0",
  //     "RFT4-F0": "35.00",
  //     TC1: "35.0",
  //     TS1: "36.0",
  //     PRESSURE: "0.20",
  //     "WATER LEVEL": "10",
  //   },
  //   {
  //     "DATE & TIME": "03/08/2021 10:22:17",
  //     "STEP NAME": "FILLING",
  //     RFT1: "0.0",
  //     "RFT1-F0": "35.00",
  //     RFT2: "dates",
  //     "RFT2-F0": "35.00",
  //     RFT3: "0.0",
  //     "RFT3-F0": "35.00",
  //     RFT4: "0.0",
  //     "RFT4-F0": "35.00",
  //     TC1: "35.0",
  //     TS1: "36.0",
  //     PRESSURE: "0.20",
  //     "WATER LEVEL": "10",
  //   },
  //   {
  //     "DATE & TIME": "03/08/2021 10:22:17",
  //     "STEP NAME": "FILLING",
  //     RFT1: "0.0",
  //     "RFT1-F0": "35.00",
  //     RFT2: "dates",
  //     "RFT2-F0": "35.00",
  //     RFT3: "0.0",
  //     "RFT3-F0": "35.00",
  //     RFT4: "0.0",
  //     "RFT4-F0": "35.00",
  //     TC1: "35.0",
  //     TS1: "36.0",
  //     PRESSURE: "0.20",
  //     "WATER LEVEL": "10",
  //   },
  //   {
  //     "DATE & TIME": "03/08/2021 10:22:17",
  //     "STEP NAME": "FILLING",
  //     RFT1: "0.0",
  //     "RFT1-F0": "35.00",
  //     RFT2: "dates",
  //     "RFT2-F0": "35.00",
  //     RFT3: "0.0",
  //     "RFT3-F0": "35.00",
  //     RFT4: "0.0",
  //     "RFT4-F0": "35.00",
  //     TC1: "35.0",
  //     TS1: "36.0",
  //     PRESSURE: "0.20",
  //     "WATER LEVEL": "10",
  //   },
  //   {
  //     "DATE & TIME": "03/08/2021 10:22:17",
  //     "STEP NAME": "FILLING",
  //     RFT1: "0.0",
  //     "RFT1-F0": "35.00",
  //     RFT2: "dates",
  //     "RFT2-F0": "35.00",
  //     RFT3: "0.0",
  //     "RFT3-F0": "35.00",
  //     RFT4: "0.0",
  //     "RFT4-F0": "35.00",
  //     TC1: "35.0",
  //     TS1: "36.0",
  //     PRESSURE: "0.20",
  //     "WATER LEVEL": "10",
  //   },
  // ];
  fetch("http://43.205.144.183:8080/autoclave/get", {
    method: "POST",
    body: JSON.stringify(fetechBody),
    headers: { "Content-Type": "application/json" },
  })
    .then((data) => {
      return data.json();
    })
    .then((datas) => {
      console.log(datas, "data", datas.data);
      dataTab = datas.data;
      if (!datas.data.length) {
        document.getElementById(tableIdName).style.display = "none";
        document.getElementById("nodataText").style.display = "block";
      }
      pdfDataBox = datas;
      console.log(dataTab, "dataTab 11");
      for (const lable in pdfDataBox) {
        console.log(lable, "lable");
        if (document.getElementById(lable)) {
          document.getElementById(lable).innerHTML = pdfDataBox[lable];
        }
      }
      createTable(dataTab);
      if (btn == "export") {
        takePdf();
      }
      closeModel();
    })
    .catch((er) => {
      document.getElementById("nodataText").style.display = "block";
      document.getElementById(tableIdName).style.display = "none";
      closeModel();
      modelOnDemo(
        `Error to fetch data`,
        [
          {
            name: "Close",
            onclick: "closeModel()",
            class: "b-100",
          },
          // {
          //   name: "Ok",
          //   onclick: "closeModel()",
          //   class: "noclass",
          // },
        ],
        3000
      );
    });

  // setTimeout(() => {

  // }, 200);
};

const exportData = (btn) => {
  let isInputTrue = false;
  for (let i = 0; i < dataKey.length; i++) {
    if (dataRequire[dataKey[i]] && !data[dataKey[i]]) {
      isInputTrue = false;
      console.log("Please Select", dataKey[i]);
      //   alert(`Please Enter ${dataKey[i]}`);
      // addModel(`Please Enter ${dataKey[i]}`);
      modelOnDemo(
        `Please ${extra[i]}`,
        [
          {
            name: "Close",
            onclick: "closeModel()",
            class: "b-100",
          },
          // {
          //   name: "Ok",
          //   onclick: "closeModel()",
          //   class: "noclass",
          // },
        ],
        5000
      );

      break;
    } else {
      isInputTrue = true;
    }
  }

  if (isInputTrue) {
    if (btn == "view") {
      document.getElementById(tableIdName).style.display = "block";
    } else if (btn == "export") {
      // document.getElementById(tableIdName).style.display = "none";
    }

    fetchData(btn);
  }

  console.log("exportData");
};

const reset = () => {
  hitContinu = false;
  isModel = false;
  data = { ...dataCopy };
  dataKey.map((ele, i) => {
    // document.getElementById(i).valueAsDate=date
    // document.getElementById(i).value = "";
    let element = document.getElementById(i);
    console.log(element.name, "element.name");
    if (element.type == "time") {
      if (element.name == "fromTime") {
        element.value = "00:00:00";
      } else element.value = "23:59:59";
    } else if (element.type == "date") {
      element.value =
        date.getFullYear() +
        "-" +
        ("0" + (date.getMonth() + 1)).slice(-2) +
        "-" +
        ("0" + date.getDate()).slice(-2);
    } else if (element.name == "Batch") {
      const ddlData = document.getElementById("4");
      ddlData.value = "-1";
      ddlData.style.color = "gray";
      console.log(ddlData, "value");
    } else {
      element.value = "";
    }
  });
  document.getElementById("tableContainer").innerHTML = "";
  document.getElementById(tableIdName).style.display = "none";
  document.getElementById("nodataText").style.display = "none";
  getDDL();
};

// model-----------------------------------------------------------------

const openBackground = () => {
  const loading = jsx("div", {}, null);
  document.getElementById("fullWidthBackground").appendChild(
    jsx(
      "div",
      //
      {
        class: "lds-ripple",
        // style: "display:block",
      },
      [loading]
    )
  );
};

const closeModel = () => {
  clearTimeout(clearTime);
  document.getElementById("fullWidthBackground").innerHTML = "";
  document.getElementById("model").innerHTML = "";
};

const modelOnDemo = (msg, btn, autoClose) => {
  document.getElementById("fullWidthBackground").appendChild(
    jsx(
      "div",
      {
        class: "popUpFundo red",
        style: "display:block",
      },
      null
    )
  );

  const btnss = btn?.map((e) => {
    return [
      "button",
      {
        class: `puCancelar ${e.class} `,
        onclick: e.onclick,
      },
      e.name,
    ];
  });

  const myTextMsg = jsx("span", { class: "plr-2 fnt-b" }, msg);
  const allChildes = jsxMultiTag(
    [
      ["div", { class: "error-icon" }, ""],
      ["div", {}, [myTextMsg]],
      [],
      // [
      //   "button",
      //   { class: "puCancelar b-100", onclick: "closeModel()" },
      //   "Close",
      // ],
      ...btnss,
    ],
    null,
    true
  );
  document
    .getElementById("model")
    .appendChild(
      jsx("div", { class: "popUp p red   popUpEntrada" }, allChildes)
    );

  clearTime = setTimeout(closeModel, autoClose ? autoClose : 10000);
};

// const removeModel = () => {
//   if (isModel) {
//     document.getElementById("model").classList?.remove("model");
//     document.getElementById("model").innerHTML = "";
//     console.log("model removed");
//   }
//   isModel = false;
// };
// document.body.addEventListener("click", removeModel);

// const addModel = (msg) => {
//   document.getElementById("model").classList.add("model");
//   document.getElementById("model").innerHTML =
//     "<div class='model-errmsg' >" + msg + "</div>";
//   setTimeout(() => {
//     isModel = true;
//   }, 500);
// };

//model ends-------------------------------------------------------
//slider on off
const wrapper = document.getElementById("wrapper");
const sliderOpen = () => {
  if (wrapper.classList.length == 2) {
    wrapper.classList.remove("collapse");
  }
};
const sliderClose = () => {
  wrapper.classList.add("collapse");
};
//-------input rejex for number only----------------------------------------------------
const checkNumber = (e) => {
  const numRej = /^[0-9\b.]+$/;
  console.log(e, numRej, "numRej");
};
//trying pdf
const downloadFile = () => {
  takePdf();
};
const takePdf = () => {
  let element = document.getElementById(tableIdName);

  // Get the inner HTML of the element
  let html = element.innerHTML;

  console.log(html);
  console.log(document.getElementById("pdf"), "pdf");
  // let divContents = document.getElementById("pdf");
  let printWindow = window.open("", "", "height=400,width=800");
  printWindow.document.write("<html>  <head><title>Report</title>");
  printWindow.document.write(
    ` ${cssStringToExportData}
    </head><body >`
  );
  printWindow.document.write(html);
  printWindow.document.write("</body></html>");
  setTimeout(() => {
    printWindow.print();
    printWindow.close();
  }, 1000);
};

const exportTableToExcel = (id, fileName = "Report", sheetName = "Report") => {
  const base64 = (s) => {
    return window.btoa(unescape(encodeURIComponent(s)));
  };
  const format = (s, c) => {
    return s.replace(/{(\w+)}/g, (m, p) => c[p]);
  };
  const table = document.getElementById(id).outerHTML;
  const sheet = String(sheetName);
  const filename = `${String(fileName)}.xls`;
  const uri = "data:application/vnd.ms-excel;base64,";
  const template =
    '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-mic' +
    'rosoft-com:office:excel" xmlns=""><head><meta cha' +
    'rset="UTF-8"><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:Exce' +
    "lWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/>" +
    "</x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></" +
    "xml><![endif]--></head><body>{table}</body></html>";
  const context = { worksheet: sheet, table };

  // If IE11
  // if (window.navigator.msSaveOrOpenBlob) {
  //   const fileData = [
  //     `${'<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><meta charset="UTF-8"><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body>'}${table}</body></html>`,
  //   ];
  //   const blobObject = new Blob(fileData);
  //   document.getElementById("react-html-table-to-excel").click()(() => {
  //     window.navigator.msSaveOrOpenBlob(blobObject, filename);
  //   });
  //   return true;
  // }

  const element = window.document.createElement("a");
  element.href = uri + base64(format(template, context));
  element.download = filename;
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
};

// const graph=()=>{
//   let canvas = document.getElementById("graphCanvas");
//   let context = canvas.getContext("2d");

//   // Define the data for the graph (sample data)
//   let data = [20, 50, 30, 70, 45, 60];

//   // Define the width and height of the graph
//   let graphWidth = canvas.width - 40;
//   let graphHeight = canvas.height - 40;

//   // Calculate the width of each bar
//   let barWidth = graphWidth / data.length;

//   // Calculate the maximum value in the data array
//   let maxValue = Math.max.apply(null, data);

//   // Draw the bars
//   for (let i = 0; i < data.length; i++) {
//       let barHeight = (data[i] / maxValue) * graphHeight;

//       // Set the fill color
//       context.fillStyle = "#007bff";

//       // Draw the bar
//       context.fillRect(
//           20 + i * barWidth, // x-coordinate
//           canvas.height - barHeight - 20, // y-coordinate
//           barWidth - 10, // width
//           barHeight // height
//       );
//   }

//   // Convert canvas to image

// }
const graph = () => {
  // Get the canvas element
  let canvas = document.getElementById("graphCanvas");
  let context = canvas.getContext("2d");

  // Define the data for the graph (sample data)
  let data = [
    { x: 0, y: 20 },
    { x: 1, y: 50 },
    { x: 2, y: 30 },
    { x: 3, y: 70 },
    { x: 4, y: 45 },
    { x: 5, y: 60 },
  ];

  // Define the width and height of the graph
  let graphWidth = canvas.width - 40;
  let graphHeight = canvas.height - 40;

  // Calculate the maximum value in the data array
  let maxValue = Math.max.apply(
    null,
    data.map(function (point) {
      return point.y;
    })
  );

  // Calculate the x and y scaling factors
  let xScale = graphWidth / (data.length - 1);
  let yScale = graphHeight / maxValue;

  // Draw the axes
  context.beginPath();
  context.moveTo(20, 20);
  context.lineTo(20, canvas.height - 20);
  context.lineTo(canvas.width - 20, canvas.height - 20);
  context.strokeStyle = "#000";
  context.lineWidth = 2;
  context.stroke();

  // Draw the data points and lines
  context.beginPath();
  context.moveTo(20, canvas.height - 20 - data[0].y * yScale);
  for (let i = 1; i < data.length; i++) {
    let point = data[i];
    context.lineTo(
      20 + point.x * xScale,
      canvas.height - 20 - point.y * yScale
    );
  }
  context.strokeStyle = "#007bff";
  context.lineWidth = 2;
  context.stroke();

  // Draw the y-axis labels
  let yLabelsCount = 5;
  let yLabelStep = Math.ceil(maxValue / yLabelsCount);
  for (let i = 0; i <= yLabelsCount; i++) {
    let yLabel = (i * yLabelStep).toString();
    let yPosition = canvas.height - 20 - i * yLabelStep * yScale;
    context.fillStyle = "#000";
    context.fillText(yLabel, 5, yPosition);
  }
  // Draw the x-axis labels
  for (let i = 0; i < data.length; i++) {
    let point = data[i];
    let xLabel = "Label " + point.x.toString(); // Custom x-axis label
    context.fillStyle = "#000";
    context.fillText(xLabel, 20 + point.x * xScale, canvas.height - 5);
  }
};

function convertToImage() {
  let canvas = document.getElementById("graphCanvas");
  let image = document.getElementById("graphImage");
  image.src = canvas.toDataURL("image/png");
  image.style.display = "block";
  takePdf();
}

// table creatipong
const createTable = (data) => {
  console.log(data, "in create table");
  document.getElementById("tableContainer").innerHTML = "";
  // Array of objects
  // let data1 = [
  //   { name: "John", age: 25, city: "New York" },
  //   { name: "Jane", age: 30, city: "London" },
  //   { name: "Bob", age: 35, city: "Paris" },
  //   { name: "Alice", age: 28, city: "Berlin" },
  // ];
  // data=data1

  // Create table element
  let table = document.createElement("table");
  table.style.width = "100%";

  // Create table header row
  let thead = document.createElement("thead");
  let headerRow = document.createElement("tr");
  for (let key in data[0]) {
    let headerCell = document.createElement("th");
    headerCell.style.fontSize = "0.8rem";
    headerCell.style.fontWeight = "bold";

    headerCell.textContent = key.toUpperCase();
    console.log(key.toUpperCase());
    if (key.toUpperCase().includes("DATE")) {
      // headerCell.style.width = "11rem";
    }
    if (key.toUpperCase().includes("WATER")) {
      // headerCell.style.width = "5rem";
    }
    headerRow.appendChild(headerCell);
  }
  thead.appendChild(headerRow);
  table.appendChild(thead);

  // Create table body rows
  let tbody = document.createElement("tbody");
  for (let i = 0; i < data.length; i++) {
    let row = document.createElement("tr");
    for (let key in data[i]) {
      let cell = document.createElement("td");
      cell.style.fontSize = "0.8rem";
      cell.style.textAlign = "center";

      // cell.style.display = "flex";
      // cell.style.flexWrap = "nowrap";

      cell.textContent = data[i][key];
      row.appendChild(cell);
    }
    tbody.appendChild(row);
  }
  table.appendChild(tbody);

  // Add the table to the container element
  let tableContainer = document.getElementById("tableContainer");
  tableContainer.appendChild(table);
};

const getDDL = () => {
  jesonTableDataOldLength = 0;
  document.getElementById(tableIdName).style.display = "none";
  document.getElementById("nodataText").style.display = "none";
  hitContinu = false;

  document.getElementsByName("Batch")[0].value = "-1";
  document.getElementsByName("Batch")[0].style.color = "gray";

  console.log(document.getElementsByName("Batch")[0], "batch");
  const ddl = document.getElementsByName("Batch")[0];
  ddl.innerHTML = null;

  let optionSelect = document.createElement("option");
  optionSelect.value = "-1";
  optionSelect.textContent = "Select Batch No.";
  ddl.appendChild(optionSelect);

  ddl.style.color = "gray";

  const { dateTimeMax, dateTimeMin } = data;

  fetch(
    `http://localhost:8080/report/et-dropdown?from=${dateTimeMin}&to=${dateTimeMax}`,
    {
      method: "GET",
      // body: JSON.stringify(fetechBody),
      headers: { "Content-Type": "application/json" },
    }
  )
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      console.log(data.etBatches);
      data.etBatches.map((e) => {
        let option = document.createElement("option");
        option.value = e.value;
        option.textContent = e.displayText;
        ddl.appendChild(option);
      });
    })
    .catch();
};
getDDL();
const jeSonsFetch = () => {
  // jeSonsTable("data.dataTable");
  hitContinu = true;

  console.log("jeSonsFetch calssssss");

  fetch(`http://localhost:8080/report/et-log?batchNo=${data.Batch}`, {
    method: "GET",
    // body: JSON.stringify(fetechBody),
    headers: { "Content-Type": "application/json" },
  })
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      console.log(data);
      // document.getElementById("effectiveDate")?.innerHTML=data.effectiveDate ? data.effectiveDate  : "--"
      // document.getElementById("totalWeight")?.innerHTML=data.totalWeight ? data.totalWeight  : "--"
      // document.getElementById("whiteWaterQuantity")?.innerHTML=data.whiteWaterQuantity ? data.whiteWaterQuantity  : "--"
      // document.getElementById("blendingMaterial")?.innerHTML=data.blendingMaterial ? data.blendingMaterial  : "--"
      // document.getElementById("remarks")?.innerHTML=data.remarks ? data.remarks  : ""
      jeSonsTable(data.data);
      jesonTableDataOldLength = data.data?.length;
    })
    .catch(() => {
      document.getElementById("nodataText").style.display = "block";
    });
};

setInterval(() => {
  hitContinu && jeSonsFetch();
}, 4000);

const jeSonsTable = (data) => {
  document.getElementById("nodataText").style.display = "none";
  document.getElementById(tableIdName).style.display = "block";

  // data = {
  //   REACTOR: [
  //     {
  //       rmCode: "HDM",
  //       sp: "12156",
  //       pv: "0.0",
  //       deviation: "2",
  //       rmBoxNo: "",
  //       opratorName: "Shoaib",
  //     },
  //     {
  //       rmCode: "DMW",
  //       sp: "12156",
  //       pv: "0.0",
  //       deviation: "2",
  //       rmBoxNo: "",
  //       opratorName: "Shoaib",
  //     },
  //   ],
  //   INITIATION: [
  //     {
  //       rmCode: "HDM",
  //       sp: "12156",
  //       pv: "0.0",
  //       deviation: "2",
  //       rmBoxNo: "",
  //       opratorName: "Shoaib",
  //     },
  //     {
  //       rmCode: "DMW",
  //       sp: "12156",
  //       pv: "0.0",
  //       deviation: "2",
  //       rmBoxNo: "",
  //       opratorName: "Shoaib",
  //     },
  //   ],
  //   "EMULSION RAW MATERIAL": [],
  //   "ONE TIME PPS": [],
  //   "PPS 1": [],
  //   "PPS 2": [],
  //   "PPS 3": [],
  //   "PPS 4": [],
  //   "CONTINUOS PPS": [],
  //   QC: [],
  //   "POST ADDITION": [],
  // };
  // data = [
  //   {
  //     "DATE TIME": "2023-11-30 00:00:00",
  //     ACTIVITY: 5,
  //     "ET WEIGHT (KG)": 5,
  //     "DT WEIGHT (KG)": 5,
  //     "AGT RPM (ET)": 5,
  //     "OPERATOR NAME": 5,
  //   },
  //   {
  //     "DATE TIME": "2023-11-30 00:00:00",
  //     ACTIVITY: 5,
  //     "ET WEIGHT (KG)": 5,
  //     "DT WEIGHT (KG)": 5,
  //     "AGT RPM (ET)": 5,
  //     "OPERATOR NAME": 5,
  //   },
  // ];

  let dataRT = [
    {
      "DATE TIME": "2023-11-30 00:00:00",
      ACTIVITY: 5,
      "RT TEMP (◦C)": "15 ◦C",
      "RPM RT": 1500,
      "RPM ET": 1200,
      "ET SET (Kg/hr)": 5,
      "ET ACTUAL (Kg/hr)": 5,
      "CT SET (Kg/hr)": 5,
      "CT ACTUAL (Kg/hr)": 5,
      "ET WT (Kg)": 5,
      "RT WT (Kg)": 5,
      "OPERATOR NAME": 5,
    },
    {
      "DATE TIME": "2023-11-30 00:00:00",
      ACTIVITY: 5,
      "RT TEMP (◦C)": "15 ◦C",
      "RPM RT": 1500,
      "RPM ET": 1200,
      "ET SET (Kg/hr)": 5,
      "ET ACTUAL (Kg/hr)": 5,
      "CT SET (Kg/hr)": 5,
      "CT ACTUAL (Kg/hr)": 5,
      "ET WT (Kg)": 5,
      "RT WT (Kg)": 5,
      "OPERATOR NAME": 5,
    },
    {
      "DATE TIME": "2023-11-30 00:00:00",
      ACTIVITY: 5,
      "RT TEMP (◦C)": "15 ◦C",
      "RPM RT": 1500,
      "RPM ET": 1200,
      "ET SET (Kg/hr)": 5,
      "ET ACTUAL (Kg/hr)": 5,
      "CT SET (Kg/hr)": 5,
      "CT ACTUAL (Kg/hr)": 5,
      "ET WT (Kg)": 5,
      "RT WT (Kg)": 5,
      "OPERATOR NAME": 5,
    },
  ];

  if (jesonTableDataOldLength != data.length) {
    let tbody = document.getElementById("JesonsBody");
    let tbodyRT = document.getElementById("JesonsBodyRT");

    tbody.innerHTML = "";

    if (tbodyRT) {
      tbodyRT.innerHTML = "";
      let headerRowRT = document.createElement("tr");
      let headerRowRTmAIN = document.createElement("tr");

      const headerNamesRT = Object.keys(dataRT.length ? dataRT[0] : {});
      const headerNamesRTMain = [
        "DATE TIME",
        "ACTIVITY",
        "RT TEMP (◦C)",
        "RT",
        "ET",
        "SET (Kg/hr)",
        "ACTUAL (Kg/hr)",
        "SET (Kg/hr)",
        "ACTUAL (Kg/hr)",
        "ET WT (Kg)",
        "RT WT (Kg)",
        "OPERATOR NAME",
      ];
      const headerNamesRTMainUp = [
        "",
        "",
        "",
        "RPM",
        "ET FEED RATE",
        "CT FEED RATE",
        "--",
        "--",
        "--",
        "--",
      ];

      for (let ii = 0; ii < headerNamesRTMainUp.length; ii++) {
        const element = headerNamesRTMainUp[ii];
        let headerCell = document.createElement("td");
        headerCell.style.textAlign = "center";
        headerCell.style.backgroundColor = "#f8f9fa";

        // headerCell.colSpan = 6;
        headerCell.className = "s11";
        headerCell.style.padding = "0.75rem 0";
        headerCell.textContent = element?.toUpperCase();
        headerRowRTmAIN.appendChild(headerCell);
      }
      tbodyRT.appendChild(headerRowRTmAIN);

      for (let ii = 0; ii < headerNamesRTMain.length; ii++) {
        const element = headerNamesRTMain[ii];
        let headerCell = document.createElement("td");
        headerCell.style.textAlign = "center";
        headerCell.style.backgroundColor = "#f8f9fa";

        // if (element == "DATE TIME") {
        //   headerCell.rowSpan = "2";
        // }

        // headerCell.colSpan = 6;
        headerCell.className = "s11";
        headerCell.style.padding = "0.75rem 0";
        headerCell.textContent = element?.toUpperCase();
        headerRowRT.appendChild(headerCell);
      }
      tbodyRT.appendChild(headerRowRT);

      dataRT.map((e) => {
        let row = document.createElement("tr");
        row.style.borderTop = "1px solid #dee2e6";
        row.style.borderBottom = "1px solid #dee2e6";

        headerNamesRT.map((el) => {
          let cell = document.createElement("td");
          cell.className = "s11";
          cell.style.textAlign = "center";
          cell.style.padding = "0.75rem 0";
          cell.style.color = "#6c757d";
          // cell.style.border = "1px solid rgb(242 242 242)";

          cell.textContent = e[el] ? e[el] : "---";
          row.appendChild(cell);
        });
        tbodyRT.appendChild(row);
      });
    }

    const headerNames = [
      "DATE TIME",
      "ACTIVITY",
      "ET WEIGHT (KG)",
      "DT WEIGHT (KG)",
      "AGT RPM (ET)",
      "OPERATOR NAME",
    ];

    let headerRow = document.createElement("tr");

    for (let ii = 0; ii < headerNames.length; ii++) {
      const element = headerNames[ii];
      let headerCell = document.createElement("td");
      headerCell.style.textAlign = "center";
      headerCell.style.backgroundColor = "#f8f9fa";

      // headerCell.colSpan = 6;
      headerCell.className = "s11";
      headerCell.style.padding = "0.75rem 0";
      headerCell.textContent = element?.toUpperCase();
      headerRow.appendChild(headerCell);
    }

    tbody.appendChild(headerRow);

    data.map((e) => {
      let row = document.createElement("tr");
      row.style.borderTop = "1px solid #dee2e6";
      row.style.borderBottom = "1px solid #dee2e6";

      headerNames.map((el) => {
        let cell = document.createElement("td");
        cell.className = "s11";
        cell.style.textAlign = "center";
        cell.style.padding = "0.75rem 0";
        cell.style.color = "#6c757d";
        // cell.style.border = "1px solid rgb(242 242 242)";

        cell.textContent = e[el] ? e[el] : "---";
        row.appendChild(cell);
      });
      tbody.appendChild(row);
    });
  }
};

// createBatchDetails
function exportTableToDoc(tableId, fileName) {
  const table = document.getElementById(tableId);
  const tableHtml = table.outerHTML;

  const docContent = `
    <html xmlns:w="urn:schemas-microsoft-com:office:word">
      <head>
        <meta charset="utf-8">
        <title>${fileName}</title>
        <style>
        ${cssStringToExportData}</style>
      </head>
      <body>
        ${tableHtml}
      </body>
    </html>
  `;

  const dataUri = `data:text/html;charset=utf-8,${encodeURIComponent(
    docContent
  )}`;

  const downloadLink = document.createElement("a");
  downloadLink.href = dataUri;
  downloadLink.download = `${fileName}.doc`;
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
}

// Usage example
const tableId = "myTable"; // Replace with the ID of your HTML table
const fileName = "exported_document";
// exportTableToDoc(tableId, fileName);

function convertJSONToCSV(csvData) {
  if (typeof csvData !== "string") {
    throw new Error("Invalid CSV data.");
  }

  const lines = csvData.trim().split("\n");
  if (lines.length < 2) {
    throw new Error("Invalid CSV data format.");
  }

  const headers = lines[0].split(",");

  const jsonData = [];
  for (let i = 1; i < lines.length; i++) {
    const values = lines[i].split(",");
    const obj = {};
    for (let j = 0; j < headers.length; j++) {
      const header = headers[j];
      let value = values[j].trim();

      // Convert the value to a number if it's numeric
      if (!isNaN(value)) {
        value = parseFloat(value);
      }

      obj[header] = value;
    }
    jsonData.push(obj);
  }

  return jsonData;
}

function downloadFiles(content, filename, contentType) {
  const blob = new Blob([content], { type: contentType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

function convertAndDownload() {
  const jsonData = [
    { name: "John", age: 30, score: 85.5 },
    { name: "Jane", age: 25, score: 92.1 },
    { name: "Bob", age: 28, score: 78.9 },
  ];

  const csvData = convertJSONToCSV(jsonData);
  const filename = "data.csv";
  const contentType = "text/csv";

  downloadFiles(csvData, filename, contentType);
}
