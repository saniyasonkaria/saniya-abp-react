import React, { useEffect, useState } from "react";
import { RdsButton, RdsCheckbox, RdsDropdownList, RdsInput, RdsLabel, RdsSelectList, RdsTextArea } from "../rds-elements";

export interface RdsCompFormsBasicProps {
	basicInfo:any,
}

const RdsCompFormsBasic = (props: RdsCompFormsBasicProps) => {
	
	const [basicFormData, setBasicFormData] = useState(props.basicInfo);
	function setDescription(value: any) {
		setBasicFormData({ ...basicFormData, description: value })
	}
	function setTitle(value: any) {
		setBasicFormData({ ...basicFormData, title: value })
	}

	useEffect(() => {
		debugger
		setBasicFormData(props.basicInfo)
		console.log(basicFormData,"basicFormData");
		
	},[props.basicInfo])
	return (
		<>
		<form >
				{/* <div className="row">
					<RdsInput
						label="Title"
						placeholder="Enter title"
						inputType="text"
						onChange={(e: any) => setTitle(e.target.value)}
						value={basicFormData.title}
						name={"title"}
						required={true}
					></RdsInput>
				</div>
				<div className="row">
					<RdsTextArea
						label="Description"
						placeholder="Enter description"
						onChange={e => setDescription(e.target.value)}
						value={basicFormData.description}
						rows={3}
					/>
				</div> */}
				{/* {basicFormData.id && (
				<> */}
				<div className="row">
					<div className="col-4">
					<RdsInput
						label="Title"
						placeholder="Enter title"
						inputType="text"
						onChange={(e: any) => setTitle(e.target.value)}
						value={basicFormData.title}
						name={"title"}
						required={true}
					></RdsInput>
					</div>
					<div className="col-8">
					<RdsTextArea
						label="Description"
						placeholder="Enter description"
						onChange={e => setDescription(e.target.value)}
						value={basicFormData.description}
						rows={1}
					/>
					</div>
				</div>
				{/* </>)

				} */}
			</form>

		</>
	);
};
export default RdsCompFormsBasic;