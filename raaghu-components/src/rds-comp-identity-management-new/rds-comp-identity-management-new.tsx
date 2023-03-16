import React, { useState, useEffect } from "react";
import { RdsButton, RdsCheckbox, RdsInput, RdsLabel } from "raaghu-react-elements";

export interface RdsCompIdentityManagementProps {
  handleIdentity: any;
  lockoutSettings: any;
  passwordSettings: any;
  signSettings: any;
  userSettings: any;
}

const RdsCompIdentityManagement = (props: RdsCompIdentityManagementProps) => {
  const [lockoutSettings, setLockoutSettings] = useState(props.lockoutSettings);
  const [passwordSettings, setPasswordSettings] = useState(props.passwordSettings);
  console.log("password Settings", passwordSettings);

  const [signSettings, setSignSettings] = useState(props.signSettings);

  const [userSettings, setUserSettings] = useState(props.userSettings);

  useEffect(() => {
    setLockoutSettings(props.lockoutSettings);
    setPasswordSettings(props.passwordSettings);
    setSignSettings(props.signSettings);
    setUserSettings(props.userSettings)
  }, [props]);


  const handleIdentity = (event: any) => {
    event.preventDefault();
    console.log("formData is");
  };
  function setLenght(value: any) {
    setPasswordSettings({ ...passwordSettings, requiredLength: value });
  }
  function setNumber(value: any) {
    setPasswordSettings({ ...passwordSettings, requiredUniqueChars: value });
  }
  function setNonAlphaNumeric(value: boolean) {
    setPasswordSettings({ ...passwordSettings, requireNonAlphanumeric: value });
  }
  function setUpperCase(value: boolean) {
    setPasswordSettings({ ...passwordSettings, requireUppercase: value });
  }
  function setLowerCase(value: boolean) {
    setPasswordSettings({ ...passwordSettings, requireLowercase: value });
  }
  function setReqNumber(value: boolean) {
    setPasswordSettings({ ...passwordSettings, requireDigit: value });
  }
  function setLockDuration(value: any) {
    setLockoutSettings({ ...lockoutSettings, lockoutDuration: value });
  }
  function setAccessAttempts(value: any) {
    setLockoutSettings({ ...lockoutSettings, maxFailedAccessAttempts: value });
  }
  function setReqEmail(value: boolean) {
    setSignSettings({ ...signSettings, requireConfirmedEmail: value });
  }
  function setAllowUsers(value: boolean) {
    setSignSettings({ ...signSettings, enablePhoneNumberConfirmation: value });
  }
  function setReqPhoneNumber(value: boolean) {
    setSignSettings({ ...signSettings, requireConfirmedPhoneNumber: value });
  }
  function changeEmail(value: boolean) {
    setUserSettings({ ...userSettings, isEmailUpdateEnabled: value });
  }
  function changeUserNames(value: boolean) {
    setUserSettings({ ...userSettings, isUserNameUpdateEnabled: value });
  }
  function enabledNewUsers(value: boolean) {
    setLockoutSettings({ ...lockoutSettings, allowedForNewUsers: value });
  }
  return (
    <div className="pt-4">
      <form onSubmit={handleIdentity}>
        {/* Password Settings */}
        <div className="border-bottom text-muted fw-bold">
          <RdsLabel label="Password Settings"></RdsLabel>
        </div>
        <div className="row mt-3">
          <div className="col-md-4">
            <div className="form-group">
              <RdsInput
                size="medium"
                inputType="text"
                isDisabled={false}
                label="Required Length (Min)"
                readonly={false}
                placeholder="Enter Length"
                required={true}
                value={passwordSettings.requiredLength}
                onChange={(e: any) => {
                  setLenght(e.target.value);
                }}
              ></RdsInput>
            </div>
          </div>
          <div className="col-md-4 sm-p-0 ">
            <div className="form-group">
              <RdsInput
                size="medium"
                inputType="text"
                isDisabled={false}
                readonly={false}
                label="Required Special Characters (Min)"
                placeholder="Enter Number"
                required={true}
                value={passwordSettings.requiredUniqueChars}
                onChange={(e: any) => setNumber(e.target.value)}
              ></RdsInput>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <RdsCheckbox
              label="Required Non Alpha Numeric Characters"
              checked={passwordSettings.requireNonAlphanumeric}
              onChange={(e: any) => {
                setNonAlphaNumeric(e.target.checked);
              }}
            ></RdsCheckbox>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 mt-3">
            <RdsCheckbox
              label="Required Upper Case"
              checked={passwordSettings.requireUppercase}
              onChange={(e: any) => {
                setUpperCase(e.target.checked);
              }}
            ></RdsCheckbox>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 mt-3">
            <RdsCheckbox
              label="Required Lower Case"
              checked={passwordSettings.requireLowercase}
              onChange={(e: any) => {
                setLowerCase(e.target.checked);
              }}
            ></RdsCheckbox>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 mt-3">
            <RdsCheckbox
              label="Required Numbers"
              checked={passwordSettings.requireDigit}
              onChange={(e: any) => {
                setReqNumber(e.target.checked);
              }}
            ></RdsCheckbox>
          </div>
        </div>
        {/* Lockout Settings */}
        <div className="border-bottom text-muted mt-4 fw-bold">
          <RdsLabel label="Lockout Settings"></RdsLabel>
        </div>
        <div className="row">
          <div className="col-md-12 mt-4">
            <RdsCheckbox
              label="Enabled for new users (Whether a new user can be locked out.)"
              checked={lockoutSettings.allowedForNewUsers}
              onChange={(e: any) => {
                enabledNewUsers(e.target.checked);
              }}
            ></RdsCheckbox>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-4 sm-p-0">
            <div className="form-group ">
              <RdsInput
                size="medium"
                inputType="number"
                isDisabled={false}
                readonly={false}
                label="Lockout Duration (Seconds) "
                placeholder="Enter Length"
                required={true}
                value={lockoutSettings.lockoutDuration}
                onChange={(e: any) => setLockDuration(e.target.value)}
              ></RdsInput>
            </div>
          </div>
          <div className="col-md-4 sm-p-0">
            <div className="form-group">
              <RdsInput
                size="medium"
                inputType="text"
                isDisabled={false}
                label="Max Failed Access Attempts "
                readonly={false}
                placeholder="Enter Name"
                required={true}
                value={lockoutSettings.maxFailedAccessAttempts}
                onChange={(e: any) => setAccessAttempts(e.target.value)}
              ></RdsInput>
            </div>
          </div>
        </div>

        {/* Signin Settings */}
        <div className="border-bottom text-muted mt-2 fw-bold">
          <RdsLabel label="Signin Settings"></RdsLabel>
        </div>
        <div className="row">
          <div className="col-md-12 mt-4">
            <RdsCheckbox
              label="Require confirmed email  (Whether a confirmed email address is required to sign in.) "
              checked={signSettings.requireConfirmedEmail}
              onChange={(e: any) => {
                setReqEmail(e.target.checked);
              }}
            ></RdsCheckbox>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 mt-3">
            <RdsCheckbox
              label="Allow users to confirm their phone number  (Whether the phoneNumber can be confirmed by the user.)"
              checked={signSettings.enablePhoneNumberConfirmation}
              onChange={(e: any) => {
                setAllowUsers(e.target.checked);
              }}
            ></RdsCheckbox>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 mt-3">
            <RdsCheckbox
              label="Require confirmed phone number  (Whether a confirmed telephone number is required to sign in)."
              checked={signSettings.requireConfirmedPhoneNumber}
              onChange={(e: any) => {
                setReqPhoneNumber(e.target.checked);
              }}
            ></RdsCheckbox>
          </div>
        </div>
        {/* User Settings */}
        <div className="border-bottom text-muted mt-4 fw-bold">
          <RdsLabel label="User Settings"></RdsLabel>
        </div>
        <div className="row">
          <div className="col-md-12 mt-4">
            <RdsCheckbox
              label="Allow users to change their email addresses  (Whether the email can be updated by the user.)"
              checked={userSettings.isEmailUpdateEnabled}
              onChange={(e: any) => {
                changeEmail(e.target.checked);
              }}
            ></RdsCheckbox>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 mt-3 mb-4">
            <RdsCheckbox
              label="Allow users to change their usernames  (Whether the username can be updated by the user.)"
              checked={userSettings.isUserNameUpdateEnabled}
              onChange={(e: any) => {
                changeUserNames(e.target.checked);
              }}
            ></RdsCheckbox>
          </div>
        </div>
        <div className=" justify-content-end d-flex bottom-0 pt-0 ">
          <RdsButton
            class="me-2"
            label="CANCEL"
            type="button"
            isOutline={true}
            colorVariant="primary"
            size="small"
          ></RdsButton>
          <RdsButton
            class="me-2"
            label="SAVE"
            type="submit"
            onClick={() => { props.handleIdentity({ lockout: lockoutSettings, user: userSettings, signIn: signSettings, password: passwordSettings }) }}
            isOutline={false}
            colorVariant="primary"
            size="small"
          ></RdsButton>
        </div>
      </form>
    </div>
  );
};

export default RdsCompIdentityManagement;
