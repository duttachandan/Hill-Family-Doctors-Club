import React from "react";

const modal = (error, text) => {
  return (
    <div className="modal" tabindex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{error ? error : text}</h5>
          </div>
          <div className="modal-footer">
            {error ? (
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            ) : (
              <button type="button" className="btn btn-success">
                Success
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default modal;
