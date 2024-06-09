import React from "react";

function HelpPage() {
  return (
    <div className="w-full h-full flex flex-col flex-1 p-5  bg-gradient-to-br from-white/50  to-white/30 backdrop-blur-sm  rounded-r-3xl">
      <span className=" font-semibold pb-5 text-3xl">HelpPage</span>
      <div className="overflow-auto">
        <div className="bg-white/80 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Result Management</h2>
          <p className="mb-4">
            This section provides assistance with managing results. It includes
            features such as adding, updating, and deleting results.
          </p>
          <h3 className="text-lg font-semibold mb-2">Add Result</h3>
          <p className="mb-4">
            To add a new result, navigate to the "Add Result" page and fill in
            the required information such as student details, marks, etc. Then
            submit the form to save the result.
          </p>
          <h3 className="text-lg font-semibold mb-2">Update Result</h3>
          <p className="mb-4">
            To update an existing result, navigate to the "Update Result" page
            and search for the result you want to update. Then make the
            necessary changes and submit the form to save the updates.
          </p>
          <h3 className="text-lg font-semibold mb-2">Delete Result</h3>
          <p className="mb-4">
            To delete a result, navigate to the "Delete Result" page and search
            for the result you want to delete. Then confirm the deletion to
            remove the result from the system.
          </p>
        </div>
        <div className="bg-white/80 mt-6 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Regulation Management</h2>
          <p className="mb-4">
            This section provides assistance with managing regulations. It
            includes features such as adding and deleting regulations.
          </p>
          <h3 className="text-lg font-semibold mb-2">Add Regulation</h3>
          <p className="mb-4">
            To add a new regulation, navigate to the "Add Regulation" page and
            fill in the required information such as regulation name, code, etc.
            Then submit the form to save the regulation.
          </p>
          <h3 className="text-lg font-semibold mb-2">Delete Regulation</h3>
          <p className="mb-4">
            To delete a regulation, navigate to the "Delete Regulation" page and
            select the regulation you want to delete. Then confirm the deletion
            to remove the regulation from the system.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HelpPage;
