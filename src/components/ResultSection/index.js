import React from "react";
import styled from "styled-components";

const ResultTitle = styled.h1`
	font-size: 24px;
	font-weight: bold;
	margin: 8px 0px;
	text-align: center;
`;

const Score = styled.p`
	font-size: 39px;
	margin: 10px;
	text-align: center;
	color: ${(props) => props.theme.primaryColor100};
`;

const ResultSection = ({ convertedScore, userName}) => (
	<>
		<ResultTitle>{userName}님은 커피를 이만큼 좋아합니다! (100점만점)</ResultTitle>
		<Score>{convertedScore} 점</Score>
	</>
);
export default ResultSection;
