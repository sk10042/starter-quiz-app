import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
	width: 390px;
	height: 26px;
`;

const Input = (props) => (
	<StyledInput
			type="text"
			placeholder="응시자 이름을 입력하세요"
			onChange={props.handleChange}>
		
	</StyledInput>
);
export default Input;
