import React, { useState, useEffect } from "react";
import Header from "./header";
import Footer from "./footer";
import CompButton from "./compButton";
import CompTitle from "./compTitle";
import axios from "axios";

const ImportSheet = (props) => {
  const scaleFactor = props.scaleFactor;

  const [file, setFile] = useState();
  const [isLoaded, setIsLoaded] = useState(false);
  const [array, setArray] = useState([]);
  const [csvData, setCsvData] = useState([]);
  const [headers, setHeaders] = useState([]);

  // const fileReader = new FileReader();

  useEffect(() => {
    console.log("asdf");
  }, []);

  const handleOnChange = (e) => {
    setFile(e.target.value);
  };

  function parseCSV(csvText) {
    const rows = csvText.split(/\r?\n/); // Split CSV text into rows, handling '\r' characters
    setHeaders(rows[0].split(",")); // Extract headers (assumes the first row is the header row)
    const data = []; // Initialize an array to store parsed data
    for (let i = 1; i < rows.length; i++) {
      const rowData = rows[i].split(","); // Split the row, handling '\r' characters
      const rowObject = {};
      for (let j = 0; j < headers.length; j++) {
        rowObject[headers[j]] = rowData[j];
      }
      data.push(rowObject);
    }
    return data;
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (!isLoaded) {
      if (file) {
        axios.get(file).then((response) => {
          const parsedData = parseCSV(response.data);
          setCsvData(parsedData);

          setIsLoaded(true);
        });
      }
    } else {
    }
  };

  const handleOnPlus = (e) => {
    e.preventDefault();

    console.log(csvData);
    console.log(headers);
  };

  return (
    <div className="bg-[url('/public/svg/import_page.svg')] w-full h-full bg-cover bg-no-repeat">
      <Header scaleFactor={scaleFactor} />
      <div
        className="text-white mx-auto"
        style={{
          paddingTop: `${10 * scaleFactor}px`,
          width: `${1140 * scaleFactor}px`,
        }}
      >
        <CompTitle title="Import Sheet" scaleFactor={scaleFactor} />
        <div style={{ width: `${940 * scaleFactor}px` }} className="mx-auto">
          <span
            className="font-poppins text-[#FFFFFF80] flex font-normal"
            style={{
              paddingTop: `${50 * scaleFactor}px`,
              fontSize: `${15 * scaleFactor}px`,
            }}
          >
            Google Sheet URL
          </span>
          <div className="flex flex-col items-center">
            <div
              className="relative rounded-md shadow-sm w-full text-center"
              style={{ marginTop: `${15 * scaleFactor}px` }}
            >
              <input
                type="text"
                onChange={handleOnChange}
                style={{
                  border: `${1 * scaleFactor}px`,
                  height: `${80 * scaleFactor}px`,
                  fontSize: `${35 * scaleFactor}px`,
                  paddingLeft: `${48 * scaleFactor}px`,
                  paddingRight: `${80 * scaleFactor}px`,
                  paddingTop: `${6 * scaleFactor}px`,
                  paddingBottom: `${6 * scaleFactor}px`,
                }}
                className="block rounded-full w-full border-solid border-white text-white placeholder:text-gray-400 sm:leading-6 bg-[#ffffff1c]"
              />
              <div className="absolute inset-y-0 right-7 flex items-center cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 25 21"
                  fill="none"
                  style={{
                    width: `${25 * scaleFactor}px`,
                    height: `${21 * scaleFactor}px`,
                  }}
                >
                  <path
                    d="M14.6652 9.25001C16.4601 12.3589 15.4918 16.2783 12.5025 18.0042L10.3375 19.2542C7.34814 20.9801 3.46971 19.8589 1.6748 16.75C-0.120118 13.6411 0.848139 9.72174 3.83746 7.99585L4.37873 7.68335M10.3351 11.75C8.54014 8.64112 9.50841 4.72172 12.4977 2.99585L14.6628 1.74585C17.6521 0.0199746 21.5305 1.14112 23.3254 4.25001C25.1203 7.35889 24.1521 11.2783 21.1628 13.0042L20.6215 13.3167"
                    stroke="#49CCFA"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {isLoaded && (
          <div
            style={{ marginTop: `${38 * scaleFactor}px` }}
            className="justify-center"
          >
            <div
              className="flex font-poppins justify-center"
              style={{
                fontSize: `${18 * scaleFactor}px`,
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 26 26"
                fill="none"
                style={{
                  marginRight: `${10 * scaleFactor}px`,
                  width: `${26 * scaleFactor}px`,
                  height: `${26 * scaleFactor}px`,
                }}
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M26 13C26 20.1796 20.1796 26 13 26C5.82029 26 0 20.1796 0 13C0 5.82029 5.82029 0 13 0C20.1796 0 26 5.82029 26 13ZM18.2394 9.06057C18.6202 9.44133 18.6202 10.0587 18.2394 10.4394L11.7394 16.9394C11.3586 17.3202 10.7414 17.3202 10.3606 16.9394L7.76057 14.3394C7.37981 13.9586 7.37981 13.3414 7.76057 12.9606C8.14133 12.5798 8.75867 12.5798 9.13943 12.9606L11.05 14.8711L13.9552 11.9658L16.8606 9.06057C17.2414 8.67981 17.8586 8.67981 18.2394 9.06057Z"
                  fill="#34A853"
                />
              </svg>
              Import Successful!
            </div>
            <div
              style={{
                marginTop: `${113.5 * scaleFactor}px`,
                width: `${1140 * scaleFactor}px`,
              }}
            >
              <table
                className="text-left text-white w-full "
                style={{
                  fontSize: `${18 * scaleFactor}px`,
                }}
              >
                <thead
                  className="uppercase font-space-grotesk"
                  style={{
                    fontSize: `${15 * scaleFactor}px`,
                    background: "#FFFFFF0D",
                    height: `${70 * scaleFactor}px`,
                  }}
                >
                  <tr className="my-auto">
                    <th
                      scope="col"
                      style={{ paddingLeft: `${60 * scaleFactor}px` }}
                    >
                      column name
                    </th>
                    <th
                      scope="col"
                      style={{ paddingLeft: `${241 * scaleFactor}px` }}
                    >
                      fields
                    </th>
                    <th
                      scope="col"
                      style={{ paddingLeft: `${327 * scaleFactor}px` }}
                    >
                      samples
                    </th>
                  </tr>
                </thead>
                <tbody className="font-poppins">
                  <tr>
                    <td
                      style={{
                        paddingLeft: `${60 * scaleFactor}px`,
                        paddingTop: `${60 * scaleFactor}px`,
                      }}
                    >
                      Email Address
                    </td>
                    <td
                      style={{
                        paddingLeft: `${241 * scaleFactor}px`,
                        paddingTop: `${60 * scaleFactor}px`,
                      }}
                    >
                      EmailAddress
                    </td>
                    <td
                      style={{
                        paddingLeft: `${327 * scaleFactor}px`,
                        paddingTop: `${60 * scaleFactor}px`,
                      }}
                    >
                      johndoe@gmail.com
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        paddingLeft: `${60 * scaleFactor}px`,
                        paddingTop: `${60 * scaleFactor}px`,
                      }}
                    >
                      First Name
                    </td>
                    <td
                      style={{
                        paddingLeft: `${241 * scaleFactor}px`,
                        paddingTop: `${60 * scaleFactor}px`,
                      }}
                    >
                      First Name
                    </td>
                    <td
                      style={{
                        paddingLeft: `${327 * scaleFactor}px`,
                        paddingTop: `${60 * scaleFactor}px`,
                      }}
                    >
                      Mark
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        paddingLeft: `${60 * scaleFactor}px`,
                        paddingTop: `${60 * scaleFactor}px`,
                      }}
                    >
                      Last Name
                    </td>
                    <td
                      style={{
                        paddingLeft: `${241 * scaleFactor}px`,
                        paddingTop: `${60 * scaleFactor}px`,
                      }}
                    >
                      Last Name
                    </td>
                    <td
                      style={{
                        paddingLeft: `${327 * scaleFactor}px`,
                        paddingTop: `${60 * scaleFactor}px`,
                      }}
                    >
                      Dela Cruz
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        paddingLeft: `${60 * scaleFactor}px`,
                        paddingTop: `${60 * scaleFactor}px`,
                      }}
                    >
                      <button
                        onClick={handleOnPlus}
                        style={{
                          position: "absolute",
                          marginLeft: `${-48 * scaleFactor}px`,
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={26 * scaleFactor}
                          height={26 * scaleFactor}
                          viewBox="0 0 26 26"
                          fill="none"
                        >
                          <g filter="url(#filter0_b_405_408)">
                            <rect
                              width="26"
                              height="26"
                              rx="13"
                              fill="white"
                              fillOpacity="0.1"
                            />
                            <path
                              d="M8.6665 13.0001H17.3332M12.9998 8.66675V17.3334"
                              stroke="white"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </g>
                          <defs>
                            <filter
                              id="filter0_b_405_408"
                              x="-100"
                              y="-100"
                              width="226"
                              height="226"
                              filterUnits="userSpaceOnUse"
                              colorInterpolationFilters="sRGB"
                            >
                              <feFlood
                                floodOpacity="0"
                                result="BackgroundImageFix"
                              />
                              <feGaussianBlur
                                in="BackgroundImageFix"
                                stdDeviation="50"
                              />
                              <feComposite
                                in2="SourceAlpha"
                                operator="in"
                                result="effect1_backgroundBlur_405_408"
                              />
                              <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="effect1_backgroundBlur_405_408"
                                result="shape"
                              />
                            </filter>
                          </defs>
                        </svg>
                      </button>
                      <button
                        type="button"
                        className="inline-flex justify-center"
                        id="menu-button"
                        aria-expanded="true"
                        aria-haspopup="true"
                      >
                        Column Name
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="7"
                          height="5"
                          viewBox="0 0 7 5"
                          fill="none"
                          style={{
                            marginLeft: `${350 * scaleFactor}px`,
                            marginTop: `${11 * scaleFactor}px`,
                            position: "absolute",
                          }}
                        >
                          <path
                            d="M3.14699 4.35354C3.34224 4.54882 3.65932 4.54882 3.85457 4.35354L6.85356 1.35413C7.04881 1.15886 7.04881 0.84173 6.85356 0.646456C6.65832 0.451181 6.34124 0.451181 6.14599 0.646456L3.5 3.29281L0.854011 0.648018C0.658764 0.452743 0.341682 0.452743 0.146435 0.648018C-0.0488118 0.843292 -0.0488118 1.16042 0.146435 1.35569L3.14543 4.35511L3.14699 4.35354Z"
                            fill="white"
                          />
                        </svg>
                        <span
                          style={{
                            position: "absolute",
                            width: `${250 * scaleFactor}px`,
                            height: `${1 * scaleFactor}px`,
                            marginLeft: `${110 * scaleFactor}px`,
                            marginTop: `${30 * scaleFactor}px`,
                          }}
                          className="bg-[#FFFFFF0D]"
                        ></span>
                      </button>
                    </td>
                    <td
                      style={{
                        paddingLeft: `${241 * scaleFactor}px`,
                        paddingTop: `${60 * scaleFactor}px`,
                      }}
                    >
                      <button
                        type="button"
                        className="inline-flex justify-center"
                        id="menu-button"
                        aria-expanded="true"
                        aria-haspopup="true"
                      >
                        Select Fields
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="7"
                          height="5"
                          viewBox="0 0 7 5"
                          fill="none"
                          style={{
                            marginLeft: `${350 * scaleFactor}px`,
                            marginTop: `${11 * scaleFactor}px`,
                            position: "absolute",
                          }}
                        >
                          <path
                            d="M3.14699 4.35354C3.34224 4.54882 3.65932 4.54882 3.85457 4.35354L6.85356 1.35413C7.04881 1.15886 7.04881 0.84173 6.85356 0.646456C6.65832 0.451181 6.34124 0.451181 6.14599 0.646456L3.5 3.29281L0.854011 0.648018C0.658764 0.452743 0.341682 0.452743 0.146435 0.648018C-0.0488118 0.843292 -0.0488118 1.16042 0.146435 1.35569L3.14543 4.35511L3.14699 4.35354Z"
                            fill="white"
                          />
                        </svg>
                        <span
                          style={{
                            position: "absolute",
                            width: `${250 * scaleFactor}px`,
                            height: `${1 * scaleFactor}px`,
                            marginLeft: `${110 * scaleFactor}px`,
                            marginTop: `${30 * scaleFactor}px`,
                          }}
                          className="bg-[#FFFFFF0D]"
                        ></span>
                      </button>
                    </td>
                    <td
                      style={{
                        paddingLeft: `${327 * scaleFactor}px`,
                        paddingTop: `${60 * scaleFactor}px`,
                      }}
                    >
                      Sample
                      <span
                        style={{
                          position: "absolute",
                          width: `${250 * scaleFactor}px`,
                          height: `${1 * scaleFactor}px`,
                          marginLeft: `${-80 * scaleFactor}px`,
                          marginTop: `${30 * scaleFactor}px`,
                        }}
                        className="bg-[#FFFFFF0D]"
                      ></span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        <div className="flex justify-center">
          <CompButton
            style={{ marginTop: `${100 * scaleFactor}px` }}
            title="continue"
            width="237"
            height="85"
            size="15"
            scaleFactor={scaleFactor}
            onClick={(e) => {
              handleOnSubmit(e);
            }}
          />
        </div>
      </div>
      <Footer scaleFactor={scaleFactor} />
    </div>
  );
};

export default ImportSheet;
