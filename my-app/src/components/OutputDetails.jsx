// import React from "react";

// const OutputDetails = ({ outputDetails }) => {
//   return (
//     <div className="metrics-container mt-4 flex flex-col space-y-3">
//       <p className="text-sm">
//         Status:{" "}
//         <span className="font-semibold px-2 py-1 rounded-md bg-gray-100">
//           {outputDetails?.status?.description}
//         </span>
//       </p>
//       <p className="text-sm">
//         Memory:{" "}
//         <span className="font-semibold px-2 py-1 rounded-md bg-gray-100">
//           {outputDetails?.memory}
//         </span>
//       </p>
//       <p className="text-sm">
//         Time:{" "}
//         <span className="font-semibold px-2 py-1 rounded-md bg-gray-100">
//           {outputDetails?.time}
//         </span>
//       </p>
//     </div>
//   );
// };

// export default OutputDetails;
import React from "react";

const OutputDetails = ({ outputDetails }) => {
  return (
    <div className="metrics-container mt-4 flex flex-col sm:flex-row sm:space-x-6">
      <div className="flex flex-col sm:flex-row sm:items-center">
        <p className="text-sm sm:mr-2">Status:</p>
        <span className="font-semibold px-2 py-1 rounded-md bg-gray-100">
          {outputDetails?.status?.description}
        </span>
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center mt-2 sm:mt-0">
        <p className="text-sm sm:mr-2">Memory:</p>
        <span className="font-semibold px-2 py-1 rounded-md bg-gray-100">
          {outputDetails?.memory}
        </span>
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center mt-2 sm:mt-0">
        <p className="text-sm sm:mr-2">Time:</p>
        <span className="font-semibold px-2 py-1 rounded-md bg-gray-100">
          {outputDetails?.time}
        </span>
      </div>
    </div>
  );
};

export default OutputDetails;
