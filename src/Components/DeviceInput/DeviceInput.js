import React, { useState } from "react";
import { Input, Button, FormGroup, Label, FormText } from "reactstrap";
import QRScanner from "../../utils/QRScanner.js";

const DeviceIdInput = ({ value, onChange, error }) => {
  const [manualEntry, setManualEntry] = useState(false);
  const [scanActive, setScanActive] = useState(false);

  return (
    <FormGroup>
      <Label className="d-flex justify-content-between align-items-center">
        Device ID *

        {/* Toggle */}
        <div style={{ fontSize: "12px" }}>
          Manual
          <input
            type="checkbox"
            style={{ marginLeft: "8px" }}
            checked={manualEntry}
            onChange={() => {
              setManualEntry(!manualEntry);
              setScanActive(false);
            }}
          />
        </div>
      </Label>

      {/* Input */}
      <Input
        value={value}
        disabled={!manualEntry}
        onChange={(e) => onChange(e.target.value)}
        placeholder={
          manualEntry
            ? "Enter Device ID"
            : "Use scanner to fill Device ID"
        }
      />

      {/* Buttons */}
      <div className="mt-2 d-flex gap-2">
        <Button
          color="primary"
          size="sm"
          disabled={manualEntry}
          onClick={() => setScanActive(true)}
        >
          📷 Scan
        </Button>

        <Button
          color="secondary"
          size="sm"
          onClick={() => {
            onChange("");
            setScanActive(false);
          }}
        >
          🔄 Reset
        </Button>
      </div>

      {error && <FormText color="danger">{error}</FormText>}

      {/* Scanner Modal */}
      {scanActive && !manualEntry && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.8)",
            zIndex: 9999,
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <div
            style={{
              background: "#fff",
              padding: "10px",
              borderRadius: "10px",
              width: "320px"
            }}
          >
            <QRScanner
              active={scanActive}
              onScan={(data) => {
                onChange(data);
                setTimeout(() => setScanActive(false), 200);
              }}
            />

            <Button
              color="danger"
              size="sm"
              className="mt-2 w-100"
              onClick={() => setScanActive(false)}
            >
              Close
            </Button>
          </div>
        </div>
      )}
    </FormGroup>
  );
};

export default DeviceIdInput;