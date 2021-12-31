import React from "react";
import styled from "styled-components";
import { SURVEY } from "../../constants";
import Button from "../Button";

const AnswerGroupWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-bottom: 8px;
`;

const AnswerGroup = ({ currentNo, handleClick }) => (
	<AnswerGroupWrapper>
		{SURVEY[currentNo].answers.map((answer) => (
			<Button
				key={answer.text}
				text={answer.text}
				onClick={() => handleClick(answer.agree, SURVEY[currentNo].id)}
			></Button>
		))}
	</AnswerGroupWrapper>
);
export default AnswerGroup;
