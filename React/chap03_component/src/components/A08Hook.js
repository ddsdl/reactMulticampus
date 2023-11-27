import React from "react";

function A08Hook() {
  return (
    <div>
      <h3>A08. Reducer</h3>

      <div>
        Num: <input type="text" name="num" className="form-control" /><br />
        Str: <input type="text" name="str" className="form-control" /><br />

        Today: <br />
        <br />

        Avg:
        <div className="input-group">
          <input type="text" name="avg" className="form-control" />
          <button className="btn btn-outline-primary btn-sm">ADD</button>
        </div>
      </div>
    </div>
  );
}
export default A08Hook;
