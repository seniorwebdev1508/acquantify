import React from "react";
import Header from "./header";
import "@fontsource/poppins";
import "@fontsource/space-grotesk";
import CompTitle from "./compTitle";

const PersonalizationPreferences = (props) => {
  const scaleFactor = props.scaleFactor;
  return (
    <div className="bg-[url('/public/svg/personalization_preferences.svg')] w-full h-screen bg-cover bg-no-repeat">
      <Header scaleFactor={scaleFactor} />
      <div
        className="text-white"
        style={{
          paddingTop: `${10 * scaleFactor}px`,
          paddingLeft: `${150 * scaleFactor}px`,
          paddingRight: `${150 * scaleFactor}px`,
        }}
      >
        <CompTitle
          scaleFactor={scaleFactor}
          title="Personalization Preferences"
        ></CompTitle>

        <div style={{ marginTop: `${100 * scaleFactor}px` }}>
          <div
            className="flex justify-center"
            style={{ gap: `${100 * scaleFactor}px` }}
          >
            <div style={{ width: `${200 * scaleFactor}px` }}>
              <div style={{ height: `${200 * scaleFactor}px` }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={200*scaleFactor}
                  height={200*scaleFactor}
                  viewBox="0 0 200 200"
                  fill="none"
                >
                  <g filter="url(#filter0_b_405_485)">
                    <rect
                      width="200"
                      height="200"
                      rx="25"
                      fill="white"
                      fillOpacity="0.1"
                    />
                    <rect
                      x="0.5"
                      y="0.5"
                      width="199"
                      height="199"
                      rx="24.5"
                      stroke="#FD71AE"
                    />
                    <path
                      d="M110.483 84.4943H117.23M110.483 97.9886H117.23M100.362 111.483H83.4943M130.724 97.9886V77.7472C130.724 74.0208 127.704 71 123.977 71H76.7472C73.0208 71 70 74.0208 70 77.7472V118.23C70 121.957 73.0208 124.977 76.7472 124.977H100.362M83.4943 84.4943V97.9886H96.9886V84.4943H83.4943Z"
                      stroke="#FD71AE"
                      strokeWidth="5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M124.881 122.507C126.407 120.981 127.351 118.872 127.351 116.543C127.351 111.885 123.575 108.109 118.917 108.109C114.259 108.109 110.483 111.885 110.483 116.543C110.483 121.201 114.259 124.977 118.917 124.977C121.246 124.977 123.355 124.033 124.881 122.507ZM124.881 122.507L130.725 128.351"
                      stroke="#FD71AE"
                      strokeWidth="5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_b_405_485"
                      x="-100"
                      y="-100"
                      width="400"
                      height="400"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feGaussianBlur
                        in="BackgroundImageFix"
                        stdDeviation="50"
                      />
                      <feComposite
                        in2="SourceAlpha"
                        operator="in"
                        result="effect1_backgroundBlur_405_485"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_backgroundBlur_405_485"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
              <div
                className="text-center font-poppins"
                style={{
                  marginTop: `${40 * scaleFactor}px`,
                  fontSize: `${22 * scaleFactor}px`,
                }}
              >
                Article
              </div>
            </div>
            <div style={{width:`${200*scaleFactor}px`}}>
              <div style={{height:`${200*scaleFactor}px`}}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={201*scaleFactor}
                  height={200*scaleFactor}
                  viewBox="0 0 201 200"
                  fill="none"
                >
                  <g filter="url(#filter0_b_405_597)">
                    <rect
                      x="0.333496"
                      width="200"
                      height="200"
                      rx="25"
                      fill="white"
                      fillOpacity="0.1"
                    />
                    <path
                      d="M81.8333 116.554C76.4119 111.775 73 104.83 73 97.1C73 82.6854 84.8645 71 99.5 71C114.136 71 126 82.6854 126 97.1C126 104.83 122.588 111.775 117.167 116.554M87.1403 104.981C85.6458 102.712 84.7778 100.006 84.7778 97.1C84.7778 89.0919 91.3692 82.6 99.5 82.6C107.631 82.6 114.222 89.0919 114.222 97.1C114.222 100.002 113.357 102.705 111.865 104.973M99.5 129C96.2476 129 93.6111 126.403 93.6111 123.2V117.4C93.6111 114.197 96.2476 111.6 99.5 111.6C102.752 111.6 105.389 114.197 105.389 117.4V123.2C105.389 126.403 102.752 129 99.5 129ZM102.444 97.1C102.444 98.7017 101.126 100 99.5 100C97.8738 100 96.5556 98.7017 96.5556 97.1C96.5556 95.4983 97.8738 94.2 99.5 94.2C101.126 94.2 102.444 95.4983 102.444 97.1Z"
                      stroke="#92E3FF"
                      strokeWidth="5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_b_405_597"
                      x="-99.6665"
                      y="-100"
                      width="400"
                      height="400"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feGaussianBlur
                        in="BackgroundImageFix"
                        stdDeviation="50"
                      />
                      <feComposite
                        in2="SourceAlpha"
                        operator="in"
                        result="effect1_backgroundBlur_405_597"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_backgroundBlur_405_597"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
              <div className="text-center font-poppins" style={{marginTop:`${40*scaleFactor}px`, fontSize:`${22*scaleFactor}px`}}>
                Podcast Episode
              </div>
            </div>
            <div style={{width:`${200*scaleFactor}px`}}>
              <div style={{height:`${200*scaleFactor}px`}}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={201*scaleFactor}
                  height={200*scaleFactor}
                  viewBox="0 0 201 200"
                  fill="none"
                >
                  <g filter="url(#filter0_b_405_603)">
                    <rect
                      x="0.666504"
                      width="200"
                      height="200"
                      rx="25"
                      fill="white"
                      fillOpacity="0.1"
                    />
                    <path
                      d="M127.728 89.8625H104.547C103.411 89.8625 102.493 90.7804 102.493 91.9169C102.493 93.0533 103.411 93.9712 104.547 93.9712H127.742C128.879 93.9712 129.796 93.0533 129.796 91.9169C129.796 90.795 128.864 89.8625 127.728 89.8625Z"
                      fill="#FFE070"
                    />
                    <path
                      d="M127.728 100.149H104.547C103.411 100.149 102.493 101.067 102.493 102.203C102.493 103.339 103.411 104.257 104.547 104.257H127.742C128.879 104.257 129.796 103.339 129.796 102.203C129.796 101.067 128.864 100.149 127.728 100.149Z"
                      fill="#FFE070"
                    />
                    <path
                      d="M127.728 110.435H104.547C103.411 110.435 102.493 111.353 102.493 112.489C102.493 113.626 103.411 114.544 104.547 114.544H127.742C128.879 114.544 129.796 113.626 129.796 112.489C129.796 111.353 128.864 110.435 127.728 110.435Z"
                      fill="#FFE070"
                    />
                    <path
                      d="M85.4895 85.8268C81.5265 85.8268 78.292 89.0613 78.292 93.0243C78.292 97.0018 81.5265 100.222 85.4895 100.222C89.4524 100.222 92.6869 96.9872 92.6869 93.0243C92.6869 89.0613 89.4524 85.8268 85.4895 85.8268ZM85.4895 96.1276C83.7848 96.1276 82.4007 94.7435 82.4007 93.0388C82.4152 91.3342 83.7994 89.95 85.4895 89.95C87.1941 89.95 88.5783 91.3342 88.5783 93.0388C88.5783 94.7435 87.1941 96.1276 85.4895 96.1276Z"
                      fill="#FFE070"
                    />
                    <path
                      d="M98.7343 116.205C98.5886 109.022 92.7024 103.252 85.4904 103.252C78.1763 103.252 72.2173 109.211 72.2173 116.525C72.2173 117.662 73.1352 118.579 74.2716 118.579H96.6945C96.7091 118.579 96.7091 118.579 96.7091 118.579C98.8654 118.579 98.7634 116.307 98.7343 116.205ZM76.5737 114.456C77.5061 110.391 81.1631 107.361 85.5049 107.361C89.8467 107.361 93.4892 110.406 94.4362 114.456H76.5737Z"
                      fill="#FFE070"
                    />
                    <path
                      d="M131.851 76.1087H111.294V74.0543C111.294 72.9179 110.376 72 109.239 72H92.7899C91.6535 72 90.7356 72.9179 90.7356 74.0543V76.1087H70.163C66.7683 76.1087 64 78.8769 64 82.2717V122.135C64 125.529 66.7683 128.298 70.163 128.298H131.837C135.232 128.298 138 125.529 138 122.135V82.2717C138.015 78.8769 135.246 76.1087 131.851 76.1087ZM94.8442 76.1087H107.185V80.2174H94.8442V76.1087ZM131.851 124.189H70.163C69.0266 124.189 68.1087 123.271 68.1087 122.135V82.2717C68.1087 81.1353 69.0266 80.2174 70.163 80.2174H90.721V82.2717C90.721 83.4081 91.6389 84.326 92.7753 84.326H109.225C110.361 84.326 111.279 83.4081 111.279 82.2717V80.2174H131.837C132.973 80.2174 133.891 81.1353 133.891 82.2717V122.135H133.906C133.906 123.271 132.988 124.189 131.851 124.189Z"
                      fill="#FFE070"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_b_405_603"
                      x="-99.3335"
                      y="-100"
                      width="400"
                      height="400"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feGaussianBlur
                        in="BackgroundImageFix"
                        stdDeviation="50"
                      />
                      <feComposite
                        in2="SourceAlpha"
                        operator="in"
                        result="effect1_backgroundBlur_405_603"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_backgroundBlur_405_603"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
              <div className="text-center font-poppins" style={{marginTop:`${40*scaleFactor}px`, fontSize:`${22*scaleFactor}px`}}>
                Personal Site
              </div>
            </div>
            <div style={{width:`${200*scaleFactor}px`}}>
              <div style={{height:`${200*scaleFactor}px`}}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={200*scaleFactor}
                  height={200*scaleFactor}
                  viewBox="0 0 200 200"
                  fill="none"
                >
                  <g filter="url(#filter0_b_405_609)">
                    <rect
                      width="200"
                      height="200"
                      rx="25"
                      fill="white"
                      fillOpacity="0.1"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M126.667 132H73.3333C71.9188 132 70.5624 131.438 69.5622 130.438C68.562 129.438 68 128.081 68 126.667V84C68 82.5855 68.562 81.229 69.5622 80.2288C70.5624 79.2286 71.9188 78.6667 73.3333 78.6667H86.6667V73.3333C86.6667 71.9188 87.2286 70.5623 88.2288 69.5621C89.229 68.5619 90.5855 68 92 68H108C109.414 68 110.771 68.5619 111.771 69.5621C112.771 70.5623 113.333 71.9188 113.333 73.3333V78.6667H126.667C128.081 78.6667 129.438 79.2286 130.438 80.2288C131.438 81.229 132 82.5855 132 84V126.667C132 128.081 131.438 129.438 130.438 130.438C129.438 131.438 128.081 132 126.667 132ZM108 73.3333H92V78.6667H108V73.3333ZM126.667 108H113.333C113.333 109.414 112.771 110.771 111.771 111.771C110.771 112.771 109.414 113.333 108 113.333H92C90.5855 113.333 89.229 112.771 88.2288 111.771C87.2286 110.771 86.6667 109.414 86.6667 108H73.3333V102.667H86.6667C86.6667 101.252 87.2286 99.8956 88.2288 98.8954C89.229 97.8952 90.5855 97.3333 92 97.3333H108C109.414 97.3333 110.771 97.8952 111.771 98.8954C112.771 99.8956 113.333 101.252 113.333 102.667H126.667V84H73.3333V126.667H126.667V108ZM108 105.333C108 104.626 107.719 103.948 107.219 103.448C106.719 102.948 106.041 102.667 105.333 102.667H94.6667C93.9594 102.667 93.281 102.948 92.7809 103.448C92.2808 103.948 92 104.626 92 105.333C92 106.041 92.2808 106.719 92.7809 107.219C93.281 107.719 93.9594 108 94.6667 108H105.333C106.041 108 106.719 107.719 107.219 107.219C107.719 106.719 108 106.041 108 105.333Z"
                      fill="#64FF8D"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_b_405_609"
                      x="-100"
                      y="-100"
                      width="400"
                      height="400"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feGaussianBlur
                        in="BackgroundImageFix"
                        stdDeviation="50"
                      />
                      <feComposite
                        in2="SourceAlpha"
                        operator="in"
                        result="effect1_backgroundBlur_405_609"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_backgroundBlur_405_609"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
              <div className="text-center font-poppins" style={{marginTop:`${40*scaleFactor}px`, fontSize:`${22*scaleFactor}px`}}>
                Corporate Site
              </div>
            </div>
          </div>
          <div className="text-center font-poppins" style={{marginTop:`${100*scaleFactor}px`, fontSize:`${18*scaleFactor}px`}}>
            Not seeing what you want?
            <span className="text-[#3BA8CE]" style={{marginLeft:`${4*scaleFactor}px`}}>Try Acquantify Custom.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalizationPreferences;
