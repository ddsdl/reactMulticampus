import React from 'react'
import $ from 'jquery'

$(function () {
  $('#jquery').click(function (evt) {
    const result = $('#qty').val() * $('#cost').val();
    $('#total').html(result);
  })
});

function A04Library() {

  const getTotal = () => {
    const result = $('#qty').val() * $('#cost').val();
    $('#total').html(result);
  };

  return (
    <div className="mb-4">
      <h3>A04Library</h3>

      <>
        <div className="form-group mb-3">
          <label htmlFor="qty" className="form-label">QTY</label>
          <input type="text" id='qty' name="qty" className="form-control" />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="cost" className="form-label">COST</label>
          <input type="text" id='cost' name="cost" className="form-control" />
        </div>
        <div>
          Total: <span id="total"></span>
        </div>
        <div>
          <button id="jquery">jquery</button>
          <button onClick={getTotal}>React</button>
        </div>
      </>
    </div>
  )
}

export default A04Library
