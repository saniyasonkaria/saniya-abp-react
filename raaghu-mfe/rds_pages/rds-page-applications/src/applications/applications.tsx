import React, { useEffect, useState } from "react";
import {
  RdsButton,
  RdsCheckbox,
  RdsNavtabs,
  RdsOffcanvas,
  RdsInput
} from "../../../rds-elements";
import {
  RdsCompAlertPopup,
  RdsCompDatatable,
  RdsCompApplicationBasic
} from "../../../rds-components";

import {
  useAppDispatch,
  useAppSelector,
} from "../../../../libs/state-management/hooks";
import { fetchApplications, deleteApplications, saveApplications, getScopes, getApplications, updateApplications } from "../../../../libs/state-management/applications/applications-slice";

const Applications = () => {
  const dispatch = useAppDispatch();
  const application = useAppSelector((state) => state.persistedReducer.applications);
  const [applicationId, setApplicationId] = useState("")
  const [editApplicationData, setEditApplicationData] = useState<any>(
    {
      clientId: '',
      displayName: '',
      clientUri: '',
      logoUri: '',
      allowAuthorizationCodeFlow: false,
      allowDeviceEndpoint: false,
      allowImplicitFlow: false,
      allowHybridFlow: false,
      allowPasswordFlow: false,
      allowClientCredentialsFlow: false,
      allowRefreshTokenFlow: false,
      type: '',
      scopes: ''
    });

  useEffect(() => {
    dispatch(fetchApplications() as any);
    dispatch(getScopes() as any);
  }, [dispatch]);

  useEffect(() => {
    let tempData: any[] = [];
    if (application.applications?.items) {
      application.applications.items.map((e: any) => {
        const item = {
          id: e.id,
          clientId: e.clientId,
          displayName: e.displayName,
          type: e.type
        }
        tempData.push(item);
      })
      setApplicationData(tempData)
    }
  }, [application.applications]);

  useEffect(() => {
    let tempScopes: any[] = [];
    if (application.scopes && application.scopes.length > 0) {
      
      application.scopes.map((e: any) => {
        const item = {
          option: e.name,
          value: e.name
        }
        tempScopes.push(item);
      })
      setScopesListData(tempScopes);
    }
  }, [application.scopes]);

  useEffect(() => {
    
    
    if (application.editApplication) {
      const tempData = {...application.editApplication}
      setEditApplicationData(tempData)
      //console.log(tempData, "EditApplicationData");
    }
  }, [application.editApplication]);

  const [tableDataId, setTableDataRowId] = useState(0);
  const scopeSelection = (
    clickEvent: any,
    tableDataRow: any,
    tableDataRowIndex: number,
    action: { displayName: string; id: string }
  ) => {
    
    setTableDataRowId(tableDataRowIndex);
    const tempApplicationId = String(tableDataRowIndex)
    setApplicationId(tempApplicationId)
    dispatch(getApplications(tempApplicationId) as any);
  };
  function onDeleteHandler(e: any) {
    const tableDataIndex = String(tableDataId)
    dispatch(deleteApplications(tableDataIndex) as any).then((res: any) => {
      dispatch(fetchApplications() as any);
    })
    e.preventDefault();
  }

  function handleApplicationSubmit(basicApplicationData: any) {
    dispatch(saveApplications(basicApplicationData) as any);
    setBasicApplicationData({
      clientId: '',
      displayName: '',
      clientUri: '',
      logoUri: '',
      allowAuthorizationCodeFlow: false,
      allowDeviceEndpoint: false,
      allowImplicitFlow: false,
      allowHybridFlow: false,
      allowPasswordFlow: false,
      allowClientCredentialsFlow: false,
      allowRefreshTokenFlow: false,
      type: '',
      scopes: ''
    })
  }

  function handleEditSubmit(data: any) {
    
    const payload = {
      id:applicationId,
      body:data
    }
    console.log(data , 'editApplicationData');
    dispatch(updateApplications(payload) as any);
  }

  const tableHeaders = [
    {
      displayName: "Client Id",
      key: "clientId",
      datatype: "text",
      dataLength: 30,
      required: true,
      sortable: true,
    },
    {
      displayName: "Display Name",
      key: "displayName",
      datatype: "text",
      dataLength: 30,
      required: true,
      sortable: true,
    },
    {
      displayName: "Type",
      key: "type",
      datatype: "text",
      dataLength: 30,
      required: true,
      sortable: true,
    }
  ];

  const actions = [
    { id: "delete", displayName: "Delete", modalId: "Delete" },
    { id: "edit", displayName: "Edit", offId: "Edit" },
  ];
  const navtabsItems = [
    { label: "Applications Information", tablink: "#nav-home", id: 0 },
    { label: "Permissions", tablink: "#nav-profile", id: 1 },
  ];

  const navtabsEditItems = [
    { label: "Applications Information", tablink: "#nav-home", id: 0 },
    { label: "Permissions", tablink: "#nav-profile", id: 1 },
  ];
  const [basicApplicationData, setBasicApplicationData] = useState<any>({
    clientId: '',
    displayName: '',
    type: '',
    clientSecret: '',
    consentType: '',
    postLogoutRedirectUris: [],
    redirectUris: [],
    allowPasswordFlow: false,
    allowClientCredentialsFlow: false,
    allowAuthorizationCodeFlow: false,
    allowRefreshTokenFlow: false,
    allowHybridFlow: false,
    allowImplicitFlow: false,
    allowLogoutEndpoint: false,
    allowDeviceEndpoint: false,
    scopes: [],
    clientUri: '',
    logoUri: '',
  })
  const [applicationData, setApplicationData] = useState<any>(
    {
      id: '',
      clientId: '',
      displayName: '',
      type: '',
    });
  
  const [scopesListData, setScopesListData] = useState<any>([]);
  const offCanvasHandler = () => { };
  const [activeNavTabId, setActiveNavTabId] = useState(0);
  const [activeNavTabEditId, setActiveNavTabEditId] = useState(0);

  const [showNextTab, setShowNextTab] = useState(false);
  const typeList: any[] = [
    { option: 'Confidential client', value: 'confidential' },
    { option: 'Public client', value: 'public' },
  ];

  const consentType :any[] = [
    { option: 'Explicit consent', value: 'explicit' },
    { option: 'External consent', value: 'external' },
    { option: 'Implicit consent', value: 'implicit' },
    { option: 'Systematic consent', value: 'systematic' },
  ]
  return (
    <>
      <div className="row">
        <div className="col-md-12 d-flex justify-content-end mb-3">
          <RdsOffcanvas
            canvasTitle={"NEW APPLICATION"}
            onclick={offCanvasHandler}
            placement="end"
            offcanvaswidth={650}
            offcanvasbutton={
              <div className="d-flex justify-content-end">
                <RdsButton
                  type={"button"}
                  size="small"
                  label="NEW APPLICATION"
                  icon="plus"
                  iconColorVariant="light"
                  iconFill={false}
                  iconStroke={true}
                  iconHeight="15px"
                  iconWidth="15px"
                  colorVariant="primary"
                  class="me-2"
                ></RdsButton>
              </div>
            }
            backDrop={false}
            scrolling={false}
            preventEscapeKey={false}
            offId="application"
          >
            <RdsNavtabs
              navtabsItems={navtabsItems}
              type="tabs"
              isNextPressed={showNextTab}
              activeNavTabId={activeNavTabId}
              activeNavtabOrder={(activeNavTabId) => {
                setActiveNavTabId(activeNavTabId), setShowNextTab(false);
              }}
            />
            {activeNavTabId == 0 && showNextTab === false && (
              <RdsCompApplicationBasic handleSubmit={(basicApplicationData: any) => { handleApplicationSubmit(basicApplicationData) }} basicData={basicApplicationData} typeList={typeList} scopesList={scopesListData} consentType={consentType}></RdsCompApplicationBasic>
            )}
            {(activeNavTabId == 1 || showNextTab == true) && (
              // <RdsCompNewClaimType></RdsCompNewClaimType>
              <></>
            )}
          </RdsOffcanvas>
        </div>

        <div className="col-md-12 mb-3">
          <div className="card p-2 h-100 border-0 rounded-0 card-full-stretch">
            <RdsCompDatatable
              tableHeaders={tableHeaders}
              tableData={applicationData}
              actions={actions}
              pagination={true}
              recordsPerPage={5}
              recordsPerPageSelectListOption={true}
              onActionSelection={scopeSelection}
            ></RdsCompDatatable>
            <RdsOffcanvas
              canvasTitle={"Edit APPLICATION"}
              onclick={offCanvasHandler}
              placement="end"
              offcanvaswidth={650}
              backDrop={false}
              scrolling={false}
              preventEscapeKey={false}
              offId="Edit"
            >
              <RdsNavtabs
                navtabsItems={navtabsEditItems}
                type="tabs"
                isNextPressed={showNextTab}
                activeNavTabId={activeNavTabEditId}
                activeNavtabOrder={(activeNavTabEditId) => {
                  setActiveNavTabEditId(activeNavTabEditId), setShowNextTab(false);
                }}
              />
              {activeNavTabEditId == 0 && showNextTab === false && (
                <RdsCompApplicationBasic handleSubmit={(editApplicationData: any) => { handleEditSubmit(editApplicationData) }} basicData={editApplicationData} typeList={typeList} scopesList={scopesListData} consentType={consentType} ></RdsCompApplicationBasic>
              )}
              {(activeNavTabEditId == 1 || showNextTab == true) && (
                // <RdsCompNewClaimType></RdsCompNewClaimType>
                <></>
              )}
            </RdsOffcanvas>
            <RdsCompAlertPopup alertID="Delete" onSuccess={onDeleteHandler} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Applications;
