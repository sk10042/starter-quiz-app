import React from "react";
import styled from "styled-components";
import { SURVEY } from "../../constants";

const QuestionSectionWrapper = styled.div`
	margin-bottom: 16px;
`;

const PageLabel = styled.h1`
	font-size: 16px;
	font-weight: bold;
	margin-bottom: 8px;
`;

const QuestionTitle = styled.div`
	font-size: 20px;
	margin-bottom: 8px;
`;

const QuestionSection = ({ currentNo }) => (
	<QuestionSectionWrapper>
		<PageLabel>
			<span>{SURVEY[currentNo].id}</span>/{SURVEY.length}
		</PageLabel>
		<QuestionTitle>{SURVEY[currentNo].question}</QuestionTitle>
	</QuestionSectionWrapper>
);
export default QuestionSection;
