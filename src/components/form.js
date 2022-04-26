import React, { Component } from 'react';
import {saveFile} from './function';
import './styles.css';
import { Link } from 'react-router-dom';
class Form extends Component {

  render() {
    function sayHello() {
    const name = document.getElementById('txtName');
    const age = document.getElementById('txtAge');
    const description = document.getElementById('msg');
    const medName = document.getElementById('medName');
    const dose = document.getElementById('doseName');
    const freq = document.getElementById('selDosageFreq');
    const days = document.getElementById('noDays');
    const follow = document.getElementById('selFollow');

    // This variable stores all the data.
    let data =
      '\r Name: ' +
      name.value +
      ' \r\n ' +
      'Age: ' +
      age.value +
      ' \r\n ' +
      'Description: ' +
      description.value +
      ' \r\n ' +
      'Medicine: ' +
      medName.value +
      ' \r\n ' +
      'Dosage: ' +
      dose.value +
      ' \r\n ' +
      'Frequency: ' +
      freq.value +
      ' \r\n ' +
      'No. of Days: ' +
      days.value +
      ' \r\n ' +
      'Follow Up: ' +
      follow.value;

    // Convert the text to BLOB.
    const textToBLOB = new Blob([data], { type: 'text/plain' });
    const sFileName = name.value+'.txt'; // The file to save the data.

    let newLink = document.createElement('a');
    newLink.download = sFileName;

    if (window.webkitURL != null) {
      newLink.href = window.webkitURL.createObjectURL(textToBLOB);
    } else {
      newLink.href = window.URL.createObjectURL(textToBLOB);
      newLink.style.display = 'none';
      document.body.appendChild(newLink);
    }

    newLink.click();
    }
    return (
     <div >
     <h1>Patient Form</h1>
      <div className="ip1">
        <input type="text" id="txtName" placeholder="Name" />
      </div>
      <div className="ip2">
        <input type="text" id="txtAge" placeholder="Age" />
      </div>
      <div className="Desc">
        <textarea
          id="msg"
          name="msg"
          placeholder="Description ..."
          style={{ height: '100px' }}
        ></textarea>
      </div>
      <div className="Medicine">
        <input type="text" id="medName" placeholder="Medicine name" />
        <input type="text" id="doseName" placeholder="Dosage" />
        <select id="selDosageFreq">
          <option selected value="">
            -- Frequency --
          </option>
          <option value="1-1-1">1-1-1</option>
          <option value="1-1-0">1-1-0</option>
          <option value="1-0-1">1-0-1</option>
          <option value="1-0-0">1-0-0</option>
          <option value="0-1-1">0-1-1</option>
          <option value="0-1-0">0-1-0</option>
          <option value="0-0-1">0-0-1</option>
        </select>
        <input type="text" id="noDays" placeholder="No. of days" />
      </div>
      <div id="selectFollow">
        <select id="selFollow">
        <option selected value="">
          --Follow Up--
        </option>
        <option value="After 1 week">After 1 week</option>
        <option value="After 2 weeks">After 2 weeks</option>
        <option value="After 3 weeks">After 3 weeks</option>
        <option value="After 1 month">After 1 month</option>
      </select>
      </div>
      <div className="btns">
        <button id="bt" onClick={sayHello}>
          Save Data to File!
        </button>
        <Link to="/"><input type="button" id="bt" value="Upload" /></Link>
      </div>
    </div>
    );
  }
}

export default Form;